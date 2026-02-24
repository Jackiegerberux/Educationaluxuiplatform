import React, { useState, useMemo } from 'react';
import { useLanguage } from '../layout/LanguageContext';
import { motion, AnimatePresence } from 'motion/react';
import {
  Map, Plus, Trash2, Copy, Check, AlertTriangle,
  ArrowDownUp, Target, TrendingUp, Zap, Clock,
  ShieldAlert
} from 'lucide-react';
import { copyToClipboard } from '../../utils/clipboard';

interface Initiative {
  id: string;
  name: string;
  impact: number;
  effort: number;
  confidence: number;
  reach: number;
}

function riceScore(i: Initiative): number {
  return (i.reach * i.impact * (i.confidence / 100)) / Math.max(i.effort, 0.5);
}

function assignHorizon(sorted: Initiative[], idx: number, total: number): 'now' | 'next' | 'later' {
  const pct = idx / total;
  if (pct < 0.34) return 'now';
  if (pct < 0.67) return 'next';
  return 'later';
}

const horizonConfig = {
  now: {
    label: { en: 'Now', es: 'Ahora' },
    desc: { en: 'High confidence. Start this sprint.', es: 'Alta confianza. Comenzar este sprint.' },
    color: 'text-green-400',
    bg: 'bg-green-500/10',
    border: 'border-green-500/30',
    icon: Zap,
  },
  next: {
    label: { en: 'Next', es: 'Siguiente' },
    desc: { en: 'Medium confidence. Planned for next quarter.', es: 'Confianza media. Planeado para próximo trimestre.' },
    color: 'text-amber-400',
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/30',
    icon: Clock,
  },
  later: {
    label: { en: 'Later', es: 'Después' },
    desc: { en: 'Low confidence. Needs more discovery.', es: 'Baja confianza. Necesita más discovery.' },
    color: 'text-zinc-400',
    bg: 'bg-zinc-500/10',
    border: 'border-zinc-500/30',
    icon: Target,
  },
};

let nextId = 1;
const makeId = () => `init-${nextId++}`;

export function RoadmapBuilder() {
  const { t } = useLanguage();

  const [goal, setGoal] = useState('');
  const [initiatives, setInitiatives] = useState<Initiative[]>([
    { id: makeId(), name: '', impact: 3, effort: 3, confidence: 70, reach: 3 },
    { id: makeId(), name: '', impact: 3, effort: 3, confidence: 70, reach: 3 },
    { id: makeId(), name: '', impact: 3, effort: 3, confidence: 70, reach: 3 },
  ]);
  const [showBoard, setShowBoard] = useState(false);
  const [copied, setCopied] = useState(false);

  const updateInit = (id: string, field: keyof Initiative, value: string | number) => {
    setInitiatives(prev => prev.map(i => i.id === id ? { ...i, [field]: value } : i));
  };

  const addInit = () => {
    if (initiatives.length >= 8) return;
    setInitiatives(prev => [...prev, { id: makeId(), name: '', impact: 3, effort: 3, confidence: 70, reach: 3 }]);
  };

  const removeInit = (id: string) => {
    if (initiatives.length <= 2) return;
    setInitiatives(prev => prev.filter(i => i.id !== id));
  };

  const validInits = initiatives.filter(i => i.name.trim());
  const canGenerate = goal.trim() && validInits.length >= 2;

  const sorted = useMemo(() => {
    return [...validInits]
      .map(i => ({ ...i, score: riceScore(i) }))
      .sort((a, b) => b.score - a.score);
  }, [validInits]);

  const grouped = useMemo(() => {
    const groups: Record<'now' | 'next' | 'later', typeof sorted> = { now: [], next: [], later: [] };
    sorted.forEach((item, idx) => {
      const h = assignHorizon(sorted, idx, sorted.length);
      groups[h].push(item);
    });
    return groups;
  }, [sorted]);

  const lowConfidenceItems = sorted.filter(i => i.confidence < 50);

  const handleGenerate = () => {
    if (!canGenerate) return;
    setShowBoard(true);
  };

  const handleCopy = () => {
    const lines: string[] = [
      `Product Roadmap Summary`,
      `Goal: ${goal}`,
      `Generated: ${new Date().toLocaleDateString()}`,
      ``,
      `=== NOW (High Confidence) ===`,
      ...grouped.now.map(i => `- ${i.name} | RICE: ${i.score.toFixed(1)} | Impact: ${i.impact}/5 | Effort: ${i.effort}/5 | Confidence: ${i.confidence}%`),
      ``,
      `=== NEXT (Medium Confidence) ===`,
      ...grouped.next.map(i => `- ${i.name} | RICE: ${i.score.toFixed(1)} | Impact: ${i.impact}/5 | Effort: ${i.effort}/5 | Confidence: ${i.confidence}%`),
      ``,
      `=== LATER (Low Confidence) ===`,
      ...grouped.later.map(i => `- ${i.name} | RICE: ${i.score.toFixed(1)} | Impact: ${i.impact}/5 | Effort: ${i.effort}/5 | Confidence: ${i.confidence}%`),
    ];

    if (lowConfidenceItems.length > 0) {
      lines.push('', `⚠ Low Confidence Warning: ${lowConfidenceItems.map(i => i.name).join(', ')}`);
    }

    copyToClipboard(lines.join('\n'));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const SliderRow = ({ label, value, onChange, min = 1, max = 5, step = 1, showPct = false }: {
    label: string; value: number; onChange: (v: number) => void; min?: number; max?: number; step?: number; showPct?: boolean;
  }) => (
    <div className="flex items-center gap-3">
      <span className="text-xs text-zinc-500 w-20 shrink-0">{label}</span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="flex-1 h-1.5 bg-zinc-700 rounded-full appearance-none cursor-pointer accent-indigo-500 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-3.5 [&::-webkit-slider-thumb]:w-3.5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-indigo-400"
      />
      <span className="text-xs font-mono text-zinc-300 w-10 text-right">{showPct ? `${value}%` : `${value}/5`}</span>
    </div>
  );

  return (
    <div className="w-full max-w-6xl mx-auto space-y-8 mt-12">
      {/* Header */}
      <div className="text-center space-y-3">
        <div className="flex items-center justify-center gap-3">
          <Map className="size-8 text-violet-400" />
          <h3 className="text-3xl font-bold text-white">
            {t({ en: 'Roadmap Builder', es: 'Constructor de Roadmap' })}
          </h3>
        </div>
        <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
          {t({
            en: 'Define your product goal, add initiatives, and auto-generate a prioritized Now / Next / Later roadmap with RICE scoring.',
            es: 'Define tu objetivo de producto, agrega iniciativas y auto-genera un roadmap priorizado Ahora / Siguiente / Después con scoring RICE.'
          })}
        </p>
      </div>

      {/* Input Section */}
      <div className="bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 border border-zinc-800 rounded-2xl p-6 space-y-5">
        <div className="flex items-center gap-2 mb-2">
          <Target className="size-5 text-violet-400" />
          <h4 className="text-lg font-semibold text-white">
            {t({ en: 'Product Goal', es: 'Objetivo de Producto' })}
          </h4>
        </div>

        <textarea
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          placeholder={t({
            en: 'e.g., Increase trial-to-paid conversion from 12% to 18% by Q3',
            es: 'ej., Aumentar conversión trial-a-pago de 12% a 18% para Q3'
          })}
          rows={2}
          className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-violet-500 transition-colors resize-none"
        />

        {/* Initiatives */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-sm font-semibold text-zinc-300 flex items-center gap-2">
              <TrendingUp className="size-4 text-violet-400" />
              {t({ en: 'Initiatives', es: 'Iniciativas' })}
              <span className="text-xs text-zinc-500">({initiatives.length}/8)</span>
            </h4>
            {initiatives.length < 8 && (
              <button
                onClick={addInit}
                className="text-xs px-3 py-1.5 bg-violet-600/20 hover:bg-violet-600/30 text-violet-300 rounded-lg border border-violet-500/30 transition-colors flex items-center gap-1.5"
              >
                <Plus className="size-3" />
                {t({ en: 'Add', es: 'Agregar' })}
              </button>
            )}
          </div>

          <div className="space-y-4">
            {initiatives.map((init, idx) => (
              <div key={init.id} className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-4">
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-xs font-bold text-zinc-600 mt-2.5 w-5 text-center">{idx + 1}</span>
                  <input
                    type="text"
                    value={init.name}
                    onChange={(e) => updateInit(init.id, 'name', e.target.value)}
                    placeholder={t({ en: `Initiative ${idx + 1} name...`, es: `Nombre de iniciativa ${idx + 1}...` })}
                    className="flex-1 px-3 py-2 bg-zinc-950/50 border border-zinc-700 rounded-lg text-white text-sm placeholder-zinc-600 focus:outline-none focus:border-violet-500 transition-colors"
                  />
                  {initiatives.length > 2 && (
                    <button
                      onClick={() => removeInit(init.id)}
                      className="p-1.5 text-zinc-600 hover:text-red-400 transition-colors"
                    >
                      <Trash2 className="size-4" />
                    </button>
                  )}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-8">
                  <SliderRow
                    label={t({ en: 'Reach', es: 'Alcance' })}
                    value={init.reach}
                    onChange={(v) => updateInit(init.id, 'reach', v)}
                  />
                  <SliderRow
                    label={t({ en: 'Impact', es: 'Impacto' })}
                    value={init.impact}
                    onChange={(v) => updateInit(init.id, 'impact', v)}
                  />
                  <SliderRow
                    label={t({ en: 'Effort', es: 'Esfuerzo' })}
                    value={init.effort}
                    onChange={(v) => updateInit(init.id, 'effort', v)}
                  />
                  <SliderRow
                    label={t({ en: 'Confidence', es: 'Confianza' })}
                    value={init.confidence}
                    onChange={(v) => updateInit(init.id, 'confidence', v)}
                    min={10}
                    max={100}
                    step={10}
                    showPct
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={handleGenerate}
          disabled={!canGenerate}
          className="w-full px-6 py-3 bg-violet-600 hover:bg-violet-700 disabled:bg-zinc-800 disabled:text-zinc-600 disabled:cursor-not-allowed text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
        >
          <ArrowDownUp className="size-5" />
          {t({ en: 'Generate Roadmap', es: 'Generar Roadmap' })}
        </button>
      </div>

      {/* Generated Board */}
      <AnimatePresence>
        {showBoard && sorted.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-6"
          >
            {/* Header */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h4 className="text-xl font-semibold text-white mb-1">
                  {t({ en: 'Your Roadmap', es: 'Tu Roadmap' })}
                </h4>
                <p className="text-xs text-zinc-500">{t({ en: 'Sorted by RICE score. Grouped into time horizons.', es: 'Ordenado por score RICE. Agrupado en horizontes temporales.' })}</p>
              </div>
              <button
                onClick={handleCopy}
                className="px-4 py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
              >
                {copied ? (
                  <><Check className="size-4" />{t({ en: 'Copied!', es: '¡Copiado!' })}</>
                ) : (
                  <><Copy className="size-4" />{t({ en: 'Copy Roadmap Summary', es: 'Copiar Resumen' })}</>
                )}
              </button>
            </div>

            {/* Low Confidence Warning */}
            {lowConfidenceItems.length > 0 && (
              <div className="bg-amber-500/5 border border-amber-500/20 rounded-xl p-4 flex items-start gap-3">
                <ShieldAlert className="size-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-amber-300 mb-1">
                    {t({ en: 'Low Confidence Risk', es: 'Riesgo de Baja Confianza' })}
                  </p>
                  <p className="text-xs text-zinc-400">
                    {t({
                      en: `${lowConfidenceItems.length} initiative(s) have confidence below 50%: `,
                      es: `${lowConfidenceItems.length} iniciativa(s) tienen confianza menor a 50%: `
                    })}
                    <span className="text-amber-200">{lowConfidenceItems.map(i => i.name).join(', ')}</span>.{' '}
                    {t({ en: 'Consider running a Design Sprint to validate before committing.', es: 'Considera ejecutar un Design Sprint para validar antes de comprometer.' })}
                  </p>
                </div>
              </div>
            )}

            {/* RICE Ranking Table */}
            <div className="bg-zinc-900/30 border border-zinc-800 rounded-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[600px]">
                  <thead>
                    <tr className="bg-zinc-800/50 border-b border-zinc-700">
                      <th className="px-4 py-3 text-left text-xs font-bold text-zinc-400 uppercase tracking-wider">#</th>
                      <th className="px-4 py-3 text-left text-xs font-bold text-zinc-400 uppercase tracking-wider">{t({ en: 'Initiative', es: 'Iniciativa' })}</th>
                      <th className="px-4 py-3 text-center text-xs font-bold text-zinc-400 uppercase tracking-wider">{t({ en: 'Reach', es: 'Alc.' })}</th>
                      <th className="px-4 py-3 text-center text-xs font-bold text-zinc-400 uppercase tracking-wider">{t({ en: 'Impact', es: 'Imp.' })}</th>
                      <th className="px-4 py-3 text-center text-xs font-bold text-zinc-400 uppercase tracking-wider">{t({ en: 'Conf.', es: 'Conf.' })}</th>
                      <th className="px-4 py-3 text-center text-xs font-bold text-zinc-400 uppercase tracking-wider">{t({ en: 'Effort', es: 'Esf.' })}</th>
                      <th className="px-4 py-3 text-center text-xs font-bold text-zinc-400 uppercase tracking-wider">{t({ en: 'RICE', es: 'RICE' })}</th>
                      <th className="px-4 py-3 text-center text-xs font-bold text-zinc-400 uppercase tracking-wider">{t({ en: 'Horizon', es: 'Horizonte' })}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sorted.map((item, idx) => {
                      const h = assignHorizon(sorted, idx, sorted.length);
                      const hc = horizonConfig[h];
                      return (
                        <tr key={item.id} className="border-b border-zinc-800/50 hover:bg-zinc-800/20 transition-colors">
                          <td className="px-4 py-3 text-sm font-bold text-zinc-600">{idx + 1}</td>
                          <td className="px-4 py-3 text-sm text-white font-medium">
                            <span className="flex items-center gap-2">
                              {item.name}
                              {item.confidence < 50 && <AlertTriangle className="size-3.5 text-amber-400" />}
                            </span>
                          </td>
                          <td className="px-4 py-3 text-sm text-zinc-300 text-center">{item.reach}</td>
                          <td className="px-4 py-3 text-sm text-zinc-300 text-center">{item.impact}</td>
                          <td className="px-4 py-3 text-sm text-zinc-300 text-center">{item.confidence}%</td>
                          <td className="px-4 py-3 text-sm text-zinc-300 text-center">{item.effort}</td>
                          <td className="px-4 py-3 text-sm font-bold text-violet-300 text-center">{item.score.toFixed(1)}</td>
                          <td className="px-4 py-3 text-center">
                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${hc.bg} ${hc.color} border ${hc.border}`}>
                              {t(hc.label)}
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Visual Board Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {(['now', 'next', 'later'] as const).map(horizon => {
                const hc = horizonConfig[horizon];
                const items = grouped[horizon];
                const HIcon = hc.icon;
                return (
                  <div key={horizon} className={`rounded-2xl border ${hc.border} ${hc.bg} p-5`}>
                    <div className="flex items-center gap-2 mb-1">
                      <HIcon className={`size-4 ${hc.color}`} />
                      <h5 className={`text-sm font-bold ${hc.color} uppercase tracking-wider`}>
                        {t(hc.label)}
                      </h5>
                    </div>
                    <p className="text-[10px] text-zinc-500 mb-4">{t(hc.desc)}</p>

                    {items.length === 0 ? (
                      <p className="text-xs text-zinc-600 italic">{t({ en: 'No initiatives', es: 'Sin iniciativas' })}</p>
                    ) : (
                      <div className="space-y-2">
                        {items.map(item => (
                          <motion.div
                            key={item.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-zinc-900/60 border border-zinc-800 rounded-lg p-3"
                          >
                            <div className="flex items-start justify-between gap-2 mb-1.5">
                              <p className="text-sm font-medium text-white leading-snug">{item.name}</p>
                              <span className="text-[10px] font-bold text-violet-400 bg-violet-500/10 px-1.5 py-0.5 rounded shrink-0">
                                {item.score.toFixed(1)}
                              </span>
                            </div>
                            <div className="flex flex-wrap gap-x-3 gap-y-1 text-[10px] text-zinc-500">
                              <span>{t({ en: 'Impact', es: 'Imp' })}: {item.impact}/5</span>
                              <span>{t({ en: 'Effort', es: 'Esf' })}: {item.effort}/5</span>
                              <span className={item.confidence < 50 ? 'text-amber-400' : ''}>
                                {t({ en: 'Conf', es: 'Conf' })}: {item.confidence}%
                                {item.confidence < 50 && ' ⚠'}
                              </span>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* RICE Explanation */}
            <div className="bg-zinc-900/40 border border-zinc-800 rounded-xl p-5">
              <h5 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">
                {t({ en: 'RICE Score Formula', es: 'Fórmula de Score RICE' })}
              </h5>
              <p className="text-xs text-zinc-400 font-mono mb-2">
                RICE = (Reach × Impact × Confidence%) ÷ Effort
              </p>
              <p className="text-xs text-zinc-500 leading-relaxed">
                {t({
                  en: 'Higher RICE score = higher strategic priority. Items with low confidence (<50%) are flagged as risky — consider running a Design Sprint to increase confidence before committing resources.',
                  es: 'Mayor score RICE = mayor prioridad estratégica. Items con baja confianza (<50%) se marcan como riesgosos — considera ejecutar un Design Sprint para aumentar confianza antes de comprometer recursos.'
                })}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}