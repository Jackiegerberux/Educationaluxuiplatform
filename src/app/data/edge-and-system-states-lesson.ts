import { Topic } from './types';

export const edgeAndSystemStatesLesson: Topic = {
  id: 'edge-and-system-states',
  title: { en: 'Edge & System States', es: 'Estados Edge y de Sistema' },
  description: {
    en: 'Design beyond the happy path. Master empty, loading, error, success, and edge states to build resilient, trust-building interfaces that handle every real-world scenario.',
    es: 'Diseña más allá del camino feliz. Domina estados vacíos, de carga, error, éxito y edge cases para construir interfaces resilientes que manejen cada escenario real.'
  },
  status: 'advanced',
  timeEstimate: '2h',
  reference: { en: 'Designing for the Unexpected — Sara Soueidan & Scott O\'Hara', es: 'Diseñando para lo Inesperado — Sara Soueidan & Scott O\'Hara' },
  referenceLink: 'https://www.smashingmagazine.com/2022/05/designing-better-error-messages-ux/',
  content: {
    // ─── 1. OVERVIEW ────────────────────────────────────────────
    definition: {
      en: 'Edge states and system states are the non-happy-path scenarios that users encounter when interacting with a product. Edge states describe unusual or boundary conditions — first-time use, empty datasets, maximum character limits, expired sessions, or 10,000 items in a list. System states describe the product\'s current operational mode — loading data, processing a request, recovering from an error, or confirming a successful action.\n\nMost designers focus exclusively on the "happy path" — the ideal scenario where data exists, the network is fast, the user does everything right, and nothing breaks. But in production, the happy path represents maybe 40% of real user experience. The remaining 60% is empty dashboards, timeout errors, partial failures, slow connections, and confusing disabled buttons.\n\nDesigning only for the happy path is like building a car without seatbelts, airbags, or brake lights. The car drives beautifully on a sunny day — but the moment it rains, your users crash. Edge and system state design is the practice of anticipating every possible scenario a user might face and providing clear, actionable, and trustworthy responses for each one.',
      es: 'Los estados edge y de sistema son los escenarios fuera del camino feliz que los usuarios encuentran al interactuar con un producto. Los estados edge describen condiciones inusuales o de frontera — primer uso, datasets vacíos, límites máximos de caracteres, sesiones expiradas, o 10,000 ítems en una lista. Los estados de sistema describen el modo operacional actual del producto — cargando datos, procesando una solicitud, recuperándose de un error, o confirmando una acción exitosa.\n\nLa mayoría de diseñadores se enfocan exclusivamente en el "camino feliz" — el escenario ideal donde los datos existen, la red es rápida, el usuario hace todo correctamente, y nada se rompe. Pero en producción, el camino feliz representa quizás el 40% de la experiencia real del usuario. El 60% restante son dashboards vacíos, errores de timeout, fallas parciales, conexiones lentas, y botones deshabilitados confusos.\n\nDiseñar solo para el camino feliz es como construir un auto sin cinturones, airbags, o luces de freno. El auto conduce hermosamente en un día soleado — pero en el momento que llueve, tus usuarios chocan. El diseño de estados edge y de sistema es la práctica de anticipar cada escenario posible que un usuario pueda enfrentar y proveer respuestas claras, accionables y confiables para cada uno.'
    },

    // ─── 2. WHY IT MATTERS ──────────────────────────────────────
    why: {
      en: 'Unhandled states are the #1 source of user frustration in production applications. When a user uploads a file and sees a blank screen with no feedback, they don\'t know if the upload is processing, failed silently, or completed. They refresh the page — possibly losing their work. They contact support. They lose trust.\n\nDefining states upfront reduces support tickets by 30-50% because users can self-serve through clear error messages instead of submitting "something went wrong" tickets. It reduces developer ambiguity — when a designer hands off specs that only show the happy path, engineers have to invent error states on the fly, often defaulting to generic "Error 500" screens or silent failures.\n\nState design also improves perceived performance. A skeleton screen that appears in 200ms makes a 3-second load feel fast. A spinner with no context makes the same 3-second load feel like an eternity. Trust compounds: every time your product handles a failure gracefully, the user\'s confidence in the system increases.\n\nFor teams, explicit state documentation creates alignment between design, engineering, and QA. When every state is documented, QA knows exactly what to test, engineers know exactly what to build, and designers can verify that their intent was implemented correctly.',
      es: 'Los estados no manejados son la fuente #1 de frustración del usuario en aplicaciones de producción. Cuando un usuario sube un archivo y ve una pantalla en blanco sin feedback, no sabe si la subida se está procesando, falló silenciosamente, o se completó. Refresca la página — posiblemente perdiendo su trabajo. Contacta soporte. Pierde confianza.\n\nDefinir estados de antemano reduce tickets de soporte en 30-50% porque los usuarios pueden auto-atenderse a través de mensajes de error claros en lugar de enviar tickets de "algo salió mal". Reduce ambigüedad para desarrolladores — cuando un diseñador entrega especificaciones que solo muestran el camino feliz, los ingenieros tienen que inventar estados de error sobre la marcha, frecuentemente cayendo en pantallas genéricas de "Error 500" o fallas silenciosas.\n\nEl diseño de estados también mejora el rendimiento percibido. Un skeleton screen que aparece en 200ms hace que una carga de 3 segundos se sienta rápida. Un spinner sin contexto hace que la misma carga se sienta como una eternidad. La confianza se acumula: cada vez que tu producto maneja una falla elegantemente, la confianza del usuario en el sistema aumenta.\n\nPara equipos, la documentación explícita de estados crea alineación entre diseño, ingeniería y QA. Cuando cada estado está documentado, QA sabe exactamente qué probar, los ingenieros saben exactamente qué construir, y los diseñadores pueden verificar que su intención se implementó correctamente.'
    },

    // ─── 3. KEY PRINCIPLES ──────────────────────────────────────
    keyPrinciples: {
      en: [
        'Always design empty states: An empty state is not a blank screen — it is a guided moment. Show what will appear here, why it\'s empty, and what action the user should take. "No projects yet. Create your first project to get started" is infinitely better than a blank white area.',
        'Always define loading behavior: Choose the right loading pattern for the context. Skeleton screens for content-heavy layouts (they reduce perceived load time by ~35%). Spinners for short operations (< 2s). Progress bars for uploads and multi-step processes. Inline loading indicators for partial updates. Never leave the user staring at a frozen screen.',
        'Always define error messaging: Every error must answer three questions: What happened? Why did it happen? What can the user do about it? "Unable to save changes. Your session expired after 30 minutes of inactivity. Please log in again and re-submit." is actionable. "Something went wrong" is useless.',
        'Anticipate edge cases before development: Map every breakpoint in the user flow — What if they have 0 items? 1 item? 10,000 items? What if their name is 200 characters? What if they paste a 50MB image? What if they click submit twice? What if they lose network mid-upload? Document these before a single line of code is written.',
        'Provide actionable feedback at every step: The system must never go silent. Every user action should trigger visible feedback — a button press animates, a save shows a toast, an error highlights the field in red with an inline message. If the user doesn\'t know the system received their input, they will repeat the action.',
        'Never leave the system silent: Disabled buttons must explain why they are disabled. Timeouts must warn before they expire. Background processes must show progress. Permission denials must explain what access is needed and how to request it. Silence creates anxiety; communication creates trust.'
      ],
      es: [
        'Siempre diseña estados vacíos: Un estado vacío no es una pantalla en blanco — es un momento guiado. Muestra qué aparecerá aquí, por qué está vacío, y qué acción debe tomar el usuario. "Sin proyectos aún. Crea tu primer proyecto para comenzar" es infinitamente mejor que un área blanca vacía.',
        'Siempre define el comportamiento de carga: Elige el patrón de carga correcto para el contexto. Skeleton screens para layouts con mucho contenido (reducen el tiempo de carga percibido en ~35%). Spinners para operaciones cortas (< 2s). Barras de progreso para subidas y procesos de múltiples pasos. Indicadores de carga inline para actualizaciones parciales. Nunca dejes al usuario mirando una pantalla congelada.',
        'Siempre define mensajes de error: Cada error debe responder tres preguntas: ¿Qué pasó? ¿Por qué pasó? ¿Qué puede hacer el usuario al respecto? "No se pudieron guardar los cambios. Tu sesión expiró después de 30 minutos de inactividad. Por favor inicia sesión de nuevo y re-envía." es accionable. "Algo salió mal" es inútil.',
        'Anticipa edge cases antes del desarrollo: Mapea cada breakpoint en el flujo de usuario — ¿Qué si tienen 0 ítems? ¿1 ítem? ¿10,000 ítems? ¿Qué si su nombre tiene 200 caracteres? ¿Qué si pegan una imagen de 50MB? ¿Qué si hacen clic en enviar dos veces? ¿Qué si pierden red a medio upload? Documenta estos antes de escribir una sola línea de código.',
        'Proporciona feedback accionable en cada paso: El sistema nunca debe quedarse en silencio. Cada acción del usuario debe disparar feedback visible — un botón presionado se anima, un guardado muestra un toast, un error resalta el campo en rojo con un mensaje inline. Si el usuario no sabe que el sistema recibió su input, repetirá la acción.',
        'Nunca dejes el sistema en silencio: Los botones deshabilitados deben explicar por qué están deshabilitados. Los timeouts deben advertir antes de expirar. Los procesos en background deben mostrar progreso. Las denegaciones de permisos deben explicar qué acceso se necesita y cómo solicitarlo. El silencio crea ansiedad; la comunicación crea confianza.'
      ]
    },

    // ─── 4. HOW TO APPLY ────────────────────────────────────────
    howToApply: {
      steps: [
        {
          name: { en: 'Step 1: Map the main flow', es: 'Paso 1: Mapea el flujo principal' },
          description: {
            en: 'Start with the happy path — the ideal scenario from entry to completion. Document every screen, every transition, and every data dependency. This becomes your baseline. A checkout flow might be: Cart → Shipping → Payment → Confirmation. Each screen is a node where things can go wrong.',
            es: 'Empieza con el camino feliz — el escenario ideal desde entrada hasta completación. Documenta cada pantalla, cada transición, y cada dependencia de datos. Esto se convierte en tu base. Un flujo de checkout podría ser: Carrito → Envío → Pago → Confirmación. Cada pantalla es un nodo donde las cosas pueden fallar.'
          }
        },
        {
          name: { en: 'Step 2: Identify breakpoints', es: 'Paso 2: Identifica breakpoints' },
          description: {
            en: 'For each node in the flow, ask: "What can go wrong here?" Breakpoints include: no data available, data takes too long to load, user provides invalid input, server returns an error, user loses connectivity, user\'s session expires, user hits a permission wall, user performs an unexpected action (double click, back button, paste instead of type).',
            es: 'Para cada nodo en el flujo, pregunta: "¿Qué puede salir mal aquí?" Los breakpoints incluyen: no hay datos disponibles, los datos tardan mucho en cargar, el usuario proporciona input inválido, el servidor retorna un error, el usuario pierde conectividad, la sesión del usuario expira, el usuario encuentra un muro de permisos, el usuario realiza una acción inesperada (doble clic, botón atrás, pegar en vez de escribir).'
          }
        },
        {
          name: { en: 'Step 3: List possible failure points', es: 'Paso 3: Lista puntos posibles de falla' },
          description: {
            en: 'Create a state matrix for each screen — a grid mapping every component against every possible state. Column headers: Default, Empty, Loading, Error, Success, Disabled, Partial. Row headers: Each UI component on the screen. Fill every cell with the expected behavior. If a cell is blank, you have an unhandled state.',
            es: 'Crea una matriz de estados para cada pantalla — una grilla mapeando cada componente contra cada estado posible. Encabezados de columna: Default, Vacío, Cargando, Error, Éxito, Deshabilitado, Parcial. Encabezados de fila: Cada componente UI en la pantalla. Llena cada celda con el comportamiento esperado. Si una celda está en blanco, tienes un estado no manejado.'
          }
        },
        {
          name: { en: 'Step 4: Define system behavior for each state', es: 'Paso 4: Define el comportamiento del sistema para cada estado' },
          description: {
            en: 'For each identified state, define: (1) What the user sees — exact copy, illustration, layout. (2) What actions are available — retry button, contact support link, go back. (3) What the system does automatically — retry after 5s, cache last known state, queue for background sync. Document this as annotated Figma frames with state variants.',
            es: 'Para cada estado identificado, define: (1) Qué ve el usuario — copy exacto, ilustración, layout. (2) Qué acciones están disponibles — botón de reintentar, link a soporte, volver atrás. (3) Qué hace el sistema automáticamente — reintentar después de 5s, cachear último estado conocido, encolar para sync en background. Documenta esto como frames anotados en Figma con variantes de estado.'
          }
        },
        {
          name: { en: 'Step 5: Align with engineering', es: 'Paso 5: Alinea con ingeniería' },
          description: {
            en: 'Walk through the state matrix with your developer before implementation starts. Key questions: "What HTTP status codes will the API return?" "How long before a request times out?" "What happens if the connection drops mid-request?" "Can we implement optimistic UI updates?" "What data can we cache locally?" This 30-minute conversation prevents 3 weeks of back-and-forth during development.',
            es: 'Recorre la matriz de estados con tu desarrollador antes de que comience la implementación. Preguntas clave: "¿Qué códigos de estado HTTP retornará la API?" "¿Cuánto tiempo antes de un timeout?" "¿Qué pasa si la conexión se cae a mitad de solicitud?" "¿Podemos implementar actualizaciones optimistas?" "¿Qué datos podemos cachear localmente?" Esta conversación de 30 minutos previene 3 semanas de ida y vuelta durante desarrollo.'
          }
        },
        {
          name: { en: 'Step 6: Test in real scenarios', es: 'Paso 6: Prueba en escenarios reales' },
          description: {
            en: 'Simulate real-world conditions during QA: throttle the network to 3G, disconnect WiFi mid-action, submit forms with special characters (é, ñ, 你好, emoji 🎉), paste 10,000 characters into a text field, open the same session in two tabs, let the session expire and try to submit. If any scenario produces an unhandled state, your design is incomplete.',
            es: 'Simula condiciones del mundo real durante QA: limita la red a 3G, desconecta WiFi a mitad de acción, envía formularios con caracteres especiales (é, ñ, 你好, emoji 🎉), pega 10,000 caracteres en un campo de texto, abre la misma sesión en dos tabs, deja que la sesión expire e intenta enviar. Si algún escenario produce un estado no manejado, tu diseño está incompleto.'
          }
        }
      ]
    },

    // ─── 5. COMMON MISTAKES ────────────────────────────────────
    commonMistakes: {
      en: [
        'No empty state design: Leaving a blank screen when there is no data instead of guiding the user to take their first action. Empty states are the single most common oversight in production apps.',
        'Generic error messages: Using "Something went wrong" or "Error 500" instead of explaining what happened, why, and what the user can do next. Every error must be human-readable and actionable.',
        'No loading feedback: Clicking a button and seeing nothing happen for 2-5 seconds. Users will click again, potentially triggering duplicate submissions. Every action needs immediate visual feedback within 100ms.',
        'Disabled buttons without explanation: Graying out a submit button without telling the user WHY it\'s disabled. Add a tooltip or inline text: "Complete all required fields to continue."',
        'No edge case documentation in handoff: Handing off Figma files that only show the happy path. Engineers then improvise error states, creating inconsistent user experiences across features.',
        'Overusing modals for errors: Showing a blocking modal for every validation error instead of using inline field-level messages. Modals should be reserved for critical, destructive, or irreversible actions — not for "email is required."'
      ],
      es: [
        'Sin diseño de estado vacío: Dejar una pantalla en blanco cuando no hay datos en lugar de guiar al usuario a tomar su primera acción. Los estados vacíos son el descuido más común en apps de producción.',
        'Mensajes de error genéricos: Usar "Algo salió mal" o "Error 500" en lugar de explicar qué pasó, por qué, y qué puede hacer el usuario. Cada error debe ser legible por humanos y accionable.',
        'Sin feedback de carga: Hacer clic en un botón y no ver nada pasar por 2-5 segundos. Los usuarios harán clic de nuevo, potencialmente disparando envíos duplicados. Cada acción necesita feedback visual inmediato en 100ms.',
        'Botones deshabilitados sin explicación: Poner gris un botón de enviar sin decirle al usuario POR QUÉ está deshabilitado. Agrega un tooltip o texto inline: "Completa todos los campos requeridos para continuar."',
        'Sin documentación de edge cases en handoff: Entregar archivos Figma que solo muestran el camino feliz. Los ingenieros entonces improvisan estados de error, creando experiencias inconsistentes entre features.',
        'Sobreusar modales para errores: Mostrar un modal bloqueante para cada error de validación en lugar de usar mensajes inline a nivel de campo. Los modales deben reservarse para acciones críticas, destructivas o irreversibles — no para "el email es requerido."'
      ]
    },

    // ─── 6. DELIVERABLES ───────────────────────────────────────
    deliverables: {
      description: {
        en: 'A complete state design package that ensures no state goes unhandled from design through development and QA.',
        es: 'Un paquete de diseño de estados completo que asegura que ningún estado quede sin manejar desde diseño hasta desarrollo y QA.'
      },
      items: {
        en: [
          'State matrix: A table mapping every screen component against every possible state (empty, loading, error, success, disabled, partial). Every cell must have a defined behavior — no blanks allowed.',
          'Error message guidelines: A copy document with tone of voice rules, error message templates (what happened + why + what to do), and examples for validation errors, server errors, network errors, and permission errors.',
          'System feedback documentation: Specifications for loading patterns (skeleton vs spinner vs progress bar), success confirmations (toast vs inline vs redirect), and disabled state explanations (tooltip text, inline messages).',
          'Edge case table: A spreadsheet listing every identified edge case, its probability, its severity if unhandled, and the designed solution. Columns: Edge Case | Screen | Probability | Impact | Solution | Status.',
          'Annotated Figma specs: Figma frames showing every state variant for each component, with annotations explaining behavior, transitions, and auto-retry logic. Use Figma component variants to organize states systematically.'
        ],
        es: [
          'Matriz de estados: Una tabla mapeando cada componente de pantalla contra cada estado posible (vacío, cargando, error, éxito, deshabilitado, parcial). Cada celda debe tener un comportamiento definido — no se permiten blancos.',
          'Guías de mensajes de error: Un documento de copy con reglas de tono de voz, plantillas de mensajes de error (qué pasó + por qué + qué hacer), y ejemplos para errores de validación, servidor, red y permisos.',
          'Documentación de feedback del sistema: Especificaciones para patrones de carga (skeleton vs spinner vs barra de progreso), confirmaciones de éxito (toast vs inline vs redirect), y explicaciones de estados deshabilitados (texto tooltip, mensajes inline).',
          'Tabla de edge cases: Una hoja de cálculo listando cada edge case identificado, su probabilidad, su severidad si no se maneja, y la solución diseñada. Columnas: Edge Case | Pantalla | Probabilidad | Impacto | Solución | Estado.',
          'Especificaciones anotadas en Figma: Frames Figma mostrando cada variante de estado para cada componente, con anotaciones explicando comportamiento, transiciones y lógica de auto-reintento. Usa variantes de componente Figma para organizar estados sistemáticamente.'
        ]
      }
    },

    // ─── 7. PRACTICAL TOOLS ─────────────────────────────────────
    practicalTools: {
      design: {
        en: [
          'Figma — Component variants for state management (Default/Empty/Loading/Error/Success/Disabled)',
          'Figma Dev Mode — Annotate specs with state behavior notes for engineers',
          'Storybook — Interactive component library showing every state variant in isolation',
          'Whimsical/FigJam — Flow diagramming to map breakpoints visually'
        ],
        es: [
          'Figma — Variantes de componente para gestión de estados (Default/Vacío/Cargando/Error/Éxito/Deshabilitado)',
          'Figma Dev Mode — Anotar specs con notas de comportamiento de estado para ingenieros',
          'Storybook — Biblioteca de componentes interactiva mostrando cada variante de estado en aislamiento',
          'Whimsical/FigJam — Diagramas de flujo para mapear breakpoints visualmente'
        ]
      },
      testing: {
        en: [
          'Chrome DevTools — Network throttling (3G, offline) to test loading and error states',
          'QA State Checklist — Systematic verification of every state in the matrix',
          'BrowserStack — Cross-browser/device state testing',
          'Postman — API response simulation for error codes (400, 403, 404, 500, timeout)'
        ],
        es: [
          'Chrome DevTools — Throttling de red (3G, offline) para probar estados de carga y error',
          'QA State Checklist — Verificación sistemática de cada estado en la matriz',
          'BrowserStack — Pruebas de estado cross-browser/dispositivo',
          'Postman — Simulación de respuestas API para códigos de error (400, 403, 404, 500, timeout)'
        ]
      },
      documentation: {
        en: [
          'Notion/Confluence — State matrix documentation and team alignment',
          'Zeroheight — Design system documentation with state examples',
          'Google Sheets — Edge case tracking table with status and ownership'
        ],
        es: [
          'Notion/Confluence — Documentación de matriz de estados y alineación de equipo',
          'Zeroheight — Documentación de sistema de diseño con ejemplos de estados',
          'Google Sheets — Tabla de tracking de edge cases con estado y ownership'
        ]
      }
    },

    // ─── 8. AI IN PRACTICE ──────────────────────────────────────
    aiInPractice: {
      description: {
        en: 'Use AI to identify edge cases you might miss, transform generic error messages into user-friendly copy, and generate empty state content aligned with your brand\'s tone of voice.',
        es: 'Usa IA para identificar edge cases que podrías pasar por alto, transformar mensajes de error genéricos en copy amigable, y generar contenido de estados vacíos alineado con el tono de voz de tu marca.'
      },
      prompts: [
        {
          tool: 'ChatGPT / Claude',
          context: { en: 'Edge case discovery', es: 'Descubrimiento de edge cases' },
          prompt: {
            en: 'I\'m designing a [feature name] that lets users [main action]. The flow is: [describe flow]. What are the top 15 edge cases I should design for? For each, tell me: the scenario, how likely it is (High/Medium/Low), how bad the impact is if unhandled, and suggest a UI solution.',
            es: 'Estoy diseñando un [nombre del feature] que permite a los usuarios [acción principal]. El flujo es: [describe flujo]. ¿Cuáles son los 15 edge cases principales para los que debería diseñar? Para cada uno, dime: el escenario, qué tan probable es (Alto/Medio/Bajo), qué tan malo es el impacto si no se maneja, y sugiere una solución UI.'
          }
        },
        {
          tool: 'ChatGPT / Claude',
          context: { en: 'Error message improvement', es: 'Mejora de mensajes de error' },
          prompt: {
            en: 'Here are 5 error messages from our app: [paste messages]. Rewrite each one following this format: (1) What happened — in plain language, (2) Why it happened — be specific, (3) What the user can do — give a clear next action. Our tone of voice is [professional/friendly/casual]. Keep each message under 25 words.',
            es: 'Aquí hay 5 mensajes de error de nuestra app: [pega mensajes]. Reescribe cada uno siguiendo este formato: (1) Qué pasó — en lenguaje simple, (2) Por qué pasó — sé específico, (3) Qué puede hacer el usuario — da una acción clara siguiente. Nuestro tono de voz es [profesional/amigable/casual]. Mantén cada mensaje bajo 25 palabras.'
          }
        },
        {
          tool: 'ChatGPT / Claude',
          context: { en: 'Empty state copywriting', es: 'Copywriting de estados vacíos' },
          prompt: {
            en: 'Generate empty state copy for these 5 screens: [list screens]. For each, provide: a headline (max 8 words), body text (max 20 words), and a CTA button label (max 4 words). Our product is [describe product]. Tone: [helpful/playful/formal]. The empty state should motivate the user to take their first action, not apologize for missing data.',
            es: 'Genera copy de estado vacío para estas 5 pantallas: [lista pantallas]. Para cada una, proporciona: un titular (máx 8 palabras), texto de cuerpo (máx 20 palabras), y una etiqueta de botón CTA (máx 4 palabras). Nuestro producto es [describe producto]. Tono: [útil/divertido/formal]. El estado vacío debe motivar al usuario a tomar su primera acción, no disculparse por datos faltantes.'
          }
        }
      ]
    },

    // ─── 9. HOW TO VALIDATE ─────────────────────────────────────
    howToValidate: {
      what: {
        en: 'Validate that every possible state has been identified, designed, documented, and implemented correctly — no unhandled scenarios reach production.',
        es: 'Valida que cada estado posible ha sido identificado, diseñado, documentado e implementado correctamente — ningún escenario no manejado llega a producción.'
      },
      methods: {
        en: [
          'State matrix audit: Walk through every cell in the matrix. If any cell says "N/A" or is blank, challenge whether that state is truly impossible.',
          'Error message review: Read every error message aloud. If it doesn\'t answer "what happened + why + what to do," it\'s incomplete.',
          'Network simulation testing: Use Chrome DevTools to throttle to Slow 3G and Offline. Navigate every flow. Every transition must show loading feedback.',
          'QA edge case sweep: QA tests every documented edge case. Any state that produces a blank screen, frozen UI, or generic error message is a failed test.',
          'User testing with failures: Deliberately trigger errors during usability tests. Can users recover without help? Do they understand what went wrong? Do they know what to do next?'
        ],
        es: [
          'Auditoría de matriz de estados: Recorre cada celda en la matriz. Si alguna celda dice "N/A" o está en blanco, cuestiona si ese estado es verdaderamente imposible.',
          'Revisión de mensajes de error: Lee cada mensaje de error en voz alta. Si no responde "qué pasó + por qué + qué hacer," está incompleto.',
          'Pruebas de simulación de red: Usa Chrome DevTools para limitar a Slow 3G y Offline. Navega cada flujo. Cada transición debe mostrar feedback de carga.',
          'Barrido de edge cases por QA: QA prueba cada edge case documentado. Cualquier estado que produce pantalla en blanco, UI congelada o mensaje genérico de error es una prueba fallida.',
          'Pruebas de usuario con fallas: Dispara errores deliberadamente durante pruebas de usabilidad. ¿Pueden los usuarios recuperarse sin ayuda? ¿Entienden qué salió mal? ¿Saben qué hacer después?'
        ]
      },
      tools: {
        en: ['Chrome DevTools Network Throttling', 'Storybook State Stories', 'Figma Component Variants Audit', 'QA State Checklist Template', 'Postman API Mock Responses'],
        es: ['Chrome DevTools Network Throttling', 'Storybook State Stories', 'Auditoría de Variantes Figma', 'Template de Checklist de Estados QA', 'Respuestas Mock API en Postman']
      },
      evidenceExample: {
        en: 'In a fintech app audit, we discovered 23 unhandled states across 8 screens. The worst: a payment confirmation page that showed a blank screen when the payment gateway timed out. Users thought they were double-charged. After implementing a state matrix with defined timeout behavior (retry automatically once, then show "Payment status unknown — check your bank app" message), support tickets for payment issues dropped 67% in one sprint.',
        es: 'En una auditoría de app fintech, descubrimos 23 estados no manejados en 8 pantallas. El peor: una página de confirmación de pago que mostraba pantalla en blanco cuando la pasarela de pago hacía timeout. Los usuarios pensaban que se les cobró doble. Después de implementar una matriz de estados con comportamiento de timeout definido (reintentar automáticamente una vez, luego mostrar mensaje "Estado del pago desconocido — revisa tu app bancaria"), los tickets de soporte por pagos bajaron 67% en un sprint.'
      }
    },

    // ─── 10. QUIZ ───────────────────────────────────────────────
    quiz: [
      {
        question: {
          en: 'A user uploads a CSV file with 500 rows. The server processes it and finds that 480 rows are valid but 20 have formatting errors. What is the best UX approach?',
          es: 'Un usuario sube un archivo CSV con 500 filas. El servidor lo procesa y encuentra que 480 filas son válidas pero 20 tienen errores de formato. ¿Cuál es el mejor enfoque UX?'
        },
        options: {
          en: [
            'Reject the entire file and show "Upload failed — fix all errors and try again"',
            'Process the 480 valid rows, show a summary with a downloadable error report for the 20 failed rows',
            'Process all 500 rows and silently skip the invalid ones',
            'Show a modal with all 20 errors listed and block until the user acknowledges each one'
          ],
          es: [
            'Rechazar el archivo completo y mostrar "Carga fallida — corrige todos los errores e intenta de nuevo"',
            'Procesar las 480 filas válidas, mostrar un resumen con un reporte de errores descargable para las 20 filas fallidas',
            'Procesar las 500 filas y silenciosamente saltar las inválidas',
            'Mostrar un modal con los 20 errores listados y bloquear hasta que el usuario reconozca cada uno'
          ]
        },
        correctIndex: 1,
        explanation: {
          en: 'Partial success handling is critical. Process what you can, clearly communicate what failed, and give the user a path to fix only the broken rows. Rejecting everything is punitive. Silent skipping erodes trust. A 20-item error modal is overwhelming.',
          es: 'El manejo de éxito parcial es crítico. Procesa lo que puedas, comunica claramente qué falló, y dale al usuario un camino para corregir solo las filas rotas. Rechazar todo es punitivo. Saltar silenciosamente erosiona confianza. Un modal con 20 errores es abrumador.'
        }
      },
      {
        question: {
          en: 'A dashboard shows real-time analytics data. The API request to fetch data takes 4 seconds. Which loading pattern is most appropriate?',
          es: 'Un dashboard muestra datos analíticos en tiempo real. La solicitud API para obtener datos tarda 4 segundos. ¿Qué patrón de carga es más apropiado?'
        },
        options: {
          en: [
            'A full-screen spinner with "Loading..." text',
            'Skeleton screens mimicking the layout of charts and cards, with shimmer animation',
            'No loading indicator — just show the data when it arrives',
            'A progress bar at the top of the page showing 0-100%'
          ],
          es: [
            'Un spinner de pantalla completa con texto "Cargando..."',
            'Skeleton screens imitando el layout de gráficos y tarjetas, con animación shimmer',
            'Sin indicador de carga — solo mostrar los datos cuando lleguen',
            'Una barra de progreso en la parte superior mostrando 0-100%'
          ]
        },
        correctIndex: 1,
        explanation: {
          en: 'Skeleton screens are ideal for content-heavy layouts because they set spatial expectations and reduce perceived loading time by ~35%. Full-screen spinners provide no spatial context. No indicator creates anxiety. Progress bars require knowing total progress, which a single API call cannot provide.',
          es: 'Los skeleton screens son ideales para layouts con mucho contenido porque establecen expectativas espaciales y reducen el tiempo de carga percibido en ~35%. Los spinners de pantalla completa no dan contexto espacial. Sin indicador crea ansiedad. Las barras de progreso requieren conocer el progreso total, lo cual una sola llamada API no puede proveer.'
        }
      },
      {
        question: {
          en: 'A "Delete Account" button is disabled because the user has an active subscription. How should this be communicated?',
          es: 'Un botón de "Eliminar Cuenta" está deshabilitado porque el usuario tiene una suscripción activa. ¿Cómo se debe comunicar esto?'
        },
        options: {
          en: [
            'Just gray out the button — the user will figure it out',
            'Hide the button entirely so users don\'t get confused',
            'Show the disabled button with a tooltip: "Cancel your subscription first to delete your account"',
            'Show the button as active but display an error modal when clicked'
          ],
          es: [
            'Solo poner gris el botón — el usuario lo descubrirá',
            'Ocultar el botón completamente para que los usuarios no se confundan',
            'Mostrar el botón deshabilitado con un tooltip: "Cancela tu suscripción primero para eliminar tu cuenta"',
            'Mostrar el botón como activo pero mostrar un modal de error al hacer clic'
          ]
        },
        correctIndex: 2,
        explanation: {
          en: 'Disabled states must always explain WHY they are disabled. A tooltip or inline message tells the user exactly what they need to do to unlock the action. Hiding the button removes discoverability. A silent gray button creates confusion. An active button that errors is deceptive.',
          es: 'Los estados deshabilitados siempre deben explicar POR QUÉ están deshabilitados. Un tooltip o mensaje inline le dice al usuario exactamente qué necesita hacer para desbloquear la acción. Ocultar el botón elimina descubribilidad. Un botón gris silencioso crea confusión. Un botón activo que da error es engañoso.'
        }
      }
    ],

    // ─── 11. REAL EXAMPLE ───────────────────────────────────────
    realExample: {
      title: {
        en: 'Claro Admin — Bulk Assign Data Packs',
        es: 'Claro Admin — Asignación Masiva de Paquetes de Datos'
      },
      description: {
        en: 'Claro\'s internal admin tool lets operators bulk-assign data packs to thousands of phone lines via CSV upload. The original design only showed the happy path: Upload File → Processing → "All assigned successfully." In production, this flow had 5 critical unhandled states that generated 45 support tickets per week and caused operators to re-upload files unnecessarily, increasing processing time by 60%.',
        es: 'La herramienta admin interna de Claro permite a los operadores asignar masivamente paquetes de datos a miles de líneas telefónicas mediante carga de CSV. El diseño original solo mostraba el camino feliz: Subir Archivo → Procesando → "Todos asignados exitosamente." En producción, este flujo tenía 5 estados críticos no manejados que generaban 45 tickets de soporte por semana y causaban que los operadores re-subieran archivos innecesariamente, aumentando el tiempo de procesamiento en 60%.'
      },
      company: 'Claro — Plataforma Admin Interna'
    }
  }
};