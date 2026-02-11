import { Topic } from './types';

export const userPersonasLesson: Topic = {
  id: 'user-personas',
  title: { en: 'User Personas', es: 'Personas de Usuario' },
  description: { en: 'Creating archetypes to represent your target users.', es: 'Creando arquetipos para representar a tus usuarios objetivo.' },
  status: 'intermediate',
  timeEstimate: '2h',
  reference: { en: 'About Face - Alan Cooper', es: 'About Face - Alan Cooper' },
  referenceLink: 'https://www.nngroup.com/articles/persona/',
  content: {
    definition: {
      en: 'Personas are fictional characters created to represent the different user types within your targeted demographic, attitude, and/or behavior set that might use a site, brand, or product in a similar way.',
      es: 'Las personas son personajes ficticios creados para representar los diferentes tipos de usuarios dentro de tu grupo demografico, actitud y/o comportamiento objetivo que podrian usar un sitio, marca o producto de manera similar.'
    },
    why: {
      en: 'They help guide decisions about product features, navigation, interactions, and even visual design by focusing on specific user goals.',
      es: 'Ayudan a guiar las decisiones sobre caracteristicas del producto, navegacion, interacciones e incluso diseno visual al enfocarse en objetivos especificos del usuario.'
    },
    keyPrinciples: {
      en: ['Goal-Directed Design.', 'Based on research, not assumptions.', 'Focus on behaviors, not just demographics.', 'Specific context scenarios.'],
      es: ['Diseno Dirigido a Objetivos.', 'Basado en investigacion, no suposiciones.', 'Enfocarse en comportamientos, no solo demografia.', 'Escenarios de contexto especificos.']
    },
    commonMistakes: {
      en: ['Creating "elastic" personas that change to fit the feature.', 'Too much irrelevant backstory (e.g., dog\'s name).', 'Not using them in design decisions.'],
      es: ['Crear personas "elasticas" que cambian para ajustarse a la funcion.', 'Demasiada historia de fondo irrelevante (ej. nombre del perro).', 'No usarlas en decisiones de diseno.']
    },
    howToApply: {
      steps: [
        {
          name: { en: 'Research & Interview', es: 'Investigacion y Entrevistas' },
          description: { en: 'Talk to 5-7 real users. Note patterns in behavior.', es: 'Habla con 5-7 usuarios reales. Nota patrones de comportamiento.' }
        },
        {
          name: { en: 'Identify Patterns', es: 'Identificar Patrones' },
          description: { en: 'Group users by goals and pain points.', es: 'Agrupa usuarios por objetivos y puntos de dolor.' }
        },
        {
          name: { en: 'Draft the Persona', es: 'Borrador de la Persona' },
          description: { en: 'Give them a name, photo, and specific quote that summarizes their attitude.', es: 'Dales un nombre, foto y una cita especifica que resuma su actitud.' }
        },
        {
          name: { en: 'Scenario Mapping', es: 'Mapeo de Escenarios' },
          description: { en: 'Write a scenario: "Mary needs to [Goal], but [Constraint]..."', es: 'Escribe un escenario: "Mary necesita [Objetivo], pero [Restriccion]..."' }
        }
      ]
    },
    aiInPractice: {
      description: { en: 'Use AI to flesh out persona details and generate empathy maps based on raw research data.', es: 'Usa IA para desarrollar detalles de personas y generar mapas de empatia basados en datos de investigacion sin procesar.' },
      prompts: [
        {
          tool: 'ChatGPT',
          context: { en: 'Creating a persona from demographics', es: 'Creando una persona desde demografia' },
          prompt: { en: 'Create a user persona for a fitness app. Demographics: Female, 28, Urban. Key goal: Strength training but has limited time. Include: Bio, Frustrations, and 3 specific goals.', es: 'Crea una persona de usuario para una app de fitness. Demografia: Mujer, 28, Urbana. Objetivo clave: Entrenamiento de fuerza pero tiene tiempo limitado. Incluye: Biografia, Frustraciones y 3 objetivos especificos.' }
        }
      ]
    },
    howToValidate: {
      what: { 
        en: 'Validate that your proto-persona accurately represents real user behaviors, goals, and pain points through research.',
        es: 'Valida que tu proto-persona represente con precision comportamientos, objetivos y puntos de dolor de usuarios reales a traves de investigacion.'
      },
      methods: { 
        en: [
          'User interviews (5-7 users) to verify assumptions',
          'Empathy mapping exercises with real user data',
          'Surveys to quantify how common the persona\'s traits are',
          'Usability testing to observe if design decisions resonate'
        ],
        es: [
          'Entrevistas con usuarios (5-7 usuarios) para verificar suposiciones',
          'Ejercicios de mapeo de empatia con datos reales de usuarios',
          'Encuestas para cuantificar que tan comunes son los rasgos de la persona',
          'Pruebas de usabilidad para observar si las decisiones de diseno resuenan'
        ]
      },
      tools: { 
        en: ['Empathy Map Canvas', 'User interview scripts', 'UserTesting.com', 'Typeform/Google Forms', 'Dovetail (for research synthesis)'],
        es: ['Canvas de Mapa de Empatia', 'Scripts de entrevistas', 'UserTesting.com', 'Typeform/Google Forms', 'Dovetail (para sintesis de investigacion)']
      },
      evidenceExample: { 
        en: 'After 6 user interviews, we confirmed that "Mary Taylor" accurately represents 4 out of 6 users. The empathy map revealed decision paralysis as the #1 barrier (mentioned by 5/6 users), validating our persona\'s key frustration. We pivoted the app to focus on curated recommendations instead of endless browsing.',
        es: 'Despues de 6 entrevistas con usuarios, confirmamos que "Mary Taylor" representa con precision a 4 de 6 usuarios. El mapa de empatia revelo la paralisis de decision como la barrera #1 (mencionada por 5/6 usuarios), validando la frustracion clave de nuestra persona. Pivoteamos la app para enfocarnos en recomendaciones curadas en lugar de navegacion infinita.'
      }
    },
    realExample: {
      title: { 
        en: 'User Persona Examples & Empathy Map', 
        es: 'Ejemplos de User Persona y Mapa de Empatia' 
      },
      description: { 
        en: 'These two personas represent different user types for the same home design platform. The empathy map below helps validate the proto-persona by exploring what Mary thinks, feels, sees, hears, says, and does\u2014revealing insights that guide product decisions.',
        es: 'Estas dos personas representan diferentes tipos de usuarios para la misma plataforma de diseno de hogar. El mapa de empatia abajo ayuda a validar la proto-persona explorando que piensa, siente, ve, escucha, dice y hace Mary\u2014revelando insights que guian decisiones de producto.'
      }
    }
  }
};
