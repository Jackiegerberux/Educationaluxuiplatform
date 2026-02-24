import { Topic } from './types';

export const releasePlanningLesson: Topic = {
  id: 'release-planning-and-increment-strategy',
  title: { en: 'Release Planning & Increment Strategy', es: 'Planificación de Releases y Estrategia de Incrementos' },
  description: {
    en: 'Plan execution and delivery strategy: from roadmap initiatives to incremental releases, rollout strategies, and post-release monitoring.',
    es: 'Planifica la ejecución y estrategia de entrega: desde iniciativas del roadmap hasta releases incrementales, estrategias de rollout y monitoreo post-release.'
  },
  status: 'advanced',
  timeEstimate: '2h 45m',
  tag: 'Product',
  reference: { en: 'Continuous Delivery — Jez Humble & David Farley', es: 'Entrega Continua — Jez Humble & David Farley' },
  referenceLink: 'https://continuousdelivery.com/',
  content: {
    // ── 1. OVERVIEW ──────────────────────────────────────────────
    definition: {
      en: 'Release Planning is the discipline of breaking a product roadmap initiative into shippable increments, defining scope boundaries for each release, managing dependencies, and coordinating delivery windows. An Increment is a usable slice of value that can be deployed, measured, and iterated upon independently. Unlike a full product launch, a Release is a deliberate, scoped delivery event — it may include one or several increments. The key distinctions: an MVP is the smallest version that validates a hypothesis; an Iteration is a refinement cycle within an existing feature; a Release is a planned shipment of one or more increments to users. Release planning matters because it transforms abstract roadmap goals into concrete, executable plans with measurable outcomes, risk mitigation, and stakeholder alignment.',
      es: 'La Planificación de Releases es la disciplina de dividir una iniciativa del roadmap en incrementos entregables, definir los límites de alcance de cada release, gestionar dependencias y coordinar ventanas de entrega. Un Incremento es un fragmento utilizable de valor que puede desplegarse, medirse e iterarse de forma independiente. A diferencia de un lanzamiento completo, un Release es un evento de entrega deliberado y acotado — puede incluir uno o varios incrementos. Las distinciones clave: un MVP es la versión más pequeña que valida una hipótesis; una Iteración es un ciclo de refinamiento dentro de una funcionalidad existente; un Release es un envío planificado de uno o más incrementos a usuarios. La planificación de releases importa porque transforma objetivos abstractos del roadmap en planes concretos y ejecutables con resultados medibles, mitigación de riesgos y alineación de stakeholders.'
    },

    // ── 2. WHY IT MATTERS ────────────────────────────────────────
    why: {
      en: 'Without release planning, teams fall into the "big bang launch" trap — months of work shipped at once, with unpredictable quality and no fallback plan. Release planning prevents feature overload by forcing scope discipline: each increment ships only what users need now, not everything the team imagined. It reduces production risk because smaller releases mean smaller blast radius — if something breaks, rollback is straightforward. It improves stakeholder trust because delivery becomes predictable: stakeholders see consistent progress instead of long silences followed by chaotic launches. Most importantly, it enables measurable delivery — each release has KPIs attached, so the team knows immediately whether the increment created value or needs adjustment. Release planning is the bridge between strategy (roadmap) and execution (sprints).',
      es: 'Sin planificación de releases, los equipos caen en la trampa del "lanzamiento big bang" — meses de trabajo enviados de una vez, con calidad impredecible y sin plan de contingencia. La planificación de releases previene la sobrecarga de funcionalidades forzando disciplina de alcance: cada incremento envía solo lo que los usuarios necesitan ahora, no todo lo que el equipo imaginó. Reduce el riesgo de producción porque releases más pequeños significan menor radio de explosión — si algo se rompe, el rollback es sencillo. Mejora la confianza de los stakeholders porque la entrega se vuelve predecible: los stakeholders ven progreso consistente en lugar de largos silencios seguidos de lanzamientos caóticos. Más importante, habilita la entrega medible — cada release tiene KPIs asociados, así el equipo sabe inmediatamente si el incremento creó valor o necesita ajuste. La planificación de releases es el puente entre estrategia (roadmap) y ejecución (sprints).'
    },

    // ── 3. KEY PRINCIPLES ────────────────────────────────────────
    keyPrinciples: {
      en: [
        'Small increments over big launches: Ship the smallest meaningful unit of value. Each increment should be usable, testable, and measurable on its own. Big launches hide risk; small increments reveal it early.',
        'Outcome-based releases: Define what success looks like before scoping the release. Every release should answer: "What user behavior will change?" If you cannot articulate the outcome, the scope is wrong.',
        'Risk reduction through progressive delivery: Start with the lowest-risk, highest-value slice. Use phased rollouts (5% → 20% → 50% → 100%) to catch issues before they affect all users.',
        'Dependency awareness: Map technical, design, and cross-team dependencies before committing to a release window. Unresolved dependencies are the #1 cause of release delays.',
        'Clear scope definition: Each release needs explicit "in scope" and "out of scope" lists. Scope creep is the enemy of predictable delivery. Use a scope table: feature, complexity, priority, increment assignment.',
        'Test before scale: Every increment should pass through staging, QA, and limited rollout before full deployment. "Works on my machine" is not a release strategy.'
      ],
      es: [
        'Incrementos pequeños sobre lanzamientos grandes: Envía la unidad de valor significativa más pequeña. Cada incremento debe ser usable, testeable y medible por sí solo. Lanzamientos grandes ocultan riesgo; incrementos pequeños lo revelan temprano.',
        'Releases basados en resultados: Define cómo se ve el éxito antes de acotar el release. Cada release debe responder: "¿Qué comportamiento del usuario cambiará?" Si no puedes articular el resultado, el alcance está mal.',
        'Reducción de riesgo mediante entrega progresiva: Comienza con el fragmento de menor riesgo y mayor valor. Usa rollouts graduales (5% → 20% → 50% → 100%) para detectar problemas antes de que afecten a todos los usuarios.',
        'Conciencia de dependencias: Mapea dependencias técnicas, de diseño y entre equipos antes de comprometerte a una ventana de release. Dependencias sin resolver son la causa #1 de retrasos en releases.',
        'Definición clara de alcance: Cada release necesita listas explícitas de "dentro del alcance" y "fuera del alcance". El scope creep es el enemigo de la entrega predecible. Usa una tabla de alcance: funcionalidad, complejidad, prioridad, asignación de incremento.',
        'Testear antes de escalar: Cada incremento debe pasar por staging, QA y rollout limitado antes del despliegue completo. "Funciona en mi máquina" no es una estrategia de release.'
      ]
    },

    // ── 5. HOW TO APPLY ──────────────────────────────────────────
    howToApply: {
      steps: [
        {
          name: { en: 'Step 1: Identify the Roadmap Initiative', es: 'Paso 1: Identificar la Iniciativa del Roadmap' },
          description: {
            en: 'Start with a strategic initiative from your product roadmap (e.g., "Enable bulk operations for admin users"). Confirm the business outcome: what KPI will this improve? Who requested it? What is the deadline? Without a clear initiative, release planning becomes feature-shuffling.',
            es: 'Comienza con una iniciativa estratégica de tu roadmap de producto (ej: "Habilitar operaciones masivas para usuarios admin"). Confirma el resultado de negocio: ¿qué KPI mejorará? ¿Quién lo solicitó? ¿Cuál es la fecha límite? Sin una iniciativa clara, la planificación de releases se convierte en barajar funcionalidades.'
          }
        },
        {
          name: { en: 'Step 2: Break Into Increments', es: 'Paso 2: Dividir en Incrementos' },
          description: {
            en: 'Decompose the initiative into 2-4 shippable increments. Each increment must be independently usable and testable. Use the "walking skeleton" pattern: Increment 1 = core flow end-to-end; Increment 2 = optimizations and edge cases; Increment 3 = automation and scale. Each increment delivers visible user value.',
            es: 'Descompón la iniciativa en 2-4 incrementos entregables. Cada incremento debe ser independientemente usable y testeable. Usa el patrón "esqueleto caminante": Incremento 1 = flujo central de extremo a extremo; Incremento 2 = optimizaciones y casos límite; Incremento 3 = automatización y escala. Cada incremento entrega valor visible al usuario.'
          }
        },
        {
          name: { en: 'Step 3: Define MVP vs Phase 2', es: 'Paso 3: Definir MVP vs Fase 2' },
          description: {
            en: 'For each increment, classify features as MVP (must-have for this release) or Phase 2 (can wait). Use this filter: "If we ship without this feature, can users still complete the core task?" If yes, it is Phase 2. Build a scope table with columns: Feature | Complexity (S/M/L) | Priority (Must/Should/Could) | Increment.',
            es: 'Para cada incremento, clasifica funcionalidades como MVP (obligatorio para este release) o Fase 2 (puede esperar). Usa este filtro: "Si enviamos sin esta funcionalidad, ¿los usuarios aún pueden completar la tarea principal?" Si sí, es Fase 2. Construye una tabla de alcance con columnas: Funcionalidad | Complejidad (S/M/L) | Prioridad (Must/Should/Could) | Incremento.'
          }
        },
        {
          name: { en: 'Step 4: Identify Technical Dependencies', es: 'Paso 4: Identificar Dependencias Técnicas' },
          description: {
            en: 'Map every dependency: API endpoints needed, database migrations, third-party integrations, design system components, cross-team work. Create a dependency matrix: Increment | Depends On | Owner | Status | Risk Level. Flag any dependency with "unknown" status as HIGH risk.',
            es: 'Mapea cada dependencia: endpoints de API necesarios, migraciones de base de datos, integraciones de terceros, componentes del design system, trabajo entre equipos. Crea una matriz de dependencias: Incremento | Depende De | Responsable | Estado | Nivel de Riesgo. Marca cualquier dependencia con estado "desconocido" como riesgo ALTO.'
          }
        },
        {
          name: { en: 'Step 5: Align Sprint Capacity', es: 'Paso 5: Alinear Capacidad de Sprint' },
          description: {
            en: 'Map increments to sprint capacity. Calculate: How many sprints does each increment need? What is the team velocity? Are there holidays, vacations, or competing priorities? Rule of thumb: multiply your estimate by 1.3 for buffer. Never plan at 100% capacity — reserve 20% for bugs, tech debt, and unplanned work.',
            es: 'Mapea incrementos a capacidad de sprint. Calcula: ¿Cuántos sprints necesita cada incremento? ¿Cuál es la velocidad del equipo? ¿Hay feriados, vacaciones o prioridades en competencia? Regla general: multiplica tu estimación por 1.3 para buffer. Nunca planifiques al 100% de capacidad — reserva 20% para bugs, deuda técnica y trabajo no planificado.'
          }
        },
        {
          name: { en: 'Step 6: Plan Release Window', es: 'Paso 6: Planificar Ventana de Release' },
          description: {
            en: 'Choose the release date and rollout strategy. Consider: Avoid Fridays (no one wants to debug over the weekend). Coordinate with marketing, support, and documentation teams. Define the rollout plan: beta → 5% users → 20% → full rollout. Include rollback criteria: "If error rate exceeds 2%, auto-rollback."',
            es: 'Elige la fecha de release y estrategia de rollout. Considera: Evita viernes (nadie quiere debuggear el fin de semana). Coordina con equipos de marketing, soporte y documentación. Define el plan de rollout: beta → 5% usuarios → 20% → rollout completo. Incluye criterios de rollback: "Si la tasa de error excede 2%, auto-rollback."'
          }
        },
        {
          name: { en: 'Step 7: Define Success Metrics', es: 'Paso 7: Definir Métricas de Éxito' },
          description: {
            en: 'Each release must have 2-3 measurable KPIs. Examples: adoption rate (% of target users who use the feature within 7 days), task completion rate, error rate reduction, time-to-complete reduction. Set thresholds: Green (>80% adoption), Yellow (50-80%), Red (<50%). Schedule post-release review at T+7 and T+30.',
            es: 'Cada release debe tener 2-3 KPIs medibles. Ejemplos: tasa de adopción (% de usuarios objetivo que usan la funcionalidad en 7 días), tasa de completado de tarea, reducción de tasa de error, reducción de tiempo de completado. Establece umbrales: Verde (>80% adopción), Amarillo (50-80%), Rojo (<50%). Programa revisión post-release en T+7 y T+30.'
          }
        },
        {
          name: { en: 'Step 8: Monitor Post-Release Impact', es: 'Paso 8: Monitorear Impacto Post-Release' },
          description: {
            en: 'After release, track metrics daily for the first week. Watch for: error spikes, support ticket volume, feature adoption curves, user feedback. Hold a post-release retrospective: What went well? What broke? What should change for the next increment? Document learnings in a release retrospective note and feed them back into the next increment plan.',
            es: 'Después del release, trackea métricas diariamente durante la primera semana. Observa: picos de errores, volumen de tickets de soporte, curvas de adopción de funcionalidad, feedback de usuarios. Realiza una retrospectiva post-release: ¿Qué fue bien? ¿Qué se rompió? ¿Qué debería cambiar para el próximo incremento? Documenta aprendizajes en una nota de retrospectiva de release y aliméntalos al plan del próximo incremento.'
          }
        }
      ]
    },

    // ── 6. COMMON MISTAKES ───────────────────────────────────────
    commonMistakes: {
      en: [
        'Releasing too much at once: Bundling 15 features into one release because "it is easier to deploy once." This maximizes risk, makes debugging impossible, and overwhelms users with too many changes at once.',
        'No rollout strategy: Going from 0% to 100% of users instantly. If something breaks, everyone is affected. Always use progressive rollouts: internal → beta → 5% → 20% → 50% → 100%.',
        'No rollback plan: Deploying without knowing how to undo. Every release needs a rollback procedure documented and tested before deployment. If you cannot rollback in under 15 minutes, your release is not ready.',
        'Ignoring tech debt in release planning: Piling features on top of fragile infrastructure. Allocate 15-20% of each release to tech debt reduction — it is not optional, it is investment in future velocity.',
        'No post-release monitoring: Shipping and moving on without checking if the release actually worked. Set up dashboards and alerts before deploying, not after. Monitor for at least 7 days post-release.',
        'Stakeholder-driven deadline without scope adjustment: Accepting a fixed date without negotiating scope. If the deadline cannot move, the scope must. The triangle: scope, time, quality — pick two.'
      ],
      es: [
        'Lanzar demasiado de una vez: Agrupar 15 funcionalidades en un release porque "es más fácil deployar una vez." Esto maximiza el riesgo, hace el debugging imposible y abruma a usuarios con demasiados cambios.',
        'Sin estrategia de rollout: Ir de 0% a 100% de usuarios instantáneamente. Si algo se rompe, todos se ven afectados. Siempre usa rollouts progresivos: interno → beta → 5% → 20% → 50% → 100%.',
        'Sin plan de rollback: Deployar sin saber cómo deshacer. Cada release necesita un procedimiento de rollback documentado y testeado antes del deployment. Si no puedes hacer rollback en menos de 15 minutos, tu release no está listo.',
        'Ignorar deuda técnica en planificación de releases: Apilar funcionalidades sobre infraestructura frágil. Asigna 15-20% de cada release a reducción de deuda técnica — no es opcional, es inversión en velocidad futura.',
        'Sin monitoreo post-release: Enviar y seguir adelante sin verificar si el release realmente funcionó. Configura dashboards y alertas antes de deployar, no después. Monitorea por al menos 7 días post-release.',
        'Deadline impuesta por stakeholders sin ajuste de alcance: Aceptar una fecha fija sin negociar el alcance. Si la fecha no se mueve, el alcance debe moverse. El triángulo: alcance, tiempo, calidad — elige dos.'
      ]
    },

    // ── 7. DELIVERABLES ──────────────────────────────────────────
    deliverables: {
      description: {
        en: 'Artifacts that a designer or product team produces during release planning and delivery.',
        es: 'Artefactos que un diseñador o equipo de producto genera durante la planificación y entrega de releases.'
      },
      items: {
        en: [
          'Release plan document: Initiative name, business outcome, increment breakdown, timeline, dependencies, rollout strategy, success criteria, rollback plan.',
          'Increment breakdown: Table mapping each increment to scope, sprint allocation, owner, and dependencies. Columns: Increment | Features | Sprints | Owner | Dependencies | Risk.',
          'Scope table: Feature-level detail with priority classification (Must/Should/Could), complexity estimate (S/M/L), and increment assignment.',
          'Rollout strategy: Phased deployment plan with percentage targets, timeline, monitoring triggers, and escalation path. Example: "Day 1: internal → Day 3: 5% → Day 7: 20% → Day 14: 100%".',
          'Risk matrix: Identified risks with probability, impact, mitigation strategy, and owner. Format: Risk | Probability (H/M/L) | Impact (H/M/L) | Mitigation | Owner.',
          'Post-release checklist: Monitoring dashboard links, KPI thresholds, support escalation plan, retrospective date, and documentation update tasks.'
        ],
        es: [
          'Documento de plan de release: Nombre de iniciativa, resultado de negocio, desglose de incrementos, cronograma, dependencias, estrategia de rollout, criterios de éxito, plan de rollback.',
          'Desglose de incrementos: Tabla mapeando cada incremento a alcance, asignación de sprints, responsable y dependencias. Columnas: Incremento | Funcionalidades | Sprints | Responsable | Dependencias | Riesgo.',
          'Tabla de alcance: Detalle a nivel de funcionalidad con clasificación de prioridad (Must/Should/Could), estimación de complejidad (S/M/L) y asignación de incremento.',
          'Estrategia de rollout: Plan de despliegue por fases con objetivos de porcentaje, cronograma, triggers de monitoreo y ruta de escalación. Ejemplo: "Día 1: interno → Día 3: 5% → Día 7: 20% → Día 14: 100%".',
          'Matriz de riesgos: Riesgos identificados con probabilidad, impacto, estrategia de mitigación y responsable. Formato: Riesgo | Probabilidad (A/M/B) | Impacto (A/M/B) | Mitigación | Responsable.',
          'Checklist post-release: Links a dashboards de monitoreo, umbrales de KPIs, plan de escalación de soporte, fecha de retrospectiva y tareas de actualización de documentación.'
        ]
      }
    },

    // ── 8. PRACTICAL TOOLS ───────────────────────────────────────
    practicalTools: {
      design: {
        en: ['Jira (release tracking + ticket management)', 'Linear (modern release planning)', 'Notion (release plan documentation)', 'Confluence (release notes + retrospectives)'],
        es: ['Jira (seguimiento de releases + gestión de tickets)', 'Linear (planificación moderna de releases)', 'Notion (documentación de plan de release)', 'Confluence (notas de release + retrospectivas)']
      },
      analytics: {
        en: ['Amplitude (feature adoption + funnel tracking)', 'Mixpanel (event analytics + cohorts)', 'Datadog (error monitoring + alerts)', 'Grafana (real-time dashboards)'],
        es: ['Amplitude (adopción de funcionalidad + seguimiento de funnel)', 'Mixpanel (analítica de eventos + cohortes)', 'Datadog (monitoreo de errores + alertas)', 'Grafana (dashboards en tiempo real)']
      },
      management: {
        en: ['Productboard (roadmap → release alignment)', 'GitHub Projects (release milestones)', 'LaunchDarkly (feature flags + rollouts)', 'PagerDuty (incident management)'],
        es: ['Productboard (alineación roadmap → release)', 'GitHub Projects (hitos de release)', 'LaunchDarkly (feature flags + rollouts)', 'PagerDuty (gestión de incidentes)']
      }
    },

    // ── 9. AI IN PRACTICE ────────────────────────────────────────
    aiInPractice: {
      description: {
        en: 'AI can accelerate release planning by decomposing large features, generating risk matrices, and creating monitoring checklists.',
        es: 'La IA puede acelerar la planificación de releases descomponiendo funcionalidades grandes, generando matrices de riesgo y creando checklists de monitoreo.'
      },
      prompts: [
        {
          tool: 'ChatGPT',
          context: { en: 'Break a large feature into incremental releases', es: 'Dividir una funcionalidad grande en releases incrementales' },
          prompt: {
            en: 'I have a large feature: "[Feature description — e.g., Bulk data pack assignment for admin users]". Break it into 3 incremental releases. For each increment, define: (1) Scope (what ships), (2) MVP features vs Phase 2 deferred items, (3) User value delivered, (4) Dependencies, (5) Estimated sprint count. Format as a table.',
            es: 'Tengo una funcionalidad grande: "[Descripción de funcionalidad — ej: Asignación masiva de paquetes de datos para usuarios admin]". Divídela en 3 releases incrementales. Para cada incremento, define: (1) Alcance (qué se envía), (2) Funcionalidades MVP vs elementos diferidos a Fase 2, (3) Valor entregado al usuario, (4) Dependencias, (5) Cantidad estimada de sprints. Formatea como tabla.'
          }
        },
        {
          tool: 'Claude',
          context: { en: 'Generate a release risk matrix', es: 'Generar una matriz de riesgos de release' },
          prompt: {
            en: 'I am planning a release for "[Feature name]" with these dependencies: [list dependencies]. Generate a risk matrix with columns: Risk Description | Probability (High/Medium/Low) | Impact (High/Medium/Low) | Mitigation Strategy | Owner | Contingency Plan. Include at least 8 risks covering: technical, UX, organizational, and external categories.',
            es: 'Estoy planificando un release para "[Nombre de funcionalidad]" con estas dependencias: [listar dependencias]. Genera una matriz de riesgos con columnas: Descripción del Riesgo | Probabilidad (Alta/Media/Baja) | Impacto (Alto/Medio/Bajo) | Estrategia de Mitigación | Responsable | Plan de Contingencia. Incluye al menos 8 riesgos cubriendo categorías: técnica, UX, organizacional y externa.'
          }
        },
        {
          tool: 'ChatGPT',
          context: { en: 'Create a post-release monitoring checklist', es: 'Crear un checklist de monitoreo post-release' },
          prompt: {
            en: 'I just released "[Feature name]" to [X]% of users. Create a detailed post-release monitoring checklist organized by timeframe: (1) First 2 hours, (2) First 24 hours, (3) First 7 days, (4) First 30 days. For each timeframe, list: what to monitor, expected thresholds, red flags, and action items if thresholds are breached. Include technical metrics (error rate, latency) and UX metrics (adoption, task completion).',
            es: 'Acabo de lanzar "[Nombre de funcionalidad]" al [X]% de usuarios. Crea un checklist detallado de monitoreo post-release organizado por período: (1) Primeras 2 horas, (2) Primeras 24 horas, (3) Primeros 7 días, (4) Primeros 30 días. Para cada período, lista: qué monitorear, umbrales esperados, señales de alerta y acciones si los umbrales se exceden. Incluye métricas técnicas (tasa de error, latencia) y métricas UX (adopción, completado de tarea).'
          }
        }
      ]
    },

    // ── 10. HOW TO VALIDATE ──────────────────────────────────────
    howToValidate: {
      what: {
        en: 'Validate whether your release planning process results in predictable, low-risk, measurable deliveries. A good release plan should reduce surprises, prevent rollbacks, and demonstrate clear value through KPI movement within 30 days of each release.',
        es: 'Valida si tu proceso de planificación de releases resulta en entregas predecibles, de bajo riesgo y medibles. Un buen plan de release debería reducir sorpresas, prevenir rollbacks y demostrar valor claro a través de movimiento de KPIs dentro de los 30 días de cada release.'
      },
      methods: {
        en: [
          'Release scope realism check: Compare planned scope vs shipped scope for the last 5 releases. If >30% of scope consistently gets deferred, you are over-scoping.',
          'Increment testability audit: Can each increment be tested independently in staging? If not, your increments are not truly independent — they are coupled.',
          'KPI linkage verification: Does every release have at least 2 measurable KPIs defined before deployment? Audit your last 3 releases. If KPIs were added after launch, the process is broken.',
          'Rollback readiness test: Run a rollback drill for each release in staging before going live. Time it. If rollback takes >15 minutes, simplify your deployment.',
          'Post-release analysis completion: After every release, was a retrospective held within 7 days? Were learnings documented and fed into the next increment plan? Check your team confluence/notion for evidence.'
        ],
        es: [
          'Check de realismo de alcance del release: Compara alcance planeado vs alcance entregado de los últimos 5 releases. Si >30% del alcance consistentemente se difiere, estás sobreestimando el alcance.',
          'Auditoría de testeabilidad de incrementos: ¿Se puede testear cada incremento de forma independiente en staging? Si no, tus incrementos no son verdaderamente independientes — están acoplados.',
          'Verificación de vinculación con KPIs: ¿Cada release tiene al menos 2 KPIs medibles definidos antes del deployment? Audita tus últimos 3 releases. Si los KPIs se agregaron después del lanzamiento, el proceso está roto.',
          'Prueba de readiness de rollback: Ejecuta un simulacro de rollback para cada release en staging antes de ir a producción. Cronométralo. Si el rollback toma >15 minutos, simplifica tu deployment.',
          'Completitud de análisis post-release: Después de cada release, ¿se realizó una retrospectiva dentro de 7 días? ¿Se documentaron aprendizajes y se alimentaron al plan del próximo incremento? Revisa tu confluence/notion del equipo por evidencia.'
        ]
      },
      tools: {
        en: ['Jira (release reports + velocity)', 'Amplitude (feature adoption tracking)', 'Datadog (error rate monitoring)', 'Confluence (release retrospective templates)'],
        es: ['Jira (reportes de release + velocidad)', 'Amplitude (seguimiento de adopción de funcionalidad)', 'Datadog (monitoreo de tasa de errores)', 'Confluence (plantillas de retrospectiva de release)']
      },
      evidenceExample: {
        en: '"Our team was shipping quarterly mega-releases with 20+ features bundled together. After two rollbacks in a row, we switched to incremental releases: 3-4 features per release, bi-weekly cadence, phased rollouts starting at 5%. Result: zero rollbacks in 6 months, feature adoption increased 40% because users could learn one change at a time, and stakeholder confidence went from 3/10 to 9/10 in satisfaction surveys."',
        es: '"Nuestro equipo enviaba mega-releases trimestrales con 20+ funcionalidades agrupadas. Después de dos rollbacks consecutivos, cambiamos a releases incrementales: 3-4 funcionalidades por release, cadencia quincenal, rollouts graduales comenzando al 5%. Resultado: cero rollbacks en 6 meses, la adopción de funcionalidades aumentó 40% porque los usuarios podían aprender un cambio a la vez, y la confianza de stakeholders pasó de 3/10 a 9/10 en encuestas de satisfacción."'
      }
    },

    // ── 11. QUIZ ─────────────────────────────────────────────────
    quiz: [
      {
        question: {
          en: 'Your PM wants to ship a large feature with 12 sub-features in one release. What is the best approach?',
          es: 'Tu PM quiere enviar una funcionalidad grande con 12 sub-funcionalidades en un solo release. ¿Cuál es el mejor enfoque?'
        },
        options: {
          en: [
            'Agree and ship everything — the PM knows best about business priorities.',
            'Break it into 3 increments: core flow first, then optimizations, then advanced features. Use phased rollouts for each.',
            'Push back and say the team cannot handle it. Defer the entire feature to next quarter.',
            'Ship all 12 features but only enable them via feature flags. Toggle them on one by one over 3 months.'
          ],
          es: [
            'Acepta y envía todo — el PM conoce mejor las prioridades de negocio.',
            'Divídelo en 3 incrementos: flujo central primero, luego optimizaciones, luego funcionalidades avanzadas. Usa rollouts graduales para cada uno.',
            'Rechaza y di que el equipo no puede manejarlo. Difiere toda la funcionalidad al próximo trimestre.',
            'Envía las 12 funcionalidades pero solo habilítalas con feature flags. Actívalas una por una durante 3 meses.'
          ]
        },
        correctIndex: 1,
        explanation: {
          en: 'Breaking into increments reduces risk, enables learning between releases, and allows early user feedback to shape later increments. Feature flags (option D) are useful but do not solve the core problem of deploying too much untested code at once. The best approach combines incremental delivery with phased rollouts.',
          es: 'Dividir en incrementos reduce riesgo, habilita aprendizaje entre releases y permite que feedback temprano de usuarios moldee incrementos posteriores. Feature flags (opción D) son útiles pero no resuelven el problema central de deployar demasiado código no testeado de una vez. El mejor enfoque combina entrega incremental con rollouts graduales.'
        }
      },
      {
        question: {
          en: 'It is Friday at 4pm. Your release passed QA and the team wants to deploy to production. What do you recommend?',
          es: 'Es viernes a las 4pm. Tu release pasó QA y el equipo quiere deployar a producción. ¿Qué recomiendas?'
        },
        options: {
          en: [
            'Deploy now — QA passed, so it is safe.',
            'Wait until Monday morning. If something breaks, the full team is available to respond.',
            'Deploy to 5% of users on Friday, then expand to 100% on Monday if no issues.',
            'Cancel the release entirely and re-test next week.'
          ],
          es: [
            'Deployar ahora — QA pasó, así que es seguro.',
            'Espera hasta el lunes por la mañana. Si algo se rompe, el equipo completo está disponible para responder.',
            'Deployar al 5% de usuarios el viernes, luego expandir al 100% el lunes si no hay problemas.',
            'Cancelar el release completamente y re-testear la próxima semana.'
          ]
        },
        correctIndex: 2,
        explanation: {
          en: 'Option C is the safest: deploy to a small percentage of users (canary release) so you catch issues over the weekend with minimal impact. If everything is stable by Monday, expand. Full Friday deploys risk ruining weekends. Waiting until Monday wastes a ready release. Cancelling is overcautious.',
          es: 'Opción C es la más segura: deployar a un porcentaje pequeño de usuarios (canary release) para detectar problemas durante el fin de semana con impacto mínimo. Si todo está estable para el lunes, expandir. Deploys completos el viernes arriesgan arruinar fines de semana. Esperar al lunes desperdicia un release listo. Cancelar es excesivamente cauteloso.'
        }
      },
      {
        question: {
          en: 'After releasing a new feature, support tickets spike by 300% in the first 24 hours. All tickets are about confusion, not bugs. What does this indicate about the release plan?',
          es: 'Después de lanzar una nueva funcionalidad, los tickets de soporte se disparan 300% en las primeras 24 horas. Todos los tickets son sobre confusión, no bugs. ¿Qué indica esto sobre el plan de release?'
        },
        options: {
          en: [
            'The feature has too many bugs and needs a hotfix.',
            'The release lacked user education: no onboarding flow, no in-app guidance, no release notes sent to users. The UX was clear but the rollout strategy was incomplete.',
            'Users do not want the feature. Roll it back immediately.',
            'The support team was not trained. This is a support problem, not a release planning problem.'
          ],
          es: [
            'La funcionalidad tiene demasiados bugs y necesita un hotfix.',
            'Al release le faltó educación al usuario: sin flujo de onboarding, sin guía in-app, sin notas de release enviadas a usuarios. La UX era clara pero la estrategia de rollout estaba incompleta.',
            'Los usuarios no quieren la funcionalidad. Revierte inmediatamente.',
            'El equipo de soporte no fue entrenado. Es un problema de soporte, no un problema de planificación de release.'
          ]
        },
        correctIndex: 1,
        explanation: {
          en: 'Confusion tickets (not bugs) mean the UX change was not communicated. A complete release plan includes user education: onboarding tooltips, in-app announcements, release notes, and support team briefing. Releasing a feature without communication strategy is like launching a product with no marketing.',
          es: 'Tickets de confusión (no bugs) significan que el cambio UX no fue comunicado. Un plan de release completo incluye educación al usuario: tooltips de onboarding, anuncios in-app, notas de release y briefing al equipo de soporte. Lanzar una funcionalidad sin estrategia de comunicación es como lanzar un producto sin marketing.'
        }
      }
    ],

    // ── 12. REAL EXAMPLE ─────────────────────────────────────────
    realExample: {
      title: {
        en: 'Claro Admin Tool — Bulk Assign Data Packs: Incremental Release Strategy',
        es: 'Herramienta Admin Claro — Asignación Masiva de Paquetes de Datos: Estrategia de Release Incremental'
      },
      description: {
        en: 'The Claro internal admin tool needed a "Bulk Assign Data Packs" feature for operations managers handling 500+ accounts. Instead of building the entire feature in one release, the team used incremental delivery:\n\n**MVP Release (Sprint 3-4):** Manual CSV upload to assign data packs to up to 50 accounts. Basic validation (duplicate check, format errors). Simple success/failure summary. Rolled out to 3 internal power users for feedback.\n\n**Increment 2 — Optimization (Sprint 5-6):** Increased limit to 500 accounts. Added real-time progress bar. Inline error correction (highlight row, suggest fix). Rolled out to 20% of admin users.\n\n**Increment 3 — Bulk Automation (Sprint 7-8):** Scheduled bulk assignments (set date/time). Template-based assignments (save common configurations). Audit log for compliance. Full rollout to 100%.\n\n**Phased Rollout:** Each increment started at 20% of target users with 48-hour monitoring before expanding. Rollback was tested in staging before each deployment.\n\n**KPI Monitoring:** Time-to-assign dropped from 45 min (manual) → 3 min (bulk). Error rate: 12% → 0.8%. User satisfaction: 4.1 → 4.8/5. Zero rollbacks across all 3 increments.',
        es: 'La herramienta admin interna de Claro necesitaba una funcionalidad de "Asignación Masiva de Paquetes de Datos" para gerentes de operaciones manejando 500+ cuentas. En lugar de construir la funcionalidad completa en un solo release, el equipo usó entrega incremental:\n\n**Release MVP (Sprint 3-4):** Carga manual de CSV para asignar paquetes de datos a hasta 50 cuentas. Validación básica (chequeo de duplicados, errores de formato). Resumen simple de éxito/fallo. Rollout a 3 power users internos para feedback.\n\n**Incremento 2 — Optimización (Sprint 5-6):** Límite aumentado a 500 cuentas. Barra de progreso en tiempo real. Corrección de errores inline (resaltar fila, sugerir corrección). Rollout al 20% de usuarios admin.\n\n**Incremento 3 — Automatización Masiva (Sprint 7-8):** Asignaciones masivas programadas (establecer fecha/hora). Asignaciones basadas en plantillas (guardar configuraciones comunes). Log de auditoría para compliance. Rollout completo al 100%.\n\n**Rollout por Fases:** Cada incremento comenzó al 20% de usuarios objetivo con monitoreo de 48 horas antes de expandir. El rollback se testeó en staging antes de cada deployment.\n\n**Monitoreo de KPIs:** Tiempo de asignación bajó de 45 min (manual) → 3 min (masivo). Tasa de error: 12% → 0.8%. Satisfacción de usuario: 4.1 → 4.8/5. Cero rollbacks en los 3 incrementos.'
      },
      company: 'Claro (Case Study)'
    }
  }
};
