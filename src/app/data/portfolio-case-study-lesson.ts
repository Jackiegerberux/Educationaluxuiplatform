import { Topic } from './types';

export const portfolioCaseStudyLesson: Topic = {
  id: 'portfolio-case-study-writing',
  title: { en: 'Portfolio Case Study Writing', es: 'Redacción de Casos de Estudio para Portafolio' },
  description: {
    en: 'Transform real UX projects into compelling professional case studies that demonstrate your thinking, decision-making, and measurable impact.',
    es: 'Transforma proyectos UX reales en casos de estudio profesionales convincentes que demuestren tu pensamiento, toma de decisiones e impacto medible.'
  },
  status: 'advanced',
  timeEstimate: '2h 30m',
  tag: 'Strategy',
  reference: { en: 'Case Study Club — Best UX Case Studies', es: 'Case Study Club — Mejores Casos de Estudio UX' },
  referenceLink: 'https://www.casestudy.club/',
  content: {
    // ── 1. OVERVIEW ──────────────────────────────────────────────
    definition: {
      en: 'A UX Case Study is a structured narrative that tells the story of a design project — from context and constraints through research, strategy, execution, and measurable impact. It is NOT a project summary or a gallery of polished screens. A project summary lists what was done; a case study explains why decisions were made, what trade-offs were navigated, and what the outcomes meant for users and the business. The fundamental difference is depth of reasoning: summaries show outputs, case studies reveal the thinking process. Storytelling matters critically in hiring because recruiters and design leads spend an average of 3-5 minutes per portfolio. In that window, a well-structured case study communicates your seniority level, problem-solving approach, collaboration style, and ability to drive results — far more effectively than a screenshot carousel. The best case studies read like a detective story: here was the mystery (problem), here is how we investigated (research), here is what we discovered (insights), here is what we decided and why (strategy), and here is what happened (impact).',
      es: 'Un Caso de Estudio UX es una narrativa estructurada que cuenta la historia de un proyecto de diseño — desde el contexto y las restricciones, pasando por la investigación, estrategia, ejecución e impacto medible. NO es un resumen de proyecto ni una galería de pantallas pulidas. Un resumen de proyecto lista lo que se hizo; un caso de estudio explica por qué se tomaron las decisiones, qué trade-offs se navegaron y qué significaron los resultados para los usuarios y el negocio. La diferencia fundamental es la profundidad del razonamiento: los resúmenes muestran outputs, los casos de estudio revelan el proceso de pensamiento. El storytelling importa críticamente en la contratación porque reclutadores y líderes de diseño dedican un promedio de 3-5 minutos por portafolio. En esa ventana, un caso de estudio bien estructurado comunica tu nivel de seniority, enfoque de resolución de problemas, estilo de colaboración y capacidad para generar resultados — mucho más efectivamente que un carrusel de capturas de pantalla. Los mejores casos de estudio se leen como una historia de detectives: aquí estaba el misterio (problema), así es como investigamos (investigación), esto es lo que descubrimos (insights), esto es lo que decidimos y por qué (estrategia), y esto es lo que pasó (impacto).'
    },

    // ── 2. WHY IT MATTERS ────────────────────────────────────────
    why: {
      en: 'Case studies directly increase interview conversion rates. Portfolios with structured case studies showing measurable impact receive 3-4x more interview callbacks than portfolios showing only visual work. They demonstrate thinking, not screens — hiring managers want to understand HOW you solve problems, not just what the final UI looked like. The ability to articulate your design process reveals whether you are a junior designer who follows instructions or a senior designer who drives outcomes. Case studies differentiate junior from senior portfolios in three critical ways: juniors show what they designed, seniors show why they designed it; juniors present deliverables, seniors present decisions; juniors describe features, seniors quantify impact. A strong case study communicates impact by connecting design decisions to business metrics: "The redesigned onboarding flow reduced drop-off by 34% and increased trial-to-paid conversion by 12%." Without this connection, your portfolio tells recruiters you can push pixels but not whether those pixels moved the needle.',
      es: 'Los casos de estudio aumentan directamente las tasas de conversión a entrevistas. Los portafolios con casos de estudio estructurados que muestran impacto medible reciben 3-4x más callbacks de entrevistas que los portafolios que solo muestran trabajo visual. Demuestran pensamiento, no pantallas — los hiring managers quieren entender CÓMO resuelves problemas, no solo cómo se ve la UI final. La capacidad de articular tu proceso de diseño revela si eres un diseñador junior que sigue instrucciones o un diseñador senior que impulsa resultados. Los casos de estudio diferencian portafolios junior de senior en tres formas críticas: los juniors muestran qué diseñaron, los seniors muestran por qué lo diseñaron; los juniors presentan entregables, los seniors presentan decisiones; los juniors describen funcionalidades, los seniors cuantifican impacto. Un caso de estudio sólido comunica impacto conectando decisiones de diseño con métricas de negocio: "El flujo de onboarding rediseñado redujo el abandono en un 34% y aumentó la conversión de prueba a pago en un 12%." Sin esta conexión, tu portafolio le dice a los reclutadores que puedes mover pixeles pero no si esos pixeles movieron la aguja.'
    },

    // ── 3. KEY PRINCIPLES ────────────────────────────────────────
    keyPrinciples: {
      en: [
        'Context before solution: Always set the stage before showing any design work. Who was the client? What were the constraints? What was the timeline? What team structure existed? Without context, your designs exist in a vacuum and recruiters cannot evaluate the difficulty or appropriateness of your decisions.',
        'Problem clarity: State the user problem and business problem separately and explicitly. A vague problem leads to a vague case study. "Users were confused" is weak; "67% of admin users abandoned the bulk assignment flow at step 3 because the data pack selection modal loaded 200+ options without filtering" is strong.',
        'Decisions over deliverables: Every case study should answer "why did you choose this approach over alternatives?" Show the options you considered, the trade-offs you weighed, and the reasoning behind your final direction. Deliverables are the output; decisions are the proof of your skill.',
        'Impact metrics: Quantify outcomes wherever possible. Use before/after comparisons, percentage improvements, time savings, error reductions, NPS changes, or adoption rates. Even estimated impact is better than no metrics at all. "We expect this will reduce support tickets by ~40%" is better than silence.',
        'Honest challenges: Include what went wrong, what you would do differently, and what constraints forced suboptimal decisions. This demonstrates self-awareness, maturity, and genuine experience — qualities that hiring managers value more than a perfect narrative.',
        'Process transparency: Show the messy middle — early sketches, failed hypotheses, pivot moments, stakeholder pushback. A case study that presents a perfectly linear process feels fabricated. Real design is iterative, and showing that iteration proves you understand the craft.'
      ],
      es: [
        'Contexto antes de la solución: Siempre establece el escenario antes de mostrar cualquier trabajo de diseño. ¿Quién era el cliente? ¿Cuáles eran las restricciones? ¿Cuál era el timeline? ¿Qué estructura de equipo existía? Sin contexto, tus diseños existen en el vacío y los reclutadores no pueden evaluar la dificultad o adecuación de tus decisiones.',
        'Claridad del problema: Declara el problema del usuario y el problema de negocio por separado y explícitamente. Un problema vago lleva a un caso de estudio vago. "Los usuarios estaban confundidos" es débil; "67% de los usuarios admin abandonaban el flujo de asignación masiva en el paso 3 porque el modal de selección de data packs cargaba 200+ opciones sin filtrado" es fuerte.',
        'Decisiones sobre entregables: Cada caso de estudio debe responder "¿por qué elegiste este enfoque sobre las alternativas?" Muestra las opciones que consideraste, los trade-offs que sopesaste y el razonamiento detrás de tu dirección final. Los entregables son el output; las decisiones son la prueba de tu habilidad.',
        'Métricas de impacto: Cuantifica resultados donde sea posible. Usa comparaciones antes/después, porcentajes de mejora, ahorros de tiempo, reducciones de errores, cambios en NPS o tasas de adopción. Incluso el impacto estimado es mejor que ninguna métrica. "Esperamos que esto reduzca tickets de soporte en ~40%" es mejor que el silencio.',
        'Desafíos honestos: Incluye qué salió mal, qué harías diferente y qué restricciones forzaron decisiones subóptimas. Esto demuestra autoconciencia, madurez y experiencia genuina — cualidades que los hiring managers valoran más que una narrativa perfecta.',
        'Transparencia de proceso: Muestra el medio desordenado — bocetos tempranos, hipótesis fallidas, momentos de pivote, resistencia de stakeholders. Un caso de estudio que presenta un proceso perfectamente lineal se siente fabricado. El diseño real es iterativo, y mostrar esa iteración prueba que entiendes el oficio.'
      ]
    },

    // ── 6. COMMON MISTAKES ───────────────────────────────────────
    commonMistakes: {
      en: [
        'Showing only UI screens: A case study that is just a gallery of high-fidelity mockups tells the recruiter nothing about your process, thinking, or problem-solving ability. Screens without context are decoration, not evidence of skill.',
        'No measurable impact: If your case study ends with "and we launched the feature" without any metrics, conversion data, or user feedback, you are leaving the most important part unwritten. Impact is what separates a portfolio piece from a real case study.',
        'No business context: Designing without understanding why the business needed this feature makes you look like an executor, not a strategic thinker. Always explain the business goal, revenue impact, or strategic priority behind the project.',
        'Fake redesigns: Unsolicited redesigns of well-known products (Spotify, Uber, etc.) without real user data, constraints, or measurable outcomes are immediately recognized by hiring managers and often dismissed. They show visual skill but not real-world problem-solving.',
        'Overly long explanations: If your case study requires 20 minutes to read, most recruiters will skip it. Aim for a 5-7 minute read with clear headers, visual breaks, and scannable structure. Depth matters, but so does respect for the reader\'s time.',
        'No challenges mentioned: A case study where everything went perfectly is not believable. Real projects have constraints, disagreements, technical limitations, and pivots. Omitting challenges makes your narrative feel sanitized and unauthentic.'
      ],
      es: [
        'Mostrar solo pantallas de UI: Un caso de estudio que es solo una galería de mockups de alta fidelidad no le dice nada al reclutador sobre tu proceso, pensamiento o capacidad de resolución de problemas. Pantallas sin contexto son decoración, no evidencia de habilidad.',
        'Sin impacto medible: Si tu caso de estudio termina con "y lanzamos la funcionalidad" sin métricas, datos de conversión o feedback de usuarios, estás dejando sin escribir la parte más importante. El impacto es lo que separa una pieza de portafolio de un caso de estudio real.',
        'Sin contexto de negocio: Diseñar sin entender por qué el negocio necesitaba esta funcionalidad te hace parecer un ejecutor, no un pensador estratégico. Siempre explica el objetivo de negocio, impacto en revenue o prioridad estratégica detrás del proyecto.',
        'Rediseños falsos: Rediseños no solicitados de productos conocidos (Spotify, Uber, etc.) sin datos reales de usuarios, restricciones o resultados medibles son inmediatamente reconocidos por hiring managers y frecuentemente descartados. Muestran habilidad visual pero no resolución de problemas del mundo real.',
        'Explicaciones excesivamente largas: Si tu caso de estudio requiere 20 minutos de lectura, la mayoría de los reclutadores lo saltarán. Apunta a una lectura de 5-7 minutos con encabezados claros, pausas visuales y estructura escaneable. La profundidad importa, pero también el respeto por el tiempo del lector.',
        'Sin desafíos mencionados: Un caso de estudio donde todo salió perfecto no es creíble. Los proyectos reales tienen restricciones, desacuerdos, limitaciones técnicas y pivotes. Omitir desafíos hace que tu narrativa se sienta sanitizada e inauténtica.'
      ]
    },

    // ── 5. HOW TO APPLY ──────────────────────────────────────────
    howToApply: {
      steps: [
        {
          name: { en: 'Step 1: Choose the Right Project', es: 'Paso 1: Elegir el Proyecto Correcto' },
          description: {
            en: 'Select a project where you had meaningful involvement in decisions — not just execution. Ideal projects have: a clear problem you can articulate, measurable outcomes (even partial), interesting constraints or trade-offs, and a story arc from problem to solution. Avoid projects where you only followed instructions or where you cannot share results due to NDA without being able to abstract the learnings.',
            es: 'Selecciona un proyecto donde tuviste involucramiento significativo en decisiones — no solo ejecución. Los proyectos ideales tienen: un problema claro que puedes articular, resultados medibles (incluso parciales), restricciones o trade-offs interesantes, y un arco narrativo de problema a solución. Evita proyectos donde solo seguiste instrucciones o donde no puedes compartir resultados por NDA sin poder abstraer los aprendizajes.'
          }
        },
        {
          name: { en: 'Step 2: Define the Narrative Angle', es: 'Paso 2: Definir el Ángulo Narrativo' },
          description: {
            en: 'Every case study needs a central thesis — the ONE thing you want the reader to remember. Examples: "How we reduced admin task time by 60% through progressive disclosure" or "Balancing speed-to-market with accessibility compliance." Your narrative angle determines what to emphasize and what to trim. Without it, your case study reads like a chronological project log.',
            es: 'Cada caso de estudio necesita una tesis central — la UNA cosa que quieres que el lector recuerde. Ejemplos: "Cómo redujimos el tiempo de tareas admin en un 60% mediante revelación progresiva" o "Equilibrando velocidad al mercado con cumplimiento de accesibilidad." Tu ángulo narrativo determina qué enfatizar y qué recortar. Sin él, tu caso de estudio se lee como un log cronológico del proyecto.'
          }
        },
        {
          name: { en: 'Step 3: Remove the Noise', es: 'Paso 3: Eliminar el Ruido' },
          description: {
            en: 'Cut everything that does not serve your narrative angle. If your thesis is about decision-making under constraints, you do not need 15 wireframe iterations — show the 2-3 key decision points. Remove generic process descriptions ("First we did research, then we did wireframes"). Instead, explain WHAT you researched and WHY those wireframes changed. Every section should earn its place.',
            es: 'Corta todo lo que no sirva a tu ángulo narrativo. Si tu tesis es sobre toma de decisiones bajo restricciones, no necesitas 15 iteraciones de wireframes — muestra los 2-3 puntos de decisión clave. Elimina descripciones genéricas de proceso ("Primero hicimos investigación, luego wireframes"). En su lugar, explica QUÉ investigaste y POR QUÉ esos wireframes cambiaron. Cada sección debe ganarse su lugar.'
          }
        },
        {
          name: { en: 'Step 4: Add Metrics and Evidence', es: 'Paso 4: Agregar Métricas y Evidencia' },
          description: {
            en: 'For each major decision, add supporting evidence: user research quotes, analytics data, A/B test results, stakeholder feedback. For impact, use specific numbers: "Reduced average task completion time from 4m 30s to 1m 45s (61% improvement)" or "Support tickets for this flow dropped from 23/week to 4/week." If exact metrics are unavailable, use estimates with clear labeling: "Estimated impact based on usability test performance."',
            es: 'Para cada decisión importante, agrega evidencia de respaldo: citas de investigación de usuarios, datos de analítica, resultados de tests A/B, feedback de stakeholders. Para el impacto, usa números específicos: "Redujo el tiempo promedio de completado de tarea de 4m 30s a 1m 45s (mejora del 61%)" o "Los tickets de soporte para este flujo bajaron de 23/semana a 4/semana." Si las métricas exactas no están disponibles, usa estimaciones con etiquetado claro: "Impacto estimado basado en rendimiento de pruebas de usabilidad."'
          }
        },
        {
          name: { en: 'Step 5: Highlight Decision Trade-offs', es: 'Paso 5: Resaltar Trade-offs de Decisiones' },
          description: {
            en: 'For at least 2-3 key moments in the project, show the alternatives you considered and why you chose your path. Format: "We considered [Option A] which would have [benefit] but [drawback]. We chose [Option B] because [reasoning], accepting the trade-off of [limitation]." This is the single most powerful differentiator between junior and senior case studies.',
            es: 'Para al menos 2-3 momentos clave del proyecto, muestra las alternativas que consideraste y por qué elegiste tu camino. Formato: "Consideramos [Opción A] que habría [beneficio] pero [inconveniente]. Elegimos [Opción B] porque [razonamiento], aceptando el trade-off de [limitación]." Este es el diferenciador más poderoso entre casos de estudio junior y senior.'
          }
        },
        {
          name: { en: 'Step 6: Add a Reflection Section', es: 'Paso 6: Agregar una Sección de Reflexión' },
          description: {
            en: 'End your case study with honest reflection: What would you do differently? What surprised you? What did you learn about the problem space, the users, or your own process? This section demonstrates growth mindset and self-awareness — two qualities that consistently rank in the top 5 traits hiring managers look for in senior designers.',
            es: 'Termina tu caso de estudio con una reflexión honesta: ¿Qué harías diferente? ¿Qué te sorprendió? ¿Qué aprendiste sobre el espacio del problema, los usuarios o tu propio proceso? Esta sección demuestra mentalidad de crecimiento y autoconciencia — dos cualidades que consistentemente están en el top 5 de rasgos que los hiring managers buscan en diseñadores senior.'
          }
        }
      ]
    },

    // ── 7. DELIVERABLES ──────────────────────────────────────────
    deliverables: {
      description: {
        en: 'Artifacts that make up a complete, interview-ready UX case study.',
        es: 'Artefactos que componen un caso de estudio UX completo y listo para entrevistas.'
      },
      items: {
        en: [
          'Structured case study outline: 7-section framework covering Context, Problem, Discovery, Strategy, Execution, Delivery, and Impact — with word count targets for each section',
          'Impact summary section: A standalone summary (max 150 words) that a recruiter can read in under 2 minutes to understand the project, your role, and the measurable outcome',
          'Interview talking points: 5-7 bullet points per case study that you can use to walk an interviewer through the project in a structured 10-minute narrative',
          'Before/After visuals: Side-by-side comparisons showing the problem state and the solution state, annotated with the key design decisions that drove the change',
          'Metrics summary card: A visual summary card showing 3-5 key metrics with before/after values, percentage changes, and data sources — ready to embed in your portfolio or present in interviews'
        ],
        es: [
          'Esquema estructurado del caso de estudio: Marco de 7 secciones cubriendo Contexto, Problema, Descubrimiento, Estrategia, Ejecución, Entrega e Impacto — con objetivos de conteo de palabras para cada sección',
          'Sección de resumen de impacto: Un resumen independiente (máximo 150 palabras) que un reclutador puede leer en menos de 2 minutos para entender el proyecto, tu rol y el resultado medible',
          'Puntos de conversación para entrevistas: 5-7 puntos por caso de estudio que puedes usar para guiar a un entrevistador a través del proyecto en una narrativa estructurada de 10 minutos',
          'Visuales Antes/Después: Comparaciones lado a lado mostrando el estado del problema y el estado de la solución, anotadas con las decisiones de diseño clave que impulsaron el cambio',
          'Tarjeta de resumen de métricas: Una tarjeta visual mostrando 3-5 métricas clave con valores antes/después, cambios porcentuales y fuentes de datos — lista para embeber en tu portafolio o presentar en entrevistas'
        ]
      }
    },

    // ── 8. PRACTICAL TOOLS ───────────────────────────────────────
    practicalTools: {
      design: {
        en: ['Figma (high-fidelity visuals & before/after comparisons)', 'Framer (interactive portfolio website)', 'Webflow (portfolio hosting with CMS)'],
        es: ['Figma (visuales de alta fidelidad y comparaciones antes/después)', 'Framer (sitio web de portafolio interactivo)', 'Webflow (hosting de portafolio con CMS)']
      },
      documentation: {
        en: ['Notion (case study drafting & structuring)', 'Markdown (portable, version-controlled writing)', 'Loom (video walkthroughs of case studies)'],
        es: ['Notion (borrador y estructuración de casos de estudio)', 'Markdown (escritura portable y versionada)', 'Loom (recorridos en video de casos de estudio)']
      },
      analytics: {
        en: ['Google Analytics (quantifying impact metrics)', 'Hotjar (before/after heatmap evidence)', 'Mixpanel (funnel and conversion data)'],
        es: ['Google Analytics (cuantificación de métricas de impacto)', 'Hotjar (evidencia de heatmaps antes/después)', 'Mixpanel (datos de embudo y conversión)']
      }
    },

    // ── 9. AI IN PRACTICE ────────────────────────────────────────
    aiInPractice: {
      description: {
        en: 'Use AI to transform raw project notes into polished case studies and prepare for portfolio interviews.',
        es: 'Usa IA para transformar notas crudas de proyecto en casos de estudio pulidos y prepararte para entrevistas de portafolio.'
      },
      prompts: [
        {
          tool: 'ChatGPT',
          context: { en: 'Structuring raw project notes into a case study', es: 'Estructurando notas crudas de proyecto en un caso de estudio' },
          prompt: {
            en: 'I have raw notes from a UX project. The product was [product type], the user problem was [problem], the business goal was [goal], and the key decisions I made were [decisions]. The main metrics achieved were [metrics]. Please structure this into a 7-section case study following: Context, Problem, Discovery, Strategy, Execution, Delivery, Impact. For each section, write 2-3 paragraphs with specific details. Highlight decision trade-offs and include a reflection section.',
            es: 'Tengo notas crudas de un proyecto UX. El producto era [tipo de producto], el problema del usuario era [problema], el objetivo de negocio era [objetivo], y las decisiones clave que tomé fueron [decisiones]. Las métricas principales logradas fueron [métricas]. Por favor estructura esto en un caso de estudio de 7 secciones siguiendo: Contexto, Problema, Descubrimiento, Estrategia, Ejecución, Entrega, Impacto. Para cada sección, escribe 2-3 párrafos con detalles específicos. Resalta trade-offs de decisiones e incluye una sección de reflexión.'
          }
        },
        {
          tool: 'Claude',
          context: { en: 'Improving case study narrative clarity', es: 'Mejorando la claridad narrativa del caso de estudio' },
          prompt: {
            en: 'Review this UX case study draft and improve its narrative clarity. For each section, check: (1) Is the problem clearly stated? (2) Are decisions explained with trade-offs? (3) Is impact quantified? (4) Is there unnecessary process description that should be cut? (5) Can a recruiter understand the value in under 3 minutes? Rewrite weak sections and explain your changes.',
            es: 'Revisa este borrador de caso de estudio UX y mejora su claridad narrativa. Para cada sección, verifica: (1) ¿Está el problema claramente declarado? (2) ¿Las decisiones están explicadas con trade-offs? (3) ¿El impacto está cuantificado? (4) ¿Hay descripción de proceso innecesaria que debería cortarse? (5) ¿Puede un reclutador entender el valor en menos de 3 minutos? Reescribe secciones débiles y explica tus cambios.'
          }
        },
        {
          tool: 'ChatGPT',
          context: { en: 'Generating interview answers from a case study', es: 'Generando respuestas de entrevista basadas en un caso de estudio' },
          prompt: {
            en: 'Based on this case study about [project], generate structured interview answers for these common questions: (1) "Walk me through your design process for this project" (2) "What was the biggest challenge and how did you handle it?" (3) "How did you measure success?" (4) "What would you do differently?" Format each answer using the STAR method (Situation, Task, Action, Result) and keep each under 2 minutes of speaking time.',
            es: 'Basándote en este caso de estudio sobre [proyecto], genera respuestas estructuradas de entrevista para estas preguntas comunes: (1) "Guíame por tu proceso de diseño para este proyecto" (2) "¿Cuál fue el mayor desafío y cómo lo manejaste?" (3) "¿Cómo mediste el éxito?" (4) "¿Qué harías diferente?" Formatea cada respuesta usando el método STAR (Situación, Tarea, Acción, Resultado) y mantén cada una bajo 2 minutos de tiempo de habla.'
          }
        }
      ]
    },

    // ── 10. HOW TO VALIDATE ──────────────────────────────────────
    howToValidate: {
      what: {
        en: 'Validate that your case study effectively communicates your UX thinking, decision-making process, and measurable impact to recruiters and hiring managers within a 3-5 minute read.',
        es: 'Validar que tu caso de estudio comunica efectivamente tu pensamiento UX, proceso de toma de decisiones e impacto medible a reclutadores y hiring managers en una lectura de 3-5 minutos.'
      },
      methods: {
        en: [
          'Recruiter comprehension test: Show your case study to someone outside of design for 2 minutes and ask them to explain what you did and what the impact was — if they cannot, your narrative needs work',
          'Problem clarity audit: Read only your problem section — is the user problem specific and the business problem quantified? If either is vague, rewrite before anything else',
          'Trade-off verification: Count the number of explicit decision trade-offs in your case study — you need at least 2-3 to demonstrate senior-level thinking',
          'Impact measurability check: Review your impact section — are there specific numbers, percentages, or before/after comparisons? "Improved the experience" is not measurable; "Reduced task time by 61%" is'
        ],
        es: [
          'Test de comprensión del reclutador: Muestra tu caso de estudio a alguien fuera de diseño por 2 minutos y pídele que explique qué hiciste y cuál fue el impacto — si no puede, tu narrativa necesita trabajo',
          'Auditoría de claridad del problema: Lee solo tu sección de problema — ¿es el problema del usuario específico y el problema de negocio cuantificado? Si alguno es vago, reescribe antes que cualquier otra cosa',
          'Verificación de trade-offs: Cuenta el número de trade-offs de decisión explícitos en tu caso de estudio — necesitas al menos 2-3 para demostrar pensamiento de nivel senior',
          'Chequeo de medibilidad de impacto: Revisa tu sección de impacto — ¿hay números específicos, porcentajes o comparaciones antes/después? "Mejoró la experiencia" no es medible; "Redujo el tiempo de tarea en un 61%" sí lo es'
        ]
      },
      tools: {
        en: ['Hemingway App (readability score)', 'Grammarly (clarity and conciseness)', 'Peer review sessions', 'Portfolio review communities (ADPList, Dribbble)'],
        es: ['Hemingway App (puntuación de legibilidad)', 'Grammarly (claridad y concisión)', 'Sesiones de revisión de pares', 'Comunidades de revisión de portafolio (ADPList, Dribbble)']
      },
      evidenceExample: {
        en: 'A well-validated case study passes the "2-minute recruiter test": a non-designer can read the impact summary and articulate what you did, why it mattered, and what the measurable result was — all without reading the full case study.',
        es: 'Un caso de estudio bien validado pasa el "test del reclutador de 2 minutos": un no-diseñador puede leer el resumen de impacto y articular qué hiciste, por qué importó y cuál fue el resultado medible — todo sin leer el caso de estudio completo.'
      }
    },

    // ── 11. KNOWLEDGE CHECK ──────────────────────────────────────
    quiz: [
      {
        question: {
          en: 'You are reviewing a peer\'s portfolio case study. It has beautiful high-fidelity mockups, a description of the design process ("We did research, then wireframes, then prototypes"), and ends with "The feature was launched successfully." What is the MOST critical improvement needed?',
          es: 'Estás revisando el caso de estudio del portafolio de un compañero. Tiene hermosos mockups de alta fidelidad, una descripción del proceso de diseño ("Hicimos investigación, luego wireframes, luego prototipos"), y termina con "La funcionalidad se lanzó exitosamente." ¿Cuál es la mejora MÁS crítica necesaria?'
        },
        options: {
          en: [
            'Add more visual variations and screen states to show depth of UI work',
            'Add measurable impact metrics and explain the specific decisions made and trade-offs considered',
            'Make the mockups more polished with better typography and spacing',
            'Add a longer description of each phase of the design process'
          ],
          es: [
            'Agregar más variaciones visuales y estados de pantalla para mostrar profundidad del trabajo UI',
            'Agregar métricas de impacto medibles y explicar las decisiones específicas tomadas y trade-offs considerados',
            'Hacer los mockups más pulidos con mejor tipografía y espaciado',
            'Agregar una descripción más larga de cada fase del proceso de diseño'
          ]
        },
        correctIndex: 1,
        explanation: {
          en: 'The case study\'s biggest gap is the lack of measurable impact and decision reasoning. Beautiful screens show UI skill but not UX thinking. Generic process descriptions ("we did research") add no value — what matters is WHAT you researched, WHAT you decided, WHY, and what IMPACT it had. This is what differentiates a junior screenshot gallery from a senior case study.',
          es: 'La mayor brecha del caso de estudio es la falta de impacto medible y razonamiento de decisiones. Las pantallas hermosas muestran habilidad UI pero no pensamiento UX. Descripciones genéricas de proceso ("hicimos investigación") no agregan valor — lo que importa es QUÉ investigaste, QUÉ decidiste, POR QUÉ y qué IMPACTO tuvo. Esto es lo que diferencia una galería de capturas junior de un caso de estudio senior.'
        }
      },
      {
        question: {
          en: 'A junior designer asks you: "Should I include an unsolicited redesign of Spotify in my portfolio?" What is the BEST advice?',
          es: 'Un diseñador junior te pregunta: "¿Debería incluir un rediseño no solicitado de Spotify en mi portafolio?" ¿Cuál es el MEJOR consejo?'
        },
        options: {
          en: [
            'Yes, it shows you can design for large-scale products and demonstrates ambition',
            'Yes, but only if you use Spotify\'s actual design system components',
            'No, because hiring managers immediately dismiss unsolicited redesigns as lacking real-world constraints, user data, and measurable outcomes — focus on real projects instead',
            'No, because Spotify already has a good design and there is nothing to improve'
          ],
          es: [
            'Sí, muestra que puedes diseñar para productos a gran escala y demuestra ambición',
            'Sí, pero solo si usas los componentes del sistema de diseño real de Spotify',
            'No, porque los hiring managers inmediatamente descartan rediseños no solicitados como carentes de restricciones del mundo real, datos de usuarios y resultados medibles — enfócate en proyectos reales',
            'No, porque Spotify ya tiene un buen diseño y no hay nada que mejorar'
          ]
        },
        correctIndex: 2,
        explanation: {
          en: 'Unsolicited redesigns are a common portfolio trap. They demonstrate visual skill but lack the constraints, real user data, stakeholder dynamics, and measurable outcomes that define professional UX work. Hiring managers look for evidence of problem-solving in real contexts — not hypothetical improvements to products you have never worked on. A small real project with genuine impact will always outperform a polished redesign of a famous product.',
          es: 'Los rediseños no solicitados son una trampa común de portafolio. Demuestran habilidad visual pero carecen de las restricciones, datos reales de usuarios, dinámicas de stakeholders y resultados medibles que definen el trabajo UX profesional. Los hiring managers buscan evidencia de resolución de problemas en contextos reales — no mejoras hipotéticas a productos en los que nunca has trabajado. Un proyecto real pequeño con impacto genuino siempre superará a un rediseño pulido de un producto famoso.'
        }
      },
      {
        question: {
          en: 'You are writing a case study about a Claro admin dashboard redesign. You have these two versions of the impact section. Which is stronger? Version A: "The redesign improved the user experience significantly and received positive feedback from stakeholders." Version B: "The bulk assignment flow completion rate increased from 34% to 87% (+156%), average task time dropped from 4m 30s to 1m 45s, and support tickets for this flow decreased from 23/week to 4/week within 30 days of launch."',
          es: 'Estás escribiendo un caso de estudio sobre el rediseño del dashboard admin de Claro. Tienes estas dos versiones de la sección de impacto. ¿Cuál es más fuerte? Versión A: "El rediseño mejoró la experiencia del usuario significativamente y recibió feedback positivo de stakeholders." Versión B: "La tasa de completado del flujo de asignación masiva aumentó del 34% al 87% (+156%), el tiempo promedio de tarea bajó de 4m 30s a 1m 45s, y los tickets de soporte para este flujo disminuyeron de 23/semana a 4/semana dentro de los 30 días de lanzamiento."'
        },
        options: {
          en: [
            'Version A — it is more concise and professional',
            'Version B — specific metrics with before/after comparisons provide undeniable evidence of impact',
            'Both are equally effective since they communicate the same message',
            'Version A — stakeholder feedback is more important than metrics'
          ],
          es: [
            'Versión A — es más concisa y profesional',
            'Versión B — métricas específicas con comparaciones antes/después proporcionan evidencia innegable de impacto',
            'Ambas son igualmente efectivas ya que comunican el mismo mensaje',
            'Versión A — el feedback de stakeholders es más importante que las métricas'
          ]
        },
        correctIndex: 1,
        explanation: {
          en: 'Version B is dramatically stronger because it provides specific, measurable evidence of impact. "Improved significantly" and "positive feedback" are vague claims that any designer could make about any project. The specific metrics in Version B (+156% completion rate, 61% time reduction, 83% fewer support tickets) give the recruiter concrete proof of your design\'s value. Always quantify impact — it transforms your case study from an opinion into evidence.',
          es: 'La Versión B es dramáticamente más fuerte porque proporciona evidencia específica y medible de impacto. "Mejoró significativamente" y "feedback positivo" son afirmaciones vagas que cualquier diseñador podría hacer sobre cualquier proyecto. Las métricas específicas en la Versión B (+156% tasa de completado, 61% reducción de tiempo, 83% menos tickets de soporte) le dan al reclutador prueba concreta del valor de tu diseño. Siempre cuantifica el impacto — transforma tu caso de estudio de una opinión a evidencia.'
        }
      }
    ],

    // ── 12. REAL EXAMPLE ─────────────────────────────────────────
    realExample: {
      title: {
        en: 'Claro Admin Tool — Bulk Assign Data Packs: Weak vs. Strong Case Study',
        es: 'Herramienta Admin de Claro — Asignación Masiva de Data Packs: Caso de Estudio Débil vs. Fuerte'
      },
      description: {
        en: `**WEAK VERSION (Common Portfolio Mistake)**

"For Claro, I redesigned the admin dashboard for the bulk data pack assignment feature. I conducted user research, created wireframes, and designed the final UI. The feature was launched and stakeholders were happy with the result."

— No specific problem stated. No metrics. No decisions explained. No trade-offs. No impact. This reads like a task log, not a case study.

---

**STRONG VERSION (Structured Case Study)**

**Context:** Claro's internal admin platform served 340+ operators managing data pack assignments for enterprise clients. The team included 1 Product Designer (me), 1 PM, and 4 engineers. Timeline: 8 weeks. Constraint: no backend schema changes allowed due to ongoing migration.

**Problem:** 67% of admin operators abandoned the bulk assignment flow at step 3. The data pack selection modal loaded 200+ options in a flat list with no filtering, search, or grouping. Average task completion time was 4m 30s — operators were calling support instead of completing the task. Business impact: ~23 support tickets per week costing approximately $2,800/month in support labor.

**Discovery:** Conducted 8 contextual inquiry sessions with operators. Key insight: operators always assigned packs by client tier (Gold/Silver/Bronze), but the UI sorted alphabetically. They mentally mapped tier → pack name every time. We also discovered operators used a printed PDF cheat sheet taped to their monitors.

**Strategy:** We prioritized a "tier-first" filtering architecture over the requested "search bar only" solution because research showed operators thought in tiers, not pack names. Trade-off: this required 2 additional weeks for the grouped UI component, but we negotiated by deprioritizing a lower-impact admin notification feature.

**Execution:** Progressive disclosure: Step 1 = Select tier → Step 2 = Filtered packs (max 15-20 per tier) → Step 3 = Review + confirm. Built with existing design system components to stay within the no-schema-change constraint.

**Delivery:** Phased rollout: 10% → 30% → 100% over 3 weeks. Monitored completion rates and support tickets daily during rollout.

**Impact:** Flow completion rate: 34% → 87% (+156%). Average task time: 4m 30s → 1m 45s (-61%). Support tickets: 23/week → 4/week (-83%). Estimated annual savings: $28,800 in support costs.

**Reflection:** If I could redo this project, I would have pushed for user testing before the first sprint instead of after Sprint 1. We caught a labeling issue in testing that cost us 3 days of rework. The cheat sheet discovery was the most valuable research finding — it proved the mental model mismatch that justified our tier-first architecture.`,
        es: `**VERSIÓN DÉBIL (Error Común de Portafolio)**

"Para Claro, rediseñé el dashboard admin para la funcionalidad de asignación masiva de data packs. Realicé investigación de usuarios, creé wireframes y diseñé la UI final. La funcionalidad se lanzó y los stakeholders estaban contentos con el resultado."

— Sin problema específico declarado. Sin métricas. Sin decisiones explicadas. Sin trade-offs. Sin impacto. Esto se lee como un log de tareas, no un caso de estudio.

---

**VERSIÓN FUERTE (Caso de Estudio Estructurado)**

**Contexto:** La plataforma admin interna de Claro servía a 340+ operadores gestionando asignaciones de data packs para clientes enterprise. El equipo incluía 1 Product Designer (yo), 1 PM y 4 ingenieros. Timeline: 8 semanas. Restricción: no se permitían cambios de schema en backend debido a una migración en curso.

**Problema:** 67% de los operadores admin abandonaban el flujo de asignación masiva en el paso 3. El modal de selección de data packs cargaba 200+ opciones en una lista plana sin filtrado, búsqueda ni agrupación. El tiempo promedio de completado era 4m 30s — los operadores llamaban a soporte en vez de completar la tarea. Impacto en el negocio: ~23 tickets de soporte por semana costando aproximadamente $2,800/mes en labor de soporte.

**Descubrimiento:** Realicé 8 sesiones de indagación contextual con operadores. Insight clave: los operadores siempre asignaban packs por tier de cliente (Gold/Silver/Bronze), pero la UI ordenaba alfabéticamente. Mapeaban mentalmente tier → nombre de pack cada vez. También descubrimos que los operadores usaban un PDF impreso pegado a sus monitores como guía.

**Estrategia:** Priorizamos una arquitectura de filtrado "tier-first" sobre la solución solicitada de "solo barra de búsqueda" porque la investigación mostró que los operadores pensaban en tiers, no en nombres de packs. Trade-off: esto requirió 2 semanas adicionales para el componente UI agrupado, pero negociamos depriorizando una funcionalidad de notificaciones admin de menor impacto.

**Ejecución:** Revelación progresiva: Paso 1 = Seleccionar tier → Paso 2 = Packs filtrados (máx 15-20 por tier) → Paso 3 = Revisar + confirmar. Construido con componentes del sistema de diseño existente para mantenerse dentro de la restricción de no-cambio-de-schema.

**Entrega:** Rollout por fases: 10% → 30% → 100% en 3 semanas. Monitoreamos tasas de completado y tickets de soporte diariamente durante el rollout.

**Impacto:** Tasa de completado del flujo: 34% → 87% (+156%). Tiempo promedio de tarea: 4m 30s → 1m 45s (-61%). Tickets de soporte: 23/semana → 4/semana (-83%). Ahorro anual estimado: $28,800 en costos de soporte.

**Reflexión:** Si pudiera rehacer este proyecto, habría presionado por pruebas de usuario antes del primer sprint en vez de después del Sprint 1. Detectamos un problema de etiquetado en las pruebas que nos costó 3 días de retrabajo. El descubrimiento de la guía impresa fue el hallazgo de investigación más valioso — probó la discrepancia de modelo mental que justificó nuestra arquitectura tier-first.`
      },
      company: 'Claro'
    }
  }
};
