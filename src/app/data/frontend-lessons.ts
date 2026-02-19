// ────────────────────────────────────────────────────────────
// Frontend lesson data extracted for content.ts
// ────────────────────────────────────────────────────────────

export const frontendFoundationsLesson = {
  id: 'frontend-foundations',
  title: { en: 'Front-End Foundations', es: 'Fundamentos Front-End' },
  description: { en: 'HTML, CSS & JS mental models for designers — bridge the design-dev gap.', es: 'Modelos mentales de HTML, CSS y JS para diseñadores — cierra la brecha diseño-desarrollo.' },
  status: 'advanced' as const,
  timeEstimate: '2h',
  reference: { en: 'MDN Web Docs — Front-end Developer Learning Path', es: 'MDN Web Docs — Ruta de Aprendizaje Front-end' },
  referenceLink: 'https://developer.mozilla.org/en-US/docs/Learn/Front-end_web_developer',
  content: {
    definition: {
      en: 'Front-end foundations are the mental models a designer needs to understand how the web actually works — HTML for structure, CSS for presentation, JavaScript for interactivity, and how browsers render it all. It\'s not about writing production code; it\'s about speaking the same language as developers and designing within real technical constraints.',
      es: 'Los fundamentos front-end son los modelos mentales que un diseñador necesita para entender cómo funciona realmente la web — HTML para estructura, CSS para presentación, JavaScript para interactividad, y cómo los navegadores renderizan todo. No se trata de escribir código de producción; se trata de hablar el mismo idioma que los desarrolladores y diseñar dentro de restricciones técnicas reales.'
    },
    why: {
      en: 'Designers who understand front-end get their designs implemented more accurately, can prototype faster, make fewer "impossible" design decisions, and earn developer trust. Knowing that a design requires 4 media queries and a CSS Grid layout helps you negotiate scope and ship faster.',
      es: 'Los diseñadores que entienden front-end logran que sus diseños se implementen con más precisión, pueden prototipar más rápido, toman menos decisiones "imposibles" y ganan la confianza de los desarrolladores.'
    },
    keyPrinciples: {
      en: [
        'Box Model: Every element is a box with content, padding, border, and margin. Understanding this eliminates 80% of spacing bugs.',
        'Flexbox vs Grid: Flexbox = 1D (row or column). Grid = 2D (rows AND columns). Flexbox for navbars, Grid for page layouts.',
        'Responsive units: px = absolute. rem = relative to root font. vh/vw = viewport. % = parent.',
        'The Cascade & Specificity: CSS rules override each other (ID > class > element).',
        'Semantic HTML & Accessibility: <nav>, <main>, <button> give screen readers meaning.',
        'DOM & Component Model: React/Vue use reusable components with their own state. Design systems map to component libraries.',
        'Performance: Large images, many fonts, and complex animations hurt users on slow connections.',
        'Design Handoff: Good handoff = behavior annotations ("sticky on scroll", "truncate after 2 lines"), not just screens.'
      ],
      es: [
        'Modelo de Caja: Cada elemento es una caja con contenido, padding, border y margin.',
        'Flexbox vs Grid: Flexbox = 1D (fila o columna). Grid = 2D (filas Y columnas).',
        'Unidades responsivas: px = absoluto. rem = relativo a fuente raíz. vh/vw = viewport. % = padre.',
        'Cascada y Especificidad: Las reglas CSS se sobreescriben (ID > clase > elemento).',
        'HTML Semántico: <nav>, <main>, <button> dan significado a lectores de pantalla.',
        'DOM y Componentes: React/Vue usan componentes reutilizables con estado propio.',
        'Rendimiento: Imágenes grandes, muchas fuentes y animaciones complejas afectan a usuarios.',
        'Handoff: Buen handoff = anotaciones de comportamiento, no solo pantallas estáticas.'
      ]
    },
    commonMistakes: {
      en: ['Designing with fixed pixel widths everywhere.', 'Ignoring hover, focus, active, disabled, error states.', 'Not accounting for variable content length.', 'Thinking of the web as a static canvas.', 'Too many unique font sizes and spacing values.', 'Designing components without considering responsive behavior.'],
      es: ['Diseñar con anchos fijos en px.', 'Ignorar estados hover, focus, active, disabled, error.', 'No considerar longitud variable del contenido.', 'Pensar en la web como lienzo estático.', 'Demasiados tamaños de fuente y espaciado únicos.', 'Componentes sin considerar comportamiento responsivo.']
    },
    howToApply: {
      steps: [
        { name: { en: 'Think in Boxes', es: 'Piensa en Cajas' }, description: { en: 'Draw rectangles around every element. Each is a CSS box with margin, padding, border.', es: 'Dibuja rectángulos alrededor de cada elemento. Cada uno es una caja CSS.' } },
        { name: { en: 'Define Responsive Behavior', es: 'Definir Comportamiento Responsivo' }, description: { en: 'Annotate: "On mobile, stack vertically. On tablet, 2-column grid. On desktop, 3-column with sidebar."', es: 'Anota: "En móvil, apilar vertical. En tablet, grid de 2 columnas. En desktop, 3 columnas con sidebar."' } },
        { name: { en: 'Design All States', es: 'Diseñar Todos los Estados' }, description: { en: 'For every interactive element: default, hover, focused, active, disabled, loading, empty, error.', es: 'Para cada elemento interactivo: default, hover, focused, active, disabled, loading, empty, error.' } },
        { name: { en: 'Annotate for Handoff', es: 'Anotar para Handoff' }, description: { en: '"Sticky on scroll after 80px", "Truncate with ellipsis after 2 lines", "Transition: 200ms ease-out".', es: '"Sticky al scroll después de 80px", "Truncar con puntos suspensivos tras 2 líneas", "Transición: 200ms ease-out".' } }
      ]
    },
    deliverables: {
      description: { en: 'Portfolio artifacts demonstrating front-end literacy.', es: 'Artefactos demostrando conocimiento front-end.' },
      items: {
        en: ['Annotated Design Spec with CSS/HTML annotations', 'Responsive Breakpoint Map', 'Component State Library', 'Developer Handoff Checklist'],
        es: ['Spec de Diseño Anotado con anotaciones CSS/HTML', 'Mapa de Breakpoints Responsivos', 'Librería de Estados de Componentes', 'Checklist de Handoff']
      }
    },
    practicalTools: {
      design: { en: ['Figma Auto Layout (mirrors Flexbox)', 'Chrome DevTools', 'Responsively App'], es: ['Figma Auto Layout (refleja Flexbox)', 'Chrome DevTools', 'Responsively App'] },
      research: { en: ['Can I Use', 'WebPageTest', 'WAVE (accessibility)'], es: ['Can I Use', 'WebPageTest', 'WAVE (accesibilidad)'] },
      handoff: { en: ['Figma Dev Mode', 'Zeplin', 'Storybook'], es: ['Figma Dev Mode', 'Zeplin', 'Storybook'] }
    },
    howToValidate: {
      what: { en: 'Validate your front-end knowledge translates to better design-dev collaboration.', es: 'Valida que tu conocimiento front-end mejora la colaboración diseño-desarrollo.' },
      methods: { en: ['Dev satisfaction survey on handoff quality', 'Implementation accuracy audit', 'Design QA sessions using CSS vocabulary', 'Prototype in code to validate interactions'], es: ['Encuesta dev sobre calidad de handoff', 'Auditoría de precisión de implementación', 'Sesiones QA con vocabulario CSS', 'Prototipar en código para validar interacciones'] },
      tools: { en: ['Chrome DevTools', 'Figma Dev Mode', 'Percy', 'Storybook'], es: ['Chrome DevTools', 'Figma Dev Mode', 'Percy', 'Storybook'] },
      evidenceExample: { en: 'After learning CSS Grid/Flexbox, handoff issues dropped 62% and implementation accuracy improved from ~75% to ~94%.', es: 'Después de aprender CSS Grid/Flexbox, los issues de handoff cayeron 62% y la precisión mejoró de ~75% a ~94%.' }
    },
    quiz: [
      { question: { en: 'Which CSS property creates a one-dimensional layout?', es: '¿Qué propiedad CSS crea un layout unidimensional?' }, options: { en: ['display: grid', 'display: flex', 'display: block', 'position: absolute'], es: ['display: grid', 'display: flex', 'display: block', 'position: absolute'] }, correctIndex: 1, explanation: { en: 'Flexbox creates one-dimensional layouts. Grid is for two-dimensional.', es: 'Flexbox crea layouts unidimensionales. Grid es para bidimensionales.' } },
      { question: { en: 'Why avoid only pixel (px) values for font sizes?', es: '¿Por qué evitar solo px para fuentes?' }, options: { en: ['Slow rendering', 'Users can\'t adjust text size', 'Not supported on mobile', 'Color inconsistency'], es: ['Renderizado lento', 'Usuarios no pueden ajustar tamaño', 'No soportado en móvil', 'Colores inconsistentes'] }, correctIndex: 1, explanation: { en: 'Fixed px prevents users from scaling text via browser settings — an accessibility issue. Use rem.', es: 'Px fijo impide escalar texto vía configuración del navegador — problema de accesibilidad. Usa rem.' } },
      { question: { en: 'What does "mobile-first" mean in CSS?', es: '¿Qué significa "mobile-first" en CSS?' }, options: { en: ['Design only for mobile', 'Write CSS for mobile first, add min-width queries', 'Use max-width queries', 'Set viewport to 375px'], es: ['Diseñar solo para móvil', 'CSS para móvil primero, agregar min-width queries', 'Usar max-width queries', 'Viewport a 375px'] }, correctIndex: 1, explanation: { en: 'Base CSS targets small screens, then enhance for larger viewports with min-width queries.', es: 'CSS base para pantallas pequeñas, luego mejorar con queries min-width.' } }
    ],
    realExample: {
      title: { en: 'Airbnb: Where Design Meets Front-End Excellence', es: 'Airbnb: Donde Diseño se Encuentra con Front-End' },
      description: {
        en: 'Airbnb\'s design system uses Auto Layout patterns mapping 1:1 to Flexbox, responsive tokens instead of fixed px, and every component has defined states. Their handoff includes behavior annotations like "lazy load images after fold." Result: pixel-perfect implementations.',
        es: 'El design system de Airbnb mapea Auto Layout 1:1 a Flexbox, usa tokens responsivos en vez de px fijos, y cada componente tiene estados definidos. Su handoff incluye anotaciones como "lazy load después del fold." Resultado: implementaciones pixel-perfect.'
      },
      company: 'Airbnb'
    },
    aiInPractice: {
      description: { en: 'Use AI to translate design concepts into CSS logic.', es: 'Usa IA para traducir conceptos de diseño a lógica CSS.' },
      prompts: [
        { tool: 'ChatGPT', context: { en: 'Layout Translation', es: 'Traducción de Layout' }, prompt: { en: 'I have a sidebar (240px fixed) and main content area. On mobile, sidebar becomes a bottom sheet. Write the CSS approach.', es: 'Tengo un sidebar (240px fijo) y área de contenido. En móvil, sidebar se convierte en bottom sheet. Escribe el enfoque CSS.' } },
        { tool: 'ChatGPT', context: { en: 'Handoff', es: 'Handoff' }, prompt: { en: 'Generate a developer handoff checklist for a card component: responsive behavior, states, loading, accessibility, animation.', es: 'Genera checklist de handoff para card: comportamiento responsivo, estados, carga, accesibilidad, animación.' } }
      ]
    }
  }
};

export const htmlFundamentalsLesson = {
  id: 'html-fundamentals',
  title: { en: 'HTML Fundamentals', es: 'Fundamentos de HTML' },
  description: { en: 'Learn to structure web content with HTML — the skeleton of every website.', es: 'Aprende a estructurar contenido web con HTML — el esqueleto de cada sitio web.' },
  status: 'beginner' as const,
  timeEstimate: '1h 30m',
  reference: { en: 'MDN — HTML Basics', es: 'MDN — Fundamentos de HTML' },
  referenceLink: 'https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics',
  content: {
    definition: {
      en: 'HTML (HyperText Markup Language) is the standard language for structuring web content. It uses tags (like <h1>, <p>, <div>) to define the meaning and hierarchy of content. HTML is NOT a programming language — it\'s a markup language that tells the browser what each piece of content IS.',
      es: 'HTML (HyperText Markup Language) es el lenguaje estándar para estructurar contenido web. Usa etiquetas para definir el significado y jerarquía del contenido. HTML NO es un lenguaje de programación — es un lenguaje de marcado.'
    },
    why: {
      en: 'Every website starts with HTML. Understanding its structure helps you: design accessible interfaces, communicate with developers about content hierarchy, and understand which design ideas are simple or complex to implement.',
      es: 'Cada sitio web empieza con HTML. Entender su estructura te ayuda a: diseñar interfaces accesibles, comunicarte con desarrolladores sobre jerarquía, y entender qué ideas son simples o complejas de implementar.'
    },
    keyPrinciples: {
      en: [
        'Document structure: <!DOCTYPE html>, <html>, <head> (metadata), <body> (visible content).',
        'Semantic HTML: <header>, <nav>, <main>, <article>, <aside>, <footer> instead of <div>s. Improves accessibility, SEO, readability.',
        'Headings hierarchy: h1 → h6. Only ONE h1 per page. Never skip levels.',
        'Forms & inputs: Every input needs a <label> via for/id. Use right type (email, password, tel).',
        'Images: Every <img> MUST have alt text. Decorative images use alt="".',
        'Links: <a href="..."> for URLs, mailto:, anchors. Always add rel="noopener noreferrer" to target="_blank".',
        'Lists: <ul> unordered, <ol> ordered. Screen readers announce "list of N items".',
        'Tables: ONLY for tabular data. Use <thead>, <tbody>, <th>, <caption>.'
      ],
      es: [
        'Estructura: <!DOCTYPE html>, <html>, <head> (metadatos), <body> (contenido visible).',
        'HTML semántico: <header>, <nav>, <main>, <article>, <aside>, <footer> en lugar de <div>s.',
        'Jerarquía de encabezados: h1 → h6. Solo UN h1 por página. No saltar niveles.',
        'Formularios: Cada input necesita <label> via for/id. Tipo correcto (email, password, tel).',
        'Imágenes: Cada <img> DEBE tener alt text. Decorativas usan alt="".',
        'Enlaces: <a href="..."> para URLs, mailto:, anclas. Siempre rel="noopener noreferrer" en target="_blank".',
        'Listas: <ul> no ordenadas, <ol> ordenadas. Lectores de pantalla anuncian "lista de N elementos".',
        'Tablas: SOLO para datos tabulares. Usa <thead>, <tbody>, <th>, <caption>.'
      ]
    },
    commonMistakes: {
      en: ['Using <div> for everything ("div soup").', 'Missing alt text.', 'Skipping heading levels.', 'Using <table> for layout.', 'Not connecting labels to inputs.', 'Using <br> for spacing.'],
      es: ['Usar <div> para todo ("sopa de divs").', 'Olvidar alt text.', 'Saltar niveles de encabezados.', 'Usar <table> para layout.', 'No conectar labels a inputs.', 'Usar <br> para espaciado.']
    },
    howToApply: {
      steps: [
        { name: { en: 'Create Your First Page', es: 'Crea Tu Primera Página' }, description: { en: 'Write a basic HTML document with heading, paragraph, and link. Open in browser.', es: 'Escribe un documento HTML básico con encabezado, párrafo y enlace.' } },
        { name: { en: 'Use Semantic Elements', es: 'Usa Elementos Semánticos' }, description: { en: 'Replace divs with <header>, <nav>, <main>, <section>, <article>, <aside>, <footer>.', es: 'Reemplaza divs con elementos semánticos.' } },
        { name: { en: 'Build a Form', es: 'Construir un Formulario' }, description: { en: 'Create a sign-up form with various inputs and connected labels.', es: 'Crea un formulario de registro con inputs variados y labels conectadas.' } },
        { name: { en: 'Validate Accessibility', es: 'Validar Accesibilidad' }, description: { en: 'Run through WAVE or axe DevTools. Fix every error.', es: 'Pasa por WAVE o axe DevTools. Corrige cada error.' } }
      ]
    },
    deliverables: {
      description: { en: 'HTML artifacts for your portfolio.', es: 'Artefactos HTML para tu portafolio.' },
      items: { en: ['Personal Landing Page', 'Form Prototype', 'Semantic Audit', 'Accessibility Report'], es: ['Landing Page Personal', 'Prototipo de Formulario', 'Auditoría Semántica', 'Reporte de Accesibilidad'] }
    },
    practicalTools: {
      design: { en: ['VS Code', 'CodePen', 'Emmet (shortcuts)'], es: ['VS Code', 'CodePen', 'Emmet (atajos)'] },
      research: { en: ['WAVE', 'W3C Validator', 'axe DevTools'], es: ['WAVE', 'W3C Validator', 'axe DevTools'] },
      handoff: { en: ['MDN Web Docs', 'Can I Use', 'HTML5 Doctor'], es: ['MDN Web Docs', 'Can I Use', 'HTML5 Doctor'] }
    },
    howToValidate: {
      what: { en: 'Validate your HTML is well-structured, accessible, and semantic.', es: 'Valida que tu HTML es accesible y semántico.' },
      methods: { en: ['W3C Validator', 'Screen reader test (VoiceOver/NVDA)', 'HeadingsMap extension', 'Tab navigation test'], es: ['W3C Validator', 'Test con lector de pantalla', 'Extensión HeadingsMap', 'Test de navegación Tab'] },
      tools: { en: ['W3C Validator', 'WAVE', 'axe DevTools', 'HeadingsMap'], es: ['W3C Validator', 'WAVE', 'axe DevTools', 'HeadingsMap'] },
      evidenceExample: { en: 'A semantic refactor reduced accessibility violations from 47 to 0, improved SEO by 3 positions, cut screen-reader task time 40%.', es: 'Un refactor semántico redujo violaciones de 47 a 0, mejoró SEO 3 posiciones, redujo tiempo de tarea 40%.' }
    },
    quiz: [
      { question: { en: 'Which element for main navigation?', es: '¿Qué elemento para la navegación principal?' }, options: { en: ['<div class="nav">', '<nav>', '<menu>', '<header>'], es: ['<div class="nav">', '<nav>', '<menu>', '<header>'] }, correctIndex: 1, explanation: { en: '<nav> semantically identifies navigation for screen readers and SEO.', es: '<nav> identifica semánticamente la navegación.' } },
      { question: { en: 'Why must <img> have alt text?', es: '¿Por qué <img> necesita alt text?' }, options: { en: ['Faster loading', 'SEO boost', 'Screen readers describe the image', 'Enable lazy loading'], es: ['Carga rápida', 'Mejorar SEO', 'Lectores de pantalla describen la imagen', 'Habilitar lazy loading'] }, correctIndex: 2, explanation: { en: 'Alt text provides text alternative for screen reader users.', es: 'Alt text provee alternativa textual para lectores de pantalla.' } }
    ],
    realExample: {
      title: { en: 'Gov.uk: Semantic HTML as a Design Principle', es: 'Gov.uk: HTML Semántico como Principio de Diseño' },
      description: { en: 'Gov.uk uses proper heading hierarchy, semantic landmarks, labeled forms, descriptive links. Result: near-perfect accessibility scores.', es: 'Gov.uk usa jerarquía de encabezados, landmarks semánticos, formularios con labels. Resultado: puntajes de accesibilidad casi perfectos.' },
      company: 'GOV.UK'
    },
    aiInPractice: {
      description: { en: 'Use AI to learn HTML and validate code.', es: 'Usa IA para aprender HTML y validar código.' },
      prompts: [{ tool: 'ChatGPT', context: { en: 'HTML review', es: 'Revisión HTML' }, prompt: { en: 'Review this HTML for semantics, accessibility, and best practices: [paste HTML]', es: 'Revisa este HTML para semántica, accesibilidad y mejores prácticas: [pegar HTML]' } }]
    }
  }
};

export const cssFundamentalsLesson = {
  id: 'css-fundamentals',
  title: { en: 'CSS Fundamentals', es: 'Fundamentos de CSS' },
  description: { en: 'Master styling, layout, and responsive design with CSS.', es: 'Domina estilos, layout y diseño responsivo con CSS.' },
  status: 'beginner' as const,
  timeEstimate: '2h',
  reference: { en: 'MDN — CSS First Steps', es: 'MDN — Primeros Pasos con CSS' },
  referenceLink: 'https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps',
  content: {
    definition: {
      en: 'CSS (Cascading Style Sheets) controls how HTML elements look — colors, fonts, spacing, layout, animations, and responsive behavior. HTML defines WHAT, CSS defines HOW it appears.',
      es: 'CSS (Cascading Style Sheets) controla cómo se ven los elementos HTML — colores, fuentes, espaciado, layout, animaciones. HTML define QUÉ, CSS define CÓMO aparece.'
    },
    why: {
      en: 'CSS bridges Figma designs and what users see. Understanding CSS helps you design buildable layouts, use spacing that maps to code, and communicate precisely with developers.',
      es: 'CSS es el puente entre Figma y lo que los usuarios ven. Te ayuda a diseñar layouts construibles y comunicarte con precisión con desarrolladores.'
    },
    keyPrinciples: {
      en: [
        'Box Model: content + padding + border + margin. THE most important CSS concept.',
        'Selectors & Specificity: inline > #id > .class > element. More specific rules win.',
        'Flexbox: 1D layout. justify-content (main axis), align-items (cross axis), gap.',
        'CSS Grid: 2D layout. grid-template-columns, grid-template-rows.',
        'Responsive Design: @media queries, rem/%, vw/vh, mobile-first.',
        'Transitions: transition for state changes. @keyframes for complex animations.',
        'CSS Variables: --variable-name for reusable design tokens.',
        'Modern: Container queries, clamp(), aspect-ratio, :has().'
      ],
      es: [
        'Modelo de Caja: contenido + padding + border + margin. EL concepto más importante.',
        'Selectores: inline > #id > .clase > elemento. La más específica gana.',
        'Flexbox: Layout 1D. justify-content, align-items, gap.',
        'CSS Grid: Layout 2D. grid-template-columns, grid-template-rows.',
        'Responsivo: @media queries, rem/%, vw/vh, mobile-first.',
        'Transiciones: transition para estados. @keyframes para animaciones complejas.',
        'Variables CSS: --nombre-variable para tokens reutilizables.',
        'Moderno: Container queries, clamp(), aspect-ratio, :has().'
      ]
    },
    commonMistakes: {
      en: ['Not using box-sizing: border-box.', 'Fighting specificity with !important.', 'Float for layout (use Flexbox/Grid).', 'No overflow handling.', 'Not testing on real devices.', 'Over-animating (only opacity, transform, filter perform well).'],
      es: ['No usar box-sizing: border-box.', 'Pelear especificidad con !important.', 'Float para layout (usa Flexbox/Grid).', 'Sin manejo de overflow.', 'No probar en dispositivos reales.', 'Sobre-animar (solo opacity, transform, filter rinden bien).']
    },
    howToApply: {
      steps: [
        { name: { en: 'Master Box Model', es: 'Dominar Box Model' }, description: { en: 'Use DevTools to inspect elements, toggle box-sizing, adjust margin/padding.', es: 'Usa DevTools para inspeccionar, ajustar margin/padding.' } },
        { name: { en: 'Build with Flexbox', es: 'Construir con Flexbox' }, description: { en: 'Create navbar, card grid, footer with Flexbox.', es: 'Crea navbar, grid de tarjetas, footer con Flexbox.' } },
        { name: { en: 'Go Responsive', es: 'Hacerlo Responsivo' }, description: { en: 'Add media queries. Mobile-first (320px), breakpoints at 768px, 1024px.', es: 'Agrega media queries. Mobile-first (320px), breakpoints en 768px, 1024px.' } },
        { name: { en: 'Add Interactions', es: 'Agregar Interacciones' }, description: { en: 'Hover, focus, transitions. transition: all 0.2s ease.', es: 'Hover, focus, transiciones. transition: all 0.2s ease.' } }
      ]
    },
    deliverables: {
      description: { en: 'CSS projects for your portfolio.', es: 'Proyectos CSS para tu portafolio.' },
      items: { en: ['Responsive Landing Page', 'CSS Component Library', 'Animation Showcase', 'Dark/Light Theme'], es: ['Landing Page Responsiva', 'Librería CSS', 'Showcase de Animaciones', 'Tema Dark/Light'] }
    },
    practicalTools: {
      design: { en: ['Chrome DevTools', 'Figma tokens', 'CSS Gradient Generator'], es: ['Chrome DevTools', 'Tokens Figma', 'CSS Gradient Generator'] },
      research: { en: ['Can I Use', 'CSS-Tricks', 'Flexbox Froggy / Grid Garden'], es: ['Can I Use', 'CSS-Tricks', 'Flexbox Froggy / Grid Garden'] },
      handoff: { en: ['Tailwind CSS', 'PostCSS', 'Sass'], es: ['Tailwind CSS', 'PostCSS', 'Sass'] }
    },
    howToValidate: {
      what: { en: 'Validate CSS creates consistent, responsive, performant interfaces.', es: 'Valida que tu CSS crea interfaces consistentes y responsivas.' },
      methods: { en: ['Cross-browser testing', 'Responsive testing at key viewports', 'Lighthouse performance', 'Visual regression with Percy'], es: ['Testing cross-browser', 'Testing responsivo', 'Rendimiento Lighthouse', 'Regresión visual con Percy'] },
      tools: { en: ['BrowserStack', 'Lighthouse', 'Percy', 'Responsively App'], es: ['BrowserStack', 'Lighthouse', 'Percy', 'Responsively App'] },
      evidenceExample: { en: 'Switching from float to Flexbox/Grid reduced CSS 40%, eliminated 12 bugs, Lighthouse improved from 72 to 95.', es: 'Cambiar de float a Flexbox/Grid redujo CSS 40%, eliminó 12 bugs, Lighthouse de 72 a 95.' }
    },
    quiz: [
      { question: { en: 'Box model order from inside to outside?', es: '¿Orden del box model de adentro hacia afuera?' }, options: { en: ['Margin → Border → Padding → Content', 'Content → Padding → Border → Margin', 'Content → Margin → Padding → Border', 'Border → Content → Padding → Margin'], es: ['Margin → Border → Padding → Contenido', 'Contenido → Padding → Border → Margin', 'Contenido → Margin → Padding → Border', 'Border → Contenido → Padding → Margin'] }, correctIndex: 1, explanation: { en: 'Content → Padding → Border → Margin.', es: 'Contenido → Padding → Border → Margin.' } },
      { question: { en: 'Best CSS method for two-dimensional layouts?', es: '¿Mejor método CSS para layouts 2D?' }, options: { en: ['Flexbox', 'Float', 'CSS Grid', 'Position: absolute'], es: ['Flexbox', 'Float', 'CSS Grid', 'Position: absolute'] }, correctIndex: 2, explanation: { en: 'CSS Grid handles rows AND columns simultaneously.', es: 'CSS Grid maneja filas Y columnas simultáneamente.' } }
    ],
    realExample: {
      title: { en: 'Stripe: CSS as a Competitive Advantage', es: 'Stripe: CSS como Ventaja Competitiva' },
      description: { en: 'Stripe uses CSS Grid, custom properties, GPU-accelerated animations, and mobile-first approach. Their gradient animations with @keyframes prove CSS alone creates stunning visuals.', es: 'Stripe usa CSS Grid, custom properties, animaciones GPU, y mobile-first. Sus gradientes con @keyframes demuestran que CSS solo crea visuales impresionantes.' },
      company: 'Stripe'
    },
    aiInPractice: {
      description: { en: 'Use AI to debug CSS and learn layout techniques.', es: 'Usa IA para depurar CSS y aprender layout.' },
      prompts: [{ tool: 'ChatGPT', context: { en: 'CSS debugging', es: 'Depuración CSS' }, prompt: { en: 'My flexbox container isn\'t centering vertically. I have display: flex and justify-content: center. What am I missing?', es: 'Mi contenedor flexbox no centra verticalmente. Tengo display: flex y justify-content: center. ¿Qué falta?' } }]
    }
  }
};

export const introJavaScriptLesson = {
  id: 'intro-javascript',
  title: { en: 'Intro to JavaScript', es: 'Introducción a JavaScript' },
  description: { en: 'Understand the language that powers web interactivity — with runnable examples.', es: 'Entiende el lenguaje que impulsa la interactividad web — con ejemplos ejecutables.' },
  status: 'beginner' as const,
  timeEstimate: '2h',
  reference: { en: 'javascript.info — The Modern JavaScript Tutorial', es: 'javascript.info — Tutorial Moderno de JavaScript' },
  referenceLink: 'https://javascript.info/',
  content: {
    definition: {
      en: 'JavaScript (JS) is the programming language of the web. While HTML structures content and CSS styles it, JavaScript makes it interactive — handling clicks, validating forms, fetching data, animating elements, and building entire applications.',
      es: 'JavaScript (JS) es el lenguaje de programación de la web. Mientras HTML estructura y CSS da estilo, JavaScript lo hace interactivo — manejando clics, validando formularios, obteniendo datos y construyendo aplicaciones.'
    },
    why: {
      en: 'Understanding JavaScript helps you: design realistic interactions, prototype with React, understand component logic (state, props, events), communicate with developers, and build your own tools and automations.',
      es: 'Entender JavaScript te ayuda a: diseñar interacciones realistas, prototipar con React, entender lógica de componentes, comunicarte con desarrolladores, y construir tus propias herramientas.'
    },
    keyPrinciples: {
      en: [
        'Variables: const (immutable), let (mutable). Types: string, number, boolean, null, undefined, object, array.',
        'Functions: Arrow functions (const fn = () => {}). .map(), .filter(), .find() are essential in React.',
        'Conditionals: if/else, ternary (a ? b : c), optional chaining (?.), nullish coalescing (??).',
        'DOM: querySelector(), textContent, style, classList — how JS changes HTML.',
        'Events: click, input, submit, scroll, keydown. React: onClick, onChange, onSubmit.',
        'Async: fetch() for APIs. Promises and async/await for asynchronous operations.',
        'ES6+: Destructuring, spread, template literals, import/export modules.',
        'Frameworks: React (Meta), Vue (community), Angular (Google), Svelte (compiler). React dominates.'
      ],
      es: [
        'Variables: const (inmutable), let (mutable). Tipos: string, number, boolean, null, undefined, object, array.',
        'Funciones: Arrow functions (const fn = () => {}). .map(), .filter(), .find() son esenciales en React.',
        'Condicionales: if/else, ternario (a ? b : c), optional chaining (?.), nullish coalescing (??).',
        'DOM: querySelector(), textContent, style, classList — cómo JS cambia HTML.',
        'Eventos: click, input, submit, scroll, keydown. React: onClick, onChange, onSubmit.',
        'Async: fetch() para APIs. Promesas y async/await para operaciones asíncronas.',
        'ES6+: Destructuring, spread, template literals, módulos import/export.',
        'Frameworks: React (Meta), Vue (comunidad), Angular (Google), Svelte (compilador). React domina.'
      ]
    },
    commonMistakes: {
      en: ['Using var instead of const/let.', 'Confusing = with === (always use ===).', 'Not handling errors in async code.', 'Mutating state directly in React.', 'Not understanding "this".', 'Over-engineering with JS what CSS can do.'],
      es: ['Usar var en vez de const/let.', 'Confundir = con ===.', 'No manejar errores async.', 'Mutar estado directamente en React.', 'No entender "this".', 'Sobrecomplicar con JS lo que CSS puede hacer.']
    },
    howToApply: {
      steps: [
        { name: { en: 'Learn Basics', es: 'Aprender Básicos' }, description: { en: 'Variables, functions, conditionals. Use Chrome DevTools console or CodePen.', es: 'Variables, funciones, condicionales. Usa consola de Chrome DevTools o CodePen.' } },
        { name: { en: 'Manipulate DOM', es: 'Manipular DOM' }, description: { en: 'Change text, colors, visibility with querySelector() and addEventListener().', es: 'Cambia texto, colores, visibilidad con querySelector() y addEventListener().' } },
        { name: { en: 'Build a Project', es: 'Construir Proyecto' }, description: { en: 'Todo list, calculator, or quiz using vanilla JS.', es: 'To-do list, calculadora o quiz con vanilla JS.' } },
        { name: { en: 'Try React', es: 'Probar React' }, description: { en: 'Components, JSX, hooks (useState, useEffect). Start with Vite.', es: 'Componentes, JSX, hooks (useState, useEffect). Empieza con Vite.' } }
      ]
    },
    deliverables: {
      description: { en: 'JavaScript projects for your portfolio.', es: 'Proyectos JavaScript para tu portafolio.' },
      items: { en: ['Interactive Quiz', 'API Data Project', 'React Component', 'Node.js Automation Script'], es: ['Quiz Interactivo', 'Proyecto con API', 'Componente React', 'Script Node.js'] }
    },
    practicalTools: {
      design: { en: ['VS Code + ESLint', 'CodePen / StackBlitz', 'React DevTools'], es: ['VS Code + ESLint', 'CodePen / StackBlitz', 'React DevTools'] },
      research: { en: ['MDN Web Docs', 'javascript.info', 'freeCodeCamp'], es: ['MDN Web Docs', 'javascript.info', 'freeCodeCamp'] },
      handoff: { en: ['GitHub', 'npm', 'Vite'], es: ['GitHub', 'npm', 'Vite'] }
    },
    howToValidate: {
      what: { en: 'Validate JavaScript understanding through projects.', es: 'Valida tu JS con proyectos prácticos.' },
      methods: { en: ['Build 3 small projects', 'Contribute to open-source', 'Complete freeCodeCamp JS certification', 'Pair program with a developer'], es: ['Construye 3 proyectos', 'Contribuye a open-source', 'Certifícate en freeCodeCamp JS', 'Pair program con un dev'] },
      tools: { en: ['freeCodeCamp', 'Exercism', 'LeetCode (easy)', 'GitHub'], es: ['freeCodeCamp', 'Exercism', 'LeetCode (fácil)', 'GitHub'] },
      evidenceExample: { en: 'A UX designer who completed freeCodeCamp JS and built 3 React prototypes reduced dev communication cycles 50%.', es: 'Un diseñador UX con freeCodeCamp JS y 3 prototipos React redujo ciclos de comunicación dev un 50%.' }
    },
    quiz: [
      { question: { en: 'Difference between let and const?', es: '¿Diferencia entre let y const?' }, options: { en: ['let is faster', 'const can be reassigned', 'let can be reassigned, const cannot', 'No difference'], es: ['let es más rápido', 'const se puede reasignar', 'let se puede reasignar, const no', 'No hay diferencia'] }, correctIndex: 2, explanation: { en: 'const cannot be reassigned. Use const by default.', es: 'const no se puede reasignar. Usa const por defecto.' } },
      { question: { en: 'Most used array method in React for lists?', es: '¿Método de array más usado en React para listas?' }, options: { en: ['.forEach()', '.map()', '.filter()', '.reduce()'], es: ['.forEach()', '.map()', '.filter()', '.reduce()'] }, correctIndex: 1, explanation: { en: '.map() returns a new array — used to render component lists in JSX.', es: '.map() retorna un nuevo array — usado para renderizar listas en JSX.' } }
    ],
    realExample: {
      title: { en: 'Figma: Built with JavaScript', es: 'Figma: Construido con JavaScript' },
      description: { en: 'Figma is built with web tech — JavaScript/TypeScript, WebGL, WebAssembly. The plugin API is JS, so designers who learn JS can build custom plugins. React powers Figma\'s UI panels.', es: 'Figma está construido con tech web — JavaScript/TypeScript, WebGL, WebAssembly. La API de plugins es JS, así que diseñadores que aprenden JS pueden construir plugins. React potencia los paneles UI.' },
      company: 'Figma'
    },
    aiInPractice: {
      description: { en: 'Use AI to learn JS concepts and debug code.', es: 'Usa IA para aprender JS y depurar código.' },
      prompts: [
        { tool: 'ChatGPT', context: { en: 'Learning', es: 'Aprendizaje' }, prompt: { en: 'Explain promises and async/await like I\'m a designer. Use a real-world analogy, then show code.', es: 'Explícame promesas y async/await como diseñador. Usa analogía real, luego muestra código.' } },
        { tool: 'ChatGPT', context: { en: 'Code review', es: 'Revisión' }, prompt: { en: 'Review this JavaScript for readability, modern syntax, and error handling: [paste code]', es: 'Revisa este JS para legibilidad, sintaxis moderna y manejo de errores: [pegar código]' } }
      ]
    }
  }
};
