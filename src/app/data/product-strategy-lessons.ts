import type { Topic } from './content';

export const productStrategyLessons: Topic[] = [
  {
    id: 'problem-statements',
    title: { en: 'Problem Statements', es: 'Declaraciones de Problema' },
    description: { 
      en: 'Defining the right problem to solve before jumping to solutions.',
      es: 'Definir el problema correcto a resolver antes de saltar a soluciones.'
    },
    status: 'intermediate',
    timeEstimate: '1h',
    reference: { en: 'Problem Framing - IDEO', es: 'Encuadre de Problema - IDEO' },
    referenceLink: 'https://www.nngroup.com/articles/problem-statements/',
    content: {
      definition: {
        en: 'A problem statement is a concise description of the issue that needs to be addressed. It focuses on the user, their needs, and the gap between their current state and desired state, without prescribing a solution.',
        es: 'Una declaración de problema es una descripción concisa del issue que necesita ser abordado. Se enfoca en el usuario, sus necesidades y la brecha entre su estado actual y estado deseado, sin prescribir una solución.'
      },
      why: {
        en: 'Jumping to solutions before understanding the problem leads to building features nobody needs. A good problem statement aligns teams on what to solve, prevents scope creep, and ensures you\'re solving real user problems, not imagined ones.',
        es: 'Saltar a soluciones antes de entender el problema lleva a construir características que nadie necesita. Una buena declaración de problema alinea equipos en qué resolver, previene scope creep y asegura que estás resolviendo problemas reales de usuarios, no imaginados.'
      },
      keyPrinciples: {
        en: [
          'User-centered: Focus on the user, not the business or technology',
          'Specific: Avoid vague statements like "improve user experience"',
          'Actionable: Should inspire ideas and solutions',
          'Measurable: Include criteria for success',
          'Format: "[User] needs [need] because [insight]" or "How might we..."',
          'No solutions: Don\'t prescribe how to solve it yet'
        ],
        es: [
          'Centrado en usuario: Enfócate en el usuario, no en el negocio o tecnología',
          'Específico: Evita declaraciones vagas como "mejorar experiencia de usuario"',
          'Accionable: Debe inspirar ideas y soluciones',
          'Medible: Incluir criterios para éxito',
          'Formato: "[Usuario] necesita [necesidad] porque [insight]" o "¿Cómo podríamos..."',
          'Sin soluciones: No prescribas cómo resolverlo todavía'
        ]
      },
      commonMistakes: {
        en: [
          'Solution disguised as problem: "We need a mobile app" (that\'s a solution)',
          'Too broad: "Users want better design" (what aspect? which users?)',
          'Business-focused: "We need to increase revenue" (not user-centered)',
          'Multiple problems in one statement (split them up)',
          'Based on assumptions instead of research data'
        ],
        es: [
          'Solución disfrazada de problema: "Necesitamos una app móvil" (esa es una solución)',
          'Demasiado amplio: "Los usuarios quieren mejor diseño" (¿qué aspecto? ¿cuáles usuarios?)',
          'Enfocado en negocio: "Necesitamos aumentar ingresos" (no centrado en usuario)',
          'Múltiples problemas en una declaración (divídelos)',
          'Basado en suposiciones en lugar de datos de investigación'
        ]
      },
      howToApply: {
        steps: [
          {
            name: { en: 'Conduct User Research', es: 'Realizar Investigación de Usuario' },
            description: { 
              en: 'Interview users, analyze support tickets, review analytics. Identify pain points and unmet needs. Example: Users abandon checkout at shipping step.',
              es: 'Entrevista usuarios, analiza tickets de soporte, revisa analytics. Identifica puntos de dolor y necesidades no satisfechas. Ejemplo: Los usuarios abandonan checkout en paso de envío.'
            }
          },
          {
            name: { en: 'Identify the Core Problem', es: 'Identificar el Problema Central' },
            description: { 
              en: 'What is the root cause? Use 5 Whys technique. Example: Why do users abandon? → Shipping options are confusing → Why? → No estimated delivery dates shown.',
              es: '¿Cuál es la causa raíz? Usa técnica de 5 Por Qués. Ejemplo: ¿Por qué los usuarios abandonan? → Las opciones de envío son confusas → ¿Por qué? → No se muestran fechas de entrega estimadas.'
            }
          },
          {
            name: { en: 'Write Problem Statement', es: 'Escribir Declaración de Problema' },
            description: { 
              en: 'Use format: "[User persona] needs [need] because [insight]" Example: "Online shoppers need clear delivery timelines because they want to know when products will arrive before committing to purchase."',
              es: 'Usa formato: "[Persona de usuario] necesita [necesidad] porque [insight]" Ejemplo: "Los compradores en línea necesitan líneas de tiempo de entrega claras porque quieren saber cuándo llegarán los productos antes de comprometerse a comprar."'
            }
          },
          {
            name: { en: 'Validate with Team', es: 'Validar con Equipo' },
            description: { 
              en: 'Present to stakeholders. Does everyone agree this is the right problem? Is it specific enough? Is it backed by data?',
              es: 'Presenta a stakeholders. ¿Todos están de acuerdo en que este es el problema correcto? ¿Es suficientemente específico? ¿Está respaldado por datos?'
            }
          },
          {
            name: { en: 'Use in Design Process', es: 'Usar en Proceso de Diseño' },
            description: { 
              en: 'Refer back to problem statement when evaluating solutions. Does this solution actually address the stated problem?',
              es: 'Refiere de vuelta a la declaración de problema al evaluar soluciones. ¿Esta solución realmente aborda el problema declarado?'
            }
          }
        ]
      },
      deliverables: {
        description: { en: 'Problem statement documentation.', es: 'Documentación de declaración de problema.' },
        items: {
          en: [
            'Problem statement: Clear, concise statement of the user problem',
            'Supporting research: Data and quotes validating the problem',
            'User persona: Who experiences this problem',
            'Success criteria: How we\'ll know the problem is solved',
            'How Might We questions: Reframed as opportunity statements'
          ],
          es: [
            'Declaración de problema: Declaración clara y concisa del problema del usuario',
            'Investigación de soporte: Datos y citas validando el problema',
            'Persona de usuario: Quién experimenta este problema',
            'Criterios de éxito: Cómo sabremos que el problema está resuelto',
            'Preguntas Cómo Podríamos: Re-enmarcadas como declaraciones de oportunidad'
          ]
        }
      },
      practicalTools: {
        design: { 
          en: ['Miro (workshops)', 'FigJam', 'Notion'], 
          es: ['Miro (talleres)', 'FigJam', 'Notion'] 
        },
        research: { 
          en: ['User interview transcripts', 'Support ticket analysis', 'Analytics data'], 
          es: ['Transcripciones de entrevistas de usuario', 'Análisis de tickets de soporte', 'Datos de analytics'] 
        },
        handoff: { 
          en: ['Notion (documentation)', 'Confluence', 'Google Docs'], 
          es: ['Notion (documentación)', 'Confluence', 'Google Docs'] 
        }
      },
      aiInPractice: {
        description: { 
          en: 'Use AI to refine problem statements and generate How Might We questions.',
          es: 'Usa IA para refinar declaraciones de problema y generar preguntas Cómo Podríamos.'
        },
        prompts: [
          {
            tool: 'ChatGPT',
            context: { en: 'Refining problem statement', es: 'Refinando declaración de problema' },
            prompt: { 
              en: 'Here\'s my problem statement: "[your statement]". Rewrite it to be more specific, user-centered, and actionable.',
              es: 'Aquí está mi declaración de problema: "[tu declaración]". Re-escríbela para ser más específica, centrada en usuario y accionable.'
            }
          },
          {
            tool: 'Claude',
            context: { en: 'Generating HMW questions', es: 'Generando preguntas Cómo Podríamos' },
            prompt: { 
              en: 'Based on this problem: "[problem]", generate 5 "How Might We" questions that reframe it as opportunities for design solutions.',
              es: 'Basado en este problema: "[problema]", genera 5 preguntas "Cómo Podríamos" que lo re-enmarquen como oportunidades para soluciones de diseño.'
            }
          }
        ]
      },
      howToValidate: {
        what: { 
          en: 'Validate that your problem statement accurately represents a real user need backed by research.',
          es: 'Validar que tu declaración de problema representa precisamente una necesidad real del usuario respaldada por investigación.'
        },
        methods: { 
          en: [
            'Research validation: Can you cite specific user quotes or data supporting the problem?',
            'Frequency: How many users experience this problem?',
            'Impact: How severely does this affect users? (blocking vs. minor inconvenience)',
            'Business alignment: Does solving this problem also support business goals?'
          ],
          es: [
            'Validación de investigación: ¿Puedes citar citas de usuario específicas o datos que respalden el problema?',
            'Frecuencia: ¿Cuántos usuarios experimentan este problema?',
            'Impacto: ¿Qué tan severamente esto afecta a los usuarios? (bloqueante vs. inconveniencia menor)',
            'Alineación de negocio: ¿Resolver este problema también apoya objetivos de negocio?'
          ]
        },
        tools: { 
          en: ['User research database', 'Analytics dashboards', 'Support ticket systems'],
          es: ['Base de datos de investigación de usuario', 'Dashboards de analytics', 'Sistemas de tickets de soporte']
        },
        evidenceExample: { 
          en: 'Problem statement: "First-time users need guidance during setup because 60% abandon the onboarding flow at step 3 (from analytics)." You validate with user interviews that confirm confusion at that step.',
          es: 'Declaración de problema: "Los usuarios por primera vez necesitan guía durante la configuración porque el 60% abandona el flujo de onboarding en el paso 3 (de analytics)." Validas con entrevistas de usuario que confirman confusión en ese paso.'
        }
      },
      quiz: [
        {
          question: { 
            en: 'Which of these is a well-written problem statement?',
            es: '¿Cuál de estas es una declaración de problema bien escrita?'
          },
          options: {
            en: [
              'We need to build a mobile app',
              'Users want better design',
              'Busy parents need a faster way to schedule appointments because they struggle to find time during work hours',
              'Our conversion rate is too low'
            ],
            es: [
              'Necesitamos construir una app móvil',
              'Los usuarios quieren mejor diseño',
              'Los padres ocupados necesitan una forma más rápida de programar citas porque tienen dificultades para encontrar tiempo durante horas de trabajo',
              'Nuestra tasa de conversión es demasiado baja'
            ]
          },
          correctIndex: 2,
          explanation: {
            en: 'Option 3 is user-centered, specific, and includes insight into the root cause. It focuses on the problem (slow scheduling, time constraints) rather than a solution (mobile app). Options 1, 2, and 4 are too vague or solution-focused.',
            es: 'La opción 3 está centrada en el usuario, es específica e incluye insight sobre la causa raíz. Se enfoca en el problema (programación lenta, restricciones de tiempo) en lugar de una solución (app móvil). Las opciones 1, 2 y 4 son demasiado vagas o enfocadas en solución.'
          }
        },
        {
          question: { 
            en: 'What is the main purpose of the "5 Whys" technique in problem framing?',
            es: '¿Cuál es el propósito principal de la técnica de los "5 Por Qués" en el encuadre de problema?'
          },
          options: {
            en: [
              'To generate five different problem statements',
              'To drill down from surface symptoms to the root cause',
              'To interview five different users about the same problem',
              'To prioritize five features for the MVP'
            ],
            es: [
              'Generar cinco declaraciones de problema diferentes',
              'Profundizar desde los síntomas superficiales hasta la causa raíz',
              'Entrevistar a cinco usuarios diferentes sobre el mismo problema',
              'Priorizar cinco características para el MVP'
            ]
          },
          correctIndex: 1,
          explanation: {
            en: 'The 5 Whys technique involves repeatedly asking "Why?" (typically five times) to peel away surface-level symptoms and discover the underlying root cause. This prevents teams from solving symptoms instead of real problems.',
            es: 'La técnica de los 5 Por Qués implica preguntar repetidamente "¿Por qué?" (típicamente cinco veces) para quitar los síntomas superficiales y descubrir la causa raíz subyacente. Esto previene que los equipos resuelvan síntomas en lugar de problemas reales.'
          }
        }
      ],
      realExample: {
        title: { en: 'Slack\'s Search Problem', es: 'Problema de Búsqueda de Slack' },
        description: {
          en: 'Early Slack users reported "I can\'t find messages from last week." The problem statement: "Remote teams need to quickly find past conversations because they reference them frequently to stay aligned." This led to improved search filters and message threading.',
          es: 'Los usuarios tempranos de Slack reportaron "No puedo encontrar mensajes de la semana pasada." La declaración de problema: "Los equipos remotos necesitan encontrar rápidamente conversaciones pasadas porque las referencian frecuentemente para mantenerse alineados." Esto llevó a filtros de búsqueda mejorados y enhebrado de mensajes.'
        },
        company: 'Slack'
      }
    }
  },
  {
    id: 'service-blueprint',
    title: { en: 'Service Blueprint', es: 'Blueprint de Servicio' },
    description: { 
      en: 'Mapping the entire service ecosystem including frontstage and backstage processes.',
      es: 'Mapear todo el ecosistema del servicio incluyendo procesos de frente y tras bambalinas.'
    },
    status: 'advanced',
    timeEstimate: '1h 45min',
    reference: { en: 'Service Blueprints - NN/g', es: 'Blueprints de Servicio - NN/g' },
    referenceLink: 'https://www.nngroup.com/articles/service-blueprints-definition/',
    content: {
      definition: {
        en: 'A service blueprint is a diagram that visualizes the relationships between service components (people, props, processes) that are directly tied to touchpoints in a customer journey. It reveals both frontstage (visible to users) and backstage (behind the scenes) operations.',
        es: 'Un blueprint de servicio es un diagrama que visualiza las relaciones entre componentes del servicio (personas, props, procesos) que están directamente vinculados a puntos de contacto en un viaje del cliente. Revela operaciones tanto de frontstage (visibles para usuarios) como backstage (tras bambalinas).'
      },
      why: {
        en: 'Unlike journey maps (user view only), blueprints show the full operational context. They identify inefficiencies, dependencies, and failure points in service delivery. Essential for complex services with multiple touchpoints and teams.',
        es: 'A diferencia de los mapas de viaje (solo vista del usuario), los blueprints muestran el contexto operacional completo. Identifican ineficiencias, dependencias y puntos de falla en la entrega del servicio. Esenciales para servicios complejos con múltiples puntos de contacto y equipos.'
      },
      keyPrinciples: {
        en: [
          'Five key elements: Customer actions, Frontstage (visible interactions), Backstage (invisible processes), Support processes, Physical evidence',
          'Line of interaction: Separates customer actions from service provider actions',
          'Line of visibility: Separates frontstage (visible) from backstage (invisible)',
          'Line of internal interaction: Separates backstage from support processes',
          'Touchpoints: Where customer interacts with service (website, phone, email, store)',
          'Time-based: Shows sequence from left to right'
        ],
        es: [
          'Cinco elementos clave: Acciones del cliente, Frontstage (interacciones visibles), Backstage (procesos invisibles), Procesos de soporte, Evidencia física',
          'Línea de interacción: Separa acciones del cliente de acciones del proveedor de servicio',
          'Línea de visibilidad: Separa frontstage (visible) de backstage (invisible)',
          'Línea de interacción interna: Separa backstage de procesos de soporte',
          'Puntos de contacto: Donde el cliente interactúa con el servicio (sitio web, teléfono, email, tienda)',
          'Basado en tiempo: Muestra secuencia de izquierda a derecha'
        ]
      },
      commonMistakes: {
        en: [
          'Confusing with journey map: Blueprints show operations, journey maps show emotions',
          'Only showing frontstage: The value is in revealing backstage processes',
          'Too detailed or too vague: Find right level of granularity',
          'Not involving cross-functional teams: Need input from ops, tech, support',
          'Creating it once and never updating: Services evolve, blueprints should too'
        ],
        es: [
          'Confundir con mapa de viaje: Los blueprints muestran operaciones, los mapas de viaje muestran emociones',
          'Solo mostrar frontstage: El valor está en revelar procesos backstage',
          'Demasiado detallado o demasiado vago: Encuentra el nivel correcto de granularidad',
          'No involucrar equipos multifuncionales: Necesita input de ops, tech, soporte',
          'Crearlo una vez y nunca actualizarlo: Los servicios evolucionan, los blueprints también deberían'
        ]
      },
      howToApply: {
        steps: [
          {
            name: { en: 'Choose Service Scenario', es: 'Elegir Escenario de Servicio' },
            description: { 
              en: 'Pick a specific user journey to blueprint. Example: "Customer orders food delivery" or "Patient books a doctor appointment." Keep scope focused.',
              es: 'Elige un viaje de usuario específico para hacer blueprint. Ejemplo: "Cliente ordena entrega de comida" o "Paciente reserva cita con doctor." Mantén el alcance enfocado.'
            }
          },
          {
            name: { en: 'Map Customer Actions', es: 'Mapear Acciones del Cliente' },
            description: { 
              en: 'Top row: What does the customer do? Example: Opens app → Browses menu → Adds items to cart → Checks out → Tracks delivery.',
              es: 'Fila superior: ¿Qué hace el cliente? Ejemplo: Abre app → Navega menú → Agrega elementos al carrito → Checkout → Rastrea entrega.'
            }
          },
          {
            name: { en: 'Map Frontstage Actions', es: 'Mapear Acciones Frontstage' },
            description: { 
              en: 'Below line of interaction: What service provider does that\'s visible to customer? Example: App displays menu → Shows cart total → Confirms order.',
              es: 'Debajo de línea de interacción: ¿Qué hace el proveedor de servicio que es visible para el cliente? Ejemplo: App muestra menú → Muestra total del carrito → Confirma orden.'
            }
          },
          {
            name: { en: 'Map Backstage Actions', es: 'Mapear Acciones Backstage' },
            description: { 
              en: 'Below line of visibility: What happens behind the scenes? Example: Order sent to restaurant → Kitchen prepares food → Delivery driver assigned.',
              es: 'Debajo de línea de visibilidad: ¿Qué pasa tras bambalinas? Ejemplo: Orden enviada a restaurante → Cocina prepara comida → Conductor de entrega asignado.'
            }
          },
          {
            name: { en: 'Add Support Processes', es: 'Agregar Procesos de Soporte' },
            description: { 
              en: 'Bottom row: Systems and infrastructure. Example: Payment processing system → GPS tracking system → Customer support database.',
              es: 'Fila inferior: Sistemas e infraestructura. Ejemplo: Sistema de procesamiento de pagos → Sistema de rastreo GPS → Base de datos de soporte al cliente.'
            }
          },
          {
            name: { en: 'Identify Pain Points & Opportunities', es: 'Identificar Puntos de Dolor y Oportunidades' },
            description: { 
              en: 'Look for: bottlenecks, failure points, dependencies, moments where frontstage and backstage are misaligned.',
              es: 'Busca: cuellos de botella, puntos de falla, dependencias, momentos donde frontstage y backstage están desalineados.'
            }
          }
        ]
      },
      deliverables: {
        description: { en: 'Service blueprint outputs.', es: 'Resultados de blueprint de servicio.' },
        items: {
          en: [
            'Service blueprint diagram: Visual showing all layers from customer to support systems',
            'Legend: Explaining lines of interaction, visibility, and internal interaction',
            'Pain points list: Identified inefficiencies and failure points',
            'Opportunities map: Where to improve service delivery',
            'Stakeholder presentation: Recommendations backed by blueprint insights'
          ],
          es: [
            'Diagrama de blueprint de servicio: Visual mostrando todas las capas desde cliente hasta sistemas de soporte',
            'Leyenda: Explicando líneas de interacción, visibilidad e interacción interna',
            'Lista de puntos de dolor: Ineficiencias identificadas y puntos de falla',
            'Mapa de oportunidades: Dónde mejorar la entrega del servicio',
            'Presentación a stakeholders: Recomendaciones respaldadas por insights de blueprint'
          ]
        }
      },
      practicalTools: {
        design: { 
          en: ['Miro (templates available)', 'Figma', 'Lucidchart', 'Mural'], 
          es: ['Miro (plantillas disponibles)', 'Figma', 'Lucidchart', 'Mural'] 
        },
        research: { 
          en: ['Stakeholder interviews', 'Process documentation', 'Operational data'], 
          es: ['Entrevistas a stakeholders', 'Documentación de procesos', 'Datos operacionales'] 
        },
        handoff: { 
          en: ['Notion', 'Confluence', 'Google Slides'], 
          es: ['Notion', 'Confluence', 'Google Slides'] 
        }
      },
      aiInPractice: {
        description: { 
          en: 'Use AI to identify process inefficiencies and suggest improvements.',
          es: 'Usa IA para identificar ineficiencias de proceso y sugerir mejoras.'
        },
        prompts: [
          {
            tool: 'ChatGPT',
            context: { en: 'Identifying inefficiencies', es: 'Identificando ineficiencias' },
            prompt: { 
              en: 'Here\'s our service blueprint: [describe process]. Identify 3 potential bottlenecks or failure points in this service delivery.',
              es: 'Aquí está nuestro blueprint de servicio: [describir proceso]. Identifica 3 potenciales cuellos de botella o puntos de falla en esta entrega de servicio.'
            }
          },
          {
            tool: 'Claude',
            context: { en: 'Optimization suggestions', es: 'Sugerencias de optimización' },
            prompt: { 
              en: 'Based on this service blueprint: [describe], suggest 3 ways to improve efficiency and reduce customer wait times.',
              es: 'Basado en este blueprint de servicio: [describir], sugiere 3 formas de mejorar eficiencia y reducir tiempos de espera del cliente.'
            }
          }
        ]
      },
      howToValidate: {
        what: { 
          en: 'Validate that your service blueprint accurately represents the current state and identifies real improvement opportunities.',
          es: 'Validar que tu blueprint de servicio representa precisamente el estado actual e identifica oportunidades de mejora reales.'
        },
        methods: { 
          en: [
            'Stakeholder review: Do ops, support, and tech teams confirm accuracy?',
            'Walk the process: Physically observe each step to validate',
            'Data verification: Do process times and failure rates match operational data?',
            'Test improvements: Pilot recommended changes and measure impact'
          ],
          es: [
            'Revisión de stakeholders: ¿Los equipos de ops, soporte y tech confirman precisión?',
            'Caminar el proceso: Observa físicamente cada paso para validar',
            'Verificación de datos: ¿Los tiempos de proceso y tasas de falla coinciden con datos operacionales?',
            'Probar mejoras: Pilotea cambios recomendados y mide impacto'
          ]
        },
        tools: { 
          en: ['Operational metrics dashboards', 'Process timing data', 'Support ticket analysis'],
          es: ['Dashboards de métricas operacionales', 'Datos de temporización de procesos', 'Análisis de tickets de soporte']
        },
        evidenceExample: { 
          en: 'Blueprint reveals that "order confirmation" backstage process takes 5 minutes, causing customers to worry. You reduce it to 30 seconds, and customer anxiety complaints drop by 40%.',
          es: 'Blueprint revela que el proceso backstage de "confirmación de orden" toma 5 minutos, causando que los clientes se preocupen. Lo reduces a 30 segundos, y las quejas de ansiedad del cliente caen un 40%.'
        }
      },
      quiz: [
        {
          question: { 
            en: 'What is the key difference between a customer journey map and a service blueprint?',
            es: '¿Cuál es la diferencia clave entre un mapa de viaje del cliente y un blueprint de servicio?'
          },
          options: {
            en: [
              'Journey maps are longer',
              'Blueprints show backstage operations, journey maps focus on user emotions',
              'Journey maps include more details',
              'Blueprints are only for digital services'
            ],
            es: [
              'Los mapas de viaje son más largos',
              'Los blueprints muestran operaciones backstage, los mapas de viaje se enfocan en emociones de usuario',
              'Los mapas de viaje incluyen más detalles',
              'Los blueprints son solo para servicios digitales'
            ]
          },
          correctIndex: 1,
          explanation: {
            en: 'Service blueprints reveal what happens behind the scenes (backstage operations, support systems) that enable the customer experience. Journey maps focus on the user\'s perspective and emotional experience across touchpoints.',
            es: 'Los blueprints de servicio revelan lo que pasa tras bambalinas (operaciones backstage, sistemas de soporte) que permiten la experiencia del cliente. Los mapas de viaje se enfocan en la perspectiva del usuario y experiencia emocional a través de puntos de contacto.'
          }
        }
      ],
      realExample: {
        title: { en: 'Starbucks Service Blueprint', es: 'Blueprint de Servicio de Starbucks' },
        description: {
          en: 'Starbucks blueprinted their in-store experience: Customer actions (order → wait → pick up), Frontstage (barista takes order, makes drink), Backstage (inventory management, bean grinding), Support (POS system, supply chain). This revealed bottlenecks during rush hour, leading to the mobile order ahead feature.',
          es: 'Starbucks hizo blueprint de su experiencia en tienda: Acciones del cliente (ordenar → esperar → recoger), Frontstage (barista toma orden, hace bebida), Backstage (gestión de inventario, molienda de granos), Soporte (sistema POS, cadena de suministro). Esto reveló cuellos de botella durante hora pico, llevando a la característica de orden móvil por adelantado.'
        },
        company: 'Starbucks'
      }
    }
  }
];