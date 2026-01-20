// LESSON B: Research Synthesis (Affinity Mapping, Insight Writing, Opportunity Areas)
// INSERT INTO: foundations track, after research-types
// STATUS: COMPLETE - Ready for content.ts

{
  id: 'research-synthesis',
  title: { 
    en: 'Research Synthesis: Affinity Mapping & Insight Writing', 
    es: 'Síntesis de Investigación: Mapeo de Afinidad y Redacción de Insights' 
  },
  description: { 
    en: 'Transforming raw research data into actionable insights, themes, and opportunity areas that drive design decisions.',
    es: 'Transformar datos de investigación en bruto en insights accionables, temas y áreas de oportunidad que impulsan decisiones de diseño.'
  },
  status: 'intermediate',
  timeEstimate: '2h 15m',
  reference: { 
    en: 'Interviewing Users - Steve Portigal', 
    es: 'Interviewing Users - Steve Portigal' 
  },
  referenceLink: 'https://www.nngroup.com/articles/affinity-diagram/',
  content: {
    definition: {
      en: 'Research Synthesis is the process of analyzing qualitative data (interviews, observations) to identify patterns and create insights. Affinity Mapping clusters similar data points into themes. Insight Writing transforms themes into actionable statements: "[User segment] needs [solution] because [evidence]". Opportunity Areas are high-impact problems worth solving.',
      es: 'La Síntesis de Investigación es el proceso de analizar datos cualitativos (entrevistas, observaciones) para identificar patrones y crear insights. El Mapeo de Afinidad agrupa puntos de datos similares en temas. La Redacción de Insights transforma temas en declaraciones accionables: "[Segmento de usuario] necesita [solución] porque [evidencia]". Las Áreas de Oportunidad son problemas de alto impacto que vale la pena resolver.'
    },
    why: {
      en: 'User Impact: Raw data (transcripts) is useless. Synthesis finds patterns that reveal what users truly need. Business Impact: Good insights prevent "opinion-driven" design debates. A well-written insight like "75% of users abandon checkout because they don\'t trust payment security" is undeniable. Team Impact: Affinity mapping aligns cross-functional teams on what problems matter most, creating shared understanding.',
      es: 'Impacto en Usuario: Datos en bruto (transcripciones) son inútiles. La síntesis encuentra patrones que revelan lo que los usuarios realmente necesitan. Impacto en Negocio: Buenos insights previenen debates de diseño "impulsados por opinión". Un insight bien escrito como "75% de usuarios abandonan checkout porque no confían en seguridad de pago" es innegable. Impacto en Equipos: El mapeo de afinidad alinea equipos interfuncionales en qué problemas importan más, creando entendimiento compartido.'
    },
    keyPrinciples: {
      en: [
        'Affinity Mapping: Write each observation on a sticky note. Group similar notes. Name each group (theme). Repeat until you have 5-7 major themes.',
        'Good Insight Format: [User segment] + [need/pain point] + [evidence]. Example: "Freelancers (who) struggle to track invoices (pain) because they use 3 different tools (evidence)".',
        'Avoid "insights" that are just descriptions: BAD: "Users click the button". GOOD: "Users expect instant feedback after clicking, but our 3-second delay causes confusion".',
        'Opportunity Areas: Themes with HIGH impact (affects many users) + HIGH frequency (mentioned often). Prioritize these for design solutions.',
        'Quote Selection: Include 2-3 powerful quotes per theme. Format: "Quote" - Participant ID'
      ],
      es: [
        'Mapeo de Afinidad: Escribe cada observación en una nota adhesiva. Agrupa notas similares. Nombra cada grupo (tema). Repite hasta tener 5-7 temas principales.',
        'Formato de Insight Bueno: [Segmento de usuario] + [necesidad/punto de dolor] + [evidencia]. Ejemplo: "Los freelancers (quién) luchan para rastrear facturas (dolor) porque usan 3 herramientas diferentes (evidencia)".',
        'Evita "insights" que son solo descripciones: MALO: "Los usuarios hacen clic en el botón". BUENO: "Los usuarios esperan retroalimentación instantánea después de hacer clic, pero nuestro retraso de 3 segundos causa confusión".',
        'Áreas de Oportunidad: Temas con ALTO impacto (afecta a muchos usuarios) + ALTA frecuencia (mencionado a menudo). Prioriza estos para soluciones de diseño.',
        'Selección de Citas: Incluye 2-3 citas poderosas por tema. Formato: "Cita" - ID de Participante'
      ]
    },
    commonMistakes: {
      en: [
        'Confirmation bias: Only highlighting data that supports your pre-existing idea (cherry-picking)',
        'Vague insights: "Users want better UX" (not actionable). Should be: "Users need order history in < 2 clicks because they check it 3x/week".',
        'Skipping the affinity mapping step: Going straight from transcripts to "insights" without finding patterns = missing the forest for the trees',
        'Too many themes: Having 20 themes = you haven\'t synthesized. Aim for 5-7 major themes.',
        'Not involving the team: Doing synthesis alone = team doesn\'t buy into the insights. Run collaborative affinity mapping workshops.'
      ],
      es: [
        'Sesgo de confirmación: Solo resaltar datos que apoyan tu idea preexistente (cherry-picking)',
        'Insights vagos: "Los usuarios quieren mejor UX" (no accionable). Debería ser: "Los usuarios necesitan historial de pedidos en < 2 clics porque lo revisan 3x/semana".',
        'Saltarse el paso de mapeo de afinidad: Ir directamente de transcripciones a "insights" sin encontrar patrones = perder el bosque por los árboles',
        'Demasiados temas: Tener 20 temas = no has sintetizado. Apunta a 5-7 temas principales.',
        'No involucrar al equipo: Hacer síntesis solo = el equipo no compra los insights. Ejecuta talleres colaborativos de mapeo de afinidad.'
      ]
    },
    howToApply: {
      steps: [
        {
          name: { en: 'Step 1: Extract Observations', es: 'Paso 1: Extraer Observaciones' },
          description: { 
            en: 'Read interview transcripts. Write every notable observation on a sticky note: "P3 said they check order history daily", "P5 abandoned checkout at payment screen". Aim for 100-200 notes from 5-8 interviews.',
            es: 'Lee transcripciones de entrevistas. Escribe cada observación notable en una nota adhesiva: "P3 dijo que revisan historial de pedidos diariamente", "P5 abandonó checkout en pantalla de pago". Apunta a 100-200 notas de 5-8 entrevistas.'
          }
        },
        {
          name: { en: 'Step 2: Affinity Mapping (Clustering)', es: 'Paso 2: Mapeo de Afinidad (Agrupación)' },
          description: { 
            en: 'Group similar notes together. Ask: "What do these have in common?" Create clusters. Example: All notes about "confusion at payment" become one cluster. Name each cluster with a theme label.',
            es: 'Agrupa notas similares. Pregunta: "¿Qué tienen en común?" Crea clusters. Ejemplo: Todas las notas sobre "confusión en el pago" se convierten en un cluster. Nombra cada cluster con una etiqueta de tema.'
          }
        },
        {
          name: { en: 'Step 3: Identify Themes', es: 'Paso 3: Identificar Temas' },
          description: { 
            en: 'You should have 5-7 major themes. Examples: "Payment Trust Issues", "Order History Findability", "Checkout Speed Concerns". For each theme, count frequency (how many participants mentioned it).',
            es: 'Deberías tener 5-7 temas principales. Ejemplos: "Problemas de Confianza en Pago", "Encontrabilidad de Historial de Pedidos", "Preocupaciones de Velocidad de Checkout". Para cada tema, cuenta frecuencia (cuántos participantes lo mencionaron).'
          }
        },
        {
          name: { en: 'Step 4: Write Insights', es: 'Paso 4: Escribir Insights' },
          description: { 
            en: 'Transform each theme into insight format: "[Who] needs [what] because [why]". Example: "Returning customers need visible order history because they reorder the same items weekly." Add 2 supporting quotes.',
            es: 'Transforma cada tema en formato de insight: "[Quién] necesita [qué] porque [por qué]". Ejemplo: "Los clientes recurrentes necesitan historial de pedidos visible porque reordenan los mismos artículos semanalmente." Agrega 2 citas de apoyo.'
          }
        },
        {
          name: { en: 'Step 5: Prioritize Opportunities', es: 'Paso 5: Priorizar Oportunidades' },
          description: { 
            en: 'Use a 2x2 matrix: Impact (how many users affected?) vs Frequency (how often mentioned?). High-High = top priority opportunity areas. These become "How Might We" statements for ideation.',
            es: 'Usa una matriz 2x2: Impacto (¿cuántos usuarios afectados?) vs Frecuencia (¿qué tan mencionado?). Alto-Alto = áreas de oportunidad de máxima prioridad. Estos se convierten en declaraciones "Cómo Podríamos" para ideación.'
          }
        }
      ]
    },
    deliverables: {
      description: { 
        en: 'Synthesis artifacts that turn raw research into actionable design inputs.',
        es: 'Artefactos de síntesis que convierten investigación en bruto en inputs de diseño accionables.'
      },
      items: {
        en: [
          'Affinity Map: Digital board (FigJam/Miro) with 100-200 sticky notes grouped into 5-7 themes',
          'Insights Report: Document with 5-7 insights in format "[Who] needs [what] because [why]" + supporting quotes',
          'Opportunity Prioritization Matrix: 2x2 grid showing which themes to tackle first (Impact x Frequency)',
          'Research Findings Presentation: 10-15 slides for stakeholders with key themes, quotes, and recommended actions',
          'How Might We Statements: 3-5 problem statements derived from top opportunity areas'
        ],
        es: [
          'Mapa de Afinidad: Tablero digital (FigJam/Miro) con 100-200 notas adhesivas agrupadas en 5-7 temas',
          'Informe de Insights: Documento con 5-7 insights en formato "[Quién] necesita [qué] porque [por qué]" + citas de apoyo',
          'Matriz de Priorización de Oportunidades: Cuadrícula 2x2 mostrando qué temas abordar primero (Impacto x Frecuencia)',
          'Presentación de Hallazgos de Investigación: 10-15 diapositivas para stakeholders con temas clave, citas y acciones recomendadas',
          'Declaraciones Cómo Podríamos: 3-5 declaraciones de problema derivadas de las principales áreas de oportunidad'
        ]
      }
    },
    practicalTools: {
      design: { 
        en: ['FigJam (digital affinity mapping)', 'Miro', 'Physical sticky notes + whiteboard (in-person)', 'Notion (insights repository)'], 
        es: ['FigJam (mapeo de afinidad digital)', 'Miro', 'Notas adhesivas físicas + pizarra (presencial)', 'Notion (repositorio de insights)'] 
      },
      research: { 
        en: ['Dovetail (auto-tagging, theme extraction)', 'Otter.ai (transcription)', 'Google Sheets (quantifying themes)', 'Airtable (insight database)'], 
        es: ['Dovetail (etiquetado automático, extracción de temas)', 'Otter.ai (transcripción)', 'Google Sheets (cuantificar temas)', 'Airtable (base de datos de insights)'] 
      },
      handoff: { 
        en: ['Google Slides (stakeholder presentation)', 'Notion (shared research repository)', 'Confluence'], 
        es: ['Google Slides (presentación a stakeholders)', 'Notion (repositorio de investigación compartido)', 'Confluence'] 
      }
    },
    aiInPractice: {
      description: { 
        en: 'AI dramatically speeds up thematic analysis and insight generation, but human judgment is required to validate patterns.',
        es: 'La IA acelera dramáticamente el análisis temático y la generación de insights, pero se requiere juicio humano para validar patrones.'
      },
      prompts: [
        {
          tool: 'Claude',
          context: { en: 'Thematic analysis', es: 'Análisis temático' },
          prompt: { 
            en: 'I have 6 interview transcripts [paste]. Perform affinity mapping: (1) Extract 50-100 notable observations. (2) Group them into 5-7 themes. (3) For each theme, provide: theme name, frequency (X/6 participants), severity (High/Med/Low), and 2 supporting quotes with participant IDs.',
            es: 'Tengo 6 transcripciones de entrevistas [pegar]. Realiza mapeo de afinidad: (1) Extrae 50-100 observaciones notables. (2) Agrúpalas en 5-7 temas. (3) Para cada tema, proporciona: nombre del tema, frecuencia (X/6 participantes), severidad (Alta/Media/Baja) y 2 citas de apoyo con IDs de participantes.'
          }
        },
        {
          tool: 'ChatGPT',
          context: { en: 'Writing insights', es: 'Escribiendo insights' },
          prompt: { 
            en: 'Here are my research themes [paste]. For each theme, write 1 actionable insight in this format: "[User segment] needs [specific solution] because [evidence from research]." Make it specific, not vague.',
            es: 'Aquí están mis temas de investigación [pegar]. Para cada tema, escribe 1 insight accionable en este formato: "[Segmento de usuario] necesita [solución específica] porque [evidencia de investigación]." Hazlo específico, no vago.'
          }
        },
        {
          tool: 'ChatGPT',
          context: { en: 'Creating HMW statements', es: 'Creando declaraciones HMW' },
          prompt: { 
            en: 'Based on these insights [paste], generate 5 "How Might We" statements that are: (1) Specific and scoped. (2) Focus on user benefit, not features. (3) Inspire creative solutions. Format: "How might we help [user] achieve [goal]?"',
            es: 'Basado en estos insights [pegar], genera 5 declaraciones "Cómo Podríamos" que sean: (1) Específicas y delimitadas. (2) Enfocadas en beneficio del usuario, no características. (3) Inspiran soluciones creativas. Formato: "¿Cómo podríamos ayudar a [usuario] a lograr [objetivo]?"'
          }
        }
      ]
    },
    howToValidate: {
      what: { 
        en: 'Validate that your themes accurately represent the research data and that your insights are grounded in evidence.',
        es: 'Valida que tus temas representen con precisión los datos de investigación y que tus insights estén fundamentados en evidencia.'
      },
      methods: { 
        en: [
          'Inter-rater reliability: Have 2 researchers independently code the same transcript, then compare themes (80%+ agreement = valid)',
          'Participant validation: Share findings with 2-3 interview participants - do they recognize themselves?',
          'Stakeholder review: Present insights to product team - do they align with business context?',
          'Quote traceability: Every insight must link back to specific quotes/observations (no "gut feelings")'
        ],
        es: [
          'Confiabilidad inter-evaluador: Que 2 investigadores codifiquen independientemente la misma transcripción, luego comparar temas (80%+ acuerdo = válido)',
          'Validación de participantes: Compartir hallazgos con 2-3 participantes de entrevistas - ¿se reconocen?',
          'Revisión de stakeholders: Presentar insights al equipo de producto - ¿se alinean con contexto de negocio?',
          'Trazabilidad de citas: Cada insight debe vincularse a citas/observaciones específicas (no "sensaciones")'
        ]
      },
      tools: { 
        en: ['Dovetail (auto-linking quotes to themes)', 'Spreadsheet with quote references', 'Peer review session'], 
        es: ['Dovetail (vinculación automática de citas a temas)', 'Hoja de cálculo con referencias de citas', 'Sesión de revisión de pares'] 
      },
      evidenceExample: { 
        en: 'Theme "Payment Trust Issues" is supported by 5/6 participants mentioning security concerns. Key quotes: "I don\'t see any trust badges" (P2), "I\'m worried about card info" (P4). Severity: High. Opportunity: Add visible security indicators.',
        es: 'Tema "Problemas de Confianza en Pago" está respaldado por 5/6 participantes mencionando preocupaciones de seguridad. Citas clave: "No veo ningún badge de confianza" (P2), "Estoy preocupado por info de tarjeta" (P4). Severidad: Alta. Oportunidad: Agregar indicadores de seguridad visibles.'
      }
    },
    quiz: [
      {
        question: { 
          en: 'What is the primary goal of affinity mapping?', 
          es: '¿Cuál es el objetivo principal del mapeo de afinidad?' 
        },
        options: {
          en: [
            'To count how many users said something',
            'To group similar observations and find patterns',
            'To create pretty sticky note boards',
            'To write interview transcripts'
          ],
          es: [
            'Contar cuántos usuarios dijeron algo',
            'Agrupar observaciones similares y encontrar patrones',
            'Crear tableros bonitos de notas adhesivas',
            'Escribir transcripciones de entrevistas'
          ]
        },
        correctIndex: 1,
        explanation: {
          en: 'Why it matters: Affinity mapping isn\'t about counting or aesthetics - it\'s about finding patterns in qualitative data. When 3 users mention "confusing checkout", 2 mention "unclear payment options", and 1 says "I got lost at billing", affinity mapping reveals they\'re all describing the same problem: Payment flow confusion. This pattern becomes your insight.',
          es: 'Por qué importa: El mapeo de afinidad no es sobre contar o estética - es sobre encontrar patrones en datos cualitativos. Cuando 3 usuarios mencionan "checkout confuso", 2 mencionan "opciones de pago poco claras" y 1 dice "me perdí en facturación", el mapeo de afinidad revela que todos están describiendo el mismo problema: Confusión en flujo de pago. Este patrón se convierte en tu insight.'
        }
      },
      {
        question: { 
          en: 'Which is a well-written insight?', 
          es: '¿Cuál es un insight bien escrito?' 
        },
        options: {
          en: [
            '"Users like the app"',
            '"The checkout needs improvement"',
            '"Returning customers need order history in the main nav because they reorder weekly and currently can\'t find past orders"',
            '"We should add more features"'
          ],
          es: [
            '"A los usuarios les gusta la app"',
            '"El checkout necesita mejora"',
            '"Los clientes recurrentes necesitan historial de pedidos en la nav principal porque reordenan semanalmente y actualmente no pueden encontrar pedidos pasados"',
            '"Deberíamos agregar más características"'
          ]
        },
        correctIndex: 2,
        explanation: {
          en: 'Why it matters: A good insight has 3 parts: WHO (returning customers), WHAT they need (order history in main nav), and WHY based on evidence (they reorder weekly but can\'t find past orders). Options 1, 2, 4 are vague and not actionable. A designer can\'t do anything with "users like the app" but CAN act on "returning customers need order history visible because...".',
          es: 'Por qué importa: Un buen insight tiene 3 partes: QUIÉN (clientes recurrentes), QUÉ necesitan (historial de pedidos en nav principal), y POR QUÉ basado en evidencia (reordenan semanalmente pero no pueden encontrar pedidos pasados). Opciones 1, 2, 4 son vagas y no accionables. Un diseñador no puede hacer nada con "a los usuarios les gusta la app" pero SÍ puede actuar con "los clientes recurrentes necesitan historial de pedidos visible porque...".'
        }
      },
      {
        question: { 
          en: 'You have 20 themes after affinity mapping. What should you do?', 
          es: 'Tienes 20 temas después del mapeo de afinidad. ¿Qué deberías hacer?' 
        },
        options: {
          en: [
            'Keep all 20 - more themes = better research',
            'Consolidate into 5-7 major themes by grouping related themes',
            'Pick your favorite 3 and ignore the rest',
            'Ask stakeholders which themes they like'
          ],
          es: [
            'Mantener los 20 - más temas = mejor investigación',
            'Consolidar en 5-7 temas principales agrupando temas relacionados',
            'Elegir tus 3 favoritos e ignorar el resto',
            'Preguntar a stakeholders qué temas les gustan'
          ]
        },
        correctIndex: 1,
        explanation: {
          en: 'Why it matters: Having 20 themes means you haven\'t synthesized - you\'re still in "data dump" mode. Synthesis means grouping related themes into higher-level patterns. Example: "Slow checkout", "Confusing payment", "No progress indicator" can consolidate into one theme: "Checkout Flow Friction". Aim for 5-7 themes that stakeholders can remember and act on. 20 themes = analysis paralysis.',
          es: 'Por qué importa: Tener 20 temas significa que no has sintetizado - aún estás en modo "volcado de datos". Síntesis significa agrupar temas relacionados en patrones de nivel superior. Ejemplo: "Checkout lento", "Pago confuso", "Sin indicador de progreso" pueden consolidarse en un tema: "Fricción de Flujo de Checkout". Apunta a 5-7 temas que los stakeholders puedan recordar y actuar. 20 temas = parálisis de análisis.'
        }
      }
    ],
    realExample: {
      title: { 
        en: 'Airbnb Trust Research: Good vs Bad Synthesis', 
        es: 'Investigación de Confianza de Airbnb: Buena vs Mala Síntesis' 
      },
      description: {
        en: 'GOOD: Airbnb conducted 40 interviews about why users hesitate to book. After affinity mapping, they found 3 major themes: (1) Host Trust (mentioned by 32/40 users), (2) Property Accuracy (28/40), (3) Cancellation Fear (15/40). They wrote actionable insights: "First-time bookers need social proof from other guests because they don\'t know if hosts are legitimate." This led to prominent review systems and verified photos. BAD: If they had written vague insights like "Users want more trust" without evidence or prioritization, they wouldn\'t know WHAT to build or WHY host verification mattered more than cancellation policies.',
        es: 'BUENO: Airbnb realizó 40 entrevistas sobre por qué los usuarios dudan en reservar. Después del mapeo de afinidad, encontraron 3 temas principales: (1) Confianza en Anfitrión (mencionado por 32/40 usuarios), (2) Precisión de Propiedad (28/40), (3) Miedo a Cancelación (15/40). Escribieron insights accionables: "Los reservadores primerizos necesitan prueba social de otros huéspedes porque no saben si los anfitriones son legítimos." Esto llevó a sistemas de reseñas prominentes y fotos verificadas. MALO: Si hubieran escrito insights vagos como "Los usuarios quieren más confianza" sin evidencia o priorización, no sabrían QUÉ construir o POR QUÉ la verificación de anfitrión importaba más que políticas de cancelación.'
      },
      company: 'Airbnb'
    }
  }
},

// MINI EXERCISE
miniExercise: {
  title: { en: 'Exercise: Practice Insight Writing', es: 'Ejercicio: Practicar Redacción de Insights' },
  scenario: {
    en: 'You interviewed 5 users about a fitness app. Here are sample quotes. Write 1 insight.',
    es: 'Entrevistaste a 5 usuarios sobre una app de fitness. Aquí hay citas de muestra. Escribe 1 insight.'
  },
  quotes: [
    { participant: 'P1', quote: { en: '"I forgot to log my workout 3 times this week"', es: '"Olvidé registrar mi entrenamiento 3 veces esta semana"' } },
    { participant: 'P3', quote: { en: '"I wish the app reminded me right after my gym session"', es: '"Desearía que la app me recordara justo después de mi sesión de gimnasio"' } },
    { participant: 'P4', quote: { en: '"By the time I get home, I forget the reps I did"', es: '"Para cuando llego a casa, olvido las repeticiones que hice"' } },
    { participant: 'P5', quote: { en: '"I only remember to log when I see the app icon"', es: '"Solo recuerdo registrar cuando veo el ícono de la app"' } }
  ],
  goodInsight: {
    en: 'Active gym-goers need automatic workout logging reminders immediately post-session because they forget to log manually and lose data accuracy.',
    es: 'Los asistentes activos al gimnasio necesitan recordatorios automáticos de registro de entrenamientos inmediatamente después de la sesión porque olvidan registrar manualmente y pierden precisión de datos.'
  },
  badInsight: {
    en: 'Users forget things sometimes.',
    es: 'Los usuarios olvidan cosas a veces.'
  }
},

// CHECKLIST
checklist: {
  title: { en: 'Research Synthesis Quality Checklist', es: 'Checklist de Calidad de Síntesis de Investigación' },
  items: {
    en: [
      '☐ I have 5-7 major themes (not 20+)',
      '☐ Each theme has frequency count (X/Y participants mentioned it)',
      '☐ Each insight follows format: [Who] needs [what] because [evidence]',
      '☐ Every insight is supported by 2+ direct quotes',
      '☐ My insights are specific and actionable (not vague like "improve UX")',
      '☐ I\'ve prioritized themes by Impact x Frequency',
      '☐ I can trace each insight back to specific transcript data',
      '☐ I\'ve created 3-5 "How Might We" statements from top opportunities',
      '☐ I\'ve shared findings with at least 1 participant for validation',
      '☐ Stakeholders understand and agree with the top 3 insights'
    ],
    es: [
      '☐ Tengo 5-7 temas principales (no 20+)',
      '☐ Cada tema tiene conteo de frecuencia (X/Y participantes lo mencionaron)',
      '☐ Cada insight sigue formato: [Quién] necesita [qué] porque [evidencia]',
      '☐ Cada insight está respaldado por 2+ citas directas',
      '☐ Mis insights son específicos y accionables (no vagos como "mejorar UX")',
      '☐ He priorizado temas por Impacto x Frecuencia',
      '☐ Puedo rastrear cada insight a datos de transcripción específicos',
      '☐ He creado 3-5 declaraciones "Cómo Podríamos" de las principales oportunidades',
      '☐ He compartido hallazgos con al menos 1 participante para validación',
      '☐ Los stakeholders entienden y están de acuerdo con los 3 principales insights'
    ]
  }
}
