import { Topic } from './types';

export const userStoriesRequirementsLesson: Topic = {
  id: 'user-stories-and-requirements',
  title: { en: 'User Stories & Requirements', es: 'User Stories y Requisitos' },
  description: { en: 'Transform vague requests into clear, actionable user stories with acceptance criteria and task breakdowns.', es: 'Transforma solicitudes vagas en user stories claras y accionables con criterios de aceptación y desglose de tareas.' },
  status: 'intermediate',
  timeEstimate: '2h 15m',
  reference: { en: 'User Story Mapping (Jeff Patton) + Mike Cohn\'s User Stories Applied', es: 'User Story Mapping (Jeff Patton) + User Stories Applied de Mike Cohn' },
  referenceLink: 'https://www.jpattonassociates.com/user-story-mapping/',
  content: {
    definition: {
      en: 'User stories are short, simple descriptions of a feature told from the user\'s perspective: "As a [type of user], I want [goal] so that [benefit]." They are not complete requirements—they are placeholders for conversations. Requirements are the detailed specifications that define what must be built: functional (what the system does), non-functional (how it performs), constraints (technical/business limits), and dependencies (what else must exist). A well-written story combines the user\'s need with enough detail (acceptance criteria, edge cases, design specs) so engineers can build confidently.',
      es: 'User stories son descripciones cortas y simples de una funcionalidad contada desde perspectiva del usuario: "Como [tipo de usuario], quiero [objetivo] para que [beneficio]." No son requisitos completos—son placeholders para conversaciones. Requisitos son especificaciones detalladas que definen qué debe construirse: funcionales (qué hace el sistema), no funcionales (cómo se desempeña), restricciones (límites técnicos/negocio), y dependencias (qué más debe existir). Una historia bien escrita combina necesidad del usuario con suficiente detalle (criterios de aceptación, casos límite, specs de diseño) para que ingenieros puedan construir con confianza.'
    },
    why: {
      en: 'Without clear stories and requirements, teams waste time building the wrong thing, asking repetitive questions, or shipping incomplete features. Good stories: (1) Keep the focus on user value, not technical implementation, (2) Prevent scope creep by defining "done" upfront, (3) Enable accurate estimation and sprint planning, (4) Create shared understanding between designers, engineers, and product managers. Bad stories ("improve the dashboard", "add a button") lead to confusion, rework, and finger-pointing. Mastering user stories is how designers move from "pixel pushers" to strategic product contributors.',
      es: 'Sin historias y requisitos claros, equipos pierden tiempo construyendo lo incorrecto, haciendo preguntas repetitivas, o lanzando funcionalidades incompletas. Buenas historias: (1) Mantienen foco en valor del usuario, no implementación técnica, (2) Previenen scope creep definiendo "terminado" por adelantado, (3) Permiten estimación precisa y planning de sprint, (4) Crean entendimiento compartido entre diseñadores, ingenieros y product managers. Malas historias ("mejorar el dashboard", "agregar un botón") llevan a confusión, rehacer trabajo y culparse mutuamente. Dominar user stories es cómo diseñadores pasan de "empujadores de píxeles" a contribuidores estratégicos de producto.'
    },
    keyPrinciples: {
      en: [
        'User story anatomy: "As a [user type], I want [goal] so that [benefit]." Example: "As a shopper, I want to save items to a wishlist so that I can purchase them later." Not: "Add wishlist feature."',
        'Acceptance criteria define "done": Use Given/When/Then format. "Given I am logged in, When I click Save to Wishlist, Then the item appears in My Wishlist with a confirmation toast." No AC = no clarity.',
        'Functional requirements: What the system does. "Users can filter products by price range $0-$500." Non-functional: How it performs. "Filter results load in <200ms, works offline, meets WCAG AA contrast."',
        'Edge cases prevent bugs: "What if no results match the filter? What if user has 1,000 wishlist items? What if they are offline?" Document these in AC or as separate subtasks.',
        'Task breakdown: Story → Tasks → Subtasks. Story: user-facing feature. Task: implementation step (e.g., "Create API endpoint"). Subtask: granular work (e.g., "Write unit tests"). Bugs: defects. Spikes: research unknowns.',
        'Definition of Ready (DoR): Story is ready for sprint if it has: (1) User story, (2) Acceptance criteria, (3) Designs in Figma, (4) Dependencies identified, (5) Story points estimated. No DoR = do not commit.',
        'Definition of Done (DoD): Work is done when: (1) Code written and reviewed, (2) Meets all AC, (3) Tested on desktop + mobile, (4) Matches design spec, (5) Deployed to staging. No DoD = "90% done syndrome."',
        'Estimation basics: Use story points (1, 2, 3, 5, 8, 13 Fibonacci) to reflect complexity, not hours. 1 point = trivial change. 8 points = needs breakdown. If >13 points, split the story.'
      ],
      es: [
        'Anatomía de user story: "Como [tipo de usuario], quiero [objetivo] para que [beneficio]." Ejemplo: "Como comprador, quiero guardar artículos en wishlist para comprarlos después." No: "Agregar funcionalidad de wishlist."',
        'Criterios de aceptación definen "terminado": Usa formato Given/When/Then. "Dado que estoy con sesión iniciada, Cuando hago clic en Guardar en Wishlist, Entonces el artículo aparece en Mi Wishlist con toast de confirmación." Sin AC = sin claridad.',
        'Requisitos funcionales: Qué hace el sistema. "Usuarios pueden filtrar productos por rango de precio $0-$500." No funcionales: Cómo se desempeña. "Resultados de filtro cargan en <200ms, funciona offline, cumple contraste WCAG AA."',
        'Casos límite previenen bugs: "¿Qué pasa si ningún resultado coincide con el filtro? ¿Si usuario tiene 1,000 items en wishlist? ¿Si están offline?" Documenta esto en AC o como subtareas separadas.',
        'Desglose de tareas: Historia → Tareas → Subtareas. Historia: funcionalidad de cara al usuario. Tarea: paso de implementación (ej: "Crear endpoint API"). Subtarea: trabajo granular (ej: "Escribir unit tests"). Bugs: defectos. Spikes: investigar incógnitas.',
        'Definition of Ready (DoR): Historia está lista para sprint si tiene: (1) User story, (2) Criterios de aceptación, (3) Diseños en Figma, (4) Dependencias identificadas, (5) Story points estimados. Sin DoR = no comprometerse.',
        'Definition of Done (DoD): Trabajo está terminado cuando: (1) Código escrito y revisado, (2) Cumple todos los AC, (3) Testeado en desktop + móvil, (4) Coincide con spec de diseño, (5) Desplegado a staging. Sin DoD = "síndrome de 90% terminado."',
        'Básicos de estimación: Usa story points (1, 2, 3, 5, 8, 13 Fibonacci) para reflejar complejidad, no horas. 1 punto = cambio trivial. 8 puntos = necesita desglose. Si >13 puntos, divide la historia.'
      ]
    },
    howToApply: {
      steps: [
        {
          name: { en: 'Step 1: Capture the Vague Request', es: 'Paso 1: Captura la Solicitud Vaga' },
          description: { en: 'Stakeholder says: "We need bulk assign for data packs in the admin tool. Users are complaining." Do not start designing yet. Ask: (1) Who is the user? (Answer: Claro admins managing thousands of customers), (2) What is the goal? (Answer: Assign data packs to multiple customers at once instead of one-by-one), (3) What is the benefit? (Answer: Save 10+ hours/week of manual work). Now you have context to write a story.', es: 'Stakeholder dice: "Necesitamos asignación masiva para paquetes de datos en la herramienta admin. Usuarios se están quejando." No empieces a diseñar aún. Pregunta: (1) ¿Quién es el usuario? (Respuesta: Admins de Claro manejando miles de clientes), (2) ¿Cuál es el objetivo? (Respuesta: Asignar paquetes de datos a múltiples clientes a la vez en lugar de uno por uno), (3) ¿Cuál es el beneficio? (Respuesta: Ahorrar 10+ horas/semana de trabajo manual). Ahora tienes contexto para escribir una historia.' }
        },
        {
          name: { en: 'Step 2: Write the User Story', es: 'Paso 2: Escribe la User Story' },
          description: { en: 'Format: "As a [user type], I want [goal] so that [benefit]." Example: "As a Claro admin, I want to assign data packs to multiple customers at once so that I can save time and reduce manual errors." This is your story title. Add it to Jira/Linear. Do not write implementation details here ("use a modal", "add a checkbox"). Those come later. Keep the story focused on user value.', es: 'Formato: "Como [tipo de usuario], quiero [objetivo] para que [beneficio]." Ejemplo: "Como admin de Claro, quiero asignar paquetes de datos a múltiples clientes a la vez para ahorrar tiempo y reducir errores manuales." Este es tu título de historia. Agrégalo a Jira/Linear. No escribas detalles de implementación aquí ("usar modal", "agregar checkbox"). Esos vienen después. Mantén la historia enfocada en valor del usuario.' }
        },
        {
          name: { en: 'Step 3: Define Acceptance Criteria (Given/When/Then)', es: 'Paso 3: Define Criterios de Aceptación (Given/When/Then)' },
          description: { en: 'AC define what "done" looks like. Use Given/When/Then: (1) "Given I am on the customer list, When I select 5 customers and click Assign Data Pack, Then I see a dialog to choose a pack.", (2) "Given I have selected Pack A (5GB), When I confirm, Then all 5 customers receive the pack and I see a success message.", (3) "Given one customer fails (e.g., inactive account), When the bulk assign runs, Then I see which customers succeeded and which failed with error details." Add edge cases: What if 0 customers selected? What if selecting 10,000 customers? What if network error?', es: 'AC definen cómo se ve "terminado". Usa Given/When/Then: (1) "Dado que estoy en lista de clientes, Cuando selecciono 5 clientes y hago clic en Asignar Paquete de Datos, Entonces veo diálogo para elegir paquete.", (2) "Dado que he seleccionado Pack A (5GB), Cuando confirmo, Entonces todos los 5 clientes reciben el paquete y veo mensaje de éxito.", (3) "Dado que un cliente falla (ej: cuenta inactiva), Cuando asignación masiva corre, Entonces veo qué clientes tuvieron éxito y cuáles fallaron con detalles de error." Agrega casos límite: ¿Qué pasa si 0 clientes seleccionados? ¿Si seleccionas 10,000 clientes? ¿Si hay error de red?' }
        },
        {
          name: { en: 'Step 4: Identify Requirements (Functional, Non-Functional, Constraints)', es: 'Paso 4: Identifica Requisitos (Funcionales, No Funcionales, Restricciones)' },
          description: { en: 'Functional: "Users can select customers via checkboxes. Users can choose from a dropdown of available data packs. System validates customer eligibility before assigning." Non-functional: "Bulk assign completes in <5 seconds for 100 customers. UI is responsive on desktop (no mobile for admin tool). Meets WCAG AA." Constraints: "Must use existing /assign-pack API. Cannot exceed 500 customers per request (API limit)." Assumptions: "Admins have permission to assign packs. Data packs are pre-configured in the system." Dependencies: "Requires customer eligibility API (ticket #456)." Document all of these in the story description.', es: 'Funcionales: "Usuarios pueden seleccionar clientes vía checkboxes. Usuarios pueden elegir de dropdown de paquetes de datos disponibles. Sistema valida elegibilidad del cliente antes de asignar." No funcionales: "Asignación masiva completa en <5 segundos para 100 clientes. UI es responsive en desktop (sin móvil para herramienta admin). Cumple WCAG AA." Restricciones: "Debe usar API /assign-pack existente. No puede exceder 500 clientes por solicitud (límite de API)." Supuestos: "Admins tienen permiso para asignar paquetes. Paquetes de datos están preconfigurados en el sistema." Dependencias: "Requiere API de elegibilidad de cliente (ticket #456)." Documenta todo esto en descripción de historia.' }
        },
        {
          name: { en: 'Step 5: Break Down into Tasks', es: 'Paso 5: Desglosa en Tareas' },
          description: { en: 'Story: "Bulk assign data packs." Tasks: (1) "Design: Create Figma mockups for bulk assign modal", (2) "Frontend: Add checkboxes to customer list", (3) "Frontend: Build bulk assign modal UI", (4) "Backend: Create /bulk-assign endpoint", (5) "Backend: Add error handling for partial failures", (6) "QA: Test with 1, 10, 100, 500 customers." Each task is a concrete implementation step. Estimate each task (1-3 story points). If a task is >5 points, break it into subtasks. Example: Task "Build modal UI" → Subtasks: "Create modal component", "Add dropdown for data packs", "Add confirm/cancel buttons", "Write unit tests."', es: 'Historia: "Asignación masiva de paquetes de datos." Tareas: (1) "Diseño: Crear mockups Figma para modal de asignación masiva", (2) "Frontend: Agregar checkboxes a lista de clientes", (3) "Frontend: Construir UI de modal de asignación masiva", (4) "Backend: Crear endpoint /bulk-assign", (5) "Backend: Agregar manejo de errores para fallas parciales", (6) "QA: Testear con 1, 10, 100, 500 clientes." Cada tarea es un paso de implementación concreto. Estima cada tarea (1-3 story points). Si tarea es >5 puntos, rómpela en subtareas. Ejemplo: Tarea "Construir UI de modal" → Subtareas: "Crear componente modal", "Agregar dropdown para paquetes de datos", "Agregar botones confirmar/cancelar", "Escribir unit tests."' }
        }
      ]
    },
    commonMistakes: {
      en: [
        'Writing implementation details in the user story: "As a user, I want a modal with a dropdown..." No—describe the user need, not the UI solution. Let the team decide implementation.',
        'Vague acceptance criteria: "The feature should work well." What does "well" mean? Be specific: "Completes in <5 seconds, shows success/error messages, works for 1-500 customers."',
        'Forgetting edge cases: Happy path only ("user selects customers and assigns pack"). What about: 0 customers selected? Inactive customers? Network timeout? Permission denied? Document these.',
        'Mixing functional and non-functional requirements: "Users can filter (functional) and it loads fast (non-functional)." Separate them. Functional = what. Non-functional = how (performance, accessibility).',
        'No Definition of Ready: Engineers start building without designs, dependencies unclear, story points not estimated. Result: sprint derails mid-sprint. Always enforce DoR before Sprint Planning.',
        'Tasks too large: "Build the entire feature" is not a task. Break it down: frontend work, backend work, testing, documentation. Each task should be completable in 1-2 days max.',
        'Forgetting dependencies: "We will build X." But X requires API Y which is not done yet. Story gets blocked mid-sprint. Always identify dependencies upfront and link related tickets.'
      ],
      es: [
        'Escribir detalles de implementación en user story: "Como usuario, quiero un modal con dropdown..." No—describe necesidad del usuario, no la solución UI. Deja que equipo decida implementación.',
        'Criterios de aceptación vagos: "La funcionalidad debería funcionar bien." ¿Qué significa "bien"? Sé específico: "Completa en <5 segundos, muestra mensajes éxito/error, funciona para 1-500 clientes."',
        'Olvidar casos límite: Solo happy path ("usuario selecciona clientes y asigna paquete"). ¿Qué pasa con: 0 clientes seleccionados? ¿Clientes inactivos? ¿Timeout de red? ¿Permiso denegado? Documenta estos.',
        'Mezclar requisitos funcionales y no funcionales: "Usuarios pueden filtrar (funcional) y carga rápido (no funcional)." Sepáralos. Funcional = qué. No funcional = cómo (rendimiento, accesibilidad).',
        'Sin Definition of Ready: Ingenieros empiezan a construir sin diseños, dependencias poco claras, story points no estimados. Resultado: sprint descarrila a mitad de sprint. Siempre refuerza DoR antes de Sprint Planning.',
        'Tareas muy grandes: "Construir toda la funcionalidad" no es una tarea. Desglósala: trabajo frontend, trabajo backend, testing, documentación. Cada tarea debe ser completable en 1-2 días máx.',
        'Olvidar dependencias: "Construiremos X." Pero X requiere API Y que no está terminada aún. Historia se bloquea a mitad de sprint. Siempre identifica dependencias por adelantado y linkea tickets relacionados.'
      ]
    },
    deliverables: {
      description: {
        en: 'Documents and artifacts produced when writing user stories and requirements.',
        es: 'Documentos y artefactos producidos al escribir user stories y requisitos.'
      },
      items: {
        en: [
          'User story: "As a [user type], I want [goal] so that [benefit]." Concise, user-focused, no implementation details.',
          'Acceptance criteria: Given/When/Then format. Defines what "done" looks like. Includes happy path + edge cases.',
          'Requirements document: Functional (what system does), non-functional (performance, security, accessibility), constraints (tech/business limits), assumptions, dependencies.',
          'Task breakdown: Story → Tasks (implementation steps) → Subtasks (granular work). Each with estimates (story points or hours).',
          'Figma mockups: Wireframes or hi-fi designs linked in the story. Engineers cannot build without them (violates DoR).',
          'Definition of Ready checklist: [ ] User story written, [ ] AC defined, [ ] Designs in Figma, [ ] Dependencies identified, [ ] Story points estimated.',
          'Definition of Done checklist: [ ] Code complete, [ ] Meets all AC, [ ] Tested on desktop + mobile, [ ] Design spec matched, [ ] Deployed to staging.',
          'Risk/edge case log: "What could go wrong?" List: network failures, permission errors, data validation issues, scale problems (e.g., 10,000 items).'
        ],
        es: [
          'User story: "Como [tipo de usuario], quiero [objetivo] para que [beneficio]." Concisa, enfocada en usuario, sin detalles de implementación.',
          'Criterios de aceptación: Formato Given/When/Then. Define cómo se ve "terminado". Incluye happy path + casos límite.',
          'Documento de requisitos: Funcionales (qué hace sistema), no funcionales (rendimiento, seguridad, accesibilidad), restricciones (límites tech/negocio), supuestos, dependencias.',
          'Desglose de tareas: Historia → Tareas (pasos de implementación) → Subtareas (trabajo granular). Cada una con estimaciones (story points u horas).',
          'Mockups Figma: Wireframes o diseños hi-fi linkeados en historia. Ingenieros no pueden construir sin ellos (viola DoR).',
          'Checklist Definition of Ready: [ ] User story escrita, [ ] AC definidos, [ ] Diseños en Figma, [ ] Dependencias identificadas, [ ] Story points estimados.',
          'Checklist Definition of Done: [ ] Código completo, [ ] Cumple todos los AC, [ ] Testeado en desktop + móvil, [ ] Spec de diseño coincidente, [ ] Desplegado a staging.',
          'Log de riesgo/casos límite: "¿Qué podría salir mal?" Lista: fallas de red, errores de permiso, problemas de validación de datos, problemas de escala (ej: 10,000 items).'
        ]
      }
    },
    practicalTools: {
      design: {
        en: ['Figma (mockups + design specs)', 'FigJam (collaborative story mapping)', 'Miro (requirements workshops)', 'Loom (async design demos)'],
        es: ['Figma (mockups + specs de diseño)', 'FigJam (story mapping colaborativo)', 'Miro (workshops de requisitos)', 'Loom (demos de diseño asíncronas)']
      },
      research: {
        en: ['Jira (ticket management + story tracking)', 'Linear (modern alternative with better UX)', 'Asana (simpler for small teams)', 'Shortcut (engineer-friendly)'],
        es: ['Jira (gestión de tickets + tracking de historias)', 'Linear (alternativa moderna con mejor UX)', 'Asana (más simple para equipos pequeños)', 'Shortcut (amigable para ingenieros)']
      },
      handoff: {
        en: ['Confluence (requirements documentation)', 'Notion (team wiki + story templates)', 'Google Docs (collaborative writing)', 'Markdown (lightweight docs in repos)'],
        es: ['Confluence (documentación de requisitos)', 'Notion (wiki de equipo + templates de historias)', 'Google Docs (escritura colaborativa)', 'Markdown (docs ligeros en repos)']
      }
    },
    aiInPractice: {
      description: {
        en: 'AI can help you transform vague requests into structured stories, generate acceptance criteria, and identify edge cases you might miss.',
        es: 'La IA puede ayudarte a transformar solicitudes vagas en historias estructuradas, generar criterios de aceptación e identificar casos límite que podrías perder.'
      },
      prompts: [
        {
          tool: 'ChatGPT',
          context: { en: 'Transform vague requirements into user stories', es: 'Transformar requisitos vagos en user stories' },
          prompt: {
            en: 'I have this vague requirement: "Users need a way to manage their settings." Help me turn this into 3-5 user stories using the format: As a [user type], I want [goal] so that [benefit]. Ask clarifying questions first if needed, then provide the stories. Make sure each story is specific and actionable.',
            es: 'Tengo este requisito vago: "Usuarios necesitan una forma de gestionar sus configuraciones." Ayúdame a convertir esto en 3-5 user stories usando el formato: Como [tipo de usuario], quiero [objetivo] para que [beneficio]. Haz preguntas aclaratorias primero si es necesario, luego proporciona las historias. Asegúrate de que cada historia sea específica y accionable.'
          }
        },
        {
          tool: 'Claude',
          context: { en: 'Generate acceptance criteria from a user story', es: 'Generar criterios de aceptación desde user story' },
          prompt: {
            en: 'User story: "As a Claro admin, I want to assign data packs to multiple customers at once so that I can save time and reduce manual errors." Generate 5-7 acceptance criteria using Given/When/Then format. Include: (1) Happy path, (2) Edge cases (e.g., 0 customers selected, API failure), (3) Non-functional requirements (e.g., performance, accessibility).',
            es: 'User story: "Como admin de Claro, quiero asignar paquetes de datos a múltiples clientes a la vez para ahorrar tiempo y reducir errores manuales." Genera 5-7 criterios de aceptación usando formato Given/When/Then. Incluye: (1) Happy path, (2) Casos límite (ej: 0 clientes seleccionados, falla de API), (3) Requisitos no funcionales (ej: rendimiento, accesibilidad).'
          }
        },
        {
          tool: 'ChatGPT',
          context: { en: 'Identify risks and edge cases for a feature', es: 'Identificar riesgos y casos límite para una funcionalidad' },
          prompt: {
            en: 'Feature: "Bulk assign data packs to customers in an admin tool." Help me identify: (1) Edge cases (e.g., what if 10,000 customers selected?), (2) Error scenarios (e.g., network failure, permission denied), (3) Data validation issues (e.g., inactive customers, duplicate assignments). Format the output as a checklist I can add to my user story.',
            es: 'Funcionalidad: "Asignación masiva de paquetes de datos a clientes en herramienta admin." Ayúdame a identificar: (1) Casos límite (ej: ¿qué pasa si 10,000 clientes seleccionados?), (2) Escenarios de error (ej: falla de red, permiso denegado), (3) Problemas de validación de datos (ej: clientes inactivos, asignaciones duplicadas). Formatea output como checklist que pueda agregar a mi user story.'
          }
        }
      ]
    },
    howToValidate: {
      what: {
        en: 'Validate whether your user stories and requirements are clear, actionable, and complete enough for engineers to build confidently.',
        es: 'Valida si tus user stories y requisitos son claros, accionables y completos para que ingenieros puedan construir con confianza.'
      },
      methods: {
        en: [
          'Story readiness checklist: Before Sprint Planning, ask: Does this story have (1) User story format? (2) Acceptance criteria? (3) Figma mockups? (4) Dependencies identified? (5) Story points estimated? If no to any, story is not ready.',
          'Engineer feedback: After handoff, ask engineers: "Is this clear enough to build from?" If they say "I have questions", your story needs more detail. Track how many questions per story (aim for <3).',
          'Rework rate: Count how many stories come back during sprint with "this does not match requirements" or "we did not know about X." High rework = unclear requirements. Aim for <5% rework rate.',
          'Sprint velocity: If your team consistently misses sprint commitments, the problem might be: (1) Stories are too vague (engineers discover complexity mid-sprint), (2) DoR is not enforced (stories are pulled in without designs), (3) Estimates are inflated because of uncertainty.',
          'Stakeholder satisfaction: After release, ask stakeholders: "Did we build what you expected?" If they are surprised, your requirements missed key details or the story did not capture the real user need.'
        ],
        es: [
          'Checklist de preparación de historia: Antes de Sprint Planning, pregunta: ¿Esta historia tiene (1) Formato de user story? (2) Criterios de aceptación? (3) Mockups Figma? (4) Dependencias identificadas? (5) Story points estimados? Si no a cualquiera, historia no está lista.',
          'Retroalimentación de ingenieros: Después de handoff, pregunta a ingenieros: "¿Esto es suficientemente claro para construir?" Si dicen "Tengo preguntas", tu historia necesita más detalle. Trackea cuántas preguntas por historia (apunta a <3).',
          'Tasa de rehacer: Cuenta cuántas historias regresan durante sprint con "esto no coincide con requisitos" o "no sabíamos sobre X." Alto rehacer = requisitos poco claros. Apunta a <5% tasa de rehacer.',
          'Velocidad de sprint: Si tu equipo consistentemente no cumple compromisos de sprint, el problema podría ser: (1) Historias muy vagas (ingenieros descubren complejidad a mitad de sprint), (2) DoR no se refuerza (historias se jalan sin diseños), (3) Estimaciones infladas por incertidumbre.',
          'Satisfacción de stakeholders: Después de lanzamiento, pregunta a stakeholders: "¿Construimos lo que esperabas?" Si están sorprendidos, tus requisitos perdieron detalles clave o historia no capturó necesidad real del usuario.'
        ]
      },
      tools: {
        en: ['Jira/Linear (track questions per story)', 'Confluence (document lessons learned)', 'Google Forms (stakeholder satisfaction survey)', 'Retro boards (team feedback on story quality)'],
        es: ['Jira/Linear (trackear preguntas por historia)', 'Confluence (documentar lecciones aprendidas)', 'Google Forms (encuesta de satisfacción de stakeholders)', 'Tableros de retro (retroalimentación del equipo sobre calidad de historia)']
      },
      evidenceExample: {
        en: '"Our design team struggled with user stories. Engineers complained: Too vague, missing edge cases, no designs attached. Stories got blocked mid-sprint. We introduced a Definition of Ready: (1) User story in As a/I want/So that format, (2) 5+ acceptance criteria in Given/When/Then, (3) Figma mockups with annotations, (4) Dependencies listed, (5) Story points estimated by whole team. After 3 sprints, rework dropped from 22% to 4%. Engineers said: Finally, we have everything we need. Velocity increased 40% because stories were clear and complete upfront."',
        es: '"Nuestro equipo de diseño luchaba con user stories. Ingenieros se quejaban: Muy vagos, faltan casos límite, sin diseños adjuntos. Historias se bloqueaban a mitad de sprint. Introdujimos Definition of Ready: (1) User story en formato Como/Quiero/Para que, (2) 5+ criterios de aceptación en Given/When/Then, (3) Mockups Figma con anotaciones, (4) Dependencias listadas, (5) Story points estimados por todo el equipo. Después de 3 sprints, rehacer bajó de 22% a 4%. Ingenieros dijeron: Finalmente, tenemos todo lo que necesitamos. Velocidad aumentó 40% porque historias eran claras y completas desde el inicio."'
      }
    },
    quiz: [
      {
        question: {
          en: 'Which of the following is a well-written user story?',
          es: '¿Cuál de las siguientes es una user story bien escrita?'
        },
        options: {
          en: [
            '"Add a modal with a dropdown for data pack selection."',
            '"As a Claro admin, I want to assign data packs to multiple customers at once so that I can save time."',
            '"The system should allow bulk assignment of data packs."',
            '"Improve the admin tool by adding bulk features."'
          ],
          es: [
            '"Agregar un modal con dropdown para selección de paquete de datos."',
            '"Como admin de Claro, quiero asignar paquetes de datos a múltiples clientes a la vez para ahorrar tiempo."',
            '"El sistema debería permitir asignación masiva de paquetes de datos."',
            '"Mejorar la herramienta admin agregando funcionalidades masivas."'
          ]
        },
        correctIndex: 1,
        explanation: {
          en: 'A good user story follows the format: "As a [user type], I want [goal] so that [benefit]." It focuses on the user need, not the implementation (no "modal" or "dropdown"). Options 1, 3, and 4 are either too technical or too vague.',
          es: 'Una buena user story sigue el formato: "Como [tipo de usuario], quiero [objetivo] para que [beneficio]." Se enfoca en necesidad del usuario, no en implementación (sin "modal" o "dropdown"). Opciones 1, 3 y 4 son muy técnicas o muy vagas.'
        }
      },
      {
        question: {
          en: 'You are reviewing a user story before Sprint Planning. It has a user story and 2 acceptance criteria, but no Figma mockups. What should you do?',
          es: 'Estás revisando una user story antes de Sprint Planning. Tiene user story y 2 criterios de aceptación, pero sin mockups Figma. ¿Qué debes hacer?'
        },
        options: {
          en: [
            'Approve it for sprint. Engineers can figure out the UI later.',
            'Say "This does not meet Definition of Ready. Let me add mockups before we commit."',
            'Sketch a quick wireframe on the whiteboard during Planning.',
            'Ask the Product Owner to decide the UI design.'
          ],
          es: [
            'Aprobarlo para sprint. Ingenieros pueden resolver la UI después.',
            'Di "Esto no cumple Definition of Ready. Déjame agregar mockups antes de comprometernos."',
            'Boceta wireframe rápido en pizarra durante Planning.',
            'Pide al Product Owner decidir diseño UI.'
          ]
        },
        correctIndex: 1,
        explanation: {
          en: 'Definition of Ready requires Figma mockups (or equivalent design spec). Without them, engineers cannot build accurately, leading to rework and missed expectations. Push back politely and add the mockups before Sprint Planning.',
          es: 'Definition of Ready requiere mockups Figma (o spec de diseño equivalente). Sin ellos, ingenieros no pueden construir con precisión, llevando a rehacer y expectativas perdidas. Rechaza educadamente y agrega mockups antes de Sprint Planning.'
        }
      },
      {
        question: {
          en: 'Which of the following is an example of a non-functional requirement?',
          es: '¿Cuál de los siguientes es un ejemplo de requisito no funcional?'
        },
        options: {
          en: [
            '"Users can filter products by price range."',
            '"The filter results must load in under 200ms."',
            '"The system validates customer eligibility before assigning data packs."',
            '"Users see a confirmation message after saving."'
          ],
          es: [
            '"Usuarios pueden filtrar productos por rango de precio."',
            '"Los resultados del filtro deben cargar en menos de 200ms."',
            '"El sistema valida elegibilidad del cliente antes de asignar paquetes de datos."',
            '"Usuarios ven mensaje de confirmación después de guardar."'
          ]
        },
        correctIndex: 1,
        explanation: {
          en: 'Non-functional requirements describe how the system performs (performance, security, accessibility), not what it does. "Load in <200ms" is a performance requirement. Options 1, 3, and 4 are functional (they describe what the system does).',
          es: 'Requisitos no funcionales describen cómo se desempeña el sistema (rendimiento, seguridad, accesibilidad), no qué hace. "Cargar en <200ms" es requisito de rendimiento. Opciones 1, 3 y 4 son funcionales (describen qué hace el sistema).'
        }
      }
    ],
    realExample: {
      title: {
        en: 'Claro Admin Tool: Bulk Assign Data Packs (From Vague Request to Shipped Feature)',
        es: 'Herramienta Admin de Claro: Asignación Masiva de Paquetes de Datos (De Solicitud Vaga a Funcionalidad Lanzada)'
      },
      description: {
        en: 'Problem: Claro\'s admin tool allowed assigning data packs to customers, but only one at a time. Admins managing 10,000+ customers were spending 10 hours/week on repetitive manual work. Stakeholder request: "We need bulk assign. Users are complaining." Vague! Solution: Designer asked clarifying questions: (1) Who is the user? (Answer: Claro admins with high customer volume), (2) What is the goal? (Answer: Assign packs to multiple customers at once), (3) What is the benefit? (Answer: Save time, reduce errors). User story: "As a Claro admin, I want to assign data packs to multiple customers at once so that I can save time and reduce manual errors." Acceptance criteria: (1) Given I am on the customer list, When I select 5 customers and click Assign Data Pack, Then I see a modal to choose a pack. (2) Given I have selected Pack A (5GB), When I confirm, Then all 5 customers receive the pack and I see a success summary. (3) Given one customer fails (inactive account), When bulk assign runs, Then I see which succeeded and which failed with error details. Task breakdown: (1) Design: Figma mockups for modal + success/error states, (2) Frontend: Add checkboxes to customer list, (3) Frontend: Build modal UI, (4) Backend: Create /bulk-assign API endpoint, (5) Backend: Add error handling, (6) QA: Test 1, 10, 100, 500 customers. Result: Shipped in 2 sprints. Admins saved 8 hours/week. Error rate dropped 60% (no more manual typos). Product team celebrated: "This is what good requirements look like."',
        es: 'Problema: La herramienta admin de Claro permitía asignar paquetes de datos a clientes, pero solo uno a la vez. Admins manejando 10,000+ clientes pasaban 10 horas/semana en trabajo manual repetitivo. Solicitud de stakeholder: "Necesitamos asignación masiva. Usuarios se quejan." ¡Vago! Solución: Diseñador hizo preguntas aclaratorias: (1) ¿Quién es el usuario? (Respuesta: Admins de Claro con alto volumen de clientes), (2) ¿Cuál es el objetivo? (Respuesta: Asignar paquetes a múltiples clientes a la vez), (3) ¿Cuál es el beneficio? (Respuesta: Ahorrar tiempo, reducir errores). User story: "Como admin de Claro, quiero asignar paquetes de datos a múltiples clientes a la vez para ahorrar tiempo y reducir errores manuales." Criterios de aceptación: (1) Dado que estoy en lista de clientes, Cuando selecciono 5 clientes y hago clic en Asignar Paquete de Datos, Entonces veo modal para elegir paquete. (2) Dado que he seleccionado Pack A (5GB), Cuando confirmo, Entonces todos los 5 clientes reciben paquete y veo resumen de éxito. (3) Dado que un cliente falla (cuenta inactiva), Cuando asignación masiva corre, Entonces veo cuáles tuvieron éxito y cuáles fallaron con detalles de error. Desglose de tareas: (1) Diseño: Mockups Figma para modal + estados éxito/error, (2) Frontend: Agregar checkboxes a lista de clientes, (3) Frontend: Construir UI de modal, (4) Backend: Crear endpoint API /bulk-assign, (5) Backend: Agregar manejo de errores, (6) QA: Testear 1, 10, 100, 500 clientes. Resultado: Lanzado en 2 sprints. Admins ahorraron 8 horas/semana. Tasa de error bajó 60% (no más typos manuales). Equipo de producto celebró: "Así se ven buenos requisitos."'
      },
      company: 'Claro (Case Study)'
    }
  }
};