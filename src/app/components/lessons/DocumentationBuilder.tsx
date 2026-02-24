import React, { useState, useMemo, useRef } from 'react';
import { useLanguage } from '../layout/LanguageContext';
import { motion, AnimatePresence } from 'motion/react';
import {
  FileText,
  MousePointerClick,
  ShieldAlert,
  AlertTriangle,
  ClipboardList,
  History,
  Code2,
  Copy,
  Check,
  Download,
  ChevronDown,
  ChevronUp,
  Zap,
  Lock,
  Globe,
  Server,
  TriangleAlert,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

/* ── Types ─────────────────────────────────────────────────── */
interface DocConfig {
  featureName: string;
  mainInteraction: string;
  requiresValidation: boolean;
  hasApiDependency: boolean;
  hasPermissionLevels: boolean;
}

interface GeneratedDoc {
  uxSpec: string[];
  interactionRules: string[];
  validationNotes: string[];
  edgeCases: string[];
  versionTemplate: string[];
  devSummary: string[];
}

/* ── Bilingual content ─────────────────────────────────────── */
const labels = {
  title: { en: 'Documentation Builder', es: 'Constructor de Documentación' },
  subtitle: {
    en: 'Generate a structured UX documentation package for any feature',
    es: 'Genera un paquete de documentación UX estructurado para cualquier feature'
  },
  featureName: { en: 'Feature Name', es: 'Nombre del Feature' },
  featurePlaceholder: { en: 'e.g. Bulk Invoice Export', es: 'ej. Exportación Masiva de Facturas' },
  mainInteraction: { en: 'Main Interaction', es: 'Interacción Principal' },
  interactionPlaceholder: { en: 'e.g. User selects rows and clicks Export CSV', es: 'ej. Usuario selecciona filas y hace clic en Exportar CSV' },
  requiresValidation: { en: 'Requires input validation?', es: '¿Requiere validación de input?' },
  hasApi: { en: 'Has API dependency?', es: '¿Tiene dependencia de API?' },
  hasPermissions: { en: 'Has permission levels?', es: '¿Tiene niveles de permisos?' },
  yes: { en: 'Yes', es: 'Sí' },
  no: { en: 'No', es: 'No' },
  generate: { en: 'Generate Documentation', es: 'Generar Documentación' },
  reset: { en: 'Reset', es: 'Reiniciar' },
  copySpec: { en: 'Copy UX Spec', es: 'Copiar Spec UX' },
  exportTemplate: { en: 'Export Template', es: 'Exportar Template' },
  copied: { en: 'Copied!', es: '¡Copiado!' },
  exported: { en: 'Downloaded!', es: '¡Descargado!' },
  riskWarning: {
    en: 'No edge cases defined — high risk of unhandled states in production',
    es: 'Sin edge cases definidos — alto riesgo de estados no manejados en producción'
  },
  inputRequired: {
    en: 'Fill in feature name and main interaction to generate docs',
    es: 'Completa nombre del feature e interacción principal para generar docs'
  },
  sections: {
    uxSpec: { en: 'UX Spec Structure', es: 'Estructura de Spec UX' },
    interactions: { en: 'Interaction Rules', es: 'Reglas de Interacción' },
    validation: { en: 'Validation Notes', es: 'Notas de Validación' },
    edgeCases: { en: 'Edge Case List', es: 'Lista de Edge Cases' },
    versionTemplate: { en: 'Version Note Template', es: 'Template de Nota de Versión' },
    devSummary: { en: 'Dev-Ready Summary', es: 'Resumen para Dev' },
  }
};

/* ── Generator logic ───────────────────────────────────────── */
function generateDocs(config: DocConfig, lang: 'en' | 'es'): GeneratedDoc {
  const { featureName, mainInteraction, requiresValidation, hasApiDependency, hasPermissionLevels } = config;
  const fn = featureName || (lang === 'en' ? '[Feature Name]' : '[Nombre del Feature]');
  const mi = mainInteraction || (lang === 'en' ? '[Main Interaction]' : '[Interacción Principal]');

  if (lang === 'es') {
    return {
      uxSpec: [
        `## Spec UX: ${fn}`,
        `**Resumen del Feature:** ${fn} — permite a los usuarios ${mi}.`,
        `**Flujo de Usuario:** Punto de entrada → Acción principal → Feedback del sistema → Estado de confirmación`,
        `**Inventario de Componentes:** Listar cada componente UI en la pantalla con su propósito y fuente de datos`,
        `**Comportamiento Responsivo:** Definir layout en breakpoints desktop (1200px+), tablet (768px), y móvil (375px)`,
        `**Notas de Accesibilidad:** Orden de teclado, labels ARIA, requisitos de contraste de color, soporte de lector de pantalla`,
        `**Dependencias:** ${hasApiDependency ? 'Endpoint(s) API requeridos — documentar formato de request/response' : 'Sin dependencias de API externas'}`,
        `**Propietario:** [Nombre del Diseñador] | **Última Actualización:** [Fecha] | **Versión:** 1.0`,
      ],
      interactionRules: [
        `| Componente | Default | Hover | Focus | Active | Disabled | Cargando |`,
        `|---|---|---|---|---|---|---|`,
        `| Botón primario (${mi.split(' ')[0]}) | bg-indigo-600, texto blanco | bg-indigo-700, cursor pointer | ring-2 ring-indigo-500 | scale-95, 100ms | opacity-50, cursor not-allowed, tooltip: "[razón]" | Spinner reemplaza label, ancho fijo |`,
        `| Campo de entrada principal | border-zinc-300 | border-zinc-400 | border-indigo-500, ring-2 | N/A | bg-gray-100, texto gris | N/A |`,
        `| Área de selección/lista | Borde sutil, sin selección | bg-zinc-50 en fila | Borde outline por teclado | bg-indigo-50, check visible | Oculta o tooltip explicativo | Skeleton shimmer, altura fija |`,
        ``,
        `**Navegación por teclado:** Tab a través de elementos interactivos en orden lógico. Enter/Space activa botones. Escape cierra modales/dropdowns. Las teclas de flecha navegan listas.`,
        `**Animaciones:** Transiciones de estado usan ease-out 200ms. Animaciones de carga usan shimmer o spinner según contexto. Exitosas usan checkmark scale-in 300ms.`,
      ],
      validationNotes: requiresValidation ? [
        `### Reglas de Validación para ${fn}`,
        `| Campo | Tipo | Requerido | Min | Máx | Formato | Mensaje de Error |`,
        `|---|---|---|---|---|---|---|`,
        `| [Campo 1] | Texto | Sí | 1 | 200 | Alfanumérico | "Este campo es requerido" |`,
        `| [Campo 2] | Email | Sí | 5 | 254 | RFC 5322 | "Ingresa un email válido" |`,
        `| [Campo 3] | Número | No | 0 | 999999 | Entero | "El valor debe estar entre 0 y 999,999" |`,
        `| [Subida de archivo] | Archivo | Sí | — | 10MB | .csv, .xlsx | "Formato inválido. Formatos aceptados: CSV, XLSX" |`,
        ``,
        `**Timing de validación:** Inline al perder foco (blur) para campos individuales. Al enviar para validación cross-campo. Debounce 300ms para validación en tiempo real.`,
        `**Manejo de errores:** Resaltar campo en rojo (border-red-500). Mostrar mensaje de error debajo del campo. No limpiar input del usuario en error. Focus al primer campo con error en envío.`,
      ] : [
        `### Notas de Validación para ${fn}`,
        `Este feature no requiere validación de input del usuario.`,
        `**Nota:** Aunque no hay inputs de formulario, considerar validación a nivel de sistema: verificaciones de permisos, límites de tasa, y validación de formato de respuesta API.`,
      ],
      edgeCases: [
        `### Tabla de Edge Cases: ${fn}`,
        `| # | Edge Case | Probabilidad | Severidad | Respuesta UI |`,
        `|---|---|---|---|---|`,
        `| 1 | No hay datos para mostrar (estado vacío) | Alta | Alta | Estado vacío guiado con CTA para crear/importar |`,
        `| 2 | Carga lenta (>3s respuesta) | Media | Media | Skeleton screen, no spinner. Después de 10s: "Tomando más de lo esperado..." |`,
        `| 3 | Carga fallida (error de servidor) | Media | Alta | Banner de error inline con botón "Reintentar". Log detallado en consola |`,
        ...(hasApiDependency ? [
          `| 4 | Timeout de API (>30s) | Baja | Alta | Auto-reintento x1, luego mensaje: "El servidor no respondió. Reintenta o contacta soporte." |`,
          `| 5 | Red perdida a mitad de operación | Media | Crítica | Detectar offline, pausar, mostrar: "Sin conexión. Tus cambios se guardarán cuando te reconectes." |`,
          `| 6 | Respuesta API con formato inesperado | Baja | Alta | Manejar gracefully, mostrar datos parciales si es posible, loguear error |`,
        ] : []),
        ...(hasPermissionLevels ? [
          `| ${hasApiDependency ? 7 : 4} | Usuario sin permiso suficiente | Media | Media | Mostrar UI pero deshabilitar acciones restringidas con tooltip: "Requiere rol de [Rol]" |`,
          `| ${hasApiDependency ? 8 : 5} | Permiso revocado a mitad de sesión | Baja | Alta | Verificar permisos en cada acción. Toast: "Tu acceso ha cambiado. Contacta a tu administrador." |`,
        ] : []),
        `| ${(hasApiDependency ? 6 : 3) + (hasPermissionLevels ? 3 : 1)} | Acción concurrente (otro usuario modifica los mismos datos) | Baja | Alta | Mostrar conflicto: "Estos datos fueron modificados por [usuario]. Refrescar para ver cambios." |`,
        `| ${(hasApiDependency ? 6 : 3) + (hasPermissionLevels ? 3 : 1) + 1} | Doble clic en acción principal | Alta | Media | Deshabilitar botón después del primer clic. Prevenir envíos duplicados. |`,
        `| ${(hasApiDependency ? 6 : 3) + (hasPermissionLevels ? 3 : 1) + 2} | Navegación atrás del browser a mitad de flujo | Media | Media | Confirmar diálogo: "Tienes cambios sin guardar. ¿Salir de todas formas?" |`,
      ],
      versionTemplate: [
        `## Historial de Versión: ${fn}`,
        ``,
        `### v1.0 — Sprint [N] — [Fecha]`,
        `**Estado:** Lanzado / Diferido / Modificado`,
        ``,
        `| Cambio | Qué | Por Qué | Impacto | Estado |`,
        `|---|---|---|---|---|`,
        `| Diseño inicial | Implementación completa del feature | Solicitud inicial de stakeholder | Ninguno — feature nuevo | Lanzado |`,
        `| [Cambio 2] | [Describir] | [Fundamento] | [Features afectados] | [Estado] |`,
        ``,
        `**Breaking changes:** Ninguno en esta versión`,
        `**Ítems diferidos:** [Listar ítems movidos a sprints futuros]`,
        `**Notas para QA:** [Áreas de enfoque específicas para testing]`,
      ],
      devSummary: [
        `# Resumen Dev-Ready: ${fn}`,
        ``,
        `## Resumen`,
        `**Feature:** ${fn}`,
        `**Interacción principal:** ${mi}`,
        `**Validación:** ${requiresValidation ? 'Sí — ver tabla de validación' : 'No requerida'}`,
        `**Dependencia API:** ${hasApiDependency ? 'Sí — ver especificación de endpoint' : 'No'}`,
        `**Niveles de permiso:** ${hasPermissionLevels ? 'Sí — ver matriz de roles' : 'No'}`,
        ``,
        `## Checklist para Implementación`,
        `- [ ] Revisar frames de Figma (links adjuntos)`,
        `- [ ] Implementar estados default de componentes`,
        `- [ ] Implementar reglas de interacción (hover, focus, disabled)`,
        ...(requiresValidation ? [`- [ ] Implementar lógica de validación por tabla de spec`] : []),
        ...(hasApiDependency ? [`- [ ] Integrar endpoints API con manejo de errores`] : []),
        ...(hasPermissionLevels ? [`- [ ] Implementar verificaciones de permisos y UI condicional`] : []),
        `- [ ] Implementar todos los edge cases de la tabla`,
        `- [ ] Implementar estados de carga (skeleton/spinner)`,
        `- [ ] Implementar estados de error (inline, toast, banner)`,
        `- [ ] Verificar navegación por teclado y accesibilidad`,
        `- [ ] Verificar comportamiento responsivo (375px, 768px, 1200px+)`,
        `- [ ] Actualizar documentación de versión post-implementación`,
        ``,
        `## Criterios de Aceptación`,
        `1. Dado que el usuario está en [pantalla], Cuando realiza [${mi}], Entonces el sistema [comportamiento esperado]`,
        `2. Dado que no hay datos disponibles, Cuando la pantalla carga, Entonces se muestra un estado vacío guiado con CTA`,
        `3. Dado que la operación falla, Cuando el sistema retorna error, Entonces se muestra un mensaje de error inline con opción de reintento`,
        ...(hasPermissionLevels ? [`4. Dado que el usuario no tiene permisos, Cuando intenta la acción, Entonces ve la UI deshabilitada con tooltip explicativo`] : []),
      ],
    };
  }

  // English
  return {
    uxSpec: [
      `## UX Spec: ${fn}`,
      `**Feature Summary:** ${fn} — enables users to ${mi}.`,
      `**User Flow:** Entry point → Primary action → System feedback → Confirmation state`,
      `**Component Inventory:** List each UI component on the screen with its purpose and data source`,
      `**Responsive Behavior:** Define layout at desktop (1200px+), tablet (768px), and mobile (375px) breakpoints`,
      `**Accessibility Notes:** Keyboard order, ARIA labels, color contrast requirements, screen reader support`,
      `**Dependencies:** ${hasApiDependency ? 'API endpoint(s) required — document request/response format' : 'No external API dependencies'}`,
      `**Owner:** [Designer Name] | **Last Updated:** [Date] | **Version:** 1.0`,
    ],
    interactionRules: [
      `| Component | Default | Hover | Focus | Active | Disabled | Loading |`,
      `|---|---|---|---|---|---|---|`,
      `| Primary button (${mi.split(' ')[0]}) | bg-indigo-600, white text | bg-indigo-700, cursor pointer | ring-2 ring-indigo-500 | scale-95, 100ms | opacity-50, cursor not-allowed, tooltip: "[reason]" | Spinner replaces label, fixed width |`,
      `| Main input field | border-zinc-300 | border-zinc-400 | border-indigo-500, ring-2 | N/A | bg-gray-100, gray text | N/A |`,
      `| Selection area / list | Subtle border, no selection | bg-zinc-50 on row | Outline border via keyboard | bg-indigo-50, check visible | Hidden or tooltip explaining why | Skeleton shimmer, fixed height |`,
      ``,
      `**Keyboard Navigation:** Tab through interactive elements in logical order. Enter/Space activates buttons. Escape closes modals/dropdowns. Arrow keys navigate lists.`,
      `**Animations:** State transitions use ease-out 200ms. Loading animations use shimmer or spinner based on context. Success uses checkmark scale-in 300ms.`,
    ],
    validationNotes: requiresValidation ? [
      `### Validation Rules for ${fn}`,
      `| Field | Type | Required | Min | Max | Format | Error Message |`,
      `|---|---|---|---|---|---|---|`,
      `| [Field 1] | Text | Yes | 1 | 200 | Alphanumeric | "This field is required" |`,
      `| [Field 2] | Email | Yes | 5 | 254 | RFC 5322 | "Enter a valid email address" |`,
      `| [Field 3] | Number | No | 0 | 999999 | Integer | "Value must be between 0 and 999,999" |`,
      `| [File upload] | File | Yes | — | 10MB | .csv, .xlsx | "Invalid format. Accepted: CSV, XLSX" |`,
      ``,
      `**Validation Timing:** Inline on blur for individual fields. On submit for cross-field validation. 300ms debounce for real-time validation.`,
      `**Error Handling:** Highlight field in red (border-red-500). Show error message below field. Don't clear user input on error. Focus first errored field on submit.`,
    ] : [
      `### Validation Notes for ${fn}`,
      `This feature does not require user input validation.`,
      `**Note:** Although there are no form inputs, consider system-level validation: permission checks, rate limits, and API response format validation.`,
    ],
    edgeCases: [
      `### Edge Case Table: ${fn}`,
      `| # | Edge Case | Probability | Severity | UI Response |`,
      `|---|---|---|---|---|`,
      `| 1 | No data to display (empty state) | High | High | Guided empty state with CTA to create/import |`,
      `| 2 | Slow load (>3s response) | Medium | Medium | Skeleton screen, not spinner. After 10s: "Taking longer than expected..." |`,
      `| 3 | Failed load (server error) | Medium | High | Inline error banner with "Retry" button. Detailed log in console |`,
      ...(hasApiDependency ? [
        `| 4 | API timeout (>30s) | Low | High | Auto-retry x1, then message: "Server didn't respond. Retry or contact support." |`,
        `| 5 | Network lost mid-operation | Medium | Critical | Detect offline, pause, show: "You're offline. Changes will save when you reconnect." |`,
        `| 6 | Unexpected API response format | Low | High | Handle gracefully, show partial data if possible, log error |`,
      ] : []),
      ...(hasPermissionLevels ? [
        `| ${hasApiDependency ? 7 : 4} | User lacks required permission | Medium | Medium | Show UI but disable restricted actions with tooltip: "Requires [Role] access" |`,
        `| ${hasApiDependency ? 8 : 5} | Permission revoked mid-session | Low | High | Check permissions on each action. Toast: "Your access has changed. Contact your admin." |`,
      ] : []),
      `| ${(hasApiDependency ? 6 : 3) + (hasPermissionLevels ? 3 : 1)} | Concurrent action (another user modifies same data) | Low | High | Show conflict: "This data was modified by [user]. Refresh to see changes." |`,
      `| ${(hasApiDependency ? 6 : 3) + (hasPermissionLevels ? 3 : 1) + 1} | Double-click on primary action | High | Medium | Disable button after first click. Prevent duplicate submissions. |`,
      `| ${(hasApiDependency ? 6 : 3) + (hasPermissionLevels ? 3 : 1) + 2} | Browser back navigation mid-flow | Medium | Medium | Confirm dialog: "You have unsaved changes. Leave anyway?" |`,
    ],
    versionTemplate: [
      `## Version History: ${fn}`,
      ``,
      `### v1.0 — Sprint [N] — [Date]`,
      `**Status:** Shipped / Deferred / Modified`,
      ``,
      `| Change | What | Why | Impact | Status |`,
      `|---|---|---|---|---|`,
      `| Initial design | Full feature implementation | Initial stakeholder request | None — new feature | Shipped |`,
      `| [Change 2] | [Describe] | [Rationale] | [Affected features] | [Status] |`,
      ``,
      `**Breaking changes:** None in this version`,
      `**Deferred items:** [List items pushed to future sprints]`,
      `**QA Notes:** [Specific focus areas for testing]`,
    ],
    devSummary: [
      `# Dev-Ready Summary: ${fn}`,
      ``,
      `## Overview`,
      `**Feature:** ${fn}`,
      `**Primary interaction:** ${mi}`,
      `**Validation:** ${requiresValidation ? 'Yes — see validation table' : 'Not required'}`,
      `**API Dependency:** ${hasApiDependency ? 'Yes — see endpoint specification' : 'No'}`,
      `**Permission Levels:** ${hasPermissionLevels ? 'Yes — see role matrix' : 'No'}`,
      ``,
      `## Implementation Checklist`,
      `- [ ] Review Figma frames (links attached)`,
      `- [ ] Implement default component states`,
      `- [ ] Implement interaction rules (hover, focus, disabled)`,
      ...(requiresValidation ? [`- [ ] Implement validation logic per spec table`] : []),
      ...(hasApiDependency ? [`- [ ] Integrate API endpoints with error handling`] : []),
      ...(hasPermissionLevels ? [`- [ ] Implement permission checks and conditional UI`] : []),
      `- [ ] Implement all edge cases from the table`,
      `- [ ] Implement loading states (skeleton/spinner)`,
      `- [ ] Implement error states (inline, toast, banner)`,
      `- [ ] Verify keyboard navigation and accessibility`,
      `- [ ] Verify responsive behavior (375px, 768px, 1200px+)`,
      `- [ ] Update version documentation post-implementation`,
      ``,
      `## Acceptance Criteria`,
      `1. Given the user is on [screen], When they perform [${mi}], Then the system [expected behavior]`,
      `2. Given there is no data available, When the screen loads, Then a guided empty state is shown with CTA`,
      `3. Given the operation fails, When the system returns an error, Then an inline error message is shown with retry option`,
      ...(hasPermissionLevels ? [`4. Given the user lacks permissions, When they attempt the action, Then they see disabled UI with explanatory tooltip`] : []),
    ],
  };
}

/* ── Toggle Switch ─────────────────────────────────────────── */
function ToggleSwitch({ value, onChange, label, icon }: {
  value: boolean;
  onChange: (v: boolean) => void;
  label: string;
  icon: React.ReactNode;
}) {
  const { t } = useLanguage();
  return (
    <div className="flex items-center justify-between gap-3 bg-zinc-900/60 border border-zinc-800 rounded-xl p-3">
      <div className="flex items-center gap-2 min-w-0">
        <span className="text-zinc-400 shrink-0">{icon}</span>
        <span className="text-sm text-zinc-300 truncate">{label}</span>
      </div>
      <div className="flex items-center gap-2 shrink-0">
        <button
          onClick={() => onChange(true)}
          className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-all ${
            value
              ? 'bg-indigo-600 text-white'
              : 'bg-zinc-800 text-zinc-500 hover:text-zinc-300'
          }`}
        >
          {t(labels.yes)}
        </button>
        <button
          onClick={() => onChange(false)}
          className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-all ${
            !value
              ? 'bg-zinc-700 text-zinc-200'
              : 'bg-zinc-800 text-zinc-500 hover:text-zinc-300'
          }`}
        >
          {t(labels.no)}
        </button>
      </div>
    </div>
  );
}

/* ── Collapsible Section ───────────────────────────────────── */
function DocSection({ title, icon, lines, color, defaultOpen = false }: {
  title: string;
  icon: React.ReactNode;
  lines: string[];
  color: string;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className={`border rounded-xl overflow-hidden transition-all ${open ? `border-${color}/30 bg-zinc-900/80` : 'border-zinc-800 bg-zinc-900/40 hover:border-zinc-700'}`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-3 p-4 text-left group"
      >
        <div className={`shrink-0 text-${color}`}>{icon}</div>
        <span className="flex-1 text-sm font-semibold text-white">{title}</span>
        <span className="text-xs text-zinc-500 mr-2">{lines.length} {lines.length === 1 ? 'line' : 'lines'}</span>
        <div className="shrink-0 text-zinc-500 group-hover:text-zinc-300 transition-colors">
          {open ? <ChevronUp className="size-4" /> : <ChevronDown className="size-4" />}
        </div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4">
              <div className="bg-black/50 rounded-lg p-4 border border-zinc-800 font-mono text-xs leading-relaxed overflow-x-auto">
                {lines.map((line, idx) => (
                  <div
                    key={idx}
                    className={`${
                      line.startsWith('##') || line.startsWith('###') || line.startsWith('#')
                        ? 'text-indigo-400 font-bold mt-2 mb-1'
                        : line.startsWith('|---')
                        ? 'text-zinc-700'
                        : line.startsWith('|')
                        ? 'text-zinc-400'
                        : line.startsWith('**')
                        ? 'text-amber-300 mt-2'
                        : line.startsWith('- [')
                        ? 'text-green-400'
                        : line === ''
                        ? 'h-2'
                        : 'text-zinc-300'
                    } whitespace-pre-wrap break-words`}
                  >
                    {line}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ── Risk Indicator ────────────────────────────────────────── */
function RiskIndicator({ config, t }: { config: DocConfig; t: (obj: { en: string; es: string }) => string }) {
  const risks: { label: string; level: 'low' | 'medium' | 'high' }[] = [];

  if (!config.featureName && !config.mainInteraction) {
    return null;
  }

  if (!config.requiresValidation && !config.hasApiDependency && !config.hasPermissionLevels) {
    risks.push({
      label: t({ en: 'No complexity flags set — document may be too minimal for enterprise use', es: 'Sin flags de complejidad — el documento puede ser muy mínimo para uso enterprise' }),
      level: 'medium'
    });
  }

  if (config.hasApiDependency && !config.hasPermissionLevels) {
    risks.push({
      label: t({ en: 'API dependency without permission levels — verify if auth is needed', es: 'Dependencia API sin niveles de permiso — verifica si auth es necesario' }),
      level: 'medium'
    });
  }

  if (config.hasApiDependency && config.hasPermissionLevels && config.requiresValidation) {
    risks.push({
      label: t({ en: 'High complexity — ensure thorough QA coverage for all edge cases', es: 'Alta complejidad — asegura cobertura QA exhaustiva para todos los edge cases' }),
      level: 'high'
    });
  }

  if (risks.length === 0) return null;

  return (
    <div className="space-y-2 mt-4">
      {risks.map((risk, idx) => (
        <div key={idx} className={`flex items-start gap-2 p-3 rounded-lg border text-xs ${
          risk.level === 'high'
            ? 'bg-red-950/20 border-red-500/20 text-red-300'
            : risk.level === 'medium'
            ? 'bg-amber-950/20 border-amber-500/20 text-amber-300'
            : 'bg-blue-950/20 border-blue-500/20 text-blue-300'
        }`}>
          <TriangleAlert className="size-3.5 shrink-0 mt-0.5" />
          <span>{risk.label}</span>
        </div>
      ))}
    </div>
  );
}

/* ── Complexity Badge ──────────────────────────────────────── */
function ComplexityBadge({ config, t }: { config: DocConfig; t: (obj: { en: string; es: string }) => string }) {
  const score = (config.requiresValidation ? 1 : 0) + (config.hasApiDependency ? 1 : 0) + (config.hasPermissionLevels ? 1 : 0);
  const level = score === 0 ? 'simple' : score === 1 ? 'moderate' : score === 2 ? 'complex' : 'enterprise';
  const levelLabel = {
    simple: t({ en: 'Simple', es: 'Simple' }),
    moderate: t({ en: 'Moderate', es: 'Moderado' }),
    complex: t({ en: 'Complex', es: 'Complejo' }),
    enterprise: t({ en: 'Enterprise', es: 'Enterprise' }),
  };
  const colors = {
    simple: 'bg-green-500/10 text-green-400 border-green-500/20',
    moderate: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    complex: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    enterprise: 'bg-red-500/10 text-red-400 border-red-500/20',
  };

  return (
    <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${colors[level]}`}>
      <Zap className="size-3" />
      {t({ en: 'Complexity:', es: 'Complejidad:' })} {levelLabel[level]}
    </div>
  );
}

/* ── Main Component ────────────────────────────────────────── */
export function DocumentationBuilder() {
  const { t, language } = useLanguage();
  const [config, setConfig] = useState<DocConfig>({
    featureName: '',
    mainInteraction: '',
    requiresValidation: false,
    hasApiDependency: false,
    hasPermissionLevels: false,
  });
  const [generated, setGenerated] = useState<GeneratedDoc | null>(null);
  const [copyState, setCopyState] = useState<'idle' | 'copied'>('idle');
  const [exportState, setExportState] = useState<'idle' | 'exported'>('idle');
  const outputRef = useRef<HTMLDivElement>(null);

  const canGenerate = config.featureName.trim().length > 0 && config.mainInteraction.trim().length > 0;

  const handleGenerate = () => {
    if (!canGenerate) return;
    const docs = generateDocs(config, language);
    setGenerated(docs);
    setTimeout(() => {
      outputRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 200);
  };

  const handleReset = () => {
    setConfig({
      featureName: '',
      mainInteraction: '',
      requiresValidation: false,
      hasApiDependency: false,
      hasPermissionLevels: false,
    });
    setGenerated(null);
  };

  const allLines = useMemo(() => {
    if (!generated) return '';
    return [
      ...generated.uxSpec,
      '', '---', '',
      ...generated.interactionRules,
      '', '---', '',
      ...generated.validationNotes,
      '', '---', '',
      ...generated.edgeCases,
      '', '---', '',
      ...generated.versionTemplate,
      '', '---', '',
      ...generated.devSummary,
    ].join('\n');
  }, [generated]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(allLines);
      setCopyState('copied');
      setTimeout(() => setCopyState('idle'), 2000);
    } catch {
      // fallback
      const textarea = document.createElement('textarea');
      textarea.value = allLines;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopyState('copied');
      setTimeout(() => setCopyState('idle'), 2000);
    }
  };

  const handleExport = () => {
    const blob = new Blob([allLines], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ux-spec-${config.featureName.toLowerCase().replace(/\s+/g, '-') || 'template'}.md`;
    a.click();
    URL.revokeObjectURL(url);
    setExportState('exported');
    setTimeout(() => setExportState('idle'), 2000);
  };

  const sections = generated ? [
    { key: 'uxSpec', title: t(labels.sections.uxSpec), icon: <FileText className="size-4" />, lines: generated.uxSpec, color: 'indigo-400', defaultOpen: true },
    { key: 'interactions', title: t(labels.sections.interactions), icon: <MousePointerClick className="size-4" />, lines: generated.interactionRules, color: 'cyan-400', defaultOpen: false },
    { key: 'validation', title: t(labels.sections.validation), icon: <ShieldAlert className="size-4" />, lines: generated.validationNotes, color: 'amber-400', defaultOpen: false },
    { key: 'edgeCases', title: t(labels.sections.edgeCases), icon: <AlertTriangle className="size-4" />, lines: generated.edgeCases, color: 'red-400', defaultOpen: true },
    { key: 'versionTemplate', title: t(labels.sections.versionTemplate), icon: <History className="size-4" />, lines: generated.versionTemplate, color: 'purple-400', defaultOpen: false },
    { key: 'devSummary', title: t(labels.sections.devSummary), icon: <Code2 className="size-4" />, lines: generated.devSummary, color: 'green-400', defaultOpen: false },
  ] : [];

  return (
    <section id="documentation-builder" className="mb-12 scroll-mt-24">
      <div className="bg-gradient-to-br from-indigo-950/30 to-purple-950/30 border border-indigo-500/20 rounded-2xl p-6 md:p-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-6">
          <div className="size-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
            <ClipboardList className="size-5 text-indigo-400" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white">{t(labels.title)}</h3>
            <p className="text-sm text-zinc-400 mt-0.5">{t(labels.subtitle)}</p>
          </div>
          {canGenerate && <ComplexityBadge config={config} t={t} />}
        </div>

        {/* Input Form */}
        <div className="space-y-4 mb-6">
          {/* Feature name */}
          <div>
            <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1.5">
              {t(labels.featureName)}
            </label>
            <input
              type="text"
              value={config.featureName}
              onChange={e => setConfig(prev => ({ ...prev, featureName: e.target.value }))}
              placeholder={t(labels.featurePlaceholder)}
              className="w-full bg-black/50 border border-zinc-700 rounded-lg px-4 py-2.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
            />
          </div>

          {/* Main interaction */}
          <div>
            <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1.5">
              {t(labels.mainInteraction)}
            </label>
            <input
              type="text"
              value={config.mainInteraction}
              onChange={e => setConfig(prev => ({ ...prev, mainInteraction: e.target.value }))}
              placeholder={t(labels.interactionPlaceholder)}
              className="w-full bg-black/50 border border-zinc-700 rounded-lg px-4 py-2.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
            />
          </div>

          {/* Toggle switches */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <ToggleSwitch
              value={config.requiresValidation}
              onChange={v => setConfig(prev => ({ ...prev, requiresValidation: v }))}
              label={t(labels.requiresValidation)}
              icon={<ShieldAlert className="size-4" />}
            />
            <ToggleSwitch
              value={config.hasApiDependency}
              onChange={v => setConfig(prev => ({ ...prev, hasApiDependency: v }))}
              label={t(labels.hasApi)}
              icon={<Server className="size-4" />}
            />
            <ToggleSwitch
              value={config.hasPermissionLevels}
              onChange={v => setConfig(prev => ({ ...prev, hasPermissionLevels: v }))}
              label={t(labels.hasPermissions)}
              icon={<Lock className="size-4" />}
            />
          </div>

          {/* Risk indicator */}
          <RiskIndicator config={config} t={t} />
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 mb-6">
          <button
            onClick={handleGenerate}
            disabled={!canGenerate}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all ${
              canGenerate
                ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
                : 'bg-zinc-800 text-zinc-600 cursor-not-allowed'
            }`}
          >
            <Zap className="size-4" />
            {t(labels.generate)}
          </button>
          {generated && (
            <>
              <button
                onClick={handleCopy}
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold bg-zinc-800 hover:bg-zinc-700 text-zinc-200 transition-all"
              >
                {copyState === 'copied' ? <Check className="size-4 text-green-400" /> : <Copy className="size-4" />}
                {copyState === 'copied' ? t(labels.copied) : t(labels.copySpec)}
              </button>
              <button
                onClick={handleExport}
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold bg-zinc-800 hover:bg-zinc-700 text-zinc-200 transition-all"
              >
                {exportState === 'exported' ? <Check className="size-4 text-green-400" /> : <Download className="size-4" />}
                {exportState === 'exported' ? t(labels.exported) : t(labels.exportTemplate)}
              </button>
              <button
                onClick={handleReset}
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-zinc-400 hover:text-white transition-colors"
              >
                {t(labels.reset)}
              </button>
            </>
          )}
        </div>

        {/* Hint when not ready */}
        {!canGenerate && !generated && (
          <div className="flex items-center gap-2 text-xs text-zinc-600 italic">
            <ArrowRight className="size-3" />
            {t(labels.inputRequired)}
          </div>
        )}

        {/* Output */}
        <div ref={outputRef}>
          <AnimatePresence>
            {generated && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.3 }}
                className="space-y-3"
              >
                {/* Stats bar */}
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <div className="flex items-center gap-1.5 text-xs text-zinc-500">
                    <CheckCircle2 className="size-3 text-green-400" />
                    <span>6 {t({ en: 'sections generated', es: 'secciones generadas' })}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-zinc-500">
                    <FileText className="size-3 text-indigo-400" />
                    <span>{allLines.split('\n').length} {t({ en: 'total lines', es: 'líneas totales' })}</span>
                  </div>
                  {generated.edgeCases.length > 5 && (
                    <div className="flex items-center gap-1.5 text-xs text-zinc-500">
                      <AlertTriangle className="size-3 text-amber-400" />
                      <span>{generated.edgeCases.filter(l => l.startsWith('|') && !l.startsWith('|---') && !l.startsWith('| #')).length} {t({ en: 'edge cases covered', es: 'edge cases cubiertos' })}</span>
                    </div>
                  )}
                </div>

                {/* Sections */}
                {sections.map(sec => (
                  <DocSection
                    key={sec.key}
                    title={sec.title}
                    icon={sec.icon}
                    lines={sec.lines}
                    color={sec.color}
                    defaultOpen={sec.defaultOpen}
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
