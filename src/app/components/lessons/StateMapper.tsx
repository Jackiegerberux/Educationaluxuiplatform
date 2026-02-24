import React, { useState, useMemo, useCallback } from 'react';
import { useLanguage } from '../layout/LanguageContext';
import { motion, AnimatePresence } from 'motion/react';
import {
  Layers, AlertTriangle, CheckCircle2, Loader2, XCircle,
  Copy, Check, Zap, Shield, Wifi, WifiOff, FileQuestion,
  MousePointerClick, ToggleLeft, ToggleRight, ChevronDown,
  ChevronUp, Sparkles, ClipboardList, TriangleAlert
} from 'lucide-react';
import { copyToClipboard } from '../../utils/clipboard';

/* ─── Types ─────────────────────────────────────────────────── */
interface StateEntry {
  category: string;
  categoryIcon: React.ReactNode;
  categoryColor: string;
  states: {
    id: string;
    label: { en: string; es: string };
    message: { en: string; es: string };
    severity: 'low' | 'medium' | 'high' | 'critical';
  }[];
}

/* ─── Severity Styles ───────────────────────────────────────── */
const severityConfig = {
  low:      { bg: 'bg-blue-500/10',   border: 'border-blue-500/20',   text: 'text-blue-400',    label: { en: 'Low', es: 'Bajo' } },
  medium:   { bg: 'bg-yellow-500/10', border: 'border-yellow-500/20', text: 'text-yellow-400',  label: { en: 'Medium', es: 'Medio' } },
  high:     { bg: 'bg-orange-500/10', border: 'border-orange-500/20', text: 'text-orange-400',  label: { en: 'High', es: 'Alto' } },
  critical: { bg: 'bg-red-500/10',    border: 'border-red-500/20',    text: 'text-red-400',     label: { en: 'Critical', es: 'Crítico' } },
};

/* ─── State Generation Engine ──────────────────────────────── */
function generateStates(
  featureName: string,
  mainAction: string,
  hasApi: boolean,
  hasValidation: boolean,
): StateEntry[] {
  const fn = featureName || 'feature';
  const ma = mainAction || 'action';

  const entries: StateEntry[] = [];

  // 1. Empty States
  entries.push({
    category: 'Empty States',
    categoryIcon: <FileQuestion className="size-4" />,
    categoryColor: 'text-zinc-400',
    states: [
      {
        id: 'empty-no-data',
        label: { en: 'No data yet', es: 'Sin datos aún' },
        message: {
          en: `No ${fn} found yet. Start by creating your first one.`,
          es: `No se encontraron ${fn} aún. Comienza creando el primero.`
        },
        severity: 'medium',
      },
      {
        id: 'empty-first-time',
        label: { en: 'First-time use', es: 'Primer uso' },
        message: {
          en: `Welcome! ${fn} lets you ${ma}. Here's how to get started.`,
          es: `¡Bienvenido! ${fn} te permite ${ma}. Así es como comenzar.`
        },
        severity: 'medium',
      },
      {
        id: 'empty-no-results',
        label: { en: 'No search results', es: 'Sin resultados de búsqueda' },
        message: {
          en: `No results match your search. Try different keywords or clear filters.`,
          es: `Ningún resultado coincide con tu búsqueda. Intenta otras palabras clave o limpia los filtros.`
        },
        severity: 'low',
      },
      {
        id: 'empty-permission',
        label: { en: 'Permission denied', es: 'Permiso denegado' },
        message: {
          en: `You don't have access to this ${fn}. Contact your admin to request permission.`,
          es: `No tienes acceso a este ${fn}. Contacta a tu admin para solicitar permiso.`
        },
        severity: 'high',
      },
    ],
  });

  // 2. Loading States
  entries.push({
    category: 'Loading States',
    categoryIcon: <Loader2 className="size-4 animate-spin" />,
    categoryColor: 'text-cyan-400',
    states: [
      {
        id: 'loading-initial',
        label: { en: 'Initial load', es: 'Carga inicial' },
        message: {
          en: `Show skeleton screen mimicking ${fn} layout. Shimmer animation.`,
          es: `Mostrar skeleton screen imitando el layout de ${fn}. Animación shimmer.`
        },
        severity: 'medium',
      },
      {
        id: 'loading-action',
        label: { en: `Processing ${ma}`, es: `Procesando ${ma}` },
        message: {
          en: `Show inline spinner on the action button. Disable button to prevent double-submit.`,
          es: `Mostrar spinner inline en el botón de acción. Deshabilitar botón para prevenir doble envío.`
        },
        severity: 'high',
      },
      {
        id: 'loading-progressive',
        label: { en: 'Progressive loading', es: 'Carga progresiva' },
        message: {
          en: `Load and display available data immediately. Show "Loading more..." at the bottom.`,
          es: `Cargar y mostrar datos disponibles inmediatamente. Mostrar "Cargando más..." al final.`
        },
        severity: 'low',
      },
    ],
  });

  // 3. Validation Errors (if applicable)
  if (hasValidation) {
    entries.push({
      category: 'Validation Errors',
      categoryIcon: <AlertTriangle className="size-4" />,
      categoryColor: 'text-yellow-400',
      states: [
        {
          id: 'val-required',
          label: { en: 'Required field empty', es: 'Campo requerido vacío' },
          message: {
            en: `This field is required. Please enter a value to continue.`,
            es: `Este campo es requerido. Por favor ingresa un valor para continuar.`
          },
          severity: 'medium',
        },
        {
          id: 'val-format',
          label: { en: 'Invalid format', es: 'Formato inválido' },
          message: {
            en: `Please enter a valid format. Example: [show example].`,
            es: `Por favor ingresa un formato válido. Ejemplo: [mostrar ejemplo].`
          },
          severity: 'medium',
        },
        {
          id: 'val-limit',
          label: { en: 'Character/size limit exceeded', es: 'Límite de caracteres/tamaño excedido' },
          message: {
            en: `Maximum limit reached. Please shorten your input to [X] characters.`,
            es: `Límite máximo alcanzado. Por favor acorta tu input a [X] caracteres.`
          },
          severity: 'low',
        },
        {
          id: 'val-duplicate',
          label: { en: 'Duplicate entry', es: 'Entrada duplicada' },
          message: {
            en: `This ${fn} already exists. Please use a different name.`,
            es: `Este ${fn} ya existe. Por favor usa un nombre diferente.`
          },
          severity: 'medium',
        },
      ],
    });
  }

  // 4. System / Server Errors (if API)
  if (hasApi) {
    entries.push({
      category: 'System Errors',
      categoryIcon: <XCircle className="size-4" />,
      categoryColor: 'text-red-400',
      states: [
        {
          id: 'sys-server',
          label: { en: 'Server error (500)', es: 'Error de servidor (500)' },
          message: {
            en: `We couldn't process your request. Please try again in a few moments. If the problem persists, contact support.`,
            es: `No pudimos procesar tu solicitud. Por favor intenta de nuevo en unos momentos. Si el problema persiste, contacta soporte.`
          },
          severity: 'critical',
        },
        {
          id: 'sys-network',
          label: { en: 'Network failure', es: 'Falla de red' },
          message: {
            en: `Connection lost. Your changes are saved locally and will sync when you're back online.`,
            es: `Conexión perdida. Tus cambios están guardados localmente y se sincronizarán cuando vuelvas a estar online.`
          },
          severity: 'critical',
        },
        {
          id: 'sys-timeout',
          label: { en: 'Request timeout', es: 'Timeout de solicitud' },
          message: {
            en: `The request is taking longer than expected. Retrying automatically... (Attempt 2 of 3)`,
            es: `La solicitud está tardando más de lo esperado. Reintentando automáticamente... (Intento 2 de 3)`
          },
          severity: 'high',
        },
        {
          id: 'sys-partial',
          label: { en: 'Partial failure', es: 'Falla parcial' },
          message: {
            en: `[X] of [Y] items processed successfully. [Z] failed. Download error report for details.`,
            es: `[X] de [Y] ítems procesados exitosamente. [Z] fallaron. Descarga el reporte de errores para detalles.`
          },
          severity: 'high',
        },
        {
          id: 'sys-auth',
          label: { en: 'Session expired (401)', es: 'Sesión expirada (401)' },
          message: {
            en: `Your session has expired. Please log in again. Don't worry — your unsaved work is preserved.`,
            es: `Tu sesión ha expirado. Por favor inicia sesión de nuevo. No te preocupes — tu trabajo no guardado está preservado.`
          },
          severity: 'high',
        },
      ],
    });
  }

  // 5. Success States
  entries.push({
    category: 'Success States',
    categoryIcon: <CheckCircle2 className="size-4" />,
    categoryColor: 'text-emerald-400',
    states: [
      {
        id: 'success-action',
        label: { en: `${ma} completed`, es: `${ma} completado` },
        message: {
          en: `Done! Your ${fn} has been ${ma} successfully.`,
          es: `¡Listo! Tu ${fn} ha sido ${ma} exitosamente.`
        },
        severity: 'low',
      },
      {
        id: 'success-inline',
        label: { en: 'Inline confirmation', es: 'Confirmación inline' },
        message: {
          en: `Show a brief toast or inline checkmark. Auto-dismiss after 3 seconds.`,
          es: `Mostrar un toast breve o checkmark inline. Auto-cerrar después de 3 segundos.`
        },
        severity: 'low',
      },
    ],
  });

  // 6. Edge Cases
  entries.push({
    category: 'Edge Cases',
    categoryIcon: <Shield className="size-4" />,
    categoryColor: 'text-purple-400',
    states: [
      {
        id: 'edge-double-click',
        label: { en: 'Double click / double submit', es: 'Doble clic / doble envío' },
        message: {
          en: `Disable the action button after first click. Show loading indicator. Prevent duplicate requests.`,
          es: `Deshabilitar el botón de acción después del primer clic. Mostrar indicador de carga. Prevenir solicitudes duplicadas.`
        },
        severity: 'high',
      },
      {
        id: 'edge-back-nav',
        label: { en: 'Back button mid-flow', es: 'Botón atrás a medio flujo' },
        message: {
          en: `Warn user: "You have unsaved changes. Leave without saving?" with Stay/Leave options.`,
          es: `Advertir al usuario: "Tienes cambios sin guardar. ¿Salir sin guardar?" con opciones Quedarse/Salir.`
        },
        severity: 'medium',
      },
      {
        id: 'edge-concurrent',
        label: { en: 'Concurrent editing / dual tabs', es: 'Edición concurrente / tabs dobles' },
        message: {
          en: `Detect stale data: "This ${fn} was updated by another user. Refresh to see the latest version."`,
          es: `Detectar datos obsoletos: "Este ${fn} fue actualizado por otro usuario. Refresca para ver la versión más reciente."`
        },
        severity: 'medium',
      },
      ...(hasApi ? [{
        id: 'edge-offline-action',
        label: { en: 'Offline action attempt', es: 'Intento de acción offline' },
        message: {
          en: `You're offline. This action will be queued and completed when your connection is restored.`,
          es: `Estás offline. Esta acción se pondrá en cola y se completará cuando tu conexión se restaure.`
        },
        severity: 'high' as const,
      }] : []),
      {
        id: 'edge-large-data',
        label: { en: 'Extreme data volume', es: 'Volumen extremo de datos' },
        message: {
          en: `Showing first 100 of [X] results. Use filters or search to narrow down.`,
          es: `Mostrando los primeros 100 de [X] resultados. Usa filtros o búsqueda para refinar.`
        },
        severity: 'medium',
      },
    ],
  });

  return entries;
}

/* ─── Category Section (collapsible) ────────────────────────── */
function CategorySection({
  entry,
  isExpanded,
  onToggle,
}: {
  entry: StateEntry;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const { t } = useLanguage();
  const criticalCount = entry.states.filter(s => s.severity === 'critical' || s.severity === 'high').length;

  return (
    <div className="border border-zinc-800 rounded-xl overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-3 p-4 bg-zinc-900/50 hover:bg-zinc-900/80 transition-colors text-left"
      >
        <span className={entry.categoryColor}>{entry.categoryIcon}</span>
        <span className="font-semibold text-sm text-white flex-1">{entry.category}</span>
        {criticalCount > 0 && (
          <span className="text-[10px] bg-red-500/15 text-red-400 px-2 py-0.5 rounded-full border border-red-500/20">
            {criticalCount} {t({ en: 'high risk', es: 'alto riesgo' })}
          </span>
        )}
        <span className="text-xs text-zinc-500">{entry.states.length} {t({ en: 'states', es: 'estados' })}</span>
        {isExpanded ? <ChevronUp className="size-4 text-zinc-500" /> : <ChevronDown className="size-4 text-zinc-500" />}
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
            <div className="p-3 space-y-2">
              {entry.states.map((state) => {
                const sev = severityConfig[state.severity];
                return (
                  <div key={state.id} className={`${sev.bg} ${sev.border} border rounded-lg p-3`}>
                    <div className="flex items-start gap-2 mb-1">
                      <span className={`text-[10px] font-bold uppercase px-1.5 py-0.5 rounded ${sev.bg} ${sev.text} border ${sev.border}`}>
                        {t(sev.label)}
                      </span>
                      <span className="text-xs font-semibold text-zinc-200 flex-1">{t(state.label)}</span>
                    </div>
                    <p className="text-xs text-zinc-400 leading-relaxed mt-1.5 pl-0.5">
                      {t(state.message)}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── Toggle Component ──────────────────────────────────────── */
function Toggle({ value, onChange, label }: { value: boolean; onChange: (v: boolean) => void; label: string }) {
  return (
    <button
      onClick={() => onChange(!value)}
      className="flex items-center gap-2 text-left"
    >
      {value
        ? <ToggleRight className="size-5 text-indigo-400" />
        : <ToggleLeft className="size-5 text-zinc-500" />
      }
      <span className={`text-xs ${value ? 'text-white' : 'text-zinc-500'}`}>{label}</span>
    </button>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════════════════════ */
export function StateMapper() {
  const { t } = useLanguage();

  // Inputs
  const [featureName, setFeatureName] = useState('');
  const [mainAction, setMainAction] = useState('');
  const [hasApi, setHasApi] = useState(true);
  const [hasValidation, setHasValidation] = useState(true);

  // UI State
  const [generated, setGenerated] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});
  const [copied, setCopied] = useState(false);

  // Generation
  const states = useMemo(() => {
    if (!generated) return [];
    return generateStates(featureName, mainAction, hasApi, hasValidation);
  }, [generated, featureName, mainAction, hasApi, hasValidation]);

  const totalStates = states.reduce((sum, e) => sum + e.states.length, 0);
  const criticalStates = states.reduce(
    (sum, e) => sum + e.states.filter(s => s.severity === 'critical' || s.severity === 'high').length,
    0
  );
  const noErrorHandling = generated && !hasApi && !hasValidation;

  const toggleCategory = useCallback((cat: string) => {
    setExpandedCategories(prev => ({ ...prev, [cat]: !prev[cat] }));
  }, []);

  const handleGenerate = () => {
    setGenerated(true);
    // Expand all categories
    const expanded: Record<string, boolean> = {};
    const newStates = generateStates(featureName, mainAction, hasApi, hasValidation);
    newStates.forEach(e => { expanded[e.category] = true; });
    setExpandedCategories(expanded);
  };

  const handleCopy = () => {
    const lines: string[] = [];
    lines.push(`STATE MATRIX — ${featureName || 'Feature'}`);
    lines.push(`Main Action: ${mainAction || 'N/A'}`);
    lines.push(`API Dependency: ${hasApi ? 'Yes' : 'No'}`);
    lines.push(`Requires Validation: ${hasValidation ? 'Yes' : 'No'}`);
    lines.push(`Total States: ${totalStates} | High/Critical: ${criticalStates}`);
    lines.push('─'.repeat(50));
    states.forEach(entry => {
      lines.push('');
      lines.push(`## ${entry.category}`);
      entry.states.forEach(s => {
        lines.push(`  [${s.severity.toUpperCase()}] ${s.label.en}`);
        lines.push(`    Message: ${s.message.en}`);
      });
    });
    const ok = copyToClipboard(lines.join('\n'));
    if (ok) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="state-mapper" className="mb-12 scroll-mt-24">
      <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
        <Layers className="size-6 text-purple-400" />
        {t({ en: 'State Mapper', es: 'Mapeador de Estados' })}
        <span className="text-xs bg-purple-500/10 text-purple-400 px-2 py-0.5 rounded-full border border-purple-500/20 ml-2">
          {t({ en: 'Interactive', es: 'Interactivo' })}
        </span>
      </h2>

      <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl overflow-hidden">
        {/* ── Input Section ─────────────────────────────────── */}
        <div className="p-5 border-b border-zinc-800">
          <p className="text-xs text-zinc-500 mb-4">
            {t({
              en: 'Describe your feature. The mapper will auto-generate all possible states, error messages, and edge cases.',
              es: 'Describe tu feature. El mapeador auto-generará todos los estados posibles, mensajes de error y edge cases.'
            })}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
            <div>
              <label className="text-xs text-zinc-400 block mb-1">
                {t({ en: 'Feature name', es: 'Nombre del feature' })}
              </label>
              <input
                type="text"
                value={featureName}
                onChange={(e) => { setFeatureName(e.target.value); setGenerated(false); }}
                placeholder={t({ en: 'e.g. Invoice Dashboard', es: 'ej. Dashboard de Facturas' })}
                className="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-3 py-2 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/30"
              />
            </div>
            <div>
              <label className="text-xs text-zinc-400 block mb-1">
                {t({ en: 'Main user action', es: 'Acción principal del usuario' })}
              </label>
              <input
                type="text"
                value={mainAction}
                onChange={(e) => { setMainAction(e.target.value); setGenerated(false); }}
                placeholder={t({ en: 'e.g. upload and send invoices', es: 'ej. subir y enviar facturas' })}
                className="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-3 py-2 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/30"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mb-5">
            <Toggle
              value={hasApi}
              onChange={(v) => { setHasApi(v); setGenerated(false); }}
              label={t({ en: 'API dependency', es: 'Dependencia de API' })}
            />
            <Toggle
              value={hasValidation}
              onChange={(v) => { setHasValidation(v); setGenerated(false); }}
              label={t({ en: 'Requires validation', es: 'Requiere validación' })}
            />
          </div>

          <button
            onClick={handleGenerate}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-semibold transition-colors"
          >
            <Sparkles className="size-4" />
            {t({ en: 'Generate State Matrix', es: 'Generar Matriz de Estados' })}
          </button>
        </div>

        {/* ── Results Section ────────────────────────────────── */}
        <AnimatePresence>
          {generated && states.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="p-5"
            >
              {/* Summary bar */}
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <div className="flex items-center gap-2 text-xs text-zinc-300 bg-zinc-800/60 px-3 py-1.5 rounded-lg">
                  <ClipboardList className="size-3.5 text-indigo-400" />
                  <span className="font-semibold">{totalStates}</span> {t({ en: 'states mapped', es: 'estados mapeados' })}
                </div>
                {criticalStates > 0 && (
                  <div className="flex items-center gap-2 text-xs text-red-300 bg-red-500/10 px-3 py-1.5 rounded-lg border border-red-500/20">
                    <TriangleAlert className="size-3.5 text-red-400" />
                    <span className="font-semibold">{criticalStates}</span> {t({ en: 'high/critical risk', es: 'riesgo alto/crítico' })}
                  </div>
                )}
                <button
                  onClick={handleCopy}
                  className="ml-auto flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white bg-zinc-800/60 hover:bg-zinc-800 px-3 py-1.5 rounded-lg transition-colors"
                >
                  {copied ? <Check className="size-3.5 text-emerald-400" /> : <Copy className="size-3.5" />}
                  {copied
                    ? t({ en: 'Copied!', es: '¡Copiado!' })
                    : t({ en: 'Copy to Figma Spec', es: 'Copiar a Spec Figma' })
                  }
                </button>
              </div>

              {/* Risk warning */}
              {noErrorHandling && (
                <div className="flex items-start gap-3 p-4 mb-5 bg-red-950/30 border border-red-500/30 rounded-xl">
                  <AlertTriangle className="size-5 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-red-300">
                      {t({ en: 'Risk: No error handling defined', es: 'Riesgo: Sin manejo de errores definido' })}
                    </p>
                    <p className="text-xs text-red-400/70 mt-1">
                      {t({
                        en: 'This feature has no API dependency and no validation. Consider whether error states are truly unnecessary — even offline-first features need state feedback.',
                        es: 'Este feature no tiene dependencia de API ni validación. Considera si los estados de error son verdaderamente innecesarios — incluso features offline-first necesitan feedback de estado.'
                      })}
                    </p>
                  </div>
                </div>
              )}

              {/* Categories */}
              <div className="space-y-3">
                {states.map((entry) => (
                  <CategorySection
                    key={entry.category}
                    entry={entry}
                    isExpanded={expandedCategories[entry.category] ?? false}
                    onToggle={() => toggleCategory(entry.category)}
                  />
                ))}
              </div>

              {/* Legend */}
              <div className="mt-5 pt-4 border-t border-zinc-800">
                <p className="text-[10px] text-zinc-600 uppercase tracking-wider mb-2">
                  {t({ en: 'Severity Legend', es: 'Leyenda de Severidad' })}
                </p>
                <div className="flex flex-wrap gap-3">
                  {(Object.keys(severityConfig) as Array<keyof typeof severityConfig>).map(key => {
                    const sev = severityConfig[key];
                    return (
                      <div key={key} className="flex items-center gap-1.5">
                        <span className={`size-2 rounded-full ${sev.text.replace('text-', 'bg-')}`} />
                        <span className="text-[10px] text-zinc-500">{t(sev.label)}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
