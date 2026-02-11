import React, { useState } from 'react';
import { useLanguage } from '../../layout/LanguageContext';
import { copyToClipboard } from '../../../utils/clipboard';
import { 
  Palette, 
  Type, 
  Grid3x3, 
  Circle,
  Box,
  Layout,
  Sparkles,
  Copy,
  Check,
  BookOpen,
  Lightbulb
} from 'lucide-react';

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    copyToClipboard(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition-colors text-zinc-400 hover:text-white"
      title="Copy to clipboard"
    >
      {copied ? <Check className="size-4 text-green-400" /> : <Copy className="size-4" />}
    </button>
  );
}

export function DesignSystemFoundations() {
  const { t } = useLanguage();

  return (
    <div className="space-y-16">
      {/* Colors */}
      <section id="colors">
        <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
          <Palette className="size-8 text-indigo-400" />
          {t({ en: 'Colors', es: 'Colores' })}
        </h2>

        {/* Primary Colors */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-white mb-4">
            {t({ en: 'Primary & Accent', es: 'Primario y Acento' })}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Indigo 600', value: '#4f46e5', css: 'bg-indigo-600', usage: 'Primary CTA, links' },
              { name: 'Indigo 500', value: '#6366f1', css: 'bg-indigo-500', usage: 'Hover states' },
              { name: 'Indigo 400', value: '#818cf8', css: 'bg-indigo-400', usage: 'Icons, accents' },
              { name: 'Purple 600', value: '#9333ea', css: 'bg-purple-600', usage: 'Secondary accent' }
            ].map((color) => (
              <div key={color.name} className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-4">
                <div className={`${color.css} h-20 rounded-lg mb-3`} />
                <div className="flex items-center justify-between mb-1">
                  <p className="font-medium text-white text-sm">{color.name}</p>
                  <CopyButton text={color.value} />
                </div>
                <p className="text-xs text-zinc-500 mb-1">{color.value}</p>
                <p className="text-xs text-zinc-400">{color.usage}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Background Layers */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-white mb-4">
            {t({ en: 'Background Layers (Dark UI)', es: 'Capas de Fondo (UI Oscura)' })}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { name: 'Base', value: '#000000', css: 'bg-black', layer: 'Page background' },
              { name: 'Zinc 950', value: '#09090b', css: 'bg-zinc-950', layer: 'Cards, drawers' },
              { name: 'Zinc 900', value: '#18181b', css: 'bg-zinc-900', layer: 'Elevated cards' },
              { name: 'Zinc 800', value: '#27272a', css: 'bg-zinc-800', layer: 'Borders, dividers' },
              { name: 'Zinc 700', value: '#3f3f46', css: 'bg-zinc-700', layer: 'Hover states' }
            ].map((color) => (
              <div key={color.name} className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-4">
                <div className={`${color.css} h-16 rounded-lg mb-3 border border-zinc-700`} />
                <div className="flex items-center justify-between mb-1">
                  <p className="font-medium text-white text-sm">{color.name}</p>
                  <CopyButton text={color.value} />
                </div>
                <p className="text-xs text-zinc-500 mb-1">{color.value}</p>
                <p className="text-xs text-zinc-400">{color.layer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Semantic Colors */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-white mb-4">
            {t({ en: 'Semantic Colors', es: 'Colores Semánticos' })}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Success', value: '#22c55e', css: 'bg-green-500', usage: 'Completed, correct' },
              { name: 'Warning', value: '#eab308', css: 'bg-yellow-500', usage: 'Caution, pending' },
              { name: 'Error', value: '#ef4444', css: 'bg-red-500', usage: 'Errors, incorrect' },
              { name: 'Info', value: '#3b82f6', css: 'bg-blue-500', usage: 'Information, tips' }
            ].map((color) => (
              <div key={color.name} className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-4">
                <div className={`${color.css} h-20 rounded-lg mb-3`} />
                <div className="flex items-center justify-between mb-1">
                  <p className="font-medium text-white text-sm">{color.name}</p>
                  <CopyButton text={color.value} />
                </div>
                <p className="text-xs text-zinc-500 mb-1">{color.value}</p>
                <p className="text-xs text-zinc-400">{color.usage}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contrast Guidance */}
        <div className="bg-gradient-to-br from-blue-950/30 to-indigo-950/30 border border-blue-500/20 rounded-xl p-6">
          <h4 className="font-semibold text-white mb-3">
            {t({ en: 'Contrast Guidelines (WCAG)', es: 'Guías de Contraste (WCAG)' })}
          </h4>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400" />
              <span className="text-zinc-300">
                <strong className="text-white">AAA:</strong> 7:1 contrast ratio (White on Zinc-950 = 17:1)
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-yellow-400" />
              <span className="text-zinc-300">
                <strong className="text-white">AA:</strong> 4.5:1 contrast ratio (Zinc-300 on Zinc-950 = 8:1)
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-indigo-400" />
              <span className="text-zinc-300">
                <strong className="text-white">Target:</strong> All text must meet AA minimum (4.5:1)
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Typography */}
      <section id="typography">
        <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
          <Type className="size-8 text-indigo-400" />
          {t({ en: 'Typography', es: 'Tipografía' })}
        </h2>

        {/* Type Scale */}
        <div className="space-y-4 mb-8">
          {[
            { name: 'H1', size: 'text-4xl md:text-5xl', weight: 'font-bold', lineHeight: 'leading-tight', sample: 'Design System Title' },
            { name: 'H2', size: 'text-3xl md:text-4xl', weight: 'font-bold', lineHeight: 'leading-tight', sample: 'Section Heading' },
            { name: 'H3', size: 'text-2xl', weight: 'font-semibold', lineHeight: 'leading-snug', sample: 'Subsection Title' },
            { name: 'H4', size: 'text-xl', weight: 'font-semibold', lineHeight: 'leading-snug', sample: 'Card Title' },
            { name: 'Body Large', size: 'text-lg', weight: 'font-normal', lineHeight: 'leading-relaxed', sample: 'Introduction paragraph text' },
            { name: 'Body', size: 'text-base', weight: 'font-normal', lineHeight: 'leading-relaxed', sample: 'Regular paragraph text for reading' },
            { name: 'Body Small', size: 'text-sm', weight: 'font-normal', lineHeight: 'leading-relaxed', sample: 'Secondary information and labels' },
            { name: 'Caption', size: 'text-xs', weight: 'font-normal', lineHeight: 'leading-normal', sample: 'Timestamps, metadata, helper text' }
          ].map((type) => (
            <div key={type.name} className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-sm text-zinc-500 mb-1">{type.name}</p>
                  <code className="text-xs text-indigo-400">
                    {type.size} {type.weight} {type.lineHeight}
                  </code>
                </div>
                <CopyButton text={`${type.size} ${type.weight} ${type.lineHeight}`} />
              </div>
              <p className={`${type.size} ${type.weight} ${type.lineHeight} text-white`}>
                {type.sample}
              </p>
            </div>
          ))}
        </div>

        {/* Typography Rules */}
        <div className="bg-gradient-to-br from-purple-950/30 to-pink-950/30 border border-purple-500/20 rounded-xl p-6">
          <h4 className="font-semibold text-white mb-3">
            {t({ en: 'Typography Usage Rules', es: 'Reglas de Uso de Tipografía' })}
          </h4>
          <ul className="space-y-2 text-sm text-zinc-300">
            <li className="flex items-start gap-2">
              <span className="text-purple-400 mt-0.5">•</span>
              <span><strong className="text-white">One H1 per page</strong> - Use for main page title only</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-400 mt-0.5">•</span>
              <span><strong className="text-white">Line length:</strong> Max 75 characters (~800px) for optimal readability</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-400 mt-0.5">•</span>
              <span><strong className="text-white">Line height:</strong> 1.5-1.75 for body text (leading-relaxed)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-400 mt-0.5">•</span>
              <span><strong className="text-white">Hierarchy:</strong> Don't skip levels (H2 → H3, not H2 → H4)</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Spacing System */}
      <section id="spacing">
        <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
          <Grid3x3 className="size-8 text-indigo-400" />
          {t({ en: 'Spacing System', es: 'Sistema de Espaciado' })}
        </h2>

        <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 mb-6">
          <p className="text-zinc-300 mb-4">
            {t({ 
              en: 'UX Fusion uses an 8pt grid system (multiples of 4px) for consistent spacing.',
              es: 'UX Fusion usa un sistema de grid de 8pt (múltiplos de 4px) para espaciado consistente.'
            })}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { token: '1', px: '4px', usage: 'Tiny gaps' },
              { token: '2', px: '8px', usage: 'Small gaps' },
              { token: '3', px: '12px', usage: 'Default gap' },
              { token: '4', px: '16px', usage: 'Card padding' },
              { token: '6', px: '24px', usage: 'Section gaps' },
              { token: '8', px: '32px', usage: 'Large gaps' },
              { token: '12', px: '48px', usage: 'Section spacing' },
              { token: '16', px: '64px', usage: 'Page sections' },
              { token: '20', px: '80px', usage: 'Hero spacing' },
              { token: '24', px: '96px', usage: 'Large sections' }
            ].map((space) => (
              <div key={space.token} className="text-center">
                <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4 mb-2">
                  <div 
                    className="bg-indigo-500 mx-auto rounded" 
                    style={{ width: space.px, height: space.px }}
                  />
                </div>
                <div className="flex items-center justify-between gap-1">
                  <div className="text-left flex-1">
                    <p className="text-sm font-mono text-white">{space.token}</p>
                    <p className="text-xs text-zinc-500">{space.px}</p>
                  </div>
                  <CopyButton text={`space-${space.token}`} />
                </div>
                <p className="text-xs text-zinc-400 mt-1">{space.usage}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-950/30 to-emerald-950/30 border border-green-500/20 rounded-xl p-6">
          <h4 className="font-semibold text-white mb-3">
            {t({ en: 'Spacing Usage', es: 'Uso de Espaciado' })}
          </h4>
          <ul className="space-y-2 text-sm text-zinc-300">
            <li className="flex items-start gap-2">
              <span className="text-green-400 mt-0.5">•</span>
              <span><strong className="text-white">space-y-6:</strong> Between sections within a card (24px)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-400 mt-0.5">•</span>
              <span><strong className="text-white">mb-12:</strong> Between major page sections (48px)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-400 mt-0.5">•</span>
              <span><strong className="text-white">p-6:</strong> Standard card padding (24px)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-400 mt-0.5">•</span>
              <span><strong className="text-white">gap-4:</strong> Between grid items (16px)</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Radius & Shadows */}
      <section id="radius">
        <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
          <Circle className="size-8 text-indigo-400" />
          {t({ en: 'Border Radius & Shadows', es: 'Radio de Borde y Sombras' })}
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              {t({ en: 'Border Radius Scale', es: 'Escala de Radio de Borde' })}
            </h3>
            <div className="space-y-3">
              {[
                { name: 'Small', class: 'rounded-md', value: '6px' },
                { name: 'Medium', class: 'rounded-lg', value: '8px' },
                { name: 'Large', class: 'rounded-xl', value: '12px' },
                { name: 'Extra Large', class: 'rounded-2xl', value: '16px' },
                { name: 'Full', class: 'rounded-full', value: '9999px' }
              ].map((radius) => (
                <div key={radius.name} className="flex items-center gap-4">
                  <div className={`w-20 h-20 bg-indigo-500 ${radius.class}`} />
                  <div className="flex-1">
                    <p className="font-medium text-white">{radius.name}</p>
                    <code className="text-xs text-indigo-400">{radius.class}</code>
                    <p className="text-xs text-zinc-500">{radius.value}</p>
                  </div>
                  <CopyButton text={radius.class} />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              {t({ en: 'Shadow Scale (Dark Mode)', es: 'Escala de Sombras (Modo Oscuro)' })}
            </h3>
            <div className="space-y-3">
              {[
                { name: 'Small', class: 'shadow-sm', desc: 'Subtle elevation' },
                { name: 'Medium', class: 'shadow-md', desc: 'Cards' },
                { name: 'Large', class: 'shadow-lg', desc: 'Modals' },
                { name: 'Extra Large', class: 'shadow-xl', desc: 'Drawers' },
                { name: '2XL', class: 'shadow-2xl', desc: 'Overlays' }
              ].map((shadow) => (
                <div key={shadow.name} className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4">
                  <div className={`w-full h-16 bg-zinc-800 rounded-lg ${shadow.class}`} />
                  <div className="flex items-center justify-between mt-3">
                    <div>
                      <p className="font-medium text-white text-sm">{shadow.name}</p>
                      <code className="text-xs text-indigo-400">{shadow.class}</code>
                      <p className="text-xs text-zinc-500">{shadow.desc}</p>
                    </div>
                    <CopyButton text={shadow.class} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Layout & Grid */}
      <section id="layout">
        <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
          <Layout className="size-8 text-indigo-400" />
          {t({ en: 'Layout & Responsive Grid', es: 'Layout y Grid Responsivo' })}
        </h2>

        <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 mb-6">
          <h3 className="text-lg font-semibold text-white mb-4">
            {t({ en: 'Container Widths', es: 'Anchos de Contenedor' })}
          </h3>
          <div className="space-y-3">
            {[
              { name: 'Max Width (Content)', value: '800px', class: 'max-w-3xl', usage: 'Lesson content, long-form text' },
              { name: 'Max Width (Page)', value: '1280px', class: 'max-w-7xl', usage: 'Page sections, grids' },
              { name: 'Drawer Width', value: '540px', class: 'w-[540px]', usage: 'Preview drawer (desktop)' }
            ].map((container) => (
              <div key={container.name} className="flex items-center justify-between p-4 bg-zinc-900/50 border border-zinc-800 rounded-lg">
                <div>
                  <p className="font-medium text-white">{container.name}</p>
                  <code className="text-xs text-indigo-400">{container.class}</code>
                  <p className="text-xs text-zinc-500 mt-1">{container.usage}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-white font-mono">{container.value}</p>
                  <CopyButton text={container.class} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-white mb-4">
            {t({ en: 'Responsive Breakpoints', es: 'Breakpoints Responsivos' })}
          </h3>
          <div className="space-y-2 text-sm text-zinc-300">
            <div className="flex items-center justify-between p-3 bg-zinc-900/50 rounded-lg">
              <span><strong className="text-white">sm:</strong> 640px</span>
              <code className="text-xs text-indigo-400">Tablet and up</code>
            </div>
            <div className="flex items-center justify-between p-3 bg-zinc-900/50 rounded-lg">
              <span><strong className="text-white">md:</strong> 768px</span>
              <code className="text-xs text-indigo-400">Desktop small</code>
            </div>
            <div className="flex items-center justify-between p-3 bg-zinc-900/50 rounded-lg">
              <span><strong className="text-white">lg:</strong> 1024px</span>
              <code className="text-xs text-indigo-400">Desktop</code>
            </div>
            <div className="flex items-center justify-between p-3 bg-zinc-900/50 rounded-lg">
              <span><strong className="text-white">xl:</strong> 1280px</span>
              <code className="text-xs text-indigo-400">Desktop large</code>
            </div>
          </div>
        </div>
      </section>

      {/* Icons */}
      <section id="icons">
        <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
          <Sparkles className="size-8 text-indigo-400" />
          {t({ en: 'Icons', es: 'Iconos' })}
        </h2>

        <div className="bg-gradient-to-br from-amber-950/30 to-yellow-950/30 border border-amber-500/20 rounded-xl p-6">
          <h4 className="font-semibold text-white mb-4">
            {t({ en: 'Icon Guidelines', es: 'Guías de Iconos' })}
          </h4>
          <ul className="space-y-3 text-sm text-zinc-300">
            <li className="flex items-start gap-2">
              <span className="text-amber-400 mt-0.5">•</span>
              <span><strong className="text-white">Library:</strong> Lucide React (consistent stroke-based icons)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-400 mt-0.5">•</span>
              <span><strong className="text-white">Sizes:</strong> size-4 (16px), size-5 (20px), size-6 (24px), size-8 (32px)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-400 mt-0.5">•</span>
              <span><strong className="text-white">Colors:</strong> Match section theme (indigo-400, yellow-400, green-400, etc.)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-400 mt-0.5">•</span>
              <span><strong className="text-white">Usage:</strong> Use icons to support text, not replace it (except icon-only buttons)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-400 mt-0.5">•</span>
              <span><strong className="text-white">Accessibility:</strong> Add aria-label for icon-only buttons</span>
            </li>
          </ul>

          <div className="mt-6 flex items-center gap-2 flex-wrap">
            <span className="text-sm text-zinc-400">Common icons:</span>
            <div className="flex items-center gap-2 text-indigo-400">
              <BookOpen className="size-5" />
              <Lightbulb className="size-5" />
              <Type className="size-5" />
              <Palette className="size-5" />
              <Box className="size-5" />
              <Check className="size-5" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}