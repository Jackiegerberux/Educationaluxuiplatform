import { Topic } from './types';

export const designSprintLesson: Topic = {
  id: 'design-sprint',
  title: { en: 'Design Sprint', es: 'Design Sprint' },
  description: { en: 'A 5-day process for solving big problems and testing new ideas through prototyping and user testing.', es: 'Un proceso de 5 días para resolver grandes problemas y testear nuevas ideas mediante prototipado y pruebas de usuario.' },
  status: 'intermediate',
  timeEstimate: '2h 15m',
  reference: { en: 'Google Ventures Sprint Book (Jake Knapp)', es: 'Libro Sprint de Google Ventures (Jake Knapp)' },
  referenceLink: 'https://www.thesprintbook.com/',
  content: {
    definition: {
      en: 'The Design Sprint is a time-constrained, five-phase process created by Jake Knapp at Google Ventures. It compresses months of work into one week by moving quickly from problem to tested prototype. The five days are: Monday (Map), Tuesday (Sketch), Wednesday (Decide), Thursday (Prototype), Friday (Test). A "Sprint 2.0" or compressed version can be done in 2-4 days.',
      es: 'El Design Sprint es un proceso de cinco fases con tiempo limitado creado por Jake Knapp en Google Ventures. Comprime meses de trabajo en una semana moviéndose rápidamente de problema a prototipo testeado. Los cinco días son: Lunes (Mapear), Martes (Bocetear), Miércoles (Decidir), Jueves (Prototipar), Viernes (Testear). Una versión "Sprint 2.0" o comprimida puede hacerse en 2-4 días.'
    },
    why: {
      en: 'Design Sprints reduce risk by validating ideas before investing in full development. They force focus (one week, one problem), align cross-functional teams, and produce a tested prototype—not just slides or debates. They are especially useful for big bets: new features, product pivots, or entering new markets.',
      es: 'Los Design Sprints reducen riesgo al validar ideas antes de invertir en desarrollo completo. Fuerzan enfoque (una semana, un problema), alinean equipos interfuncionales y producen un prototipo testeado, no solo slides o debates. Son especialmente útiles para grandes apuestas: nuevas funcionalidades, pivots de producto o entrar a nuevos mercados.'
    },
    keyPrinciples: {
      en: [
        'Time-boxed: Each day has a strict schedule (9am-5pm). No running over—constraints force decisions.',
        'Together, alone: The team works in the same room but often individually (to avoid groupthink).',
        'Prototype is disposable: The goal is to learn, not to build production-ready code.',
        'Test with real users: 5 user tests on Friday reveal patterns and validate (or invalidate) assumptions.',
        'One Decider: A single person (usually CEO, PM, or lead designer) makes final calls to avoid endless debate.',
        'No distractions: Participants commit full-time. Phones away, no checking email during sessions.',
        'Start at the end: Define the long-term goal and sprint questions upfront to stay focused.',
        'Experts contribute: Invite domain experts (customer support, engineers, sales) for Day 1 interviews.'
      ],
      es: [
        'Tiempo limitado: Cada día tiene un horario estricto (9am-5pm). No extenderse—restricciones fuerzan decisiones.',
        'Juntos, solos: El equipo trabaja en la misma sala pero a menudo individualmente (para evitar pensamiento de grupo).',
        'Prototipo es desechable: El objetivo es aprender, no construir código listo para producción.',
        'Testear con usuarios reales: 5 pruebas de usuario el viernes revelan patrones y validan (o invalidan) suposiciones.',
        'Un Decisor: Una sola persona (usualmente CEO, PM o diseñador líder) toma decisiones finales para evitar debate infinito.',
        'Sin distracciones: Participantes se comprometen tiempo completo. Teléfonos fuera, no revisar email durante sesiones.',
        'Comenzar por el final: Define el objetivo a largo plazo y preguntas del sprint por adelantado para mantenerse enfocado.',
        'Los expertos contribuyen: Invita expertos de dominio (soporte al cliente, ingenieros, ventas) para entrevistas del Día 1.'
      ]
    },
    howToApply: {
      steps: [
        {
          name: { en: 'Monday: Map the Problem', es: 'Lunes: Mapear el Problema' },
          description: { en: 'Start with the long-term goal: "In 2 years, what does success look like?" Then list sprint questions: "What could prevent us from reaching that goal?" Interview experts (customer support, sales, engineering) to gather context. Create a map of the user journey—from awareness to checkout (in e-commerce example). Pick a target: which part of the map will we focus on?', es: 'Comienza con el objetivo a largo plazo: "En 2 años, ¿cómo se ve el éxito?" Luego lista preguntas del sprint: "¿Qué podría impedirnos alcanzar ese objetivo?" Entrevista expertos (soporte al cliente, ventas, ingeniería) para recopilar contexto. Crea un mapa del viaje del usuario, desde awareness hasta checkout (en ejemplo e-commerce). Elige un objetivo: ¿en qué parte del mapa nos enfocaremos?' }
        },
        {
          name: { en: 'Tuesday: Sketch Solutions', es: 'Martes: Bocetear Soluciones' },
          description: { en: 'Review existing solutions ("Lightning Demos"): What have competitors or adjacent industries done? Each team member individually sketches a solution (4-panel storyboard) in silence. Use "Crazy 8s" warm-up: fold paper into 8 sections, sketch 8 variations in 8 minutes. No critique yet—just generate ideas. Example: 8 different ways to simplify checkout forms.', es: 'Revisa soluciones existentes ("Lightning Demos"): ¿Qué han hecho competidores o industrias adyacentes? Cada miembro del equipo boceta individualmente una solución (storyboard de 4 paneles) en silencio. Usa calentamiento "Crazy 8s": dobla papel en 8 secciones, boceta 8 variaciones en 8 minutos. Sin críticas aún, solo genera ideas. Ejemplo: 8 formas diferentes de simplificar formularios de checkout.' }
        },
        {
          name: { en: 'Wednesday: Decide on One Solution', es: 'Miércoles: Decidir sobre Una Solución' },
          description: { en: 'Present sketches anonymously. Use "Heat Map" voting: everyone puts dot stickers on interesting ideas. The Decider gets "super votes" (3 large dots) to choose the winning concept. Create a storyboard: 10-15 frames showing the user flow step-by-step. This becomes the blueprint for the prototype. Example: Storyboard shows guest checkout → auto-fill address → one-click payment → confirmation.', es: 'Presenta bocetos anónimamente. Usa votación "Heat Map": todos ponen stickers de puntos en ideas interesantes. El Decisor obtiene "super votos" (3 puntos grandes) para elegir el concepto ganador. Crea un storyboard: 10-15 cuadros mostrando el flujo de usuario paso a paso. Esto se convierte en el plano para el prototipo. Ejemplo: Storyboard muestra guest checkout → auto-llenado de dirección → pago de un clic → confirmación.' }
        },
        {
          name: { en: 'Thursday: Build a Realistic Prototype', es: 'Jueves: Construir un Prototipo Realista' },
          description: { en: 'Build a high-fidelity, clickable prototype in Figma (or equivalent). It must be realistic enough to fool users—use real product images, copy, and branding. Assign roles: Maker (builds screens), Stitcher (connects flows), Writer (writes copy), Asset Collector (gathers images/icons). You do not need working code—just a convincing facade. Example: 5-screen Figma prototype of new checkout flow.', es: 'Construye un prototipo clicable de alta fidelidad en Figma (o equivalente). Debe ser lo suficientemente realista para engañar a usuarios—usa imágenes de producto reales, copy y branding. Asigna roles: Maker (construye pantallas), Stitcher (conecta flujos), Writer (escribe copy), Asset Collector (reúne imágenes/iconos). No necesitas código funcional, solo una fachada convincente. Ejemplo: prototipo Figma de 5 pantallas del nuevo flujo de checkout.' }
        },
        {
          name: { en: 'Friday: Test with 5 Users', es: 'Viernes: Testear con 5 Usuarios' },
          description: { en: 'Recruit 5 users (recruited earlier in the week). Run 1-hour moderated usability tests. One facilitator, one note-taker. The rest of the team watches from another room (via video call or one-way mirror). Ask users to complete tasks: "Imagine you want to buy this product. Show me how you would check out." Observe where they hesitate, succeed, or fail. After 5 tests, patterns emerge. Debrief: What did we learn? What worked? What failed? Decide next steps.', es: 'Recluta 5 usuarios (reclutados antes en la semana). Ejecuta pruebas de usabilidad moderadas de 1 hora. Un facilitador, un tomador de notas. El resto del equipo observa desde otra sala (vía videollamada o espejo unidireccional). Pide a usuarios que completen tareas: "Imagina que quieres comprar este producto. Muéstrame cómo harías checkout." Observa dónde dudan, tienen éxito o fallan. Después de 5 pruebas, emergen patrones. Debrief: ¿Qué aprendimos? ¿Qué funcionó? ¿Qué falló? Decide próximos pasos.' }
        }
      ]
    },
    commonMistakes: {
      en: [
        'Skipping user tests on Friday: "We already know this will work." No—test with real users or you are just guessing.',
        'Building a low-fidelity prototype: Users will say "I cannot tell what this is." It must look real to get honest feedback.',
        'Not having a Decider: The team debates endlessly on Wednesday. Assign one person with veto power upfront.',
        'Inviting too many people: 7 is the ideal team size. More than 10 slows decision-making.',
        'Multitasking during the sprint: Checking email, taking calls. The sprint requires full attention or it fails.',
        'Choosing too broad a problem: "Redesign the entire app" is too big. Pick one critical user flow.',
        'Treating the prototype as final: The sprint prototype is a learning tool, not a spec. Do not hand it to engineers and say "build this."'
      ],
      es: [
        'Saltarse pruebas de usuario el viernes: "Ya sabemos que esto funcionará." No—testea con usuarios reales o solo estás adivinando.',
        'Construir un prototipo de baja fidelidad: Usuarios dirán "No puedo decir qué es esto." Debe verse real para obtener retroalimentación honesta.',
        'No tener un Decisor: El equipo debate infinitamente el miércoles. Asigna una persona con poder de veto por adelantado.',
        'Invitar demasiadas personas: 7 es el tamaño ideal del equipo. Más de 10 ralentiza la toma de decisiones.',
        'Multitarea durante el sprint: Revisar email, tomar llamadas. El sprint requiere atención completa o falla.',
        'Elegir un problema demasiado amplio: "Rediseñar toda la app" es demasiado grande. Elige un flujo de usuario crítico.',
        'Tratar el prototipo como final: El prototipo del sprint es una herramienta de aprendizaje, no una especificación. No lo entregues a ingenieros y digas "construyan esto."'
      ]
    },
    deliverables: {
      description: {
        en: 'Tangible outputs produced during each day of the Design Sprint.',
        es: 'Resultados tangibles producidos durante cada día del Design Sprint.'
      },
      items: {
        en: [
          'Monday: Sprint brief (goal, questions, experts list), user journey map, target area identified',
          'Tuesday: Lightning demo notes, individual solution sketches (4-panel storyboards), Crazy 8s warm-ups',
          'Wednesday: Heat map voting results, winning concept, detailed storyboard (10-15 frames)',
          'Thursday: High-fidelity Figma prototype (5-10 screens), clickable user flow, realistic copy and assets',
          'Friday: Usability test script, session recordings (5 users), synthesis report with key findings, recommendation deck'
        ],
        es: [
          'Lunes: Brief del sprint (objetivo, preguntas, lista de expertos), mapa de viaje del usuario, área objetivo identificada',
          'Martes: Notas de lightning demos, bocetos de solución individual (storyboards de 4 paneles), calentamientos Crazy 8s',
          'Miércoles: Resultados de votación heat map, concepto ganador, storyboard detallado (10-15 cuadros)',
          'Jueves: Prototipo Figma de alta fidelidad (5-10 pantallas), flujo de usuario clicable, copy y assets realistas',
          'Viernes: Script de prueba de usabilidad, grabaciones de sesiones (5 usuarios), reporte de síntesis con hallazgos clave, deck de recomendaciones'
        ]
      }
    },
    practicalTools: {
      design: {
        en: ['Figma (prototyping)', 'FigJam (mapping, voting)', 'Miro (virtual whiteboard)', 'Sketch (alternative to Figma)'],
        es: ['Figma (prototipado)', 'FigJam (mapeo, votación)', 'Miro (pizarra virtual)', 'Sketch (alternativa a Figma)']
      },
      research: {
        en: ['Lookback (test recording)', 'UserTesting.com (remote tests)', 'Zoom (video interviews)', 'Google Forms (screener surveys)'],
        es: ['Lookback (grabación de pruebas)', 'UserTesting.com (pruebas remotas)', 'Zoom (entrevistas en video)', 'Google Forms (encuestas de filtro)']
      },
      handoff: {
        en: ['Google Calendar (sprint schedule)', 'Notion (sprint brief documentation)', 'Loom (sharing findings)', 'Miro (agenda checklist)'],
        es: ['Google Calendar (horario del sprint)', 'Notion (documentación del brief del sprint)', 'Loom (compartir hallazgos)', 'Miro (checklist de agenda)']
      }
    },
    aiInPractice: {
      description: {
        en: 'AI can help you prepare sprint agendas, draft storyboards, and synthesize test insights faster.',
        es: 'La IA puede ayudarte a preparar agendas del sprint, borradores de storyboards y sintetizar insights de pruebas más rápido.'
      },
      prompts: [
        {
          tool: 'ChatGPT',
          context: { en: 'Generate sprint agenda', es: 'Generar agenda del sprint' },
          prompt: {
            en: 'Create a detailed 5-day Design Sprint agenda for [e-commerce checkout redesign]. Team size: 7 people. Include session names, durations, facilitator notes, and expected outputs for each day (Monday: Map, Tuesday: Sketch, Wednesday: Decide, Thursday: Prototype, Friday: Test). Format as a table with columns: Day, Time, Session, Duration, Owner, Output.',
            es: 'Crea una agenda detallada de Design Sprint de 5 días para [rediseño de checkout e-commerce]. Tamaño del equipo: 7 personas. Incluye nombres de sesiones, duraciones, notas del facilitador y resultados esperados para cada día (Lunes: Mapear, Martes: Bocetear, Miércoles: Decidir, Jueves: Prototipar, Viernes: Testear). Formatea como tabla con columnas: Día, Hora, Sesión, Duración, Responsable, Resultado.'
          }
        },
        {
          tool: 'Claude',
          context: { en: 'Draft storyboard from concept', es: 'Borrador de storyboard desde concepto' },
          prompt: {
            en: 'I have a winning sprint concept: "Guest checkout with auto-fill address and Apple Pay integration." Generate a 12-frame storyboard that shows the user journey step-by-step. Each frame should describe: (1) Screen title, (2) What the user sees, (3) What action they take. Start from product page and end at order confirmation.',
            es: 'Tengo un concepto ganador del sprint: "Guest checkout con auto-llenado de dirección e integración de Apple Pay." Genera un storyboard de 12 cuadros que muestre el viaje del usuario paso a paso. Cada cuadro debe describir: (1) Título de pantalla, (2) Qué ve el usuario, (3) Qué acción toma. Comienza desde página de producto y termina en confirmación de orden.'
          }
        },
        {
          tool: 'ChatGPT',
          context: { en: 'Generate usability test script + synthesize insights', es: 'Generar script de prueba de usabilidad + sintetizar insights' },
          prompt: {
            en: 'Create a usability test script for testing [checkout redesign prototype]. Include: (1) Welcome + consent, (2) Background questions (3 questions about online shopping habits), (3) Task: "Buy this product using the new checkout", (4) Follow-up questions (What was confusing? What did you like?). Then, I will provide 5 user test transcripts. Synthesize them into 3 key findings: what worked, what failed, and what to iterate.',
            es: 'Crea un script de prueba de usabilidad para testear [prototipo de rediseño de checkout]. Incluye: (1) Bienvenida + consentimiento, (2) Preguntas de contexto (3 preguntas sobre hábitos de compra online), (3) Tarea: "Compra este producto usando el nuevo checkout", (4) Preguntas de seguimiento (¿Qué fue confuso? ¿Qué te gustó?). Luego, proporcionaré 5 transcripciones de pruebas de usuario. Sintetízalas en 3 hallazgos clave: qué funcionó, qué falló y qué iterar.'
          }
        }
      ]
    },
    howToValidate: {
      what: {
        en: 'Validate whether the sprint answered your sprint questions and whether the prototype concept is worth building.',
        es: 'Valida si el sprint respondió tus preguntas del sprint y si el concepto del prototipo vale la pena construir.'
      },
      methods: {
        en: [
          'User test success rate: Did 4 out of 5 users complete the task without help? If yes, strong signal to proceed.',
          'Sprint questions answered: Review Monday questions. Can you now confidently say "yes, we should build this" or "no, pivot"?',
          'Qualitative feedback: Did users say "I wish [current product] had this" or "This is way easier than [competitor]"?',
          'Business alignment: Does the winning concept support the long-term goal defined on Monday?',
          'Time-to-insight: You compressed months of debate into 5 days. That is the real validation—speed.'
        ],
        es: [
          'Tasa de éxito de pruebas de usuario: ¿4 de 5 usuarios completaron la tarea sin ayuda? Si sí, señal fuerte para proceder.',
          'Preguntas del sprint respondidas: Revisa preguntas del lunes. ¿Ahora puedes decir con confianza "sí, deberíamos construir esto" o "no, pivotar"?',
          'Retroalimentación cualitativa: ¿Usuarios dijeron "Ojalá [producto actual] tuviera esto" o "Esto es mucho más fácil que [competidor]"?',
          'Alineación de negocio: ¿El concepto ganador apoya el objetivo a largo plazo definido el lunes?',
          'Tiempo hasta insight: Comprimiste meses de debate en 5 días. Esa es la validación real—velocidad.'
        ]
      },
      tools: {
        en: ['Lookback (session recordings)', 'Miro (debrief synthesis board)', 'Google Sheets (tracking success metrics)', 'Notion (sprint retrospective)'],
        es: ['Lookback (grabaciones de sesiones)', 'Miro (tablero de síntesis de debrief)', 'Google Sheets (seguimiento de métricas de éxito)', 'Notion (retrospectiva del sprint)']
      },
      evidenceExample: {
        en: '"We ran a 5-day Design Sprint to redesign e-commerce checkout. On Monday, our sprint question was: Can we reduce cart abandonment by simplifying payment? By Friday, 5/5 users completed guest checkout in under 2 minutes (vs. 5+ minutes baseline). Users said: I do not have to create an account? Amazing. We decided to build the Apple Pay integration in the next quarter. Sprint ROI: avoided 3 months of internal debate."',
        es: '"Ejecutamos un Design Sprint de 5 días para rediseñar checkout e-commerce. El lunes, nuestra pregunta del sprint fue: ¿Podemos reducir abandono de carrito simplificando el pago? Para el viernes, 5/5 usuarios completaron guest checkout en menos de 2 minutos (vs. 5+ minutos baseline). Usuarios dijeron: ¿No tengo que crear cuenta? Increíble. Decidimos construir la integración de Apple Pay en el próximo trimestre. ROI del sprint: evitamos 3 meses de debate interno."'
      }
    },
    quiz: [
      {
        question: {
          en: 'It is Wednesday afternoon. Your team cannot agree on which sketch to prototype. What should happen?',
          es: 'Es miércoles por la tarde. Tu equipo no puede ponerse de acuerdo sobre qué boceto prototipar. ¿Qué debería pasar?'
        },
        options: {
          en: [
            'Keep debating until everyone agrees (even if it takes until Thursday).',
            'The Decider uses their super votes to make the final call. Move on.',
            'Prototype all the sketches so users can pick the winner on Friday.',
            'Cancel the sprint and reschedule when alignment is clearer.'
          ],
          es: [
            'Sigue debatiendo hasta que todos estén de acuerdo (incluso si toma hasta el jueves).',
            'El Decisor usa sus super votos para tomar la decisión final. Sigue adelante.',
            'Prototipa todos los bocetos para que usuarios puedan elegir el ganador el viernes.',
            'Cancela el sprint y reagenda cuando la alineación sea más clara.'
          ]
        },
        correctIndex: 1,
        explanation: {
          en: 'The Design Sprint assigns a Decider specifically to avoid endless debate. They have the final say. If you prototype multiple concepts, you dilute testing time and confuse users. Trust the Decider and move forward.',
          es: 'El Design Sprint asigna un Decisor específicamente para evitar debate infinito. Tienen la última palabra. Si prototipas múltiples conceptos, diluyes tiempo de prueba y confundes usuarios. Confía en el Decisor y sigue adelante.'
        }
      },
      {
        question: {
          en: 'You are building the prototype on Thursday. The designer says: "This button needs the perfect shade of blue." What do you do?',
          es: 'Estás construyendo el prototipo el jueves. El diseñador dice: "Este botón necesita el tono perfecto de azul." ¿Qué haces?'
        },
        options: {
          en: [
            'Spend 2 hours perfecting the blue. Details matter.',
            'Use the brand blue and move on. The goal is realistic, not pixel-perfect.',
            'Skip the button entirely—users will not notice.',
            'Ask the Decider to choose the blue.'
          ],
          es: [
            'Pasa 2 horas perfeccionando el azul. Los detalles importan.',
            'Usa el azul de la marca y sigue adelante. El objetivo es realista, no perfecto al píxel.',
            'Omite el botón por completo—usuarios no lo notarán.',
            'Pide al Decisor que elija el azul.'
          ]
        },
        correctIndex: 1,
        explanation: {
          en: 'Thursday is about speed. The prototype must look real enough to fool users, but pixel-perfection wastes time. Use existing brand colors and focus on completing the flow. You are testing the concept, not the final design.',
          es: 'El jueves se trata de velocidad. El prototipo debe verse lo suficientemente real para engañar usuarios, pero la perfección de píxeles desperdicia tiempo. Usa colores de marca existentes y enfócate en completar el flujo. Estás testeando el concepto, no el diseño final.'
        }
      },
      {
        question: {
          en: 'Friday: 3 out of 5 users failed to complete checkout. One succeeded. One got confused but eventually finished. What is your conclusion?',
          es: 'Viernes: 3 de 5 usuarios fallaron en completar checkout. Uno tuvo éxito. Uno se confundió pero eventualmente terminó. ¿Cuál es tu conclusión?'
        },
        options: {
          en: [
            'Success! 1 user completed it, so the concept works.',
            'The concept failed. Do not build this. Iterate or pivot.',
            'It is 50/50. Build it and see what happens in production.',
            'Recruit 5 more users to get a bigger sample size.'
          ],
          es: [
            '¡Éxito! 1 usuario lo completó, así que el concepto funciona.',
            'El concepto falló. No construyas esto. Itera o pivota.',
            'Es 50/50. Constrúyelo y ve qué pasa en producción.',
            'Recluta 5 usuarios más para obtener una muestra más grande.'
          ]
        },
        correctIndex: 1,
        explanation: {
          en: 'If 3/5 users fail, there is a fundamental flaw in the design. Do not ship it. Use the sprint learnings to iterate on the concept or try a different approach. The sprint saved you from building the wrong thing.',
          es: 'Si 3/5 usuarios fallan, hay una falla fundamental en el diseño. No lo lances. Usa los aprendizajes del sprint para iterar en el concepto o probar un enfoque diferente. El sprint te salvó de construir lo incorrecto.'
        }
      }
    ],
    realExample: {
      title: {
        en: 'E-commerce Checkout Redesign: Guest Checkout + Apple Pay',
        es: 'Rediseño de Checkout E-commerce: Guest Checkout + Apple Pay'
      },
      description: {
        en: 'Problem: An online furniture retailer saw 68% cart abandonment at checkout. Hypothesis: users do not want to create an account. Sprint goal: "Reduce checkout friction for first-time buyers." Monday: Mapped user journey from product page → cart → checkout → confirmation. Identified bottleneck: account creation wall. Interviewed customer support—#1 complaint: "Why do I need an account just to buy a chair?" Tuesday: Lightning demos from Amazon, Shopify, Stripe. Sketched 8 solutions. Wednesday: Voted on "Guest checkout + Apple Pay" concept. Storyboarded 10-screen flow. Thursday: Built Figma prototype with real product photos, copy, Apple Pay button. Friday: Tested with 5 users. 5/5 completed checkout in <2 min (vs. 5 min baseline). Users: "Finally! No password nonsense." Result: Leadership greenlit Apple Pay integration. Launched 6 weeks later. Cart abandonment dropped to 42%.',
        es: 'Problema: Un retailer de muebles online vio 68% de abandono de carrito en checkout. Hipótesis: usuarios no quieren crear cuenta. Objetivo del sprint: "Reducir fricción de checkout para compradores primerizos." Lunes: Mapeó viaje de usuario desde página de producto → carrito → checkout → confirmación. Identificó cuello de botella: muro de creación de cuenta. Entrevistó soporte al cliente—queja #1: "¿Por qué necesito una cuenta solo para comprar una silla?" Martes: Lightning demos de Amazon, Shopify, Stripe. Bocetó 8 soluciones. Miércoles: Votó por concepto "Guest checkout + Apple Pay". Storyboard de flujo de 10 pantallas. Jueves: Construyó prototipo Figma con fotos reales de producto, copy, botón de Apple Pay. Viernes: Testeó con 5 usuarios. 5/5 completaron checkout en <2 min (vs. 5 min baseline). Usuarios: "¡Por fin! Sin tonterías de contraseña." Resultado: Liderazgo dio luz verde a integración de Apple Pay. Lanzado 6 semanas después. Abandono de carrito bajó a 42%.'
      },
      company: 'FurnitureHub (Case Study)'
    }
  }
};
