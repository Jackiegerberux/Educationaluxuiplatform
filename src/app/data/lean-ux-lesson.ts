import { Topic } from './types';

export const leanUxLesson: Topic = {
  id: 'lean-ux',
  title: { en: 'Lean UX', es: 'Lean UX' },
  description: { en: 'Integrating UX into Agile development cycles.', es: 'Integrando UX en ciclos de desarrollo Agile.' },
  status: 'intermediate',
  timeEstimate: '1h 45m',
  reference: { en: 'Lean UX - Jeff Gothelf & Josh Seiden', es: 'Lean UX - Jeff Gothelf & Josh Seiden' },
  referenceLink: 'https://www.interaction-design.org/literature/article/a-simple-introduction-to-lean-ux',
  content: {
    definition: {
      en: 'Lean UX focuses on the actual experience being designed rather than deliverables. It emphasizes rapid experimentation, feedback loops, and collaboration.',
      es: 'Lean UX se centra en la experiencia real que se está diseñando en lugar de los entregables. Enfatiza la experimentación rápida, los bucles de retroalimentación y la colaboración.'
    },
    why: {
      en: 'It moves the focus from "documenting requirements" to "delivering value" and validating hypotheses quickly.',
      es: 'Mueve el enfoque de "documentar requisitos" a "entregar valor" y validar hipótesis rápidamente.'
    },
    keyPrinciples: {
      en: ['Outcomes over output.', 'Collaborative design.', 'Minimum Viable Product (MVP).', 'Continuous discovery.'],
      es: ['Resultados sobre producción.', 'Diseño colaborativo.', 'Producto Mínimo Viable (MVP).', 'Descubrimiento continuo.']
    },
    commonMistakes: {
      en: ['Skipping research in the name of speed.', 'Confusing MVP with a half-broken product.', 'Working in silos.'],
      es: ['Saltar la investigación en nombre de la velocidad.', 'Confundir MVP con un producto medio roto.', 'Trabajar en silos.']
    },
    howToApply: {
      steps: [
        {
          name: { en: 'Declare Assumptions', es: 'Declarar Suposiciones' },
          description: { en: 'What do we believe is true? (e.g. "Users want to share photos")', es: '¿Qué creemos que es verdad? (ej. "Los usuarios quieren compartir fotos")' }
        },
        {
          name: { en: 'Create Hypothesis', es: 'Crear Hipótesis' },
          description: { en: 'We believe [Outcome] will happen if [Feature] for [Persona].', es: 'Creemos que [Resultado] sucederá si [Función] para [Persona].' }
        },
        {
          name: { en: 'Build MVP', es: 'Construir MVP' },
          description: { en: 'The smallest thing to validate the hypothesis (even a paper sketch).', es: 'La cosa más pequeña para validar la hipótesis (incluso un boceto en papel).' }
        },
        {
          name: { en: 'Measure & Learn', es: 'Medir y Aprender' },
          description: { en: 'Did it work? If not, pivot.', es: '¿Funcionó? Si no, pivota.' }
        }
      ]
    },
    aiInPractice: {
      description: { en: 'Use AI to generate testable hypotheses from business goals.', es: 'Usa IA para generar hipótesis comprobables a partir de objetivos comerciales.' },
      prompts: [
        {
          tool: 'ChatGPT',
          context: { en: 'Brainstorming hypotheses', es: 'Lluvia de ideas de hipótesis' },
          prompt: { en: 'Our goal is to increase newsletter signups by 20%. Generate 5 Lean UX hypotheses for how we might achieve this on our blog page.', es: 'Nuestro objetivo es aumentar las suscripciones al boletín en un 20%. Genera 5 hipótesis de Lean UX sobre cómo podríamos lograr esto en nuestra página de blog.' }
        }
      ]
    },
    howToValidate: {
      what: { 
        en: 'Validate that your hypothesis is testable, your MVP is truly minimal, and your metrics accurately measure the desired outcome.',
        es: 'Valida que tu hipótesis sea comprobable, tu MVP sea verdaderamente mínimo y tus métricas midan con precisión el resultado deseado.'
      },
      methods: { 
        en: [
          'Define success metrics before building (e.g., "20% increase in signups")',
          'Test MVP with real users (minimum 30-50 interactions for statistical significance)',
          'Use A/B testing to compare hypothesis vs. control',
          'Set a decision threshold: at what point do you pivot vs. persevere?',
          'Validate that you\'re measuring outcomes, not just outputs (signups, not button clicks)'
        ],
        es: [
          'Define métricas de éxito antes de construir (ej. "20% aumento en registros")',
          'Prueba MVP con usuarios reales (mínimo 30-50 interacciones para significancia estadística)',
          'Usa pruebas A/B para comparar hipótesis vs. control',
          'Establece un umbral de decisión: ¿en qué punto pivotas vs. perseveras?',
          'Valida que estés midiendo resultados, no solo salidas (registros, no clics en botones)'
        ]
      },
      tools: { 
        en: ['Google Analytics', 'Mixpanel', 'Hotjar', 'Amplitude', 'Optimizely (A/B testing)', 'User interviews'],
        es: ['Google Analytics', 'Mixpanel', 'Hotjar', 'Amplitude', 'Optimizely (pruebas A/B)', 'Entrevistas de usuario']
      },
      evidenceExample: { 
        en: 'Hypothesis: "We believe signups will increase by 20% if we add social proof (testimonials) above the fold for first-time visitors." MVP: Added 3 customer testimonials with photos. Metrics: Tracked signup conversion rate for 2 weeks (n=1,247 visitors). Result: 12% increase in signups. Decision: Persevere but iterate—test video testimonials next.',
        es: 'Hipótesis: "Creemos que los registros aumentarán en un 20% si agregamos prueba social (testimonios) en la parte superior para visitantes primerizos." MVP: Agregamos 3 testimonios de clientes con fotos. Métricas: Rastreamos tasa de conversión de registros durante 2 semanas (n=1,247 visitantes). Resultado: 12% de aumento en registros. Decisión: Perseverar pero iterar—probar testimonios en video a continuación.'
      }
    },
    practicalTools: {
      design: { 
        en: ['Figma/Sketch (low-fi prototypes)', 'Miro/FigJam (hypothesis mapping)', 'Notion (experiment tracker)'],
        es: ['Figma/Sketch (prototipos de baja fidelidad)', 'Miro/FigJam (mapeo de hipótesis)', 'Notion (rastreador de experimentos)']
      },
      research: { 
        en: ['Google Analytics', 'Mixpanel', 'Hotjar', 'Amplitude', 'UserTesting', 'Optimizely'],
        es: ['Google Analytics', 'Mixpanel', 'Hotjar', 'Amplitude', 'UserTesting', 'Optimizely']
      },
      handoff: { 
        en: ['Hypothesis canvas', 'Experiment tracker (Notion/Airtable)', 'Metrics dashboard'], 
        es: ['Canvas de hipótesis', 'Rastreador de experimentos (Notion/Airtable)', 'Dashboard de métricas'] 
      }
    },
    realExample: {
      title: { 
        en: 'Dropbox MVP: The Power of a 3-Minute Video', 
        es: 'Dropbox MVP: El Poder de un Video de 3 Minutos' 
      },
      description: {
        en: 'In 2008, Dropbox faced a classic Lean UX challenge: building cloud file sync was technically complex and expensive. Instead of building first, founder Drew Houston created a simple 3-minute demo video showing how Dropbox would work. The hypothesis: "We believe early adopters will sign up for a beta if we clearly demonstrate the file sync problem and solution." The MVP wasn\'t a product—it was a video. Posted on Hacker News, it generated 75,000 overnight signups. This validated massive demand before writing production code, and became one of the most famous Lean UX success stories. The lesson: your MVP should be the smallest thing that tests your riskiest assumption.',
        es: 'En 2008, Dropbox enfrentó un desafío clásico de Lean UX: construir sincronización de archivos en la nube era técnicamente complejo y costoso. En lugar de construir primero, el fundador Drew Houston creó un simple video demo de 3 minutos mostrando cómo funcionaría Dropbox. La hipótesis: "Creemos que los early adopters se registrarán para una beta si demostramos claramente el problema y solución de sincronización de archivos." El MVP no fue un producto—fue un video. Publicado en Hacker News, generó 75,000 registros de la noche a la mañana. Esto validó una demanda masiva antes de escribir código de producción, y se convirtió en una de las historias de éxito de Lean UX más famosas. La lección: tu MVP debe ser la cosa más pequeña que pruebe tu suposición más riesgosa.'
      },
      company: 'Dropbox (2008)'
    }
  }
};
