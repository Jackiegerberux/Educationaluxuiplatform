import { Topic } from './types';

export const productRoadmappingLesson: Topic = {
  id: 'product-roadmapping',
  title: { en: 'Product Roadmapping', es: 'Roadmapping de Producto' },
  description: {
    en: 'Strategic planning and communication of product direction through outcome-based roadmaps that align teams, reduce stakeholder conflict, and connect UX decisions to business goals.',
    es: 'Planificación estratégica y comunicación de la dirección del producto a través de roadmaps basados en resultados que alinean equipos, reducen conflicto de stakeholders y conectan decisiones UX con objetivos de negocio.'
  },
  status: 'intermediate',
  timeEstimate: '2h',
  reference: { en: 'Inspired — Marty Cagan (SVPG)', es: 'Inspired — Marty Cagan (SVPG)' },
  referenceLink: 'https://www.svpg.com/inspired-how-to-create-products-customers-love/',
  content: {
    definition: {
      en: 'A product roadmap is a strategic communication tool that articulates the direction, priorities, and progress of a product over time. Unlike a backlog (a prioritized list of work items), a roadmap communicates WHY certain themes are being pursued, HOW they connect to business and user outcomes, and WHEN they are expected to deliver value. Modern roadmaps are outcome-oriented (focused on problems to solve, not features to ship), time-horizon-based (Now / Next / Later instead of fixed dates), and continuously updated as the team learns. A roadmap is NOT a project plan — it is an alignment artifact that helps everyone from engineering to the CEO understand what the product team is betting on and why.',
      es: 'Un roadmap de producto es una herramienta de comunicación estratégica que articula la dirección, prioridades y progreso de un producto a lo largo del tiempo. A diferencia de un backlog (una lista priorizada de items de trabajo), un roadmap comunica POR QUÉ se persiguen ciertos temas, CÓMO se conectan con resultados de negocio y usuario, y CUÁNDO se espera que entreguen valor. Los roadmaps modernos están orientados a resultados (enfocados en problemas a resolver, no features a lanzar), basados en horizonte temporal (Ahora / Siguiente / Después en lugar de fechas fijas), y se actualizan continuamente a medida que el equipo aprende. Un roadmap NO es un plan de proyecto — es un artefacto de alineación que ayuda a todos, desde ingeniería hasta el CEO, a entender en qué está apostando el equipo de producto y por qué.'
    },
    why: {
      en: 'Without a roadmap, product development becomes reactive — the team builds whatever the loudest stakeholder asks for. A roadmap aligns engineering, design, marketing, and leadership around a shared direction. It prevents the "feature factory" trap where teams ship features without measuring impact. It connects UX research findings to strategic bets: "We discovered X user problem, so we are prioritizing Y theme this quarter." It reduces stakeholder conflict because everyone can see the rationale behind prioritization decisions. And it creates a living document that adapts as you learn — not a contract carved in stone.',
      es: 'Sin un roadmap, el desarrollo de producto se vuelve reactivo — el equipo construye lo que sea que el stakeholder más ruidoso pida. Un roadmap alinea ingeniería, diseño, marketing y liderazgo alrededor de una dirección compartida. Previene la trampa de "fábrica de features" donde los equipos lanzan funcionalidades sin medir impacto. Conecta hallazgos de investigación UX con apuestas estratégicas: "Descubrimos el problema X del usuario, así que priorizamos el tema Y este trimestre." Reduce conflicto de stakeholders porque todos pueden ver la lógica detrás de decisiones de priorización. Y crea un documento vivo que se adapta conforme aprendes — no un contrato tallado en piedra.'
    },
    keyPrinciples: {
      en: [
        'Outcomes over outputs: Define what user/business problem you are solving, not what feature you are building. "Reduce onboarding drop-off by 30%" is better than "Build a new tutorial."',
        'Flexibility over fixed dates: Use time horizons (Now / Next / Later) instead of hard deadlines. The further out, the less certain — and that is OK. Roadmaps should reflect reality, not wishful thinking.',
        'Themes over features: Group initiatives into strategic themes like "Reduce Friction" or "Expand to Enterprise." Themes communicate direction without over-committing to specific implementations.',
        'Alignment with KPIs: Every roadmap initiative should connect to a measurable metric. If you cannot tie an initiative to a KPI, question whether it belongs on the roadmap at all.',
        'Transparency: Share the roadmap widely — not just with leadership. When engineers, designers, and support teams understand the strategy, they make better decisions independently.',
        'Continuous reprioritization: A roadmap is not a one-time exercise. Review and adjust quarterly (at minimum). Kill initiatives that no longer align with evidence. Promote validated ideas that emerge from sprints and research.'
      ],
      es: [
        'Resultados sobre outputs: Define qué problema de usuario/negocio estás resolviendo, no qué feature estás construyendo. "Reducir abandono de onboarding en 30%" es mejor que "Construir un nuevo tutorial."',
        'Flexibilidad sobre fechas fijas: Usa horizontes de tiempo (Ahora / Siguiente / Después) en lugar de deadlines fijos. Mientras más lejos, menos certeza — y está bien. Los roadmaps deben reflejar realidad, no pensamiento deseado.',
        'Temas sobre features: Agrupa iniciativas en temas estratégicos como "Reducir Fricción" o "Expandir a Enterprise." Los temas comunican dirección sin sobrecomprometerse con implementaciones específicas.',
        'Alineación con KPIs: Cada iniciativa del roadmap debe conectar con una métrica medible. Si no puedes vincular una iniciativa a un KPI, cuestiona si pertenece al roadmap.',
        'Transparencia: Comparte el roadmap ampliamente — no solo con liderazgo. Cuando ingenieros, diseñadores y equipos de soporte entienden la estrategia, toman mejores decisiones independientemente.',
        'Repriorización continua: Un roadmap no es un ejercicio de una sola vez. Revisa y ajusta trimestralmente (mínimo). Elimina iniciativas que ya no se alinean con evidencia. Promueve ideas validadas que emergen de sprints e investigación.'
      ]
    },
    howToApply: {
      steps: [
        {
          name: { en: 'Step 1: Define Product Goals', es: 'Paso 1: Definir Objetivos de Producto' },
          description: {
            en: 'Start with 2-3 product goals for the quarter or half-year. These should be outcome-based and measurable. Example: "Increase trial-to-paid conversion from 12% to 18%" or "Reduce support ticket volume for onboarding by 40%." Goals come from business strategy + user research insights. Connect to: business-goals-kpis lesson.',
            es: 'Comienza con 2-3 objetivos de producto para el trimestre o semestre. Estos deben ser basados en resultados y medibles. Ejemplo: "Aumentar conversión trial-a-pago de 12% a 18%" o "Reducir volumen de tickets de soporte para onboarding en 40%." Los objetivos vienen de estrategia de negocio + insights de investigación de usuario. Conecta con: lección business-goals-kpis.'
          }
        },
        {
          name: { en: 'Step 2: Identify Opportunity Themes', es: 'Paso 2: Identificar Temas de Oportunidad' },
          description: {
            en: 'Group related problems and opportunities into themes. A theme is NOT a feature — it is a strategic area of investment. Example themes: "Simplify Onboarding," "Enterprise Self-Service," "Mobile Parity." Each theme should map to at least one product goal. Use Teresa Torres\' Opportunity Solution Trees to discover themes from research.',
            es: 'Agrupa problemas y oportunidades relacionados en temas. Un tema NO es un feature — es un área estratégica de inversión. Ejemplos de temas: "Simplificar Onboarding," "Autoservicio Enterprise," "Paridad Móvil." Cada tema debe mapearse a al menos un objetivo de producto. Usa los Árboles de Oportunidad-Solución de Teresa Torres para descubrir temas desde investigación.'
          }
        },
        {
          name: { en: 'Step 3: Link Initiatives to KPIs', es: 'Paso 3: Vincular Iniciativas a KPIs' },
          description: {
            en: 'For each initiative within a theme, define the target KPI. Example: Theme = "Simplify Onboarding" → Initiative = "Redesign step 3 of signup" → KPI = "Reduce step-3 drop-off from 45% to 20%." If you cannot name a KPI, the initiative is not yet defined enough. Connect to: business-goals-kpis lesson.',
            es: 'Para cada iniciativa dentro de un tema, define el KPI objetivo. Ejemplo: Tema = "Simplificar Onboarding" → Iniciativa = "Rediseñar paso 3 de registro" → KPI = "Reducir abandono en paso 3 de 45% a 20%." Si no puedes nombrar un KPI, la iniciativa aún no está suficientemente definida. Conecta con: lección business-goals-kpis.'
          }
        },
        {
          name: { en: 'Step 4: Prioritize Themes (RICE / Impact-Effort)', es: 'Paso 4: Priorizar Temas (RICE / Impacto-Esfuerzo)' },
          description: {
            en: 'Use a scoring framework to compare initiatives objectively. RICE: Reach × Impact × Confidence ÷ Effort. Or use simpler Impact (1-5) vs Effort (1-5) matrix. High impact + low effort = do first. Low impact + high effort = cut or defer. The key is making prioritization rationale visible and shareable.',
            es: 'Usa un framework de scoring para comparar iniciativas objetivamente. RICE: Alcance × Impacto × Confianza ÷ Esfuerzo. O usa una matriz más simple de Impacto (1-5) vs Esfuerzo (1-5). Alto impacto + bajo esfuerzo = hacer primero. Bajo impacto + alto esfuerzo = cortar o diferir. La clave es hacer la lógica de priorización visible y compartible.'
          }
        },
        {
          name: { en: 'Step 5: Define Now / Next / Later', es: 'Paso 5: Definir Ahora / Siguiente / Después' },
          description: {
            en: 'Assign each initiative to a time horizon. NOW = currently in progress or starting this sprint (high confidence, defined scope). NEXT = planned for next quarter (medium confidence, scope being refined). LATER = on the radar but not yet prioritized (low confidence, exploratory). This replaces fixed dates with honest confidence levels.',
            es: 'Asigna cada iniciativa a un horizonte temporal. AHORA = actualmente en progreso o comenzando este sprint (alta confianza, alcance definido). SIGUIENTE = planeado para próximo trimestre (confianza media, alcance refinándose). DESPUÉS = en el radar pero aún no priorizado (baja confianza, exploratorio). Esto reemplaza fechas fijas con niveles de confianza honestos.'
          }
        },
        {
          name: { en: 'Step 6: Communicate the Roadmap', es: 'Paso 6: Comunicar el Roadmap' },
          description: {
            en: 'Create different views for different audiences. Leadership: themes + KPIs + timeline. Engineering: initiatives + dependencies + scope. Design: user problems + research backing + validation plan. Share the roadmap in a quarterly review, and keep it visible (Notion, Miro, Productboard). The roadmap is a living artifact, not a PDF.',
            es: 'Crea diferentes vistas para diferentes audiencias. Liderazgo: temas + KPIs + línea de tiempo. Ingeniería: iniciativas + dependencias + alcance. Diseño: problemas de usuario + respaldo de investigación + plan de validación. Comparte el roadmap en una revisión trimestral, y mantenlo visible (Notion, Miro, Productboard). El roadmap es un artefacto vivo, no un PDF.'
          }
        },
        {
          name: { en: 'Step 7: Sync Roadmap with Backlog', es: 'Paso 7: Sincronizar Roadmap con Backlog' },
          description: {
            en: 'The roadmap feeds the backlog, not the other way around. Each "Now" initiative should decompose into user stories and sprint tickets. Each story should trace back to a roadmap theme and KPI. When a sprint finishes, update the roadmap with what was learned. Connect to: scrum-for-designers and user-stories-and-requirements lessons.',
            es: 'El roadmap alimenta el backlog, no al revés. Cada iniciativa "Ahora" debe descomponerse en user stories y tickets de sprint. Cada story debe rastrearse a un tema del roadmap y KPI. Cuando un sprint termina, actualiza el roadmap con lo aprendido. Conecta con: lecciones de scrum-for-designers y user-stories-and-requirements.'
          }
        }
      ]
    },
    commonMistakes: {
      en: [
        'Feature factory roadmap: Listing features ("Add dark mode," "Build chat") instead of outcomes ("Increase session duration by 20%"). Features are solutions — roadmaps should communicate the problems and goals, not prescribe implementations.',
        'Date-locked roadmap: Promising "Feature X ships March 15" when you have not started discovery yet. Fixed dates create false precision and breed distrust when inevitably missed. Use confidence-based time horizons instead.',
        'No metric alignment: An initiative that cannot be measured cannot be prioritized or validated. If the roadmap has items with no KPI, it is a wish list, not a strategy.',
        'Ignoring technical debt: Roadmaps that only contain user-facing features ignore the infrastructure work that enables future velocity. Allocate 15-25% of capacity to tech debt and platform health.',
        'Roadmap created once per year: Annual roadmaps become fiction by Q2. Treat the roadmap as a living document that is reviewed and updated at least quarterly, incorporating new research and sprint learnings.'
      ],
      es: [
        'Roadmap de fábrica de features: Listar features ("Agregar modo oscuro," "Construir chat") en lugar de resultados ("Aumentar duración de sesión en 20%"). Los features son soluciones — los roadmaps deben comunicar los problemas y objetivos, no prescribir implementaciones.',
        'Roadmap con fechas fijas: Prometer "Feature X se lanza el 15 de marzo" cuando no has comenzado discovery. Las fechas fijas crean precisión falsa y generan desconfianza cuando inevitablemente no se cumplen. Usa horizontes temporales basados en confianza en su lugar.',
        'Sin alineación de métricas: Una iniciativa que no puede medirse no puede priorizarse ni validarse. Si el roadmap tiene items sin KPI, es una lista de deseos, no una estrategia.',
        'Ignorar deuda técnica: Roadmaps que solo contienen features visibles para el usuario ignoran el trabajo de infraestructura que habilita velocidad futura. Asigna 15-25% de capacidad a deuda técnica y salud de la plataforma.',
        'Roadmap creado una vez al año: Los roadmaps anuales se convierten en ficción para Q2. Trata el roadmap como un documento vivo que se revisa y actualiza al menos trimestralmente, incorporando nueva investigación y aprendizajes de sprints.'
      ]
    },
    deliverables: {
      description: {
        en: 'Artifacts that make your roadmap actionable and communicable across teams.',
        es: 'Artefactos que hacen tu roadmap accionable y comunicable entre equipos.'
      },
      items: {
        en: [
          'Visual roadmap board: Now / Next / Later layout showing themes, initiatives, and confidence levels. Built in Miro, FigJam, Notion, or Productboard.',
          'Prioritization matrix: RICE scores or Impact/Effort grid showing why initiatives are ranked the way they are. Sharable with stakeholders to explain decisions.',
          'Initiative briefs: 1-page documents per initiative covering: problem, target KPI, proposed approach, design sprint findings (if applicable), and dependencies.',
          'KPI alignment table: A table mapping every roadmap initiative to its target metric, current baseline, and success threshold. Makes it impossible to ship without measurement.'
        ],
        es: [
          'Tablero de roadmap visual: Layout Ahora / Siguiente / Después mostrando temas, iniciativas y niveles de confianza. Construido en Miro, FigJam, Notion o Productboard.',
          'Matriz de priorización: Scores RICE o grid de Impacto/Esfuerzo mostrando por qué las iniciativas están clasificadas como están. Compartible con stakeholders para explicar decisiones.',
          'Briefs de iniciativa: Documentos de 1 página por iniciativa cubriendo: problema, KPI objetivo, enfoque propuesto, hallazgos de design sprint (si aplica) y dependencias.',
          'Tabla de alineación de KPIs: Una tabla mapeando cada iniciativa del roadmap a su métrica objetivo, baseline actual y umbral de éxito. Hace imposible lanzar sin medición.'
        ]
      }
    },
    practicalTools: {
      design: {
        en: ['Miro (visual roadmapping, workshops)', 'FigJam (collaborative layout)', 'Whimsical (diagrams, mind maps)'],
        es: ['Miro (roadmapping visual, talleres)', 'FigJam (layout colaborativo)', 'Whimsical (diagramas, mapas mentales)']
      },
      management: {
        en: ['Productboard (outcome-based roadmaps)', 'Linear (initiative tracking)', 'Jira (sprint-level execution)', 'Notion (documentation, roadmap pages)'],
        es: ['Productboard (roadmaps basados en resultados)', 'Linear (seguimiento de iniciativas)', 'Jira (ejecución a nivel de sprint)', 'Notion (documentación, páginas de roadmap)']
      },
      handoff: {
        en: ['Google Slides / Pitch (stakeholder presentations)', 'Loom (async roadmap walkthroughs)', 'Confluence (team documentation)'],
        es: ['Google Slides / Pitch (presentaciones a stakeholders)', 'Loom (walkthroughs async de roadmap)', 'Confluence (documentación de equipo)']
      }
    },
    aiInPractice: {
      description: {
        en: 'AI can help you convert raw feature lists into strategic themes, generate prioritization frameworks, and draft stakeholder narratives.',
        es: 'La IA puede ayudarte a convertir listas de features en temas estratégicos, generar frameworks de priorización y redactar narrativas para stakeholders.'
      },
      prompts: [
        {
          tool: 'ChatGPT',
          context: { en: 'Convert features into outcome-based themes', es: 'Convertir features en temas basados en resultados' },
          prompt: {
            en: 'I have a list of feature requests from stakeholders: [paste list]. Reframe each feature as an outcome-based roadmap theme. For each theme, suggest: (1) the user problem it solves, (2) a measurable KPI, (3) a time horizon recommendation (Now / Next / Later). Group related features into themes where possible.',
            es: 'Tengo una lista de solicitudes de features de stakeholders: [pegar lista]. Re-enmarca cada feature como un tema de roadmap basado en resultados. Para cada tema, sugiere: (1) el problema de usuario que resuelve, (2) un KPI medible, (3) una recomendación de horizonte temporal (Ahora / Siguiente / Después). Agrupa features relacionados en temas donde sea posible.'
          }
        },
        {
          tool: 'Claude',
          context: { en: 'Generate RICE scoring table', es: 'Generar tabla de scoring RICE' },
          prompt: {
            en: 'I need to prioritize these product initiatives: [list initiatives]. Create a RICE scoring table with columns: Initiative, Reach (users/quarter), Impact (1-3), Confidence (%), Effort (person-weeks), RICE Score. Estimate realistic values based on a B2B SaaS product with 10,000 MAU. Sort by RICE score descending.',
            es: 'Necesito priorizar estas iniciativas de producto: [listar iniciativas]. Crea una tabla de scoring RICE con columnas: Iniciativa, Alcance (usuarios/trimestre), Impacto (1-3), Confianza (%), Esfuerzo (persona-semanas), Score RICE. Estima valores realistas basados en un producto B2B SaaS con 10,000 MAU. Ordena por score RICE descendente.'
          }
        },
        {
          tool: 'ChatGPT',
          context: { en: 'Create stakeholder presentation narrative', es: 'Crear narrativa de presentación a stakeholders' },
          prompt: {
            en: 'I am presenting our Q3 product roadmap to leadership. Our goals are: [list goals]. Our top 3 themes are: [list themes]. For each theme, write a 2-sentence narrative that explains: (1) what user/business problem it addresses, (2) what evidence supports it, (3) what we expect to learn or achieve. Tone: confident but honest about unknowns.',
            es: 'Estoy presentando nuestro roadmap de producto Q3 a liderazgo. Nuestros objetivos son: [listar objetivos]. Nuestros 3 temas principales son: [listar temas]. Para cada tema, escribe una narrativa de 2 oraciones que explique: (1) qué problema de usuario/negocio aborda, (2) qué evidencia lo respalda, (3) qué esperamos aprender o lograr. Tono: confiado pero honesto sobre incertidumbres.'
          }
        }
      ]
    },
    howToValidate: {
      what: {
        en: 'Validate that your roadmap is genuinely strategic, aligned with evidence, and driving measurable outcomes — not just a feature wish list disguised as strategy.',
        es: 'Valida que tu roadmap es genuinamente estratégico, alineado con evidencia y generando resultados medibles — no solo una lista de deseos de features disfrazada de estrategia.'
      },
      methods: {
        en: [
          'KPI linkage check: Can you point to a specific metric for every initiative on the roadmap? If not, the initiative is not validated.',
          'Adaptability test: Has your roadmap changed in the last 90 days based on new learning? If not, you are either not learning or not adapting.',
          'Stakeholder alignment score: Survey key stakeholders — "On a scale of 1-5, how clear is our product direction?" Track this over time.',
          'Prioritization transparency: Can any team member explain WHY initiative A is prioritized over B? If not, your rationale is not visible enough.',
          'Sprint-to-roadmap traceability: Can each sprint ticket trace back to a roadmap initiative and KPI? If not, your backlog is disconnected from strategy.'
        ],
        es: [
          'Verificación de vinculación KPI: ¿Puedes señalar una métrica específica para cada iniciativa en el roadmap? Si no, la iniciativa no está validada.',
          'Prueba de adaptabilidad: ¿Tu roadmap ha cambiado en los últimos 90 días basado en nuevo aprendizaje? Si no, o no estás aprendiendo o no estás adaptando.',
          'Score de alineación de stakeholders: Encuesta stakeholders clave — "En escala de 1-5, ¿qué tan clara es nuestra dirección de producto?" Rastrea esto en el tiempo.',
          'Transparencia de priorización: ¿Cualquier miembro del equipo puede explicar POR QUÉ la iniciativa A está priorizada sobre B? Si no, tu lógica no es suficientemente visible.',
          'Trazabilidad sprint-a-roadmap: ¿Cada ticket de sprint puede rastrearse a una iniciativa del roadmap y KPI? Si no, tu backlog está desconectado de la estrategia.'
        ]
      },
      tools: {
        en: ['Productboard (outcome tracking)', 'Google Sheets (KPI alignment table)', 'Notion (roadmap changelog)', 'Jira (sprint-to-initiative linking)'],
        es: ['Productboard (seguimiento de resultados)', 'Google Sheets (tabla de alineación KPI)', 'Notion (changelog de roadmap)', 'Jira (vinculación sprint-a-iniciativa)']
      },
      evidenceExample: {
        en: '"Our Q2 roadmap had 8 initiatives. After quarterly review: 3 were shipped and hit target KPIs, 2 were deprioritized based on sprint testing results (we learned users did not want what we assumed), 2 were refined with new scope, and 1 was killed because the competitive landscape changed. We updated stakeholders with a 15-minute Loom video explaining each decision. Stakeholder alignment score improved from 2.8 to 4.1."',
        es: '"Nuestro roadmap Q2 tenía 8 iniciativas. Después de la revisión trimestral: 3 se lanzaron y alcanzaron KPIs objetivo, 2 se despriorizaron basado en resultados de testing de sprint (aprendimos que usuarios no querían lo que asumíamos), 2 se refinaron con nuevo alcance, y 1 se eliminó porque el panorama competitivo cambió. Actualizamos stakeholders con un video Loom de 15 minutos explicando cada decisión. Score de alineación de stakeholders mejoró de 2.8 a 4.1."'
      }
    },
    quiz: [
      {
        question: {
          en: 'Your PM asks you to add "Build a chatbot" to the roadmap. How should you respond?',
          es: 'Tu PM te pide agregar "Construir un chatbot" al roadmap. ¿Cómo deberías responder?'
        },
        options: {
          en: [
            'Add it immediately — the PM knows what users need.',
            'Ask: "What user problem does this solve? What metric will it improve?" Then frame it as an outcome-based theme.',
            'Reject it — chatbots are a trend, not a strategy.',
            'Add it to the "Later" section to avoid conflict.'
          ],
          es: [
            'Agregarlo inmediatamente — el PM sabe lo que los usuarios necesitan.',
            'Preguntar: "¿Qué problema de usuario resuelve? ¿Qué métrica mejorará?" Luego enmarcarlo como un tema basado en resultados.',
            'Rechazarlo — los chatbots son una tendencia, no una estrategia.',
            'Agregarlo a la sección "Después" para evitar conflicto.'
          ]
        },
        correctIndex: 1,
        explanation: {
          en: '"Build a chatbot" is a solution, not a problem. The correct approach is to reframe it: "Reduce support ticket volume by enabling self-service" — the chatbot might be one solution, but there could be better ones. Every roadmap initiative must connect to a measurable outcome.',
          es: '"Construir un chatbot" es una solución, no un problema. El enfoque correcto es re-enmarcarlo: "Reducir volumen de tickets de soporte habilitando autoservicio" — el chatbot podría ser una solución, pero podría haber mejores. Cada iniciativa del roadmap debe conectar con un resultado medible.'
        }
      },
      {
        question: {
          en: 'Your CEO wants to see exact ship dates for everything on the Q3 roadmap. What do you do?',
          es: 'Tu CEO quiere ver fechas de lanzamiento exactas para todo en el roadmap Q3. ¿Qué haces?'
        },
        options: {
          en: [
            'Provide exact dates — leadership needs certainty.',
            'Explain that Now / Next / Later with confidence levels is more honest and prevents date-driven scope cutting.',
            'Remove dates entirely — roadmaps should never have timelines.',
            'Add dates but mark them as "aspirational."'
          ],
          es: [
            'Dar fechas exactas — liderazgo necesita certeza.',
            'Explicar que Ahora / Siguiente / Después con niveles de confianza es más honesto y previene recortes de alcance por fechas.',
            'Eliminar fechas por completo — los roadmaps nunca deben tener líneas de tiempo.',
            'Agregar fechas pero marcarlas como "aspiracionales."'
          ]
        },
        correctIndex: 1,
        explanation: {
          en: 'Fixed dates create false precision. "Now" items have high confidence because scope is defined. "Later" items are exploratory — committing to dates is dishonest. Explain that time horizons protect the team from cutting quality to hit arbitrary deadlines. If the CEO needs a date for a specific initiative, that is a scoping conversation — not a roadmap problem.',
          es: 'Las fechas fijas crean precisión falsa. Items "Ahora" tienen alta confianza porque el alcance está definido. Items "Después" son exploratorios — comprometerse con fechas es deshonesto. Explica que los horizontes temporales protegen al equipo de recortar calidad para cumplir deadlines arbitrarios. Si el CEO necesita fecha para una iniciativa específica, eso es una conversación de scoping — no un problema de roadmap.'
        }
      },
      {
        question: {
          en: 'After a Design Sprint, you validated that a new checkout flow would reduce cart abandonment by 25%. What happens on the roadmap?',
          es: 'Después de un Design Sprint, validaste que un nuevo flujo de checkout reduciría el abandono de carrito en 25%. ¿Qué pasa en el roadmap?'
        },
        options: {
          en: [
            'The sprint output replaces the entire roadmap — we should only build validated ideas.',
            'The validated concept moves to "Now" with the KPI target, and the sprint findings inform the initiative brief and user stories.',
            'Add it to the backlog directly — roadmaps are for strategic themes, not sprint outputs.',
            'Wait for the next quarterly planning to add it.'
          ],
          es: [
            'El resultado del sprint reemplaza todo el roadmap — solo deberíamos construir ideas validadas.',
            'El concepto validado se mueve a "Ahora" con el KPI objetivo, y los hallazgos del sprint informan el brief de iniciativa y user stories.',
            'Agregarlo al backlog directamente — los roadmaps son para temas estratégicos, no outputs de sprint.',
            'Esperar al próximo planning trimestral para agregarlo.'
          ]
        },
        correctIndex: 1,
        explanation: {
          en: 'Sprint outputs should flow into the roadmap as validated initiatives. The sprint gave you evidence (user tests, prototype), a KPI target (25% reduction in cart abandonment), and a direction. This moves the initiative from "Next" or "Later" to "Now" because confidence is high. The sprint findings become the initiative brief, and the prototype decomposes into user stories for the backlog.',
          es: 'Los outputs del sprint deben fluir al roadmap como iniciativas validadas. El sprint te dio evidencia (pruebas de usuario, prototipo), un KPI objetivo (25% reducción en abandono de carrito) y una dirección. Esto mueve la iniciativa de "Siguiente" o "Después" a "Ahora" porque la confianza es alta. Los hallazgos del sprint se convierten en el brief de iniciativa, y el prototipo se descompone en user stories para el backlog.'
        }
      }
    ],
    realExample: {
      title: {
        en: 'Claro Admin Tool — Scaling Data Pack Features',
        es: 'Herramienta Admin de Claro — Escalando Features de Paquetes de Datos'
      },
      description: {
        en: 'Claro needed to scale their admin tool for managing data packs across 6 countries. The product team was drowning in feature requests from country managers. They implemented outcome-based roadmapping: KPI Goal: Reduce data pack configuration time from 4 hours to 30 minutes. Themes: (1) "Bulk Operations" — country managers configure 50+ packs at once instead of one-by-one. (2) "Template System" — create reusable pack templates across countries. (3) "Self-Service Analytics" — country managers check pack performance without requesting reports. Prioritization (RICE): Bulk Operations scored highest (3,200 users affected, high confidence from research). Now / Next / Later: NOW = Bulk Operations (sprint already validated prototype). NEXT = Template System (discovery sprint planned). LATER = Self-Service Analytics (needs data infrastructure work first). Result: Bulk Operations shipped in 6 weeks. Configuration time dropped to 45 minutes (target was 30 — close enough to continue). Template System entered discovery next quarter. Stakeholder satisfaction with product direction increased from 2.1/5 to 4.3/5.',
        es: 'Claro necesitaba escalar su herramienta admin para gestionar paquetes de datos en 6 países. El equipo de producto estaba ahogándose en solicitudes de features de gerentes de país. Implementaron roadmapping basado en resultados: KPI Objetivo: Reducir tiempo de configuración de paquetes de datos de 4 horas a 30 minutos. Temas: (1) "Operaciones Masivas" — gerentes de país configuran 50+ paquetes a la vez en lugar de uno por uno. (2) "Sistema de Plantillas" — crear plantillas de paquetes reutilizables entre países. (3) "Analytics Self-Service" — gerentes de país verifican rendimiento de paquetes sin solicitar reportes. Priorización (RICE): Operaciones Masivas obtuvo el score más alto (3,200 usuarios afectados, alta confianza de investigación). Ahora / Siguiente / Después: AHORA = Operaciones Masivas (sprint ya validó prototipo). SIGUIENTE = Sistema de Plantillas (discovery sprint planeado). DESPUÉS = Analytics Self-Service (necesita trabajo de infraestructura de datos primero). Resultado: Operaciones Masivas se lanzó en 6 semanas. Tiempo de configuración bajó a 45 minutos (objetivo era 30 — lo suficientemente cerca para continuar). Sistema de Plantillas entró en discovery el siguiente trimestre. Satisfacción de stakeholders con dirección de producto aumentó de 2.1/5 a 4.3/5.'
      },
      company: 'Claro (Case Study)'
    }
  }
};