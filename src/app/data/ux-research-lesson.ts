import { Topic } from './types';

export const uxResearchLesson: Topic = {
  id: 'ux-research',
  title: { en: 'UX Research', es: 'Investigacion UX' },
  description: { en: 'Gathering insights to inform design decisions.', es: 'Recopilando insights para informar decisiones de diseno.' },
  status: 'intermediate',
  timeEstimate: '2h 30m',
  reference: { en: 'Just Enough Research - Erika Hall', es: 'Just Enough Research - Erika Hall' },
  referenceLink: 'https://www.nngroup.com/articles/ux-research-cheat-sheet/',
  content: {
    definition: {
      en: 'UX research is the systematic study of target users and their requirements, to add realistic contexts and insights to design processes.',
      es: 'La investigacion UX es el estudio sistematico de los usuarios objetivo y sus requisitos, para agregar contextos realistas e ideas a los procesos de diseno.'
    },
    why: {
      en: 'It saves time and money by preventing you from building the wrong thing.',
      es: 'Ahorra tiempo y dinero evitando que construyas la cosa equivocada.'
    },
    keyPrinciples: {
      en: ['Triangulate data: Mix qualitative (Why) & quantitative (How many).', 'Define success metrics (HEART, NPS, Retention).', 'Focus on what people do, not what they say.', 'Synthesize findings into actionable insights.'],
      es: ['Triangular datos: Mezcla cualitativo (Por que) y cuantitativo (Cuantos).', 'Define metricas de exito (HEART, NPS, Retencion).', 'Enfocate en lo que la gente hace, no en lo que dice.', 'Sintetiza hallazgos en insights accionables.']
    },
    commonMistakes: {
      en: ['Asking leading questions.', 'Confirmation bias (looking for data to support your idea).', 'Researching without a clear question.'],
      es: ['Hacer preguntas inducidas.', 'Sesgo de confirmacion (buscar datos que apoyen tu idea).', 'Investigar sin una pregunta clara.']
    },
    howToApply: {
      steps: [
        {
          name: { en: 'Define the Question', es: 'Definir la Pregunta' },
          description: { en: 'What specifically do we need to learn? (e.g. "Why do users drop off at checkout?")', es: '\u00bfQue necesitamos aprender especificamente? (ej. "\u00bfPor que los usuarios abandonan en el pago?")' }
        },
        {
          name: { en: 'Choose Method', es: 'Elegir Metodo' },
          description: { en: 'Interviews for "Why", Analytics/Surveys for "How many".', es: 'Entrevistas para "Por que", Analiticas/Encuestas para "Cuantos".' }
        },
        {
          name: { en: 'Recruit', es: 'Reclutar' },
          description: { en: 'Find 5 representative users. Do not use your coworkers.', es: 'Encuentra 5 usuarios representativos. No uses a tus companeros de trabajo.' }
        },
        {
          name: { en: 'Synthesize', es: 'Sintetizar' },
          description: { en: 'Look for themes and patterns across participants.', es: 'Busca temas y patrones entre los participantes.' }
        }
      ]
    },
    aiInPractice: {
      description: { en: 'AI can dramatically speed up the synthesis of qualitative data and help generate interview scripts.', es: 'La IA puede acelerar drasticamente la sintesis de datos cualitativos y ayudar a generar guiones de entrevistas.' },
      prompts: [
        {
          tool: 'Claude',
          context: { en: 'Synthesizing interview notes', es: 'Sintetizando notas de entrevista' },
          prompt: { en: 'I have pasted notes from 5 user interviews below. Identify the top 3 shared pain points and support each with a direct quote.', es: 'He pegado notas de 5 entrevistas de usuarios a continuacion. Identifica los 3 principales puntos de dolor compartidos y respalda cada uno con una cita directa.' }
        }
      ]
    },
    howToValidate: {
      what: {
        en: 'Validate that your research findings are reliable, unbiased, and actionable — not just confirming what the team already believed.',
        es: 'Valida que tus hallazgos de investigacion son confiables, imparciales y accionables — no solo confirmando lo que el equipo ya creia.'
      },
      methods: {
        en: [
          'Triangulation: confirm findings using 2+ methods (interviews + analytics + surveys).',
          'Peer review: have another researcher audit your interview script for leading questions.',
          'Participant diversity check: did you recruit representative users, not just power users or friends?',
          'Actionability test: can each insight be directly tied to a design decision?',
          'Stakeholder comprehension: present findings and test if non-researchers understand the "so what?"'
        ],
        es: [
          'Triangulacion: confirma hallazgos usando 2+ metodos (entrevistas + analiticas + encuestas).',
          'Revision por pares: pide a otro investigador que audite tu guion de entrevista buscando preguntas inductivas.',
          'Verificacion de diversidad de participantes: ¿reclutaste usuarios representativos, no solo power users o amigos?',
          'Test de accionabilidad: ¿cada insight puede vincularse directamente a una decision de diseno?',
          'Comprension de stakeholders: presenta hallazgos y verifica si no-investigadores entienden el "¿y que?"'
        ]
      },
      tools: {
        en: ['Dovetail (tag & pattern analysis)', 'Notion (research repository)', 'Maze (quantitative validation)', 'Optimal Workshop (IA validation)'],
        es: ['Dovetail (analisis de tags y patrones)', 'Notion (repositorio de investigacion)', 'Maze (validacion cuantitativa)', 'Optimal Workshop (validacion de AI)']
      },
      evidenceExample: {
        en: '"We interviewed 8 users and found 75% struggled with checkout. We then ran a 342-person survey and analytics review that confirmed the same friction points — triangulated data gave us high confidence to redesign."',
        es: '"Entrevistamos 8 usuarios y encontramos que el 75% tenia dificultades con el checkout. Luego ejecutamos una encuesta de 342 personas y revision de analiticas que confirmaron los mismos puntos de friccion — datos triangulados nos dieron alta confianza para redisenar."'
      }
    },
    realExample: {
      title: { 
        en: 'E-commerce Checkout Optimization Study', 
        es: 'Estudio de Optimizacion de Checkout E-commerce' 
      },
      description: {
        en: 'A comprehensive UX research project combining 4 methods to triangulate findings: User Interviews (8 participants, qualitative WHY), Surveys (342 responses, quantitative HOW MANY), Analytics (30 days, behavioral WHAT), and Usability Testing (6 participants, observational HOW). All methods revealed the same core issues: shipping costs appearing too late (64% complaint rate, 43% drop-off), forced account creation creating friction (51% complaint rate), and overly long payment forms (38% complaint rate). The triangulated data provided high confidence to recommend 3 specific changes.',
        es: 'Un proyecto integral de investigacion UX combinando 4 metodos para triangular hallazgos: Entrevistas (8 participantes, POR QUE cualitativo), Encuestas (342 respuestas, CUANTOS cuantitativo), Analiticas (30 dias, QUE comportamental), y Pruebas de Usabilidad (6 participantes, COMO observacional). Todos los metodos revelaron los mismos problemas centrales: costos de envio apareciendo muy tarde (64% tasa de queja, 43% abandono), creacion forzada de cuenta creando friccion (51% tasa de queja), y formularios de pago muy largos (38% tasa de queja). Los datos triangulados proporcionaron alta confianza para recomendar 3 cambios especificos.'
      },
      company: 'UX Research Best Practice'
    }
  }
};