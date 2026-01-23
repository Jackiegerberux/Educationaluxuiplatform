import type { Topic } from './content';

export const iaLessons: Topic[] = [
  {
    id: 'ia-fundamentals',
    title: { en: 'Information Architecture Fundamentals', es: 'Fundamentos de Arquitectura de Información' },
    description: { 
      en: 'Organizing and structuring content to help users find what they need.',
      es: 'Organizar y estructurar contenido para ayudar a los usuarios a encontrar lo que necesitan.'
    },
    status: 'beginner',
    timeEstimate: '1h 15min',
    reference: { en: 'Information Architecture Basics - NN/g', es: 'Básicos de Arquitectura de Información - NN/g' },
    referenceLink: 'https://www.nngroup.com/articles/information-architecture-101/',
    content: {
      definition: {
        en: 'Information Architecture (IA) is the practice of organizing, structuring, and labeling content in an effective and sustainable way. It helps users understand where they are, what they have found, what is around, and what to expect.',
        es: 'La Arquitectura de Información (IA) es la práctica de organizar, estructurar y etiquetar contenido de manera efectiva y sostenible. Ayuda a los usuarios a entender dónde están, qué han encontrado, qué hay alrededor y qué esperar.'
      },
      why: {
        en: 'Good IA is invisible - users do not notice it until it is bad. Poor IA leads to users getting lost, frustrated, and abandoning your product. Solid IA creates a clear mental model, reduces cognitive load, and enables users to achieve their goals efficiently.',
        es: 'Una buena IA es invisible - los usuarios no la notan hasta que es mala. Una IA pobre lleva a que los usuarios se pierdan, se frustren y abandonen tu producto. Una IA sólida crea un modelo mental claro, reduce la carga cognitiva y permite a los usuarios lograr sus objetivos eficientemente.'
      },
      keyPrinciples: {
        en: [
          'Organization: How content is grouped (by topic, task, audience, or format)',
          'Labeling: What you call categories and navigation items (clear, familiar terms)',
          'Navigation: How users browse and move through information (menus, breadcrumbs, search)',
          'Search: How users look for specific content (filters, facets, auto-suggest)',
          'Hierarchy: Parent-child relationships between pages and sections',
          'Mental models: Matching user expectations of where things should be'
        ],
        es: [
          'Organización: Cómo se agrupa el contenido (por tema, tarea, audiencia o formato)',
          'Etiquetado: Cómo llamas a las categorías y elementos de navegación (términos claros y familiares)',
          'Navegación: Cómo los usuarios navegan y se mueven a través de la información (menús, breadcrumbs, búsqueda)',
          'Búsqueda: Cómo los usuarios buscan contenido específico (filtros, facetas, auto-sugerencia)',
          'Jerarquía: Relaciones padre-hijo entre páginas y secciones',
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
            description: { 
              en: 'List all existing content: pages, features, sections. Create a spreadsheet with columns: Page Title, URL, Description, Owner. This is your raw material.',
              es: 'Lista todo el contenido existente: páginas, características, secciones. Crea una hoja de cálculo con columnas: Título de Página, URL, Descripción, Propietario. Este es tu material bruto.'
            }
          },
          {
            name: { en: 'Card Sorting', es: 'Card Sorting' },
            description: { 
              en: 'Write each content item on a card. Ask users to group cards into categories that make sense to them and name each group. This reveals their mental model.',
              es: 'Escribe cada elemento de contenido en una tarjeta. Pide a los usuarios que agrupen tarjetas en categorías que tengan sentido para ellos y nombren cada grupo. Esto revela su modelo mental.'
            }
          },
          {
            name: { en: 'Create Sitemap', es: 'Crear Mapa del Sitio' },
            description: { 
              en: 'Based on card sorting results, organize content into a hierarchical structure. Use boxes and lines to show parent-child relationships. Keep it 3-4 levels max.',
              es: 'Basado en resultados de card sorting, organiza contenido en una estructura jerárquica. Usa cajas y líneas para mostrar relaciones padre-hijo. Mantenlo en 3-4 niveles máximo.'
            }
          },
          {
            name: { en: 'Design Navigation', es: 'Diseñar Navegación' },
            description: { 
              en: 'Create primary navigation (top-level categories), secondary navigation (sub-categories), and utility navigation (login, help, settings). Add breadcrumbs for deep pages.',
              es: 'Crea navegación primaria (categorías de nivel superior), navegación secundaria (sub-categorías) y navegación de utilidad (login, ayuda, configuración). Agrega breadcrumbs para páginas profundas.'
            }
          },
          {
            name: { en: 'Test with Tree Testing', es: 'Probar con Tree Testing' },
            description: { 
              en: 'Give users tasks like \"Where would you find X?\" Show them your IA structure (no visual design) and see if they can locate items. Identify where they get stuck.',
              es: 'Da a los usuarios tareas como \"¿Dónde encontrarías X?\" Muéstrales tu estructura IA (sin diseño visual) y ve si pueden localizar elementos. Identifica dónde se atascan.'
            }
          }
        ]
      },
      deliverables: {
        description: { en: 'IA documentation and artifacts.', es: 'Documentación y artefactos de IA.' },
        items: {
          en: [
            'Content inventory: Spreadsheet of all pages and features',
            'Card sorting results: How users grouped and labeled content',
            'Sitemap: Visual hierarchy of content structure',
            'Navigation design: Primary, secondary, and utility navigation elements',
            'Tree testing results: Where users succeeded or failed to find content'
          ],
          es: [
            'Inventario de contenido: Hoja de cálculo de todas las páginas y características',
            'Resultados de card sorting: Cómo los usuarios agruparon y etiquetaron el contenido',
            'Mapa del sitio: Jerarquía visual de la estructura de contenido',
            'Diseño de navegación: Elementos de navegación primaria, secundaria y de utilidad',
            'Resultados de tree testing: Dónde los usuarios tuvieron éxito o fallaron en encontrar contenido'
          ]
        }
      },
      practicalTools: {
        design: { 
          en: ['Figma (sitemaps)', 'Miro (card sorting)', 'Whimsical', 'draw.io'], 
          es: ['Figma (mapas del sitio)', 'Miro (card sorting)', 'Whimsical', 'draw.io'] 
        },
        research: { 
          en: ['Optimal Workshop (card sorting, tree testing)', 'Maze', 'UserTesting'], 
          es: ['Optimal Workshop (card sorting, tree testing)', 'Maze', 'UserTesting'] 
        },
        handoff: { 
          en: ['Notion (documentation)', 'Confluence', 'Google Sheets'], 
          es: ['Notion (documentación)', 'Confluence', 'Google Sheets'] 
        }
      },
      aiInPractice: {
        description: { 
          en: 'Use AI to suggest content groupings and navigation labels.',
          es: 'Usa IA para sugerir agrupaciones de contenido y etiquetas de navegación.'
        },
        prompts: [
          {
            tool: 'ChatGPT',
            context: { en: 'Generating IA structure', es: 'Generando estructura IA' },
            prompt: { 
              en: 'I have these content items: [list items]. Suggest 5-7 top-level categories to organize them. Use clear, user-friendly labels.',
              es: 'Tengo estos elementos de contenido: [listar elementos]. Sugiere 5-7 categorías de nivel superior para organizarlos. Usa etiquetas claras y amigables para el usuario.'
            }
          },
          {
            tool: 'Claude',
            context: { en: 'Improving navigation labels', es: 'Mejorando etiquetas de navegación' },
            prompt: { 
              en: 'I have a navigation item labeled \"[internal jargon]\". Suggest 3 alternative labels that are clearer and more user-friendly.',
              es: 'Tengo un elemento de navegación etiquetado \"[jerga interna]\". Sugiere 3 etiquetas alternativas que sean más claras y amigables para el usuario.'
            }
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
          en: 'After restructuring your IA based on card sorting, tree testing shows 85% success rate (up from 60%) in users finding key content.',
          es: 'Después de reestructurar tu IA basada en card sorting, tree testing muestra una tasa de éxito del 85% (arriba del 60%) en usuarios encontrando contenido clave.'
        }
      },
      quiz: [
        {
          question: { 
            en: 'What is the primary goal of Information Architecture?',
            es: '¿Cuál es el objetivo principal de la Arquitectura de Información?'
          },
          options: {
            en: [
              'To make the website look organized',
              'To help users find what they need efficiently',
              'To reduce the number of pages',
              'To match the company org chart'
            ],
            es: [
              'Para hacer que el sitio web se vea organizado',
              'Para ayudar a los usuarios a encontrar lo que necesitan eficientemente',
              'Para reducir el número de páginas',
              'Para coincidir con el organigrama de la empresa'
            ]
          },
          correctIndex: 1,
          explanation: {
            en: 'The primary goal of IA is to help users find what they need efficiently by organizing and structuring content to match their mental models, not the company internal structure.',
            es: 'El objetivo principal de IA es ayudar a los usuarios a encontrar lo que necesitan eficientemente al organizar y estructurar contenido para coincidir con sus modelos mentales, no con la estructura interna de la empresa.'
          }
        }
      ],
      realExample: {
        title: { en: 'Amazon Mega Menu Navigation', es: 'Navegación de Menú Mega de Amazon' },
        description: {
          en: 'Amazon navigation organizes millions of products into clear categories (Electronics, Books, Fashion). Their mega menu shows sub-categories on hover, and they use both browse (navigation) and search effectively. The IA accommodates different user behaviors: browsers vs. searchers.',
          es: 'La navegación de Amazon organiza millones de productos en categorías claras (Electrónica, Libros, Moda). Su menú mega muestra sub-categorías al pasar el mouse, y usan tanto navegación como búsqueda efectivamente. La IA acomoda diferentes comportamientos de usuario: navegadores vs. buscadores.'
        },
        company: 'Amazon'
      }
    }
  },
  {
    id: 'card-sorting',
    title: { en: 'Card Sorting', es: 'Card Sorting' },
    description: { 
      en: 'User research method to discover how users categorize and label information.',
      es: 'Método de investigación de usuario para descubrir cómo los usuarios categorizan y etiquetan información.'
    },
    status: 'beginner',
    timeEstimate: '1h',
    reference: { en: 'Card Sorting - NN/g', es: 'Card Sorting - NN/g' },
    referenceLink: 'https://www.nngroup.com/articles/card-sorting-definition/',
    content: {
      definition: {
        en: 'Card sorting is a UX research technique where participants organize topics or content items into categories that make sense to them. It reveals how users mentally group information, helping you design intuitive navigation and IA.',
        es: 'Card sorting es una técnica de investigación UX donde los participantes organizan temas o elementos de contenido en categorías que tienen sentido para ellos. Revela cómo los usuarios agrupan mentalmente la información, ayudándote a diseñar navegación e IA intuitivas.'
      },
      why: {
        en: 'Your team has internal terminology and organizational biases. Card sorting reveals how real users think about your content, ensuring your IA matches their mental models rather than your assumptions.',
        es: 'Tu equipo tiene terminología interna y sesgos organizacionales. Card sorting revela cómo piensan los usuarios reales sobre tu contenido, asegurando que tu IA coincida con sus modelos mentales en lugar de tus suposiciones.'
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
          'Card sort abierto: Los usuarios crean sus propias categorías y etiquetas (exploratorio)',
          'Card sort cerrado: Tú proporcionas categorías predefinidas, los usuarios ordenan tarjetas en ellas (validando)',
          'Híbrido: Mezcla de abierto y cerrado - algunas categorías fijas, los usuarios pueden agregar nuevas',
          'Remoto vs. en persona: Remoto (herramientas en línea) escala mejor; en persona proporciona insights más ricos',
          'Tamaño de muestra: 15-20 participantes para patrones confiables',
          'Cantidad de tarjetas: 30-60 tarjetas es óptimo (muy pocas = no suficientes datos, demasiadas = fatiga)'
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
          'Demasiadas tarjetas (causa fatiga y ordenación apresurada)',
          'No probar con usuarios representativos (miembros del equipo interno no cuentan)',
          'Ignorar valores atípicos - a veces ordenaciones únicas revelan insights importantes',
          'No hacer seguimiento con "por qué" - entender el razonamiento detrás de las agrupaciones'
        ]
      },
      howToApply: {
        steps: [
          {
            name: { en: 'Prepare Cards', es: 'Preparar Tarjetas' },
            description: { 
              en: 'Create 30-60 cards representing your content items. Use clear, concise labels. Example: For an e-commerce site, cards might be \"Product Reviews,\" \"Shipping Info,\" \"Return Policy,\" etc.',
              es: 'Crea 30-60 tarjetas representando tus elementos de contenido. Usa etiquetas claras y concisas. Ejemplo: Para un sitio de e-commerce, las tarjetas podrían ser \"Reseñas de Producto,\" \"Info de Envío,\" \"Política de Devolución,\" etc.'
            }
          },
          {
            name: { en: 'Choose Method', es: 'Elegir Método' },
            description: { 
              en: 'Open card sort (exploratory) if you are starting from scratch. Closed card sort (validating) if you have existing categories to test. Hybrid if you want flexibility.',
              es: 'Card sort abierto (exploratorio) si estás empezando desde cero. Card sort cerrado (validando) si tienes categorías existentes para probar. Híbrido si quieres flexibilidad.'
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
              en: 'Instruct participants: \"Group these cards in a way that makes sense to you. Name each group.\" Let them work without guidance. Time: 20-30 minutes.',
              es: 'Instruye a los participantes: \"Agrupa estas tarjetas de una manera que tenga sentido para ti. Nombra cada grupo.\" Déjalos trabajar sin guía. Tiempo: 20-30 minutos.'
            }
          },
          {
            name: { en: 'Analyze Results', es: 'Analizar Resultados' },
            description: { 
              en: 'Look for patterns: Which cards were consistently grouped together? What category names did users choose? Use a similarity matrix or dendrogram to visualize agreement.',
              es: 'Busca patrones: ¿Qué tarjetas se agruparon consistentemente juntas? ¿Qué nombres de categoría eligieron los usuarios? Usa una matriz de similitud o dendrograma para visualizar el acuerdo.'
            }
          },
          {
            name: { en: 'Apply to IA', es: 'Aplicar a IA' },
            description: { 
              en: 'Use the most common groupings and labels to inform your navigation structure. If 80% of users put \"Shipping\" and \"Returns\" together, they probably belong in the same category.',
              es: 'Usa las agrupaciones y etiquetas más comunes para informar tu estructura de navegación. Si el 80% de los usuarios pusieron \"Envío\" y \"Devoluciones\" juntos, probablemente pertenecen a la misma categoría.'
            }
          }
        ]
      },
      deliverables: {
        description: { en: 'Card sorting outputs and analysis.', es: 'Resultados y análisis de card sorting.' },
        items: {
          en: [
            'Similarity matrix: Shows how often cards were grouped together',
            'Dendrogram: Visual tree showing card relationships and clusters',
            'Category labels: Most common names users gave to groups',
            'IA recommendations: Proposed navigation structure based on card sort results',
            'Raw data: Individual participant sorts for reference'
          ],
          es: [
            'Matriz de similitud: Muestra qué tan seguido las tarjetas se agruparon juntas',
            'Dendrograma: Árbol visual mostrando relaciones de tarjetas y clusters',
            'Etiquetas de categoría: Nombres más comunes que los usuarios dieron a los grupos',
            'Recomendaciones IA: Estructura de navegación propuesta basada en resultados de card sort',
            'Datos brutos: Ordenaciones de participantes individuales para referencia'
          ]
        }
      },
      practicalTools: {
        design: { 
          en: ['Physical cards (post-its)', 'Miro (virtual cards)', 'FigJam'], 
          es: ['Tarjetas físicas (post-its)', 'Miro (tarjetas virtuales)', 'FigJam'] 
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
          es: 'Usa IA para analizar resultados de card sorting y sugerir nombres de categorías.'
        },
        prompts: [
          {
            tool: 'ChatGPT',
            context: { en: 'Analyzing groupings', es: 'Analizando agrupaciones' },
            prompt: { 
              en: 'Based on card sorting, users consistently grouped these items together: [list items]. Suggest 3 clear category names that would make sense to users.',
              es: 'Basado en card sorting, los usuarios agruparon consistentemente estos elementos juntos: [listar elementos]. Sugiere 3 nombres de categoría claros que tendrían sentido para los usuarios.'
            }
          },
          {
            tool: 'Claude',
            context: { en: 'Interpreting outliers', es: 'Interpretando valores atípicos' },
            prompt: { 
              en: 'Most participants grouped item X with category A, but 3 participants grouped it with category B. Why might they have done this? What insight does this reveal?',
              es: 'La mayoría de los participantes agruparon el elemento X con la categoría A, pero 3 participantes lo agruparon con la categoría B. ¿Por qué podrían haber hecho esto? ¿Qué insight revela esto?'
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
            'Entrevistas de seguimiento: Pregunta a los participantes por qué agruparon elementos juntos',
            'Tree testing: Valida tu nueva estructura IA con tree testing',
            'Prueba A/B: Prueba IA antiguo vs. nuevo en producción para ver cuál se desempeña mejor'
          ]
        },
        tools: { 
          en: ['Optimal Workshop Treejack (tree testing)', 'Google Analytics', 'Hotjar (behavior analytics)'],
          es: ['Optimal Workshop Treejack (tree testing)', 'Google Analytics', 'Hotjar (analytics de comportamiento)']
        },
        evidenceExample: { 
          en: 'Card sorting revealed users expect \"Billing\" and \"Invoices\" together. After restructuring navigation, support tickets about \"can\'t find my invoice\" dropped by 40%.',
          es: 'Card sorting reveló que los usuarios esperan \"Facturación\" y \"Facturas\" juntos. Después de reestructurar la navegación, los tickets de soporte sobre \"no puedo encontrar mi factura\" cayeron un 40%.'
        }
      },
      quiz: [
        {
          question: { 
            en: 'What is the difference between open and closed card sorting?',
            es: '¿Cuál es la diferencia entre card sorting abierto y cerrado?'
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
              'Abierto permite a los usuarios crear categorías, cerrado proporciona categorías predefinidas',
              'Abierto usa tarjetas físicas, cerrado usa tarjetas digitales',
              'Abierto es para principiantes, cerrado es para expertos'
            ]
          },
          correctIndex: 1,
          explanation: {
            en: 'In open card sorting, users create their own categories and labels, which is exploratory. In closed card sorting, you provide predefined categories and users sort cards into them, which validates existing structures.',
            es: 'En card sorting abierto, los usuarios crean sus propias categorías y etiquetas, lo cual es exploratorio. En card sorting cerrado, tú proporcionas categorías predefinidas y los usuarios ordenan tarjetas en ellas, lo cual valida estructuras existentes.'
          }
        }
      ],
      realExample: {
        title: { en: 'Mailchimp Navigation Redesign', es: 'Rediseño de Navegación de Mailchimp' },
        description: {
          en: 'Mailchimp used card sorting to redesign their navigation. Users consistently grouped "Templates," "Campaigns," and "Reports" together, even though internally these were separate departments. They restructured navigation to match user expectations, improving findability.',
          es: 'Mailchimp usó card sorting para rediseñar su navegación. Los usuarios agruparon consistentemente "Plantillas," "Campañas" y "Reportes" juntos, aunque internamente estos eran departamentos separados. Reestructuraron la navegación para coincidir con las expectativas del usuario, mejorando la encontrabilidad.'
        },
        company: 'Mailchimp'
      }
    }
  }
];