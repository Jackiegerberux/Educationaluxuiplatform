import type { Topic } from './types';

export const businessGoalsKpisLesson: Topic = {
  id: 'business-goals-kpis',
  title: { en: 'Business Goals & KPIs', es: 'Objetivos de Negocio y KPIs' },
  description: {
    en: 'Aligning design decisions with measurable business outcomes.',
    es: 'Alineando decisiones de diseño con resultados de negocio medibles.'
  },
  status: 'beginner',
  timeEstimate: '1h 30m',
  tag: 'Strategy',
  reference: {
    en: 'Lean Analytics — Alistair Croll & Ben Yoskovitz · Measure What Matters — John Doerr',
    es: 'Lean Analytics — Alistair Croll & Ben Yoskovitz · Measure What Matters — John Doerr'
  },
  referenceLink: 'https://www.nngroup.com/articles/ux-goals-analytics/',
  content: {
    definition: {
      en: 'Every design decision either moves a business forward or holds it back. Business Goals are the strategic outcomes an organization aims to achieve — revenue growth, customer retention, market expansion — while KPIs (Key Performance Indicators) are the quantifiable metrics that tell you whether you\'re actually making progress. For UX and Product Designers, understanding this connection is not optional: it\'s what separates a "pixel pusher" from a strategic design partner. When you can articulate how your design impacts conversion rate, reduces churn, or improves task efficiency, you earn a seat at the strategy table.',
      es: 'Cada decisión de diseño impulsa un negocio hacia adelante o lo detiene. Los Objetivos de Negocio son los resultados estratégicos que una organización busca lograr — crecimiento de ingresos, retención de clientes, expansión de mercado — mientras que los KPIs (Indicadores Clave de Rendimiento) son las métricas cuantificables que te dicen si realmente estás progresando. Para Diseñadores UX y de Producto, entender esta conexión no es opcional: es lo que separa a un "movedor de píxeles" de un socio de diseño estratégico. Cuando puedes articular cómo tu diseño impacta la tasa de conversión, reduce la deserción o mejora la eficiencia de tareas, ganas un lugar en la mesa de estrategia.'
    },
    why: {
      en: 'Designers who understand business goals make fundamentally better design decisions. Without this knowledge, you risk building beautiful interfaces that nobody uses, or optimizing flows that don\'t matter to the business. Here\'s the reality: stakeholders don\'t fund "better user experiences" — they fund outcomes. They care about reducing support costs by 30%, increasing trial-to-paid conversion by 15%, or cutting onboarding time in half. When you speak this language, you can: (1) Justify design decisions with data instead of opinion, (2) Prioritize the right problems — the ones that matter to both users AND the business, (3) Measure whether your design actually worked, (4) Build credibility with PMs, engineers, and executives, (5) Move from "we should make this look better" to "this redesign will reduce drop-off by 20%, saving $2M annually."',
      es: 'Los diseñadores que entienden objetivos de negocio toman decisiones de diseño fundamentalmente mejores. Sin este conocimiento, corres el riesgo de construir interfaces hermosas que nadie usa, u optimizar flujos que no importan al negocio. Esta es la realidad: los stakeholders no financian "mejores experiencias de usuario" — financian resultados. Les importa reducir costos de soporte en 30%, aumentar la conversión de prueba a pago en 15%, o cortar el tiempo de onboarding a la mitad. Cuando hablas este lenguaje, puedes: (1) Justificar decisiones de diseño con datos en lugar de opinión, (2) Priorizar los problemas correctos — los que importan tanto a usuarios COMO al negocio, (3) Medir si tu diseño realmente funcionó, (4) Construir credibilidad con PMs, ingenieros y ejecutivos, (5) Pasar de "deberíamos hacer esto más bonito" a "este rediseño reducirá la deserción en 20%, ahorrando $2M anuales."'
    },
    keyPrinciples: {
      en: [
        'A KPI (Key Performance Indicator) is a quantifiable measure used to evaluate progress toward a specific business objective. Not all metrics are KPIs — only the ones directly tied to strategic goals.',
        'Revenue KPIs: Monthly Recurring Revenue (MRR), Average Revenue Per User (ARPU), Customer Lifetime Value (CLV), Cost Per Acquisition (CPA).',
        'Engagement KPIs: Daily/Monthly Active Users (DAU/MAU), Session Duration, Feature Adoption Rate, Pages per Session.',
        'Retention KPIs: Churn Rate, Retention Rate (Day 1/7/30), Net Revenue Retention, Customer Loyalty Index.',
        'Efficiency KPIs: Task Success Rate, Time on Task, Error Rate, Support Ticket Volume, Cost per Transaction.',
        'UX-specific KPIs: System Usability Scale (SUS), Net Promoter Score (NPS), Customer Satisfaction Score (CSAT), Task Completion Rate, Drop-off Rate per Step.',
        'The "North Star Metric" is the single most important metric that captures the core value your product delivers. Every team\'s work should connect back to it.',
        'Vanity metrics (page views, total downloads, registered users) feel good but don\'t drive decisions. Real metrics (activation rate, retention, revenue per user) show actual health.',
        'Always connect your design work to a measurable outcome: Business Goal → UX Problem → Design Hypothesis → KPI to track.'
      ],
      es: [
        'Un KPI (Indicador Clave de Rendimiento) es una medida cuantificable usada para evaluar el progreso hacia un objetivo de negocio específico. No todas las métricas son KPIs — solo las directamente vinculadas a objetivos estratégicos.',
        'KPIs de Ingresos: Ingreso Recurrente Mensual (MRR), Ingreso Promedio Por Usuario (ARPU), Valor de Vida del Cliente (CLV), Costo Por Adquisición (CPA).',
        'KPIs de Engagement: Usuarios Activos Diarios/Mensuales (DAU/MAU), Duración de Sesión, Tasa de Adopción de Features, Páginas por Sesión.',
        'KPIs de Retención: Tasa de Deserción, Tasa de Retención (Día 1/7/30), Retención Neta de Ingresos, Índice de Lealtad del Cliente.',
        'KPIs de Eficiencia: Tasa de Éxito de Tareas, Tiempo en Tarea, Tasa de Error, Volumen de Tickets de Soporte, Costo por Transacción.',
        'KPIs específicos de UX: System Usability Scale (SUS), Net Promoter Score (NPS), Customer Satisfaction Score (CSAT), Tasa de Completación de Tareas, Tasa de Abandono por Paso.',
        'La "Métrica North Star" es la métrica más importante que captura el valor central que tu producto entrega. El trabajo de cada equipo debería conectar de vuelta a ella.',
        'Las métricas vanidad (vistas de página, descargas totales, usuarios registrados) se sienten bien pero no impulsan decisiones. Las métricas reales (tasa de activación, retención, ingreso por usuario) muestran salud real.',
        'Siempre conecta tu trabajo de diseño a un resultado medible: Objetivo de Negocio → Problema UX → Hipótesis de Diseño → KPI a rastrear.'
      ]
    },
    howToApply: {
      steps: [
        {
          name: { en: '1. Identify the Business Goal', es: '1. Identificar el Objetivo de Negocio' },
          description: {
            en: 'Meet with stakeholders (PM, CEO, Head of Product) and ask: "What is the #1 outcome you need this quarter?" Document it clearly. Example: "Increase trial-to-paid conversion from 12% to 20% by Q3." Avoid vague goals like "improve the product." If the goal isn\'t measurable, push back until it is.',
            es: 'Reúnete con stakeholders (PM, CEO, Head of Product) y pregunta: "¿Cuál es el resultado #1 que necesitas este trimestre?" Documéntalo claramente. Ejemplo: "Aumentar conversión de prueba a pago de 12% a 20% para Q3." Evita objetivos vagos como "mejorar el producto." Si el objetivo no es medible, insiste hasta que lo sea.'
          }
        },
        {
          name: { en: '2. Translate to a UX Problem', es: '2. Traducir a un Problema UX' },
          description: {
            en: 'Ask: "What user behavior is preventing us from reaching this goal?" Dig into analytics and user research. Example: "60% of trial users never complete onboarding — they drop off at step 3 (payment info). Users report confusion about what they get after the trial." The UX problem is specific, observable, and connected to the business goal.',
            es: 'Pregunta: "¿Qué comportamiento del usuario nos impide alcanzar este objetivo?" Investiga en analítica e investigación de usuario. Ejemplo: "60% de usuarios de prueba nunca completan el onboarding — abandonan en el paso 3 (información de pago). Los usuarios reportan confusión sobre qué obtienen después de la prueba." El problema UX es específico, observable y conectado al objetivo de negocio.'
          }
        },
        {
          name: { en: '3. Form a Design Hypothesis', es: '3. Formar una Hipótesis de Diseño' },
          description: {
            en: 'Structure it as: "We believe that [design change] for [user segment] will result in [measurable outcome] because [rationale]." Example: "We believe that adding a value comparison screen before the payment step for trial users will increase trial-to-paid conversion by 8% because users will understand what they lose if they don\'t upgrade." This makes your design decision testable.',
            es: 'Estructúrala como: "Creemos que [cambio de diseño] para [segmento de usuarios] resultará en [resultado medible] porque [fundamento]." Ejemplo: "Creemos que agregar una pantalla de comparación de valor antes del paso de pago para usuarios de prueba aumentará la conversión de prueba a pago en 8% porque los usuarios entenderán qué pierden si no actualizan." Esto hace tu decisión de diseño testeable.'
          }
        },
        {
          name: { en: '4. Define UX KPIs to Track', es: '4. Definir KPIs de UX a Rastrear' },
          description: {
            en: 'Select 2-4 KPIs that will tell you if your hypothesis is correct. Primary: Trial-to-paid conversion rate (target: 12% → 20%). Secondary: Drop-off rate at step 3 (target: 60% → 30%). Supporting: Time spent on value comparison screen, click-through rate on "Upgrade" CTA. Set baselines BEFORE designing, and agree on success criteria with stakeholders.',
            es: 'Selecciona 2-4 KPIs que te dirán si tu hipótesis es correcta. Primario: Tasa de conversión de prueba a pago (objetivo: 12% → 20%). Secundario: Tasa de abandono en paso 3 (objetivo: 60% → 30%). De soporte: Tiempo en pantalla de comparación de valor, tasa de clics en CTA "Actualizar". Establece líneas base ANTES de diseñar, y acuerda criterios de éxito con stakeholders.'
          }
        },
        {
          name: { en: '5. Design, Ship, Measure', es: '5. Diseñar, Lanzar, Medir' },
          description: {
            en: 'Design the solution. Prototype and test with users to de-risk. Ship as an A/B test if possible. Measure against your KPIs after 2-4 weeks. Report results: "Our value comparison screen increased trial-to-paid conversion from 12% to 18.5%. Drop-off at step 3 decreased from 60% to 35%. We recommend iterating on the CTA copy to close the remaining gap to 20%." This is how designers become strategic partners.',
            es: 'Diseña la solución. Prototipa y testea con usuarios para reducir riesgo. Lanza como prueba A/B si es posible. Mide contra tus KPIs después de 2-4 semanas. Reporta resultados: "Nuestra pantalla de comparación de valor aumentó la conversión de prueba a pago de 12% a 18.5%. El abandono en el paso 3 disminuyó de 60% a 35%. Recomendamos iterar en el copy del CTA para cerrar la brecha restante al 20%." Así es como los diseñadores se convierten en socios estratégicos.'
          }
        }
      ]
    },
    commonMistakes: {
      en: [
        'Designing without knowing the business goal: if you can\'t name the business outcome your work supports, you\'re designing blind.',
        'Tracking vanity metrics as success: "We got 10,000 page views!" means nothing if conversion stayed flat. Focus on actionable metrics.',
        'Setting too many KPIs: 2-4 is ideal. If everything is a priority, nothing is. Pick the metrics that truly indicate success.',
        'Not establishing baselines: you can\'t prove improvement if you didn\'t measure the "before." Always capture current state before redesigning.',
        'Confusing correlation with causation: just because two metrics moved together doesn\'t mean one caused the other. Use A/B tests for causal claims.',
        'Ignoring lagging vs leading indicators: revenue is a lagging indicator (result). Feature adoption is a leading indicator (predictor). Track both.',
        'Treating KPIs as permanent: as the product and market evolve, your KPIs should too. Revisit quarterly.',
        'Forgetting qualitative data: numbers tell you what happened; user interviews tell you why. Pair quantitative KPIs with qualitative research.'
      ],
      es: [
        'Diseñar sin conocer el objetivo de negocio: si no puedes nombrar el resultado de negocio que tu trabajo apoya, estás diseñando a ciegas.',
        'Rastrear métricas vanidad como éxito: "¡Obtuvimos 10,000 vistas de página!" no significa nada si la conversión se mantuvo plana. Enfócate en métricas accionables.',
        'Establecer demasiados KPIs: 2-4 es ideal. Si todo es prioridad, nada lo es. Elige las métricas que verdaderamente indican éxito.',
        'No establecer líneas base: no puedes probar mejora si no mediste el "antes." Siempre captura el estado actual antes de rediseñar.',
        'Confundir correlación con causalidad: que dos métricas se muevan juntas no significa que una causó la otra. Usa pruebas A/B para afirmaciones causales.',
        'Ignorar indicadores rezagados vs adelantados: ingreso es un indicador rezagado (resultado). Adopción de features es un indicador adelantado (predictor). Rastrea ambos.',
        'Tratar KPIs como permanentes: a medida que el producto y mercado evolucionan, tus KPIs también deberían. Revísalos trimestralmente.',
        'Olvidar datos cualitativos: los números te dicen qué pasó; las entrevistas de usuario te dicen por qué. Combina KPIs cuantitativos con investigación cualitativa.'
      ]
    },
    deliverables: {
      description: {
        en: 'Key artifacts that connect your design work to business outcomes.',
        es: 'Artefactos clave que conectan tu trabajo de diseño con resultados de negocio.'
      },
      items: {
        en: [
          'KPI Dashboard Brief: document listing 2-4 KPIs with baselines, targets, and measurement timeline',
          'Goals-to-Metrics Mapping: one-page artifact connecting Business Goal → UX Problem → Hypothesis → KPIs',
          'Design Impact Report: post-launch document showing measured results vs targets with screenshots and data',
          'Stakeholder Alignment Deck: 3-5 slides showing how design work maps to quarterly business objectives',
          'North Star Definition: team-agreed single metric that represents core product value delivery'
        ],
        es: [
          'Brief de Dashboard de KPIs: documento listando 2-4 KPIs con líneas base, objetivos y cronograma de medición',
          'Mapeo de Objetivos a Métricas: artefacto de una página conectando Objetivo de Negocio → Problema UX → Hipótesis → KPIs',
          'Reporte de Impacto de Diseño: documento post-lanzamiento mostrando resultados medidos vs objetivos con capturas y datos',
          'Deck de Alineación con Stakeholders: 3-5 slides mostrando cómo el trabajo de diseño mapea a objetivos de negocio trimestrales',
          'Definición de North Star: métrica única acordada por el equipo que representa la entrega de valor central del producto'
        ]
      }
    },
    practicalTools: {
      design: {
        en: ['Figma (design deliverables)', 'FigJam (goals mapping workshops)', 'Miro (stakeholder alignment)', 'Notion (KPI documentation)'],
        es: ['Figma (entregables de diseño)', 'FigJam (talleres de mapeo de objetivos)', 'Miro (alineación de stakeholders)', 'Notion (documentación de KPIs)']
      },
      analytics: {
        en: ['Google Analytics 4 (behavior tracking)', 'Mixpanel (conversion funnels)', 'Amplitude (product analytics)', 'Hotjar (heatmaps + recordings)'],
        es: ['Google Analytics 4 (seguimiento de comportamiento)', 'Mixpanel (embudos de conversión)', 'Amplitude (analítica de producto)', 'Hotjar (mapas de calor + grabaciones)']
      },
      research: {
        en: ['Maze (usability metrics)', 'Lookback (session recordings)', 'Typeform (NPS/CSAT surveys)', 'Dovetail (research synthesis)'],
        es: ['Maze (métricas de usabilidad)', 'Lookback (grabaciones de sesiones)', 'Typeform (encuestas NPS/CSAT)', 'Dovetail (síntesis de investigación)']
      },
      management: {
        en: ['Jira (OKR tracking)', 'Linear (design sprint goals)', 'Airtable (KPI dashboards)', 'Google Sheets (metric tracking)'],
        es: ['Jira (seguimiento de OKRs)', 'Linear (objetivos de sprint de diseño)', 'Airtable (dashboards de KPIs)', 'Google Sheets (seguimiento de métricas)']
      }
    },
    aiInPractice: {
      description: {
        en: 'AI can help you identify relevant KPIs, draft hypotheses, and structure goals-to-metrics frameworks faster.',
        es: 'La IA puede ayudarte a identificar KPIs relevantes, redactar hipótesis y estructurar frameworks de objetivos a métricas más rápido.'
      },
      prompts: [
        {
          tool: 'ChatGPT',
          context: { en: 'Generate KPI framework for a product goal', es: 'Generar framework de KPIs para un objetivo de producto' },
          prompt: {
            en: 'I\'m a UX Designer working on a B2B SaaS project management tool. The business goal is: "Increase monthly active users from 15,000 to 25,000 by Q4." Help me create a Goals-to-Metrics mapping: (1) Break this into 3 UX problems that might be causing low activation, (2) For each problem, write a design hypothesis, (3) Suggest 2-3 KPIs to track for each hypothesis. Format as a structured table.',
            es: 'Soy un Diseñador UX trabajando en una herramienta de gestión de proyectos B2B SaaS. El objetivo de negocio es: "Aumentar usuarios activos mensuales de 15,000 a 25,000 para Q4." Ayúdame a crear un mapeo de Objetivos a Métricas: (1) Desglosa esto en 3 problemas UX que podrían estar causando baja activación, (2) Para cada problema, escribe una hipótesis de diseño, (3) Sugiere 2-3 KPIs a rastrear para cada hipótesis. Formatea como tabla estructurada.'
          }
        },
        {
          tool: 'Claude',
          context: { en: 'Identify North Star metric', es: 'Identificar métrica North Star' },
          prompt: {
            en: 'Help me define a North Star Metric for a food delivery app (like UberEats/DoorDash). The company\'s mission is "connect people with the food they love." Consider: (1) What single metric best represents value delivered to customers, restaurants, AND drivers? (2) What leading indicators (input metrics) drive this North Star? (3) Give me 3 candidate North Stars with pros/cons of each. (4) Recommend one and explain why.',
            es: 'Ayúdame a definir una Métrica North Star para una app de delivery de comida (como UberEats/DoorDash). La misión de la empresa es "conectar personas con la comida que aman." Considera: (1) ¿Qué métrica única representa mejor el valor entregado a clientes, restaurantes Y repartidores? (2) ¿Qué indicadores adelantados (métricas input) impulsan este North Star? (3) Dame 3 candidatos de North Star con pros/contras de cada uno. (4) Recomienda uno y explica por qué.'
          }
        },
        {
          tool: 'ChatGPT',
          context: { en: 'Write a Design Impact Report', es: 'Escribir un Reporte de Impacto de Diseño' },
          prompt: {
            en: 'Help me write a Design Impact Report for stakeholders. Context: I redesigned the checkout flow for an e-commerce app. Before: 45% cart abandonment rate, average 4.2 minutes to complete checkout. After (2 weeks of A/B test): 28% cart abandonment, 2.1 minutes average checkout time, 12% revenue increase. Structure the report with: Executive Summary, Problem Statement, Design Changes (3 key changes), Results (with before/after comparison), Next Steps. Keep it concise and executive-friendly.',
            es: 'Ayúdame a escribir un Reporte de Impacto de Diseño para stakeholders. Contexto: Rediseñé el flujo de checkout para una app de e-commerce. Antes: 45% tasa de abandono de carrito, promedio 4.2 minutos para completar checkout. Después (2 semanas de prueba A/B): 28% abandono de carrito, 2.1 minutos promedio de checkout, 12% aumento de ingresos. Estructura el reporte con: Resumen Ejecutivo, Declaración del Problema, Cambios de Diseño (3 cambios clave), Resultados (con comparación antes/después), Próximos Pasos. Mantenlo conciso y amigable para ejecutivos.'
          }
        }
      ]
    },
    howToValidate: {
      what: {
        en: 'Validate that your design decisions are measurably improving the business KPIs you identified, not just making the interface "look better."',
        es: 'Valida que tus decisiones de diseño están mejorando mediblemente los KPIs de negocio que identificaste, no solo haciendo que la interfaz "se vea mejor."'
      },
      methods: {
        en: [
          'A/B Testing: split traffic between old and new designs, measure conversion difference with statistical significance (p < 0.05).',
          'Before/After Analysis: compare KPI baselines (captured before redesign) with post-launch metrics after 2-4 weeks.',
          'Funnel Analysis: track drop-off at each step. If you redesigned step 3, did its drop-off decrease?',
          'Cohort Analysis: compare behavior of users who experienced the new design vs those who didn\'t.',
          'Qualitative Validation: pair metrics with 5-8 user interviews. "The data shows 20% fewer drop-offs. Do users say the flow is clearer?"'
        ],
        es: [
          'Pruebas A/B: divide tráfico entre diseño viejo y nuevo, mide diferencia de conversión con significancia estadística (p < 0.05).',
          'Análisis Antes/Después: compara líneas base de KPIs (capturadas antes del rediseño) con métricas post-lanzamiento después de 2-4 semanas.',
          'Análisis de Embudo: rastrea el abandono en cada paso. Si rediseñaste el paso 3, ¿disminuyó su abandono?',
          'Análisis de Cohorte: compara comportamiento de usuarios que experimentaron el nuevo diseño vs los que no.',
          'Validación Cualitativa: combina métricas con 5-8 entrevistas de usuario. "Los datos muestran 20% menos abandonos. ¿Los usuarios dicen que el flujo es más claro?"'
        ]
      },
      tools: {
        en: ['Google Analytics 4 (funnel tracking)', 'Optimizely / LaunchDarkly (A/B testing)', 'Amplitude (cohort analysis)', 'Mixpanel (retention curves)'],
        es: ['Google Analytics 4 (seguimiento de embudos)', 'Optimizely / LaunchDarkly (pruebas A/B)', 'Amplitude (análisis de cohorte)', 'Mixpanel (curvas de retención)']
      },
      evidenceExample: {
        en: '"After mapping the business goal (increase trial conversion from 12% to 20%) to the UX problem (60% drop-off at payment step), we hypothesized that a value comparison screen would reduce confusion. A/B test results after 3 weeks: conversion increased from 12% to 18.5% (+54%), step 3 drop-off decreased from 60% to 35%. Estimated annual revenue impact: $1.8M. Next iteration: optimize CTA copy to close the gap to 20%."',
        es: '"Después de mapear el objetivo de negocio (aumentar conversión de prueba de 12% a 20%) al problema UX (60% abandono en paso de pago), hipotetizamos que una pantalla de comparación de valor reduciría la confusión. Resultados de prueba A/B después de 3 semanas: conversión aumentó de 12% a 18.5% (+54%), abandono en paso 3 disminuyó de 60% a 35%. Impacto estimado de ingresos anuales: $1.8M. Siguiente iteración: optimizar copy del CTA para cerrar la brecha al 20%."'
      }
    },
    quiz: [
      {
        question: {
          en: 'Your PM says the goal is to "improve the user experience." What should you do?',
          es: 'Tu PM dice que el objetivo es "mejorar la experiencia del usuario." ¿Qué deberías hacer?'
        },
        options: {
          en: [
            'Great — start redesigning the UI immediately.',
            'Ask them to define a specific, measurable outcome tied to a business metric.',
            'Run a usability test to find problems.',
            'Create a mood board for a new visual direction.'
          ],
          es: [
            'Genial — empieza a rediseñar la UI inmediatamente.',
            'Pídeles que definan un resultado específico y medible vinculado a una métrica de negocio.',
            'Ejecuta una prueba de usabilidad para encontrar problemas.',
            'Crea un moodboard para una nueva dirección visual.'
          ]
        },
        correctIndex: 1,
        explanation: {
          en: '"Improve UX" is too vague to act on. Push for specificity: "Reduce onboarding drop-off from 45% to 25%" or "Increase NPS from 32 to 50." Without a measurable target, you can\'t prove your design worked.',
          es: '"Mejorar UX" es demasiado vago para actuar. Insiste en especificidad: "Reducir abandono de onboarding de 45% a 25%" o "Aumentar NPS de 32 a 50." Sin un objetivo medible, no puedes probar que tu diseño funcionó.'
        }
      },
      {
        question: {
          en: 'Which of these is a vanity metric?',
          es: '¿Cuál de estas es una métrica vanidad?'
        },
        options: {
          en: [
            'Trial-to-paid conversion rate',
            'Total number of app downloads',
            'Customer retention rate at day 30',
            'Task success rate in usability testing'
          ],
          es: [
            'Tasa de conversión de prueba a pago',
            'Número total de descargas de la app',
            'Tasa de retención de clientes al día 30',
            'Tasa de éxito de tareas en pruebas de usabilidad'
          ]
        },
        correctIndex: 1,
        explanation: {
          en: 'Total downloads only tells you how many people installed the app — not whether they stayed, paid, or found value. It looks impressive in a presentation but doesn\'t indicate product health. Conversion rate, retention, and task success are actionable metrics tied to real outcomes.',
          es: 'Las descargas totales solo te dicen cuántas personas instalaron la app — no si se quedaron, pagaron o encontraron valor. Se ve impresionante en una presentación pero no indica salud del producto. Tasa de conversión, retención y éxito de tareas son métricas accionables vinculadas a resultados reales.'
        }
      },
      {
        question: {
          en: 'What is a "North Star Metric"?',
          es: '¿Qué es una "Métrica North Star"?'
        },
        options: {
          en: [
            'The most impressive metric to show investors.',
            'The revenue number the company targets each quarter.',
            'The single metric that best captures the core value your product delivers to customers.',
            'A metric that only the design team tracks internally.'
          ],
          es: [
            'La métrica más impresionante para mostrar a inversores.',
            'El número de ingresos que la empresa apunta cada trimestre.',
            'La métrica única que mejor captura el valor central que tu producto entrega a clientes.',
            'Una métrica que solo el equipo de diseño rastrea internamente.'
          ]
        },
        correctIndex: 2,
        explanation: {
          en: 'The North Star Metric represents the core value exchange between your product and users. For Spotify, it\'s "time spent listening." For Airbnb, "nights booked." It aligns every team around what matters most and serves as the ultimate measure of product-market fit.',
          es: 'La Métrica North Star representa el intercambio de valor central entre tu producto y usuarios. Para Spotify, es "tiempo escuchando." Para Airbnb, "noches reservadas." Alinea a cada equipo alrededor de lo que más importa y sirve como la medida definitiva de product-market fit.'
        }
      }
    ],
    realExample: {
      title: {
        en: 'Spotify: How Design Decisions Drive Business KPIs',
        es: 'Spotify: Cómo las Decisiones de Diseño Impulsan KPIs de Negocio'
      },
      description: {
        en: 'Spotify\'s North Star Metric is "Time Spent Listening." Every design decision connects to it. When they redesigned the Home screen to show personalized playlists (Discover Weekly, Daily Mix), it wasn\'t because "it looked better" — it was because analytics showed users who discovered new music in the first week had 40% higher 3-month retention. The design hypothesis: "If we surface personalized recommendations on the Home screen, users will listen to more diverse content, increasing time spent listening and reducing churn." Result: Discover Weekly alone drives 30% of all streams and significantly reduces churn among free-tier users. This is the power of connecting design to business KPIs.',
        es: 'La Métrica North Star de Spotify es "Tiempo Escuchando." Cada decisión de diseño se conecta a ella. Cuando rediseñaron la pantalla Home para mostrar playlists personalizadas (Discover Weekly, Daily Mix), no fue porque "se veía mejor" — fue porque la analítica mostró que usuarios que descubrían nueva música en la primera semana tenían 40% mayor retención a 3 meses. La hipótesis de diseño: "Si mostramos recomendaciones personalizadas en la pantalla Home, los usuarios escucharán contenido más diverso, aumentando el tiempo escuchando y reduciendo deserción." Resultado: Discover Weekly solo impulsa 30% de todos los streams y reduce significativamente la deserción entre usuarios del tier gratuito. Este es el poder de conectar diseño con KPIs de negocio.'
      },
      company: 'Spotify'
    }
  }
};
