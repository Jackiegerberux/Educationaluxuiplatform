import React, { useState, useMemo } from 'react';
import { useLanguage } from '../layout/LanguageContext';
import { motion, AnimatePresence } from 'motion/react';
import {
  Filter, Plus, Trash2, Copy, Check, AlertTriangle,
  Target, TrendingDown, Zap, ArrowDown,
  Beaker, ShieldAlert, Lightbulb, BarChart3
} from 'lucide-react';
import { copyToClipboard } from '../../utils/clipboard';

interface FunnelStep {
  id: string;
  name: string;
  users: number;
}

interface FunnelAnalysis {
  steps: Array<{
    name: string;
    users: number;
    conversionFromPrev: number | null;
    dropOff: number | null;
    isFriction: boolean;
  }>;
  worstStepIndex: number;
  hypothesis: { en: string; es: string };
  overallConversion: number;
  hasHighDropOff: boolean;
}

let nextStepId = 1;
const makeStepId = () => `step-${nextStepId++}`;

const defaultSteps: FunnelStep[] = [
  { id: makeStepId(), name: '', users: 10000 },
  { id: makeStepId(), name: '', users: 0 },
  { id: makeStepId(), name: '', users: 0 },
  { id: makeStepId(), name: '', users: 0 },
];

function generateHypothesis(worstStepName: string, prevStepName: string, dropOff: number): { en: string; es: string } {
  return {
    en: `"If we reduce friction between "${prevStepName}" and "${worstStepName}" (currently ${dropOff.toFixed(0)}% drop-off), we hypothesize that [proposed UX change] will improve conversion by [target]% within [timeframe], measured by [metric]."`,
    es: `"Si reducimos la fricción entre "${prevStepName}" y "${worstStepName}" (actualmente ${dropOff.toFixed(0)}% de abandono), hipotetizamos que [cambio UX propuesto] mejorará la conversión en [objetivo]% dentro de [plazo], medido por [métrica]."`
  };
}

export function FunnelBuilder() {
  const { t } = useLanguage();

  const [goal, setGoal] = useState('');
  const [activationEvent, setActivationEvent] = useState('');
  const [targetMetric, setTargetMetric] = useState(60);
  const [steps, setSteps] = useState<FunnelStep[]>(defaultSteps);
  const [showAnalysis, setShowAnalysis] = useState(false);
  const [copied, setCopied] = useState(false);

  const updateStep = (id: string, field: keyof FunnelStep, value: string | number) => {
    setSteps(prev => prev.map(s => s.id === id ? { ...s, [field]: value } : s));
  };

  const addStep = () => {
    if (steps.length >= 8) return;
    setSteps(prev => [...prev, { id: makeStepId(), name: '', users: 0 }]);
  };

  const removeStep = (id: string) => {
    if (steps.length <= 4) return;
    setSteps(prev => prev.filter(s => s.id !== id));
  };

  const validSteps = steps.filter(s => s.name.trim());
  const canAnalyze = goal.trim() && activationEvent.trim() && validSteps.length >= 4 && steps[0].users > 0;

  const analysis: FunnelAnalysis | null = useMemo(() => {
    if (!showAnalysis || validSteps.length < 4) return null;

    let worstIdx = -1;
    let worstDropOff = 0;

    const analyzed = validSteps.map((step, idx) => {
      if (idx === 0) {
        return {
          name: step.name,
          users: step.users,
          conversionFromPrev: null,
          dropOff: null,
          isFriction: false,
        };
      }

      const prevUsers = validSteps[idx - 1].users;
      const conv = prevUsers > 0 ? (step.users / prevUsers) * 100 : 0;
      const drop = 100 - conv;

      if (drop > worstDropOff && prevUsers > 0) {
        worstDropOff = drop;
        worstIdx = idx;
      }

      return {
        name: step.name,
        users: step.users,
        conversionFromPrev: conv,
        dropOff: drop,
        isFriction: false,
      };
    });

    if (worstIdx >= 0) {
      analyzed[worstIdx].isFriction = true;
    }

    const topUsers = validSteps[0].users;
    const bottomUsers = validSteps[validSteps.length - 1].users;
    const overallConversion = topUsers > 0 ? (bottomUsers / topUsers) * 100 : 0;

    const hasHighDropOff = analyzed.some(s => s.dropOff !== null && s.dropOff > 40);

    const hypo = worstIdx >= 0
      ? generateHypothesis(analyzed[worstIdx].name, analyzed[worstIdx - 1].name, worstDropOff)
      : { en: 'No significant friction point detected.', es: 'No se detectó punto de fricción significativo.' };

    return {
      steps: analyzed,
      worstStepIndex: worstIdx,
      hypothesis: hypo,
      overallConversion,
      hasHighDropOff,
    };
  }, [showAnalysis, validSteps]);

  const handleAnalyze = () => {
    if (!canAnalyze) return;
    setShowAnalysis(true);
  };

  const handleCopy = () => {
    if (!analysis) return;

    const lines: string[] = [
      `Experiment Brief`,
      `================`,
      ``,
      `Product Goal: ${goal}`,
      `Activation Event: ${activationEvent}`,
      `Target Conversion: ${targetMetric}%`,
      `Generated: ${new Date().toLocaleDateString()}`,
      ``,
      `FUNNEL ANALYSIS`,
      `───────────────`,
      ...analysis.steps.map((s, i) =>
        i === 0
          ? `Stage ${i + 1}: ${s.name} — ${s.users.toLocaleString()} users (top of funnel)`
          : `Stage ${i + 1}: ${s.name} — ${s.users.toLocaleString()} users (${s.conversionFromPrev?.toFixed(1)}% conversion, ${s.dropOff?.toFixed(1)}% drop-off)${s.isFriction ? ' ← BIGGEST FRICTION' : ''}`
      ),
      ``,
      `Overall Conversion: ${analysis.overallConversion.toFixed(1)}%`,
      ``,
      `EXPERIMENT HYPOTHESIS`,
      `─────────────────────`,
      t(analysis.hypothesis),
      ``,
      `RECOMMENDED NEXT STEPS`,
      `──────────────────────`,
      `1. Investigate the friction stage qualitatively (session recordings, user interviews)`,
      `2. Design 2-3 potential solutions`,
      `3. Run a Design Sprint to validate the most promising solution`,
      `4. Set up A/B test: Control (current) vs Treatment (new design)`,
      `5. Pre-define: sample size, duration (min 2 weeks), success metric`,
      `6. Ship or iterate based on statistical significance (p < 0.05)`,
    ];

    if (analysis.hasHighDropOff) {
      lines.push('', `⚠ WARNING: One or more stages show >40% drop-off. This funnel has critical friction that should be addressed before scaling acquisition.`);
    }

    copyToClipboard(lines.join('\n'));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Visual funnel bar width percentage
  const maxUsers = steps[0]?.users || 1;

  return (
    <div className="w-full max-w-6xl mx-auto space-y-8 mt-12">
      {/* Header */}
      <div className="text-center space-y-3">
        <div className="flex items-center justify-center gap-3">
          <Filter className="size-8 text-pink-400" />
          <h3 className="text-3xl font-bold text-white">
            {t({ en: 'Funnel Builder', es: 'Constructor de Funnel' })}
          </h3>
        </div>
        <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
          {t({
            en: 'Model your user journey funnel, identify the biggest friction stage, and generate an experiment hypothesis to improve conversion.',
            es: 'Modela tu funnel de journey de usuario, identifica la mayor etapa de fricción y genera una hipótesis de experimento para mejorar conversión.'
          })}
        </p>
      </div>

      {/* Input Section */}
      <div className="bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 border border-zinc-800 rounded-2xl p-6 space-y-5">
        {/* Product Goal */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Target className="size-5 text-pink-400" />
            <h4 className="text-lg font-semibold text-white">
              {t({ en: 'Product Goal', es: 'Objetivo de Producto' })}
            </h4>
          </div>
          <textarea
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            placeholder={t({
              en: 'e.g., Increase feature adoption from 12% to 30% in 6 months',
              es: 'ej., Aumentar adopción de features de 12% a 30% en 6 meses'
            })}
            rows={2}
            className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-pink-500 transition-colors resize-none"
          />
        </div>

        {/* Activation Event & Target */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-semibold text-zinc-300 flex items-center gap-2 mb-2">
              <Zap className="size-4 text-pink-400" />
              {t({ en: 'Activation Event', es: 'Evento de Activación' })}
            </label>
            <input
              type="text"
              value={activationEvent}
              onChange={(e) => setActivationEvent(e.target.value)}
              placeholder={t({
                en: 'e.g., Completed first bulk operation',
                es: 'ej., Completó primera operación bulk'
              })}
              className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-pink-500 transition-colors"
            />
          </div>
          <div>
            <label className="text-sm font-semibold text-zinc-300 flex items-center gap-2 mb-2">
              <BarChart3 className="size-4 text-pink-400" />
              {t({ en: 'Target Conversion %', es: '% Conversión Objetivo' })}
            </label>
            <div className="flex items-center gap-3">
              <input
                type="range"
                min={10}
                max={95}
                step={5}
                value={targetMetric}
                onChange={(e) => setTargetMetric(Number(e.target.value))}
                className="flex-1 h-1.5 bg-zinc-700 rounded-full appearance-none cursor-pointer accent-pink-500 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-3.5 [&::-webkit-slider-thumb]:w-3.5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-pink-400"
              />
              <span className="text-lg font-mono font-bold text-pink-300 w-14 text-right">{targetMetric}%</span>
            </div>
          </div>
        </div>

        {/* Journey Steps */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-sm font-semibold text-zinc-300 flex items-center gap-2">
              <TrendingDown className="size-4 text-pink-400" />
              {t({ en: 'User Journey Steps', es: 'Pasos del Journey de Usuario' })}
              <span className="text-xs text-zinc-500">({steps.length}/8, min 4)</span>
            </h4>
            {steps.length < 8 && (
              <button
                onClick={addStep}
                className="text-xs px-3 py-1.5 bg-pink-600/20 hover:bg-pink-600/30 text-pink-300 rounded-lg border border-pink-500/30 transition-colors flex items-center gap-1.5"
              >
                <Plus className="size-3" />
                {t({ en: 'Add Step', es: 'Agregar Paso' })}
              </button>
            )}
          </div>

          <div className="space-y-3">
            {steps.map((step, idx) => (
              <div key={step.id} className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-4">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                  <span className="text-xs font-bold text-zinc-600 w-5 text-center shrink-0">{idx + 1}</span>
                  <input
                    type="text"
                    value={step.name}
                    onChange={(e) => updateStep(step.id, 'name', e.target.value)}
                    placeholder={
                      idx === 0
                        ? t({ en: 'e.g., Website Visitors', es: 'ej., Visitantes del Sitio' })
                        : idx === steps.length - 1
                        ? t({ en: 'e.g., Retained Day 30', es: 'ej., Retenidos Día 30' })
                        : t({ en: `Step ${idx + 1} name...`, es: `Nombre del paso ${idx + 1}...` })
                    }
                    className="flex-1 min-w-0 px-3 py-2 bg-zinc-950/50 border border-zinc-700 rounded-lg text-white text-sm placeholder-zinc-600 focus:outline-none focus:border-pink-500 transition-colors"
                  />
                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <label className="text-xs text-zinc-500 shrink-0">
                      {t({ en: 'Users:', es: 'Usuarios:' })}
                    </label>
                    <input
                      type="number"
                      min={0}
                      value={step.users || ''}
                      onChange={(e) => updateStep(step.id, 'users', Math.max(0, parseInt(e.target.value) || 0))}
                      placeholder="0"
                      className="w-24 sm:w-28 px-3 py-2 bg-zinc-950/50 border border-zinc-700 rounded-lg text-white text-sm font-mono text-right placeholder-zinc-600 focus:outline-none focus:border-pink-500 transition-colors"
                    />
                    {steps.length > 4 && (
                      <button
                        onClick={() => removeStep(step.id)}
                        className="p-1.5 text-zinc-600 hover:text-red-400 transition-colors shrink-0"
                      >
                        <Trash2 className="size-4" />
                      </button>
                    )}
                  </div>
                </div>
                {idx < steps.length - 1 && (
                  <div className="flex justify-center mt-2 sm:ml-8">
                    <ArrowDown className="size-4 text-zinc-700" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={handleAnalyze}
          disabled={!canAnalyze}
          className="w-full px-6 py-3 bg-pink-600 hover:bg-pink-700 disabled:bg-zinc-800 disabled:text-zinc-600 disabled:cursor-not-allowed text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
        >
          <Beaker className="size-5" />
          {t({ en: 'Analyze Funnel & Generate Hypothesis', es: 'Analizar Funnel y Generar Hipótesis' })}
        </button>
      </div>

      {/* Analysis Output */}
      <AnimatePresence>
        {showAnalysis && analysis && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-6"
          >
            {/* Header Row */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h4 className="text-xl font-semibold text-white mb-1">
                  {t({ en: 'Funnel Analysis', es: 'Análisis de Funnel' })}
                </h4>
                <p className="text-xs text-zinc-500">
                  {t({
                    en: `Overall conversion: ${analysis.overallConversion.toFixed(1)}% | Target: ${targetMetric}%`,
                    es: `Conversión total: ${analysis.overallConversion.toFixed(1)}% | Objetivo: ${targetMetric}%`
                  })}
                </p>
              </div>
              <button
                onClick={handleCopy}
                className="px-4 py-2 bg-pink-600 hover:bg-pink-700 text-white rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
              >
                {copied ? (
                  <><Check className="size-4" />{t({ en: 'Copied!', es: '¡Copiado!' })}</>
                ) : (
                  <><Copy className="size-4" />{t({ en: 'Generate Experiment Brief', es: 'Generar Brief de Experimento' })}</>
                )}
              </button>
            </div>

            {/* High Drop-Off Warning */}
            {analysis.hasHighDropOff && (
              <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-4 flex items-start gap-3">
                <ShieldAlert className="size-5 text-red-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-red-300 mb-1">
                    {t({ en: 'Critical Funnel Leakage Detected', es: 'Fuga Crítica de Funnel Detectada' })}
                  </p>
                  <p className="text-xs text-zinc-400">
                    {t({
                      en: 'One or more stages show >40% drop-off. Do NOT scale acquisition until this friction is addressed — you would be pouring users into a leaky bucket.',
                      es: 'Una o más etapas muestran >40% de abandono. NO escales adquisición hasta que esta fricción se aborde — estarías vertiendo usuarios en un balde con fugas.'
                    })}
                  </p>
                </div>
              </div>
            )}

            {/* Visual Funnel */}
            <div className="bg-zinc-900/30 border border-zinc-800 rounded-2xl p-6 space-y-1">
              <h5 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-4">
                {t({ en: 'Visual Funnel Diagram', es: 'Diagrama Visual de Funnel' })}
              </h5>
              {analysis.steps.map((step, idx) => {
                const widthPct = maxUsers > 0 ? Math.max(8, (step.users / maxUsers) * 100) : 8;
                const isFriction = step.isFriction;
                const barColor = isFriction
                  ? 'bg-gradient-to-r from-red-500/40 to-red-600/20 border-red-500/40'
                  : analysis.overallConversion >= targetMetric && idx === analysis.steps.length - 1
                  ? 'bg-gradient-to-r from-green-500/30 to-green-600/10 border-green-500/30'
                  : 'bg-gradient-to-r from-pink-500/30 to-pink-600/10 border-pink-500/30';

                return (
                  <div key={idx}>
                    <motion.div
                      initial={{ opacity: 0, scaleX: 0 }}
                      animate={{ opacity: 1, scaleX: 1 }}
                      transition={{ delay: idx * 0.1, duration: 0.4 }}
                      style={{ originX: 0 }}
                      className="relative"
                    >
                      <div
                        className={`rounded-lg border px-4 py-3 mx-auto transition-all ${barColor}`}
                        style={{ width: `${widthPct}%`, minWidth: 'fit-content' }}
                      >
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <div className="flex items-center gap-2 min-w-0">
                            {isFriction && <AlertTriangle className="size-3.5 text-red-400 shrink-0" />}
                            <span className={`text-xs font-medium truncate ${isFriction ? 'text-red-300' : 'text-white'}`}>
                              {step.name}
                            </span>
                          </div>
                          <div className="flex items-center gap-3 shrink-0">
                            <span className="text-xs font-mono text-zinc-300">{step.users.toLocaleString()}</span>
                            {step.conversionFromPrev !== null && (
                              <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                                step.dropOff !== null && step.dropOff > 40
                                  ? 'bg-red-500/20 text-red-300'
                                  : step.dropOff !== null && step.dropOff > 25
                                  ? 'bg-amber-500/20 text-amber-300'
                                  : 'bg-green-500/20 text-green-300'
                              }`}>
                                {step.conversionFromPrev.toFixed(0)}%
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                    {idx < analysis.steps.length - 1 && (
                      <div className="flex items-center gap-2 py-0.5 pl-4">
                        <ArrowDown className="size-3 text-zinc-700" />
                        {step.dropOff !== null && idx > 0 && (
                          <span className={`text-[10px] ${step.dropOff > 40 ? 'text-red-400' : 'text-zinc-600'}`}>
                            -{step.dropOff.toFixed(0)}%
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard
                label={t({ en: 'Overall Conversion', es: 'Conversión Total' })}
                value={`${analysis.overallConversion.toFixed(1)}%`}
                color={analysis.overallConversion >= targetMetric ? 'text-green-400' : 'text-red-400'}
                icon={BarChart3}
              />
              <StatCard
                label={t({ en: 'Target', es: 'Objetivo' })}
                value={`${targetMetric}%`}
                color="text-pink-400"
                icon={Target}
              />
              <StatCard
                label={t({ en: 'Funnel Steps', es: 'Pasos del Funnel' })}
                value={`${analysis.steps.length}`}
                color="text-zinc-300"
                icon={Filter}
              />
              <StatCard
                label={t({ en: 'Biggest Drop-off', es: 'Mayor Abandono' })}
                value={analysis.worstStepIndex >= 0
                  ? `${analysis.steps[analysis.worstStepIndex].dropOff?.toFixed(0)}%`
                  : '—'}
                color="text-amber-400"
                icon={TrendingDown}
              />
            </div>

            {/* Friction Point & Hypothesis */}
            {analysis.worstStepIndex >= 0 && (
              <div className="bg-gradient-to-br from-pink-500/5 to-violet-500/5 border border-pink-500/20 rounded-2xl p-6 space-y-4">
                <div className="flex items-center gap-2">
                  <Lightbulb className="size-5 text-pink-400" />
                  <h5 className="text-lg font-semibold text-white">
                    {t({ en: 'Biggest Friction Stage', es: 'Mayor Etapa de Fricción' })}
                  </h5>
                </div>

                <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-4">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider">
                      {t({ en: 'From:', es: 'Desde:' })}
                    </span>
                    <span className="text-sm font-medium text-zinc-300">
                      {analysis.steps[analysis.worstStepIndex - 1]?.name}
                    </span>
                    <ArrowDown className="size-4 text-red-400 -rotate-90" />
                    <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider">
                      {t({ en: 'To:', es: 'Hacia:' })}
                    </span>
                    <span className="text-sm font-medium text-red-300">
                      {analysis.steps[analysis.worstStepIndex].name}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-500">
                    {t({
                      en: `${analysis.steps[analysis.worstStepIndex].dropOff?.toFixed(0)}% of users drop off at this stage. This is your highest-leverage optimization target.`,
                      es: `${analysis.steps[analysis.worstStepIndex].dropOff?.toFixed(0)}% de usuarios abandonan en esta etapa. Este es tu objetivo de optimización de mayor apalancamiento.`
                    })}
                  </p>
                </div>

                <div>
                  <h6 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">
                    {t({ en: 'Suggested Experiment Hypothesis', es: 'Hipótesis de Experimento Sugerida' })}
                  </h6>
                  <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-4">
                    <p className="text-sm text-zinc-300 leading-relaxed italic">
                      {t(analysis.hypothesis)}
                    </p>
                  </div>
                </div>

                <div>
                  <h6 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">
                    {t({ en: 'Recommended Next Steps', es: 'Próximos Pasos Recomendados' })}
                  </h6>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {[
                      { en: '1. Watch session recordings of users at this stage', es: '1. Ver grabaciones de sesión de usuarios en esta etapa' },
                      { en: '2. Run 5 user interviews focused on this transition', es: '2. Ejecutar 5 entrevistas de usuario enfocadas en esta transición' },
                      { en: '3. Design 2-3 solutions in a Design Sprint', es: '3. Diseñar 2-3 soluciones en un Design Sprint' },
                      { en: '4. A/B test the winning solution (min 2 weeks)', es: '4. A/B test de la solución ganadora (mín 2 semanas)' },
                      { en: '5. Define sample size & significance threshold', es: '5. Definir tamaño de muestra y umbral de significancia' },
                      { en: '6. Ship or iterate based on p < 0.05', es: '6. Lanzar o iterar basándote en p < 0.05' },
                    ].map((step, i) => (
                      <div key={i} className="text-xs text-zinc-400 bg-zinc-900/40 px-3 py-2 rounded-lg">
                        {t(step)}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* RICE Formula Reminder */}
            <div className="bg-zinc-900/40 border border-zinc-800 rounded-xl p-5">
              <h5 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">
                {t({ en: 'Connection to Product Lifecycle', es: 'Conexión al Ciclo de Vida del Producto' })}
              </h5>
              <p className="text-xs text-zinc-400 leading-relaxed">
                {t({
                  en: 'Discovery (identify the problem) → Roadmap (prioritize what to build) → Sprint (validate the solution) → Release (ship it) → Metrics (measure impact via this funnel) → Iteration (feed learnings back into the roadmap). This funnel analysis feeds directly into your product roadmap prioritization.',
                  es: 'Discovery (identificar el problema) → Roadmap (priorizar qué construir) → Sprint (validar la solución) → Release (lanzar) → Métricas (medir impacto via este funnel) → Iteración (alimentar aprendizajes de vuelta al roadmap). Este análisis de funnel alimenta directamente la priorización de tu roadmap de producto.'
                })}
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                {['Discovery', 'Roadmap', 'Sprint', 'Release', 'Metrics', 'Iteration'].map((stage, i) => (
                  <span key={stage} className="flex items-center gap-1.5">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                      stage === 'Metrics'
                        ? 'bg-pink-500/20 text-pink-300 border-pink-500/30'
                        : 'bg-zinc-800 text-zinc-400 border-zinc-700'
                    }`}>
                      {stage}
                    </span>
                    {i < 5 && <span className="text-zinc-700 text-xs">→</span>}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function StatCard({ label, value, color, icon: Icon }: {
  label: string; value: string; color: string; icon: React.ElementType;
}) {
  return (
    <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-4 text-center">
      <Icon className={`size-4 mx-auto mb-1.5 ${color}`} />
      <p className={`text-lg font-bold font-mono ${color}`}>{value}</p>
      <p className="text-[10px] text-zinc-500 mt-0.5">{label}</p>
    </div>
  );
}
