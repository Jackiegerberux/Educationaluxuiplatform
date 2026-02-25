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
          'Preguntas de dos cañones: Preguntar dos cosas a la vez ("¿Te gusta el diseño y la funcionalidad?")',
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
              en: 'What do you need to learn? Examples: "How satisfied are users with feature X?" or "What percentage of users would pay for premium?"',
              es: '¿Qué necesitas aprender? Ejemplos: "¿Qué tan satisfechos están los usuarios con la característica X?" o "¿Qué porcentaje de usuarios pagaría por premium?"'
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
          en: 'You launch a feature and validate its success by surveying 200 users. 78% rate satisfaction as 4-5/5, and open-ended responses highlight specific value ("saves me 10 minutes daily").',
          es: 'Lanzas una característica y validas su éxito encuestando a 200 usuarios. El 78% califica la satisfacción como 4-5/5, y las respuestas abiertas destacan valor específico ("me ahorra 10 minutos diarios").'
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
            en: 'A double-barreled question asks about two things at once, making it impossible to know which part the respondent is answering about. Example: "Do you like the design and functionality?" should be split into two questions.',
            es: 'Una pregunta de dos cañones pregunta sobre dos cosas a la vez, haciendo imposible saber sobre qué parte está respondiendo el encuestado. Ejemplo: "¿Te gusta el diseño y la funcionalidad?" debería dividirse en dos preguntas.'
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
  }
  // Note: 'competitive-analysis-basics' was merged into 'competitive-analysis' in content.ts
];
