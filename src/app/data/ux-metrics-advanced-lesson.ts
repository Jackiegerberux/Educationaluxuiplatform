import { Topic } from './types';

export const uxMetricsAdvancedLesson: Topic = {
  id: 'ux-metrics-advanced',
  title: { en: 'Advanced UX Metrics', es: 'Métricas UX Avanzadas' },
  description: {
    en: 'Strategic product-level metrics that connect UX decisions to business outcomes. Go beyond basic analytics to define North Star Metrics, model activation-to-retention funnels, run experiments, and iterate roadmaps based on behavioral data — not vanity metrics.',
    es: 'Métricas estratégicas a nivel de producto que conectan decisiones UX con resultados de negocio. Ve más allá de analítica básica para definir Métricas North Star, modelar funnels de activación-a-retención, ejecutar experimentos e iterar roadmaps basándote en datos comportamentales — no métricas de vanidad.'
  },
  status: 'advanced',
  timeEstimate: '2h 15m',
  reference: { en: 'Lean Analytics — Alistair Croll & Benjamin Yoskovitz', es: 'Lean Analytics — Alistair Croll & Benjamin Yoskovitz' },
  referenceLink: 'https://leananalyticsbook.com/',
  content: {
    // ─── 1. OVERVIEW ────────────────────────────────────────────
    definition: {
      en: 'Advanced UX metrics operate at the strategic product level — they measure whether the product is delivering value to users AND the business simultaneously. Unlike basic KPI tracking (page views, bounce rate, task completion), advanced metrics answer questions like: "Are we solving the right problem?", "Is the activation funnel efficient?", "Are users retained because of a habit loop or inertia?", and "Is this experiment statistically significant enough to ship?"\n\nThe discipline connects the entire product lifecycle in a continuous loop: Discovery (what to build) → Roadmap (what to prioritize) → Sprint (what to validate) → Release (what to measure) → Metrics (what we learned) → Iteration (what to change). Each stage feeds back into the next — metrics are not an afterthought, they are the engine.\n\nA North Star Metric is the single metric that captures the core value your product delivers to users — Spotify uses "Time Spent Listening," Airbnb uses "Nights Booked," Slack uses "Messages Sent in Teams." It is not a revenue metric — it is a proxy for user value that correlates with revenue.\n\nLeading indicators predict future outcomes (activation rate, Day 1 retention), while lagging indicators confirm past performance (monthly revenue, churn rate). Product teams that only track lagging indicators are always reacting — never anticipating.',
      es: 'Las métricas UX avanzadas operan a nivel estratégico de producto — miden si el producto está entregando valor a los usuarios Y al negocio simultáneamente. A diferencia del tracking básico de KPIs (vistas de página, tasa de rebote, completación de tareas), las métricas avanzadas responden preguntas como: "¿Estamos resolviendo el problema correcto?", "¿Es eficiente el funnel de activación?", "¿Los usuarios se retienen por un loop de hábito o por inercia?", y "¿Este experimento es estadísticamente significativo para lanzar?"\n\nLa disciplina conecta todo el ciclo de vida del producto en un loop continuo: Discovery (qué construir) → Roadmap (qué priorizar) → Sprint (qué validar) → Release (qué medir) → Métricas (qué aprendimos) → Iteración (qué cambiar). Cada etapa alimenta la siguiente — las métricas no son un pensamiento tardío, son el motor.\n\nUna Métrica North Star es la única métrica que captura el valor central que tu producto entrega a los usuarios — Spotify usa "Tiempo Escuchando," Airbnb usa "Noches Reservadas," Slack usa "Mensajes Enviados en Equipos." No es una métrica de ingresos — es un proxy del valor del usuario que correlaciona con ingresos.\n\nIndicadores leading predicen resultados futuros (tasa de activación, retención Día 1), mientras indicadores lagging confirman desempeño pasado (ingreso mensual, tasa de churn). Equipos de producto que solo rastrean indicadores lagging siempre están reaccionando — nunca anticipando.'
    },

    // ─── 2. WHY IT MATTERS ──────────────────────────────────────
    why: {
      en: 'Without advanced metrics, product teams fall into the "feature factory" trap — shipping features without knowing whether they solve problems. You launch a redesigned onboarding flow and celebrate because it shipped on time, but nobody checks whether Day 7 retention improved.\n\nAdvanced UX metrics enable data-informed design: you validate hypotheses, kill underperforming experiments early, and double down on what works. They align design with revenue and retention by creating a direct line from "user behavior" to "business outcome."\n\nWhen a designer can say "Our redesign increased activation by 12%, which our model projects will drive $340K in annual recurring revenue," they earn a seat at the strategy table. Metrics also prevent premature scaling — you do not invest $500K in engineering a feature that only 3% of users discovered.\n\nThe loop is: Research → Hypothesis → Experiment → Measure → Decide → Iterate. Without metrics, you are iterating blind.',
      es: 'Sin métricas avanzadas, los equipos de producto caen en la trampa de "fábrica de features" — lanzando funcionalidades sin saber si resuelven problemas. Lanzas un flujo de onboarding rediseñado y celebras porque se entregó a tiempo, pero nadie verifica si la retención Día 7 mejoró.\n\nLas métricas UX avanzadas permiten diseño informado por datos: validas hipótesis, matas experimentos con bajo rendimiento temprano y duplicas lo que funciona. Alinean diseño con ingresos y retención creando una línea directa de "comportamiento del usuario" a "resultado de negocio."\n\nCuando un diseñador puede decir "Nuestro rediseño aumentó la activación en 12%, lo que nuestro modelo proyecta impulsará $340K en ingreso recurrente anual," gana un asiento en la mesa de estrategia. Las métricas también previenen escalado prematuro — no inviertes $500K en ingeniería de un feature que solo 3% de los usuarios descubrió.\n\nEl loop es: Investigación → Hipótesis → Experimento → Medir → Decidir → Iterar. Sin métricas, estás iterando a ciegas.'
    },

    // ─── 3. KEY PRINCIPLES ──────────────────────────────────────
    keyPrinciples: {
      en: [
        'North Star Metric: The single metric that best captures the core value your product delivers. It must be measurable, influenceable by the team, and correlated with long-term business success. Spotify\'s is "Time Spent Listening" — not "Number of Subscribers." If your North Star grows, the business grows.',
        'Leading vs Lagging indicators: Leading indicators (activation rate, feature adoption Day 1) predict future outcomes. Lagging indicators (revenue, churn) confirm past ones. Product teams should optimize leading indicators because they are actionable NOW. By the time a lagging indicator moves, it is too late to react.',
        'Activation vs Retention: Activation = the moment a new user first experiences the core value (Slack: sends first message in a team channel). Retention = the user returns to experience that value repeatedly (Slack: active 3+ days per week). Improving activation lifts retention downstream. Most products leak at activation, not acquisition.',
        'Behavioral metrics over vanity metrics: Page views, downloads, and registered accounts are vanity metrics — they look good on a slide but do not predict business health. Behavioral metrics (time to value, feature adoption rate, repeat usage frequency, session depth) reveal whether users are actually getting value. Track what users DO, not what they accumulate.',
        'Continuous measurement: Metrics are not a one-time report. Build dashboards that update in real time, set alerts for anomalies (e.g., activation drops 15% week-over-week), and review metrics in every sprint retrospective. The team that measures continuously iterates faster than the team that measures quarterly.'
      ],
      es: [
        'Métrica North Star: La única métrica que mejor captura el valor central que tu producto entrega. Debe ser medible, influenciable por el equipo, y correlacionada con éxito de negocio a largo plazo. La de Spotify es "Tiempo Escuchando" — no "Número de Suscriptores." Si tu North Star crece, el negocio crece.',
        'Indicadores Leading vs Lagging: Indicadores leading (tasa de activación, adopción de feature Día 1) predicen resultados futuros. Indicadores lagging (ingresos, churn) confirman los pasados. Equipos de producto deben optimizar indicadores leading porque son accionables AHORA. Para cuando un indicador lagging se mueve, es tarde para reaccionar.',
        'Activación vs Retención: Activación = el momento en que un usuario nuevo experimenta el valor central por primera vez (Slack: envía primer mensaje en canal de equipo). Retención = el usuario regresa a experimentar ese valor repetidamente (Slack: activo 3+ días por semana). Mejorar activación eleva retención downstream. La mayoría de productos pierden en activación, no en adquisición.',
        'Métricas comportamentales sobre métricas de vanidad: Vistas de página, descargas y cuentas registradas son métricas de vanidad — se ven bien en un slide pero no predicen salud del negocio. Métricas comportamentales (tiempo a valor, tasa de adopción de feature, frecuencia de uso repetido, profundidad de sesión) revelan si los usuarios realmente obtienen valor. Rastrea lo que los usuarios HACEN, no lo que acumulan.',
        'Medición continua: Las métricas no son un reporte de una sola vez. Construye dashboards que se actualicen en tiempo real, configura alertas para anomalías (ej., activación cae 15% semana a semana), y revisa métricas en cada retrospectiva de sprint. El equipo que mide continuamente itera más rápido que el que mide trimestralmente.'
      ]
    },

    // ─── 4. HOW TO APPLY ────────────────────────────────────────
    howToApply: {
      steps: [
        {
          name: { en: 'Step 1: Define your North Star Metric', es: 'Paso 1: Define tu Métrica North Star' },
          description: {
            en: 'Identify the single metric that captures core user value. Ask: "If this number grows, does the business inevitably grow?" For a project management tool, it might be "Weekly Active Projects." For an e-commerce platform, "Purchases per Active User." The North Star is NOT revenue — it is the user behavior that drives revenue. Workshop this with product, engineering, and leadership until everyone agrees. Connect to: business-goals-kpis lesson.',
            es: 'Identifica la única métrica que captura el valor central del usuario. Pregunta: "Si este número crece, ¿el negocio inevitablemente crece?" Para una herramienta de gestión de proyectos, podría ser "Proyectos Activos Semanales." Para una plataforma e-commerce, "Compras por Usuario Activo." La North Star NO es ingresos — es el comportamiento del usuario que impulsa ingresos. Trabaja esto en taller con producto, ingeniería y liderazgo hasta que todos estén de acuerdo. Conecta con: lección business-goals-kpis.'
          }
        },
        {
          name: { en: 'Step 2: Map user journey metrics', es: 'Paso 2: Mapea métricas del journey del usuario' },
          description: {
            en: 'For each stage of the user journey (Awareness → Acquisition → Activation → Engagement → Retention → Revenue → Referral), identify the key metric. Example: Awareness = organic traffic. Acquisition = sign-up rate. Activation = completed first project. Engagement = sessions per week. Retention = 30-day return rate. Revenue = conversion to paid. Referral = invite sent. This creates a "metrics map" that shows where your funnel is healthy and where it leaks. Connect to: customer-journey-map lesson.',
            es: 'Para cada etapa del journey del usuario (Awareness → Adquisición → Activación → Engagement → Retención → Ingresos → Referidos), identifica la métrica clave. Ejemplo: Awareness = tráfico orgánico. Adquisición = tasa de registro. Activación = completó primer proyecto. Engagement = sesiones por semana. Retención = tasa de retorno 30 días. Ingresos = conversión a pago. Referidos = invitación enviada. Esto crea un "mapa de métricas" que muestra dónde tu funnel está sano y dónde pierde. Conecta con: lección customer-journey-map.'
          }
        },
        {
          name: { en: 'Step 3: Model the funnel stages', es: 'Paso 3: Modela las etapas del funnel' },
          description: {
            en: 'Build a quantitative funnel model. Start with your total addressable users at the top, then track conversion at each stage. Example: 10,000 visitors → 2,000 sign-ups (20%) → 800 activated (40%) → 320 retained Day 30 (40%) → 96 paid (30%). This reveals your biggest leverage point. If activation is 40% but industry benchmark is 60%, that is your biggest friction stage. Improving activation by 20 percentage points doubles your retained users without spending more on acquisition.',
            es: 'Construye un modelo de funnel cuantitativo. Comienza con el total de usuarios direccionables arriba, luego rastrea conversión en cada etapa. Ejemplo: 10,000 visitantes → 2,000 registros (20%) → 800 activados (40%) → 320 retenidos Día 30 (40%) → 96 de pago (30%). Esto revela tu mayor punto de apalancamiento. Si activación es 40% pero benchmark de industria es 60%, esa es tu mayor etapa de fricción. Mejorar activación en 20 puntos porcentuales duplica tus usuarios retenidos sin gastar más en adquisición.'
          }
        },
        {
          name: { en: 'Step 4: Define the activation event', es: 'Paso 4: Define el evento de activación' },
          description: {
            en: 'The activation event is the specific user action that correlates most strongly with long-term retention. For Dropbox, it was "uploaded first file." For Facebook (historically), "added 7 friends in 10 days." Analyze your retained users: what did they ALL do in their first session that churned users did NOT do? That is your activation event. Track it religiously. Every onboarding optimization should aim to increase the percentage of users who reach this event. Connect to: product-roadmapping lesson.',
            es: 'El evento de activación es la acción específica del usuario que correlaciona más fuertemente con retención a largo plazo. Para Dropbox, fue "subió primer archivo." Para Facebook (históricamente), "agregó 7 amigos en 10 días." Analiza tus usuarios retenidos: ¿qué hicieron TODOS en su primera sesión que los usuarios que abandonaron NO hicieron? Ese es tu evento de activación. Rastréalo religiosamente. Cada optimización de onboarding debe apuntar a aumentar el porcentaje de usuarios que alcanzan este evento. Conecta con: lección product-roadmapping.'
          }
        },
        {
          name: { en: 'Step 5: Track retention cohorts', es: 'Paso 5: Rastrea cohortes de retención' },
          description: {
            en: 'Retention is measured in cohorts: "Of users who signed up in Week 1, what percentage returned in Week 2, 3, 4...?" Plot a retention curve. A healthy curve flattens (users who stay past Week 4 tend to stay long-term). A steep curve that never flattens means you have a leaky bucket — you are acquiring users faster than you can retain them. Segment cohorts by acquisition channel, feature usage, and activation timing to discover what predicts retention.',
            es: 'La retención se mide en cohortes: "De los usuarios que se registraron en Semana 1, ¿qué porcentaje regresó en Semana 2, 3, 4...?" Dibuja una curva de retención. Una curva saludable se aplana (usuarios que pasan Semana 4 tienden a quedarse a largo plazo). Una curva empinada que nunca se aplana significa que tienes un balde con fugas — estás adquiriendo usuarios más rápido de lo que puedes retenerlos. Segmenta cohortes por canal de adquisición, uso de features y timing de activación para descubrir qué predice retención.'
          }
        },
        {
          name: { en: 'Step 6: Run a controlled experiment', es: 'Paso 6: Ejecuta un experimento controlado' },
          description: {
            en: 'Design an experiment to test a hypothesis: "If we simplify step 3 of onboarding (removing 2 optional fields), activation rate will increase by 15%." Define: control group (current design), treatment group (simplified design), success metric (activation rate), sample size (use a calculator — typically 1,000+ per group), duration (2+ weeks to account for weekly patterns). Use statistical significance (p < 0.05) before declaring a winner. Do NOT peek at results early — that inflates false positives. Connect to: design-sprint lesson for pre-experiment validation.',
            es: 'Diseña un experimento para probar una hipótesis: "Si simplificamos el paso 3 de onboarding (eliminando 2 campos opcionales), la tasa de activación aumentará 15%." Define: grupo control (diseño actual), grupo tratamiento (diseño simplificado), métrica de éxito (tasa de activación), tamaño de muestra (usa una calculadora — típicamente 1,000+ por grupo), duración (2+ semanas para considerar patrones semanales). Usa significancia estadística (p < 0.05) antes de declarar un ganador. NO espíes resultados temprano — eso infla falsos positivos. Conecta con: lección design-sprint para validación pre-experimento.'
          }
        },
        {
          name: { en: 'Step 7: Iterate the roadmap', es: 'Paso 7: Itera el roadmap' },
          description: {
            en: 'Feed experiment results back into the roadmap. If the experiment succeeded: ship it, document the impact, and move to the next hypothesis. If it failed: analyze why (wrong hypothesis? wrong audience? insufficient sample?), document learnings, and pivot. Update the roadmap quarterly based on metric trends. Kill roadmap items whose underlying metrics show diminishing returns. Promote new items that emerge from unexpected metric discoveries. The cycle is: Measure → Learn → Reprioritize → Build → Measure. Connect to: product-roadmapping lesson.',
            es: 'Alimenta resultados de experimentos de vuelta al roadmap. Si el experimento tuvo éxito: lánzalo, documenta el impacto y avanza a la siguiente hipótesis. Si falló: analiza por qué (¿hipótesis equivocada? ¿audiencia equivocada? ¿muestra insuficiente?), documenta aprendizajes y pivotea. Actualiza el roadmap trimestralmente basándote en tendencias de métricas. Elimina items del roadmap cuyas métricas subyacentes muestren retornos decrecientes. Promueve nuevos items que emerjan de descubrimientos métricos inesperados. El ciclo es: Medir → Aprender → Repriorizar → Construir → Medir. Conecta con: lección product-roadmapping.'
          }
        }
      ]
    },

    // ─── 5. COMMON MISTAKES ─────────────────────────────────────
    commonMistakes: {
      en: [
        'Tracking everything: Instrumenting 200 events does not make you data-informed. It makes you data-overwhelmed. Focus on 5-7 key metrics tied to your North Star. You can always add more later when you have a specific hypothesis to test.',
        'Focusing on page views only: Page views tell you traffic volume but nothing about value delivery. A user who visits 10 pages and leaves is less valuable than one who visits 2 pages and activates. Measure depth of engagement, not breadth of navigation.',
        'No clear success metric before launching: If you launch a feature without pre-defining what "success" looks like, you will rationalize any result as a win. Define the success metric AND the target BEFORE you ship. "We will consider this successful if activation increases from 35% to 42% within 4 weeks."',
        'Confusing correlation with causation: "Users who complete their profile have 3x higher retention" does NOT mean forcing profile completion will increase retention. Those users might simply be more motivated. Use controlled experiments (A/B tests) to establish causation, not just cohort analysis.',
        'Measuring too late in the lifecycle: If you only measure 90-day retention, you cannot iterate fast enough. Identify early-signal metrics (Day 1 activation, first-session depth) that predict long-term outcomes. This lets you iterate weekly instead of quarterly.'
      ],
      es: [
        'Rastrear todo: Instrumentar 200 eventos no te hace informado por datos. Te hace abrumado por datos. Enfócate en 5-7 métricas clave vinculadas a tu North Star. Siempre puedes agregar más después cuando tengas una hipótesis específica que probar.',
        'Enfocarse solo en vistas de página: Las vistas de página te dicen volumen de tráfico pero nada sobre entrega de valor. Un usuario que visita 10 páginas y se va es menos valioso que uno que visita 2 páginas y se activa. Mide profundidad de engagement, no amplitud de navegación.',
        'Sin métrica de éxito clara antes de lanzar: Si lanzas un feature sin predefinir cómo se ve el "éxito," racionalizarás cualquier resultado como una victoria. Define la métrica de éxito Y el objetivo ANTES de lanzar. "Consideraremos esto exitoso si la activación aumenta de 35% a 42% en 4 semanas."',
        'Confundir correlación con causalidad: "Los usuarios que completan su perfil tienen 3x mayor retención" NO significa que forzar completación de perfil aumentará retención. Esos usuarios podrían simplemente estar más motivados. Usa experimentos controlados (A/B tests) para establecer causalidad, no solo análisis de cohortes.',
        'Medir demasiado tarde en el ciclo de vida: Si solo mides retención de 90 días, no puedes iterar suficientemente rápido. Identifica métricas de señal temprana (activación Día 1, profundidad de primera sesión) que predicen resultados a largo plazo. Esto te permite iterar semanalmente en vez de trimestralmente.'
      ]
    },

    // ─── 6. DELIVERABLES ────────────────────────────────────────
    deliverables: {
      description: {
        en: 'Strategic artifacts that connect UX metrics to product roadmap decisions and organizational alignment.',
        es: 'Artefactos estratégicos que conectan métricas UX con decisiones de roadmap de producto y alineación organizacional.'
      },
      items: {
        en: [
          'North Star definition document: One-pager with the metric name, formula, current baseline, target, and rationale for why it captures core user value. Shared with all stakeholders.',
          'Funnel map: Visual diagram showing each stage of the user journey with conversion rates, drop-off percentages, and identified friction points. Updated monthly.',
          'KPI dashboard: Real-time dashboard (Looker Studio, Amplitude, or Mixpanel) showing North Star, leading indicators, and funnel health. Reviewed in every sprint retrospective.',
          'Experiment brief: One-page document per experiment: hypothesis, control/treatment description, success metric, sample size calculation, expected duration, and decision criteria.',
          'Metric alignment sheet: Matrix mapping every roadmap initiative to its target metric, current baseline, and success threshold. Used in quarterly roadmap reviews.'
        ],
        es: [
          'Documento de definición North Star: One-pager con el nombre de la métrica, fórmula, línea base actual, objetivo y razonamiento de por qué captura el valor central del usuario. Compartido con todos los stakeholders.',
          'Mapa de funnel: Diagrama visual mostrando cada etapa del journey del usuario con tasas de conversión, porcentajes de abandono y puntos de fricción identificados. Actualizado mensualmente.',
          'Dashboard de KPIs: Dashboard en tiempo real (Looker Studio, Amplitude o Mixpanel) mostrando North Star, indicadores leading y salud del funnel. Revisado en cada retrospectiva de sprint.',
          'Brief de experimento: Documento de una página por experimento: hipótesis, descripción control/tratamiento, métrica de éxito, cálculo de tamaño de muestra, duración esperada y criterios de decisión.',
          'Hoja de alineación de métricas: Matriz mapeando cada iniciativa del roadmap a su métrica objetivo, línea base actual y umbral de éxito. Usada en revisiones trimestrales de roadmap.'
        ]
      }
    },

    // ─── 7. TOOLS ───────────────────────────────────────────────
    practicalTools: {
      design: {
        en: ['Figma (dashboard & metric report mockups)', 'Miro (funnel mapping workshops)', 'Whimsical (metric framework diagrams)'],
        es: ['Figma (mockups de dashboards y reportes de métricas)', 'Miro (talleres de mapeo de funnel)', 'Whimsical (diagramas de frameworks de métricas)']
      },
      analytics: {
        en: [
          'Google Analytics 4 (GA4): Event-based tracking, funnel exploration, audience segmentation',
          'Mixpanel: User behavior funnels, retention cohorts, A/B test analysis',
          'Amplitude: Behavioral cohorts, experiment tracking, predictive analytics',
          'Hotjar: Session recordings, heatmaps, and user feedback surveys',
          'Looker Studio: Dashboarding connecting GA4, BigQuery, and spreadsheets'
        ],
        es: [
          'Google Analytics 4 (GA4): Tracking basado en eventos, exploración de funnels, segmentación de audiencias',
          'Mixpanel: Funnels de comportamiento de usuario, cohortes de retención, análisis A/B test',
          'Amplitude: Cohortes comportamentales, tracking de experimentos, analítica predictiva',
          'Hotjar: Grabaciones de sesión, heatmaps y encuestas de feedback',
          'Looker Studio: Dashboards conectando GA4, BigQuery y hojas de cálculo'
        ]
      },
      testing: {
        en: ['Optimizely (A/B testing platform)', 'LaunchDarkly (feature flags)', 'Statsig (experiment infrastructure)'],
        es: ['Optimizely (plataforma A/B testing)', 'LaunchDarkly (feature flags)', 'Statsig (infraestructura de experimentos)']
      }
    },

    // ─── 8. AI IN PRACTICE ──────────────────────────────────────
    aiInPractice: {
      description: {
        en: 'AI can accelerate metric definition, funnel analysis, and experiment interpretation — but always validate AI suggestions against your specific product context.',
        es: 'La IA puede acelerar definición de métricas, análisis de funnel e interpretación de experimentos — pero siempre valida sugerencias de IA contra el contexto específico de tu producto.'
      },
      prompts: [
        {
          tool: 'ChatGPT / Claude',
          prompt: {
            en: 'I have a SaaS product for [domain]. The user journey is: [list stages]. Generate a metrics framework with one key metric per stage, suggest which metric should be the North Star, and explain the leading indicators that predict it.',
            es: 'Tengo un producto SaaS para [dominio]. El journey del usuario es: [listar etapas]. Genera un framework de métricas con una métrica clave por etapa, sugiere cuál debería ser la North Star y explica los indicadores leading que la predicen.'
          },
          context: {
            en: 'Generate funnel metrics from a user journey — produces a complete metrics framework mapped to journey stages.',
            es: 'Genera métricas de funnel desde un journey de usuario — produce un framework de métricas completo mapeado a etapas del journey.'
          }
        },
        {
          tool: 'ChatGPT / Claude',
          prompt: {
            en: 'My product is [description]. Users who retain for 90+ days tend to [describe observed behavior]. Users who churn within 14 days tend to [describe behavior]. Suggest 3 possible activation events and explain which one is most likely to be causal vs merely correlated.',
            es: 'Mi producto es [descripción]. Los usuarios que se retienen por 90+ días tienden a [describir comportamiento observado]. Los usuarios que abandonan dentro de 14 días tienden a [describir comportamiento]. Sugiere 3 posibles eventos de activación y explica cuál es más probable que sea causal vs meramente correlacionado.'
          },
          context: {
            en: 'Suggest activation metric — helps identify the user behavior that predicts long-term retention.',
            es: 'Sugerir métrica de activación — ayuda a identificar el comportamiento del usuario que predice retención a largo plazo.'
          }
        },
        {
          tool: 'ChatGPT / Claude',
          prompt: {
            en: 'I ran an A/B test: Control group (N=[X], conversion=[Y]%), Treatment group (N=[X], conversion=[Z]%). The test ran for [duration]. Calculate statistical significance (p-value), effect size, and recommend whether to ship, extend the test, or kill the experiment. Also flag any potential confounding variables I should check.',
            es: 'Ejecuté un A/B test: Grupo control (N=[X], conversión=[Y]%), Grupo tratamiento (N=[X], conversión=[Z]%). El test corrió por [duración]. Calcula significancia estadística (valor-p), tamaño de efecto, y recomienda si lanzar, extender el test, o matar el experimento. También señala variables confusoras potenciales que debería verificar.'
          },
          context: {
            en: 'Interpret experiment results — gets statistical analysis and actionable recommendations from A/B test data.',
            es: 'Interpretar resultados de experimento — obtiene análisis estadístico y recomendaciones accionables de datos de A/B test.'
          }
        }
      ]
    },

    // ─── 9. HOW TO VALIDATE ─────────────────────────────────────
    howToValidate: {
      what: {
        en: 'Validate that your metrics framework is aligned with business goals, that experiments are rigorous, and that the team acts on measurement insights.',
        es: 'Valida que tu framework de métricas esté alineado con objetivos de negocio, que los experimentos sean rigurosos, y que el equipo actúe sobre insights de medición.'
      },
      methods: {
        en: [
          'North Star alignment audit: Does the North Star grow when business grows? If it grows but revenue does not follow in 2-3 quarters, the metric is wrong.',
          'Experiment rigor review: Every experiment has pre-defined sample size, duration (min 2 weeks), and success threshold — no "let\'s see what happens."',
          'Actionability test: If a metric moves and no one knows what to change, it is useless. Every metric must have an "if this drops, we do X" response plan.',
          'Sprint retrospective metric review: Validate the team reviews metrics weekly, not quarterly. Metrics living in unchecked dashboards provide zero value.',
          'Roadmap traceability check: Every initiative links to a target metric. No metric = no accountability.'
        ],
        es: [
          'Auditoría de alineación North Star: ¿La North Star crece cuando el negocio crece? Si crece pero ingresos no siguen en 2-3 trimestres, la métrica está equivocada.',
          'Revisión de rigor de experimentos: Cada experimento tiene tamaño de muestra, duración (mín 2 semanas) y umbral de éxito predefinidos — no "veamos qué pasa."',
          'Test de accionabilidad: Si una métrica se mueve y nadie sabe qué cambiar, es inútil. Cada métrica debe tener un plan "si esto cae, hacemos X."',
          'Revisión de métricas en retrospectiva de sprint: Valida que el equipo revise métricas semanalmente, no trimestralmente. Métricas en dashboards sin revisar tienen valor cero.',
          'Verificación de trazabilidad del roadmap: Cada iniciativa se vincula a una métrica objetivo. Sin métrica = sin accountability.'
        ]
      },
      tools: {
        en: ['Amplitude (North Star tracking)', 'Mixpanel (funnel validation)', 'Looker Studio (stakeholder dashboards)', 'Statsig (experiment analysis)', 'Notion/Confluence (metric documentation)'],
        es: ['Amplitude (tracking North Star)', 'Mixpanel (validación de funnel)', 'Looker Studio (dashboards de stakeholders)', 'Statsig (análisis de experimentos)', 'Notion/Confluence (documentación de métricas)']
      },
      evidenceExample: {
        en: 'You can show stakeholders a one-page document that traces: North Star Metric → leading indicators → experiment hypothesis → measured result → roadmap decision. If you can draw this line for every shipped feature, your metrics practice is mature.',
        es: 'Puedes mostrar a stakeholders un documento de una página que traza: Métrica North Star → indicadores leading → hipótesis de experimento → resultado medido → decisión de roadmap. Si puedes trazar esta línea para cada feature lanzado, tu práctica de métricas es madura.'
      }
    },

    // ─── 10. KNOWLEDGE CHECK ────────────────────────────────────
    quiz: [
      {
        question: {
          en: 'Your product has 50,000 sign-ups/month but only 8% activate (complete their first project). Your CEO wants to increase marketing spend to get more sign-ups. What do you recommend?',
          es: 'Tu producto tiene 50,000 registros/mes pero solo 8% activa (completa su primer proyecto). Tu CEO quiere aumentar gasto en marketing para obtener más registros. ¿Qué recomiendas?'
        },
        options: {
          en: [
            'Agree — more sign-ups will naturally increase activated users',
            'Focus on improving activation rate first — doubling activation from 8% to 16% is cheaper than doubling sign-ups and has compounding retention effects',
            'Track page views instead since they\'re easier to measure',
            'Wait 6 months to collect more data before making any decision'
          ],
          es: [
            'Aceptar — más registros naturalmente aumentarán usuarios activados',
            'Enfocarse en mejorar tasa de activación primero — duplicar activación de 8% a 16% es más barato que duplicar registros y tiene efectos compuestos en retención',
            'Rastrear vistas de página en su lugar ya que son más fáciles de medir',
            'Esperar 6 meses para recolectar más datos antes de tomar cualquier decisión'
          ]
        },
        correctIndex: 1,
        explanation: {
          en: 'Improving activation is the highest-leverage move. If only 8% of users experience core value, pouring more users into the top of a leaky funnel wastes acquisition spend. Fix the activation bottleneck first, then scale acquisition.',
          es: 'Mejorar la activación es el movimiento de mayor apalancamiento. Si solo 8% de usuarios experimenta el valor central, verter más usuarios en la parte superior de un funnel con fugas desperdicia gasto de adquisición. Arregla el cuello de botella de activación primero, luego escala adquisición.'
        }
      },
      {
        question: {
          en: 'You ran an A/B test for 3 days. The treatment group shows a 25% improvement in conversion. Your PM wants to ship it immediately. What should you do?',
          es: 'Ejecutaste un A/B test por 3 días. El grupo tratamiento muestra 25% de mejora en conversión. Tu PM quiere lanzarlo inmediatamente. ¿Qué deberías hacer?'
        },
        options: {
          en: [
            'Ship it — 25% improvement is clearly a winner',
            'Wait until the test reaches the pre-defined sample size and duration (minimum 2 weeks) to account for weekly patterns and reach statistical significance',
            'Cancel the test and start a new one with a bigger sample',
            'Only trust the results if the improvement is over 50%'
          ],
          es: [
            'Lanzarlo — 25% de mejora es claramente un ganador',
            'Esperar hasta que el test alcance el tamaño de muestra y duración predefinidos (mínimo 2 semanas) para considerar patrones semanales y alcanzar significancia estadística',
            'Cancelar el test y empezar uno nuevo con muestra más grande',
            'Solo confiar en los resultados si la mejora es mayor a 50%'
          ]
        },
        correctIndex: 1,
        explanation: {
          en: 'Peeking at results early and shipping based on 3 days of data is a classic statistical error (peeking problem). Weekly patterns (weekend vs weekday behavior) can dramatically skew results. Always wait for the pre-defined duration and sample size.',
          es: 'Espiar resultados temprano y lanzar basándote en 3 días de datos es un error estadístico clásico (problema de peeking). Patrones semanales (comportamiento fin de semana vs entre semana) pueden sesgar dramáticamente los resultados. Siempre espera la duración y tamaño de muestra predefinidos.'
        }
      },
      {
        question: {
          en: 'Analysis shows that users who add a profile photo have 4x higher 30-day retention. The team proposes making profile photo upload mandatory during onboarding. What is the risk?',
          es: 'El análisis muestra que usuarios que agregan foto de perfil tienen 4x mayor retención a 30 días. El equipo propone hacer obligatoria la subida de foto de perfil durante el onboarding. ¿Cuál es el riesgo?'
        },
        options: {
          en: [
            'No risk — the data clearly shows profile photos improve retention',
            'Confusing correlation with causation: motivated users may upload photos AND retain, but forcing the behavior on unmotivated users may increase onboarding drop-off without improving retention',
            'The sample size is too small to draw conclusions',
            'Profile photos are a privacy concern and should be removed entirely'
          ],
          es: [
            'Sin riesgo — los datos claramente muestran que fotos de perfil mejoran retención',
            'Confundir correlación con causalidad: usuarios motivados pueden subir fotos Y retener, pero forzar el comportamiento en usuarios no motivados puede aumentar abandono de onboarding sin mejorar retención',
            'El tamaño de muestra es demasiado pequeño para sacar conclusiones',
            'Las fotos de perfil son preocupación de privacidad y deberían eliminarse completamente'
          ]
        },
        correctIndex: 1,
        explanation: {
          en: 'This is the classic correlation ≠ causation trap. The profile photo is likely a SIGNAL of user motivation, not the CAUSE of retention. Making it mandatory could add friction to onboarding for unmotivated users, increasing drop-off without improving long-term retention. The correct approach is to run an A/B test.',
          es: 'Esta es la trampa clásica de correlación ≠ causalidad. La foto de perfil es probablemente una SEÑAL de motivación del usuario, no la CAUSA de retención. Hacerla obligatoria podría agregar fricción al onboarding para usuarios no motivados, aumentando abandono sin mejorar retención a largo plazo. El enfoque correcto es ejecutar un A/B test.'
        }
      }
    ],

    // ─── 11. REAL EXAMPLE ───────────────────────────────────────
    realExample: {
      title: {
        en: 'Claro Admin Tool: From Feature Factory to Metrics-Driven Product',
        es: 'Herramienta Admin Claro: De Fábrica de Features a Producto Guiado por Métricas'
      },
      description: {
        en: 'Scenario: Claro\'s internal admin tool had shipped 30+ features in 12 months, but feature adoption averaged only 12%. The team was a classic feature factory — building what stakeholders requested without measuring impact. Transformation: North Star Metric defined as "Weekly Active Admin Actions" (not logins — actions that deliver value). Activation event identified: "Admin completes first bulk operation within 3 days of account creation" (cohort analysis showed these users had 5x higher 90-day retention). Funnel modeled: 1,000 new admin accounts/month → 680 first login (68%) → 340 explored dashboard (50%) → 170 completed bulk operation (50%) → 120 retained Day 30 (71%). Biggest friction: Dashboard exploration to bulk operation (50% drop-off). Experiment: Redesigned dashboard with contextual "Quick Actions" cards showing the 3 most common bulk operations. Hypothesis: "Quick Actions will increase bulk operation completion from 50% to 65%." Result: After 4-week A/B test, treatment group showed 62% completion (vs 50% control). Shipped. Retention improved from 71% to 78% in subsequent cohort. Impact: Feature adoption increased from 12% to 34% over 6 months by only building features tied to the North Star metric. 18 proposed features were killed because they could not be tied to an activation or retention metric.',
        es: 'Escenario: La herramienta admin interna de Claro había lanzado 30+ features en 12 meses, pero la adopción promediaba solo 12%. El equipo era una fábrica de features clásica — construyendo lo que stakeholders pedían sin medir impacto. Transformación: Métrica North Star definida como "Acciones Admin Activas Semanales" (no logins — acciones que entregan valor). Evento de activación identificado: "Admin completa primera operación bulk dentro de 3 días de creación de cuenta" (análisis de cohortes mostró que estos usuarios tenían 5x mayor retención a 90 días). Funnel modelado: 1,000 nuevas cuentas admin/mes → 680 primer login (68%) → 340 exploraron dashboard (50%) → 170 completaron operación bulk (50%) → 120 retenidos Día 30 (71%). Mayor fricción: Exploración de dashboard a operación bulk (50% abandono). Experimento: Rediseño de dashboard con tarjetas contextuales "Acciones Rápidas" mostrando las 3 operaciones bulk más comunes. Hipótesis: "Acciones Rápidas aumentarán completación de operación bulk de 50% a 65%." Resultado: Después de A/B test de 4 semanas, grupo tratamiento mostró 62% de completación (vs 50% control). Lanzado. Retención mejoró de 71% a 78% en cohorte subsiguiente. Impacto: Adopción de features aumentó de 12% a 34% en 6 meses al solo construir features vinculados a la métrica North Star. 18 features propuestos fueron eliminados porque no podían vincularse a una métrica de activación o retención.'
      },
      company: 'Claro (Case Study)'
    }
  }
};