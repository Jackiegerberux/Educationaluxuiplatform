import React from 'react';
import { useLanguage } from '../layout/LanguageContext';
import {
  Search,
  Map,
  Zap,
  Rocket,
  BarChart3,
  RefreshCw,
  TrendingUp,
  TrendingDown,
  Star,
  ArrowRight,
  ArrowDown,
  Factory,
  Target,
  CheckCircle2,
  XCircle,
  Music,
  Home,
  MessageSquare,
} from 'lucide-react';

/** ── Product Lifecycle Loop Diagram ──────────────────────────── */
export function ProductLifecycleLoop() {
  const { t } = useLanguage();

  const stages = [
    { icon: Search, label: { en: 'Discovery', es: 'Discovery' }, sub: { en: 'What to build', es: 'Qué construir' }, color: 'text-violet-400', bg: 'bg-violet-500/10', border: 'border-violet-500/30' },
    { icon: Map, label: { en: 'Roadmap', es: 'Roadmap' }, sub: { en: 'What to prioritize', es: 'Qué priorizar' }, color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/30' },
    { icon: Zap, label: { en: 'Sprint', es: 'Sprint' }, sub: { en: 'What to validate', es: 'Qué validar' }, color: 'text-cyan-400', bg: 'bg-cyan-500/10', border: 'border-cyan-500/30' },
    { icon: Rocket, label: { en: 'Release', es: 'Release' }, sub: { en: 'What to measure', es: 'Qué medir' }, color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/30' },
    { icon: BarChart3, label: { en: 'Metrics', es: 'Métricas' }, sub: { en: 'What we learned', es: 'Qué aprendimos' }, color: 'text-amber-400', bg: 'bg-amber-500/10', border: 'border-amber-500/30' },
    { icon: RefreshCw, label: { en: 'Iteration', es: 'Iteración' }, sub: { en: 'What to change', es: 'Qué cambiar' }, color: 'text-rose-400', bg: 'bg-rose-500/10', border: 'border-rose-500/30' },
  ];

  return (
    <div className="my-6 p-5 bg-zinc-900/60 border border-zinc-700/50 rounded-xl">
      <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-4">
        {t({ en: 'Product Lifecycle Loop', es: 'Ciclo de Vida del Producto' })}
      </p>

      {/* Desktop: horizontal flow */}
      <div className="hidden md:flex items-center justify-between gap-1">
        {stages.map((stage, i) => {
          const Icon = stage.icon;
          return (
            <React.Fragment key={i}>
              <div className={`flex flex-col items-center gap-1.5 ${stage.bg} ${stage.border} border rounded-xl px-3 py-3 min-w-[100px] flex-1`}>
                <Icon className={`size-5 ${stage.color}`} />
                <span className={`text-xs font-bold ${stage.color}`}>{t(stage.label)}</span>
                <span className="text-[10px] text-zinc-500 text-center leading-tight">{t(stage.sub)}</span>
              </div>
              {i < stages.length - 1 && (
                <ArrowRight className="size-4 text-zinc-600 shrink-0" />
              )}
              {i === stages.length - 1 && (
                <div className="flex items-center gap-1 shrink-0">
                  <ArrowRight className="size-4 text-zinc-600" />
                  <RefreshCw className="size-3.5 text-violet-500/60" />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Mobile: grid */}
      <div className="md:hidden grid grid-cols-2 gap-2">
        {stages.map((stage, i) => {
          const Icon = stage.icon;
          return (
            <div key={i} className={`flex items-center gap-2 ${stage.bg} ${stage.border} border rounded-lg px-3 py-2`}>
              <Icon className={`size-4 ${stage.color} shrink-0`} />
              <div>
                <span className={`text-xs font-bold ${stage.color}`}>{t(stage.label)}</span>
                <p className="text-[10px] text-zinc-500 leading-tight">{t(stage.sub)}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/** ── North Star Examples ─────────────────────────────────────── */
export function NorthStarExamples() {
  const { t } = useLanguage();

  const examples = [
    { icon: Music, company: 'Spotify', metric: { en: 'Time Spent Listening', es: 'Tiempo Escuchando' }, color: 'text-green-400', bg: 'bg-green-500/10' },
    { icon: Home, company: 'Airbnb', metric: { en: 'Nights Booked', es: 'Noches Reservadas' }, color: 'text-rose-400', bg: 'bg-rose-500/10' },
    { icon: MessageSquare, company: 'Slack', metric: { en: 'Messages Sent in Teams', es: 'Mensajes en Equipos' }, color: 'text-purple-400', bg: 'bg-purple-500/10' },
  ];

  return (
    <div className="my-6 p-5 bg-zinc-900/60 border border-zinc-700/50 rounded-xl">
      <div className="flex items-center gap-2 mb-4">
        <Star className="size-4 text-amber-400" />
        <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
          {t({ en: 'North Star Metric Examples', es: 'Ejemplos de Métrica North Star' })}
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {examples.map((ex, i) => {
          const Icon = ex.icon;
          return (
            <div key={i} className={`${ex.bg} border border-zinc-700/40 rounded-lg p-4 text-center`}>
              <Icon className={`size-6 ${ex.color} mx-auto mb-2`} />
              <p className="text-sm font-bold text-white">{ex.company}</p>
              <p className={`text-xs ${ex.color} mt-1`}>{t(ex.metric)}</p>
            </div>
          );
        })}
      </div>
      <p className="text-[11px] text-zinc-600 mt-3 text-center italic">
        {t({ en: 'Not revenue metrics \u2014 proxies for user value that correlate with revenue', es: 'No son métricas de ingreso \u2014 proxies de valor de usuario que correlacionan con ingresos' })}
      </p>
    </div>
  );
}

/** ── Leading vs Lagging Indicators ───────────────────────────── */
export function LeadingVsLagging() {
  const { t } = useLanguage();

  return (
    <div className="my-6 p-5 bg-zinc-900/60 border border-zinc-700/50 rounded-xl">
      <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-4">
        {t({ en: 'Leading vs Lagging Indicators', es: 'Indicadores Leading vs Lagging' })}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Leading */}
        <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp className="size-5 text-emerald-400" />
            <h4 className="text-sm font-bold text-emerald-400">Leading</h4>
            <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full ml-auto">
              {t({ en: 'Actionable NOW', es: 'Accionable AHORA' })}
            </span>
          </div>
          <p className="text-xs text-zinc-400 mb-3 leading-relaxed">
            {t({ en: 'Predict future outcomes. Optimize these.', es: 'Predicen resultados futuros. Optimiza estos.' })}
          </p>
          <ul className="space-y-1.5">
            {[
              { en: 'Activation rate', es: 'Tasa de activaci\u00f3n' },
              { en: 'Day 1 retention', es: 'Retenci\u00f3n D\u00eda 1' },
              { en: 'Feature adoption', es: 'Adopci\u00f3n de feature' },
              { en: 'Time to value', es: 'Tiempo a valor' },
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-xs text-zinc-300">
                <CheckCircle2 className="size-3 text-emerald-400 shrink-0" />
                {t(item)}
              </li>
            ))}
          </ul>
        </div>

        {/* Lagging */}
        <div className="bg-orange-500/5 border border-orange-500/20 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-3">
            <TrendingDown className="size-5 text-orange-400" />
            <h4 className="text-sm font-bold text-orange-400">Lagging</h4>
            <span className="text-[10px] bg-orange-500/20 text-orange-300 px-2 py-0.5 rounded-full ml-auto">
              {t({ en: 'Too late to react', es: 'Tarde para reaccionar' })}
            </span>
          </div>
          <p className="text-xs text-zinc-400 mb-3 leading-relaxed">
            {t({ en: 'Confirm past performance. Report these.', es: 'Confirman desempe\u00f1o pasado. Reporta estos.' })}
          </p>
          <ul className="space-y-1.5">
            {[
              { en: 'Monthly revenue', es: 'Ingreso mensual' },
              { en: 'Churn rate', es: 'Tasa de churn' },
              { en: 'Quarterly growth', es: 'Crecimiento trimestral' },
              { en: 'LTV (Lifetime Value)', es: 'LTV (Valor de por vida)' },
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-xs text-zinc-300">
                <XCircle className="size-3 text-orange-400 shrink-0" />
                {t(item)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

/** ── Feature Factory vs Metrics-Driven Comparison ────────────── */
export function FeatureFactoryComparison() {
  const { t } = useLanguage();

  const rows = [
    {
      dimension: { en: 'Decision basis', es: 'Base de decisi\u00f3n' },
      factory: { en: 'Stakeholder requests', es: 'Peticiones de stakeholders' },
      driven: { en: 'Data + hypotheses', es: 'Datos + hip\u00f3tesis' },
    },
    {
      dimension: { en: 'Success definition', es: 'Definici\u00f3n de \u00e9xito' },
      factory: { en: '"We shipped on time"', es: '"Entregamos a tiempo"' },
      driven: { en: '"Activation +12%"', es: '"Activaci\u00f3n +12%"' },
    },
    {
      dimension: { en: 'Feature fate', es: 'Destino del feature' },
      factory: { en: 'Ships and is forgotten', es: 'Se lanza y se olvida' },
      driven: { en: 'Measured, iterated or killed', es: 'Medido, iterado o eliminado' },
    },
    {
      dimension: { en: 'Designer\u2019s voice', es: 'Voz del dise\u00f1ador' },
      factory: { en: '"Make it pretty"', es: '"Haz que se vea bonito"' },
      driven: { en: 'Seat at the strategy table', es: 'Asiento en la mesa de estrategia' },
    },
  ];

  return (
    <div className="my-6 p-5 bg-zinc-900/60 border border-zinc-700/50 rounded-xl">
      <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-4">
        {t({ en: 'Feature Factory vs Metrics-Driven', es: 'F\u00e1brica de Features vs Guiado por M\u00e9tricas' })}
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-xs">
          <thead>
            <tr className="border-b border-zinc-700/50">
              <th className="py-2 px-3 text-left text-zinc-500 font-medium w-1/3"></th>
              <th className="py-2 px-3 text-center w-1/3">
                <div className="flex items-center justify-center gap-1.5">
                  <Factory className="size-3.5 text-red-400" />
                  <span className="text-red-400 font-bold">Feature Factory</span>
                </div>
              </th>
              <th className="py-2 px-3 text-center w-1/3">
                <div className="flex items-center justify-center gap-1.5">
                  <Target className="size-3.5 text-emerald-400" />
                  <span className="text-emerald-400 font-bold">Metrics-Driven</span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className="border-b border-zinc-800/50 last:border-0">
                <td className="py-2.5 px-3 text-zinc-400 font-medium">{t(row.dimension)}</td>
                <td className="py-2.5 px-3 text-center">
                  <span className="text-red-300/80 bg-red-500/10 px-2 py-0.5 rounded">{t(row.factory)}</span>
                </td>
                <td className="py-2.5 px-3 text-center">
                  <span className="text-emerald-300/80 bg-emerald-500/10 px-2 py-0.5 rounded">{t(row.driven)}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/** ── Measurement Loop Diagram ────────────────────────────────── */
export function MeasurementLoop() {
  const { t } = useLanguage();

  const steps = [
    { label: { en: 'Research', es: 'Investigaci\u00f3n' }, color: 'bg-violet-500', ring: 'ring-violet-500/30' },
    { label: { en: 'Hypothesis', es: 'Hip\u00f3tesis' }, color: 'bg-blue-500', ring: 'ring-blue-500/30' },
    { label: { en: 'Experiment', es: 'Experimento' }, color: 'bg-cyan-500', ring: 'ring-cyan-500/30' },
    { label: { en: 'Measure', es: 'Medir' }, color: 'bg-emerald-500', ring: 'ring-emerald-500/30' },
    { label: { en: 'Decide', es: 'Decidir' }, color: 'bg-amber-500', ring: 'ring-amber-500/30' },
    { label: { en: 'Iterate', es: 'Iterar' }, color: 'bg-rose-500', ring: 'ring-rose-500/30' },
  ];

  return (
    <div className="my-6 p-5 bg-zinc-900/60 border border-zinc-700/50 rounded-xl">
      <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-4">
        {t({ en: 'The Measurement Loop', es: 'El Loop de Medici\u00f3n' })}
      </p>
      <div className="flex flex-wrap items-center justify-center gap-2">
        {steps.map((step, i) => (
          <React.Fragment key={i}>
            <div className={`flex items-center gap-2 ${step.ring} ring-1 rounded-full px-3 py-1.5`}>
              <div className={`size-2 rounded-full ${step.color}`} />
              <span className="text-xs font-semibold text-zinc-200">{t(step.label)}</span>
            </div>
            {i < steps.length - 1 && (
              <ArrowRight className="size-3.5 text-zinc-600 shrink-0" />
            )}
            {i === steps.length - 1 && (
              <div className="flex items-center gap-0.5">
                <ArrowRight className="size-3.5 text-zinc-600" />
                <RefreshCw className="size-3 text-violet-400/50" />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
      <p className="text-[11px] text-zinc-600 mt-3 text-center italic">
        {t({ en: 'Without metrics, you are iterating blind', es: 'Sin m\u00e9tricas, est\u00e1s iterando a ciegas' })}
      </p>
    </div>
  );
}

/** ── Impact Formula Callout ──────────────────────────────────── */
export function ImpactFormulaCallout() {
  const { t } = useLanguage();

  return (
    <div className="my-6 p-4 bg-gradient-to-r from-indigo-950/40 to-violet-950/40 border border-indigo-500/20 rounded-xl">
      <p className="text-xs text-indigo-300/70 uppercase tracking-wider font-semibold mb-2">
        {t({ en: 'The designer\'s power move', es: 'El movimiento de poder del dise\u00f1ador' })}
      </p>
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
        <div className="flex-1">
          <p className="text-sm text-zinc-200 leading-relaxed">
            <span className="text-indigo-300 font-mono text-xs bg-indigo-500/10 px-2 py-0.5 rounded mr-1">
              {t({ en: '"Our redesign increased activation by 12%', es: '"Nuestro redise\u00f1o aument\u00f3 la activaci\u00f3n en 12%' })}
            </span>
          </p>
          <p className="text-sm text-zinc-200 leading-relaxed mt-1">
            <span className="text-emerald-300 font-mono text-xs bg-emerald-500/10 px-2 py-0.5 rounded mr-1">
              {t({ en: '...projected to drive $340K ARR"', es: '...proyectado a impulsar $340K ARR"' })}
            </span>
          </p>
        </div>
        <div className="shrink-0">
          <ArrowRight className="size-4 text-zinc-600 hidden sm:block" />
          <ArrowDown className="size-4 text-zinc-600 sm:hidden" />
        </div>
        <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg px-4 py-2 shrink-0">
          <p className="text-xs text-emerald-400 font-bold text-center">
            {t({ en: 'Seat at the strategy table', es: 'Asiento en la mesa de estrategia' })}
          </p>
        </div>
      </div>
    </div>
  );
}
