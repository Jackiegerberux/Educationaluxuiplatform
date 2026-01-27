import { useState } from 'react';
import { useLanguage } from '@/app/components/layout/LanguageContext';

export function WhiteSpaceExample() {
  const { t } = useLanguage();
  const [spacious, setSpacious] = useState(true);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-medium text-neutral-700">
          {t({
            en: 'White Space: Breathing room makes elements stand out',
            es: 'Espacio en Blanco: Espacio de respiración hace que elementos se destaquen'
          })}
        </h4>
        <button
          onClick={() => setSpacious(!spacious)}
          className="px-3 py-1.5 text-xs rounded-md bg-neutral-100 hover:bg-neutral-200 text-neutral-700 transition-colors"
        >
          {spacious 
            ? t({ en: 'Remove Space', es: 'Quitar Espacio' })
            : t({ en: 'Add Space', es: 'Agregar Espacio' })
          }
        </button>
      </div>

      <div className="border border-neutral-200 rounded-lg bg-white overflow-hidden">
        <div className={`transition-all duration-300 ${
          spacious ? 'p-12' : 'p-2'
        }`}>
          <div className={`bg-blue-50 border-2 border-blue-200 rounded-lg transition-all duration-300 ${
            spacious ? 'p-8' : 'p-2'
          }`}>
            <div className={`space-y-2 ${spacious ? 'space-y-4' : 'space-y-1'}`}>
              <h3 className={`font-bold text-blue-900 transition-all duration-300 ${
                spacious ? 'text-2xl' : 'text-base'
              }`}>
                {t({ en: 'Featured Content', es: 'Contenido Destacado' })}
              </h3>
              <p className={`text-blue-800 transition-all duration-300 ${
                spacious ? 'text-base' : 'text-xs'
              }`}>
                {t({ 
                  en: 'White space around this element makes it feel more important and easier to focus on.',
                  es: 'El espacio en blanco alrededor de este elemento lo hace sentir más importante y más fácil de enfocarse.'
                })}
              </p>
              <button className={`bg-blue-600 text-white rounded-md font-medium transition-all duration-300 ${
                spacious ? 'px-6 py-3 text-base' : 'px-2 py-1 text-xs'
              }`}>
                {t({ en: 'Learn More', es: 'Saber Más' })}
              </button>
            </div>
          </div>
        </div>

        <div className="bg-neutral-50 border-t border-neutral-200 p-4">
          <div className="flex gap-3 text-xs text-neutral-600">
            <div className="flex-1">
              {t({ en: 'Additional info', es: 'Info adicional' })}
            </div>
            <div className="flex-1">
              {t({ en: 'More details', es: 'Más detalles' })}
            </div>
            <div className="flex-1">
              {t({ en: 'Extra content', es: 'Contenido extra' })}
            </div>
          </div>
        </div>
      </div>

      <p className="text-sm text-neutral-600">
        {spacious 
          ? t({
              en: '✓ Generous white space creates visual emphasis and improves readability',
              es: '✓ El espacio en blanco generoso crea énfasis visual y mejora legibilidad'
            })
          : t({
              en: '✗ Cramped spacing makes content compete for attention',
              es: '✗ El espaciado apretado hace que el contenido compita por atención'
            })
        }
      </p>
    </div>
  );
}