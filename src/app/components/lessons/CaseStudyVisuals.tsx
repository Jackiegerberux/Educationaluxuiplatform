import React from 'react';
import { useLanguage } from '../layout/LanguageContext';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import {
  Target,
  AlertTriangle,
  Search,
  Lightbulb,
  Zap,
  BarChart3,
  MessageSquare,
  ArrowRight,
  ArrowDown,
  CheckCircle2,
  XCircle,
  Clock,
  Eye,
  FileText,
  User,
  Briefcase,
  TrendingUp,
  Award,
  BookOpen,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   1. HERO BANNER — Contextual images for the lesson
   ═══════════════════════════════════════════════════════════════ */
export function CaseStudyHeroBanner() {
  const { t } = useLanguage();

  return (
    <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="relative rounded-2xl overflow-hidden border border-zinc-700/50 group">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1758520144426-edf40a58f299?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqb2IlMjBpbnRlcnZpZXclMjBwcm9mZXNzaW9uYWwlMjBtZWV0aW5nfGVufDF8fHx8MTc3MTk0NDExN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt={t({ en: 'Professional interview setting', es: 'Entorno de entrevista profesional' })}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        <div className="absolute bottom-3 left-3 right-3">
          <p className="text-xs font-semibold text-indigo-300 uppercase tracking-wider">
            {t({ en: 'Interview Ready', es: 'Listo para Entrevistas' })}
          </p>
          <p className="text-[11px] text-zinc-400 mt-0.5">
            {t({ en: 'Case studies are your #1 tool in design interviews', es: 'Los casos de estudio son tu herramienta #1 en entrevistas de diseño' })}
          </p>
        </div>
      </div>
      <div className="relative rounded-2xl overflow-hidden border border-zinc-700/50 group">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkJTIwbWV0cmljcyUyMHNjcmVlbnxlbnwxfHx8fDE3NzE5NTg1NzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt={t({ en: 'Analytics dashboard with metrics', es: 'Dashboard de analíticas con métricas' })}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        <div className="absolute bottom-3 left-3 right-3">
          <p className="text-xs font-semibold text-emerald-300 uppercase tracking-wider">
            {t({ en: 'Measure Impact', es: 'Mide el Impacto' })}
          </p>
          <p className="text-[11px] text-zinc-400 mt-0.5">
            {t({ en: 'Quantified outcomes separate senior from junior portfolios', es: 'Los resultados cuantificados separan portafolios senior de junior' })}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   2. NARRATIVE ARC — Detective Story Metaphor Visual
   ═══════════════════════════════════════════════════════════════ */
export function NarrativeArcDiagram() {
  const { t } = useLanguage();

  const arcSteps = [
    {
      icon: AlertTriangle,
      label: { en: 'The Mystery', es: 'El Misterio' },
      sub: { en: 'Problem', es: 'Problema' },
      color: 'text-red-400',
      bg: 'bg-red-500/10',
      border: 'border-red-500/30',
      height: 'h-16',
    },
    {
      icon: Search,
      label: { en: 'The Investigation', es: 'La Investigación' },
      sub: { en: 'Research', es: 'Investigación' },
      color: 'text-blue-400',
      bg: 'bg-blue-500/10',
      border: 'border-blue-500/30',
      height: 'h-20',
    },
    {
      icon: Lightbulb,
      label: { en: 'The Discovery', es: 'El Descubrimiento' },
      sub: { en: 'Insights', es: 'Insights' },
      color: 'text-yellow-400',
      bg: 'bg-yellow-500/10',
      border: 'border-yellow-500/30',
      height: 'h-24',
    },
    {
      icon: Zap,
      label: { en: 'The Decision', es: 'La Decisión' },
      sub: { en: 'Strategy', es: 'Estrategia' },
      color: 'text-purple-400',
      bg: 'bg-purple-500/10',
      border: 'border-purple-500/30',
      height: 'h-28',
    },
    {
      icon: TrendingUp,
      label: { en: 'The Resolution', es: 'La Resolución' },
      sub: { en: 'Impact', es: 'Impacto' },
      color: 'text-emerald-400',
      bg: 'bg-emerald-500/10',
      border: 'border-emerald-500/30',
      height: 'h-32',
    },
  ];

  return (
    <div className="my-6 p-5 bg-zinc-900/60 border border-zinc-700/50 rounded-xl">
      <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-1">
        {t({ en: 'The Case Study Narrative Arc', es: 'El Arco Narrativo del Caso de Estudio' })}
      </p>
      <p className="text-[11px] text-zinc-600 mb-5">
        {t({ en: 'Your case study should read like a detective story', es: 'Tu caso de estudio debe leerse como una historia de detectives' })}
      </p>

      {/* Desktop: horizontal arc with rising bars */}
      <div className="hidden md:flex items-end justify-between gap-2 px-2">
        {arcSteps.map((step, i) => {
          const Icon = step.icon;
          const heights = [64, 80, 96, 112, 128];
          return (
            <React.Fragment key={i}>
              <div className="flex flex-col items-center flex-1">
                <div
                  className={`w-full ${step.bg} ${step.border} border rounded-t-xl flex flex-col items-center justify-end pb-3 px-2 transition-all`}
                  style={{ height: heights[i] }}
                >
                  <Icon className={`size-5 ${step.color} mb-1.5`} />
                  <span className={`text-[11px] font-bold ${step.color} text-center leading-tight`}>
                    {t(step.label)}
                  </span>
                  <span className="text-[9px] text-zinc-500 mt-0.5">{t(step.sub)}</span>
                </div>
                <div className={`w-full h-1 rounded-b ${step.bg}`} />
              </div>
              {i < arcSteps.length - 1 && (
                <ArrowRight className="size-3.5 text-zinc-600 shrink-0 mb-8" />
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Mobile: vertical flow */}
      <div className="md:hidden space-y-2">
        {arcSteps.map((step, i) => {
          const Icon = step.icon;
          return (
            <React.Fragment key={i}>
              <div className={`flex items-center gap-3 ${step.bg} ${step.border} border rounded-xl px-4 py-3`}>
                <Icon className={`size-5 ${step.color} shrink-0`} />
                <div>
                  <span className={`text-xs font-bold ${step.color}`}>{t(step.label)}</span>
                  <span className="text-[10px] text-zinc-500 ml-2">{t(step.sub)}</span>
                </div>
              </div>
              {i < arcSteps.length - 1 && (
                <div className="flex justify-center">
                  <ArrowDown className="size-3.5 text-zinc-600" />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   3. JUNIOR VS SENIOR — Comparison Cards
   ═══════════════════════════════════════════════════════════════ */
export function JuniorVsSeniorComparison() {
  const { t } = useLanguage();

  const comparisons = [
    {
      junior: { en: 'Shows what they designed', es: 'Muestra qué diseñó' },
      senior: { en: 'Shows why they designed it', es: 'Muestra por qué lo diseñó' },
    },
    {
      junior: { en: 'Presents deliverables', es: 'Presenta entregables' },
      senior: { en: 'Presents decisions', es: 'Presenta decisiones' },
    },
    {
      junior: { en: 'Describes features', es: 'Describe funcionalidades' },
      senior: { en: 'Quantifies impact', es: 'Cuantifica impacto' },
    },
    {
      junior: { en: '"We launched the feature"', es: '"Lanzamos la funcionalidad"' },
      senior: { en: '"Completion rate +156%"', es: '"Tasa de completado +156%"' },
    },
    {
      junior: { en: 'Linear perfect process', es: 'Proceso lineal perfecto' },
      senior: { en: 'Honest challenges & pivots', es: 'Desafíos honestos y pivotes' },
    },
  ];

  return (
    <div className="my-6 p-5 bg-zinc-900/60 border border-zinc-700/50 rounded-xl">
      <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-4">
        {t({ en: 'Junior vs Senior Case Study', es: 'Caso de Estudio Junior vs Senior' })}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
        {/* Header */}
        <div className="hidden md:flex items-center gap-2 px-3 py-2">
          <User className="size-4 text-orange-400" />
          <span className="text-sm font-bold text-orange-400">
            {t({ en: 'Junior Portfolio', es: 'Portafolio Junior' })}
          </span>
        </div>
        <div className="hidden md:flex items-center gap-2 px-3 py-2">
          <Award className="size-4 text-emerald-400" />
          <span className="text-sm font-bold text-emerald-400">
            {t({ en: 'Senior Portfolio', es: 'Portafolio Senior' })}
          </span>
        </div>
      </div>

      {comparisons.map((comp, i) => (
        <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-2">
          <div className="flex items-center gap-2.5 bg-orange-950/20 border border-orange-500/20 rounded-lg px-3 py-2.5">
            <XCircle className="size-4 text-orange-400/70 shrink-0" />
            <span className="text-sm text-orange-200/80">{t(comp.junior)}</span>
          </div>
          <div className="flex items-center gap-2.5 bg-emerald-950/20 border border-emerald-500/20 rounded-lg px-3 py-2.5">
            <CheckCircle2 className="size-4 text-emerald-400/70 shrink-0" />
            <span className="text-sm text-emerald-200/80">{t(comp.senior)}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   4. RECRUITER TIME VISUAL — 3-5 Minute Window
   ═══════════════════════════════════════════════════════════════ */
export function RecruiterTimeVisual() {
  const { t } = useLanguage();

  const timeBlocks = [
    {
      seconds: '0-30s',
      label: { en: 'First Impression', es: 'Primera Impresión' },
      what: { en: 'Title, hero image, impact summary card', es: 'Título, imagen hero, tarjeta de resumen de impacto' },
      width: 'w-[15%]',
      color: 'bg-red-500',
      importance: { en: 'Critical', es: 'Crítico' },
      importanceColor: 'text-red-400',
    },
    {
      seconds: '30s-1m',
      label: { en: 'Problem Scan', es: 'Escaneo del Problema' },
      what: { en: 'Problem statement, context, your role', es: 'Declaración del problema, contexto, tu rol' },
      width: 'w-[15%]',
      color: 'bg-orange-500',
      importance: { en: 'High', es: 'Alto' },
      importanceColor: 'text-orange-400',
    },
    {
      seconds: '1-2m',
      label: { en: 'Process Skim', es: 'Lectura del Proceso' },
      what: { en: 'Key decisions, trade-offs, before/after visuals', es: 'Decisiones clave, trade-offs, visuales antes/después' },
      width: 'w-[25%]',
      color: 'bg-yellow-500',
      importance: { en: 'Medium', es: 'Medio' },
      importanceColor: 'text-yellow-400',
    },
    {
      seconds: '2-3m',
      label: { en: 'Impact Check', es: 'Verificación de Impacto' },
      what: { en: 'Metrics, results, business value', es: 'Métricas, resultados, valor de negocio' },
      width: 'w-[25%]',
      color: 'bg-emerald-500',
      importance: { en: 'Critical', es: 'Crítico' },
      importanceColor: 'text-emerald-400',
    },
    {
      seconds: '3-5m',
      label: { en: 'Deep Read (rare)', es: 'Lectura Profunda (raro)' },
      what: { en: 'Full process, reflection — only if hooked', es: 'Proceso completo, reflexión — solo si enganchado' },
      width: 'w-[20%]',
      color: 'bg-zinc-500',
      importance: { en: 'Bonus', es: 'Bonus' },
      importanceColor: 'text-zinc-400',
    },
  ];

  return (
    <div className="my-6 p-5 bg-zinc-900/60 border border-zinc-700/50 rounded-xl">
      <div className="flex items-center gap-2 mb-1">
        <Clock className="size-4 text-indigo-400" />
        <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
          {t({ en: 'How Recruiters Read Your Case Study', es: 'Cómo los Reclutadores Leen Tu Caso de Estudio' })}
        </p>
      </div>
      <p className="text-[11px] text-zinc-600 mb-5">
        {t({ en: 'Average recruiter time: 3-5 minutes per portfolio', es: 'Tiempo promedio del reclutador: 3-5 minutos por portafolio' })}
      </p>

      {/* Timeline bar */}
      <div className="flex rounded-lg overflow-hidden h-3 mb-4">
        {timeBlocks.map((block, i) => (
          <div
            key={i}
            className={`${block.color} ${block.width} ${i > 0 ? 'border-l border-black/30' : ''} transition-all`}
            style={{ opacity: i === timeBlocks.length - 1 ? 0.4 : 1 - i * 0.1 }}
          />
        ))}
      </div>

      {/* Details */}
      <div className="space-y-2">
        {timeBlocks.map((block, i) => (
          <div key={i} className="flex items-start gap-3 text-sm">
            <span className="text-[11px] font-mono text-zinc-500 w-14 shrink-0 pt-0.5">{block.seconds}</span>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-medium text-zinc-300 text-xs">{t(block.label)}</span>
                <span className={`text-[10px] font-bold uppercase ${block.importanceColor}`}>
                  {t(block.importance)}
                </span>
              </div>
              <p className="text-[11px] text-zinc-500 mt-0.5">{t(block.what)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   5. 7-SECTION FRAMEWORK — Visual Structure Diagram
   ═══════════════════════════════════════════════════════════════ */
export function SevenSectionFramework() {
  const { t } = useLanguage();

  const sections = [
    {
      num: 1,
      icon: Target,
      title: { en: 'Context', es: 'Contexto' },
      desc: { en: 'Team, timeline, constraints, your role', es: 'Equipo, timeline, restricciones, tu rol' },
      words: { en: '~150 words', es: '~150 palabras' },
      color: 'text-blue-400',
      bg: 'bg-blue-500/10',
      border: 'border-blue-500/30',
    },
    {
      num: 2,
      icon: AlertTriangle,
      title: { en: 'Problem', es: 'Problema' },
      desc: { en: 'User pain + business impact with data', es: 'Dolor del usuario + impacto negocio con datos' },
      words: { en: '~200 words', es: '~200 palabras' },
      color: 'text-red-400',
      bg: 'bg-red-500/10',
      border: 'border-red-500/30',
    },
    {
      num: 3,
      icon: Search,
      title: { en: 'Discovery', es: 'Descubrimiento' },
      desc: { en: 'Research methods, key insights, surprises', es: 'Métodos de investigación, insights clave, sorpresas' },
      words: { en: '~250 words', es: '~250 palabras' },
      color: 'text-cyan-400',
      bg: 'bg-cyan-500/10',
      border: 'border-cyan-500/30',
    },
    {
      num: 4,
      icon: Lightbulb,
      title: { en: 'Strategy', es: 'Estrategia' },
      desc: { en: 'Options considered, trade-offs, chosen direction', es: 'Opciones consideradas, trade-offs, dirección elegida' },
      words: { en: '~200 words', es: '~200 palabras' },
      color: 'text-yellow-400',
      bg: 'bg-yellow-500/10',
      border: 'border-yellow-500/30',
    },
    {
      num: 5,
      icon: Zap,
      title: { en: 'Execution', es: 'Ejecución' },
      desc: { en: 'Key design decisions, iteration, collaboration', es: 'Decisiones de diseño clave, iteración, colaboración' },
      words: { en: '~200 words', es: '~200 palabras' },
      color: 'text-purple-400',
      bg: 'bg-purple-500/10',
      border: 'border-purple-500/30',
    },
    {
      num: 6,
      icon: BarChart3,
      title: { en: 'Impact', es: 'Impacto' },
      desc: { en: 'Before/after metrics, business value, user feedback', es: 'Métricas antes/después, valor de negocio, feedback' },
      words: { en: '~150 words', es: '~150 palabras' },
      color: 'text-emerald-400',
      bg: 'bg-emerald-500/10',
      border: 'border-emerald-500/30',
    },
    {
      num: 7,
      icon: MessageSquare,
      title: { en: 'Reflection', es: 'Reflexión' },
      desc: { en: 'Lessons learned, what you\'d change, growth', es: 'Lecciones aprendidas, qué cambiarías, crecimiento' },
      words: { en: '~100 words', es: '~100 palabras' },
      color: 'text-amber-400',
      bg: 'bg-amber-500/10',
      border: 'border-amber-500/30',
    },
  ];

  return (
    <div className="my-6 p-5 bg-zinc-900/60 border border-zinc-700/50 rounded-xl">
      <div className="flex items-center gap-2 mb-1">
        <BookOpen className="size-4 text-indigo-400" />
        <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
          {t({ en: '7-Section Case Study Framework', es: 'Marco de 7 Secciones para Caso de Estudio' })}
        </p>
      </div>
      <p className="text-[11px] text-zinc-600 mb-5">
        {t({ en: 'Target: 5-7 minute read (~1,250 words total)', es: 'Objetivo: lectura de 5-7 minutos (~1,250 palabras total)' })}
      </p>

      {/* Desktop: 2-column grid */}
      <div className="hidden lg:grid grid-cols-7 gap-1.5">
        {sections.map((sec) => {
          const Icon = sec.icon;
          return (
            <div
              key={sec.num}
              className={`${sec.bg} ${sec.border} border rounded-xl p-3 flex flex-col items-center text-center transition-all hover:scale-[1.03]`}
            >
              <div className={`size-8 rounded-full ${sec.bg} ${sec.border} border flex items-center justify-center mb-2`}>
                <Icon className={`size-4 ${sec.color}`} />
              </div>
              <span className={`text-[11px] font-bold ${sec.color} mb-1`}>{t(sec.title)}</span>
              <span className="text-[9px] text-zinc-500 leading-tight mb-2">{t(sec.desc)}</span>
              <span className="text-[9px] font-mono text-zinc-600">{t(sec.words)}</span>
            </div>
          );
        })}
      </div>

      {/* Tablet: 4+3 grid */}
      <div className="hidden md:grid lg:hidden grid-cols-4 gap-2">
        {sections.map((sec) => {
          const Icon = sec.icon;
          return (
            <div
              key={sec.num}
              className={`${sec.bg} ${sec.border} border rounded-xl p-3 flex flex-col items-center text-center`}
            >
              <div className={`size-7 rounded-full ${sec.bg} ${sec.border} border flex items-center justify-center mb-1.5`}>
                <Icon className={`size-3.5 ${sec.color}`} />
              </div>
              <span className={`text-[11px] font-bold ${sec.color} mb-0.5`}>{t(sec.title)}</span>
              <span className="text-[9px] text-zinc-500 leading-tight">{t(sec.desc)}</span>
            </div>
          );
        })}
      </div>

      {/* Mobile: compact list */}
      <div className="md:hidden space-y-1.5">
        {sections.map((sec) => {
          const Icon = sec.icon;
          return (
            <div
              key={sec.num}
              className={`flex items-center gap-3 ${sec.bg} ${sec.border} border rounded-lg px-3 py-2.5`}
            >
              <div className={`size-7 rounded-full ${sec.bg} ${sec.border} border flex items-center justify-center shrink-0`}>
                <Icon className={`size-3.5 ${sec.color}`} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className={`text-xs font-bold ${sec.color}`}>{sec.num}. {t(sec.title)}</span>
                  <span className="text-[9px] font-mono text-zinc-600">{t(sec.words)}</span>
                </div>
                <span className="text-[10px] text-zinc-500">{t(sec.desc)}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   6. WEAK VS STRONG IMPACT — Visual Comparison
   ═══════════════════════════════════════════════════════════════ */
export function WeakVsStrongImpact() {
  const { t } = useLanguage();

  return (
    <div className="my-6 p-5 bg-zinc-900/60 border border-zinc-700/50 rounded-xl">
      <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-4">
        {t({ en: 'Impact Section: Weak vs Strong', es: 'Sección de Impacto: Débil vs Fuerte' })}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Weak */}
        <div className="bg-red-950/20 border border-red-500/20 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-3">
            <XCircle className="size-4 text-red-400" />
            <span className="text-sm font-bold text-red-400">
              {t({ en: 'Weak', es: 'Débil' })}
            </span>
          </div>
          <div className="bg-black/40 rounded-lg p-3 border border-red-900/30">
            <p className="text-sm text-red-200/60 italic leading-relaxed">
              {t({
                en: '"The redesign improved the user experience significantly and received positive feedback from stakeholders."',
                es: '"El rediseño mejoró la experiencia del usuario significativamente y recibió feedback positivo de stakeholders."'
              })}
            </p>
          </div>
          <div className="mt-3 space-y-1.5">
            <div className="flex items-center gap-2 text-[11px] text-red-300/70">
              <XCircle className="size-3 shrink-0" />
              <span>{t({ en: 'No specific metrics', es: 'Sin métricas específicas' })}</span>
            </div>
            <div className="flex items-center gap-2 text-[11px] text-red-300/70">
              <XCircle className="size-3 shrink-0" />
              <span>{t({ en: 'Vague claims anyone could make', es: 'Afirmaciones vagas que cualquiera podría hacer' })}</span>
            </div>
            <div className="flex items-center gap-2 text-[11px] text-red-300/70">
              <XCircle className="size-3 shrink-0" />
              <span>{t({ en: 'No before/after comparison', es: 'Sin comparación antes/después' })}</span>
            </div>
          </div>
        </div>

        {/* Strong */}
        <div className="bg-emerald-950/20 border border-emerald-500/20 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-3">
            <CheckCircle2 className="size-4 text-emerald-400" />
            <span className="text-sm font-bold text-emerald-400">
              {t({ en: 'Strong', es: 'Fuerte' })}
            </span>
          </div>
          <div className="bg-black/40 rounded-lg p-3 border border-emerald-900/30">
            <div className="space-y-2">
              {/* Metrics cards */}
              <div className="flex items-center justify-between text-sm">
                <span className="text-zinc-400 text-xs">{t({ en: 'Completion', es: 'Completado' })}</span>
                <div className="flex items-center gap-2">
                  <span className="text-red-400/70 text-xs line-through">34%</span>
                  <ArrowRight className="size-3 text-zinc-600" />
                  <span className="text-emerald-400 font-bold text-xs">87%</span>
                  <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">+156%</span>
                </div>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-zinc-400 text-xs">{t({ en: 'Task Time', es: 'Tiempo Tarea' })}</span>
                <div className="flex items-center gap-2">
                  <span className="text-red-400/70 text-xs line-through">4m 30s</span>
                  <ArrowRight className="size-3 text-zinc-600" />
                  <span className="text-emerald-400 font-bold text-xs">1m 45s</span>
                  <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">-61%</span>
                </div>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-zinc-400 text-xs">{t({ en: 'Support Tickets', es: 'Tickets Soporte' })}</span>
                <div className="flex items-center gap-2">
                  <span className="text-red-400/70 text-xs line-through">23/wk</span>
                  <ArrowRight className="size-3 text-zinc-600" />
                  <span className="text-emerald-400 font-bold text-xs">4/wk</span>
                  <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">-83%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-3 space-y-1.5">
            <div className="flex items-center gap-2 text-[11px] text-emerald-300/70">
              <CheckCircle2 className="size-3 shrink-0" />
              <span>{t({ en: 'Specific before/after data', es: 'Datos específicos antes/después' })}</span>
            </div>
            <div className="flex items-center gap-2 text-[11px] text-emerald-300/70">
              <CheckCircle2 className="size-3 shrink-0" />
              <span>{t({ en: 'Percentage improvements', es: 'Porcentajes de mejora' })}</span>
            </div>
            <div className="flex items-center gap-2 text-[11px] text-emerald-300/70">
              <CheckCircle2 className="size-3 shrink-0" />
              <span>{t({ en: 'Undeniable evidence of value', es: 'Evidencia innegable de valor' })}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   7. INTERVIEW CALLBACK STATS — Visual Stat Cards
   ═══════════════════════════════════════════════════════════════ */
export function InterviewCallbackStats() {
  const { t } = useLanguage();

  const stats = [
    {
      value: '3-4x',
      label: { en: 'More interview callbacks', es: 'Más callbacks de entrevistas' },
      sub: { en: 'with structured case studies vs. visual-only portfolios', es: 'con casos de estudio estructurados vs. portafolios solo visuales' },
      color: 'text-indigo-400',
      bg: 'bg-indigo-500/10',
      border: 'border-indigo-500/30',
      icon: TrendingUp,
    },
    {
      value: '3-5',
      label: { en: 'Minutes per portfolio', es: 'Minutos por portafolio' },
      sub: { en: 'average time a recruiter spends reviewing your work', es: 'tiempo promedio que un reclutador dedica a revisar tu trabajo' },
      color: 'text-amber-400',
      bg: 'bg-amber-500/10',
      border: 'border-amber-500/30',
      icon: Clock,
    },
    {
      value: '5-7',
      label: { en: 'Minute ideal read', es: 'Minutos lectura ideal' },
      sub: { en: 'target length for a complete case study (~1,250 words)', es: 'longitud objetivo para un caso de estudio completo (~1,250 palabras)' },
      color: 'text-emerald-400',
      bg: 'bg-emerald-500/10',
      border: 'border-emerald-500/30',
      icon: FileText,
    },
    {
      value: '2-3',
      label: { en: 'Trade-offs minimum', es: 'Trade-offs mínimo' },
      sub: { en: 'explicit decision trade-offs needed to show senior-level thinking', es: 'trade-offs de decisión explícitos para demostrar pensamiento senior' },
      color: 'text-purple-400',
      bg: 'bg-purple-500/10',
      border: 'border-purple-500/30',
      icon: Zap,
    },
  ];

  return (
    <div className="my-6 grid grid-cols-2 md:grid-cols-4 gap-3">
      {stats.map((stat, i) => {
        const Icon = stat.icon;
        return (
          <div
            key={i}
            className={`${stat.bg} ${stat.border} border rounded-xl p-4 text-center transition-all hover:scale-[1.03]`}
          >
            <Icon className={`size-5 ${stat.color} mx-auto mb-2`} />
            <div className={`text-2xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
            <div className="text-xs font-medium text-zinc-300 mb-1">{t(stat.label)}</div>
            <div className="text-[10px] text-zinc-500 leading-tight">{t(stat.sub)}</div>
          </div>
        );
      })}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   8. PORTFOLIO MISTAKES VISUAL — Common Anti-patterns
   ═══════════════════════════════════════════════════════════════ */
export function PortfolioMistakesVisual() {
  const { t } = useLanguage();

  const mistakes = [
    {
      icon: Eye,
      title: { en: 'Screenshot Gallery', es: 'Galería de Screenshots' },
      problem: { en: 'Shows UI, not thinking', es: 'Muestra UI, no pensamiento' },
      fix: { en: 'Add context + decisions to every screen', es: 'Agrega contexto + decisiones a cada pantalla' },
      severity: 90,
    },
    {
      icon: BarChart3,
      title: { en: 'No Impact Metrics', es: 'Sin Métricas de Impacto' },
      problem: { en: '"We launched it" is not impact', es: '"Lo lanzamos" no es impacto' },
      fix: { en: 'Before/after numbers, even estimates', es: 'Números antes/después, incluso estimados' },
      severity: 95,
    },
    {
      icon: Briefcase,
      title: { en: 'No Business Context', es: 'Sin Contexto de Negocio' },
      problem: { en: 'Looks like you just follow orders', es: 'Parece que solo sigues órdenes' },
      fix: { en: 'Explain the business goal behind the project', es: 'Explica el objetivo de negocio detrás del proyecto' },
      severity: 75,
    },
    {
      icon: FileText,
      title: { en: 'Too Long (20+ min read)', es: 'Demasiado Largo (20+ min lectura)' },
      problem: { en: 'Most recruiters will skip it', es: 'La mayoría de reclutadores lo saltarán' },
      fix: { en: 'Target 5-7 min read with scannable headers', es: 'Apunta a 5-7 min con encabezados escaneables' },
      severity: 60,
    },
  ];

  return (
    <div className="my-6 p-5 bg-zinc-900/60 border border-zinc-700/50 rounded-xl">
      <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-4">
        {t({ en: 'Top Portfolio Mistakes & How to Fix Them', es: 'Principales Errores de Portafolio y Cómo Corregirlos' })}
      </p>

      <div className="space-y-3">
        {mistakes.map((m, i) => {
          const Icon = m.icon;
          return (
            <div key={i} className="bg-black/30 border border-zinc-800 rounded-xl p-4">
              <div className="flex items-start gap-3">
                <div className="size-9 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center shrink-0">
                  <Icon className="size-4 text-red-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span className="text-sm font-bold text-zinc-200">{t(m.title)}</span>
                    <span className="text-[10px] font-mono text-red-400/70 bg-red-500/10 px-1.5 py-0.5 rounded">
                      {t({ en: 'severity', es: 'severidad' })}: {m.severity}%
                    </span>
                  </div>
                  {/* Severity bar */}
                  <div className="w-full h-1.5 bg-zinc-800 rounded-full mb-2 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-red-500 to-orange-500 rounded-full transition-all"
                      style={{ width: `${m.severity}%` }}
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <div className="flex items-start gap-1.5">
                      <XCircle className="size-3 text-red-400/60 mt-0.5 shrink-0" />
                      <span className="text-[11px] text-red-200/60">{t(m.problem)}</span>
                    </div>
                    <div className="flex items-start gap-1.5">
                      <CheckCircle2 className="size-3 text-emerald-400/60 mt-0.5 shrink-0" />
                      <span className="text-[11px] text-emerald-200/70">{t(m.fix)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   9. STORYTELLING IMAGE BANNER — Visual break with image
   ═══════════════════════════════════════════════════════════════ */
export function StorytellingBanner() {
  const { t } = useLanguage();

  return (
    <div className="my-6 relative rounded-xl overflow-hidden border border-zinc-700/50">
      <ImageWithFallback
        src="https://images.unsplash.com/photo-1533749871411-5e21e14bcc7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdG9yeXRlbGxpbmclMjBwcmVzZW50YXRpb24lMjB3aGl0ZWJvYXJkJTIwc3RyYXRlZ3l8ZW58MXx8fHwxNzcxOTU4NTc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        alt={t({ en: 'Storytelling and strategy whiteboard', es: 'Pizarra de storytelling y estrategia' })}
        className="w-full h-40 object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
      <div className="absolute inset-0 flex items-center px-6">
        <div className="max-w-sm">
          <p className="text-lg font-bold text-white mb-1">
            {t({ en: 'Storytelling is Strategy', es: 'El Storytelling es Estrategia' })}
          </p>
          <p className="text-xs text-zinc-300 leading-relaxed">
            {t({
              en: 'The best case studies read like a detective story — here was the mystery, here is how we investigated, here is what we discovered, and here is what happened.',
              es: 'Los mejores casos de estudio se leen como una historia de detectives — aquí estaba el misterio, así investigamos, esto es lo que descubrimos, y esto es lo que pasó.'
            })}
          </p>
        </div>
      </div>
    </div>
  );
}
