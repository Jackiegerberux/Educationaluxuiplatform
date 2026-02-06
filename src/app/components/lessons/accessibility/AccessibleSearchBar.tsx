import { useState } from 'react';
import { useLanguage } from '@/app/components/layout/LanguageContext';
import { Search } from 'lucide-react';

export function AccessibleSearchBar() {
  const { t } = useLanguage();
  const [isAccessible, setIsAccessible] = useState(true);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-medium text-zinc-300">
          {t({
            en: 'Search Bar: Semantic HTML & ARIA',
            es: 'Barra de Búsqueda: HTML Semántico & ARIA'
          })}
        </h4>
        <button
          onClick={() => setIsAccessible(!isAccessible)}
          className={`px-3 py-1.5 text-xs rounded-md transition-colors ${
            isAccessible 
              ? 'bg-green-500/10 hover:bg-green-500/20 text-green-400 border border-green-500/30'
              : 'bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/30'
          }`}
        >
          {isAccessible 
            ? t({ en: '✓ Accessible', es: '✓ Accesible' })
            : t({ en: '✗ Inaccessible', es: '✗ Inaccesible' })
          }
        </button>
      </div>

      <div className="border border-zinc-800 rounded-lg p-8 bg-zinc-950">
        {isAccessible ? (
          // Accessible version
          <form role="search" className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="accessible-search" className="block text-sm font-medium text-zinc-300">
                {t({ en: 'Search products', es: 'Buscar productos' })}
              </label>
              <div className="relative flex items-center gap-2">
                <input
                  type="search"
                  id="accessible-search"
                  placeholder={t({ en: 'Search...', es: 'Buscar...' })}
                  aria-label={t({ en: 'Search products', es: 'Buscar productos' })}
                  className="flex-1 px-4 py-3 bg-zinc-900 border-2 border-zinc-700 rounded-lg text-white placeholder:text-zinc-500 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20"
                />
                <button 
                  type="submit" 
                  aria-label={t({ en: 'Submit search', es: 'Enviar búsqueda' })}
                  className="px-4 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-green-500/50"
                >
                  <Search className="size-5" />
                </button>
              </div>
            </div>
          </form>
        ) : (
          // Inaccessible version
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder={t({ en: 'Search...', es: 'Buscar...' })}
                className="flex-1 px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-500 placeholder:text-zinc-600"
                style={{ color: '#999' }} // Low contrast
              />
              <div 
                className="px-4 py-3 bg-zinc-800 text-zinc-600 rounded-lg cursor-pointer"
                onClick={() => {}}
              >
                <Search className="size-5" />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Explanation */}
      <div className={`p-4 rounded-lg border ${
        isAccessible 
          ? 'bg-green-950/20 border-green-500/30' 
          : 'bg-red-950/20 border-red-500/30'
      }`}>
        <p className="text-sm text-zinc-300 mb-2">
          <strong className={isAccessible ? 'text-green-400' : 'text-red-400'}>
            {isAccessible 
              ? t({ en: '✓ Accessible:', es: '✓ Accesible:' })
              : t({ en: '✗ Inaccessible:', es: '✗ Inaccesible:' })
            }
          </strong>
        </p>
        {isAccessible ? (
          <ul className="text-xs text-zinc-400 space-y-1 list-disc list-inside">
            <li>{t({ en: 'Has visible <label> for screen readers', es: 'Tiene <label> visible para lectores de pantalla' })}</li>
            <li>{t({ en: 'role="search" identifies purpose', es: 'role="search" identifica el propósito' })}</li>
            <li>{t({ en: 'Proper ARIA labels on input and button', es: 'Labels ARIA apropiados en input y botón' })}</li>
            <li>{t({ en: 'High contrast (7:1 WCAG AAA)', es: 'Alto contraste (7:1 WCAG AAA)' })}</li>
            <li>{t({ en: 'Keyboard accessible (Tab + Enter)', es: 'Accesible con teclado (Tab + Enter)' })}</li>
            <li>{t({ en: 'Focus indicators visible', es: 'Indicadores de foco visibles' })}</li>
          </ul>
        ) : (
          <ul className="text-xs text-zinc-400 space-y-1 list-disc list-inside">
            <li>{t({ en: 'No <label> - screen readers say "unlabeled"', es: 'Sin <label> - lectores dicen "sin etiquetar"' })}</li>
            <li>{t({ en: 'No role="search" - purpose unclear', es: 'Sin role="search" - propósito poco claro' })}</li>
            <li>{t({ en: '<div> instead of <button> - not keyboard accessible', es: '<div> en lugar de <button> - no accesible con teclado' })}</li>
            <li>{t({ en: 'Low contrast (2.1:1 fails WCAG)', es: 'Bajo contraste (2.1:1 no cumple WCAG)' })}</li>
            <li>{t({ en: 'Placeholder only - disappears when typing', es: 'Solo placeholder - desaparece al escribir' })}</li>
          </ul>
        )}
      </div>
    </div>
  );
}
