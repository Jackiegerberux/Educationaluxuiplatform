import React from 'react';
import { useLanguage } from '../../layout/LanguageContext';
import { Check, X, AlertCircle, Lightbulb } from 'lucide-react';

interface GuidelineCardProps {
  title: string;
  use: string[];
  avoid: string[];
  example?: React.ReactNode;
}

function GuidelineCard({ title, use, avoid, example }: GuidelineCardProps) {
  const { t } = useLanguage();

  return (
    <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl overflow-hidden">
      <div className="bg-zinc-900 border-b border-zinc-800 px-6 py-4">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>

      <div className="p-6 space-y-6">
        {/* Use Section */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Check className="size-5 text-green-400" />
            <h4 className="font-semibold text-green-400">{t({ en: 'Use when', es: 'Usar cuando' })}</h4>
          </div>
          <ul className="space-y-2">
            {use.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-zinc-300">
                <span className="text-green-400 mt-1">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Avoid Section */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <X className="size-5 text-red-400" />
            <h4 className="font-semibold text-red-400">{t({ en: 'Avoid when', es: 'Evitar cuando' })}</h4>
          </div>
          <ul className="space-y-2">
            {avoid.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-zinc-300">
                <span className="text-red-400 mt-1">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Example Section */}
        {example && (
          <div className="pt-4 border-t border-zinc-800">
            <div className="flex items-center gap-2 mb-3">
              <Lightbulb className="size-5 text-yellow-400" />
              <h4 className="font-semibold text-yellow-400">{t({ en: 'Example', es: 'Ejemplo' })}</h4>
            </div>
            <div className="bg-zinc-950 rounded-lg p-4">
              {example}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export function DesignSystemGuidelines() {
  const { t } = useLanguage();

  return (
    <div className="space-y-12">
      {/* Header */}
      <section>
        <h2 className="text-3xl font-bold text-white mb-4">
          {t({ en: 'Usage Guidelines', es: 'Guías de Uso' })}
        </h2>
        <p className="text-zinc-400 max-w-3xl mb-8">
          {t({
            en: 'Learn when to use each component and when to choose alternatives. These guidelines help maintain consistency and make better design decisions.',
            es: 'Aprende cuándo usar cada componente y cuándo elegir alternativas. Estas guías ayudan a mantener consistencia y tomar mejores decisiones de diseño.'
          })}
        </p>

        <div className="bg-gradient-to-br from-blue-950/30 to-indigo-950/30 border border-blue-500/20 rounded-xl p-6">
          <div className="flex items-start gap-3">
            <AlertCircle className="size-5 text-blue-400 mt-0.5 shrink-0" />
            <div>
              <h3 className="font-semibold text-white mb-2">
                {t({ en: 'Purpose of Guidelines', es: 'Propósito de las Guías' })}
              </h3>
              <p className="text-sm text-zinc-300">
                {t({
                  en: 'These rules help trainees and designers make informed decisions about component usage. Following these guidelines ensures consistency across the platform and improves user experience.',
                  es: 'Estas reglas ayudan a trainees y diseñadores a tomar decisiones informadas sobre el uso de componentes. Seguir estas guías asegura consistencia en la plataforma y mejora la experiencia del usuario.'
                })}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Buttons */}
      <section>
        <h3 className="text-2xl font-bold text-white mb-6">
          {t({ en: 'Buttons', es: 'Botones' })}
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          <GuidelineCard
            title="Primary Button"
            use={[
              t({ en: 'Main action on the page (submit form, start lesson, proceed)', es: 'Acción principal en la página (enviar formulario, empezar lección, proceder)' }),
              t({ en: 'Only one primary action per section', es: 'Solo una acción principal por sección' }),
              t({ en: 'Positive, constructive actions', es: 'Acciones positivas y constructivas' })
            ]}
            avoid={[
              t({ en: 'Multiple primary buttons in the same view', es: 'Múltiples botones primarios en la misma vista' }),
              t({ en: 'Destructive actions (use danger variant)', es: 'Acciones destructivas (usar variante danger)' }),
              t({ en: 'Secondary or tertiary actions', es: 'Acciones secundarias o terciarias' })
            ]}
            example={
              <div className="flex gap-3">
                <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg font-medium">
                  Start Lesson
                </button>
                <span className="text-green-400 text-sm self-center">✓ Correct</span>
              </div>
            }
          />

          <GuidelineCard
            title="Secondary Button"
            use={[
              t({ en: 'Alternative or less important actions', es: 'Acciones alternativas o menos importantes' }),
              t({ en: 'Cancel, go back, skip actions', es: 'Acciones de cancelar, volver, saltar' }),
              t({ en: 'Paired with a primary button', es: 'Emparejado con un botón primario' })
            ]}
            avoid={[
              t({ en: 'As the only action (use primary)', es: 'Como única acción (usar primario)' }),
              t({ en: 'More than 2 buttons in a group', es: 'Más de 2 botones en un grupo' }),
              t({ en: 'For main call-to-action', es: 'Para llamada a la acción principal' })
            ]}
            example={
              <div className="flex gap-3">
                <button className="px-4 py-2 bg-zinc-800 text-zinc-100 rounded-lg font-medium border border-zinc-700">
                  Cancel
                </button>
                <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg font-medium">
                  Save Changes
                </button>
              </div>
            }
          />

          <GuidelineCard
            title="Ghost Button"
            use={[
              t({ en: 'Tertiary actions (view details, learn more)', es: 'Acciones terciarias (ver detalles, aprender más)' }),
              t({ en: 'Navigation within cards or lists', es: 'Navegación dentro de cards o listas' }),
              t({ en: 'When visual weight should be minimal', es: 'Cuando el peso visual debe ser mínimo' })
            ]}
            avoid={[
              t({ en: 'Primary actions that need emphasis', es: 'Acciones primarias que necesitan énfasis' }),
              t({ en: 'On busy backgrounds (low contrast)', es: 'En fondos ocupados (bajo contraste)' }),
              t({ en: 'Critical actions that need visibility', es: 'Acciones críticas que necesitan visibilidad' })
            ]}
          />

          <GuidelineCard
            title="Danger Button"
            use={[
              t({ en: 'Destructive actions (delete, remove, cancel)', es: 'Acciones destructivas (eliminar, remover, cancelar)' }),
              t({ en: 'Actions that cannot be undone', es: 'Acciones que no se pueden deshacer' }),
              t({ en: 'Requires confirmation dialog before action', es: 'Requiere diálogo de confirmación antes de la acción' })
            ]}
            avoid={[
              t({ en: 'For regular negative actions (use secondary)', es: 'Para acciones negativas regulares (usar secondary)' }),
              t({ en: 'Multiple danger buttons together', es: 'Múltiples botones danger juntos' }),
              t({ en: 'Without proper warning or confirmation', es: 'Sin advertencia o confirmación apropiada' })
            ]}
          />
        </div>
      </section>

      {/* Cards */}
      <section>
        <h3 className="text-2xl font-bold text-white mb-6">
          {t({ en: 'Cards', es: 'Tarjetas' })}
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          <GuidelineCard
            title="Card Component"
            use={[
              t({ en: 'Grouping related content (lessons, modules, features)', es: 'Agrupar contenido relacionado (lecciones, módulos, características)' }),
              t({ en: 'Displaying preview information with action', es: 'Mostrar información de vista previa con acción' }),
              t({ en: 'Creating visual separation between items', es: 'Crear separación visual entre items' })
            ]}
            avoid={[
              t({ en: 'Nesting cards more than 2 levels deep', es: 'Anidar cards más de 2 niveles de profundidad' }),
              t({ en: 'For single pieces of text (use typography)', es: 'Para piezas simples de texto (usar tipografía)' }),
              t({ en: 'When content flows naturally (use sections)', es: 'Cuando el contenido fluye naturalmente (usar secciones)' })
            ]}
            example={
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 space-y-3">
                <h4 className="font-semibold text-white">UX Foundations</h4>
                <p className="text-sm text-zinc-400">Learn the basics of user experience design</p>
                <div className="flex gap-2">
                  <span className="px-2 py-1 bg-green-950/50 text-green-400 rounded text-xs border border-green-500/20">
                    Beginner
                  </span>
                  <span className="text-xs text-zinc-500">30 min</span>
                </div>
              </div>
            }
          />

          <GuidelineCard
            title="Card Variants"
            use={[
              t({ en: 'Default: general content cards', es: 'Default: tarjetas de contenido general' }),
              t({ en: 'Surface: subtle backgrounds, less emphasis', es: 'Surface: fondos sutiles, menos énfasis' }),
              t({ en: 'Bordered: when elevation is not needed', es: 'Bordered: cuando no se necesita elevación' }),
              t({ en: 'Elevated: important content that needs focus', es: 'Elevated: contenido importante que necesita enfoque' })
            ]}
            avoid={[
              t({ en: 'Mixing different variants in same grid', es: 'Mezclar diferentes variantes en la misma grilla' }),
              t({ en: 'Using elevated for all cards (loses emphasis)', es: 'Usar elevated para todas las cards (pierde énfasis)' }),
              t({ en: 'Using too many variants on one page', es: 'Usar demasiadas variantes en una página' })
            ]}
          />
        </div>
      </section>

      {/* Modals & Drawers */}
      <section>
        <h3 className="text-2xl font-bold text-white mb-6">
          {t({ en: 'Modals & Drawers', es: 'Modales y Drawers' })}
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          <GuidelineCard
            title="Modal (Center Overlay)"
            use={[
              t({ en: 'Critical decisions requiring user attention', es: 'Decisiones críticas que requieren atención del usuario' }),
              t({ en: 'Confirmations before destructive actions', es: 'Confirmaciones antes de acciones destructivas' }),
              t({ en: 'Short forms or quick inputs (login, subscribe)', es: 'Formularios cortos o inputs rápidos (login, suscribirse)' })
            ]}
            avoid={[
              t({ en: 'Long content or complex forms (use drawer)', es: 'Contenido largo o formularios complejos (usar drawer)' }),
              t({ en: 'Displaying lists or tables', es: 'Mostrar listas o tablas' }),
              t({ en: 'Nested modals (modal within modal)', es: 'Modales anidados (modal dentro de modal)' })
            ]}
          />

          <GuidelineCard
            title="Drawer (Side Panel)"
            use={[
              t({ en: 'Preview content without leaving page (lesson preview)', es: 'Vista previa de contenido sin salir de página (preview de lección)' }),
              t({ en: 'Detailed information that needs scrolling', es: 'Información detallada que necesita scroll' }),
              t({ en: 'Secondary navigation or filters', es: 'Navegación secundaria o filtros' })
            ]}
            avoid={[
              t({ en: 'Critical actions (use modal)', es: 'Acciones críticas (usar modal)' }),
              t({ en: 'On mobile (takes full screen anyway)', es: 'En móvil (toma pantalla completa de todas formas)' }),
              t({ en: 'When user needs to see background content', es: 'Cuando usuario necesita ver contenido de fondo' })
            ]}
          />
        </div>
      </section>

      {/* Form Inputs */}
      <section>
        <h3 className="text-2xl font-bold text-white mb-6">
          {t({ en: 'Form Inputs', es: 'Inputs de Formulario' })}
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          <GuidelineCard
            title="Text Input"
            use={[
              t({ en: 'Free-form text entry (names, emails, search)', es: 'Entrada de texto libre (nombres, emails, búsqueda)' }),
              t({ en: 'Single line input (use textarea for multi-line)', es: 'Input de una línea (usar textarea para multi-línea)' }),
              t({ en: 'Always provide labels and placeholders', es: 'Siempre proveer labels y placeholders' })
            ]}
            avoid={[
              t({ en: 'For dates (use date picker)', es: 'Para fechas (usar date picker)' }),
              t({ en: 'For predefined options (use select)', es: 'Para opciones predefinidas (usar select)' }),
              t({ en: 'For boolean choices (use checkbox/switch)', es: 'Para opciones booleanas (usar checkbox/switch)' })
            ]}
          />

          <GuidelineCard
            title="Select Dropdown"
            use={[
              t({ en: 'Choosing from 5-15 predefined options', es: 'Elegir entre 5-15 opciones predefinidas' }),
              t({ en: 'When user needs to pick one option', es: 'Cuando usuario necesita elegir una opción' }),
              t({ en: 'Categories, countries, time zones', es: 'Categorías, países, zonas horarias' })
            ]}
            avoid={[
              t({ en: 'Less than 5 options (use radio buttons)', es: 'Menos de 5 opciones (usar radio buttons)' }),
              t({ en: 'More than 15 options (use search/autocomplete)', es: 'Más de 15 opciones (usar búsqueda/autocompletado)' }),
              t({ en: 'For yes/no choices (use checkbox)', es: 'Para opciones sí/no (usar checkbox)' })
            ]}
          />

          <GuidelineCard
            title="Checkbox"
            use={[
              t({ en: 'Multiple selections from a list', es: 'Múltiples selecciones de una lista' }),
              t({ en: 'Opt-in/opt-out settings (newsletters, notifications)', es: 'Configuración opt-in/opt-out (newsletters, notificaciones)' }),
              t({ en: 'Terms and conditions acceptance', es: 'Aceptación de términos y condiciones' })
            ]}
            avoid={[
              t({ en: 'Mutually exclusive options (use radio)', es: 'Opciones mutuamente excluyentes (usar radio)' }),
              t({ en: 'Single on/off toggle (use switch)', es: 'Toggle simple on/off (usar switch)' }),
              t({ en: 'More than 7 options (consider multi-select)', es: 'Más de 7 opciones (considerar multi-select)' })
            ]}
          />

          <GuidelineCard
            title="Switch Toggle"
            use={[
              t({ en: 'Immediate on/off state changes', es: 'Cambios de estado on/off inmediatos' }),
              t({ en: 'Settings that take effect instantly', es: 'Configuraciones que toman efecto instantáneamente' }),
              t({ en: 'Enable/disable features', es: 'Habilitar/deshabilitar características' })
            ]}
            avoid={[
              t({ en: 'Actions that require confirmation', es: 'Acciones que requieren confirmación' }),
              t({ en: 'When the change is not immediate', es: 'Cuando el cambio no es inmediato' }),
              t({ en: 'In forms that need submission', es: 'En formularios que necesitan envío' })
            ]}
          />
        </div>
      </section>

      {/* Lists & Tables */}
      <section>
        <h3 className="text-2xl font-bold text-white mb-6">
          {t({ en: 'Lists & Tables', es: 'Listas y Tablas' })}
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          <GuidelineCard
            title="List View"
            use={[
              t({ en: 'Scannable content with consistent structure', es: 'Contenido escaneable con estructura consistente' }),
              t({ en: 'Items with 2-4 attributes each', es: 'Items con 2-4 atributos cada uno' }),
              t({ en: 'Mobile-friendly presentation', es: 'Presentación mobile-friendly' })
            ]}
            avoid={[
              t({ en: 'More than 5 attributes per item (use table)', es: 'Más de 5 atributos por item (usar tabla)' }),
              t({ en: 'Complex data relationships (use table)', es: 'Relaciones de datos complejas (usar tabla)' }),
              t({ en: 'When sorting/filtering is critical', es: 'Cuando ordenar/filtrar es crítico' })
            ]}
          />

          <GuidelineCard
            title="Table View"
            use={[
              t({ en: 'Comparing multiple attributes across items', es: 'Comparar múltiples atributos entre items' }),
              t({ en: 'Data that benefits from sorting/filtering', es: 'Datos que se benefician de ordenar/filtrar' }),
              t({ en: 'Desktop-first data visualization', es: 'Visualización de datos desktop-first' })
            ]}
            avoid={[
              t({ en: 'On mobile (hard to scroll horizontally)', es: 'En móvil (difícil hacer scroll horizontal)' }),
              t({ en: 'When items have varying structures', es: 'Cuando items tienen estructuras variadas' }),
              t({ en: 'Less than 3 columns (use list)', es: 'Menos de 3 columnas (usar lista)' })
            ]}
          />
        </div>
      </section>

      {/* Best Practices Summary */}
      <section className="bg-gradient-to-br from-green-950/30 to-emerald-950/30 border border-green-500/20 rounded-xl p-8">
        <h3 className="text-xl font-semibold text-white mb-6">
          {t({ en: 'General Best Practices', es: 'Mejores Prácticas Generales' })}
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-green-400 mb-3">
              {t({ en: 'Always Consider', es: 'Siempre Considerar' })}
            </h4>
            <ul className="space-y-2 text-sm text-zinc-300">
              <li className="flex items-start gap-2">
                <Check className="size-4 text-green-400 mt-0.5 shrink-0" />
                <span>{t({ en: 'User context and task at hand', es: 'Contexto del usuario y tarea en mano' })}</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="size-4 text-green-400 mt-0.5 shrink-0" />
                <span>{t({ en: 'Accessibility for all users', es: 'Accesibilidad para todos los usuarios' })}</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="size-4 text-green-400 mt-0.5 shrink-0" />
                <span>{t({ en: 'Mobile vs desktop experience', es: 'Experiencia móvil vs desktop' })}</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="size-4 text-green-400 mt-0.5 shrink-0" />
                <span>{t({ en: 'Consistency with existing patterns', es: 'Consistencia con patrones existentes' })}</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-red-400 mb-3">
              {t({ en: 'Always Avoid', es: 'Siempre Evitar' })}
            </h4>
            <ul className="space-y-2 text-sm text-zinc-300">
              <li className="flex items-start gap-2">
                <X className="size-4 text-red-400 mt-0.5 shrink-0" />
                <span>{t({ en: 'Using components just because they exist', es: 'Usar componentes solo porque existen' })}</span>
              </li>
              <li className="flex items-start gap-2">
                <X className="size-4 text-red-400 mt-0.5 shrink-0" />
                <span>{t({ en: 'Ignoring established patterns', es: 'Ignorar patrones establecidos' })}</span>
              </li>
              <li className="flex items-start gap-2">
                <X className="size-4 text-red-400 mt-0.5 shrink-0" />
                <span>{t({ en: 'Creating new variants without reason', es: 'Crear nuevas variantes sin razón' })}</span>
              </li>
              <li className="flex items-start gap-2">
                <X className="size-4 text-red-400 mt-0.5 shrink-0" />
                <span>{t({ en: 'Sacrificing accessibility for aesthetics', es: 'Sacrificar accesibilidad por estética' })}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
