import React, { useState } from 'react';
import { useLanguage } from '../layout/LanguageContext';
import { heuristics } from '../../data/content';
import { motion, AnimatePresence } from 'motion/react';
import {
  Search, RefreshCw, Eye, Globe, RotateCcw, Copy, AlertTriangle, Zap, Sparkles,
  LifeBuoy, BookOpen, Target, List, Ear, ScanEye, CheckCircle2, XCircle,
  ArrowRight, Building2, GraduationCap, Lightbulb,
  Users, Grid3X3, Star, Award, Clock, Hand, MessageCircle, Code2
} from 'lucide-react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { heuristicIllustrations } from './HeuristicIllustrations';

// ─── Icon Map ────────────────────────────────────────────────
const iconMap: Record<string, React.ElementType> = {
  h1: Eye, h2: Globe, h3: RotateCcw, h4: Copy, h5: AlertTriangle,
  h6: ScanEye, h7: Zap, h8: Sparkles, h9: LifeBuoy, h10: BookOpen,
  law1: List, law2: Target, law3: Users, law4: Grid3X3, law5: Star,
  law6: Award, law7: Clock, law8: Sparkles,
  a11y1: Ear, a11y2: Hand, a11y3: MessageCircle, a11y4: Code2,
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
  law3: {
    doExample: {
      en: 'Place the logo top-left linking to home, use a hamburger menu on mobile, put search in the header, and keep the cart icon top-right — exactly where users expect them.',
      es: 'Colocar el logo arriba a la izquierda enlazando al inicio, usar menú hamburguesa en móvil, poner búsqueda en el header y mantener el icono del carrito arriba a la derecha — exactamente donde los usuarios los esperan.',
    },
    dontExample: {
      en: 'Reinvent navigation: hide the menu behind a gesture, put the logo bottom-center, or use a non-standard icon for search. Innovation ≠ ignoring conventions.',
      es: 'Reinventar la navegación: esconder el menú detrás de un gesto, poner el logo abajo al centro, o usar un icono no estándar para búsqueda. Innovación ≠ ignorar convenciones.',
    },
    realProduct: {
      en: 'Shopify stores follow e-commerce conventions (header with logo/cart/search, product grid, filter sidebar) — users can shop immediately without learning a new UI.',
      es: 'Las tiendas Shopify siguen convenciones de e-commerce (header con logo/carrito/búsqueda, grilla de productos, sidebar de filtros) — los usuarios pueden comprar inmediatamente sin aprender una nueva UI.',
    },
    keyTakeaway: {
      en: 'Users bring expectations from every other product they use. Leverage familiar patterns; innovate on value, not on how to navigate.',
      es: 'Los usuarios traen expectativas de cada otro producto que usan. Aprovecha los patrones familiares; innova en valor, no en cómo navegar.',
    },
  },
  law4: {
    doExample: {
      en: 'Chunk a credit card number into groups of 4 digits (1234 5678 9012 3456), organize nav into 5-7 top-level categories, and break long articles into scannable sections.',
      es: 'Dividir un número de tarjeta de crédito en grupos de 4 dígitos (1234 5678 9012 3456), organizar la nav en 5-7 categorías principales, y dividir artículos largos en secciones escaneables.',
    },
    dontExample: {
      en: 'A dashboard showing 15 unrelated metrics in a single view with no grouping — users can\'t process or remember any of them.',
      es: 'Un dashboard mostrando 15 métricas no relacionadas en una sola vista sin agrupación — los usuarios no pueden procesar ni recordar ninguna.',
    },
    realProduct: {
      en: 'Slack organizes conversations into Channels, DMs, and Threads — chunking thousands of messages into digestible, scannable groups.',
      es: 'Slack organiza conversaciones en Canales, DMs e Hilos — agrupando miles de mensajes en grupos digeribles y escaneables.',
    },
    keyTakeaway: {
      en: 'Don\'t overwhelm working memory. Chunk content into groups of 5-9 items and use progressive disclosure for the rest.',
      es: 'No sobrecargues la memoria de trabajo. Agrupa el contenido en grupos de 5-9 elementos y usa revelación progresiva para el resto.',
    },
  },
  law5: {
    doExample: {
      en: 'Highlight the recommended pricing plan with a contrasting color, a "Most Popular" badge, and a slightly larger card to make it visually distinct from other options.',
      es: 'Resaltar el plan de precios recomendado con un color contrastante, una insignia "Más Popular" y una tarjeta ligeramente más grande para distinguirlo visualmente de las otras opciones.',
    },
    dontExample: {
      en: 'Three identical-looking pricing cards with no visual hierarchy — users can\'t quickly identify the best option and experience decision fatigue.',
      es: 'Tres tarjetas de precios de aspecto idéntico sin jerarquía visual — los usuarios no pueden identificar rápidamente la mejor opción y experimentan fatiga de decisión.',
    },
    realProduct: {
      en: 'Spotify\'s pricing page highlights the Premium plan with a contrasting green accent and "Recommended" label, making it stand out from Free and Family tiers.',
      es: 'La página de precios de Spotify resalta el plan Premium con un acento verde contrastante y etiqueta "Recomendado", haciéndolo destacar de los tiers Free y Family.',
    },
    keyTakeaway: {
      en: 'Make the important thing look different. Visual distinction drives attention and memory — use it strategically on CTAs, key features, and recommended options.',
      es: 'Haz que lo importante se vea diferente. La distinción visual impulsa la atención y la memoria — úsala estratégicamente en CTAs, funciones clave y opciones recomendadas.',
    },
  },
  law6: {
    doExample: {
      en: 'End a checkout flow with a satisfying confirmation animation, order summary, and a small surprise ("10% off your next order!"). The last moment shapes the overall memory.',
      es: 'Terminar un flujo de checkout con una animación de confirmación satisfactoria, resumen del pedido, y una pequeña sorpresa ("¡10% de descuento en tu próximo pedido!"). El último momento moldea la memoria general.',
    },
    dontExample: {
      en: 'A frustrating checkout (slow loading, confusing forms) that ends with a plain "Order placed" text — the bad peak and weak ending ruin the whole experience.',
      es: 'Un checkout frustrante (carga lenta, formularios confusos) que termina con un texto plano "Pedido realizado" — el mal pico y el final débil arruinan toda la experiencia.',
    },
    realProduct: {
      en: 'Disney parks end each ride with a photo opportunity and gift shop — the "peak" is the ride itself, and the "end" is a positive souvenir moment that colors the entire memory.',
      es: 'Los parques Disney terminan cada atracción con una oportunidad de foto y tienda de regalos — el "pico" es la atracción, y el "final" es un momento positivo de recuerdo que colorea toda la memoria.',
    },
    keyTakeaway: {
      en: 'Invest in peak moments and endings. Users don\'t average their experience — they remember the best/worst moment and the last one.',
      es: 'Invierte en momentos pico y finales. Los usuarios no promedian su experiencia — recuerdan el mejor/peor momento y el último.',
    },
  },
  law7: {
    doExample: {
      en: 'Show a progress bar at "70% complete" on a user profile page. Display "3 of 5 steps done" in an onboarding wizard. The incomplete status creates productive tension.',
      es: 'Mostrar una barra de progreso al "70% completo" en una página de perfil. Mostrar "3 de 5 pasos hechos" en un wizard de onboarding. El estado incompleto crea tensión productiva.',
    },
    dontExample: {
      en: 'Remove all progress indicators — users abandon tasks because they don\'t feel the pull to complete them. No visible progress = no motivation.',
      es: 'Eliminar todos los indicadores de progreso — los usuarios abandonan tareas porque no sienten la motivación de completarlas. Sin progreso visible = sin motivación.',
    },
    realProduct: {
      en: 'LinkedIn\'s profile strength meter ("Intermediate — add 2 more sections to reach All-Star") leverages the Zeigarnik Effect to drive profile completion from 40% to 90%+.',
      es: 'El medidor de fortaleza de perfil de LinkedIn ("Intermedio — agrega 2 secciones más para llegar a All-Star") aprovecha el Efecto Zeigarnik para impulsar la completitud del perfil del 40% al 90%+.',
    },
    keyTakeaway: {
      en: 'Unfinished tasks haunt the mind. Use progress indicators, checklists, and streaks to harness this cognitive bias for user engagement.',
      es: 'Las tareas sin terminar persiguen la mente. Usa indicadores de progreso, checklists y rachas para aprovechar este sesgo cognitivo para el engagement.',
    },
  },
  law8: {
    doExample: {
      en: 'Invest in visual polish: smooth animations, consistent spacing, refined typography, and a cohesive color palette. First impressions set tolerance thresholds.',
      es: 'Invertir en pulido visual: animaciones suaves, espaciado consistente, tipografía refinada y una paleta de colores cohesiva. Las primeras impresiones establecen umbrales de tolerancia.',
    },
    dontExample: {
      en: 'A functional but visually ugly interface with misaligned elements, inconsistent fonts, and harsh colors — users perceive it as harder to use even if it works perfectly.',
      es: 'Una interfaz funcional pero fea con elementos desalineados, fuentes inconsistentes y colores agresivos — los usuarios la perciben como más difícil de usar aunque funcione perfectamente.',
    },
    realProduct: {
      en: 'Apple products feel intuitive partly because of their obsessive visual polish — rounded corners, smooth transitions, and refined typography create trust before the user even interacts.',
      es: 'Los productos de Apple se sienten intuitivos por su pulido visual obsesivo — esquinas redondeadas, transiciones suaves y tipografía refinada crean confianza antes de que el usuario interactúe.',
    },
    keyTakeaway: {
      en: 'Beauty is not just decoration — it builds trust. But never let aesthetics mask real usability problems. Polish AND usability must coexist.',
      es: 'La belleza no es solo decoración — construye confianza. Pero nunca dejes que la estética esconda problemas reales de usabilidad. Pulido Y usabilidad deben coexistir.',
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
  a11y2: {
    doExample: {
      en: 'Every interactive element (buttons, links, form controls, modals) is reachable and operable via keyboard alone. Focus indicators are visible and follow a logical tab order.',
      es: 'Cada elemento interactivo (botones, enlaces, controles de formulario, modales) es alcanzable y operable solo con teclado. Los indicadores de foco son visibles y siguen un orden de tabulación lógico.',
    },
    dontExample: {
      en: 'A dropdown menu that only opens on hover, a carousel that can\'t be navigated with arrow keys, or a modal with no keyboard trap — all unusable for keyboard-only users.',
      es: 'Un menú desplegable que solo se abre al pasar el mouse, un carrusel que no se puede navegar con teclas de flecha, o un modal sin trampa de teclado — todos inutilizables para usuarios de solo teclado.',
    },
    realProduct: {
      en: 'GitHub\'s entire interface is keyboard-navigable: press "." to open the web editor, "/" for search, "g n" for notifications. Full operability without a mouse.',
      es: 'Toda la interfaz de GitHub es navegable por teclado: presiona "." para abrir el editor web, "/" para buscar, "g n" para notificaciones. Operabilidad completa sin mouse.',
    },
    keyTakeaway: {
      en: 'If it can\'t be done with a keyboard, it can\'t be done by many users. Test your entire flow using only Tab, Enter, Space, and Arrow keys.',
      es: 'Si no se puede hacer con el teclado, no pueden hacerlo muchos usuarios. Prueba todo tu flujo usando solo Tab, Enter, Espacio y teclas de flecha.',
    },
  },
  a11y3: {
    doExample: {
      en: 'Form fields have visible labels (not just placeholders), error messages explain what went wrong AND how to fix it, and the interface behaves predictably with no unexpected context changes.',
      es: 'Los campos de formulario tienen etiquetas visibles (no solo placeholders), los mensajes de error explican qué salió mal Y cómo arreglarlo, y la interfaz se comporta de forma predecible sin cambios de contexto inesperados.',
    },
    dontExample: {
      en: 'Auto-submitting a form when the user selects a dropdown value, showing errors only after pressing submit with no inline validation, or using placeholder-only labels that disappear.',
      es: 'Auto-enviar un formulario cuando el usuario selecciona un valor del dropdown, mostrar errores solo después de presionar enviar sin validación inline, o usar etiquetas solo de placeholder que desaparecen.',
    },
    realProduct: {
      en: 'Stripe\'s payment forms show inline validation, clear error states with suggestions ("Your card was declined — try another card"), and consistent predictable behavior across all inputs.',
      es: 'Los formularios de pago de Stripe muestran validación inline, estados de error claros con sugerencias ("Tu tarjeta fue rechazada — intenta con otra"), y comportamiento predecible consistente en todos los inputs.',
    },
    keyTakeaway: {
      en: 'Users must understand your content AND your controls. Clear labels, helpful errors, and predictable behavior are not extras — they\'re requirements.',
      es: 'Los usuarios deben entender tu contenido Y tus controles. Etiquetas claras, errores útiles y comportamiento predecible no son extras — son requisitos.',
    },
  },
  a11y4: {
    doExample: {
      en: 'Use semantic HTML (<button>, <nav>, <main>, <form>), proper ARIA roles/labels where needed, and validate with aXe, WAVE, and multiple screen readers (NVDA, VoiceOver).',
      es: 'Usar HTML semántico (<button>, <nav>, <main>, <form>), roles/etiquetas ARIA apropiados donde sea necesario, y validar con aXe, WAVE y múltiples lectores de pantalla (NVDA, VoiceOver).',
    },
    dontExample: {
      en: 'Building everything with div and span, using onClick on non-interactive elements, or relying on custom widgets without ARIA — screen readers can\'t interpret the interface.',
      es: 'Construir todo con div y span, usar onClick en elementos no interactivos, o depender de widgets personalizados sin ARIA — los lectores de pantalla no pueden interpretar la interfaz.',
    },
    realProduct: {
      en: 'MDN Web Docs uses flawless semantic HTML: landmarks (header, main, aside), heading hierarchy (h1 to h2 to h3), and ARIA labels — works perfectly with every assistive technology.',
      es: 'MDN Web Docs usa HTML semántico impecable: landmarks (header, main, aside), jerarquía de headings (h1 a h2 a h3), y etiquetas ARIA — funciona perfectamente con cada tecnología de asistencia.',
    },
    keyTakeaway: {
      en: 'Robust code = accessible code. Semantic HTML is 80% of the work. The remaining 20% is proper ARIA and testing with real assistive technologies.',
      es: 'Código robusto = código accesible. HTML semántico es el 80% del trabajo. El 20% restante es ARIA apropiado y testing con tecnologías de asistencia reales.',
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