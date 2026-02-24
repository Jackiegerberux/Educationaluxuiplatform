import React, { useState } from 'react';
import { useLanguage } from '../layout/LanguageContext';
import { motion, AnimatePresence } from 'motion/react';
import {
  Upload,
  FileWarning,
  AlertTriangle,
  Wifi,
  WifiOff,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  TrendingDown,
  Clock,
  Headphones,
  X,
  FileText,
  Download,
  RefreshCw,
  BarChart3,
} from 'lucide-react';

interface StateRow {
  id: string;
  icon: React.ReactNode;
  state: { en: string; es: string };
  problemLabel: { en: string; es: string };
  problem: { en: string; es: string };
  solutionLabel: { en: string; es: string };
  solution: { en: string; es: string };
  severity: 'critical' | 'high' | 'medium';
  uiPattern: { en: string; es: string };
}

const stateRows: StateRow[] = [
  {
    id: 'empty',
    icon: <Upload className="size-5" />,
    state: { en: 'Empty File Upload', es: 'Carga de Archivo Vacía' },
    problemLabel: { en: 'Before', es: 'Antes' },
    problem: {
      en: 'Blank upload area. No instructions about file format, size limits, or template download.',
      es: 'Area de carga en blanco. Sin instrucciones sobre formato, límites de tamaño, ni descarga de plantilla.',
    },
    solutionLabel: { en: 'After', es: 'Después' },
    solution: {
      en: 'Guided empty state with drag-drop zone, format requirements (CSV, max 10K rows), and a "Download Template" button.',
      es: 'Estado vacío guiado con zona drag-drop, requisitos de formato (CSV, máx 10K filas) y botón "Descargar Plantilla".',
    },
    severity: 'high',
    uiPattern: { en: 'Guided Empty State + Template CTA', es: 'Estado Vacío Guiado + CTA Plantilla' },
  },
  {
    id: 'format-error',
    icon: <FileWarning className="size-5" />,
    state: { en: 'Wrong File Format', es: 'Formato de Archivo Incorrecto' },
    problemLabel: { en: 'Before', es: 'Antes' },
    problem: {
      en: 'User uploads .xlsx instead of .csv. Screen freezes with no feedback whatsoever.',
      es: 'Usuario sube .xlsx en vez de .csv. Pantalla se congela sin feedback alguno.',
    },
    solutionLabel: { en: 'After', es: 'Después' },
    solution: {
      en: 'Inline error banner: "Invalid file format. Upload a .csv file. Download our template for the correct format."',
      es: 'Banner de error inline: "Formato inválido. Sube un .csv. Descarga nuestra plantilla para el formato correcto."',
    },
    severity: 'critical',
    uiPattern: { en: 'Inline Error Banner + Recovery Link', es: 'Banner de Error Inline + Link de Recuperación' },
  },
  {
    id: 'partial',
    icon: <AlertTriangle className="size-5" />,
    state: { en: 'Partial Success (3/10)', es: 'Éxito Parcial (3/10)' },
    problemLabel: { en: 'Before', es: 'Antes' },
    problem: {
      en: '7 lines had invalid formats. System showed generic "Error" and stopped the entire batch.',
      es: '7 líneas tenían formatos inválidos. El sistema mostraba "Error" genérico y detenía todo el lote.',
    },
    solutionLabel: { en: 'After', es: 'Después' },
    solution: {
      en: 'Progress summary: "3/10 assigned. 7 failed (invalid line numbers)." Expandable error table + "Download Error Report" button.',
      es: 'Resumen de progreso: "3/10 asignados. 7 fallaron (números de línea inválidos)." Tabla de errores expandible + botón "Descargar Reporte".',
    },
    severity: 'critical',
    uiPattern: { en: 'Partial Success Summary + Error Report', es: 'Resumen de Éxito Parcial + Reporte de Errores' },
  },
  {
    id: 'network',
    icon: <WifiOff className="size-5" />,
    state: { en: 'Network Failure Mid-Upload', es: 'Falla de Red a Medio Upload' },
    problemLabel: { en: 'Before', es: 'Antes' },
    problem: {
      en: 'Large file on unstable corporate WiFi. Frozen progress bar. User re-uploads from scratch.',
      es: 'Archivo grande en WiFi corporativo inestable. Barra de progreso congelada. Usuario re-sube desde cero.',
    },
    solutionLabel: { en: 'After', es: 'Después' },
    solution: {
      en: 'Auto-retry with countdown: "Connection lost. Retrying in 5s... (Attempt 2/3)" + manual retry button.',
      es: 'Auto-reintento con cuenta regresiva: "Conexión perdida. Reintentando en 5s... (Intento 2/3)" + botón manual.',
    },
    severity: 'high',
    uiPattern: { en: 'Auto-Retry + Countdown + Manual Retry', es: 'Auto-Reintento + Cuenta Regresiva + Reintento Manual' },
  },
  {
    id: 'success',
    icon: <CheckCircle2 className="size-5" />,
    state: { en: 'Success Confirmation', es: 'Confirmación de Éxito' },
    problemLabel: { en: 'Before', es: 'Antes' },
    problem: {
      en: 'Redirect to dashboard with zero feedback. Operator unsure if it worked. Re-uploads "just in case."',
      es: 'Redirección al dashboard sin feedback. Operador inseguro si funcionó. Re-sube "por si acaso."',
    },
    solutionLabel: { en: 'After', es: 'Después' },
    solution: {
      en: 'Success screen: "10 packs assigned to 10 lines. Effective: March 1. Confirmation #DP-4821." + "View Details" & "Assign More" CTAs.',
      es: 'Pantalla de éxito: "10 paquetes asignados a 10 líneas. Efectivo: 1 Mar. Confirmación #DP-4821." + CTAs "Ver Detalles" y "Asignar Más".',
    },
    severity: 'medium',
    uiPattern: { en: 'Confirmation Screen + Receipt + CTAs', es: 'Pantalla de Confirmación + Recibo + CTAs' },
  },
];

const severityConfig = {
  critical: { label: { en: 'Critical', es: 'Crítico' }, bg: 'bg-red-500/10', border: 'border-red-500/30', text: 'text-red-400', dot: 'bg-red-500' },
  high:     { label: { en: 'High', es: 'Alto' },     bg: 'bg-orange-500/10', border: 'border-orange-500/30', text: 'text-orange-400', dot: 'bg-orange-500' },
  medium:   { label: { en: 'Medium', es: 'Medio' },   bg: 'bg-yellow-500/10', border: 'border-yellow-500/30', text: 'text-yellow-400', dot: 'bg-yellow-500' },
};

/* ── Mini flow diagram ─────────────────────────────────────── */
function FlowDiagram() {
  const { t } = useLanguage();
  const steps = [
    { icon: <Upload className="size-4" />,         label: t({ en: 'Upload CSV', es: 'Subir CSV' }),       color: 'text-blue-400',   bg: 'bg-blue-500/10 border-blue-500/20' },
    { icon: <FileText className="size-4" />,        label: t({ en: 'Validate', es: 'Validar' }),           color: 'text-purple-400', bg: 'bg-purple-500/10 border-purple-500/20' },
    { icon: <RefreshCw className="size-4" />,       label: t({ en: 'Process', es: 'Procesar' }),           color: 'text-cyan-400',   bg: 'bg-cyan-500/10 border-cyan-500/20' },
    { icon: <CheckCircle2 className="size-4" />,    label: t({ en: 'Confirm', es: 'Confirmar' }),          color: 'text-green-400',  bg: 'bg-green-500/10 border-green-500/20' },
  ];

  return (
    <div className="flex items-center justify-center gap-1 sm:gap-2 flex-wrap mb-8">
      {steps.map((step, idx) => (
        <React.Fragment key={idx}>
          <div className={`flex items-center gap-1.5 px-3 py-2 rounded-lg border ${step.bg}`}>
            <span className={step.color}>{step.icon}</span>
            <span className={`text-xs font-medium ${step.color}`}>{step.label}</span>
          </div>
          {idx < steps.length - 1 && (
            <ArrowRight className="size-4 text-zinc-600 shrink-0" />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

/* ── Expandable state card ─────────────────────────────────── */
function StateCard({ row, isOpen, onToggle }: { row: StateRow; isOpen: boolean; onToggle: () => void }) {
  const { t } = useLanguage();
  const sev = severityConfig[row.severity];

  return (
    <div className={`rounded-xl border transition-all ${isOpen ? 'border-zinc-600 bg-zinc-900/80' : 'border-zinc-800 bg-zinc-900/40 hover:border-zinc-700'}`}>
      {/* Header row */}
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-3 p-4 text-left group"
      >
        <div className={`shrink-0 size-9 rounded-lg flex items-center justify-center ${sev.bg} border ${sev.border} ${sev.text}`}>
          {row.icon}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-sm font-semibold text-white">{t(row.state)}</span>
            <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${sev.bg} ${sev.text} border ${sev.border}`}>
              {t(sev.label)}
            </span>
          </div>
          <span className="text-xs text-zinc-500 mt-0.5 block">{t(row.uiPattern)}</span>
        </div>
        <div className="shrink-0 text-zinc-500 group-hover:text-zinc-300 transition-colors">
          {isOpen ? <ChevronUp className="size-4" /> : <ChevronDown className="size-4" />}
        </div>
      </button>

      {/* Expanded detail */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 grid grid-cols-1 md:grid-cols-2 gap-3">
              {/* BEFORE */}
              <div className="rounded-lg bg-red-950/20 border border-red-500/15 p-3">
                <div className="flex items-center gap-1.5 mb-2">
                  <X className="size-3.5 text-red-400" />
                  <span className="text-xs font-bold text-red-400 uppercase tracking-wider">{t(row.problemLabel)}</span>
                </div>
                <p className="text-sm text-zinc-400 leading-relaxed">{t(row.problem)}</p>
              </div>

              {/* AFTER */}
              <div className="rounded-lg bg-green-950/20 border border-green-500/15 p-3">
                <div className="flex items-center gap-1.5 mb-2">
                  <CheckCircle2 className="size-3.5 text-green-400" />
                  <span className="text-xs font-bold text-green-400 uppercase tracking-wider">{t(row.solutionLabel)}</span>
                </div>
                <p className="text-sm text-zinc-300 leading-relaxed">{t(row.solution)}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ── Main Component ────────────────────────────────────────── */
export function ClaroAdminCaseStudy() {
  const { t } = useLanguage();
  const [openStates, setOpenStates] = useState<Record<string, boolean>>({ 'partial': true });

  const toggle = (id: string) =>
    setOpenStates(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="mt-8 space-y-6">
      {/* ── Context intro ────────────────────────────── */}
      <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-5">
        <h4 className="text-sm font-bold text-amber-400 uppercase tracking-wider mb-3">
          {t({ en: 'Context', es: 'Contexto' })}
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
          <div className="bg-black/40 rounded-lg p-3 border border-zinc-800">
            <span className="text-zinc-500 text-xs block mb-1">{t({ en: 'Product', es: 'Producto' })}</span>
            <span className="text-white font-medium">Claro Admin Tool</span>
          </div>
          <div className="bg-black/40 rounded-lg p-3 border border-zinc-800">
            <span className="text-zinc-500 text-xs block mb-1">{t({ en: 'Feature', es: 'Feature' })}</span>
            <span className="text-white font-medium">{t({ en: 'Bulk Data Pack Assignment', es: 'Asignación Masiva de Paquetes' })}</span>
          </div>
          <div className="bg-black/40 rounded-lg p-3 border border-zinc-800">
            <span className="text-zinc-500 text-xs block mb-1">{t({ en: 'Users', es: 'Usuarios' })}</span>
            <span className="text-white font-medium">{t({ en: 'Internal operators', es: 'Operadores internos' })}</span>
          </div>
        </div>
      </div>

      {/* ── Happy path flow ──────────────────────────── */}
      <div>
        <h4 className="text-sm font-bold text-zinc-400 uppercase tracking-wider mb-3 text-center">
          {t({ en: 'Original Happy Path (only path designed)', es: 'Camino Feliz Original (único camino diseñado)' })}
        </h4>
        <FlowDiagram />
      </div>

      {/* ── 5 Unhandled States table ─────────────────── */}
      <div>
        <h4 className="text-sm font-bold text-zinc-400 uppercase tracking-wider mb-4 flex items-center gap-2">
          <AlertTriangle className="size-4 text-amber-400" />
          {t({ en: '5 Critical Unhandled States Discovered', es: '5 Estados Críticos No Manejados Descubiertos' })}
        </h4>
        <div className="space-y-2">
          {stateRows.map(row => (
            <StateCard
              key={row.id}
              row={row}
              isOpen={!!openStates[row.id]}
              onToggle={() => toggle(row.id)}
            />
          ))}
        </div>
        <p className="text-xs text-zinc-600 mt-3 text-center italic">
          {t({
            en: 'Click each state to see the Before / After comparison',
            es: 'Haz clic en cada estado para ver la comparación Antes / Después',
          })}
        </p>
      </div>

      {/* ── Results metrics ──────────────────────────── */}
      <div className="bg-gradient-to-r from-green-950/30 to-emerald-950/30 border border-green-500/20 rounded-xl p-5">
        <h4 className="text-sm font-bold text-green-400 uppercase tracking-wider mb-4 flex items-center gap-2">
          <BarChart3 className="size-4" />
          {t({ en: 'Results After Redesign', es: 'Resultados Después del Rediseño' })}
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Support tickets */}
          <div className="bg-black/40 rounded-xl p-4 border border-green-500/15 text-center">
            <Headphones className="size-5 text-green-400 mx-auto mb-2" />
            <div className="flex items-baseline justify-center gap-1">
              <span className="text-2xl font-black text-white">-82%</span>
            </div>
            <div className="text-xs text-zinc-500 mt-1">
              {t({ en: 'Support tickets', es: 'Tickets de soporte' })}
            </div>
            <div className="flex items-center justify-center gap-1 mt-2">
              <span className="text-xs text-red-400 line-through">45/</span>
              <span className="text-xs text-red-400 line-through">{t({ en: 'week', es: 'sem' })}</span>
              <ArrowRight className="size-3 text-zinc-600" />
              <span className="text-xs text-green-400 font-bold">8/{t({ en: 'week', es: 'sem' })}</span>
            </div>
          </div>

          {/* Processing time */}
          <div className="bg-black/40 rounded-xl p-4 border border-green-500/15 text-center">
            <Clock className="size-5 text-green-400 mx-auto mb-2" />
            <div className="flex items-baseline justify-center gap-1">
              <span className="text-2xl font-black text-white">-60%</span>
            </div>
            <div className="text-xs text-zinc-500 mt-1">
              {t({ en: 'Processing time', es: 'Tiempo de procesamiento' })}
            </div>
            <div className="text-xs text-zinc-600 mt-2">
              {t({ en: 'No unnecessary re-uploads', es: 'Sin re-subidas innecesarias' })}
            </div>
          </div>

          {/* Operator confidence */}
          <div className="bg-black/40 rounded-xl p-4 border border-green-500/15 text-center">
            <TrendingDown className="size-5 text-green-400 mx-auto mb-2" />
            <div className="flex items-baseline justify-center gap-1">
              <span className="text-2xl font-black text-white">0</span>
            </div>
            <div className="text-xs text-zinc-500 mt-1">
              {t({ en: 'Unhandled states', es: 'Estados no manejados' })}
            </div>
            <div className="text-xs text-zinc-600 mt-2">
              {t({ en: 'All 5 states resolved in 1 sprint', es: 'Los 5 estados resueltos en 1 sprint' })}
            </div>
          </div>
        </div>
      </div>

      {/* ── Key takeaway ─────────────────────────────── */}
      <div className="bg-amber-950/20 border border-amber-500/15 rounded-lg p-4 flex gap-3">
        <div className="shrink-0 mt-0.5">
          <Download className="size-4 text-amber-400" />
        </div>
        <div>
          <p className="text-sm text-amber-200 font-medium mb-1">
            {t({ en: 'Key Takeaway', es: 'Conclusión Clave' })}
          </p>
          <p className="text-sm text-zinc-400 leading-relaxed">
            {t({
              en: 'The happy path represented only 1 of 6 possible outcomes in this flow. Designing the other 5 states took 3 days but eliminated 37 weekly support tickets and saved operators an estimated 12 hours per week in re-work.',
              es: 'El camino feliz representaba solo 1 de 6 resultados posibles en este flujo. Diseñar los otros 5 estados tomó 3 días pero eliminó 37 tickets de soporte semanales y ahorró a los operadores unas 12 horas por semana en re-trabajo.',
            })}
          </p>
        </div>
      </div>
    </div>
  );
}
