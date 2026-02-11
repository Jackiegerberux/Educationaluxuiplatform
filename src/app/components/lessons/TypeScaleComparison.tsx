import { useState } from 'react';
import { useLanguage } from '../layout/LanguageContext';
import { Check, Copy, Type, Ruler, Eye } from 'lucide-react';
import { copyToClipboard } from '../../utils/clipboard';

interface TypeScale {
  name: { en: string; es: string };
  ratio: number;
  description: { en: string; es: string };
  base: number;
  levels: {
    label: { en: string; es: string };
    size: number;
    weight: number;
    lineHeight: number;
    use: { en: string; es: string };
  }[];
}

const typeScales: TypeScale[] = [
  {
    name: { en: 'Minor Third (1.2)', es: 'Tercera Menor (1.2)' },
    ratio: 1.2,
    description: { 
      en: 'Subtle, refined. Good for dense content like dashboards or data-heavy apps.',
      es: 'Sutil, refinado. Bueno para contenido denso como dashboards o apps con muchos datos.'
    },
    base: 16,
    levels: [
      { label: { en: 'Caption', es: 'Leyenda' }, size: 12, weight: 400, lineHeight: 1.4, use: { en: 'Fine print, labels', es: 'Letra pequeña, etiquetas' } },
      { label: { en: 'Small', es: 'Pequeño' }, size: 13, weight: 400, lineHeight: 1.5, use: { en: 'Secondary text', es: 'Texto secundario' } },
      { label: { en: 'Body', es: 'Cuerpo' }, size: 16, weight: 400, lineHeight: 1.6, use: { en: 'Main content', es: 'Contenido principal' } },
      { label: { en: 'H3', es: 'H3' }, size: 19, weight: 600, lineHeight: 1.4, use: { en: 'Subheadings', es: 'Subtítulos' } },
      { label: { en: 'H2', es: 'H2' }, size: 23, weight: 700, lineHeight: 1.3, use: { en: 'Section headers', es: 'Encabezados de sección' } },
      { label: { en: 'H1', es: 'H1' }, size: 28, weight: 700, lineHeight: 1.2, use: { en: 'Page titles', es: 'Títulos de página' } },
      { label: { en: 'Display', es: 'Display' }, size: 33, weight: 800, lineHeight: 1.1, use: { en: 'Hero headings', es: 'Encabezados hero' } }
    ]
  },
  {
    name: { en: 'Major Third (1.25)', es: 'Tercera Mayor (1.25)' },
    ratio: 1.25,
    description: { 
      en: 'Balanced, versatile. Most common choice for web apps and marketing sites.',
      es: 'Equilibrado, versátil. Elección más común para apps web y sitios de marketing.'
    },
    base: 16,
    levels: [
      { label: { en: 'Caption', es: 'Leyenda' }, size: 13, weight: 400, lineHeight: 1.4, use: { en: 'Fine print, labels', es: 'Letra pequeña, etiquetas' } },
      { label: { en: 'Small', es: 'Pequeño' }, size: 14, weight: 400, lineHeight: 1.5, use: { en: 'Secondary text', es: 'Texto secundario' } },
      { label: { en: 'Body', es: 'Cuerpo' }, size: 16, weight: 400, lineHeight: 1.6, use: { en: 'Main content', es: 'Contenido principal' } },
      { label: { en: 'H3', es: 'H3' }, size: 20, weight: 600, lineHeight: 1.4, use: { en: 'Subheadings', es: 'Subtítulos' } },
      { label: { en: 'H2', es: 'H2' }, size: 25, weight: 700, lineHeight: 1.3, use: { en: 'Section headers', es: 'Encabezados de sección' } },
      { label: { en: 'H1', es: 'H1' }, size: 31, weight: 700, lineHeight: 1.2, use: { en: 'Page titles', es: 'Títulos de página' } },
      { label: { en: 'Display', es: 'Display' }, size: 39, weight: 800, lineHeight: 1.1, use: { en: 'Hero headings', es: 'Encabezados hero' } }
    ]
  },
  {
    name: { en: 'Perfect Fourth (1.333)', es: 'Cuarta Perfecta (1.333)' },
    ratio: 1.333,
    description: { 
      en: 'Bold, clear hierarchy. Good for editorial and content-focused designs.',
      es: 'Jerarquía audaz y clara. Bueno para diseños editoriales y enfocados en contenido.'
    },
    base: 16,
    levels: [
      { label: { en: 'Caption', es: 'Leyenda' }, size: 12, weight: 400, lineHeight: 1.4, use: { en: 'Fine print, labels', es: 'Letra pequeña, etiquetas' } },
      { label: { en: 'Small', es: 'Pequeño' }, size: 14, weight: 400, lineHeight: 1.5, use: { en: 'Secondary text', es: 'Texto secundario' } },
      { label: { en: 'Body', es: 'Cuerpo' }, size: 16, weight: 400, lineHeight: 1.6, use: { en: 'Main content', es: 'Contenido principal' } },
      { label: { en: 'H3', es: 'H3' }, size: 21, weight: 600, lineHeight: 1.4, use: { en: 'Subheadings', es: 'Subtítulos' } },
      { label: { en: 'H2', es: 'H2' }, size: 28, weight: 700, lineHeight: 1.3, use: { en: 'Section headers', es: 'Encabezados de sección' } },
      { label: { en: 'H1', es: 'H1' }, size: 37, weight: 700, lineHeight: 1.2, use: { en: 'Page titles', es: 'Títulos de página' } },
      { label: { en: 'Display', es: 'Display' }, size: 49, weight: 800, lineHeight: 1.1, use: { en: 'Hero headings', es: 'Encabezados hero' } }
    ]
  },
  {
    name: { en: 'Golden Ratio (1.618)', es: 'Proporción Áurea (1.618)' },
    ratio: 1.618,
    description: { 
      en: 'Dramatic, elegant. Best for landing pages and visual-heavy presentations.',
      es: 'Dramático, elegante. Mejor para landing pages y presentaciones visuales.'
    },
    base: 16,
    levels: [
      { label: { en: 'Caption', es: 'Leyenda' }, size: 10, weight: 400, lineHeight: 1.4, use: { en: 'Fine print, labels', es: 'Letra pequeña, etiquetas' } },
      { label: { en: 'Small', es: 'Pequeño' }, size: 13, weight: 400, lineHeight: 1.5, use: { en: 'Secondary text', es: 'Texto secundario' } },
      { label: { en: 'Body', es: 'Cuerpo' }, size: 16, weight: 400, lineHeight: 1.6, use: { en: 'Main content', es: 'Contenido principal' } },
      { label: { en: 'H3', es: 'H3' }, size: 26, weight: 600, lineHeight: 1.4, use: { en: 'Subheadings', es: 'Subtítulos' } },
      { label: { en: 'H2', es: 'H2' }, size: 42, weight: 700, lineHeight: 1.3, use: { en: 'Section headers', es: 'Encabezados de sección' } },
      { label: { en: 'H1', es: 'H1' }, size: 68, weight: 700, lineHeight: 1.2, use: { en: 'Page titles', es: 'Títulos de página' } },
      { label: { en: 'Display', es: 'Display' }, size: 110, weight: 800, lineHeight: 1.1, use: { en: 'Hero headings', es: 'Encabezados hero' } }
    ]
  }
];

const fontPairs = [
  {
    name: 'Classic Editorial',
    heading: { name: 'Playfair Display', style: 'font-serif' },
    body: { name: 'Source Sans Pro', style: 'font-sans' },
    use: { en: 'Blogs, magazines, content sites', es: 'Blogs, revistas, sitios de contenido' }
  },
  {
    name: 'Modern Tech',
    heading: { name: 'Inter', style: 'font-sans' },
    body: { name: 'Inter', style: 'font-sans' },
    use: { en: 'SaaS, dashboards, apps', es: 'SaaS, dashboards, apps' }
  },
  {
    name: 'Creative Bold',
    heading: { name: 'Montserrat', style: 'font-sans tracking-tight' },
    body: { name: 'Open Sans', style: 'font-sans' },
    use: { en: 'Marketing, portfolios, agencies', es: 'Marketing, portafolios, agencias' }
  }
];

export function TypeScaleComparison() {
  const { t } = useLanguage();
  const [selectedScale, setSelectedScale] = useState(1); // Major Third default
  const [selectedPair, setSelectedPair] = useState(0);
  const [copiedCSS, setCopiedCSS] = useState(false);
  const [showMeasurements, setShowMeasurements] = useState(true);

  const scale = typeScales[selectedScale];
  const pair = fontPairs[selectedPair];

  const generateCSS = () => {
    return `/* Typography Scale: ${scale.name.en} (${scale.ratio}) */
:root {
  --font-base: ${scale.base}px;
${scale.levels.map(level => 
  `  --font-${level.label.en.toLowerCase().replace(/\s/g, '-')}: ${level.size}px;`
).join('\n')}
}

/* Usage */
.text-caption { font-size: var(--font-caption); line-height: ${scale.levels[0].lineHeight}; }
.text-body { font-size: var(--font-body); line-height: ${scale.levels[2].lineHeight}; }
.text-h3 { font-size: var(--font-h3); line-height: ${scale.levels[3].lineHeight}; font-weight: ${scale.levels[3].weight}; }
.text-h2 { font-size: var(--font-h2); line-height: ${scale.levels[4].lineHeight}; font-weight: ${scale.levels[4].weight}; }
.text-h1 { font-size: var(--font-h1); line-height: ${scale.levels[5].lineHeight}; font-weight: ${scale.levels[5].weight}; }
.text-display { font-size: var(--font-display); line-height: ${scale.levels[6].lineHeight}; font-weight: ${scale.levels[6].weight}; }`;
  };

  const copyCSS = () => {
    copyToClipboard(generateCSS());
    setCopiedCSS(true);
    setTimeout(() => setCopiedCSS(false), 2000);
  };

  return (
    <div className="space-y-8">
      {/* Scale Selector */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-lg font-semibold text-white flex items-center gap-2">
            <Ruler className="size-5 text-violet-400" />
            {t({ en: 'Choose Type Scale', es: 'Elegir Escala Tipográfica' })}
          </h4>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowMeasurements(!showMeasurements)}
              className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                showMeasurements 
                  ? 'bg-violet-500/20 text-violet-300' 
                  : 'bg-white/5 text-gray-400 hover:bg-white/10'
              }`}
            >
              <Eye className="size-4 inline mr-1" />
              {t({ en: 'Measurements', es: 'Medidas' })}
            </button>
            <button
              onClick={copyCSS}
              className="px-3 py-1.5 bg-violet-500/20 hover:bg-violet-500/30 text-violet-300 rounded-lg transition-colors text-sm flex items-center gap-2"
            >
              {copiedCSS ? <Check className="size-4" /> : <Copy className="size-4" />}
              {copiedCSS ? 'Copied!' : 'CSS'}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {typeScales.map((s, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedScale(idx)}
              className={`p-4 rounded-xl border-2 text-left transition-all ${
                selectedScale === idx
                  ? 'border-violet-500 bg-violet-500/10'
                  : 'border-white/10 bg-white/5 hover:border-white/20'
              }`}
            >
              <div className="font-semibold text-white text-sm mb-1">
                {t(s.name)}
              </div>
              <div className="text-xs text-gray-400">{t(s.description)}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Visual Scale Preview */}
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-white/10">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h4 className="text-white font-semibold text-lg mb-1">
              {t(scale.name)} - {t({ en: 'Base', es: 'Base' })}: {scale.base}px
            </h4>
            <p className="text-gray-400 text-sm">{t(scale.description)}</p>
          </div>
          <div className="px-4 py-2 bg-violet-500/20 rounded-lg">
            <div className="text-violet-300 text-xs uppercase tracking-wide mb-1">
              {t({ en: 'Ratio', es: 'Ratio' })}
            </div>
            <div className="text-white font-bold text-2xl">{scale.ratio}</div>
          </div>
        </div>

        <div className="space-y-6">
          {scale.levels.slice().reverse().map((level, idx) => (
            <div
              key={idx}
              className="group relative"
            >
              {showMeasurements && (
                <div className="flex items-center gap-4 mb-2 text-xs text-gray-500">
                  <span className="w-16">{level.size}px</span>
                  <span className="w-24">LH: {level.lineHeight}</span>
                  <span className="w-24">Weight: {level.weight}</span>
                  <span className="flex-1 text-violet-400">{t(level.use)}</span>
                </div>
              )}
              <div
                style={{
                  fontSize: `${level.size}px`,
                  lineHeight: level.lineHeight,
                  fontWeight: level.weight
                }}
                className="text-white"
              >
                {t(level.label)} - {t({ 
                  en: 'The quick brown fox jumps over the lazy dog', 
                  es: 'El veloz murciélago hindú comía feliz cardillo' 
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Font Pairing Examples */}
      <div>
        <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
          <Type className="size-5 text-violet-400" />
          {t({ en: 'Font Pairing Examples', es: 'Ejemplos de Emparejamiento de Fuentes' })}
        </h4>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {fontPairs.map((p, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedPair(idx)}
              className={`p-6 rounded-xl border-2 text-left transition-all ${
                selectedPair === idx
                  ? 'border-violet-500 bg-violet-500/10'
                  : 'border-white/10 bg-white/5 hover:border-white/20'
              }`}
            >
              <div className="text-sm text-violet-400 font-semibold mb-3">{p.name}</div>
              <div className={`text-2xl font-bold text-white mb-2 ${p.heading.style}`}>
                {t({ en: 'Heading', es: 'Encabezado' })}
              </div>
              <div className={`text-sm text-gray-400 mb-3 ${p.body.style}`}>
                {t({ en: 'Body text example with readable content', es: 'Ejemplo de texto de cuerpo con contenido legible' })}
              </div>
              <div className="text-xs text-gray-500">
                <div>{p.heading.name} + {p.body.name}</div>
                <div className="text-violet-400 mt-1">{t(p.use)}</div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Practical Tips */}
      <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6">
        <h5 className="text-blue-400 font-semibold mb-3 flex items-center gap-2">
          <Type className="size-5" />
          {t({ en: 'Pro Tips', es: 'Consejos Pro' })}
        </h5>
        <ul className="space-y-2 text-sm text-gray-300">
          <li className="flex items-start gap-2">
            <span className="text-blue-400 mt-0.5">•</span>
            <span>{t({ 
              en: 'Start with 1.25 (Major Third) for most projects — it\'s versatile and tested.',
              es: 'Comienza con 1.25 (Tercera Mayor) para la mayoría de proyectos — es versátil y probado.'
            })}</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-400 mt-0.5">•</span>
            <span>{t({ 
              en: 'Use smaller ratios (1.2) for data-heavy UIs to keep content compact.',
              es: 'Usa ratios menores (1.2) para UIs con muchos datos para mantener el contenido compacto.'
            })}</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-400 mt-0.5">•</span>
            <span>{t({ 
              en: 'Line height for body text should be 1.5-1.6 for optimal readability.',
              es: 'La altura de línea para texto de cuerpo debería ser 1.5-1.6 para legibilidad óptima.'
            })}</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-400 mt-0.5">•</span>
            <span>{t({ 
              en: 'Never go below 14px for UI text — accessibility matters.',
              es: 'Nunca bajes de 14px para texto UI — la accesibilidad importa.'
            })}</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-400 mt-0.5">•</span>
            <span>{t({ 
              en: 'Limit line length to 50-75 characters for comfortable reading.',
              es: 'Limita la longitud de línea a 50-75 caracteres para lectura cómoda.'
            })}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}