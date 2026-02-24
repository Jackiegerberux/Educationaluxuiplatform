import { Topic } from './types';

export const uxDocumentationProLesson: Topic = {
  id: 'ux-documentation-pro',
  title: { en: 'UX Documentation Pro', es: 'Documentación UX Pro' },
  description: {
    en: 'Enterprise-grade UX documentation that eliminates ambiguity, protects design decisions, and scales across cross-functional teams — far beyond sharing a Figma link.',
    es: 'Documentación UX de nivel enterprise que elimina ambigüedad, protege decisiones de diseño y escala entre equipos cross-funcionales — mucho más allá de compartir un link de Figma.'
  },
  status: 'advanced',
  timeEstimate: '2h 30m',
  tag: 'Strategy',
  reference: { en: 'Communicating Design - Dan M. Brown', es: 'Comunicando Diseño - Dan M. Brown' },
  referenceLink: 'https://www.oreilly.com/library/view/communicating-design-2nd/9780131385399/',
  content: {
    // ─── 1. OVERVIEW ────────────────────────────────────────────
    definition: {
      en: 'Enterprise UX documentation is the structured practice of recording design decisions, interaction behaviors, edge cases, and acceptance criteria in a way that eliminates ambiguity for engineering, QA, and product teams. It goes far beyond the Figma file itself.\n\nA Figma link is not documentation — it is a visual artifact. It shows what the interface looks like but says nothing about how a dropdown behaves when 200 items are loaded, what happens when a session expires mid-form, why a particular layout was chosen over three alternatives, or how the design should degrade on a 320px screen. These are the questions engineers ask at 11 PM on a Friday when the designer is unavailable.\n\nThe gap between startup-level and enterprise-level documentation is enormous. In a 5-person startup, the designer sits next to the developer — ambiguity resolves in a 30-second conversation. In a 200-person enterprise with distributed teams across time zones, that same ambiguity becomes a blocked ticket, a wrong implementation, a QA defect, and a rework cycle that costs the company 2-3 sprint days. Enterprise documentation is not bureaucracy — it is a force multiplier that turns a single design decision into a self-serve resource accessible to every team member, at any time, without requiring synchronous communication.',
      es: 'La documentación UX enterprise es la práctica estructurada de registrar decisiones de diseño, comportamientos de interacción, edge cases y criterios de aceptación de una forma que elimina ambigüedad para equipos de ingeniería, QA y producto. Va mucho más allá del archivo Figma en sí.\n\nUn link de Figma no es documentación — es un artefacto visual. Muestra cómo se ve la interfaz pero no dice nada sobre cómo se comporta un dropdown cuando se cargan 200 ítems, qué pasa cuando una sesión expira a mitad de formulario, por qué se eligió un layout particular sobre tres alternativas, o cómo el diseño debería degradarse en una pantalla de 320px. Estas son las preguntas que los ingenieros hacen a las 11 PM un viernes cuando el diseñador no está disponible.\n\nLa brecha entre documentación nivel startup y nivel enterprise es enorme. En una startup de 5 personas, el diseñador se sienta al lado del desarrollador — la ambigüedad se resuelve en una conversación de 30 segundos. En una empresa de 200 personas con equipos distribuidos entre zonas horarias, esa misma ambigüedad se convierte en un ticket bloqueado, una implementación incorrecta, un defecto de QA, y un ciclo de retrabajo que cuesta 2-3 días de sprint. La documentación enterprise no es burocracia — es un multiplicador de fuerza que convierte una decisión de diseño en un recurso auto-servicio accesible para cada miembro del equipo, en cualquier momento, sin requerir comunicación síncrona.'
    },

    // ─── 2. WHY IT MATTERS ──────────────────────────────────────
    why: {
      en: 'Every time an engineer pings a designer with "How should this button behave when...?", the project is bleeding time. Research across enterprise product teams shows that undocumented or poorly documented UX decisions cause 30-40% of all dev clarification cycles. Each clarification round takes an average of 4 hours (waiting for response, context switching, re-reading the thread). Over a quarter, that compounds into hundreds of lost engineering hours.\n\nWell-structured documentation prevents rework. When a developer implements a feature based on a Figma mockup alone and the result doesn\'t match the designer\'s intent, the fix cycle is expensive: design review → ticket update → re-implementation → re-QA. A single field validation rule that was "obvious" to the designer but never documented can cascade into 3 days of back-and-forth.\n\nDocumentation also protects design decisions. In enterprise environments, stakeholders change, priorities shift, and six months later someone asks "Why did we build it this way?" Without a decision log, the team has no institutional memory. The decision gets revisited, debated again, and sometimes reversed — wasting the original research and validation work.\n\nFinally, documentation scales cross-team collaboration. When three squads are building features that touch the same component library, they need a shared source of truth for interaction patterns, state behavior, and component usage rules. Without it, each squad invents their own conventions, and the product becomes an inconsistent patchwork.',
      es: 'Cada vez que un ingeniero le escribe a un diseñador con "¿Cómo debería comportarse este botón cuando...?", el proyecto está sangrando tiempo. La investigación en equipos de producto enterprise muestra que las decisiones UX no documentadas o mal documentadas causan el 30-40% de todos los ciclos de clarificación con desarrollo. Cada ronda de clarificación toma un promedio de 4 horas (esperar respuesta, cambio de contexto, releer el hilo). En un trimestre, eso se acumula en cientos de horas de ingeniería perdidas.\n\nLa documentación bien estructurada previene retrabajo. Cuando un desarrollador implementa una feature basándose solo en un mockup de Figma y el resultado no coincide con la intención del diseñador, el ciclo de corrección es costoso: revisión de diseño → actualización de ticket → re-implementación → re-QA. Una sola regla de validación de campo que era "obvia" para el diseñador pero nunca se documentó puede cascadear en 3 días de ida y vuelta.\n\nLa documentación también protege decisiones de diseño. En entornos enterprise, los stakeholders cambian, las prioridades se mueven, y seis meses después alguien pregunta "¿Por qué lo construimos así?" Sin un log de decisiones, el equipo no tiene memoria institucional. La decisión se revisita, se debate de nuevo, y a veces se revierte — desperdiciando la investigación y validación originales.\n\nFinalmente, la documentación escala la colaboración cross-equipo. Cuando tres squads están construyendo features que tocan la misma librería de componentes, necesitan una fuente de verdad compartida para patrones de interacción, comportamiento de estados y reglas de uso de componentes. Sin ella, cada squad inventa sus propias convenciones, y el producto se convierte en un patchwork inconsistente.'
    },

    // ─── 3. KEY PRINCIPLES ──────────────────────────────────────
    keyPrinciples: {
      en: [
        'Document decisions, not just visuals: Every design choice has a "why." A dropdown was chosen over a radio group because there are 40+ options. A modal was chosen over an inline expansion because the action is destructive. Record the reasoning — not just the screenshot — so future team members understand the rationale without needing to track down the original designer.',
        'Define interaction behavior explicitly: Hover states, focus order, keyboard navigation, animation timing, scroll behavior, disabled conditions, and dynamic content loading rules must be written out. "The designer will explain it" is not a scalable strategy. The spec should answer every question before the question is asked.',
        'Annotate edge cases as first-class requirements: What happens with 0 items? With 10,000 items? When the user pastes a 5,000-character string into a 200-character field? When they hit Submit with no network? Edge cases are not afterthoughts — they are documented behaviors with expected system responses.',
        'Version and update documentation with every sprint: Documentation that reflects Sprint 3 but the product is on Sprint 12 is worse than no documentation — it actively misleads. Maintain a version log with clear changelogs: what changed, why, and what the impact is on downstream teams.',
        'Align with Definition of Done: If the team\'s DoD says "feature is tested and deployed," add "UX documentation updated" as a checkbox. Documentation that drifts from the product is technical debt disguised as process.',
        'Avoid over-documentation: Not every micro-interaction needs a 3-page spec. Use judgment: standard patterns (button hover effects, form field focus) can reference the design system. Novel or complex interactions need detailed specs. Document what would cause confusion if left unwritten.'
      ],
      es: [
        'Documenta decisiones, no solo visuales: Cada elección de diseño tiene un "por qué." Un dropdown se eligió sobre un radio group porque hay 40+ opciones. Un modal se eligió sobre una expansión inline porque la acción es destructiva. Registra el razonamiento — no solo la captura — para que futuros miembros del equipo entiendan el fundamento sin necesitar buscar al diseñador original.',
        'Define comportamiento de interacción explícitamente: Estados hover, orden de foco, navegación por teclado, timing de animación, comportamiento de scroll, condiciones de deshabilitado y reglas de carga de contenido dinámico deben escribirse. "El diseñador lo explicará" no es una estrategia escalable. El spec debe responder cada pregunta antes de que se haga.',
        'Anota edge cases como requisitos de primera clase: ¿Qué pasa con 0 ítems? ¿Con 10,000 ítems? ¿Cuando el usuario pega una cadena de 5,000 caracteres en un campo de 200? ¿Cuando presiona Enviar sin red? Los edge cases no son ideas tardías — son comportamientos documentados con respuestas esperadas del sistema.',
        'Versiona y actualiza documentación con cada sprint: La documentación que refleja Sprint 3 pero el producto está en Sprint 12 es peor que no tener documentación — activamente engaña. Mantén un log de versiones con changelogs claros: qué cambió, por qué, y cuál es el impacto en equipos downstream.',
        'Alinea con Definition of Done: Si el DoD del equipo dice "feature testeada y desplegada," agrega "documentación UX actualizada" como checkbox. La documentación que se desfasa del producto es deuda técnica disfrazada de proceso.',
        'Evita sobre-documentación: No cada micro-interacción necesita un spec de 3 páginas. Usa juicio: patrones estándar (hover de botones, foco de campos) pueden referenciar el sistema de diseño. Interacciones nuevas o complejas necesitan specs detallados. Documenta lo que causaría confusión si se deja sin escribir.'
      ]
    },

    // ─── 4. HOW TO APPLY ────────────────────────────────────────
    howToApply: {
      steps: [
        {
          name: { en: 'Step 1: Finalize validated design', es: 'Paso 1: Finaliza el diseño validado' },
          description: {
            en: 'Only document designs that have passed usability validation and stakeholder approval. Documenting work-in-progress creates moving targets that frustrate engineering teams. Wait until the design is "ready for development" — meaning all feedback has been incorporated, all variants have been explored, and the design has been tested with users or reviewed by the team.',
            es: 'Solo documenta diseños que hayan pasado validación de usabilidad y aprobación de stakeholders. Documentar trabajo en progreso crea blancos móviles que frustran a equipos de ingeniería. Espera hasta que el diseño esté "listo para desarrollo" — significando que todo feedback ha sido incorporado, todas las variantes exploradas, y el diseño ha sido testeado con usuarios o revisado por el equipo.'
          }
        },
        {
          name: { en: 'Step 2: Add interaction annotations', es: 'Paso 2: Agrega anotaciones de interacción' },
          description: {
            en: 'For each interactive element, annotate: (1) Default state behavior, (2) Hover / Focus / Active / Disabled states, (3) Click/tap action and resulting transition, (4) Keyboard navigation order and behavior, (5) Animation type and duration (e.g., "ease-out 200ms"), (6) Responsive behavior at breakpoints. Use Figma annotations, sticky notes on frames, or a structured table linked from the ticket.',
            es: 'Para cada elemento interactivo, anota: (1) Comportamiento de estado default, (2) Estados Hover / Focus / Active / Disabled, (3) Acción de clic/tap y transición resultante, (4) Orden de navegación por teclado y comportamiento, (5) Tipo y duración de animación (ej. "ease-out 200ms"), (6) Comportamiento responsivo en breakpoints. Usa anotaciones de Figma, notas adhesivas en frames, o una tabla estructurada linkeada desde el ticket.'
          }
        },
        {
          name: { en: 'Step 3: Document system states', es: 'Paso 3: Documenta estados del sistema' },
          description: {
            en: 'Create a state matrix for every screen: columns are states (Empty, Loading, Error, Success, Partial, Disabled), rows are components. Fill every cell — blank cells are unhandled states. For error states, specify the exact error message copy, recovery action, and whether the error is inline or modal. For loading states, specify skeleton vs. spinner vs. progress bar and the expected duration range.',
            es: 'Crea una matriz de estados para cada pantalla: las columnas son estados (Vacío, Cargando, Error, Éxito, Parcial, Deshabilitado), las filas son componentes. Llena cada celda — celdas vacías son estados no manejados. Para estados de error, especifica el copy exacto del mensaje de error, acción de recuperación, y si el error es inline o modal. Para estados de carga, especifica skeleton vs. spinner vs. barra de progreso y el rango de duración esperada.'
          }
        },
        {
          name: { en: 'Step 4: Write UX acceptance criteria', es: 'Paso 4: Escribe criterios de aceptación UX' },
          description: {
            en: 'Translate design specs into Given-When-Then acceptance criteria that QA and engineering can verify. Example: "Given the user is on the invoice list, When they click \'Export CSV\' and there are 0 invoices, Then the system shows an empty state message: \'No invoices to export. Create your first invoice to get started.\' with a \'Create Invoice\' CTA." Each criterion must be testable — no vague language like "should work correctly."',
            es: 'Traduce specs de diseño a criterios de aceptación Given-When-Then que QA e ingeniería puedan verificar. Ejemplo: "Dado que el usuario está en la lista de facturas, Cuando hace clic en \'Exportar CSV\' y hay 0 facturas, Entonces el sistema muestra un mensaje de estado vacío: \'Sin facturas para exportar. Crea tu primera factura para comenzar.\' con un CTA \'Crear Factura\'." Cada criterio debe ser testeable — nada de lenguaje vago como "debería funcionar correctamente."'
          }
        },
        {
          name: { en: 'Step 5: Attach documentation to ticket', es: 'Paso 5: Adjunta documentación al ticket' },
          description: {
            en: 'Link all documentation artifacts to the development ticket: Figma frames (specific frames, not the entire file), UX spec document (Notion/Confluence page), interaction annotation table, state matrix, and acceptance criteria. Use a consistent ticket template so engineers always know where to find each artifact. Include a "Documentation Completeness" checklist in the ticket template.',
            es: 'Linkea todos los artefactos de documentación al ticket de desarrollo: frames de Figma (frames específicos, no el archivo completo), documento de spec UX (página Notion/Confluence), tabla de anotaciones de interacción, matriz de estados, y criterios de aceptación. Usa un template de ticket consistente para que ingenieros siempre sepan dónde encontrar cada artefacto. Incluye un checklist de "Completitud de Documentación" en el template del ticket.'
          }
        },
        {
          name: { en: 'Step 6: Confirm Definition of Ready', es: 'Paso 6: Confirma Definition of Ready' },
          description: {
            en: 'Before the ticket enters the sprint, verify it meets the team\'s Definition of Ready: (1) Figma frames finalized and linked, (2) Interaction specs documented, (3) Edge cases and error states defined, (4) Acceptance criteria written, (5) Dependencies identified (API, permissions, external services), (6) Design reviewed with the assigned developer. If any item is missing, the ticket is not ready — push it back to refinement rather than creating tech debt.',
            es: 'Antes de que el ticket entre al sprint, verifica que cumple la Definition of Ready del equipo: (1) Frames de Figma finalizados y linkeados, (2) Specs de interacción documentados, (3) Edge cases y estados de error definidos, (4) Criterios de aceptación escritos, (5) Dependencias identificadas (API, permisos, servicios externos), (6) Diseño revisado con el desarrollador asignado. Si falta algún ítem, el ticket no está listo — regresa a refinamiento en vez de crear deuda técnica.'
          }
        },
        {
          name: { en: 'Step 7: Update version log after sprint', es: 'Paso 7: Actualiza log de versión después del sprint' },
          description: {
            en: 'After each sprint, update the documentation to reflect what was actually shipped (which may differ from what was designed). Record: (1) What changed from the original spec and why, (2) Any compromises made due to technical constraints, (3) Impact on adjacent features or components, (4) Open items deferred to future sprints. This version log becomes the project\'s living history — invaluable for onboarding new team members and auditing past decisions.',
            es: 'Después de cada sprint, actualiza la documentación para reflejar lo que realmente se lanzó (que puede diferir de lo diseñado). Registra: (1) Qué cambió del spec original y por qué, (2) Cualquier compromiso hecho por restricciones técnicas, (3) Impacto en features o componentes adyacentes, (4) Ítems abiertos diferidos a sprints futuros. Este log de versión se convierte en la historia viva del proyecto — invaluable para onboarding de nuevos miembros y auditar decisiones pasadas.'
          }
        }
      ]
    },

    // ─── 5. COMMON MISTAKES ────────────────────────────────────
    commonMistakes: {
      en: [
        'Only sharing a Figma link: A link to a Figma file is not documentation. Without annotations, interaction specs, and edge case notes, developers are forced to interpret visual designs on their own — and their interpretation will often differ from the designer\'s intent.',
        'No interaction specifications: Showing what a component looks like but not how it behaves. What happens on hover? On keyboard focus? On long-press (mobile)? When content overflows? When the container resizes? Each unanswered question becomes a dev clarification ticket or a wrong implementation.',
        'No edge case documentation: Designing only the happy path and leaving engineers to guess what happens with empty states, network failures, permission errors, extreme data volumes, and concurrent user actions. Edge cases represent 60% of production user experience.',
        'No design decision log: Making decisions in Slack threads and design reviews without recording the reasoning. Six months later, no one remembers why the team chose tabs over an accordion, and the debate restarts from zero — wasting time and potentially overturning a validated decision.',
        'Overwriting files without versioning: Updating Figma files and Confluence pages in place, with no record of what the previous version looked like. When a bug report references "the old behavior," the team cannot reconstruct what was originally specified.',
        'Not syncing documentation with sprint changes: Writing a detailed spec before Sprint 1, then never updating it as the implementation evolves through Sprints 2-5. The documentation becomes a liability — new developers trust it, build against it, and then discover the product has diverged significantly.'
      ],
      es: [
        'Solo compartir un link de Figma: Un link a un archivo Figma no es documentación. Sin anotaciones, specs de interacción y notas de edge cases, los desarrolladores se ven forzados a interpretar diseños visuales por su cuenta — y su interpretación frecuentemente diferirá de la intención del diseñador.',
        'Sin especificaciones de interacción: Mostrar cómo se ve un componente pero no cómo se comporta. ¿Qué pasa en hover? ¿En foco de teclado? ¿En long-press (móvil)? ¿Cuando el contenido se desborda? ¿Cuando el contenedor cambia de tamaño? Cada pregunta sin respuesta se convierte en un ticket de clarificación o una implementación incorrecta.',
        'Sin documentación de edge cases: Diseñar solo el camino feliz y dejar que los ingenieros adivinen qué pasa con estados vacíos, fallas de red, errores de permisos, volúmenes extremos de datos y acciones concurrentes de usuario. Los edge cases representan el 60% de la experiencia de usuario en producción.',
        'Sin log de decisiones de diseño: Tomar decisiones en hilos de Slack y revisiones de diseño sin registrar el razonamiento. Seis meses después, nadie recuerda por qué el equipo eligió tabs sobre un accordion, y el debate reinicia desde cero — desperdiciando tiempo y potencialmente revirtiendo una decisión validada.',
        'Sobreescribir archivos sin versionado: Actualizar archivos Figma y páginas de Confluence in-place, sin registro de cómo se veía la versión anterior. Cuando un reporte de bug referencia "el comportamiento anterior," el equipo no puede reconstruir lo que se especificó originalmente.',
        'No sincronizar documentación con cambios de sprint: Escribir un spec detallado antes del Sprint 1, y luego nunca actualizarlo mientras la implementación evoluciona durante Sprints 2-5. La documentación se convierte en un pasivo — nuevos desarrolladores confían en ella, construyen contra ella, y luego descubren que el producto ha divergido significativamente.'
      ]
    },

    // ─── 6. DELIVERABLES ───────────────────────────────────────
    deliverables: {
      description: {
        en: 'A complete, ticket-ready documentation package that ensures zero ambiguity between design intent and engineering implementation.',
        es: 'Un paquete de documentación completo y listo para tickets que asegura cero ambigüedad entre la intención de diseño y la implementación de ingeniería.'
      },
      items: {
        en: [
          'UX Spec Document: A structured page (Notion/Confluence) with feature overview, user flow, component inventory, interaction rules, responsive behavior, and accessibility notes. Each section has a clear owner and last-updated timestamp.',
          'Interaction Table: A tabular spec mapping each interactive element to its states (Default, Hover, Focus, Active, Disabled, Loading, Error), trigger actions, transitions, and animation parameters. Replaces verbal descriptions with unambiguous specifications.',
          'State Matrix: A grid mapping every screen component against every system state (Empty, Loading, Success, Error, Partial, Disabled). Every cell is filled — no "N/A" or blank cells without justification.',
          'Design Decision Log: A chronological record of key design decisions with entries containing: Decision title, Date, Context (what problem was being solved), Options considered, Decision made, Rationale, Trade-offs accepted, and Link to supporting evidence (user research, benchmarks, data).',
          'Version History Notes: Sprint-level changelog documenting what changed in the design, why it changed, what was shipped vs. what was deferred, and impact on dependent features. Follows semantic versioning logic (breaking change vs. enhancement vs. fix).',
          'Ticket-Ready Documentation Package: A self-contained bundle attached to each dev ticket containing: Figma frame links, interaction spec excerpt, relevant state matrix rows, acceptance criteria, and dependency notes. An engineer should be able to implement the feature using only this package without needing a synchronous conversation with the designer.'
        ],
        es: [
          'Documento de Spec UX: Una página estructurada (Notion/Confluence) con resumen del feature, flujo de usuario, inventario de componentes, reglas de interacción, comportamiento responsivo y notas de accesibilidad. Cada sección tiene un responsable claro y timestamp de última actualización.',
          'Tabla de Interacciones: Un spec tabular mapeando cada elemento interactivo a sus estados (Default, Hover, Focus, Active, Disabled, Loading, Error), acciones de trigger, transiciones y parámetros de animación. Reemplaza descripciones verbales con especificaciones no ambiguas.',
          'Matriz de Estados: Una grilla mapeando cada componente de pantalla contra cada estado del sistema (Vacío, Cargando, Éxito, Error, Parcial, Deshabilitado). Cada celda está llena — sin "N/A" o celdas vacías sin justificación.',
          'Log de Decisiones de Diseño: Un registro cronológico de decisiones de diseño clave con entradas que contienen: Título de la decisión, Fecha, Contexto (qué problema se estaba resolviendo), Opciones consideradas, Decisión tomada, Fundamento, Trade-offs aceptados, y Link a evidencia de soporte.',
          'Notas de Historial de Versión: Changelog a nivel de sprint documentando qué cambió en el diseño, por qué cambió, qué se lanzó vs. qué se difirió, e impacto en features dependientes. Sigue lógica de versionado semántico (breaking change vs. mejora vs. fix).',
          'Paquete de Documentación Listo para Ticket: Un paquete autocontenido adjunto a cada ticket de dev conteniendo: links a frames de Figma, extracto de spec de interacción, filas relevantes de matriz de estados, criterios de aceptación, y notas de dependencias. Un ingeniero debería poder implementar el feature usando solo este paquete sin necesitar una conversación síncrona con el diseñador.'
        ]
      }
    },

    // ─── 7. PRACTICAL TOOLS ─────────────────────────────────────
    practicalTools: {
      design: {
        en: [
          'Figma Dev Mode — Annotate interaction behaviors, spacing, responsive rules, and component properties directly on design frames for engineering handoff',
          'Figma Branching — Manage design versions across sprints with branch-merge workflow, preventing accidental overwrites of production specs',
          'Storybook — Document component states interactively: engineers see every variant (default, hover, loading, error, disabled) rendered live'
        ],
        es: [
          'Figma Dev Mode — Anota comportamientos de interacción, espaciado, reglas responsivas y propiedades de componentes directamente en frames de diseño para handoff',
          'Figma Branching — Gestiona versiones de diseño entre sprints con flujo branch-merge, previniendo sobreescrituras accidentales de specs de producción',
          'Storybook — Documenta estados de componentes interactivamente: ingenieros ven cada variante (default, hover, loading, error, disabled) renderizada en vivo'
        ]
      },
      documentation: {
        en: [
          'Notion — Structured UX spec pages with embedded Figma frames, interaction tables, decision logs, and version history. Templates enable consistency across features',
          'Confluence — Enterprise wiki with Jira integration for linking documentation directly to development tickets and sprint boards',
          'Loom — Async video walkthroughs explaining complex interactions, design rationale, and edge case behavior. Reduces meeting load by 40% for distributed teams'
        ],
        es: [
          'Notion — Páginas de spec UX estructuradas con frames de Figma embebidos, tablas de interacción, logs de decisiones e historial de versiones. Templates permiten consistencia entre features',
          'Confluence — Wiki enterprise con integración Jira para linkear documentación directamente a tickets de desarrollo y boards de sprint',
          'Loom — Walkthroughs de video asíncronos explicando interacciones complejas, fundamentos de diseño y comportamiento de edge cases. Reduce reuniones en 40% para equipos distribuidos'
        ]
      },
      management: {
        en: [
          'Jira — Ticket management with UX documentation templates, acceptance criteria fields, and Definition of Ready checklists embedded in workflow',
          'Linear — Streamlined issue tracking with design attachment support, status automations, and cycle-based documentation reviews',
          'Shortcut — Story-based project management with integrated doc links and milestone tracking for UX documentation lifecycle'
        ],
        es: [
          'Jira — Gestión de tickets con templates de documentación UX, campos de criterios de aceptación y checklists de Definition of Ready embebidos en workflow',
          'Linear — Tracking de issues simplificado con soporte de adjuntos de diseño, automatizaciones de estado y revisiones de documentación basadas en ciclos',
          'Shortcut — Gestión de proyectos basada en stories con links de docs integrados y tracking de milestones para ciclo de vida de documentación UX'
        ]
      },
      testing: {
        en: [
          'Storybook — Visual regression testing for documented component states, ensuring implementation matches the documented spec',
          'Chromatic — Automated visual review connected to Storybook, catching undocumented visual changes before they reach production'
        ],
        es: [
          'Storybook — Testing de regresión visual para estados de componentes documentados, asegurando que la implementación coincide con el spec documentado',
          'Chromatic — Revisión visual automatizada conectada a Storybook, capturando cambios visuales no documentados antes de que lleguen a producción'
        ]
      }
    },

    // ─── 8. AI IN PRACTICE ──────────────────────────────────────
    aiInPractice: {
      description: {
        en: 'Use AI to accelerate documentation creation — converting visual designs into structured specs, generating comprehensive edge case lists, and summarizing sprint changes into versioned release notes.',
        es: 'Usa IA para acelerar la creación de documentación — convirtiendo diseños visuales en specs estructurados, generando listas comprehensivas de edge cases, y resumiendo cambios de sprint en notas de release versionadas.'
      },
      prompts: [
        {
          tool: 'ChatGPT / Claude',
          context: { en: 'Convert design to structured UX spec', es: 'Convertir diseño a spec UX estructurado' },
          prompt: {
            en: 'I\'m documenting a [feature name] for engineering handoff. The feature lets users [main action]. The screen contains these components: [list components]. For each component, generate a structured UX spec table with columns: Component | Default State | Interaction (Hover/Focus/Click) | Validation Rules | Error State | Loading State | Responsive Behavior (mobile). Also generate 5 acceptance criteria in Given-When-Then format.',
            es: 'Estoy documentando un [nombre del feature] para handoff a ingeniería. El feature permite a los usuarios [acción principal]. La pantalla contiene estos componentes: [lista componentes]. Para cada componente, genera una tabla de spec UX estructurada con columnas: Componente | Estado Default | Interacción (Hover/Focus/Click) | Reglas de Validación | Estado de Error | Estado de Carga | Comportamiento Responsivo (móvil). También genera 5 criterios de aceptación en formato Given-When-Then.'
          }
        },
        {
          tool: 'ChatGPT / Claude',
          context: { en: 'Generate edge case documentation', es: 'Generar documentación de edge cases' },
          prompt: {
            en: 'I\'m designing a [feature name] with these inputs: [list all form fields, dropdowns, file uploads, etc.]. The feature connects to [API/database/external service]. User roles involved: [list roles and permissions]. Generate a comprehensive edge case table with columns: Edge Case | Component Affected | Probability (High/Medium/Low) | Severity if Unhandled | Recommended UI Response | Error Message Copy. Include at least 15 edge cases covering: data boundaries, network failures, permission conflicts, concurrent actions, and input validation extremes.',
            es: 'Estoy diseñando un [nombre del feature] con estos inputs: [lista todos los campos, dropdowns, subidas de archivo, etc.]. El feature se conecta a [API/base de datos/servicio externo]. Roles de usuario involucrados: [lista roles y permisos]. Genera una tabla comprehensiva de edge cases con columnas: Edge Case | Componente Afectado | Probabilidad (Alta/Media/Baja) | Severidad si No se Maneja | Respuesta UI Recomendada | Copy de Mensaje de Error. Incluye al menos 15 edge cases cubriendo: límites de datos, fallas de red, conflictos de permisos, acciones concurrentes y extremos de validación de input.'
          }
        },
        {
          tool: 'ChatGPT / Claude',
          context: { en: 'Sprint version notes', es: 'Notas de versión de sprint' },
          prompt: {
            en: 'Summarize these Sprint [N] design changes into version notes for our UX documentation: [paste list of changes, compromises, deferred items]. Format each entry with: Change Title | What Changed | Why | Impact on Other Features | Status (Shipped/Deferred/Modified). At the top, add a summary line: "Sprint [N]: [X] changes shipped, [Y] deferred, [Z] breaking changes." Flag any breaking changes that require other teams to update their implementations.',
            es: 'Resume estos cambios de diseño del Sprint [N] en notas de versión para nuestra documentación UX: [pega lista de cambios, compromisos, ítems diferidos]. Formatea cada entrada con: Título del Cambio | Qué Cambió | Por Qué | Impacto en Otros Features | Estado (Lanzado/Diferido/Modificado). Arriba, agrega una línea resumen: "Sprint [N]: [X] cambios lanzados, [Y] diferidos, [Z] breaking changes." Marca cualquier breaking change que requiera que otros equipos actualicen sus implementaciones.'
          }
        }
      ]
    },

    // ─── 9. HOW TO VALIDATE ─────────────────────────────────────
    howToValidate: {
      what: {
        en: 'Validate that UX documentation is reducing ambiguity, preventing rework, and enabling engineering teams to implement features without synchronous designer availability.',
        es: 'Valida que la documentación UX está reduciendo ambigüedad, previniendo retrabajo, y habilitando a equipos de ingeniería para implementar features sin disponibilidad síncrona del diseñador.'
      },
      methods: {
        en: [
          'Dev clarification tracking: Measure the number of "How should this behave?" questions per sprint. Effective documentation should reduce these by 50%+ within 2 sprints of adoption. Track in Slack or Jira comments.',
          'Implementation mismatch audit: After each sprint, compare shipped features against documented specs. Count mismatches. If implementation diverges from the spec more than 10% of the time, the documentation is unclear or incomplete.',
          'QA UX defect rate: Track UX-specific defects (wrong interaction, missing state, inconsistent behavior) separately from functional bugs. Good documentation correlates with 40-60% fewer UX defects.',
          'Documentation reusability test: Can a new team member onboarded mid-project understand the feature\'s intended behavior by reading the documentation alone, without talking to the original designer? Run this test quarterly with actual new hires.',
          'Sprint predictability correlation: Compare sprint velocity and carryover rates before and after documentation practices were adopted. Well-documented tickets are more accurately estimated and have lower carryover.'
        ],
        es: [
          'Tracking de clarificaciones dev: Mide el número de preguntas "¿Cómo debería comportarse esto?" por sprint. La documentación efectiva debería reducirlas en 50%+ dentro de 2 sprints de adopción. Trackea en Slack o comentarios de Jira.',
          'Auditoría de discrepancias de implementación: Después de cada sprint, compara features lanzados contra specs documentados. Cuenta discrepancias. Si la implementación diverge del spec más del 10% del tiempo, la documentación es poco clara o incompleta.',
          'Tasa de defectos UX en QA: Trackea defectos específicos de UX (interacción incorrecta, estado faltante, comportamiento inconsistente) separadamente de bugs funcionales. Buena documentación correlaciona con 40-60% menos defectos UX.',
          'Test de reusabilidad de documentación: ¿Puede un nuevo miembro del equipo incorporado a mitad de proyecto entender el comportamiento previsto del feature leyendo solo la documentación, sin hablar con el diseñador original? Ejecuta este test trimestralmente con nuevos ingresos reales.',
          'Correlación de predictibilidad de sprint: Compara velocidad de sprint y tasas de carryover antes y después de adoptar prácticas de documentación. Tickets bien documentados se estiman más precisamente y tienen menor carryover.'
        ]
      },
      tools: {
        en: ['Jira Sprint Reports', 'Slack Message Analytics', 'QA Defect Tracking Dashboard', 'Notion/Confluence Page Analytics', 'Team Retrospective Surveys'],
        es: ['Reportes de Sprint Jira', 'Analíticas de Mensajes Slack', 'Dashboard de Tracking de Defectos QA', 'Analíticas de Páginas Notion/Confluence', 'Encuestas de Retrospectiva de Equipo']
      },
      evidenceExample: {
        en: 'A fintech platform with 8 product squads adopted structured UX documentation over 3 months. Before adoption, the average feature had 12 dev clarification questions per sprint and a 35% QA defect rate on UX behaviors. After adoption: clarification questions dropped to 3 per sprint (75% reduction), UX defects dropped to 12% (66% improvement), and sprint carryover decreased from 25% to 8% because tickets were more accurately scoped. The biggest win: new engineers joining mid-project could self-serve from documentation instead of blocking designers with onboarding questions.',
        es: 'Una plataforma fintech con 8 squads de producto adoptó documentación UX estructurada en 3 meses. Antes de la adopción, el feature promedio tenía 12 preguntas de clarificación dev por sprint y una tasa de defectos QA del 35% en comportamientos UX. Después de la adopción: preguntas de clarificación bajaron a 3 por sprint (reducción del 75%), defectos UX bajaron al 12% (mejora del 66%), y el carryover de sprint disminuyó del 25% al 8% porque los tickets estaban mejor dimensionados. La mayor ganancia: nuevos ingenieros que se unían a mitad de proyecto podían auto-servirse de la documentación en vez de bloquear diseñadores con preguntas de onboarding.'
      }
    },

    // ─── 10. QUIZ ───────────────────────────────────────────────
    quiz: [
      {
        question: {
          en: 'A designer sends a Figma link to the development team with the message: "Here\'s the design for the new invoice table. Let me know if you have questions." Two days later, the developer asks 8 clarification questions about sorting behavior, empty states, and pagination. What is the root cause?',
          es: 'Un diseñador envía un link de Figma al equipo de desarrollo con el mensaje: "Aquí está el diseño de la nueva tabla de facturas. Avísame si tienes preguntas." Dos días después, el desarrollador hace 8 preguntas de clarificación sobre comportamiento de ordenamiento, estados vacíos y paginación. ¿Cuál es la causa raíz?'
        },
        options: {
          en: [
            'The developer didn\'t look carefully enough at the Figma file',
            'The designer should have scheduled a meeting to walk through the design',
            'The design was only visual — it lacked interaction specs, state documentation, and acceptance criteria',
            'The Figma file needed more annotations on spacing and typography'
          ],
          es: [
            'El desarrollador no miró el archivo Figma con suficiente cuidado',
            'El diseñador debería haber agendado una reunión para recorrer el diseño',
            'El diseño era solo visual — le faltaban specs de interacción, documentación de estados y criterios de aceptación',
            'El archivo Figma necesitaba más anotaciones de espaciado y tipografía'
          ]
        },
        correctIndex: 2,
        explanation: {
          en: 'Visual designs alone cannot communicate behavior. Interaction specs (how does sorting work?), state documentation (what does the table show with 0 rows?), and acceptance criteria (what happens on page 2 of pagination?) are separate documentation artifacts that prevent these questions from being asked.',
          es: 'Los diseños visuales solos no pueden comunicar comportamiento. Specs de interacción (¿cómo funciona el ordenamiento?), documentación de estados (¿qué muestra la tabla con 0 filas?) y criterios de aceptación (¿qué pasa en la página 2 de paginación?) son artefactos de documentación separados que previenen que estas preguntas se hagan.'
        }
      },
      {
        question: {
          en: 'During Sprint 5, the team discovers that the current design documentation still reflects Sprint 2 decisions. A new developer builds a feature based on the outdated docs, causing 3 days of rework. How should the team prevent this?',
          es: 'Durante el Sprint 5, el equipo descubre que la documentación de diseño actual aún refleja decisiones del Sprint 2. Un nuevo desarrollador construye un feature basándose en los docs desactualizados, causando 3 días de retrabajo. ¿Cómo debería el equipo prevenir esto?'
        },
        options: {
          en: [
            'Stop writing documentation since it becomes outdated anyway',
            'Add "Update UX documentation" to the Definition of Done for every sprint',
            'Have the designer verbally explain changes in standup meetings',
            'Archive all old documentation and only use Figma as the source of truth'
          ],
          es: [
            'Dejar de escribir documentación ya que se desactualiza de todas formas',
            'Agregar "Actualizar documentación UX" al Definition of Done de cada sprint',
            'Que el diseñador explique verbalmente los cambios en reuniones de standup',
            'Archivar toda la documentación vieja y solo usar Figma como fuente de verdad'
          ]
        },
        correctIndex: 1,
        explanation: {
          en: 'Documentation must be treated as a living artifact, not a one-time deliverable. Adding documentation updates to the DoD ensures it evolves with the product. Verbal explanations don\'t scale and aren\'t searchable. Figma alone lacks behavioral specifications. Abandoning documentation entirely creates more problems than outdated docs.',
          es: 'La documentación debe tratarse como un artefacto vivo, no un entregable de una sola vez. Agregar actualizaciones de documentación al DoD asegura que evolucione con el producto. Las explicaciones verbales no escalan y no son buscables. Figma solo carece de especificaciones de comportamiento. Abandonar la documentación completamente crea más problemas que docs desactualizados.'
        }
      },
      {
        question: {
          en: 'A senior designer writes a 45-page UX spec for a simple settings page with 6 toggle switches. The document includes detailed specs for standard toggle behavior, hover states for basic text labels, and responsive rules that follow the existing design system. What mistake are they making?',
          es: 'Un diseñador senior escribe un spec UX de 45 páginas para una página de configuración simple con 6 toggles. El documento incluye specs detallados de comportamiento estándar de toggles, estados hover para labels de texto básico, y reglas responsivas que siguen el sistema de diseño existente. ¿Qué error están cometiendo?'
        },
        options: {
          en: [
            'They should have used AI to generate the documentation faster',
            'Over-documentation: Standard patterns covered by the design system don\'t need custom specs. Document only novel or complex interactions.',
            'The document should be longer — they missed the loading and error states',
            'They should have created a video walkthrough instead'
          ],
          es: [
            'Deberían haber usado IA para generar la documentación más rápido',
            'Sobre-documentación: Patrones estándar cubiertos por el sistema de diseño no necesitan specs custom. Documenta solo interacciones nuevas o complejas.',
            'El documento debería ser más largo — les faltaron los estados de carga y error',
            'Deberían haber creado un video walkthrough en su lugar'
          ]
        },
        correctIndex: 1,
        explanation: {
          en: 'Not everything needs detailed documentation. Standard design system components (toggles, text inputs, buttons) already have documented behavior. Over-documenting standard patterns wastes the designer\'s time, creates maintenance burden, and makes it harder to find the truly important specifications. Document what\'s novel, complex, or likely to cause confusion.',
          es: 'No todo necesita documentación detallada. Componentes estándar del sistema de diseño (toggles, inputs de texto, botones) ya tienen comportamiento documentado. Sobre-documentar patrones estándar desperdicia tiempo del diseñador, crea carga de mantenimiento, y hace más difícil encontrar las especificaciones verdaderamente importantes. Documenta lo que es nuevo, complejo o probable de causar confusión.'
        }
      }
    ],

    // ─── 11. REAL EXAMPLE ───────────────────────────────────────
    realExample: {
      title: {
        en: 'Claro Admin Tool — Bulk Data Pack Assignment: Full Documentation Lifecycle',
        es: 'Herramienta Admin Claro — Asignación Masiva de Paquetes de Datos: Ciclo Completo de Documentación'
      },
      description: {
        en: 'When the Claro admin tool team built the bulk data pack assignment feature, the initial handoff was a single Figma file with 4 screens showing the happy path. The result: 23 dev clarification questions in the first sprint, 5 misimplemented interactions, and 2 weeks of rework.\n\nAfter adopting structured documentation, the same team re-documented the feature with the full 6-artifact package. The UX spec detailed every component\'s behavior across 6 states. The interaction table specified that the CSV upload zone should show a progress bar (not a spinner) for files over 1MB, that drag-and-drop should highlight the zone with a blue border, and that the file type validation error should appear inline below the zone — not as a modal. The decision log recorded why partial success was chosen over all-or-nothing processing (based on operator interviews where 85% preferred processing valid rows immediately). The version notes tracked 4 sprint iterations as the team refined error messaging based on QA feedback.',
        es: 'Cuando el equipo de la herramienta admin de Claro construyó el feature de asignación masiva de paquetes de datos, el handoff inicial fue un único archivo Figma con 4 pantallas mostrando el camino feliz. El resultado: 23 preguntas de clarificación dev en el primer sprint, 5 interacciones mal implementadas y 2 semanas de retrabajo.\n\nDespués de adoptar documentación estructurada, el mismo equipo re-documentó el feature con el paquete completo de 6 artefactos. El spec UX detalló el comportamiento de cada componente a través de 6 estados. La tabla de interacciones especificó que la zona de subida CSV debería mostrar una barra de progreso (no un spinner) para archivos de más de 1MB, que el drag-and-drop debería resaltar la zona con borde azul, y que el error de validación de tipo de archivo debería aparecer inline debajo de la zona — no como modal. El log de decisiones registró por qué se eligió éxito parcial sobre procesamiento todo-o-nada (basado en entrevistas con operadores donde el 85% prefería procesar filas válidas inmediatamente). Las notas de versión rastrearon 4 iteraciones de sprint mientras el equipo refinaba mensajes de error basándose en feedback de QA.'
      },
      company: 'Claro — Plataforma Admin Interna'
    }
  }
};
