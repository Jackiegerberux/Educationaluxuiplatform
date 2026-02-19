import { Topic } from './types';

export const heuristicAnalysisLesson: Topic = {
  id: 'heuristic-analysis',
  title: { en: 'Heuristic Analysis', es: 'Análisis Heurístico' },
  description: {
    en: 'Master the professional methodology for evaluating interfaces using Nielsen\'s heuristics, severity rating scales, structured checklists, and deliverable reports.',
    es: 'Domina la metodología profesional para evaluar interfaces usando las heurísticas de Nielsen, escalas de severidad, checklists estructurados e informes entregables.'
  },
  status: 'advanced',
  timeEstimate: '3h',
  reference: { en: 'How to Conduct a Heuristic Evaluation - NN/g', es: 'Cómo Conducir una Evaluación Heurística - NN/g' },
  referenceLink: 'https://www.nngroup.com/articles/how-to-conduct-a-heuristic-evaluation/',
  content: {
    definition: {
      en: 'A heuristic analysis (or heuristic evaluation) is a usability inspection method where evaluators examine an interface against a set of established usability principles — the "heuristics." Unlike usability testing with real users, it relies on expert judgment to identify potential usability problems. Developed by Jakob Nielsen and Rolf Molich in 1990, it remains the most cost-effective usability method: 3-5 evaluators can find 75% of usability issues in a single session, without needing to recruit participants or set up a lab.',
      es: 'Un análisis heurístico (o evaluación heurística) es un método de inspección de usabilidad donde evaluadores examinan una interfaz contra un conjunto de principios de usabilidad establecidos — las "heurísticas." A diferencia de las pruebas de usabilidad con usuarios reales, se basa en el juicio experto para identificar problemas potenciales. Desarrollado por Jakob Nielsen y Rolf Molich en 1990, sigue siendo el método de usabilidad más rentable: 3-5 evaluadores pueden encontrar el 75% de los problemas en una sola sesión, sin necesidad de reclutar participantes ni montar un laboratorio.'
    },
    why: {
      en: 'Heuristic analysis is the fastest way to find usability problems before users ever encounter them. It requires no participants, no scheduling, and no special equipment — just trained eyes and a systematic checklist. It is particularly valuable early in the design process (wireframes, prototypes) where fixing issues costs 10-100x less than fixing them after launch. Companies like Google, Microsoft, and Apple use heuristic evaluation as a standard gate in their design review process. A well-structured heuristic report is also one of the most impressive deliverables in a UX portfolio.',
      es: 'El análisis heurístico es la forma más rápida de encontrar problemas de usabilidad antes de que los usuarios los encuentren. No requiere participantes, ni agenda, ni equipos especiales — solo ojos entrenados y un checklist sistemático. Es particularmente valioso en etapas tempranas del diseño (wireframes, prototipos) donde arreglar problemas cuesta 10-100x menos que después del lanzamiento. Empresas como Google, Microsoft y Apple usan la evaluación heurística como gate estándar en su proceso de revisión de diseño. Un informe heurístico bien estructurado es también uno de los entregables más impresionantes en un portafolio UX.'
    },
    keyPrinciples: {
      en: [
        'The 10 Heuristics Framework: Nielsen\'s 10 heuristics are the gold standard, covering visibility of status, real-world match, user control, consistency, error prevention, recognition over recall, flexibility, aesthetic minimalism, error recovery, and help/documentation.',
        'Severity Rating Scale (0-4): Each problem gets a severity score — 0 (not a problem), 1 (cosmetic), 2 (minor), 3 (major), 4 (catastrophic/usability catastrophe). This enables prioritization by impact.',
        'Multiple Evaluators: A single evaluator finds only ~35% of problems. Three evaluators find ~60%. Five evaluators find ~75%. Beyond 5, diminishing returns kick in.',
        'Independent Evaluation First: Each evaluator must inspect the interface independently BEFORE discussing findings. This prevents groupthink and anchoring bias.',
        'Task-Based Inspection: Evaluators should walk through specific user tasks (e.g., "complete checkout", "reset password") rather than randomly browsing. This mirrors real usage.',
        'Document Everything: Every finding needs a screenshot, the violated heuristic, the severity rating, the location in the interface, and a specific recommendation — not just "this is bad."',
        'Aggregation Session: After individual evaluations, the team meets to merge findings, resolve severity disagreements (using the mean score), and deduplicate issues.',
        'Heuristics are NOT rules: They are guidelines. Context matters. Sometimes violating a heuristic is the right design choice — but you must justify why.'
      ],
      es: [
        'Marco de las 10 Heurísticas: Las 10 heurísticas de Nielsen son el estándar de oro, cubriendo visibilidad del estado, correspondencia con el mundo real, control del usuario, consistencia, prevención de errores, reconocimiento sobre recuerdo, flexibilidad, minimalismo estético, recuperación de errores y ayuda/documentación.',
        'Escala de Severidad (0-4): Cada problema recibe un puntaje — 0 (no es problema), 1 (cosmético), 2 (menor), 3 (mayor), 4 (catastrófico). Esto permite priorizar por impacto.',
        'Múltiples Evaluadores: Un solo evaluador encuentra solo ~35% de los problemas. Tres encuentran ~60%. Cinco encuentran ~75%. Más de 5 tiene rendimientos decrecientes.',
        'Evaluación Independiente Primero: Cada evaluador debe inspeccionar la interfaz independientemente ANTES de discutir hallazgos. Esto previene pensamiento grupal y sesgo de anclaje.',
        'Inspección Basada en Tareas: Los evaluadores deben recorrer tareas específicas (ej. "completar checkout", "resetear contraseña") en lugar de navegar aleatoriamente.',
        'Documentar Todo: Cada hallazgo necesita captura de pantalla, la heurística violada, el rating de severidad, la ubicación en la interfaz y una recomendación específica.',
        'Sesión de Agregación: Después de evaluaciones individuales, el equipo se reúne para fusionar hallazgos, resolver desacuerdos de severidad (usando la media) y deduplicar.',
        'Las Heurísticas NO son reglas: Son guías. El contexto importa. A veces violar una heurística es la decisión correcta — pero debes justificar por qué.'
      ]
    },
    commonMistakes: {
      en: [
        'Evaluating as a group from the start — this causes anchoring bias where everyone agrees with the loudest person.',
        'Confusing heuristic evaluation with usability testing — heuristic analysis uses experts, not end users.',
        'Not using severity ratings — listing 50 problems without priority makes the report useless for stakeholders.',
        'Being too vague: "The navigation is confusing" vs. "The hamburger menu on the product page violates H6 (Recognition) because sub-categories are hidden behind 3 levels of nesting."',
        'Evaluating only the happy path — most critical issues live in error states, edge cases, and empty states.',
        'Recommending solutions without explaining the violated heuristic — stakeholders need the "why" to prioritize fixes.',
        'Using only one evaluator — a single expert finds roughly 35% of problems, missing the majority.'
      ],
      es: [
        'Evaluar en grupo desde el inicio — causa sesgo de anclaje donde todos coinciden con la persona más vocal.',
        'Confundir evaluación heurística con pruebas de usabilidad — el análisis heurístico usa expertos, no usuarios finales.',
        'No usar ratings de severidad — listar 50 problemas sin prioridad hace el informe inútil para stakeholders.',
        'Ser muy vago: "La navegación es confusa" vs. "El menú hamburguesa en la página de producto viola H6 (Reconocimiento) porque las subcategorías están ocultas tras 3 niveles de anidación."',
        'Evaluar solo el camino feliz — los problemas más críticos viven en estados de error, edge cases y empty states.',
        'Recomendar soluciones sin explicar la heurística violada — los stakeholders necesitan el "por qué" para priorizar.',
        'Usar solo un evaluador — un solo experto encuentra ~35% de los problemas, perdiendo la mayoría.'
      ]
    },
    howToApply: {
      steps: [
        {
          name: { en: 'Define Scope & Tasks', es: 'Definir Alcance y Tareas' },
          description: {
            en: 'Choose 5-8 key user tasks to evaluate (e.g., onboarding, search, checkout). Define the heuristic set (Nielsen\'s 10 is standard). Prepare evaluation templates with columns for: Location, Screenshot, Heuristic Violated, Severity (0-4), Description, Recommendation.',
            es: 'Elige 5-8 tareas clave del usuario (ej., onboarding, búsqueda, checkout). Define el set de heurísticas (las 10 de Nielsen son estándar). Prepara plantillas con columnas para: Ubicación, Captura, Heurística Violada, Severidad (0-4), Descripción, Recomendación.'
          }
        },
        {
          name: { en: 'Individual Expert Evaluation', es: 'Evaluación Individual de Expertos' },
          description: {
            en: 'Each evaluator independently walks through every task, annotating violations as they go. Spend 1-2 hours per evaluator. Don\'t rush. Check each screen against ALL 10 heuristics, not just the obvious ones. Include a severity rating for every finding.',
            es: 'Cada evaluador recorre independientemente cada tarea, anotando violaciones. Dedica 1-2 horas por evaluador. No apresures. Revisa cada pantalla contra LAS 10 heurísticas, no solo las obvias. Incluye un rating de severidad para cada hallazgo.'
          }
        },
        {
          name: { en: 'Aggregation & Deduplication', es: 'Agregación y Deduplicación' },
          description: {
            en: 'All evaluators meet to merge findings. Duplicate issues are combined (with the mean severity score). New issues discovered during discussion are added. The result is a unified findings matrix sorted by severity.',
            es: 'Todos los evaluadores se reúnen para fusionar hallazgos. Los duplicados se combinan (con el puntaje medio de severidad). Los nuevos problemas descubiertos en la discusión se agregan. El resultado es una matriz unificada ordenada por severidad.'
          }
        },
        {
          name: { en: 'Build the Report', es: 'Construir el Informe' },
          description: {
            en: 'Create a professional report with: Executive summary, methodology, severity distribution chart, detailed findings table (sorted by severity), heuristic violation frequency chart, and prioritized recommendations. Include annotated screenshots for every finding.',
            es: 'Crea un informe profesional con: Resumen ejecutivo, metodología, gráfico de distribución de severidad, tabla detallada de hallazgos (por severidad), gráfico de frecuencia de violación por heurística y recomendaciones priorizadas. Incluye capturas anotadas para cada hallazgo.'
          }
        },
        {
          name: { en: 'Present & Prioritize', es: 'Presentar y Priorizar' },
          description: {
            en: 'Present findings to stakeholders with a focus on severity 3-4 issues first. Use the impact/effort matrix to decide what to fix now vs. later. Track the resolution of each finding in subsequent design iterations.',
            es: 'Presenta hallazgos a stakeholders enfocándote en problemas de severidad 3-4 primero. Usa la matriz impacto/esfuerzo para decidir qué arreglar ahora vs. después. Rastrea la resolución de cada hallazgo en iteraciones subsecuentes.'
          }
        }
      ]
    },
    deliverables: {
      description: {
        en: 'Professional artifacts produced from a complete heuristic evaluation process.',
        es: 'Artefactos profesionales producidos de un proceso completo de evaluación heurística.'
      },
      items: {
        en: [
          'Heuristic Evaluation Report: Complete document with executive summary, methodology, severity distribution chart, findings table, and prioritized recommendations — the core portfolio piece',
          'Severity Distribution Chart: Bar or pie chart showing the breakdown of findings by severity level (0-4), giving stakeholders an at-a-glance quality assessment',
          'Heuristic Violation Frequency Map: Chart showing which of the 10 heuristics are violated most often — reveals systemic design patterns to fix',
          'Annotated Screenshots Matrix: Every finding with a numbered screenshot, the violated heuristic, severity rating, and specific recommendation',
          'Issue Tracking Spreadsheet: Living document linking each finding to its status (Open, In Progress, Fixed, Won\'t Fix) for design iteration tracking',
          'Impact/Effort Prioritization Matrix: 2x2 matrix positioning findings by user impact (high/low) vs. implementation effort (high/low) for sprint planning'
        ],
        es: [
          'Informe de Evaluación Heurística: Documento completo con resumen ejecutivo, metodología, gráfico de distribución de severidad, tabla de hallazgos y recomendaciones priorizadas — la pieza central del portafolio',
          'Gráfico de Distribución de Severidad: Gráfico de barras o torta mostrando la distribución de hallazgos por nivel de severidad (0-4)',
          'Mapa de Frecuencia de Violación: Gráfico mostrando qué heurísticas se violan más — revela patrones sistémicos de diseño',
          'Matriz de Capturas Anotadas: Cada hallazgo con captura numerada, heurística violada, severidad y recomendación específica',
          'Spreadsheet de Seguimiento: Documento vivo vinculando cada hallazgo con su estado (Abierto, En Progreso, Resuelto, No se Arreglará)',
          'Matriz de Priorización Impacto/Esfuerzo: Matriz 2x2 posicionando hallazgos por impacto al usuario vs. esfuerzo de implementación'
        ]
      }
    },
    practicalTools: {
      design: {
        en: [
          'Figma — Annotate screenshots with numbered findings and severity markers',
          'FigJam / Miro — Collaborative aggregation session boards',
          'Google Sheets / Notion — Evaluation matrix templates',
          'Heuristic Evaluation Workbook (nngroup.com) — Official template from Nielsen Norman Group'
        ],
        es: [
          'Figma — Anotar capturas con hallazgos numerados y marcadores de severidad',
          'FigJam / Miro — Tableros colaborativos para sesión de agregación',
          'Google Sheets / Notion — Plantillas de matriz de evaluación',
          'Heuristic Evaluation Workbook (nngroup.com) — Plantilla oficial del Nielsen Norman Group'
        ]
      },
      research: {
        en: [
          'Maze — Complement expert evaluation with task-based user tests',
          'Lookback — Record user sessions to compare expert findings with real behavior',
          'Hotjar / FullStory — Session recordings and heatmaps to validate severity ratings',
          'Lighthouse / axe DevTools — Automated accessibility checks to complement heuristic evaluation'
        ],
        es: [
          'Maze — Complementa evaluación experta con tests basados en tareas',
          'Lookback — Graba sesiones de usuario para comparar hallazgos expertos con comportamiento real',
          'Hotjar / FullStory — Grabaciones de sesión y heatmaps para validar ratings de severidad',
          'Lighthouse / axe DevTools — Verificaciones automatizadas de accesibilidad como complemento'
        ]
      },
      handoff: {
        en: [
          'JIRA / Linear — Create tickets from findings with severity labels and heuristic tags',
          'Confluence / Notion — Host the final report for stakeholder access',
          'Loom — Record a walkthrough video of the top-10 findings for async review',
          'Figma Dev Mode — Link annotated screens directly to development tickets'
        ],
        es: [
          'JIRA / Linear — Crear tickets desde hallazgos con etiquetas de severidad y heurística',
          'Confluence / Notion — Hospedar el informe final para acceso de stakeholders',
          'Loom — Grabar video walkthrough de los top-10 hallazgos para revisión asíncrona',
          'Figma Dev Mode — Vincular pantallas anotadas directamente a tickets de desarrollo'
        ]
      }
    },
    aiInPractice: {
      description: {
        en: 'AI can accelerate heuristic analysis by pre-screening interfaces, generating structured findings, and drafting report sections — but expert judgment remains essential for nuanced severity assessment.',
        es: 'La IA puede acelerar el análisis heurístico pre-evaluando interfaces, generando hallazgos estructurados y redactando secciones del informe — pero el juicio experto sigue siendo esencial para la evaluación matizada de severidad.'
      },
      prompts: [
        {
          tool: 'ChatGPT (Vision)',
          context: { en: 'Screenshot evaluation', es: 'Evaluación de capturas de pantalla' },
          prompt: {
            en: 'Analyze this screenshot against Nielsen\'s 10 Usability Heuristics. For each violation found, provide: 1) Which heuristic is violated, 2) Severity rating (0-4), 3) Specific location in the UI, 4) Detailed description, 5) Recommended fix. Format as a table.',
            es: 'Analiza esta captura contra las 10 Heurísticas de Usabilidad de Nielsen. Para cada violación: 1) Heurística violada, 2) Severidad (0-4), 3) Ubicación en la UI, 4) Descripción detallada, 5) Corrección recomendada. Formatea como tabla.'
          }
        },
        {
          tool: 'Claude',
          context: { en: 'Report generation', es: 'Generación de informe' },
          prompt: {
            en: 'I have these heuristic evaluation findings: [paste findings]. Generate a professional executive summary (200 words), a severity distribution analysis, and the top-5 priority recommendations with business impact justification.',
            es: 'Tengo estos hallazgos de evaluación heurística: [pegar hallazgos]. Genera un resumen ejecutivo profesional (200 palabras), un análisis de distribución de severidad y las top-5 recomendaciones prioritarias con justificación de impacto de negocio.'
          }
        },
        {
          tool: 'ChatGPT',
          context: { en: 'Checklist generation', es: 'Generación de checklist' },
          prompt: {
            en: 'Create a detailed heuristic evaluation checklist for an e-commerce checkout flow. For each of Nielsen\'s 10 heuristics, provide 5 specific questions an evaluator should ask while inspecting this flow.',
            es: 'Crea un checklist detallado de evaluación heurística para un flujo de checkout e-commerce. Para cada una de las 10 heurísticas de Nielsen, proporciona 5 preguntas específicas que un evaluador debe hacer al inspeccionar este flujo.'
          }
        }
      ]
    },
    howToValidate: {
      what: {
        en: 'Confirm that your heuristic evaluation process is rigorous, your findings are actionable, and your report is professional enough for stakeholder decision-making and portfolio presentation.',
        es: 'Confirmar que tu proceso de evaluación heurística es riguroso, tus hallazgos son accionables y tu informe es lo suficientemente profesional para toma de decisiones de stakeholders y presentación en portafolio.'
      },
      methods: {
        en: [
          'Cross-validation: After heuristic evaluation, run a 5-user usability test on the same flows. Compare expert-found issues vs. user-found issues. Overlap should be >50%.',
          'Inter-rater reliability: If 3+ evaluators assessed the same interface, calculate agreement on severity ratings. Cohen\'s Kappa >0.6 indicates reliable evaluation.',
          'Stakeholder comprehension test: Present the report to a PM or developer. Can they independently explain the top-3 findings and their priority? If not, the report needs clearer communication.',
          'Before/after metrics: After fixes are implemented, re-evaluate the same tasks. The number of severity 3-4 findings should decrease by >60%.',
          'Portfolio review: Show the report to 3 UX professionals. Ask them to rate it on a 5-point scale for clarity, depth, and actionability.'
        ],
        es: [
          'Validación cruzada: Después de la evaluación heurística, ejecuta un test de usabilidad con 5 usuarios en los mismos flujos. Compara problemas encontrados por expertos vs. usuarios. La superposición debe ser >50%.',
          'Confiabilidad inter-evaluador: Si 3+ evaluadores evaluaron la misma interfaz, calcula el acuerdo en ratings de severidad. Kappa de Cohen >0.6 indica evaluación confiable.',
          'Test de comprensión de stakeholders: Presenta el informe a un PM o developer. ¿Pueden explicar independientemente los top-3 hallazgos y su prioridad?',
          'Métricas antes/después: Después de implementar correcciones, re-evalúa las mismas tareas. Los hallazgos de severidad 3-4 deben disminuir >60%.',
          'Revisión de portafolio: Muestra el informe a 3 profesionales UX. Pídeles que lo califiquen en claridad, profundidad y accionabilidad.'
        ]
      },
      tools: {
        en: ['Maze (complementary usability testing)', 'Cohen\'s Kappa calculator', 'Google Forms (stakeholder survey)', 'Figma (before/after annotation comparison)'],
        es: ['Maze (pruebas de usabilidad complementarias)', 'Calculadora de Kappa de Cohen', 'Google Forms (encuesta de stakeholders)', 'Figma (comparación de anotaciones antes/después)']
      },
      evidenceExample: {
        en: 'Google\'s Material Design team conducts heuristic evaluations at every design review milestone. Their internal "UX Review" process requires 3 independent evaluators to assess each feature against a modified version of Nielsen\'s heuristics plus their own material design principles. Findings with severity 3-4 are blocking issues that prevent launch. This process helped Google reduce critical usability bugs by 40% between 2019-2022 across Android, Gmail, and Google Maps. Their published case study on Gmail\'s compose flow redesign (2019) identified 23 heuristic violations, with 8 severity-4 issues related to H3 (User Control) that led to the "Undo Send" feature becoming default-on.',
        es: 'El equipo de Material Design de Google realiza evaluaciones heurísticas en cada hito de revisión de diseño. Su proceso interno "UX Review" requiere 3 evaluadores independientes para evaluar cada feature contra una versión modificada de las heurísticas de Nielsen más sus propios principios de material design. Los hallazgos de severidad 3-4 son bloqueantes que impiden el lanzamiento. Este proceso ayudó a Google a reducir bugs críticos de usabilidad en un 40% entre 2019-2022 en Android, Gmail y Google Maps.'
      }
    },
    quiz: [
      {
        question: {
          en: 'How many evaluators are needed to find approximately 75% of usability problems in a heuristic evaluation?',
          es: '¿Cuántos evaluadores se necesitan para encontrar aproximadamente el 75% de los problemas de usabilidad en una evaluación heurística?'
        },
        options: {
          en: ['1 evaluator', '2-3 evaluators', '5 evaluators', '10+ evaluators'],
          es: ['1 evaluador', '2-3 evaluadores', '5 evaluadores', '10+ evaluadores']
        },
        correctIndex: 2,
        explanation: {
          en: 'Nielsen\'s research shows that 5 evaluators find approximately 75% of usability problems. A single evaluator finds only ~35%. Adding more than 5 evaluators yields diminishing returns — the cost-benefit ratio drops significantly.',
          es: 'La investigación de Nielsen muestra que 5 evaluadores encuentran aproximadamente el 75% de los problemas. Un solo evaluador encuentra solo ~35%. Más de 5 evaluadores tiene rendimientos decrecientes.'
        }
      },
      {
        question: {
          en: 'What does a severity rating of "3" mean in Nielsen\'s scale?',
          es: '¿Qué significa un rating de severidad "3" en la escala de Nielsen?'
        },
        options: {
          en: [
            'Cosmetic problem — fix if time allows',
            'Minor usability problem — low priority fix',
            'Major usability problem — important to fix, high priority',
            'Usability catastrophe — must be fixed before release'
          ],
          es: [
            'Problema cosmético — arreglar si hay tiempo',
            'Problema menor de usabilidad — arreglo de baja prioridad',
            'Problema mayor de usabilidad — importante arreglar, alta prioridad',
            'Catástrofe de usabilidad — debe arreglarse antes del lanzamiento'
          ]
        },
        correctIndex: 2,
        explanation: {
          en: 'Severity 3 = Major usability problem. It causes significant difficulty for users and should be given high priority. Severity 4 = Usability catastrophe (must fix before release). Severity 2 = Minor (low priority). Severity 1 = Cosmetic. Severity 0 = Not actually a problem.',
          es: 'Severidad 3 = Problema mayor de usabilidad. Causa dificultad significativa y debe tener alta prioridad. Severidad 4 = Catástrofe (arreglar antes del lanzamiento). Severidad 2 = Menor. Severidad 1 = Cosmético. Severidad 0 = No es un problema.'
        }
      },
      {
        question: {
          en: 'Why must evaluators work independently before the aggregation session?',
          es: '¿Por qué los evaluadores deben trabajar independientemente antes de la sesión de agregación?'
        },
        options: {
          en: [
            'To save time and finish faster',
            'To prevent anchoring bias and groupthink from influencing individual findings',
            'Because they need to use different heuristic sets',
            'To compete with each other and find more issues'
          ],
          es: [
            'Para ahorrar tiempo y terminar más rápido',
            'Para prevenir el sesgo de anclaje y pensamiento grupal que influya en los hallazgos individuales',
            'Porque necesitan usar diferentes sets de heurísticas',
            'Para competir entre sí y encontrar más problemas'
          ]
        },
        correctIndex: 1,
        explanation: {
          en: 'Independent evaluation prevents anchoring bias (being influenced by the first opinion heard) and groupthink (conforming to the group\'s opinion). Research shows that independent evaluators find different subsets of problems, and merging them produces more complete coverage than group evaluation.',
          es: 'La evaluación independiente previene el sesgo de anclaje (ser influenciado por la primera opinión) y el pensamiento grupal (conformarse con la opinión del grupo). La investigación muestra que evaluadores independientes encuentran diferentes subconjuntos de problemas.'
        }
      }
    ],
    realExample: {
      title: {
        en: 'Google Material Design: Systematic Heuristic Reviews',
        es: 'Google Material Design: Revisiones Heurísticas Sistemáticas'
      },
      description: {
        en: 'Google\'s Material Design team uses heuristic evaluation as a mandatory gate at every design review milestone. Their "UX Review" process requires 3 independent evaluators to assess each feature against Nielsen\'s heuristics plus Material Design principles. Severity 3-4 findings are blocking — the feature cannot launch. This reduced critical usability bugs by 40% (2019-2022). Their Gmail compose flow redesign identified 23 violations, with 8 severity-4 issues on H3 (User Control) leading to "Undo Send" becoming default-on. The evaluation report became a published case study used to train new Google designers.',
        es: 'El equipo de Material Design de Google usa evaluación heurística como gate obligatorio en cada hito de revisión de diseño. Su proceso "UX Review" requiere 3 evaluadores independientes. Los hallazgos de severidad 3-4 son bloqueantes — la feature no puede lanzarse. Esto redujo bugs críticos de usabilidad en un 40% (2019-2022). El rediseño del flujo de composición de Gmail identificó 23 violaciones, con 8 de severidad-4 en H3 (Control del Usuario) que llevaron a activar "Deshacer Envío" por defecto. El informe se convirtió en caso de estudio publicado.'
      },
      company: 'Google'
    }
  }
};