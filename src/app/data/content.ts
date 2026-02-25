
import { advancedResearchLessons } from './advanced-research-lessons';
import { researchLessons } from './research-lessons';
import { iaLessons } from './ia-lessons';
import { uiLessons } from './ui-lessons';
import { prototypingLessons } from './prototyping-lessons';
import { productStrategyLessons } from './product-strategy-lessons';
import { designThinkingLesson } from './design-thinking-lesson';
import { designSprintLesson } from './design-sprint-lesson';
import { scrumForDesignersLesson } from './scrum-for-designers-lesson';
import { userStoriesRequirementsLesson } from './user-stories-requirements-lesson';
import { leanUxLesson } from './lean-ux-lesson';
import { uxResearchLesson } from './ux-research-lesson';
import { userPersonasLesson } from './user-personas-lesson';
import { figmaMasteryLesson } from './figma-mastery-lesson';
import { frontendFoundationsLesson, htmlFundamentalsLesson, cssFundamentalsLesson, introJavaScriptLesson } from './frontend-lessons';
import { heuristicAnalysisLesson } from './heuristic-analysis-lesson';
import { businessGoalsKpisLesson } from './business-goals-kpis-lesson';
import { stakeholderMappingLesson } from './stakeholder-mapping-lesson';
import { productRoadmappingLesson } from './product-roadmapping-lesson';
import { uxMetricsAdvancedLesson } from './ux-metrics-advanced-lesson';
import { edgeAndSystemStatesLesson } from './edge-and-system-states-lesson';
import { uxDocumentationProLesson } from './ux-documentation-pro-lesson';
import { releasePlanningLesson } from './release-planning-lesson';
import { portfolioCaseStudyLesson } from './portfolio-case-study-lesson';
import type { Topic, Track } from './types';

export type { Language, Topic, Track, LessonTag } from './types';
import type { LessonTag } from './types';

// Internal data source — all topic content organized for extraction
// The exported `tracks` array below reorganizes these into 9 learning phases
const _topicSource: Track[] = [
  {
    id: 'foundations',
    title: { en: 'UX/UI Foundations', es: 'Fundamentos UX/UI' },
    description: { 
      en: 'Master the core principles of user-centered design, research, and visual hierarchy.', 
      es: 'Domina los principios básicos del diseño centrado en el usuario, la investigación y la jerarquía visual.' 
    },
    topics: [
      {
        id: 'ux-ui-product-design-intro',
        title: { en: 'UX vs UI vs Product Design', es: 'UX vs UI vs Diseño de Producto' },
        description: { en: 'Understanding the differences and overlaps between UX, UI, and Product Design roles.', es: 'Entendiendo las diferencias y superposiciones entre roles de UX, UI y Diseño de Producto.' },
        status: 'beginner',
        timeEstimate: '45min',
        reference: { en: 'The Disciplines of UX Design - NN/g', es: 'Las Disciplinas del Diseño UX - NN/g' },
        referenceLink: 'https://www.nngroup.com/articles/ux-expert-reviews/',
        content: {
          definition: {
            en: 'UX (User Experience) Design focuses on the overall feel and journey, UI (User Interface) Design focuses on visual and interactive elements, and Product Design combines both with business strategy and technical feasibility.',
            es: 'El Diseño UX (Experiencia de Usuario) se enfoca en la sensación general y el viaje, el Diseño UI (Interfaz de Usuario) se enfoca en elementos visuales e interactivos, y el Diseño de Producto combina ambos con estrategia de negocio y viabilidad técnica.'
          },
          why: {
            en: 'Understanding these distinctions helps you know what skills to develop, how to collaborate with team members, and which deliverables to create at each stage of the design process.',
            es: 'Entender estas distinciones te ayuda a saber qué habilidades desarrollar, cómo colaborar con miembros del equipo y qué entregables crear en cada etapa del proceso de diseño.'
          },
          keyPrinciples: {
            en: [
              'UX Design: Research, user flows, information architecture, wireframes, usability testing',
              'UI Design: Visual hierarchy, typography, color systems, component design, micro-interactions',
              'Product Design: Business goals, technical constraints, end-to-end ownership, metrics and KPIs',
              'Overlap: All three roles require empathy, problem-solving, and iterative thinking'
            ],
            es: [
              'Diseño UX: Investigación, flujos de usuario, arquitectura de información, wireframes, pruebas de usabilidad',
              'Diseño UI: Jerarquía visual, tipografía, sistemas de color, diseño de componentes, micro-interacciones',
              'Diseño de Producto: Objetivos de negocio, restricciones técnicas, responsabilidad end-to-end, métricas y KPIs',
              'Superposición: Los tres roles requieren empatía, resolución de problemas y pensamiento iterativo'
            ]
          },
          commonMistakes: {
            en: [
              'Thinking UX is just wireframes and UI is just "making it pretty"',
              'Believing Product Designers don\'t need visual skills',
              'Separating UX and UI as completely distinct phases',
              'Ignoring business and technical constraints in design decisions'
            ],
            es: [
              'Pensar que UX son solo wireframes y UI es solo "hacerlo bonito"',
              'Creer que los Diseñadores de Producto no necesitan habilidades visuales',
              'Separar UX y UI como fases completamente distintas',
              'Ignorar restricciones de negocio y técnicas en decisiones de diseño'
            ]
          },
          howToApply: {
            steps: [
              {
                name: { en: 'Identify the Problem Space', es: 'Identificar el Espacio del Problema' },
                description: { en: 'Start with UX: What user problem are we solving? Conduct research and define user needs.', es: 'Comienza con UX: ¿Qué problema del usuario estamos resolviendo? Realiza investigación y define necesidades del usuario.' }
              },
              {
                name: { en: 'Structure the Solution', es: 'Estructurar la Solución' },
                description: { en: 'Create information architecture, user flows, and wireframes. This is core UX work.', es: 'Crea arquitectura de información, flujos de usuario y wireframes. Este es trabajo central de UX.' }
              },
              {
                name: { en: 'Design the Interface', es: 'Diseñar la Interfaz' },
                description: { en: 'Apply UI design: visual hierarchy, typography, color, spacing. Make it beautiful and accessible.', es: 'Aplica diseño UI: jerarquía visual, tipografía, color, espaciado. Hazlo hermoso y accesible.' }
              },
              {
                name: { en: 'Consider Product Viability', es: 'Considerar Viabilidad del Producto' },
                description: { en: 'Think like a Product Designer: Is this technically feasible? Does it align with business goals? What are the metrics?', es: 'Piensa como Diseñador de Producto: ¿Es técnicamente viable? ¿Se alinea con objetivos de negocio? ¿Cuáles son las métricas?' }
              }
            ]
          },
          deliverables: {
            description: { en: 'Artifacts created at each design discipline level.', es: 'Artefactos creados en cada nivel de disciplina de diseño.' },
            items: {
              en: [
                'UX Deliverables: User research reports, personas, journey maps, wireframes, usability test reports',
                'UI Deliverables: Style guides, component libraries, high-fidelity mockups, design systems, icon sets',
                'Product Deliverables: Product roadmaps, feature prioritization matrices, PRDs, success metrics dashboards'
              ],
              es: [
                'Entregables UX: Informes de investigación de usuario, personas, mapas de viaje, wireframes, informes de pruebas de usabilidad',
                'Entregables UI: Guías de estilo, bibliotecas de componentes, mockups de alta fidelidad, sistemas de diseño, conjuntos de iconos',
                'Entregables de Producto: Hojas de ruta de producto, matrices de priorización de características, PRDs, dashboards de métricas de éxito'
              ]
            }
          },
          practicalTools: {
            design: { en: ['Figma (UX/UI)', 'FigJam (UX)', 'Sketch (UI)', 'Adobe XD (UI)'], es: ['Figma (UX/UI)', 'FigJam (UX)', 'Sketch (UI)', 'Adobe XD (UI)'] },
            research: { en: ['UserTesting', 'Maze', 'Lookback', 'Hotjar'], es: ['UserTesting', 'Maze', 'Lookback', 'Hotjar'] },
            handoff: { en: ['Zeplin', 'Anima', 'Storybook'], es: ['Zeplin', 'Anima', 'Storybook'] }
          },
          aiInPractice: {
            description: { en: 'Use AI to understand role differences and generate role-specific deliverables.', es: 'Usa IA para entender diferencias de roles y generar entregables específicos del rol.' },
            prompts: [
              {
                tool: 'ChatGPT',
                context: { en: 'Understanding responsibilities', es: 'Entendiendo responsabilidades' },
                prompt: { en: 'I\'m working on [feature description]. What are the UX Designer\'s responsibilities vs the UI Designer\'s responsibilities for this feature?', es: 'Estoy trabajando en [descripción de característica]. ¿Cuáles son las responsabilidades del Diseñador UX vs las del Diseñador UI para esta característica?' }
              },
              {
                tool: 'Claude',
                context: { en: 'Role comparison', es: 'Comparación de roles' },
                prompt: { en: 'Create a table comparing UX Designer, UI Designer, and Product Designer: Skills, Tools, Deliverables, and Daily Activities.', es: 'Crea una tabla comparando Diseñador UX, Diseñador UI y Diseñador de Producto: Habilidades, Herramientas, Entregables y Actividades Diarias.' }
              }
            ]
          },
          howToValidate: {
            what: { 
              en: 'Validate that you understand the distinctions between UX, UI, and Product Design roles, and can identify which skills and deliverables belong to each discipline.',
              es: 'Validar que entiendes las distinciones entre roles de UX, UI y Diseño de Producto, y puedes identificar qué habilidades y entregables pertenecen a cada disciplina.'
            },
            methods: { 
              en: [
                'Role-play exercise: Given a feature, list what a UX Designer, UI Designer, and Product Designer would each contribute',
                'Portfolio audit: Review your own work and label each artifact by discipline (UX/UI/Product)',
                'Job description analysis: Read 10 job postings and identify overlapping vs unique requirements',
                'Peer review: Have someone from each role review your understanding and provide feedback'
              ],
              es: [
                'Ejercicio de rol: Dada una característica, lista qué contribuiría un Diseñador UX, UI y de Producto',
                'Auditoría de portafolio: Revisa tu propio trabajo y etiqueta cada artefacto por disciplina (UX/UI/Producto)',
                'Análisis de descripciones de trabajo: Lee 10 publicaciones de empleo e identifica requisitos superpuestos vs únicos',
                'Revisión de pares: Que alguien de cada rol revise tu comprensión y proporcione retroalimentación'
              ]
            },
            tools: { 
              en: ['LinkedIn job search filters', 'Figma (portfolio review)', 'Notion (role comparison table)', 'Miro (skills mapping)'],
              es: ['Filtros de búsqueda de empleo de LinkedIn', 'Figma (revisión de portafolio)', 'Notion (tabla de comparación de roles)', 'Miro (mapeo de habilidades)']
            },
            evidenceExample: { 
              en: 'You can confidently explain to a recruiter: "I conducted the user research (UX), designed the visual interface (UI), and aligned it with business KPIs (Product Design)" for a specific project.',
              es: 'Puedes explicar con confianza a un reclutador: "Realicé la investigación de usuarios (UX), diseñé la interfaz visual (UI) y la alineé con KPIs de negocio (Diseño de Producto)" para un proyecto específico.'
            }
          },
          quiz: [
            {
              question: { en: 'Which role is primarily responsible for conducting user interviews?', es: '¿Qué rol es principalmente responsable de realizar entrevistas de usuario?' },
              options: {
                en: ['UI Designer', 'UX Designer', 'Product Designer', 'All of the above'],
                es: ['Diseñador UI', 'Diseñador UX', 'Diseñador de Producto', 'Todos los anteriores']
              },
              correctIndex: 1,
              explanation: {
                en: 'UX Designers are primarily responsible for user research, including interviews, surveys, and usability testing.',
                es: 'Los Diseñadores UX son principalmente responsables de la investigación de usuarios, incluyendo entrevistas, encuestas y pruebas de usabilidad.'
              }
            },
            {
              question: { en: 'What is the main focus of UI Design?', es: '¿Cuál es el enfoque principal del Diseño UI?' },
              options: {
                en: ['Business strategy', 'Visual and interactive elements', 'User research', 'Technical implementation'],
                es: ['Estrategia de negocio', 'Elementos visuales e interactivos', 'Investigación de usuarios', 'Implementación técnica']
              },
              correctIndex: 1,
              explanation: {
                en: 'UI Design focuses on the visual and interactive elements of a product: typography, color, layout, and micro-interactions.',
                es: 'El Diseño UI se enfoca en los elementos visuales e interactivos de un producto: tipografía, color, diseño y micro-interacciones.'
              }
            }
          ],
          realExample: {
            title: { en: 'Airbnb\'s Design Roles', es: 'Roles de Diseño en Airbnb' },
            description: {
              en: 'Airbnb has Product Designers who handle both UX and UI, plus conduct user research. They work end-to-end on features, from problem definition to final implementation. This holistic approach is common in tech companies, where "Product Designer" encompasses UX, UI, and strategic thinking.',
              es: 'Airbnb tiene Diseñadores de Producto que manejan tanto UX como UI, además de realizar investigación de usuarios. Trabajan de principio a fin en características, desde la definición del problema hasta la implementación final. Este enfoque holístico es común en empresas tech, donde "Diseñador de Producto" abarca UX, UI y pensamiento estratégico.'
            },
            company: 'Airbnb'
          }
        }
      },
      {
        id: 'usability-basics',
        title: { en: 'Usability Basics', es: 'Conceptos Básicos de Usabilidad' },
        description: { en: 'Fundamental principles of how humans interact with objects.', es: 'Principios fundamentales de cómo los humanos interactúan con los objetos.' },
        status: 'beginner',
        timeEstimate: '1h',
        reference: { en: 'The Design of Everyday Things - Don Norman', es: 'La Psicología de los Objetos Cotidianos - Don Norman' },
        referenceLink: 'https://www.nngroup.com/articles/usability-101-introduction-to-usability/',
        content: {
          definition: {
            en: 'Usability is a quality attribute that assesses how easy user interfaces are to use. It fundamentally relies on affordances (what you can do) and signifiers (hints on how to do it).',
            es: 'La usabilidad es un atributo de calidad que evalúa qué tan fáciles son de usar las interfaces de usuario. Se basa fundamentalmente en affordances (lo que puedes hacer) y significantes (pistas sobre cómo hacerlo).'
          },
          why: {
            en: 'Without good usability, users get frustrated and abandon products. It bridges the gap between the system and the user\'s mental model.',
            es: 'Sin una buena usabilidad, los usuarios se frustran y abandonan los productos. Cierra la brecha entre el sistema y el modelo mental del usuario.'
          },
          keyPrinciples: {
            en: [
              'Affordances: Properties that determine just how the thing could possibly be used. A button affords pressing, a slider affords dragging.',
              'Signifiers: Clues that tell you where the action should take place. Labels, icons, and visual cues that communicate "click here".',
              'Feedback: Sending back information about what action has been done. Loading spinners, success messages, color changes.',
              'Mapping: The relationship between controls and their effects. Good mapping is intuitive (turn wheel right = car goes right).',
              'Conceptual Model: The user\'s mental model of how the system works. Design should match expectations (trash icon = delete).'
            ],
            es: [
              'Affordances: Propiedades que determinan cómo se puede usar algo. Un botón permite presionar, un slider permite arrastrar.',
              'Significantes: Pistas que te dicen dónde debe tener lugar la acción. Etiquetas, iconos y señales visuales que comunican "haz clic aquí".',
              'Retroalimentación: Enviar información sobre qué acción se ha realizado. Spinners de carga, mensajes de éxito, cambios de color.',
              'Mapeo: La relación entre controles y sus efectos. Buen mapeo es intuitivo (girar volante a derecha = auto va a derecha).',
              'Modelo Conceptual: El modelo mental del usuario de cómo funciona el sistema. El diseño debe coincidir con expectativas (ícono de basura = eliminar).'
            ]
          },
          commonMistakes: {
            en: [
              'Hiding critical controls for aesthetics (poor signifiers) - Example: Hamburger menu hiding primary navigation',
              'Providing no feedback after an interaction - Users click repeatedly because they don\'t know if action registered',
              'Designing based on how the code works, not how people think - Technical language instead of user-friendly labels',
              'Inconsistent affordances - Button looks different on every screen, confusing users about what\'s clickable',
              'False affordances - Elements that look clickable but aren\'t (e.g., underlined text that\'s not a link)',
              'Delayed feedback - Taking >1 second to show loading state makes users think the app is frozen'
            ],
            es: [
              'Ocultar controles críticos por estética (malos significantes) - Ejemplo: Menú hamburguesa ocultando navegación principal',
              'No proporcionar retroalimentación después de una interacción - Los usuarios hacen clic repetidamente porque no saben si la acción se registró',
              'Diseñar basándose en cómo funciona el código, no en cómo piensan las personas - Lenguaje técnico en lugar de etiquetas amigables',
              'Affordances inconsistentes - Botón se ve diferente en cada pantalla, confundiendo usuarios sobre qué es clicable',
              'Affordances falsos - Elementos que parecen clicables pero no lo son (ej. texto subrayado que no es enlace)',
              'Retroalimentación retrasada - Tomar >1 segundo para mostrar estado de carga hace que usuarios piensen que la app está congelada'
            ]
          },
          howToApply: {
            steps: [
              {
                name: { en: 'Identify the User Goal', es: 'Identificar el Objetivo del Usuario' },
                description: { en: 'What is the user trying to achieve? (e.g., Book a flight)', es: '¿Qué intenta lograr el usuario? (ej. Reservar un vuelo)' }
              },
              {
                name: { en: 'Check Affordances', es: 'Verificar Affordances' },
                description: { en: 'Does the button look like a button? Is it clear what is interactive?', es: '¿El botón parece un botón? ¿Está claro qué es interactivo?' }
              },
              {
                name: { en: 'Add Signifiers', es: 'Agregar Significantes' },
                description: { en: 'Use icons, labels, or shadows to hint at interaction.', es: 'Usa iconos, etiquetas o sombras para sugerir la interacción.' }
              },
              {
                name: { en: 'Ensure Feedback', es: 'Asegurar Retroalimentación' },
                description: { en: 'When they click, does something happen immediately? (Loading state, color change)', es: 'Cuando hacen clic, ¿pasa algo inmediatamente? (Estado de carga, cambio de color)' }
              }
            ]
          },
          aiInPractice: {
            description: { en: 'Use AI to simulate user mental models and predict potential friction points in your flow.', es: 'Usa IA para simular modelos mentales de usuarios y predecir posibles puntos de fricción en tu flujo.' },
            prompts: [
              {
                tool: 'ChatGPT',
                context: { en: 'Simulating a non-tech savvy user', es: 'Simulando un usuario no técnico' },
                prompt: { en: 'Act as a 60-year-old user who is not tech-savvy. Walk through the process of [Action] on a mobile interface. What confuses you?', es: 'Actúa como un usuario de 60 años que no es experto en tecnología. Recorre el proceso de [Acción] en una interfaz móvil. ¿Qué te confunde?' }
              },
              {
                tool: 'Claude',
                context: { en: 'Heuristic evaluation', es: 'Evaluación heurística' },
                prompt: { en: 'Analyze this screen description [paste details]. Identify usability issues related to affordances, signifiers, and feedback. Rate severity 1-5.', es: 'Analiza esta descripción de pantalla [pegar detalles]. Identifica problemas de usabilidad relacionados con affordances, significantes y retroalimentación. Califica severidad 1-5.' }
              },
              {
                tool: 'ChatGPT',
                context: { en: 'Redesign suggestions', es: 'Sugerencias de rediseño' },
                prompt: { en: 'This button gets ignored by users [describe issue]. Suggest 3 ways to improve its signifiers (color, size, label, icon, placement) to make it more discoverable.', es: 'Este botón es ignorado por los usuarios [describir problema]. Sugiere 3 formas de mejorar sus significantes (color, tamaño, etiqueta, ícono, ubicación) para hacerlo más descubrible.' }
              }
            ]
          },
          howToValidate: {
            what: { 
              en: 'Validate that your interface has clear affordances, signifiers, and feedback mechanisms that users can understand without instructions.',
              es: 'Valida que tu interfaz tiene affordances, significantes y mecanismos de retroalimentación claros que los usuarios puedan entender sin instrucciones.'
            },
            methods: { 
              en: [
                'Usability testing: Watch 5 users complete key tasks. Do they hesitate or click wrong elements?',
                'First-click test: Where do users click first to achieve a goal? (Use Maze or Optimal Workshop)',
                'Think-aloud protocol: Ask users to narrate their thought process while using the interface',
                '5-second test: Show screen for 5 seconds, then ask what actions are possible (tests signifiers)'
              ],
              es: [
                'Pruebas de usabilidad: Observa a 5 usuarios completar tareas clave. ¿Dudan o hacen clic en elementos incorrectos?',
                'Prueba de primer clic: ¿Dónde hacen clic primero los usuarios para lograr un objetivo? (Usa Maze u Optimal Workshop)',
                'Protocolo think-aloud: Pide a los usuarios narrar su proceso de pensamiento mientras usan la interfaz',
                'Prueba de 5 segundos: Muestra pantalla por 5 segundos, luego pregunta qué acciones son posibles (prueba significantes)'
              ]
            },
            tools: { 
              en: ['Maze (first-click testing)', 'UserTesting.com', 'Lookback (moderated testing)', 'Figma prototype with click tracking'], 
              es: ['Maze (prueba de primer clic)', 'UserTesting.com', 'Lookback (pruebas moderadas)', 'Prototipo Figma con seguimiento de clics'] 
            },
            evidenceExample: { 
              en: 'In usability testing, 4/5 users tried to click a disabled "Next" button because it looked clickable (poor signifier). After adding a tooltip "Complete all fields to continue", task success went from 60% to 95%.',
              es: 'En pruebas de usabilidad, 4/5 usuarios intentaron hacer clic en un botón "Siguiente" deshabilitado porque parecía clicable (mal significante). Después de agregar un tooltip "Completa todos los campos para continuar", el éxito de tarea pasó de 60% a 95%.'
            }
          },
          deliverables: {
            description: { en: 'Concrete artifacts that demonstrate mastery of usability principles.', es: 'Artefactos concretos que demuestran dominio de los principios de usabilidad.' },
            items: {
              en: [
                'Usability audit document: List of affordances, signifiers, and feedback gaps with screenshots',
                'Before/after redesign: Show improved signifiers with annotations',
                'Usability test report: 5-8 participants, task success rates, key friction points',
                'Annotated wireframes: Label each interactive element with its affordance + signifier',
                'Feedback implementation guide: Spec for loading states, success/error messages'
              ],
              es: [
                'Documento de auditoría de usabilidad: Lista de brechas de affordances, significantes y retroalimentación con capturas',
                'Rediseño antes/después: Muestra significantes mejorados con anotaciones',
                'Informe de prueba de usabilidad: 5-8 participantes, tasas de éxito de tareas, puntos de fricción clave',
                'Wireframes anotados: Etiqueta cada elemento interactivo con su affordance + significante',
                'Guía de implementación de retroalimentación: Especificaciones para estados de carga, mensajes de éxito/error'
              ]
            }
          },
          practicalTools: {
            design: { 
              en: ['Figma (prototyping)', 'FigJam (usability audits)', 'Sketch', 'Adobe XD'], 
              es: ['Figma (prototipado)', 'FigJam (auditorías de usabilidad)', 'Sketch', 'Adobe XD'] 
            },
            research: { 
              en: ['Lookback (moderated testing)', 'UserTesting.com (unmoderated)', 'Maze (first-click tests)', 'Optimal Workshop'], 
              es: ['Lookback (pruebas moderadas)', 'UserTesting.com (no moderadas)', 'Maze (pruebas de primer clic)', 'Optimal Workshop'] 
            },
            handoff: { 
              en: ['Figma Dev Mode', 'Zeplin', 'Notion (usability specs)'], 
              es: ['Figma Dev Mode', 'Zeplin', 'Notion (especificaciones de usabilidad)'] 
            }
          },
          quiz: [
            {
              question: { en: 'What is an affordance?', es: '¿Qué es un affordance?' },
              options: {
                en: [
                  'A visual clue that tells you how to use something',
                  'The properties of an object that determine how it could be used',
                  'The feedback you get after an action',
                  'A design pattern for navigation'
                ],
                es: [
                  'Una pista visual que te dice cómo usar algo',
                  'Las propiedades de un objeto que determinan cómo puede usarse',
                  'La retroalimentación que obtienes después de una acción',
                  'Un patrón de diseño para navegación'
                ]
              },
              correctIndex: 1,
              explanation: {
                en: 'Affordances are the properties of an object that determine just how the thing could possibly be used. For example, a button affords pressing.',
                es: 'Los affordances son las propiedades de un objeto que determinan cómo se puede usar. Por ejemplo, un botón permite presionar.'
              }
            },
            {
              question: { en: 'Why is feedback important in UI design?', es: '¿Por qué es importante la retroalimentación en el diseño de UI?' },
              options: {
                en: [
                  'It makes the interface look better',
                  'It confirms to users that their action was registered',
                  'It reduces development time',
                  'It improves SEO'
                ],
                es: [
                  'Hace que la interfaz se vea mejor',
                  'Confirma a los usuarios que su acción fue registrada',
                  'Reduce el tiempo de desarrollo',
                  'Mejora el SEO'
                ]
              },
              correctIndex: 1,
              explanation: {
                en: 'Feedback is crucial because it confirms to users that their action was registered and shows what happened as a result, reducing uncertainty.',
                es: 'La retroalimentación es crucial porque confirma a los usuarios que su acción fue registrada y muestra qué sucedió como resultado, reduciendo la incertidumbre.'
              }
            }
          ],
          realExample: {
            title: { en: 'Door Handles: Affordances in Everyday Life', es: 'Manijas de Puerta: Affordances en la Vida Cotidiana' },
            description: {
              en: 'A classic example from Don Norman\'s book: A flat plate on a door affords pushing, while a handle affords pulling. When a door has a handle but requires pushing, it creates confusion (a "Norman Door"). Good design makes the correct action obvious.',
              es: 'Un ejemplo clásico del libro de Don Norman: Una placa plana en una puerta permite empujar, mientras que una manija permite jalar. Cuando una puerta tiene manija pero requiere empujar, crea confusión (una "Puerta Norman"). El buen diseño hace obvia la acción correcta.'
            },
            company: 'Everyday Design Principles'
          }
        }
      },
      // === PHASE 2: BEGINNER - Research & Understanding Users ===
      uxResearchLesson,
      userPersonasLesson,
      ...researchLessons,
      // === PHASE 3: BEGINNER - Structure & Organization ===
      {
        id: 'information-architecture',
        title: { en: 'Information Architecture', es: 'Arquitectura de Información' },
        description: { en: 'Organizing and structuring content to help users find what they need.', es: 'Organizar y estructurar contenido para ayudar a los usuarios a encontrar lo que necesitan.' },
        status: 'beginner',
        timeEstimate: '1h 30m',
        reference: { en: 'Don\'t Make Me Think - Steve Krug + Information Architecture Basics - NN/g', es: 'No me hagas pensar - Steve Krug + Básicos de Arquitectura de Información - NN/g' },
        referenceLink: 'https://www.nngroup.com/articles/information-architecture-101/',
        content: {
          definition: {
            en: 'Information Architecture (IA) is the practice of organizing, structuring, and labeling content in an effective and sustainable way. It helps users understand where they are, what they have found, what is around, and what to expect.',
            es: 'La Arquitectura de Información (IA) es la práctica de organizar, estructurar y etiquetar contenido de manera efectiva y sostenible. Ayuda a los usuarios a entender dónde están, qué han encontrado, qué hay alrededor y qué esperar.'
          },
          why: {
            en: 'Good IA is invisible — users do not notice it until it is bad. Poor IA leads to users getting lost, frustrated, and abandoning your product. Solid IA creates a clear mental model, reduces cognitive load, and enables users to achieve their goals efficiently.',
            es: 'Una buena IA es invisible — los usuarios no la notan hasta que es mala. Una IA pobre lleva a que los usuarios se pierdan, se frustren y abandonen tu producto. Una IA sólida crea un modelo mental claro, reduce la carga cognitiva y permite a los usuarios lograr sus objetivos eficientemente.'
          },
          keyPrinciples: {
            en: [
              'Organization: How content is grouped (by topic, task, audience, or format)',
              'Labeling: What you call categories and navigation items (clear, familiar terms)',
              'Navigation: How users browse and move through information (menus, breadcrumbs, search)',
              'Search: How users look for specific content (filters, facets, auto-suggest)',
              'Hierarchy: Parent-child relationships between pages and sections (3-4 levels max)',
              'Mental models: Matching user expectations of where things should be'
            ],
            es: [
              'Organización: Cómo se agrupa el contenido (por tema, tarea, audiencia o formato)',
              'Etiquetado: Cómo llamas a las categorías y elementos de navegación (términos claros y familiares)',
              'Navegación: Cómo los usuarios navegan y se mueven a través de la información (menús, breadcrumbs, búsqueda)',
              'Búsqueda: Cómo los usuarios buscan contenido específico (filtros, facetas, auto-sugerencia)',
              'Jerarquía: Relaciones padre-hijo entre páginas y secciones (3-4 niveles máximo)',
              'Modelos mentales: Coincidir con las expectativas del usuario de dónde deberían estar las cosas'
            ]
          },
          commonMistakes: {
            en: [
              'Organizing by internal company structure instead of user mental models',
              'Using jargon or internal terminology in navigation labels',
              'Too many levels of hierarchy (users get lost beyond 3-4 levels)',
              'Inconsistent categorization (same item appearing in multiple unrelated categories)',
              'No search function or poorly configured search results'
            ],
            es: [
              'Organizar por estructura interna de la empresa en lugar de modelos mentales del usuario',
              'Usar jerga o terminología interna en etiquetas de navegación',
              'Demasiados niveles de jerarquía (los usuarios se pierden más allá de 3-4 niveles)',
              'Categorización inconsistente (mismo elemento apareciendo en múltiples categorías no relacionadas)',
              'Sin función de búsqueda o resultados de búsqueda mal configurados'
            ]
          },
          howToApply: {
            steps: [
              {
                name: { en: 'Content Inventory', es: 'Inventario de Contenido' },
                description: { en: 'List all existing content: pages, features, sections. Create a spreadsheet with columns: Page Title, URL, Description, Owner. This is your raw material.', es: 'Lista todo el contenido existente: páginas, características, secciones. Crea una hoja de cálculo con columnas: Título de Página, URL, Descripción, Propietario. Este es tu material bruto.' }
              },
              {
                name: { en: 'Card Sorting', es: 'Card Sorting' },
                description: { en: 'Write each content item on a card. Ask users to group cards into categories that make sense to them and name each group. This reveals their mental model.', es: 'Escribe cada elemento de contenido en una tarjeta. Pide a los usuarios que agrupen tarjetas en categorías que tengan sentido para ellos y nombren cada grupo. Esto revela su modelo mental.' }
              },
              {
                name: { en: 'Create Sitemap', es: 'Crear Mapa del Sitio' },
                description: { en: 'Based on card sorting results, organize content into a hierarchical structure. Use boxes and lines to show parent-child relationships. Keep it 3-4 levels max.', es: 'Basado en resultados de card sorting, organiza contenido en una estructura jerárquica. Usa cajas y líneas para mostrar relaciones padre-hijo. Mantenlo en 3-4 niveles máximo.' }
              },
              {
                name: { en: 'Design Navigation', es: 'Diseñar Navegación' },
                description: { en: 'Create primary navigation (top-level categories), secondary navigation (sub-categories), and utility navigation (login, help, settings). Add breadcrumbs for deep pages.', es: 'Crea navegación primaria (categorías de nivel superior), navegación secundaria (sub-categorías) y navegación de utilidad (login, ayuda, configuración). Agrega breadcrumbs para páginas profundas.' }
              },
              {
                name: { en: 'Test with Tree Testing', es: 'Probar con Tree Testing' },
                description: { en: 'Give users tasks like "Where would you find X?" Show them your IA structure (no visual design) and see if they can locate items. Identify where they get stuck.', es: 'Da a los usuarios tareas como "¿Dónde encontrarías X?" Muéstrales tu estructura IA (sin diseño visual) y ve si pueden localizar elementos. Identifica dónde se atascan.' }
              }
            ]
          },
          aiInPractice: {
            description: { en: 'AI is excellent at categorization, suggesting simplified labels, and simulating user navigation.', es: 'La IA es excelente para categorizar, sugerir etiquetas simplificadas y simular navegación de usuario.' },
            prompts: [
              {
                tool: 'Claude',
                context: { en: 'Organizing a help center', es: 'Organizando un centro de ayuda' },
                prompt: { en: 'Here is a list of 30 help articles [Paste List]. Group them into 4-6 logical categories and suggest clear, simple labels for each category.', es: 'Aquí hay una lista de 30 artículos de ayuda [Pegar lista]. Agrúpalos en 4-6 categorías lógicas y sugiere etiquetas claras y simples para cada categoría.' }
              },
              {
                tool: 'ChatGPT',
                context: { en: 'Simplifying navigation labels', es: 'Simplificando etiquetas de navegación' },
                prompt: { en: 'I have these section names: [paste list]. Rewrite them to be maximum 2 words each, clear for non-technical users, and scannable.', es: 'Tengo estos nombres de sección: [pegar lista]. Reescríbelos para que tengan máximo 2 palabras cada uno, claros para usuarios no técnicos y escaneables.' }
              },
              {
                tool: 'ChatGPT',
                context: { en: 'Testing navigation clarity', es: 'Probando claridad de navegación' },
                prompt: { en: 'Act as a first-time user. I need to find [specific task]. Looking at this navigation structure [paste], where would you click first? Why?', es: 'Actúa como un usuario primerizo. Necesito encontrar [tarea específica]. Mirando esta estructura de navegación [pegar], ¿dónde harías clic primero? ¿Por qué?' }
              }
            ]
          },
          howToValidate: {
            what: { 
              en: 'Validate that users can find content efficiently and that your IA matches their mental models.',
              es: 'Validar que los usuarios pueden encontrar contenido eficientemente y que tu IA coincide con sus modelos mentales.'
            },
            methods: { 
              en: [
                'Tree testing: Can users locate specific items in your IA structure?',
                'First-click testing: Do users click the right category first?',
                'Time to task: How long does it take users to find what they need?',
                'Analytics: Are users using search more than navigation? (indicates poor IA)'
              ],
              es: [
                'Tree testing: ¿Pueden los usuarios localizar elementos específicos en tu estructura IA?',
                'Prueba de primer clic: ¿Los usuarios hacen clic en la categoría correcta primero?',
                'Tiempo a la tarea: ¿Cuánto tiempo les toma a los usuarios encontrar lo que necesitan?',
                'Analytics: ¿Los usuarios usan búsqueda más que navegación? (indica IA pobre)'
              ]
            },
            tools: { 
              en: ['Optimal Workshop Treejack', 'Maze first-click tests', 'Google Analytics behavior flow'],
              es: ['Optimal Workshop Treejack', 'Pruebas de primer clic de Maze', 'Flujo de comportamiento de Google Analytics']
            },
            evidenceExample: { 
              en: 'After restructuring your IA based on card sorting, tree testing shows 85% success rate (up from 60%) in users finding key content within 15 seconds.',
              es: 'Después de reestructurar tu IA basada en card sorting, tree testing muestra una tasa de éxito del 85% (arriba del 60%) en usuarios encontrando contenido clave en 15 segundos.'
            }
          },
          deliverables: {
            description: { 
              en: 'Concrete artifacts to demonstrate IA mastery.',
              es: 'Artefactos concretos para demostrar dominio de IA.'
            },
            items: {
              en: [
                'Content inventory spreadsheet with categorization',
                'Sitemap showing hierarchy and navigation structure (3 levels max)',
                'Card sorting report with user grouping results',
                'Tree testing results with success rates per task',
                'Navigation wireframes with labels tested'
              ],
              es: [
                'Hoja de cálculo de inventario de contenido con categorización',
                'Mapa del sitio mostrando jerarquía y estructura de navegación (3 niveles máx)',
                'Informe de card sorting con resultados de agrupación de usuarios',
                'Resultados de tree testing con tasas de éxito por tarea',
                'Wireframes de navegación con etiquetas probadas'
              ]
            }
          },
          practicalTools: {
            design: { 
              en: ['Figma', 'FigJam', 'Miro', 'Whimsical'], 
              es: ['Figma', 'FigJam', 'Miro', 'Whimsical'] 
            },
            research: { 
              en: ['Optimal Workshop (Card sorting + Tree testing)', 'Maze', 'UserZoom', 'UsabilityHub'], 
              es: ['Optimal Workshop (Card sorting + Tree testing)', 'Maze', 'UserZoom', 'UsabilityHub'] 
            },
            handoff: { 
              en: ['Notion', 'Confluence'], 
              es: ['Notion', 'Confluence'] 
            }
          },
          quiz: [
            {
              question: { 
                en: 'What is the primary purpose of Card Sorting?', 
                es: '¿Cuál es el propósito principal del Card Sorting?' 
              },
              options: {
                en: [
                  'To test visual design preferences',
                  'To understand how users mentally group content',
                  'To validate wireframe layouts',
                  'To measure task completion time'
                ],
                es: [
                  'Probar preferencias de diseño visual',
                  'Entender cómo los usuarios agrupan mentalmente el contenido',
                  'Validar diseños de wireframes',
                  'Medir tiempo de completación de tareas'
                ]
              },
              correctIndex: 1,
              explanation: {
                en: 'Card sorting reveals users\' mental models by asking them to group content items into categories that make sense to them, not to the company.',
                es: 'El card sorting revela los modelos mentales de los usuarios pidiéndoles que agrupen elementos de contenido en categorías que tengan sentido para ellos, no para la empresa.'
              }
            },
            {
              question: { 
                en: 'When should you conduct Tree Testing?', 
                es: '¿Cuándo debes realizar Tree Testing?' 
              },
              options: {
                en: [
                  'Before creating the sitemap',
                  'After the sitemap is defined but before visual design',
                  'After the website is launched',
                  'Only if users complain'
                ],
                es: [
                  'Antes de crear el mapa del sitio',
                  'Después de que el mapa del sitio está definido pero antes del diseño visual',
                  'Después de que el sitio web está lanzado',
                  'Solo si los usuarios se quejan'
                ]
              },
              correctIndex: 1,
              explanation: {
                en: 'Tree testing validates your IA structure after it\'s defined but before investing in visual design. It catches navigation problems early.',
                es: 'El tree testing valida tu estructura de AI después de que está definida pero antes de invertir en diseño visual. Atrapa problemas de navegación temprano.'
              }
            }
          ],
          realExample: {
            title: { 
              en: 'Spotify\'s Navigation Restructure', 
              es: 'Reestructuración de Navegación de Spotify' 
            },
            description: {
              en: 'Spotify initially buried "Liked Songs" under "Your Library" > "Songs", requiring 3 taps. After card sorting with users, they discovered people think of liked songs as a primary destination, not a sub-category. They promoted it to the main navigation, reducing cognitive load. Tree testing validated 92% findability vs 58% before.',
              es: 'Spotify inicialmente enterró "Canciones que te gustan" bajo "Tu Biblioteca" > "Canciones", requiriendo 3 toques. Después de card sorting con usuarios, descubrieron que la gente piensa en canciones que les gustan como un destino primario, no una sub-categoría. Lo promovieron a la navegación principal, reduciendo la carga cognitiva. Tree testing validó 92% de encontrabilidad vs 58% antes.'
            },
            company: 'Spotify'
          }
        }
      },
      ...iaLessons,
      {
        id: 'user-flows',
        title: { en: 'User Flows & Journeys', es: 'Flujos de Usuario y Viajes' },
        description: { en: 'Mapping the path a user takes to complete a task.', es: 'Mapeando el camino que toma un usuario para completar una tarea.' },
        status: 'beginner',
        timeEstimate: '1h 30m',
        reference: { en: 'Mapping Experiences - Jim Kalbach', es: 'Mapping Experiences - Jim Kalbach' },
        referenceLink: 'https://www.nngroup.com/articles/wireflows/',
        content: {
          definition: {
            en: 'A user flow is a visual representation, either written or visual, of the many avenues that can be taken when performing something on an application.',
            es: 'Un flujo de usuario es una representación visual, ya sea escrita o visual, de las muchas avenidas que se pueden tomar al realizar algo en una aplicación.'
          },
          why: {
            en: 'They allow you to validate the logic of the process before committing to interface design. They catch "dead ends" early.',
            es: 'Te permiten validar la lógica del proceso antes de comprometerte con el diseño de la interfaz. Capturan "callejones sin salida" temprano.'
          },
          keyPrinciples: {
            en: ['Start with the "Happy Path" (ideal scenario).', 'Map out edge cases and errors.', 'Use standard symbols (diamond for decision, rectangle for screen).', 'Keep it linear where possible.'],
            es: ['Comienza con el "Camino Feliz" (escenario ideal).', 'Mapea casos extremos y errores.', 'Usa símbolos estándar (rombo para decisión, rectángulo para pantalla).', 'Mantenlo lineal donde sea posible.']
          },
          commonMistakes: {
            en: ['Mixing user actions with system backend processes.', 'Making one giant flow for the entire app.', 'Forgetting the entry point.'],
            es: ['Mezclar acciones del usuario con procesos del backend del sistema.', 'Hacer un flujo gigante para toda la app.', 'Olvidar el punto de entrada.']
          },
          howToApply: {
            steps: [
              {
                name: { en: 'Define Entry & Exit', es: 'Definir Entrada y Salida' },
                description: { en: 'Where does the user start (e.g., Email link) and end (e.g., Success screen)?', es: '¿Dónde comienza el usuario (ej. enlace de correo) y termina (ej. pantalla de éxito)?' }
              },
              {
                name: { en: 'List Steps', es: 'Listar Pasos' },
                description: { en: 'Write down the actions: "User clicks X", "System shows Y".', es: 'Escribe las acciones: "Usuario hace clic en X", "Sistema muestra Y".' }
              },
              {
                name: { en: 'Visualize', es: 'Visualizar' },
                description: { en: 'Draw it using boxes and arrows. Don\'t worry about UI details yet.', es: 'Dibújalo usando cajas y flechas. No te preocupes por los detalles de UI todavía.' }
              }
            ]
          },
          aiInPractice: {
            description: { en: 'Use AI to generate a checklist of edge cases you might have missed in your flow.', es: 'Usa IA para generar una lista de verificación de casos extremos que podrías haber pasado por alto en tu flujo.' },
            prompts: [
              {
                tool: 'ChatGPT',
                context: { en: 'Finding edge cases', es: 'Encontrando casos extremos' },
                prompt: { en: 'I am designing a "Password Reset" flow. What are 5 edge cases or error states I need to account for beyond the happy path?', es: 'Estoy diseñando un flujo de "Restablecimiento de Contraseña". ¿Cuáles son 5 casos extremos o estados de error que debo tener en cuenta más allá del camino feliz?' }
              }
            ]
          },
          howToValidate: {
            what: { 
              en: 'Validate that users can complete core tasks without friction, dead ends, or confusion.',
              es: 'Valida que los usuarios puedan completar tareas clave sin fricción, callejones sin salida o confusión.'
            },
            methods: { 
              en: [
                'Task-based usability testing with 5-8 users',
                'Cognitive walkthrough with UX team',
                'Analytics on drop-off points (post-launch)'
              ],
              es: [
                'Pruebas de usabilidad basadas en tareas con 5-8 usuarios',
                'Cognitive walkthrough con equipo UX',
                'Analítica de puntos de abandono (post-lanzamiento)'
              ]
            },
            tools: { 
              en: ['Maze', 'UserTesting', 'Lookback', 'Figma prototype + Zoom'],
              es: ['Maze', 'UserTesting', 'Lookback', 'Prototipo Figma + Zoom']
            },
            evidenceExample: { 
              en: '90% of users complete checkout in under 2 minutes with zero critical errors. Drop-off occurs at payment screen (26%) due to missing "guest checkout" option.',
              es: 'El 90% de los usuarios completa el checkout en menos de 2 minutos sin errores críticos. El abandono ocurre en la pantalla de pago (26%) debido a la falta de opción de "checkout como invitado".'
            }
          },
          realExample: {
            title: { 
              en: 'Understanding Flow Types and Symbols', 
              es: 'Entendiendo Tipos de Flujo y Símbolos' 
            },
            description: {
              en: 'User flows use standard symbols: ovals for start/end points, rectangles for screens, diamonds for decisions, and hexagons for user actions. Task flows show a single linear path (happy path only), while user flows include decision points and multiple branches. Tools like Whimsical, FigJam, and Miro help create professional flowcharts.',
              es: 'Los flujos de usuario usan símbolos estándar: óvalos para puntos de inicio/fin, rectángulos para pantallas, rombos para decisiones y hexágonos para acciones de usuario. Los task flows muestran un camino lineal único (solo camino feliz), mientras que los user flows incluyen puntos de decisión y múltiples ramificaciones. Herramientas como Whimsical, FigJam y Miro ayudan a crear diagramas de flujo profesionales.'
            },
            company: 'Standard UX Practice'
          }
        }
      },
      {
        id: 'wireframing-prototyping',
        title: { en: 'Wireframing & Prototyping', es: 'Wireframing y Prototipado' },
        description: { en: 'From low-fidelity blueprints to interactive simulations.', es: 'Desde planos de baja fidelidad hasta simulaciones interactivas.' },
        status: 'beginner',
        timeEstimate: '2h',
        reference: { en: 'Sprint - Jake Knapp', es: 'Sprint - Jake Knapp' },
        referenceLink: 'https://www.nngroup.com/articles/ux-prototype-hi-lo-fidelity/',
        content: {
          definition: {
            en: 'Wireframes are static, low-fidelity blueprints of the interface. Prototypes are interactive simulations used to test flows and interactions.',
            es: 'Los wireframes son planos estáticos de baja fidelidad de la interfaz. Los prototipos son simulaciones interactivas utilizadas para probar flujos e interacciones.'
          },
          why: {
            en: 'They allow for rapid iteration and testing at low cost. You can throw away a sketch in 5 seconds; throwing away code takes days.',
            es: 'Permiten una iteración rápida y pruebas a bajo costo. Puedes desechar un boceto en 5 segundos; desechar código lleva días.'
          },
          keyPrinciples: {
            en: ['Fidelity should match the phase (Low for concepts, High for testing).', 'Focus on layout and structure, not colors.', 'Content comes before design.', 'Interactivity clarifies intent.'],
            es: ['La fidelidad debe coincidir con la fase (Baja para conceptos, Alta para pruebas).', 'Enfócate en el diseño y la estructura, no en los colores.', 'El contenido viene antes que el diseño.', 'La interactividad aclara la intención.']
          },
          commonMistakes: {
            en: ['Adding colors and shadows too early.', 'Using "Lorem Ipsum" instead of real content.', 'Prototyping every single click (over-engineering).'],
            es: ['Agregar colores y sombras demasiado pronto.', 'Usar "Lorem Ipsum" en lugar de contenido real.', 'Prototipar cada clic individual (sobreingeniería).']
          },
          howToApply: {
            steps: [
              {
                name: { en: 'Sketching (Crazy 8s)', es: 'Bocetos (Crazy 8s)' },
                description: { en: 'Fold a paper into 8 sections. Sketch 8 ideas in 8 minutes.', es: 'Dobla un papel en 8 secciones. Dibuja 8 ideas en 8 minutos.' }
              },
              {
                name: { en: 'Lo-Fi Wireframe', es: 'Wireframe Lo-Fi' },
                description: { en: 'Digitize the best sketch using greyscale boxes. Focus on information placement.', es: 'Digitaliza el mejor boceto usando cajas en escala de grises. Enfócate en la ubicación de la información.' }
              },
              {
                name: { en: 'Interactive Prototype', es: 'Prototipo Interactivo' },
                description: { en: 'Connect the screens to show the flow. Only build what you need to test.', es: 'Conecta las pantallas para mostrar el flujo. Solo construye lo que necesitas probar.' }
              }
            ]
          },
          aiInPractice: {
            description: { en: 'AI can generate sample content for your wireframes so you don\'t have to use Lorem Ipsum.', es: 'La IA puede generar contenido de muestra para tus wireframes para que no tengas que usar Lorem Ipsum.' },
            prompts: [
              {
                tool: 'ChatGPT',
                context: { en: 'Generating UI copy', es: 'Generando texto de UI' },
                prompt: { en: 'Generate 3 variations of a "Welcome" screen headline and subheadline for a meditation app targeting stressed students.', es: 'Genera 3 variaciones de un título y subtítulo para una pantalla de "Bienvenida" de una app de meditación dirigida a estudiantes estresados.' }
              }
            ]
          },
          howToValidate: {
            what: { 
              en: 'Validate that the layout and information hierarchy support user goals and are free of critical usability issues.',
              es: 'Valida que el diseño y la jerarquía de información respalden los objetivos del usuario y estén libres de problemas críticos de usabilidad.'
            },
            methods: { 
              en: [
                'Usability testing with 5-8 users on key flows',
                'Heuristic evaluation using Nielsen\'s 10 principles',
                'A/B testing (for iterative improvements)'
              ],
              es: [
                'Pruebas de usabilidad con 5-8 usuarios en flujos clave',
                'Evaluación heurística usando los 10 principios de Nielsen',
                'Pruebas A/B (para mejoras iterativas)'
              ]
            },
            tools: { 
              en: ['Figma/Sketch prototypes', 'Maze', 'Lookback', 'Nielsen Heuristics checklist'],
              es: ['Prototipos Figma/Sketch', 'Maze', 'Lookback', 'Checklist de Heurísticas de Nielsen']
            },
            evidenceExample: { 
              en: 'Iteration 2 of dashboard wireframe scores 8/10 on heuristic evaluation (up from 5/10). Users complete "add new task" in average 8 seconds with 100% success rate.',
              es: 'La iteración 2 del wireframe del dashboard puntúa 8/10 en evaluación heurística (subió de 5/10). Los usuarios completan "agregar nueva tarea" en promedio 8 segundos con 100% de tasa de éxito.'
            }
          },
          realExample: {
            title: { 
              en: 'Understanding Fidelity Levels', 
              es: 'Entendiendo Niveles de Fidelidad' 
            },
            description: {
              en: 'Wireframing progresses through three fidelity levels: Paper Sketches (5-10 min, rapid ideation), Digital Wireframes (30-60 min, structure & layout), and Interactive Prototypes (2-4 hours, usability testing). Each level serves a specific purpose and should match your current design phase. Start low-fidelity to explore concepts quickly, then increase fidelity as you validate and refine.',
              es: 'El wireframing progresa a través de tres niveles de fidelidad: Bocetos en Papel (5-10 min, ideación rápida), Wireframes Digitales (30-60 min, estructura y diseño), y Prototipos Interactivos (2-4 horas, pruebas de usabilidad). Cada nivel sirve un propósito específico y debe coincidir con tu fase actual de diseño. Comienza con baja fidelidad para explorar conceptos rápidamente, luego aumenta la fidelidad a medida que validas y refinas.'
            },
            company: 'Design Best Practice'
          }
        }
      },
      // === PHASE 4: BEGINNER - Visual Design Fundamentals ===
      // Note: 'wireframes' merged into 'wireframing-prototyping' — no longer loaded separately
      ...uiLessons.filter(lesson => lesson.id === 'visual-hierarchy'),
      ...uiLessons.filter(lesson => lesson.id === 'typography-fundamentals' || lesson.id === 'color-theory'),
      // === PHASE 5: INTERMEDIATE - Analysis & Competitive Strategy ===
      {
        id: 'competitive-analysis',
        title: { en: 'Competitive Analysis & Benchmarking', es: 'Análisis Competitivo y Benchmarking' },
        description: { en: 'Understanding the competitive landscape to identify opportunities and differentiation strategies.', es: 'Entendiendo el panorama competitivo para identificar oportunidades y estrategias de diferenciación.' },
        status: 'intermediate',
        timeEstimate: '2h',
        reference: { en: 'Competitive Strategy - Michael Porter', es: 'Competitive Strategy - Michael Porter' },
        referenceLink: 'https://www.nngroup.com/articles/competitive-analysis/',
        content: {
          definition: {
            en: 'Competitive analysis is the systematic evaluation of competitors\' products, strategies, strengths, and weaknesses to inform your own product decisions and identify market opportunities.',
            es: 'El análisis competitivo es la evaluación sistemática de los productos, estrategias, fortalezas y debilidades de los competidores para informar tus propias decisiones de producto e identificar oportunidades de mercado.'
          },
          why: {
            en: 'It prevents you from building redundant features, reveals market gaps where you can differentiate, and helps you understand what users expect as table stakes vs. delighters.',
            es: 'Evita que construyas características redundantes, revela brechas de mercado donde puedes diferenciarte y te ayuda a entender qué esperan los usuarios como requisitos mínimos vs. diferenciadores.'
          },
          keyPrinciples: {
            en: [
              'Analyze both direct competitors (same solution) and indirect competitors (different solution, same job-to-be-done).',
              'Focus on user feedback, not just feature lists—understand WHY features exist.',
              'Benchmark quantitatively: pricing, market share, user ratings, feature coverage.',
              'Identify patterns in user complaints—these are your opportunities.',
              'Test competitor products hands-on, don\'t just read marketing materials.'
            ],
            es: [
              'Analiza competidores directos (misma solución) e indirectos (solución diferente, mismo trabajo por hacer).',
              'Enfócate en feedback de usuario, no solo listas de características—entiende POR QUÉ existen las características.',
              'Haz benchmarking cuantitativo: precios, cuota de mercado, calificaciones de usuario, cobertura de características.',
              'Identifica patrones en quejas de usuarios—estas son tus oportunidades.',
              'Prueba productos de la competencia de primera mano, no solo leas materiales de marketing.'
            ]
          },
          commonMistakes: {
            en: [
              'Only looking at direct competitors, ignoring adjacent solutions.',
              'Copying features without understanding user context or why they exist.',
              'Not testing competitor products hands-on—relying on screenshots.',
              'Ignoring user reviews and sentiment analysis.',
              'Building a "feature parity" product instead of a differentiated one.'
            ],
            es: [
              'Solo mirar competidores directos, ignorando soluciones adyacentes.',
              'Copiar características sin entender el contexto del usuario o por qué existen.',
              'No probar productos de la competencia de primera mano—confiando en capturas de pantalla.',
              'Ignorar reseñas de usuarios y análisis de sentimiento.',
              'Construir un producto de "paridad de características" en lugar de uno diferenciado.'
            ]
          },
          howToApply: {
            steps: [
              {
                name: { en: 'Identify Competitors', es: 'Identificar Competidores' },
                description: { en: 'List 5-10 direct and indirect competitors. Include both established players and emerging startups.', es: 'Lista 5-10 competidores directos e indirectos. Incluye tanto jugadores establecidos como startups emergentes.' }
              },
              {
                name: { en: 'Create Comparison Matrix', es: 'Crear Matriz de Comparación' },
                description: { en: 'Build a spreadsheet comparing: features, pricing, target audience, UX strengths/weaknesses, market positioning.', es: 'Construye una hoja de cálculo comparando: características, precios, audiencia objetivo, fortalezas/debilidades UX, posicionamiento de mercado.' }
              },
              {
                name: { en: 'Hands-on Testing', es: 'Pruebas Prácticas' },
                description: { en: 'Sign up for free trials. Complete core workflows. Document friction points and delightful moments.', es: 'Regístrate para pruebas gratuitas. Completa flujos de trabajo principales. Documenta puntos de fricción y momentos deliciosos.' }
              },
              {
                name: { en: 'User Sentiment Analysis', es: 'Análisis de Sentimiento de Usuario' },
                description: { en: 'Read 20-50 user reviews per competitor on G2, Capterra, App Store. Categorize praise and complaints into themes.', es: 'Lee 20-50 reseñas de usuario por competidor en G2, Capterra, App Store. Categoriza elogios y quejas en temas.' }
              },
              {
                name: { en: 'Identify Opportunities', es: 'Identificar Oportunidades' },
                description: { en: 'Look for patterns: What do all competitors lack? What do users consistently complain about? Where can you differentiate?', es: 'Busca patrones: ¿Qué carecen todos los competidores? ¿De qué se quejan consistentemente los usuarios? ¿Dónde puedes diferenciarte?' }
              }
            ]
          },
          aiInPractice: {
            description: { en: 'AI can dramatically speed up competitor research, review analysis, and opportunity identification.', es: 'La IA puede acelerar drásticamente la investigación de competidores, análisis de reseñas e identificación de oportunidades.' },
            prompts: [
              {
                tool: 'Perplexity',
                context: { en: 'Finding competitors', es: 'Encontrando competidores' },
                prompt: { en: 'List 10 direct and indirect competitors for [product description]. For each, provide: URL, target audience, key differentiator, and pricing model.', es: 'Lista 10 competidores directos e indirectos para [descripción del producto]. Para cada uno, proporciona: URL, audiencia objetivo, diferenciador clave y modelo de precios.' }
              },
              {
                tool: 'ChatGPT',
                context: { en: 'Analyzing user reviews', es: 'Analizando reseñas de usuarios' },
                prompt: { en: 'Here are 20 App Store reviews for [competitor name] [paste reviews]. Categorize complaints and praise into themes. What do users consistently wish existed?', es: 'Aquí hay 20 reseñas de App Store para [nombre del competidor] [pegar reseñas]. Categoriza quejas y elogios en temas. ¿Qué desean consistentemente los usuarios que existiera?' }
              }
            ]
          },
          howToValidate: {
            what: { 
              en: 'Validate that your competitive analysis accurately represents the market and that identified opportunities are real gaps, not just wishful thinking.',
              es: 'Valida que tu análisis competitivo represente con precisión el mercado y que las oportunidades identificadas sean brechas reales, no solo ilusiones.'
            },
            methods: { 
              en: [
                'Cross-reference findings with multiple data sources (reviews, pricing pages, hands-on testing)',
                'Interview 5-10 users who currently use competitor products',
                'Check if "gaps" are actually intentional design decisions',
                'Validate market size and willingness-to-pay for your differentiation'
              ],
              es: [
                'Cruza hallazgos con múltiples fuentes de datos (reseñas, páginas de precios, pruebas prácticas)',
                'Entrevista 5-10 usuarios que actualmente usan productos de la competencia',
                'Verifica si las "brechas" son en realidad decisiones de diseño intencionales',
                'Valida el tamaño del mercado y disposición a pagar por tu diferenciación'
              ]
            },
            tools: { 
              en: ['SimilarWeb', 'G2/Capterra reviews', 'App Store/Play Store', 'User interviews', 'Pricing comparison sheets'],
              es: ['SimilarWeb', 'Reseñas G2/Capterra', 'App Store/Play Store', 'Entrevistas de usuario', 'Hojas de comparación de precios']
            },
            evidenceExample: { 
              en: 'Competitive analysis of 5 PM tools revealed native time tracking is absent in 60% of market leaders (Notion, Asana, Trello). User review analysis showed 38% of Asana users specifically request this feature. User interviews with 8 agency owners confirmed they use 2 separate tools (PM + time tracking), validating the opportunity.',
              es: 'El análisis competitivo de 5 herramientas PM reveló que el seguimiento de tiempo nativo está ausente en el 60% de los líderes del mercado (Notion, Asana, Trello). El análisis de reseñas de usuarios mostró que el 38% de los usuarios de Asana solicitan específicamente esta característica. Las entrevistas de usuario con 8 dueños de agencias confirmaron que usan 2 herramientas separadas (PM + seguimiento de tiempo), validando la oportunidad.'
            }
          },
          practicalTools: {
            design: { 
              en: ['Figma/Sketch (for UI screenshots)', 'Notion/Excel (comparison matrices)', 'Miro (positioning maps)'],
              es: ['Figma/Sketch (para capturas de UI)', 'Notion/Excel (matrices de comparación)', 'Miro (mapas de posicionamiento)']
            },
            research: { 
              en: ['G2', 'Capterra', 'TrustRadius', 'App Store/Play Store reviews', 'SimilarWeb', 'Product Hunt'],
              es: ['G2', 'Capterra', 'TrustRadius', 'Reseñas App Store/Play Store', 'SimilarWeb', 'Product Hunt']
            },
            handoff: { 
              en: ['Google Slides', 'Keynote', 'Pitch', 'Figma (for visuals)'], 
              es: ['Google Slides', 'Keynote', 'Pitch', 'Figma (para visuales)'] 
            }
          },
          deliverables: {
            description: { en: 'Competitive analysis outputs and strategic artifacts.', es: 'Resultados de análisis competitivo y artefactos estratégicos.' },
            items: {
              en: [
                'Feature comparison matrix: Spreadsheet showing features across competitors with quality ratings',
                'UX evaluation report: Screenshots and notes from hands-on competitor product testing',
                'SWOT analysis: Strengths, Weaknesses, Opportunities, Threats for each competitor',
                'User sentiment analysis: Categorized praise and complaints from 20-50 reviews per competitor',
                'Opportunity map: Visual showing where your product can differentiate',
                'Presentation deck: Key findings and strategic recommendations for stakeholders'
              ],
              es: [
                'Matriz de comparación de características: Hoja de cálculo mostrando características entre competidores con calificaciones de calidad',
                'Informe de evaluación UX: Capturas de pantalla y notas de pruebas prácticas de productos competidores',
                'Análisis SWOT: Fortalezas, Debilidades, Oportunidades, Amenazas para cada competidor',
                'Análisis de sentimiento de usuario: Elogios y quejas categorizados de 20-50 reseñas por competidor',
                'Mapa de oportunidades: Visual mostrando dónde tu producto puede diferenciarse',
                'Deck de presentación: Hallazgos clave y recomendaciones estratégicas para stakeholders'
              ]
            }
          },
          quiz: [
            {
              question: { 
                en: 'What is an indirect competitor?',
                es: '¿Qué es un competidor indirecto?'
              },
              options: {
                en: [
                  'A competitor in a different geographic region',
                  'A competitor that solves the same problem using a different solution',
                  'A competitor with lower pricing',
                  'A competitor with fewer features'
                ],
                es: [
                  'Un competidor en una región geográfica diferente',
                  'Un competidor que resuelve el mismo problema usando una solución diferente',
                  'Un competidor con precios más bajos',
                  'Un competidor con menos características'
                ]
              },
              correctIndex: 1,
              explanation: {
                en: 'An indirect competitor solves the same user problem but with a different type of solution. For example, for a ride-sharing app, indirect competitors include public transportation, bike rentals, or personal cars.',
                es: 'Un competidor indirecto resuelve el mismo problema del usuario pero con un tipo diferente de solución. Por ejemplo, para una app de viajes compartidos, los competidores indirectos incluyen transporte público, alquiler de bicicletas o autos personales.'
              }
            },
            {
              question: { 
                en: 'What is the biggest risk of only doing feature-level competitive analysis?',
                es: '¿Cuál es el mayor riesgo de solo hacer análisis competitivo a nivel de características?'
              },
              options: {
                en: [
                  'You might miss emerging competitors',
                  'You end up building a "feature parity" product instead of a differentiated one',
                  'It takes too long to complete',
                  'Stakeholders won\'t understand the results'
                ],
                es: [
                  'Podrías perder competidores emergentes',
                  'Terminas construyendo un producto de "paridad de características" en lugar de uno diferenciado',
                  'Toma demasiado tiempo completar',
                  'Los stakeholders no entenderán los resultados'
                ]
              },
              correctIndex: 1,
              explanation: {
                en: 'Feature-level analysis without understanding user sentiment and market gaps leads to copying competitors instead of differentiating. Always pair feature matrices with user review analysis and opportunity identification.',
                es: 'El análisis a nivel de características sin entender el sentimiento del usuario y las brechas del mercado lleva a copiar competidores en lugar de diferenciarse. Siempre combina matrices de características con análisis de reseñas y identificación de oportunidades.'
              }
            }
          ],
          realExample: {
            title: { 
              en: 'PM Tools Benchmark: Finding the Time Tracking Gap', 
              es: 'Benchmark de Herramientas PM: Encontrando la Brecha de Seguimiento de Tiempo' 
            },
            description: {
              en: 'A comprehensive competitive benchmark of 5 leading project management tools (Notion, Asana, Monday, Trello, ClickUp) revealed a significant market opportunity: native time tracking. The analysis showed that 60% of market leaders lack this feature despite 38% of users requesting it in reviews. By analyzing market share, pricing, user sentiment, and feature matrices, a clear differentiation strategy emerged: enter at $8-15/user (below Asana\'s $24.99) with native time tracking as the hero feature, targeting small-medium teams who currently juggle separate PM and time tracking tools.',
              es: 'Un benchmark competitivo completo de 5 herramientas de gestión de proyectos líderes (Notion, Asana, Monday, Trello, ClickUp) reveló una oportunidad de mercado significativa: seguimiento de tiempo nativo. El análisis mostró que el 60% de los líderes del mercado carecen de esta característica a pesar de que el 38% de los usuarios la solicitan en reseñas. Al analizar cuota de mercado, precios, sentimiento de usuario y matrices de características, surgió una estrategia de diferenciación clara: entrar a $8-15/usuario (por debajo de los $24.99 de Asana) con seguimiento de tiempo nativo como característica héroe, apuntando a equipos pequeños-medianos que actualmente hacen malabarismos con herramientas PM y de seguimiento de tiempo separadas.'
            },
            company: 'Product Strategy Best Practice'
          }
        }
      },
      // === PHASE 6: INTERMEDIATE - Process & Methodologies ===
      // UX Process (full workflow context) → Methodologies Overview (bird's eye comparison)
      // → then individual deep-dive method lessons (DT, Lean UX, DS, Scrum, User Stories)
      {
        id: 'ux-process',
        title: { en: 'UX Process & Deliverables', es: 'Proceso UX y Entregables' },
        description: { en: 'End-to-end UX process and stakeholder communication.', es: 'Proceso UX de extremo a extremo y comunicación con las partes interesadas.' },
        status: 'intermediate',
        timeEstimate: '2h',
        reference: { en: 'A Project Guide to UX Design - Russ Unger & Carolyn Chandler', es: 'Guía de Proyectos de Diseño UX - Russ Unger y Carolyn Chandler' },
        referenceLink: 'https://www.uxpin.com/studio/blog/ux-design-process-steps/',
        content: {
          definition: {
            en: 'The UX process involves a series of steps (Discovery, Definition, Design, Validation) and tangible deliverables used to communicate design decisions to stakeholders.',
            es: 'El proceso UX implica una serie de pasos (Descubrimiento, Definición, Diseño, Validación) y entregables tangibles utilizados para comunicar decisiones de diseño a las partes interesadas.'
          },
          why: {
            en: 'Structuring the work ensures nothing is missed and keeps the business aligned with user needs.',
            es: 'Estructurar el trabajo asegura que no se pierda nada y mantiene el negocio alineado con las necesidades del usuario.'
          },
          keyPrinciples: {
            en: ['Document clearly.', 'Adapt the process to the project size.', 'Communicate "why" not just "what".', 'Iterate based on feedback.'],
            es: ['Documenta claramente.', 'Adapta el proceso al tamaño del proyecto.', 'Comunica el "por qué" no solo el "qué".', 'Itera basado en retroalimentación.']
          },
          commonMistakes: {
            en: ['Creating documentation nobody reads.', 'Strictly following a "waterfall" process.', 'Ignoring business requirements.'],
            es: ['Crear documentación que nadie lee.', 'Seguir estrictamente un proceso "en cascada".', 'Ignorar los requisitos del negocio.']
          },
          howToApply: {
            steps: [
              {
                name: { en: 'Discovery Phase', es: 'Fase de Descubrimiento' },
                description: { en: 'Stakeholder interviews, competitive analysis, user research.', es: 'Entrevistas con stakeholders, análisis competitivo, investigación de usuarios.' }
              },
              {
                name: { en: 'Definition Phase', es: 'Fase de Definición' },
                description: { en: 'User journeys, personas, sitemaps.', es: 'Viajes de usuario, personas, mapas del sitio.' }
              },
              {
                name: { en: 'Design Phase', es: 'Fase de Diseño' },
                description: { en: 'Wireframes, prototypes, high-fidelity UI.', es: 'Wireframes, prototipos, UI de alta fidelidad.' }
              },
              {
                name: { en: 'Validation Phase', es: 'Fase de Validación' },
                description: { en: 'Usability testing and accessibility audit.', es: 'Pruebas de usabilidad y auditoría de accesibilidad.' }
              }
            ]
          },
          aiInPractice: {
            description: { en: 'AI can assist in creating first drafts of deliverables like project briefs or research plans.', es: 'La IA puede ayudar a crear primeros borradores de entregables como informes de proyectos o planes de investigación.' },
            prompts: [
              {
                tool: 'ChatGPT',
                context: { en: 'Writing a project brief', es: 'Escribiendo un resumen del proyecto' },
                prompt: { en: 'Draft a UX Project Brief for a mobile app redesign. Include sections for: Objectives, Scope, Target Audience, and Deliverables.', es: 'Redacta un Resumen de Proyecto UX para el rediseño de una aplicación móvil. Incluye secciones para: Objetivos, Alcance, Público Objetivo y Entregables.' }
              }
            ]
          },
          howToValidate: {
            what: {
              en: 'Validate that the UX process and deliverables are actually informing decisions, not just creating documents for the sake of it.',
              es: 'Valida que el proceso UX y los entregables realmente estén informando decisiones, no solo creando documentos por crearlos.'
            },
            methods: {
              en: [
                'Stakeholder alignment check: after each phase, can stakeholders articulate what was learned and decided?',
                'Deliverable utility audit: for each artifact, ask "What decision did this enable?" If no answer, it was waste.',
                'Decision log review: track every design decision and link it to evidence from a UX phase.',
                'Phase gate reviews: formal checkpoints between Discovery, Definition, Design, and Delivery.',
                'Cross-functional retrospective: did the process reduce ambiguity and rework?'
              ],
              es: [
                'Verificación de alineación de stakeholders: después de cada fase, ¿pueden articular qué se aprendió y decidió?',
                'Auditoría de utilidad de entregables: para cada artefacto, pregunta "¿Qué decisión habilitó esto?" Si no hay respuesta, fue desperdicio.',
                'Revisión de registro de decisiones: rastrea cada decisión de diseño y vincúlala a evidencia de una fase UX.',
                'Revisiones de puertas de fase: puntos de control formales entre Descubrimiento, Definición, Diseño y Entrega.',
                'Retrospectiva interfuncional: ¿el proceso redujo la ambigüedad y el retrabajo?'
              ]
            },
            tools: {
              en: ['Confluence/Notion (decision logs)', 'Miro (retrospectives)', 'Typeform (stakeholder pulse surveys)', 'Jira (cycle time tracking)'],
              es: ['Confluence/Notion (registros de decisiones)', 'Miro (retrospectivas)', 'Typeform (encuestas de pulso a stakeholders)', 'Jira (seguimiento de tiempo de ciclo)']
            },
            evidenceExample: {
              en: '"After implementing phase gates between Discovery and Design, stakeholder alignment improved 60% and we reduced late-stage redesigns by 45% because misunderstandings were caught in Definition, not Delivery."',
              es: '"Después de implementar puertas de fase entre Descubrimiento y Diseño, la alineación de stakeholders mejoró 60% y redujimos rediseños tardíos en 45% porque los malentendidos se capturaron en Definición, no en Entrega."'
            }
          },
          realExample: {
            title: { 
              en: 'Complete UX Process Case Study', 
              es: 'Caso de Estudio Completo de Proceso UX' 
            },
            description: {
              en: 'Interactive walkthrough of a real UX redesign project from discovery to validation, showing all deliverables at each phase.',
              es: 'Recorrido interactivo de un proyecto real de rediseño UX desde descubrimiento hasta validación, mostrando todos los entregables en cada fase.'
            },
            company: 'FitTrack App Redesign (Case Study)'
          }
        }
      },
      {
        id: 'methodologies-overview',
        title: { en: 'Methodologies Overview', es: 'Visión General de Metodologías' },
        description: { en: 'A comprehensive guide to choosing and combining UX/product methodologies based on your project needs.', es: 'Una guía completa para elegir y combinar metodologías UX/producto según las necesidades de tu proyecto.' },
        status: 'intermediate',
        timeEstimate: '1h 45m',
        reference: { en: 'NN/g on Design Thinking, IDEO, The Scrum Guide', es: 'NN/g sobre Design Thinking, IDEO, La Guía Scrum' },
        referenceLink: 'https://www.nngroup.com/articles/design-thinking/',
        content: {
          definition: {
            en: 'Design and product methodologies are structured frameworks that guide how teams discover problems, define solutions, deliver products, and validate outcomes. They help teams align on processes, reduce risk, and move from ambiguity to clarity.',
            es: 'Las metodologías de diseño y producto son marcos estructurados que guían cómo los equipos descubren problemas, definen soluciones, entregan productos y validan resultados. Ayudan a los equipos a alinearse en procesos, reducir riesgos y pasar de la ambigüedad a la claridad.'
          },
          why: {
            en: 'Without a shared methodology, teams waste time debating process, miss critical discovery steps, and build features based on assumptions instead of evidence. The right methodology creates alignment, speeds up decision-making, and ensures user needs drive the roadmap—not just internal opinions.',
            es: 'Sin una metodología compartida, los equipos pierden tiempo debatiendo procesos, se saltan pasos críticos de descubrimiento y construyen funcionalidades basadas en suposiciones en lugar de evidencia. La metodología correcta crea alineación, acelera la toma de decisiones y asegura que las necesidades del usuario impulsen la hoja de ruta, no solo las opiniones internas.'
          },
          keyPrinciples: {
            en: [
              'Match methodology to uncertainty level: high uncertainty = Design Thinking/Lean UX; low uncertainty = Scrum/Waterfall.',
              'Combine methodologies: use Design Sprint for discovery, Scrum for delivery.',
              'Adapt, don\'t adopt: take what works for your team, skip what doesn\'t.',
              'Start with the problem, not the process: choose methods that help you learn fast.',
              'Iterate on your methodology: retrospectives should improve how you work.',
              'Documentation follows discovery: don\'t create artifacts for their own sake.',
              'Cross-functional collaboration is non-negotiable: designers, developers, and stakeholders must align early.',
              'Validate assumptions continuously: methodologies are frameworks for learning, not just shipping.'
            ],
            es: [
              'Ajusta la metodología al nivel de incertidumbre: alta incertidumbre = Design Thinking/Lean UX; baja incertidumbre = Scrum/Waterfall.',
              'Combina metodologías: usa Design Sprint para descubrimiento, Scrum para entrega.',
              'Adapta, no adoptes: toma lo que funciona para tu equipo, omite lo que no.',
              'Comienza con el problema, no con el proceso: elige métodos que te ayuden a aprender rápido.',
              'Itera en tu metodología: las retrospectivas deben mejorar cómo trabajas.',
              'La documentación sigue al descubrimiento: no crees artefactos por el simple hecho de crearlos.',
              'La colaboración interfuncional es innegociable: diseñadores, desarrolladores y stakeholders deben alinearse temprano.',
              'Valida suposiciones continuamente: las metodologías son marcos para aprender, no solo para entregar.'
            ]
          },
          howToApply: {
            steps: [
              {
                name: { en: '1. Assess Uncertainty', es: '1. Evaluar Incertidumbre' },
                description: { en: 'Ask: Do we know the problem? Do we know the solution? High uncertainty in either = lean toward discovery-focused methods (Design Thinking, Design Sprint).', es: 'Pregunta: ¿Conocemos el problema? ¿Conocemos la solución? Alta incertidumbre en cualquiera = inclínate hacia métodos enfocados en descubrimiento (Design Thinking, Design Sprint).' }
              },
              {
                name: { en: '2. Map Project Phase', es: '2. Mapear Fase del Proyecto' },
                description: { en: 'Discovery = Design Thinking/Design Sprint. Definition = Lean UX. Delivery = Scrum/Agile. Validation = Continuous testing + analytics.', es: 'Descubrimiento = Design Thinking/Design Sprint. Definición = Lean UX. Entrega = Scrum/Agile. Validación = Pruebas continuas + analítica.' }
              },
              {
                name: { en: '3. Consider Team Size & Timeline', es: '3. Considerar Tamaño de Equipo y Cronograma' },
                description: { en: 'Solo/small team + tight deadline = Lean UX. Large cross-functional team = Scrum. Time-boxed exploration = Design Sprint (5 days).', es: 'Equipo solo/pequeño + plazo ajustado = Lean UX. Equipo interfuncional grande = Scrum. Exploración con límite de tiempo = Design Sprint (5 días).' }
              },
              {
                name: { en: '4. Choose Core Method + Complement', es: '4. Elegir Método Principal + Complemento' },
                description: { en: 'Example: Core = Scrum (2-week sprints). Complement = Monthly Design Sprint for new features. Tools = Miro for workshops, Jira for delivery tracking.', es: 'Ejemplo: Principal = Scrum (sprints de 2 semanas). Complemento = Design Sprint mensual para nuevas funcionalidades. Herramientas = Miro para talleres, Jira para seguimiento de entrega.' }
              },
              {
                name: { en: '5. Run & Retrospect', es: '5. Ejecutar y Retrospectiva' },
                description: { en: 'After each cycle, ask: What slowed us down? What helped us learn faster? Adjust your methodology based on evidence, not dogma.', es: 'Después de cada ciclo, pregunta: ¿Qué nos ralentizó? ¿Qué nos ayudó a aprender más rápido? Ajusta tu metodología basándote en evidencia, no en dogma.' }
              }
            ]
          },
          commonMistakes: {
            en: [
              'Cargo cult methodology: copying a process without understanding why (e.g., daily standups with no decisions).',
              'Skipping discovery: jumping straight to delivery without validating the problem.',
              'Methodology tourism: switching methods every sprint without giving one time to work.',
              'Rigid adherence: treating Scrum/Design Thinking as religion instead of a flexible framework.',
              'No retrospectives: repeating the same process issues sprint after sprint without improvement.'
            ],
            es: [
              'Metodología de culto cargo: copiar un proceso sin entender el porqué (ej., daily standups sin decisiones).',
              'Saltarse el descubrimiento: saltar directamente a la entrega sin validar el problema.',
              'Turismo metodológico: cambiar de métodos cada sprint sin dar tiempo a que uno funcione.',
              'Adherencia rígida: tratar Scrum/Design Thinking como religión en lugar de un marco flexible.',
              'Sin retrospectivas: repetir los mismos problemas de proceso sprint tras sprint sin mejora.'
            ]
          },
          deliverables: {
            description: {
              en: 'Deliverables vary by methodology but should always serve learning and alignment, not bureaucracy.',
              es: 'Los entregables varían según la metodología pero siempre deben servir al aprendizaje y la alineación, no a la burocracia.'
            },
            items: {
              en: [
                'Methodology decision log (why this approach, for this phase)',
                'Process canvas (e.g., Double Diamond map with chosen methods per phase)',
                'Workshop artifacts (e.g., sprint prototype, journey map, hypotheses board)',
                'Retrospective notes (what worked, what to change)',
                'Delivery artifacts (backlog, sprint goals, definition of done)',
                'Validation plan (how we\'ll measure if the methodology is working)'
              ],
              es: [
                'Registro de decisiones metodológicas (por qué este enfoque, para esta fase)',
                'Canvas de proceso (ej., mapa Double Diamond con métodos elegidos por fase)',
                'Artefactos de taller (ej., prototipo de sprint, mapa de viaje, tablero de hipótesis)',
                'Notas de retrospectiva (qué funcionó, qué cambiar)',
                'Artefactos de entrega (backlog, objetivos de sprint, definición de hecho)',
                'Plan de validación (cómo mediremos si la metodología está funcionando)'
              ]
            }
          },
          practicalTools: {
            design: {
              en: ['Miro (workshops, journey mapping)', 'FigJam (collaborative ideation)', 'Notion (documentation, decision logs)'],
              es: ['Miro (talleres, mapeo de viajes)', 'FigJam (ideación colaborativa)', 'Notion (documentación, registros de decisiones)']
            },
            research: {
              en: ['Dovetail (research synthesis)', 'Maze (prototype testing)', 'Optimal Workshop (card sorting, tree testing)'],
              es: ['Dovetail (síntesis de investigación)', 'Maze (pruebas de prototipos)', 'Optimal Workshop (card sorting, tree testing)']
            },
            handoff: {
              en: ['Jira (Scrum delivery)', 'Linear (issue tracking)', 'Confluence (team documentation)', 'Slack (async updates)'],
              es: ['Jira (entrega Scrum)', 'Linear (seguimiento de issues)', 'Confluence (documentación de equipo)', 'Slack (actualizaciones asíncronas)']
            }
          },
          aiInPractice: {
            description: {
              en: 'AI can help you choose the right methodology, plan workshops, and generate sprint structures based on your constraints.',
              es: 'La IA puede ayudarte a elegir la metodología correcta, planificar talleres y generar estructuras de sprint basadas en tus restricciones.'
            },
            prompts: [
              {
                tool: 'ChatGPT',
                context: { en: 'Choosing methodology', es: 'Elegir metodología' },
                prompt: {
                  en: 'We\'re a 3-person team building a B2B SaaS dashboard. We have 6 weeks, unclear user needs, and a technical co-founder who wants to ship fast. Should we use Design Sprint, Lean UX, or Scrum? Compare pros/cons for this specific scenario.',
                  es: 'Somos un equipo de 3 personas construyendo un dashboard B2B SaaS. Tenemos 6 semanas, necesidades de usuario poco claras y un co-fundador técnico que quiere lanzar rápido. ¿Deberíamos usar Design Sprint, Lean UX o Scrum? Compara pros/contras para este escenario específico.'
                }
              },
              {
                tool: 'Claude',
                context: { en: 'Planning a workshop', es: 'Planificar un taller' },
                prompt: {
                  en: 'Create a 90-minute remote Design Sprint kickoff workshop agenda. Participants: 1 PM, 2 designers, 3 engineers. Goal: align on problem statement for a checkout flow redesign. Include timing, activities, and Miro board structure.',
                  es: 'Crea una agenda de taller de lanzamiento de Design Sprint remoto de 90 minutos. Participantes: 1 PM, 2 diseñadores, 3 ingenieros. Objetivo: alinear la declaración del problema para un rediseño de flujo de checkout. Incluye timing, actividades y estructura de tablero Miro.'
                }
              },
              {
                tool: 'Perplexity',
                context: { en: 'Generating sprint plan', es: 'Generar plan de sprint' },
                prompt: {
                  en: 'Generate a 2-week Scrum sprint plan for implementing user authentication (login, signup, password reset). Break into user stories with acceptance criteria. Team velocity: 20 story points.',
                  es: 'Genera un plan de sprint Scrum de 2 semanas para implementar autenticación de usuario (login, registro, restablecimiento de contraseña). Divide en historias de usuario con criterios de aceptación. Velocidad del equipo: 20 puntos de historia.'
                }
              }
            ]
          },
          howToValidate: {
            what: {
              en: 'Validate whether your methodology is actually helping the team ship better products faster, or just adding process overhead.',
              es: 'Valida si tu metodología realmente está ayudando al equipo a lanzar mejores productos más rápido, o solo está agregando sobrecarga de procesos.'
            },
            methods: {
              en: [
                'Track cycle time: time from idea to shipped feature (should decrease over time).',
                'Measure rework: % of features that need significant changes post-launch (should decrease).',
                'Team clarity survey: ask "Do you understand WHY we\'re building this?" after each sprint.',
                'Retrospective themes: recurring blockers = methodology problem.',
                'User validation rate: % of assumptions validated with real users before build.'
              ],
              es: [
                'Rastrea tiempo de ciclo: tiempo desde idea hasta funcionalidad lanzada (debería disminuir con el tiempo).',
                'Mide retrabajo: % de funcionalidades que necesitan cambios significativos post-lanzamiento (debería disminuir).',
                'Encuesta de claridad del equipo: pregunta "¿Entiendes POR QUÉ estamos construyendo esto?" después de cada sprint.',
                'Temas de retrospectiva: bloqueos recurrentes = problema de metodología.',
                'Tasa de validación de usuario: % de suposiciones validadas con usuarios reales antes de construir.'
              ]
            },
            tools: {
              en: ['Jira (cycle time analytics)', 'Retrium (retro themes)', 'Typeform (team pulse surveys)', 'Amplitude (feature adoption tracking)'],
              es: ['Jira (analítica de tiempo de ciclo)', 'Retrium (temas de retro)', 'Typeform (encuestas de pulso del equipo)', 'Amplitude (seguimiento de adopción de funcionalidades)']
            },
            evidenceExample: {
              en: '"After switching from Waterfall to 2-week Lean UX sprints, our cycle time dropped from 12 weeks to 3 weeks, and post-launch rework decreased by 40% because we validated with users every sprint."',
              es: '"Después de cambiar de Waterfall a sprints Lean UX de 2 semanas, nuestro tiempo de ciclo bajó de 12 semanas a 3 semanas, y el retrabajo post-lanzamiento disminuyó un 40% porque validamos con usuarios cada sprint."'
            }
          },
          quiz: [
            {
              question: {
                en: 'You\'re starting a project with a clear problem but uncertain solution. Which methodology fits best?',
                es: 'Estás comenzando un proyecto con un problema claro pero solución incierta. ¿Qué metodología se ajusta mejor?'
              },
              options: {
                en: [
                  'Waterfall (plan everything upfront)',
                  'Design Sprint (5-day time-boxed prototype + test)',
                  'Scrum (2-week delivery sprints)',
                  'No methodology, just build'
                ],
                es: [
                  'Waterfall (planificar todo por adelantado)',
                  'Design Sprint (prototipo y prueba en 5 días)',
                  'Scrum (sprints de entrega de 2 semanas)',
                  'Sin metodología, solo construir'
                ]
              },
              correctIndex: 1,
              explanation: {
                en: 'Design Sprint is ideal when the problem is clear but the solution is uncertain. It forces rapid prototyping and user validation before committing to delivery. Waterfall assumes you know the solution; Scrum is better for delivery, not discovery.',
                es: 'Design Sprint es ideal cuando el problema es claro pero la solución es incierta. Fuerza el prototipado rápido y la validación de usuario antes de comprometerse con la entrega. Waterfall asume que conoces la solución; Scrum es mejor para entrega, no descubrimiento.'
              }
            },
            {
              question: {
                en: 'Your team runs Scrum but never validates with users before building. What\'s the core issue?',
                es: 'Tu equipo ejecuta Scrum pero nunca valida con usuarios antes de construir. ¿Cuál es el problema central?'
              },
              options: {
                en: [
                  'Scrum is the wrong methodology',
                  'Missing discovery phase (needs Design Thinking or Lean UX complement)',
                  'Team is too small for Scrum',
                  'Should switch to Waterfall'
                ],
                es: [
                  'Scrum es la metodología incorrecta',
                  'Falta fase de descubrimiento (necesita complemento de Design Thinking o Lean UX)',
                  'El equipo es demasiado pequeño para Scrum',
                  'Deberían cambiar a Waterfall'
                ]
              },
              correctIndex: 1,
              explanation: {
                en: 'Scrum alone doesn\'t include discovery. Combining Scrum (delivery) with Lean UX or Design Sprints (discovery) ensures you build the right thing, not just build things right.',
                es: 'Scrum solo no incluye descubrimiento. Combinar Scrum (entrega) con Lean UX o Design Sprints (descubrimiento) asegura que construyas lo correcto, no solo que construyas cosas correctamente.'
              }
            },
            {
              question: {
                en: 'What\'s the best way to know if your methodology is working?',
                es: '¿Cuál es la mejor manera de saber si tu metodología está funcionando?'
              },
              options: {
                en: [
                  'Team follows all the ceremonies',
                  'Cycle time decreases, rework decreases, team clarity increases',
                  'Everyone likes the process',
                  'Process matches what top companies do'
                ],
                es: [
                  'El equipo sigue todas las ceremonias',
                  'El tiempo de ciclo disminuye, el retrabajo disminuye, la claridad del equipo aumenta',
                  'A todos les gusta el proceso',
                  'El proceso coincide con lo que hacen las empresas top'
                ]
              },
              correctIndex: 1,
              explanation: {
                en: 'Methodology success = measurable outcomes (faster delivery, less rework, clearer alignment), not process compliance or popularity. Track cycle time, rework rate, and team clarity surveys.',
                es: 'Éxito de metodología = resultados medibles (entrega más rápida, menos retrabajo, alineación más clara), no cumplimiento de procesos o popularidad. Rastrea tiempo de ciclo, tasa de retrabajo y encuestas de claridad del equipo.'
              }
            }
          ],
          realExample: {
            title: {
              en: 'Claro Admin Platform: New Billing Dashboard',
              es: 'Plataforma Admin de Claro: Nuevo Dashboard de Facturación'
            },
            description: {
              en: 'Scenario: Claro wants to add a billing dashboard for internal admins. Problem is clear (admins need better visibility), but the solution is uncertain (what metrics? what actions?). Timeline: 8 weeks. Team: 1 PM, 2 designers, 4 engineers. Recommended approach: Week 1-2: Design Sprint (prototype 3 dashboard concepts, test with 5 admins). Week 3-8: 3 x 2-week Scrum sprints (build validated design incrementally). Tools: Miro (sprint workshop), Figma (prototypes), Jira (sprint tracking). Outcome: shipped dashboard with 80% adoption in first month because solution was validated before building.',
              es: 'Escenario: Claro quiere agregar un dashboard de facturación para admins internos. El problema es claro (los admins necesitan mejor visibilidad), pero la solución es incierta (¿qué métricas? ¿qué acciones?). Cronograma: 8 semanas. Equipo: 1 PM, 2 diseñadores, 4 ingenieros. Enfoque recomendado: Semana 1-2: Design Sprint (prototipar 3 conceptos de dashboard, probar con 5 admins). Semana 3-8: 3 x sprints Scrum de 2 semanas (construir diseño validado incrementalmente). Herramientas: Miro (taller de sprint), Figma (prototipos), Jira (seguimiento de sprint). Resultado: dashboard lanzado con 80% de adopción en el primer mes porque la solución fue validada antes de construir.'
            },
            company: 'Claro (Case Study)'
          }
        }
      },
      // Individual methodology deep-dives (after Overview gives context)
      designThinkingLesson,
      leanUxLesson,
      designSprintLesson,
      scrumForDesignersLesson,
      userStoriesRequirementsLesson,
      productRoadmappingLesson,
      uxMetricsAdvancedLesson,
      // === PHASE 7: INTERMEDIATE - Testing & Validation ===
      ...uiLessons.filter(lesson => lesson.id === 'accessibility-wcag'),
      ...prototypingLessons,
      ...advancedResearchLessons.filter(lesson => lesson.id === 'customer-journey-map')
    ]
  },
  {
    id: 'advanced',
    title: { en: 'Advanced UX/UI & Strategy', es: 'Estrategia y UX/UI Avanzado' },
    description: { 
      en: 'Deep dive into systems, psychology, strategy, and scalability.', 
      es: 'Profundiza en sistemas, psicología, estrategia y escalabilidad.' 
    },
    topics: [
      // Start with problem definition (Intermediate bridge)
      ...productStrategyLessons.filter(lesson => lesson.id === 'problem-statements'),
      // Advanced research: Service Blueprint
      ...advancedResearchLessons.filter(lesson => lesson.id === 'service-blueprint'),
      // Advanced: Design Systems
      {
        id: 'atomic-design',
        title: { en: 'Atomic Design', es: 'Diseño Atómico' },
        description: { en: 'Methodology for creating scalable design systems.', es: 'Metodología para crear sistemas de diseño escalables.' },
        status: 'advanced',
        timeEstimate: '2h 15m',
        reference: { en: 'Atomic Design - Brad Frost', es: 'Atomic Design - Brad Frost' },
        referenceLink: 'https://bradfrost.com/blog/post/atomic-web-design/',
        content: {
          definition: {
            en: 'Atomic design is a methodology composed of five distinct stages working together to create interface design systems in a more deliberate and hierarchical manner.',
            es: 'El diseño atómico es una metodología compuesta por cinco etapas distintas que trabajan juntas para crear sistemas de diseño de interfaz de una manera más deliberada y jerárquica.'
          },
          why: {
            en: 'It helps in building consistent and scalable design systems by breaking down interfaces into their smallest components.',
            es: 'Ayuda a construir sistemas de diseño consistentes y escalables descomponiendo las interfaces en sus componentes más pequeños.'
          },
          keyPrinciples: {
            en: ['Design Tokens (The sub-atomic values: color, spacing).', 'Atoms (Labels, Inputs).', 'Molecules (Search Form).', 'Organisms (Header).', 'Templates & Pages.'],
            es: ['Design Tokens (Valores subatómicos: color, espaciado).', 'Átomos (Etiquetas, Inputs).', 'Moléculas (Formulario de búsqueda).', 'Organismos (Cabecera).', 'Plantillas y Páginas.']
          },
          commonMistakes: {
            en: ['Over-complicating the classification.', 'Ignoring the context of usage.', 'Designing pages before components.'],
            es: ['Complicar demasiado la clasificación.', 'Ignorar el contexto de uso.', 'Diseñar páginas antes que componentes.']
          },
          howToApply: {
            steps: [
              {
                name: { en: 'Audit Interface', es: 'Auditar Interfaz' },
                description: { en: 'Screenshot all instances of buttons, inputs, etc.', es: 'Haz capturas de pantalla de todas las instancias de botones, inputs, etc.' }
              },
              {
                name: { en: 'Define Atoms', es: 'Definir Átomos' },
                description: { en: 'Standardize colors, type, and basic inputs.', es: 'Estandariza colores, tipografía e inputs básicos.' }
              },
              {
                name: { en: 'Construct Molecules', es: 'Construir Moléculas' },
                description: { en: 'Combine atoms into usable blocks (e.g. Input + Label + Error).', es: 'Combina átomos en bloques utilizables (ej. Input + Etiqueta + Error).' }
              }
            ]
          },
          aiInPractice: {
            description: { en: 'AI can help you document your components and suggest variants.', es: 'La IA puede ayudarte a documentar tus componentes y sugerir variantes.' },
            prompts: [
              {
                tool: 'ChatGPT',
                context: { en: 'Documenting a Button component', es: 'Documentando un componente Botón' },
                prompt: { en: 'Write documentation for a "Primary Button" component. Include: Usage rules, Dos and Don\'ts, and state variations (hover, active, disabled).', es: 'Escribe la documentación para un componente "Botón Primario". Incluye: Reglas de uso, Qué hacer y Qué no hacer, y variaciones de estado (hover, active, disabled).' }
              }
            ]
          }
        }
      },
      // Figma Mastery: Components, Variants, Auto Layout, Variables, Tokens
      figmaMasteryLesson,
      {
        id: 'microinteractions',
        title: { en: 'Microinteractions', es: 'Microinteracciones' },
        description: { en: 'The details that make the product engaging and alive.', es: 'Los detalles que hacen que el producto sea atractivo y vivo.' },
        status: 'advanced',
        timeEstimate: '1h 30m',
        reference: { en: 'Microinteractions - Dan Saffer + NN/g', es: 'Microinteractions - Dan Saffer + NN/g' },
        referenceLink: 'https://www.nngroup.com/articles/microinteractions/',
        content: {
          definition: {
            en: 'Microinteractions are contained product moments that revolve around a single use case—they have one main task. Examples include liking a post, toggling a setting, receiving a notification, or seeing a loading state. They are the "feel" behind the functional elements of a product.',
            es: 'Las microinteracciones son momentos contenidos del producto que giran en torno a un solo caso de uso; tienen una tarea principal. Ejemplos incluyen dar me gusta a una publicacion, alternar una configuracion, recibir una notificacion o ver un estado de carga. Son la "sensacion" detras de los elementos funcionales de un producto.'
          },
          why: {
            en: 'Microinteractions provide feedback, explain function, prevent error, and add a layer of personality and delight. They are the difference between a product that feels alive and one that feels flat. Research shows that perceived performance matters more than actual performance—well-crafted microinteractions make a 2-second wait feel instant.',
            es: 'Las microinteracciones proporcionan retroalimentacion, explican funciones, previenen errores y agregan una capa de personalidad y deleite. Son la diferencia entre un producto que se siente vivo y uno plano. La investigacion muestra que el rendimiento percibido importa mas que el real—microinteracciones bien elaboradas hacen que una espera de 2 segundos se sienta instantanea.'
          },
          keyPrinciples: {
            en: [
              'Trigger: What starts the interaction—user-initiated (tap, click, swipe) or system-initiated (notification, timer).',
              'Rules: The logic that determines what happens once triggered. Example: a toggle switch has binary ON/OFF rules.',
              'Feedback: The visual, audio, or haptic response the user receives. The user must always know what happened.',
              'Loops & Modes: Meta-rules that govern long-term behavior. Does the animation repeat? Does it change over time?',
              'Duration matters: 100-300ms for most UI transitions, 300-500ms for complex animations, never over 1 second for feedback.',
              'Easing functions: Use ease-out for enter animations (fast start, gentle stop) and ease-in for exit. Never use linear for UI.'
            ],
            es: [
              'Disparador: Que inicia la interaccion—iniciado por usuario (toque, clic, deslizamiento) o por sistema (notificacion, temporizador).',
              'Reglas: La logica que determina que sucede una vez activado. Ejemplo: un toggle tiene reglas binarias ON/OFF.',
              'Retroalimentacion: La respuesta visual, auditiva o haptica que recibe el usuario. Siempre debe saber que paso.',
              'Bucles y Modos: Meta-reglas que gobiernan el comportamiento a largo plazo. Se repite la animacion? Cambia con el tiempo?',
              'La duracion importa: 100-300ms para transiciones UI, 300-500ms para animaciones complejas, nunca mas de 1 segundo para feedback.',
              'Funciones de easing: Usa ease-out para entradas (inicio rapido, parada suave) y ease-in para salidas. Nunca uses linear para UI.'
            ]
          },
          commonMistakes: {
            en: [
              'Annoying or slow animations: Anything over 400ms for simple feedback feels sluggish.',
              'Distracting from the main task: Fancy animations that steal attention from the user\'s goal.',
              'Inconsistent behavior: A button that bounces on one page but not on another breaks expectations.',
              'No feedback at all: Users click and nothing happens—did it work?',
              'Ignoring reduced motion preferences: Not respecting prefers-reduced-motion is an accessibility failure.'
            ],
            es: [
              'Animaciones molestas o lentas: Cualquier cosa sobre 400ms para feedback simple se siente pesada.',
              'Distraer de la tarea principal: Animaciones sofisticadas que roban atencion del objetivo del usuario.',
              'Comportamiento inconsistente: Un boton que rebota en una pagina pero no en otra rompe expectativas.',
              'Sin retroalimentacion: El usuario hace clic y nada pasa—funciono?',
              'Ignorar movimiento reducido: No respetar prefers-reduced-motion es una falla de accesibilidad.'
            ]
          },
          howToApply: {
            steps: [
              {
                name: { en: 'Identify the Trigger', es: 'Identificar el Disparador' },
                description: { en: 'User initiated (click) or System initiated (notification)?', es: '¿Iniciado por usuario (clic) o iniciado por sistema (notificación)?' }
              },
              {
                name: { en: 'Design Feedback', es: 'Diseñar Retroalimentación' },
                description: { en: 'Visual, audio, or haptic response.', es: 'Respuesta visual, auditiva o háptica.' }
              },
              {
                name: { en: 'Consider Duration', es: 'Considerar Duración' },
                description: { en: 'Keep it under 400ms for interface elements.', es: 'Mantenlo por debajo de 400ms para elementos de interfaz.' }
              }
            ]
          },
          aiInPractice: {
            description: { en: 'Use AI to brainstorm creative ideas for feedback animations.', es: 'Usa IA para generar ideas creativas para animaciones de retroalimentación.' },
            prompts: [
              {
                tool: 'ChatGPT',
                context: { en: 'Designing a success state', es: 'Diseñando un estado de éxito' },
                prompt: { en: 'Suggest 3 creative ways to visually indicate a "Success" state when a user completes a daily goal, without using a standard checkmark.', es: 'Sugiere 3 formas creativas de indicar visualmente un estado de "Éxito" cuando un usuario completa un objetivo diario, sin usar una marca de verificación estándar.' }
              }
            ]
          },
          deliverables: {
            description: { en: 'Microinteraction design documentation.', es: 'Documentacion de diseno de microinteracciones.' },
            items: {
              en: [
                'Interaction map: Catalog of all microinteractions with trigger/rules/feedback/loops',
                'Animation specs: Duration (ms), easing curve, delay, and animated properties',
                'State diagrams: Visual flow of all states (idle, hover, active, loading, success, error)',
                'Motion tokens: Reusable timing and easing values as design tokens',
                'Accessibility notes: Reduced motion alternatives and ARIA live regions'
              ],
              es: [
                'Mapa de interacciones: Catalogo de microinteracciones con disparador/reglas/feedback/bucles',
                'Specs de animacion: Duracion (ms), curva de easing, delay y propiedades animadas',
                'Diagramas de estado: Flujo visual de todos los estados',
                'Tokens de movimiento: Valores reutilizables de timing y easing como design tokens',
                'Notas de accesibilidad: Alternativas de movimiento reducido y regiones ARIA live'
              ]
            }
          },
          practicalTools: {
            design: {
              en: ['Figma Smart Animate', 'Principle', 'ProtoPie', 'After Effects + Lottie'],
              es: ['Figma Smart Animate', 'Principle', 'ProtoPie', 'After Effects + Lottie']
            },
            research: {
              en: ['User testing with think-aloud', 'A/B testing animation variants', 'Heatmaps', 'Reduced-motion toggle testing'],
              es: ['Testing con protocolo pensar en voz alta', 'A/B testing de variantes', 'Heatmaps', 'Testing con toggle de movimiento reducido']
            },
            handoff: {
              en: ['Lottie files', 'CSS/Motion specs in Figma', 'Storybook interactive docs', 'Drag & swipe gesture specs'],
              es: ['Archivos Lottie', 'Specs CSS/Motion en Figma', 'Documentacion interactiva Storybook', 'Specs de gestos de arrastre y deslizamiento']
            }
          },
          howToValidate: {
            what: { en: 'Validate that microinteractions improve perceived usability and provide clear feedback.', es: 'Validar que las microinteracciones mejoran usabilidad percibida y dan retroalimentacion clara.' },
            methods: {
              en: ['The 10-time test: Play the animation 10 times. Still pleasant?', 'Task completion: Does it help users understand what happened?', 'Perceived performance: Does a skeleton loader shorten the perceived wait?', 'Accessibility: Enable prefers-reduced-motion and verify state communication.'],
              es: ['Prueba de las 10 veces: Reproduce la animacion 10 veces. Sigue agradable?', 'Completacion de tarea: Ayuda a entender que paso?', 'Rendimiento percibido: Un skeleton loader acorta la espera percibida?', 'Accesibilidad: Habilita prefers-reduced-motion y verifica comunicacion de estado.']
            },
            tools: { en: ['Chrome DevTools Animations panel', 'Accessibility Insights', 'Maze'], es: ['Panel de Animaciones Chrome DevTools', 'Accessibility Insights', 'Maze'] },
            evidenceExample: { en: 'Facebook tested their Like button animation extensively. The bouncing heart with particle burst increased engagement by 6% vs. a simple color toggle.', es: 'Facebook probo su animacion del Me Gusta extensivamente. El corazon rebotando con particulas aumento engagement 6% vs. cambio de color simple.' }
          },
          quiz: [
            {
              question: { en: 'What are the four parts of a microinteraction according to Dan Saffer?', es: 'Cuales son las cuatro partes de una microinteraccion segun Dan Saffer?' },
              options: { en: ['Input, Processing, Output, Storage', 'Trigger, Rules, Feedback, Loops & Modes', 'Design, Develop, Test, Deploy', 'Hover, Click, Animate, Reset'], es: ['Entrada, Procesamiento, Salida, Almacenamiento', 'Disparador, Reglas, Retroalimentacion, Bucles y Modos', 'Disenar, Desarrollar, Probar, Desplegar', 'Hover, Clic, Animar, Reiniciar'] },
              correctIndex: 1,
              explanation: { en: 'Trigger (what initiates), Rules (what happens), Feedback (what user perceives), Loops & Modes (meta-rules for long-term behavior).', es: 'Disparador (que lo inicia), Reglas (que sucede), Retroalimentacion (que percibe el usuario), Bucles y Modos (meta-reglas a largo plazo).' }
            },
            {
              question: { en: 'What is the ideal duration range for most UI transitions?', es: 'Cual es el rango de duracion ideal para la mayoria de transiciones UI?' },
              options: { en: ['10-50ms', '100-300ms', '500-1000ms', '1-3 seconds'], es: ['10-50ms', '100-300ms', '500-1000ms', '1-3 segundos'] },
              correctIndex: 1,
              explanation: { en: '100-300ms is the sweet spot for smooth, intentional UI transitions.', es: '100-300ms es el punto ideal para transiciones UI suaves e intencionales.' }
            }
          ],
          realExample: {
            title: { en: 'Facebook Like Button Evolution', es: 'Evolucion del Boton Me Gusta de Facebook' },
            description: { en: 'Facebook evolved from a simple blue highlight to animated "Reactions" with bouncing emojis. Trigger (long press), Rules (reveal picker), Feedback (spring animation + particles), Loops (persists on re-tap). Increased reaction usage 6x.', es: 'Facebook evoluciono de un resaltado azul a "Reacciones" animadas con emojis. Disparador (presion larga), Reglas (revelar selector), Retroalimentacion (animacion de resorte + particulas), Bucles (persiste al re-tocar). Aumento el uso 6x.' },
            company: 'Meta (Facebook)'
          }
        }
      },
       {
        id: 'accessibility',
        title: { en: 'Advanced Accessibility Auditing', es: 'Auditoría Avanzada de Accesibilidad' },
        description: { en: 'Deep-dive into accessibility auditing: code patterns, screen readers, automated testing, and CI/CD integration.', es: 'Inmersión profunda en auditoría de accesibilidad: patrones de código, lectores de pantalla, pruebas automatizadas e integración CI/CD.' },
        status: 'advanced',
        timeEstimate: '3h',
        reference: { en: 'Accessibility for Everyone - Laura Kalbag', es: 'Accessibility for Everyone - Laura Kalbag' },
        referenceLink: 'https://www.w3.org/WAI/fundamentals/accessibility-intro/',
        content: {
          definition: {
            en: 'Advanced accessibility auditing goes beyond basic POUR compliance to cover semantic HTML patterns, ARIA roles and states, screen reader testing workflows, automated CI/CD accessibility checks, and building organizational accessibility culture.',
            es: 'La auditoría avanzada de accesibilidad va más allá del cumplimiento básico POUR para cubrir patrones de HTML semántico, roles y estados ARIA, flujos de prueba con lectores de pantalla, verificaciones de accesibilidad automatizadas en CI/CD y la construcción de una cultura organizacional de accesibilidad.'
          },
          why: {
            en: 'Knowing POUR principles is not enough — you need to implement them correctly in code, test with real assistive technology, and build sustainable processes so accessibility does not regress over time.',
            es: 'Conocer los principios POUR no es suficiente — necesitas implementarlos correctamente en código, probar con tecnología de asistencia real y construir procesos sostenibles para que la accesibilidad no retroceda con el tiempo.'
          },
          keyPrinciples: {
            en: [
              'Semantic HTML first: Use native elements (<button>, <nav>, <main>) before ARIA roles',
              'ARIA roles and states: aria-label, aria-describedby, aria-expanded, aria-live for dynamic content',
              'Focus management: Programmatic focus control in modals, SPAs, and dynamic content',
              'Screen reader testing: Test with NVDA, JAWS, VoiceOver — automated tools miss 50% of issues',
              'Automated testing in CI/CD: axe-core, Pa11y, Lighthouse CI for regression prevention',
              'Color is never the only indicator: Always pair color with icons, text, or patterns'
            ],
            es: [
              'HTML semántico primero: Usa elementos nativos (<button>, <nav>, <main>) antes de roles ARIA',
              'Roles y estados ARIA: aria-label, aria-describedby, aria-expanded, aria-live para contenido dinámico',
              'Gestión de foco: Control programático del foco en modales, SPAs y contenido dinámico',
              'Pruebas con lector de pantalla: Prueba con NVDA, JAWS, VoiceOver — herramientas automatizadas pierden 50% de problemas',
              'Pruebas automatizadas en CI/CD: axe-core, Pa11y, Lighthouse CI para prevenir regresiones',
              'El color nunca es el único indicador: Siempre combina color con íconos, texto o patrones'
            ]
          },
          commonMistakes: {
            en: [
              'Using ARIA when native HTML would suffice (no-ARIA is better than bad ARIA)',
              'Only testing with automated tools — they catch at most 30-50% of real issues',
              'Not testing with actual screen readers (VoiceOver, NVDA, JAWS)',
              'Trapping keyboard focus in modals or dropdowns without Esc escape',
              'Assuming "we passed Lighthouse" means accessible — Lighthouse catches only ~30% of WCAG issues'
            ],
            es: [
              'Usar ARIA cuando HTML nativo sería suficiente (sin ARIA es mejor que ARIA mal implementado)',
              'Solo probar con herramientas automatizadas — capturan como máximo 30-50% de los problemas reales',
              'No probar con lectores de pantalla reales (VoiceOver, NVDA, JAWS)',
              'Atrapar el foco del teclado en modales o dropdowns sin escape con Esc',
              'Asumir que "pasamos Lighthouse" significa accesible — Lighthouse captura solo ~30% de problemas WCAG'
            ]
          },
          howToApply: {
            steps: [
              {
                name: { en: 'Run Automated Audit', es: 'Ejecutar Auditoría Automatizada' },
                description: { en: 'Use axe DevTools or Lighthouse to catch low-hanging fruit: missing alt text, contrast failures, missing labels. Fix these first.', es: 'Usa axe DevTools o Lighthouse para capturar lo fácil: texto alt faltante, fallos de contraste, etiquetas faltantes. Corrige estos primero.' }
              },
              {
                name: { en: 'Keyboard-Only Navigation', es: 'Navegación Solo con Teclado' },
                description: { en: 'Unplug your mouse. Tab through the entire interface. Check: Can you reach all interactive elements? Is focus visible? Can you escape modals with Esc?', es: 'Desconecta tu ratón. Navega con Tab por toda la interfaz. Verifica: ¿Puedes alcanzar todos los elementos interactivos? ¿El foco es visible? ¿Puedes escapar de modales con Esc?' }
              },
              {
                name: { en: 'Screen Reader Testing', es: 'Pruebas con Lector de Pantalla' },
                description: { en: 'Test with VoiceOver (Mac) or NVDA (Windows). Navigate key flows. Does every interactive element have a clear announcement? Are dynamic updates announced via aria-live?', es: 'Prueba con VoiceOver (Mac) o NVDA (Windows). Navega flujos clave. ¿Cada elemento interactivo tiene un anuncio claro? ¿Las actualizaciones dinámicas se anuncian vía aria-live?' }
              },
              {
                name: { en: 'Review Code Patterns', es: 'Revisar Patrones de Código' },
                description: { en: 'Audit semantic HTML usage. Replace <div onclick> with <button>. Add aria-label where visual context is missing. Ensure forms use <label> with for/id.', es: 'Audita el uso de HTML semántico. Reemplaza <div onclick> con <button>. Agrega aria-label donde falta contexto visual. Asegura que formularios usen <label> con for/id.' }
              },
              {
                name: { en: 'Set Up CI/CD Checks', es: 'Configurar Verificaciones CI/CD' },
                description: { en: 'Add axe-core or Pa11y to your CI pipeline. Fail builds on critical accessibility regressions. Monitor Lighthouse a11y score trends.', es: 'Agrega axe-core o Pa11y a tu pipeline CI. Falla builds en regresiones de accesibilidad críticas. Monitorea tendencias del score a11y de Lighthouse.' }
              }
            ]
          },
          visualExamples: {
            description: { 
              en: 'Real examples of accessible vs inaccessible web components:', 
              es: 'Ejemplos reales de componentes web accesibles vs inaccesibles:' 
            },
            examples: [
              {
                title: { en: '✅ Accessible Search Bar', es: '✅ Barra de Búsqueda Accesible' },
                image: 'https://images.unsplash.com/photo-1762330467019-f38839ad4b0f?w=800',
                description: { 
                  en: 'Has visible label, role="search", proper ARIA labels. Color contrast 7:1 (WCAG AAA). Works with keyboard (Tab + Enter) and screen readers announce "Search products, search box".',
                  es: 'Tiene etiqueta visible, role="search", labels ARIA apropiados. Contraste de color 7:1 (WCAG AAA). Funciona con teclado (Tab + Enter) y lectores de pantalla anuncian "Buscar productos, cuadro de búsqueda".'
                }
              },
              {
                title: { en: '❌ Inaccessible Search Bar', es: '❌ Barra de Búsqueda Inaccesible' },
                description: { 
                  en: 'No label, no role, placeholder-only text, div instead of button, no keyboard support. Contrast 2.1:1 (fails WCAG). Screen readers say "unlabeled edit field" - users don\'t know what to search for.',
                  es: 'Sin etiqueta, sin role, solo placeholder, div en lugar de button, sin soporte de teclado. Contraste 2.1:1 (no cumple WCAG). Lectores de pantalla dicen "campo de edición sin etiquetar" - usuarios no saben qué buscar.'
                }
              },
              {
                title: { en: '✅ Accessible Button', es: '✅ Botón Accesible' },
                image: 'https://images.unsplash.com/photo-1586418328152-c61f282202c1?w=800',
                description: { 
                  en: 'Uses semantic <button>, has clear text, high contrast (8.59:1 WCAG AAA). Keyboard accessible (Tab + Space/Enter). Focus visible with outline. Screen reader: "Add to cart, button".',
                  es: 'Usa <button> semántico, tiene texto claro, alto contraste (8.59:1 WCAG AAA). Accesible con teclado (Tab + Espacio/Enter). Foco visible con outline. Lector de pantalla: "Agregar al carrito, botón".'
                }
              },
              {
                title: { en: '❌ Inaccessible Button', es: '❌ Botón Inaccesible' },
                description: { 
                  en: 'Uses <div> instead of <button>, low contrast (2.3:1), no keyboard access, no focus indicator. Cannot be activated with keyboard. Screen reader doesn\'t announce it as interactive.',
                  es: 'Usa <div> en lugar de <button>, bajo contraste (2.3:1), sin acceso de teclado, sin indicador de foco. No se puede activar con teclado. Lector de pantalla no lo anuncia como interactivo.'
                }
              },
              {
                title: { en: '✅ Accessible Form Input', es: '✅ Campo de Formulario Accesible' },
                image: 'https://images.unsplash.com/photo-1740818576322-923d300dcb95?w=800',
                description: { 
                  en: 'Label properly associated with for/id. ARIA attributes for validation. Help text linked with aria-describedby. Clear focus state. Screen reader: "Email Address, required, edit text, We\'ll never share your email".',
                  es: 'Label correctamente asociado con for/id. Atributos ARIA para validación. Texto de ayuda vinculado con aria-describedby. Estado de foco claro. Lector de pantalla: "Dirección de email, requerido, editar texto, Nunca compartiremos tu email".'
                }
              },
              {
                title: { en: '❌ Inaccessible Form Input', es: '❌ Campo de Formulario Inaccesible' },
                description: { 
                  en: 'No <label>, uses placeholder as label (disappears when typing). No ARIA. Help text not associated. Screen reader: "Edit text" - user has no context about what to enter.',
                  es: 'Sin <label>, usa placeholder como etiqueta (desaparece al escribir). Sin ARIA. Texto de ayuda no asociado. Lector de pantalla: "Editar texto" - usuario no tiene contexto sobre qué ingresar.'
                }
              }
            ]
          },
          codeExamples: {
            description: { 
              en: 'Code snippets showing accessible vs inaccessible patterns:', 
              es: 'Fragmentos de código mostrando patrones accesibles vs inaccesibles:' 
            },
            examples: [
              {
                title: { en: '✅ Accessible Button', es: '✅ Botón Accesible' },
                code: `<!-- Good: Semantic HTML with proper ARIA -->
<button 
  type="button" 
  aria-label="Close dialog"
  class="btn-close"
>
  <span aria-hidden="true">×</span>
</button>`,
                explanation: { 
                  en: 'Uses semantic <button>, has descriptive aria-label, and hides decorative icon from screen readers.',
                  es: 'Usa <button> semántico, tiene aria-label descriptivo y oculta el ícono decorativo de lectores de pantalla.'
                }
              },
              {
                title: { en: '❌ Inaccessible Button', es: '❌ Botón Inaccesible' },
                code: `<!-- Bad: div as button, no labels -->
<div 
  class="btn-close" 
  onclick="closeDialog()"
>
  ×
</div>`,
                explanation: { 
                  en: 'Uses <div> instead of <button>, no keyboard support, no screen reader context. Violates WCAG 4.1.2.',
                  es: 'Usa <div> en lugar de <button>, sin soporte de teclado, sin contexto para lectores de pantalla. Viola WCAG 4.1.2.'
                }
              },
              {
                title: { en: '✅ Accessible Form', es: '✅ Formulario Accesible' },
                code: `<!-- Good: Labels, validation, error messages -->
<label for="email">
  Email Address
  <span aria-label="required">*</span>
</label>
<input 
  type="email" 
  id="email" 
  name="email"
  aria-required="true"
  aria-describedby="email-error"
  aria-invalid="false"
/>
<span id="email-error" role="alert"></span>`,
                explanation: { 
                  en: 'Properly associated label, ARIA attributes for validation, error message with role="alert".',
                  es: 'Etiqueta correctamente asociada, atributos ARIA para validación, mensaje de error con role="alert".'
                }
              },
              {
                title: { en: '❌ Inaccessible Form', es: '❌ Formulario Inaccesible' },
                code: `<!-- Bad: No labels, placeholder as label -->
<input 
  type="email" 
  placeholder="Email Address*"
/>
<span class="error">Invalid email</span>`,
                explanation: { 
                  en: 'No <label>, uses placeholder as label (disappears on input), error not announced to screen readers. Violates WCAG 3.3.2.',
                  es: 'Sin <label>, usa placeholder como etiqueta (desaparece al escribir), error no anunciado a lectores de pantalla. Viola WCAG 3.3.2.'
                }
              },
              {
                title: { en: '✅ Accessible Navigation', es: '✅ Navegación Accesible' },
                code: `<!-- Good: Skip link, semantic nav, ARIA -->
<a href="#main-content" class="skip-link">
  Skip to main content
</a>
<nav aria-label="Main navigation">
  <ul>
    <li><a href="/" aria-current="page">Home</a></li>
    <li><a href="/about">About</a></li>
  </ul>
</nav>
<main id="main-content" tabindex="-1">`,
                explanation: { 
                  en: 'Skip link for keyboard users, semantic <nav>, aria-current for current page, focusable main content.',
                  es: 'Skip link para usuarios de teclado, <nav> semántico, aria-current para página actual, contenido principal enfocable.'
                }
              },
              {
                title: { en: '❌ Inaccessible Navigation', es: '❌ Navegación Inaccesible' },
                code: `<!-- Bad: No skip link, div soup -->
<div class="nav">
  <div onclick="go('/')">Home</div>
  <div onclick="go('/about')">About</div>
</div>`,
                explanation: { 
                  en: 'No skip link, divs instead of semantic HTML, no keyboard support. Screen readers cannot identify navigation.',
                  es: 'Sin skip link, divs en lugar de HTML semántico, sin soporte de teclado. Lectores de pantalla no pueden identificar la navegación.'
                }
              }
            ]
          },
          tools: {
            description: { 
              en: 'Essential tools for testing and ensuring accessibility compliance:', 
              es: 'Herramientas esenciales para probar y asegurar cumplimiento de accesibilidad:' 
            },
            categories: [
              {
                name: { en: 'Browser Extensions', es: 'Extensiones de Navegador' },
                tools: [
                  {
                    name: 'axe DevTools',
                    description: { 
                      en: 'Free browser extension for automated accessibility testing. Detects WCAG violations.',
                      es: 'Extensión gratuita para pruebas automatizadas de accesibilidad. Detecta violaciones WCAG.'
                    },
                    link: 'https://www.deque.com/axe/devtools/'
                  },
                  {
                    name: 'WAVE',
                    description: { 
                      en: 'Visual feedback tool that shows accessibility errors directly on the page.',
                      es: 'Herramienta de retroalimentación visual que muestra errores de accesibilidad directamente en la página.'
                    },
                    link: 'https://wave.webaim.org/'
                  },
                  {
                    name: 'Lighthouse',
                    description: { 
                      en: 'Built into Chrome DevTools. Provides accessibility audit scores and recommendations.',
                      es: 'Integrado en Chrome DevTools. Proporciona puntuaciones de auditoría de accesibilidad y recomendaciones.'
                    },
                    link: 'https://developers.google.com/web/tools/lighthouse'
                  }
                ]
              },
              {
                name: { en: 'Design Tools', es: 'Herramientas de Diseño' },
                tools: [
                  {
                    name: 'Stark (Figma Plugin)',
                    description: { 
                      en: 'Contrast checker, color blind simulator, focus order tool. Essential for designers.',
                      es: 'Verificador de contraste, simulador de daltonismo, herramienta de orden de foco. Esencial para diseñadores.'
                    },
                    link: 'https://www.getstark.co/'
                  },
                  {
                    name: 'Contrast Checker',
                    description: { 
                      en: 'WebAIM tool to verify color contrast ratios meet WCAG AA/AAA standards.',
                      es: 'Herramienta de WebAIM para verificar que los ratios de contraste de color cumplan los estándares WCAG AA/AAA.'
                    },
                    link: 'https://webaim.org/resources/contrastchecker/'
                  },
                  {
                    name: 'Color Oracle',
                    description: { 
                      en: 'Free color blindness simulator for Mac, Windows, and Linux.',
                      es: 'Simulador gratuito de daltonismo para Mac, Windows y Linux.'
                    },
                    link: 'https://colororacle.org/'
                  }
                ]
              },
              {
                name: { en: 'Screen Readers', es: 'Lectores de Pantalla' },
                tools: [
                  {
                    name: 'NVDA (Windows)',
                    description: { 
                      en: 'Free, open-source screen reader. Essential for testing on Windows.',
                      es: 'Lector de pantalla gratuito y de código abierto. Esencial para pruebas en Windows.'
                    },
                    link: 'https://www.nvaccess.org/'
                  },
                  {
                    name: 'VoiceOver (Mac/iOS)',
                    description: { 
                      en: 'Built-in screen reader for Apple devices. Cmd+F5 to activate on Mac.',
                      es: 'Lector de pantalla integrado para dispositivos Apple. Cmd+F5 para activar en Mac.'
                    },
                    link: 'https://www.apple.com/accessibility/voiceover/'
                  },
                  {
                    name: 'JAWS',
                    description: { 
                      en: 'Most popular commercial screen reader. Industry standard for enterprise testing.',
                      es: 'Lector de pantalla comercial más popular. Estándar de la industria para pruebas empresariales.'
                    },
                    link: 'https://www.freedomscientific.com/products/software/jaws/'
                  }
                ]
              },
              {
                name: { en: 'Automated Testing', es: 'Pruebas Automatizadas' },
                tools: [
                  {
                    name: 'Pa11y',
                    description: { 
                      en: 'Command-line tool for automated accessibility testing in CI/CD pipelines.',
                      es: 'Herramienta de línea de comandos para pruebas automatizadas de accesibilidad en pipelines CI/CD.'
                    },
                    link: 'https://pa11y.org/'
                  },
                  {
                    name: 'Axe-core',
                    description: { 
                      en: 'JavaScript library for automated WCAG testing. Can be integrated into unit tests.',
                      es: 'Biblioteca JavaScript para pruebas WCAG automatizadas. Se puede integrar en unit tests.'
                    },
                    link: 'https://github.com/dequelabs/axe-core'
                  },
                  {
                    name: 'Accessibility Insights',
                    description: { 
                      en: 'Microsoft tool for automated and manual testing with guided assessments.',
                      es: 'Herramienta de Microsoft para pruebas automatizadas y manuales con evaluaciones guiadas.'
                    },
                    link: 'https://accessibilityinsights.io/'
                  }
                ]
              }
            ]
          },
          aiInPractice: {
            description: { en: 'AI can help check for compliance and generate alt text for images.', es: 'La IA puede ayudar a verificar el cumplimiento y generar texto alternativo para imágenes.' },
            prompts: [
              {
                tool: 'ChatGPT (Vision)',
                context: { en: 'Generating Alt Text', es: 'Generando Texto Alternativo' },
                prompt: { en: 'Write concise Alt Text for this image for a screen reader user. Focus on the informational content of the image.', es: 'Escribe un Texto Alternativo conciso para esta imagen para un usuario de lector de pantalla. Enfócate en el contenido informativo de la imagen.' }
              },
              {
                tool: 'Claude',
                context: { en: 'Accessibility Code Review', es: 'Revisión de Código de Accesibilidad' },
                prompt: { en: 'Review this HTML code for WCAG 2.1 AA compliance. Identify accessibility issues and suggest fixes with code examples.', es: 'Revisa este código HTML para cumplimiento WCAG 2.1 AA. Identifica problemas de accesibilidad y sugiere correcciones con ejemplos de código.' }
              }
            ]
          }
        }
      },
      // Heuristic Analysis — professional methodology for evaluating interfaces
      heuristicAnalysisLesson,
      // Edge & System States — designing beyond the happy path
      edgeAndSystemStatesLesson,
      {
        id: 'ux-psychology',
        title: { en: 'UX Psychology', es: 'Psicología UX' },
        description: { en: 'Understanding human behavior and decision making.', es: 'Entendiendo el comportamiento humano y la toma de decisiones.' },
        status: 'advanced',
        timeEstimate: '2h',
        reference: { en: '100 Things Every Designer Needs to Know About People - Susan Weinschenk', es: '100 cosas que todo diseñador debe saber sobre las personas - Susan Weinschenk' },
        referenceLink: 'https://lawsofux.com/',
        content: {
          definition: {
            en: 'Applying principles of cognitive psychology to design to predict and influence user behavior.',
            es: 'Aplicar principios de psicología cognitiva al diseño para predecir e influir en el comportamiento del usuario.'
          },
          why: {
            en: 'Design is ultimately about people. Understanding how they see, read, remember, and think is crucial.',
            es: 'El diseño se trata, en última instancia, de personas. Entender cómo ven, leen, recuerdan y piensan es crucial.'
          },
          keyPrinciples: {
            en: ['People don\'t read, they scan.', 'People can only hold 3-4 items in working memory.', 'People are motivated by progress (Gamification).', 'Peripheral vision decides where to look.'],
            es: ['La gente no lee, escanea.', 'La gente solo puede retener 3-4 ítems en la memoria de trabajo.', 'La gente se motiva con el progreso (Gamificación).', 'La visión periférica decide dónde mirar.']
          },
          commonMistakes: {
            en: ['Overloading cognitive load.', 'Assuming rational decision making.', 'Ignoring emotional states.'],
            es: ['Sobrecargar la carga cognitiva.', 'Asumir una toma de decisiones racional.', 'Ignorar los estados emocionales.']
          },
          howToApply: {
            steps: [
              {
                name: { en: 'Reduce Choices', es: 'Reducir Opciones' },
                description: { en: 'Apply Hick\'s Law. Remove anything that isn\'t necessary.', es: 'Aplica la Ley de Hick. Elimina todo lo que no sea necesario.' }
              },
              {
                name: { en: 'Chunk Information', es: 'Agrupar Información' },
                description: { en: 'Break long forms into steps (Miller\'s Law).', es: 'Divide formularios largos en pasos (Ley de Miller).' }
              },
              {
                name: { en: 'Use Familiar Patterns', es: 'Usar Patrones Familiares' },
                description: { en: 'Don\'t reinvent the wheel. Jakob\'s Law.', es: 'No reinventes la rueda. Ley de Jakob.' }
              }
            ]
          },
          deliverables: {
            description: {
              en: 'Artifacts that demonstrate the application of psychology principles in your design process.',
              es: 'Artefactos que demuestran la aplicacion de principios psicologicos en tu proceso de diseno.'
            },
            items: {
              en: [
                'Cognitive Load Audit: Annotated screens highlighting areas of high vs low cognitive load with improvement suggestions',
                'Psychology Principles Map: Document mapping each design decision to a specific psychology law (Hick, Fitts, Miller, Jakob)',
                'Attention Heatmap Analysis: Predicted eye-tracking patterns for key flows showing where users will look first',
                'Progress & Gamification Strategy: Framework defining how progress indicators, badges, and streaks will drive engagement',
                'Scanning Pattern Optimization: Before/after comparison of content restructured for F-pattern scanning'
              ],
              es: [
                'Auditoria de Carga Cognitiva: Pantallas anotadas resaltando areas de alta vs baja carga cognitiva con sugerencias de mejora',
                'Mapa de Principios Psicologicos: Documento mapeando cada decision de diseno a una ley psicologica especifica (Hick, Fitts, Miller, Jakob)',
                'Analisis de Mapa de Calor de Atencion: Patrones de eye-tracking predichos para flujos clave mostrando donde miraran los usuarios primero',
                'Estrategia de Progreso y Gamificacion: Framework definiendo como indicadores de progreso, insignias y rachas impulsaran el engagement',
                'Optimizacion de Patron de Escaneo: Comparacion antes/despues del contenido reestructurado para escaneo en patron-F'
              ]
            }
          },
          practicalTools: {
            design: {
              en: ['Laws of UX (lawsofux.com) — Visual reference cards', 'Figma Attention Insight plugin — AI-powered heatmap predictions', 'Crazy Egg / Hotjar — Real eye-tracking heatmaps', 'Gamification Model Canvas'],
              es: ['Laws of UX (lawsofux.com) — Tarjetas de referencia visual', 'Plugin Figma Attention Insight — Predicciones de mapas de calor con IA', 'Crazy Egg / Hotjar — Mapas de calor de eye-tracking reales', 'Gamification Model Canvas']
            },
            research: {
              en: ['Tobii Eye Tracker — Hardware eye-tracking studies', 'Maze — Remote unmoderated usability testing with heatmaps', 'UserTesting — Think-aloud sessions revealing cognitive patterns', 'Google HEART framework — Measuring user happiness and engagement'],
              es: ['Tobii Eye Tracker — Estudios de eye-tracking con hardware', 'Maze — Pruebas de usabilidad remotas no moderadas con mapas de calor', 'UserTesting — Sesiones think-aloud revelando patrones cognitivos', 'Google HEART framework — Midiendo felicidad y engagement del usuario']
            },
            handoff: {
              en: ['Psychology annotations in Figma (sticky notes per screen)', 'Cognitive load scoring system for developers', 'Attention priority guide for content hierarchy'],
              es: ['Anotaciones de psicologia en Figma (notas adhesivas por pantalla)', 'Sistema de puntuacion de carga cognitiva para desarrolladores', 'Guia de prioridad de atencion para jerarquia de contenido']
            }
          },
          howToValidate: {
            what: {
              en: 'Validate that your designs align with cognitive psychology principles and actually reduce friction for real users.',
              es: 'Validar que tus disenos se alinean con principios de psicologia cognitiva y realmente reducen la friccion para usuarios reales.'
            },
            methods: {
              en: [
                '5-second test: Show a screen for 5 seconds, then ask what users remember. This tests scanning patterns and visual hierarchy.',
                'Cognitive walkthrough: Walk through each step of a flow and ask "Will the user know what to do? Will they understand the feedback?"',
                'Working memory audit: Count the number of things a user must remember at any point. If >4, chunk or simplify.',
                'A/B test gamification: Compare task completion rates with and without progress indicators, streaks, or badges.',
                'Eye-tracking study: Use tools like Tobii or AI-based Attention Insight to validate where users actually look vs where you intended.'
              ],
              es: [
                'Test de 5 segundos: Muestra una pantalla por 5 segundos, luego pregunta que recuerdan los usuarios. Esto prueba patrones de escaneo y jerarquia visual.',
                'Recorrido cognitivo: Recorre cada paso de un flujo y pregunta "Sabra el usuario que hacer? Entendera el feedback?"',
                'Auditoria de memoria de trabajo: Cuenta el numero de cosas que un usuario debe recordar en cualquier punto. Si >4, agrupa o simplifica.',
                'Test A/B de gamificacion: Compara tasas de completado de tareas con y sin indicadores de progreso, rachas o insignias.',
                'Estudio de eye-tracking: Usa herramientas como Tobii o Attention Insight basado en IA para validar donde realmente miran los usuarios vs donde pretendias.'
              ]
            },
            tools: {
              en: ['Maze 5-second tests', 'Attention Insight AI heatmaps', 'Tobii Pro eye-tracker', 'Google Analytics behavior flow', 'Hotjar session recordings'],
              es: ['Tests de 5 segundos de Maze', 'Mapas de calor IA de Attention Insight', 'Eye-tracker Tobii Pro', 'Flujo de comportamiento Google Analytics', 'Grabaciones de sesion Hotjar']
            },
            evidenceExample: {
              en: 'Duolingo\'s gamification system (streaks, XP, leagues, progress bars) is entirely built on these psychology principles. Their data shows that users with a 7-day streak are 3.6x more likely to continue learning. The progress bar uses the Goal Gradient Effect — users speed up as they approach the daily goal. Their lesson UI limits choices to 4 options at a time (Miller\'s Law), and the green "correct" animation leverages peripheral vision to provide instant positive feedback.',
              es: 'El sistema de gamificacion de Duolingo (rachas, XP, ligas, barras de progreso) esta completamente construido sobre estos principios psicologicos. Sus datos muestran que usuarios con una racha de 7 dias tienen 3.6x mas probabilidad de continuar aprendiendo. La barra de progreso usa el Efecto Gradiente de Meta — los usuarios aceleran al acercarse al objetivo diario. Su UI de leccion limita opciones a 4 a la vez (Ley de Miller), y la animacion verde de "correcto" aprovecha la vision periferica para dar feedback positivo instantaneo.'
            }
          },
          quiz: [
            {
              question: {
                en: 'According to Nielsen Norman Group research, what percentage of text do users typically read on a web page?',
                es: 'Segun la investigacion de Nielsen Norman Group, que porcentaje de texto leen tipicamente los usuarios en una pagina web?'
              },
              options: {
                en: ['80-90%', '50-60%', '20-28%', '5-10%'],
                es: ['80-90%', '50-60%', '20-28%', '5-10%']
              },
              correctIndex: 2,
              explanation: {
                en: 'Users only read 20-28% of text on a page. They scan in an F-pattern: reading the first line, scanning down the left side, and occasionally reading horizontal sections. This is why visual hierarchy, headings, and bullet points are critical.',
                es: 'Los usuarios solo leen el 20-28% del texto en una pagina. Escanean en un patron-F: leyendo la primera linea, escaneando hacia abajo por el lado izquierdo, y ocasionalmente leyendo secciones horizontales. Por eso la jerarquia visual, encabezados y puntos son criticos.'
              }
            },
            {
              question: {
                en: 'What is the "Endowed Progress Effect" in gamification?',
                es: 'Que es el "Efecto de Progreso Dotado" en gamificacion?'
              },
              options: {
                en: [
                  'Giving users a reward before they start a task',
                  'Starting a progress bar at 20% instead of 0% to increase completion rates',
                  'Showing all completed tasks in a list',
                  'Adding animation to progress bars'
                ],
                es: [
                  'Dar a los usuarios una recompensa antes de empezar una tarea',
                  'Empezar una barra de progreso al 20% en vez de 0% para aumentar tasas de completado',
                  'Mostrar todas las tareas completadas en una lista',
                  'Agregar animacion a barras de progreso'
                ]
              },
              correctIndex: 1,
              explanation: {
                en: 'The Endowed Progress Effect (Nunes & Dreze, 2006) shows that artificial advancement toward a goal increases effort. A car wash card stamped 2/10 completed outperforms a 0/8 card — same distance to finish, but feeling "already started" is powerfully motivating. LinkedIn uses this for profile completion.',
                es: 'El Efecto de Progreso Dotado (Nunes & Dreze, 2006) muestra que el avance artificial hacia una meta aumenta el esfuerzo. Una tarjeta de lavado de autos sellada 2/10 completada supera a una de 0/8 — misma distancia para terminar, pero sentir "ya empezaste" es poderosamente motivador. LinkedIn lo usa para completar perfiles.'
              }
            },
            {
              question: {
                en: 'Why does peripheral vision play such a crucial role in UI design?',
                es: 'Por que la vision periferica juega un papel tan crucial en el diseno UI?'
              },
              options: {
                en: [
                  'It allows users to read small text from a distance',
                  'It evolved to detect movement and change, making it ideal for drawing attention to important UI elements',
                  'It processes color more accurately than central vision',
                  'It only works on mobile devices'
                ],
                es: [
                  'Permite a los usuarios leer texto pequeno a distancia',
                  'Evoluciono para detectar movimiento y cambio, haciendola ideal para atraer atencion a elementos UI importantes',
                  'Procesa color de forma mas precisa que la vision central',
                  'Solo funciona en dispositivos moviles'
                ]
              },
              correctIndex: 1,
              explanation: {
                en: 'Human peripheral vision evolved as a threat-detection system — it is extremely sensitive to motion and change. In UI design, subtle animations (pulse, glow, shake) in the periphery guide user attention to notifications, CTAs, and error states more effectively than static visual weight alone.',
                es: 'La vision periferica humana evoluciono como sistema de deteccion de amenazas — es extremadamente sensible al movimiento y cambio. En diseno UI, animaciones sutiles (pulso, brillo, sacudida) en la periferia guian la atencion del usuario a notificaciones, CTAs y estados de error mas efectivamente que solo el peso visual estatico.'
              }
            }
          ],
          realExample: {
            title: {
              en: 'Duolingo: A Masterclass in Applied UX Psychology',
              es: 'Duolingo: Una Clase Magistral en Psicologia UX Aplicada'
            },
            description: {
              en: 'Duolingo applies every principle covered in this lesson. Scanning: lesson cards use icons + short text, never paragraphs. Working Memory: exercises show max 4 answer options at a time. Progress: streaks (longest streak worldwide: 3,000+ days), XP points, league rankings, and the famous "Duo is sad" notification use the Zeigarnik Effect to pull users back. Peripheral Vision: the green celebration animation and the red "wrong" shake are designed to trigger peripheral attention for instant feedback. The result: 74 million monthly active users and the most downloaded education app worldwide.',
              es: 'Duolingo aplica cada principio cubierto en esta leccion. Escaneo: las tarjetas de leccion usan iconos + texto corto, nunca parrafos. Memoria de Trabajo: los ejercicios muestran maximo 4 opciones de respuesta a la vez. Progreso: rachas (racha mas larga del mundo: 3,000+ dias), puntos XP, rankings de liga, y la famosa notificacion "Duo esta triste" usan el Efecto Zeigarnik para atraer usuarios de vuelta. Vision Periferica: la animacion verde de celebracion y la sacudida roja de "incorrecto" estan disenadas para activar la atencion periferica con feedback instantaneo. El resultado: 74 millones de usuarios activos mensuales y la app de educacion mas descargada del mundo.'
            },
            company: 'Duolingo'
          },
          aiInPractice: {
            description: { en: 'Use AI to analyze copy for cognitive load, audit designs for psychology principles, and generate gamification strategies.', es: 'Usa IA para analizar la carga cognitiva del texto, auditar disenos para principios psicologicos y generar estrategias de gamificacion.' },
            prompts: [
              {
                tool: 'ChatGPT',
                context: { en: 'Simplifying UI text', es: 'Simplificando texto de UI' },
                prompt: { en: 'Rewrite this error message to be friendlier and easier to understand for a stressed user: "Error 503: Database Connection Failed."', es: 'Reescribe este mensaje de error para que sea más amigable y fácil de entender para un usuario estresado: "Error 503: Fallo de Conexión a Base de Datos".' }
              },
              {
                tool: 'Claude',
                context: { en: 'Cognitive load audit', es: 'Auditoria de carga cognitiva' },
                prompt: { en: 'Analyze this checkout page description. Identify elements that create excessive cognitive load and suggest specific improvements based on Hick\'s Law, Miller\'s Law, and the F-pattern scanning model. Page: 15 form fields, 8 payment options, 3 upsells, a countdown timer, and a 200-word terms section.', es: 'Analiza esta descripcion de pagina de checkout. Identifica elementos que crean carga cognitiva excesiva y sugiere mejoras especificas basadas en la Ley de Hick, la Ley de Miller y el modelo de escaneo patron-F. Pagina: 15 campos de formulario, 8 opciones de pago, 3 upsells, un temporizador regresivo y una seccion de terminos de 200 palabras.' }
              },
              {
                tool: 'ChatGPT',
                context: { en: 'Gamification strategy', es: 'Estrategia de gamificacion' },
                prompt: { en: 'Design a gamification system for a fitness app onboarding. Apply: Endowed Progress Effect (start at 20%), Zeigarnik Effect (incomplete streaks), Goal Gradient (accelerating rewards near milestones). Include specific UI elements, copy, and notification timing.', es: 'Disena un sistema de gamificacion para el onboarding de una app de fitness. Aplica: Efecto de Progreso Dotado (empezar al 20%), Efecto Zeigarnik (rachas incompletas), Gradiente de Meta (recompensas aceleradas cerca de hitos). Incluye elementos UI especificos, copy y timing de notificaciones.' }
              }
            ]
          }
        }
      },
      {
        id: 'design-ethics',
        title: { en: 'Design Ethics & Dark Patterns', es: 'Ética y Patrones Oscuros' },
        description: { en: 'Designing with responsibility, transparency, and respect for user well-being.', es: 'Diseñando con responsabilidad, transparencia y respeto por el bienestar del usuario.' },
        status: 'advanced',
        timeEstimate: '2h',
        reference: { en: 'Ruined by Design - Mike Monteiro', es: 'Ruined by Design - Mike Monteiro' },
        referenceLink: 'https://www.deceptive.design/',
        content: {
          definition: {
            en: 'Design ethics is the moral responsibility of designers to create products that do not harm, manipulate, or exploit users. Dark patterns are UI designs crafted to trick users into doing things they didn\'t mean to do.',
            es: 'La ética del diseño es la responsabilidad moral de los diseñadores de crear productos que no dañen, manipulen o exploten a los usuarios. Los patrones oscuros son diseños de UI creados para engañar a los usuarios para que hagan cosas que no querían hacer.'
          },
          why: {
            en: 'Trust is the most valuable currency in business. Manipulative design destroys trust and can lead to legal consequences.',
            es: 'La confianza es la moneda más valiosa en los negocios. El diseño manipulador destruye la confianza y puede llevar a consecuencias legales.'
          },
          keyPrinciples: {
            en: ['Transparency: Be honest about what the product does.', 'Consent: No hidden checkboxes.', 'Privacy by Design.', 'Inclusion: Do not exclude groups of people.'],
            es: ['Transparencia: Sé honesto sobre lo que hace el producto.', 'Consentimiento: Sin casillas de verificación ocultas.', 'Privacidad por Diseño.', 'Inclusión: No excluyas a grupos de personas.']
          },
          commonMistakes: {
            en: ['"Confirmshaming" (e.g., "No, I like paying full price").', 'Hidden costs at checkout.', 'Making it hard to unsubscribe (Roach Motel).'],
            es: ['"Confirmshaming" (ej. "No, me gusta pagar el precio completo").', 'Costos ocultos en el pago.', 'Hacer difícil darse de baja (Roach Motel).']
          },
          howToApply: {
            steps: [
              {
                name: { en: 'Audit for Manipulation', es: 'Auditoría de Manipulación' },
                description: { en: 'Review your flows. Are you tricking the user into clicking "Yes"?', es: 'Revisa tus flujos. ¿Estás engañando al usuario para que haga clic en "Sí"?' }
              },
              {
                name: { en: 'Easy Exit', es: 'Salida Fácil' },
                description: { en: 'Ensure unsubscribing is as easy as subscribing.', es: 'Asegura que darse de baja sea tan fácil como suscribirse.' }
              },
              {
                name: { en: 'Clear Language', es: 'Lenguaje Claro' },
                description: { en: 'Avoid double negatives (e.g., "Uncheck to not receive emails").', es: 'Evita dobles negaciones (ej. "Desmarca para no recibir correos").' }
              }
            ]
          },
          deliverables: {
            description: {
              en: 'Documents and audits that ensure your product respects user autonomy and complies with regulations.',
              es: 'Documentos y auditorias que aseguran que tu producto respeta la autonomia del usuario y cumple con regulaciones.'
            },
            items: {
              en: [
                'Dark Pattern Audit Report: Screen-by-screen analysis identifying manipulative patterns with severity ratings',
                'Ethical Design Guidelines: Internal standards for copy, consent flows, pricing transparency, and cancellation parity',
                'Cookie Consent Compliance Check: GDPR/CCPA review ensuring equal button weight and genuine choice',
                'Cancellation Parity Test: Comparison of sign-up vs cancellation flows ensuring equal ease of use',
                'Accessibility & Inclusion Checklist: Verification that no dark patterns disproportionately affect vulnerable users'
              ],
              es: [
                'Informe de Auditoria de Patrones Oscuros: Analisis pantalla por pantalla con calificaciones de severidad',
                'Guias de Diseno Etico: Estandares internos para copy, flujos de consentimiento, transparencia de precios y paridad de cancelacion',
                'Verificacion de Cumplimiento de Cookies: Revision GDPR/CCPA asegurando peso igual de botones y eleccion genuina',
                'Test de Paridad de Cancelacion: Comparacion de flujos de registro vs cancelacion asegurando igual facilidad',
                'Checklist de Accesibilidad e Inclusion: Verificacion de que ningun patron oscuro afecta a usuarios vulnerables'
              ]
            }
          },
          practicalTools: {
            design: {
              en: ['Deceptive Design (deceptive.design) — Hall of shame database', 'Figma Ethics Toolkit plugin', 'Dark Pattern Tip Line (darkpatternstipline.org)', 'Ethical Design Manifesto'],
              es: ['Deceptive Design (deceptive.design) — Base de datos del salon de la vergüenza', 'Plugin Figma Ethics Toolkit', 'Dark Pattern Tip Line', 'Manifiesto de Diseno Etico']
            },
            research: {
              en: ['Usability testing with vulnerable groups', 'A/B testing ethical vs dark variants', 'Consent comprehension surveys', 'Exit surveys for cancellation flows'],
              es: ['Pruebas de usabilidad con grupos vulnerables', 'Tests A/B de variantes eticas vs oscuras', 'Encuestas de comprension de consentimiento', 'Encuestas de salida para flujos de cancelacion']
            },
            handoff: {
              en: ['Ethical review checklist for developers', 'Regulatory compliance matrix (GDPR, DSA, FTC, CCPA)', 'Copy guidelines: "never use" word list'],
              es: ['Checklist de revision etica para desarrolladores', 'Matriz de cumplimiento regulatorio (GDPR, DSA, FTC, CCPA)', 'Guias de copy: lista de palabras "nunca usar"']
            }
          },
          howToValidate: {
            what: {
              en: 'Verify that your product does not use manipulative design patterns and complies with current privacy and consumer protection regulations.',
              es: 'Verificar que tu producto no usa patrones de diseno manipuladores y cumple con regulaciones actuales de privacidad y proteccion al consumidor.'
            },
            methods: {
              en: [
                'Cancellation parity test: time how long it takes to cancel vs sign up. If cancellation takes >2x longer, it fails.',
                'Cognitive walkthrough for consent: have 5 users explain what each checkbox does. If >20% get it wrong, the language is deceptive.',
                'Price transparency audit: compare advertised price with final checkout total. Any difference >10% flags hidden costs.',
                'Dark pattern peer review: have 3 designers independently audit each flow using the deceptive.design taxonomy.',
                'Regulatory compliance check: map each flow against GDPR Art. 7, DSA Art. 25, and FTC Section 5.'
              ],
              es: [
                'Test de paridad de cancelacion: mide cuanto toma cancelar vs registrarse. Si cancelar toma >2x mas, falla.',
                'Recorrido cognitivo de consentimiento: pide a 5 usuarios que expliquen que hace cada checkbox. Si >20% se equivocan, el lenguaje es enganoso.',
                'Auditoria de transparencia de precios: compara el precio anunciado con el total final. Diferencia >10% senala costos ocultos.',
                'Revision de patrones oscuros entre pares: pide a 3 disenadores que auditen independientemente cada flujo.',
                'Verificacion de cumplimiento regulatorio: mapea cada flujo contra GDPR Art. 7, DSA Art. 25 y FTC Seccion 5.'
              ]
            },
            tools: {
              en: ['Deceptive Design taxonomy', 'GDPR compliance checker', 'FTC dark patterns report', 'EU DSA Article 25 guidelines'],
              es: ['Taxonomia de Deceptive Design', 'Verificador GDPR', 'Informe FTC de patrones oscuros', 'Directrices del Articulo 25 del DSA']
            },
            evidenceExample: {
              en: 'Amazon Prime cancellation was audited by the FTC in 2023. Signing up: 2 clicks. Cancelling: 6 screens of "Are you sure?" with emotional appeals. Internal name: "Iliad" flow. Result: $25M fine + mandatory redesign.',
              es: 'La cancelacion de Amazon Prime fue auditada por la FTC en 2023. Registrarse: 2 clics. Cancelar: 6 pantallas de "Estas seguro?" con apelaciones emocionales. Nombre interno: flujo "Iliada". Resultado: multa de $25M + rediseno obligatorio.'
            }
          },
          quiz: [
            {
              question: {
                en: 'What is "confirmshaming"?',
                es: 'Que es "confirmshaming"?'
              },
              options: {
                en: ['Making users confirm their identity before purchasing', 'Writing decline options to make users feel guilty', 'Requiring double confirmation for important actions', 'Showing shame-inducing error messages'],
                es: ['Hacer que usuarios confirmen su identidad antes de comprar', 'Escribir opciones de rechazo para hacer sentir culpable al usuario', 'Requerir doble confirmacion para acciones importantes', 'Mostrar mensajes de error vergonzosos']
              },
              correctIndex: 1,
              explanation: {
                en: 'Confirmshaming writes the decline option to guilt or shame the user. Example: "No thanks, I don\'t want to be healthy". The ethical alternative: "No thanks" or "Maybe later".',
                es: 'Confirmshaming escribe la opcion de rechazo para culpar o avergonzar al usuario. Ejemplo: "No gracias, no quiero ser saludable". La alternativa etica: "No gracias" o "Quizas luego".'
              }
            },
            {
              question: {
                en: 'Under the EU Digital Services Act (2025), what is the maximum fine for dark patterns?',
                es: 'Bajo el DSA de la UE (2025), cual es la multa maxima por patrones oscuros?'
              },
              options: {
                en: ['€100,000 per violation', '1% of annual revenue', '6% of global annual revenue', '10% of quarterly revenue'],
                es: ['€100,000 por violacion', '1% de ingresos anuales', '6% de ingresos anuales globales', '10% de ingresos trimestrales']
              },
              correctIndex: 2,
              explanation: {
                en: 'DSA Article 25 bans dark patterns with fines up to 6% of worldwide annual turnover. For Meta (~$135B revenue), that could mean up to $8.1 billion.',
                es: 'El Articulo 25 del DSA prohibe patrones oscuros con multas de hasta el 6% de la facturacion anual mundial. Para Meta (~$135B ingresos), eso podria significar hasta $8.1 mil millones.'
              }
            },
            {
              question: {
                en: 'Which is an example of the "Roach Motel" dark pattern?',
                es: 'Cual es un ejemplo del patron oscuro "Hotel Cucaracha"?'
              },
              options: {
                en: ['A product page with hidden fees at checkout', 'An account that takes 2 clicks to create but requires a phone call to delete', 'A cookie popup with only "Accept All"', 'A newsletter using guilt in the decline option'],
                es: ['Una pagina con tarifas ocultas en checkout', 'Una cuenta que toma 2 clics crearla pero requiere llamar para eliminarla', 'Un popup de cookies con solo "Aceptar Todas"', 'Un newsletter usando culpa en la opcion de rechazo']
              },
              correctIndex: 1,
              explanation: {
                en: 'Roach Motel: easy to get in, hard to get out. Named after the trap: "Roaches check in, but they don\'t check out." Amazon Prime\'s cancellation is the most famous example.',
                es: 'Hotel Cucaracha: facil entrar, dificil salir. Nombrado por la trampa: "Las cucarachas entran, pero no salen." La cancelacion de Amazon Prime es el ejemplo mas famoso.'
              }
            }
          ],
          realExample: {
            title: {
              en: 'Amazon Prime: The $25M "Iliad" Cancellation Flow',
              es: 'Amazon Prime: El Flujo de Cancelacion "Iliada" de $25M'
            },
            description: {
              en: 'In 2023, the FTC sued Amazon for its Prime cancellation process, internally nicknamed "Iliad" for its epic length. Signing up took 2 clicks. Cancelling required navigating through 6 pages of "Are you sure?" screens with emotional appeals, discount offers, and a cooling-off period. The FTC found Amazon leadership personally approved design changes to make cancellation harder. Result: $25M fine, mandatory redesign, and the DSA now requires "cancellation parity" across the EU.',
              es: 'En 2023, la FTC demando a Amazon por su proceso de cancelacion de Prime, apodado "Iliada" por su longitud epica. Registrarse tomaba 2 clics. Cancelar requeria navegar 6 paginas de "Estas seguro?" con apelaciones emocionales, ofertas de descuento y un periodo de enfriamiento. La FTC encontro que la direccion de Amazon aprobo personalmente cambios para dificultar la cancelacion. Resultado: multa de $25M, rediseno obligatorio, y el DSA ahora requiere "paridad de cancelacion" en toda la UE.'
            },
            company: 'Amazon / FTC'
          },
          aiInPractice: {
            description: { en: 'Use AI to audit copy for manipulative language, check compliance with regulations, and generate ethical alternatives.', es: 'Usa IA para auditar copy por lenguaje manipulador, verificar cumplimiento regulatorio y generar alternativas eticas.' },
            prompts: [
              {
                tool: 'Claude',
                context: { en: 'Ethical copy audit', es: 'Auditoria etica de texto' },
                prompt: { en: 'Analyze this subscription modal text. Highlight any phrasing that might be considered "confirmshaming" or manipulative. Suggest neutral, respectful alternatives.', es: 'Analiza este texto del modal de suscripcion. Resalta cualquier fraseo "confirmshaming" o manipulador. Sugiere alternativas neutrales y respetuosas.' }
              },
              {
                tool: 'ChatGPT',
                context: { en: 'Dark pattern detection', es: 'Deteccion de patrones oscuros' },
                prompt: { en: 'I\'ll describe a user flow step by step. For each step, identify any dark pattern from the deceptive.design taxonomy. Rate severity and suggest ethical redesign.', es: 'Describire un flujo de usuario paso a paso. Para cada paso, identifica cualquier patron oscuro de la taxonomia deceptive.design. Califica severidad y sugiere rediseno etico.' }
              }
            ]
          }
        }
      },
      {
        id: 'usability-testing',
        title: { en: 'Usability Testing', es: 'Pruebas de Usabilidad' },
        description: { en: 'Observing real users to validate design decisions.', es: 'Observando usuarios reales para validar decisiones de diseño.' },
        status: 'advanced',
        timeEstimate: '2h 30m',
        reference: { en: 'Rocket Surgery Made Easy - Steve Krug', es: 'Rocket Surgery Made Easy - Steve Krug' },
        referenceLink: 'https://www.nngroup.com/articles/usability-testing-101/',
        content: {
          definition: {
            en: 'Usability testing involves observing representative users attempting to perform specific tasks with a product to identify usability problems.',
            es: 'Las pruebas de usabilidad implican observar a usuarios representativos intentando realizar tareas específicas con un producto para identificar problemas de usabilidad.'
          },
          why: {
            en: 'You are not the user. What is obvious to you might be impossible for them. Testing removes the guesswork.',
            es: 'Tú no eres el usuario. Lo que es obvio para ti podría ser imposible para ellos. Las pruebas eliminan las suposiciones.'
          },
          keyPrinciples: {
            en: ['Watch what they do, not what they say.', 'Test early and often.', 'Focus on the critical tasks.', '5 users find 85% of problems.'],
            es: ['Mira lo que hacen, no lo que dicen.', 'Prueba temprano y a menudo.', 'Enfócate en las tareas críticas.', '5 usuarios encuentran el 85% de los problemas.']
          },
          commonMistakes: {
            en: ['Leading the user ("Click there").', 'Defending the design.', 'Testing with friends/family.'],
            es: ['Guiar al usuario ("Haz clic ahí").', 'Defender el diseño.', 'Probar con amigos/familia.']
          },
          howToApply: {
            steps: [
              {
                name: { en: 'Write Tasks', es: 'Escribir Tareas' },
                description: { en: 'Create scenarios, not instructions (e.g., "Find a pair of running shoes under $50").', es: 'Crea escenarios, no instrucciones (ej. "Encuentra un par de zapatillas de correr por menos de $50").' }
              },
              {
                name: { en: 'Facilitate', es: 'Facilitar' },
                description: { en: 'Ask the user to "Think Aloud". Remain neutral.', es: 'Pide al usuario que "Piense en voz alta". Mantente neutral.' }
              },
              {
                name: { en: 'Synthesize', es: 'Sintetizar' },
                description: { en: 'Prioritize issues by severity (Critical, Major, Minor).', es: 'Prioriza los problemas por severidad (Crítico, Mayor, Menor).' }
              }
            ]
          },
          aiInPractice: {
            description: { en: 'AI is incredible at generating realistic testing scenarios and scripts based on your user persona.', es: 'La IA es increíble para generar escenarios de prueba realistas y guiones basados en tu persona de usuario.' },
            prompts: [
              {
                tool: 'ChatGPT',
                context: { en: 'Writing test script', es: 'Escribiendo guion de prueba' },
                prompt: { en: 'Create a usability test script for a travel booking app. Persona: Busy parent. Goal: Book a family friendly hotel. Include 3 specific tasks and follow-up questions.', es: 'Crea un guion de prueba de usabilidad para una app de reserva de viajes. Persona: Padre ocupado. Objetivo: Reservar un hotel familiar. Incluye 3 tareas específicas y preguntas de seguimiento.' }
              }
            ]
          }
        }
      },
      {
        id: 'design-systems-governance',
        title: { en: 'System Governance', es: 'Gobernanza del Sistema' },
        description: { en: 'Managing design systems at scale.', es: 'Gestionando sistemas de diseño a escala.' },
        status: 'advanced',
        timeEstimate: '2h 30m',
        reference: { en: 'Design Systems - Alla Kholmatova', es: 'Sistemas de Diseño - Alla Kholmatova' },
        referenceLink: 'https://medium.com/eightshapes-llc/design-system-governance-36f7481c7908',
        content: {
          definition: {
            en: 'Governance refers to the processes, roles, and rules for how a design system is maintained, contributed to, and evolved over time.',
            es: 'La gobernanza se refiere a los procesos, roles y reglas sobre cómo se mantiene, contribuye y evoluciona un sistema de diseño a lo largo del tiempo.'
          },
          why: {
            en: 'Without governance, a design system becomes a "zombie" (outdated) or a "Frankenstein" (inconsistent chaos).',
            es: 'Sin gobernanza, un sistema de diseño se convierte en un "zombie" (desactualizado) o un "Frankenstein" (caos inconsistente).'
          },
          keyPrinciples: {
            en: ['Clear contribution model.', 'Strict vs Loose governance.', 'Shared ownership.', 'Versioning strategy.'],
            es: ['Modelo de contribución claro.', 'Gobernanza estricta vs laxa.', 'Propiedad compartida.', 'Estrategia de versionado.']
          },
          commonMistakes: {
            en: ['Designing the system in a vacuum.', 'Being the "design police".', 'Not allowing for local flexibility.'],
            es: ['Diseñar el sistema en un vacío.', 'Ser la "policía del diseño".', 'No permitir flexibilidad local.']
          },
          howToApply: {
            steps: [
              {
                name: { en: 'Define Roles', es: 'Definir Roles' },
                description: { en: 'Who are the Makers vs Users of the system?', es: '¿Quiénes son los Creadores vs Usuarios del sistema?' }
              },
              {
                name: { en: 'Create Contribution Flow', es: 'Crear Flujo de Contribución' },
                description: { en: 'How does a designer suggest a new component?', es: '¿Cómo sugiere un diseñador un nuevo componente?' }
              },
              {
                name: { en: 'Regular Office Hours', es: 'Horas de Oficina Regulares' },
                description: { en: 'Set time for team support and reviews.', es: 'Establece tiempo para soporte y revisiones del equipo.' }
              }
            ]
          },
          aiInPractice: {
            description: { en: 'Use AI to help draft governance policies and release notes.', es: 'Usa IA para ayudar a redactar políticas de gobernanza y notas de la versión.' },
            prompts: [
              {
                tool: 'ChatGPT',
                context: { en: 'Writing release notes', es: 'Escribiendo notas de la versión' },
                prompt: { en: 'Write concise release notes for version 2.0 of our Design System. Features: Dark Mode support, new DatePicker, and accessibility fixes for Dropdowns.', es: 'Escribe notas de la versión concisas para la versión 2.0 de nuestro Sistema de Diseño. Características: Soporte Modo Oscuro, nuevo DatePicker y correcciones de accesibilidad para Dropdowns.' }
              }
            ]
          }
        }
      },
      {
        id: 'laws-of-ux',
        title: { en: 'Laws of UX', es: 'Leyes de UX' },
        description: { en: 'Key psychology laws applied to design.', es: 'Leyes clave de psicología aplicadas al diseño.' },
        status: 'advanced',
        timeEstimate: '1h 30m',
        reference: { en: 'Laws of UX - Jon Yablonski', es: 'Leyes de UX - Jon Yablonski' },
        referenceLink: 'https://lawsofux.com/',
        content: {
          definition: {
            en: 'Laws of UX are a collection of evidence-based maxims and principles that designers can use when building user interfaces. Rooted in cognitive psychology, perception science, and behavioral economics, they translate how the human brain processes information into actionable design guidelines. The most influential include Hick\'s Law (decision time), Fitts\'s Law (motor movement), Jakob\'s Law (familiarity), Miller\'s Law (working memory), the Aesthetic-Usability Effect, and the Doherty Threshold (system responsiveness).',
            es: 'Las Leyes de UX son una colección de máximas y principios basados en evidencia que los diseñadores pueden usar al construir interfaces. Enraizadas en la psicología cognitiva, la ciencia de la percepción y la economía conductual, traducen cómo el cerebro humano procesa la información en guías de diseño accionables. Las más influyentes incluyen la Ley de Hick (tiempo de decisión), la Ley de Fitts (movimiento motor), la Ley de Jakob (familiaridad), la Ley de Miller (memoria de trabajo), el Efecto Estético-Usabilidad y el Umbral de Doherty (velocidad de respuesta del sistema).'
          },
          why: {
            en: 'Design decisions defended with "I think it looks better" rarely survive stakeholder meetings. Laws of UX give you a scientific vocabulary to justify your choices: "We reduced the options from 12 to 4 because Hick\'s Law shows decision time increases logarithmically with choices." They transform subjective preferences into objective, measurable arguments.',
            es: 'Las decisiones de diseño defendidas con "creo que se ve mejor" rara vez sobreviven a reuniones con stakeholders. Las Leyes de UX te dan un vocabulario científico para justificar tus decisiones: "Redujimos las opciones de 12 a 4 porque la Ley de Hick muestra que el tiempo de decisión aumenta logarítmicamente con las opciones." Transforman preferencias subjetivas en argumentos objetivos y medibles.'
          },
          keyPrinciples: {
            en: [
              'Hick\'s Law: Decision time = a + b × log₂(n). Reduce options, use progressive disclosure, break complex tasks into steps.',
              'Fitts\'s Law: Movement time = a + b × log₂(2D/W). Bigger, closer targets are faster to hit. Make primary CTAs large and within thumb reach on mobile.',
              'Jakob\'s Law: Users spend most of their time on OTHER sites. They prefer yours to work the same way. Innovate on value, not on navigation.',
              'Miller\'s Law: The average person can hold 7 ± 2 items in working memory. Chunk information into groups of 5-9.',
              'Aesthetic-Usability Effect: Users perceive aesthetically pleasing designs as more usable. Visual polish increases tolerance for minor issues.',
              'Doherty Threshold: Productivity soars when system response time is < 400ms. Use skeleton screens, optimistic UI, and progress indicators.',
              'Von Restorff Effect: Items that stand out from their surroundings are more memorable. Use visual contrast for important elements.',
              'Serial Position Effect: Users best remember the first and last items in a series. Place key actions at the beginning and end of lists.'
            ],
            es: [
              'Ley de Hick: Tiempo de decisión = a + b × log₂(n). Reduce opciones, usa revelación progresiva, divide tareas complejas en pasos.',
              'Ley de Fitts: Tiempo de movimiento = a + b × log₂(2D/W). Objetivos más grandes y cercanos son más rápidos de alcanzar. Haz los CTA principales grandes.',
              'Ley de Jakob: Los usuarios pasan la mayor parte de su tiempo en OTROS sitios. Prefieren que el tuyo funcione igual. Innova en valor, no en navegación.',
              'Ley de Miller: La persona promedio puede retener 7 ± 2 elementos en memoria de trabajo. Agrupa información en conjuntos de 5-9.',
              'Efecto Estético-Usabilidad: Los usuarios perciben diseños estéticamente agradables como más usables. El pulido visual aumenta tolerancia a problemas menores.',
              'Umbral de Doherty: La productividad se dispara cuando el tiempo de respuesta es < 400ms. Usa skeleton screens, UI optimista e indicadores de progreso.',
              'Efecto Von Restorff: Los elementos que se destacan de su entorno son más memorables. Usa contraste visual para elementos importantes.',
              'Efecto de Posición Serial: Los usuarios recuerdan mejor los primeros y últimos elementos de una serie. Coloca acciones clave al principio y final.'
            ]
          },
          commonMistakes: {
            en: [
              'Applying laws dogmatically without considering context — Fitts\'s Law doesn\'t mean every button should be full-width.',
              'Confusing "familiar" (Jakob\'s Law) with "identical" — you can and should innovate, just not on foundational navigation patterns.',
              'Using dark patterns disguised as psychology — exploiting Hick\'s Law to hide unsubscribe options is unethical.',
              'Over-chunking content (Miller\'s Law) — forcing arbitrary groups of 7 when content doesn\'t naturally support it.',
              'Treating aesthetic design as a substitute for usability testing — the Aesthetic-Usability Effect masks problems, it doesn\'t fix them.',
              'Ignoring the Doherty Threshold on mobile — 400ms feels much longer on a phone than on desktop.'
            ],
            es: [
              'Aplicar leyes dogmáticamente sin considerar el contexto — la Ley de Fitts no significa que cada botón deba ser de ancho completo.',
              'Confundir "familiar" (Ley de Jakob) con "idéntico" — puedes y debes innovar, solo no en patrones de navegación fundamentales.',
              'Usar patrones oscuros disfrazados de psicología — explotar la Ley de Hick para esconder opciones de cancelación es poco ético.',
              'Sobre-agrupar contenido (Ley de Miller) — forzar grupos arbitrarios de 7 cuando el contenido no lo soporta naturalmente.',
              'Tratar el diseño estético como sustituto de pruebas de usabilidad — el Efecto Estético-Usabilidad enmascara problemas, no los resuelve.',
              'Ignorar el Umbral de Doherty en móvil — 400ms se sienten mucho más largos en un teléfono que en desktop.'
            ]
          },
          howToApply: {
            steps: [
              {
                name: { en: 'Audit an Existing Flow', es: 'Auditar un Flujo Existente' },
                description: { en: 'Pick a user flow (checkout, onboarding, search). Walk through each screen and identify which laws are being applied or violated.', es: 'Elige un flujo de usuario (checkout, onboarding, búsqueda). Recorre cada pantalla e identifica qué leyes se aplican o violan.' }
              },
              {
                name: { en: 'Prioritize by Impact', es: 'Priorizar por Impacto' },
                description: { en: 'Rank each violation by severity: Critical (blocks task completion), Major (significant friction), Minor (polish opportunity). Fix critical first.', es: 'Clasifica cada violación por severidad: Crítica (bloquea completar la tarea), Mayor (fricción significativa), Menor (oportunidad de pulido). Corrige las críticas primero.' }
              },
              {
                name: { en: 'Redesign with Laws', es: 'Rediseñar con Leyes' },
                description: { en: 'Apply the relevant law to redesign each violation. Document the "before vs after" for your portfolio.', es: 'Aplica la ley relevante para rediseñar cada violación. Documenta el "antes vs después" para tu portafolio.' }
              },
              {
                name: { en: 'Defend in Review', es: 'Defender en Revisión' },
                description: { en: 'Present your changes using the law as justification: "I grouped 12 nav items into 4 categories (Miller\'s Law), reduced decision time by ~40% (Hick\'s Law)."', es: 'Presenta tus cambios usando la ley como justificación: "Agrupé 12 ítems de nav en 4 categorías (Ley de Miller), reduje el tiempo de decisión ~40% (Ley de Hick)."' }
              }
            ]
          },
          deliverables: {
            description: { en: 'Artifacts to demonstrate mastery of UX Laws in your portfolio.', es: 'Artefactos para demostrar dominio de las Leyes de UX en tu portafolio.' },
            items: {
              en: [
                'UX Audit Report: Annotated screenshots mapping each screen to relevant laws, with severity ratings',
                'Before/After Case Study: Visual comparison showing how applying laws improved a specific flow',
                'Laws of UX Cheat Sheet: One-page reference card with each law, formula, and design application',
                'Stakeholder Presentation: Slide deck using laws to justify design decisions with evidence'
              ],
              es: [
                'Informe de Auditoría UX: Capturas anotadas mapeando cada pantalla a leyes relevantes, con severidad',
                'Caso de Estudio Antes/Después: Comparación visual mostrando cómo aplicar las leyes mejoró un flujo',
                'Hoja de Referencia de Leyes UX: Tarjeta de una página con cada ley, fórmula y aplicación de diseño',
                'Presentación para Stakeholders: Deck de slides usando leyes para justificar decisiones con evidencia'
              ]
            }
          },
          practicalTools: {
            design: {
              en: ['Figma (annotate designs with law references)', 'Stark (contrast checking for Aesthetic-Usability)', 'UseItBetter (heatmap analysis for Fitts\'s Law)'],
              es: ['Figma (anotar diseños con referencias a leyes)', 'Stark (verificación de contraste para Estético-Usabilidad)', 'UseItBetter (análisis de heatmap para Ley de Fitts)']
            },
            research: {
              en: ['Maze (task completion time measurement)', 'Lookback (think-aloud sessions)', 'Google Lighthouse (performance for Doherty Threshold)'],
              es: ['Maze (medición de tiempo de completado de tarea)', 'Lookback (sesiones think-aloud)', 'Google Lighthouse (rendimiento para Umbral de Doherty)']
            },
            handoff: {
              en: ['lawsofux.com (quick reference)', 'Notion/Confluence (documentation templates)', 'Loom (recorded design defense presentations)'],
              es: ['lawsofux.com (referencia rápida)', 'Notion/Confluence (plantillas de documentación)', 'Loom (presentaciones de defensa de diseño grabadas)']
            }
          },
          howToValidate: {
            what: {
              en: 'Validate that your design decisions align with UX laws by measuring real user behavior.',
              es: 'Valida que tus decisiones de diseño se alinean con las leyes de UX midiendo comportamiento real del usuario.'
            },
            methods: {
              en: [
                'A/B test: Compare decision time between original (many options) vs simplified (Hick\'s Law) version',
                'Click heatmaps: Verify users hit primary CTAs quickly and accurately (Fitts\'s Law)',
                'Five-second test: Show two interfaces — users rate "easier to use" (Aesthetic-Usability Effect)',
                'System Usability Scale (SUS): Pre/post redesign survey to measure perceived usability improvement',
                'Performance monitoring: Measure actual response times vs perceived load (Doherty Threshold)'
              ],
              es: [
                'Test A/B: Compara tiempo de decisión entre versión original (muchas opciones) vs simplificada (Ley de Hick)',
                'Mapas de calor de clicks: Verifica que usuarios alcanzan CTAs rápida y precisamente (Ley de Fitts)',
                'Test de cinco segundos: Muestra dos interfaces — usuarios califican "más fácil de usar" (Efecto Estético-Usabilidad)',
                'Escala de Usabilidad del Sistema (SUS): Encuesta pre/post rediseño para medir mejora de usabilidad',
                'Monitoreo de rendimiento: Mide tiempos de respuesta reales vs percibido (Umbral de Doherty)'
              ]
            },
            tools: {
              en: ['Maze', 'Hotjar', 'Google Lighthouse', 'Optimal Workshop', 'UsabilityHub'],
              es: ['Maze', 'Hotjar', 'Google Lighthouse', 'Optimal Workshop', 'UsabilityHub']
            },
            evidenceExample: {
              en: 'After applying Hick\'s Law to a SaaS pricing page (reducing plans from 5 to 3), we measured a 34% decrease in average decision time and a 12% increase in conversion rate. The A/B test ran for 2 weeks with 4,200 visitors per variant.',
              es: 'Después de aplicar la Ley de Hick a una página de precios SaaS (reduciendo planes de 5 a 3), medimos una disminución del 34% en tiempo de decisión promedio y un aumento del 12% en conversión. El test A/B corrió 2 semanas con 4,200 visitantes por variante.'
            }
          },
          quiz: [
            {
              question: {
                en: 'A checkout flow has 12 payment options displayed simultaneously. Which law suggests this will slow down user decisions?',
                es: 'Un flujo de checkout muestra 12 opciones de pago simultáneamente. ¿Qué ley sugiere que esto ralentizará las decisiones del usuario?'
              },
              options: {
                en: ['Fitts\'s Law', 'Hick\'s Law', 'Jakob\'s Law', 'Miller\'s Law'],
                es: ['Ley de Fitts', 'Ley de Hick', 'Ley de Jakob', 'Ley de Miller']
              },
              correctIndex: 1,
              explanation: {
                en: 'Hick\'s Law states that decision time increases logarithmically with the number of choices. 12 simultaneous payment options create decision paralysis. Group them or show popular ones first.',
                es: 'La Ley de Hick establece que el tiempo de decisión aumenta logarítmicamente con la cantidad de opciones. 12 opciones simultáneas crean parálisis de decisión. Agrúpalas o muestra las populares primero.'
              }
            },
            {
              question: {
                en: 'A mobile app has a tiny "Delete account" button right next to "Save changes." Which law is being violated?',
                es: 'Una app móvil tiene un botón "Eliminar cuenta" justo al lado de "Guardar cambios." ¿Qué ley se viola?'
              },
              options: {
                en: ['Miller\'s Law', 'Aesthetic-Usability Effect', 'Fitts\'s Law', 'Doherty Threshold'],
                es: ['Ley de Miller', 'Efecto Estético-Usabilidad', 'Ley de Fitts', 'Umbral de Doherty']
              },
              correctIndex: 2,
              explanation: {
                en: 'Fitts\'s Law dictates that destructive actions should be placed far from common interaction targets. Placing "Delete" next to "Save" with similar size increases accidental taps.',
                es: 'La Ley de Fitts dicta que acciones destructivas deben estar lejos de objetivos de interacción comunes. Colocar "Eliminar" junto a "Guardar" aumenta toques accidentales.'
              }
            },
            {
              question: {
                en: 'An e-commerce site puts the shopping cart icon in the footer instead of the header. Which law explains why this frustrates users?',
                es: 'Un sitio e-commerce pone el carrito en el footer en lugar del header. ¿Qué ley explica por qué esto frustra a los usuarios?'
              },
              options: {
                en: ['Miller\'s Law', 'Doherty Threshold', 'Jakob\'s Law', 'Von Restorff Effect'],
                es: ['Ley de Miller', 'Umbral de Doherty', 'Ley de Jakob', 'Efecto Von Restorff']
              },
              correctIndex: 2,
              explanation: {
                en: 'Jakob\'s Law: users spend most of their time on other sites and expect yours to work the same way. The shopping cart in the top-right header is a universal mental model.',
                es: 'Ley de Jakob: los usuarios pasan la mayor parte de su tiempo en otros sitios y esperan que el tuyo funcione igual. El carrito en el header arriba-derecha es un modelo mental universal.'
              }
            }
          ],
          realExample: {
            title: {
              en: 'Spotify: Laws of UX in Action',
              es: 'Spotify: Leyes de UX en Acción'
            },
            description: {
              en: 'Spotify\'s interface is a masterclass in applied UX Laws. Hick\'s Law: The home screen shows 6-8 personalized playlists instead of their 100M+ song catalog. Miller\'s Law: Navigation is chunked into 3 main tabs (Home, Search, Library). Fitts\'s Law: The play/pause button is the largest element on the Now Playing screen. Jakob\'s Law: The bottom tab bar and search icon follow universal patterns from Instagram and YouTube. Doherty Threshold: Songs load with skeleton shimmer and pre-buffer audio so playback feels instant. Aesthetic-Usability Effect: Album art and gradient backgrounds make even simple list views feel premium.',
              es: 'La interfaz de Spotify es una clase magistral en Leyes de UX aplicadas. Ley de Hick: La pantalla de inicio muestra 6-8 playlists personalizadas en lugar de su catálogo de 100M+ canciones. Ley de Miller: La navegación se agrupa en 3 tabs principales (Inicio, Buscar, Biblioteca). Ley de Fitts: El botón play/pausa es el elemento más grande en la pantalla de Reproducción. Ley de Jakob: La barra de tabs inferior e icono de búsqueda siguen patrones universales de Instagram y YouTube. Umbral de Doherty: Las canciones cargan con shimmer skeleton y pre-buffering. Efecto Estético-Usabilidad: Las portadas de álbumes y fondos degradados hacen que vistas de lista simples se sientan premium.'
            },
            company: 'Spotify'
          },
          aiInPractice: {
            description: { en: 'Use AI to audit interfaces against UX Laws and generate evidence-based design rationale.', es: 'Usa IA para auditar interfaces contra Leyes de UX y generar justificaciones basadas en evidencia.' },
            prompts: [
              {
                tool: 'ChatGPT',
                context: { en: 'UX Laws Audit', es: 'Auditoría de Leyes UX' },
                prompt: { en: 'I\'ll describe a user flow screen by screen. For each screen, identify which Laws of UX are being applied well and which are being violated. Rate each violation as Critical/Major/Minor and suggest a fix.', es: 'Describiré un flujo de usuario pantalla por pantalla. Para cada pantalla, identifica qué Leyes de UX se aplican bien y cuáles se violan. Califica cada violación como Crítica/Mayor/Menor y sugiere una corrección.' }
              },
              {
                tool: 'ChatGPT',
                context: { en: 'Stakeholder Presentation', es: 'Presentación para Stakeholders' },
                prompt: { en: 'Explain Fitts\'s Law to a marketing manager in 2 sentences. Use a metaphor about targets. Then explain how it justifies making our primary CTA 48px minimum on mobile.', es: 'Explica la Ley de Fitts a un gerente de marketing en 2 oraciones. Usa una metáfora sobre objetivos. Luego explica cómo justifica hacer nuestro CTA principal de mínimo 48px en móvil.' }
              }
            ]
          }
        }
      },
      frontendFoundationsLesson,
      htmlFundamentalsLesson,
      cssFundamentalsLesson,
      introJavaScriptLesson
    ]
  },
  {
    id: 'strategy-lessons',
    title: { en: 'Strategy & Business', es: 'Estrategia y Negocio' },
    description: {
      en: 'Business goals, KPIs, and strategic design thinking.',
      es: 'Objetivos de negocio, KPIs y pensamiento de diseño estratégico.'
    },
    topics: [
      businessGoalsKpisLesson,
      stakeholderMappingLesson,
      uxDocumentationProLesson,
    ]
  },
  {
    id: 'delivery-product-ops',
    title: { en: 'Delivery & Product Ops', es: 'Entrega y Operaciones de Producto' },
    description: {
      en: 'Execution strategy — from roadmap to release, incremental delivery, and post-release monitoring.',
      es: 'Estrategia de ejecución — del roadmap al release, entrega incremental y monitoreo post-release.'
    },
    topics: [
      releasePlanningLesson,
    ]
  },
  {
    id: 'career-professional-growth',
    title: { en: 'Career & Professional Growth', es: 'Carrera y Crecimiento Profesional' },
    description: {
      en: 'Build your professional brand — portfolio storytelling, case study writing, and interview preparation.',
      es: 'Construye tu marca profesional — storytelling de portafolio, redacción de casos de estudio y preparación para entrevistas.'
    },
    topics: [
      portfolioCaseStudyLesson,
    ]
  }
];

// Helper to find topics from the internal source by ID
const _allTopics: Topic[] = _topicSource.flatMap(t => t.topics);
const _t = (id: string, tag: LessonTag = 'Core UX'): Topic => {
  const topic = _allTopics.find(t => t.id === id);
  if (!topic) throw new Error(`Topic not found: ${id}`);
  return { ...topic, tag };
};

// ============================================================
// EXPORTED TRACKS — 9 Phases following real UX project workflow
// Ordered: basic → intermediate → advanced within each phase
// Tags: Core UX | Product | UI | Tech | Strategy | Metrics
//
// Changes from previous structure:
//   • "wireframes" merged into "wireframing-prototyping"
//   • "usability-basics" moved from Phase 5 → Phase 1
//   • All lessons tagged by discipline
// ============================================================
export const tracks: Track[] = [
  // ── PHASE 1 ─────────────────────────────────────────────────
  {
    id: 'phase-1-foundations',
    title: { en: 'Foundations', es: 'Fundamentos' },
    description: {
      en: 'Thinking like a Product Designer — mindset, context, and frameworks.',
      es: 'Pensar como Diseñador de Producto — mentalidad, contexto y marcos de trabajo.'
    },
    topics: [
      // beginner
      _t('ux-ui-product-design-intro', 'Core UX'),
      _t('usability-basics', 'Core UX'),
      _t('design-thinking', 'Core UX'),
      // intermediate
      _t('ux-process', 'Core UX'),
      _t('methodologies-overview', 'Core UX'),
      _t('lean-ux', 'Strategy'),
      _t('design-sprint', 'Strategy'),
      _t('scrum-for-designers', 'Strategy'),
      _t('user-stories-and-requirements', 'Product'),
    ]
  },
  // ── PHASE 2 ─────────────────────────────────────────────────
  {
    id: 'phase-2-discovery',
    title: { en: 'Problem Framing & Discovery', es: 'Definición del Problema y Descubrimiento' },
    description: {
      en: 'Start a project right — business goals, constraints, and competitive landscape.',
      es: 'Comienza un proyecto bien — objetivos de negocio, restricciones y panorama competitivo.'
    },
    topics: [
      // beginner
      _t('business-goals-kpis', 'Strategy'),
      _t('stakeholder-mapping', 'Strategy'),
      // intermediate
      _t('problem-statements', 'Core UX'),
      _t('competitive-analysis', 'Product'),
      _t('product-roadmapping', 'Strategy'),
      _t('release-planning-and-increment-strategy', 'Product'),
    ]
  },
  // ── PHASE 3 ─────────────────────────────────────────────────
  {
    id: 'phase-3-research',
    title: { en: 'Research & User Understanding', es: 'Investigación y Comprensión del Usuario' },
    description: {
      en: 'Understand real user behavior through research, personas, journeys, and psychology.',
      es: 'Comprende el comportamiento real del usuario mediante investigación, personas, viajes y psicología.'
    },
    topics: [
      // beginner
      _t('surveys-questionnaires', 'Core UX'),
      // intermediate
      _t('ux-research', 'Core UX'),
      _t('user-personas', 'Core UX'),
      _t('customer-journey-map', 'Core UX'),
      // advanced
      _t('ux-psychology', 'Core UX'),
      _t('laws-of-ux', 'Core UX'),
    ]
  },
  // ── PHASE 4 ─────────────────────────────────────────────────
  {
    id: 'phase-4-architecture',
    title: { en: 'Information Architecture & Structure', es: 'Arquitectura de Información y Estructura' },
    description: {
      en: 'Build product logic before designing the UI — organize, label, and map user paths.',
      es: 'Construye la lógica del producto antes de diseñar la UI — organiza, etiqueta y mapea caminos del usuario.'
    },
    topics: [
      _t('information-architecture', 'Core UX'),
      _t('card-sorting', 'Core UX'),
      _t('user-flows', 'Core UX'),
    ]
  },
  // ── PHASE 5 ─────────────────────────────────────────────────
  {
    id: 'phase-5-design',
    title: { en: 'Interaction & Interface Design', es: 'Diseño de Interacción e Interfaz' },
    description: {
      en: 'Design the solution — wireframes, visual design, typography, color, and microinteractions.',
      es: 'Diseña la solución — wireframes, diseño visual, tipografía, color y microinteracciones.'
    },
    topics: [
      // beginner (wireframes merged into wireframing-prototyping)
      _t('wireframing-prototyping', 'UI'),
      _t('visual-hierarchy', 'UI'),
      _t('typography-fundamentals', 'UI'),
      _t('color-theory', 'UI'),
      // intermediate
      _t('accessibility-wcag', 'UI'),
      // advanced
      _t('microinteractions', 'UI'),
      _t('heuristic-analysis', 'Core UX'),
      _t('edge-and-system-states', 'UI'),
    ]
  },
  // ── PHASE 6 ─────────────────────────────────────────────────
  {
    id: 'phase-6-validation',
    title: { en: 'Validation & Optimization', es: 'Validación y Optimización' },
    description: {
      en: 'Measure if the design works — usability testing, analytics, and accessibility audits.',
      es: 'Mide si el diseño funciona — pruebas de usabilidad, analítica y auditorías de accesibilidad.'
    },
    topics: [
      // intermediate
      _t('usability-testing', 'Core UX'),
      _t('prototyping-methods', 'Core UX'),
      // advanced
      _t('accessibility', 'Core UX'),
      _t('ux-metrics-advanced', 'Metrics'),
    ]
  },
  // ── PHASE 7 ─────────────────────────────────────────────────
  {
    id: 'phase-7-systems',
    title: { en: 'Systems & Scale', es: 'Sistemas y Escala' },
    description: {
      en: 'Think in enterprise products — atomic design, governance, ethics, and service blueprints.',
      es: 'Piensa en productos enterprise — diseño atómico, gobernanza, ética y service blueprints.'
    },
    topics: [
      _t('atomic-design', 'UI'),
      _t('figma-mastery', 'UI'),
      _t('design-systems-governance', 'Strategy'),
      _t('design-ethics', 'Strategy'),
      _t('service-blueprint', 'Strategy'),
      _t('ux-documentation-pro', 'Strategy'),
    ]
  },
  // ── PHASE 8 ─────────────────────────────────────────────────
  {
    id: 'phase-8-frontend',
    title: { en: 'Frontend for Designers', es: 'Frontend para Diseñadores' },
    description: {
      en: 'Technical complement — HTML, CSS, and JavaScript fundamentals for UX/UI designers.',
      es: 'Complemento técnico — fundamentos de HTML, CSS y JavaScript para diseñadores UX/UI.'
    },
    topics: [
      // beginner
      _t('html-fundamentals', 'Tech'),
      _t('css-fundamentals', 'Tech'),
      _t('intro-javascript', 'Tech'),
      // advanced (overview)
      _t('frontend-foundations', 'Tech'),
    ]
  },
  // ── PHASE 9 ─────────────────────────────────────────────────
  {
    id: 'phase-9-career',
    title: { en: 'Career & Professional Growth', es: 'Carrera y Crecimiento Profesional' },
    description: {
      en: 'Build your professional brand — portfolio storytelling, case study writing, and interview preparation.',
      es: 'Construye tu marca profesional — storytelling de portafolio, redacción de casos de estudio y preparación para entrevistas.'
    },
    topics: [
      // advanced
      _t('portfolio-case-study-writing', 'Strategy'),
    ]
  },
];

export interface Tool {
  id: string;
  name: string;
  category: 'foundation' | 'ai' | 'research' | 'systems' | 'frontend';
  level: number;
  icon: string;
  description: { en: string; es: string };
  bestFor: { en: string; es: string };
  tips: { en: string; es: string };
}

export const tools: Tool[] = [
  // Level 1: Foundations
  {
    id: 'figma',
    name: 'Figma',
    category: 'foundation',
    level: 1,
    icon: 'PenTool',
    description: { en: 'The industry standard for interface design and prototyping.', es: 'El estándar de la industria para el diseño de interfaces y prototipos.' },
    bestFor: { en: 'UI Design, Prototyping, Collaboration', es: 'Diseño UI, Prototipado, Colaboración' },
    tips: { en: 'Master Auto Layout early. It is the closest thing to CSS flexbox.', es: 'Domina Auto Layout pronto. Es lo más cercano a CSS flexbox.' }
  },
  {
    id: 'figjam',
    name: 'FigJam',
    category: 'foundation',
    level: 1,
    icon: 'StickyNote',
    description: { en: 'Whiteboarding tool for brainstorming and diagrams.', es: 'Herramienta de pizarra para lluvia de ideas y diagramas.' },
    bestFor: { en: 'Workshops, User Flows, Brainstorming', es: 'Talleres, Flujos de Usuario, Lluvia de Ideas' },
    tips: { en: 'Use sections to organize your board for export.', es: 'Usa secciones para organizar tu tablero para exportar.' }
  },
  
  // Level 2: Research & AI
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    category: 'ai',
    level: 2,
    icon: 'Bot',
    description: { en: 'AI language model for research analysis and ideation.', es: 'Modelo de lenguaje de IA para análisis de investigación e ideación.' },
    bestFor: { en: 'Copywriting, Research Synthesis, Ideation', es: 'Redacción, Síntesis de Investigación, Ideación' },
    tips: { en: 'Assign it a persona: "Act as a Senior UX Researcher..."', es: 'Asignale una persona: "Actúa como un Investigador UX Senior..."' }
  },
  {
    id: 'maze',
    name: 'Maze',
    category: 'research',
    level: 2,
    icon: 'Target',
    description: { en: 'Rapid testing platform for prototypes.', es: 'Plataforma de pruebas rápidas para prototipos.' },
    bestFor: { en: 'Unmoderated Usability Testing', es: 'Pruebas de Usabilidad No Moderadas' },
    tips: { en: 'Keep tasks short and specific to avoid user fatigue.', es: 'Mantén las tareas cortas y específicas para evitar la fatiga del usuario.' }
  },

  // Level 3: Systems & Frontend
  {
    id: 'storybook',
    name: 'Storybook',
    category: 'frontend',
    level: 3,
    icon: 'Book',
    description: { en: 'Frontend workshop for building UI components in isolation.', es: 'Taller frontend para construir componentes de UI de forma aislada.' },
    bestFor: { en: 'Design Systems, Component Documentation', es: 'Sistemas de Diseño, Documentación de Componentes' },
    tips: { en: 'Use it to audit your components against accessibility tests.', es: 'Úsalo para auditar tus componentes contra pruebas de accesibilidad.' }
  }
];

export interface Heuristic {
  id: string;
  number: string;
  category: 'usability' | 'psychology' | 'accessibility';
  title: { en: string; es: string };
  description: { en: string; es: string };
  example: { en: string; es: string };
}

export const heuristics: Heuristic[] = [
  // Usability Heuristics (Nielsen)
  {
    id: 'h1',
    number: '1',
    category: 'usability',
    title: { en: 'Visibility of system status', es: 'Visibilidad del estado del sistema' },
    description: {
      en: 'The design should always keep users informed about what is going on, through appropriate feedback within a reasonable amount of time.',
      es: 'El diseño siempre debe mantener a los usuarios informados sobre lo que está sucediendo, a través de retroalimentación adecuada dentro de un tiempo razonable.'
    },
    example: {
      en: 'A progress bar when uploading a file.',
      es: 'Una barra de progreso al subir un archivo.'
    }
  },
  {
    id: 'h2',
    number: '2',
    category: 'usability',
    title: { en: 'Match between system and the real world', es: 'Coincidencia entre el sistema y el mundo real' },
    description: {
      en: 'The design should speak the users\' language. Use words, phrases, and concepts familiar to the user, rather than internal jargon.',
      es: 'El diseño debe hablar el idioma de los usuarios. Usa palabras, frases y conceptos familiares para el usuario, en lugar de jerga interna.'
    },
    example: {
      en: 'Using a "Trash Can" icon to delete files, mimicking the real world.',
      es: 'Usar un icono de "Papelera" para eliminar archivos, imitando el mundo real.'
    }
  },
  {
    id: 'h3',
    number: '3',
    category: 'usability',
    title: { en: 'User control and freedom', es: 'Control y libertad del usuario' },
    description: {
      en: 'Users often perform actions by mistake. They need a clearly marked "emergency exit" to leave the unwanted action without having to go through an extended process.',
      es: 'Los usuarios a menudo realizan acciones por error. Necesitan una "salida de emergencia" claramente marcada para dejar la acción no deseada sin tener que pasar por un proceso extenso.'
    },
    example: {
      en: 'Undo/Redo functionality in a text editor.',
      es: 'Funcionalidad de Deshacer/Rehacer en un editor de texto.'
    }
  },
  {
    id: 'h4',
    number: '4',
    category: 'usability',
    title: { en: 'Consistency and standards', es: 'Consistencia y estándares' },
    description: {
      en: 'Users should not have to wonder whether different words, situations, or actions mean the same thing. Follow platform conventions.',
      es: 'Los usuarios no deberían tener que preguntarse si diferentes palabras, situaciones o acciones significan lo mismo. Sigue las convenciones de la plataforma.'
    },
    example: {
      en: 'The logo is always at the top left and links to the homepage.',
      es: 'El logo siempre está arriba a la izquierda y enlaza a la página de inicio.'
    }
  },
  {
    id: 'h5',
    number: '5',
    category: 'usability',
    title: { en: 'Error prevention', es: 'Prevención de errores' },
    description: {
      en: 'Good error messages are important, but the best designs carefully prevent problems from occurring in the first place.',
      es: 'Los buenos mensajes de error son importantes, pero los mejores diseños previenen cuidadosamente que los problemas ocurran en primer lugar.'
    },
    example: {
      en: 'Confirmation dialog before deleting an account.',
      es: 'Diálogo de confirmación antes de eliminar una cuenta.'
    }
  },
  {
    id: 'h6',
    number: '6',
    category: 'usability',
    title: { en: 'Recognition rather than recall', es: 'Reconocimiento en lugar de recordar' },
    description: {
      en: 'Minimize the user\'s memory load by making elements, actions, and options visible. The user should not have to remember information from one part of the interface to another.',
      es: 'Minimiza la carga de memoria del usuario haciendo visibles los elementos, acciones y opciones. El usuario no debería tener que recordar información de una parte de la interfaz a otra.'
    },
    example: {
      en: 'A "Recently Viewed" section on an e-commerce site.',
      es: 'Una sección de "Visto recientemente" en un sitio de comercio electrónico.'
    }
  },
  {
    id: 'h7',
    number: '7',
    category: 'usability',
    title: { en: 'Flexibility and efficiency of use', es: 'Flexibilidad y eficiencia de uso' },
    description: {
      en: 'Shortcuts — hidden from novice users — may speed up the interaction for the expert user such that the design can cater to both inexperienced and experienced users.',
      es: 'Los atajos — ocultos para los usuarios novatos — pueden acelerar la interacción para el usuario experto de modo que el diseño pueda atender tanto a usuarios inexpertos como experimentados.'
    },
    example: {
      en: 'Keyboard shortcuts (Ctrl+C, Ctrl+V).',
      es: 'Atajos de teclado (Ctrl+C, Ctrl+V).'
    }
  },
  {
    id: 'h8',
    number: '8',
    category: 'usability',
    title: { en: 'Aesthetic and minimalist design', es: 'Diseño estético y minimalista' },
    description: {
      en: 'Interfaces should not contain information which is irrelevant or rarely needed. Every extra unit of information in an interface competes with the relevant units of information.',
      es: 'Las interfaces no deben contener información irrelevante o que rara vez se necesite. Cada unidad extra de información en una interfaz compite con las unidades de información relevantes.'
    },
    example: {
      en: 'Google\'s clean homepage with just a search bar.',
      es: 'La página de inicio limpia de Google con solo una barra de búsqueda.'
    }
  },
  {
    id: 'h9',
    number: '9',
    category: 'usability',
    title: { en: 'Help users recognize, diagnose, and recover from errors', es: 'Ayudar a los usuarios a reconocer, diagnosticar y recuperarse de errores' },
    description: {
      en: 'Error messages should be expressed in plain language (no error codes), precisely indicate the problem, and constructively suggest a solution.',
      es: 'Los mensajes de error deben expresarse en lenguaje llano (sin códigos de error), indicar con precisión el problema y sugerir constructivamente una solución.'
    },
    example: {
      en: '"User not found" instead of "Error 404".',
      es: '"Usuario no encontrado" en lugar de "Error 404".'
    }
  },
  {
    id: 'h10',
    number: '10',
    category: 'usability',
    title: { en: 'Help and documentation', es: 'Ayuda y documentación' },
    description: {
      en: 'It’s best if the system doesn’t need any additional explanation. However, it may be necessary to provide documentation to help users understand how to complete their tasks.',
      es: 'Es mejor si el sistema no necesita ninguna explicación adicional. Sin embargo, puede ser necesario proporcionar documentación para ayudar a los usuarios a entender cómo completar sus tareas.'
    },
    example: {
      en: 'A concise FAQ or "Help" chat.',
      es: 'Una sección de preguntas frecuentes concisa o un chat de "Ayuda".'
    }
  },
  // Psychology Laws
  {
    id: 'law1',
    number: 'L1',
    category: 'psychology',
    title: { en: 'Hick\'s Law', es: 'Ley de Hick' },
    description: {
      en: 'The time it takes to make a decision increases with the number and complexity of choices.',
      es: 'El tiempo que se tarda en tomar una decisión aumenta con el número y la complejidad de las opciones.'
    },
    example: {
      en: 'Breaking a long form into multiple simple steps.',
      es: 'Dividir un formulario largo en múltiples pasos simples.'
    }
  },
  {
    id: 'law2',
    number: 'L2',
    category: 'psychology',
    title: { en: 'Fitts\'s Law', es: 'Ley de Fitts' },
    description: {
      en: 'The time to acquire a target is a function of the distance to and size of the target.',
      es: 'El tiempo para adquirir un objetivo es una función de la distancia y el tamaño del objetivo.'
    },
    example: {
      en: 'Making a "Submit" button large and easy to click.',
      es: 'Hacer que un botón de "Enviar" sea grande y fácil de hacer clic.'
    }
  },
  // Accessibility
   {
    id: 'a11y1',
    number: 'A1',
    category: 'accessibility',
    title: { en: 'Perceivable', es: 'Perceptible' },
    description: {
      en: 'Information and user interface components must be presentable to users in ways they can perceive.',
      es: 'La información y los componentes de la interfaz de usuario deben presentarse a los usuarios de manera que puedan percibirlos.'
    },
    example: {
      en: 'Adding alt text to images for screen readers.',
      es: 'Agregar texto alternativo a las imágenes para lectores de pantalla.'
    }
  }
];


