import React, { useState } from 'react';
import { useLanguage } from '../../layout/LanguageContext';
import { Copy, Check, Palette, Type, Maximize2, Moon } from 'lucide-react';
import { copyToClipboard } from '../../../utils/clipboard';

function TokenRow({ name, value, preview }: { name: string; value: string; preview?: React.ReactNode }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    copyToClipboard(`var(${name})`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group flex items-center gap-4 p-3 rounded-lg hover:bg-zinc-800/50 transition-colors">
      {preview && <div className="shrink-0">{preview}</div>}
      <div className="flex-1">
        <code className="text-sm text-indigo-400 font-mono">{name}</code>
        <div className="text-xs text-zinc-500 font-mono mt-0.5">{value}</div>
      </div>
      <button
        onClick={handleCopy}
        className="opacity-0 group-hover:opacity-100 transition-opacity p-2 hover:bg-zinc-700 rounded"
        title="Copy CSS variable"
      >
        {copied ? (
          <Check className="size-4 text-green-400" />
        ) : (
          <Copy className="size-4 text-zinc-400" />
        )}
      </button>
    </div>
  );
}

function TokenSection({ title, icon: Icon, children }: { title: string; icon: any; children: React.ReactNode }) {
  return (
    <div className="mb-12">
      <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
        <Icon className="size-5 text-indigo-400" />
        {title}
      </h3>
      {children}
    </div>
  );
}

export function DesignSystemTokens() {
  const { t } = useLanguage();

  return (
    <div className="space-y-12">
      {/* Overview */}
      <section>
        <h2 className="text-3xl font-bold text-white mb-6">
          {t({ en: 'Design Tokens', es: 'Tokens de Diseño' })}
        </h2>
        <p className="text-zinc-400 mb-8 max-w-3xl">
          {t({
            en: 'Design tokens are the visual design atoms of the design system. They store values for colors, spacing, typography, and more. Use CSS variables to reference tokens in your components.',
            es: 'Los tokens de diseño son los átomos visuales del sistema de diseño. Almacenan valores para colores, espaciado, tipografía y más. Usa variables CSS para referenciar tokens en tus componentes.'
          })}
        </p>

        <div className="bg-gradient-to-br from-blue-950/30 to-indigo-950/30 border border-blue-500/20 rounded-xl p-6">
          <h3 className="font-semibold text-white mb-3">
            {t({ en: 'How to Use Tokens', es: 'Cómo Usar Tokens' })}
          </h3>
          <div className="space-y-3 text-sm text-zinc-300">
            <p><strong className="text-white">In CSS:</strong> <code className="text-indigo-400 font-mono">background: var(--color-bg-primary);</code></p>
            <p><strong className="text-white">In Tailwind:</strong> <code className="text-indigo-400 font-mono">className="bg-zinc-950 text-zinc-50"</code></p>
            <p><strong className="text-white">Semantic tokens:</strong> Use semantic tokens (--color-bg-*, --color-text-*) instead of primitives for theme-aware UI.</p>
          </div>
        </div>
      </section>

      {/* Color Tokens */}
      <TokenSection title={t({ en: 'Color Tokens - Grayscale', es: 'Tokens de Color - Escala de Grises' })} icon={Palette}>
        <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 space-y-2">
          {[
            { name: '--color-gray-50', value: '#fafafa' },
            { name: '--color-gray-100', value: '#f4f4f5' },
            { name: '--color-gray-200', value: '#e4e4e7' },
            { name: '--color-gray-300', value: '#d4d4d8' },
            { name: '--color-gray-400', value: '#a1a1aa' },
            { name: '--color-gray-500', value: '#71717a' },
            { name: '--color-gray-600', value: '#52525b' },
            { name: '--color-gray-700', value: '#3f3f46' },
            { name: '--color-gray-800', value: '#27272a' },
            { name: '--color-gray-900', value: '#18181b' },
            { name: '--color-gray-950', value: '#09090b' },
          ].map((token) => (
            <TokenRow
              key={token.name}
              name={token.name}
              value={token.value}
              preview={<div className="w-10 h-10 rounded border border-zinc-700" style={{ background: token.value }} />}
            />
          ))}
        </div>
      </TokenSection>

      {/* Semantic Colors */}
      <TokenSection title={t({ en: 'Semantic Color Tokens', es: 'Tokens de Color Semántico' })} icon={Moon}>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Background */}
          <div>
            <h4 className="text-sm font-semibold text-zinc-400 mb-3">Background</h4>
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-4 space-y-2">
              <TokenRow name="--color-bg-primary" value="var(--color-gray-950)" preview={<div className="w-10 h-10 rounded bg-zinc-950 border border-zinc-700" />} />
              <TokenRow name="--color-bg-secondary" value="var(--color-gray-900)" preview={<div className="w-10 h-10 rounded bg-zinc-900 border border-zinc-700" />} />
              <TokenRow name="--color-bg-tertiary" value="var(--color-gray-800)" preview={<div className="w-10 h-10 rounded bg-zinc-800 border border-zinc-700" />} />
              <TokenRow name="--color-bg-surface" value="rgb(24 24 27 / 0.5)" preview={<div className="w-10 h-10 rounded bg-zinc-900/50 border border-zinc-700" />} />
            </div>
          </div>

          {/* Text */}
          <div>
            <h4 className="text-sm font-semibold text-zinc-400 mb-3">Text</h4>
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-4 space-y-2">
              <TokenRow name="--color-text-primary" value="var(--color-gray-50)" preview={<span className="text-zinc-50 font-medium">Aa</span>} />
              <TokenRow name="--color-text-secondary" value="var(--color-gray-300)" preview={<span className="text-zinc-300 font-medium">Aa</span>} />
              <TokenRow name="--color-text-tertiary" value="var(--color-gray-400)" preview={<span className="text-zinc-400 font-medium">Aa</span>} />
              <TokenRow name="--color-text-muted" value="var(--color-gray-500)" preview={<span className="text-zinc-500 font-medium">Aa</span>} />
            </div>
          </div>

          {/* Border */}
          <div>
            <h4 className="text-sm font-semibold text-zinc-400 mb-3">Border</h4>
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-4 space-y-2">
              <TokenRow name="--color-border-primary" value="var(--color-gray-800)" preview={<div className="w-10 h-10 rounded border-2 border-zinc-800" />} />
              <TokenRow name="--color-border-secondary" value="var(--color-gray-700)" preview={<div className="w-10 h-10 rounded border-2 border-zinc-700" />} />
              <TokenRow name="--color-border-focus" value="var(--color-indigo-500)" preview={<div className="w-10 h-10 rounded border-2 border-indigo-500" />} />
            </div>
          </div>

          {/* States */}
          <div>
            <h4 className="text-sm font-semibold text-zinc-400 mb-3">State Colors</h4>
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-4 space-y-2">
              <TokenRow name="--color-success-text" value="var(--color-success-400)" preview={<div className="w-10 h-10 rounded bg-green-400" />} />
              <TokenRow name="--color-warning-text" value="var(--color-warning-400)" preview={<div className="w-10 h-10 rounded bg-yellow-400" />} />
              <TokenRow name="--color-error-text" value="var(--color-error-400)" preview={<div className="w-10 h-10 rounded bg-red-400" />} />
              <TokenRow name="--color-info-text" value="var(--color-info-400)" preview={<div className="w-10 h-10 rounded bg-blue-400" />} />
            </div>
          </div>
        </div>
      </TokenSection>

      {/* Spacing */}
      <TokenSection title={t({ en: 'Spacing Tokens (8pt Grid)', es: 'Tokens de Espaciado (Grid 8pt)' })} icon={Maximize2}>
        <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: '--space-1', value: '4px', px: 4 },
              { name: '--space-2', value: '8px', px: 8 },
              { name: '--space-3', value: '12px', px: 12 },
              { name: '--space-4', value: '16px', px: 16 },
              { name: '--space-5', value: '20px', px: 20 },
              { name: '--space-6', value: '24px', px: 24 },
              { name: '--space-8', value: '32px', px: 32 },
              { name: '--space-10', value: '40px', px: 40 },
              { name: '--space-12', value: '48px', px: 48 },
              { name: '--space-16', value: '64px', px: 64 },
              { name: '--space-20', value: '80px', px: 80 },
              { name: '--space-24', value: '96px', px: 96 },
            ].map((token) => (
              <div key={token.name} className="bg-zinc-800/50 rounded-lg p-3">
                <code className="text-xs text-indigo-400 font-mono block mb-2">{token.name}</code>
                <div className="text-xs text-zinc-500 mb-2">{token.value}</div>
                <div className="h-2 bg-indigo-500 rounded" style={{ width: token.px }} />
              </div>
            ))}
          </div>
        </div>
      </TokenSection>

      {/* Typography */}
      <TokenSection title={t({ en: 'Typography Tokens', es: 'Tokens de Tipografía' })} icon={Type}>
        <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 space-y-6">
          {/* Font Sizes */}
          <div>
            <h4 className="text-sm font-semibold text-zinc-400 mb-4">Font Sizes</h4>
            <div className="space-y-4">
              {[
                { name: '--text-xs', value: '12px', size: '0.75rem' },
                { name: '--text-sm', value: '14px', size: '0.875rem' },
                { name: '--text-base', value: '16px', size: '1rem' },
                { name: '--text-lg', value: '18px', size: '1.125rem' },
                { name: '--text-xl', value: '20px', size: '1.25rem' },
                { name: '--text-2xl', value: '24px', size: '1.5rem' },
                { name: '--text-3xl', value: '30px', size: '1.875rem' },
                { name: '--text-4xl', value: '36px', size: '2.25rem' },
                { name: '--text-5xl', value: '48px', size: '3rem' },
              ].map((token) => (
                <div key={token.name} className="flex items-center justify-between p-3 hover:bg-zinc-800/50 rounded transition-colors">
                  <div>
                    <code className="text-sm text-indigo-400 font-mono">{token.name}</code>
                    <div className="text-xs text-zinc-500 font-mono">{token.value}</div>
                  </div>
                  <span className="text-white" style={{ fontSize: token.size }}>The quick brown fox</span>
                </div>
              ))}
            </div>
          </div>

          {/* Font Weights */}
          <div>
            <h4 className="text-sm font-semibold text-zinc-400 mb-4">Font Weights</h4>
            <div className="space-y-2">
              <TokenRow name="--font-normal" value="400" preview={<span className="font-normal">Normal 400</span>} />
              <TokenRow name="--font-medium" value="500" preview={<span className="font-medium">Medium 500</span>} />
              <TokenRow name="--font-semibold" value="600" preview={<span className="font-semibold">Semibold 600</span>} />
              <TokenRow name="--font-bold" value="700" preview={<span className="font-bold">Bold 700</span>} />
            </div>
          </div>
        </div>
      </TokenSection>

      {/* Radius */}
      <TokenSection title={t({ en: 'Border Radius Tokens', es: 'Tokens de Radio de Borde' })} icon={Maximize2}>
        <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: '--radius-none', value: '0' },
              { name: '--radius-sm', value: '4px' },
              { name: '--radius-base', value: '8px' },
              { name: '--radius-md', value: '12px' },
              { name: '--radius-lg', value: '16px' },
              { name: '--radius-xl', value: '24px' },
              { name: '--radius-2xl', value: '32px' },
              { name: '--radius-full', value: '9999px' },
            ].map((token) => (
              <div key={token.name} className="text-center">
                <div className="w-20 h-20 mx-auto bg-indigo-500 mb-2" style={{ borderRadius: token.value }} />
                <code className="text-xs text-indigo-400 font-mono block">{token.name}</code>
                <div className="text-xs text-zinc-500">{token.value}</div>
              </div>
            ))}
          </div>
        </div>
      </TokenSection>

      {/* Usage Example */}
      <section className="bg-gradient-to-br from-indigo-950/30 to-purple-950/30 border border-indigo-500/20 rounded-xl p-8">
        <h3 className="text-lg font-semibold text-white mb-4">
          {t({ en: 'Token Usage Example', es: 'Ejemplo de Uso de Tokens' })}
        </h3>
        <div className="bg-zinc-950 rounded-lg p-4 font-mono text-sm overflow-x-auto">
          <pre className="text-zinc-300">
{`/* Using tokens in CSS */
.card {
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border-primary);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  color: var(--color-text-primary);
}

.card-title {
  font-size: var(--text-xl);
  font-weight: var(--font-semibold);
  margin-bottom: var(--space-3);
}

.card:hover {
  background: var(--color-bg-hover);
  border-color: var(--color-border-focus);
}`}
          </pre>
        </div>
      </section>
    </div>
  );
}