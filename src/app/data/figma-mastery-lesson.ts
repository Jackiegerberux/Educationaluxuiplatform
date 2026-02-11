import { Topic } from './types';

export const figmaMasteryLesson: Topic = {
  id: 'figma-mastery',
  title: { en: 'Figma Mastery', es: 'Dominio de Figma' },
  description: {
    en: 'Master Figma from interface basics to advanced component architecture, variables, tokens, and Auto Layout.',
    es: 'Domina Figma desde los fundamentos de la interfaz hasta la arquitectura avanzada de componentes, variables, tokens y Auto Layout.'
  },
  status: 'advanced',
  timeEstimate: '3h 30m',
  reference: { en: 'Figma Learn - Official Documentation', es: 'Figma Learn - Documentacion Oficial' },
  referenceLink: 'https://help.figma.com/hc/en-us',
  content: {
    definition: {
      en: 'Figma is a cloud-based design and prototyping tool that enables real-time collaboration. Beyond basic drawing, Figma provides a powerful component system with variants, properties, variables, tokens, and Auto Layout that mirrors how modern front-end frameworks work. Mastering these features transforms you from a "screen drawer" into a systems-thinking designer who builds scalable, maintainable design architectures.',
      es: 'Figma es una herramienta de diseno y prototipado basada en la nube que permite la colaboracion en tiempo real. Mas alla del dibujo basico, Figma proporciona un potente sistema de componentes con variantes, propiedades, variables, tokens y Auto Layout que refleja como funcionan los frameworks front-end modernos. Dominar estas funciones te transforma de un "dibujante de pantallas" en un disenador con pensamiento de sistemas que construye arquitecturas de diseno escalables y mantenibles.'
    },
    why: {
      en: 'Figma is the industry standard used by 85%+ of product design teams. But most designers only use 20% of its power. Understanding components, variants, variables, and Auto Layout is the difference between a junior who draws screens and a senior who builds design systems. These skills directly translate to how developers think about code: reusable components, props, states, and responsive layout — making your handoff seamless and your designs implementable.',
      es: 'Figma es el estandar de la industria utilizado por mas del 85% de los equipos de diseno de producto. Pero la mayoria de los disenadores solo usa el 20% de su poder. Entender componentes, variantes, variables y Auto Layout marca la diferencia entre un junior que dibuja pantallas y un senior que construye sistemas de diseno. Estas habilidades se traducen directamente a como los desarrolladores piensan sobre codigo: componentes reutilizables, props, estados y layout responsivo — haciendo tu handoff fluido y tus disenos implementables.'
    },
    keyPrinciples: {
      en: [
        'Components are the single source of truth: Create once, reuse everywhere. Changes to the main component propagate to all instances automatically.',
        'Variants model states and sizes: Use variants to represent all visual variations (size: S/M/L, state: default/hover/disabled, type: primary/secondary) in a single component set.',
        'Component Properties reduce variant explosion: Boolean props (show/hide icon), text props (editable label), and instance swap props (swap icons) keep your component set lean.',
        'Auto Layout = CSS Flexbox: It controls padding, gap, alignment, and responsive resizing. Master it to create components that adapt to any content length.',
        'Variables & Tokens create a semantic layer: Color, spacing, and typography tokens allow you to swap entire themes (light/dark, brand A/brand B) with a single click.',
        'Naming conventions enable organization: Use slash naming (Button/Primary/Large) to auto-organize components in the Assets panel and enable intuitive discovery.'
      ],
      es: [
        'Los componentes son la unica fuente de verdad: Crea una vez, reutiliza en todas partes. Los cambios en el componente principal se propagan a todas las instancias automaticamente.',
        'Las variantes modelan estados y tamanos: Usa variantes para representar todas las variaciones visuales (tamano: S/M/L, estado: default/hover/disabled, tipo: primary/secondary) en un solo conjunto de componentes.',
        'Las propiedades de componente reducen la explosion de variantes: Props booleanas (mostrar/ocultar icono), props de texto (etiqueta editable) y props de intercambio de instancia (cambiar iconos) mantienen tu set de componentes ligero.',
        'Auto Layout = CSS Flexbox: Controla padding, gap, alineacion y redimensionamiento responsivo. Dominalo para crear componentes que se adapten a cualquier longitud de contenido.',
        'Variables y Tokens crean una capa semantica: Tokens de color, espaciado y tipografia permiten intercambiar temas completos (claro/oscuro, marca A/marca B) con un solo clic.',
        'Las convenciones de nomenclatura habilitan la organizacion: Usa nomenclatura con barras (Button/Primary/Large) para auto-organizar componentes en el panel Assets y facilitar su descubrimiento.'
      ]
    },
    commonMistakes: {
      en: [
        'Detaching instances instead of using overrides: You lose the connection to the main component and updates won\'t propagate. Use overrides to customize instances.',
        'Not using Auto Layout: Manually positioning elements creates fragile designs that break with different content. Auto Layout makes everything responsive.',
        'Creating too many variants instead of using properties: A button with 3 sizes x 4 states x 2 icon options = 24 variants. With properties, you need only 12 variants + 1 boolean prop.',
        'Flat naming without hierarchy: Naming components "btn-primary" instead of "Button/Primary" loses the automatic grouping and nesting in the Assets panel.',
        'Hardcoding colors instead of using variables: When the brand color changes, you have to manually update every instance. Variables propagate the change everywhere.',
        'Ignoring constraints and resizing: Components that don\'t resize properly break in prototypes and confuse developers about intended responsive behavior.'
      ],
      es: [
        'Desvincular instancias en vez de usar sobreescrituras: Pierdes la conexion al componente principal y las actualizaciones no se propagaran. Usa sobreescrituras para personalizar instancias.',
        'No usar Auto Layout: Posicionar elementos manualmente crea disenos fragiles que se rompen con diferente contenido. Auto Layout hace todo responsivo.',
        'Crear demasiadas variantes en vez de usar propiedades: Un boton con 3 tamanos x 4 estados x 2 opciones de icono = 24 variantes. Con propiedades, necesitas solo 12 variantes + 1 prop booleana.',
        'Nombrar sin jerarquia: Nombrar componentes "btn-primary" en vez de "Button/Primary" pierde el agrupamiento y anidamiento automatico en el panel Assets.',
        'Hardcodear colores en vez de usar variables: Cuando el color de marca cambia, hay que actualizar manualmente cada instancia. Las variables propagan el cambio a todas partes.',
        'Ignorar constraints y redimensionamiento: Componentes que no redimensionan correctamente rompen los prototipos y confunden a los desarrolladores sobre el comportamiento responsivo esperado.'
      ]
    },
    howToApply: {
      steps: [
        {
          name: { en: '1. Learn the Interface', es: '1. Aprende la Interfaz' },
          description: {
            en: 'Master the Toolbar (top), Layers panel (left), Design panel (right), and Canvas (center). Learn keyboard shortcuts: V (move), F (frame), T (text), R (rectangle). Use Cmd/Ctrl+K for Quick Actions search.',
            es: 'Domina la Barra de herramientas (arriba), panel de Capas (izquierda), panel de Diseno (derecha) y Lienzo (centro). Aprende atajos: V (mover), F (frame), T (texto), R (rectangulo). Usa Cmd/Ctrl+K para busqueda de Acciones rapidas.'
          }
        },
        {
          name: { en: '2. Create Your First Component', es: '2. Crea Tu Primer Componente' },
          description: {
            en: 'Design a button with text, icon, and background. Select all layers, press Cmd/Ctrl+Alt+K to create a component. The diamond icon appears in Layers. Now drag it from Assets to create instances.',
            es: 'Disena un boton con texto, icono y fondo. Selecciona todas las capas, presiona Cmd/Ctrl+Alt+K para crear un componente. El icono de diamante aparece en Capas. Ahora arrastralo desde Assets para crear instancias.'
          }
        },
        {
          name: { en: '3. Add Variants', es: '3. Agrega Variantes' },
          description: {
            en: 'Select the component, click "+" next to Variants in the Design panel. Add properties like Size (Small/Medium/Large) and State (Default/Hover/Disabled). Each combination creates a variant in the component set.',
            es: 'Selecciona el componente, haz clic en "+" junto a Variantes en el panel Diseno. Agrega propiedades como Tamano (Small/Medium/Large) y Estado (Default/Hover/Disabled). Cada combinacion crea una variante en el set.'
          }
        },
        {
          name: { en: '4. Define Component Properties', es: '4. Define Propiedades del Componente' },
          description: {
            en: 'Add boolean properties (hasIcon: true/false), text properties (label: editable string), and instance swap properties (icon: swap between icon components). This reduces variant count dramatically.',
            es: 'Agrega propiedades booleanas (hasIcon: true/false), propiedades de texto (label: string editable), y propiedades de intercambio de instancia (icon: intercambiar entre componentes de icono). Esto reduce drasticamente el numero de variantes.'
          }
        },
        {
          name: { en: '5. Apply Auto Layout', es: '5. Aplica Auto Layout' },
          description: {
            en: 'Select a frame and press Shift+A to add Auto Layout. Set direction (horizontal/vertical), padding, gap, and alignment. Use "Hug contents" for dynamic sizing and "Fill container" for responsive width.',
            es: 'Selecciona un frame y presiona Shift+A para agregar Auto Layout. Configura direccion (horizontal/vertical), padding, gap y alineacion. Usa "Hug contents" para tamano dinamico y "Fill container" para ancho responsivo.'
          }
        },
        {
          name: { en: '6. Set Up Variables & Tokens', es: '6. Configura Variables y Tokens' },
          description: {
            en: 'Open the Variables panel (icon in right sidebar). Create collections for Primitives (raw values: blue-500 = #3B82F6) and Semantics (token aliases: primary = blue-500). Apply variables to fills, strokes, spacing, and corner radius. Create modes for Light/Dark themes.',
            es: 'Abre el panel de Variables (icono en barra lateral derecha). Crea colecciones para Primitivos (valores crudos: blue-500 = #3B82F6) y Semanticos (alias de tokens: primary = blue-500). Aplica variables a rellenos, trazos, espaciado y radio de esquinas. Crea modos para temas Claro/Oscuro.'
          }
        },
        {
          name: { en: '7. Name & Organize Components', es: '7. Nombra y Organiza Componentes' },
          description: {
            en: 'Use slash naming: "Button/Primary/Large", "Icon/Arrow/Right". This creates nested groups in the Assets panel. Add descriptions to components for discoverability. Use a dedicated Components page in your file.',
            es: 'Usa nomenclatura con barras: "Button/Primary/Large", "Icon/Arrow/Right". Esto crea grupos anidados en el panel Assets. Agrega descripciones a los componentes para facilitar su descubrimiento. Usa una pagina dedicada de Componentes en tu archivo.'
          }
        },
        {
          name: { en: '8. Manage Instances', es: '8. Gestiona Instancias' },
          description: {
            en: 'Override properties (text, fills, visibility) without detaching. Use "Reset all overrides" to go back to the main component state. Swap between component instances via the instance swap dropdown. Only detach when you need a completely unique element.',
            es: 'Sobreescribe propiedades (texto, rellenos, visibilidad) sin desvincular. Usa "Restablecer todas las sobreescrituras" para volver al estado del componente principal. Intercambia entre instancias de componentes via el dropdown de intercambio. Solo desvincula cuando necesites un elemento completamente unico.'
          }
        }
      ]
    },
    deliverables: {
      description: {
        en: 'Figma component library and design system deliverables.',
        es: 'Biblioteca de componentes Figma y entregables de sistema de diseno.'
      },
      items: {
        en: [
          'Component Library: Organized page with all components (atoms, molecules, organisms) using slash naming',
          'Variant Matrix: Documentation showing all variant combinations with their property values',
          'Variables Collection: Primitives + Semantics collections with Light/Dark modes configured',
          'Auto Layout Specs: Components annotated with padding, gap, min/max width specifications',
          'Instance Guidelines: Documentation on when to override vs detach, with naming conventions',
          'Theme Showcase: Side-by-side comparison of Light/Dark themes using the same components'
        ],
        es: [
          'Biblioteca de Componentes: Pagina organizada con todos los componentes (atomos, moleculas, organismos) usando nomenclatura con barras',
          'Matriz de Variantes: Documentacion mostrando todas las combinaciones de variantes con sus valores de propiedades',
          'Coleccion de Variables: Colecciones de Primitivos + Semanticos con modos Claro/Oscuro configurados',
          'Specs de Auto Layout: Componentes anotados con especificaciones de padding, gap, min/max width',
          'Guias de Instancias: Documentacion sobre cuando sobreescribir vs desvincular, con convenciones de nombres',
          'Showcase de Temas: Comparacion lado a lado de temas Claro/Oscuro usando los mismos componentes'
        ]
      }
    },
    practicalTools: {
      design: {
        en: ['Figma (core tool)', 'Figma Tokens Studio plugin', 'Iconify plugin', 'Content Reel plugin', 'Figma Dev Mode'],
        es: ['Figma (herramienta principal)', 'Plugin Figma Tokens Studio', 'Plugin Iconify', 'Plugin Content Reel', 'Figma Dev Mode']
      },
      research: {
        en: ['Figma Analytics (component usage tracking)', 'Design Lint plugin (consistency audit)', 'Contrast checker plugin', 'A11y annotation kit'],
        es: ['Figma Analytics (seguimiento de uso de componentes)', 'Plugin Design Lint (auditoria de consistencia)', 'Plugin verificador de contraste', 'Kit de anotaciones A11y']
      },
      handoff: {
        en: ['Figma Dev Mode', 'Figma CSS code generation', 'Variables export to JSON tokens', 'Inspect panel for developers'],
        es: ['Figma Dev Mode', 'Generacion de codigo CSS de Figma', 'Exportacion de variables a tokens JSON', 'Panel Inspect para desarrolladores']
      }
    },
    aiInPractice: {
      description: {
        en: 'Use AI to accelerate your Figma workflow, from generating content to documenting components.',
        es: 'Usa IA para acelerar tu flujo de trabajo en Figma, desde generar contenido hasta documentar componentes.'
      },
      prompts: [
        {
          tool: 'ChatGPT',
          context: { en: 'Generating component documentation', es: 'Generando documentacion de componentes' },
          prompt: {
            en: 'I have a Figma Button component with variants: Size (S/M/L), Type (Primary/Secondary/Ghost), State (Default/Hover/Active/Disabled), and boolean prop hasIcon. Write a usage guide with do\'s and don\'ts for my design system documentation page.',
            es: 'Tengo un componente Button en Figma con variantes: Tamano (S/M/L), Tipo (Primary/Secondary/Ghost), Estado (Default/Hover/Active/Disabled), y prop booleana hasIcon. Escribe una guia de uso con lo que se debe y no se debe hacer para mi pagina de documentacion del sistema de diseno.'
          }
        },
        {
          tool: 'Claude',
          context: { en: 'Variable token structure', es: 'Estructura de tokens de variables' },
          prompt: {
            en: 'Help me design a Figma Variables structure for a SaaS product. I need: Primitive colors (scale 50-900 for blue, gray, green, red, amber), Semantic tokens (bg-primary, text-primary, border-default, etc.), and 2 modes: Light and Dark. Give me the complete mapping.',
            es: 'Ayudame a disenar una estructura de Variables de Figma para un producto SaaS. Necesito: Colores primitivos (escala 50-900 para azul, gris, verde, rojo, ambar), tokens semanticos (bg-primary, text-primary, border-default, etc.), y 2 modos: Claro y Oscuro. Dame el mapeo completo.'
          }
        },
        {
          tool: 'ChatGPT',
          context: { en: 'Auto Layout annotation', es: 'Anotacion de Auto Layout' },
          prompt: {
            en: 'I\'m handing off a card component to developers. It uses Auto Layout with: vertical direction, 16px padding, 12px gap, hug height, fill width, 8px corner radius. Translate this into CSS flexbox code and explain each property mapping.',
            es: 'Estoy entregando un componente de tarjeta a los desarrolladores. Usa Auto Layout con: direccion vertical, 16px padding, 12px gap, hug height, fill width, 8px corner radius. Traduce esto a codigo CSS flexbox y explica cada mapeo de propiedad.'
          }
        }
      ]
    },
    howToValidate: {
      what: {
        en: 'Validate that your Figma component architecture is scalable, consistent, and developer-friendly.',
        es: 'Validar que tu arquitectura de componentes en Figma es escalable, consistente y amigable para desarrolladores.'
      },
      methods: {
        en: [
          'Component coverage test: Can you build any screen in your app using only existing components and instances?',
          'Override audit: Check instances across your file. Are there many detached instances? That signals missing variants or properties.',
          'Theme switching: Apply your Dark mode variables. Does everything update correctly without manual fixes?',
          'Developer review: Ask a developer to review your component in Dev Mode. Can they extract all specs without asking questions?',
          'Stress test: Fill a text property with 3 words, then 30 words. Does Auto Layout handle both gracefully?'
        ],
        es: [
          'Test de cobertura de componentes: Puedes construir cualquier pantalla de tu app usando solo componentes e instancias existentes?',
          'Auditoria de sobreescrituras: Revisa instancias en tu archivo. Hay muchas instancias desvinculadas? Eso senala variantes o propiedades faltantes.',
          'Cambio de tema: Aplica tus variables de modo Oscuro. Todo se actualiza correctamente sin arreglos manuales?',
          'Revision con desarrolladores: Pide a un desarrollador que revise tu componente en Dev Mode. Puede extraer todas las specs sin hacer preguntas?',
          'Test de estres: Rellena una propiedad de texto con 3 palabras, luego 30 palabras. Auto Layout maneja ambas situaciones bien?'
        ]
      },
      tools: {
        en: ['Figma Design Lint plugin', 'Figma Dev Mode', 'Token Studio sync', 'Component analytics'],
        es: ['Plugin Design Lint de Figma', 'Figma Dev Mode', 'Sincronizacion Token Studio', 'Analiticas de componentes']
      },
      evidenceExample: {
        en: 'Uber\'s design system team reported that after migrating to Figma\'s native variables and a strict component architecture, they reduced design inconsistencies by 60% and cut design-to-dev handoff time from 2 weeks to 3 days. Their component library covers 94% of all UI patterns, with only 6% requiring custom designs.',
        es: 'El equipo del sistema de diseno de Uber reporto que despues de migrar a las variables nativas de Figma y una arquitectura de componentes estricta, redujeron las inconsistencias de diseno en un 60% y el tiempo de handoff de diseno a desarrollo paso de 2 semanas a 3 dias. Su biblioteca de componentes cubre el 94% de todos los patrones de UI, con solo el 6% requiriendo disenos personalizados.'
      }
    },
    quiz: [
      {
        question: {
          en: 'What is the keyboard shortcut to create a component in Figma?',
          es: 'Cual es el atajo de teclado para crear un componente en Figma?'
        },
        options: {
          en: ['Cmd/Ctrl+G (Group)', 'Cmd/Ctrl+Alt+K (Create Component)', 'Cmd/Ctrl+C (Copy)', 'Cmd/Ctrl+Shift+E (Export)'],
          es: ['Cmd/Ctrl+G (Agrupar)', 'Cmd/Ctrl+Alt+K (Crear Componente)', 'Cmd/Ctrl+C (Copiar)', 'Cmd/Ctrl+Shift+E (Exportar)']
        },
        correctIndex: 1,
        explanation: {
          en: 'Cmd/Ctrl+Alt+K creates a component from the selected layers. The main component appears with a purple diamond icon in the Layers panel.',
          es: 'Cmd/Ctrl+Alt+K crea un componente a partir de las capas seleccionadas. El componente principal aparece con un icono de diamante morado en el panel de Capas.'
        }
      },
      {
        question: {
          en: 'What is the main advantage of using Component Properties over creating more Variants?',
          es: 'Cual es la principal ventaja de usar Propiedades de Componente en vez de crear mas Variantes?'
        },
        options: {
          en: [
            'Properties make components load faster',
            'Properties reduce the number of variant combinations needed (avoid variant explosion)',
            'Properties allow components to be used in prototypes',
            'Properties are required by Figma Dev Mode'
          ],
          es: [
            'Las propiedades hacen que los componentes carguen mas rapido',
            'Las propiedades reducen el numero de combinaciones de variantes necesarias (evitan la explosion de variantes)',
            'Las propiedades permiten usar componentes en prototipos',
            'Las propiedades son requeridas por Figma Dev Mode'
          ]
        },
        correctIndex: 1,
        explanation: {
          en: 'Component Properties (boolean, text, instance swap) let you configure instances without creating a separate variant for each combination. A button with 3 sizes x 4 states x 2 icon options would need 24 variants, but with a boolean hasIcon property, only 12 variants + 1 property are needed.',
          es: 'Las Propiedades de Componente (booleanas, texto, intercambio de instancia) permiten configurar instancias sin crear una variante separada para cada combinacion. Un boton con 3 tamanos x 4 estados x 2 opciones de icono necesitaria 24 variantes, pero con una propiedad booleana hasIcon, solo se necesitan 12 variantes + 1 propiedad.'
        }
      },
      {
        question: {
          en: 'What is the Figma equivalent of CSS Flexbox?',
          es: 'Cual es el equivalente de CSS Flexbox en Figma?'
        },
        options: {
          en: ['Smart Animate', 'Auto Layout', 'Constraints', 'Grid Layout'],
          es: ['Smart Animate', 'Auto Layout', 'Constraints', 'Grid Layout']
        },
        correctIndex: 1,
        explanation: {
          en: 'Auto Layout in Figma works almost identically to CSS Flexbox. Direction = flex-direction, Gap = gap, Padding = padding, "Hug contents" = fit-content, "Fill container" = flex: 1. Mastering Auto Layout means you\'re already thinking in responsive CSS.',
          es: 'Auto Layout en Figma funciona de forma casi identica a CSS Flexbox. Direction = flex-direction, Gap = gap, Padding = padding, "Hug contents" = fit-content, "Fill container" = flex: 1. Dominar Auto Layout significa que ya estas pensando en CSS responsivo.'
        }
      },
      {
        question: {
          en: 'When should you detach a component instance in Figma?',
          es: 'Cuando deberias desvincular una instancia de componente en Figma?'
        },
        options: {
          en: [
            'Whenever you need to change the text content',
            'When you need to change the fill color',
            'Only when you need a completely unique, one-off element that will never match the component',
            'Every time you place it on a new page'
          ],
          es: [
            'Siempre que necesites cambiar el contenido de texto',
            'Cuando necesites cambiar el color de relleno',
            'Solo cuando necesites un elemento completamente unico y puntual que nunca coincidira con el componente',
            'Cada vez que lo coloques en una nueva pagina'
          ]
        },
        correctIndex: 2,
        explanation: {
          en: 'Detaching should be a last resort. Most customizations can be done via overrides (text, fills, visibility) or by adding new variants/properties. Detaching breaks the link to the main component, so future updates won\'t propagate.',
          es: 'Desvincular deberia ser el ultimo recurso. La mayoria de personalizaciones se pueden hacer via sobreescrituras (texto, rellenos, visibilidad) o agregando nuevas variantes/propiedades. Desvincular rompe el enlace al componente principal, asi que las actualizaciones futuras no se propagaran.'
        }
      }
    ],
    realExample: {
      title: {
        en: 'Shopify Polaris: From Figma Components to Production Code',
        es: 'Shopify Polaris: De Componentes Figma a Codigo de Produccion'
      },
      description: {
        en: 'Shopify\'s Polaris design system is a masterclass in Figma component architecture. Their Button component uses: 3 variant properties (size, tone, variant), 4 boolean properties (icon, disclosure, fullWidth, disabled), and 2 instance swap slots (icon, disclosure icon). This single component covers 200+ visual combinations with only 18 base variants. They use Figma Variables with 2 modes (Light/Dark) and 3 collections (Primitives, Semantics, Components). Their Auto Layout specs map 1:1 to their React component props, making developer handoff near-automatic. The result: 95% component adoption across 500+ engineers and 100+ designers, with a design-to-code consistency rate of 98%.',
        es: 'El sistema de diseno Polaris de Shopify es una clase magistral en arquitectura de componentes Figma. Su componente Button usa: 3 propiedades de variante (size, tone, variant), 4 propiedades booleanas (icon, disclosure, fullWidth, disabled), y 2 slots de intercambio de instancia (icon, disclosure icon). Este unico componente cubre mas de 200 combinaciones visuales con solo 18 variantes base. Usan Variables de Figma con 2 modos (Claro/Oscuro) y 3 colecciones (Primitivos, Semanticos, Componentes). Sus especificaciones de Auto Layout se mapean 1:1 a las props de su componente React, haciendo el handoff a desarrollo casi automatico. El resultado: 95% de adopcion de componentes entre mas de 500 ingenieros y 100+ disenadores, con una tasa de consistencia diseno-a-codigo del 98%.'
      },
      company: 'Shopify'
    }
  }
};
