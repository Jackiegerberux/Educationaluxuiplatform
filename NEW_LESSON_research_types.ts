// LESSON A: Research Types (Qualitative vs Quantitative + Generative vs Evaluative)
// INSERT INTO: foundations track, after user-personas
// STATUS: COMPLETE - Ready for content.ts

{
  id: 'research-types',
  title: { 
    en: 'Research Types: Qual vs Quant, Generative vs Evaluative', 
    es: 'Tipos de Investigación: Cual vs Cuant, Generativa vs Evaluativa' 
  },
  description: { 
    en: 'Understanding when to ask "why" (qualitative) vs "how many" (quantitative), and when to discover problems vs validate solutions.',
    es: 'Entender cuándo preguntar "por qué" (cualitativo) vs "cuántos" (cuantitativo), y cuándo descubrir problemas vs validar soluciones.'
  },
  status: 'beginner',
  timeEstimate: '2h',
  reference: { 
    en: 'Just Enough Research - Erika Hall', 
    es: 'Just Enough Research - Erika Hall' 
  },
  referenceLink: 'https://www.nngroup.com/articles/which-ux-research-methods/',
  content: {
    definition: {
      en: 'Research Types are frameworks for choosing the right method based on what you need to learn. Qualitative research explores "why" through observations and interviews (rich insights, small sample). Quantitative research measures "how many" through surveys and analytics (statistical significance, large sample). Generative research discovers unknown problems. Evaluative research tests known solutions.',
      es: 'Los Tipos de Investigación son marcos para elegir el método correcto basado en lo que necesitas aprender. La investigación cualitativa explora "por qué" a través de observaciones y entrevistas (insights ricos, muestra pequeña). La investigación cuantitativa mide "cuántos" a través de encuestas y analítica (significancia estadística, muestra grande). La investigación generativa descubre problemas desconocidos. La investigación evaluativa prueba soluciones conocidas.'
    },
    why: {
      en: 'User Impact: Wrong research type = wrong insights. Asking "do you like blue?" (quant) when you should ask "why did you abandon checkout?" (qual) wastes users\' time. Business Impact: Qualitative research prevents building features nobody wants. Quantitative research proves ROI to stakeholders with data. Team Impact: Clear research taxonomy prevents "let\'s just do a survey" syndrome and aligns teams on what success looks like.',
      es: 'Impacto en Usuario: Tipo de investigación equivocado = insights equivocados. Preguntar "¿te gusta el azul?" (cuant) cuando deberías preguntar "¿por qué abandonaste el checkout?" (cual) desperdicia tiempo de usuarios. Impacto en Negocio: La investigación cualitativa previene construir características que nadie quiere. La investigación cuantitativa prueba ROI a stakeholders con datos. Impacto en Equipos: Taxonomía de investigación clara previene el síndrome "hagamos solo una encuesta" y alinea equipos en cómo se ve el éxito.'
    },
    keyPrinciples: {
      en: [
        'Qualitative = WHY & HOW (interviews, observations, usability tests). Sample: 5-8 users. Output: Themes, quotes, behavior patterns.',
        'Quantitative = HOW MANY & HOW MUCH (surveys, analytics, A/B tests). Sample: 100+ users. Output: Percentages, correlations, statistical confidence.',
        'Generative = Discover problems (interviews, field studies, diary studies). Answer: "What are users struggling with?"',
        'Evaluative = Validate solutions (usability testing, A/B testing, tree testing). Answer: "Does this design work?"',
        'Use BOTH: Start qual to understand, then quant to measure. Example: Interviews reveal checkout confusion (qual) → Survey 500 users to quantify impact (quant).'
      ],
      es: [
        'Cualitativo = POR QUÉ y CÓMO (entrevistas, observaciones, pruebas de usabilidad). Muestra: 5-8 usuarios. Output: Temas, citas, patrones de comportamiento.',
        'Cuantitativo = CUÁNTOS y CUÁNTO (encuestas, analítica, pruebas A/B). Muestra: 100+ usuarios. Output: Porcentajes, correlaciones, confianza estadística.',
        'Generativa = Descubrir problemas (entrevistas, estudios de campo, estudios de diario). Responde: "¿Con qué están luchando los usuarios?"',
        'Evaluativa = Validar soluciones (pruebas de usabilidad, pruebas A/B, tree testing). Responde: "¿Funciona este diseño?"',
        'Usa AMBOS: Comienza cual para entender, luego cuant para medir. Ejemplo: Entrevistas revelan confusión en checkout (cual) → Encuesta a 500 usuarios para cuantificar impacto (cuant).'
      ]
    },
    commonMistakes: {
      en: [
        'Asking "Would you use this feature?" in interviews (people lie about future behavior - use observational qual instead)',
        'Sending surveys with open-ended questions to 1000 people (impossible to analyze - use quant multiple choice or qual interviews)',
        'Running usability tests with 100 users (diminishing returns after 5-8 - that\'s qual, not quant)',
        'Using only quant data for discovery (analytics show WHAT users do, not WHY - need qual to understand)',
        'Confusing generative with evaluative: Testing a prototype (evaluative) when you haven\'t validated the problem (generative)'
      ],
      es: [
        'Preguntar "¿Usarías esta característica?" en entrevistas (la gente miente sobre comportamiento futuro - usa cual observacional en su lugar)',
        'Enviar encuestas con preguntas abiertas a 1000 personas (imposible de analizar - usa cuant opción múltiple o entrevistas cual)',
        'Ejecutar pruebas de usabilidad con 100 usuarios (rendimientos decrecientes después de 5-8 - eso es cual, no cuant)',
        'Usar solo datos cuant para descubrimiento (analítica muestra QUÉ hacen los usuarios, no POR QUÉ - necesitas cual para entender)',
        'Confundir generativa con evaluativa: Probar un prototipo (evaluativa) cuando no has validado el problema (generativa)'
      ]
    },
    howToApply: {
      steps: [
        {
          name: { en: 'Ask: What do I need to learn?', es: 'Pregunta: ¿Qué necesito aprender?' },
          description: { 
            en: 'Unknown problem space? → Generative Qual (interviews). Known solution to test? → Evaluative (usability test = qual, A/B test = quant). Need to measure? → Quantitative.',
            es: 'Espacio de problema desconocido? → Cual Generativa (entrevistas). Solución conocida para probar? → Evaluativa (prueba de usabilidad = cual, prueba A/B = cuant). Necesitas medir? → Cuantitativa.'
          }
        },
        {
          name: { en: 'Choose Method from Research Matrix', es: 'Elegir Método de Matriz de Investigación' },
          description: { 
            en: 'Generative + Qual: User interviews, field studies. Generative + Quant: Surveys, analytics review. Evaluative + Qual: Usability testing, heuristic evaluation. Evaluative + Quant: A/B testing, tree testing.',
            es: 'Generativa + Cual: Entrevistas de usuario, estudios de campo. Generativa + Cuant: Encuestas, revisión de analítica. Evaluativa + Cual: Pruebas de usabilidad, evaluación heurística. Evaluativa + Cuant: Pruebas A/B, tree testing.'
          }
        },
        {
          name: { en: 'Define Sample Size', es: 'Definir Tamaño de Muestra' },
          description: { 
            en: 'Qual: 5-8 participants (saturation point). Quant: 100+ for statistical confidence. Mixed: 8 interviews + 200 survey responses.',
            es: 'Cual: 5-8 participantes (punto de saturación). Cuant: 100+ para confianza estadística. Mixto: 8 entrevistas + 200 respuestas de encuesta.'
          }
        },
        {
          name: { en: 'Write Research Questions', es: 'Escribir Preguntas de Investigación' },
          description: { 
            en: 'Qual: "Why do users abandon checkout?" Quant: "What % of users abandon at payment step?" Avoid leading questions.',
            es: 'Cual: "¿Por qué los usuarios abandonan el checkout?" Cuant: "¿Qué % de usuarios abandonan en el paso de pago?" Evita preguntas sesgadas.'
          }
        },
        {
          name: { en: 'Recruit & Execute', es: 'Reclutar y Ejecutar' },
          description: { 
            en: 'Qual: Schedule 1-hour sessions, record with consent. Quant: Use survey tools, ensure random sampling. Analyze: Qual = thematic coding. Quant = statistical analysis.',
            es: 'Cual: Programa sesiones de 1 hora, graba con consentimiento. Cuant: Usa herramientas de encuesta, asegura muestreo aleatorio. Analiza: Cual = codificación temática. Cuant = análisis estadístico.'
          }
        }
      ]
    },
    deliverables: {
      description: { 
        en: 'Research artifacts that demonstrate mastery of choosing and executing the right research type.',
        es: 'Artefactos de investigación que demuestran dominio de elegir y ejecutar el tipo de investigación correcto.'
      },
      items: {
        en: [
          'Research plan: Problem statement, research questions, chosen method (qual/quant, generative/evaluative), sample size, timeline',
          'Qualitative: Interview guide, session recordings, affinity map, themes + supporting quotes',
          'Quantitative: Survey design, response data (CSV), statistical analysis, confidence intervals',
          'Generative output: Problem validation report, user needs list, opportunity areas',
          'Evaluative output: Usability test report (task success rates), A/B test results (winner + statistical significance)'
        ],
        es: [
          'Plan de investigación: Declaración de problema, preguntas de investigación, método elegido (cual/cuant, generativa/evaluativa), tamaño de muestra, cronograma',
          'Cualitativa: Guía de entrevista, grabaciones de sesiones, mapa de afinidad, temas + citas de apoyo',
          'Cuantitativa: Diseño de encuesta, datos de respuesta (CSV), análisis estadístico, intervalos de confianza',
          'Output generativa: Informe de validación de problema, lista de necesidades de usuario, áreas de oportunidad',
          'Output evaluativa: Informe de prueba de usabilidad (tasas de éxito de tareas), resultados de prueba A/B (ganador + significancia estadística)'
        ]
      }
    },
    practicalTools: {
      design: { 
        en: ['FigJam (affinity mapping)', 'Miro (research synthesis)', 'Dovetail (qualitative analysis)'], 
        es: ['FigJam (mapeo de afinidad)', 'Miro (síntesis de investigación)', 'Dovetail (análisis cualitativo)'] 
      },
      research: { 
        en: [
          'Qual: Zoom/Meet (interviews), Lookback (moderated testing), UserTesting (unmoderated)',
          'Quant: Google Forms, Typeform, SurveyMonkey (surveys), Google Analytics, Hotjar (behavioral data)',
          'Mixed: Maze (quant tree testing + qual first-click heatmaps), Optimal Workshop'
        ], 
        es: [
          'Cual: Zoom/Meet (entrevistas), Lookback (pruebas moderadas), UserTesting (no moderadas)',
          'Cuant: Google Forms, Typeform, SurveyMonkey (encuestas), Google Analytics, Hotjar (datos de comportamiento)',
          'Mixto: Maze (tree testing cuant + heatmaps de primer clic cual), Optimal Workshop'
        ] 
      },
      handoff: { 
        en: ['Notion (research repository)', 'Dovetail (insights library)', 'Google Sheets (quant data)'], 
        es: ['Notion (repositorio de investigación)', 'Dovetail (biblioteca de insights)', 'Google Sheets (datos cuant)'] 
      }
    },
    aiInPractice: {
      description: { 
        en: 'AI accelerates research design, analysis, and synthesis - but cannot replace talking to real users.',
        es: 'La IA acelera el diseño, análisis y síntesis de investigación - pero no puede reemplazar hablar con usuarios reales.'
      },
      prompts: [
        {
          tool: 'ChatGPT',
          context: { en: 'Designing research plan', es: 'Diseñando plan de investigación' },
          prompt: { 
            en: 'I need to understand why users abandon our checkout flow. Suggest: (1) Is this generative or evaluative research? (2) Qualitative or quantitative method? (3) Sample size? (4) 5 research questions to ask.',
            es: 'Necesito entender por qué los usuarios abandonan nuestro flujo de checkout. Sugiere: (1) ¿Es investigación generativa o evaluativa? (2) ¿Método cualitativo o cuantitativo? (3) ¿Tamaño de muestra? (4) 5 preguntas de investigación para hacer.'
          }
        },
        {
          tool: 'Claude',
          context: { en: 'Analyzing qualitative data', es: 'Analizando datos cualitativos' },
          prompt: { 
            en: 'Here are 6 interview transcripts [paste]. Perform thematic analysis: (1) Identify 4-5 recurring themes. (2) For each theme, provide frequency (X/6 participants) and 1 supporting quote. (3) Rate severity: High/Medium/Low.',
            es: 'Aquí hay 6 transcripciones de entrevistas [pegar]. Realiza análisis temático: (1) Identifica 4-5 temas recurrentes. (2) Para cada tema, proporciona frecuencia (X/6 participantes) y 1 cita de apoyo. (3) Califica severidad: Alta/Media/Baja.'
          }
        },
        {
          tool: 'ChatGPT',
          context: { en: 'Survey design (quantitative)', es: 'Diseño de encuesta (cuantitativo)' },
          prompt: { 
            en: 'Create a 10-question survey to measure user satisfaction with [feature]. Include: (1) Mix of Likert scale and multiple choice. (2) Avoid leading questions. (3) Add 1 optional open-ended question for qual insights.',
            es: 'Crea una encuesta de 10 preguntas para medir satisfacción del usuario con [característica]. Incluye: (1) Mezcla de escala Likert y opción múltiple. (2) Evita preguntas sesgadas. (3) Agrega 1 pregunta abierta opcional para insights cual.'
          }
        }
      ]
    },
    howToValidate: {
      what: { 
        en: 'Validate that your research design will answer your research questions and that your findings are credible.',
        es: 'Valida que tu diseño de investigación responderá tus preguntas de investigación y que tus hallazgos son creíbles.'
      },
      methods: { 
        en: [
          'Peer review: Have another researcher review your research plan and interview guide',
          'Pilot test: Run 1 interview or survey with a colleague to catch confusing questions',
          'Triangulation: Use multiple methods (qual + quant) to validate findings',
          'Saturation check: After 5 qual interviews, if no new themes emerge, you have enough data'
        ],
        es: [
          'Revisión de pares: Que otro investigador revise tu plan de investigación y guía de entrevista',
          'Prueba piloto: Ejecuta 1 entrevista o encuesta con un colega para atrapar preguntas confusas',
          'Triangulación: Usa múltiples métodos (cual + cuant) para validar hallazgos',
          'Verificación de saturación: Después de 5 entrevistas cual, si no emergen temas nuevos, tienes suficientes datos'
        ]
      },
      tools: { 
        en: ['Peer review doc', 'Pilot session recording', 'Cross-method validation matrix'], 
        es: ['Doc de revisión de pares', 'Grabación de sesión piloto', 'Matriz de validación cruzada de métodos'] 
      },
      evidenceExample: { 
        en: 'Qual interviews (8 users) reveal "confusing payment options" as top pain point. Quant survey (n=250) confirms: 68% report payment confusion, with 95% confidence interval. Both methods validate the same finding.',
        es: 'Entrevistas cual (8 usuarios) revelan "opciones de pago confusas" como principal punto de dolor. Encuesta cuant (n=250) confirma: 68% reportan confusión de pago, con intervalo de confianza del 95%. Ambos métodos validan el mismo hallazgo.'
      }
    },
    quiz: [
      {
        question: { 
          en: 'You want to discover why users don\'t complete onboarding. Which research type?', 
          es: '¿Quieres descubrir por qué los usuarios no completan el onboarding. ¿Qué tipo de investigación?' 
        },
        options: {
          en: [
            'Generative + Quantitative (survey)',
            'Generative + Qualitative (interviews)',
            'Evaluative + Quantitative (A/B test)',
            'Evaluative + Qualitative (usability test)'
          ],
          es: [
            'Generativa + Cuantitativa (encuesta)',
            'Generativa + Cualitativa (entrevistas)',
            'Evaluativa + Cuantitativa (prueba A/B)',
            'Evaluativa + Cualitativa (prueba de usabilidad)'
          ]
        },
        correctIndex: 1,
        explanation: {
          en: 'Why it matters: This is Generative (discovering an unknown problem) + Qualitative (understanding "why" through rich insights). Interviews let you ask "why did you stop?" and observe behavior. Surveys (quant) would tell you HOW MANY stop, not WHY. A/B tests require a solution to test (evaluative), which you don\'t have yet.',
          es: 'Por qué importa: Esto es Generativa (descubrir un problema desconocido) + Cualitativa (entender "por qué" a través de insights ricos). Las entrevistas te permiten preguntar "¿por qué te detuviste?" y observar comportamiento. Las encuestas (cuant) te dirían CUÁNTOS se detienen, no POR QUÉ. Las pruebas A/B requieren una solución para probar (evaluativa), que aún no tienes.'
        }
      },
      {
        question: { 
          en: 'How many participants do you need for qualitative usability testing?', 
          es: '¿Cuántos participantes necesitas para pruebas de usabilidad cualitativas?' 
        },
        options: {
          en: [
            '2-3 users',
            '5-8 users',
            '50-100 users',
            'As many as possible'
          ],
          es: [
            '2-3 usuarios',
            '5-8 usuarios',
            '50-100 usuarios',
            'Tantos como sea posible'
          ]
        },
        correctIndex: 1,
        explanation: {
          en: 'Why it matters: Nielsen Norman Group research shows 5 users uncover 85% of usability issues. After 8 users, you hit diminishing returns (saturation). This is qualitative research - you\'re looking for patterns in behavior, not statistical significance. 50-100 users would be quantitative (like A/B testing), which is overkill for finding "why" users struggle.',
          es: 'Por qué importa: La investigación del Nielsen Norman Group muestra que 5 usuarios descubren el 85% de problemas de usabilidad. Después de 8 usuarios, alcanzas rendimientos decrecientes (saturación). Esta es investigación cualitativa - buscas patrones en comportamiento, no significancia estadística. 50-100 usuarios sería cuantitativo (como pruebas A/B), que es excesivo para encontrar "por qué" los usuarios luchan.'
        }
      },
      {
        question: { 
          en: 'You redesigned checkout. Now you want to know if it performs better. Which method?', 
          es: 'Rediseñaste el checkout. Ahora quieres saber si funciona mejor. ¿Qué método?' 
        },
        options: {
          en: [
            'User interviews (Generative Qual)',
            'Survey 500 users (Generative Quant)',
            'A/B test old vs new (Evaluative Quant)',
            'Ask team for opinions (Invalid)'
          ],
          es: [
            'Entrevistas de usuario (Cual Generativa)',
            'Encuestar 500 usuarios (Cuant Generativa)',
            'Prueba A/B viejo vs nuevo (Cuant Evaluativa)',
            'Pedir opiniones al equipo (Inválido)'
          ]
        },
        correctIndex: 2,
        explanation: {
          en: 'Why it matters: This is Evaluative (testing a known solution) + Quantitative (measuring performance with stats). A/B test shows WHICH design performs better with statistical confidence. Interviews (qual) would tell you WHY users prefer one, but won\'t prove it performs better at scale. Generative methods are for discovering problems, not evaluating solutions.',
          es: 'Por qué importa: Esto es Evaluativa (probar una solución conocida) + Cuantitativa (medir rendimiento con estadísticas). La prueba A/B muestra QUÉ diseño funciona mejor con confianza estadística. Las entrevistas (cual) te dirían POR QUÉ los usuarios prefieren uno, pero no probarán que funciona mejor a escala. Los métodos generativos son para descubrir problemas, no evaluar soluciones.'
        }
      }
    ],
    realExample: {
      title: { 
        en: 'Spotify Discover Weekly: Qual + Quant Research', 
        es: 'Discover Weekly de Spotify: Investigación Cual + Cuant' 
      },
      description: {
        en: 'GOOD: Spotify used Generative Qualitative (user interviews) to discover that users felt overwhelmed by music choice. They prototyped "Discover Weekly" and used Evaluative Quantitative (A/B test with 100K users) to measure engagement (+30% vs control). Then Evaluative Qualitative (usability testing) revealed users didn\'t understand the Monday refresh, so they added messaging. BAD: If they had only used quantitative data (analytics), they would have seen low engagement but not WHY. If they had only used qualitative (8 interviews), they couldn\'t prove business value to stakeholders.',
        es: 'BUENO: Spotify usó Cualitativa Generativa (entrevistas de usuario) para descubrir que los usuarios se sentían abrumados por la elección de música. Prototiparon "Discover Weekly" y usaron Cuantitativa Evaluativa (prueba A/B con 100K usuarios) para medir engagement (+30% vs control). Luego Cualitativa Evaluativa (pruebas de usabilidad) reveló que los usuarios no entendían la actualización del lunes, así que agregaron mensajería. MALO: Si solo hubieran usado datos cuantitativos (analítica), habrían visto bajo engagement pero no POR QUÉ. Si solo hubieran usado cualitativo (8 entrevistas), no podrían probar valor de negocio a stakeholders.'
      },
      company: 'Spotify'
    }
  }
},

// MINI EXERCISE (add to lesson content after realExample)
miniExercise: {
  title: { en: 'Exercise: Choose Your Research Method', es: 'Ejercicio: Elige Tu Método de Investigación' },
  scenario: {
    en: 'You\'re designing a new feature: "Save for Later" on an e-commerce app. Match each research question to the correct method.',
    es: 'Estás diseñando una nueva característica: "Guardar para Después" en una app de e-commerce. Empareja cada pregunta de investigación con el método correcto.'
  },
  questions: [
    {
      question: { en: 'Do users need a "Save for Later" feature?', es: '¿Los usuarios necesitan una característica de "Guardar para Después"?' },
      correctAnswer: { en: 'Generative Qual (interviews)', es: 'Cual Generativa (entrevistas)' }
    },
    {
      question: { en: 'What % of users would use "Save for Later"?', es: '¿Qué % de usuarios usaría "Guardar para Después"?' },
      correctAnswer: { en: 'Generative Quant (survey)', es: 'Cuant Generativa (encuesta)' }
    },
    {
      question: { en: 'Can users find the "Save" button in our prototype?', es: '¿Los usuarios pueden encontrar el botón "Guardar" en nuestro prototipo?' },
      correctAnswer: { en: 'Evaluative Qual (usability test)', es: 'Cual Evaluativa (prueba de usabilidad)' }
    },
    {
      question: { en: 'Which "Save" button design gets more clicks?', es: '¿Qué diseño de botón "Guardar" obtiene más clics?' },
      correctAnswer: { en: 'Evaluative Quant (A/B test)', es: 'Cuant Evaluativa (prueba A/B)' }
    }
  ]
},

// CHECKLIST (add to lesson content)
checklist: {
  title: { en: 'Research Type Selection Checklist', es: 'Checklist de Selección de Tipo de Investigación' },
  items: {
    en: [
      '☐ I can clearly state my research question',
      '☐ I know if I\'m discovering a problem (generative) or testing a solution (evaluative)',
      '☐ I know if I need to understand WHY (qual) or measure HOW MANY (quant)',
      '☐ I\'ve chosen the right sample size (5-8 for qual, 100+ for quant)',
      '☐ I\'ve written non-leading questions',
      '☐ I\'ve recruited representative users (not just internal team)',
      '☐ I have a plan to analyze the data (thematic coding for qual, stats for quant)',
      '☐ I know what deliverable I\'ll create (research report, affinity map, survey results)'
    ],
    es: [
      '☐ Puedo declarar claramente mi pregunta de investigación',
      '☐ Sé si estoy descubriendo un problema (generativa) o probando una solución (evaluativa)',
      '☐ Sé si necesito entender POR QUÉ (cual) o medir CUÁNTOS (cuant)',
      '☐ He elegido el tamaño de muestra correcto (5-8 para cual, 100+ para cuant)',
      '☐ He escrito preguntas no sesgadas',
      '☐ He reclutado usuarios representativos (no solo equipo interno)',
      '☐ Tengo un plan para analizar los datos (codificación temática para cual, estadísticas para cuant)',
      '☐ Sé qué entregable crearé (informe de investigación, mapa de afinidad, resultados de encuesta)'
    ]
  }
}
