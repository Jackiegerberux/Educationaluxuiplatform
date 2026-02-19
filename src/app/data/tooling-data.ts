export type ToolCategory = 'design' | 'coding' | 'ai' | 'research' | 'management' | 'documentation' | 'analytics' | 'collaboration';
export type ToolPricing = 'free' | 'freemium' | 'paid';
export type ToolLevel = 'beginner' | 'intermediate' | 'advanced';

export interface ToolItem {
  id: string;
  name: string;
  category: ToolCategory;
  pricing: ToolPricing;
  level: ToolLevel;
  url: string;
  description: { en: string; es: string };
  bestFor: { en: string; es: string };
  proTip: { en: string; es: string };
  tags: string[];
  essential?: boolean;
}

export interface ToolCategoryInfo {
  id: ToolCategory;
  label: { en: string; es: string };
  description: { en: string; es: string };
  icon: string;
  color: string;
  gradient: string;
}

export const categoryInfo: ToolCategoryInfo[] = [
  {
    id: 'design',
    label: { en: 'Design', es: 'Diseno' },
    description: { en: 'Visual design, prototyping & UI tools', es: 'Diseno visual, prototipado y herramientas UI' },
    icon: 'Palette',
    color: 'text-pink-400',
    gradient: 'from-pink-500/20 to-rose-500/20'
  },
  {
    id: 'coding',
    label: { en: 'Coding', es: 'Codigo' },
    description: { en: 'Code editors, version control & dev tools', es: 'Editores de codigo, control de versiones y herramientas dev' },
    icon: 'Code',
    color: 'text-emerald-400',
    gradient: 'from-emerald-500/20 to-green-500/20'
  },
  {
    id: 'ai',
    label: { en: 'AI', es: 'IA' },
    description: { en: 'AI assistants, generators & copilots', es: 'Asistentes IA, generadores y copilotos' },
    icon: 'Sparkles',
    color: 'text-purple-400',
    gradient: 'from-purple-500/20 to-violet-500/20'
  },
  {
    id: 'research',
    label: { en: 'Research & Testing', es: 'Investigacion y Testing' },
    description: { en: 'User research, usability testing & analytics', es: 'Investigacion de usuario, pruebas de usabilidad y analiticas' },
    icon: 'Microscope',
    color: 'text-blue-400',
    gradient: 'from-blue-500/20 to-cyan-500/20'
  },
  {
    id: 'management',
    label: { en: 'Management & Planning', es: 'Gestion y Planificacion' },
    description: { en: 'Project management, planning & tracking', es: 'Gestion de proyectos, planificacion y seguimiento' },
    icon: 'KanbanSquare',
    color: 'text-orange-400',
    gradient: 'from-orange-500/20 to-amber-500/20'
  },
  {
    id: 'documentation',
    label: { en: 'Documentation', es: 'Documentacion' },
    description: { en: 'Docs, wikis, presentations & knowledge bases', es: 'Docs, wikis, presentaciones y bases de conocimiento' },
    icon: 'FileText',
    color: 'text-cyan-400',
    gradient: 'from-cyan-500/20 to-teal-500/20'
  },
  {
    id: 'analytics',
    label: { en: 'Analytics', es: 'Analiticas' },
    description: { en: 'Data analytics, monitoring & insights', es: 'Analiticas de datos, monitoreo e insights' },
    icon: 'BarChart3',
    color: 'text-indigo-400',
    gradient: 'from-indigo-500/20 to-blue-500/20'
  },
  {
    id: 'collaboration',
    label: { en: 'Collaboration', es: 'Colaboracion' },
    description: { en: 'Communication, handoff & team workflows', es: 'Comunicacion, entrega y flujos de equipo' },
    icon: 'Users',
    color: 'text-amber-400',
    gradient: 'from-amber-500/20 to-yellow-500/20'
  }
];

export const toolingData: ToolItem[] = [
  // ─── DESIGN ────────────────────────────────────────
  {
    id: 'figma',
    name: 'Figma',
    category: 'design',
    pricing: 'freemium',
    level: 'beginner',
    url: 'https://figma.com',
    description: {
      en: 'The industry standard for interface design, prototyping, and collaboration. Browser-based with real-time multiplayer editing.',
      es: 'El estandar de la industria para diseno de interfaces, prototipado y colaboracion. Basado en navegador con edicion multiplayer en tiempo real.'
    },
    bestFor: { en: 'UI Design, Prototyping, Design Systems, Collaboration', es: 'Diseno UI, Prototipado, Sistemas de Diseno, Colaboracion' },
    proTip: { en: 'Master Auto Layout early - it mirrors CSS Flexbox and will accelerate your workflow by 10x.', es: 'Domina Auto Layout pronto - refleja CSS Flexbox y acelerara tu flujo de trabajo 10x.' },
    tags: ['UI', 'Prototyping', 'Design Systems', 'Collaboration'],
    essential: true
  },
  {
    id: 'figjam',
    name: 'FigJam',
    category: 'design',
    pricing: 'freemium',
    level: 'beginner',
    url: 'https://figma.com/figjam',
    description: {
      en: 'Collaborative whiteboard by Figma for brainstorming, user flows, workshops, and stakeholder alignment.',
      es: 'Pizarra colaborativa de Figma para brainstorming, flujos de usuario, workshops y alineacion de stakeholders.'
    },
    bestFor: { en: 'Workshops, User Flows, Brainstorming, Affinity Mapping', es: 'Workshops, Flujos de Usuario, Brainstorming, Mapeo de Afinidad' },
    proTip: { en: 'Use sections to organize your board and voting stamps for team decisions.', es: 'Usa secciones para organizar tu tablero y sellos de votacion para decisiones de equipo.' },
    tags: ['Whiteboard', 'Workshops', 'Brainstorming'],
    essential: true
  },
  {
    id: 'sketch',
    name: 'Sketch',
    category: 'design',
    pricing: 'paid',
    level: 'beginner',
    url: 'https://sketch.com',
    description: {
      en: 'Mac-native vector design tool with a strong plugin ecosystem. Pioneer of modern UI design workflows.',
      es: 'Herramienta de diseno vectorial nativa de Mac con un fuerte ecosistema de plugins. Pionero de los flujos de diseno UI modernos.'
    },
    bestFor: { en: 'UI Design (Mac), Symbol Libraries, Plugin Ecosystem', es: 'Diseno UI (Mac), Bibliotecas de Simbolos, Ecosistema de Plugins' },
    proTip: { en: 'Use Sketch Cloud for free client review links without sharing source files.', es: 'Usa Sketch Cloud para enlaces de revision gratuitos sin compartir archivos fuente.' },
    tags: ['UI', 'Mac', 'Symbols'],
  },
  {
    id: 'adobe-xd',
    name: 'Adobe XD',
    category: 'design',
    pricing: 'paid',
    level: 'beginner',
    url: 'https://adobe.com/products/xd',
    description: {
      en: 'Adobe\'s UI/UX design tool with deep Creative Cloud integration. Auto-animate for micro-interaction prototypes.',
      es: 'Herramienta UI/UX de Adobe con integracion profunda con Creative Cloud. Auto-animate para prototipos de micro-interacciones.'
    },
    bestFor: { en: 'Adobe Ecosystem Users, Auto-Animate Prototypes', es: 'Usuarios del Ecosistema Adobe, Prototipos Auto-Animate' },
    proTip: { en: 'Use Repeat Grid for quickly prototyping lists and card-based layouts.', es: 'Usa Repeat Grid para prototipar rapidamente listas y layouts basados en cards.' },
    tags: ['UI', 'Adobe', 'Prototyping'],
  },
  {
    id: 'framer',
    name: 'Framer',
    category: 'design',
    pricing: 'freemium',
    level: 'intermediate',
    url: 'https://framer.com',
    description: {
      en: 'Design tool that publishes real websites. Combines visual design with production-grade code output and CMS.',
      es: 'Herramienta de diseno que publica sitios web reales. Combina diseno visual con salida de codigo de produccion y CMS.'
    },
    bestFor: { en: 'Portfolio Sites, Landing Pages, Interactive Prototypes', es: 'Sitios de Portafolio, Landing Pages, Prototipos Interactivos' },
    proTip: { en: 'Use Framer to publish your UX portfolio - it generates real responsive code.', es: 'Usa Framer para publicar tu portafolio UX - genera codigo responsive real.' },
    tags: ['Web Design', 'No-Code', 'Prototyping'],
  },
  {
    id: 'penpot',
    name: 'Penpot',
    category: 'design',
    pricing: 'free',
    level: 'beginner',
    url: 'https://penpot.app',
    description: {
      en: 'Open-source design platform. Free alternative to Figma with SVG-native rendering and self-hosting options.',
      es: 'Plataforma de diseno open-source. Alternativa gratuita a Figma con renderizado SVG nativo y opciones de self-hosting.'
    },
    bestFor: { en: 'Open-Source Teams, Budget Projects, Self-Hosting', es: 'Equipos Open-Source, Proyectos con Presupuesto Limitado, Self-Hosting' },
    proTip: { en: 'Export assets as clean SVG - Penpot renders natively in SVG unlike Figma.', es: 'Exporta assets como SVG limpio - Penpot renderiza nativamente en SVG a diferencia de Figma.' },
    tags: ['Open Source', 'UI', 'Free'],
  },
  {
    id: 'whimsical',
    name: 'Whimsical',
    category: 'design',
    pricing: 'freemium',
    level: 'beginner',
    url: 'https://whimsical.com',
    description: {
      en: 'Clean, fast tool for wireframes, flowcharts, mind maps, and docs. Great for early-stage ideation.',
      es: 'Herramienta limpia y rapida para wireframes, diagramas de flujo, mapas mentales y docs. Ideal para ideacion temprana.'
    },
    bestFor: { en: 'Wireframes, Flowcharts, Mind Maps, Quick Ideation', es: 'Wireframes, Diagramas de Flujo, Mapas Mentales, Ideacion Rapida' },
    proTip: { en: 'Use the AI wireframe generator to go from text prompt to wireframe in seconds.', es: 'Usa el generador de wireframes AI para ir de texto a wireframe en segundos.' },
    tags: ['Wireframes', 'Flowcharts', 'Mind Maps'],
  },
  {
    id: 'balsamiq',
    name: 'Balsamiq',
    category: 'design',
    pricing: 'paid',
    level: 'beginner',
    url: 'https://balsamiq.com',
    description: {
      en: 'Low-fidelity wireframing tool with a hand-drawn aesthetic that keeps focus on structure over visuals.',
      es: 'Herramienta de wireframing de baja fidelidad con estetica dibujada a mano que mantiene el foco en estructura sobre visuales.'
    },
    bestFor: { en: 'Low-Fi Wireframes, Stakeholder Workshops, Quick Mockups', es: 'Wireframes Low-Fi, Workshops con Stakeholders, Mockups Rapidos' },
    proTip: { en: 'The sketch style prevents clients from fixating on colors and fonts too early.', es: 'El estilo sketch evita que los clientes se fijen en colores y fuentes muy pronto.' },
    tags: ['Wireframes', 'Low-Fidelity'],
  },
  {
    id: 'excalidraw',
    name: 'Excalidraw',
    category: 'design',
    pricing: 'free',
    level: 'beginner',
    url: 'https://excalidraw.com',
    description: {
      en: 'Open-source virtual whiteboard for hand-drawn style diagrams. Instant collaboration, no sign-up needed.',
      es: 'Pizarra virtual open-source para diagramas estilo dibujado a mano. Colaboracion instantanea, sin registro.'
    },
    bestFor: { en: 'Quick Diagrams, Architecture Sketches, Team Discussions', es: 'Diagramas Rapidos, Bocetos de Arquitectura, Discusiones de Equipo' },
    proTip: { en: 'Install the VS Code extension to diagram directly inside your editor.', es: 'Instala la extension de VS Code para diagramar directamente en tu editor.' },
    tags: ['Whiteboard', 'Open Source', 'Diagrams', 'Free'],
  },
  {
    id: 'canva',
    name: 'Canva',
    category: 'design',
    pricing: 'freemium',
    level: 'beginner',
    url: 'https://canva.com',
    description: {
      en: 'Versatile graphic design platform with templates for presentations, social media, and marketing materials.',
      es: 'Plataforma versatil de diseno grafico con plantillas para presentaciones, redes sociales y materiales de marketing.'
    },
    bestFor: { en: 'Presentations, Social Media Graphics, Quick Visual Assets', es: 'Presentaciones, Graficos para Redes Sociales, Assets Visuales Rapidos' },
    proTip: { en: 'Use Canva for case study presentations when Figma feels like overkill.', es: 'Usa Canva para presentaciones de caso de estudio cuando Figma parece excesivo.' },
    tags: ['Graphics', 'Presentations', 'Templates'],
  },
  {
    id: 'spline',
    name: 'Spline',
    category: 'design',
    pricing: 'freemium',
    level: 'advanced',
    url: 'https://spline.design',
    description: {
      en: '3D design tool for the web. Create interactive 3D scenes, animations, and embed them in websites.',
      es: 'Herramienta de diseno 3D para la web. Crea escenas 3D interactivas, animaciones e integralas en sitios web.'
    },
    bestFor: { en: '3D Web Design, Interactive Illustrations, Hero Sections', es: 'Diseno Web 3D, Ilustraciones Interactivas, Secciones Hero' },
    proTip: { en: 'Export as React component for seamless integration in your portfolio site.', es: 'Exporta como componente React para integracion seamless en tu sitio de portafolio.' },
    tags: ['3D', 'Web', 'Interactive'],
  },
  {
    id: 'rive',
    name: 'Rive',
    category: 'design',
    pricing: 'freemium',
    level: 'advanced',
    url: 'https://rive.app',
    description: {
      en: 'Interactive animation tool that creates lightweight, real-time animations for apps and games with state machines.',
      es: 'Herramienta de animacion interactiva que crea animaciones ligeras y en tiempo real para apps y juegos con maquinas de estado.'
    },
    bestFor: { en: 'UI Animations, Interactive Graphics, Micro-interactions', es: 'Animaciones UI, Graficos Interactivos, Micro-interacciones' },
    proTip: { en: 'Use State Machines for complex interactive animations that respond to user input.', es: 'Usa State Machines para animaciones interactivas complejas que respondan al input del usuario.' },
    tags: ['Animation', 'Interactive', 'State Machines'],
  },

  // ─── CODING ────────────────────────────────────────
  {
    id: 'vscode',
    name: 'VS Code',
    category: 'coding',
    pricing: 'free',
    level: 'beginner',
    url: 'https://code.visualstudio.com',
    description: {
      en: 'The most popular code editor. Extensible with thousands of extensions, built-in terminal, Git, and debugging.',
      es: 'El editor de codigo mas popular. Extensible con miles de extensiones, terminal integrado, Git y depuracion.'
    },
    bestFor: { en: 'All Development, Extensions Ecosystem, Integrated Terminal', es: 'Todo el Desarrollo, Ecosistema de Extensiones, Terminal Integrado' },
    proTip: { en: 'Install Tailwind CSS IntelliSense + ESLint + Prettier as your first three extensions.', es: 'Instala Tailwind CSS IntelliSense + ESLint + Prettier como tus tres primeras extensiones.' },
    tags: ['Editor', 'Extensions', 'Free'],
    essential: true
  },
  {
    id: 'cursor',
    name: 'Cursor',
    category: 'coding',
    pricing: 'freemium',
    level: 'intermediate',
    url: 'https://cursor.com',
    description: {
      en: 'AI-first code editor built on VS Code. Understands your entire codebase for contextual suggestions and edits.',
      es: 'Editor de codigo AI-first basado en VS Code. Entiende todo tu codebase para sugerencias y ediciones contextuales.'
    },
    bestFor: { en: 'AI-Assisted Coding, Codebase Q&A, Rapid Prototyping', es: 'Codigo Asistido por IA, Q&A de Codebase, Prototipado Rapido' },
    proTip: { en: 'Use @codebase to ask questions about your entire project context.', es: 'Usa @codebase para hacer preguntas sobre todo el contexto de tu proyecto.' },
    tags: ['Editor', 'AI', 'VS Code Fork'],
    essential: true
  },
  {
    id: 'github',
    name: 'GitHub',
    category: 'coding',
    pricing: 'freemium',
    level: 'beginner',
    url: 'https://github.com',
    description: {
      en: 'The world\'s largest code hosting platform. Version control, collaboration, CI/CD, and open source community.',
      es: 'La plataforma de hospedaje de codigo mas grande del mundo. Control de versiones, colaboracion, CI/CD y comunidad open source.'
    },
    bestFor: { en: 'Version Control, Open Source, Portfolio Hosting, CI/CD', es: 'Control de Versiones, Open Source, Hosting de Portafolio, CI/CD' },
    proTip: { en: 'Use GitHub Pages to host your portfolio for free with a custom domain.', es: 'Usa GitHub Pages para hospedar tu portafolio gratis con dominio personalizado.' },
    tags: ['Git', 'Version Control', 'CI/CD'],
    essential: true
  },
  {
    id: 'chrome-devtools',
    name: 'Chrome DevTools',
    category: 'coding',
    pricing: 'free',
    level: 'beginner',
    url: 'https://developer.chrome.com/docs/devtools',
    description: {
      en: 'Built-in browser development tools for inspecting DOM, CSS, network, performance, and accessibility.',
      es: 'Herramientas de desarrollo integradas en el navegador para inspeccionar DOM, CSS, red, rendimiento y accesibilidad.'
    },
    bestFor: { en: 'Debugging, CSS Inspection, Performance Profiling, Network', es: 'Depuracion, Inspeccion CSS, Perfilado de Rendimiento, Red' },
    proTip: { en: 'Use the Device Mode toolbar to test responsive designs without resizing your window.', es: 'Usa la barra de Device Mode para probar disenos responsive sin redimensionar tu ventana.' },
    tags: ['Debugging', 'Browser', 'Free'],
    essential: true
  },
  {
    id: 'storybook',
    name: 'Storybook',
    category: 'coding',
    pricing: 'free',
    level: 'intermediate',
    url: 'https://storybook.js.org',
    description: {
      en: 'Frontend workshop for building UI components in isolation. Document, test, and showcase component variants.',
      es: 'Taller frontend para construir componentes UI en aislamiento. Documenta, prueba y muestra variantes de componentes.'
    },
    bestFor: { en: 'Design Systems, Component Libraries, Visual Testing', es: 'Sistemas de Diseno, Bibliotecas de Componentes, Testing Visual' },
    proTip: { en: 'Add accessibility addon to automatically audit every component for WCAG compliance.', es: 'Agrega el addon de accesibilidad para auditar automaticamente cada componente para cumplimiento WCAG.' },
    tags: ['Components', 'Design Systems', 'Testing'],
  },
  {
    id: 'codepen',
    name: 'CodePen',
    category: 'coding',
    pricing: 'freemium',
    level: 'beginner',
    url: 'https://codepen.io',
    description: {
      en: 'Online code playground for HTML, CSS, and JavaScript. Share, fork, and discover front-end experiments.',
      es: 'Playground de codigo online para HTML, CSS y JavaScript. Comparte, forke y descubre experimentos front-end.'
    },
    bestFor: { en: 'Quick Prototypes, CSS Experiments, Sharing Code Snippets', es: 'Prototipos Rapidos, Experimentos CSS, Compartir Fragmentos de Codigo' },
    proTip: { en: 'Build a public CodePen collection of CSS tricks for your portfolio.', es: 'Construye una coleccion publica de trucos CSS en CodePen para tu portafolio.' },
    tags: ['Playground', 'Frontend', 'Sharing'],
  },
  {
    id: 'stackblitz',
    name: 'StackBlitz',
    category: 'coding',
    pricing: 'freemium',
    level: 'intermediate',
    url: 'https://stackblitz.com',
    description: {
      en: 'Full-stack online IDE running Node.js natively in the browser. Instant dev environments with WebContainers.',
      es: 'IDE online full-stack que ejecuta Node.js nativamente en el navegador. Entornos de desarrollo instantaneos con WebContainers.'
    },
    bestFor: { en: 'Full-Stack Prototypes, Bug Reproduction, Learning', es: 'Prototipos Full-Stack, Reproduccion de Bugs, Aprendizaje' },
    proTip: { en: 'Use StackBlitz to create shareable bug reproductions for GitHub issues.', es: 'Usa StackBlitz para crear reproducciones de bugs compartibles para issues de GitHub.' },
    tags: ['IDE', 'Online', 'Full-Stack'],
  },
  {
    id: 'vercel',
    name: 'Vercel',
    category: 'coding',
    pricing: 'freemium',
    level: 'intermediate',
    url: 'https://vercel.com',
    description: {
      en: 'Frontend cloud platform. Deploy React/Next.js apps instantly with preview URLs for every pull request.',
      es: 'Plataforma cloud frontend. Despliega apps React/Next.js instantaneamente con URLs de preview para cada pull request.'
    },
    bestFor: { en: 'Deployment, Preview URLs, Serverless Functions, Edge', es: 'Despliegue, URLs de Preview, Funciones Serverless, Edge' },
    proTip: { en: 'Every PR gets a unique preview URL - share with stakeholders for instant design review.', es: 'Cada PR tiene una URL de preview unica - comparte con stakeholders para revision de diseno instantanea.' },
    tags: ['Deployment', 'Cloud', 'Next.js'],
  },
  {
    id: 'lighthouse',
    name: 'Lighthouse',
    category: 'coding',
    pricing: 'free',
    level: 'intermediate',
    url: 'https://developer.chrome.com/docs/lighthouse',
    description: {
      en: 'Google\'s automated audit tool for performance, accessibility, best practices, and SEO scoring.',
      es: 'Herramienta de auditoria automatizada de Google para rendimiento, accesibilidad, mejores practicas y scoring SEO.'
    },
    bestFor: { en: 'Performance Audits, Accessibility Checks, SEO Analysis', es: 'Auditorias de Rendimiento, Checks de Accesibilidad, Analisis SEO' },
    proTip: { en: 'Run Lighthouse in incognito mode to avoid extension interference with results.', es: 'Ejecuta Lighthouse en modo incognito para evitar interferencia de extensiones con los resultados.' },
    tags: ['Performance', 'Accessibility', 'SEO', 'Free'],
  },
  {
    id: 'axe-devtools',
    name: 'axe DevTools',
    category: 'coding',
    pricing: 'freemium',
    level: 'intermediate',
    url: 'https://www.deque.com/axe/devtools/',
    description: {
      en: 'Browser extension for automated accessibility testing. Identifies WCAG violations with fix suggestions.',
      es: 'Extension de navegador para testing automatizado de accesibilidad. Identifica violaciones WCAG con sugerencias de solucion.'
    },
    bestFor: { en: 'Accessibility Audits, WCAG Compliance, A11y Testing', es: 'Auditorias de Accesibilidad, Cumplimiento WCAG, Testing A11y' },
    proTip: { en: 'Use the Intelligent Guided Tests for complex checks that automated tools can\'t catch.', es: 'Usa los Tests Guiados Inteligentes para checks complejos que las herramientas automatizadas no detectan.' },
    tags: ['Accessibility', 'WCAG', 'Browser Extension'],
  },
  {
    id: 'playwright',
    name: 'Playwright',
    category: 'coding',
    pricing: 'free',
    level: 'advanced',
    url: 'https://playwright.dev',
    description: {
      en: 'End-to-end testing framework by Microsoft. Cross-browser, auto-waiting, and visual comparison testing.',
      es: 'Framework de testing end-to-end de Microsoft. Cross-browser, auto-waiting y testing de comparacion visual.'
    },
    bestFor: { en: 'E2E Testing, Cross-Browser Testing, Visual Regression', es: 'Testing E2E, Testing Cross-Browser, Regresion Visual' },
    proTip: { en: 'Use codegen to record user interactions and auto-generate test scripts.', es: 'Usa codegen para grabar interacciones de usuario y auto-generar scripts de test.' },
    tags: ['Testing', 'E2E', 'Cross-Browser', 'Free'],
  },
  {
    id: 'tailwindcss',
    name: 'Tailwind CSS',
    category: 'coding',
    pricing: 'free',
    level: 'beginner',
    url: 'https://tailwindcss.com',
    description: {
      en: 'Utility-first CSS framework that lets you build designs directly in your markup. Rapid prototyping powerhouse.',
      es: 'Framework CSS utility-first que te permite construir disenos directamente en tu markup. Potencia de prototipado rapido.'
    },
    bestFor: { en: 'Rapid UI Development, Consistent Spacing, Design Systems', es: 'Desarrollo UI Rapido, Espaciado Consistente, Sistemas de Diseno' },
    proTip: { en: 'Use @apply sparingly - the power of Tailwind is in composing utilities inline.', es: 'Usa @apply con moderacion - el poder de Tailwind esta en componer utilities inline.' },
    tags: ['CSS', 'Framework', 'Utility-First', 'Free'],
    essential: true
  },

  // ─── AI ────────────────────────────────────────────
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    category: 'ai',
    pricing: 'freemium',
    level: 'beginner',
    url: 'https://chat.openai.com',
    description: {
      en: 'OpenAI\'s conversational AI. GPT-4 Vision analyzes screenshots, generates copy, structures research, and ideates solutions.',
      es: 'IA conversacional de OpenAI. GPT-4 Vision analiza capturas, genera copy, estructura investigacion e idea soluciones.'
    },
    bestFor: { en: 'UX Copy, Research Synthesis, Screenshot Analysis, Ideation', es: 'Copy UX, Sintesis de Investigacion, Analisis de Capturas, Ideacion' },
    proTip: { en: 'Upload a screenshot and ask: "Analyze this UI against Nielsen\'s 10 heuristics."', es: 'Sube una captura y pide: "Analiza esta UI contra las 10 heuristicas de Nielsen."' },
    tags: ['LLM', 'Vision', 'Copy', 'Research'],
    essential: true
  },
  {
    id: 'claude',
    name: 'Claude',
    category: 'ai',
    pricing: 'freemium',
    level: 'beginner',
    url: 'https://claude.ai',
    description: {
      en: 'Anthropic\'s AI assistant. Excels at nuanced analysis, long documents, and structured UX report writing.',
      es: 'Asistente IA de Anthropic. Excelente en analisis matizado, documentos largos y escritura estructurada de informes UX.'
    },
    bestFor: { en: 'Report Writing, Detailed Analysis, Long Documents, Code Review', es: 'Escritura de Informes, Analisis Detallado, Documentos Largos, Revision de Codigo' },
    proTip: { en: 'Use Claude for writing case study narratives - it maintains consistent tone across long texts.', es: 'Usa Claude para escribir narrativas de caso de estudio - mantiene tono consistente en textos largos.' },
    tags: ['LLM', 'Analysis', 'Writing'],
    essential: true
  },
  {
    id: 'github-copilot',
    name: 'GitHub Copilot',
    category: 'ai',
    pricing: 'paid',
    level: 'intermediate',
    url: 'https://github.com/features/copilot',
    description: {
      en: 'AI pair programmer that suggests code completions, writes functions, and explains existing code in your editor.',
      es: 'Programador par IA que sugiere completaciones de codigo, escribe funciones y explica codigo existente en tu editor.'
    },
    bestFor: { en: 'Code Completion, Boilerplate Generation, Learning New Languages', es: 'Completacion de Codigo, Generacion de Boilerplate, Aprender Nuevos Lenguajes' },
    proTip: { en: 'Write a detailed comment describing what you want, then let Copilot generate the implementation.', es: 'Escribe un comentario detallado describiendo lo que quieres, luego deja que Copilot genere la implementacion.' },
    tags: ['Code', 'AI', 'Autocomplete'],
  },
  {
    id: 'v0',
    name: 'v0 by Vercel',
    category: 'ai',
    pricing: 'freemium',
    level: 'beginner',
    url: 'https://v0.dev',
    description: {
      en: 'AI-powered UI generator. Describe a component in natural language, get production-ready React + Tailwind code.',
      es: 'Generador de UI impulsado por IA. Describe un componente en lenguaje natural, obtiene codigo React + Tailwind listo para produccion.'
    },
    bestFor: { en: 'UI Component Generation, React Prototyping, Learning Tailwind', es: 'Generacion de Componentes UI, Prototipado React, Aprender Tailwind' },
    proTip: { en: 'Generate a base component then iterate with follow-up prompts to refine it.', es: 'Genera un componente base luego itera con prompts de seguimiento para refinarlo.' },
    tags: ['UI Generation', 'React', 'Tailwind'],
  },
  {
    id: 'midjourney',
    name: 'Midjourney',
    category: 'ai',
    pricing: 'paid',
    level: 'intermediate',
    url: 'https://midjourney.com',
    description: {
      en: 'AI image generator with exceptional aesthetic quality. Creates illustrations, mockup images, and visual concepts.',
      es: 'Generador de imagenes IA con calidad estetica excepcional. Crea ilustraciones, imagenes de mockup y conceptos visuales.'
    },
    bestFor: { en: 'Concept Art, Mockup Images, Illustrations, Visual Exploration', es: 'Arte Conceptual, Imagenes de Mockup, Ilustraciones, Exploracion Visual' },
    proTip: { en: 'Use --style raw for cleaner, more design-appropriate outputs vs. artistic ones.', es: 'Usa --style raw para salidas mas limpias y apropiadas para diseno vs. artisticas.' },
    tags: ['Image Generation', 'Illustrations', 'AI Art'],
  },
  {
    id: 'galileo-ai',
    name: 'Galileo AI',
    category: 'ai',
    pricing: 'paid',
    level: 'intermediate',
    url: 'https://www.usegalileo.ai',
    description: {
      en: 'AI UI design generator. Creates high-fidelity UI designs from text prompts with real content and imagery.',
      es: 'Generador de diseno UI por IA. Crea disenos UI de alta fidelidad desde prompts de texto con contenido e imagenes reales.'
    },
    bestFor: { en: 'Rapid Hi-Fi Mockups, Design Exploration, Inspiration', es: 'Mockups Hi-Fi Rapidos, Exploracion de Diseno, Inspiracion' },
    proTip: { en: 'Use it for rapid exploration of 5+ layout variants before committing to one in Figma.', es: 'Usalo para exploracion rapida de 5+ variantes de layout antes de comprometerte con una en Figma.' },
    tags: ['UI Generation', 'Design', 'Hi-Fi'],
  },
  {
    id: 'magician',
    name: 'Magician (Figma)',
    category: 'ai',
    pricing: 'paid',
    level: 'intermediate',
    url: 'https://magician.design',
    description: {
      en: 'Figma plugin powered by AI. Generates icons, copy, images, and UX suggestions directly in your design tool.',
      es: 'Plugin de Figma impulsado por IA. Genera iconos, copy, imagenes y sugerencias UX directamente en tu herramienta de diseno.'
    },
    bestFor: { en: 'In-Figma AI Generation, UX Copy, Icon Generation', es: 'Generacion AI en Figma, Copy UX, Generacion de Iconos' },
    proTip: { en: 'Use the text generation feature to fill real-looking content instead of lorem ipsum.', es: 'Usa la funcion de generacion de texto para llenar contenido real en lugar de lorem ipsum.' },
    tags: ['Figma Plugin', 'AI', 'Copy'],
  },
  {
    id: 'relume',
    name: 'Relume',
    category: 'ai',
    pricing: 'freemium',
    level: 'intermediate',
    url: 'https://www.relume.io',
    description: {
      en: 'AI-powered sitemap and wireframe generator. Creates full site structures from project briefs in minutes.',
      es: 'Generador de sitemaps y wireframes impulsado por IA. Crea estructuras de sitio completas desde briefs de proyecto en minutos.'
    },
    bestFor: { en: 'Sitemap Generation, Wireframe Libraries, Client Proposals', es: 'Generacion de Sitemaps, Bibliotecas de Wireframes, Propuestas a Clientes' },
    proTip: { en: 'Generate a sitemap from a brief, export to Figma, then customize - saves hours of IA planning.', es: 'Genera un sitemap desde un brief, exporta a Figma, luego personaliza - ahorra horas de planificacion IA.' },
    tags: ['Sitemaps', 'Wireframes', 'AI'],
  },
  {
    id: 'attention-insight',
    name: 'Attention Insight',
    category: 'ai',
    pricing: 'paid',
    level: 'advanced',
    url: 'https://attentioninsight.com',
    description: {
      en: 'AI-powered attention heatmaps. Predicts where users will look without running eye-tracking studies.',
      es: 'Heatmaps de atencion impulsados por IA. Predice donde miraran los usuarios sin ejecutar estudios de eye-tracking.'
    },
    bestFor: { en: 'Visual Hierarchy Validation, Above-the-Fold Analysis, Landing Pages', es: 'Validacion de Jerarquia Visual, Analisis Above-the-Fold, Landing Pages' },
    proTip: { en: 'Test your hero section to ensure the CTA gets enough visual attention.', es: 'Prueba tu seccion hero para asegurar que el CTA reciba suficiente atencion visual.' },
    tags: ['Eye Tracking', 'Heatmaps', 'AI'],
  },
  {
    id: 'uizard',
    name: 'Uizard',
    category: 'ai',
    pricing: 'freemium',
    level: 'beginner',
    url: 'https://uizard.io',
    description: {
      en: 'AI design tool that converts screenshots, sketches, and text prompts into editable UI designs.',
      es: 'Herramienta de diseno IA que convierte capturas, bocetos y prompts de texto en disenos UI editables.'
    },
    bestFor: { en: 'Screenshot to Design, Sketch to UI, Quick Prototyping', es: 'Captura a Diseno, Boceto a UI, Prototipado Rapido' },
    proTip: { en: 'Photograph whiteboard sketches and convert them to digital wireframes instantly.', es: 'Fotografa bocetos de pizarra y conviertalos a wireframes digitales instantaneamente.' },
    tags: ['Screenshot', 'Conversion', 'Prototyping'],
  },
  {
    id: 'bolt',
    name: 'Bolt.new',
    category: 'ai',
    pricing: 'freemium',
    level: 'intermediate',
    url: 'https://bolt.new',
    description: {
      en: 'AI full-stack app builder. Describe what you want, get a complete running app with frontend, backend, and database.',
      es: 'Constructor de apps full-stack por IA. Describe lo que quieres, obtiene una app completa con frontend, backend y base de datos.'
    },
    bestFor: { en: 'Full-Stack Prototyping, MVP Generation, Learning by Building', es: 'Prototipado Full-Stack, Generacion de MVP, Aprender Construyendo' },
    proTip: { en: 'Use it to quickly prototype functional MVPs for user testing before building properly.', es: 'Usalo para prototipar rapidamente MVPs funcionales para testing de usuario antes de construir apropiadamente.' },
    tags: ['Full-Stack', 'AI Builder', 'Prototyping'],
  },

  // ─── RESEARCH & TESTING ────────────────────────────
  {
    id: 'maze',
    name: 'Maze',
    category: 'research',
    pricing: 'freemium',
    level: 'beginner',
    url: 'https://maze.co',
    description: {
      en: 'Rapid testing platform that connects to Figma prototypes. Unmoderated usability tests with automatic metrics.',
      es: 'Plataforma de testing rapido que conecta con prototipos de Figma. Tests de usabilidad no moderados con metricas automaticas.'
    },
    bestFor: { en: 'Unmoderated Usability Tests, Task Completion Metrics, Prototype Validation', es: 'Tests de Usabilidad No Moderados, Metricas de Completacion de Tareas, Validacion de Prototipos' },
    proTip: { en: 'Keep tasks under 5 minutes total to prevent participant fatigue and abandonment.', es: 'Manten las tareas bajo 5 minutos total para prevenir fatiga y abandono de participantes.' },
    tags: ['Usability Testing', 'Unmoderated', 'Figma'],
    essential: true
  },
  {
    id: 'hotjar',
    name: 'Hotjar',
    category: 'research',
    pricing: 'freemium',
    level: 'beginner',
    url: 'https://hotjar.com',
    description: {
      en: 'Behavior analytics with heatmaps, session recordings, and feedback surveys. See what users actually do.',
      es: 'Analiticas de comportamiento con heatmaps, grabaciones de sesion y encuestas de feedback. Ve lo que los usuarios realmente hacen.'
    },
    bestFor: { en: 'Heatmaps, Session Recordings, User Feedback Surveys', es: 'Heatmaps, Grabaciones de Sesion, Encuestas de Feedback de Usuario' },
    proTip: { en: 'Set up rage-click tracking to find the most frustrating elements in your UI.', es: 'Configura tracking de rage-clicks para encontrar los elementos mas frustrantes de tu UI.' },
    tags: ['Heatmaps', 'Session Recording', 'Feedback'],
    essential: true
  },
  {
    id: 'usertesting',
    name: 'UserTesting',
    category: 'research',
    pricing: 'paid',
    level: 'intermediate',
    url: 'https://usertesting.com',
    description: {
      en: 'On-demand video feedback from real users. Get recorded think-aloud sessions within hours, not weeks.',
      es: 'Feedback en video bajo demanda de usuarios reales. Obtiene sesiones grabadas de think-aloud en horas, no semanas.'
    },
    bestFor: { en: 'Moderated Testing, Video Feedback, Competitive Analysis', es: 'Testing Moderado, Feedback en Video, Analisis Competitivo' },
    proTip: { en: 'Use the highlight reel feature to create compelling stakeholder presentations from test clips.', es: 'Usa la funcion de highlight reel para crear presentaciones convincentes para stakeholders desde clips de test.' },
    tags: ['User Testing', 'Video', 'Think-Aloud'],
  },
  {
    id: 'lookback',
    name: 'Lookback',
    category: 'research',
    pricing: 'paid',
    level: 'intermediate',
    url: 'https://lookback.io',
    description: {
      en: 'Moderated and unmoderated remote user research with screen + face recording, timestamped notes, and transcription.',
      es: 'Investigacion de usuario remota moderada y no moderada con grabacion de pantalla + cara, notas con timestamp y transcripcion.'
    },
    bestFor: { en: 'Remote Moderated Sessions, Think-Aloud Recording, User Interviews', es: 'Sesiones Moderadas Remotas, Grabacion Think-Aloud, Entrevistas de Usuario' },
    proTip: { en: 'Use timestamped notes during sessions so you can jump directly to key moments later.', es: 'Usa notas con timestamp durante sesiones para saltar directamente a momentos clave despues.' },
    tags: ['User Research', 'Recording', 'Moderated'],
  },
  {
    id: 'optimal-workshop',
    name: 'Optimal Workshop',
    category: 'research',
    pricing: 'freemium',
    level: 'intermediate',
    url: 'https://optimalworkshop.com',
    description: {
      en: 'Suite for information architecture research: card sorting, tree testing, first-click testing, and surveys.',
      es: 'Suite para investigacion de arquitectura de informacion: card sorting, tree testing, first-click testing y encuestas.'
    },
    bestFor: { en: 'Card Sorting, Tree Testing, IA Validation, Navigation Testing', es: 'Card Sorting, Tree Testing, Validacion de IA, Testing de Navegacion' },
    proTip: { en: 'Run a tree test before AND after redesigning navigation to prove improvement.', es: 'Ejecuta un tree test antes Y despues de redisenar navegacion para probar mejora.' },
    tags: ['IA', 'Card Sorting', 'Tree Testing'],
  },
  {
    id: 'fullstory',
    name: 'FullStory',
    category: 'research',
    pricing: 'freemium',
    level: 'advanced',
    url: 'https://fullstory.com',
    description: {
      en: 'Digital experience intelligence with pixel-perfect session replay, frustration signals, and conversion funnels.',
      es: 'Inteligencia de experiencia digital con replay de sesiones pixel-perfect, senales de frustracion y funnels de conversion.'
    },
    bestFor: { en: 'Session Replay, Frustration Detection, Conversion Analysis', es: 'Replay de Sesiones, Deteccion de Frustracion, Analisis de Conversion' },
    proTip: { en: 'Search for "rage click" events to instantly find the most frustrating UI elements.', es: 'Busca eventos de "rage click" para encontrar instantaneamente los elementos UI mas frustrantes.' },
    tags: ['Session Replay', 'Analytics', 'DX Intelligence'],
  },
  {
    id: 'dovetail',
    name: 'Dovetail',
    category: 'research',
    pricing: 'freemium',
    level: 'intermediate',
    url: 'https://dovetail.com',
    description: {
      en: 'Research repository that organizes, tags, and connects user research data across projects and teams.',
      es: 'Repositorio de investigacion que organiza, etiqueta y conecta datos de investigacion de usuario entre proyectos y equipos.'
    },
    bestFor: { en: 'Research Repository, Tagging & Analysis, Insight Management', es: 'Repositorio de Investigacion, Etiquetado y Analisis, Gestion de Insights' },
    proTip: { en: 'Create reusable tag taxonomies so insights are searchable across all past research.', es: 'Crea taxonomias de tags reutilizables para que los insights sean buscables en toda la investigacion pasada.' },
    tags: ['Research Repository', 'Analysis', 'Insights'],
  },

  // ─── MANAGEMENT & PLANNING ─────────────────────────
  {
    id: 'jira',
    name: 'Jira',
    category: 'management',
    pricing: 'freemium',
    level: 'intermediate',
    url: 'https://atlassian.com/software/jira',
    description: {
      en: 'The enterprise standard for agile project management. Sprints, backlogs, boards, roadmaps, and deep integrations.',
      es: 'El estandar empresarial para gestion agil de proyectos. Sprints, backlogs, tableros, roadmaps e integraciones profundas.'
    },
    bestFor: { en: 'Agile Teams, Sprint Planning, Bug Tracking, Enterprise', es: 'Equipos Agiles, Planificacion de Sprint, Tracking de Bugs, Enterprise' },
    proTip: { en: 'Create a "UX Review" issue type with custom fields for heuristic and severity.', es: 'Crea un tipo de issue "UX Review" con campos personalizados para heuristica y severidad.' },
    tags: ['Agile', 'Sprints', 'Enterprise'],
  },
  {
    id: 'linear',
    name: 'Linear',
    category: 'management',
    pricing: 'freemium',
    level: 'intermediate',
    url: 'https://linear.app',
    description: {
      en: 'Modern, fast project management tool built for software teams. Beautiful UI with keyboard-first workflow.',
      es: 'Herramienta moderna y rapida de gestion de proyectos para equipos de software. UI hermosa con flujo keyboard-first.'
    },
    bestFor: { en: 'Fast Issue Tracking, Cycles, Roadmaps, Dev Teams', es: 'Tracking Rapido de Issues, Ciclos, Roadmaps, Equipos Dev' },
    proTip: { en: 'Use labels like "UX-Finding" and "Severity-4" to filter design issues across sprints.', es: 'Usa etiquetas como "UX-Finding" y "Severidad-4" para filtrar issues de diseno entre sprints.' },
    tags: ['Project Management', 'Modern', 'Fast'],
    essential: true
  },
  {
    id: 'notion',
    name: 'Notion',
    category: 'management',
    pricing: 'freemium',
    level: 'beginner',
    url: 'https://notion.so',
    description: {
      en: 'All-in-one workspace combining docs, databases, wikis, and project management. Infinitely flexible.',
      es: 'Workspace todo-en-uno combinando docs, bases de datos, wikis y gestion de proyectos. Infinitamente flexible.'
    },
    bestFor: { en: 'Knowledge Base, Project Wikis, Research Databases, Team Docs', es: 'Base de Conocimiento, Wikis de Proyecto, Bases de Datos de Investigacion, Docs de Equipo' },
    proTip: { en: 'Build a UX research database with linked views: by project, by insight theme, by date.', es: 'Construye una base de datos de investigacion UX con vistas vinculadas: por proyecto, tema de insight, fecha.' },
    tags: ['All-in-One', 'Docs', 'Databases', 'Wiki'],
    essential: true
  },
  {
    id: 'asana',
    name: 'Asana',
    category: 'management',
    pricing: 'freemium',
    level: 'beginner',
    url: 'https://asana.com',
    description: {
      en: 'Work management platform with boards, timelines, portfolios, and goal tracking for cross-functional teams.',
      es: 'Plataforma de gestion de trabajo con tableros, timelines, portafolios y tracking de objetivos para equipos cross-funcionales.'
    },
    bestFor: { en: 'Cross-Team Coordination, Timeline Planning, Goal Tracking', es: 'Coordinacion Cross-Team, Planificacion de Timeline, Tracking de Objetivos' },
    proTip: { en: 'Use Portfolio view to track multiple design projects at once with status dashboards.', es: 'Usa la vista Portfolio para rastrear multiples proyectos de diseno a la vez con dashboards de estado.' },
    tags: ['Project Management', 'Timelines', 'Portfolios'],
  },
  {
    id: 'trello',
    name: 'Trello',
    category: 'management',
    pricing: 'freemium',
    level: 'beginner',
    url: 'https://trello.com',
    description: {
      en: 'Simple, visual Kanban board tool. Drag-and-drop cards across columns to track work progress.',
      es: 'Herramienta de tablero Kanban simple y visual. Arrastra y suelta tarjetas entre columnas para rastrear progreso.'
    },
    bestFor: { en: 'Kanban Boards, Simple Tracking, Personal Projects', es: 'Tableros Kanban, Tracking Simple, Proyectos Personales' },
    proTip: { en: 'Create a design pipeline: Backlog > Research > Design > Review > Dev Ready > Done.', es: 'Crea un pipeline de diseno: Backlog > Investigacion > Diseno > Review > Listo para Dev > Hecho.' },
    tags: ['Kanban', 'Simple', 'Visual'],
  },
  {
    id: 'clickup',
    name: 'ClickUp',
    category: 'management',
    pricing: 'freemium',
    level: 'intermediate',
    url: 'https://clickup.com',
    description: {
      en: 'All-in-one productivity platform replacing multiple tools. Docs, tasks, whiteboards, goals in one app.',
      es: 'Plataforma de productividad todo-en-uno reemplazando multiples herramientas. Docs, tareas, pizarras, objetivos en una app.'
    },
    bestFor: { en: 'All-in-One Project Management, Custom Workflows, Docs + Tasks', es: 'Gestion de Proyectos Todo-en-Uno, Flujos Personalizados, Docs + Tareas' },
    proTip: { en: 'Use custom statuses for design review workflow: Draft > Internal Review > Client Review > Approved.', es: 'Usa estados personalizados para flujo de revision de diseno: Borrador > Revision Interna > Revision Cliente > Aprobado.' },
    tags: ['All-in-One', 'Customizable', 'Whiteboards'],
  },
  {
    id: 'airtable',
    name: 'Airtable',
    category: 'management',
    pricing: 'freemium',
    level: 'intermediate',
    url: 'https://airtable.com',
    description: {
      en: 'Spreadsheet-database hybrid. Build custom tracking systems with relational data, views, and automations.',
      es: 'Hibrido de hoja de calculo-base de datos. Construye sistemas de tracking personalizados con datos relacionales, vistas y automatizaciones.'
    },
    bestFor: { en: 'Custom Databases, Design Asset Tracking, Research Logs', es: 'Bases de Datos Personalizadas, Tracking de Assets de Diseno, Logs de Investigacion' },
    proTip: { en: 'Build a competitive analysis tracker with linked screenshots, ratings, and feature matrices.', es: 'Construye un tracker de analisis competitivo con capturas vinculadas, ratings y matrices de features.' },
    tags: ['Database', 'Spreadsheet', 'Custom'],
  },
  {
    id: 'monday',
    name: 'Monday.com',
    category: 'management',
    pricing: 'freemium',
    level: 'beginner',
    url: 'https://monday.com',
    description: {
      en: 'Visual work management with colorful boards, dashboards, automations, and 200+ integrations.',
      es: 'Gestion visual de trabajo con tableros coloridos, dashboards, automatizaciones y 200+ integraciones.'
    },
    bestFor: { en: 'Visual Dashboards, Cross-Department Visibility, Automations', es: 'Dashboards Visuales, Visibilidad Cross-Departamento, Automatizaciones' },
    proTip: { en: 'Use dashboard widgets to give executives a real-time view of design sprint progress.', es: 'Usa widgets de dashboard para dar a ejecutivos una vista en tiempo real del progreso de design sprints.' },
    tags: ['Visual', 'Dashboards', 'Automations'],
  },
  {
    id: 'productboard',
    name: 'Productboard',
    category: 'management',
    pricing: 'paid',
    level: 'advanced',
    url: 'https://productboard.com',
    description: {
      en: 'Product management platform connecting user research to feature prioritization and roadmap decisions.',
      es: 'Plataforma de gestion de producto conectando investigacion de usuario a priorizacion de features y decisiones de roadmap.'
    },
    bestFor: { en: 'Feature Prioritization, User Feedback Aggregation, Roadmapping', es: 'Priorizacion de Features, Agregacion de Feedback de Usuario, Roadmapping' },
    proTip: { en: 'Link heuristic findings to feature requests to show data-driven prioritization.', es: 'Vincula hallazgos heuristicos a solicitudes de features para mostrar priorizacion basada en datos.' },
    tags: ['Product', 'Prioritization', 'Roadmaps'],
  },

  // ─── DOCUMENTATION ─────────────────────────────────
  {
    id: 'confluence',
    name: 'Confluence',
    category: 'documentation',
    pricing: 'freemium',
    level: 'intermediate',
    url: 'https://atlassian.com/software/confluence',
    description: {
      en: 'Enterprise wiki and documentation platform. Deep integration with Jira for linking docs to tickets.',
      es: 'Wiki empresarial y plataforma de documentacion. Integracion profunda con Jira para vincular docs a tickets.'
    },
    bestFor: { en: 'Enterprise Wikis, Design Specs, Meeting Notes, Jira Integration', es: 'Wikis Empresariales, Specs de Diseno, Notas de Reuniones, Integracion Jira' },
    proTip: { en: 'Use page templates for consistent design spec documents across your team.', es: 'Usa plantillas de pagina para documentos de spec de diseno consistentes en tu equipo.' },
    tags: ['Wiki', 'Enterprise', 'Jira'],
  },
  {
    id: 'gitbook',
    name: 'GitBook',
    category: 'documentation',
    pricing: 'freemium',
    level: 'intermediate',
    url: 'https://gitbook.com',
    description: {
      en: 'Version-controlled documentation platform. Git-synced docs with beautiful default themes.',
      es: 'Plataforma de documentacion con control de versiones. Docs sincronizados con Git con hermosos temas por defecto.'
    },
    bestFor: { en: 'Design System Docs, API Docs, Team Knowledge Bases', es: 'Docs de Sistemas de Diseno, Docs de API, Bases de Conocimiento de Equipo' },
    proTip: { en: 'Sync with GitHub to version-control your design system documentation.', es: 'Sincroniza con GitHub para controlar versiones de tu documentacion de sistema de diseno.' },
    tags: ['Docs', 'Git', 'Knowledge Base'],
  },
  {
    id: 'zeroheight',
    name: 'Zeroheight',
    category: 'documentation',
    pricing: 'freemium',
    level: 'advanced',
    url: 'https://zeroheight.com',
    description: {
      en: 'Design system documentation that syncs with Figma, Storybook, and code repos. Single source of truth.',
      es: 'Documentacion de sistemas de diseno que sincroniza con Figma, Storybook y repos de codigo. Fuente unica de verdad.'
    },
    bestFor: { en: 'Design System Documentation, Figma Sync, Living Style Guides', es: 'Documentacion de Sistemas de Diseno, Sync con Figma, Style Guides Vivos' },
    proTip: { en: 'Embed live Figma frames that auto-update when your design system evolves.', es: 'Embebe frames de Figma en vivo que se auto-actualizan cuando tu sistema de diseno evoluciona.' },
    tags: ['Design Systems', 'Figma Sync', 'Style Guides'],
  },
  {
    id: 'loom',
    name: 'Loom',
    category: 'documentation',
    pricing: 'freemium',
    level: 'beginner',
    url: 'https://loom.com',
    description: {
      en: 'Async video messaging. Record screen + camera walkthroughs for design reviews, handoffs, and presentations.',
      es: 'Mensajeria de video asincrona. Graba walkthroughs de pantalla + camara para revisiones de diseno, handoffs y presentaciones.'
    },
    bestFor: { en: 'Async Design Reviews, Handoff Videos, Stakeholder Updates', es: 'Revisiones de Diseno Async, Videos de Handoff, Actualizaciones a Stakeholders' },
    proTip: { en: 'Record a 3-minute design walkthrough instead of scheduling a 30-minute meeting.', es: 'Graba un walkthrough de diseno de 3 minutos en lugar de agendar una reunion de 30 minutos.' },
    tags: ['Video', 'Async', 'Communication'],
    essential: true
  },
  {
    id: 'pitch',
    name: 'Pitch',
    category: 'documentation',
    pricing: 'freemium',
    level: 'beginner',
    url: 'https://pitch.com',
    description: {
      en: 'Modern presentation tool designed for teams. Beautiful templates, real-time collaboration, and analytics.',
      es: 'Herramienta de presentacion moderna disenada para equipos. Plantillas hermosas, colaboracion en tiempo real y analiticas.'
    },
    bestFor: { en: 'Stakeholder Presentations, Case Studies, Design Proposals', es: 'Presentaciones a Stakeholders, Casos de Estudio, Propuestas de Diseno' },
    proTip: { en: 'Use the analytics feature to see which slides stakeholders spent the most time on.', es: 'Usa la funcion de analiticas para ver en que slides los stakeholders pasaron mas tiempo.' },
    tags: ['Presentations', 'Modern', 'Analytics'],
  },
  {
    id: 'gamma',
    name: 'Gamma',
    category: 'documentation',
    pricing: 'freemium',
    level: 'beginner',
    url: 'https://gamma.app',
    description: {
      en: 'AI-powered presentation and document generator. Create polished decks from text prompts or outlines.',
      es: 'Generador de presentaciones y documentos impulsado por IA. Crea decks pulidos desde prompts de texto o outlines.'
    },
    bestFor: { en: 'Quick Presentations, AI-Generated Decks, Reports', es: 'Presentaciones Rapidas, Decks Generados por IA, Informes' },
    proTip: { en: 'Paste your research findings and let Gamma structure them into a stakeholder-ready deck.', es: 'Pega tus hallazgos de investigacion y deja que Gamma los estructure en un deck listo para stakeholders.' },
    tags: ['AI', 'Presentations', 'Docs'],
  },
  {
    id: 'google-docs',
    name: 'Google Docs',
    category: 'documentation',
    pricing: 'free',
    level: 'beginner',
    url: 'https://docs.google.com',
    description: {
      en: 'Free collaborative document editing. Real-time co-editing, commenting, suggestion mode, and version history.',
      es: 'Edicion colaborativa de documentos gratuita. Co-edicion en tiempo real, comentarios, modo de sugerencias e historial de versiones.'
    },
    bestFor: { en: 'Collaborative Writing, Research Reports, PRDs, Meeting Notes', es: 'Escritura Colaborativa, Informes de Investigacion, PRDs, Notas de Reuniones' },
    proTip: { en: 'Use Suggestion Mode for design review feedback so authors can accept/reject changes.', es: 'Usa Modo Sugerencias para feedback de revision de diseno para que los autores acepten/rechacen cambios.' },
    tags: ['Docs', 'Collaborative', 'Free'],
  },

  // ─── ANALYTICS ─────────────────────────────────────
  {
    id: 'google-analytics',
    name: 'Google Analytics 4',
    category: 'analytics',
    pricing: 'free',
    level: 'intermediate',
    url: 'https://analytics.google.com',
    description: {
      en: 'The standard for web analytics. Event-based tracking, conversion funnels, audience insights, and custom reports.',
      es: 'El estandar para analiticas web. Tracking basado en eventos, funnels de conversion, insights de audiencia e informes personalizados.'
    },
    bestFor: { en: 'Traffic Analysis, Conversion Tracking, Funnel Analysis, User Behavior', es: 'Analisis de Trafico, Tracking de Conversion, Analisis de Funnels, Comportamiento de Usuario' },
    proTip: { en: 'Set up funnel exploration reports to find exactly where users drop off in key flows.', es: 'Configura informes de exploracion de funnels para encontrar exactamente donde los usuarios abandonan en flujos clave.' },
    tags: ['Web Analytics', 'Funnels', 'Free'],
    essential: true
  },
  {
    id: 'mixpanel',
    name: 'Mixpanel',
    category: 'analytics',
    pricing: 'freemium',
    level: 'intermediate',
    url: 'https://mixpanel.com',
    description: {
      en: 'Product analytics focused on user actions. Track events, build funnels, analyze cohorts and retention.',
      es: 'Analiticas de producto enfocadas en acciones de usuario. Rastrea eventos, construye funnels, analiza cohortes y retencion.'
    },
    bestFor: { en: 'Event Analytics, Cohort Analysis, Retention Tracking, A/B Test Analysis', es: 'Analiticas de Eventos, Analisis de Cohortes, Tracking de Retencion, Analisis de A/B Tests' },
    proTip: { en: 'Track custom events for every key UI interaction to build data-driven design cases.', es: 'Rastrea eventos personalizados para cada interaccion UI clave para construir casos de diseno basados en datos.' },
    tags: ['Product Analytics', 'Events', 'Cohorts'],
  },
  {
    id: 'amplitude',
    name: 'Amplitude',
    category: 'analytics',
    pricing: 'freemium',
    level: 'advanced',
    url: 'https://amplitude.com',
    description: {
      en: 'Behavioral analytics platform. Understand user journeys, predict churn, and measure feature impact at scale.',
      es: 'Plataforma de analiticas de comportamiento. Entiende journeys de usuario, predice churn y mide impacto de features a escala.'
    },
    bestFor: { en: 'Behavioral Analytics, Journey Mapping, Feature Impact, Experimentation', es: 'Analiticas de Comportamiento, Mapeo de Journeys, Impacto de Features, Experimentacion' },
    proTip: { en: 'Use the North Star framework in Amplitude to align metrics with UX outcomes.', es: 'Usa el framework North Star en Amplitude para alinear metricas con resultados UX.' },
    tags: ['Behavioral', 'Journeys', 'Experimentation'],
  },
  {
    id: 'posthog',
    name: 'PostHog',
    category: 'analytics',
    pricing: 'freemium',
    level: 'intermediate',
    url: 'https://posthog.com',
    description: {
      en: 'Open-source product analytics with session recordings, feature flags, A/B testing, and surveys in one platform.',
      es: 'Analiticas de producto open-source con grabaciones de sesion, feature flags, A/B testing y encuestas en una plataforma.'
    },
    bestFor: { en: 'Open-Source Analytics, Feature Flags, Session Replays, Self-Hosted', es: 'Analiticas Open-Source, Feature Flags, Replays de Sesion, Self-Hosted' },
    proTip: { en: 'Use feature flags to gradually roll out design changes and measure impact before full release.', es: 'Usa feature flags para desplegar gradualmente cambios de diseno y medir impacto antes del release completo.' },
    tags: ['Open Source', 'All-in-One', 'Feature Flags'],
  },
  {
    id: 'sentry',
    name: 'Sentry',
    category: 'analytics',
    pricing: 'freemium',
    level: 'advanced',
    url: 'https://sentry.io',
    description: {
      en: 'Error tracking and performance monitoring. Catch frontend crashes, slow transactions, and broken user flows.',
      es: 'Tracking de errores y monitoreo de rendimiento. Captura crashes de frontend, transacciones lentas y flujos de usuario rotos.'
    },
    bestFor: { en: 'Error Tracking, Performance Monitoring, Release Health', es: 'Tracking de Errores, Monitoreo de Rendimiento, Salud de Releases' },
    proTip: { en: 'Track JavaScript errors that break UI states - these are hidden UX problems users never report.', es: 'Rastrea errores JavaScript que rompen estados UI - estos son problemas UX ocultos que los usuarios nunca reportan.' },
    tags: ['Error Tracking', 'Performance', 'Monitoring'],
  },
  {
    id: 'logrocket',
    name: 'LogRocket',
    category: 'analytics',
    pricing: 'freemium',
    level: 'advanced',
    url: 'https://logrocket.com',
    description: {
      en: 'Session replay with performance monitoring. Replay user sessions and correlate with console errors and network failures.',
      es: 'Replay de sesiones con monitoreo de rendimiento. Reproduce sesiones de usuario y correlaciona con errores de consola y fallas de red.'
    },
    bestFor: { en: 'Session Replay, Error Correlation, Frontend Performance', es: 'Replay de Sesiones, Correlacion de Errores, Rendimiento Frontend' },
    proTip: { en: 'Filter sessions by "frustration score" to find the worst user experiences first.', es: 'Filtra sesiones por "frustration score" para encontrar las peores experiencias de usuario primero.' },
    tags: ['Session Replay', 'Performance', 'Errors'],
  },

  // ─── COLLABORATION ─────────────────────────────────
  {
    id: 'slack',
    name: 'Slack',
    category: 'collaboration',
    pricing: 'freemium',
    level: 'beginner',
    url: 'https://slack.com',
    description: {
      en: 'Team communication platform. Channels, threads, integrations, and workflows for cross-functional design teams.',
      es: 'Plataforma de comunicacion de equipo. Canales, hilos, integraciones y workflows para equipos de diseno cross-funcionales.'
    },
    bestFor: { en: 'Team Communication, Design Feedback Channels, Bot Integrations', es: 'Comunicacion de Equipo, Canales de Feedback de Diseno, Integraciones de Bots' },
    proTip: { en: 'Create a #design-review channel with Figma integration for instant prototype sharing.', es: 'Crea un canal #design-review con integracion Figma para compartir prototipos instantaneamente.' },
    tags: ['Communication', 'Channels', 'Integrations'],
  },
  {
    id: 'miro',
    name: 'Miro',
    category: 'collaboration',
    pricing: 'freemium',
    level: 'beginner',
    url: 'https://miro.com',
    description: {
      en: 'Visual collaboration platform. Infinite whiteboard for workshops, journey mapping, and design thinking sessions.',
      es: 'Plataforma de colaboracion visual. Pizarra infinita para workshops, mapeo de journeys y sesiones de design thinking.'
    },
    bestFor: { en: 'Workshops, Journey Mapping, Design Thinking, Retros', es: 'Workshops, Mapeo de Journeys, Design Thinking, Retros' },
    proTip: { en: 'Use pre-built workshop templates (Crazy 8s, Affinity Mapping) instead of starting from scratch.', es: 'Usa plantillas pre-construidas de workshops (Crazy 8s, Mapeo de Afinidad) en lugar de empezar de cero.' },
    tags: ['Whiteboard', 'Workshops', 'Visual'],
    essential: true
  },
  {
    id: 'zeplin',
    name: 'Zeplin',
    category: 'collaboration',
    pricing: 'freemium',
    level: 'intermediate',
    url: 'https://zeplin.io',
    description: {
      en: 'Design-to-development handoff tool. Export designs with specs, assets, and code snippets for developers.',
      es: 'Herramienta de handoff diseno-a-desarrollo. Exporta disenos con specs, assets y fragmentos de codigo para developers.'
    },
    bestFor: { en: 'Design Handoff, CSS Specs, Asset Export, Developer Collaboration', es: 'Handoff de Diseno, Specs CSS, Exportacion de Assets, Colaboracion con Developers' },
    proTip: { en: 'Use connected components to link Figma components to Storybook code automatically.', es: 'Usa componentes conectados para vincular componentes Figma a codigo Storybook automaticamente.' },
    tags: ['Handoff', 'Specs', 'Developer'],
  },
  {
    id: 'abstract',
    name: 'Abstract',
    category: 'collaboration',
    pricing: 'paid',
    level: 'advanced',
    url: 'https://abstract.com',
    description: {
      en: 'Version control and design management for Sketch and Figma. Branching, merging, and review workflows.',
      es: 'Control de versiones y gestion de diseno para Sketch y Figma. Branching, merging y flujos de revision.'
    },
    bestFor: { en: 'Design Version Control, Team Branching, Review Workflows', es: 'Control de Versiones de Diseno, Branching de Equipo, Flujos de Revision' },
    proTip: { en: 'Use branches for design exploration so you can always revert to the approved version.', es: 'Usa branches para exploracion de diseno para que siempre puedas revertir a la version aprobada.' },
    tags: ['Version Control', 'Branching', 'Design Ops'],
  },
  {
    id: 'figma-dev-mode',
    name: 'Figma Dev Mode',
    category: 'collaboration',
    pricing: 'paid',
    level: 'intermediate',
    url: 'https://figma.com/dev-mode',
    description: {
      en: 'Figma\'s developer handoff mode. Inspect designs, copy code snippets, compare versions, and link to tickets.',
      es: 'Modo de handoff para developers de Figma. Inspecciona disenos, copia fragmentos de codigo, compara versiones y vincula a tickets.'
    },
    bestFor: { en: 'Developer Handoff, Code Snippets, Design Inspection, Jira Integration', es: 'Handoff a Developer, Fragmentos de Codigo, Inspeccion de Diseno, Integracion Jira' },
    proTip: { en: 'Use annotations to explain interaction patterns that developers can\'t infer from static screens.', es: 'Usa anotaciones para explicar patrones de interaccion que los developers no pueden inferir de pantallas estaticas.' },
    tags: ['Handoff', 'Figma', 'Code'],
  },
];
