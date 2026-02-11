import { useState } from 'react';
import { useLanguage } from '../layout/LanguageContext';
import { Palette, Copy, Check, RefreshCw, Droplet, Eye, AlertCircle } from 'lucide-react';

import { copyToClipboard } from '../../utils/clipboard';

interface ColorScale {
  shade: number;
  hex: string;
  rgb: { r: number; g: number; b: number };
  contrast: number;
}

// Convert hex to RGB
function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

// Convert RGB to hex
function rgbToHex(r: number, g: number, b: number): string {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
}

// Calculate relative luminance for contrast ratio
function getLuminance(r: number, g: number, b: number): number {
  const [rs, gs, bs] = [r, g, b].map(c => {
    c = c / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

// Calculate contrast ratio
function getContrastRatio(rgb1: { r: number; g: number; b: number }, rgb2: { r: number; g: number; b: number }): number {
  const lum1 = getLuminance(rgb1.r, rgb1.g, rgb1.b);
  const lum2 = getLuminance(rgb2.r, rgb2.g, rgb2.b);
  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);
  return (brightest + 0.05) / (darkest + 0.05);
}

// Generate color scale from base color
function generateColorScale(baseHex: string): ColorScale[] {
  const baseRgb = hexToRgb(baseHex);
  if (!baseRgb) return [];

  const scales: ColorScale[] = [];
  const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
  
  shades.forEach((shade) => {
    let r, g, b;
    
    if (shade < 500) {
      // Lighter shades - interpolate between white and base color
      const factor = (500 - shade) / 500;
      r = Math.round(baseRgb.r + (255 - baseRgb.r) * factor);
      g = Math.round(baseRgb.g + (255 - baseRgb.g) * factor);
      b = Math.round(baseRgb.b + (255 - baseRgb.b) * factor);
    } else if (shade === 500) {
      // Base color
      r = baseRgb.r;
      g = baseRgb.g;
      b = baseRgb.b;
    } else {
      // Darker shades - interpolate between base color and black
      const factor = (shade - 500) / 500;
      r = Math.round(baseRgb.r * (1 - factor));
      g = Math.round(baseRgb.g * (1 - factor));
      b = Math.round(baseRgb.b * (1 - factor));
    }

    const hex = rgbToHex(r, g, b);
    const contrast = getContrastRatio({ r, g, b }, { r: 255, g: 255, b: 255 });

    scales.push({ shade, hex, rgb: { r, g, b }, contrast });
  });

  return scales;
}

const presetColors = [
  { name: 'Blue', hex: '#3B82F6', use: { en: 'Trust, Professional', es: 'Confianza, Profesional' } },
  { name: 'Purple', hex: '#8B5CF6', use: { en: 'Creative, Premium', es: 'Creativo, Premium' } },
  { name: 'Green', hex: '#10B981', use: { en: 'Success, Growth', es: 'Éxito, Crecimiento' } },
  { name: 'Red', hex: '#EF4444', use: { en: 'Error, Urgency', es: 'Error, Urgencia' } },
  { name: 'Orange', hex: '#F59E0B', use: { en: 'Warning, Energy', es: 'Advertencia, Energía' } },
  { name: 'Teal', hex: '#14B8A6', use: { en: 'Modern, Balance', es: 'Moderno, Balance' } }
];

const semanticColors = [
  { 
    name: { en: 'Success', es: 'Éxito' }, 
    base: '#10B981', 
    icon: '✓',
    use: { en: 'Confirmations, positive actions', es: 'Confirmaciones, acciones positivas' }
  },
  { 
    name: { en: 'Error', es: 'Error' }, 
    base: '#EF4444', 
    icon: '✕',
    use: { en: 'Errors, destructive actions', es: 'Errores, acciones destructivas' }
  },
  { 
    name: { en: 'Warning', es: 'Advertencia' }, 
    base: '#F59E0B', 
    icon: '⚠',
    use: { en: 'Caution, important notices', es: 'Precaución, avisos importantes' }
  },
  { 
    name: { en: 'Info', es: 'Info' }, 
    base: '#3B82F6', 
    icon: 'ℹ',
    use: { en: 'Neutral information', es: 'Información neutral' }
  }
];

export function ColorPaletteGenerator() {
  const { t } = useLanguage();
  const [primaryColor, setPrimaryColor] = useState('#3B82F6');
  const [secondaryColor, setSecondaryColor] = useState('#8B5CF6');
  const [copiedValue, setCopiedValue] = useState('');
  const [showRgb, setShowRgb] = useState(false);

  const primaryScale = generateColorScale(primaryColor);
  const secondaryScale = generateColorScale(secondaryColor);

  const handleCopy = (text: string) => {
    if (copyToClipboard(text)) {
      setCopiedValue(text);
      setTimeout(() => setCopiedValue(''), 2000);
    }
  };

  const generateCSSVariables = () => {
    let css = '/* Primary Color Scale */\n:root {\n';
    primaryScale.forEach(scale => {
      css += `  --primary-${scale.shade}: ${scale.hex};\n`;
    });
    css += '\n  /* Secondary Color Scale */\n';
    secondaryScale.forEach(scale => {
      css += `  --secondary-${scale.shade}: ${scale.hex};\n`;
    });
    css += '\n  /* Semantic Colors */\n';
    semanticColors.forEach(color => {
      css += `  --color-${t(color.name).toLowerCase()}: ${color.base};\n`;
    });
    css += '}';
    return css;
  };

  const generateTailwindConfig = () => {
    return `// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
${primaryScale.map(s => `          ${s.shade}: '${s.hex}',`).join('\n')}
        },
        secondary: {
${secondaryScale.map(s => `          ${s.shade}: '${s.hex}',`).join('\n')}
        }
      }
    }
  }
}`;
  };

  return (
    <div className="space-y-8">
      {/* Color Input Section */}
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-white/10">
        <div className="flex items-center justify-between mb-6">
          <h4 className="text-lg font-semibold text-white flex items-center gap-2">
            <Palette className="size-5 text-violet-400" />
            {t({ en: 'Generate Your Palette', es: 'Genera Tu Paleta' })}
          </h4>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowRgb(!showRgb)}
              className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                showRgb 
                  ? 'bg-violet-500/20 text-violet-300' 
                  : 'bg-white/5 text-gray-400 hover:bg-white/10'
              }`}
            >
              <Eye className="size-4 inline mr-1" />
              RGB
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Primary Color Picker */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-3">
              {t({ en: 'Primary Color', es: 'Color Primario' })}
            </label>
            <div className="flex items-center gap-3 mb-4">
              <input
                type="color"
                value={primaryColor}
                onChange={(e) => setPrimaryColor(e.target.value)}
                className="size-12 rounded-lg cursor-pointer border-2 border-white/20"
              />
              <input
                type="text"
                value={primaryColor}
                onChange={(e) => setPrimaryColor(e.target.value)}
                className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:border-violet-500 focus:outline-none"
                placeholder="#3B82F6"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {presetColors.slice(0, 3).map((preset) => (
                <button
                  key={preset.name}
                  onClick={() => setPrimaryColor(preset.hex)}
                  className="px-3 py-1.5 rounded-lg text-xs bg-white/5 hover:bg-white/10 text-gray-300 transition-colors flex items-center gap-2"
                >
                  <span 
                    className="size-3 rounded-full" 
                    style={{ backgroundColor: preset.hex }}
                  />
                  {preset.name}
                </button>
              ))}
            </div>
          </div>

          {/* Secondary Color Picker */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-3">
              {t({ en: 'Secondary Color', es: 'Color Secundario' })}
            </label>
            <div className="flex items-center gap-3 mb-4">
              <input
                type="color"
                value={secondaryColor}
                onChange={(e) => setSecondaryColor(e.target.value)}
                className="size-12 rounded-lg cursor-pointer border-2 border-white/20"
              />
              <input
                type="text"
                value={secondaryColor}
                onChange={(e) => setSecondaryColor(e.target.value)}
                className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:border-violet-500 focus:outline-none"
                placeholder="#8B5CF6"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {presetColors.slice(3, 6).map((preset) => (
                <button
                  key={preset.name}
                  onClick={() => setSecondaryColor(preset.hex)}
                  className="px-3 py-1.5 rounded-lg text-xs bg-white/5 hover:bg-white/10 text-gray-300 transition-colors flex items-center gap-2"
                >
                  <span 
                    className="size-3 rounded-full" 
                    style={{ backgroundColor: preset.hex }}
                  />
                  {preset.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Primary Color Scale */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h5 className="text-white font-semibold flex items-center gap-2">
            <Droplet className="size-5 text-blue-400" />
            {t({ en: 'Primary Scale', es: 'Escala Primaria' })}
          </h5>
          <button
            onClick={() => handleCopy(JSON.stringify(primaryScale.map(s => ({ shade: s.shade, hex: s.hex })), null, 2))}
            className="px-3 py-1.5 bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 rounded-lg transition-colors text-sm flex items-center gap-2"
          >
            {copiedValue.includes(primaryColor) ? <Check className="size-4" /> : <Copy className="size-4" />}
            {t({ en: 'Copy', es: 'Copiar' })}
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-3">
          {primaryScale.map((scale) => (
            <div key={scale.shade} className="group">
              <div
                className="h-24 rounded-lg cursor-pointer hover:scale-105 transition-transform relative overflow-hidden"
                style={{ backgroundColor: scale.hex }}
                onClick={() => handleCopy(scale.hex)}
              >
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <Copy className="size-4 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
              <div className="mt-2 text-center">
                <div className="text-xs font-semibold text-white">{scale.shade}</div>
                <div className="text-xs text-gray-400 font-mono">{scale.hex}</div>
                {showRgb && (
                  <div className="text-xs text-gray-500 mt-1">
                    rgb({scale.rgb.r}, {scale.rgb.g}, {scale.rgb.b})
                  </div>
                )}
                <div className={`text-xs mt-1 ${
                  scale.contrast >= 4.5 ? 'text-green-400' : 
                  scale.contrast >= 3 ? 'text-yellow-400' : 'text-red-400'
                }`}>
                  {scale.contrast.toFixed(1)}:1
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Secondary Color Scale */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h5 className="text-white font-semibold flex items-center gap-2">
            <Droplet className="size-5 text-purple-400" />
            {t({ en: 'Secondary Scale', es: 'Escala Secundaria' })}
          </h5>
          <button
            onClick={() => handleCopy(JSON.stringify(secondaryScale.map(s => ({ shade: s.shade, hex: s.hex })), null, 2))}
            className="px-3 py-1.5 bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 rounded-lg transition-colors text-sm flex items-center gap-2"
          >
            {copiedValue.includes(secondaryColor) ? <Check className="size-4" /> : <Copy className="size-4" />}
            {t({ en: 'Copy', es: 'Copiar' })}
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-3">
          {secondaryScale.map((scale) => (
            <div key={scale.shade} className="group">
              <div
                className="h-24 rounded-lg cursor-pointer hover:scale-105 transition-transform relative overflow-hidden"
                style={{ backgroundColor: scale.hex }}
                onClick={() => handleCopy(scale.hex)}
              >
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <Copy className="size-4 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
              <div className="mt-2 text-center">
                <div className="text-xs font-semibold text-white">{scale.shade}</div>
                <div className="text-xs text-gray-400 font-mono">{scale.hex}</div>
                {showRgb && (
                  <div className="text-xs text-gray-500 mt-1">
                    rgb({scale.rgb.r}, {scale.rgb.g}, {scale.rgb.b})
                  </div>
                )}
                <div className={`text-xs mt-1 ${
                  scale.contrast >= 4.5 ? 'text-green-400' : 
                  scale.contrast >= 3 ? 'text-yellow-400' : 'text-red-400'
                }`}>
                  {scale.contrast.toFixed(1)}:1
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Semantic Colors */}
      <div>
        <h5 className="text-white font-semibold mb-4 flex items-center gap-2">
          <AlertCircle className="size-5 text-violet-400" />
          {t({ en: 'Semantic Colors', es: 'Colores Semánticos' })}
        </h5>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {semanticColors.map((semantic) => {
            const scale = generateColorScale(semantic.base);
            return (
              <div key={semantic.base} className="bg-white/5 rounded-xl p-4 border border-white/10">
                <div className="flex items-center gap-3 mb-3">
                  <div 
                    className="size-10 rounded-lg flex items-center justify-center text-xl"
                    style={{ backgroundColor: semantic.base }}
                  >
                    {semantic.icon}
                  </div>
                  <div>
                    <div className="text-white font-semibold">{t(semantic.name)}</div>
                    <div className="text-xs text-gray-400 font-mono">{semantic.base}</div>
                  </div>
                </div>
                <div className="text-xs text-gray-400 mb-3">{t(semantic.use)}</div>
                <div className="flex gap-1">
                  {scale.filter(s => [100, 300, 500, 700, 900].includes(s.shade)).map((s) => (
                    <div
                      key={s.shade}
                      className="flex-1 h-8 rounded cursor-pointer hover:scale-105 transition-transform"
                      style={{ backgroundColor: s.hex }}
                      onClick={() => handleCopy(s.hex)}
                      title={`${s.shade}: ${s.hex}`}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Export Options */}
      <div className="bg-gradient-to-br from-violet-900/20 to-blue-900/20 rounded-2xl p-6 border border-violet-500/20">
        <h5 className="text-white font-semibold mb-4 flex items-center gap-2">
          <RefreshCw className="size-5 text-violet-400" />
          {t({ en: 'Export Your Palette', es: 'Exportar Tu Paleta' })}
        </h5>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button
            onClick={() => handleCopy(generateCSSVariables())}
            className="p-4 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 transition-colors text-left"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-white font-medium">CSS Variables</span>
              {copiedValue === generateCSSVariables() ? (
                <Check className="size-5 text-green-400" />
              ) : (
                <Copy className="size-5 text-gray-400" />
              )}
            </div>
            <div className="text-xs text-gray-400 font-mono">
              --primary-500: {primaryColor}
            </div>
          </button>
          <button
            onClick={() => handleCopy(generateTailwindConfig())}
            className="p-4 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 transition-colors text-left"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-white font-medium">Tailwind Config</span>
              {copiedValue === generateTailwindConfig() ? (
                <Check className="size-5 text-green-400" />
              ) : (
                <Copy className="size-5 text-gray-400" />
              )}
            </div>
            <div className="text-xs text-gray-400 font-mono">
              primary: {'{ 500: \''}...{'\' }'}
            </div>
          </button>
        </div>
      </div>

      {/* Contrast Guide */}
      <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6">
        <h5 className="text-blue-400 font-semibold mb-3 flex items-center gap-2">
          <Eye className="size-5" />
          {t({ en: 'Contrast Ratio Guide', es: 'Guía de Ratio de Contraste' })}
        </h5>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="flex items-start gap-2">
            <span className="text-green-400 mt-0.5">✓</span>
            <div>
              <div className="text-white font-medium">≥ 4.5:1</div>
              <div className="text-gray-400">{t({ en: 'AA Normal text', es: 'AA Texto normal' })}</div>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-yellow-400 mt-0.5">⚠</span>
            <div>
              <div className="text-white font-medium">≥ 3:1</div>
              <div className="text-gray-400">{t({ en: 'AA Large text', es: 'AA Texto grande' })}</div>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-red-400 mt-0.5">✕</span>
            <div>
              <div className="text-white font-medium">{'< 3:1'}</div>
              <div className="text-gray-400">{t({ en: 'Fails WCAG', es: 'Falla WCAG' })}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}