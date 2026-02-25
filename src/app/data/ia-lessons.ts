import type { Topic } from './content';

// Note: 'ia-fundamentals' was merged into 'information-architecture' in content.ts
export const iaLessons: Topic[] = [
  {
    id: 'card-sorting',
    title: { en: 'Card Sorting', es: 'Card Sorting' },
    description: { 
      en: 'User research method to discover how users categorize and label information.',
      es: 'Metodo de investigacion de usuario para descubrir como los usuarios categorizan y etiquetan informacion.'
    },
    status: 'beginner',
    timeEstimate: '1h',
    reference: { en: 'Card Sorting - NN/g', es: 'Card Sorting - NN/g' },
    referenceLink: 'https://www.nngroup.com/articles/card-sorting-definition/',
    content: {
      definition: {
        en: 'Card sorting is a UX research technique where participants organize topics or content items into categories that make sense to them. It reveals how users mentally group information, helping you design intuitive navigation and IA.',
        es: 'Card sorting es una tecnica de investigacion UX donde los participantes organizan temas o elementos de contenido en categorias que tienen sentido para ellos. Revela como los usuarios agrupan mentalmente la informacion, ayudandote a disenar navegacion e IA intuitivas.'
      },
      why: {
        en: 'Your team has internal terminology and organizational biases. Card sorting reveals how real users think about your content, ensuring your IA matches their mental models rather than your assumptions.',
        es: 'Tu equipo tiene terminologia interna y sesgos organizacionales. Card sorting revela como piensan los usuarios reales sobre tu contenido, asegurando que tu IA coincida con sus modelos mentales en lugar de tus suposiciones.'
      },
      keyPrinciples: {
        en: [
          'Open card sort: Users create their own categories and labels (exploratory)',
          'Closed card sort: You provide predefined categories, users sort cards into them (validating)',
          'Hybrid: Mix of open and closed - some categories fixed, users can add new ones',
          'Remote vs. in-person: Remote (online tools) scales better; in-person provides richer insights',
          'Sample size: 15-20 participants for reliable patterns',
          'Card quantity: 30-60 cards is optimal (too few = not enough data, too many = fatigue)'
        ],
        es: [
          'Card sort abierto: Los usuarios crean sus propias categorias y etiquetas (exploratorio)',
          'Card sort cerrado: Tu proporcionas categorias predefinidas, los usuarios ordenan tarjetas en ellas (validando)',
          'Hibrido: Mezcla de abierto y cerrado - algunas categorias fijas, los usuarios pueden agregar nuevas',
          'Remoto vs. en persona: Remoto (herramientas en linea) escala mejor; en persona proporciona insights mas ricos',
          'Tamano de muestra: 15-20 participantes para patrones confiables',
          'Cantidad de tarjetas: 30-60 tarjetas es optimo (muy pocas = no suficientes datos, demasiadas = fatiga)'
        ]
      },
      commonMistakes: {
        en: [
          'Using vague or ambiguous card labels (confuses participants)',
          'Too many cards (causes fatigue and rushed sorting)',
          'Not testing with representative users (internal team members do not count)',
          'Ignoring outliers - sometimes unique sortings reveal important insights',
          'Not following up with "why" - understand reasoning behind groupings'
        ],
        es: [
          'Usar etiquetas de tarjeta vagas o ambiguas (confunde a los participantes)',
          'Demasiadas tarjetas (causa fatiga y ordenacion apresurada)',
          'No probar con usuarios representativos (miembros del equipo interno no cuentan)',
          'Ignorar valores atipicos - a veces ordenaciones unicas revelan insights importantes',
          'No hacer seguimiento con "por que" - entender el razonamiento detras de las agrupaciones'
        ]
      },
      howToApply: {
        steps: [
          {
            name: { en: 'Prepare Cards', es: 'Preparar Tarjetas' },
            description: { 
              en: 'Create 30-60 cards representing your content items. Use clear, concise labels. Example: For an e-commerce site, cards might be "Product Reviews," "Shipping Info," "Return Policy," etc.',
              es: 'Crea 30-60 tarjetas representando tus elementos de contenido. Usa etiquetas claras y concisas. Ejemplo: Para un sitio de e-commerce, las tarjetas podrian ser "Resenas de Producto," "Info de Envio," "Politica de Devolucion," etc.'
            }
          },
          {
            name: { en: 'Choose Method', es: 'Elegir Metodo' },
            description: { 
              en: 'Open card sort (exploratory) if you are starting from scratch. Closed card sort (validating) if you have existing categories to test. Hybrid if you want flexibility.',
              es: 'Card sort abierto (exploratorio) si estas empezando desde cero. Card sort cerrado (validando) si tienes categorias existentes para probar. Hibrido si quieres flexibilidad.'
            }
          },
          {
            name: { en: 'Recruit Participants', es: 'Reclutar Participantes' },
            description: { 
              en: 'Aim for 15-20 participants who represent your target users. Use tools like OptimalWorkshop or UserTesting for remote card sorting at scale.',
              es: 'Apunta a 15-20 participantes que representen a tus usuarios objetivo. Usa herramientas como OptimalWorkshop o UserTesting para card sorting remoto a escala.'
            }
          },
          {
            name: { en: 'Run Sessions', es: 'Ejecutar Sesiones' },
            description: { 
              en: 'Instruct participants: "Group these cards in a way that makes sense to you. Name each group." Let them work without guidance. Time: 20-30 minutes.',
              es: 'Instruye a los participantes: "Agrupa estas tarjetas de una manera que tenga sentido para ti. Nombra cada grupo." Dejalos trabajar sin guia. Tiempo: 20-30 minutos.'
            }
          },
          {
            name: { en: 'Analyze Results', es: 'Analizar Resultados' },
            description: { 
              en: 'Look for patterns: Which cards were consistently grouped together? What category names did users choose? Use a similarity matrix or dendrogram to visualize agreement.',
              es: 'Busca patrones: Que tarjetas se agruparon consistentemente juntas? Que nombres de categoria eligieron los usuarios? Usa una matriz de similitud o dendrograma para visualizar el acuerdo.'
            }
          },
          {
            name: { en: 'Apply to IA', es: 'Aplicar a IA' },
            description: { 
              en: 'Use the most common groupings and labels to inform your navigation structure. If 80% of users put "Shipping" and "Returns" together, they probably belong in the same category.',
              es: 'Usa las agrupaciones y etiquetas mas comunes para informar tu estructura de navegacion. Si el 80% de los usuarios pusieron "Envio" y "Devoluciones" juntos, probablemente pertenecen a la misma categoria.'
            }
          }
        ]
      },
      deliverables: {
        description: { en: 'Card sorting outputs and analysis.', es: 'Resultados y analisis de card sorting.' },
        items: {
          en: [
            'Similarity matrix: Shows how often cards were grouped together',
            'Dendrogram: Visual tree showing card relationships and clusters',
            'Category labels: Most common names users gave to groups',
            'IA recommendations: Proposed navigation structure based on card sort results',
            'Raw data: Individual participant sorts for reference'
          ],
          es: [
            'Matriz de similitud: Muestra que tan seguido las tarjetas se agruparon juntas',
            'Dendrograma: Arbol visual mostrando relaciones de tarjetas y clusters',
            'Etiquetas de categoria: Nombres mas comunes que los usuarios dieron a los grupos',
            'Recomendaciones IA: Estructura de navegacion propuesta basada en resultados de card sort',
            'Datos brutos: Ordenaciones de participantes individuales para referencia'
          ]
        }
      },
      practicalTools: {
        design: { 
          en: ['Physical cards (post-its)', 'Miro (virtual cards)', 'FigJam'], 
          es: ['Tarjetas fisicas (post-its)', 'Miro (tarjetas virtuales)', 'FigJam'] 
        },
        research: { 
          en: ['Optimal Workshop (OptimalSort)', 'Maze', 'UserZoom', 'SimpleCardSort'], 
          es: ['Optimal Workshop (OptimalSort)', 'Maze', 'UserZoom', 'SimpleCardSort'] 
        },
        handoff: { 
          en: ['Excel (similarity matrix)', 'R or Python (dendrogram)', 'Google Sheets'], 
          es: ['Excel (matriz de similitud)', 'R o Python (dendrograma)', 'Google Sheets'] 
        }
      },
      aiInPractice: {
        description: { 
          en: 'Use AI to analyze card sorting results and suggest category names.',
          es: 'Usa IA para analizar resultados de card sorting y sugerir nombres de categorias.'
        },
        prompts: [
          {
            tool: 'ChatGPT',
            context: { en: 'Analyzing groupings', es: 'Analizando agrupaciones' },
            prompt: { 
              en: 'Based on card sorting, users consistently grouped these items together: [list items]. Suggest 3 clear category names that would make sense to users.',
              es: 'Basado en card sorting, los usuarios agruparon consistentemente estos elementos juntos: [listar elementos]. Sugiere 3 nombres de categoria claros que tendrian sentido para los usuarios.'
            }
          },
          {
            tool: 'Claude',
            context: { en: 'Interpreting outliers', es: 'Interpretando valores atipicos' },
            prompt: { 
              en: 'Most participants grouped item X with category A, but 3 participants grouped it with category B. Why might they have done this? What insight does this reveal?',
              es: 'La mayoria de los participantes agruparon el elemento X con la categoria A, pero 3 participantes lo agruparon con la categoria B. Por que podrian haber hecho esto? Que insight revela esto?'
            }
          }
        ]
      },
      howToValidate: {
        what: { 
          en: 'Validate that your card sort results are reliable and representative of your users.',
          es: 'Validar que tus resultados de card sort son confiables y representativos de tus usuarios.'
        },
        methods: { 
          en: [
            'Inter-rater agreement: High agreement (>70%) across participants indicates clear patterns',
            'Follow-up interviews: Ask participants why they grouped items together',
            'Tree testing: Validate your new IA structure with tree testing',
            'A/B test: Test old vs. new IA in production to see which performs better'
          ],
          es: [
            'Acuerdo entre evaluadores: Alto acuerdo (>70%) entre participantes indica patrones claros',
            'Entrevistas de seguimiento: Pregunta a los participantes por que agruparon elementos juntos',
            'Tree testing: Valida tu nueva estructura IA con tree testing',
            'Prueba A/B: Prueba IA antiguo vs. nuevo en produccion para ver cual se desempena mejor'
          ]
        },
        tools: { 
          en: ['Optimal Workshop Treejack (tree testing)', 'Google Analytics', 'Hotjar (behavior analytics)'],
          es: ['Optimal Workshop Treejack (tree testing)', 'Google Analytics', 'Hotjar (analytics de comportamiento)']
        },
        evidenceExample: { 
          en: 'Card sorting revealed users expect "Billing" and "Invoices" together. After restructuring navigation, support tickets about "can\'t find my invoice" dropped by 40%.',
          es: 'Card sorting revelo que los usuarios esperan "Facturacion" y "Facturas" juntos. Despues de reestructurar la navegacion, los tickets de soporte sobre "no puedo encontrar mi factura" cayeron un 40%.'
        }
      },
      quiz: [
        {
          question: { 
            en: 'What is the difference between open and closed card sorting?',
            es: 'Cual es la diferencia entre card sorting abierto y cerrado?'
          },
          options: {
            en: [
              'Open is done in person, closed is done remotely',
              'Open lets users create categories, closed provides predefined categories',
              'Open uses physical cards, closed uses digital cards',
              'Open is for beginners, closed is for experts'
            ],
            es: [
              'Abierto se hace en persona, cerrado se hace remotamente',
              'Abierto permite a los usuarios crear categorias, cerrado proporciona categorias predefinidas',
              'Abierto usa tarjetas fisicas, cerrado usa tarjetas digitales',
              'Abierto es para principiantes, cerrado es para expertos'
            ]
          },
          correctIndex: 1,
          explanation: {
            en: 'In open card sorting, users create their own categories and labels, which is exploratory. In closed card sorting, you provide predefined categories and users sort cards into them, which validates existing structures.',
            es: 'En card sorting abierto, los usuarios crean sus propias categorias y etiquetas, lo cual es exploratorio. En card sorting cerrado, tu proporcionas categorias predefinidas y los usuarios ordenan tarjetas en ellas, lo cual valida estructuras existentes.'
          }
        }
      ],
      realExample: {
        title: { en: 'Mailchimp Navigation Redesign', es: 'Rediseno de Navegacion de Mailchimp' },
        description: {
          en: 'Mailchimp used card sorting to redesign their navigation. Users consistently grouped "Templates," "Campaigns," and "Reports" together, even though internally these were separate departments. They restructured navigation to match user expectations, improving findability.',
          es: 'Mailchimp uso card sorting para redisenar su navegacion. Los usuarios agruparon consistentemente "Plantillas," "Campanas" y "Reportes" juntos, aunque internamente estos eran departamentos separados. Reestructuraron la navegacion para coincidir con las expectativas del usuario, mejorando la encontrabilidad.'
        },
        company: 'Mailchimp'
      }
    }
  }
];
