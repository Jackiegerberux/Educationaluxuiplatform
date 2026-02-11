// Roadmap data with related lessons properly mapped

export type NodeStatus = 'not-started' | 'in-progress' | 'completed';
export type NodeLevel = 'beginner' | 'intermediate' | 'advanced';
export type NodeTag = 'ux' | 'ui' | 'product' | 'research' | 'strategy';

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

export const roadmapData: RoadmapCluster[] = [
  {
    id: 'foundations',
    title: { en: 'Foundations', es: 'Fundamentos' },
    color: 'blue',
    order: 1,
    nodes: [
      {
        id: 'ux-ui-product',
        title: { en: 'UX vs UI vs Product', es: 'UX vs UI vs Producto' },
        description: { 
          en: 'Understanding the differences and overlaps between UX, UI, and Product Design roles',
          es: 'Entendiendo diferencias y superposiciones entre roles de UX, UI y Diseño de Producto'
        },
        lessonSlug: 'ux-ui-product-design-intro',
        status: 'completed',
        level: 'beginner',
        tags: ['ux', 'ui', 'product'],
        skills: { 
          en: ['Role clarity', 'Career paths', 'Team collaboration'],
          es: ['Claridad de rol', 'Caminos de carrera', 'Colaboración en equipo']
        },
        prerequisites: { en: ['None - Start here!'], es: ['Ninguno - ¡Empieza aquí!'] },
        nextSteps: { en: ['Design Thinking', 'UX Process'], es: ['Design Thinking', 'Proceso UX'] },
        hasLesson: true,
        order: 1,
        relatedLessons: [
          { title: { en: 'Design Thinking', es: 'Design Thinking' }, slug: 'design-thinking-intro' },
          { title: { en: 'Human-Centered Design', es: 'Diseño Centrado en Humanos' }, slug: 'user-centered-design' }
        ]
      },
      {
        id: 'design-thinking',
        title: { en: 'Design Thinking', es: 'Design Thinking' },
        description: { 
          en: 'Empathize, define, ideate, prototype, test - the core design process',
          es: 'Empatizar, definir, idear, prototipar, testear - el proceso de diseño fundamental'
        },
        lessonSlug: 'design-thinking',
        status: 'in-progress',
        level: 'beginner',
        tags: ['ux', 'product'],
        skills: { 
          en: ['Problem framing', 'Iterative mindset', 'Creative thinking', 'Empathy interviews', 'Prototyping'],
          es: ['Encuadre de problema', 'Mentalidad iterativa', 'Pensamiento creativo', 'Entrevistas de empatía', 'Prototipado']
        },
        prerequisites: { en: ['UX vs UI vs Product'], es: ['UX vs UI vs Producto'] },
        nextSteps: { en: ['User Research', 'Empathy Interviews'], es: ['Investigación de Usuario', 'Entrevistas de Empatía'] },
        hasLesson: true,
        order: 2,
        relatedLessons: [
          { title: { en: 'User Interviews', es: 'Entrevistas de Usuario' }, slug: 'empathy-interviewing' },
          { title: { en: 'Jobs-to-be-Done', es: 'Trabajos por Hacer' }, slug: 'jobs-to-be-done' },
          { title: { en: 'Methodologies Overview', es: 'Visión General de Metodologías' }, slug: 'methodologies-overview' }
        ]
      },
      {
        id: 'user-centered-design',
        title: { en: 'Human-Centered Design', es: 'Diseño Centrado en Humanos' },
        description: { 
          en: 'Putting users at the heart of every design decision',
          es: 'Poniendo usuarios en el centro de cada decisión de diseño'
        },
        lessonSlug: 'user-centered-design',
        status: 'not-started',
        level: 'beginner',
        tags: ['ux'],
        skills: { 
          en: ['User empathy', 'Advocacy', 'Ethical design'],
          es: ['Empatía de usuario', 'Defensa', 'Diseño ético']
        },
        prerequisites: { en: ['Design Thinking'], es: ['Design Thinking'] },
        nextSteps: { en: ['User Research'], es: ['Investigación de Usuario'] },
        hasLesson: true,
        order: 3,
        relatedLessons: [
          { title: { en: 'Personas & Scenarios', es: 'Personas y Escenarios' }, slug: 'personas-scenarios' },
          { title: { en: 'Affinity Diagrams', es: 'Diagramas de Afinidad' }, slug: 'affinity-diagrams' }
        ]
      },
      {
        id: 'ux-deliverables',
        title: { en: 'UX Process & Deliverables', es: 'Proceso UX y Entregables' },
        description: { 
          en: 'Understanding the full UX workflow and key deliverables',
          es: 'Entendiendo el flujo de trabajo UX completo y entregables clave'
        },
        lessonSlug: 'ux-ui-product-design-intro',
        status: 'not-started',
        level: 'beginner',
        tags: ['ux'],
        skills: { 
          en: ['Documentation', 'Stakeholder communication'],
          es: ['Documentación', 'Comunicación con stakeholders']
        },
        prerequisites: { en: ['Design Thinking'], es: ['Design Thinking'] },
        nextSteps: { en: ['Research Methods'], es: ['Métodos de Investigación'] },
        hasLesson: true,
        order: 4,
        relatedLessons: [
          { title: { en: 'Wireframing Principles', es: 'Principios de Wireframing' }, slug: 'wireframing-principles' },
          { title: { en: 'Prototyping Methods', es: 'Métodos de Prototipado' }, slug: 'prototyping-methods' }
        ]
      }
    ]
  },
  {
    id: 'research',
    title: { en: 'Research', es: 'Investigación' },
    color: 'purple',
    order: 2,
    nodes: [
      {
        id: 'interviewing',
        title: { en: 'User Interviews', es: 'Entrevistas de Usuario' },
        description: { 
          en: 'Conducting effective qualitative research through user interviews',
          es: 'Conducir investigación cualitativa efectiva a través de entrevistas'
        },
        lessonSlug: 'empathy-interviewing',
        status: 'in-progress',
        level: 'beginner',
        tags: ['ux', 'research'],
        skills: { 
          en: ['Interview techniques', 'Active listening', 'Note-taking'],
          es: ['Técnicas de entrevista', 'Escucha activa', 'Toma de notas']
        },
        prerequisites: { en: ['Human-Centered Design'], es: ['Diseño Centrado en Humanos'] },
        nextSteps: { en: ['Affinity Diagrams', 'Personas'], es: ['Diagramas de Afinidad', 'Personas'] },
        hasLesson: true,
        order: 1,
        relatedLessons: [
          { title: { en: 'Affinity Diagrams', es: 'Diagramas de Afinidad' }, slug: 'affinity-diagrams' },
          { title: { en: 'Personas & Scenarios', es: 'Personas y Escenarios' }, slug: 'personas-scenarios' },
          { title: { en: 'Human-Centered Design', es: 'Diseño Centrado en Humanos' }, slug: 'user-centered-design' }
        ]
      },
      {
        id: 'personas',
        title: { en: 'Personas & Scenarios', es: 'Personas y Escenarios' },
        description: { 
          en: 'Creating actionable user personas and scenarios',
          es: 'Crear personas de usuario y escenarios accionables'
        },
        lessonSlug: 'personas-scenarios',
        status: 'not-started',
        level: 'beginner',
        tags: ['ux', 'research'],
        skills: { 
          en: ['User modeling', 'Scenario writing', 'Empathy mapping'],
          es: ['Modelado de usuario', 'Escritura de escenarios', 'Mapeo de empatía']
        },
        prerequisites: { en: ['User Interviews'], es: ['Entrevistas de Usuario'] },
        nextSteps: { en: ['Journey Mapping'], es: ['Mapeo de Viaje'] },
        hasLesson: true,
        order: 2,
        relatedLessons: [
          { title: { en: 'User Interviews', es: 'Entrevistas de Usuario' }, slug: 'empathy-interviewing' },
          { title: { en: 'Jobs-to-be-Done', es: 'Trabajos por Hacer' }, slug: 'jobs-to-be-done' }
        ]
      },
      {
        id: 'insights-synthesis',
        title: { en: 'Insights Synthesis', es: 'Síntesis de Insights' },
        description: { 
          en: 'Synthesizing research findings into actionable insights',
          es: 'Sintetizar hallazgos de investigación en insights accionables'
        },
        lessonSlug: 'affinity-diagrams',
        status: 'not-started',
        level: 'intermediate',
        tags: ['ux', 'research'],
        skills: { 
          en: ['Affinity diagrams', 'Pattern recognition', 'Insight framing'],
          es: ['Diagramas de afinidad', 'Reconocimiento de patrones', 'Encuadre de insights']
        },
        prerequisites: { en: ['User Interviews'], es: ['Entrevistas de Usuario'] },
        nextSteps: { en: ['Problem Statements'], es: ['Declaraciones de Problema'] },
        hasLesson: true,
        order: 3,
        relatedLessons: [
          { title: { en: 'User Interviews', es: 'Entrevistas de Usuario' }, slug: 'empathy-interviewing' },
          { title: { en: 'Personas & Scenarios', es: 'Personas y Escenarios' }, slug: 'personas-scenarios' }
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
        prerequisites: { en: ['User Interviews'], es: ['Entrevistas de Usuario'] },
        nextSteps: { en: ['Competitive Analysis'], es: ['Análisis Competitivo'] },
        hasLesson: false,
        order: 4,
        relatedLessons: []
      },
      {
        id: 'competitive-analysis',
        title: { en: 'Competitive Analysis', es: 'Análisis Competitivo' },
        description: { 
          en: 'Analyzing competitor products to identify opportunities',
          es: 'Analizar productos competidores para identificar oportunidades'
        },
        lessonSlug: 'competitive-analysis',
        status: 'not-started',
        level: 'intermediate',
        tags: ['ux', 'research', 'strategy'],
        skills: { 
          en: ['Market research', 'Feature analysis', 'Benchmarking'],
          es: ['Investigación de mercado', 'Análisis de features', 'Benchmarking']
        },
        prerequisites: { en: ['Surveys'], es: ['Encuestas'] },
        nextSteps: { en: ['Personas'], es: ['Personas'] },
        hasLesson: false,
        order: 5,
        relatedLessons: []
      },
      {
        id: 'journey-mapping',
        title: { en: 'Customer Journey Mapping', es: 'Mapeo de Viaje del Cliente' },
        description: { 
          en: 'Visualizing the complete user experience across touchpoints',
          es: 'Visualizar la experiencia de usuario completa a través de touchpoints'
        },
        lessonSlug: 'customer-journey-map',
        status: 'not-started',
        level: 'intermediate',
        tags: ['ux', 'research'],
        skills: { 
          en: ['Journey maps', 'Touchpoint analysis', 'Pain points'],
          es: ['Mapas de viaje', 'Análisis de touchpoints', 'Puntos de dolor']
        },
        prerequisites: { en: ['Personas'], es: ['Personas'] },
        nextSteps: { en: ['Problem Definition'], es: ['Definición de Problema'] },
        hasLesson: true,
        order: 6,
        relatedLessons: [
          { title: { en: 'Personas & Scenarios', es: 'Personas y Escenarios' }, slug: 'personas-scenarios' },
          { title: { en: 'User Interviews', es: 'Entrevistas de Usuario' }, slug: 'empathy-interviewing' }
        ]
      }
    ]
  },
  {
    id: 'information-architecture',
    title: { en: 'Information Architecture', es: 'Arquitectura de Información' },
    color: 'cyan',
    order: 3,
    nodes: [
      {
        id: 'ia-basics',
        title: { en: 'IA Fundamentals', es: 'Fundamentos de IA' },
        description: { 
          en: 'Creating clear information hierarchy and navigation structure',
          es: 'Crear jerarquía de información clara y estructura de navegación'
        },
        lessonSlug: 'information-architecture-basics',
        status: 'not-started',
        level: 'beginner',
        tags: ['ux'],
        skills: { 
          en: ['Sitemap creation', 'Hierarchy', 'Information structure'],
          es: ['Creación de sitemap', 'Jerarquía', 'Estructura de información']
        },
        prerequisites: { en: ['Personas'], es: ['Personas'] },
        nextSteps: { en: ['Navigation Patterns'], es: ['Patrones de Navegación'] },
        hasLesson: true,
        order: 1,
        relatedLessons: [
          { title: { en: 'Card Sorting', es: 'Card Sorting' }, slug: 'card-sorting' },
          { title: { en: 'Wireframing Principles', es: 'Principios de Wireframing' }, slug: 'wireframing-principles' }
        ]
      },
      {
        id: 'card-sorting',
        title: { en: 'Card Sorting', es: 'Card Sorting' },
        description: { 
          en: 'User research method to inform information architecture',
          es: 'Método de investigación de usuario para informar arquitectura de información'
        },
        lessonSlug: 'card-sorting',
        status: 'not-started',
        level: 'beginner',
        tags: ['ux', 'research'],
        skills: { 
          en: ['Open card sorting', 'Closed card sorting', 'Tree testing'],
          es: ['Card sorting abierto', 'Card sorting cerrado', 'Tree testing']
        },
        prerequisites: { en: ['IA Fundamentals'], es: ['Fundamentos de IA'] },
        nextSteps: { en: ['User Flows'], es: ['Flujos de Usuario'] },
        hasLesson: true,
        order: 2,
        relatedLessons: [
          { title: { en: 'IA Fundamentals', es: 'Fundamentos de IA' }, slug: 'information-architecture-basics' },
          { title: { en: 'User Interviews', es: 'Entrevistas de Usuario' }, slug: 'empathy-interviewing' }
        ]
      }
    ]
  },
  {
    id: 'interaction-ui',
    title: { en: 'Interaction & UI', es: 'Interacción y UI' },
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
        lessonSlug: 'wireframing-principles',
        status: 'not-started',
        level: 'beginner',
        tags: ['ux'],
        skills: { 
          en: ['Lo-fi wireframes', 'Layout structure', 'Content hierarchy'],
          es: ['Wireframes baja fidelidad', 'Estructura de layout', 'Jerarquía de contenido']
        },
        prerequisites: { en: ['IA Fundamentals', 'Card Sorting'], es: ['Fundamentos de IA', 'Card Sorting'] },
        nextSteps: { en: ['Visual Hierarchy'], es: ['Jerarquía Visual'] },
        hasLesson: true,
        order: 1,
        relatedLessons: [
          { title: { en: 'Visual Hierarchy', es: 'Jerarquía Visual' }, slug: 'visual-hierarchy-fundamentals' },
          { title: { en: 'IA Fundamentals', es: 'Fundamentos de IA' }, slug: 'information-architecture-basics' }
        ]
      },
      {
        id: 'visual-hierarchy',
        title: { en: 'Visual Hierarchy', es: 'Jerarquía Visual' },
        description: { 
          en: 'Guiding user attention through visual design principles',
          es: 'Guiar atención del usuario a través de principios de diseño visual'
        },
        lessonSlug: 'visual-hierarchy-fundamentals',
        status: 'not-started',
        level: 'beginner',
        tags: ['ui'],
        skills: { 
          en: ['Focal points', 'Contrast', 'Scale & proportion'],
          es: ['Puntos focales', 'Contraste', 'Escala y proporción']
        },
        prerequisites: { en: ['Wireframes'], es: ['Wireframes'] },
        nextSteps: { en: ['Typography', 'Color Theory'], es: ['Tipografía', 'Teoría del Color'] },
        hasLesson: true,
        order: 2,
        relatedLessons: [
          { title: { en: 'Typography Fundamentals', es: 'Fundamentos de Tipografía' }, slug: 'typography-fundamentals' },
          { title: { en: 'Color Theory', es: 'Teoría del Color' }, slug: 'color-theory-ui' }
        ]
      },
      {
        id: 'typography',
        title: { en: 'Typography Fundamentals', es: 'Fundamentos de Tipografía' },
        description: { 
          en: 'Font selection, scales, readability',
          es: 'Selección de fuente, escalas, legibilidad'
        },
        lessonSlug: 'typography-fundamentals',
        status: 'not-started',
        level: 'beginner',
        tags: ['ui'],
        skills: { 
          en: ['Type scales', 'Readability', 'Font pairing'],
          es: ['Escalas tipográficas', 'Legibilidad', 'Combinación de fuentes']
        },
        prerequisites: { en: ['Visual Hierarchy'], es: ['Jerarquía Visual'] },
        nextSteps: { en: ['Color Theory'], es: ['Teoría del Color'] },
        hasLesson: true,
        order: 3,
        relatedLessons: [
          { title: { en: 'Visual Hierarchy', es: 'Jerarquía Visual' }, slug: 'visual-hierarchy-fundamentals' },
          { title: { en: 'Color Theory', es: 'Teoría del Color' }, slug: 'color-theory-ui' }
        ]
      },
      {
        id: 'color-theory',
        title: { en: 'Color Theory', es: 'Teoría del Color' },
        description: { 
          en: 'Color systems, psychology, accessibility',
          es: 'Sistemas de color, psicología, accesibilidad'
        },
        lessonSlug: 'color-theory-ui',
        status: 'not-started',
        level: 'beginner',
        tags: ['ui'],
        skills: { 
          en: ['Color harmony', 'Accessibility', 'Color psychology'],
          es: ['Armonía de color', 'Accesibilidad', 'Psicología del color']
        },
        prerequisites: { en: ['Typography'], es: ['Tipografía'] },
        nextSteps: { en: ['Accessibility'], es: ['Accesibilidad'] },
        hasLesson: true,
        order: 4,
        relatedLessons: [
          { title: { en: 'Accessibility WCAG', es: 'Accesibilidad WCAG' }, slug: 'accessibility-wcag-fundamentals' },
          { title: { en: 'Visual Hierarchy', es: 'Jerarquía Visual' }, slug: 'visual-hierarchy-fundamentals' }
        ]
      },
      {
        id: 'accessibility-basics',
        title: { en: 'Accessibility WCAG', es: 'Accesibilidad WCAG' },
        description: { 
          en: 'WCAG guidelines and inclusive design principles',
          es: 'Guías WCAG y principios de diseño inclusivo'
        },
        lessonSlug: 'accessibility-wcag-fundamentals',
        status: 'not-started',
        level: 'intermediate',
        tags: ['ui', 'ux'],
        skills: { 
          en: ['WCAG AA', 'Keyboard navigation', 'Screen readers'],
          es: ['WCAG AA', 'Navegación por teclado', 'Lectores de pantalla']
        },
        prerequisites: { en: ['Color Theory'], es: ['Teoría del Color'] },
        nextSteps: { en: ['Prototyping'], es: ['Prototipado'] },
        hasLesson: true,
        order: 5,
        relatedLessons: [
          { title: { en: 'Color Theory', es: 'Teoría del Color' }, slug: 'color-theory-ui' },
          { title: { en: 'Typography Fundamentals', es: 'Fundamentos de Tipografía' }, slug: 'typography-fundamentals' }
        ]
      }
    ]
  },
  {
    id: 'prototyping-testing',
    title: { en: 'Prototyping & Testing', es: 'Prototipado y Testing' },
    color: 'orange',
    order: 5,
    nodes: [
      {
        id: 'prototyping',
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
        prerequisites: { en: ['Accessibility'], es: ['Accesibilidad'] },
        nextSteps: { en: ['Usability Testing'], es: ['Testing de Usabilidad'] },
        hasLesson: true,
        order: 1,
        relatedLessons: [
          { title: { en: 'Usability Testing', es: 'Testing de Usabilidad' }, slug: 'usability-testing-basics' },
          { title: { en: 'Wireframing Principles', es: 'Principios de Wireframing' }, slug: 'wireframing-principles' }
        ]
      },
      {
        id: 'usability-testing',
        title: { en: 'Usability Testing', es: 'Testing de Usabilidad' },
        description: { 
          en: 'Planning, conducting, and analyzing usability tests',
          es: 'Planear, conducir y analizar tests de usabilidad'
        },
        lessonSlug: 'usability-testing-basics',
        status: 'not-started',
        level: 'intermediate',
        tags: ['ux', 'research'],
        skills: { 
          en: ['Test planning', 'Moderation', 'Insight synthesis'],
          es: ['Planeación de tests', 'Moderación', 'Síntesis de insights']
        },
        prerequisites: { en: ['Prototyping'], es: ['Prototipado'] },
        nextSteps: { en: ['Design Systems'], es: ['Sistemas de Diseño'] },
        hasLesson: true,
        order: 2,
        relatedLessons: [
          { title: { en: 'Prototyping Methods', es: 'Métodos de Prototipado' }, slug: 'prototyping-methods' },
          { title: { en: 'User Interviews', es: 'Entrevistas de Usuario' }, slug: 'empathy-interviewing' }
        ]
      }
    ]
  },
  {
    id: 'product-strategy',
    title: { en: 'Product & Strategy', es: 'Producto y Estrategia' },
    color: 'pink',
    order: 6,
    nodes: [
      {
        id: 'problem-framing',
        title: { en: 'Jobs-to-be-Done', es: 'Trabajos por Hacer' },
        description: { 
          en: 'Defining the right problem to solve through user motivation',
          es: 'Definir el problema correcto a resolver a través de motivación del usuario'
        },
        lessonSlug: 'jobs-to-be-done',
        status: 'not-started',
        level: 'advanced',
        tags: ['product', 'strategy'],
        skills: { 
          en: ['Jobs framework', 'User motivations', 'Opportunity mapping'],
          es: ['Framework de trabajos', 'Motivaciones de usuario', 'Mapeo de oportunidades']
        },
        prerequisites: { en: ['Personas & Scenarios'], es: ['Personas y Escenarios'] },
        nextSteps: { en: ['Problem Statements'], es: ['Declaraciones de Problema'] },
        hasLesson: true,
        order: 1,
        relatedLessons: [
          { title: { en: 'Problem Statements', es: 'Declaraciones de Problema' }, slug: 'problem-statements' },
          { title: { en: 'Personas & Scenarios', es: 'Personas y Escenarios' }, slug: 'personas-scenarios' }
        ]
      },
      {
        id: 'methodologies',
        title: { en: 'Methodologies', es: 'Metodologías' },
        description: { 
          en: 'Choosing and combining UX/product methodologies: Design Thinking, Design Sprint, Lean UX, Scrum',
          es: 'Elegir y combinar metodologías UX/producto: Design Thinking, Design Sprint, Lean UX, Scrum'
        },
        lessonSlug: 'methodologies-overview',
        status: 'not-started',
        level: 'intermediate',
        tags: ['product', 'strategy', 'ux'],
        skills: { 
          en: ['Methodology selection', 'Process design', 'Team alignment', 'Agile + UX integration'],
          es: ['Selección de metodología', 'Diseño de procesos', 'Alineación de equipo', 'Integración Agile + UX']
        },
        prerequisites: { en: ['Design Thinking', 'UX Process'], es: ['Design Thinking', 'Proceso UX'] },
        nextSteps: { en: ['Lean UX', 'Problem Statements'], es: ['Lean UX', 'Declaraciones de Problema'] },
        hasLesson: true,
        order: 2,
        relatedLessons: [
          { title: { en: 'Lean UX', es: 'Lean UX' }, slug: 'lean-ux' },
          { title: { en: 'Design Thinking', es: 'Design Thinking' }, slug: 'design-thinking-intro' },
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
        status: 'in-progress',
        level: 'intermediate',
        tags: ['ux', 'product'],
        skills: { 
          en: ['Rapid prototyping', 'Facilitation', 'User testing', 'Decision making'],
          es: ['Prototipado rápido', 'Facilitación', 'Pruebas de usuario', 'Toma de decisiones']
        },
        prerequisites: { en: ['Design Thinking', 'Prototyping'], es: ['Design Thinking', 'Prototipado'] },
        nextSteps: { en: ['Lean UX', 'Usability Testing'], es: ['Lean UX', 'Pruebas de Usabilidad'] },
        hasLesson: true,
        order: 3,
        relatedLessons: [
          { title: { en: 'Design Thinking', es: 'Design Thinking' }, slug: 'design-thinking' },
          { title: { en: 'Prototyping', es: 'Prototipado' }, slug: 'wireframing-prototyping' },
          { title: { en: 'User Testing', es: 'Pruebas de Usuario' }, slug: 'usability-testing' }
        ]
      },
      {
        id: 'scrum-for-designers',
        title: { en: 'Scrum for Designers', es: 'Scrum para Diseñadores' },
        description: { 
          en: 'How designers thrive in Scrum teams: dual-track agile, tickets, and dev collaboration',
          es: 'Cómo diseñadores prosperan en equipos Scrum: agile de doble vía, tickets y colaboración con devs'
        },
        lessonSlug: 'scrum-for-designers',
        status: 'in-progress',
        level: 'intermediate',
        tags: ['product', 'collaboration', 'ux'],
        skills: { 
          en: ['Scrum ceremonies', 'Ticket writing', 'Dual-track agile', 'Dev collaboration'],
          es: ['Ceremonias Scrum', 'Escritura de tickets', 'Agile de doble vía', 'Colaboración con dev']
        },
        prerequisites: { en: ['Design Sprint', 'UX Process'], es: ['Design Sprint', 'Proceso UX'] },
        nextSteps: { en: ['Lean UX', 'Handoff & Documentation'], es: ['Lean UX', 'Entrega y Documentación'] },
        hasLesson: true,
        order: 4,
        relatedLessons: [
          { title: { en: 'Design Sprint', es: 'Design Sprint' }, slug: 'design-sprint' },
          { title: { en: 'Lean UX', es: 'Lean UX' }, slug: 'lean-ux' },
          { title: { en: 'Handoff & Documentation', es: 'Entrega y Documentación' }, slug: 'handoff-documentation' }
        ]
      },
      {
        id: 'problem-statements',
        title: { en: 'Problem Statements', es: 'Declaraciones de Problema' },
        description: { 
          en: 'Crafting clear problem statements and POV',
          es: 'Crear declaraciones de problema claras y POV'
        },
        lessonSlug: 'problem-statements',
        status: 'not-started',
        level: 'intermediate',
        tags: ['product', 'strategy'],
        skills: { 
          en: ['Problem articulation', 'POV creation', 'Framing'],
          es: ['Articulación de problema', 'Creación de POV', 'Encuadre']
        },
        prerequisites: { en: ['Jobs-to-be-Done'], es: ['Trabajos por Hacer'] },
        nextSteps: { en: ['Design Systems'], es: ['Sistemas de Diseño'] },
        hasLesson: true,
        order: 5,
        relatedLessons: [
          { title: { en: 'Jobs-to-be-Done', es: 'Trabajos por Hacer' }, slug: 'jobs-to-be-done' },
          { title: { en: 'Usability Testing', es: 'Testing de Usabilidad' }, slug: 'usability-testing-basics' }
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
        prerequisites: { en: ['Customer Journey Mapping'], es: ['Mapeo de Viaje del Cliente'] },
        nextSteps: { en: ['Design Systems'], es: ['Sistemas de Diseño'] },
        hasLesson: true,
        order: 6,
        relatedLessons: [
          { title: { en: 'Customer Journey Map', es: 'Mapa de Viaje del Cliente' }, slug: 'customer-journey-map' },
          { title: { en: 'Problem Statements', es: 'Declaraciones de Problema' }, slug: 'problem-statements' }
        ]
      }
    ]
  },
  {
    id: 'delivery-ops',
    title: { en: 'Delivery & Product Ops', es: 'Entrega y Operaciones de Producto' },
    color: 'teal',
    order: 7,
    nodes: [
      {
        id: 'user-stories-requirements',
        title: { en: 'User Stories & Requirements', es: 'User Stories y Requisitos' },
        description: { 
          en: 'Transform vague requests into clear, actionable stories with acceptance criteria and task breakdowns',
          es: 'Transforma solicitudes vagas en historias claras y accionables con criterios de aceptación y desglose de tareas'
        },
        lessonSlug: 'user-stories-and-requirements',
        status: 'in-progress',
        level: 'intermediate',
        tags: ['product', 'collaboration'],
        skills: { 
          en: ['User stories', 'Acceptance criteria', 'Requirements analysis', 'Task breakdown'],
          es: ['User stories', 'Criterios de aceptación', 'Análisis de requisitos', 'Desglose de tareas']
        },
        prerequisites: { en: ['Scrum for Designers', 'Design Sprint'], es: ['Scrum para Diseñadores', 'Design Sprint'] },
        nextSteps: { en: ['Handoff & Documentation', 'Design Systems'], es: ['Entrega y Documentación', 'Sistemas de Diseño'] },
        hasLesson: true,
        order: 1,
        relatedLessons: [
          { title: { en: 'Scrum for Designers', es: 'Scrum para Diseñadores' }, slug: 'scrum-for-designers' },
          { title: { en: 'Lean UX', es: 'Lean UX' }, slug: 'lean-ux' },
          { title: { en: 'Problem Statements', es: 'Declaraciones de Problema' }, slug: 'problem-statements' }
        ]
      }
    ]
  }
];

// Helper function to find the next lesson to continue
export const getContinueLessonId = (clusters: RoadmapCluster[]): string | null => {
  const allNodes: Array<RoadmapNode & { clusterOrder: number }> = [];
  
  clusters.forEach(cluster => {
    cluster.nodes.forEach(node => {
      // CRITICAL: Only include nodes that have actual lesson content
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
    if (a.clusterOrder !== b.clusterOrder) {
      return a.clusterOrder - b.clusterOrder;
    }
    return a.order - b.order;
  });

  // Find first in-progress lesson WITH actual content
  const inProgress = allNodes.find(node => node.status === 'in-progress');
  if (inProgress) return inProgress.lessonSlug;

  // Find first not-started lesson WITH actual content
  const notStarted = allNodes.find(node => node.status === 'not-started');
  if (notStarted) return notStarted.lessonSlug;

  // All completed
  return null;
};