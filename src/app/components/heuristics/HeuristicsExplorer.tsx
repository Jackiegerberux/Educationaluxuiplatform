import React, { useState } from 'react';
import { useLanguage } from '../layout/LanguageContext';
import { heuristics } from '../../data/content';
import { motion, AnimatePresence } from 'motion/react';
import {
  Search, RefreshCw, Eye, Globe, RotateCcw, Copy, AlertTriangle, Zap, Sparkles,
  LifeBuoy, BookOpen, Target, List, Ear, ScanEye, CheckCircle2, XCircle,
  ArrowRight, Building2, GraduationCap, Lightbulb
} from 'lucide-react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { heuristicIllustrations } from './HeuristicIllustrations';

// ─── Icon Map ────────────────────────────────────────────────
const iconMap: Record<string, React.ElementType> = {
  h1: Eye, h2: Globe, h3: RotateCcw, h4: Copy, h5: AlertTriangle,
  h6: ScanEye, h7: Zap, h8: Sparkles, h9: LifeBuoy, h10: BookOpen,
  law1: List, law2: Target, a11y1: Ear,
};

// ─── Color Palette per Category ──────────────────────────────
const categoryColors: Record<string, { gradient: string; accent: string; border: string; badge: string; ring: string }> = {
  usability: {
    gradient: 'from-indigo-600/30 via-blue-600/20 to-indigo-900/30',
    accent: 'text-indigo-400',
    border: 'border-indigo-500/30',
    badge: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30',
    ring: 'ring-indigo-500/30',
  },
  psychology: {
    gradient: 'from-purple-600/30 via-fuchsia-600/20 to-purple-900/30',
    accent: 'text-purple-400',
    border: 'border-purple-500/30',
    badge: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
    ring: 'ring-purple-500/30',
  },
  accessibility: {
    gradient: 'from-emerald-600/30 via-green-600/20 to-emerald-900/30',
    accent: 'text-emerald-400',
    border: 'border-emerald-500/30',
    badge: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
    ring: 'ring-emerald-500/30',
  },
};

// ─── Enriched Data ───────────────────────────────────────────
interface EnrichedData {
  doExample: { en: string; es: string };
  dontExample: { en: string; es: string };
  realProduct: { en: string; es: string };
  keyTakeaway: { en: string; es: string };
}

const enrichedMap: Record<string, EnrichedData> = {
  h1: {
    doExample: {
      en: 'Show a progress bar with percentage, estimated time, and file name during uploads.',
      es: 'Mostrar barra de progreso con porcentaje, tiempo estimado y nombre del archivo durante cargas.',
    },
    dontExample: {
      en: 'Show a spinning loader with no context — users don\'t know if it\'s 2 seconds or 2 minutes.',
      es: 'Mostrar un spinner sin contexto — los usuarios no saben si son 2 segundos o 2 minutos.',
    },
    realProduct: {
      en: 'Slack shows typing indicators ("John is typing..."), read receipts, and connection status in real-time.',
      es: 'Slack muestra indicadores de escritura ("John está escribiendo..."), confirmaciones de lectura y estado de conexión en tiempo real.',
    },
    keyTakeaway: {
      en: 'Never leave users guessing. Every action should have visible, immediate feedback.',
      es: 'Nunca dejes a los usuarios adivinando. Cada acción debe tener retroalimentación visible e inmediata.',
    },
  },
  h2: {
    doExample: {
      en: 'Use a shopping cart icon for e-commerce, a trash can for delete, a heart for favorites — metaphors users already know.',
      es: 'Usar icono de carrito de compras, papelera para eliminar, corazón para favoritos — metáforas que los usuarios ya conocen.',
    },
    dontExample: {
      en: 'Use technical jargon like "Initiate session" instead of "Log in" or "Dispatch request" instead of "Send".',
      es: 'Usar jerga técnica como "Iniciar sesión" vs "Loguearse" o "Despachar solicitud" en vez de "Enviar".',
    },
    realProduct: {
      en: 'Apple\'s macOS uses real-world metaphors: folders, desktop, trash can, and documents that users understand intuitively.',
      es: 'macOS de Apple usa metáforas del mundo real: carpetas, escritorio, papelera y documentos que los usuarios entienden intuitivamente.',
    },
    keyTakeaway: {
      en: 'Speak your user\'s language. Design should feel familiar, not like a technical manual.',
      es: 'Habla el idioma de tu usuario. El diseño debe sentirse familiar, no como un manual técnico.',
    },
  },
  h3: {
    doExample: {
      en: 'Gmail\'s "Undo Send" gives 30 seconds to cancel a sent email. Google Docs has full version history.',
      es: 'El "Deshacer Envío" de Gmail da 30 segundos para cancelar un email. Google Docs tiene historial de versiones completo.',
    },
    dontExample: {
      en: 'A form that loses all data when you press the browser back button — no way to recover your work.',
      es: 'Un formulario que pierde todos los datos cuando presionas el botón atrás del navegador — sin forma de recuperar tu trabajo.',
    },
    realProduct: {
      en: 'Figma\'s Ctrl+Z, version history, and ability to easily exit any modal give users complete control at all times.',
      es: 'El Ctrl+Z de Figma, historial de versiones y capacidad de salir fácilmente de cualquier modal dan control completo al usuario.',
    },
    keyTakeaway: {
      en: 'Always provide an emergency exit. Users should never feel trapped in your interface.',
      es: 'Siempre provee una salida de emergencia. Los usuarios nunca deben sentirse atrapados en tu interfaz.',
    },
  },
  h4: {
    doExample: {
      en: 'Primary buttons always blue, destructive actions always red, consistent header/footer across all pages.',
      es: 'Botones primarios siempre azules, acciones destructivas siempre rojas, header/footer consistente en todas las páginas.',
    },
    dontExample: {
      en: 'A "Save" button that is green on one page, blue on another, and an icon-only on a third page.',
      es: 'Un botón "Guardar" que es verde en una página, azul en otra, y solo un icono en una tercera.',
    },
    realProduct: {
      en: 'Material Design by Google provides a universal design language: same components, same behaviors across all Google products.',
      es: 'Material Design de Google provee un lenguaje de diseño universal: mismos componentes, mismos comportamientos en todos los productos de Google.',
    },
    keyTakeaway: {
      en: 'Consistency reduces cognitive load. Use a design system and follow platform conventions.',
      es: 'La consistencia reduce la carga cognitiva. Usa un sistema de diseño y sigue las convenciones de la plataforma.',
    },
  },
  h5: {
    doExample: {
      en: 'Show a confirmation dialog: "Are you sure you want to delete this project? This action cannot be undone."',
      es: 'Mostrar diálogo de confirmación: "¿Estás seguro de eliminar este proyecto? Esta acción no se puede deshacer."',
    },
    dontExample: {
      en: 'Allow single-click permanent deletion with no confirmation, undo, or recovery option.',
      es: 'Permitir eliminación permanente con un solo clic sin confirmación, deshacer ni opción de recuperación.',
    },
    realProduct: {
      en: 'GitHub requires you to type the repo name before deleting it — an elegant friction that prevents catastrophic mistakes.',
      es: 'GitHub requiere que escribas el nombre del repo antes de eliminarlo — una fricción elegante que previene errores catastróficos.',
    },
    keyTakeaway: {
      en: 'Prevention > cure. Smart constraints and confirmations save users from their own mistakes.',
      es: 'Prevención > cura. Restricciones inteligentes y confirmaciones salvan a los usuarios de sus propios errores.',
    },
  },
  h6: {
    doExample: {
      en: 'Show "Recently Viewed" items, autocomplete suggestions, and visual thumbnails in search results.',
      es: 'Mostrar items "Vistos Recientemente", sugerencias de autocompletado y miniaturas visuales en resultados de búsqueda.',
    },
    dontExample: {
      en: 'Force users to remember a 12-digit product code to reorder — instead of showing their order history.',
      es: 'Forzar a los usuarios a recordar un código de producto de 12 dígitos para reordenar — en lugar de mostrar su historial de pedidos.',
    },
    realProduct: {
      en: 'Amazon shows "Recently Viewed", "Buy Again", and visual product cards — you recognize, never need to recall.',
      es: 'Amazon muestra "Visto Recientemente", "Comprar de Nuevo" y tarjetas visuales de productos — reconoces, nunca necesitas recordar.',
    },
    keyTakeaway: {
      en: 'Show, don\'t ask to remember. Visual cues and history features reduce mental effort.',
      es: 'Muestra, no pidas que recuerden. Las pistas visuales y funciones de historial reducen el esfuerzo mental.',
    },
  },
  h7: {
    doExample: {
      en: 'Offer keyboard shortcuts (Ctrl+K for search), drag-and-drop, and bulk actions for power users alongside simple click interfaces.',
      es: 'Ofrecer atajos de teclado (Ctrl+K para búsqueda), drag-and-drop y acciones masivas para usuarios avanzados junto a interfaces de clic simples.',
    },
    dontExample: {
      en: 'Force expert users through the same 5-step wizard every time — no shortcuts, no "remember my choice" option.',
      es: 'Forzar a usuarios expertos por el mismo wizard de 5 pasos cada vez — sin atajos, sin opción "recordar mi elección".',
    },
    realProduct: {
      en: 'VS Code: beginners use menus, experts use the Command Palette (Ctrl+Shift+P) — both paths achieve the same goals.',
      es: 'VS Code: principiantes usan menús, expertos usan el Command Palette (Ctrl+Shift+P) — ambos caminos logran los mismos objetivos.',
    },
    keyTakeaway: {
      en: 'Design for beginners AND experts. Provide accelerators that don\'t clutter the basic experience.',
      es: 'Diseña para principiantes Y expertos. Provee aceleradores que no saturen la experiencia básica.',
    },
  },
  h8: {
    doExample: {
      en: 'Google homepage: one search bar, one logo, two buttons. Every pixel earns its place.',
      es: 'Homepage de Google: una barra de búsqueda, un logo, dos botones. Cada pixel se gana su lugar.',
    },
    dontExample: {
      en: 'A landing page with 15 different CTAs, auto-playing video, chat widget, newsletter popup, and cookie banner all at once.',
      es: 'Una landing page con 15 CTAs diferentes, video auto-play, widget de chat, popup de newsletter y banner de cookies al mismo tiempo.',
    },
    realProduct: {
      en: 'Apple.com product pages: huge hero images, minimal text, clear hierarchy. Content breathes with generous whitespace.',
      es: 'Páginas de producto de Apple.com: imágenes hero enormes, texto mínimo, jerarquía clara. El contenido respira con espacio en blanco generoso.',
    },
    keyTakeaway: {
      en: 'Less is more. Every element should serve a purpose. When in doubt, remove it.',
      es: 'Menos es más. Cada elemento debe servir un propósito. Cuando dudes, elimínalo.',
    },
  },
  h9: {
    doExample: {
      en: '"Your password needs at least 8 characters and one number" — specific, actionable guidance.',
      es: '"Tu contraseña necesita al menos 8 caracteres y un número" — guía específica y accionable.',
    },
    dontExample: {
      en: '"Error 500: Internal Server Error. Contact system administrator." — unhelpful and scary.',
      es: '"Error 500: Error Interno del Servidor. Contacte al administrador." — inútil y aterrador.',
    },
    realProduct: {
      en: 'Stripe\'s API errors include the field name, what went wrong, a suggestion to fix it, and a link to docs.',
      es: 'Los errores de API de Stripe incluyen el nombre del campo, qué salió mal, una sugerencia para arreglarlo y un enlace a los docs.',
    },
    keyTakeaway: {
      en: 'Error messages should be human, specific, and suggest a solution. No jargon, no codes.',
      es: 'Los mensajes de error deben ser humanos, específicos y sugerir una solución. Sin jerga, sin códigos.',
    },
  },
  h10: {
    doExample: {
      en: 'Contextual tooltips, searchable help center, onboarding walkthroughs for new features.',
      es: 'Tooltips contextuales, centro de ayuda con buscador, walkthroughs de onboarding para nuevas funciones.',
    },
    dontExample: {
      en: 'A 200-page PDF manual as the only help resource, buried in a footer link nobody finds.',
      es: 'Un manual PDF de 200 páginas como único recurso de ayuda, enterrado en un enlace del footer que nadie encuentra.',
    },
    realProduct: {
      en: 'Notion combines inline help (? icons), /slash commands, template gallery, and an AI assistant — help at every level.',
      es: 'Notion combina ayuda inline (iconos ?), comandos /slash, galería de plantillas y un asistente de IA — ayuda en cada nivel.',
    },
    keyTakeaway: {
      en: 'The best help is contextual and findable. Proactive guidance beats reactive documentation.',
      es: 'La mejor ayuda es contextual y fácil de encontrar. La guía proactiva supera la documentación reactiva.',
    },
  },
  law1: {
    doExample: {
      en: 'Break a 20-field registration into 3 progressive steps: Account → Profile → Preferences.',
      es: 'Dividir un registro de 20 campos en 3 pasos progresivos: Cuenta → Perfil → Preferencias.',
    },
    dontExample: {
      en: 'A navigation menu with 25 top-level items — users freeze and leave instead of choosing.',
      es: 'Un menú de navegación con 25 items de primer nivel — los usuarios se paralizan y se van en vez de elegir.',
    },
    realProduct: {
      en: 'Netflix shows ~40 tiles per row with categories, not 10,000 movies in a single list. Progressive disclosure at its best.',
      es: 'Netflix muestra ~40 títulos por fila con categorías, no 10,000 películas en una sola lista. Revelación progresiva en su mejor forma.',
    },
    keyTakeaway: {
      en: 'More choices = slower decisions. Reduce, chunk, and progressively disclose options.',
      es: 'Más opciones = decisiones más lentas. Reduce, agrupa y revela opciones progresivamente.',
    },
  },
  law2: {
    doExample: {
      en: 'Make the primary CTA button large (min 44×44px touch target), high contrast, and close to the user\'s thumb zone on mobile.',
      es: 'Hacer el botón CTA principal grande (mín 44×44px zona táctil), alto contraste y cercano a la zona del pulgar en móvil.',
    },
    dontExample: {
      en: 'A tiny 16px "Delete Account" link in the corner with no spacing — hard to hit, easy to miss.',
      es: 'Un enlace "Eliminar Cuenta" de 16px en la esquina sin espaciado — difícil de presionar, fácil de ignorar.',
    },
    realProduct: {
      en: 'iOS places critical actions (Phone, Messages) in the thumb-reachable dock. Apple Maps has a large "Directions" button.',
      es: 'iOS coloca acciones críticas (Teléfono, Mensajes) en el dock alcanzable con el pulgar. Apple Maps tiene un botón "Direcciones" grande.',
    },
    keyTakeaway: {
      en: 'Bigger + closer = faster. Make primary actions large and easy to reach; place destructive actions further away.',
      es: 'Más grande + más cerca = más rápido. Haz acciones principales grandes y fáciles de alcanzar; aleja las destructivas.',
    },
  },
  a11y1: {
    doExample: {
      en: 'All images have descriptive alt text, videos have captions, and color is never the only way to convey information.',
      es: 'Todas las imágenes tienen texto alt descriptivo, los videos tienen subtítulos y el color nunca es la única forma de transmitir información.',
    },
    dontExample: {
      en: 'A red/green color-coded status indicator with no text label or icon — invisible to colorblind users.',
      es: 'Un indicador de estado codificado en rojo/verde sin etiqueta de texto ni icono — invisible para usuarios daltónicos.',
    },
    realProduct: {
      en: 'GOV.UK is a gold standard: semantic HTML, high contrast (AAA), clear language at a 9-year-old reading level.',
      es: 'GOV.UK es el estándar de oro: HTML semántico, alto contraste (AAA), lenguaje claro a nivel de lectura de 9 años.',
    },
    keyTakeaway: {
      en: 'Accessibility is not optional. 15% of the world has a disability. Design for everyone.',
      es: 'La accesibilidad no es opcional. El 15% del mundo tiene una discapacidad. Diseña para todos.',
    },
  },
};

// ═══════════════════════════════════════════════════════════════
// FLIP CARD COMPONENT
// ═══════════════════════════════════════════════════════════════

interface FlipCardProps {
  heuristic: typeof heuristics[0];
  isFlipped: boolean;
  onFlip: () => void;
}

function FlipCard({ heuristic, isFlipped, onFlip }: FlipCardProps) {
  const { t } = useLanguage();
  const Icon = iconMap[heuristic.id] || Sparkles;
  const colors = categoryColors[heuristic.category] || categoryColors.usability;
  const enriched = enrichedMap[heuristic.id];
  const Illustration = heuristicIllustrations[heuristic.id];

  return (
    <div
      className="perspective-1000 cursor-pointer"
      onClick={onFlip}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onFlip()}
    >
      <motion.div
        className="relative w-full preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        style={{ minHeight: 580 }}
      >
        {/* ─── FRONT ─── */}
        <div className={`absolute inset-0 backface-hidden rounded-2xl border ${colors.border} bg-zinc-900/80 overflow-hidden flex flex-col`}>
          {/* Illustration — takes maximum space */}
          <div className="relative flex-1 overflow-hidden">
            {Illustration ? (
              <Illustration />
            ) : (
              <div className={`w-full h-full bg-gradient-to-br ${colors.gradient}`} />
            )}
            {/* Number badge */}
            <div className="absolute top-3 left-3">
              <div className="px-2.5 py-1 rounded-lg bg-black/50 backdrop-blur-sm border border-white/10">
                <span className="text-2xl font-black text-white/60 leading-none select-none">
                  #{heuristic.number}
                </span>
              </div>
            </div>
            {/* Category badge */}
            <div className="absolute top-3 right-3">
              <Badge className={`text-[10px] font-semibold border capitalize backdrop-blur-sm ${colors.badge}`}>
                {t({
                  en: heuristic.category,
                  es: heuristic.category === 'usability' ? 'Usabilidad' : heuristic.category === 'psychology' ? 'Psicología' : 'Accesibilidad',
                })}
              </Badge>
            </div>
          </div>

          {/* Compact footer */}
          <div className="flex-shrink-0 p-4 border-t border-white/5 bg-zinc-900/90">
            <h3 className="text-base font-bold text-white leading-tight mb-2">
              {t(heuristic.title)}
            </h3>
            <div className="flex items-center justify-between">
              <div className={`flex items-center gap-1.5 text-xs font-medium ${colors.accent}`}>
                <RefreshCw className="size-3.5" />
                {t({ en: 'Flip for deep dive', es: 'Girar para profundizar' })}
              </div>
              <ArrowRight className="size-3.5 text-zinc-600" />
            </div>
          </div>
        </div>

        {/* ─── BACK ─── */}
        <div
          className={`absolute inset-0 backface-hidden rounded-2xl border ${colors.border} bg-zinc-900/95 overflow-hidden flex flex-col`}
          style={{ transform: 'rotateY(180deg)' }}
        >
          {/* Header */}
          <div className={`px-5 pt-5 pb-3 flex-shrink-0 border-b border-white/5`}>
            <div className="flex items-center gap-3">
              <div className={`size-9 rounded-lg bg-gradient-to-br ${colors.gradient} border ${colors.border} flex items-center justify-center`}>
                <Icon className={`size-4.5 ${colors.accent}`} strokeWidth={1.8} />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-bold text-white leading-tight truncate">
                  {t(heuristic.title)}
                </h3>
                <span className="text-[10px] text-zinc-500">#{heuristic.number} · {heuristic.category}</span>
              </div>
              <button
                onClick={(e) => { e.stopPropagation(); onFlip(); }}
                className="size-7 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors flex-shrink-0"
              >
                <RotateCcw className="size-3.5" />
              </button>
            </div>
          </div>

          {/* Scrollable content */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4 hide-scrollbar">
            {/* Description */}
            <p className="text-sm text-zinc-300 leading-relaxed">
              {t(heuristic.description)}
            </p>

            {/* Original example */}
            <div className="bg-black/30 rounded-xl p-3.5 border border-white/5">
              <div className="flex items-start gap-2.5">
                <Lightbulb className="size-4 text-amber-400 mt-0.5 flex-shrink-0" />
                <p className="text-xs text-zinc-400 leading-relaxed italic">
                  "{t(heuristic.example)}"
                </p>
              </div>
            </div>

            {enriched && (
              <>
                {/* Do Example */}
                <div className="rounded-xl bg-emerald-950/20 border border-emerald-500/15 p-3.5">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 className="size-4 text-emerald-400 flex-shrink-0" />
                    <span className="text-xs font-bold text-emerald-300 uppercase tracking-wider">
                      {t({ en: 'Do', es: 'Haz' })}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    {t(enriched.doExample)}
                  </p>
                </div>

                {/* Don't Example */}
                <div className="rounded-xl bg-red-950/20 border border-red-500/15 p-3.5">
                  <div className="flex items-center gap-2 mb-2">
                    <XCircle className="size-4 text-red-400 flex-shrink-0" />
                    <span className="text-xs font-bold text-red-300 uppercase tracking-wider">
                      {t({ en: "Don't", es: 'No hagas' })}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    {t(enriched.dontExample)}
                  </p>
                </div>

                {/* Real Product Example */}
                <div className="rounded-xl bg-blue-950/20 border border-blue-500/15 p-3.5">
                  <div className="flex items-center gap-2 mb-2">
                    <Building2 className="size-4 text-blue-400 flex-shrink-0" />
                    <span className="text-xs font-bold text-blue-300 uppercase tracking-wider">
                      {t({ en: 'Real World', es: 'Mundo Real' })}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    {t(enriched.realProduct)}
                  </p>
                </div>

                {/* Key Takeaway */}
                <div className="rounded-xl bg-amber-950/20 border border-amber-500/15 p-3.5">
                  <div className="flex items-center gap-2 mb-2">
                    <GraduationCap className="size-4 text-amber-400 flex-shrink-0" />
                    <span className="text-xs font-bold text-amber-300 uppercase tracking-wider">
                      {t({ en: 'Key Takeaway', es: 'Conclusión Clave' })}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-200 leading-relaxed font-medium">
                    {t(enriched.keyTakeaway)}
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// STATS BAR
// ═══════════════════════════════════════════════════════════════

function StatsBar({ total, filtered, flipped }: { total: number; filtered: number; flipped: number }) {
  const { t } = useLanguage();
  return (
    <div className="flex flex-wrap gap-4 text-xs text-zinc-500 mb-2">
      <span>{total} {t({ en: 'total', es: 'total' })}</span>
      <span className="text-zinc-700">·</span>
      <span>{filtered} {t({ en: 'shown', es: 'mostradas' })}</span>
      <span className="text-zinc-700">·</span>
      <span className={flipped > 0 ? 'text-indigo-400' : ''}>
        {flipped} {t({ en: 'explored', es: 'exploradas' })}
      </span>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════

export function HeuristicsExplorer() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<'all' | 'usability' | 'psychology' | 'accessibility'>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [flippedCards, setFlippedCards] = useState<string[]>([]);

  const filteredHeuristics = heuristics.filter(h => {
    const matchesFilter = filter === 'all' || h.category === filter;
    const matchesSearch = t(h.title).toLowerCase().includes(searchTerm.toLowerCase()) ||
                          t(h.description).toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const toggleFlip = (id: string) => {
    setFlippedCards(prev =>
      prev.includes(id) ? prev.filter(cardId => cardId !== id) : [...prev, id]
    );
  };

  const filterCategories = [
    { key: 'all' as const, en: 'All', es: 'Todos', count: heuristics.length },
    { key: 'usability' as const, en: 'Usability', es: 'Usabilidad', count: heuristics.filter(h => h.category === 'usability').length },
    { key: 'psychology' as const, en: 'Psychology', es: 'Psicología', count: heuristics.filter(h => h.category === 'psychology').length },
    { key: 'accessibility' as const, en: 'Accessibility', es: 'Accesibilidad', count: heuristics.filter(h => h.category === 'accessibility').length },
  ];

  return (
    <div className="py-16 md:py-20 bg-zinc-950 min-h-screen">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* ─── Header ─── */}
        <div className="mb-10 md:mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="size-12 rounded-xl bg-indigo-500/15 border border-indigo-500/25 flex items-center justify-center">
              <BookOpen className="size-6 text-indigo-400" />
            </div>
            <Badge className="bg-indigo-500/20 text-indigo-300 border-indigo-500/30 text-[10px] font-semibold uppercase tracking-wider">
              {t({ en: 'Reference Guide', es: 'Guía de Referencia' })}
            </Badge>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-3">
            {t({ en: 'Heuristics & Laws', es: 'Heurísticas y Leyes' })}
          </h2>
          <p className="text-zinc-400 max-w-2xl text-base md:text-lg leading-relaxed">
            {t({
              en: 'Your essential toolkit for UX evaluation. Master these principles to design better interfaces and defend your decisions with science.',
              es: 'Tu kit esencial para evaluación UX. Domina estos principios para diseñar mejores interfaces y defender tus decisiones con ciencia.',
            })}
          </p>
        </div>

        {/* ─── Controls ─── */}
        <div className="flex flex-col md:flex-row gap-4 mb-6 items-start md:items-center justify-between">
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto hide-scrollbar">
            {filterCategories.map((f) => (
              <Button
                key={f.key}
                variant={filter === f.key ? 'default' : 'outline'}
                onClick={() => setFilter(f.key)}
                className={`whitespace-nowrap text-sm ${
                  filter === f.key
                    ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
                    : 'border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800'
                }`}
              >
                {t({ en: f.en, es: f.es })}
                <span className={`ml-1.5 text-[10px] px-1.5 py-0.5 rounded-full ${
                  filter === f.key ? 'bg-white/20' : 'bg-zinc-800 text-zinc-500'
                }`}>
                  {f.count}
                </span>
              </Button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-zinc-500" />
            <Input
              placeholder={t({ en: 'Search heuristics...', es: 'Buscar heurísticas...' })}
              className="pl-9 bg-zinc-900 border-zinc-800 text-white placeholder:text-zinc-600 focus-visible:ring-indigo-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Stats */}
        <StatsBar
          total={heuristics.length}
          filtered={filteredHeuristics.length}
          flipped={flippedCards.length}
        />

        {/* ─── Grid ─── */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <AnimatePresence>
            {filteredHeuristics.map((heuristic) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                key={heuristic.id}
              >
                <FlipCard
                  heuristic={heuristic}
                  isFlipped={flippedCards.includes(heuristic.id)}
                  onFlip={() => toggleFlip(heuristic.id)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* ─── Empty State ─── */}
        {filteredHeuristics.length === 0 && (
          <div className="text-center py-20">
            <Search className="size-10 text-zinc-700 mx-auto mb-4" />
            <p className="text-zinc-400 text-lg font-medium mb-2">
              {t({ en: 'No results found', es: 'Sin resultados' })}
            </p>
            <p className="text-zinc-600 text-sm">
              {t({ en: 'Try a different search term or filter', es: 'Intenta con otro término de búsqueda o filtro' })}
            </p>
            <Button
              variant="outline"
              className="mt-4 border-zinc-800 text-zinc-400 hover:text-white"
              onClick={() => { setSearchTerm(''); setFilter('all'); }}
            >
              {t({ en: 'Clear filters', es: 'Limpiar filtros' })}
            </Button>
          </div>
        )}

        {/* ─── Completion Card ─── */}
        {flippedCards.length === heuristics.length && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-10 bg-gradient-to-r from-indigo-950/40 via-purple-950/30 to-pink-950/20 border border-indigo-500/20 rounded-2xl p-6 md:p-8 text-center"
          >
            <GraduationCap className="size-10 text-indigo-400 mx-auto mb-3" />
            <h3 className="text-xl font-bold text-white mb-2">
              {t({ en: 'All Principles Explored!', es: '¡Todos los Principios Explorados!' })}
            </h3>
            <p className="text-sm text-zinc-400 max-w-lg mx-auto">
              {t({
                en: "You've reviewed all heuristics and laws. Bookmark this page and use it during your next design review or usability evaluation.",
                es: 'Has revisado todas las heurísticas y leyes. Guarda esta página y úsala durante tu próxima revisión de diseño o evaluación de usabilidad.',
              })}
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}