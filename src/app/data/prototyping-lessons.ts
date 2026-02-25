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
  }
  // Note: 'usability-testing' removed — the inline version in content.ts is used instead
];
