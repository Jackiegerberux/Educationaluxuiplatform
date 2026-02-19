import React, { useState, useMemo } from 'react';
import { useLanguage } from '../layout/LanguageContext';
import { Link } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import {
  ClipboardCheck, BarChart3, FileText, ChevronDown, ChevronUp,
  CheckCircle2, AlertTriangle, XCircle, Info,
  Download, Eye, Sparkles, Search, ExternalLink, Lightbulb
} from 'lucide-react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  Cell, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis
} from 'recharts';

// ═══════════════════════════════════════════════════════════════
// TYPES
// ═══════════════════════════════════════════════════════════════

interface Finding {
  id: string;
  screen: string;
  heuristicId: number;
  severity: 0 | 1 | 2 | 3 | 4;
  description: string;
  recommendation: string;
}

// ═══════════════════════════════════════════════════════════════
// CONSTANTS
// ═══════════════════════════════════════════════════════════════

const HEURISTICS = [
  { id: 1, short: 'H1', en: 'Visibility of System Status', es: 'Visibilidad del Estado del Sistema' },
  { id: 2, short: 'H2', en: 'Match Between System & Real World', es: 'Correspondencia Sistema-Mundo Real' },
  { id: 3, short: 'H3', en: 'User Control & Freedom', es: 'Control y Libertad del Usuario' },
  { id: 4, short: 'H4', en: 'Consistency & Standards', es: 'Consistencia y Estándares' },
  { id: 5, short: 'H5', en: 'Error Prevention', es: 'Prevención de Errores' },
  { id: 6, short: 'H6', en: 'Recognition Over Recall', es: 'Reconocimiento sobre Recuerdo' },
  { id: 7, short: 'H7', en: 'Flexibility & Efficiency', es: 'Flexibilidad y Eficiencia' },
  { id: 8, short: 'H8', en: 'Aesthetic & Minimalist Design', es: 'Diseño Estético y Minimalista' },
  { id: 9, short: 'H9', en: 'Error Recovery', es: 'Recuperación de Errores' },
  { id: 10, short: 'H10', en: 'Help & Documentation', es: 'Ayuda y Documentación' },
];

const SEVERITY_LEVELS = [
  { value: 0, en: 'Not a problem', es: 'No es problema', color: 'text-zinc-400', bg: 'bg-zinc-700/30', border: 'border-zinc-700', dot: 'bg-zinc-500' },
  { value: 1, en: 'Cosmetic', es: 'Cosmético', color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/30', dot: 'bg-blue-500' },
  { value: 2, en: 'Minor', es: 'Menor', color: 'text-yellow-400', bg: 'bg-yellow-500/10', border: 'border-yellow-500/30', dot: 'bg-yellow-500' },
  { value: 3, en: 'Major', es: 'Mayor', color: 'text-orange-400', bg: 'bg-orange-500/10', border: 'border-orange-500/30', dot: 'bg-orange-500' },
  { value: 4, en: 'Catastrophic', es: 'Catastrófico', color: 'text-red-400', bg: 'bg-red-500/10', border: 'border-red-500/30', dot: 'bg-red-500' },
];

const SEVERITY_COLORS = ['#71717a', '#3b82f6', '#eab308', '#f97316', '#ef4444'];

const CHECKLIST_DATA: { heuristicId: number; questions: { en: string; es: string }[] }[] = [
  { heuristicId: 1, questions: [
    { en: 'Does the system show the current state clearly (loading, processing, success, error)?', es: '¿El sistema muestra el estado actual claramente (cargando, procesando, éxito, error)?' },
    { en: 'Is there feedback within 400ms after every user action?', es: '¿Hay feedback dentro de 400ms después de cada acción del usuario?' },
    { en: 'Are progress indicators shown for multi-step processes?', es: '¿Se muestran indicadores de progreso para procesos de múltiples pasos?' },
  ]},
  { heuristicId: 2, questions: [
    { en: 'Does the interface use language and concepts familiar to the user (not system jargon)?', es: '¿La interfaz usa lenguaje y conceptos familiares para el usuario (no jerga del sistema)?' },
    { en: 'Are icons and metaphors consistent with real-world conventions?', es: '¿Los iconos y metáforas son consistentes con las convenciones del mundo real?' },
    { en: 'Is information presented in a natural and logical order?', es: '¿La información se presenta en un orden natural y lógico?' },
  ]},
  { heuristicId: 3, questions: [
    { en: 'Can users undo/redo their actions easily?', es: '¿Los usuarios pueden deshacer/rehacer sus acciones fácilmente?' },
    { en: 'Is there a clearly marked "emergency exit" to leave unwanted states?', es: '¿Hay una "salida de emergencia" claramente marcada para dejar estados no deseados?' },
    { en: 'Can users cancel processes in progress?', es: '¿Los usuarios pueden cancelar procesos en curso?' },
  ]},
  { heuristicId: 4, questions: [
    { en: 'Are similar elements styled and positioned consistently throughout?', es: '¿Los elementos similares tienen estilo y posición consistentes?' },
    { en: 'Do buttons, links, and interactive elements follow platform conventions?', es: '¿Los botones, enlaces y elementos interactivos siguen convenciones de la plataforma?' },
    { en: 'Is terminology consistent (same word for same concept)?', es: '¿La terminología es consistente (misma palabra para mismo concepto)?' },
  ]},
  { heuristicId: 5, questions: [
    { en: 'Are dangerous actions (delete, submit) protected with confirmation dialogs?', es: '¿Las acciones peligrosas (eliminar, enviar) están protegidas con diálogos de confirmación?' },
    { en: 'Does form validation happen inline before submission?', es: '¿La validación de formularios ocurre inline antes del envío?' },
    { en: 'Are sensible defaults provided to minimize input errors?', es: '¿Se proporcionan valores predeterminados sensatos para minimizar errores de entrada?' },
  ]},
  { heuristicId: 6, questions: [
    { en: 'Are important actions and options visible without requiring users to remember them?', es: '¿Las acciones y opciones importantes son visibles sin requerir que los usuarios las recuerden?' },
    { en: 'Does the interface provide context (breadcrumbs, labels, suggestions)?', es: '¿La interfaz proporciona contexto (migas de pan, etiquetas, sugerencias)?' },
    { en: 'Is search with autocomplete available for large data sets?', es: '¿Hay búsqueda con autocompletado disponible para grandes conjuntos de datos?' },
  ]},
  { heuristicId: 7, questions: [
    { en: 'Are keyboard shortcuts available for frequent actions?', es: '¿Hay atajos de teclado disponibles para acciones frecuentes?' },
    { en: 'Can both novice and expert users accomplish tasks efficiently?', es: '¿Tanto usuarios novatos como expertos pueden completar tareas eficientemente?' },
    { en: 'Is content and functionality customizable/personalizable?', es: '¿El contenido y funcionalidad son personalizables?' },
  ]},
  { heuristicId: 8, questions: [
    { en: 'Does every element on the screen serve a clear purpose?', es: '¿Cada elemento en la pantalla tiene un propósito claro?' },
    { en: 'Is visual noise minimized (no unnecessary decorations)?', es: '¿Se minimiza el ruido visual (sin decoraciones innecesarias)?' },
    { en: 'Is information hierarchy clear with appropriate white space?', es: '¿La jerarquía de información es clara con espaciado apropiado?' },
  ]},
  { heuristicId: 9, questions: [
    { en: 'Are error messages written in plain language (not error codes)?', es: '¿Los mensajes de error están escritos en lenguaje simple (no códigos de error)?' },
    { en: 'Do error messages indicate the problem AND suggest a solution?', es: '¿Los mensajes de error indican el problema Y sugieren una solución?' },
    { en: 'Can users recover from errors without losing their work?', es: '¿Los usuarios pueden recuperarse de errores sin perder su trabajo?' },
  ]},
  { heuristicId: 10, questions: [
    { en: 'Is contextual help available at the point of need (tooltips, info icons)?', es: '¿Hay ayuda contextual disponible en el punto de necesidad (tooltips, iconos de info)?' },
    { en: 'Is documentation searchable and task-oriented?', es: '¿La documentación es buscable y orientada a tareas?' },
    { en: 'Is there an onboarding flow for first-time users?', es: '¿Hay un flujo de onboarding para usuarios nuevos?' },
  ]},
];

// Pre-populated demo findings
const DEMO_FINDINGS: Finding[] = [
  { id: 'f1', screen: 'Checkout', heuristicId: 5, severity: 4, description: 'No confirmation dialog before placing an order with items totaling $500+. Users can accidentally place duplicate orders.', recommendation: 'Add a confirmation modal showing order summary with "Confirm" and "Review Cart" buttons before processing payment.' },
  { id: 'f2', screen: 'Search', heuristicId: 1, severity: 3, description: 'No loading indicator when search results are being fetched. Users repeatedly click the search button thinking it did not work.', recommendation: 'Add a skeleton loading state or spinner within 100ms of search submission. Show result count once loaded.' },
  { id: 'f3', screen: 'Profile', heuristicId: 3, severity: 3, description: 'No undo option after deleting profile photo. Deletion is immediate and permanent.', recommendation: 'Implement a 10-second undo toast: "Photo removed. UNDO" that restores the image. Or use a "trash" state before permanent deletion.' },
  { id: 'f4', screen: 'Navigation', heuristicId: 4, severity: 2, description: 'Back button in settings uses a left arrow, but in product pages it says "Go Back" as text. Inconsistent patterns.', recommendation: 'Standardize all back navigation to use the same icon + text pattern across the entire application.' },
  { id: 'f5', screen: 'Login', heuristicId: 9, severity: 3, description: 'Error message shows "Error 401" instead of explaining the problem. Users don\'t understand why login failed.', recommendation: 'Replace with human-readable message: "Incorrect email or password. Try again or reset your password."' },
  { id: 'f6', screen: 'Dashboard', heuristicId: 8, severity: 1, description: 'Dashboard shows 12 widgets on initial load, creating visual overwhelm. Most users only use 3-4 widgets regularly.', recommendation: 'Show top-4 widgets by default with a "Show more" option. Allow widget customization in settings.' },
  { id: 'f7', screen: 'Signup', heuristicId: 2, severity: 2, description: 'Uses internal field name "usr_alias" as the label instead of "Username" in the signup form.', recommendation: 'Replace all technical field names with user-friendly labels. "usr_alias" → "Username", "pwd" → "Password".' },
];

// ═══════════════════════════════════════════════════════════════
// SUB-COMPONENTS
// ═══════════════════════════════════════════════════════════════

function SeverityBadge({ severity }: { severity: number }) {
  const level = SEVERITY_LEVELS[severity];
  return (
    <span className={`inline-flex items-center gap-1.5 text-[10px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-lg border ${level.bg} ${level.border} ${level.color}`}>
      <div className={`size-2 rounded-full ${level.dot}`} />
      {severity}
    </span>
  );
}

// ─── TAB 1: SEVERITY SCALE TABLE ─────────────────────────────
function SeverityScaleTab() {
  const { t } = useLanguage();

  return (
    <div className="space-y-6">
      <div className="flex items-start gap-3 bg-indigo-500/5 border border-indigo-500/15 rounded-xl p-4">
        <Info className="size-5 text-indigo-400 flex-shrink-0 mt-0.5" />
        <p className="text-sm text-zinc-300 leading-relaxed">
          {t({
            en: 'Nielsen\'s Severity Rating Scale (0-4) is used to classify each finding by its impact on user experience. The mean score across evaluators determines the final severity.',
            es: 'La Escala de Severidad de Nielsen (0-4) se usa para clasificar cada hallazgo por su impacto en la experiencia del usuario. El puntaje medio entre evaluadores determina la severidad final.'
          })}
        </p>
      </div>

      <div className="overflow-x-auto rounded-xl border border-zinc-700/50">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-zinc-800/80 border-b border-zinc-700/50">
              <th className="text-left px-4 py-3 text-xs text-zinc-400 uppercase tracking-wider font-semibold w-20">{t({ en: 'Rating', es: 'Rating' })}</th>
              <th className="text-left px-4 py-3 text-xs text-zinc-400 uppercase tracking-wider font-semibold w-32">{t({ en: 'Level', es: 'Nivel' })}</th>
              <th className="text-left px-4 py-3 text-xs text-zinc-400 uppercase tracking-wider font-semibold">{t({ en: 'Description', es: 'Descripción' })}</th>
              <th className="text-left px-4 py-3 text-xs text-zinc-400 uppercase tracking-wider font-semibold w-36">{t({ en: 'Priority', es: 'Prioridad' })}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-800/50">
            {SEVERITY_LEVELS.map(level => (
              <tr key={level.value} className="hover:bg-zinc-800/30 transition-colors">
                <td className="px-4 py-3.5">
                  <SeverityBadge severity={level.value} />
                </td>
                <td className={`px-4 py-3.5 font-bold ${level.color}`}>
                  {t({ en: level.en, es: level.es })}
                </td>
                <td className="px-4 py-3.5 text-zinc-300 text-xs leading-relaxed">
                  {t({
                    en: [
                      'Not a usability problem at all.',
                      'Cosmetic issue only — fix if extra time is available.',
                      'Minor problem — low priority fix needed.',
                      'Major problem — important to fix, high priority.',
                      'Usability catastrophe — imperative to fix before release.'
                    ][level.value],
                    es: [
                      'No es un problema de usabilidad en absoluto.',
                      'Solo problema cosmético — arreglar si hay tiempo extra.',
                      'Problema menor — se necesita arreglo de baja prioridad.',
                      'Problema mayor — importante arreglar, alta prioridad.',
                      'Catástrofe de usabilidad — imperativo arreglar antes del lanzamiento.'
                    ][level.value]
                  })}
                </td>
                <td className="px-4 py-3.5">
                  <span className={`text-xs font-semibold ${level.color}`}>
                    {t({
                      en: ['None', 'If time', 'Low', 'High', 'Critical'][level.value],
                      es: ['Ninguna', 'Si hay tiempo', 'Baja', 'Alta', 'Crítica'][level.value]
                    })}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Evaluator formula */}
      <div className="bg-zinc-800/50 rounded-xl border border-zinc-700/30 p-5">
        <h4 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
          <BarChart3 className="size-4 text-indigo-400" />
          {t({ en: 'Evaluator Coverage Formula', es: 'Fórmula de Cobertura de Evaluadores' })}
        </h4>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { n: 1, pct: '~35%' },
            { n: 3, pct: '~60%' },
            { n: 5, pct: '~75%' },
            { n: 10, pct: '~90%' },
          ].map(item => (
            <div key={item.n} className="bg-zinc-900/60 rounded-xl p-3 text-center border border-zinc-700/30">
              <div className="text-2xl font-black text-white">{item.n}</div>
              <div className="text-[10px] text-zinc-500 uppercase tracking-wider font-semibold mb-1.5">
                {t({ en: item.n === 1 ? 'evaluator' : 'evaluators', es: item.n === 1 ? 'evaluador' : 'evaluadores' })}
              </div>
              <div className="text-sm font-bold text-indigo-400">{item.pct}</div>
              <div className="text-[10px] text-zinc-500">{t({ en: 'problems found', es: 'problemas encontrados' })}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── TAB 2: INTERACTIVE CHECKLIST ────────────────────────────
function ChecklistTab() {
  const { t } = useLanguage();
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [expanded, setExpanded] = useState<number | null>(1);

  const totalQuestions = CHECKLIST_DATA.reduce((sum, h) => sum + h.questions.length, 0);
  const checkedCount = Object.values(checked).filter(Boolean).length;

  const toggle = (key: string) => setChecked(prev => ({ ...prev, [key]: !prev[key] }));

  return (
    <div className="space-y-6">
      {/* Progress */}
      <div className="bg-zinc-800/50 rounded-xl border border-zinc-700/30 p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-zinc-300 font-semibold">
            {t({ en: 'Checklist Progress', es: 'Progreso del Checklist' })}
          </span>
          <span className="text-sm font-bold text-indigo-400">{checkedCount}/{totalQuestions}</span>
        </div>
        <div className="h-2.5 bg-zinc-700/50 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${(checkedCount / totalQuestions) * 100}%` }}
            transition={{ duration: 0.4 }}
          />
        </div>
      </div>

      {/* Accordion */}
      <div className="space-y-2">
        {CHECKLIST_DATA.map(h => {
          const heuristic = HEURISTICS[h.heuristicId - 1];
          const isOpen = expanded === h.heuristicId;
          const hChecked = h.questions.filter((_, qi) => checked[`${h.heuristicId}-${qi}`]).length;
          const allDone = hChecked === h.questions.length;

          return (
            <div key={h.heuristicId} className={`rounded-xl border transition-colors ${allDone ? 'border-emerald-500/30 bg-emerald-500/5' : 'border-zinc-700/50 bg-zinc-800/40'}`}>
              <button
                onClick={() => setExpanded(isOpen ? null : h.heuristicId)}
                className="w-full flex items-center justify-between px-4 py-3 text-left"
              >
                <div className="flex items-center gap-3">
                  <span className={`text-xs font-mono font-bold ${allDone ? 'text-emerald-400' : 'text-indigo-400'}`}>
                    {heuristic.short}
                  </span>
                  <span className="text-sm text-zinc-200 font-semibold">
                    {t({ en: heuristic.en, es: heuristic.es })}
                  </span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${allDone ? 'bg-emerald-500/20 text-emerald-300' : 'bg-zinc-700/50 text-zinc-400'}`}>
                    {hChecked}/{h.questions.length}
                  </span>
                </div>
                {isOpen ? <ChevronUp className="size-4 text-zinc-500" /> : <ChevronDown className="size-4 text-zinc-500" />}
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-4 space-y-2">
                      {h.questions.map((q, qi) => {
                        const key = `${h.heuristicId}-${qi}`;
                        const isChecked = checked[key];
                        return (
                          <label
                            key={qi}
                            className={`flex items-start gap-3 p-3 rounded-lg cursor-pointer transition-colors ${isChecked ? 'bg-emerald-500/5 border border-emerald-500/15' : 'bg-zinc-900/40 border border-transparent hover:border-zinc-700/50'}`}
                          >
                            <input
                              type="checkbox"
                              checked={isChecked || false}
                              onChange={() => toggle(key)}
                              className="mt-0.5 accent-emerald-500"
                            />
                            <span className={`text-xs leading-relaxed ${isChecked ? 'text-emerald-300 line-through opacity-70' : 'text-zinc-300'}`}>
                              {t(q)}
                            </span>
                          </label>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── TAB 3: REPORT BUILDER & CHARTS ─────────────────────────
function ReportTab() {
  const { t } = useLanguage();
  const [findings] = useState<Finding[]>(DEMO_FINDINGS);
  const [selectedSeverity, setSelectedSeverity] = useState<number | null>(null);
  const [expandedFinding, setExpandedFinding] = useState<string | null>(null);

  // Severity distribution
  const severityDist = useMemo(() => {
    const counts = [0, 0, 0, 0, 0];
    findings.forEach(f => counts[f.severity]++);
    return counts.map((count, i) => ({
      name: t({ en: SEVERITY_LEVELS[i].en, es: SEVERITY_LEVELS[i].es }),
      value: count,
      severity: i,
    }));
  }, [findings, t]);

  // Heuristic violation frequency
  const heuristicDist = useMemo(() => {
    const counts: Record<number, number> = {};
    findings.forEach(f => { counts[f.heuristicId] = (counts[f.heuristicId] || 0) + 1; });
    return HEURISTICS.map(h => ({
      name: h.short,
      fullName: t({ en: h.en, es: h.es }),
      count: counts[h.id] || 0,
    }));
  }, [findings, t]);

  // Radar chart for coverage
  const radarData = useMemo(() => {
    return HEURISTICS.map(h => ({
      heuristic: h.short,
      issues: heuristicDist.find(d => d.name === h.short)?.count || 0,
    }));
  }, [heuristicDist]);

  // Filtered findings
  const filtered = selectedSeverity !== null
    ? findings.filter(f => f.severity === selectedSeverity)
    : findings;

  return (
    <div className="space-y-6">
      {/* Heuristics Explorer link */}
      <Link
        to="/heuristics"
        className="flex items-center gap-3 p-4 rounded-xl bg-indigo-500/8 border border-indigo-500/20 hover:border-indigo-500/40 transition-colors group"
      >
        <div className="size-10 rounded-xl bg-indigo-500/15 flex items-center justify-center flex-shrink-0">
          <Search className="size-5 text-indigo-400" />
        </div>
        <div className="flex-1">
          <span className="text-sm font-bold text-indigo-300 block">
            {t({ en: 'Explore All Heuristics in Detail', es: 'Explorar Todas las Heurísticas en Detalle' })}
          </span>
          <span className="text-xs text-zinc-500">
            {t({ en: 'Interactive cards with Do/Don\'t examples, real products, and key takeaways', es: 'Tarjetas interactivas con ejemplos Haz/No hagas, productos reales y conclusiones clave' })}
          </span>
        </div>
        <ExternalLink className="size-4 text-indigo-500 group-hover:text-indigo-400 transition-colors flex-shrink-0" />
      </Link>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Severity Distribution Bar */}
        <div className="bg-zinc-800/50 rounded-xl border border-zinc-700/30 p-5">
          <h4 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
            <BarChart3 className="size-4 text-indigo-400" />
            {t({ en: 'Severity Distribution', es: 'Distribución de Severidad' })}
          </h4>
          <div className="h-52">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={severityDist} barSize={36}>
                <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
                <XAxis dataKey="name" tick={{ fill: '#a1a1aa', fontSize: 10 }} angle={-20} textAnchor="end" height={50} />
                <YAxis tick={{ fill: '#a1a1aa', fontSize: 11 }} allowDecimals={false} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#18181b', border: '1px solid #3f3f46', borderRadius: '12px', fontSize: '12px' }}
                  labelStyle={{ color: '#e4e4e7' }}
                />
                <Bar dataKey="value" radius={[6, 6, 0, 0]}>
                  {severityDist.map((entry, i) => (
                    <Cell key={i} fill={SEVERITY_COLORS[entry.severity]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Heuristic Radar */}
        <div className="bg-zinc-800/50 rounded-xl border border-zinc-700/30 p-5">
          <h4 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
            <Eye className="size-4 text-purple-400" />
            {t({ en: 'Violation Coverage Map', es: 'Mapa de Cobertura de Violaciones' })}
          </h4>
          <div className="h-52">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={radarData}>
                <PolarGrid stroke="#27272a" />
                <PolarAngleAxis dataKey="heuristic" tick={{ fill: '#a1a1aa', fontSize: 10 }} />
                <PolarRadiusAxis tick={{ fill: '#71717a', fontSize: 9 }} allowDecimals={false} />
                <Radar dataKey="issues" stroke="#818cf8" fill="#818cf8" fillOpacity={0.25} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          { label: t({ en: 'Total Issues', es: 'Total Problemas' }), value: findings.length, color: 'text-white' },
          { label: t({ en: 'Critical (4)', es: 'Críticos (4)' }), value: findings.filter(f => f.severity === 4).length, color: 'text-red-400' },
          { label: t({ en: 'Major (3)', es: 'Mayores (3)' }), value: findings.filter(f => f.severity === 3).length, color: 'text-orange-400' },
          { label: t({ en: 'Minor (1-2)', es: 'Menores (1-2)' }), value: findings.filter(f => f.severity <= 2).length, color: 'text-yellow-400' },
        ].map((stat, i) => (
          <div key={i} className="bg-zinc-800/50 rounded-xl border border-zinc-700/30 p-4 text-center">
            <div className={`text-2xl font-black ${stat.color}`}>{stat.value}</div>
            <div className="text-[10px] text-zinc-500 uppercase tracking-wider font-semibold mt-1">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Filter by severity */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-xs text-zinc-500 font-semibold uppercase tracking-wider mr-2">
          {t({ en: 'Filter:', es: 'Filtrar:' })}
        </span>
        <button
          onClick={() => setSelectedSeverity(null)}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors ${selectedSeverity === null ? 'bg-indigo-500/20 border-indigo-500/40 text-indigo-300' : 'bg-zinc-800/50 border-zinc-700/30 text-zinc-400 hover:text-zinc-200'}`}
        >
          {t({ en: 'All', es: 'Todos' })} ({findings.length})
        </button>
        {SEVERITY_LEVELS.filter(l => l.value > 0).map(level => {
          const count = findings.filter(f => f.severity === level.value).length;
          return (
            <button
              key={level.value}
              onClick={() => setSelectedSeverity(selectedSeverity === level.value ? null : level.value)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors ${selectedSeverity === level.value ? `${level.bg} ${level.border} ${level.color}` : 'bg-zinc-800/50 border-zinc-700/30 text-zinc-400 hover:text-zinc-200'}`}
            >
              {t({ en: level.en, es: level.es })} ({count})
            </button>
          );
        })}
      </div>

      {/* Findings Table */}
      <div className="space-y-3">
        <h4 className="text-sm font-bold text-white flex items-center gap-2">
          <FileText className="size-4 text-amber-400" />
          {t({ en: 'Findings Report', es: 'Informe de Hallazgos' })}
          <span className="text-xs text-zinc-500 font-normal ml-2">
            ({t({ en: 'Demo data — build yours with the checklist', es: 'Datos demo — construye el tuyo con el checklist' })})
          </span>
        </h4>

        {filtered.sort((a, b) => b.severity - a.severity).map(finding => {
          const heuristic = HEURISTICS[finding.heuristicId - 1];
          const isExpanded = expandedFinding === finding.id;
          const level = SEVERITY_LEVELS[finding.severity];

          return (
            <motion.div
              key={finding.id}
              layout
              className={`rounded-xl border overflow-hidden transition-colors ${level.border} ${level.bg}`}
            >
              <button
                onClick={() => setExpandedFinding(isExpanded ? null : finding.id)}
                className="w-full flex items-center gap-3 px-4 py-3.5 text-left"
              >
                <SeverityBadge severity={finding.severity} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs font-mono font-bold text-indigo-400">{heuristic.short}</span>
                    <span className="text-xs text-zinc-500">·</span>
                    <span className="text-xs text-zinc-400 font-medium">{finding.screen}</span>
                  </div>
                  <p className="text-sm text-zinc-200 font-medium truncate mt-0.5">{finding.description}</p>
                </div>
                {isExpanded ? <ChevronUp className="size-4 text-zinc-500 flex-shrink-0" /> : <ChevronDown className="size-4 text-zinc-500 flex-shrink-0" />}
              </button>

              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-4 space-y-3 border-t border-white/5 pt-3">
                      {/* Heuristic violated */}
                      <div className="flex items-start gap-2">
                        <AlertTriangle className="size-3.5 text-amber-400 mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="text-[10px] text-zinc-500 uppercase tracking-wider font-semibold block">
                            {t({ en: 'Heuristic Violated', es: 'Heurística Violada' })}
                          </span>
                          <span className="text-xs text-zinc-300">
                            {heuristic.short}: {t({ en: heuristic.en, es: heuristic.es })}
                          </span>
                        </div>
                      </div>
                      {/* Full description */}
                      <div className="flex items-start gap-2">
                        <XCircle className="size-3.5 text-red-400 mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="text-[10px] text-zinc-500 uppercase tracking-wider font-semibold block">
                            {t({ en: 'Problem', es: 'Problema' })}
                          </span>
                          <span className="text-xs text-zinc-300 leading-relaxed">{finding.description}</span>
                        </div>
                      </div>
                      {/* Recommendation */}
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="size-3.5 text-emerald-400 mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="text-[10px] text-zinc-500 uppercase tracking-wider font-semibold block">
                            {t({ en: 'Recommendation', es: 'Recomendación' })}
                          </span>
                          <span className="text-xs text-emerald-200 leading-relaxed">{finding.recommendation}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* Heuristic Frequency Bar Chart */}
      <div className="bg-zinc-800/50 rounded-xl border border-zinc-700/30 p-5">
        <h4 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
          <Sparkles className="size-4 text-amber-400" />
          {t({ en: 'Most Violated Heuristics', es: 'Heurísticas Más Violadas' })}
        </h4>
        <div className="h-56">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={heuristicDist} barSize={24} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
              <XAxis type="number" tick={{ fill: '#a1a1aa', fontSize: 11 }} allowDecimals={false} />
              <YAxis type="category" dataKey="name" tick={{ fill: '#a1a1aa', fontSize: 11 }} width={35} />
              <Tooltip
                contentStyle={{ backgroundColor: '#18181b', border: '1px solid #3f3f46', borderRadius: '12px', fontSize: '12px' }}
                formatter={(value: any, _name: any, props: any) => [value, props?.payload?.fullName || '']}
              />
              <Bar dataKey="count" fill="#818cf8" radius={[0, 6, 6, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

// ─── TAB 4: REPORT TEMPLATE ─────────────────────────────────
function ReportTemplateTab() {
  const { t } = useLanguage();

  const sections = [
    {
      title: t({ en: '1. Executive Summary', es: '1. Resumen Ejecutivo' }),
      icon: <FileText className="size-4 text-indigo-400" />,
      content: t({
        en: 'A heuristic evaluation was conducted on [Product Name] by [N] evaluators on [Date]. The evaluation covered [N] key user tasks across [N] screens. A total of [N] usability issues were identified: [N] catastrophic, [N] major, [N] minor, and [N] cosmetic. The most frequently violated heuristic was [HX: Name]. Immediate attention is required for [N] critical issues that directly impact task completion.',
        es: 'Se realizó una evaluación heurística de [Nombre del Producto] por [N] evaluadores el [Fecha]. La evaluación cubrió [N] tareas clave del usuario en [N] pantallas. Se identificaron un total de [N] problemas de usabilidad: [N] catastróficos, [N] mayores, [N] menores y [N] cosméticos. La heurística más frecuentemente violada fue [HX: Nombre]. Se requiere atención inmediata para [N] problemas críticos que impactan directamente la completación de tareas.'
      })
    },
    {
      title: t({ en: '2. Methodology', es: '2. Metodología' }),
      icon: <ClipboardCheck className="size-4 text-purple-400" />,
      content: t({
        en: '• Framework: Nielsen\'s 10 Usability Heuristics\n• Evaluators: [N] UX professionals (independent evaluation)\n• Severity Scale: Nielsen\'s 0-4 rating (mean score for duplicates)\n• Tasks Evaluated: [List 5-8 key tasks]\n• Platform/Device: [Web/iOS/Android, device models]\n• Date of Evaluation: [Date range]',
        es: '• Marco: 10 Heurísticas de Usabilidad de Nielsen\n• Evaluadores: [N] profesionales UX (evaluación independiente)\n• Escala de Severidad: Rating 0-4 de Nielsen (puntaje medio para duplicados)\n• Tareas Evaluadas: [Listar 5-8 tareas clave]\n• Plataforma/Dispositivo: [Web/iOS/Android, modelos]\n• Fecha de Evaluación: [Rango de fechas]'
      })
    },
    {
      title: t({ en: '3. Severity Distribution (Chart)', es: '3. Distribución de Severidad (Gráfico)' }),
      icon: <BarChart3 className="size-4 text-amber-400" />,
      content: t({
        en: '[Insert bar chart showing count of findings per severity level]\n[Insert pie chart showing percentage distribution]\n\nKey insight: [X]% of findings are severity 3-4 (major/catastrophic), requiring immediate design iteration before the next release.',
        es: '[Insertar gráfico de barras mostrando cantidad de hallazgos por nivel de severidad]\n[Insertar gráfico circular mostrando distribución porcentual]\n\nInsight clave: [X]% de los hallazgos son de severidad 3-4 (mayor/catastrófico), requiriendo iteración de diseño inmediata antes del próximo release.'
      })
    },
    {
      title: t({ en: '4. Detailed Findings Table', es: '4. Tabla Detallada de Hallazgos' }),
      icon: <AlertTriangle className="size-4 text-orange-400" />,
      content: t({
        en: '| # | Screen | Heuristic | Severity | Description | Recommendation | Status |\n|---|--------|-----------|----------|-------------|----------------|--------|\n| 1 | Checkout | H5: Error Prevention | 4 - Catastrophic | No confirmation before $500+ order | Add confirmation modal | Open |\n| 2 | Search | H1: Visibility | 3 - Major | No loading indicator | Add skeleton/spinner | Open |\n| ... | ... | ... | ... | ... | ... | ... |',
        es: '| # | Pantalla | Heurística | Severidad | Descripción | Recomendación | Estado |\n|---|----------|-----------|-----------|-------------|----------------|--------|\n| 1 | Checkout | H5: Prevención | 4 - Catastrófico | Sin confirmación para pedido de $500+ | Agregar modal de confirmación | Abierto |\n| 2 | Búsqueda | H1: Visibilidad | 3 - Mayor | Sin indicador de carga | Agregar skeleton/spinner | Abierto |\n| ... | ... | ... | ... | ... | ... | ... |'
      })
    },
    {
      title: t({ en: '5. Prioritized Recommendations', es: '5. Recomendaciones Priorizadas' }),
      icon: <CheckCircle2 className="size-4 text-emerald-400" />,
      content: t({
        en: 'Priority 1 (Fix Now — Severity 4):\n  • [Finding description] → [Specific fix]\n\nPriority 2 (Fix This Sprint — Severity 3):\n  • [Finding description] → [Specific fix]\n\nPriority 3 (Backlog — Severity 1-2):\n  • [Finding description] → [Specific fix]\n\nImpact/Effort Matrix:\n  Quick Wins (High Impact, Low Effort): [List]\n  Strategic (High Impact, High Effort): [List]\n  Low Priority (Low Impact, Low Effort): [List]',
        es: 'Prioridad 1 (Arreglar Ahora — Severidad 4):\n  • [Descripción del hallazgo] → [Solución específica]\n\nPrioridad 2 (Arreglar Este Sprint — Severidad 3):\n  • [Descripción del hallazgo] → [Solución específica]\n\nPrioridad 3 (Backlog — Severidad 1-2):\n  • [Descripción del hallazgo] → [Solución específica]\n\nMatriz Impacto/Esfuerzo:\n  Quick Wins (Alto Impacto, Bajo Esfuerzo): [Lista]\n  Estratégico (Alto Impacto, Alto Esfuerzo): [Lista]\n  Baja Prioridad (Bajo Impacto, Bajo Esfuerzo): [Lista]'
      })
    },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-start gap-3 bg-amber-500/5 border border-amber-500/15 rounded-xl p-4">
        <Lightbulb className="size-5 text-amber-400 flex-shrink-0 mt-0.5" />
        <p className="text-sm text-zinc-300 leading-relaxed">
          {t({
            en: 'This is a professional report template. Copy and adapt it for your own heuristic evaluation projects. Each section is designed to communicate findings clearly to stakeholders.',
            es: 'Esta es una plantilla de informe profesional. Cópiala y adáptala para tus propios proyectos de evaluación heurística. Cada sección está diseñada para comunicar hallazgos claramente a stakeholders.'
          })}
        </p>
      </div>

      {sections.map((section, i) => (
        <div key={i} className="bg-zinc-800/50 rounded-xl border border-zinc-700/30 overflow-hidden">
          <div className="flex items-center gap-2 px-5 py-3 bg-zinc-800/80 border-b border-zinc-700/30">
            {section.icon}
            <h4 className="text-sm font-bold text-white">{section.title}</h4>
          </div>
          <pre className="px-5 py-4 text-xs text-zinc-300 leading-relaxed whitespace-pre-wrap font-mono bg-zinc-900/30">
            {section.content}
          </pre>
        </div>
      ))}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════

export function HeuristicAnalysisLab() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { label: t({ en: 'Severity Scale', es: 'Escala de Severidad' }), icon: <BarChart3 className="size-3.5" /> },
    { label: t({ en: 'Checklist', es: 'Checklist' }), icon: <ClipboardCheck className="size-3.5" /> },
    { label: t({ en: 'Report & Charts', es: 'Informe y Gráficos' }), icon: <FileText className="size-3.5" /> },
    { label: t({ en: 'Report Template', es: 'Plantilla de Informe' }), icon: <Download className="size-3.5" /> },
  ];

  return (
    <section className="bg-gradient-to-br from-indigo-950/20 via-zinc-900/50 to-purple-950/20 border border-indigo-500/15 rounded-2xl overflow-hidden">
      {/* Header */}
      <div className="px-6 py-5 border-b border-indigo-500/10 bg-indigo-500/5">
        <div className="flex items-center gap-3 mb-2">
          <div className="size-10 rounded-xl bg-indigo-500/15 border border-indigo-500/25 flex items-center justify-center">
            <ClipboardCheck className="size-5 text-indigo-400" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">
              {t({ en: 'Heuristic Analysis Lab', es: 'Laboratorio de Análisis Heurístico' })}
            </h3>
            <p className="text-xs text-zinc-400">
              {t({ en: 'Interactive tools for professional heuristic evaluation', es: 'Herramientas interactivas para evaluación heurística profesional' })}
            </p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="px-4 pt-4 border-b border-zinc-800/50">
        <div className="flex gap-1 overflow-x-auto hide-scrollbar pb-0.5">
          {tabs.map((tab, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-t-xl text-xs font-semibold whitespace-nowrap transition-colors border-b-2 ${
                activeTab === i
                  ? 'bg-zinc-800/60 text-indigo-300 border-indigo-500'
                  : 'text-zinc-500 hover:text-zinc-300 border-transparent'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 md:p-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {activeTab === 0 && <SeverityScaleTab />}
            {activeTab === 1 && <ChecklistTab />}
            {activeTab === 2 && <ReportTab />}
            {activeTab === 3 && <ReportTemplateTab />}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}