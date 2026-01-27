import { useState } from 'react';
import { useLanguage } from '@/app/components/layout/LanguageContext';

export function PositionExample() {
  const { t } = useLanguage();
  const [pattern, setPattern] = useState<'f-pattern' | 'z-pattern'>('f-pattern');

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-medium text-neutral-700">
          {t({
            en: 'Position: Top-left gets seen first',
            es: 'Posición: Superior izquierda se ve primero'
          })}
        </h4>
        <div className="flex gap-2">
          <button
            onClick={() => setPattern('f-pattern')}
            className={`px-3 py-1.5 text-xs rounded-md transition-colors ${
              pattern === 'f-pattern' 
                ? 'bg-blue-600 text-white' 
                : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-700'
            }`}
          >
            F-Pattern
          </button>
          <button
            onClick={() => setPattern('z-pattern')}
            className={`px-3 py-1.5 text-xs rounded-md transition-colors ${
              pattern === 'z-pattern' 
                ? 'bg-blue-600 text-white' 
                : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-700'
            }`}
          >
            Z-Pattern
          </button>
        </div>
      </div>

      <div className="border border-neutral-200 rounded-lg p-6 bg-white relative overflow-hidden">
        {pattern === 'f-pattern' ? (
          <>
            {/* F-Pattern overlay */}
            <div className="absolute inset-0 pointer-events-none z-10">
              <svg className="w-full h-full" viewBox="0 0 400 300">
                <path
                  d="M 40 40 L 360 40 M 40 40 L 40 260 M 40 120 L 280 120"
                  stroke="#3b82f6"
                  strokeWidth="3"
                  strokeDasharray="8,4"
                  fill="none"
                  opacity="0.6"
                />
                <circle cx="40" cy="40" r="8" fill="#3b82f6" opacity="0.8">
                  <animate attributeName="r" values="8;12;8" dur="2s" repeatCount="indefinite" />
                </circle>
              </svg>
            </div>

            <div className="space-y-6 relative">
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></div>
                <h3 className="text-xl font-bold text-neutral-900">
                  {t({ en: 'Main Headline (Seen First)', es: 'Titular Principal (Visto Primero)' })}
                </h3>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-blue-500 mt-1.5 animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                <p className="text-neutral-700">
                  {t({ 
                    en: 'Users scan horizontally at the top of the page, reading the full line.',
                    es: 'Los usuarios escanean horizontalmente en la parte superior de la página, leyendo la línea completa.'
                  })}
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-blue-400 mt-1.5 animate-pulse" style={{ animationDelay: '0.6s' }}></div>
                <p className="text-neutral-700">
                  {t({ 
                    en: 'Then scan down the left side, occasionally reading right.',
                    es: 'Luego escanean hacia abajo por el lado izquierdo, ocasionalmente leyendo a la derecha.'
                  })}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-neutral-50 p-4 rounded-lg">
                  <p className="text-sm text-neutral-600">
                    {t({ en: 'Less attention here', es: 'Menos atención aquí' })}
                  </p>
                </div>
                <div className="bg-neutral-50 p-4 rounded-lg">
                  <p className="text-sm text-neutral-600">
                    {t({ en: 'Minimal attention', es: 'Atención mínima' })}
                  </p>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Z-Pattern overlay */}
            <div className="absolute inset-0 pointer-events-none z-10">
              <svg className="w-full h-full" viewBox="0 0 400 200">
                <path
                  d="M 40 40 L 360 40 L 40 160 L 360 160"
                  stroke="#3b82f6"
                  strokeWidth="3"
                  strokeDasharray="8,4"
                  fill="none"
                  opacity="0.6"
                />
                <circle cx="40" cy="40" r="8" fill="#3b82f6" opacity="0.8">
                  <animate attributeName="r" values="8;12;8" dur="2s" repeatCount="indefinite" />
                </circle>
              </svg>
            </div>

            <div className="space-y-8 relative">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></div>
                  <h3 className="text-xl font-bold text-neutral-900">
                    {t({ en: 'Logo/Brand', es: 'Logo/Marca' })}
                  </h3>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium">
                    {t({ en: 'CTA Button', es: 'Botón CTA' })}
                  </button>
                </div>
              </div>

              <div className="text-center py-8">
                <p className="text-neutral-600">
                  {t({ 
                    en: 'Users scan diagonally across sparse layouts',
                    es: 'Los usuarios escanean diagonalmente en layouts dispersos'
                  })}
                </p>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" style={{ animationDelay: '0.8s' }}></div>
                  <p className="text-sm text-neutral-700">
                    {t({ en: 'Supporting info', es: 'Info de apoyo' })}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-300 animate-pulse" style={{ animationDelay: '1.2s' }}></div>
                  <p className="text-sm text-neutral-600">
                    {t({ en: 'Final action', es: 'Acción final' })}
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      <p className="text-sm text-neutral-600">
        {pattern === 'f-pattern' 
          ? t({
              en: '📖 F-Pattern: Common for text-heavy content (articles, search results)',
              es: '📖 Patrón F: Común para contenido con mucho texto (artículos, resultados de búsqueda)'
            })
          : t({
              en: '⚡ Z-Pattern: Common for sparse layouts (landing pages, hero sections)',
              es: '⚡ Patrón Z: Común para layouts dispersos (landing pages, secciones hero)'
            })
        }
      </p>
    </div>
  );
}