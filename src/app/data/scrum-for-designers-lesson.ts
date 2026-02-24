import { Topic } from './types';

export const scrumForDesignersLesson: Topic = {
  id: 'scrum-for-designers',
  title: { en: 'Scrum for Designers', es: 'Scrum para Diseñadores' },
  description: { en: 'How designers thrive in Scrum teams: dual-track agile, ticket workflows, and collaborating with developers.', es: 'Cómo los diseñadores prosperan en equipos Scrum: agile de doble vía, flujos de tickets y colaboración con desarrolladores.' },
  status: 'intermediate',
  timeEstimate: '2h 30m',
  reference: { en: 'Scrum Guide + Dual-Track Agile (Jeff Patton)', es: 'Guía de Scrum + Agile de Doble Vía (Jeff Patton)' },
  referenceLink: 'https://www.scrum.org/resources/scrum-guide',
  content: {
    definition: {
      en: 'Scrum is an agile framework for managing product development in iterative cycles called "sprints" (typically 2 weeks). It consists of three roles (Product Owner, Scrum Master, Development Team), five events (Sprint Planning, Daily Standup, Sprint Review, Sprint Retrospective, Backlog Refinement), and three artifacts (Product Backlog, Sprint Backlog, Increment). For designers, Scrum often means working in a "dual-track" model: discovery (research, exploration) runs one sprint ahead of delivery (implementation).',
      es: 'Scrum es un marco ágil para gestionar desarrollo de producto en ciclos iterativos llamados "sprints" (típicamente 2 semanas). Consiste en tres roles (Product Owner, Scrum Master, Equipo de Desarrollo), cinco eventos (Planning, Daily Standup, Review, Retrospectiva, Refinamiento de Backlog), y tres artefactos (Backlog de Producto, Backlog de Sprint, Incremento). Para diseñadores, Scrum a menudo significa trabajar en un modelo de "doble vía": discovery (investigación, exploración) corre un sprint adelante de delivery (implementación).'
    },
    why: {
      en: 'Designers need to understand Scrum because most tech companies use it. Working in Scrum means: (1) Collaborating closely with developers and product managers in short cycles, (2) Writing tickets that engineers can implement, (3) Balancing exploration (UX research, design thinking) with delivery (shipping features). Without Scrum fluency, designers risk becoming bottlenecks or feeling disconnected from the team.',
      es: 'Diseñadores necesitan entender Scrum porque la mayoría de empresas tech lo usan. Trabajar en Scrum significa: (1) Colaborar estrechamente con desarrolladores y product managers en ciclos cortos, (2) Escribir tickets que ingenieros puedan implementar, (3) Balancear exploración (investigación UX, design thinking) con entrega (lanzar funcionalidades). Sin fluidez en Scrum, diseñadores corren riesgo de volverse cuellos de botella o sentirse desconectados del equipo.'
    },
    keyPrinciples: {
      en: [
        'Dual-Track Agile: Discovery (Sprint N) happens in parallel with Delivery (Sprint N-1). Designers stay one sprint ahead, prototyping while engineers build previous sprint work.',
        'Definition of Ready (DoR): A ticket is ready for Sprint Planning when it has: user story, acceptance criteria, designs in Figma, edge cases documented. No DoR = no commitment.',
        'Definition of Done (DoD): Work is done when it is coded, reviewed, tested, and matches the design spec. DoD prevents "90% done" syndrome.',
        'Designers are part of the Dev Team: You are not a service department. You attend all Scrum events (Planning, Standup, Review, Retro) and commit to sprint goals.',
        'Write tickets engineers can build from: Good tickets have wireframes, interaction notes, responsive specs, and links to design system components. Vague tickets = wasted sprint time.',
        'Collaborate, do not hand off: Pair with engineers during implementation. Answer questions in Slack, sit together during Daily Standup, demo designs in Sprint Review.',
        'Protect discovery time: Reserve 20-30% of your sprint capacity for research, user testing, and exploration. Do not fill 100% of your time with delivery work.',
        'Use analytics to validate designs: Every ticket should include "events to track" so you can measure success post-launch (e.g., "Track click on Save button").'
      ],
      es: [
        'Agile de Doble Vía: Discovery (Sprint N) ocurre en paralelo con Delivery (Sprint N-1). Diseñadores se mantienen un sprint adelante, prototipando mientras ingenieros construyen trabajo del sprint anterior.',
        'Definition of Ready (DoR): Un ticket está listo para Sprint Planning cuando tiene: user story, criterios de aceptación, diseños en Figma, casos límite documentados. Sin DoR = sin compromiso.',
        'Definition of Done (DoD): Trabajo está terminado cuando está codificado, revisado, testeado y coincide con spec de diseño. DoD previene síndrome de "90% terminado".',
        'Diseñadores son parte del Equipo Dev: No eres un departamento de servicio. Asistes a todos los eventos Scrum (Planning, Standup, Review, Retro) y te comprometes a objetivos del sprint.',
        'Escribe tickets que ingenieros puedan construir: Buenos tickets tienen wireframes, notas de interacción, specs responsive y links a componentes del design system. Tickets vagos = tiempo de sprint desperdiciado.',
        'Colabora, no entregues y te vayas: Trabaja en pareja con ingenieros durante implementación. Responde preguntas en Slack, siéntate junto en Daily Standup, demuestra diseños en Sprint Review.',
        'Protege tiempo de discovery: Reserva 20-30% de tu capacidad de sprint para investigación, pruebas de usuario y exploración. No llenes 100% de tu tiempo con trabajo de delivery.',
        'Usa analytics para validar diseños: Cada ticket debe incluir "eventos a trackear" para poder medir éxito post-lanzamiento (ej: "Trackear clic en botón Guardar").'
      ]
    },
    howToApply: {
      steps: [
        {
          name: { en: 'Sprint Planning: Commit to What You Can Design AND Implement', es: 'Sprint Planning: Comprométete a Lo Que Puedes Diseñar E Implementar' },
          description: { en: 'Product Owner presents prioritized backlog. Team estimates story points (1, 2, 3, 5, 8, 13 Fibonacci). Designers: speak up if designs are not ready (missing DoR). Do not let the team pull in work that has no wireframes. Ask: "Do we have mockups? Are edge cases defined? Is this linked to Figma?" If no, push it to next sprint. Commit only to tickets with complete design specs.', es: 'Product Owner presenta backlog priorizado. Equipo estima puntos de historia (1, 2, 3, 5, 8, 13 Fibonacci). Diseñadores: habla si diseños no están listos (falta DoR). No permitas que el equipo jale trabajo sin wireframes. Pregunta: "¿Tenemos mockups? ¿Casos límite definidos? ¿Está linkado a Figma?" Si no, empújalo al próximo sprint. Comprométete solo a tickets con specs de diseño completas.' }
        },
        {
          name: { en: 'Daily Standup: Share Design Progress, Not Just Implementation', es: 'Daily Standup: Comparte Progreso de Diseño, No Solo Implementación' },
          description: { en: '15-minute standup: What did I do yesterday? What will I do today? Any blockers? Designers should mention: "Yesterday: finalized checkout flow in Figma. Today: pair with Sarah on responsive breakpoints. Blocker: waiting on user research data from PM." Do not say "working on designs" (too vague). Be specific: which ticket, which screen, who you need input from.', es: 'Standup de 15 minutos: ¿Qué hice ayer? ¿Qué haré hoy? ¿Algún bloqueador? Diseñadores deben mencionar: "Ayer: finalicé flujo de checkout en Figma. Hoy: trabajar en pareja con Sarah en breakpoints responsive. Bloqueador: esperando datos de investigación de usuario del PM." No digas "trabajando en diseños" (muy vago). Sé específico: qué ticket, qué pantalla, de quién necesitas input.' }
        },
        {
          name: { en: 'Backlog Refinement: Add UX Specs to Upcoming Tickets', es: 'Refinamiento de Backlog: Agrega UX Specs a Tickets Próximos' },
          description: { en: 'Mid-sprint session (1-2 hours) where team reviews next sprint tickets. This is where designers add value: "This ticket says Add filter button. I will sketch 3 options: dropdown, drawer, modal. Let me add wireframes and we can discuss next week." Update ticket with: (1) Link to Figma draft, (2) Open questions (e.g., "Do we show count badges?"), (3) Related tickets (e.g., "Depends on API ticket #456").', es: 'Sesión a mitad de sprint (1-2 horas) donde equipo revisa tickets del próximo sprint. Aquí diseñadores agregan valor: "Este ticket dice Agregar botón de filtro. Voy a bocetear 3 opciones: dropdown, drawer, modal. Déjame agregar wireframes y podemos discutir la próxima semana." Actualiza ticket con: (1) Link a borrador de Figma, (2) Preguntas abiertas (ej: "¿Mostramos badges de conteo?"), (3) Tickets relacionados (ej: "Depende de ticket API #456").' }
        },
        {
          name: { en: 'Sprint Review: Demo Shipped Work + Show Upcoming Designs', es: 'Sprint Review: Demuestra Trabajo Lanzado + Muestra Diseños Próximos' },
          description: { en: 'End-of-sprint demo (1 hour). Engineers show working software. Designers: (1) Demo implemented features live (not just Figma), (2) Show before/after comparisons, (3) Preview next sprint designs: "Here is what we are building next: a new onboarding flow. Early sketches in Figma." Stakeholders give feedback. PO decides what to release. Do not skip Review—it is how you build stakeholder trust.', es: 'Demo de fin de sprint (1 hora). Ingenieros muestran software funcionando. Diseñadores: (1) Demuestra funcionalidades implementadas en vivo (no solo Figma), (2) Muestra comparaciones antes/después, (3) Previsualiza diseños del próximo sprint: "Esto es lo que construiremos después: nuevo flujo de onboarding. Bocetos tempranos en Figma." Stakeholders dan retroalimentación. PO decide qué liberar. No te saltes Review—es cómo construyes confianza de stakeholders.' }
        },
        {
          name: { en: 'Sprint Retrospective: Reflect on Design-Dev Collaboration', es: 'Retrospectiva de Sprint: Reflexiona sobre Colaboración Diseño-Dev' },
          description: { en: 'Team-only session (1 hour). What went well? What did not? What to improve? Designers should raise: "I felt like I was handing off designs late. Can we do more pairing?" or "Engineers asked me questions during standup but I did not have answers. I need to be more available on Slack." Retro is safe space. Be honest. Suggest process improvements: "Can we add a design checkpoint before Sprint Planning?"', es: 'Sesión solo del equipo (1 hora). ¿Qué fue bien? ¿Qué no? ¿Qué mejorar? Diseñadores deben plantear: "Sentí que estaba entregando diseños tarde. ¿Podemos hacer más trabajo en pareja?" o "Ingenieros me hicieron preguntas en standup pero no tenía respuestas. Necesito estar más disponible en Slack." Retro es espacio seguro. Sé honesto. Sugiere mejoras de proceso: "¿Podemos agregar checkpoint de diseño antes de Sprint Planning?"' }
        }
      ]
    },
    commonMistakes: {
      en: [
        'Treating design as a waterfall phase: "I will finish all designs, then hand them to developers." No—design and dev happen in parallel. Pair early and often.',
        'Writing vague tickets: "Improve the homepage." Engineers cannot estimate or build from that. Specify: "Add hero section with CTA button, 3-column feature grid, testimonial carousel."',
        'Not attending Scrum events: "I am too busy designing to go to standup." Wrong. Scrum events are where alignment happens. Missing them = surprises and rework.',
        'Over-designing before validation: Spending 2 weeks on pixel-perfect mockups for a feature that might get cut. Use lo-fi wireframes in early sprints. Polish later.',
        'Ignoring Definition of Done: Engineers say "it is done" but it does not match your design. Set clear DoD: "Matches Figma, passes accessibility audit, tested on mobile."',
        'No design buffer for discovery: Filling 100% of sprint capacity with delivery tickets. You need time for research, exploration, and design debt. Reserve 20-30% for discovery.',
        'Not tracking design in tickets: Work happens in Figma but never gets logged in Jira. Result: your work is invisible to the team. Always link designs to tickets.'
      ],
      es: [
        'Tratar diseño como fase de cascada: "Terminaré todos los diseños, luego los entregaré a desarrolladores." No—diseño y dev ocurren en paralelo. Trabaja en pareja temprano y seguido.',
        'Escribir tickets vagos: "Mejorar la homepage." Ingenieros no pueden estimar o construir con eso. Especifica: "Agregar sección hero con botón CTA, grilla de funcionalidades de 3 columnas, carrusel de testimonios."',
        'No asistir a eventos Scrum: "Estoy muy ocupado diseñando para ir a standup." Mal. Eventos Scrum son donde ocurre alineación. Perdérselos = sorpresas y rehacer trabajo.',
        'Sobre-diseñar antes de validación: Pasar 2 semanas en mockups perfectos de píxeles para una funcionalidad que podría cortarse. Usa wireframes lo-fi en sprints tempranos. Pule después.',
        'Ignorar Definition of Done: Ingenieros dicen "está terminado" pero no coincide con tu diseño. Establece DoD claro: "Coincide con Figma, pasa auditoría de accesibilidad, testeado en móvil."',
        'Sin buffer de diseño para discovery: Llenar 100% de capacidad de sprint con tickets de delivery. Necesitas tiempo para investigación, exploración y deuda de diseño. Reserva 20-30% para discovery.',
        'No trackear diseño en tickets: Trabajo ocurre en Figma pero nunca se registra en Jira. Resultado: tu trabajo es invisible para el equipo. Siempre linkea diseños a tickets.'
      ]
    },
    deliverables: {
      description: {
        en: 'Artifacts and documents designers produce during Scrum sprints.',
        es: 'Artefactos y documentos que diseñadores producen durante sprints Scrum.'
      },
      items: {
        en: [
          'User stories: "As a [user type], I want [goal] so that [benefit]." Example: "As a shopper, I want to filter by price so that I can find affordable products."',
          'Acceptance criteria (Given/When/Then): Conditions that must be true for ticket to be done. Example: "Given I am on the product list, When I select $0-$50, Then only products in that range are shown."',
          'Wireframes/mockups: Lo-fi sketches (Backlog Refinement) → hi-fi mockups (Sprint Planning) → final screens (Implementation). All linked in Figma.',
          'Design checklist: Per ticket: [ ] Mobile responsive, [ ] Dark mode variant, [ ] Empty state, [ ] Loading state, [ ] Error handling, [ ] Accessibility notes.',
          'Interaction specs: Hover states, animations, transitions. Example: "On hover, button background changes from blue-600 to blue-700, 200ms ease."',
          'Figma handoff: Organized frames with annotations, Inspect mode enabled, design tokens documented, component library linked.'
        ],
        es: [
          'User stories: "Como [tipo de usuario], quiero [objetivo] para que [beneficio]." Ejemplo: "Como comprador, quiero filtrar por precio para encontrar productos asequibles."',
          'Criterios de aceptación (Given/When/Then): Condiciones que deben ser verdaderas para que ticket esté terminado. Ejemplo: "Dado que estoy en lista de productos, Cuando selecciono $0-$50, Entonces solo se muestran productos en ese rango."',
          'Wireframes/mockups: Bocetos lo-fi (Refinamiento de Backlog) → mockups hi-fi (Sprint Planning) → pantallas finales (Implementación). Todo linkeado en Figma.',
          'Checklist de diseño: Por ticket: [ ] Responsive móvil, [ ] Variante dark mode, [ ] Estado vacío, [ ] Estado de carga, [ ] Manejo de errores, [ ] Notas de accesibilidad.',
          'Specs de interacción: Estados hover, animaciones, transiciones. Ejemplo: "En hover, fondo de botón cambia de blue-600 a blue-700, 200ms ease."',
          'Handoff de Figma: Frames organizados con anotaciones, modo Inspect habilitado, tokens de diseño documentados, librería de componentes linkeada.'
        ]
      }
    },
    practicalTools: {
      design: {
        en: ['Figma (design + handoff)', 'FigJam (sprint planning boards)', 'Miro (retrospectives)', 'Sketch (alternative to Figma)'],
        es: ['Figma (diseño + handoff)', 'FigJam (tableros de sprint planning)', 'Miro (retrospectivas)', 'Sketch (alternativa a Figma)']
      },
      research: {
        en: ['Jira (ticket management)', 'Linear (modern alternative)', 'Asana (simpler option)', 'Monday.com (visual boards)'],
        es: ['Jira (gestión de tickets)', 'Linear (alternativa moderna)', 'Asana (opción más simple)', 'Monday.com (tableros visuales)']
      },
      handoff: {
        en: ['Confluence (documentation)', 'Notion (team wiki)', 'Slack (async communication)', 'Loom (async design demos)'],
        es: ['Confluence (documentación)', 'Notion (wiki del equipo)', 'Slack (comunicación asíncrona)', 'Loom (demos de diseño asíncronas)']
      }
    },
    aiInPractice: {
      description: {
        en: 'AI can help you write better user stories, generate acceptance criteria, and summarize sprint reviews.',
        es: 'La IA puede ayudarte a escribir mejores user stories, generar criterios de aceptación y resumir sprint reviews.'
      },
      prompts: [
        {
          tool: 'ChatGPT',
          context: { en: 'Rewrite vague requirements into user stories', es: 'Reescribir requisitos vagos en user stories' },
          prompt: {
            en: 'I have this vague requirement: "Users should be able to filter products." Rewrite it as a proper user story with the format: As a [user type], I want [goal] so that [benefit]. Then, list 3 edge cases to consider (e.g., what happens if no results match the filter?).',
            es: 'Tengo este requisito vago: "Usuarios deberían poder filtrar productos." Reescríbelo como user story apropiada con formato: Como [tipo de usuario], quiero [objetivo] para que [beneficio]. Luego, lista 3 casos límite a considerar (ej: ¿qué pasa si ningún resultado coincide con el filtro?).'
          }
        },
        {
          tool: 'Claude',
          context: { en: 'Generate acceptance criteria from a user story', es: 'Generar criterios de aceptación desde user story' },
          prompt: {
            en: 'User story: "As a shopper, I want to filter products by price range so that I can find affordable items." Generate 5 acceptance criteria using Given/When/Then format. Include: happy path, edge cases (no results, invalid input), and mobile considerations.',
            es: 'User story: "Como comprador, quiero filtrar productos por rango de precio para encontrar artículos asequibles." Genera 5 criterios de aceptación usando formato Given/When/Then. Incluye: happy path, casos límite (sin resultados, input inválido) y consideraciones móviles.'
          }
        },
        {
          tool: 'ChatGPT',
          context: { en: 'Summarize sprint review into action items', es: 'Resumir sprint review en action items' },
          prompt: {
            en: 'We just had a Sprint Review. Here are the raw notes: [paste notes]. Summarize into: (1) What shipped this sprint (3 bullet points), (2) Stakeholder feedback (key themes), (3) Action items for next sprint (who owns what). Format as a Slack message I can post in #team-updates.',
            es: 'Acabamos de tener Sprint Review. Aquí están las notas crudas: [pegar notas]. Resume en: (1) Qué se lanzó este sprint (3 puntos), (2) Retroalimentación de stakeholders (temas clave), (3) Action items para próximo sprint (quién es dueño de qué). Formatea como mensaje de Slack que pueda postear en #team-updates.'
          }
        }
      ]
    },
    howToValidate: {
      what: {
        en: 'Validate whether your Scrum process is working: Are designs shipping on time? Is the team aligned? Are you reducing rework? Track these measurable indicators sprint over sprint to prove your process is improving.',
        es: 'Valida si tu proceso Scrum está funcionando: ¿Los diseños se lanzan a tiempo? ¿El equipo está alineado? ¿Estás reduciendo retrabajo? Trackea estos indicadores medibles sprint tras sprint para probar que tu proceso está mejorando.'
      },
      methods: {
        en: [
          'Sprint velocity: Track story points completed per sprint. If design tickets consistently slip, you are over-committing or missing DoR.',
          'Rework rate: Count how many tickets come back with "does not match design" feedback. High rework = poor handoff or unclear specs. Target: <5% of tickets.',
          'Cycle time: Measure time from "ticket created" to "shipped to users." Long cycle time = bottlenecks in design or dev.',
          'Designer availability: Are engineers blocked waiting for design answers? Track "blocked by design" tags in Jira. Aim for <5% of sprint time.',
          'Stakeholder satisfaction: After Sprint Review, ask: "Did you see what you expected?" If stakeholders are surprised, your communication is failing.',
          'Dev clarification questions: Count mid-sprint "how should this look?" questions. Decreasing trend = better specs. Target: <3 per sprint.',
          'Sprint spillover rate: % of design tickets that don\'t complete in the sprint they were committed to. Target: <10%.',
          'UX delivery within sprint: % of UX work that ships inside the same sprint cycle (not carried over). Target: >85%.',
          'Design rework %: Track tickets returned with "doesn\'t match design" divided by total tickets. Trend should decrease sprint over sprint.'
        ],
        es: [
          'Velocidad de sprint: Trackea puntos de historia completados por sprint. Si tickets de diseño consistentemente se retrasan, estás sobre-comprometiéndote o falta DoR.',
          'Tasa de retrabajo: Cuenta cuántos tickets regresan con feedback de "no coincide con diseño". Alto retrabajo = mal handoff o specs poco claras. Objetivo: <5% de tickets.',
          'Tiempo de ciclo: Mide tiempo desde "ticket creado" hasta "lanzado a usuarios." Tiempo de ciclo largo = cuellos de botella en diseño o dev.',
          'Disponibilidad del diseñador: ¿Ingenieros están bloqueados esperando respuestas de diseño? Trackea tags "bloqueado por diseño" en Jira. Apunta a <5% de tiempo de sprint.',
          'Satisfacción de stakeholders: Después de Sprint Review, pregunta: "¿Viste lo que esperabas?" Si stakeholders se sorprenden, tu comunicación está fallando.',
          'Preguntas de aclaración de dev: Cuenta preguntas "¿cómo debería verse esto?" a mitad de sprint. Tendencia decreciente = mejores specs. Objetivo: <3 por sprint.',
          'Tasa de spillover de sprint: % de tickets de diseño que no se completan en el sprint al que se comprometieron. Objetivo: <10%.',
          'Entrega UX dentro del sprint: % de trabajo UX que se lanza dentro del mismo ciclo de sprint (no se arrastra). Objetivo: >85%.',
          'Retrabajo de diseño %: Trackea tickets devueltos con "no coincide con diseño" dividido por total de tickets. La tendencia debería decrecer sprint tras sprint.'
        ]
      },
      tools: {
        en: ['Jira (velocity reports)', 'Linear (cycle time analytics)', 'Confluence (sprint retrospective notes)', 'Figma (version history to track iteration)'],
        es: ['Jira (reportes de velocidad)', 'Linear (análisis de tiempo de ciclo)', 'Confluence (notas de retrospectiva de sprint)', 'Figma (historial de versiones para trackear iteración)']
      },
      evidenceExample: {
        en: '"Our design team struggled with Scrum. Developers complained we were handing off wireframes too late, causing sprint delays. We introduced Definition of Ready: no ticket enters Sprint Planning without Figma mockups. After 3 sprints, our velocity increased 30% and rework dropped from 15% to 3%. Engineers now trust our specs and we pair more during implementation. Key lesson: DoR is not bureaucracy—it is alignment."',
        es: '"Nuestro equipo de diseño luchaba con Scrum. Desarrolladores se quejaban de que entregábamos wireframes muy tarde, causando retrasos de sprint. Introdujimos Definition of Ready: ningún ticket entra a Sprint Planning sin mockups de Figma. Después de 3 sprints, nuestra velocidad aumentó 30% y rehacer bajó de 15% a 3%. Ingenieros ahora confían en nuestros specs y trabajamos más en pareja durante implementación. Lección clave: DoR no es burocracia—es alineación."'
      }
    },
    quiz: [
      {
        question: {
          en: 'It is Sprint Planning. The Product Owner wants to pull in a high-priority ticket, but it has no designs yet. What do you do?',
          es: 'Es Sprint Planning. El Product Owner quiere jalar un ticket de alta prioridad, pero no tiene diseños aún. ¿Qué haces?'
        },
        options: {
          en: [
            'Agree to design it during the sprint while engineers wait.',
            'Say "This ticket does not meet Definition of Ready. Let me add it to next sprint after I create mockups."',
            'Sketch a quick wireframe on the whiteboard and say "good enough."',
            'Let the engineers start building and promise to send designs later.'
          ],
          es: [
            'Acepta diseñarlo durante el sprint mientras ingenieros esperan.',
            'Di "Este ticket no cumple Definition of Ready. Déjame agregarlo al próximo sprint después de crear mockups."',
            'Boceta un wireframe rápido en la pizarra y di "suficientemente bueno."',
            'Deja que ingenieros comiencen a construir y promete enviar diseños después.'
          ]
        },
        correctIndex: 1,
        explanation: {
          en: 'Do not commit to tickets without designs. It causes delays, rework, and frustration. Push back politely: "I can prioritize this for next sprint. Let me create mockups this week so it is ready." Definition of Ready protects the team from chaos.',
          es: 'No te comprometas a tickets sin diseños. Causa retrasos, rehacer y frustración. Rechaza educadamente: "Puedo priorizar esto para próximo sprint. Déjame crear mockups esta semana para que esté listo." Definition of Ready protege al equipo del caos.'
        }
      },
      {
        question: {
          en: 'An engineer asks during Daily Standup: "Your design shows a dropdown, but what happens if there are 100 items?" You have not thought about this. What do you say?',
          es: 'Un ingeniero pregunta durante Daily Standup: "Tu diseño muestra un dropdown, pero ¿qué pasa si hay 100 items?" No has pensado en esto. ¿Qué dices?'
        },
        options: {
          en: [
            '"Good question. Let me research best practices and update the Figma file by end of day. I will ping you in Slack."',
            '"Just build what is in the design. We can fix it later if users complain."',
            '"That is an edge case. It probably will not happen, so do not worry about it."',
            '"I am not sure. Ask the Product Owner."'
          ],
          es: [
            '"Buena pregunta. Déjame investigar mejores prácticas y actualizar el archivo Figma para fin del día. Te enviaré ping en Slack."',
            '"Solo construye lo que está en el diseño. Podemos arreglarlo después si usuarios se quejan."',
            '"Eso es un caso límite. Probablemente no pasará, así que no te preocupes."',
            '"No estoy seguro. Pregúntale al Product Owner."'
          ]
        },
        correctIndex: 0,
        explanation: {
          en: 'Acknowledge the gap, own the solution, give a timeline. This builds trust. Saying "just build it" or "not my problem" damages collaboration. Good designers anticipate edge cases, but when you miss one, respond quickly.',
          es: 'Reconoce la brecha, apropia la solución, da un timeline. Esto construye confianza. Decir "solo constrúyelo" o "no es mi problema" daña colaboración. Buenos diseñadores anticipan casos límite, pero cuando pierdes uno, responde rápido.'
        }
      },
      {
        question: {
          en: 'Your team wants to adopt "dual-track agile." What does this mean for you as a designer?',
          es: 'Tu equipo quiere adoptar "agile de doble vía." ¿Qué significa esto para ti como diseñador?'
        },
        options: {
          en: [
            'You design everything upfront in a big batch before engineers start building.',
            'You work one sprint ahead: while engineers build Sprint N, you prototype Sprint N+1.',
            'You only design after engineers finish coding so you can see what they built.',
            'You split your time 50/50: mornings on design, afternoons on QA testing.'
          ],
          es: [
            'Diseñas todo por adelantado en un lote grande antes de que ingenieros comiencen a construir.',
            'Trabajas un sprint adelante: mientras ingenieros construyen Sprint N, tú prototipas Sprint N+1.',
            'Solo diseñas después de que ingenieros terminen de codificar para poder ver qué construyeron.',
            'Divides tu tiempo 50/50: mañanas en diseño, tardes en pruebas de QA.'
          ]
        },
        correctIndex: 1,
        explanation: {
          en: 'Dual-track agile means designers stay one sprint ahead. While engineers implement this sprint work, you research and prototype next sprint features. This prevents bottlenecks and ensures DoR is met.',
          es: 'Agile de doble vía significa que diseñadores se mantienen un sprint adelante. Mientras ingenieros implementan trabajo de este sprint, tú investigas y prototipas funcionalidades del próximo sprint. Esto previene cuellos de botella y asegura que DoR se cumpla.'
        }
      }
    ],
    realExample: {
      title: {
        en: 'E-commerce Team: From Handoff Hell to Dual-Track Flow',
        es: 'Equipo E-commerce: Del Infierno de Handoff a Flujo de Doble Vía'
      },
      description: {
        en: 'Problem: A 10-person e-commerce team (2 designers, 6 engineers, 1 PM, 1 QA) struggled with Scrum. Designers were bottlenecks: engineers started sprints without mockups, leading to "does this look right?" Slack messages mid-sprint. Velocity was low (12 story points/sprint). Solution: (1) Introduced Definition of Ready: no ticket without Figma link, acceptance criteria, and mobile specs. (2) Adopted dual-track: designers worked one sprint ahead, prototyping in Sprint N while engineers built Sprint N-1. (3) Added design checklist to every ticket: [ ] Responsive, [ ] Dark mode, [ ] Empty state, [ ] Loading spinner, [ ] Error handling. Result: After 4 sprints, velocity increased to 22 points/sprint. Rework dropped from 18% to 4%. Engineers reported: "We finally have what we need to build confidently." Designers felt less reactive, more strategic.',
        es: 'Problema: Equipo e-commerce de 10 personas (2 diseñadores, 6 ingenieros, 1 PM, 1 QA) luchaba con Scrum. Diseñadores eran cuellos de botella: ingenieros comenzaban sprints sin mockups, llevando a mensajes de Slack "¿esto se ve bien?" a mitad de sprint. Velocidad era baja (12 puntos de historia/sprint). Solución: (1) Introdujo Definition of Ready: ningún ticket sin link de Figma, criterios de aceptación y specs móviles. (2) Adoptó doble vía: diseñadores trabajaban un sprint adelante, prototipando en Sprint N mientras ingenieros construían Sprint N-1. (3) Agregó checklist de diseño a cada ticket: [ ] Responsive, [ ] Dark mode, [ ] Estado vacío, [ ] Spinner de carga, [ ] Manejo de errores. Resultado: Después de 4 sprints, velocidad aumentó a 22 puntos/sprint. Rehacer bajó de 18% a 4%. Ingenieros reportaron: "Finalmente tenemos lo que necesitamos para construir con confianza." Diseñadores se sintieron menos reactivos, más estratégicos.'
      },
      company: 'ShopFast (Case Study)'
    }
  }
};