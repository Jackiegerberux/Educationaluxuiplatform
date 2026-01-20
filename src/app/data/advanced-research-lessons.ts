import type { Topic } from './content';

export const advancedResearchLessons: Topic[] = [
  {
    id: 'customer-journey-map',
    title: { en: 'Customer Journey Map', es: 'Mapa de Viaje del Cliente' },
    description: { en: 'Visualizing the end-to-end user experience across all touchpoints.', es: 'Visualizando la experiencia de usuario de principio a fin a través de todos los puntos de contacto.' },
    status: 'intermediate',
    timeEstimate: '1h 30min',
    reference: { en: 'Journey Mapping 101 - NN/g', es: 'Mapeo de Viaje 101 - NN/g' },
    referenceLink: 'https://www.nngroup.com/articles/customer-journey-mapping/',
    content: {
      definition: {
        en: 'A Customer Journey Map (CJM) is a visual representation of every experience your customers have with you. It tells the story of a customer\'s experience with your brand from original engagement through the journey of their relationship.',
        es: 'Un Mapa de Viaje del Cliente (CJM) es una representación visual de cada experiencia que tus clientes tienen contigo. Cuenta la historia de la experiencia de un cliente con tu marca desde el compromiso original hasta el viaje de su relación.'
      },
      why: {
        en: 'Journey maps reveal pain points, moments of delight, and opportunities for improvement. They align teams around the user perspective and help prioritize features based on actual user needs rather than assumptions.',
        es: 'Los mapas de viaje revelan puntos de dolor, momentos de deleite y oportunidades de mejora. Alinean equipos alrededor de la perspectiva del usuario y ayudan a priorizar características basadas en necesidades reales del usuario en lugar de suposiciones.'
      },
      keyPrinciples: {
        en: [
          'Stages: Key phases in the user journey (e.g., Discover → Consider → Apply → Wait → Use)',
          'Goals: What the user wants to accomplish in each stage',
          'Actions: Specific behaviors and activities users perform',
          'Touchpoints: Where users interact with your product/service (web, app, email, support)',
          'Emotions: How users feel at each stage (frustrated, excited, confused, satisfied)',
          'Pain Points: Obstacles, friction, or negative experiences',
          'Opportunities: Insights for improvement and innovation'
        ],
        es: [
          'Etapas: Fases clave en el viaje del usuario (ej: Descubrir → Considerar → Aplicar → Esperar → Usar)',
          'Objetivos: Lo que el usuario quiere lograr en cada etapa',
          'Acciones: Comportamientos y actividades específicas que realizan los usuarios',
          'Puntos de Contacto: Donde los usuarios interactúan con tu producto/servicio (web, app, email, soporte)',
          'Emociones: Cómo se sienten los usuarios en cada etapa (frustrado, emocionado, confundido, satisfecho)',
          'Puntos de Dolor: Obstáculos, fricción o experiencias negativas',
          'Oportunidades: Insights para mejora e innovación'
        ]
      },
      commonMistakes: {
        en: [
          'Mapping the ideal journey instead of the actual current experience',
          'Skipping user research and relying only on assumptions',
          'Making the map too detailed or too vague - find the right level of granularity',
          'Creating the map in isolation without cross-functional team input',
          'Not using the map after creation - it should drive decisions and roadmap'
        ],
        es: [
          'Mapear el viaje ideal en lugar de la experiencia actual real',
          'Saltarse la investigación de usuarios y confiar solo en suposiciones',
          'Hacer el mapa demasiado detallado o demasiado vago - encuentra el nivel correcto de granularidad',
          'Crear el mapa en aislamiento sin input del equipo multifuncional',
          'No usar el mapa después de crearlo - debe impulsar decisiones y roadmap'
        ]
      },
      howToApply: {
        steps: [
          {
            name: { en: 'Define Scope & Persona', es: 'Definir Alcance y Persona' },
            description: { en: 'Choose which user persona and scenario to map. Example: "First-time homebuyer applying for a mortgage." Define the journey boundaries (start and end point).', es: 'Elige qué persona de usuario y escenario mapear. Ejemplo: "Comprador de vivienda por primera vez solicitando una hipoteca." Define los límites del viaje (punto de inicio y fin).' }
          },
          {
            name: { en: 'Research User Experience', es: 'Investigar Experiencia de Usuario' },
            description: { en: 'Conduct user interviews, surveys, analytics review, and support ticket analysis. Gather real data about what users actually do, not what we think they do.', es: 'Realiza entrevistas de usuario, encuestas, revisión de analytics y análisis de tickets de soporte. Recopila datos reales sobre lo que los usuarios realmente hacen, no lo que pensamos que hacen.' }
          },
          {
            name: { en: 'Identify Journey Stages', es: 'Identificar Etapas del Viaje' },
            description: { en: 'Break down the journey into 4-7 key stages. Example: Discover → Consider → Apply → Wait → Use → Renewal. Each stage should represent a distinct phase with its own goals.', es: 'Divide el viaje en 4-7 etapas clave. Ejemplo: Descubrir → Considerar → Aplicar → Esperar → Usar → Renovación. Cada etapa debe representar una fase distinta con sus propios objetivos.' }
          },
          {
            name: { en: 'Map Actions & Touchpoints', es: 'Mapear Acciones y Puntos de Contacto' },
            description: { en: 'For each stage, document: What is the user doing? Where are they interacting with us? (website, app, phone call, email). List all channels.', es: 'Para cada etapa, documenta: ¿Qué está haciendo el usuario? ¿Dónde están interactuando con nosotros? (sitio web, app, llamada telefónica, email). Lista todos los canales.' }
          },
          {
            name: { en: 'Capture Emotions & Pain Points', es: 'Capturar Emociones y Puntos de Dolor' },
            description: { en: 'Plot emotional highs and lows. Use a 1-5 scale or graph. Identify pain points (friction, confusion, frustration) from research quotes.', es: 'Traza altos y bajos emocionales. Usa una escala 1-5 o gráfica. Identifica puntos de dolor (fricción, confusión, frustración) de citas de investigación.' }
          },
          {
            name: { en: 'Identify Opportunities', es: 'Identificar Oportunidades' },
            description: { en: 'For each pain point, brainstorm solutions. "How might we..." questions work well. Prioritize opportunities by impact vs effort.', es: 'Para cada punto de dolor, haz lluvia de ideas de soluciones. Las preguntas "¿Cómo podríamos...?" funcionan bien. Prioriza oportunidades por impacto vs esfuerzo.' }
          }
        ]
      },
      deliverables: {
        description: { en: 'Typical journey map format and structure.', es: 'Formato y estructura típica del mapa de viaje.' },
        items: {
          en: [
            'Visual journey map diagram: Horizontal timeline with stages, actions, touchpoints, emotions plotted',
            'Emotion curve: Line graph showing satisfaction over time',
            'Pain point list: Prioritized list of user friction points',
            'Opportunity backlog: Actionable initiatives ranked by priority',
            'Supporting research quotes: Real user feedback validating each insight'
          ],
          es: [
            'Diagrama visual de mapa de viaje: Línea de tiempo horizontal con etapas, acciones, puntos de contacto, emociones trazadas',
            'Curva de emoción: Gráfica de línea mostrando satisfacción a lo largo del tiempo',
            'Lista de puntos de dolor: Lista priorizada de puntos de fricción del usuario',
            'Backlog de oportunidades: Iniciativas accionables clasificadas por prioridad',
            'Citas de investigación de soporte: Retroalimentación real del usuario validando cada insight'
          ]
        }
      },
      practicalTools: {
        design: { en: ['Miro (journey map templates)', 'FigJam', 'UXPressia', 'Smaply'], es: ['Miro (plantillas de mapa de viaje)', 'FigJam', 'UXPressia', 'Smaply'] },
        research: { en: ['Dovetail (research synthesis)', 'Airtable (data organization)', 'Google Forms (surveys)'], es: ['Dovetail (síntesis de investigación)', 'Airtable (organización de datos)', 'Google Forms (encuestas)'] },
        handoff: { en: ['PDF export for stakeholders', 'Interactive Figma prototype', 'Miro board link'], es: ['Exportar PDF para stakeholders', 'Prototipo interactivo de Figma', 'Enlace de tablero de Miro'] }
      },
      aiInPractice: {
        description: { en: 'Use AI to analyze research and generate journey map insights.', es: 'Usa IA para analizar investigación y generar insights de mapa de viaje.' },
        prompts: [
          {
            tool: 'ChatGPT',
            context: { en: 'Journey stage brainstorming', es: 'Lluvia de ideas de etapas de viaje' },
            prompt: { en: 'I\'m mapping a customer journey for [product/service]. The user is [persona description]. What are the typical stages from awareness to loyal customer? Give me 5-7 stages.', es: 'Estoy mapeando un viaje de cliente para [producto/servicio]. El usuario es [descripción de persona]. ¿Cuáles son las etapas típicas desde awareness hasta cliente leal? Dame 5-7 etapas.' }
          },
          {
            tool: 'Claude',
            context: { en: 'Pain point analysis', es: 'Análisis de puntos de dolor' },
            prompt: { en: 'Here are 10 user interview quotes: [paste quotes]. Identify the top 5 pain points and categorize them by journey stage (Discover, Consider, Apply, Use).', es: 'Aquí hay 10 citas de entrevistas de usuario: [pegar citas]. Identifica los 5 principales puntos de dolor y categorízalos por etapa de viaje (Descubrir, Considerar, Aplicar, Usar).' }
          },
          {
            tool: 'ChatGPT',
            context: { en: 'Opportunity generation', es: 'Generación de oportunidades' },
            prompt: { en: 'Given this pain point: "[pain point description]", generate 5 "How might we..." opportunity statements that could solve this problem.', es: 'Dado este punto de dolor: "[descripción de punto de dolor]", genera 5 declaraciones de oportunidad "¿Cómo podríamos...?" que podrían resolver este problema.' }
          }
        ]
      },
      howToValidate: {
        what: { 
          en: 'Validate that your journey map accurately reflects real user experience and drives actionable insights.',
          es: 'Validar que tu mapa de viaje refleja con precisión la experiencia real del usuario e impulsa insights accionables.'
        },
        methods: { 
          en: [
            'User validation: Show the map to 3-5 users and ask "Does this match your experience?"',
            'Stakeholder review: Present to cross-functional team (Product, Engineering, Support, Marketing) for completeness',
            'Support ticket analysis: Compare pain points in the map to actual support tickets - do they align?',
            'Analytics validation: Use product analytics to confirm drop-off points match identified friction'
          ],
          es: [
            'Validación de usuario: Muestra el mapa a 3-5 usuarios y pregunta "¿Esto coincide con tu experiencia?"',
            'Revisión de stakeholder: Presenta al equipo multifuncional (Producto, Ingeniería, Soporte, Marketing) para completitud',
            'Análisis de tickets de soporte: Compara puntos de dolor en el mapa con tickets de soporte reales - ¿se alinean?',
            'Validación de analytics: Usa analytics de producto para confirmar que puntos de abandono coinciden con fricción identificada'
          ]
        },
        tools: { 
          en: ['UserTesting (validation interviews)', 'Hotjar (session recordings)', 'Mixpanel (funnel analysis)', 'Zendesk (support data)'],
          es: ['UserTesting (entrevistas de validación)', 'Hotjar (grabaciones de sesión)', 'Mixpanel (análisis de funnel)', 'Zendesk (datos de soporte)']
        },
        evidenceExample: { 
          en: 'Your journey map reveals that 60% of users abandon during the "Wait" stage. Analytics confirm a 65% drop-off at the same point. Support tickets show frustration about unclear status updates. This validates the pain point and opportunity.',
          es: 'Tu mapa de viaje revela que el 60% de usuarios abandonan durante la etapa "Esperar". Analytics confirman un 65% de abandono en el mismo punto. Tickets de soporte muestran frustración sobre actualizaciones de estado poco claras. Esto valida el punto de dolor y oportunidad.'
        }
      },
      quiz: [
        {
          question: { en: 'What is the primary purpose of a Customer Journey Map?', es: '¿Cuál es el propósito principal de un Mapa de Viaje del Cliente?' },
          options: {
            en: ['To create a beautiful diagram for presentations', 'To visualize and understand the full user experience across touchpoints', 'To replace user research', 'To document the product roadmap'],
            es: ['Crear un diagrama hermoso para presentaciones', 'Visualizar y entender la experiencia completa del usuario a través de puntos de contacto', 'Reemplazar la investigación de usuarios', 'Documentar el roadmap de producto']
          },
          correctIndex: 1,
          explanation: {
            en: 'A journey map\'s main goal is to visualize the complete user experience across all stages and touchpoints, revealing pain points and opportunities. It\'s a research-based tool that drives decision-making, not just a presentation artifact.',
            es: 'El objetivo principal de un mapa de viaje es visualizar la experiencia completa del usuario a través de todas las etapas y puntos de contacto, revelando puntos de dolor y oportunidades. Es una herramienta basada en investigación que impulsa la toma de decisiones, no solo un artefacto de presentación.'
          }
        },
        {
          question: { en: 'Which element should be included in every journey map stage?', es: '¿Qué elemento debe incluirse en cada etapa del mapa de viaje?' },
          options: {
            en: ['User emotions', 'Competitor analysis', 'Technical specifications', 'Design mockups'],
            es: ['Emociones del usuario', 'Análisis competitivo', 'Especificaciones técnicas', 'Mockups de diseño']
          },
          correctIndex: 0,
          explanation: {
            en: 'User emotions are essential to every journey stage because they reveal satisfaction, frustration, and moments of delight. Understanding how users feel helps prioritize improvements and identify critical pain points.',
            es: 'Las emociones del usuario son esenciales para cada etapa del viaje porque revelan satisfacción, frustración y momentos de deleite. Entender cómo se sienten los usuarios ayuda a priorizar mejoras e identificar puntos de dolor críticos.'
          }
        }
      ],
      realExample: {
        title: { en: 'Airbnb Guest Journey Map', es: 'Mapa de Viaje de Huésped de Airbnb' },
        description: {
          en: 'Airbnb mapped the guest booking journey and discovered a major pain point: uncertainty about host responsiveness. This led to features like "Superhosts" (verified responsive hosts), instant booking, and smart pricing. The journey map revealed that guests felt anxious during the "Wait for host approval" stage, leading to the creation of instant booking to eliminate that friction entirely.',
          es: 'Airbnb mapeó el viaje de reserva de huéspedes y descubrió un punto de dolor importante: incertidumbre sobre la capacidad de respuesta del anfitrión. Esto llevó a características como "Superhosts" (anfitriones responsivos verificados), reserva instantánea y precios inteligentes. El mapa de viaje reveló que los huéspedes se sentían ansiosos durante la etapa "Esperar aprobación del anfitrión", lo que llevó a la creación de la reserva instantánea para eliminar esa fricción por completo.'
        },
        company: 'Airbnb'
      }
    }
  },
  {
    id: 'service-blueprint',
    title: { en: 'Service Blueprint', es: 'Service Blueprint' },
    description: { en: 'Mapping backend processes that support customer experience', es: 'Mapear procesos backend que apoyan experiencia del cliente' },
    status: 'advanced',
    timeEstimate: '2h',
    reference: { en: 'Service Blueprinting - NN/g', es: 'Service Blueprinting - NN/g' },
    referenceLink: 'https://www.nngroup.com/articles/service-blueprints-definition/',
    content: {
      definition: {
        en: 'A Service Blueprint visualizes organizational processes directly tied to customer touchpoints. It extends journey maps to show frontstage (visible) and backstage (invisible) actions, support systems, and evidence.',
        es: 'Un Service Blueprint visualiza procesos organizacionales vinculados a touchpoints del cliente. Extiende mapas de viaje para mostrar acciones frontstage (visibles) y backstage (invisibles), sistemas de soporte y evidencia.'
      },
      why: {
        en: 'While journey maps show user experience, blueprints reveal how your organization delivers it. They expose operational inefficiencies, dependencies, and process improvement opportunities critical for service design.',
        es: 'Mientras mapas de viaje muestran experiencia del usuario, blueprints revelan cómo tu organización la entrega. Exponen ineficiencias operacionales, dependencias y oportunidades de mejora críticas para diseño de servicios.'
      },
      keyPrinciples: {
        en: [
          'User Actions: What customers do (same as journey map top layer)',
          'Line of Interaction: Boundary where customers interact with service',
          'Frontstage: Employee/system actions customers CAN see',
          'Line of Visibility: Separates visible from invisible actions',
          'Backstage: Employee/system actions customers CANNOT see',
          'Support Processes: Internal systems enabling the service',
          'Physical Evidence: Tangible artifacts at touchpoints'
        ],
        es: [
          'Acciones del Usuario: Lo que clientes hacen (igual que capa superior de mapa de viaje)',
          'Línea de Interacción: Límite donde clientes interactúan con servicio',
          'Frontstage: Acciones de empleado/sistema que clientes PUEDEN ver',
          'Línea de Visibilidad: Separa acciones visibles de invisibles',
          'Backstage: Acciones de empleado/sistema que clientes NO PUEDEN ver',
          'Procesos de Soporte: Sistemas internos que habilitan servicio',
          'Evidencia Física: Artefactos tangibles en touchpoints'
        ]
      },
      commonMistakes: {
        en: [
          'Confusing blueprint with journey map - different purposes',
          'Not involving operational teams in creation',
          'Too detailed - focus on key processes',
          'Missing dependencies between frontstage/backstage',
          'Creating without journey map first'
        ],
        es: [
          'Confundir blueprint con mapa de viaje - diferentes propósitos',
          'No involucrar equipos operacionales',
          'Demasiado detallado - enfócate en procesos clave',
          'Faltan dependencias entre frontstage/backstage',
          'Crear sin mapa de viaje primero'
        ]
      },
      howToApply: {
        steps: [
          {
            name: { en: 'Start with Journey Map', es: 'Comenzar con Mapa de Viaje' },
            description: { en: 'Build on existing journey map. Use same stages and customer actions as foundation.', es: 'Construir sobre mapa de viaje existente. Usa mismas etapas y acciones como base.' }
          },
          {
            name: { en: 'Map Frontstage', es: 'Mapear Frontstage' },
            description: { en: 'For each action, what does organization do that customer sees? Interview frontline staff.', es: 'Para cada acción, ¿qué hace organización que cliente ve? Entrevista personal de primera línea.' }
          },
          {
            name: { en: 'Identify Backstage', es: 'Identificar Backstage' },
            description: { en: 'What happens behind scenes? Interview operations teams. Map invisible processes.', es: '¿Qué pasa detrás de escena? Entrevista equipos de operaciones. Mapea procesos invisibles.' }
          },
          {
            name: { en: 'Document Support', es: 'Documentar Soporte' },
            description: { en: 'What tech/systems support each process? Show dependencies between systems.', es: '¿Qué tech/sistemas soportan cada proceso? Muestra dependencias entre sistemas.' }
          },
          {
            name: { en: 'Add Evidence', es: 'Agregar Evidencia' },
            description: { en: 'What tangible artifacts exist? Receipt, email, physical space. These create experience.', es: '¿Qué artefactos tangibles existen? Recibo, email, espacio físico. Estos crean experiencia.' }
          },
          {
            name: { en: 'Find Opportunities', es: 'Encontrar Oportunidades' },
            description: { en: 'Where are bottlenecks? Where do front/backstage misalign? Prioritize fixes.', es: '¿Dónde están cuellos de botella? ¿Dónde front/backstage no se alinean? Prioriza arreglos.' }
          }
        ]
      },
      deliverables: {
        description: { en: 'Blueprint documentation outputs', es: 'Outputs de documentación de blueprint' },
        items: {
          en: [
            'Blueprint diagram: 5 layers (user/frontstage/backstage/support/evidence)',
            'Process flow docs',
            'System dependency map',
            'Opportunity backlog',
            'Alignment workshop deck'
          ],
          es: [
            'Diagrama de blueprint: 5 capas (usuario/frontstage/backstage/soporte/evidencia)',
            'Docs de flujo de proceso',
            'Mapa de dependencias de sistema',
            'Backlog de oportunidades',
            'Deck de workshop de alineación'
          ]
        }
      },
      practicalTools: {
        design: { en: ['Miro', 'Lucidchart', 'FigJam'], es: ['Miro', 'Lucidchart', 'FigJam'] },
        research: { en: ['Process mining tools', 'Employee interviews'], es: ['Herramientas de minería de procesos', 'Entrevistas a empleados'] },
        handoff: { en: ['Visio flowchart', 'Confluence'], es: ['Diagrama Visio', 'Confluence'] }
      },
      aiInPractice: {
        description: { en: 'Use AI to map processes', es: 'Usa IA para mapear procesos' },
        prompts: [
          {
            tool: 'ChatGPT',
            context: { en: 'Backstage mapping', es: 'Mapeo backstage' },
            prompt: { en: 'Customer action: "[action]". What backstage processes support this in [service type]? List 5-7 steps.', es: 'Acción cliente: "[acción]". ¿Qué procesos backstage apoyan esto en [tipo servicio]? Lista 5-7 pasos.' }
          },
          {
            tool: 'Claude',
            context: { en: 'System dependencies', es: 'Dependencias sistema' },
            prompt: { en: 'Processes: [list]. What tech systems needed? Table: Process → System → Integration.', es: 'Procesos: [lista]. ¿Qué sistemas tech necesarios? Tabla: Proceso → Sistema → Integración.' }
          },
          {
            tool: 'ChatGPT',
            context: { en: 'Process optimization', es: 'Optimización proceso' },
            prompt: { en: 'Blueprint: [describe]. Identify 5 bottlenecks and suggest improvements.', es: 'Blueprint: [describir]. Identifica 5 cuellos de botella y sugiere mejoras.' }
          }
        ]
      },
      howToValidate: {
        what: {
          en: 'Validate blueprint represents operational reality',
          es: 'Validar blueprint representa realidad operacional'
        },
        methods: {
          en: [
            'Walk through with ops teams',
            'Observe actual processes',
            'Compare to system architecture',
            'Pilot test one improvement'
          ],
          es: [
            'Recorrer con equipos de ops',
            'Observar procesos reales',
            'Comparar con arquitectura de sistema',
            'Prueba piloto una mejora'
          ]
        },
        tools: {
          en: ['Process mining', 'Employee feedback', 'System logs'],
          es: ['Minería de procesos', 'Feedback de empleados', 'Logs de sistema']
        },
        evidenceExample: {
          en: 'Blueprint shows agents check 3 systems manually (4min avg). After consolidating to one dashboard, resolution drops to 45sec.',
          es: 'Blueprint muestra agentes verifican 3 sistemas manualmente (4min prom). Después de consolidar a un dashboard, resolución cae a 45seg.'
        }
      },
      quiz: [
        {
          question: { en: 'Key difference: Journey Map vs Service Blueprint?', es: 'Diferencia clave: Mapa Viaje vs Service Blueprint?' },
          options: {
            en: ['Blueprint shows backend processes', 'Blueprint is for business', 'Blueprint is text-based', 'Same thing'],
            es: ['Blueprint muestra procesos backend', 'Blueprint es para negocio', 'Blueprint es basado en texto', 'Misma cosa']
          },
          correctIndex: 0,
          explanation: {
            en: 'Journey map shows external user experience. Blueprint extends this to show internal processes (frontstage/backstage) delivering that experience.',
            es: 'Mapa de viaje muestra experiencia externa. Blueprint extiende esto para mostrar procesos internos (frontstage/backstage) entregando esa experiencia.'
          }
        },
        {
          question: { en: 'Which layer shows actions customers see?', es: '¿Qué capa muestra acciones que clientes ven?' },
          options: {
            en: ['Backstage', 'Frontstage', 'Support', 'Evidence'],
            es: ['Backstage', 'Frontstage', 'Soporte', 'Evidencia']
          },
          correctIndex: 1,
          explanation: {
            en: 'Frontstage actions are visible to customers. Line of visibility separates frontstage from backstage (invisible).',
            es: 'Acciones frontstage son visibles para clientes. Línea de visibilidad separa frontstage de backstage (invisible).'
          }
        }
      ],
      realExample: {
        title: { en: 'Airbnb Booking Blueprint', es: 'Blueprint Reserva Airbnb' },
        description: {
          en: 'Airbnb blueprinted booking flow. Frontstage: confirmation displays. Backstage: payment processes, fraud detection, host notification, calendar sync, insurance generation. Blueprint revealed hosts missed notifications, leading to push notifications and in-app alerts.',
          es: 'Airbnb creó blueprint de flujo de reserva. Frontstage: confirmación se muestra. Backstage: pago procesa, detección fraude, notificación anfitrión, sincronización calendario, generación seguro. Blueprint reveló anfitriones perdían notificaciones, llevando a notificaciones push y alertas en app.'
        },
        company: 'Airbnb'
      }
    }
  }
];