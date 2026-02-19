import type { Topic } from './types';

export const stakeholderMappingLesson: Topic = {
  id: 'stakeholder-mapping',
  title: { en: 'Stakeholder Mapping', es: 'Mapeo de Stakeholders' },
  description: {
    en: 'Identifying and prioritizing the people who influence your project.',
    es: 'Identificando y priorizando a las personas que influyen en tu proyecto.'
  },
  status: 'beginner',
  timeEstimate: '1h 15m',
  tag: 'Strategy',
  reference: {
    en: 'Stakeholder Theory — R. Edward Freeman · Power/Interest Grid — Mendelow (1991)',
    es: 'Teoría de Stakeholders — R. Edward Freeman · Matriz Poder/Interés — Mendelow (1991)'
  },
  referenceLink: 'https://www.nngroup.com/articles/stakeholder-interviews/',
  content: {
    definition: {
      en: 'A stakeholder is any individual, group, or organization that can affect or be affected by a project\'s outcome. Stakeholder Mapping is the strategic practice of identifying all stakeholders, assessing their level of power, interest, and influence over your project, and developing tailored engagement strategies for each. In enterprise environments, stakeholders range from C-suite executives and product managers to engineering leads, customer support teams, regulatory bodies, and end users themselves. For UX and Product Designers, mastering stakeholder mapping is not a "soft skill" — it is a survival skill. Projects fail not because of bad designs, but because the wrong people were ignored, the right people were not consulted, or political dynamics were misread. A well-executed stakeholder map turns invisible organizational forces into a visible, actionable strategy.',
      es: 'Un stakeholder es cualquier individuo, grupo u organización que puede afectar o verse afectado por el resultado de un proyecto. El Mapeo de Stakeholders es la práctica estratégica de identificar a todos los stakeholders, evaluar su nivel de poder, interés e influencia sobre tu proyecto, y desarrollar estrategias de engagement personalizadas para cada uno. En entornos empresariales, los stakeholders van desde ejecutivos C-suite y product managers hasta líderes de ingeniería, equipos de soporte al cliente, cuerpos regulatorios y los propios usuarios finales. Para Diseñadores UX y de Producto, dominar el mapeo de stakeholders no es una "habilidad blanda" — es una habilidad de supervivencia. Los proyectos fallan no por malos diseños, sino porque se ignoró a las personas equivocadas, no se consultó a las correctas, o se malinterpretaron las dinámicas políticas. Un mapa de stakeholders bien ejecutado convierte fuerzas organizacionales invisibles en una estrategia visible y accionable.'
    },
    why: {
      en: 'Design does not happen in a vacuum. Every project exists within an organizational ecosystem where multiple people have opinions, budgets, authority, and competing priorities. Without stakeholder mapping, you risk: (1) Building a solution that gets killed in review because a key decision-maker was never consulted, (2) Wasting weeks on features that a senior stakeholder will veto, (3) Missing critical constraints that only operations or legal teams know about, (4) Losing political support because you didn\'t keep the right people informed, (5) Scope creep from stakeholders who feel unheard and start injecting last-minute requirements. When you map stakeholders early, you can anticipate blockers, build alliances, tailor your communication style, and dramatically increase the odds that your design actually ships. The best designers are not just pixel-perfect — they are politically aware.',
      es: 'El diseño no ocurre en un vacío. Cada proyecto existe dentro de un ecosistema organizacional donde múltiples personas tienen opiniones, presupuestos, autoridad y prioridades competitivas. Sin mapeo de stakeholders, arriesgas: (1) Construir una solución que se mata en revisión porque nunca se consultó a un tomador de decisiones clave, (2) Desperdiciar semanas en features que un stakeholder senior vetará, (3) Perder restricciones críticas que solo los equipos de operaciones o legal conocen, (4) Perder soporte político porque no mantuviste informadas a las personas correctas, (5) Scope creep de stakeholders que se sienten ignorados y comienzan a inyectar requisitos de último momento. Cuando mapeas stakeholders temprano, puedes anticipar bloqueadores, construir alianzas, adaptar tu estilo de comunicación, y aumentar dramáticamente las probabilidades de que tu diseño realmente se lance. Los mejores diseñadores no solo son pixel-perfect — son políticamente conscientes.'
    },
    keyPrinciples: {
      en: [
        'A stakeholder is anyone who can affect or be affected by your project. This includes obvious roles (PM, CEO) and less obvious ones (customer support, legal, sales, marketing, data engineering).',
        'Power refers to a stakeholder\'s ability to directly impact the project — approve budgets, allocate resources, or block decisions. Interest refers to how much they care about the project\'s outcome.',
        'The Power vs Interest Matrix (Mendelow, 1991) is the most widely used framework. It creates four quadrants: High Power/High Interest (Manage Closely), High Power/Low Interest (Keep Satisfied), Low Power/High Interest (Keep Informed), Low Power/Low Interest (Monitor).',
        'Power and Influence are different. Power is formal authority (VP can cancel the project). Influence is informal sway (a respected engineer whose opinion shapes team decisions even without authority).',
        'Stakeholder mapping is not a one-time exercise. Power dynamics shift as projects evolve — a stakeholder who was low-interest in discovery may become high-power in delivery when budget approval is needed.',
        'Communication strategy must be tailored per quadrant. One-size-fits-all updates guarantee that someone is either overwhelmed or under-informed.',
        'Political risk signals — HiPPO effect, scope creep from excluded stakeholders, conflicting KPIs — are predictable patterns. Anticipate them before they derail your project.',
        'Always map stakeholders before your first design sprint. The 30 minutes invested saves weeks of rework from misalignment.',
        'Include end users as stakeholders. They have low formal power but high interest and are the ultimate validators of your design decisions.'
      ],
      es: [
        'Un stakeholder es cualquiera que puede afectar o verse afectado por tu proyecto. Esto incluye roles obvios (PM, CEO) y menos obvios (soporte al cliente, legal, ventas, marketing, ingeniería de datos).',
        'El Poder se refiere a la capacidad de un stakeholder de impactar directamente el proyecto — aprobar presupuestos, asignar recursos o bloquear decisiones. El Interés se refiere a cuánto les importa el resultado del proyecto.',
        'La Matriz de Poder vs Interés (Mendelow, 1991) es el framework más utilizado. Crea cuatro cuadrantes: Alto Poder/Alto Interés (Gestionar de Cerca), Alto Poder/Bajo Interés (Mantener Satisfecho), Bajo Poder/Alto Interés (Mantener Informado), Bajo Poder/Bajo Interés (Monitorear).',
        'Poder e Influencia son diferentes. Poder es autoridad formal (un VP puede cancelar el proyecto). Influencia es influencia informal (un ingeniero respetado cuya opinión moldea decisiones del equipo incluso sin autoridad).',
        'El mapeo de stakeholders no es un ejercicio de una sola vez. Las dinámicas de poder cambian conforme los proyectos evolucionan — un stakeholder con bajo interés en descubrimiento puede volverse de alto poder en entrega cuando se necesita aprobación de presupuesto.',
        'La estrategia de comunicación debe adaptarse por cuadrante. Actualizaciones genéricas garantizan que alguien esté abrumado o sub-informado.',
        'Las señales de riesgo político — efecto HiPPO, scope creep de stakeholders excluidos, KPIs conflictivos — son patrones predecibles. Anticípalos antes de que descarrilen tu proyecto.',
        'Siempre mapea stakeholders antes de tu primer design sprint. Los 30 minutos invertidos ahorran semanas de retrabajo por desalineación.',
        'Incluye a los usuarios finales como stakeholders. Tienen bajo poder formal pero alto interés y son los validadores definitivos de tus decisiones de diseño.'
      ]
    },
    howToApply: {
      steps: [
        {
          name: { en: '1. List All Potential Stakeholders', es: '1. Listar Todos los Stakeholders Potenciales' },
          description: {
            en: 'Brainstorm every person or group who touches the project. Go beyond the obvious: PM, engineering lead, QA, customer support, sales, marketing, legal, compliance, data analytics, finance, executive sponsor. Ask your PM: "Who else has opinions about this project?" Ask support: "Who complains when things change?" Cast a wide net — you can always trim later.',
            es: 'Haz brainstorming de cada persona o grupo que toca el proyecto. Ve más allá de lo obvio: PM, líder de ingeniería, QA, soporte al cliente, ventas, marketing, legal, compliance, analítica de datos, finanzas, sponsor ejecutivo. Pregunta a tu PM: "¿Quién más tiene opiniones sobre este proyecto?" Pregunta a soporte: "¿Quién se queja cuando las cosas cambian?" Lanza una red amplia — siempre puedes recortar después.'
          }
        },
        {
          name: { en: '2. Assess Power and Interest', es: '2. Evaluar Poder e Interés' },
          description: {
            en: 'For each stakeholder, rate their Power (ability to approve, fund, or block) and Interest (how much they care about the outcome) on a High/Low scale. Be honest — a CEO may have ultimate power but zero interest in your specific feature. A customer support lead may have low power but intense interest because they handle complaints daily.',
            es: 'Para cada stakeholder, califica su Poder (capacidad de aprobar, financiar o bloquear) e Interés (cuánto les importa el resultado) en una escala Alta/Baja. Sé honesto — un CEO puede tener poder definitivo pero cero interés en tu feature específico. Un líder de soporte al cliente puede tener bajo poder pero interés intenso porque maneja quejas diariamente.'
          }
        },
        {
          name: { en: '3. Place on the Power vs Interest Matrix', es: '3. Ubicar en la Matriz de Poder vs Interés' },
          description: {
            en: 'Plot each stakeholder on the 2x2 grid. High Power + High Interest = Manage Closely (co-create, weekly syncs). High Power + Low Interest = Keep Satisfied (executive summaries, milestone updates). Low Power + High Interest = Keep Informed (regular updates, feedback channels). Low Power + Low Interest = Monitor (minimal effort, watch for changes).',
            es: 'Ubica cada stakeholder en la cuadrícula 2x2. Alto Poder + Alto Interés = Gestionar de Cerca (co-crear, syncs semanales). Alto Poder + Bajo Interés = Mantener Satisfecho (resúmenes ejecutivos, actualizaciones de hitos). Bajo Poder + Alto Interés = Mantener Informado (actualizaciones regulares, canales de feedback). Bajo Poder + Bajo Interés = Monitorear (esfuerzo mínimo, observar cambios).'
          }
        },
        {
          name: { en: '4. Define Communication Strategy', es: '4. Definir Estrategia de Comunicación' },
          description: {
            en: 'For each quadrant, define: frequency (daily/weekly/monthly), format (Slack, email, meeting, dashboard), depth (detailed specs vs executive summary), and feedback mechanism (async comments vs live review). Document this in a simple table and share with your PM to align on who owns each relationship.',
            es: 'Para cada cuadrante, define: frecuencia (diaria/semanal/mensual), formato (Slack, email, reunión, dashboard), profundidad (specs detallados vs resumen ejecutivo), y mecanismo de feedback (comentarios async vs revisión en vivo). Documenta esto en una tabla simple y compártela con tu PM para alinear quién es dueño de cada relación.'
          }
        },
        {
          name: { en: '5. Monitor and Adapt', es: '5. Monitorear y Adaptar' },
          description: {
            en: 'Revisit your stakeholder map at each project phase transition (discovery → design → development → launch). Power dynamics shift: a quiet stakeholder may become vocal when launch approaches. New stakeholders may emerge (PR team before a public release, legal before a data feature). Update positions and adjust your strategy accordingly.',
            es: 'Revisita tu mapa de stakeholders en cada transición de fase del proyecto (descubrimiento → diseño → desarrollo → lanzamiento). Las dinámicas de poder cambian: un stakeholder callado puede volverse vocal cuando se acerca el lanzamiento. Nuevos stakeholders pueden emerger (equipo de PR antes de un release público, legal antes de un feature de datos). Actualiza posiciones y ajusta tu estrategia en consecuencia.'
          }
        }
      ]
    },
    commonMistakes: {
      en: [
        'Only mapping "obvious" stakeholders: ignoring customer support, legal, data engineering, or sales teams who have critical insights and can block your project indirectly.',
        'Treating all stakeholders equally: sending the same weekly email to a CEO and a junior developer wastes everyone\'s time. Tailor depth and frequency.',
        'Mapping once and forgetting: stakeholder dynamics shift as projects evolve. A quarterly review stakeholder may become a daily blocker during launch.',
        'Confusing power with influence: a VP has power (budget authority), but a respected senior engineer may have more influence on technical decisions. Map both.',
        'Ignoring political dynamics: pretending office politics don\'t exist doesn\'t make them go away. Acknowledge competing agendas and plan around them.',
        'Not including end users as stakeholders: users have low formal power but are the ultimate judges of your design. Their absence from the map leads to internally-optimized products that fail in the market.',
        'Over-communicating to low-priority stakeholders: spending energy on "Monitor" quadrant stakeholders steals time from "Manage Closely" relationships that actually determine project success.',
        'Failing to identify the real decision-maker: sometimes the person with the title is not the one making the call. Find out who actually signs off.'
      ],
      es: [
        'Solo mapear stakeholders "obvios": ignorar soporte al cliente, legal, ingeniería de datos, o equipos de ventas que tienen insights críticos y pueden bloquear tu proyecto indirectamente.',
        'Tratar a todos los stakeholders igual: enviar el mismo email semanal a un CEO y a un desarrollador junior desperdicia el tiempo de todos. Adapta profundidad y frecuencia.',
        'Mapear una vez y olvidar: las dinámicas de stakeholders cambian conforme los proyectos evolucionan. Un stakeholder de revisión trimestral puede convertirse en un bloqueador diario durante el lanzamiento.',
        'Confundir poder con influencia: un VP tiene poder (autoridad presupuestaria), pero un ingeniero senior respetado puede tener más influencia en decisiones técnicas. Mapea ambos.',
        'Ignorar dinámicas políticas: pretender que la política de oficina no existe no la hace desaparecer. Reconoce agendas competitivas y planifica alrededor de ellas.',
        'No incluir usuarios finales como stakeholders: los usuarios tienen bajo poder formal pero son los jueces definitivos de tu diseño. Su ausencia del mapa lleva a productos optimizados internamente que fallan en el mercado.',
        'Sobre-comunicar a stakeholders de baja prioridad: gastar energía en stakeholders del cuadrante "Monitorear" roba tiempo de relaciones "Gestionar de Cerca" que realmente determinan el éxito del proyecto.',
        'No identificar al verdadero tomador de decisiones: a veces la persona con el título no es quien toma la decisión. Descubre quién realmente da el visto bueno.'
      ]
    },
    deliverables: {
      description: {
        en: 'Key artifacts for effective stakeholder management throughout a project.',
        es: 'Artefactos clave para gestión efectiva de stakeholders a lo largo de un proyecto.'
      },
      items: {
        en: [
          'Stakeholder Map: 2x2 Power vs Interest matrix with all identified stakeholders plotted and color-coded',
          'Communication Plan: Table specifying frequency, format, depth, and owner for each stakeholder group',
          'RACI Matrix: Responsible, Accountable, Consulted, Informed chart for key project decisions',
          'Stakeholder Interview Guide: Structured questions for initial stakeholder discovery sessions',
          'Political Risk Register: Document tracking known conflicts, competing KPIs, and mitigation strategies'
        ],
        es: [
          'Mapa de Stakeholders: Matriz 2x2 de Poder vs Interés con todos los stakeholders identificados y codificados por color',
          'Plan de Comunicación: Tabla especificando frecuencia, formato, profundidad y responsable para cada grupo de stakeholders',
          'Matriz RACI: Gráfico de Responsable, Aprobador, Consultado, Informado para decisiones clave del proyecto',
          'Guía de Entrevista a Stakeholders: Preguntas estructuradas para sesiones iniciales de descubrimiento de stakeholders',
          'Registro de Riesgos Políticos: Documento rastreando conflictos conocidos, KPIs competitivos y estrategias de mitigación'
        ]
      }
    },
    practicalTools: {
      design: {
        en: ['Miro (stakeholder map templates)', 'FigJam (collaborative mapping)', 'Mural (workshop facilitation)', 'Notion (communication plan docs)'],
        es: ['Miro (plantillas de mapa de stakeholders)', 'FigJam (mapeo colaborativo)', 'Mural (facilitación de talleres)', 'Notion (documentos de plan de comunicación)']
      },
      research: {
        en: ['Dovetail (interview synthesis)', 'Otter.ai (interview transcription)', 'Google Forms (stakeholder surveys)', 'Calendly (scheduling interviews)'],
        es: ['Dovetail (síntesis de entrevistas)', 'Otter.ai (transcripción de entrevistas)', 'Google Forms (encuestas a stakeholders)', 'Calendly (programar entrevistas)']
      },
      management: {
        en: ['Confluence (RACI documentation)', 'Jira (decision tracking)', 'Slack (async communication channels)', 'Loom (async video updates)'],
        es: ['Confluence (documentación RACI)', 'Jira (seguimiento de decisiones)', 'Slack (canales de comunicación async)', 'Loom (actualizaciones de video async)']
      }
    },
    aiInPractice: {
      description: {
        en: 'AI can help you identify stakeholders you might miss, draft communication plans, and anticipate political risks based on organizational patterns.',
        es: 'La IA puede ayudarte a identificar stakeholders que podrías pasar por alto, redactar planes de comunicación y anticipar riesgos políticos basados en patrones organizacionales.'
      },
      prompts: [
        {
          tool: 'ChatGPT',
          context: { en: 'Identify hidden stakeholders for a project', es: 'Identificar stakeholders ocultos para un proyecto' },
          prompt: {
            en: 'I\'m a UX Designer starting a project to redesign the mobile checkout flow for a B2C e-commerce app. The obvious stakeholders are: PM, engineering lead, and head of product. Help me identify 10 additional stakeholders I might be missing. For each one, explain: (1) Their role, (2) Why they care about this project, (3) Their likely power level (high/low), (4) Their likely interest level (high/low). Think about operations, legal, analytics, marketing, support, and finance.',
            es: 'Soy un Diseñador UX comenzando un proyecto para rediseñar el flujo de checkout móvil para una app de e-commerce B2C. Los stakeholders obvios son: PM, líder de ingeniería y head de producto. Ayúdame a identificar 10 stakeholders adicionales que podría estar pasando por alto. Para cada uno, explica: (1) Su rol, (2) Por qué les importa este proyecto, (3) Su nivel de poder probable (alto/bajo), (4) Su nivel de interés probable (alto/bajo). Piensa en operaciones, legal, analítica, marketing, soporte y finanzas.'
          }
        },
        {
          tool: 'Claude',
          context: { en: 'Draft a communication plan per quadrant', es: 'Redactar un plan de comunicación por cuadrante' },
          prompt: {
            en: 'I\'ve completed a stakeholder mapping exercise for a design system migration project. Here are my stakeholders by quadrant: Manage Closely: VP of Product, Lead Engineer. Keep Satisfied: CTO, CFO. Keep Informed: Frontend developers (5), QA team (3). Monitor: HR, facilities. Create a detailed communication plan table with columns: Stakeholder, Quadrant, Frequency, Format, Content Depth, Feedback Mechanism, Owner. Make it practical and specific.',
            es: 'He completado un ejercicio de mapeo de stakeholders para un proyecto de migración de design system. Aquí están mis stakeholders por cuadrante: Gestionar de Cerca: VP de Producto, Ingeniero Líder. Mantener Satisfecho: CTO, CFO. Mantener Informado: Desarrolladores frontend (5), equipo QA (3). Monitorear: RRHH, instalaciones. Crea una tabla detallada de plan de comunicación con columnas: Stakeholder, Cuadrante, Frecuencia, Formato, Profundidad de Contenido, Mecanismo de Feedback, Responsable. Hazlo práctico y específico.'
          }
        },
        {
          tool: 'ChatGPT',
          context: { en: 'Anticipate political risks in a project', es: 'Anticipar riesgos políticos en un proyecto' },
          prompt: {
            en: 'I\'m working on a project where the VP of Sales wants to add 5 new features to increase conversions, but the Head of Engineering says the team is already at capacity. The PM is caught in the middle. The CEO has mentioned "we need to ship faster" in the last all-hands. Analyze this situation: (1) Identify the political risks (HiPPO, conflicting KPIs, etc.), (2) Map the power dynamics, (3) Suggest 3 strategies I can use as a designer to navigate this without taking sides. Be specific and realistic.',
            es: 'Estoy trabajando en un proyecto donde el VP de Ventas quiere agregar 5 features nuevos para aumentar conversiones, pero el Head de Ingeniería dice que el equipo ya está al límite. El PM está atrapado en el medio. El CEO mencionó "necesitamos lanzar más rápido" en el último all-hands. Analiza esta situación: (1) Identifica los riesgos políticos (HiPPO, KPIs conflictivos, etc.), (2) Mapea las dinámicas de poder, (3) Sugiere 3 estrategias que puedo usar como diseñador para navegar esto sin tomar partido. Sé específico y realista.'
          }
        }
      ]
    },
    howToValidate: {
      what: {
        en: 'Validate that your stakeholder map accurately reflects organizational dynamics and that your communication strategy is keeping the right people aligned.',
        es: 'Valida que tu mapa de stakeholders refleje precisamente las dinámicas organizacionales y que tu estrategia de comunicación mantenga alineadas a las personas correctas.'
      },
      methods: {
        en: [
          'Surprise check: Were you ever blindsided by a stakeholder who blocked or changed your project? If yes, your map has gaps — go back and identify who was missing.',
          'PM validation: Show your map to your PM and ask "Am I missing anyone who has opinions about this project?" PMs know organizational dynamics deeply.',
          'Alignment pulse: After each major milestone, ask key stakeholders: "Were you aware of this decision before today?" If anyone says no, your communication plan failed.',
          'Decision speed: Track how long design approvals take. If they\'re slow, you may be missing a key decision-maker or not engaging them early enough.',
          'Retrospective audit: At project end, review which stakeholders caused delays or surprises. Update your template for next time.'
        ],
        es: [
          'Verificación de sorpresas: ¿Alguna vez te tomó por sorpresa un stakeholder que bloqueó o cambió tu proyecto? Si es así, tu mapa tiene brechas — regresa e identifica quién faltaba.',
          'Validación del PM: Muestra tu mapa a tu PM y pregunta "¿Me falta alguien que tenga opiniones sobre este proyecto?" Los PMs conocen las dinámicas organizacionales profundamente.',
          'Pulso de alineación: Después de cada hito importante, pregunta a stakeholders clave: "¿Sabías de esta decisión antes de hoy?" Si alguien dice no, tu plan de comunicación falló.',
          'Velocidad de decisiones: Rastrea cuánto tiempo toman las aprobaciones de diseño. Si son lentas, podrías estar perdiendo a un tomador de decisiones clave o no involucrándolos suficientemente temprano.',
          'Auditoría retrospectiva: Al final del proyecto, revisa qué stakeholders causaron retrasos o sorpresas. Actualiza tu plantilla para la próxima vez.'
        ]
      },
      tools: {
        en: ['Miro (collaborative mapping sessions)', 'Confluence (decision logs)', 'Slack polls (quick alignment checks)', 'Jira (approval tracking)'],
        es: ['Miro (sesiones de mapeo colaborativo)', 'Confluence (registros de decisiones)', 'Encuestas Slack (verificaciones rápidas de alineación)', 'Jira (seguimiento de aprobaciones)']
      },
      evidenceExample: {
        en: '"After mapping 14 stakeholders for our checkout redesign, we identified the Head of Fraud Prevention as a critical \'Manage Closely\' stakeholder — previously unmapped. By involving them in sprint reviews from week 2, we avoided a 3-week delay that occurred in the previous project when fraud requirements were raised post-launch. Decision approval time decreased from 8 days to 2 days."',
        es: '"Después de mapear 14 stakeholders para nuestro rediseño de checkout, identificamos al Head de Prevención de Fraude como un stakeholder crítico de \'Gestionar de Cerca\' — previamente no mapeado. Al involucrarlo en los sprint reviews desde la semana 2, evitamos un retraso de 3 semanas que ocurrió en el proyecto anterior cuando los requisitos de fraude se plantearon post-lanzamiento. El tiempo de aprobación de decisiones disminuyó de 8 días a 2 días."'
      }
    },
    quiz: [
      {
        question: {
          en: 'A senior VP has budget authority over your project but has never attended a single review meeting. Where do you place them on the Power vs Interest matrix?',
          es: 'Un VP senior tiene autoridad presupuestaria sobre tu proyecto pero nunca ha asistido a una sola reunión de revisión. ¿Dónde lo ubicas en la matriz de Poder vs Interés?'
        },
        options: {
          en: [
            'High Power, High Interest — they control the budget so they must care.',
            'High Power, Low Interest — they have authority but are not actively engaged.',
            'Low Power, High Interest — they are clearly interested since they have budget.',
            'Low Power, Low Interest — if they do not attend meetings, they are irrelevant.'
          ],
          es: [
            'Alto Poder, Alto Interés — controlan el presupuesto así que deben importarles.',
            'Alto Poder, Bajo Interés — tienen autoridad pero no están activamente involucrados.',
            'Bajo Poder, Alto Interés — claramente están interesados ya que tienen presupuesto.',
            'Bajo Poder, Bajo Interés — si no asisten a reuniones, son irrelevantes.'
          ]
        },
        correctIndex: 1,
        explanation: {
          en: 'Budget authority = high power, regardless of attendance. But their absence signals low interest in the day-to-day. Strategy: Keep Satisfied with concise executive summaries at milestones. Don\'t bore them with details — but never surprise them with big changes.',
          es: 'Autoridad presupuestaria = alto poder, independientemente de la asistencia. Pero su ausencia señala bajo interés en el día a día. Estrategia: Mantener Satisfecho con resúmenes ejecutivos concisos en hitos. No los aburras con detalles — pero nunca los sorprendas con grandes cambios.'
        }
      },
      {
        question: {
          en: 'Your PM tells you "just focus on the design, I\'ll handle the stakeholders." What should you do?',
          es: 'Tu PM te dice "solo enfócate en el diseño, yo me encargo de los stakeholders." ¿Qué deberías hacer?'
        },
        options: {
          en: [
            'Great — that is the PM\'s job. Focus entirely on design work.',
            'Ignore them and start scheduling your own stakeholder meetings.',
            'Appreciate the support, but still create your own stakeholder map to understand the landscape and coordinate with the PM on engagement.',
            'Escalate to their manager — PMs should not gatekeep stakeholder access.'
          ],
          es: [
            'Genial — ese es el trabajo del PM. Enfócate completamente en el trabajo de diseño.',
            'Ignóralos y comienza a programar tus propias reuniones con stakeholders.',
            'Aprecia el apoyo, pero aún así crea tu propio mapa de stakeholders para entender el panorama y coordina con el PM sobre el engagement.',
            'Escala a su gerente — los PMs no deberían bloquear el acceso a stakeholders.'
          ]
        },
        correctIndex: 2,
        explanation: {
          en: 'While PMs often lead stakeholder management, designers need to understand the political landscape to make informed decisions. You don\'t need to manage every relationship, but you need to know who matters and why. Create your map, share it with your PM, and align on who talks to whom.',
          es: 'Aunque los PMs frecuentemente lideran la gestión de stakeholders, los diseñadores necesitan entender el panorama político para tomar decisiones informadas. No necesitas gestionar cada relación, pero necesitas saber quién importa y por qué. Crea tu mapa, compártelo con tu PM, y alinéense sobre quién habla con quién.'
        }
      },
      {
        question: {
          en: 'What is the "HiPPO effect" in product teams?',
          es: '¿Qué es el "efecto HiPPO" en equipos de producto?'
        },
        options: {
          en: [
            'A bias toward hiring people from the same background.',
            'The tendency for the Highest Paid Person\'s Opinion to override data and user research.',
            'A framework for prioritizing product features by revenue impact.',
            'A pattern where teams focus too much on competitor analysis.'
          ],
          es: [
            'Un sesgo hacia contratar personas del mismo background.',
            'La tendencia a que la Opinión de la Persona Mejor Pagada anule datos e investigación de usuario.',
            'Un framework para priorizar features de producto por impacto en ingresos.',
            'Un patrón donde los equipos se enfocan demasiado en análisis competitivo.'
          ]
        },
        correctIndex: 1,
        explanation: {
          en: 'HiPPO (Highest Paid Person\'s Opinion) is a dangerous anti-pattern where seniority trumps evidence. Counter it by: (1) presenting user research data before opinions are shared, (2) framing decisions as testable hypotheses, and (3) building a culture where "let\'s test it" is the default response to disagreements.',
          es: 'HiPPO (Opinión de la Persona Mejor Pagada) es un anti-patrón peligroso donde la antigüedad triunfa sobre la evidencia. Contrarresta con: (1) presentar datos de investigación de usuario antes de que se compartan opiniones, (2) enmarcar decisiones como hipótesis testeables, y (3) construir una cultura donde "vamos a probarlo" es la respuesta predeterminada a desacuerdos.'
        }
      }
    ],
    realExample: {
      title: {
        en: 'Spotify Squads: How Stakeholder Mapping Scales in Agile Organizations',
        es: 'Squads de Spotify: Cómo el Mapeo de Stakeholders Escala en Organizaciones Ágiles'
      },
      description: {
        en: 'Spotify\'s famous squad model is essentially a stakeholder management framework at scale. Each squad (cross-functional team of 6-12) has a clear set of stakeholders: the Tribe Lead (high power, high interest), Chapter Leads (high influence, medium power), other squads with dependencies (medium power, variable interest), and the Guild community (low power, high interest for knowledge sharing). When Spotify redesigned their playlist experience, the squad mapped 23 stakeholders across 4 tribes. By identifying that the ML recommendation team (initially categorized as "Monitor") actually held critical data pipeline dependencies, they elevated them to "Manage Closely" — preventing a 6-week delay that had plagued the previous feature release. The key lesson: in matrixed organizations, technical dependencies create hidden stakeholder relationships that traditional org charts don\'t reveal.',
        es: 'El famoso modelo de squads de Spotify es esencialmente un framework de gestión de stakeholders a escala. Cada squad (equipo cross-funcional de 6-12) tiene un conjunto claro de stakeholders: el Tribe Lead (alto poder, alto interés), Chapter Leads (alta influencia, poder medio), otros squads con dependencias (poder medio, interés variable), y la comunidad de Guild (bajo poder, alto interés para compartir conocimiento). Cuando Spotify rediseñó su experiencia de playlists, el squad mapeó 23 stakeholders a través de 4 tribes. Al identificar que el equipo de recomendaciones ML (inicialmente categorizado como "Monitorear") tenía dependencias críticas de pipeline de datos, los elevaron a "Gestionar de Cerca" — previniendo un retraso de 6 semanas que había afectado al release anterior. La lección clave: en organizaciones matriciales, las dependencias técnicas crean relaciones de stakeholders ocultas que los organigramas tradicionales no revelan.'
      }
    }
  }
};
