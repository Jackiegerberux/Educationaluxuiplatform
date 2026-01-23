import type { Topic } from './content';

export const prototypingLessons: Topic[] = [
  {
    id: 'prototyping-methods',
    title: { en: 'Prototyping Methods', es: 'Métodos de Prototipado' },
    description: { 
      en: 'Creating interactive prototypes to test and validate design concepts.',
      es: 'Crear prototipos interactivos para probar y validar conceptos de diseño.'
    },
    status: 'intermediate',
    timeEstimate: '1h 15min',
    reference: { en: 'Prototyping 101 - NN/g', es: 'Prototipado 101 - NN/g' },
    referenceLink: 'https://www.nngroup.com/articles/prototyping-tools/',
    content: {
      definition: {
        en: 'Prototyping is the process of creating an early, testable version of a product to validate ideas, test functionality, and gather feedback before full development. Prototypes range from paper sketches to high-fidelity interactive mockups.',
        es: 'El prototipado es el proceso de crear una versión temprana y testeable de un producto para validar ideas, probar funcionalidad y recopilar retroalimentación antes del desarrollo completo. Los prototipos van desde bocetos en papel hasta mockups interactivos de alta fidelidad.'
      },
      why: {
        en: 'Prototypes catch usability issues early when they\'re cheap to fix. They enable rapid iteration, validate assumptions with real users, and align stakeholders on the vision before expensive development begins.',
        es: 'Los prototipos detectan problemas de usabilidad temprano cuando son baratos de corregir. Permiten iteración rápida, validan suposiciones con usuarios reales y alinean a stakeholders en la visión antes de que comience el desarrollo costoso.'
      },
      keyPrinciples: {
        en: [
          'Fidelity levels: Low (paper, sketches), Medium (wireframe with interactions), High (pixel-perfect with animations)',
          'Choose the right fidelity: Low-fi for early concepts, high-fi for final validation',
          'Interactive hotspots: Clickable areas that simulate navigation and interactions',
          'User flows: Connect screens to demonstrate full user journeys',
          'Realistic content: Use real data instead of Lorem ipsum when testing',
          'Iterate quickly: Prototype → Test → Learn → Refine → Repeat'
        ],
        es: [
          'Niveles de fidelidad: Baja (papel, bocetos), Media (wireframe con interacciones), Alta (pixel-perfect con animaciones)',
          'Elegir la fidelidad correcta: Baja fidelidad para conceptos tempranos, alta fidelidad para validación final',
          'Hotspots interactivos: Áreas clicables que simulan navegación e interacciones',
          'Flujos de usuario: Conectar pantallas para demostrar viajes de usuario completos',
          'Contenido realista: Usar datos reales en lugar de Lorem ipsum al probar',
          'Iterar rápidamente: Prototipar → Probar → Aprender → Refinar → Repetir'
        ]
      },
      commonMistakes: {
        en: [
          'Over-polishing low-fi prototypes (wastes time on throwaway work)',
          'Prototyping too late (after decisions are already locked in)',
          'Building everything: Prototype only the risky or novel parts',
          'No user testing: Prototypes are useless if you don\'t test them with users',
          'Treating prototype as final design: It\'s a learning tool, not the end product'
        ],
        es: [
          'Sobre-pulir prototipos de baja fidelidad (desperdicia tiempo en trabajo desechable)',
          'Prototipar demasiado tarde (después de que las decisiones ya están fijadas)',
          'Construir todo: Prototipa solo las partes riesgosas o novedosas',
          'Sin pruebas de usuario: Los prototipos son inútiles si no los pruebas con usuarios',
          'Tratar prototipo como diseño final: Es una herramienta de aprendizaje, no el producto final'
        ]
      },
      howToApply: {
        steps: [
          {
            name: { en: 'Define What to Prototype', es: 'Definir Qué Prototipar' },
            description: { 
              en: 'Don\'t prototype everything. Focus on: novel features, complex user flows, risky assumptions, or areas where stakeholders need alignment.',
              es: 'No prototipes todo. Enfócate en: características novedosas, flujos de usuario complejos, suposiciones riesgosas o áreas donde stakeholders necesitan alineación.'
            }
          },
          {
            name: { en: 'Choose Fidelity Level', es: 'Elegir Nivel de Fidelidad' },
            description: { 
              en: 'Early stage (exploring concepts) → Low-fi (paper, simple wireframes). Mid-stage (testing flows) → Med-fi (interactive wireframes). Late stage (final validation) → High-fi (polished mockups).',
              es: 'Etapa temprana (explorando conceptos) → Baja fidelidad (papel, wireframes simples). Etapa media (probando flujos) → Media fidelidad (wireframes interactivos). Etapa tardía (validación final) → Alta fidelidad (mockups pulidos).'
            }
          },
          {
            name: { en: 'Build the Prototype', es: 'Construir el Prototipo' },
            description: { 
              en: 'Use tools like Figma (high-fi), Balsamiq (low-fi), or even paper. Add interactions: clicks, hovers, page transitions. Focus on key user flows.',
              es: 'Usa herramientas como Figma (alta fidelidad), Balsamiq (baja fidelidad) o incluso papel. Agrega interacciones: clics, hovers, transiciones de página. Enfócate en flujos de usuario clave.'
            }
          },
          {
            name: { en: 'Test with Users', es: 'Probar con Usuarios' },
            description: { 
              en: 'Give users tasks: "Sign up for an account" or "Find product X." Observe where they struggle. Ask them to think aloud.',
              es: 'Da tareas a los usuarios: "Regístrate para una cuenta" o "Encuentra el producto X." Observa dónde tienen dificultades. Pídeles que piensen en voz alta.'
            }
          },
          {
            name: { en: 'Iterate Based on Findings', es: 'Iterar Basado en Hallazgos' },
            description: { 
              en: 'Fix pain points discovered during testing. Run another round of testing. Repeat until users can complete tasks successfully.',
              es: 'Corrige puntos de dolor descubiertos durante las pruebas. Ejecuta otra ronda de pruebas. Repite hasta que los usuarios puedan completar tareas exitosamente.'
            }
          }
        ]
      },
      deliverables: {
        description: { en: 'Prototyping outputs.', es: 'Resultados de prototipado.' },
        items: {
          en: [
            'Interactive prototype: Clickable mockup demonstrating key user flows',
            'Prototype link: Shareable URL for stakeholders and testers',
            'Flow documentation: Diagrams showing how screens connect',
            'Testing notes: Observations from user testing sessions',
            'Iteration log: Changes made between prototype versions'
          ],
          es: [
            'Prototipo interactivo: Mockup clicable demostrando flujos de usuario clave',
            'Enlace de prototipo: URL compartible para stakeholders y testers',
            'Documentación de flujo: Diagramas mostrando cómo se conectan las pantallas',
            'Notas de prueba: Observaciones de sesiones de prueba de usuario',
            'Registro de iteración: Cambios realizados entre versiones de prototipo'
          ]
        }
      },
      practicalTools: {
        design: { 
          en: ['Figma (high-fi)', 'Adobe XD', 'Sketch + InVision', 'Framer'], 
          es: ['Figma (alta fidelidad)', 'Adobe XD', 'Sketch + InVision', 'Framer'] 
        },
        research: { 
          en: ['Maze (remote testing)', 'UserTesting', 'Lookback'], 
          es: ['Maze (pruebas remotas)', 'UserTesting', 'Lookback'] 
        },
        handoff: { 
          en: ['Loom (demo videos)', 'Figma prototypes', 'Zeplin'], 
          es: ['Loom (videos de demostración)', 'Prototipos Figma', 'Zeplin'] 
        }
      },
      aiInPractice: {
        description: { 
          en: 'Use AI to generate prototype content and test scenarios.',
          es: 'Usa IA para generar contenido de prototipo y escenarios de prueba.'
        },
        prompts: [
          {
            tool: 'ChatGPT',
            context: { en: 'Generating realistic content', es: 'Generando contenido realista' },
            prompt: { 
              en: 'Generate 5 realistic user profiles for a [product type] prototype, including name, age, occupation, and a brief background.',
              es: 'Genera 5 perfiles de usuario realistas para un prototipo de [tipo de producto], incluyendo nombre, edad, ocupación y un breve trasfondo.'
            }
          },
          {
            tool: 'Claude',
            context: { en: 'Creating test scenarios', es: 'Creando escenarios de prueba' },
            prompt: { 
              en: 'Create 3 user testing scenarios for a [feature description] prototype. Each scenario should include a goal, context, and task.',
              es: 'Crea 3 escenarios de prueba de usuario para un prototipo de [descripción de característica]. Cada escenario debe incluir un objetivo, contexto y tarea.'
            }
          }
        ]
      },
      howToValidate: {
        what: { 
          en: 'Validate that your prototype effectively communicates the design concept and reveals usability issues.',
          es: 'Validar que tu prototipo comunica efectivamente el concepto de diseño y revela problemas de usabilidad.'
        },
        methods: { 
          en: [
            'Task completion rate: Can users complete key tasks? Aim for 80%+ success rate',
            'Time on task: Are users getting stuck? Long task times indicate confusion',
            'Error rate: How many mistakes do users make? Where do they misclick?',
            'Think-aloud feedback: What do users say while using the prototype?'
          ],
          es: [
            'Tasa de finalización de tareas: ¿Pueden los usuarios completar tareas clave? Apunta a 80%+ de tasa de éxito',
            'Tiempo en tarea: ¿Los usuarios se están atascando? Tiempos de tarea largos indican confusión',
            'Tasa de error: ¿Cuántos errores cometen los usuarios? ¿Dónde hacen clic equivocado?',
            'Retroalimentación de pensar en voz alta: ¿Qué dicen los usuarios mientras usan el prototipo?'
          ]
        },
        tools: { 
          en: ['Maze (analytics on prototype)', 'Hotjar (heatmaps)', 'UserTesting (moderated tests)'],
          es: ['Maze (analytics sobre prototipo)', 'Hotjar (heatmaps)', 'UserTesting (pruebas moderadas)']
        },
        evidenceExample: { 
          en: 'You prototype a new onboarding flow. Testing reveals 7/10 users skip a critical step. You redesign to make it more prominent, and success rate jumps to 9/10.',
          es: 'Prototipas un nuevo flujo de onboarding. Las pruebas revelan que 7/10 usuarios saltan un paso crítico. Rediseñas para hacerlo más prominente, y la tasa de éxito salta a 9/10.'
        }
      },
      quiz: [
        {
          question: { 
            en: 'When should you use a low-fidelity prototype?',
            es: '¿Cuándo deberías usar un prototipo de baja fidelidad?'
          },
          options: {
            en: [
              'When presenting to executives',
              'When exploring multiple concept directions early',
              'When testing final visual design',
              'When handing off to developers'
            ],
            es: [
              'Al presentar a ejecutivos',
              'Al explorar múltiples direcciones de concepto temprano',
              'Al probar diseño visual final',
              'Al transferir a desarrolladores'
            ]
          },
          correctIndex: 1,
          explanation: {
            en: 'Low-fidelity prototypes are best for early exploration when you want to test multiple concepts quickly without investing too much time in polish. They focus on structure and flow, not visual design.',
            es: 'Los prototipos de baja fidelidad son mejores para exploración temprana cuando quieres probar múltiples conceptos rápidamente sin invertir demasiado tiempo en pulido. Se enfocan en estructura y flujo, no en diseño visual.'
          }
        }
      ],
      realExample: {
        title: { en: 'Airbnb\'s Prototyping Culture', es: 'Cultura de Prototipado de Airbnb' },
        description: {
          en: 'Airbnb designers prototype extensively before development. They test multiple versions with users, iterate based on feedback, and only build features that have been validated through prototyping. This saves engineering time and ensures better user experiences.',
          es: 'Los diseñadores de Airbnb prototipan extensivamente antes del desarrollo. Prueban múltiples versiones con usuarios, iteran basado en retroalimentación y solo construyen características que han sido validadas a través de prototipado. Esto ahorra tiempo de ingeniería y asegura mejores experiencias de usuario.'
        },
        company: 'Airbnb'
      }
    }
  },
  {
    id: 'usability-testing',
    title: { en: 'Usability Testing', es: 'Pruebas de Usabilidad' },
    description: { 
      en: 'Testing products with real users to identify usability problems.',
      es: 'Probar productos con usuarios reales para identificar problemas de usabilidad.'
    },
    status: 'intermediate',
    timeEstimate: '1h 30min',
    reference: { en: 'Usability Testing 101 - NN/g', es: 'Pruebas de Usabilidad 101 - NN/g' },
    referenceLink: 'https://www.nngroup.com/articles/usability-testing-101/',
    content: {
      definition: {
        en: 'Usability testing is a research method where you observe real users attempting to complete tasks with your product. The goal is to identify usability problems, collect qualitative and quantitative data, and determine user satisfaction.',
        es: 'Las pruebas de usabilidad son un método de investigación donde observas a usuarios reales intentando completar tareas con tu producto. El objetivo es identificar problemas de usabilidad, recopilar datos cualitativos y cuantitativos y determinar la satisfacción del usuario.'
      },
      why: {
        en: 'You are not your user. What seems obvious to you may confuse real users. Usability testing reveals pain points, validates assumptions, and ensures your product actually works for its intended audience before launch.',
        es: 'Tú no eres tu usuario. Lo que parece obvio para ti puede confundir a usuarios reales. Las pruebas de usabilidad revelan puntos de dolor, validan suposiciones y aseguran que tu producto realmente funcione para su audiencia prevista antes del lanzamiento.'
      },
      keyPrinciples: {
        en: [
          'Recruit representative users: Test with people who match your target audience',
          'Define clear tasks: Realistic scenarios like "Find and purchase product X"',
          'Think aloud protocol: Ask users to verbalize their thoughts as they work',
          'Observe, don\'t help: Resist the urge to assist - note where they struggle',
          '5 users find 85% of problems: Diminishing returns after 5 participants per round',
          'Moderate vs. unmoderated: Moderated (you observe) provides richer insights; unmoderated (remote, async) scales better'
        ],
        es: [
          'Reclutar usuarios representativos: Prueba con personas que coincidan con tu audiencia objetivo',
          'Definir tareas claras: Escenarios realistas como "Encuentra y compra el producto X"',
          'Protocolo de pensar en voz alta: Pide a los usuarios que verbalicen sus pensamientos mientras trabajan',
          'Observar, no ayudar: Resiste el impulso de asistir - nota dónde tienen dificultades',
          '5 usuarios encuentran 85% de problemas: Rendimientos decrecientes después de 5 participantes por ronda',
          'Moderado vs. no moderado: Moderado (tú observas) proporciona insights más ricos; no moderado (remoto, asíncrono) escala mejor'
        ]
      },
      commonMistakes: {
        en: [
          'Testing with internal team or friends (they\'re not representative users)',
          'Leading questions: "Don\'t you think this button is clear?" (biases results)',
          'Helping users when they struggle (defeats the purpose)',
          'Skipping pilot test: Test your test script first with a practice participant',
          'Not recording sessions: Memory is unreliable, record video/audio',
          'Testing only at the end: Test early and often throughout design process'
        ],
        es: [
          'Probar con equipo interno o amigos (no son usuarios representativos)',
          'Preguntas sesgadas: "¿No crees que este botón es claro?" (sesga resultados)',
          'Ayudar a usuarios cuando tienen dificultades (derrota el propósito)',
          'Saltarse prueba piloto: Prueba tu guión de prueba primero con un participante de práctica',
          'No grabar sesiones: La memoria es poco confiable, graba video/audio',
          'Probar solo al final: Prueba temprano y a menudo a lo largo del proceso de diseño'
        ]
      },
      howToApply: {
        steps: [
          {
            name: { en: 'Define Research Goals', es: 'Definir Objetivos de Investigación' },
            description: { 
              en: 'What do you want to learn? Examples: "Can users complete checkout?" or "Do users understand the new navigation?"',
              es: '¿Qué quieres aprender? Ejemplos: "¿Pueden los usuarios completar el checkout?" o "¿Los usuarios entienden la nueva navegación?"'
            }
          },
          {
            name: { en: 'Create Task Scenarios', es: 'Crear Escenarios de Tareas' },
            description: { 
              en: 'Write 3-5 realistic tasks. Good: "You need to book a flight from NYC to LA for next Friday." Bad: "Click on the Flights tab."',
              es: 'Escribe 3-5 tareas realistas. Bueno: "Necesitas reservar un vuelo de NYC a LA para el próximo viernes." Malo: "Haz clic en la pestaña Vuelos."'
            }
          },
          {
            name: { en: 'Recruit Participants', es: 'Reclutar Participantes' },
            description: { 
              en: 'Find 5-8 users who match your target audience. Use screener questions to filter for relevant users. Offer incentive (gift card, cash).',
              es: 'Encuentra 5-8 usuarios que coincidan con tu audiencia objetivo. Usa preguntas de filtro para filtrar por usuarios relevantes. Ofrece incentivo (tarjeta de regalo, efectivo).'
            }
          },
          {
            name: { en: 'Run Sessions', es: 'Ejecutar Sesiones' },
            description: { 
              en: 'Introduce yourself, explain think-aloud. Give tasks one at a time. Observe silently. Take notes. Record session. Each session: 30-60 minutes.',
              es: 'Preséntate, explica pensar en voz alta. Da tareas una a la vez. Observa en silencio. Toma notas. Graba sesión. Cada sesión: 30-60 minutos.'
            }
          },
          {
            name: { en: 'Analyze & Prioritize Findings', es: 'Analizar y Priorizar Hallazgos' },
            description: { 
              en: 'Review recordings. List all usability issues. Prioritize by severity: Critical (blocks task), Major (causes frustration), Minor (cosmetic).',
              es: 'Revisa grabaciones. Lista todos los problemas de usabilidad. Prioriza por severidad: Crítico (bloquea tarea), Mayor (causa frustración), Menor (cosmético).'
            }
          },
          {
            name: { en: 'Present Recommendations', es: 'Presentar Recomendaciones' },
            description: { 
              en: 'Create report with: key findings, video clips of users struggling, recommended fixes, prioritized action items.',
              es: 'Crea informe con: hallazgos clave, clips de video de usuarios con dificultades, correcciones recomendadas, elementos de acción priorizados.'
            }
          }
        ]
      },
      deliverables: {
        description: { en: 'Usability testing outputs.', es: 'Resultados de pruebas de usabilidad.' },
        items: {
          en: [
            'Test plan: Goals, tasks, participant criteria',
            'Session recordings: Video/audio of users interacting with product',
            'Usability findings report: Issues discovered, organized by severity',
            'Highlight reel: Video clips showing key pain points',
            'Recommendations: Prioritized list of fixes with mockups'
          ],
          es: [
            'Plan de prueba: Objetivos, tareas, criterios de participantes',
            'Grabaciones de sesión: Video/audio de usuarios interactuando con producto',
            'Informe de hallazgos de usabilidad: Problemas descubiertos, organizados por severidad',
            'Carrete de destacados: Clips de video mostrando puntos de dolor clave',
            'Recomendaciones: Lista priorizada de correcciones con mockups'
          ]
        }
      },
      practicalTools: {
        design: { 
          en: ['Figma prototypes', 'Maze', 'UserTesting platform'], 
          es: ['Prototipos Figma', 'Maze', 'Plataforma UserTesting'] 
        },
        research: { 
          en: ['Zoom (moderated remote)', 'UserTesting', 'Lookback', 'Dovetail (analysis)'], 
          es: ['Zoom (remoto moderado)', 'UserTesting', 'Lookback', 'Dovetail (análisis)'] 
        },
        handoff: { 
          en: ['Notion (reports)', 'Loom (highlight reels)', 'Google Docs'], 
          es: ['Notion (informes)', 'Loom (carretes de destacados)', 'Google Docs'] 
        }
      },
      aiInPractice: {
        description: { 
          en: 'Use AI to transcribe sessions and identify patterns in user feedback.',
          es: 'Usa IA para transcribir sesiones e identificar patrones en retroalimentación de usuario.'
        },
        prompts: [
          {
            tool: 'ChatGPT',
            context: { en: 'Transcription analysis', es: 'Análisis de transcripción' },
            prompt: { 
              en: 'Here is a transcript from a usability test session: [paste transcript]. Identify the top 5 pain points the user encountered.',
              es: 'Aquí hay una transcripción de una sesión de prueba de usabilidad: [pegar transcripción]. Identifica los 5 principales puntos de dolor que el usuario encontró.'
            }
          },
          {
            tool: 'Claude',
            context: { en: 'Generating recommendations', es: 'Generando recomendaciones' },
            prompt: { 
              en: 'Based on these usability findings: [list issues], suggest 3 concrete design recommendations to fix each issue.',
              es: 'Basado en estos hallazgos de usabilidad: [listar problemas], sugiere 3 recomendaciones de diseño concretas para corregir cada problema.'
            }
          }
        ]
      },
      howToValidate: {
        what: { 
          en: 'Validate that your usability tests are revealing genuine issues and that fixes actually improve the experience.',
          es: 'Validar que tus pruebas de usabilidad están revelando problemas genuinos y que las correcciones realmente mejoran la experiencia.'
        },
        methods: { 
          en: [
            'Triangulation: Do multiple users encounter the same issue? If yes, it\'s real',
            'Severity rating: Is it critical (blocks task) or minor (cosmetic)?',
            'Retest after fixes: Run another round of testing to verify improvements',
            'Success metrics: Track task completion rate, time on task, error rate before and after changes'
          ],
          es: [
            'Triangulación: ¿Múltiples usuarios encuentran el mismo problema? Si sí, es real',
            'Calificación de severidad: ¿Es crítico (bloquea tarea) o menor (cosmético)?',
            'Re-probar después de correcciones: Ejecuta otra ronda de pruebas para verificar mejoras',
            'Métricas de éxito: Rastrea tasa de finalización de tarea, tiempo en tarea, tasa de error antes y después de cambios'
          ]
        },
        tools: { 
          en: ['Maze (quantitative metrics)', 'Hotjar (heatmaps)', 'Google Analytics'],
          es: ['Maze (métricas cuantitativas)', 'Hotjar (heatmaps)', 'Google Analytics']
        },
        evidenceExample: { 
          en: 'Usability testing shows 6/8 users can\'t find the "Save Draft" button. You make it more prominent. Retest shows 8/8 users now find it easily.',
          es: 'Las pruebas de usabilidad muestran que 6/8 usuarios no pueden encontrar el botón "Guardar Borrador". Lo haces más prominente. Las re-pruebas muestran que 8/8 usuarios ahora lo encuentran fácilmente.'
        }
      },
      quiz: [
        {
          question: { 
            en: 'Why is it important to use the "think aloud" protocol in usability testing?',
            es: '¿Por qué es importante usar el protocolo "pensar en voz alta" en pruebas de usabilidad?'
          },
          options: {
            en: [
              'It makes users more comfortable',
              'It reveals users\' thoughts and reasoning as they interact with the product',
              'It speeds up the testing session',
              'It helps users complete tasks faster'
            ],
            es: [
              'Hace que los usuarios se sientan más cómodos',
              'Revela los pensamientos y razonamiento de los usuarios mientras interactúan con el producto',
              'Acelera la sesión de prueba',
              'Ayuda a los usuarios a completar tareas más rápido'
            ]
          },
          correctIndex: 1,
          explanation: {
            en: 'The think-aloud protocol reveals users\' mental models, expectations, and confusion in real-time. You learn not just what they do, but why they do it, which is invaluable for understanding usability problems.',
            es: 'El protocolo de pensar en voz alta revela los modelos mentales, expectativas y confusión de los usuarios en tiempo real. Aprendes no solo lo que hacen, sino por qué lo hacen, lo cual es invaluable para entender problemas de usabilidad.'
          }
        }
      ],
      realExample: {
        title: { en: 'Amazon\'s Usability Lab', es: 'Laboratorio de Usabilidad de Amazon' },
        description: {
          en: 'Amazon runs continuous usability testing on every major feature. They have in-house labs where they observe real customers using their products. If users struggle with a feature, it gets redesigned before launch. This culture of testing has contributed to Amazon\'s ease of use.',
          es: 'Amazon ejecuta pruebas de usabilidad continuas en cada característica importante. Tienen laboratorios internos donde observan a clientes reales usando sus productos. Si los usuarios tienen dificultades con una característica, se rediseña antes del lanzamiento. Esta cultura de pruebas ha contribuido a la facilidad de uso de Amazon.'
        },
        company: 'Amazon'
      }
    }
  }
];
