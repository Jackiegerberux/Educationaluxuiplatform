import type { Topic } from './content';

export const researchLessons: Topic[] = [
  {
    id: 'surveys-questionnaires',
    title: { en: 'Surveys & Questionnaires', es: 'Encuestas y Cuestionarios' },
    description: { 
      en: 'Quantitative research methods to gather user data at scale.',
      es: 'Métodos de investigación cuantitativa para recopilar datos de usuarios a escala.'
    },
    status: 'beginner',
    timeEstimate: '1h',
    reference: { en: 'Survey Design - NN/g', es: 'Diseño de Encuestas - NN/g' },
    referenceLink: 'https://www.nngroup.com/articles/qualitative-surveys/',
    content: {
      definition: {
        en: 'Surveys and questionnaires are structured research tools that use standardized questions to collect data from a large number of users. They help validate hypotheses and measure user attitudes, behaviors, and preferences at scale.',
        es: 'Las encuestas y cuestionarios son herramientas de investigación estructuradas que usan preguntas estandarizadas para recopilar datos de un gran número de usuarios. Ayudan a validar hipótesis y medir actitudes, comportamientos y preferencias de usuarios a escala.'
      },
      why: {
        en: 'While interviews provide depth, surveys provide breadth. They help you understand how common a problem is, quantify user preferences, and make data-driven decisions backed by statistical significance.',
        es: 'Mientras las entrevistas proporcionan profundidad, las encuestas proporcionan amplitud. Te ayudan a entender qué tan común es un problema, cuantificar preferencias de usuarios y tomar decisiones basadas en datos respaldadas por significancia estadística.'
      },
      keyPrinciples: {
        en: [
          'Clear objectives: Know exactly what you want to learn before designing questions',
          'Unbiased questions: Avoid leading questions that suggest a desired answer',
          'Question types: Mix multiple choice, rating scales (Likert), and open-ended questions',
          'Keep it short: 5-10 minutes maximum to prevent drop-offs',
          'Test pilot: Run a small test first to catch confusing questions',
          'Representative sample: Ensure your respondents represent your target users'
        ],
        es: [
          'Objetivos claros: Sabe exactamente qué quieres aprender antes de diseñar preguntas',
          'Preguntas imparciales: Evita preguntas sesgadas que sugieran una respuesta deseada',
          'Tipos de preguntas: Mezcla opciones múltiples, escalas de calificación (Likert) y preguntas abiertas',
          'Mantenlo corto: 5-10 minutos máximo para prevenir abandonos',
          'Prueba piloto: Ejecuta una prueba pequeña primero para detectar preguntas confusas',
          'Muestra representativa: Asegura que tus encuestados representen a tus usuarios objetivo'
        ]
      },
      commonMistakes: {
        en: [
          'Double-barreled questions: Asking two things at once ("Do you like the design and functionality?")',
          'Too many questions: Survey fatigue leads to rushed or abandoned responses',
          'No context: Not explaining why you are asking or how data will be used',
          'Ignoring open-ended responses: Quantitative data without qualitative context misses insights',
          'Wrong timing: Surveying at inappropriate moments (e.g., during onboarding)'
        ],
        es: [
          'Preguntas de dos cañones: Preguntar dos cosas a la vez (\"¿Te gusta el diseño y la funcionalidad?\")',
          'Demasiadas preguntas: La fatiga de encuesta lleva a respuestas apresuradas o abandonadas',
          'Sin contexto: No explicar por qué estás preguntando o cómo se usarán los datos',
          'Ignorar respuestas abiertas: Datos cuantitativos sin contexto cualitativo pierde insights',
          'Momento equivocado: Encuestar en momentos inapropiados (ej: durante onboarding)'
        ]
      },
      howToApply: {
        steps: [
          {
            name: { en: 'Define Research Goals', es: 'Definir Objetivos de Investigación' },
            description: { 
              en: 'What do you need to learn? Examples: \"How satisfied are users with feature X?\" or \"What percentage of users would pay for premium?\"',
              es: '¿Qué necesitas aprender? Ejemplos: \"¿Qué tan satisfechos están los usuarios con la característica X?\" o \"¿Qué porcentaje de usuarios pagaría por premium?\"'
            }
          },
          {
            name: { en: 'Design Questions', es: 'Diseñar Preguntas' },
            description: { 
              en: 'Write clear, unbiased questions. Use rating scales (1-5 or 1-7), multiple choice, and a few open-ended questions. Start with easier questions to warm up users.',
              es: 'Escribe preguntas claras e imparciales. Usa escalas de calificación (1-5 o 1-7), opción múltiple y algunas preguntas abiertas. Comienza con preguntas más fáciles para calentar a los usuarios.'
            }
          },
          {
            name: { en: 'Choose Distribution Method', es: 'Elegir Método de Distribución' },
            description: { 
              en: 'In-app pop-up, email, website banner, or social media. Consider incentives (gift cards, early access) to increase response rate.',
              es: 'Pop-up en la app, email, banner de sitio web o redes sociales. Considera incentivos (tarjetas de regalo, acceso anticipado) para aumentar tasa de respuesta.'
            }
          },
          {
            name: { en: 'Run Pilot Test', es: 'Ejecutar Prueba Piloto' },
            description: { 
              en: 'Send to 10-20 people first. Ask for feedback: Were questions clear? How long did it take? Any confusing parts?',
              es: 'Envía a 10-20 personas primero. Pide retroalimentación: ¿Las preguntas fueron claras? ¿Cuánto tiempo tomó? ¿Partes confusas?'
            }
          },
          {
            name: { en: 'Analyze Results', es: 'Analizar Resultados' },
            description: { 
              en: 'Look for patterns in quantitative data (averages, distributions). Read all open-ended responses for qualitative insights. Visualize findings in charts.',
              es: 'Busca patrones en datos cuantitativos (promedios, distribuciones). Lee todas las respuestas abiertas para insights cualitativos. Visualiza hallazgos en gráficos.'
            }
          }
        ]
      },
      deliverables: {
        description: { en: 'Survey outputs and analysis artifacts.', es: 'Resultados de encuesta y artefactos de análisis.' },
        items: {
          en: [
            'Survey questionnaire: Final list of questions with logic flow',
            'Response data: Raw survey responses (anonymized)',
            'Statistical summary: Key metrics, averages, percentages, distributions',
            'Insight report: Top findings with charts and quotes from open-ended responses',
            'Recommendations: Actionable next steps based on survey results'
          ],
          es: [
            'Cuestionario de encuesta: Lista final de preguntas con flujo lógico',
            'Datos de respuesta: Respuestas brutas de encuesta (anonimizadas)',
            'Resumen estadístico: Métricas clave, promedios, porcentajes, distribuciones',
            'Informe de insights: Hallazgos principales con gráficos y citas de respuestas abiertas',
            'Recomendaciones: Próximos pasos accionables basados en resultados de encuesta'
          ]
        }
      },
      practicalTools: {
        design: { 
          en: ['Google Forms', 'Typeform', 'SurveyMonkey', 'Qualtrics'], 
          es: ['Google Forms', 'Typeform', 'SurveyMonkey', 'Qualtrics'] 
        },
        research: { 
          en: ['UserTesting Surveys', 'Hotjar Surveys', 'Sprig', 'Pendo'], 
          es: ['UserTesting Surveys', 'Hotjar Surveys', 'Sprig', 'Pendo'] 
        },
        handoff: { 
          en: ['Google Sheets', 'Excel', 'Tableau', 'Dovetail'], 
          es: ['Google Sheets', 'Excel', 'Tableau', 'Dovetail'] 
        }
      },
      aiInPractice: {
        description: { 
          en: 'Use AI to generate survey questions and analyze open-ended responses.',
          es: 'Usa IA para generar preguntas de encuesta y analizar respuestas abiertas.'
        },
        prompts: [
          {
            tool: 'ChatGPT',
            context: { en: 'Survey question generation', es: 'Generación de preguntas de encuesta' },
            prompt: { 
              en: 'I want to measure user satisfaction with [feature]. Generate 5 survey questions using a mix of Likert scale, multiple choice, and one open-ended question. Avoid leading or biased questions.',
              es: 'Quiero medir la satisfacción del usuario con [característica]. Genera 5 preguntas de encuesta usando una mezcla de escala Likert, opción múltiple y una pregunta abierta. Evita preguntas sesgadas o dirigidas.'
            }
          },
          {
            tool: 'Claude',
            context: { en: 'Analyzing open-ended responses', es: 'Analizando respuestas abiertas' },
            prompt: { 
              en: 'Here are 50 open-ended survey responses about [topic]: [paste responses]. Identify the top 5 themes and provide example quotes for each theme.',
              es: 'Aquí hay 50 respuestas abiertas de encuesta sobre [tema]: [pegar respuestas]. Identifica los 5 temas principales y proporciona citas de ejemplo para cada tema.'
            }
          }
        ]
      },
      howToValidate: {
        what: { 
          en: 'Validate that your survey design is unbiased, yields actionable insights, and has statistical validity.',
          es: 'Validar que tu diseño de encuesta es imparcial, genera insights accionables y tiene validez estadística.'
        },
        methods: { 
          en: [
            'Peer review: Have another researcher review questions for bias',
            'Response rate: Aim for at least 100+ responses for statistical significance',
            'Completion rate: Check if people are abandoning mid-survey (indicates too long or confusing)',
            'Compare with qualitative: Do survey results align with interview findings?'
          ],
          es: [
            'Revisión de pares: Que otro investigador revise las preguntas para sesgo',
            'Tasa de respuesta: Apunta a al menos 100+ respuestas para significancia estadística',
            'Tasa de finalización: Verifica si la gente está abandonando a mitad de encuesta (indica demasiado largo o confuso)',
            'Comparar con cualitativo: ¿Los resultados de encuesta se alinean con hallazgos de entrevistas?'
          ]
        },
        tools: { 
          en: ['Survey completion analytics', 'Statistical calculators', 'A/B test different question wording'],
          es: ['Analytics de finalización de encuesta', 'Calculadoras estadísticas', 'Prueba A/B diferentes redacciones de preguntas']
        },
        evidenceExample: { 
          en: 'You launch a feature and validate its success by surveying 200 users. 78% rate satisfaction as 4-5/5, and open-ended responses highlight specific value (\"saves me 10 minutes daily\").',
          es: 'Lanzas una característica y validas su éxito encuestando a 200 usuarios. El 78% califica la satisfacción como 4-5/5, y las respuestas abiertas destacan valor específico (\"me ahorra 10 minutos diarios\").'
        }
      },
      quiz: [
        {
          question: { 
            en: 'What is a double-barreled question?',
            es: '¿Qué es una pregunta de dos cañones?'
          },
          options: {
            en: [
              'A question with two answer choices',
              'A question that asks about two things at once',
              'A question that requires a yes/no answer',
              'A question with a rating scale'
            ],
            es: [
              'Una pregunta con dos opciones de respuesta',
              'Una pregunta que pregunta sobre dos cosas a la vez',
              'Una pregunta que requiere una respuesta sí/no',
              'Una pregunta con una escala de calificación'
            ]
          },
          correctIndex: 1,
          explanation: {
            en: 'A double-barreled question asks about two things at once, making it impossible to know which part the respondent is answering about. Example: \"Do you like the design and functionality?\" should be split into two questions.',
            es: 'Una pregunta de dos cañones pregunta sobre dos cosas a la vez, haciendo imposible saber sobre qué parte está respondiendo el encuestado. Ejemplo: \"¿Te gusta el diseño y la funcionalidad?\" debería dividirse en dos preguntas.'
          }
        }
      ],
      realExample: {
        title: { en: 'Airbnb Post-Stay Survey', es: 'Encuesta Post-Estadía de Airbnb' },
        description: {
          en: 'After each stay, Airbnb sends a short survey asking about cleanliness, accuracy, communication, and overall experience using a 1-5 star rating. They keep it brief (2-3 minutes) to maximize completion rate, and the data directly informs host ratings and platform improvements.',
          es: 'Después de cada estadía, Airbnb envía una encuesta corta preguntando sobre limpieza, precisión, comunicación y experiencia general usando una calificación de 1-5 estrellas. La mantienen breve (2-3 minutos) para maximizar la tasa de finalización, y los datos informan directamente las calificaciones de anfitriones y mejoras de la plataforma.'
        },
        company: 'Airbnb'
      }
    }
  },
  {
    id: 'competitive-analysis-basics',
    title: { en: 'Competitive Analysis', es: 'Análisis Competitivo' },
    description: { 
      en: 'Analyzing competitor products to identify opportunities and gaps.',
      es: 'Analizar productos competidores para identificar oportunidades y brechas.'
    },
    status: 'intermediate',
    timeEstimate: '1h 15min',
    reference: { en: 'Competitive Usability Evaluations - NN/g', es: 'Evaluaciones de Usabilidad Competitiva - NN/g' },
    referenceLink: 'https://www.nngroup.com/articles/competitive-usability-evaluations/',
    content: {
      definition: {
        en: 'Competitive analysis is the systematic evaluation of competitor products to understand their strengths, weaknesses, features, and user experiences. It helps identify opportunities for differentiation and areas where competitors are excelling.',
        es: 'El análisis competitivo es la evaluación sistemática de productos competidores para entender sus fortalezas, debilidades, características y experiencias de usuario. Ayuda a identificar oportunidades de diferenciación y áreas donde los competidores están sobresaliendo.'
      },
      why: {
        en: 'You do not design in a vacuum. Understanding what competitors offer helps you identify gaps in the market, avoid reinventing the wheel, and set realistic benchmarks for your product. It informs both product strategy and design decisions.',
        es: 'No diseñas en un vacío. Entender qué ofrecen los competidores te ayuda a identificar brechas en el mercado, evitar reinventar la rueda y establecer benchmarks realistas para tu producto. Informa tanto la estrategia de producto como las decisiones de diseño.'
      },
      keyPrinciples: {
        en: [
          'Define criteria: What are you comparing? (features, pricing, UX, performance)',
          'Select competitors: Direct competitors (same solution) and indirect (alternative solutions)',
          'Evaluate objectively: Use structured criteria, not just subjective opinions',
          'Feature matrix: Create a spreadsheet comparing features across products',
          'UX evaluation: Go through user flows and note friction points or delights',
          'SWOT analysis: Strengths, Weaknesses, Opportunities, Threats for each competitor'
        ],
        es: [
          'Define criterios: ¿Qué estás comparando? (características, precios, UX, rendimiento)',
          'Selecciona competidores: Competidores directos (misma solución) e indirectos (soluciones alternativas)',
          'Evalúa objetivamente: Usa criterios estructurados, no solo opiniones subjetivas',
          'Matriz de características: Crea una hoja de cálculo comparando características entre productos',
          'Evaluación UX: Recorre flujos de usuario y nota puntos de fricción o delicias',
          'Análisis SWOT: Fortalezas, Debilidades, Oportunidades, Amenazas para cada competidor'
        ]
      },
      commonMistakes: {
        en: [
          'Only looking at direct competitors, ignoring adjacent solutions',
          'Copying features blindly without understanding why they work for competitors',
          'Doing analysis once and never updating it (markets change fast)',
          'Focusing only on features, not on overall user experience',
          'Not testing competitor products yourself - relying on secondhand information'
        ],
        es: [
          'Solo mirar competidores directos, ignorando soluciones adyacentes',
          'Copiar características ciegamente sin entender por qué funcionan para los competidores',
          'Hacer análisis una vez y nunca actualizarlo (los mercados cambian rápido)',
          'Enfocarse solo en características, no en la experiencia de usuario general',
          'No probar productos competidores tú mismo - confiar en información de segunda mano'
        ]
      },
      howToApply: {
        steps: [
          {
            name: { en: 'Identify Competitors', es: 'Identificar Competidores' },
            description: { 
              en: 'List 3-5 direct competitors (same product category) and 2-3 indirect competitors (solve the same problem differently). Example: For a budget app, direct = Mint, YNAB; indirect = Excel, pen & paper.',
              es: 'Lista 3-5 competidores directos (misma categoría de producto) y 2-3 competidores indirectos (resuelven el mismo problema de forma diferente). Ejemplo: Para una app de presupuesto, directo = Mint, YNAB; indirecto = Excel, lápiz y papel.'
            }
          },
          {
            name: { en: 'Define Evaluation Criteria', es: 'Definir Criterios de Evaluación' },
            description: { 
              en: 'What matters to your users? Examples: Onboarding flow, key features, pricing, mobile experience, accessibility, customer support. Pick 5-10 criteria.',
              es: '¿Qué importa a tus usuarios? Ejemplos: Flujo de onboarding, características clave, precios, experiencia móvil, accesibilidad, soporte al cliente. Elige 5-10 criterios.'
            }
          },
          {
            name: { en: 'Create Feature Matrix', es: 'Crear Matriz de Características' },
            description: { 
              en: 'Build a spreadsheet: Competitors in columns, features/criteria in rows. Mark ✓ (has it), ✗ (does not have it), or ~(partial). Add notes on implementation quality.',
              es: 'Construye una hoja de cálculo: Competidores en columnas, características/criterios en filas. Marca ✓ (lo tiene), ✗ (no lo tiene), o ~(parcial). Agrega notas sobre calidad de implementación.'
            }
          },
          {
            name: { en: 'UX Walkthrough', es: 'Recorrido UX' },
            description: { 
              en: 'Sign up and use each product. Complete key user flows. Take screenshots. Note: What delights you? What frustrates you? How long did tasks take?',
              es: 'Regístrate y usa cada producto. Completa flujos de usuario clave. Toma capturas de pantalla. Nota: ¿Qué te deleita? ¿Qué te frustra? ¿Cuánto tiempo tomaron las tareas?'
            }
          },
          {
            name: { en: 'Synthesize Findings', es: 'Sintetizar Hallazgos' },
            description: { 
              en: 'Create a summary: What do competitors do well? Where are the gaps? What opportunities exist for your product to differentiate? Present with visuals.',
              es: 'Crea un resumen: ¿Qué hacen bien los competidores? ¿Dónde están las brechas? ¿Qué oportunidades existen para que tu producto se diferencie? Presenta con visuales.'
            }
          }
        ]
      },
      deliverables: {
        description: { en: 'Competitive analysis outputs.', es: 'Resultados de análisis competitivo.' },
        items: {
          en: [
            'Feature comparison matrix: Spreadsheet showing features across competitors',
            'UX evaluation report: Screenshots and notes from using competitor products',
            'SWOT analysis: Strengths, Weaknesses, Opportunities, Threats for each competitor',
            'Opportunity map: Visual showing where your product can differentiate',
            'Presentation deck: Key findings and strategic recommendations'
          ],
          es: [
            'Matriz de comparación de características: Hoja de cálculo mostrando características entre competidores',
            'Informe de evaluación UX: Capturas de pantalla y notas de usar productos competidores',
            'Análisis SWOT: Fortalezas, Debilidades, Oportunidades, Amenazas para cada competidor',
            'Mapa de oportunidades: Visual mostrando dónde tu producto puede diferenciarse',
            'Deck de presentación: Hallazgos clave y recomendaciones estratégicas'
          ]
        }
      },
      practicalTools: {
        design: { 
          en: ['Google Sheets', 'Airtable', 'Notion', 'Miro'], 
          es: ['Google Sheets', 'Airtable', 'Notion', 'Miro'] 
        },
        research: { 
          en: ['SimilarWeb', 'Crunchbase', 'G2 reviews', 'App Store reviews'], 
          es: ['SimilarWeb', 'Crunchbase', 'Reseñas G2', 'Reseñas App Store'] 
        },
        handoff: { 
          en: ['Google Slides', 'Keynote', 'Pitch', 'Figma (for visuals)'], 
          es: ['Google Slides', 'Keynote', 'Pitch', 'Figma (para visuales)'] 
        }
      },
      aiInPractice: {
        description: { 
          en: 'Use AI to research competitors and generate comparison criteria.',
          es: 'Usa IA para investigar competidores y generar criterios de comparación.'
        },
        prompts: [
          {
            tool: 'ChatGPT',
            context: { en: 'Identifying competitors', es: 'Identificando competidores' },
            prompt: { 
              en: 'I am building a [product description]. Who are the top 5 direct competitors and 3 indirect competitors? For each, provide a 1-sentence description.',
              es: 'Estoy construyendo un [descripción de producto]. ¿Quiénes son los 5 principales competidores directos y 3 competidores indirectos? Para cada uno, proporciona una descripción de 1 oración.'
            }
          },
          {
            tool: 'Claude',
            context: { en: 'Creating evaluation criteria', es: 'Creando criterios de evaluación' },
            prompt: { 
              en: 'I am comparing [product category] products. Generate 10 evaluation criteria that matter most to users, covering features, UX, and business model.',
              es: 'Estoy comparando productos de [categoría de producto]. Genera 10 criterios de evaluación que más importan a los usuarios, cubriendo características, UX y modelo de negocio.'
            }
          }
        ]
      },
      howToValidate: {
        what: { 
          en: 'Validate that your competitive analysis is comprehensive, objective, and actionable.',
          es: 'Validar que tu análisis competitivo es completo, objetivo y accionable.'
        },
        methods: { 
          en: [
            'Cross-reference with market research: Do industry reports mention the same competitors?',
            'Test assumptions: Use competitor products yourself, do not rely only on website info',
            'Get team input: Show analysis to sales, support, and product teams for validation',
            'Track changes: Revisit analysis quarterly to see how competitors evolve'
          ],
          es: [
            'Referencias cruzadas con investigación de mercado: ¿Los informes de la industria mencionan los mismos competidores?',
            'Prueba suposiciones: Usa productos competidores tú mismo, no confíes solo en info del sitio web',
            'Obtén input del equipo: Muestra análisis a equipos de ventas, soporte y producto para validación',
            'Rastrea cambios: Revisa análisis trimestralmente para ver cómo evolucionan los competidores'
          ]
        },
        tools: { 
          en: ['G2 Crowd comparisons', 'Product Hunt', 'Reddit discussions', 'YouTube reviews'],
          es: ['Comparaciones G2 Crowd', 'Product Hunt', 'Discusiones de Reddit', 'Reseñas de YouTube']
        },
        evidenceExample: { 
          en: 'Your competitive analysis reveals that all competitors lack mobile-first design. You prioritize mobile experience and gain 30% more mobile sign-ups than competitors.',
          es: 'Tu análisis competitivo revela que todos los competidores carecen de diseño mobile-first. Priorizas la experiencia móvil y ganas 30% más de registros móviles que los competidores.'
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
        }
      ],
      realExample: {
        title: { en: 'Notion Competitive Positioning', es: 'Posicionamiento Competitivo de Notion' },
        description: {
          en: 'Notion analyzed competitors like Evernote (notes), Trello (project management), and Google Docs (collaboration). They identified a gap: no tool combined all three. By creating an \"all-in-one workspace,\" Notion differentiated itself and captured users tired of juggling multiple tools.',
          es: 'Notion analizó competidores como Evernote (notas), Trello (gestión de proyectos) y Google Docs (colaboración). Identificaron una brecha: ninguna herramienta combinaba los tres. Al crear un \"espacio de trabajo todo-en-uno,\" Notion se diferenció y capturó usuarios cansados de hacer malabarismos con múltiples herramientas.'
        },
        company: 'Notion'
      }
    }
  }
];