import React, { useState, useMemo } from 'react';
import { useLanguage } from '../layout/LanguageContext';
import {
  FileText,
  Sparkles,
  MessageSquare,
  AlertTriangle,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Copy,
  Check,
  BarChart3,
  Lightbulb,
  Target,
  Zap,
  ArrowRight,
} from 'lucide-react';

interface CaseStudyInputs {
  projectName: string;
  productType: string;
  userProblem: string;
  businessGoal: string;
  keyDecisions: string;
  metricsAchieved: string;
  biggestChallenge: string;
}

type OutputMode = 'case-study' | 'interview' | null;

const INITIAL_INPUTS: CaseStudyInputs = {
  projectName: '',
  productType: '',
  userProblem: '',
  businessGoal: '',
  keyDecisions: '',
  metricsAchieved: '',
  biggestChallenge: '',
};

export function CaseStudyBuilder() {
  const { language: lang } = useLanguage();
  const t = (obj: { en: string; es: string }) => obj[lang];

  const [inputs, setInputs] = useState<CaseStudyInputs>(INITIAL_INPUTS);
  const [outputMode, setOutputMode] = useState<OutputMode>(null);
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());
  const [copiedSection, setCopiedSection] = useState<string | null>(null);

  const handleChange = (field: keyof CaseStudyInputs, value: string) => {
    setInputs(prev => ({ ...prev, [field]: value }));
  };

  // Clarity score calculation
  const clarityScore = useMemo(() => {
    const fields: (keyof CaseStudyInputs)[] = [
      'projectName', 'productType', 'userProblem', 'businessGoal',
      'keyDecisions', 'metricsAchieved', 'biggestChallenge'
    ];
    const filled = fields.filter(f => inputs[f].trim().length > 10);
    return Math.round((filled.length / fields.length) * 100);
  }, [inputs]);

  const missingFields = useMemo(() => {
    const labels: Record<keyof CaseStudyInputs, { en: string; es: string }> = {
      projectName: { en: 'Project Name', es: 'Nombre del Proyecto' },
      productType: { en: 'Product Type', es: 'Tipo de Producto' },
      userProblem: { en: 'User Problem', es: 'Problema del Usuario' },
      businessGoal: { en: 'Business Goal', es: 'Objetivo de Negocio' },
      keyDecisions: { en: 'Key Decisions', es: 'Decisiones Clave' },
      metricsAchieved: { en: 'Metrics Achieved', es: 'Métricas Logradas' },
      biggestChallenge: { en: 'Biggest Challenge', es: 'Mayor Desafío' },
    };
    return (Object.keys(labels) as (keyof CaseStudyInputs)[])
      .filter(f => inputs[f].trim().length <= 10)
      .map(f => t(labels[f]));
  }, [inputs, lang]);

  const toggleSection = (id: string) => {
    setExpandedSections(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const copyToClipboard = (text: string, sectionId: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(sectionId);
    setTimeout(() => setCopiedSection(null), 2000);
  };

  // Generate case study sections
  const caseStudySections = useMemo(() => {
    if (!outputMode) return [];
    const p = inputs;

    if (outputMode === 'case-study') {
      return [
        {
          id: 'context',
          icon: Target,
          title: t({ en: 'Context', es: 'Contexto' }),
          color: 'blue',
          content: t({
            en: `**Project:** ${p.projectName || '[Project Name]'}\n**Product Type:** ${p.productType || '[Product Type]'}\n\nThis case study examines ${p.projectName || 'the project'}, a ${p.productType || '[product type]'} designed to address critical user and business needs. The project operated within specific constraints that shaped every design decision — from team structure and timeline to technical limitations and stakeholder expectations.\n\n*[Add: team composition, timeline, key constraints, and your specific role]*`,
            es: `**Proyecto:** ${p.projectName || '[Nombre del Proyecto]'}\n**Tipo de Producto:** ${p.productType || '[Tipo de Producto]'}\n\nEste caso de estudio examina ${p.projectName || 'el proyecto'}, un/a ${p.productType || '[tipo de producto]'} diseñado/a para abordar necesidades críticas de usuarios y negocio. El proyecto operó dentro de restricciones específicas que moldearon cada decisión de diseño — desde la estructura del equipo y el timeline hasta limitaciones técnicas y expectativas de stakeholders.\n\n*[Agregar: composición del equipo, timeline, restricciones clave y tu rol específico]*`
          })
        },
        {
          id: 'problem',
          icon: AlertTriangle,
          title: t({ en: 'Problem', es: 'Problema' }),
          color: 'red',
          content: t({
            en: `**User Problem:**\n${p.userProblem || '[Describe the specific user pain point with evidence]'}\n\n**Business Problem:**\n${p.businessGoal ? `The business needed to ${p.businessGoal}. Without solving the user problem above, this goal was at risk.` : '[Connect user problem to business impact — revenue, retention, efficiency]'}\n\n*[Add: specific data points, user quotes, or analytics that quantify the problem]*`,
            es: `**Problema del Usuario:**\n${p.userProblem || '[Describe el punto de dolor específico del usuario con evidencia]'}\n\n**Problema de Negocio:**\n${p.businessGoal ? `El negocio necesitaba ${p.businessGoal}. Sin resolver el problema del usuario anterior, este objetivo estaba en riesgo.` : '[Conecta el problema del usuario con el impacto en el negocio — revenue, retención, eficiencia]'}\n\n*[Agregar: datos específicos, citas de usuarios o analítica que cuantifiquen el problema]*`
          })
        },
        {
          id: 'process',
          icon: Lightbulb,
          title: t({ en: 'Discovery & Process', es: 'Descubrimiento y Proceso' }),
          color: 'yellow',
          content: t({
            en: `**Research Approach:**\nTo understand the root cause of the problem, we conducted research focused on [methods]. The key insight that shaped our direction was understanding how users actually behaved versus how we assumed they behaved.\n\n**Key Insights:**\n${p.userProblem ? `Research revealed that users struggling with "${p.userProblem}" were actually experiencing a deeper issue: [insight].` : '[Describe 2-3 key research findings that changed your approach]'}\n\n*[Add: research methods used, number of participants, surprising findings]*`,
            es: `**Enfoque de Investigación:**\nPara entender la causa raíz del problema, realizamos investigación enfocada en [métodos]. El insight clave que moldeó nuestra dirección fue entender cómo los usuarios realmente se comportaban versus cómo asumíamos que se comportaban.\n\n**Insights Clave:**\n${p.userProblem ? `La investigación reveló que los usuarios que luchaban con "${p.userProblem}" en realidad experimentaban un problema más profundo: [insight].` : '[Describe 2-3 hallazgos clave de investigación que cambiaron tu enfoque]'}\n\n*[Agregar: métodos de investigación usados, número de participantes, hallazgos sorprendentes]*`
          })
        },
        {
          id: 'decisions',
          icon: Zap,
          title: t({ en: 'Decision Logic & Trade-offs', es: 'Lógica de Decisiones y Trade-offs' }),
          color: 'purple',
          content: t({
            en: `**Key Decisions:**\n${p.keyDecisions || '[List the 2-3 most important design decisions you made]'}\n\n**Trade-offs Considered:**\nFor each decision above, we evaluated alternatives:\n\n• **Decision 1:** We chose [approach] over [alternative] because [reasoning]. The trade-off was [limitation we accepted].\n• **Decision 2:** [Same structure]\n\n${p.biggestChallenge ? `**Biggest Challenge:**\n${p.biggestChallenge}\n\nHow we handled it: [Describe your approach to overcoming this challenge]` : ''}\n\n*[This section is the most important differentiator between junior and senior case studies]*`,
            es: `**Decisiones Clave:**\n${p.keyDecisions || '[Lista las 2-3 decisiones de diseño más importantes que tomaste]'}\n\n**Trade-offs Considerados:**\nPara cada decisión anterior, evaluamos alternativas:\n\n• **Decisión 1:** Elegimos [enfoque] sobre [alternativa] porque [razonamiento]. El trade-off fue [limitación que aceptamos].\n• **Decisión 2:** [Misma estructura]\n\n${p.biggestChallenge ? `**Mayor Desafío:**\n${p.biggestChallenge}\n\nCómo lo manejamos: [Describe tu enfoque para superar este desafío]` : ''}\n\n*[Esta sección es el diferenciador más importante entre casos de estudio junior y senior]*`
          })
        },
        {
          id: 'impact',
          icon: BarChart3,
          title: t({ en: 'Impact & Results', es: 'Impacto y Resultados' }),
          color: 'green',
          content: t({
            en: `**Measurable Impact:**\n${p.metricsAchieved || '[Add specific before/after metrics]'}\n\n**Impact Summary Card:**\n| Metric | Before | After | Change |\n|--------|--------|-------|--------|\n| [KPI 1] | [value] | [value] | [+/-% ] |\n| [KPI 2] | [value] | [value] | [+/-% ] |\n| [KPI 3] | [value] | [value] | [+/-% ] |\n\n*[Replace placeholder metrics with your actual data. Even estimated impact is better than no metrics.]*`,
            es: `**Impacto Medible:**\n${p.metricsAchieved || '[Agrega métricas específicas antes/después]'}\n\n**Tarjeta de Resumen de Impacto:**\n| Métrica | Antes | Después | Cambio |\n|---------|-------|---------|--------|\n| [KPI 1] | [valor] | [valor] | [+/-% ] |\n| [KPI 2] | [valor] | [valor] | [+/-% ] |\n| [KPI 3] | [valor] | [valor] | [+/-% ] |\n\n*[Reemplaza las métricas placeholder con tus datos reales. Incluso el impacto estimado es mejor que ninguna métrica.]*`
          })
        },
        {
          id: 'reflection',
          icon: MessageSquare,
          title: t({ en: 'Reflection', es: 'Reflexión' }),
          color: 'cyan',
          content: t({
            en: `**What I Would Do Differently:**\n${p.biggestChallenge ? `Facing "${p.biggestChallenge}", I learned that [lesson]. If I could redo this project, I would [change].` : '[Describe 1-2 things you would change and why]'}\n\n**What Surprised Me:**\n[Describe an unexpected finding or outcome]\n\n**Key Takeaway:**\nThis project reinforced that [professional insight about design process, collaboration, or problem-solving].\n\n*[This section demonstrates growth mindset — a top-5 trait hiring managers look for in senior designers]*`,
            es: `**Qué Haría Diferente:**\n${p.biggestChallenge ? `Enfrentando "${p.biggestChallenge}", aprendí que [lección]. Si pudiera rehacer este proyecto, haría [cambio].` : '[Describe 1-2 cosas que cambiarías y por qué]'}\n\n**Qué Me Sorprendió:**\n[Describe un hallazgo o resultado inesperado]\n\n**Aprendizaje Clave:**\nEste proyecto reforzó que [insight profesional sobre proceso de diseño, colaboración o resolución de problemas].\n\n*[Esta sección demuestra mentalidad de crecimiento — un rasgo top-5 que los hiring managers buscan en diseñadores senior]*`
          })
        },
      ];
    }

    // Interview summary mode
    return [
      {
        id: 'elevator',
        icon: Zap,
        title: t({ en: '30-Second Elevator Pitch', es: 'Pitch de Elevador de 30 Segundos' }),
        color: 'blue',
        content: t({
          en: `"On ${p.projectName || '[Project]'}, a ${p.productType || '[product type]'}, I identified that ${p.userProblem || '[user problem]'}. Through research and iteration, I ${p.keyDecisions ? `made key decisions including ${p.keyDecisions}` : '[key decisions]'}, which resulted in ${p.metricsAchieved || '[measurable impact]'}."`,
          es: `"En ${p.projectName || '[Proyecto]'}, un/a ${p.productType || '[tipo de producto]'}, identifiqué que ${p.userProblem || '[problema del usuario]'}. A través de investigación e iteración, ${p.keyDecisions ? `tomé decisiones clave incluyendo ${p.keyDecisions}` : '[decisiones clave]'}, lo que resultó en ${p.metricsAchieved || '[impacto medible]'}."`
        })
      },
      {
        id: 'walkthrough',
        icon: ArrowRight,
        title: t({ en: '"Walk Me Through Your Process"', es: '"Guíame Por Tu Proceso"' }),
        color: 'green',
        content: t({
          en: `**Situation:** ${p.productType || '[Product]'} had a critical problem — ${p.userProblem || '[user problem]'}. The business needed to ${p.businessGoal || '[business goal]'}.\n\n**Task:** As the designer, my responsibility was to understand the root cause, explore solutions, and deliver a measurable improvement.\n\n**Action:** ${p.keyDecisions ? `Key decisions: ${p.keyDecisions}` : '[Describe your approach and key decisions]'}. ${p.biggestChallenge ? `The biggest challenge was ${p.biggestChallenge} — I handled it by [approach].` : ''}\n\n**Result:** ${p.metricsAchieved || '[Quantified impact with before/after metrics]'}`,
          es: `**Situación:** ${p.productType || '[Producto]'} tenía un problema crítico — ${p.userProblem || '[problema del usuario]'}. El negocio necesitaba ${p.businessGoal || '[objetivo de negocio]'}.\n\n**Tarea:** Como diseñador/a, mi responsabilidad era entender la causa raíz, explorar soluciones y entregar una mejora medible.\n\n**Acción:** ${p.keyDecisions ? `Decisiones clave: ${p.keyDecisions}` : '[Describe tu enfoque y decisiones clave]'}. ${p.biggestChallenge ? `El mayor desafío fue ${p.biggestChallenge} — lo manejé mediante [enfoque].` : ''}\n\n**Resultado:** ${p.metricsAchieved || '[Impacto cuantificado con métricas antes/después]'}`
        })
      },
      {
        id: 'challenge',
        icon: AlertTriangle,
        title: t({ en: '"What Was the Biggest Challenge?"', es: '"¿Cuál Fue el Mayor Desafío?"' }),
        color: 'red',
        content: t({
          en: `${p.biggestChallenge ? `"The biggest challenge was ${p.biggestChallenge}. I approached it by first understanding the constraint, then exploring multiple solutions. Ultimately, I chose [approach] because [reasoning], which meant accepting [trade-off] but achieving [positive outcome]."` : '[Fill in the "Biggest Challenge" field to generate this answer]'}`,
          es: `${p.biggestChallenge ? `"El mayor desafío fue ${p.biggestChallenge}. Lo abordé primero entendiendo la restricción, luego explorando múltiples soluciones. En última instancia, elegí [enfoque] porque [razonamiento], lo que significó aceptar [trade-off] pero lograr [resultado positivo]."` : '[Completa el campo "Mayor Desafío" para generar esta respuesta]'}`
        })
      },
      {
        id: 'different',
        icon: Lightbulb,
        title: t({ en: '"What Would You Do Differently?"', es: '"¿Qué Harías Diferente?"' }),
        color: 'purple',
        content: t({
          en: `"Looking back at ${p.projectName || '[this project]'}, I would change [specific aspect]. At the time, we chose [approach] because [reason], but with hindsight, [alternative] would have been more effective because [learning]. This experience taught me to [professional growth insight]."`,
          es: `"Mirando atrás en ${p.projectName || '[este proyecto]'}, cambiaría [aspecto específico]. En ese momento, elegimos [enfoque] porque [razón], pero en retrospectiva, [alternativa] habría sido más efectivo/a porque [aprendizaje]. Esta experiencia me enseñó a [insight de crecimiento profesional]."`
        })
      },
    ];
  }, [outputMode, inputs, lang]);

  const getColorClasses = (color: string) => {
    const map: Record<string, { bg: string; border: string; text: string; icon: string }> = {
      blue: { bg: 'bg-blue-950/40', border: 'border-blue-500/30', text: 'text-blue-300', icon: 'text-blue-400' },
      red: { bg: 'bg-red-950/40', border: 'border-red-500/30', text: 'text-red-300', icon: 'text-red-400' },
      yellow: { bg: 'bg-yellow-950/40', border: 'border-yellow-500/30', text: 'text-yellow-300', icon: 'text-yellow-400' },
      purple: { bg: 'bg-purple-950/40', border: 'border-purple-500/30', text: 'text-purple-300', icon: 'text-purple-400' },
      green: { bg: 'bg-green-950/40', border: 'border-green-500/30', text: 'text-green-300', icon: 'text-green-400' },
      cyan: { bg: 'bg-cyan-950/40', border: 'border-cyan-500/30', text: 'text-cyan-300', icon: 'text-cyan-400' },
    };
    return map[color] || map.blue;
  };

  const inputFields: { key: keyof CaseStudyInputs; label: { en: string; es: string }; placeholder: { en: string; es: string }; rows: number }[] = [
    {
      key: 'projectName',
      label: { en: 'Project Name', es: 'Nombre del Proyecto' },
      placeholder: { en: 'e.g., Claro Admin Dashboard — Bulk Assignment Redesign', es: 'ej., Dashboard Admin de Claro — Rediseño de Asignación Masiva' },
      rows: 1,
    },
    {
      key: 'productType',
      label: { en: 'Product Type', es: 'Tipo de Producto' },
      placeholder: { en: 'e.g., B2B SaaS admin platform, mobile e-commerce app, internal tool', es: 'ej., Plataforma admin B2B SaaS, app e-commerce móvil, herramienta interna' },
      rows: 1,
    },
    {
      key: 'userProblem',
      label: { en: 'User Problem', es: 'Problema del Usuario' },
      placeholder: { en: 'e.g., 67% of operators abandoned the bulk flow at step 3 because the selection modal had 200+ unfiltered options', es: 'ej., 67% de operadores abandonaban el flujo masivo en el paso 3 porque el modal de selección tenía 200+ opciones sin filtrar' },
      rows: 3,
    },
    {
      key: 'businessGoal',
      label: { en: 'Business Goal', es: 'Objetivo de Negocio' },
      placeholder: { en: 'e.g., Reduce support costs by improving self-service task completion', es: 'ej., Reducir costos de soporte mejorando el completado de tareas self-service' },
      rows: 2,
    },
    {
      key: 'keyDecisions',
      label: { en: 'Key Decisions Made', es: 'Decisiones Clave Tomadas' },
      placeholder: { en: 'e.g., Chose tier-first filtering over search-only; negotiated timeline by deprioritizing notifications feature', es: 'ej., Elegí filtrado tier-first sobre solo búsqueda; negocié timeline despriorizando funcionalidad de notificaciones' },
      rows: 3,
    },
    {
      key: 'metricsAchieved',
      label: { en: 'Metrics Achieved', es: 'Métricas Logradas' },
      placeholder: { en: 'e.g., Completion rate 34%→87%, task time 4:30→1:45, support tickets -83%', es: 'ej., Tasa de completado 34%→87%, tiempo de tarea 4:30→1:45, tickets de soporte -83%' },
      rows: 2,
    },
    {
      key: 'biggestChallenge',
      label: { en: 'Biggest Challenge', es: 'Mayor Desafío' },
      placeholder: { en: 'e.g., No backend schema changes allowed due to ongoing migration — had to solve entirely on the frontend', es: 'ej., No se permitían cambios de schema en backend por migración en curso — tuve que resolver todo en el frontend' },
      rows: 2,
    },
  ];

  return (
    <section
      id="case-study-builder"
      className="scroll-mt-24 bg-gradient-to-br from-indigo-950/30 to-violet-950/30 border border-indigo-500/20 rounded-2xl p-4 sm:p-6 md:p-8"
    >
      <h3 className="text-xl font-semibold text-white mb-2 flex items-center gap-2">
        <FileText className="size-5 text-indigo-400" />
        {t({ en: 'Case Study Builder', es: 'Constructor de Casos de Estudio' })}
      </h3>
      <p className="text-sm text-zinc-400 mb-6">
        {t({
          en: 'Fill in your project details to generate a structured case study draft and interview-ready talking points.',
          es: 'Completa los detalles de tu proyecto para generar un borrador estructurado de caso de estudio y puntos de conversación listos para entrevistas.'
        })}
      </p>

      {/* ── Clarity Score ──────────────────────────────────────── */}
      <div className="mb-6 p-4 rounded-xl bg-black/30 border border-zinc-700/50">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-zinc-300">
            {t({ en: 'Clarity Score', es: 'Puntuación de Claridad' })}
          </span>
          <span className={`text-lg font-bold ${
            clarityScore === 100 ? 'text-green-400' :
            clarityScore >= 70 ? 'text-yellow-400' :
            clarityScore >= 40 ? 'text-orange-400' : 'text-red-400'
          }`}>
            {clarityScore}%
          </span>
        </div>
        <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full transition-all duration-500 ${
              clarityScore === 100 ? 'bg-green-500' :
              clarityScore >= 70 ? 'bg-yellow-500' :
              clarityScore >= 40 ? 'bg-orange-500' : 'bg-red-500'
            }`}
            style={{ width: `${clarityScore}%` }}
          />
        </div>
        {missingFields.length > 0 && (
          <p className="text-xs text-zinc-500 mt-2">
            {t({ en: 'Missing or insufficient:', es: 'Faltantes o insuficientes:' })}{' '}
            {missingFields.join(', ')}
          </p>
        )}
      </div>

      {/* ── Input Fields ──────────────────────────────────────── */}
      <div className="grid grid-cols-1 gap-4 mb-6">
        {inputFields.map(field => (
          <div key={field.key}>
            <label className="block text-sm font-medium text-zinc-300 mb-1.5">
              {t(field.label)}
            </label>
            {field.rows === 1 ? (
              <input
                type="text"
                value={inputs[field.key]}
                onChange={e => handleChange(field.key, e.target.value)}
                placeholder={t(field.placeholder)}
                className="w-full bg-zinc-900/70 border border-zinc-700/50 rounded-lg px-3 py-2.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/30 transition-colors"
              />
            ) : (
              <textarea
                value={inputs[field.key]}
                onChange={e => handleChange(field.key, e.target.value)}
                placeholder={t(field.placeholder)}
                rows={field.rows}
                className="w-full bg-zinc-900/70 border border-zinc-700/50 rounded-lg px-3 py-2.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/30 transition-colors resize-y min-h-[60px]"
              />
            )}
          </div>
        ))}
      </div>

      {/* ── Action Buttons ────────────────────────────────────── */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <button
          onClick={() => {
            setOutputMode('case-study');
            setExpandedSections(new Set());
          }}
          className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
            outputMode === 'case-study'
              ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20'
              : 'bg-zinc-800/80 text-zinc-300 hover:bg-zinc-700/80 border border-zinc-700/50'
          }`}
        >
          <Sparkles className="size-4" />
          {t({ en: 'Generate Case Study Draft', es: 'Generar Borrador de Caso de Estudio' })}
        </button>
        <button
          onClick={() => {
            setOutputMode('interview');
            setExpandedSections(new Set());
          }}
          className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
            outputMode === 'interview'
              ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/20'
              : 'bg-zinc-800/80 text-zinc-300 hover:bg-zinc-700/80 border border-zinc-700/50'
          }`}
        >
          <MessageSquare className="size-4" />
          {t({ en: 'Generate Interview Summary', es: 'Generar Resumen de Entrevista' })}
        </button>
      </div>

      {/* ── Output Sections ───────────────────────────────────── */}
      {outputMode && caseStudySections.length > 0 && (
        <div className="space-y-3">
          <div className="flex items-center justify-between mb-2">
            <h4 className="text-sm font-semibold text-zinc-300 uppercase tracking-wider">
              {outputMode === 'case-study'
                ? t({ en: 'Generated Case Study', es: 'Caso de Estudio Generado' })
                : t({ en: 'Interview Talking Points', es: 'Puntos de Conversación para Entrevista' })
              }
            </h4>
            <button
              onClick={() => {
                if (expandedSections.size === caseStudySections.length) {
                  setExpandedSections(new Set());
                } else {
                  setExpandedSections(new Set(caseStudySections.map(s => s.id)));
                }
              }}
              className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
            >
              {expandedSections.size === caseStudySections.length
                ? t({ en: 'Collapse All', es: 'Colapsar Todo' })
                : t({ en: 'Expand All', es: 'Expandir Todo' })
              }
            </button>
          </div>

          {caseStudySections.map(section => {
            const colors = getColorClasses(section.color);
            const isExpanded = expandedSections.has(section.id);
            const Icon = section.icon;

            return (
              <div
                key={section.id}
                className={`rounded-xl border transition-all ${colors.border} ${isExpanded ? colors.bg : 'bg-zinc-900/40'}`}
              >
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full flex items-center justify-between p-4 text-left"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <Icon className={`size-4 shrink-0 ${colors.icon}`} />
                    <span className={`text-sm font-medium ${colors.text}`}>
                      {section.title}
                    </span>
                  </div>
                  {isExpanded ? (
                    <ChevronUp className="size-4 text-zinc-500 shrink-0" />
                  ) : (
                    <ChevronDown className="size-4 text-zinc-500 shrink-0" />
                  )}
                </button>

                {isExpanded && (
                  <div className="px-4 pb-4">
                    <div className="relative">
                      <pre className="whitespace-pre-wrap text-sm text-zinc-300 leading-relaxed font-sans bg-black/30 rounded-lg p-4 overflow-x-auto">
                        {section.content}
                      </pre>
                      <button
                        onClick={() => copyToClipboard(section.content, section.id)}
                        className="absolute top-2 right-2 p-1.5 rounded-md bg-zinc-800/80 hover:bg-zinc-700/80 transition-colors"
                        title={t({ en: 'Copy to clipboard', es: 'Copiar al portapapeles' })}
                      >
                        {copiedSection === section.id ? (
                          <Check className="size-3.5 text-green-400" />
                        ) : (
                          <Copy className="size-3.5 text-zinc-400" />
                        )}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* ── Empty State ───────────────────────────────────────── */}
      {!outputMode && (
        <div className="text-center py-8 text-zinc-600">
          <FileText className="size-10 mx-auto mb-3 opacity-40" />
          <p className="text-sm">
            {t({
              en: 'Fill in your project details above and click "Generate" to create your case study draft.',
              es: 'Completa los detalles de tu proyecto arriba y haz clic en "Generar" para crear tu borrador de caso de estudio.'
            })}
          </p>
        </div>
      )}
    </section>
  );
}

export default CaseStudyBuilder;
