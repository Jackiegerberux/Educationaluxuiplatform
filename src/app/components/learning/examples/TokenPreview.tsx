import React, { useState } from 'react';
import { Code2 } from 'lucide-react';
import { Badge } from '@/app/components/atoms/Badge';
import { Button } from '@/app/components/atoms/Button';
import { useLanguage } from '@/app/components/layout/LanguageContext';

export function TokenPreview() {
  const { t } = useLanguage();
  const [showCode, setShowCode] = useState(false);

  const colorTokens = [
    { name: '--color-indigo-500', value: '#6366f1' },
    { name: '--color-purple-600', value: '#9333ea' },
    { name: '--color-gray-900', value: '#18181b' },
    { name: '--color-gray-800', value: '#27272a' }
  ];

  const spacingTokens = [
    { name: '--space-2', value: '8px' },
    { name: '--space-4', value: '16px' },
    { name: '--space-6', value: '24px' },
    { name: '--space-8', value: '32px' }
  ];

  return (
    <div className="space-y-6">
      {/* Color Tokens */}
      <div>
        <p className="text-sm font-medium text-zinc-400 mb-3">
          {t({ en: 'Color Tokens', es: 'Tokens de Color' })}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {colorTokens.map((token) => (
            <div key={token.name} className="flex flex-col gap-2">
              <div
                className="h-16 rounded-lg border border-zinc-700 shadow-inner"
                style={{ backgroundColor: token.value }}
              />
              <div className="text-xs">
                <p className="font-mono text-zinc-300">{token.name}</p>
                <p className="text-zinc-500">{token.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Spacing Tokens */}
      <div>
        <p className="text-sm font-medium text-zinc-400 mb-3">
          {t({ en: 'Spacing Scale (8pt Grid)', es: 'Escala de Espaciado (Grid 8pt)' })}
        </p>
        <div className="space-y-2">
          {spacingTokens.map((token) => (
            <div key={token.name} className="flex items-center gap-3">
              <div
                className="h-6 bg-gradient-to-r from-indigo-500 to-purple-600 rounded"
                style={{ width: token.value }}
              />
              <div className="text-xs flex-1">
                <span className="font-mono text-zinc-300">{token.name}</span>
                <span className="text-zinc-500 ml-2">({token.value})</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Toggle Code View */}
      <div className="pt-4 border-t border-zinc-800">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setShowCode(!showCode)}
        >
          <Code2 className="size-4" />
          {t({ 
            en: showCode ? 'Hide CSS Variables' : 'Show as CSS Variables',
            es: showCode ? 'Ocultar Variables CSS' : 'Mostrar como Variables CSS'
          })}
        </Button>
      </div>
    </div>
  );
}