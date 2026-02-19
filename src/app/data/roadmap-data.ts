// Roadmap data synced with content.ts tracks — ALL slugs match topic.id exactly

export type NodeStatus = 'not-started' | 'in-progress' | 'completed';
export type NodeLevel = 'beginner' | 'intermediate' | 'advanced';
export type NodeTag = 'ux' | 'ui' | 'product' | 'research' | 'strategy' | 'collaboration';

export interface RoadmapNode {
  id: string;
  title: { en: string; es: string };
  description: { en: string; es: string };
  lessonSlug: string;
  status: NodeStatus;
  level: NodeLevel;
  tags: NodeTag[];
  skills: { en: string[]; es: string[] };
  prerequisites: { en: string[]; es: string[] };
  nextSteps: { en: string[]; es: string[] };
  hasLesson: boolean;
  order: number;
  relatedLessons: Array<{ title: { en: string; es: string }; slug: string }>;
}

export interface RoadmapCluster {
  id: string;
  title: { en: string; es: string };
  color: string;
  nodes: RoadmapNode[];
  order: number;
}

// Internal data source — all node content organized by original clusters
// The exported `roadmapData` array below reorganizes these into 8 learning phases
const _roadmapSource: RoadmapCluster[] = [
  // ═══════════════════════════════════════════════════════════
  // CLUSTER 1: FOUNDATIONS
  // ═══════════════════════════════════════════════════════════
  {
    id: 'foundations',
    title: { en: 'Foundations', es: 'Fundamentos' },
    color: 'blue',
    order: 1,
    nodes: [
      {
        id: 'ux-ui-product',
        title: { en: 'UX vs UI vs Product Design', es: 'UX vs UI vs Diseño de Producto' },
        description: {
          en: 'Understanding the differences and overlaps between UX, UI, and Product Design roles',
          es: 'Entendiendo diferencias y superposiciones entre roles de UX, UI y Diseño de Producto'
        },
        lessonSlug: 'ux-ui-product-design-intro',
        status: 'not-started',
        level: 'beginner',
        tags: ['ux', 'ui', 'product'],
        skills: {
          en: ['Role clarity', 'Career paths', 'Team collaboration'],
          es: ['Claridad de rol', 'Caminos de carrera', 'Colaboración en equipo']
        },
        prerequisites: { en: ['None - Start here!'], es: ['Ninguno - ¡Empieza aquí!'] },
        nextSteps: { en: ['Usability Basics', 'UX Process'], es: ['Fundamentos de Usabilidad', 'Proceso UX'] },
        hasLesson: true,
        order: 1,
        relatedLessons: [
          { title: { en: 'Usability Basics', es: 'Fundamentos de Usabilidad' }, slug: 'usability-basics' },
          { title: { en: 'UX Process', es: 'Proceso UX' }, slug: 'ux-process' }
        ]
      },
      {
        id: 'usability-basics',
        title: { en: 'Usability Basics', es: 'Fundamentos de Usabilidad' },
        description: {
          en: 'Core usability principles — Nielsen\'s heuristics and Norman\'s design concepts',
          es: 'Principios de usabilidad — heurísticas de Nielsen y conceptos de diseño de Norman'
        },
        lessonSlug: 'usability-basics',
        status: 'not-started',
        level: 'beginner',
        tags: ['ux'],
        skills: {
          en: ['Heuristic evaluation', 'Affordances', 'Mental models', 'Error prevention'],
          es: ['Evaluación heurística', 'Affordances', 'Modelos mentales', 'Prevención de errores']
        },
        prerequisites: { en: ['UX vs UI vs Product'], es: ['UX vs UI vs Producto'] },
        nextSteps: { en: ['UX Research', 'Information Architecture'], es: ['Investigación UX', 'Arquitectura de Información'] },
        hasLesson: true,
        order: 2,
        relatedLessons: [
          { title: { en: 'UX vs UI vs Product', es: 'UX vs UI vs Producto' }, slug: 'ux-ui-product-design-intro' },
          { title: { en: 'Laws of UX', es: 'Leyes de UX' }, slug: 'laws-of-ux' }
        ]
      },
      {
        id: 'ux-process',
        title: { en: 'The UX Process', es: 'El Proceso UX' },
        description: {
          en: 'End-to-end UX workflow: discovery, definition, design, delivery, and validation',
          es: 'Flujo UX completo: descubrimiento, definición, diseño, entrega y validación'
        },
        lessonSlug: 'ux-process',
        status: 'not-started',
        level: 'beginner',
        tags: ['ux'],
        skills: {
          en: ['Process thinking', 'Deliverables', 'Stakeholder communication'],
          es: ['Pensamiento de proceso', 'Entregables', 'Comunicación con stakeholders']
        },
        prerequisites: { en: ['Usability Basics'], es: ['Fundamentos de Usabilidad'] },
        nextSteps: { en: ['Methodologies Overview'], es: ['Visión General de Metodologías'] },
        hasLesson: true,
        order: 3,
        relatedLessons: [
          { title: { en: 'Methodologies Overview', es: 'Visión de Metodologías' }, slug: 'methodologies-overview' },
          { title: { en: 'Design Thinking', es: 'Design Thinking' }, slug: 'design-thinking' }
        ]
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════
  // CLUSTER 2: RESEARCH & USERS
  // ═══════════════════════════════════════════════════════════
  {
    id: 'research',
    title: { en: 'Research & Users', es: 'Investigación y Usuarios' },
    color: 'purple',
    order: 2,
    nodes: [
      {
        id: 'ux-research',
        title: { en: 'UX Research Methods', es: 'Métodos de Investigación UX' },
        description: {
          en: 'Qualitative and quantitative methods to understand user needs and behaviors',
          es: 'Métodos cualitativos y cuantitativos para entender necesidades y comportamientos del usuario'
        },
        lessonSlug: 'ux-research',
        status: 'not-started',
        level: 'beginner',
        tags: ['ux', 'research'],
        skills: {
          en: ['Interview techniques', 'Active listening', 'Research planning'],
          es: ['Técnicas de entrevista', 'Escucha activa', 'Planificación de investigación']
        },
        prerequisites: { en: ['Usability Basics'], es: ['Fundamentos de Usabilidad'] },
        nextSteps: { en: ['User Personas', 'Surveys'], es: ['User Personas', 'Encuestas'] },
        hasLesson: true,
        order: 1,
        relatedLessons: [
          { title: { en: 'User Personas', es: 'User Personas' }, slug: 'user-personas' },
          { title: { en: 'Surveys & Questionnaires', es: 'Encuestas y Cuestionarios' }, slug: 'surveys-questionnaires' }
        ]
      },
      {
        id: 'user-personas',
        title: { en: 'User Personas', es: 'User Personas' },
        description: {
          en: 'Creating actionable user personas and empathy maps from research',
          es: 'Crear personas de usuario y mapas de empatía accionables a partir de investigación'
        },
        lessonSlug: 'user-personas',
        status: 'not-started',
        level: 'beginner',
        tags: ['ux', 'research'],
        skills: {
          en: ['User modeling', 'Empathy mapping', 'Scenario writing'],
          es: ['Modelado de usuario', 'Mapeo de empatía', 'Escritura de escenarios']
        },
        prerequisites: { en: ['UX Research'], es: ['Investigación UX'] },
        nextSteps: { en: ['Customer Journey Map'], es: ['Mapa de Viaje del Cliente'] },
        hasLesson: true,
        order: 2,
        relatedLessons: [
          { title: { en: 'UX Research', es: 'Investigación UX' }, slug: 'ux-research' },
          { title: { en: 'Customer Journey Map', es: 'Mapa de Viaje del Cliente' }, slug: 'customer-journey-map' }
        ]
      },
      {
        id: 'surveys',
        title: { en: 'Surveys & Questionnaires', es: 'Encuestas y Cuestionarios' },
        description: {
          en: 'Quantitative research methods to gather user data at scale',
          es: 'Métodos de investigación cuantitativa para recopilar datos a escala'
        },
        lessonSlug: 'surveys-questionnaires',
        status: 'not-started',
        level: 'beginner',
        tags: ['ux', 'research'],
        skills: {
          en: ['Survey design', 'Data analysis', 'Statistical basics'],
          es: ['Diseño de encuestas', 'Análisis de datos', 'Básicos estadísticos']
        },
        prerequisites: { en: ['UX Research'], es: ['Investigación UX'] },
        nextSteps: { en: ['Competitive Analysis'], es: ['Análisis Competitivo'] },
        hasLesson: true,
        order: 3,
        relatedLessons: [
          { title: { en: 'UX Research', es: 'Investigación UX' }, slug: 'ux-research' },
          { title: { en: 'Competitive Analysis', es: 'Análisis Competitivo' }, slug: 'competitive-analysis-basics' }
        ]
      },
      {
        id: 'competitive-analysis-basics',
        title: { en: 'Competitive Analysis Basics', es: 'Análisis Competitivo Básico' },
        description: {
          en: 'Structured approach to analyzing competitor products',
          es: 'Enfoque estructurado para analizar productos competidores'
        },
        lessonSlug: 'competitive-analysis-basics',
        status: 'not-started',
        level: 'beginner',
        tags: ['ux', 'research', 'strategy'],
        skills: {
          en: ['Market research', 'Feature benchmarking', 'Comparative analysis'],
          es: ['Investigación de mercado', 'Benchmarking de features', 'Análisis comparativo']
        },
        prerequisites: { en: ['Surveys'], es: ['Encuestas'] },
        nextSteps: { en: ['Competitive Analysis (Advanced)'], es: ['Análisis Competitivo (Avanzado)'] },
        hasLesson: true,
        order: 4,
        relatedLessons: [
          { title: { en: 'Competitive Analysis', es: 'Análisis Competitivo' }, slug: 'competitive-analysis' },
          { title: { en: 'Surveys', es: 'Encuestas' }, slug: 'surveys-questionnaires' }
        ]
      },
      {
        id: 'competitive-analysis',
        title: { en: 'Competitive Analysis', es: 'Análisis Competitivo' },
        description: {
          en: 'Deep competitive analysis, benchmarking, and strategic positioning',
          es: 'Análisis competitivo profundo, benchmarking y posicionamiento estratégico'
        },
        lessonSlug: 'competitive-analysis',
        status: 'not-started',
        level: 'intermediate',
        tags: ['ux', 'research', 'strategy'],
        skills: {
          en: ['Competitive benchmarking', 'SWOT analysis', 'Strategic positioning'],
          es: ['Benchmarking competitivo', 'Análisis FODA', 'Posicionamiento estratégico']
        },
        prerequisites: { en: ['Competitive Analysis Basics'], es: ['Análisis Competitivo Básico'] },
        nextSteps: { en: ['Customer Journey Map'], es: ['Mapa de Viaje del Cliente'] },
        hasLesson: true,
        order: 5,
        relatedLessons: [
          { title: { en: 'Customer Journey Map', es: 'Mapa de Viaje del Cliente' }, slug: 'customer-journey-map' },
          { title: { en: 'Problem Statements', es: 'Declaraciones de Problema' }, slug: 'problem-statements' }
        ]
      },
      {
        id: 'customer-journey-map',
        title: { en: 'Customer Journey Map', es: 'Mapa de Viaje del Cliente' },
        description: {
          en: 'Visualizing the complete user experience across touchpoints',
          es: 'Visualizar la experiencia de usuario completa a través de touchpoints'
        },
        lessonSlug: 'customer-journey-map',
        status: 'not-started',
        level: 'intermediate',
        tags: ['ux', 'research'],
        skills: {
          en: ['Journey maps', 'Touchpoint analysis', 'Pain point identification'],
          es: ['Mapas de viaje', 'Análisis de touchpoints', 'Identificación de puntos de dolor']
        },
        prerequisites: { en: ['User Personas'], es: ['User Personas'] },
        nextSteps: { en: ['Service Blueprint'], es: ['Service Blueprint'] },
        hasLesson: true,
        order: 6,
        relatedLessons: [
          { title: { en: 'User Personas', es: 'User Personas' }, slug: 'user-personas' },
          { title: { en: 'Service Blueprint', es: 'Service Blueprint' }, slug: 'service-blueprint' }
        ]
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════
  // CLUSTER 3: INFORMATION ARCHITECTURE
  // ═══════════════════════════════════════════════════════════
  {
    id: 'information-architecture',
    title: { en: 'Information Architecture', es: 'Arquitectura de Información' },
    color: 'cyan',
    order: 3,
    nodes: [
      {
        id: 'ia-main',
        title: { en: 'Information Architecture', es: 'Arquitectura de Información' },
        description: {
          en: 'Organizing content so users can find what they need without thinking',
          es: 'Organizar contenido para que usuarios encuentren lo que necesitan sin pensar'
        },
        lessonSlug: 'information-architecture',
        status: 'not-started',
        level: 'beginner',
        tags: ['ux'],
        skills: {
          en: ['Sitemap creation', 'Content hierarchy', 'Navigation design'],
          es: ['Creación de sitemap', 'Jerarquía de contenido', 'Diseño de navegación']
        },
        prerequisites: { en: ['Usability Basics'], es: ['Fundamentos de Usabilidad'] },
        nextSteps: { en: ['IA Fundamentals', 'Card Sorting'], es: ['Fundamentos de AI', 'Card Sorting'] },
        hasLesson: true,
        order: 1,
        relatedLessons: [
          { title: { en: 'IA Fundamentals', es: 'Fundamentos de AI' }, slug: 'ia-fundamentals' },
          { title: { en: 'Card Sorting', es: 'Card Sorting' }, slug: 'card-sorting' }
        ]
      },
      {
        id: 'ia-fundamentals',
        title: { en: 'IA Fundamentals', es: 'Fundamentos de AI' },
        description: {
          en: 'Deep dive into information architecture patterns and mental models',
          es: 'Inmersión profunda en patrones de arquitectura de información y modelos mentales'
        },
        lessonSlug: 'ia-fundamentals',
        status: 'not-started',
        level: 'beginner',
        tags: ['ux'],
        skills: {
          en: ['IA patterns', 'Mental models', 'Taxonomy design'],
          es: ['Patrones de AI', 'Modelos mentales', 'Diseño de taxonomía']
        },
        prerequisites: { en: ['Information Architecture'], es: ['Arquitectura de Información'] },
        nextSteps: { en: ['Card Sorting'], es: ['Card Sorting'] },
        hasLesson: true,
        order: 2,
        relatedLessons: [
          { title: { en: 'Information Architecture', es: 'Arquitectura de Información' }, slug: 'information-architecture' },
          { title: { en: 'Card Sorting', es: 'Card Sorting' }, slug: 'card-sorting' }
        ]
      },
      {
        id: 'card-sorting',
        title: { en: 'Card Sorting', es: 'Card Sorting' },
        description: {
          en: 'Research method to validate and improve information architecture',
          es: 'Método de investigación para validar y mejorar arquitectura de información'
        },
        lessonSlug: 'card-sorting',
        status: 'not-started',
        level: 'beginner',
        tags: ['ux', 'research'],
        skills: {
          en: ['Open card sorting', 'Closed card sorting', 'Tree testing'],
          es: ['Card sorting abierto', 'Card sorting cerrado', 'Tree testing']
        },
        prerequisites: { en: ['IA Fundamentals'], es: ['Fundamentos de AI'] },
        nextSteps: { en: ['User Flows'], es: ['Flujos de Usuario'] },
        hasLesson: true,
        order: 3,
        relatedLessons: [
          { title: { en: 'IA Fundamentals', es: 'Fundamentos de AI' }, slug: 'ia-fundamentals' },
          { title: { en: 'User Flows', es: 'Flujos de Usuario' }, slug: 'user-flows' }
        ]
      },
      {
        id: 'user-flows',
        title: { en: 'User Flows', es: 'Flujos de Usuario' },
        description: {
          en: 'Mapping step-by-step user paths through a product',
          es: 'Mapear caminos paso a paso del usuario a través de un producto'
        },
        lessonSlug: 'user-flows',
        status: 'not-started',
        level: 'beginner',
        tags: ['ux'],
        skills: {
          en: ['Flow diagramming', 'Happy path', 'Edge cases', 'Error states'],
          es: ['Diagramas de flujo', 'Camino feliz', 'Casos extremos', 'Estados de error']
        },
        prerequisites: { en: ['Card Sorting'], es: ['Card Sorting'] },
        nextSteps: { en: ['Wireframes'], es: ['Wireframes'] },
        hasLesson: true,
        order: 4,
        relatedLessons: [
          { title: { en: 'Wireframing & Prototyping', es: 'Wireframing y Prototipado' }, slug: 'wireframing-prototyping' },
          { title: { en: 'Information Architecture', es: 'Arquitectura de Información' }, slug: 'information-architecture' }
        ]
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════
  // CLUSTER 4: VISUAL DESIGN
  // ═══════════════════════════════════════════════════════════
  {
    id: 'visual-design',
    title: { en: 'Visual Design', es: 'Diseño Visual' },
    color: 'green',
    order: 4,
    nodes: [
      {
        id: 'wireframes',
        title: { en: 'Wireframes', es: 'Wireframes' },
        description: {
          en: 'Creating low to mid-fidelity layouts to validate structure',
          es: 'Crear layouts de baja a media fidelidad para validar estructura'
        },
        lessonSlug: 'wireframes',
        status: 'not-started',
        level: 'beginner',
        tags: ['ux', 'ui'],
        skills: {
          en: ['Lo-fi wireframes', 'Layout structure', 'Content hierarchy'],
          es: ['Wireframes baja fidelidad', 'Estructura de layout', 'Jerarquía de contenido']
        },
        prerequisites: { en: ['User Flows'], es: ['Flujos de Usuario'] },
        nextSteps: { en: ['Wireframing & Prototyping'], es: ['Wireframing y Prototipado'] },
        hasLesson: true,
        order: 1,
        relatedLessons: [
          { title: { en: 'Wireframing & Prototyping', es: 'Wireframing y Prototipado' }, slug: 'wireframing-prototyping' },
          { title: { en: 'Visual Hierarchy', es: 'Jerarquía Visual' }, slug: 'visual-hierarchy' }
        ]
      },
      {
        id: 'wireframing-prototyping',
        title: { en: 'Wireframing & Prototyping', es: 'Wireframing y Prototipado' },
        description: {
          en: 'From wireframes to interactive prototypes for validation',
          es: 'De wireframes a prototipos interactivos para validación'
        },
        lessonSlug: 'wireframing-prototyping',
        status: 'not-started',
        level: 'beginner',
        tags: ['ux', 'ui'],
        skills: {
          en: ['Fidelity levels', 'Prototype tools', 'Interaction flows'],
          es: ['Niveles de fidelidad', 'Herramientas de prototipo', 'Flujos de interacción']
        },
        prerequisites: { en: ['Wireframes'], es: ['Wireframes'] },
        nextSteps: { en: ['Visual Hierarchy'], es: ['Jerarquía Visual'] },
        hasLesson: true,
        order: 2,
        relatedLessons: [
          { title: { en: 'Wireframes', es: 'Wireframes' }, slug: 'wireframes' },
          { title: { en: 'Prototyping Methods', es: 'Métodos de Prototipado' }, slug: 'prototyping-methods' }
        ]
      },
      {
        id: 'visual-hierarchy',
        title: { en: 'Visual Hierarchy', es: 'Jerarquía Visual' },
        description: {
          en: 'Guiding user attention through visual design principles',
          es: 'Guiar atención del usuario a través de principios de diseño visual'
        },
        lessonSlug: 'visual-hierarchy',
        status: 'not-started',
        level: 'beginner',
        tags: ['ui'],
        skills: {
          en: ['Focal points', 'Contrast', 'Scale & proportion', 'Gestalt principles'],
          es: ['Puntos focales', 'Contraste', 'Escala y proporción', 'Principios Gestalt']
        },
        prerequisites: { en: ['Wireframing & Prototyping'], es: ['Wireframing y Prototipado'] },
        nextSteps: { en: ['Typography', 'Color Theory'], es: ['Tipografía', 'Teoría del Color'] },
        hasLesson: true,
        order: 3,
        relatedLessons: [
          { title: { en: 'Typography Fundamentals', es: 'Fundamentos de Tipografía' }, slug: 'typography-fundamentals' },
          { title: { en: 'Color Theory', es: 'Teoría del Color' }, slug: 'color-theory' }
        ]
      },
      {
        id: 'typography',
        title: { en: 'Typography Fundamentals', es: 'Fundamentos de Tipografía' },
        description: {
          en: 'Font selection, type scales, readability, and pairing',
          es: 'Selección de fuentes, escalas tipográficas, legibilidad y combinación'
        },
        lessonSlug: 'typography-fundamentals',
        status: 'not-started',
        level: 'beginner',
        tags: ['ui'],
        skills: {
          en: ['Type scales', 'Readability', 'Font pairing', 'Hierarchy'],
          es: ['Escalas tipográficas', 'Legibilidad', 'Combinación de fuentes', 'Jerarquía']
        },
        prerequisites: { en: ['Visual Hierarchy'], es: ['Jerarquía Visual'] },
        nextSteps: { en: ['Color Theory'], es: ['Teoría del Color'] },
        hasLesson: true,
        order: 4,
        relatedLessons: [
          { title: { en: 'Visual Hierarchy', es: 'Jerarquía Visual' }, slug: 'visual-hierarchy' },
          { title: { en: 'Color Theory', es: 'Teoría del Color' }, slug: 'color-theory' }
        ]
      },
      {
        id: 'color-theory',
        title: { en: 'Color Theory', es: 'Teoría del Color' },
        description: {
          en: 'Color systems, psychology, harmony, and accessibility',
          es: 'Sistemas de color, psicología, armonía y accesibilidad'
        },
        lessonSlug: 'color-theory',
        status: 'not-started',
        level: 'beginner',
        tags: ['ui'],
        skills: {
          en: ['Color harmony', 'Accessibility contrast', 'Color psychology', 'Palette creation'],
          es: ['Armonía de color', 'Contraste de accesibilidad', 'Psicología del color', 'Creación de paleta']
        },
        prerequisites: { en: ['Typography'], es: ['Tipografía'] },
        nextSteps: { en: ['Accessibility WCAG'], es: ['Accesibilidad WCAG'] },
        hasLesson: true,
        order: 5,
        relatedLessons: [
          { title: { en: 'Accessibility WCAG', es: 'Accesibilidad WCAG' }, slug: 'accessibility-wcag' },
          { title: { en: 'Typography Fundamentals', es: 'Fundamentos de Tipografía' }, slug: 'typography-fundamentals' }
        ]
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════
  // CLUSTER 5: METHODOLOGIES
  // ═══════════════════════════════════════════════════════════
  {
    id: 'methodologies',
    title: { en: 'Methodologies', es: 'Metodologías' },
    color: 'pink',
    order: 5,
    nodes: [
      {
        id: 'methodologies-overview',
        title: { en: 'Methodologies Overview', es: 'Visión General de Metodologías' },
        description: {
          en: 'Choosing and combining UX/product methodologies based on project needs',
          es: 'Elegir y combinar metodologías UX/producto según necesidades del proyecto'
        },
        lessonSlug: 'methodologies-overview',
        status: 'not-started',
        level: 'intermediate',
        tags: ['ux', 'product', 'strategy'],
        skills: {
          en: ['Methodology selection', 'Process design', 'Team alignment'],
          es: ['Selección de metodología', 'Diseño de procesos', 'Alineación de equipo']
        },
        prerequisites: { en: ['UX Process'], es: ['Proceso UX'] },
        nextSteps: { en: ['Design Thinking', 'Lean UX'], es: ['Design Thinking', 'Lean UX'] },
        hasLesson: true,
        order: 1,
        relatedLessons: [
          { title: { en: 'Design Thinking', es: 'Design Thinking' }, slug: 'design-thinking' },
          { title: { en: 'Lean UX', es: 'Lean UX' }, slug: 'lean-ux' },
          { title: { en: 'Design Sprint', es: 'Design Sprint' }, slug: 'design-sprint' }
        ]
      },
      {
        id: 'design-thinking',
        title: { en: 'Design Thinking', es: 'Design Thinking' },
        description: {
          en: 'Empathize, define, ideate, prototype, test — the core design process',
          es: 'Empatizar, definir, idear, prototipar, testear — el proceso de diseño fundamental'
        },
        lessonSlug: 'design-thinking',
        status: 'not-started',
        level: 'intermediate',
        tags: ['ux', 'product'],
        skills: {
          en: ['Problem framing', 'Iterative mindset', 'How Might We', 'Creative thinking'],
          es: ['Encuadre de problema', 'Mentalidad iterativa', 'How Might We', 'Pensamiento creativo']
        },
        prerequisites: { en: ['Methodologies Overview'], es: ['Visión General de Metodologías'] },
        nextSteps: { en: ['Lean UX', 'Design Sprint'], es: ['Lean UX', 'Design Sprint'] },
        hasLesson: true,
        order: 2,
        relatedLessons: [
          { title: { en: 'Lean UX', es: 'Lean UX' }, slug: 'lean-ux' },
          { title: { en: 'Design Sprint', es: 'Design Sprint' }, slug: 'design-sprint' }
        ]
      },
      {
        id: 'lean-ux',
        title: { en: 'Lean UX', es: 'Lean UX' },
        description: {
          en: 'Build-Measure-Learn applied to design: hypothesis-driven UX',
          es: 'Build-Measure-Learn aplicado al diseño: UX basado en hipótesis'
        },
        lessonSlug: 'lean-ux',
        status: 'not-started',
        level: 'intermediate',
        tags: ['ux', 'product', 'strategy'],
        skills: {
          en: ['Hypothesis writing', 'MVP definition', 'Experiment design'],
          es: ['Escritura de hipótesis', 'Definición de MVP', 'Diseño de experimentos']
        },
        prerequisites: { en: ['Design Thinking'], es: ['Design Thinking'] },
        nextSteps: { en: ['Design Sprint'], es: ['Design Sprint'] },
        hasLesson: true,
        order: 3,
        relatedLessons: [
          { title: { en: 'Design Thinking', es: 'Design Thinking' }, slug: 'design-thinking' },
          { title: { en: 'Problem Statements', es: 'Declaraciones de Problema' }, slug: 'problem-statements' }
        ]
      },
      {
        id: 'design-sprint',
        title: { en: 'Design Sprint', es: 'Design Sprint' },
        description: {
          en: '5-day process to solve problems and test ideas through rapid prototyping',
          es: 'Proceso de 5 días para resolver problemas y testear ideas mediante prototipado rápido'
        },
        lessonSlug: 'design-sprint',
        status: 'not-started',
        level: 'intermediate',
        tags: ['ux', 'product'],
        skills: {
          en: ['Rapid prototyping', 'Facilitation', 'User testing', 'Decision making'],
          es: ['Prototipado rápido', 'Facilitación', 'Pruebas de usuario', 'Toma de decisiones']
        },
        prerequisites: { en: ['Design Thinking'], es: ['Design Thinking'] },
        nextSteps: { en: ['Scrum for Designers'], es: ['Scrum para Diseñadores'] },
        hasLesson: true,
        order: 4,
        relatedLessons: [
          { title: { en: 'Design Thinking', es: 'Design Thinking' }, slug: 'design-thinking' },
          { title: { en: 'Scrum for Designers', es: 'Scrum para Diseñadores' }, slug: 'scrum-for-designers' }
        ]
      },
      {
        id: 'scrum-for-designers',
        title: { en: 'Scrum for Designers', es: 'Scrum para Diseñadores' },
        description: {
          en: 'How designers thrive in Scrum teams: dual-track agile, tickets, and dev collaboration',
          es: 'Cómo diseñadores prosperan en equipos Scrum: agile de doble vía y colaboración con devs'
        },
        lessonSlug: 'scrum-for-designers',
        status: 'not-started',
        level: 'intermediate',
        tags: ['product', 'collaboration'],
        skills: {
          en: ['Scrum ceremonies', 'Ticket writing', 'Dual-track agile', 'Dev collaboration'],
          es: ['Ceremonias Scrum', 'Escritura de tickets', 'Agile de doble vía', 'Colaboración con dev']
        },
        prerequisites: { en: ['Design Sprint'], es: ['Design Sprint'] },
        nextSteps: { en: ['User Stories & Requirements'], es: ['User Stories y Requisitos'] },
        hasLesson: true,
        order: 5,
        relatedLessons: [
          { title: { en: 'Design Sprint', es: 'Design Sprint' }, slug: 'design-sprint' },
          { title: { en: 'User Stories', es: 'User Stories' }, slug: 'user-stories-and-requirements' }
        ]
      },
      {
        id: 'user-stories-requirements',
        title: { en: 'User Stories & Requirements', es: 'User Stories y Requisitos' },
        description: {
          en: 'Transform requests into clear, actionable stories with acceptance criteria',
          es: 'Transforma solicitudes en historias claras con criterios de aceptación'
        },
        lessonSlug: 'user-stories-and-requirements',
        status: 'not-started',
        level: 'intermediate',
        tags: ['product', 'collaboration'],
        skills: {
          en: ['User stories', 'Acceptance criteria', 'Requirements analysis', 'Task breakdown'],
          es: ['User stories', 'Criterios de aceptación', 'Análisis de requisitos', 'Desglose de tareas']
        },
        prerequisites: { en: ['Scrum for Designers'], es: ['Scrum para Diseñadores'] },
        nextSteps: { en: ['Problem Statements'], es: ['Declaraciones de Problema'] },
        hasLesson: true,
        order: 6,
        relatedLessons: [
          { title: { en: 'Scrum for Designers', es: 'Scrum para Diseñadores' }, slug: 'scrum-for-designers' },
          { title: { en: 'Lean UX', es: 'Lean UX' }, slug: 'lean-ux' }
        ]
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════
  // CLUSTER 6: TESTING & VALIDATION
  // ═══════════════════════════════════════════════════════════
  {
    id: 'testing-validation',
    title: { en: 'Testing & Validation', es: 'Testing y Validación' },
    color: 'orange',
    order: 6,
    nodes: [
      {
        id: 'accessibility-wcag',
        title: { en: 'Accessibility WCAG', es: 'Accesibilidad WCAG' },
        description: {
          en: 'WCAG guidelines and inclusive design principles',
          es: 'Guías WCAG y principios de diseño inclusivo'
        },
        lessonSlug: 'accessibility-wcag',
        status: 'not-started',
        level: 'intermediate',
        tags: ['ui', 'ux'],
        skills: {
          en: ['WCAG AA', 'Keyboard navigation', 'Screen readers', 'Color contrast'],
          es: ['WCAG AA', 'Navegación por teclado', 'Lectores de pantalla', 'Contraste de color']
        },
        prerequisites: { en: ['Color Theory'], es: ['Teoría del Color'] },
        nextSteps: { en: ['Prototyping Methods'], es: ['Métodos de Prototipado'] },
        hasLesson: true,
        order: 1,
        relatedLessons: [
          { title: { en: 'Color Theory', es: 'Teoría del Color' }, slug: 'color-theory' },
          { title: { en: 'Accessibility (Advanced)', es: 'Accesibilidad (Avanzado)' }, slug: 'accessibility' }
        ]
      },
      {
        id: 'prototyping-methods',
        title: { en: 'Prototyping Methods', es: 'Métodos de Prototipado' },
        description: {
          en: 'From paper to high-fidelity interactive prototypes',
          es: 'De papel a prototipos interactivos de alta fidelidad'
        },
        lessonSlug: 'prototyping-methods',
        status: 'not-started',
        level: 'intermediate',
        tags: ['ux', 'ui'],
        skills: {
          en: ['Lo-fi prototyping', 'Hi-fi prototyping', 'Tool selection'],
          es: ['Prototipado baja fidelidad', 'Prototipado alta fidelidad', 'Selección de herramientas']
        },
        prerequisites: { en: ['Accessibility WCAG'], es: ['Accesibilidad WCAG'] },
        nextSteps: { en: ['Usability Testing'], es: ['Pruebas de Usabilidad'] },
        hasLesson: true,
        order: 2,
        relatedLessons: [
          { title: { en: 'Usability Testing', es: 'Pruebas de Usabilidad' }, slug: 'usability-testing' },
          { title: { en: 'Wireframing & Prototyping', es: 'Wireframing y Prototipado' }, slug: 'wireframing-prototyping' }
        ]
      },
      {
        id: 'usability-testing',
        title: { en: 'Usability Testing', es: 'Pruebas de Usabilidad' },
        description: {
          en: 'Planning, conducting, and analyzing usability tests',
          es: 'Planear, conducir y analizar tests de usabilidad'
        },
        lessonSlug: 'usability-testing',
        status: 'not-started',
        level: 'intermediate',
        tags: ['ux', 'research'],
        skills: {
          en: ['Test planning', 'Moderation', 'Think-aloud protocol', 'Insight synthesis'],
          es: ['Planeación de tests', 'Moderación', 'Protocolo think-aloud', 'Síntesis de insights']
        },
        prerequisites: { en: ['Prototyping Methods'], es: ['Métodos de Prototipado'] },
        nextSteps: { en: ['Heuristic Analysis'], es: ['Análisis Heurístico'] },
        hasLesson: true,
        order: 3,
        relatedLessons: [
          { title: { en: 'Prototyping Methods', es: 'Métodos de Prototipado' }, slug: 'prototyping-methods' },
          { title: { en: 'UX Research', es: 'Investigación UX' }, slug: 'ux-research' }
        ]
      },
      {
        id: 'heuristic-analysis',
        title: { en: 'Heuristic Analysis', es: 'Análisis Heurístico' },
        description: {
          en: 'Professional methodology for evaluating interfaces using Nielsen\'s heuristics and severity ratings',
          es: 'Metodología profesional para evaluar interfaces usando las heurísticas de Nielsen y escalas de severidad'
        },
        lessonSlug: 'heuristic-analysis',
        status: 'not-started',
        level: 'intermediate',
        tags: ['ux', 'research'],
        skills: {
          en: ['Nielsen\'s 10 heuristics', 'Severity rating', 'Evaluation reports', 'Checklist methodology'],
          es: ['10 heurísticas de Nielsen', 'Calificación de severidad', 'Informes de evaluación', 'Metodología de checklist']
        },
        prerequisites: { en: ['Usability Testing'], es: ['Pruebas de Usabilidad'] },
        nextSteps: { en: ['Problem Statements', 'Dark Patterns'], es: ['Declaraciones de Problema', 'Dark Patterns'] },
        hasLesson: true,
        order: 4,
        relatedLessons: [
          { title: { en: 'Usability Testing', es: 'Pruebas de Usabilidad' }, slug: 'usability-testing' },
          { title: { en: 'Dark Patterns', es: 'Dark Patterns' }, slug: 'dark-patterns' }
        ]
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════
  // CLUSTER 7: ADVANCED UX/UI & STRATEGY
  // ═══════════════════════════════════════════════════════════
  {
    id: 'advanced',
    title: { en: 'Advanced UX/UI & Strategy', es: 'Estrategia y UX/UI Avanzado' },
    color: 'red',
    order: 7,
    nodes: [
      {
        id: 'problem-statements',
        title: { en: 'Problem Statements', es: 'Declaraciones de Problema' },
        description: {
          en: 'Crafting clear problem statements, POV, and HMW from research insights',
          es: 'Crear declaraciones de problema claras, POV y HMW desde insights de investigación'
        },
        lessonSlug: 'problem-statements',
        status: 'not-started',
        level: 'intermediate',
        tags: ['product', 'strategy'],
        skills: {
          en: ['Problem articulation', 'POV creation', 'HMW framing'],
          es: ['Articulación de problema', 'Creación de POV', 'Encuadre HMW']
        },
        prerequisites: { en: ['UX Research', 'User Personas'], es: ['Investigación UX', 'User Personas'] },
        nextSteps: { en: ['Service Blueprint'], es: ['Service Blueprint'] },
        hasLesson: true,
        order: 1,
        relatedLessons: [
          { title: { en: 'UX Research', es: 'Investigación UX' }, slug: 'ux-research' },
          { title: { en: 'Service Blueprint', es: 'Service Blueprint' }, slug: 'service-blueprint' }
        ]
      },
      {
        id: 'service-blueprint',
        title: { en: 'Service Blueprint', es: 'Service Blueprint' },
        description: {
          en: 'Mapping backend processes that support customer experience',
          es: 'Mapear procesos backend que apoyan experiencia del cliente'
        },
        lessonSlug: 'service-blueprint',
        status: 'not-started',
        level: 'advanced',
        tags: ['product', 'strategy'],
        skills: {
          en: ['Service blueprints', 'Touchpoint mapping', 'Systems thinking'],
          es: ['Service blueprints', 'Mapeo de touchpoints', 'Pensamiento sistémico']
        },
        prerequisites: { en: ['Customer Journey Map'], es: ['Mapa de Viaje del Cliente'] },
        nextSteps: { en: ['Atomic Design'], es: ['Diseño Atómico'] },
        hasLesson: true,
        order: 2,
        relatedLessons: [
          { title: { en: 'Customer Journey Map', es: 'Mapa de Viaje del Cliente' }, slug: 'customer-journey-map' },
          { title: { en: 'Problem Statements', es: 'Declaraciones de Problema' }, slug: 'problem-statements' }
        ]
      },
      {
        id: 'atomic-design',
        title: { en: 'Atomic Design', es: 'Diseño Atómico' },
        description: {
          en: 'Methodology for creating scalable design systems with atoms, molecules, organisms',
          es: 'Metodología para crear sistemas de diseño escalables con átomos, moléculas, organismos'
        },
        lessonSlug: 'atomic-design',
        status: 'not-started',
        level: 'advanced',
        tags: ['ui'],
        skills: {
          en: ['Design tokens', 'Component hierarchy', 'System thinking'],
          es: ['Design tokens', 'Jerarquía de componentes', 'Pensamiento sistémico']
        },
        prerequisites: { en: ['Visual Hierarchy', 'Typography'], es: ['Jerarquía Visual', 'Tipografía'] },
        nextSteps: { en: ['Design Systems Governance'], es: ['Gobernanza de Sistemas de Diseño'] },
        hasLesson: true,
        order: 3,
        relatedLessons: [
          { title: { en: 'Design Systems Governance', es: 'Gobernanza del Sistema' }, slug: 'design-systems-governance' },
          { title: { en: 'Figma Mastery', es: 'Dominio de Figma' }, slug: 'figma-mastery' }
        ]
      },
      {
        id: 'figma-mastery',
        title: { en: 'Figma Mastery', es: 'Dominio de Figma' },
        description: {
          en: 'Components, Variants, Auto Layout, Variables, and Design Tokens in Figma',
          es: 'Componentes, Variantes, Auto Layout, Variables y Design Tokens en Figma'
        },
        lessonSlug: 'figma-mastery',
        status: 'not-started',
        level: 'advanced',
        tags: ['ui'],
        skills: {
          en: ['Auto Layout', 'Component variants', 'Variables', 'Design tokens'],
          es: ['Auto Layout', 'Variantes de componente', 'Variables', 'Design tokens']
        },
        prerequisites: { en: ['Atomic Design'], es: ['Diseño Atómico'] },
        nextSteps: { en: ['Microinteractions'], es: ['Microinteracciones'] },
        hasLesson: true,
        order: 4,
        relatedLessons: [
          { title: { en: 'Atomic Design', es: 'Diseño Atómico' }, slug: 'atomic-design' },
          { title: { en: 'Microinteractions', es: 'Microinteracciones' }, slug: 'microinteractions' }
        ]
      },
      {
        id: 'microinteractions',
        title: { en: 'Microinteractions', es: 'Microinteracciones' },
        description: {
          en: 'The details that make a product feel alive: triggers, feedback, loops',
          es: 'Los detalles que dan vida al producto: triggers, feedback, loops'
        },
        lessonSlug: 'microinteractions',
        status: 'not-started',
        level: 'advanced',
        tags: ['ui'],
        skills: {
          en: ['Animation principles', 'Easing functions', 'Feedback design', 'State transitions'],
          es: ['Principios de animación', 'Funciones de easing', 'Diseño de feedback', 'Transiciones de estado']
        },
        prerequisites: { en: ['Figma Mastery'], es: ['Dominio de Figma'] },
        nextSteps: { en: ['UX Psychology'], es: ['Psicología UX'] },
        hasLesson: true,
        order: 5,
        relatedLessons: [
          { title: { en: 'Figma Mastery', es: 'Dominio de Figma' }, slug: 'figma-mastery' },
          { title: { en: 'UX Psychology', es: 'Psicología UX' }, slug: 'ux-psychology' }
        ]
      },
      {
        id: 'accessibility',
        title: { en: 'Accessibility (Advanced)', es: 'Accesibilidad (Avanzado)' },
        description: {
          en: 'Advanced accessibility: ARIA, assistive tech, inclusive interaction patterns',
          es: 'Accesibilidad avanzada: ARIA, tecnologías asistivas, patrones de interacción inclusivos'
        },
        lessonSlug: 'accessibility',
        status: 'not-started',
        level: 'advanced',
        tags: ['ui', 'ux'],
        skills: {
          en: ['ARIA patterns', 'Assistive tech', 'Inclusive design', 'Audit methodology'],
          es: ['Patrones ARIA', 'Tecnologías asistivas', 'Diseño inclusivo', 'Metodología de auditoría']
        },
        prerequisites: { en: ['Accessibility WCAG'], es: ['Accesibilidad WCAG'] },
        nextSteps: { en: ['Front-End Foundations'], es: ['Fundamentos Front-End'] },
        hasLesson: true,
        order: 6,
        relatedLessons: [
          { title: { en: 'Accessibility WCAG', es: 'Accesibilidad WCAG' }, slug: 'accessibility-wcag' },
          { title: { en: 'Front-End Foundations', es: 'Fundamentos Front-End' }, slug: 'frontend-foundations' }
        ]
      },
      {
        id: 'ux-psychology',
        title: { en: 'UX Psychology', es: 'Psicología UX' },
        description: {
          en: 'Cognitive biases, persuasion patterns, and behavioral design',
          es: 'Sesgos cognitivos, patrones de persuasión y diseño conductual'
        },
        lessonSlug: 'ux-psychology',
        status: 'not-started',
        level: 'advanced',
        tags: ['ux'],
        skills: {
          en: ['Cognitive biases', 'Behavioral triggers', 'Persuasive design', 'Ethical nudging'],
          es: ['Sesgos cognitivos', 'Triggers conductuales', 'Diseño persuasivo', 'Nudging ético']
        },
        prerequisites: { en: ['Laws of UX'], es: ['Leyes de UX'] },
        nextSteps: { en: ['Design Ethics'], es: ['Ética de Diseño'] },
        hasLesson: true,
        order: 7,
        relatedLessons: [
          { title: { en: 'Laws of UX', es: 'Leyes de UX' }, slug: 'laws-of-ux' },
          { title: { en: 'Design Ethics', es: 'Ética de Diseño' }, slug: 'design-ethics' }
        ]
      },
      {
        id: 'design-ethics',
        title: { en: 'Design Ethics', es: 'Ética de Diseño' },
        description: {
          en: 'Dark patterns, ethical design, legal consequences, and responsible design',
          es: 'Patrones oscuros, diseño ético, consecuencias legales y diseño responsable'
        },
        lessonSlug: 'design-ethics',
        status: 'not-started',
        level: 'advanced',
        tags: ['ux', 'product'],
        skills: {
          en: ['Dark pattern detection', 'Ethical redesign', 'Regulatory awareness', 'User advocacy'],
          es: ['Detección de patrones oscuros', 'Rediseño ético', 'Conciencia regulatoria', 'Defensa del usuario']
        },
        prerequisites: { en: ['UX Psychology'], es: ['Psicología UX'] },
        nextSteps: { en: ['Design Systems Governance'], es: ['Gobernanza del Sistema'] },
        hasLesson: true,
        order: 8,
        relatedLessons: [
          { title: { en: 'UX Psychology', es: 'Psicología UX' }, slug: 'ux-psychology' },
          { title: { en: 'Laws of UX', es: 'Leyes de UX' }, slug: 'laws-of-ux' }
        ]
      },
      {
        id: 'design-systems-governance',
        title: { en: 'System Governance', es: 'Gobernanza del Sistema' },
        description: {
          en: 'Managing design systems at scale: contributions, versioning, governance',
          es: 'Gestionar sistemas de diseño a escala: contribuciones, versionado, gobernanza'
        },
        lessonSlug: 'design-systems-governance',
        status: 'not-started',
        level: 'advanced',
        tags: ['ui', 'product'],
        skills: {
          en: ['Contribution models', 'Versioning strategy', 'Governance policy', 'Scale management'],
          es: ['Modelos de contribución', 'Estrategia de versionado', 'Políticas de gobernanza', 'Gestión de escala']
        },
        prerequisites: { en: ['Atomic Design'], es: ['Diseño Atómico'] },
        nextSteps: { en: ['Laws of UX'], es: ['Leyes de UX'] },
        hasLesson: true,
        order: 9,
        relatedLessons: [
          { title: { en: 'Atomic Design', es: 'Diseño Atómico' }, slug: 'atomic-design' },
          { title: { en: 'Figma Mastery', es: 'Dominio de Figma' }, slug: 'figma-mastery' }
        ]
      },
      {
        id: 'laws-of-ux',
        title: { en: 'Laws of UX', es: 'Leyes de UX' },
        description: {
          en: 'Psychology-based principles: Hick\'s, Fitts\'s, Jakob\'s, Miller\'s Law and more',
          es: 'Principios basados en psicología: Ley de Hick, Fitts, Jakob, Miller y más'
        },
        lessonSlug: 'laws-of-ux',
        status: 'not-started',
        level: 'advanced',
        tags: ['ux'],
        skills: {
          en: ['Hick\'s Law', 'Fitts\'s Law', 'Jakob\'s Law', 'Miller\'s Law'],
          es: ['Ley de Hick', 'Ley de Fitts', 'Ley de Jakob', 'Ley de Miller']
        },
        prerequisites: { en: ['Usability Basics'], es: ['Fundamentos de Usabilidad'] },
        nextSteps: { en: ['UX Psychology'], es: ['Psicología UX'] },
        hasLesson: true,
        order: 10,
        relatedLessons: [
          { title: { en: 'UX Psychology', es: 'Psicología UX' }, slug: 'ux-psychology' },
          { title: { en: 'Usability Basics', es: 'Fundamentos de Usabilidad' }, slug: 'usability-basics' }
        ]
      },
      {
        id: 'frontend-foundations',
        title: { en: 'Front-End Foundations', es: 'Fundamentos Front-End' },
        description: {
          en: 'HTML, CSS & Layout mental models for designers — bridging design and development',
          es: 'Modelos mentales de HTML, CSS y Layout para diseñadores — uniendo diseño y desarrollo'
        },
        lessonSlug: 'frontend-foundations',
        status: 'not-started',
        level: 'advanced',
        tags: ['ui'],
        skills: {
          en: ['Box model', 'Flexbox & Grid', 'Responsive units', 'Design handoff'],
          es: ['Modelo de caja', 'Flexbox y Grid', 'Unidades responsivas', 'Entrega de diseño']
        },
        prerequisites: { en: ['Accessibility (Advanced)'], es: ['Accesibilidad (Avanzado)'] },
        nextSteps: { en: ['HTML Fundamentals'], es: ['Fundamentos HTML'] },
        hasLesson: true,
        order: 11,
        relatedLessons: [
          { title: { en: 'Accessibility (Advanced)', es: 'Accesibilidad (Avanzado)' }, slug: 'accessibility' },
          { title: { en: 'HTML Fundamentals', es: 'Fundamentos HTML' }, slug: 'html-fundamentals' },
          { title: { en: 'CSS Fundamentals', es: 'Fundamentos CSS' }, slug: 'css-fundamentals' }
        ]
      },
      {
        id: 'html-fundamentals',
        title: { en: 'HTML Fundamentals', es: 'Fundamentos de HTML' },
        description: {
          en: 'Structure web content with HTML — semantic elements, forms, accessibility',
          es: 'Estructura contenido web con HTML — elementos semánticos, formularios, accesibilidad'
        },
        lessonSlug: 'html-fundamentals',
        status: 'not-started',
        level: 'beginner',
        tags: ['ui'],
        skills: {
          en: ['Semantic HTML', 'Forms', 'Accessibility', 'Document structure'],
          es: ['HTML semántico', 'Formularios', 'Accesibilidad', 'Estructura de documento']
        },
        prerequisites: { en: ['Front-End Foundations'], es: ['Fundamentos Front-End'] },
        nextSteps: { en: ['CSS Fundamentals'], es: ['Fundamentos CSS'] },
        hasLesson: true,
        order: 12,
        relatedLessons: [
          { title: { en: 'Front-End Foundations', es: 'Fundamentos Front-End' }, slug: 'frontend-foundations' },
          { title: { en: 'CSS Fundamentals', es: 'Fundamentos CSS' }, slug: 'css-fundamentals' }
        ]
      },
      {
        id: 'css-fundamentals',
        title: { en: 'CSS Fundamentals', es: 'Fundamentos de CSS' },
        description: {
          en: 'Master styling, layout (Flexbox, Grid), responsive design, and animations',
          es: 'Domina estilos, layout (Flexbox, Grid), diseño responsivo y animaciones'
        },
        lessonSlug: 'css-fundamentals',
        status: 'not-started',
        level: 'beginner',
        tags: ['ui'],
        skills: {
          en: ['Box model', 'Flexbox', 'CSS Grid', 'Responsive design', 'Animations'],
          es: ['Modelo de caja', 'Flexbox', 'CSS Grid', 'Diseño responsivo', 'Animaciones']
        },
        prerequisites: { en: ['HTML Fundamentals'], es: ['Fundamentos HTML'] },
        nextSteps: { en: ['Intro to JavaScript'], es: ['Intro a JavaScript'] },
        hasLesson: true,
        order: 13,
        relatedLessons: [
          { title: { en: 'HTML Fundamentals', es: 'Fundamentos HTML' }, slug: 'html-fundamentals' },
          { title: { en: 'Intro to JavaScript', es: 'Intro a JavaScript' }, slug: 'intro-javascript' }
        ]
      },
      {
        id: 'intro-javascript',
        title: { en: 'Intro to JavaScript', es: 'Introducción a JavaScript' },
        description: {
          en: 'The language powering web interactivity — variables, functions, DOM, events, frameworks',
          es: 'El lenguaje que impulsa la interactividad web — variables, funciones, DOM, eventos, frameworks'
        },
        lessonSlug: 'intro-javascript',
        status: 'not-started',
        level: 'beginner',
        tags: ['ui'],
        skills: {
          en: ['Variables & types', 'Functions', 'DOM manipulation', 'Events', 'React basics'],
          es: ['Variables y tipos', 'Funciones', 'Manipulación DOM', 'Eventos', 'Básicos de React']
        },
        prerequisites: { en: ['CSS Fundamentals'], es: ['Fundamentos CSS'] },
        nextSteps: { en: ['You\'re ready for React!'], es: ['¡Estás listo para React!'] },
        hasLesson: true,
        order: 14,
        relatedLessons: [
          { title: { en: 'CSS Fundamentals', es: 'Fundamentos CSS' }, slug: 'css-fundamentals' },
          { title: { en: 'Front-End Foundations', es: 'Fundamentos Front-End' }, slug: 'frontend-foundations' }
        ]
      }
    ]
  }
];

// Helper to find nodes from the internal source by ID
const _allNodes: RoadmapNode[] = _roadmapSource.flatMap(c => c.nodes);
const _n = (id: string): RoadmapNode => {
  const node = _allNodes.find(n => n.id === id);
  if (!node) throw new Error(`Roadmap node not found: ${id}`);
  return node;
};

// Helper to create placeholder roadmap nodes for upcoming lessons
const _pn = (
  id: string,
  title: { en: string; es: string },
  description: { en: string; es: string },
  level: NodeLevel,
  tags: NodeTag[],
  order: number,
): RoadmapNode => ({
  id,
  title,
  description,
  lessonSlug: id,
  status: 'not-started',
  level,
  tags,
  skills: { en: ['Coming soon'], es: ['Próximamente'] },
  prerequisites: { en: [], es: [] },
  nextSteps: { en: [], es: [] },
  hasLesson: false,
  order,
  relatedLessons: [],
});

// ============================================================
// EXPORTED ROADMAP DATA — 8 Phases following real project workflow
// Mirrors content.ts track organization exactly
// Ordered: basic → intermediate → advanced within each phase
// ============================================================
export const roadmapData: RoadmapCluster[] = [
  {
    id: 'phase-1-foundations',
    title: { en: 'Foundations', es: 'Fundamentos' },
    color: 'purple',
    order: 1,
    nodes: [
      { ..._n('ux-ui-product'), order: 1 },
      { ..._n('usability-basics'), order: 2 },
      { ..._n('design-thinking'), order: 3 },
      { ..._n('ux-process'), order: 4 },
      { ..._n('methodologies-overview'), order: 5 },
      { ..._n('lean-ux'), order: 6 },
      { ..._n('design-sprint'), order: 7 },
      { ..._n('scrum-for-designers'), order: 8 },
      { ..._n('user-stories-requirements'), order: 9 },
    ]
  },
  {
    id: 'phase-2-discovery',
    title: { en: 'Problem Framing & Discovery', es: 'Definición del Problema y Descubrimiento' },
    color: 'blue',
    order: 2,
    nodes: [
      {
        id: 'business-goals-kpis',
        title: { en: 'Business Goals & KPIs', es: 'Objetivos de Negocio y KPIs' },
        description: {
          en: 'Aligning design decisions with measurable business outcomes',
          es: 'Alineando decisiones de diseño con resultados de negocio medibles'
        },
        lessonSlug: 'business-goals-kpis',
        status: 'not-started',
        level: 'beginner',
        tags: ['strategy'],
        skills: {
          en: ['KPI definition', 'Goals-to-Metrics mapping', 'North Star Metric', 'Vanity vs Real metrics', 'Design impact measurement'],
          es: ['Definición de KPIs', 'Mapeo de Objetivos a Métricas', 'Métrica North Star', 'Métricas Vanidad vs Reales', 'Medición de impacto de diseño']
        },
        prerequisites: { en: ['UX/UI Foundations'], es: ['Fundamentos UX/UI'] },
        nextSteps: {
          en: ['Stakeholder Mapping', 'Problem Statements', 'Product Discovery'],
          es: ['Mapeo de Stakeholders', 'Declaraciones de Problema', 'Descubrimiento de Producto']
        },
        hasLesson: true,
        order: 1,
        relatedLessons: [
          { title: { en: 'Problem Statements', es: 'Declaraciones de Problema' }, slug: 'problem-statements' },
          { title: { en: 'Competitive Analysis', es: 'Análisis Competitivo' }, slug: 'competitive-analysis-basics' }
        ]
      },
      {
        id: 'stakeholder-mapping',
        title: { en: 'Stakeholder Mapping', es: 'Mapeo de Stakeholders' },
        description: {
          en: 'Identifying and prioritizing the people who influence your project',
          es: 'Identificando y priorizando las personas que influyen en tu proyecto'
        },
        lessonSlug: 'stakeholder-mapping',
        status: 'not-started',
        level: 'beginner',
        tags: ['strategy'],
        skills: {
          en: ['Power vs Interest Matrix', 'Communication strategy', 'Political risk signals', 'RACI matrix', 'Stakeholder interviews'],
          es: ['Matriz Poder vs Interés', 'Estrategia de comunicación', 'Señales de riesgo político', 'Matriz RACI', 'Entrevistas a stakeholders']
        },
        prerequisites: { en: ['Business Goals & KPIs'], es: ['Objetivos de Negocio y KPIs'] },
        nextSteps: {
          en: ['Problem Statements', 'Competitive Analysis', 'Product Discovery'],
          es: ['Declaraciones de Problema', 'Análisis Competitivo', 'Descubrimiento de Producto']
        },
        hasLesson: true,
        order: 2,
        relatedLessons: [
          { title: { en: 'Business Goals & KPIs', es: 'Objetivos de Negocio y KPIs' }, slug: 'business-goals-kpis' },
          { title: { en: 'Problem Statements', es: 'Declaraciones de Problema' }, slug: 'problem-statements' }
        ]
      },
      { ..._n('problem-statements'), order: 3 },
      { ..._n('competitive-analysis-basics'), order: 4 },
      { ..._n('competitive-analysis'), order: 5 },
      _pn('product-discovery',
        { en: 'Product Discovery', es: 'Descubrimiento de Producto' },
        { en: 'Frameworks for deciding what to build before committing resources', es: 'Frameworks para decidir qué construir antes de comprometer recursos' },
        'intermediate', ['product'], 6),
      _pn('hypothesis-definition',
        { en: 'Hypothesis Definition', es: 'Definición de Hipótesis' },
        { en: 'Formulating testable assumptions to guide research and design', es: 'Formulando suposiciones testeables para guiar investigación y diseño' },
        'intermediate', ['strategy'], 7),
    ]
  },
  {
    id: 'phase-3-research',
    title: { en: 'Research & User Understanding', es: 'Investigación y Comprensión del Usuario' },
    color: 'green',
    order: 3,
    nodes: [
      { ..._n('surveys'), order: 1 },
      { ..._n('ux-research'), order: 2 },
      { ..._n('user-personas'), order: 3 },
      { ..._n('customer-journey-map'), order: 4 },
      _pn('research-planning-synthesis',
        { en: 'Research Planning & Synthesis', es: 'Planificación y Síntesis de Investigación' },
        { en: 'End-to-end research planning, execution, and actionable synthesis', es: 'Planificación de investigación de principio a fin, ejecución y síntesis accionable' },
        'intermediate', ['research'], 5),
      { ..._n('ux-psychology'), order: 6 },
      { ..._n('laws-of-ux'), order: 7 },
    ]
  },
  {
    id: 'phase-4-architecture',
    title: { en: 'Information Architecture & Structure', es: 'Arquitectura de Información y Estructura' },
    color: 'cyan',
    order: 4,
    nodes: [
      { ..._n('ia-main'), order: 1 },
      { ..._n('ia-fundamentals'), order: 2 },
      { ..._n('card-sorting'), order: 3 },
      { ..._n('user-flows'), order: 4 },
    ]
  },
  {
    id: 'phase-5-design',
    title: { en: 'Interaction & Interface Design', es: 'Diseño de Interacción e Interfaz' },
    color: 'orange',
    order: 5,
    nodes: [
      { ..._n('wireframing-prototyping'), order: 1 },
      _pn('interaction-design-principles',
        { en: 'Interaction Design Principles', es: 'Principios de Diseño de Interacción' },
        { en: 'Core principles of feedback, affordance, and mapping for digital interfaces', es: 'Principios fundamentales de feedback, affordance y mapping para interfaces digitales' },
        'beginner', ['ui'], 2),
      { ..._n('visual-hierarchy'), order: 3 },
      { ..._n('typography'), order: 4 },
      { ..._n('color-theory'), order: 5 },
      { ..._n('accessibility-wcag'), order: 6 },
      _pn('responsive-design-patterns',
        { en: 'Responsive Design Patterns', es: 'Patrones de Diseño Responsivo' },
        { en: 'Designing adaptive layouts that work across devices and screen sizes', es: 'Diseñando layouts adaptativos que funcionan en distintos dispositivos y tamaños de pantalla' },
        'intermediate', ['ui'], 7),
      _pn('ux-writing-basics',
        { en: 'UX Writing Basics', es: 'Fundamentos de UX Writing' },
        { en: 'Crafting clear, concise microcopy that guides users through interfaces', es: 'Creando microcopy claro y conciso que guía a los usuarios a través de interfaces' },
        'intermediate', ['ui'], 8),
      { ..._n('microinteractions'), order: 9 },
      { ..._n('heuristic-analysis'), order: 10 },
    ]
  },
  {
    id: 'phase-6-validation',
    title: { en: 'Validation & Optimization', es: 'Validación y Optimización' },
    color: 'pink',
    order: 6,
    nodes: [
      { ..._n('usability-testing'), order: 1 },
      { ..._n('prototyping-methods'), order: 2 },
      _pn('analytics-ux-metrics',
        { en: 'Analytics & UX Metrics', es: 'Analítica y Métricas UX' },
        { en: 'Using quantitative data to measure design impact and inform iterations', es: 'Usando datos cuantitativos para medir el impacto del diseño e informar iteraciones' },
        'intermediate', ['research', 'strategy'], 3),
      _pn('ab-testing',
        { en: 'A/B Testing', es: 'Pruebas A/B' },
        { en: 'Running controlled experiments to validate design decisions with data', es: 'Ejecutando experimentos controlados para validar decisiones de diseño con datos' },
        'intermediate', ['research'], 4),
      _pn('accessibility-testing',
        { en: 'Accessibility Testing', es: 'Pruebas de Accesibilidad' },
        { en: 'Systematic methods for auditing and verifying WCAG compliance', es: 'Métodos sistemáticos para auditar y verificar cumplimiento WCAG' },
        'intermediate', ['ui'], 5),
      { ..._n('accessibility'), order: 6 },
    ]
  },
  {
    id: 'phase-7-systems',
    title: { en: 'Systems & Scale', es: 'Sistemas y Escala' },
    color: 'red',
    order: 7,
    nodes: [
      { ..._n('atomic-design'), order: 1 },
      { ..._n('figma-mastery'), order: 2 },
      { ..._n('design-systems-governance'), order: 3 },
      { ..._n('design-ethics'), order: 4 },
      { ..._n('service-blueprint'), order: 5 },
    ]
  },
  {
    id: 'phase-8-frontend',
    title: { en: 'Frontend for Designers', es: 'Frontend para Diseñadores' },
    color: 'teal',
    order: 8,
    nodes: [
      { ..._n('html-fundamentals'), order: 1 },
      { ..._n('css-fundamentals'), order: 2 },
      { ..._n('intro-javascript'), order: 3 },
      { ..._n('frontend-foundations'), order: 4 },
    ]
  },
];

// Helper function to find the next lesson to continue
export const getContinueLessonId = (clusters: RoadmapCluster[]): string | null => {
  const allNodes: Array<RoadmapNode & { clusterOrder: number }> = [];

  clusters.forEach(cluster => {
    cluster.nodes.forEach(node => {
      if (node.hasLesson) {
        allNodes.push({
          ...node,
          clusterOrder: cluster.order
        });
      }
    });
  });

  // Sort by cluster order, then node order
  allNodes.sort((a, b) => {
    if (a.clusterOrder !== b.clusterOrder) return a.clusterOrder - b.clusterOrder;
    return a.order - b.order;
  });

  // Find first in-progress lesson
  const inProgress = allNodes.find(n => n.status === 'in-progress');
  if (inProgress) return inProgress.lessonSlug;

  // Find first not-started lesson
  const notStarted = allNodes.find(n => n.status === 'not-started');
  if (notStarted) return notStarted.lessonSlug;

  return null;
};