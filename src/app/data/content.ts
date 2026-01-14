
export type Language = 'en' | 'es';

export interface Topic {
  id: string;
  title: { en: string; es: string };
  description: { en: string; es: string };
  status: 'beginner' | 'intermediate' | 'advanced';
  timeEstimate: string;
  reference?: { en: string; es: string };
  referenceLink?: string;
  content?: {
    definition: { en: string; es: string };
    why: { en: string; es: string };
    keyPrinciples: { en: string[]; es: string[] };
    commonMistakes: { en: string[]; es: string[] };
    howToApply?: {
      steps: {
        name: { en: string; es: string };
        description: { en: string; es: string };
      }[];
    };
    aiInPractice?: {
      description: { en: string; es: string };
      prompts: {
        tool: string;
        context: { en: string; es: string };
        prompt: { en: string; es: string };
      }[];
    };
  };
}

export interface Track {
  id: string;
  title: { en: string; es: string };
  description: { en: string; es: string };
  topics: Topic[];
}

export const tracks: Track[] = [
  {
    id: 'foundations',
    title: { en: 'UX/UI Foundations', es: 'Fundamentos UX/UI' },
    description: { 
      en: 'Master the core principles of user-centered design, research, and visual hierarchy.', 
      es: 'Domina los principios básicos del diseño centrado en el usuario, la investigación y la jerarquía visual.' 
    },
    topics: [
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
            en: ['Affordances: Properties that determine just how the thing could possibly be used.', 'Signifiers: Clues that tell you where the action should take place.', 'Feedback: Sending back information about what action has been done.'],
            es: ['Affordances: Propiedades que determinan cómo se puede usar algo.', 'Significantes: Pistas que te dicen dónde debe tener lugar la acción.', 'Retroalimentación: Enviar información sobre qué acción se ha realizado.']
          },
          commonMistakes: {
            en: ['Hiding critical controls for aesthetics (poor signifiers).', 'Providing no feedback after an interaction.', 'Designing based on how the code works, not how people think.'],
            es: ['Ocultar controles críticos por estética (malos significantes).', 'No proporcionar retroalimentación después de una interacción.', 'Diseñar basándose en cómo funciona el código, no en cómo piensan las personas.']
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
              }
            ]
          }
        }
      },
      {
        id: 'information-architecture',
        title: { en: 'Information Architecture', es: 'Arquitectura de Información' },
        description: { en: 'Organizing content so users can find what they need without thinking.', es: 'Organizar el contenido para que los usuarios encuentren lo que necesitan sin pensar.' },
        status: 'beginner',
        timeEstimate: '1h 30m',
        reference: { en: 'Don\'t Make Me Think - Steve Krug', es: 'No me hagas pensar - Steve Krug' },
        referenceLink: 'https://www.nngroup.com/articles/ia-101/',
        content: {
          definition: {
            en: 'Information Architecture (IA) is the structural design of shared information environments; the art and science of organizing and labeling websites, intranets, online communities and software to support usability and findability.',
            es: 'La Arquitectura de Información (AI) es el diseño estructural de entornos de información compartidos; el arte y la ciencia de organizar y etiquetar sitios web, intranets, comunidades en línea y software para apoyar la usabilidad y la capacidad de búsqueda.'
          },
          why: {
            en: 'Users scan screens rather than reading them. Good IA allows them to "muddle through" effectively.',
            es: 'Los usuarios escanean pantallas en lugar de leerlas. Una buena AI les permite "arreglárselas" de manera efectiva.'
          },
          keyPrinciples: {
            en: ['Create a clear visual hierarchy.', 'Break pages up into clearly defined areas.', 'Make it obvious what\'s clickable.', 'Omit needless words.'],
            es: ['Crea una jerarquía visual clara.', 'Divide las páginas en áreas claramente definidas.', 'Haz obvio qué se puede hacer clic.', 'Omite palabras innecesarias.']
          },
          commonMistakes: {
            en: ['Buring content deep in navigation layers.', 'Using clever but unclear labels.', 'Assuming users will read instructions.'],
            es: ['Enterrar contenido en capas profundas de navegación.', 'Usar etiquetas ingeniosas pero poco claras.', 'Asumir que los usuarios leerán las instrucciones.']
          },
          howToApply: {
            steps: [
              {
                name: { en: 'Content Inventory', es: 'Inventario de Contenido' },
                description: { en: 'List all content items your site needs.', es: 'Lista todos los elementos de contenido que tu sitio necesita.' }
              },
              {
                name: { en: 'Card Sorting', es: 'Card Sorting' },
                description: { en: 'Group related items together logically.', es: 'Agrupa elementos relacionados lógicamente.' }
              },
              {
                name: { en: 'Labeling', es: 'Etiquetado' },
                description: { en: 'Give each group a clear, common-sense name.', es: 'Dale a cada grupo un nombre claro y de sentido común.' }
              },
              {
                name: { en: 'Navigation Testing', es: 'Prueba de Navegación' },
                description: { en: 'Can a user find "X" in less than 3 clicks?', es: '¿Puede un usuario encontrar "X" en menos de 3 clics?' }
              }
            ]
          },
          aiInPractice: {
            description: { en: 'AI is excellent at categorization and suggesting simplified labels for complex hierarchies.', es: 'La IA es excelente para categorizar y sugerir etiquetas simplificadas para jerarquías complejas.' },
            prompts: [
              {
                tool: 'Claude',
                context: { en: 'Organizing a help center', es: 'Organizando un centro de ayuda' },
                prompt: { en: 'Here is a list of 30 help articles [Paste List]. Group them into 4-6 logical categories and suggest clear, simple labels for each category.', es: 'Aquí hay una lista de 30 artículos de ayuda [Pegar lista]. Agrúpalos en 4-6 categorías lógicas y sugiere etiquetas claras y simples para cada categoría.' }
              }
            ]
          }
        }
      },
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
          }
        }
      },
      {
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
            es: 'Las personas son personajes ficticios creados para representar los diferentes tipos de usuarios dentro de tu grupo demográfico, actitud y/o comportamiento objetivo que podrían usar un sitio, marca o producto de manera similar.'
          },
          why: {
            en: 'They help guide decisions about product features, navigation, interactions, and even visual design by focusing on specific user goals.',
            es: 'Ayudan a guiar las decisiones sobre características del producto, navegación, interacciones e incluso diseño visual al enfocarse en objetivos específicos del usuario.'
          },
          keyPrinciples: {
            en: ['Goal-Directed Design.', 'Based on research, not assumptions.', 'Focus on behaviors, not just demographics.', 'Specific context scenarios.'],
            es: ['Diseño Dirigido a Objetivos.', 'Basado en investigación, no suposiciones.', 'Enfocarse en comportamientos, no solo demografía.', 'Escenarios de contexto específicos.']
          },
          commonMistakes: {
            en: ['Creating "elastic" personas that change to fit the feature.', 'Too much irrelevant backstory (e.g., dog\'s name).', 'Not using them in design decisions.'],
            es: ['Crear personas "elásticas" que cambian para ajustarse a la función.', 'Demasiada historia de fondo irrelevante (ej. nombre del perro).', 'No usarlas en decisiones de diseño.']
          },
          howToApply: {
            steps: [
              {
                name: { en: 'Research & Interview', es: 'Investigación y Entrevistas' },
                description: { en: 'Talk to 5-7 real users. Note patterns in behavior.', es: 'Habla con 5-7 usuarios reales. Nota patrones de comportamiento.' }
              },
              {
                name: { en: 'Identify Patterns', es: 'Identificar Patrones' },
                description: { en: 'Group users by goals and pain points.', es: 'Agrupa usuarios por objetivos y puntos de dolor.' }
              },
              {
                name: { en: 'Draft the Persona', es: 'Borrador de la Persona' },
                description: { en: 'Give them a name, photo, and specific quote that summarizes their attitude.', es: 'Dales un nombre, foto y una cita específica que resuma su actitud.' }
              },
              {
                name: { en: 'Scenario Mapping', es: 'Mapeo de Escenarios' },
                description: { en: 'Write a scenario: "Mary needs to [Goal], but [Constraint]..."', es: 'Escribe un escenario: "Mary necesita [Objetivo], pero [Restricción]..."' }
              }
            ]
          },
          aiInPractice: {
            description: { en: 'Use AI to flesh out persona details and generate empathy maps based on raw research data.', es: 'Usa IA para desarrollar detalles de personas y generar mapas de empatía basados en datos de investigación sin procesar.' },
            prompts: [
              {
                tool: 'ChatGPT',
                context: { en: 'Creating a persona from demographics', es: 'Creando una persona desde demografía' },
                prompt: { en: 'Create a user persona for a fitness app. Demographics: Female, 28, Urban. Key goal: Strength training but has limited time. Include: Bio, Frustrations, and 3 specific goals.', es: 'Crea una persona de usuario para una app de fitness. Demografía: Mujer, 28, Urbana. Objetivo clave: Entrenamiento de fuerza pero tiene tiempo limitado. Incluye: Biografía, Frustraciones y 3 objetivos específicos.' }
              }
            ]
          }
        }
      },
       {
        id: 'ux-research',
        title: { en: 'UX Research', es: 'Investigación UX' },
        description: { en: 'Gathering insights to inform design decisions.', es: 'Recopilando insights para informar decisiones de diseño.' },
        status: 'intermediate',
        timeEstimate: '2h 30m',
        reference: { en: 'Just Enough Research - Erika Hall', es: 'Just Enough Research - Erika Hall' },
        referenceLink: 'https://www.nngroup.com/articles/ux-research-cheat-sheet/',
        content: {
          definition: {
            en: 'UX research is the systematic study of target users and their requirements, to add realistic contexts and insights to design processes.',
            es: 'La investigación UX es el estudio sistemático de los usuarios objetivo y sus requisitos, para agregar contextos realistas e ideas a los procesos de diseño.'
          },
          why: {
            en: 'It saves time and money by preventing you from building the wrong thing.',
            es: 'Ahorra tiempo y dinero evitando que construyas la cosa equivocada.'
          },
          keyPrinciples: {
            en: ['Triangulate data: Mix qualitative (Why) & quantitative (How many).', 'Define success metrics (HEART, NPS, Retention).', 'Focus on what people do, not what they say.', 'Synthesize findings into actionable insights.'],
            es: ['Triangular datos: Mezcla cualitativo (Por qué) y cuantitativo (Cuántos).', 'Define métricas de éxito (HEART, NPS, Retención).', 'Enfócate en lo que la gente hace, no en lo que dice.', 'Sintetiza hallazgos en insights accionables.']
          },
          commonMistakes: {
            en: ['Asking leading questions.', 'Confirmation bias (looking for data to support your idea).', 'Researching without a clear question.'],
            es: ['Hacer preguntas inducidas.', 'Sesgo de confirmación (buscar datos que apoyen tu idea).', 'Investigar sin una pregunta clara.']
          },
          howToApply: {
            steps: [
              {
                name: { en: 'Define the Question', es: 'Definir la Pregunta' },
                description: { en: 'What specifically do we need to learn? (e.g. "Why do users drop off at checkout?")', es: '¿Qué necesitamos aprender específicamente? (ej. "¿Por qué los usuarios abandonan en el pago?")' }
              },
              {
                name: { en: 'Choose Method', es: 'Elegir Método' },
                description: { en: 'Interviews for "Why", Analytics/Surveys for "How many".', es: 'Entrevistas para "Por qué", Analíticas/Encuestas para "Cuántos".' }
              },
              {
                name: { en: 'Recruit', es: 'Reclutar' },
                description: { en: 'Find 5 representative users. Do not use your coworkers.', es: 'Encuentra 5 usuarios representativos. No uses a tus compañeros de trabajo.' }
              },
              {
                name: { en: 'Synthesize', es: 'Sintetizar' },
                description: { en: 'Look for themes and patterns across participants.', es: 'Busca temas y patrones entre los participantes.' }
              }
            ]
          },
          aiInPractice: {
            description: { en: 'AI can dramatically speed up the synthesis of qualitative data and help generate interview scripts.', es: 'La IA puede acelerar drásticamente la síntesis de datos cualitativos y ayudar a generar guiones de entrevistas.' },
            prompts: [
              {
                tool: 'Claude',
                context: { en: 'Synthesizing interview notes', es: 'Sintetizando notas de entrevista' },
                prompt: { en: 'I have pasted notes from 5 user interviews below. Identify the top 3 shared pain points and support each with a direct quote.', es: 'He pegado notas de 5 entrevistas de usuarios a continuación. Identifica los 3 principales puntos de dolor compartidos y respalda cada uno con una cita directa.' }
              }
            ]
          }
        }
      },
      {
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
          }
        }
      },
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
          }
        }
      },
      {
        id: 'design-methodologies',
        title: { en: 'Design Methodologies', es: 'Metodologías de Diseño' },
        description: { en: 'Agile, Design Thinking, and Research approaches for modern product teams.', es: 'Agile, Design Thinking y enfoques de Investigación para equipos de producto modernos.' },
        status: 'beginner',
        timeEstimate: '2h',
        reference: { en: 'The Scrum Guide & IDEO', es: 'La Guía Scrum e IDEO' },
        referenceLink: 'https://www.nngroup.com/articles/design-thinking/',
        content: {
          definition: {
            en: 'Design methodologies are structured approaches to solving problems and managing product development. They provide a framework for collaboration, risk management, and decision-making.',
            es: 'Las metodologías de diseño son enfoques estructurados para resolver problemas y gestionar el desarrollo de productos. Proporcionan un marco para la colaboración, la gestión de riesgos y la toma de decisiones.'
          },
          why: {
            en: 'Choosing the right methodology ensures that teams are aligned, risks are managed early, and the final product actually meets user needs rather than just following a plan.',
            es: 'Elegir la metodología correcta asegura que los equipos estén alineados, los riesgos se gestionen temprano y el producto final realmente satisfaga las necesidades del usuario en lugar de solo seguir un plan.'
          },
          keyPrinciples: {
            en: ['Iterative delivery over "Big Bang" launches.', 'User feedback loops at every stage.', 'Cross-functional collaboration (Design + Dev + Business).', 'Adaptability to change.'],
            es: ['Entrega iterativa sobre lanzamientos "Big Bang".', 'Bucles de retroalimentación de usuarios en cada etapa.', 'Colaboración interfuncional (Diseño + Dev + Negocio).', 'Adaptabilidad al cambio.']
          },
          commonMistakes: {
            en: ['Treating Agile as "no research" or "no documentation".', 'Running Design Sprints without a clear problem.', 'Using Waterfall for complex, uncertain projects.', 'Rigidly following a process instead of the mindset.'],
            es: ['Tratar Agile como "sin investigación" o "sin documentación".', 'Ejecutar Design Sprints sin un problema claro.', 'Usar Waterfall para proyectos complejos e inciertos.', 'Seguir rígidamente un proceso en lugar de la mentalidad.']
          },
          howToApply: {
            steps: [
              {
                name: { en: 'Choose Methodology', es: 'Elegir Metodología' },
                description: { en: 'Is the problem clear? (Waterfall). Is it ambiguous? (Design Thinking/Agile).', es: '¿El problema está claro? (Waterfall). ¿Es ambiguo? (Design Thinking/Agile).' }
              },
              {
                name: { en: 'Initial Research', es: 'Investigación Inicial' },
                description: { en: 'Start with Desk Research. What do we already know? What are competitors doing?', es: 'Comienza con Investigación de Escritorio. ¿Qué sabemos ya? ¿Qué están haciendo los competidores?' }
              },
              {
                name: { en: 'Define Assumptions', es: 'Definir Suposiciones' },
                description: { en: 'List what you *think* is true. These are your first hypotheses to test.', es: 'Lista lo que *crees* que es verdad. Estas son tus primeras hipótesis para probar.' }
              }
            ]
          },
          aiInPractice: {
            description: { en: 'AI can act as a methodology consultant, helping you choose the right approach based on project constraints.', es: 'La IA puede actuar como consultor de metodología, ayudándote a elegir el enfoque correcto basado en las restricciones del proyecto.' },
            prompts: [
              {
                tool: 'ChatGPT',
                context: { en: 'Selecting a methodology', es: 'Seleccionando una metodología' },
                prompt: { en: 'We are building a new medical app with strict regulatory requirements but undefined user needs. Compare using Waterfall vs Agile for this specific case. What are the risks of each?', es: 'Estamos construyendo una nueva app médica con requisitos regulatorios estrictos pero necesidades de usuario indefinidas. Compara el uso de Waterfall vs Agile para este caso específico. ¿Cuáles son los riesgos de cada uno?' }
              },
              {
                tool: 'Perplexity / Claude',
                context: { en: 'Summarizing desk research', es: 'Resumiendo investigación de escritorio' },
                prompt: { en: 'Summarize the current UX trends for "Fintech Onboarding" in 2024 based on reputable sources. List top 3 patterns.', es: 'Resume las tendencias actuales de UX para "Onboarding Fintech" en 2024 basadas en fuentes confiables. Enumera los 3 patrones principales.' }
              }
            ]
          }
        }
      }
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
       {
        id: 'visual-hierarchy',
        title: { en: 'Visual Hierarchy', es: 'Jerarquía Visual' },
        description: { en: 'Guiding the user\'s eye through design principles.', es: 'Guiando el ojo del usuario a través de principios de diseño.' },
        status: 'advanced',
        timeEstimate: '2h',
        reference: { en: 'Universal Principles of Design - William Lidwell', es: 'Universal Principles of Design - William Lidwell' },
        referenceLink: 'https://www.interaction-design.org/literature/topics/visual-hierarchy',
        content: {
          definition: {
            en: 'Visual hierarchy controls the delivery of information. It arranges elements to show their order of importance.',
            es: 'La jerarquía visual controla la entrega de información. Organiza los elementos para mostrar su orden de importancia.'
          },
          why: {
            en: 'It reduces cognitive load and helps users process information efficiently.',
            es: 'Reduce la carga cognitiva y ayuda a los usuarios a procesar la información de manera eficiente.'
          },
          keyPrinciples: {
            en: ['Size and Scale.', 'Color and Contrast.', 'Typographic Hierarchy.', 'Whitespace and Proximity.'],
            es: ['Tamaño y Escala.', 'Color y Contraste.', 'Jerarquía Tipográfica.', 'Espacio en blanco y Proximidad.']
          },
          commonMistakes: {
            en: ['Making everything bold or large ("shouting").', 'Lack of breathing room (whitespace).', 'Inconsistent alignment.'],
            es: ['Hacer todo en negrita o grande ("gritar").', 'Falta de espacio para respirar (espacio en blanco).', 'Alineación inconsistente.']
          },
          howToApply: {
            steps: [
              {
                name: { en: 'Rank Information', es: 'Clasificar Información' },
                description: { en: 'List elements by importance (1. Title, 2. CTA, 3. Image...).', es: 'Lista elementos por importancia (1. Título, 2. CTA, 3. Imagen...).' }
              },
              {
                name: { en: 'Establish Grid', es: 'Establecer Cuadrícula' },
                description: { en: 'Use a grid to align elements and create structure.', es: 'Usa una cuadrícula para alinear elementos y crear estructura.' }
              },
              {
                name: { en: 'Squint Test', es: 'Prueba de Entrecerrar los Ojos' },
                description: { en: 'Squint at your screen. The most important elements should still be visible.', es: 'Entrecierra los ojos ante tu pantalla. Los elementos más importantes aún deberían ser visibles.' }
              }
            ]
          },
          aiInPractice: {
            description: { en: 'Use vision-enabled AI to analyze screenshots of your design and objectively predict what users will see first.', es: 'Usa IA con capacidad de visión para analizar capturas de pantalla de tu diseño y predecir objetivamente qué verán primero los usuarios.' },
            prompts: [
              {
                tool: 'ChatGPT (Vision)',
                context: { en: 'Analyzing a screenshot', es: 'Analizando una captura de pantalla' },
                prompt: { en: 'Look at this UI screenshot. List the top 3 elements that draw your attention immediately. Does this align with the goal of "Signing Up"?', es: 'Mira esta captura de pantalla de UI. Enumera los 3 elementos principales que llaman tu atención de inmediato. ¿Se alinea esto con el objetivo de "Registrarse"?' }
              }
            ]
          }
        }
      },
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
      {
        id: 'microinteractions',
        title: { en: 'Microinteractions', es: 'Microinteracciones' },
        description: { en: 'The details that make the product engaging and alive.', es: 'Los detalles que hacen que el producto sea atractivo y vivo.' },
        status: 'advanced',
        timeEstimate: '1h 30m',
        reference: { en: 'Seductive Interaction Design - Stephen Anderson', es: 'Seductive Interaction Design - Stephen Anderson' },
        referenceLink: 'https://www.nngroup.com/articles/microinteractions/',
        content: {
          definition: {
            en: 'Microinteractions are contained product moments that revolve around a single use case—they have one main task.',
            es: 'Las microinteracciones son momentos contenidos del producto que giran en torno a un solo caso de uso; tienen una tarea principal.'
          },
          why: {
            en: 'They provide feedback, explain function, prevent error, and add a layer of personality and delight.',
            es: 'Proporcionan retroalimentación, explican funciones, previenen errores y agregan una capa de personalidad y deleite.'
          },
          keyPrinciples: {
            en: ['Trigger (What starts it).', 'Rules (What happens).', 'Feedback (What you see).', 'Loops & Modes (Meta-rules).'],
            es: ['Disparador (Qué lo inicia).', 'Reglas (Qué sucede).', 'Retroalimentación (Lo que ves).', 'Bucles y Modos (Meta-reglas).']
          },
          commonMistakes: {
            en: ['Annoying or slow animations.', 'Distracting from the main task.', 'Inconsistent behavior.'],
            es: ['Animaciones molestas o lentas.', 'Distraer de la tarea principal.', 'Comportamiento inconsistente.']
          },
          howToApply: {
            steps: [
              {
                name: { en: 'Identify Trigger', es: 'Identificar Disparador' },
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
          }
        }
      },
       {
        id: 'accessibility',
        title: { en: 'Accessibility (A11y)', es: 'Accesibilidad (A11y)' },
        description: { en: 'Designing for everyone, regardless of ability.', es: 'Diseñando para todos, independientemente de su capacidad.' },
        status: 'advanced',
        timeEstimate: '3h',
        reference: { en: 'Accessibility for Everyone - Laura Kalbag', es: 'Accessibility for Everyone - Laura Kalbag' },
        referenceLink: 'https://www.w3.org/WAI/fundamentals/accessibility-intro/',
        content: {
          definition: {
            en: 'Accessibility is the practice of making your websites usable by as many people as possible, including those with disabilities (visual, motor, auditory, cognitive).',
            es: 'La accesibilidad es la práctica de hacer que tus sitios web sean utilizables por la mayor cantidad de personas posible, incluidas aquellas con discapacidades (visuales, motoras, auditivas, cognitivas).'
          },
          why: {
            en: 'It is a human right, a legal requirement in many places, and it improves usability for everyone (universal design).',
            es: 'Es un derecho humano, un requisito legal en muchos lugares y mejora la usabilidad para todos (diseño universal).'
          },
          keyPrinciples: {
            en: ['Perceivable (Contrast, Alt text).', 'Operable (Keyboard nav).', 'Understandable (Clear language).', 'Robust (Compatible code).'],
            es: ['Perceptible (Contraste, Texto alternativo).', 'Operable (Nav. por teclado).', 'Comprensible (Lenguaje claro).', 'Robusto (Código compatible).']
          },
          commonMistakes: {
            en: ['Relying only on color to convey meaning.', 'Low contrast text.', 'Unlabeled form fields.', 'Trapping keyboard focus.'],
            es: ['Depender solo del color para transmitir significado.', 'Texto de bajo contraste.', 'Campos de formulario sin etiquetas.', 'Atrapar el foco del teclado.']
          },
          howToApply: {
            steps: [
              {
                name: { en: 'Check Contrast', es: 'Verificar Contraste' },
                description: { en: 'Ensure 4.5:1 ratio for normal text.', es: 'Asegura una relación de 4.5:1 para texto normal.' }
              },
              {
                name: { en: 'Keyboard Testing', es: 'Prueba de Teclado' },
                description: { en: 'Unplug your mouse. Can you use your site with only Tab and Enter?', es: 'Desconecta tu ratón. ¿Puedes usar tu sitio solo con Tab y Enter?' }
              },
              {
                name: { en: 'Semantic HTML', es: 'HTML Semántico' },
                description: { en: 'Use <button> for actions, <a> for links. Do not use <div>.', es: 'Usa <button> para acciones, <a> para enlaces. No uses <div>.' }
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
              }
            ]
          }
        }
      },
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
          aiInPractice: {
            description: { en: 'Use AI to analyze copy for cognitive load and suggest simpler alternatives.', es: 'Usa IA para analizar la carga cognitiva del texto y sugerir alternativas más simples.' },
            prompts: [
              {
                tool: 'ChatGPT',
                context: { en: 'Simplifying UI text', es: 'Simplificando texto de UI' },
                prompt: { en: 'Rewrite this error message to be friendlier and easier to understand for a stressed user: "Error 503: Database Connection Failed."', es: 'Reescribe este mensaje de error para que sea más amigable y fácil de entender para un usuario estresado: "Error 503: Fallo de Conexión a Base de Datos".' }
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
          aiInPractice: {
            description: { en: 'Use AI to check your copy for potential manipulative language or bias.', es: 'Usa IA para verificar tu texto en busca de posible lenguaje manipulador o sesgo.' },
            prompts: [
              {
                tool: 'Claude',
                context: { en: 'Ethical copy audit', es: 'Auditoría ética de texto' },
                prompt: { en: 'Analyze this subscription modal text. Highlight any phrasing that might be considered "confirmshaming" or manipulative.', es: 'Analiza este texto del modal de suscripción. Resalta cualquier fraseo que pueda considerarse "confirmshaming" o manipulador.' }
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
            en: 'A collection of maxims and principles that designers can consider when building user interfaces, based on psychology.',
            es: 'Una colección de máximas y principios que los diseñadores pueden considerar al construir interfaces de usuario, basadas en la psicología.'
          },
          why: {
            en: 'They provide a scientific basis for design decisions, moving arguments from "I like it" to "This is how the brain works".',
            es: 'Proporcionan una base científica para las decisiones de diseño, moviendo los argumentos de "me gusta" a "así funciona el cerebro".'
          },
          keyPrinciples: {
            en: ['Hick\'s Law (Choices).', 'Fitts\'s Law (Target size/distance).', 'Jakob\'s Law (Familiarity).', 'Miller\'s Law (Chunking).'],
            es: ['Ley de Hick (Opciones).', 'Ley de Fitts (Tamaño/distancia del objetivo).', 'Ley de Jakob (Familiaridad).', 'Ley de Miller (Agrupación).']
          },
          commonMistakes: {
            en: ['Applying laws dogmatically.', 'Ignoring context.', 'Using dark patterns disguised as psychology.'],
            es: ['Aplicar leyes dogmáticamente.', 'Ignorar el contexto.', 'Usar patrones oscuros disfrazados de psicología.']
          },
          howToApply: {
            steps: [
              {
                name: { en: 'Audit with Laws', es: 'Auditar con Leyes' },
                description: { en: 'Review a flow. Are buttons large enough (Fitts)? Is it familiar (Jakob)?', es: 'Revisa un flujo. ¿Son los botones lo suficientemente grandes (Fitts)? ¿Es familiar (Jakob)?' }
              },
              {
                name: { en: 'Design Defense', es: 'Defensa del Diseño' },
                description: { en: 'Use laws to justify your decisions to stakeholders.', es: 'Usa leyes para justificar tus decisiones ante los stakeholders.' }
              }
            ]
          },
          aiInPractice: {
            description: { en: 'Use AI to learn how to explain complex psychological concepts to non-designers.', es: 'Usa IA para aprender a explicar conceptos psicológicos complejos a no diseñadores.' },
            prompts: [
              {
                tool: 'ChatGPT',
                context: { en: 'Explaining Fitts\'s Law', es: 'Explicando la Ley de Fitts' },
                prompt: { en: 'Explain Fitts\'s Law to a marketing manager in 2 sentences. Use a metaphor about targets.', es: 'Explica la Ley de Fitts a un gerente de marketing en 2 oraciones. Usa una metáfora sobre objetivos.' }
              }
            ]
          }
        }
      },
      {
        id: 'frontend-foundations',
        title: { en: 'Front-End Foundations', es: 'Fundamentos Front-End' },
        description: { en: 'HTML, CSS & Layout mental models for designers.', es: 'Modelos mentales de HTML, CSS y diseño para diseñadores.' },
        status: 'advanced',
        timeEstimate: '2h',
        referenceLink: 'https://developer.mozilla.org/en-US/docs/Learn/Front-end_web_developer',
        content: {
          definition: {
            en: 'Understanding the medium of the web (HTML/CSS) to create feasible and accessible designs. It is not about writing production code, but understanding how the browser renders your design.',
            es: 'Entender el medio de la web (HTML/CSS) para crear diseños viables y accesibles. No se trata de escribir código de producción, sino de entender cómo el navegador renderiza tu diseño.'
          },
          why: {
            en: 'Bridging the gap between design and development reduces friction, improves implementation accuracy, and helps you design for dynamic content.',
            es: 'Cerrar la brecha entre el diseño y el desarrollo reduce la fricción, mejora la precisión de la implementación y te ayuda a diseñar para contenido dinámico.'
          },
          keyPrinciples: {
            en: ['Box Model (Margin, Border, Padding).', 'Flexbox & Grid layouts.', 'Responsive units (rem, vh).', 'The "Design Handoff" (Communicating intent vs pixels).', 'Accessibility tree.'],
            es: ['Modelo de Caja (Margen, Borde, Relleno).', 'Diseños Flexbox y Grid.', 'Unidades responsivas (rem, vh).', 'El "Design Handoff" (Comunicar intención vs píxeles).', 'Árbol de accesibilidad.']
          },
          commonMistakes: {
            en: ['Designing with fixed widths (px) everywhere.', 'Ignoring hover/focus states.', 'Not accounting for variable content length.', 'Thinking of the web as a static canvas.'],
            es: ['Diseñar con anchos fijos (px) en todas partes.', 'Ignorar estados de hover/foco.', 'No tener en cuenta la longitud variable del contenido.', 'Pensar en la web como un lienzo estático.']
          },
          howToApply: {
            steps: [
              {
                name: { en: 'Think in Boxes', es: 'Piensa en Cajas' },
                description: { en: 'Draw boxes around every element in your design.', es: 'Dibuja cajas alrededor de cada elemento en tu diseño.' }
              },
              {
                name: { en: 'Annotate for Handoff', es: 'Anotar para Handoff' },
                description: { en: 'Explain behavior: "Fixed on scroll", "Truncate text after 2 lines". Don\'t just send screens.', es: 'Explica comportamiento: "Fijo al scroll", "Cortar texto tras 2 líneas". No envíes solo pantallas.' }
              }
            ]
          },
          aiInPractice: {
            description: { en: 'Use AI to translate design concepts into CSS logic to help communicate with developers.', es: 'Usa IA para traducir conceptos de diseño a lógica CSS para ayudar a comunicarte con los desarrolladores.' },
            prompts: [
              {
                tool: 'ChatGPT',
                context: { en: 'Explaining a layout', es: 'Explicando un diseño' },
                prompt: { en: 'How do I explain to a developer that I want this container to center its children both horizontally and vertically using Flexbox?', es: '¿Cómo le explico a un desarrollador que quiero que este contenedor centre sus hijos tanto horizontal como verticalmente usando Flexbox?' }
              }
            ]
          }
        }
      }
    ]
  }
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
