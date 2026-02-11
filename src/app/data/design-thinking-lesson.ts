import { Topic } from './types';

export const designThinkingLesson: Topic = {
  id: 'design-thinking',
  title: { en: 'Design Thinking', es: 'Design Thinking' },
  description: { en: 'A human-centered approach to innovation: empathize, define, ideate, prototype, test.', es: 'Un enfoque centrado en humanos para la innovación: empatizar, definir, idear, prototipar, testear.' },
  status: 'beginner',
  timeEstimate: '2h 30m',
  reference: { en: 'IDEO Design Thinking, Stanford d.school', es: 'IDEO Design Thinking, Stanford d.school' },
  referenceLink: 'https://www.nngroup.com/articles/design-thinking/',
  content: {
    definition: {
      en: 'Design Thinking is a non-linear, iterative process that teams use to understand users, challenge assumptions, redefine problems, and create innovative solutions to prototype and test. It consists of five phases: Empathize, Define, Ideate, Prototype, and Test.',
      es: 'Design Thinking es un proceso no lineal e iterativo que los equipos usan para entender usuarios, desafiar suposiciones, redefinir problemas y crear soluciones innovadoras para prototipar y testear. Consiste en cinco fases: Empatizar, Definir, Idear, Prototipar y Testear.'
    },
    why: {
      en: 'Design Thinking shifts focus from "building features" to "solving real user problems." It reduces the risk of building the wrong thing by validating assumptions early, encouraging creative problem-solving, and ensuring solutions are grounded in user needs—not internal opinions or trends.',
      es: 'Design Thinking cambia el enfoque de "construir funcionalidades" a "resolver problemas reales de usuarios". Reduce el riesgo de construir lo incorrecto al validar suposiciones temprano, fomentar la resolución creativa de problemas y asegurar que las soluciones estén fundamentadas en necesidades del usuario, no en opiniones internas o tendencias.'
    },
    keyPrinciples: {
      en: [
        'Empathy first: deeply understand user pain points, motivations, and context before jumping to solutions.',
        'Reframe the problem: shift from "Add a feature" to "Help users achieve [goal] faster."',
        'Diverge then converge: generate many ideas (ideation), then narrow down to the most promising.',
        'Bias toward action: prototype early and often. Low-fidelity is fine—just get feedback fast.',
        'Iterate relentlessly: each cycle of testing reveals new insights. Keep refining.',
        'Fail forward: treat failures as learning opportunities. Test to learn, not to validate.',
        'Collaborate cross-functionally: involve designers, developers, PMs, and users in the process.',
        'Focus on jobs-to-be-done: understand what users are trying to accomplish, not just what they say they want.'
      ],
      es: [
        'Empatía primero: entiende profundamente puntos de dolor, motivaciones y contexto del usuario antes de saltar a soluciones.',
        'Reencuadra el problema: cambia de "Agregar una funcionalidad" a "Ayudar a usuarios a lograr [objetivo] más rápido."',
        'Diverge luego converge: genera muchas ideas (ideación), luego reduce a las más prometedoras.',
        'Sesgo hacia la acción: prototipa temprano y seguido. Baja fidelidad está bien, solo obtén retroalimentación rápido.',
        'Itera sin descanso: cada ciclo de pruebas revela nuevos insights. Sigue refinando.',
        'Falla hacia adelante: trata los fracasos como oportunidades de aprendizaje. Testea para aprender, no para validar.',
        'Colabora interfuncionalmente: involucra diseñadores, desarrolladores, PMs y usuarios en el proceso.',
        'Enfócate en trabajos por hacer: entiende qué intentan lograr los usuarios, no solo lo que dicen que quieren.'
      ]
    },
    howToApply: {
      steps: [
        {
          name: { en: '1. Empathize: Conduct User Research', es: '1. Empatizar: Realizar Investigación de Usuario' },
          description: { en: 'Run 5-8 empathy interviews with target users. Ask about their current process, pain points, workarounds, and ideal outcomes. Observe them in their natural environment if possible. Example: "Walk me through the last time you tried to open a bank account on your phone."', es: 'Realiza 5-8 entrevistas de empatía con usuarios objetivo. Pregunta sobre su proceso actual, puntos de dolor, soluciones alternativas y resultados ideales. Obsérvalos en su ambiente natural si es posible. Ejemplo: "Cuéntame sobre la última vez que intentaste abrir una cuenta bancaria en tu teléfono."' }
        },
        {
          name: { en: '2. Define: Synthesize Insights + Write Problem Statement', es: '2. Definir: Sintetizar Insights + Escribir Declaración de Problema' },
          description: { en: 'Group interview notes into themes (affinity diagram). Identify patterns. Create a persona. Write a problem statement: "[User] needs a way to [goal] because [insight]." Example: "New banking app users need a way to verify their identity without visiting a branch because they value speed and convenience."', es: 'Agrupa notas de entrevistas en temas (diagrama de afinidad). Identifica patrones. Crea una persona. Escribe una declaración de problema: "[Usuario] necesita una forma de [objetivo] porque [insight]." Ejemplo: "Los nuevos usuarios de la app bancaria necesitan una forma de verificar su identidad sin visitar una sucursal porque valoran velocidad y conveniencia."' }
        },
        {
          name: { en: '3. Ideate: Generate "How Might We" Statements + Solutions', es: '3. Idear: Generar Declaraciones "Cómo Podríamos" + Soluciones' },
          description: { en: 'Turn the problem into opportunity: "How might we help users verify identity remotely?" Run a brainstorming session. Aim for 20+ ideas. No criticism yet—quantity over quality. Use "Yes, and..." to build on ideas. Then dot-vote to prioritize top 3 ideas.', es: 'Convierte el problema en oportunidad: "¿Cómo podríamos ayudar a usuarios a verificar identidad remotamente?" Ejecuta una sesión de brainstorming. Apunta a 20+ ideas. Sin críticas aún, cantidad sobre calidad. Usa "Sí, y..." para construir sobre ideas. Luego vota con puntos para priorizar las 3 mejores ideas.' }
        },
        {
          name: { en: '4. Prototype: Build Low-Fidelity Testable Artifacts', es: '4. Prototipar: Construir Artefactos Testeables de Baja Fidelidad' },
          description: { en: 'Create a prototype of the top idea(s). This can be paper sketches, Figma wireframes, or a clickable prototype. Keep it low-fidelity—the goal is to test the concept, not polish pixels. Example: 3-screen Figma flow showing selfie ID verification.', es: 'Crea un prototipo de la(s) mejor(es) idea(s). Puede ser bocetos en papel, wireframes de Figma o un prototipo clicable. Mantenlo en baja fidelidad, el objetivo es testear el concepto, no pulir píxeles. Ejemplo: Flujo de 3 pantallas en Figma mostrando verificación de ID con selfie.' }
        },
        {
          name: { en: '5. Test: Validate with Real Users', es: '5. Testear: Validar con Usuarios Reales' },
          description: { en: 'Test the prototype with 5-8 users (can be the same users from empathy interviews). Watch them interact. Ask: "What would you do here?" Observe confusion, hesitation, or errors. Take notes. Identify what to keep, change, or kill. Then iterate: go back to Define or Ideate based on findings.', es: 'Testea el prototipo con 5-8 usuarios (pueden ser los mismos usuarios de entrevistas de empatía). Obsérvalos interactuar. Pregunta: "¿Qué harías aquí?" Observa confusión, dudas o errores. Toma notas. Identifica qué mantener, cambiar o eliminar. Luego itera: regresa a Definir o Idear según hallazgos.' }
        }
      ]
    },
    commonMistakes: {
      en: [
        'Skipping empathy: jumping straight to ideation without understanding the real problem (solution-first thinking).',
        'Asking leading questions in interviews: "Would you like a faster checkout?" instead of "Tell me about your last checkout experience."',
        'Falling in love with the first idea: prototyping only one concept instead of testing multiple directions.',
        'Making prototypes too polished: users focus on colors instead of flow. Keep it rough to focus on concept.',
        'Testing with stakeholders instead of real users: your CEO is not your user (usually).',
        'Not iterating: treating "test" as the final step instead of the beginning of another cycle.'
      ],
      es: [
        'Saltarse empatía: saltar directo a ideación sin entender el problema real (pensamiento solución-primero).',
        'Hacer preguntas capciosas en entrevistas: "¿Te gustaría un checkout más rápido?" en lugar de "Cuéntame sobre tu última experiencia de checkout."',
        'Enamorarse de la primera idea: prototipar solo un concepto en lugar de testear múltiples direcciones.',
        'Hacer prototipos demasiado pulidos: usuarios se enfocan en colores en lugar de flujo. Mantenlo tosco para enfocarse en concepto.',
        'Testear con stakeholders en lugar de usuarios reales: tu CEO no es tu usuario (usualmente).',
        'No iterar: tratar "testear" como el paso final en lugar del inicio de otro ciclo.'
      ]
    },
    deliverables: {
      description: {
        en: 'Artifacts produced during each phase of Design Thinking.',
        es: 'Artefactos producidos durante cada fase de Design Thinking.'
      },
      items: {
        en: [
          'Empathize: Interview transcripts, empathy maps, observation notes, photos/videos of user context',
          'Define: Affinity diagram, user persona, journey map, problem statement, Point-of-View (POV) statement',
          'Ideate: "How Might We" statements, brainstorm board (Miro/FigJam), prioritized idea shortlist',
          'Prototype: Paper sketches, wireframes, low-fi Figma prototype, storyboard, concept video',
          'Test: Usability test plan, session recordings, synthesis report, iteration recommendations'
        ],
        es: [
          'Empatizar: Transcripciones de entrevistas, mapas de empatía, notas de observación, fotos/videos de contexto del usuario',
          'Definir: Diagrama de afinidad, persona de usuario, mapa de viaje, declaración de problema, declaración de Punto de Vista (POV)',
          'Idear: Declaraciones "Cómo Podríamos", tablero de brainstorm (Miro/FigJam), lista corta de ideas priorizadas',
          'Prototipar: Bocetos en papel, wireframes, prototipo Figma baja fidelidad, storyboard, video de concepto',
          'Testear: Plan de pruebas de usabilidad, grabaciones de sesiones, reporte de síntesis, recomendaciones de iteración'
        ]
      }
    },
    practicalTools: {
      design: {
        en: ['Figma (prototyping)', 'FigJam (ideation workshops)', 'Miro (affinity diagrams)', 'Notion (documentation)'],
        es: ['Figma (prototipado)', 'FigJam (talleres de ideación)', 'Miro (diagramas de afinidad)', 'Notion (documentación)']
      },
      research: {
        en: ['Dovetail (synthesis)', 'Zoom (remote interviews)', 'Lookback (session recording)', 'Optimal Workshop (card sorting)'],
        es: ['Dovetail (síntesis)', 'Zoom (entrevistas remotas)', 'Lookback (grabación de sesiones)', 'Optimal Workshop (card sorting)']
      },
      handoff: {
        en: ['Maze (prototype testing)', 'UserTesting.com (remote unmoderated tests)', 'Loom (sharing findings)', 'Airtable (tracking iterations)'],
        es: ['Maze (pruebas de prototipos)', 'UserTesting.com (pruebas remotas no moderadas)', 'Loom (compartir hallazgos)', 'Airtable (seguimiento de iteraciones)']
      }
    },
    aiInPractice: {
      description: {
        en: 'AI can accelerate Design Thinking by generating interview guides, synthesizing research, and suggesting test plans.',
        es: 'La IA puede acelerar Design Thinking generando guías de entrevista, sintetizando investigación y sugiriendo planes de prueba.'
      },
      prompts: [
        {
          tool: 'ChatGPT',
          context: { en: 'Generate empathy interview guide', es: 'Generar guía de entrevista de empatía' },
          prompt: {
            en: 'Create a 10-question empathy interview guide for [mobile banking app onboarding]. Target users: 25-40 year olds opening their first digital-only bank account. Focus on pain points with traditional banks, expectations for speed, and trust concerns. Include 3 behavioral questions, 5 open-ended questions, and 2 observation prompts.',
            es: 'Crea una guía de entrevista de empatía de 10 preguntas para [onboarding de app bancaria móvil]. Usuarios objetivo: personas de 25-40 años abriendo su primera cuenta bancaria solo digital. Enfócate en puntos de dolor con bancos tradicionales, expectativas de velocidad y preocupaciones de confianza. Incluye 3 preguntas conductuales, 5 preguntas abiertas y 2 prompts de observación.'
          }
        },
        {
          tool: 'Claude',
          context: { en: 'Synthesize research into HMW statements', es: 'Sintetizar investigación en declaraciones HMW' },
          prompt: {
            en: 'I conducted 8 user interviews about mobile banking onboarding. Key insights: (1) Users abandon if ID verification takes >5 minutes, (2) They distrust apps that ask for Social Security Number upfront, (3) They expect instant account access like social media signups. Generate 5 "How Might We" statements that turn these insights into design opportunities. Prioritize by impact and feasibility.',
            es: 'Realicé 8 entrevistas de usuario sobre onboarding bancario móvil. Insights clave: (1) Usuarios abandonan si verificación de ID toma >5 minutos, (2) Desconfían de apps que piden Número de Seguridad Social al inicio, (3) Esperan acceso instantáneo a cuenta como registros en redes sociales. Genera 5 declaraciones "Cómo Podríamos" que conviertan estos insights en oportunidades de diseño. Prioriza por impacto y viabilidad.'
          }
        },
        {
          tool: 'ChatGPT',
          context: { en: 'Propose prototype test plan', es: 'Proponer plan de prueba de prototipo' },
          prompt: {
            en: 'Create a usability test plan for a low-fidelity Figma prototype of [mobile banking ID verification flow]. 3 screens: (1) Welcome + explain why ID needed, (2) Photo ID upload, (3) Selfie verification. Test goals: validate understanding of process, measure completion time, identify friction. Suggest 5 tasks, success criteria, and what to observe.',
            es: 'Crea un plan de pruebas de usabilidad para un prototipo Figma de baja fidelidad de [flujo de verificación de ID bancaria móvil]. 3 pantallas: (1) Bienvenida + explicar por qué se necesita ID, (2) Carga de foto de ID, (3) Verificación de selfie. Objetivos de prueba: validar comprensión del proceso, medir tiempo de completación, identificar fricción. Sugiere 5 tareas, criterios de éxito y qué observar.'
          }
        }
      ]
    },
    howToValidate: {
      what: {
        en: 'Validate whether your Design Thinking process led to a solution that users actually adopt and that reduces their pain points.',
        es: 'Valida si tu proceso de Design Thinking llevó a una solución que los usuarios realmente adoptan y que reduce sus puntos de dolor.'
      },
      methods: {
        en: [
          'Before/After metrics: Compare onboarding completion rate before redesign (e.g., 45%) vs after (target: 70%+).',
          'Time-on-task: Measure how long ID verification takes. Goal: reduce from 8 minutes to <3 minutes.',
          'Usability test scores: Use SUS (System Usability Scale) or task success rate (aim for 80%+ success).',
          'Qualitative signals: Users say "This is so much easier" or "I wish my bank did this." No one mentions [old pain point].',
          'Adoption rate: Track how many users complete the new flow vs drop off. Compare to old flow.'
        ],
        es: [
          'Métricas antes/después: Compara tasa de completación de onboarding antes del rediseño (ej. 45%) vs después (objetivo: 70%+).',
          'Tiempo en tarea: Mide cuánto tarda la verificación de ID. Objetivo: reducir de 8 minutos a <3 minutos.',
          'Puntuaciones de pruebas de usabilidad: Usa SUS (System Usability Scale) o tasa de éxito de tareas (apunta a 80%+ de éxito).',
          'Señales cualitativas: Usuarios dicen "Esto es mucho más fácil" o "Ojalá mi banco hiciera esto." Nadie menciona [antiguo punto de dolor].',
          'Tasa de adopción: Rastrea cuántos usuarios completan el nuevo flujo vs abandonan. Compara con flujo antiguo.'
        ]
      },
      tools: {
        en: ['Google Analytics (completion funnels)', 'Hotjar (session recordings)', 'Maze (prototype testing metrics)', 'Mixpanel (user behavior tracking)'],
        es: ['Google Analytics (embudos de completación)', 'Hotjar (grabaciones de sesiones)', 'Maze (métricas de pruebas de prototipo)', 'Mixpanel (seguimiento de comportamiento de usuario)']
      },
      evidenceExample: {
        en: '"After redesigning mobile banking onboarding using Design Thinking (8 empathy interviews → HMW statements → 3 prototype iterations), our completion rate increased from 42% to 78%, and average onboarding time dropped from 8 minutes to 2.5 minutes. Users rated the new flow 8.9/10 (SUS score: 89)."',
        es: '"Después de rediseñar el onboarding bancario móvil usando Design Thinking (8 entrevistas de empatía → declaraciones HMW → 3 iteraciones de prototipo), nuestra tasa de completación aumentó de 42% a 78%, y el tiempo promedio de onboarding bajó de 8 minutos a 2.5 minutos. Los usuarios calificaron el nuevo flujo 8.9/10 (puntaje SUS: 89)."'
      }
    },
    quiz: [
      {
        question: {
          en: 'You\'re in the Empathize phase. A user says: "I want a faster checkout." What should you do?',
          es: 'Estás en la fase Empatizar. Un usuario dice: "Quiero un checkout más rápido." ¿Qué deberías hacer?'
        },
        options: {
          en: [
            'Great! Add "fast checkout" to your solution list.',
            'Ask follow-up: "Tell me about your last checkout experience. Where did it feel slow?"',
            'Show them a faster checkout prototype immediately.',
            'Move to the Ideate phase and brainstorm checkout improvements.'
          ],
          es: [
            '¡Genial! Agrega "checkout rápido" a tu lista de soluciones.',
            'Pregunta de seguimiento: "Cuéntame sobre tu última experiencia de checkout. ¿Dónde se sintió lento?"',
            'Muéstrales un prototipo de checkout más rápido inmediatamente.',
            'Pasa a la fase Idear y haz brainstorming de mejoras de checkout.'
          ]
        },
        correctIndex: 1,
        explanation: {
          en: 'In Empathize, your job is to understand the *why* behind user statements. "Faster" is a solution, not a problem. Ask open-ended questions to uncover the real pain point (e.g., too many form fields, confusing shipping options, etc.).',
          es: 'En Empatizar, tu trabajo es entender el *porqué* detrás de declaraciones de usuarios. "Más rápido" es una solución, no un problema. Haz preguntas abiertas para descubrir el punto de dolor real (ej. demasiados campos de formulario, opciones de envío confusas, etc.).'
        }
      },
      {
        question: {
          en: 'You\'ve created a beautiful high-fidelity prototype with polished UI. What\'s the risk during the Test phase?',
          es: 'Has creado un prototipo hermoso de alta fidelidad con UI pulida. ¿Cuál es el riesgo durante la fase Testear?'
        },
        options: {
          en: [
            'No risk—high-fidelity prototypes get better feedback.',
            'Users focus on colors and fonts instead of testing the core concept/flow.',
            'Developers will expect you to ship exactly this design.',
            'It takes too long to create, delaying testing.'
          ],
          es: [
            'Sin riesgo—prototipos de alta fidelidad obtienen mejor retroalimentación.',
            'Usuarios se enfocan en colores y fuentes en lugar de testear el concepto/flujo central.',
            'Desarrolladores esperarán que entregues exactamente este diseño.',
            'Toma demasiado tiempo crear, retrasando pruebas.'
          ]
        },
        correctIndex: 1,
        explanation: {
          en: 'High-fidelity prototypes can distract users from testing the concept. They\'ll say "I don\'t like this blue" instead of "I\'m confused by this flow." Keep prototypes low-fi in early iterations to focus feedback on usability, not aesthetics.',
          es: 'Los prototipos de alta fidelidad pueden distraer a usuarios de testear el concepto. Dirán "No me gusta este azul" en lugar de "Estoy confundido por este flujo." Mantén prototipos de baja fidelidad en iteraciones tempranas para enfocar retroalimentación en usabilidad, no estética.'
        }
      },
      {
        question: {
          en: 'Your usability tests reveal a major flaw in your prototype. What\'s the Design Thinking mindset?',
          es: 'Tus pruebas de usabilidad revelan una falla importante en tu prototipo. ¿Cuál es la mentalidad de Design Thinking?'
        },
        options: {
          en: [
            'Failure—go back to the drawing board and restart.',
            'Success—you learned something valuable. Iterate and test again.',
            'Push forward anyway—users will adapt once it\'s built.',
            'Blame the users—they didn\'t understand the design.'
          ],
          es: [
            'Fracaso—regresa a la mesa de dibujo y reinicia.',
            'Éxito—aprendiste algo valioso. Itera y testea de nuevo.',
            'Sigue adelante de todos modos—usuarios se adaptarán una vez construido.',
            'Culpa a los usuarios—no entendieron el diseño.'
          ]
        },
        correctIndex: 1,
        explanation: {
          en: 'Design Thinking treats testing as learning, not validation. Finding flaws early is *good*—it saves you from building the wrong thing. Use the insights to iterate: go back to Define or Ideate, refine the prototype, and test again.',
          es: 'Design Thinking trata las pruebas como aprendizaje, no validación. Encontrar fallas temprano es *bueno*—te ahorra construir lo incorrecto. Usa los insights para iterar: regresa a Definir o Idear, refina el prototipo y testea de nuevo.'
        }
      }
    ],
    realExample: {
      title: {
        en: 'Mobile Banking App: Improving Onboarding for Digital-First Users',
        es: 'App Bancaria Móvil: Mejorando Onboarding para Usuarios Digital-First'
      },
      description: {
        en: 'Problem: A digital bank saw 58% of users abandon onboarding before completing ID verification. Process: (1) Empathize: 8 interviews revealed users felt "creepy" uploading SSN upfront and were confused by multi-step verification. (2) Define: Created persona "Tech-Savvy Taylor" (28, expects instant gratification). Problem statement: "New users need a way to verify identity quickly without feeling surveilled." (3) Ideate: Generated 12 HMW statements, prioritized "How might we make ID verification feel like social media signup?" (4) Prototype: 3 concepts tested—winning design: selfie + AI ID scan (no SSN upfront). (5) Test: 6 users, 83% task success. Launched iteratively. Results: Onboarding completion increased to 81%, time reduced from 7 min to 2.5 min.',
        es: 'Problema: Un banco digital vio que 58% de usuarios abandonaban onboarding antes de completar verificación de ID. Proceso: (1) Empatizar: 8 entrevistas revelaron que usuarios se sentían "raros" subiendo SSN al inicio y estaban confundidos por verificación multi-paso. (2) Definir: Creó persona "Taylor Tech-Savvy" (28, espera gratificación instantánea). Declaración de problema: "Nuevos usuarios necesitan una forma de verificar identidad rápidamente sin sentirse vigilados." (3) Idear: Generó 12 declaraciones HMW, priorizó "¿Cómo podríamos hacer que verificación de ID se sienta como registro en redes sociales?" (4) Prototipar: 3 conceptos testeados—diseño ganador: selfie + escaneo AI de ID (sin SSN al inicio). (5) Testear: 6 usuarios, 83% éxito de tarea. Lanzado iterativamente. Resultados: Completación de onboarding aumentó a 81%, tiempo reducido de 7 min a 2.5 min.'
      },
      company: 'NeoBank (Case Study)'
    }
  }
};