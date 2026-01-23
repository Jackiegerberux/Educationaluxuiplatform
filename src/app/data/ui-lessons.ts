import type { Topic } from './content';

export const uiLessons: Topic[] = [
  {
    id: 'wireframes',
    title: { en: 'Wireframes', es: 'Wireframes' },
    description: { 
      en: 'Low-fidelity sketches focusing on structure, layout, and content hierarchy.',
      es: 'Bocetos de baja fidelidad enfocados en estructura, diseño y jerarquía de contenido.'
    },
    status: 'beginner',
    timeEstimate: '1h',
    reference: { en: 'Wireframing - NN/g', es: 'Wireframing - NN/g' },
    referenceLink: 'https://www.nngroup.com/articles/wireflows/',
    content: {
      definition: {
        en: 'Wireframes are low-fidelity representations of a design, showing layout, structure, and content placement without visual styling. They focus on functionality and user flow rather than aesthetics.',
        es: 'Los wireframes son representaciones de baja fidelidad de un diseño, mostrando diseño, estructura y colocación de contenido sin estilo visual. Se enfocan en funcionalidad y flujo de usuario en lugar de estética.'
      },
      why: {
        en: 'Wireframes let you iterate quickly on structure without getting distracted by colors, fonts, or imagery. They facilitate discussion about functionality and layout before investing time in high-fidelity designs.',
        es: 'Los wireframes te permiten iterar rápidamente sobre estructura sin distraerte con colores, fuentes o imágenes. Facilitan la discusión sobre funcionalidad y diseño antes de invertir tiempo en diseños de alta fidelidad.'
      },
      keyPrinciples: {
        en: [
          'Focus on structure: Layout, spacing, content placement',
          'No colors: Use grayscale (black, white, grays)',
          'Simple shapes: Boxes for images, lines for text, basic icons',
          'Annotations: Add notes explaining interactions and logic',
          'Multiple fidelity levels: Sketch → Low-fi digital → Mid-fi interactive'
        ],
        es: [
          'Enfoque en estructura: Diseño, espaciado, colocación de contenido',
          'Sin colores: Usa escala de grises (negro, blanco, grises)',
          'Formas simples: Cajas para imágenes, líneas para texto, iconos básicos',
          'Anotaciones: Agrega notas explicando interacciones y lógica',
          'Múltiples niveles de fidelidad: Boceto → Digital baja fidelidad → Interactivo media fidelidad'
        ]
      },
      commonMistakes: {
        en: [
          'Adding too much detail (colors, fonts, real images) too early',
          'Skipping wireframes and going straight to high-fidelity mockups',
          'Not showing interactions or states (hover, error, loading)',
          'Making wireframes too polished (defeats the purpose of quick iteration)'
        ],
        es: [
          'Agregar demasiado detalle (colores, fuentes, imágenes reales) demasiado pronto',
          'Saltarse wireframes e ir directo a mockups de alta fidelidad',
          'No mostrar interacciones o estados (hover, error, carga)',
          'Hacer wireframes demasiado pulidos (derrota el propósito de iteración rápida)'
        ]
      },
      howToApply: {
        steps: [
          {
            name: { en: 'Start with Sketches', es: 'Comenzar con Bocetos' },
            description: { 
              en: 'Use paper and pencil to quickly explore layout options. Don\'t worry about perfection - quantity over quality at this stage.',
              es: 'Usa papel y lápiz para explorar rápidamente opciones de diseño. No te preocupes por la perfección - cantidad sobre calidad en esta etapa.'
            }
          },
          {
            name: { en: 'Define Key Screens', es: 'Definir Pantallas Clave' },
            description: { 
              en: 'Identify the most important screens: homepage, key user flow screens, empty states, error states.',
              es: 'Identifica las pantallas más importantes: página de inicio, pantallas de flujo clave del usuario, estados vacíos, estados de error.'
            }
          },
          {
            name: { en: 'Create Digital Wireframes', es: 'Crear Wireframes Digitales' },
            description: { 
              en: 'Use Figma or similar tools. Keep it simple: boxes, lines, placeholder text (Lorem ipsum), simple icons.',
              es: 'Usa Figma o herramientas similares. Mantenlo simple: cajas, líneas, texto placeholder (Lorem ipsum), iconos simples.'
            }
          },
          {
            name: { en: 'Add Annotations', es: 'Agregar Anotaciones' },
            description: { 
              en: 'Explain interactions: "Clicking this button shows...", "This dropdown contains...", "Error state appears when..."',
              es: 'Explica interacciones: "Hacer clic en este botón muestra...", "Este dropdown contiene...", "El estado de error aparece cuando..."'
            }
          }
        ]
      },
      deliverables: {
        description: { en: 'Wireframe outputs.', es: 'Resultados de wireframe.' },
        items: {
          en: [
            'Low-fidelity wireframes: Key screens with basic layout',
            'User flow wireframes: Connected screens showing navigation',
            'Annotations: Notes explaining functionality',
            'Interactive prototype: Clickable wireframes (optional)'
          ],
          es: [
            'Wireframes de baja fidelidad: Pantallas clave con diseño básico',
            'Wireframes de flujo de usuario: Pantallas conectadas mostrando navegación',
            'Anotaciones: Notas explicando funcionalidad',
            'Prototipo interactivo: Wireframes clicables (opcional)'
          ]
        }
      },
      practicalTools: {
        design: { 
          en: ['Figma', 'Balsamiq', 'Sketch', 'Whimsical', 'Pen & Paper'], 
          es: ['Figma', 'Balsamiq', 'Sketch', 'Whimsical', 'Lápiz y Papel'] 
        },
        research: { en: ['Maze', 'UserTesting'], es: ['Maze', 'UserTesting'] },
        handoff: { en: ['Figma (with annotations)', 'Notion'], es: ['Figma (con anotaciones)', 'Notion'] }
      },
      realExample: {
        title: { en: 'Instagram Early Wireframes', es: 'Wireframes Tempranos de Instagram' },
        description: {
          en: 'Instagram\'s founders started with paper sketches of the core feed concept before building anything. These rough wireframes helped them validate the "photo-first" approach with early testers.',
          es: 'Los fundadores de Instagram comenzaron con bocetos en papel del concepto central del feed antes de construir nada. Estos wireframes burdos les ayudaron a validar el enfoque "foto-primero" con probadores tempranos.'
        },
        company: 'Instagram'
      }
    }
  },
  {
    id: 'visual-hierarchy',
    title: { en: 'Visual Hierarchy', es: 'Jerarquía Visual' },
    description: { 
      en: 'Organizing elements to guide user attention and indicate importance.',
      es: 'Organizar elementos para guiar la atención del usuario e indicar importancia.'
    },
    status: 'beginner',
    timeEstimate: '1h',
    reference: { en: 'Visual Hierarchy - NN/g', es: 'Jerarquía Visual - NN/g' },
    referenceLink: 'https://www.nngroup.com/articles/visual-hierarchy-ux-definition/',
    content: {
      definition: {
        en: 'Visual hierarchy is the principle of arranging elements to show their order of importance. Designers use size, color, contrast, spacing, and position to direct users\' attention to the most important elements first.',
        es: 'La jerarquía visual es el principio de organizar elementos para mostrar su orden de importancia. Los diseñadores usan tamaño, color, contraste, espaciado y posición para dirigir la atención de los usuarios a los elementos más importantes primero.'
      },
      why: {
        en: 'Users scan pages in predictable patterns (F-pattern, Z-pattern). Good visual hierarchy guides their eyes to key information and actions, reducing cognitive load and improving task completion rates.',
        es: 'Los usuarios escanean páginas en patrones predecibles (patrón F, patrón Z). Una buena jerarquía visual guía sus ojos a información y acciones clave, reduciendo la carga cognitiva y mejorando las tasas de finalización de tareas.'
      },
      keyPrinciples: {
        en: [
          'Size: Larger elements draw more attention (headings > body text)',
          'Color & Contrast: High contrast and bright colors stand out',
          'White space: Breathing room around important elements makes them stand out',
          'Position: Top-left gets seen first (in left-to-right languages)',
          'Typography: Weight (bold), style (italic), and case (UPPERCASE) create emphasis',
          'Alignment & proximity: Grouped items are perceived as related'
        ],
        es: [
          'Tamaño: Elementos más grandes atraen más atención (encabezados > texto del cuerpo)',
          'Color y Contraste: Alto contraste y colores brillantes se destacan',
          'Espacio en blanco: Espacio de respiración alrededor de elementos importantes los hace destacar',
          'Posición: Superior izquierda se ve primero (en idiomas de izquierda a derecha)',
          'Tipografía: Peso (negrita), estilo (cursiva) y caso (MAYÚSCULAS) crean énfasis',
          'Alineación y proximidad: Elementos agrupados se perciben como relacionados'
        ]
      },
      commonMistakes: {
        en: [
          'Everything is emphasized: If everything is big and bold, nothing stands out',
          'Poor contrast: Low contrast text is hard to read and fails accessibility',
          'Ignoring white space: Cramming too much content makes nothing stand out',
          'Inconsistent hierarchy: Using different styles for same-level headings'
        ],
        es: [
          'Todo está enfatizado: Si todo es grande y en negrita, nada se destaca',
          'Contraste pobre: Texto de bajo contraste es difícil de leer y falla en accesibilidad',
          'Ignorar espacio en blanco: Saturar demasiado contenido hace que nada se destaque',
          'Jerarquía inconsistente: Usar diferentes estilos para encabezados del mismo nivel'
        ]
      },
      howToApply: {
        steps: [
          {
            name: { en: 'Identify Content Priority', es: 'Identificar Prioridad de Contenido' },
            description: { 
              en: 'What should users see first? Example: Page title (primary), section headings (secondary), body text (tertiary).',
              es: '¿Qué deberían ver los usuarios primero? Ejemplo: Título de página (primario), encabezados de sección (secundario), texto del cuerpo (terciario).'
            }
          },
          {
            name: { en: 'Use Size & Weight', es: 'Usar Tamaño y Peso' },
            description: { 
              en: 'Make primary elements largest and boldest. Scale down secondary and tertiary elements proportionally.',
              es: 'Haz los elementos primarios más grandes y en negrita. Reduce secundarios y terciarios proporcionalmente.'
            }
          },
          {
            name: { en: 'Apply Contrast', es: 'Aplicar Contraste' },
            description: { 
              en: 'Use high contrast for important elements (dark on light, or vice versa). Lower contrast for less important elements.',
              es: 'Usa alto contraste para elementos importantes (oscuro sobre claro, o viceversa). Menor contraste para elementos menos importantes.'
            }
          },
          {
            name: { en: 'Add White Space', es: 'Agregar Espacio en Blanco' },
            description: { 
              en: 'Give breathing room to important elements. White space creates visual separation and draws attention.',
              es: 'Da espacio de respiración a elementos importantes. El espacio en blanco crea separación visual y atrae atención.'
            }
          }
        ]
      },
      deliverables: {
        description: { en: 'Visual hierarchy artifacts.', es: 'Artefactos de jerarquía visual.' },
        items: {
          en: [
            'Typography scale: Defined sizes for H1, H2, H3, body, captions',
            'Color palette: Primary, secondary, and neutral colors with contrast ratios',
            'Spacing system: Consistent padding and margin values',
            'Design mockups: High-fidelity designs with clear hierarchy'
          ],
          es: [
            'Escala tipográfica: Tamaños definidos para H1, H2, H3, cuerpo, leyendas',
            'Paleta de colores: Colores primarios, secundarios y neutrales con ratios de contraste',
            'Sistema de espaciado: Valores consistentes de padding y margen',
            'Mockups de diseño: Diseños de alta fidelidad con jerarquía clara'
          ]
        }
      },
      practicalTools: {
        design: { en: ['Figma', 'Sketch', 'Adobe XD'], es: ['Figma', 'Sketch', 'Adobe XD'] },
        research: { en: ['Eye-tracking studies', 'Heatmap tools (Hotjar)'], es: ['Estudios de eye-tracking', 'Herramientas de heatmap (Hotjar)'] },
        handoff: { en: ['Zeplin', 'Figma Dev Mode'], es: ['Zeplin', 'Figma Dev Mode'] }
      },
      realExample: {
        title: { en: 'Medium\'s Reading Experience', es: 'Experiencia de Lectura de Medium' },
        description: {
          en: 'Medium uses clear visual hierarchy: Large headlines, generous white space, and optimal line length create a focused reading experience. The "clap" button uses color to stand out.',
          es: 'Medium usa jerarquía visual clara: Titulares grandes, espacio en blanco generoso y longitud de línea óptima crean una experiencia de lectura enfocada. El botón "clap" usa color para destacarse.'
        },
        company: 'Medium'
      }
    }
  },
  {
    id: 'typography-fundamentals',
    title: { en: 'Typography Fundamentals', es: 'Fundamentos de Tipografía' },
    description: { 
      en: 'Choosing and using typefaces to enhance readability and communication.',
      es: 'Elegir y usar tipografías para mejorar legibilidad y comunicación.'
    },
    status: 'beginner',
    timeEstimate: '1h 15min',
    reference: { en: 'Typography in UI - Material Design', es: 'Tipografía en UI - Material Design' },
    referenceLink: 'https://material.io/design/typography',
    content: {
      definition: {
        en: 'Typography is the art and technique of arranging type to make written language legible, readable, and appealing. In UI design, it involves selecting typefaces, sizes, weights, spacing, and hierarchy.',
        es: 'La tipografía es el arte y técnica de organizar el tipo para hacer el lenguaje escrito legible, leíble y atractivo. En diseño UI, involucra seleccionar tipografías, tamaños, pesos, espaciado y jerarquía.'
      },
      why: {
        en: 'Typography accounts for 95% of web content. Poor typography makes content hard to read, increases cognitive load, and frustrates users. Good typography is invisible but improves comprehension and user experience.',
        es: 'La tipografía representa el 95% del contenido web. La mala tipografía hace que el contenido sea difícil de leer, aumenta la carga cognitiva y frustra a los usuarios. La buena tipografía es invisible pero mejora la comprensión y la experiencia del usuario.'
      },
      keyPrinciples: {
        en: [
          'Typeface selection: Serif (traditional, readable), Sans-serif (modern, clean), Monospace (code)',
          'Type scale: Establish hierarchy (H1: 32px, H2: 24px, Body: 16px, Caption: 12px)',
          'Line height: 1.5x font size for body text (improves readability)',
          'Line length: 50-75 characters per line (optimal reading)',
          'Contrast: Dark text on light background (or vice versa) with 4.5:1 ratio minimum',
          'Font pairing: Combine fonts carefully (max 2-3 typefaces per design)'
        ],
        es: [
          'Selección de tipografía: Serif (tradicional, legible), Sans-serif (moderna, limpia), Monospace (código)',
          'Escala de tipo: Establecer jerarquía (H1: 32px, H2: 24px, Cuerpo: 16px, Leyenda: 12px)',
          'Altura de línea: 1.5x tamaño de fuente para texto del cuerpo (mejora legibilidad)',
          'Longitud de línea: 50-75 caracteres por línea (lectura óptima)',
          'Contraste: Texto oscuro sobre fondo claro (o viceversa) con ratio 4.5:1 mínimo',
          'Emparejamiento de fuentes: Combinar fuentes cuidadosamente (máx 2-3 tipografías por diseño)'
        ]
      },
      commonMistakes: {
        en: [
          'Too many fonts: Using 4+ different typefaces creates visual chaos',
          'Font size too small: Below 14px is hard to read on screens',
          'Poor line height: Text cramped together or too spaced out',
          'All caps for long text: HARDER TO READ and feels like shouting',
          'Low contrast: Gray text on gray background fails accessibility'
        ],
        es: [
          'Demasiadas fuentes: Usar 4+ tipografías diferentes crea caos visual',
          'Tamaño de fuente demasiado pequeño: Debajo de 14px es difícil de leer en pantallas',
          'Mala altura de línea: Texto apretado o demasiado espaciado',
          'Todo en mayúsculas para texto largo: MÁS DIFÍCIL DE LEER y se siente como gritar',
          'Bajo contraste: Texto gris sobre fondo gris falla en accesibilidad'
        ]
      },
      howToApply: {
        steps: [
          {
            name: { en: 'Choose Typefaces', es: 'Elegir Tipografías' },
            description: { 
              en: 'Pick 1-2 typefaces: One for headings (can be expressive), one for body text (must be readable). Google Fonts is a good free resource.',
              es: 'Elige 1-2 tipografías: Una para encabezados (puede ser expresiva), una para texto del cuerpo (debe ser legible). Google Fonts es un buen recurso gratuito.'
            }
          },
          {
            name: { en: 'Define Type Scale', es: 'Definir Escala de Tipo' },
            description: { 
              en: 'Create a scale: H1 (32-40px), H2 (24-28px), H3 (20px), Body (16px), Small (14px), Caption (12px). Use ratios (1.25x, 1.5x).',
              es: 'Crea una escala: H1 (32-40px), H2 (24-28px), H3 (20px), Cuerpo (16px), Pequeño (14px), Leyenda (12px). Usa ratios (1.25x, 1.5x).'
            }
          },
          {
            name: { en: 'Set Line Height & Spacing', es: 'Establecer Altura de Línea y Espaciado' },
            description: { 
              en: 'Body text: line-height 1.5. Headings: line-height 1.2. Add spacing between paragraphs (1em) for breathing room.',
              es: 'Texto del cuerpo: line-height 1.5. Encabezados: line-height 1.2. Agrega espaciado entre párrafos (1em) para espacio de respiración.'
            }
          },
          {
            name: { en: 'Check Contrast', es: 'Verificar Contraste' },
            description: { 
              en: 'Use WebAIM Contrast Checker. Body text needs 4.5:1 ratio, large text (18px+) needs 3:1 ratio for AA compliance.',
              es: 'Usa WebAIM Contrast Checker. El texto del cuerpo necesita ratio 4.5:1, texto grande (18px+) necesita ratio 3:1 para cumplimiento AA.'
            }
          }
        ]
      },
      deliverables: {
        description: { en: 'Typography system documentation.', es: 'Documentación de sistema tipográfico.' },
        items: {
          en: [
            'Type scale: Defined sizes for all text levels',
            'Font files: Hosted fonts or links to web fonts',
            'Style guide: Usage examples and rules',
            'Accessibility notes: Contrast ratios and minimum sizes'
          ],
          es: [
            'Escala de tipo: Tamaños definidos para todos los niveles de texto',
            'Archivos de fuente: Fuentes alojadas o enlaces a fuentes web',
            'Guía de estilo: Ejemplos de uso y reglas',
            'Notas de accesibilidad: Ratios de contraste y tamaños mínimos'
          ]
        }
      },
      practicalTools: {
        design: { en: ['Google Fonts', 'Adobe Fonts', 'Figma', 'Fontpair.co'], es: ['Google Fonts', 'Adobe Fonts', 'Figma', 'Fontpair.co'] },
        research: { en: ['WebAIM Contrast Checker', 'Type Scale tool'], es: ['WebAIM Contrast Checker', 'Herramienta Type Scale'] },
        handoff: { en: ['Zeplin', 'Figma Dev Mode'], es: ['Zeplin', 'Figma Dev Mode'] }
      },
      realExample: {
        title: { en: 'Apple\'s SF Pro Typography', es: 'Tipografía SF Pro de Apple' },
        description: {
          en: 'Apple designed SF Pro specifically for legibility on screens. It uses optical sizes (different designs for small vs large text) and dynamic type that scales with user preferences.',
          es: 'Apple diseñó SF Pro específicamente para legibilidad en pantallas. Usa tamaños ópticos (diseños diferentes para texto pequeño vs grande) y tipo dinámico que escala con preferencias del usuario.'
        },
        company: 'Apple'
      }
    }
  },
  {
    id: 'color-theory',
    title: { en: 'Color Theory', es: 'Teoría del Color' },
    description: { 
      en: 'Understanding color psychology, harmony, and accessibility in UI design.',
      es: 'Entender psicología del color, armonía y accesibilidad en diseño UI.'
    },
    status: 'beginner',
    timeEstimate: '1h 15min',
    reference: { en: 'Color in Design - Interaction Design Foundation', es: 'Color en Diseño - Interaction Design Foundation' },
    referenceLink: 'https://www.interaction-design.org/literature/topics/color-theory',
    content: {
      definition: {
        en: 'Color theory is the science and art of using color. It explains how humans perceive color, how colors mix, match, and contrast, and the psychological effects colors have on users.',
        es: 'La teoría del color es la ciencia y el arte de usar el color. Explica cómo los humanos perciben el color, cómo los colores se mezclan, combinan y contrastan, y los efectos psicológicos que los colores tienen en los usuarios.'
      },
      why: {
        en: 'Color evokes emotions, directs attention, and communicates meaning. Good color choices improve usability (clear CTAs, visual hierarchy), accessibility (sufficient contrast), and brand identity.',
        es: 'El color evoca emociones, dirige la atención y comunica significado. Las buenas elecciones de color mejoran la usabilidad (CTAs claros, jerarquía visual), accesibilidad (contraste suficiente) e identidad de marca.'
      },
      keyPrinciples: {
        en: [
          'Color wheel: Primary (red, blue, yellow), Secondary (green, orange, purple), Tertiary',
          'Color harmony: Complementary (opposite on wheel), Analogous (adjacent), Triadic (3 evenly spaced)',
          'Color psychology: Red (urgency, passion), Blue (trust, calm), Green (success, nature), Yellow (optimism)',
          '60-30-10 rule: 60% dominant color, 30% secondary, 10% accent',
          'Accessibility: 4.5:1 contrast ratio for text, 3:1 for large text/UI elements',
          'Color blindness: Test designs for deuteranopia (red-green) and protanopia'
        ],
        es: [
          'Rueda de color: Primarios (rojo, azul, amarillo), Secundarios (verde, naranja, púrpura), Terciarios',
          'Armonía de color: Complementario (opuesto en rueda), Análogo (adyacente), Triádico (3 espaciados uniformemente)',
          'Psicología del color: Rojo (urgencia, pasión), Azul (confianza, calma), Verde (éxito, naturaleza), Amarillo (optimismo)',
          'Regla 60-30-10: 60% color dominante, 30% secundario, 10% acento',
          'Accesibilidad: Ratio de contraste 4.5:1 para texto, 3:1 para texto grande/elementos UI',
          'Daltonismo: Prueba diseños para deuteranopia (rojo-verde) y protanopia'
        ]
      },
      commonMistakes: {
        en: [
          'Too many colors: Using 5+ colors creates visual noise',
          'Poor contrast: Failing WCAG AA standards (4.5:1 for text)',
          'Relying only on color: "Click the green button" fails for colorblind users',
          'Inconsistent color usage: Same color meaning different things in different contexts',
          'Ignoring cultural differences: White means purity in West, mourning in East'
        ],
        es: [
          'Demasiados colores: Usar 5+ colores crea ruido visual',
          'Contraste pobre: Fallar estándares WCAG AA (4.5:1 para texto)',
          'Confiar solo en color: "Haz clic en el botón verde" falla para usuarios daltónicos',
          'Uso inconsistente de color: Mismo color significando cosas diferentes en diferentes contextos',
          'Ignorar diferencias culturales: Blanco significa pureza en Occidente, luto en Oriente'
        ]
      },
      howToApply: {
        steps: [
          {
            name: { en: 'Define Brand Colors', es: 'Definir Colores de Marca' },
            description: { 
              en: 'Choose 1 primary brand color (represents your brand), 1-2 secondary colors, and neutral grays. Use brand guidelines if they exist.',
              es: 'Elige 1 color de marca primario (representa tu marca), 1-2 colores secundarios y grises neutrales. Usa guías de marca si existen.'
            }
          },
          {
            name: { en: 'Create Color Palette', es: 'Crear Paleta de Colores' },
            description: { 
              en: 'Generate shades and tints: Primary-50, Primary-100...Primary-900. Tools like Coolors or Adobe Color help with harmony.',
              es: 'Genera sombras y tintes: Primario-50, Primario-100...Primario-900. Herramientas como Coolors o Adobe Color ayudan con armonía.'
            }
          },
          {
            name: { en: 'Assign Semantic Colors', es: 'Asignar Colores Semánticos' },
            description: { 
              en: 'Define functional colors: Success (green), Error (red), Warning (yellow/orange), Info (blue). Ensure consistency across the product.',
              es: 'Define colores funcionales: Éxito (verde), Error (rojo), Advertencia (amarillo/naranja), Info (azul). Asegura consistencia en el producto.'
            }
          },
          {
            name: { en: 'Test Contrast', es: 'Probar Contraste' },
            description: { 
              en: 'Use WebAIM or Stark plugin to check contrast ratios. Fix any failures by darkening or lightening colors until they pass AA or AAA standards.',
              es: 'Usa WebAIM o plugin Stark para verificar ratios de contraste. Corrige cualquier falla oscureciendo o aclarando colores hasta que pasen estándares AA o AAA.'
            }
          },
          {
            name: { en: 'Test for Color Blindness', es: 'Probar para Daltonismo' },
            description: { 
              en: 'Use Stark or ColorOracle to simulate deuteranopia and protanopia. Ensure critical information isn\'t conveyed by color alone.',
              es: 'Usa Stark o ColorOracle para simular deuteranopia y protanopia. Asegura que información crítica no se transmita solo por color.'
            }
          }
        ]
      },
      deliverables: {
        description: { en: 'Color system documentation.', es: 'Documentación de sistema de color.' },
        items: {
          en: [
            'Color palette: Primary, secondary, neutral, and semantic colors with hex/RGB values',
            'Contrast report: All color combinations with pass/fail status',
            'Usage guidelines: When to use each color (buttons, backgrounds, text)',
            'Accessibility notes: Colorblind-safe alternatives'
          ],
          es: [
            'Paleta de colores: Colores primarios, secundarios, neutrales y semánticos con valores hex/RGB',
            'Informe de contraste: Todas las combinaciones de colores con estado de aprobado/reprobado',
            'Guías de uso: Cuándo usar cada color (botones, fondos, texto)',
            'Notas de accesibilidad: Alternativas seguras para daltónicos'
          ]
        }
      },
      practicalTools: {
        design: { 
          en: ['Coolors.co', 'Adobe Color', 'Figma (color styles)', 'Paletton'], 
          es: ['Coolors.co', 'Adobe Color', 'Figma (estilos de color)', 'Paletton'] 
        },
        research: { 
          en: ['WebAIM Contrast Checker', 'Stark (Figma plugin)', 'ColorOracle (colorblind simulator)'], 
          es: ['WebAIM Contrast Checker', 'Stark (plugin Figma)', 'ColorOracle (simulador de daltonismo)'] 
        },
        handoff: { en: ['Zeplin', 'Figma Dev Mode'], es: ['Zeplin', 'Figma Dev Mode'] }
      },
      realExample: {
        title: { en: 'Spotify\'s Green Brand Color', es: 'Color de Marca Verde de Spotify' },
        description: {
          en: 'Spotify\'s signature green (#1DB954) is vibrant and stands out. They use it sparingly for CTAs and brand moments, while keeping the interface dark for focus on content. Green also evokes energy and creativity.',
          es: 'El verde característico de Spotify (#1DB954) es vibrante y se destaca. Lo usan con moderación para CTAs y momentos de marca, mientras mantienen la interfaz oscura para enfoque en contenido. El verde también evoca energía y creatividad.'
        },
        company: 'Spotify'
      }
    }
  },
  {
    id: 'accessibility-wcag',
    title: { en: 'Accessibility WCAG', es: 'Accesibilidad WCAG' },
    description: { 
      en: 'Designing inclusive experiences that work for users of all abilities.',
      es: 'Diseñar experiencias inclusivas que funcionen para usuarios de todas las capacidades.'
    },
    status: 'intermediate',
    timeEstimate: '1h 30min',
    reference: { en: 'Web Content Accessibility Guidelines (WCAG)', es: 'Guías de Accesibilidad de Contenido Web (WCAG)' },
    referenceLink: 'https://www.w3.org/WAI/WCAG21/quickref/',
    content: {
      definition: {
        en: 'Web Content Accessibility Guidelines (WCAG) are internationally recognized standards for making web content accessible to people with disabilities. They are organized around four principles: Perceivable, Operable, Understandable, and Robust (POUR).',
        es: 'Las Guías de Accesibilidad de Contenido Web (WCAG) son estándares reconocidos internacionalmente para hacer el contenido web accesible a personas con discapacidades. Se organizan alrededor de cuatro principios: Perceptible, Operable, Comprensible y Robusto (POUR).'
      },
      why: {
        en: '15% of the world\'s population has some form of disability. Accessible design isn\'t just ethical - it\'s good business. It improves usability for everyone, reduces legal risk, and expands your potential user base.',
        es: 'El 15% de la población mundial tiene alguna forma de discapacidad. El diseño accesible no es solo ético - es buen negocio. Mejora la usabilidad para todos, reduce el riesgo legal y expande tu base de usuarios potenciales.'
      },
      keyPrinciples: {
        en: [
          'Perceivable: Users must be able to perceive information (text alternatives for images, captions for videos)',
          'Operable: Users must be able to operate the interface (keyboard navigation, no time limits)',
          'Understandable: Content must be readable and predictable (clear language, consistent navigation)',
          'Robust: Content works with assistive technologies (screen readers, voice control)',
          'Contrast: 4.5:1 for text, 3:1 for large text and UI components',
          'Keyboard navigation: All functionality available via keyboard (Tab, Enter, Esc, Arrow keys)'
        ],
        es: [
          'Perceptible: Los usuarios deben poder percibir información (alternativas de texto para imágenes, subtítulos para videos)',
          'Operable: Los usuarios deben poder operar la interfaz (navegación por teclado, sin límites de tiempo)',
          'Comprensible: El contenido debe ser legible y predecible (lenguaje claro, navegación consistente)',
          'Robusto: El contenido funciona con tecnologías de asistencia (lectores de pantalla, control por voz)',
          'Contraste: 4.5:1 para texto, 3:1 para texto grande y componentes UI',
          'Navegación por teclado: Toda funcionalidad disponible vía teclado (Tab, Enter, Esc, teclas de flecha)'
        ]
      },
      commonMistakes: {
        en: [
          'Missing alt text for images',
          'Forms without proper labels',
          'Color as the only indicator (red = error needs icon too)',
          'Non-keyboard accessible modals or dropdowns',
          'Auto-playing media without controls',
          'Low contrast text (gray on gray)',
          'Time-limited interactions without extensions'
        ],
        es: [
          'Falta de texto alt para imágenes',
          'Formularios sin etiquetas apropiadas',
          'Color como único indicador (rojo = error necesita icono también)',
          'Modales o dropdowns no accesibles por teclado',
          'Medios de auto-reproducción sin controles',
          'Texto de bajo contraste (gris sobre gris)',
          'Interacciones con límite de tiempo sin extensiones'
        ]
      },
      howToApply: {
        steps: [
          {
            name: { en: 'Add Alt Text', es: 'Agregar Texto Alt' },
            description: { 
              en: 'Every image needs descriptive alt text. Decorative images get empty alt="" to skip them. Example: <img src="logo.png" alt="Company logo">',
              es: 'Cada imagen necesita texto alt descriptivo. Imágenes decorativas obtienen alt="" vacío para saltarlas. Ejemplo: <img src="logo.png" alt="Logo de empresa">'
            }
          },
          {
            name: { en: 'Ensure Keyboard Navigation', es: 'Asegurar Navegación por Teclado' },
            description: { 
              en: 'Test your interface using only keyboard. Tab through all interactive elements. Ensure focus indicators are visible. Esc should close modals.',
              es: 'Prueba tu interfaz usando solo teclado. Navega con Tab por todos los elementos interactivos. Asegura que indicadores de enfoque sean visibles. Esc debería cerrar modales.'
            }
          },
          {
            name: { en: 'Check Color Contrast', es: 'Verificar Contraste de Color' },
            description: { 
              en: 'Use WebAIM or Stark to check all text and UI elements. Aim for WCAG AA (4.5:1 for text) or AAA (7:1 for text) compliance.',
              es: 'Usa WebAIM o Stark para verificar todo texto y elementos UI. Apunta a cumplimiento WCAG AA (4.5:1 para texto) o AAA (7:1 para texto).'
            }
          },
          {
            name: { en: 'Label Form Fields', es: 'Etiquetar Campos de Formulario' },
            description: { 
              en: 'Every input needs a <label>. Use placeholder as hint, not replacement for label. Add error messages with aria-describedby.',
              es: 'Cada input necesita un <label>. Usa placeholder como pista, no reemplazo de etiqueta. Agrega mensajes de error con aria-describedby.'
            }
          },
          {
            name: { en: 'Test with Screen Reader', es: 'Probar con Lector de Pantalla' },
            description: { 
              en: 'Use NVDA (Windows), JAWS (Windows), or VoiceOver (Mac/iOS). Navigate your interface and ensure all information is announced.',
              es: 'Usa NVDA (Windows), JAWS (Windows) o VoiceOver (Mac/iOS). Navega tu interfaz y asegura que toda información sea anunciada.'
            }
          }
        ]
      },
      deliverables: {
        description: { en: 'Accessibility documentation and reports.', es: 'Documentación e informes de accesibilidad.' },
        items: {
          en: [
            'Accessibility audit: WCAG compliance checklist with pass/fail status',
            'Contrast report: All text and UI elements with contrast ratios',
            'Keyboard navigation map: Tab order and shortcut keys',
            'Screen reader testing notes: Issues found and recommendations',
            'Remediation plan: Prioritized list of fixes'
          ],
          es: [
            'Auditoría de accesibilidad: Lista de verificación de cumplimiento WCAG con estado de aprobado/reprobado',
            'Informe de contraste: Todo texto y elementos UI con ratios de contraste',
            'Mapa de navegación por teclado: Orden de tabulación y teclas de atajo',
            'Notas de prueba de lector de pantalla: Problemas encontrados y recomendaciones',
            'Plan de remediación: Lista priorizada de correcciones'
          ]
        }
      },
      practicalTools: {
        design: { 
          en: ['Figma (Stark plugin)', 'Adobe XD', 'Sketch (Contrast plugin)'], 
          es: ['Figma (plugin Stark)', 'Adobe XD', 'Sketch (plugin Contrast)'] 
        },
        research: { 
          en: ['WebAIM Contrast Checker', 'WAVE (browser extension)', 'axe DevTools', 'Lighthouse'], 
          es: ['WebAIM Contrast Checker', 'WAVE (extensión de navegador)', 'axe DevTools', 'Lighthouse'] 
        },
        handoff: { 
          en: ['NVDA', 'JAWS', 'VoiceOver', 'Screen reader testing'], 
          es: ['NVDA', 'JAWS', 'VoiceOver', 'Pruebas de lector de pantalla'] 
        }
      },
      realExample: {
        title: { en: 'GOV.UK Accessibility Standards', es: 'Estándares de Accesibilidad GOV.UK' },
        description: {
          en: 'The UK government\'s website (GOV.UK) meets WCAG 2.1 AAA in many areas. They prioritize simplicity, high contrast, and keyboard navigation. Their Design System includes accessibility guidance for every component.',
          es: 'El sitio web del gobierno del Reino Unido (GOV.UK) cumple con WCAG 2.1 AAA en muchas áreas. Priorizan simplicidad, alto contraste y navegación por teclado. Su Sistema de Diseño incluye guía de accesibilidad para cada componente.'
        },
        company: 'UK Government'
      }
    }
  }
];
