import { useState } from 'react';
import { useLanguage } from '@/app/components/layout/LanguageContext';
import { ShoppingCart } from 'lucide-react';

export function AccessibleButton() {
  const { t } = useLanguage();
  const [isAccessible, setIsAccessible] = useState(true);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-medium text-zinc-300">
          {t({
            en: 'Button: Semantic HTML & Keyboard Support',
            es: 'Botón: HTML Semántico & Soporte de Teclado'
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
        <div className="max-w-xs mx-auto space-y-4">
          {/* Product Card Mock */}
          <div className="bg-zinc-900 rounded-lg p-4 border border-zinc-800">
            <div className="aspect-square bg-zinc-800 rounded-lg mb-3 flex items-center justify-center">
              <span className="text-zinc-600 text-sm">Product Image</span>
            </div>
            <h3 className="text-white font-semibold mb-1">Premium Headphones</h3>
            <p className="text-green-400 font-bold mb-3">$299.99</p>
            
            {isAccessible ? (
              // Accessible button
              <button
                type="button"
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2 focus:ring-offset-zinc-950"
                aria-label={t({ en: 'Add Premium Headphones to cart', es: 'Agregar Audífonos Premium al carrito' })}
              >
                <ShoppingCart className="size-5" />
                {t({ en: 'Add to Cart', es: 'Agregar al Carrito' })}
              </button>
            ) : (
              // Inaccessible div
              <div
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-zinc-700 text-zinc-500 rounded-lg font-medium cursor-pointer"
                onClick={() => {}}
              >
                <ShoppingCart className="size-5" />
                {t({ en: 'Add to Cart', es: 'Agregar al Carrito' })}
              </div>
            )}
          </div>

          {/* Keyboard hint */}
          {isAccessible && (
            <div className="text-center text-xs text-zinc-500">
              {t({ en: '💡 Try pressing Tab then Space/Enter', es: '💡 Intenta presionar Tab luego Espacio/Enter' })}
            </div>
          )}
        </div>
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
              ? t({ en: '✓ Accessible Button:', es: '✓ Botón Accesible:' })
              : t({ en: '✗ Inaccessible Button:', es: '✗ Botón Inaccesible:' })
            }
          </strong>
        </p>
        {isAccessible ? (
          <ul className="text-xs text-zinc-400 space-y-1 list-disc list-inside">
            <li>{t({ en: 'Uses semantic <button> element', es: 'Usa elemento <button> semántico' })}</li>
            <li>{t({ en: 'Clear text + descriptive aria-label', es: 'Texto claro + aria-label descriptivo' })}</li>
            <li>{t({ en: 'High contrast 8.59:1 (WCAG AAA)', es: 'Alto contraste 8.59:1 (WCAG AAA)' })}</li>
            <li>{t({ en: 'Keyboard accessible (Tab + Space/Enter)', es: 'Accesible con teclado (Tab + Espacio/Enter)' })}</li>
            <li>{t({ en: 'Visible focus indicator (blue ring)', es: 'Indicador de foco visible (anillo azul)' })}</li>
            <li>{t({ en: 'Screen reader: "Add Premium Headphones to cart, button"', es: 'Lector: "Agregar Audífonos Premium al carrito, botón"' })}</li>
          </ul>
        ) : (
          <ul className="text-xs text-zinc-400 space-y-1 list-disc list-inside">
            <li>{t({ en: 'Uses <div> instead of <button>', es: 'Usa <div> en lugar de <button>' })}</li>
            <li>{t({ en: 'Low contrast 2.3:1 (fails WCAG AA)', es: 'Bajo contraste 2.3:1 (no cumple WCAG AA)' })}</li>
            <li>{t({ en: 'Cannot be reached with Tab key', es: 'No se puede alcanzar con tecla Tab' })}</li>
            <li>{t({ en: 'Space/Enter keys do nothing', es: 'Teclas Espacio/Enter no hacen nada' })}</li>
            <li>{t({ en: 'No focus indicator - users lost', es: 'Sin indicador de foco - usuarios perdidos' })}</li>
            <li>{t({ en: 'Screen reader doesn\'t announce as interactive', es: 'Lector no anuncia como interactivo' })}</li>
          </ul>
        )}
      </div>

      {/* Code comparison */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-green-950/20 border border-green-500/30 rounded-lg p-4">
          <div className="text-xs font-mono text-green-400 mb-2">✓ {t({ en: 'Good', es: 'Bien' })}</div>
          <pre className="text-xs text-zinc-400 overflow-x-auto">
{`<button 
  type="button"
  aria-label="Add to cart"
  class="btn"
>
  Add to Cart
</button>`}
          </pre>
        </div>
        <div className="bg-red-950/20 border border-red-500/30 rounded-lg p-4">
          <div className="text-xs font-mono text-red-400 mb-2">✗ {t({ en: 'Bad', es: 'Mal' })}</div>
          <pre className="text-xs text-zinc-400 overflow-x-auto">
{`<div 
  class="button"
  onclick="addToCart()"
>
  Add to Cart
</div>`}
          </pre>
        </div>
      </div>
    </div>
  );
}
