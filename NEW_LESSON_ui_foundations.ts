// LESSON C: UI Foundations (Typography Scale, Spacing System, Contrast, Layout Principles)
// INSERT INTO: foundations track, after wireframing-prototyping
// STATUS: COMPLETE - Ready for content.ts

{
  id: 'ui-foundations',
  title: { 
    en: 'UI Foundations: Typography, Spacing, Contrast & Layout', 
    es: 'Fundamentos UI: Tipografía, Espaciado, Contraste y Diseño' 
  },
  description: { 
    en: 'Building scalable, accessible interfaces with type scales, 8pt grid systems, WCAG contrast ratios, and layout principles.',
    es: 'Construir interfaces escalables y accesibles con escalas de tipo, sistemas de cuadrícula de 8pt, ratios de contraste WCAG y principios de diseño.'
  },
  status: 'beginner',
  timeEstimate: '2h 30m',
  reference: { 
    en: 'Refactoring UI - Adam Wathan & Steve Schoger', 
    es: 'Refactoring UI - Adam Wathan & Steve Schoger' 
  },
  referenceLink: 'https://m3.material.io/foundations',
  content: {
    definition: {
      en: 'UI Foundations are the visual building blocks of every interface: Typography (type scales, line heights, font families), Spacing (8pt grid, consistent margins/padding), Contrast (WCAG AA/AAA ratios for accessibility), and Layout (columns, grids, breakpoints). These create visual consistency and accessibility.',
      es: 'Los Fundamentos UI son los bloques de construcción visuales de cada interfaz: Tipografía (escalas de tipo, alturas de línea, familias de fuentes), Espaciado (cuadrícula 8pt, márgenes/padding consistentes), Contraste (ratios WCAG AA/AAA para accesibilidad) y Diseño (columnas, cuadrículas, breakpoints). Estos crean consistencia visual y accesibilidad.'
    },
    why: {
      en: 'User Impact: Bad typography = unreadable text. Bad spacing = cluttered interfaces. Bad contrast = invisible buttons (especially for low-vision users). Good foundations = scannable, accessible, professional UIs. Business Impact: Consistent UI = faster development (reuse components). Accessible UI = legal compliance + larger user base. Team Impact: Design tokens (spacing/colors) create shared language between design and dev.',
      es: 'Impacto en Usuario: Mala tipografía = texto ilegible. Mal espaciado = interfaces desordenadas. Mal contraste = botones invisibles (especialmente para usuarios con baja visión). Buenos fundamentos = UIs escaneables, accesibles, profesionales. Impacto en Negocio: UI consistente = desarrollo más rápido (reusar componentes). UI accesible = cumplimiento legal + base de usuarios más grande. Impacto en Equipos: Tokens de diseño (espaciado/colores) crean lenguaje compartido entre diseño y dev.'
    },
    keyPrinciples: {
      en: [
        'Typography Scale: Use modular scale (1.25 or 1.333 ratio). Example: 12px, 16px, 20px, 25px, 31px. Body = 16px. Headers = scale up. Captions = scale down.',
        'Spacing System: 8pt grid. Use multiples of 8: 8px, 16px, 24px, 32px, 40px, 48px, 64px. Padding, margins, gaps all follow this. Exception: 4px for micro-adjustments.',
        'Contrast Ratios: WCAG AA requires 4.5:1 for normal text, 3:1 for large text (18pt+). AAA requires 7:1. Test with tools like Stark or WebAIM.',
        'Layout: 12-column grid for desktop (1280px max-width). 4-column for mobile (375px). Use 16-24px gutters. Centered content container.',
        'Line Height: Body text = 1.5-1.6 (24-26px for 16px font). Headers = 1.2-1.3. Tight line-height = readability issues.'
      ],
      es: [
        'Escala Tipográfica: Usa escala modular (ratio 1.25 o 1.333). Ejemplo: 12px, 16px, 20px, 25px, 31px. Cuerpo = 16px. Encabezados = escalar arriba. Subtítulos = escalar abajo.',
        'Sistema de Espaciado: Cuadrícula 8pt. Usa múltiplos de 8: 8px, 16px, 24px, 32px, 40px, 48px, 64px. Padding, márgenes, gaps todos siguen esto. Excepción: 4px para micro-ajustes.',
        'Ratios de Contraste: WCAG AA requiere 4.5:1 para texto normal, 3:1 para texto grande (18pt+). AAA requiere 7:1. Prueba con herramientas como Stark o WebAIM.',
        'Diseño: Cuadrícula de 12 columnas para escritorio (1280px max-width). 4 columnas para móvil (375px). Usa gutters de 16-24px. Contenedor de contenido centrado.',
        'Altura de Línea: Texto de cuerpo = 1.5-1.6 (24-26px para fuente 16px). Encabezados = 1.2-1.3. Altura de línea ajustada = problemas de legibilidad.'
      ]
    },
    commonMistakes: {
      en: [
        'Using random spacing: 13px margin here, 17px there (no system = visual chaos). Use 8pt multiples.',
        'Too many font sizes: 10px, 12px, 14px, 15px, 16px, 17px... (pick 5-6 from a scale)',
        'Gray text on gray background: "It looks minimal!" but fails WCAG. Always check contrast.',
        'Inconsistent line-height: Body at 1.2 = squished. Headers at 2.0 = awkward gaps.',
        'No responsive breakpoints: Designing only for 1440px desktop, then wondering why mobile is broken.'
      ],
      es: [
        'Usar espaciado aleatorio: margen de 13px aquí, 17px allá (sin sistema = caos visual). Usa múltiplos de 8pt.',
        'Demasiados tamaños de fuente: 10px, 12px, 14px, 15px, 16px, 17px... (elige 5-6 de una escala)',
        'Texto gris sobre fondo gris: "¡Se ve minimalista!" pero falla WCAG. Siempre verifica contraste.',
        'Altura de línea inconsistente: Cuerpo en 1.2 = apretado. Encabezados en 2.0 = espacios incómodos.',
        'Sin breakpoints responsivos: Diseñar solo para escritorio 1440px, luego preguntarse por qué móvil está roto.'
      ]
    },
    howToApply: {
      steps: [
        {
          name: { en: 'Step 1: Define Type Scale', es: 'Paso 1: Definir Escala de Tipo' },
          description: { 
            en: 'Choose base size (16px for body). Pick ratio (1.25 recommended). Generate scale using Type Scale tool. Example: 12px caption, 16px body, 20px subtitle, 25px H3, 31px H2, 39px H1. Document in design system.',
            es: 'Elige tamaño base (16px para cuerpo). Elige ratio (1.25 recomendado). Genera escala usando herramienta Type Scale. Ejemplo: 12px subtítulo, 16px cuerpo, 20px subtítulo, 25px H3, 31px H2, 39px H1. Documenta en sistema de diseño.'
          }
        },
        {
          name: { en: 'Step 2: Set up 8pt Grid', es: 'Paso 2: Configurar Cuadrícula 8pt' },
          description: { 
            en: 'Create spacing tokens: xs=4px, sm=8px, md=16px, lg=24px, xl=32px, 2xl=48px, 3xl=64px. Use these for all padding, margins, gaps. In Figma: Enable 8px grid overlay (View > Layout Grids).',
            es: 'Crea tokens de espaciado: xs=4px, sm=8px, md=16px, lg=24px, xl=32px, 2xl=48px, 3xl=64px. Usa estos para todos padding, márgenes, gaps. En Figma: Habilita superposición de cuadrícula 8px (Ver > Cuadrículas de Diseño).'
          }
        },
        {
          name: { en: 'Step 3: Check Contrast', es: 'Paso 3: Verificar Contraste' },
          description: { 
            en: 'For every text + background combo, test contrast. Use Stark plugin (Figma) or WebAIM checker. Body text must be 4.5:1 minimum. Large text (18pt+) can be 3:1. Icons need 3:1. Fix fails by darkening text or lightening background.',
            es: 'Para cada combinación texto + fondo, prueba contraste. Usa plugin Stark (Figma) o verificador WebAIM. Texto de cuerpo debe ser 4.5:1 mínimo. Texto grande (18pt+) puede ser 3:1. Iconos necesitan 3:1. Corrige fallas oscureciendo texto o aclarando fondo.'
          }
        },
        {
          name: { en: 'Step 4: Build Layout Grid', es: 'Paso 4: Construir Cuadrícula de Diseño' },
          description: { 
            en: 'Desktop: 12 columns, 1280px max-width, 24px gutter. Tablet: 8 columns, 768px, 16px gutter. Mobile: 4 columns, 375px, 16px gutter. Center content. Use Auto Layout in Figma for responsive behavior.',
            es: 'Escritorio: 12 columnas, 1280px max-width, 24px gutter. Tablet: 8 columnas, 768px, 16px gutter. Móvil: 4 columnas, 375px, 16px gutter. Centrar contenido. Usa Auto Layout en Figma para comportamiento responsivo.'
          }
        },
        {
          name: { en: 'Step 5: Create Design Tokens', es: 'Paso 5: Crear Tokens de Diseño' },
          description: { 
            en: 'Document all decisions in a shared file: Typography (font-size, line-height, font-weight), Spacing (margin/padding values), Colors (with contrast ratios), Layout (breakpoints). Export as CSS variables or Figma Styles for developer handoff.',
            es: 'Documenta todas las decisiones en un archivo compartido: Tipografía (font-size, line-height, font-weight), Espaciado (valores de margin/padding), Colores (con ratios de contraste), Diseño (breakpoints). Exporta como variables CSS o Estilos Figma para handoff de desarrollador.'
          }
        }
      ]
    },
    deliverables: {
      description: { 
        en: 'Concrete UI foundation artifacts that developers can implement and designers can reuse.',
        es: 'Artefactos concretos de fundamentos UI que los desarrolladores pueden implementar y los diseñadores pueden reusar.'
      },
      items: {
        en: [
          'Typography System: Figma text styles for H1-H6, body, caption + line-heights documented',
          'Spacing Tokens: List of spacing values (8, 16, 24, 32...) with usage examples (padding-md = 16px)',
          'Color Palette: Swatches with HEX codes + contrast ratio labels (e.g., "Text/Primary: #1A1A1A on #FFFFFF = 17.5:1 ✓")',
          'Layout Grid Templates: Figma frames with 12/8/4 column grids for desktop/tablet/mobile',
          'Accessibility Report: List of all text/bg combos tested with WCAG pass/fail status'
        ],
        es: [
          'Sistema Tipográfico: Estilos de texto Figma para H1-H6, cuerpo, subtítulo + alturas de línea documentadas',
          'Tokens de Espaciado: Lista de valores de espaciado (8, 16, 24, 32...) con ejemplos de uso (padding-md = 16px)',
          'Paleta de Colores: Muestras con códigos HEX + etiquetas de ratio de contraste (ej. "Texto/Principal: #1A1A1A en #FFFFFF = 17.5:1 ✓")',
          'Plantillas de Cuadrícula de Diseño: Marcos Figma con cuadrículas de 12/8/4 columnas para escritorio/tablet/móvil',
          'Informe de Accesibilidad: Lista de todas las combos texto/fondo probadas con estado WCAG pasar/fallar'
        ]
      }
    },
    practicalTools: {
      design: { 
        en: [
          'Figma (Styles, Variables, Auto Layout, Layout Grids)',
          'Type Scale Calculator (https://typescale.com/)',
          'Stark plugin (contrast checker)',
          'Material Design Guidelines (reference)'
        ], 
        es: [
          'Figma (Estilos, Variables, Auto Layout, Cuadrículas de Diseño)',
          'Calculadora Type Scale (https://typescale.com/)',
          'Plugin Stark (verificador de contraste)',
          'Guías Material Design (referencia)'
        ] 
      },
      research: { 
        en: ['WebAIM Contrast Checker', 'WAVE (accessibility validator)', 'Lighthouse (Chrome DevTools)'], 
        es: ['Verificador de Contraste WebAIM', 'WAVE (validador de accesibilidad)', 'Lighthouse (Chrome DevTools)'] 
      },
      handoff: { 
        en: ['Figma Dev Mode', 'Zeplin', 'CSS variable export', 'Storybook (for component library)'], 
        es: ['Figma Dev Mode', 'Zeplin', 'Exportación de variables CSS', 'Storybook (para biblioteca de componentes)'] 
      }
    },
    aiInPractice: {
      description: { 
        en: 'AI can generate design systems, calculate scales, and validate accessibility - but cannot replace visual judgment.',
        es: 'La IA puede generar sistemas de diseño, calcular escalas y validar accesibilidad - pero no puede reemplazar el juicio visual.'
      },
      prompts: [
        {
          tool: 'ChatGPT',
          context: { en: 'Creating type scale', es: 'Creando escala de tipo' },
          prompt: { 
            en: 'Generate a modular type scale with base size 16px and ratio 1.25. Provide 8 sizes (from caption to H1) with: (1) px value, (2) rem value, (3) usage (e.g., "H1: 39px / 2.44rem - Hero titles"). Also suggest line-heights.',
            es: 'Genera una escala de tipo modular con tamaño base 16px y ratio 1.25. Proporciona 8 tamaños (de subtítulo a H1) con: (1) valor px, (2) valor rem, (3) uso (ej. "H1: 39px / 2.44rem - Títulos hero"). También sugiere alturas de línea.'
          }
        },
        {
          tool: 'ChatGPT',
          context: { en: 'Spacing system', es: 'Sistema de espaciado' },
          prompt: { 
            en: 'Create an 8pt spacing system with token names and values. Include: (1) Base values (xs to 3xl). (2) Usage guidelines (e.g., "md (16px): Use for card padding"). (3) CSS variables format (--spacing-md: 16px).',
            es: 'Crea un sistema de espaciado 8pt con nombres de tokens y valores. Incluye: (1) Valores base (xs a 3xl). (2) Guías de uso (ej. "md (16px): Usa para padding de tarjeta"). (3) Formato de variables CSS (--spacing-md: 16px).'
          }
        },
        {
          tool: 'V0/Bolt',
          context: { en: 'Prototyping with design system', es: 'Prototipando con sistema de diseño' },
          prompt: { 
            en: 'Create a React component card using this design system [paste typography/spacing tokens]. The card should have: (1) H3 title (text-xl), (2) Body text (text-base, line-height 1.5), (3) Padding md (16px), (4) Gap between elements sm (8px). Make it responsive.',
            es: 'Crea una tarjeta de componente React usando este sistema de diseño [pegar tokens de tipografía/espaciado]. La tarjeta debe tener: (1) Título H3 (text-xl), (2) Texto de cuerpo (text-base, line-height 1.5), (3) Padding md (16px), (4) Gap entre elementos sm (8px). Hazla responsiva.'
          }
        }
      ]
    },
    howToValidate: {
      what: { 
        en: 'Validate that your UI foundations are accessible (WCAG compliance), consistent (design tokens applied), and scalable (works at all breakpoints).',
        es: 'Valida que tus fundamentos UI sean accesibles (cumplimiento WCAG), consistentes (tokens de diseño aplicados) y escalables (funciona en todos los breakpoints).'
      },
      methods: { 
        en: [
          'Contrast Audit: Test every text/bg combo with Stark or WebAIM. Fix failures before handoff.',
          'Design QA: Check 10 screens - are spacing values all multiples of 8? Are font sizes from the scale?',
          'Responsive Testing: View designs at 375px (mobile), 768px (tablet), 1280px (desktop). Does layout break?',
          'Developer Review: Have a frontend dev check if design tokens are implementable in code.'
        ],
        es: [
          'Auditoría de Contraste: Prueba cada combo texto/fondo con Stark o WebAIM. Corrige fallas antes del handoff.',
          'QA de Diseño: Verifica 10 pantallas - ¿son todos los valores de espaciado múltiplos de 8? ¿Los tamaños de fuente son de la escala?',
          'Pruebas Responsivas: Ve diseños a 375px (móvil), 768px (tablet), 1280px (escritorio). ¿Se rompe el diseño?',
          'Revisión de Desarrollador: Que un dev frontend verifique si los tokens de diseño son implementables en código.'
        ]
      },
      tools: { 
        en: ['Stark (Figma plugin)', 'WebAIM Contrast Checker', 'Figma Dev Mode', 'Browser DevTools'], 
        es: ['Stark (plugin Figma)', 'Verificador de Contraste WebAIM', 'Figma Dev Mode', 'DevTools del Navegador'] 
      },
      evidenceExample: { 
        en: 'Contrast Audit: 45 text/bg combinations tested. 43 pass WCAG AA (4.5:1+). 2 fail: Light gray captions on white (3.2:1). Fixed by darkening to #5A5A5A (4.6:1). Spacing QA: 8/10 screens use 8pt grid. 2 have manual adjustments flagged for cleanup.',
        es: 'Auditoría de Contraste: 45 combinaciones texto/fondo probadas. 43 pasan WCAG AA (4.5:1+). 2 fallan: Subtítulos gris claro en blanco (3.2:1). Corregido oscureciendo a #5A5A5A (4.6:1). QA de Espaciado: 8/10 pantallas usan cuadrícula 8pt. 2 tienen ajustes manuales marcados para limpieza.'
      }
    },
    quiz: [
      {
        question: { 
          en: 'What is the minimum WCAG AA contrast ratio for normal body text?', 
          es: '¿Cuál es el ratio de contraste WCAG AA mínimo para texto de cuerpo normal?' 
        },
        options: {
          en: ['3:1', '4.5:1', '7:1', '21:1'],
          es: ['3:1', '4.5:1', '7:1', '21:1']
        },
        correctIndex: 1,
        explanation: {
          en: 'Why it matters: WCAG AA requires 4.5:1 for normal text (under 18pt) and 3:1 for large text (18pt+). This ensures readability for users with low vision, color blindness, or viewing screens in bright sunlight. Gray text on light gray backgrounds often fails this test. Use Stark or WebAIM to check before shipping.',
          es: 'Por qué importa: WCAG AA requiere 4.5:1 para texto normal (bajo 18pt) y 3:1 para texto grande (18pt+). Esto asegura legibilidad para usuarios con baja visión, daltonismo o viendo pantallas bajo luz solar brillante. Texto gris en fondos gris claro a menudo falla esta prueba. Usa Stark o WebAIM para verificar antes de enviar.'
        }
      },
      {
        question: { 
          en: 'Why use an 8pt spacing grid?', 
          es: '¿Por qué usar una cuadrícula de espaciado de 8pt?' 
        },
        options: {
          en: [
            'It looks pretty',
            'Most screens are divisible by 8',
            'Creates consistency and aligns with device pixel grids',
            'Steve Jobs said so'
          ],
          es: [
            'Se ve bonito',
            'La mayoría de pantallas son divisibles por 8',
            'Crea consistencia y se alinea con cuadrículas de píxeles de dispositivo',
            'Steve Jobs lo dijo'
          ]
        },
        correctIndex: 2,
        explanation: {
          en: 'Why it matters: 8pt grids create visual consistency (all spacing values related: 8, 16, 24, 32...) and align with device pixel grids (screens render at 1x, 2x, 3x densities - 8 is divisible by these). Without a system, designers use random values (13px here, 17px there) causing visual chaos and slower development (devs must manually adjust every spacing value).',
          es: 'Por qué importa: Las cuadrículas 8pt crean consistencia visual (todos los valores de espaciado relacionados: 8, 16, 24, 32...) y se alinean con cuadrículas de píxeles de dispositivo (pantallas renderizan a densidades 1x, 2x, 3x - 8 es divisible por estos). Sin un sistema, diseñadores usan valores aleatorios (13px aquí, 17px allá) causando caos visual y desarrollo más lento (devs deben ajustar manualmente cada valor de espaciado).'
        }
      },
      {
        question: { 
          en: 'Your design has 12 different font sizes (10px, 11px, 12px, 13px...). What should you do?', 
          es: 'Tu diseño tiene 12 tamaños de fuente diferentes (10px, 11px, 12px, 13px...). ¿Qué deberías hacer?' 
        },
        options: {
          en: [
            'Keep all 12 for maximum flexibility',
            'Consolidate into 5-6 sizes using a modular scale',
            'Use only 1 size for consistency',
            'Ask developers which they prefer'
          ],
          es: [
            'Mantener los 12 para máxima flexibilidad',
            'Consolidar en 5-6 tamaños usando una escala modular',
            'Usar solo 1 tamaño para consistencia',
            'Preguntar a desarrolladores cuál prefieren'
          ]
        },
        correctIndex: 1,
        explanation: {
          en: 'Why it matters: Too many font sizes = visual inconsistency and development nightmare. Developers must create 12 CSS classes. Instead, use a modular scale (e.g., 12px caption, 16px body, 20px subtitle, 25px H3, 31px H2, 39px H1) - mathematically related sizes that create harmony. Too few sizes (like only 1) removes hierarchy. 5-6 sizes is the sweet spot.',
          es: 'Por qué importa: Demasiados tamaños de fuente = inconsistencia visual y pesadilla de desarrollo. Los desarrolladores deben crear 12 clases CSS. En su lugar, usa una escala modular (ej. 12px subtítulo, 16px cuerpo, 20px subtítulo, 25px H3, 31px H2, 39px H1) - tamaños matemáticamente relacionados que crean armonía. Muy pocos tamaños (como solo 1) elimina jerarquía. 5-6 tamaños es el punto óptimo.'
        }
      }
    ],
    realExample: {
      title: { 
        en: 'Airbnb Design System: Good vs Bad Foundations', 
        es: 'Sistema de Diseño Airbnb: Buenos vs Malos Fundamentos' 
      },
      description: {
        en: 'GOOD: Airbnb uses a strict 8pt spacing system (8, 16, 24, 32, 40, 48...) across all platforms. Their type scale has 6 sizes (12, 14, 16, 18, 24, 32) applied consistently. All text passes WCAG AA (4.5:1+ contrast). Result: Developers can build new features 2x faster using design tokens. BAD: Before their design system, designers used random spacing (13px, 19px, 23px...) causing inconsistency. Colors had poor contrast (gray on gray = WCAG fail). Developers spent hours manually adjusting values. Implementation time: 3x longer. Technical debt: High.',
        es: 'BUENO: Airbnb usa un sistema de espaciado 8pt estricto (8, 16, 24, 32, 40, 48...) en todas las plataformas. Su escala de tipo tiene 6 tamaños (12, 14, 16, 18, 24, 32) aplicados consistentemente. Todo el texto pasa WCAG AA (4.5:1+ contraste). Resultado: Los desarrolladores pueden construir nuevas características 2x más rápido usando tokens de diseño. MALO: Antes de su sistema de diseño, diseñadores usaban espaciado aleatorio (13px, 19px, 23px...) causando inconsistencia. Los colores tenían mal contraste (gris sobre gris = falla WCAG). Los desarrolladores gastaban horas ajustando valores manualmente. Tiempo de implementación: 3x más largo. Deuda técnica: Alta.'
      },
      company: 'Airbnb'
    }
  }
},

// MINI EXERCISE
miniExercise: {
  title: { en: 'Exercise: Fix the Contrast Issues', es: 'Ejercicio: Corregir Problemas de Contraste' },
  scenario: {
    en: 'A designer used these color combos. Which ones fail WCAG AA? How would you fix them?',
    es: 'Un diseñador usó estas combos de color. ¿Cuáles fallan WCAG AA? ¿Cómo las corregirías?'
  },
  colorCombos: [
    { 
      text: '#999999', 
      background: '#FFFFFF', 
      ratio: '2.8:1',
      status: { en: 'FAIL (need 4.5:1)', es: 'FALLA (necesita 4.5:1)' },
      fix: { en: 'Darken text to #767676 (4.5:1)', es: 'Oscurecer texto a #767676 (4.5:1)' }
    },
    {
      text: '#000000',
      background: '#FFFFFF',
      ratio: '21:1',
      status: { en: 'PASS (exceeds 4.5:1)', es: 'PASA (excede 4.5:1)' },
      fix: { en: 'No fix needed', es: 'No necesita corrección' }
    },
    {
      text: '#FFFFFF',
      background: '#FFD700',
      ratio: '1.3:1',
      status: { en: 'FAIL (large text needs 3:1)', es: 'FALLA (texto grande necesita 3:1)' },
      fix: { en: 'Darken background or add black text', es: 'Oscurecer fondo o agregar texto negro' }
    }
  ]
},

// CHECKLIST
checklist: {
  title: { en: 'UI Foundations Implementation Checklist', es: 'Checklist de Implementación de Fundamentos UI' },
  items: {
    en: [
      '☐ I have defined a type scale with 5-6 sizes (not random values)',
      '☐ All font sizes come from the scale (no one-offs like 17px)',
      '☐ Line-heights are set: Body = 1.5-1.6, Headers = 1.2-1.3',
      '☐ Spacing system uses 8pt grid (values: 8, 16, 24, 32, 40, 48...)',
      '☐ All padding/margins are multiples of 8 (or 4 for micro-adjustments)',
      '☐ Every text/bg combo has been contrast-tested (4.5:1 minimum)',
      '☐ All text passes WCAG AA (large text 3:1, normal text 4.5:1)',
      '☐ Layout uses 12-column grid (desktop) and 4-column (mobile)',
      '☐ Design tokens are documented (typography, spacing, colors)',
      '☐ Developer has reviewed tokens for feasibility'
    ],
    es: [
      '☐ He definido una escala de tipo con 5-6 tamaños (no valores aleatorios)',
      '☐ Todos los tamaños de fuente vienen de la escala (no únicos como 17px)',
      '☐ Alturas de línea están establecidas: Cuerpo = 1.5-1.6, Encabezados = 1.2-1.3',
      '☐ Sistema de espaciado usa cuadrícula 8pt (valores: 8, 16, 24, 32, 40, 48...)',
      '☐ Todo padding/márgenes son múltiplos de 8 (o 4 para micro-ajustes)',
      '☐ Cada combo texto/fondo ha sido probado en contraste (4.5:1 mínimo)',
      '☐ Todo texto pasa WCAG AA (texto grande 3:1, texto normal 4.5:1)',
      '☐ Diseño usa cuadrícula de 12 columnas (escritorio) y 4 columnas (móvil)',
      '☐ Tokens de diseño están documentados (tipografía, espaciado, colores)',
      '☐ Desarrollador ha revisado tokens por viabilidad'
    ]
  }
}
