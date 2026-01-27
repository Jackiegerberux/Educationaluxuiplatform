import { useState } from 'react';
import { useLanguage } from '@/app/components/layout/LanguageContext';

export function SizeHierarchyExample() {
  const { t } = useLanguage();
  const [emphasized, setEmphasized] = useState(true);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-medium text-neutral-700">
          {t({
            en: 'Size: Larger elements draw more attention',
            es: 'Tamaño: Elementos más grandes atraen más atención'
          })}
        </h4>
        <button
          onClick={() => setEmphasized(!emphasized)}
          className="px-3 py-1.5 text-xs rounded-md bg-neutral-100 hover:bg-neutral-200 text-neutral-700 transition-colors"
        >
          {emphasized 
            ? t({ en: 'Remove Emphasis', es: 'Quitar Énfasis' })
            : t({ en: 'Add Emphasis', es: 'Agregar Énfasis' })
          }
        </button>
      </div>

      <div className="border border-neutral-200 rounded-lg p-8 bg-white">
        <div className="space-y-4">
          <h1 
            className={`font-bold text-neutral-900 transition-all duration-300 ${
              emphasized ? 'text-4xl' : 'text-xl'
            }`}
          >
            {t({ en: 'Main Headline', es: 'Titular Principal' })}
          </h1>
          <h2 
            className={`font-semibold text-neutral-900 transition-all duration-300 ${
              emphasized ? 'text-2xl' : 'text-xl'
            }`}
          >
            {t({ en: 'Subheading', es: 'Subtítulo' })}
          </h2>
          <p 
            className={`text-neutral-700 transition-all duration-300 ${
              emphasized ? 'text-base' : 'text-xl'
            }`}
          >
            {t({ 
              en: 'Body text provides detailed information. When all text is the same size, hierarchy is lost.',
              es: 'El texto del cuerpo proporciona información detallada. Cuando todo el texto tiene el mismo tamaño, se pierde la jerarquía.'
            })}
          </p>
        </div>
      </div>

      <p className="text-sm text-neutral-600">
        {emphasized 
          ? t({
              en: '✓ Clear size hierarchy guides users through content levels',
              es: '✓ La jerarquía clara de tamaños guía a los usuarios a través de niveles de contenido'
            })
          : t({
              en: '✗ Without size variation, users struggle to identify what\'s most important',
              es: '✗ Sin variación de tamaño, los usuarios luchan para identificar qué es más importante'
            })
        }
      </p>
    </div>
  );
}