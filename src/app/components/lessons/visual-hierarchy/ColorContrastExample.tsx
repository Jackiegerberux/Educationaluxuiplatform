import { useState } from 'react';
import { useLanguage } from '@/app/components/layout/LanguageContext';

export function ColorContrastExample() {
  const { t } = useLanguage();
  const [highContrast, setHighContrast] = useState(true);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-medium text-neutral-700">
          {t({
            en: 'Color & Contrast: High contrast stands out',
            es: 'Color y Contraste: Alto contraste se destaca'
          })}
        </h4>
        <button
          onClick={() => setHighContrast(!highContrast)}
          className="px-3 py-1.5 text-xs rounded-md bg-neutral-100 hover:bg-neutral-200 text-neutral-700 transition-colors"
        >
          {highContrast 
            ? t({ en: 'Low Contrast', es: 'Bajo Contraste' })
            : t({ en: 'High Contrast', es: 'Alto Contraste' })
          }
        </button>
      </div>

      <div className="border border-neutral-200 rounded-lg p-8 bg-neutral-50">
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg space-y-3">
            <h3 className={`text-xl font-bold transition-colors duration-300 ${
              highContrast ? 'text-neutral-900' : 'text-neutral-400'
            }`}>
              {t({ en: 'Important Announcement', es: 'Anuncio Importante' })}
            </h3>
            <p className={`transition-colors duration-300 ${
              highContrast ? 'text-neutral-700' : 'text-neutral-400'
            }`}>
              {t({ 
                en: 'This message requires your attention and action.',
                es: 'Este mensaje requiere tu atención y acción.'
              })}
            </p>
            <button className={`px-4 py-2 rounded-md font-medium transition-all duration-300 ${
              highContrast 
                ? 'bg-blue-600 text-white hover:bg-blue-700' 
                : 'bg-neutral-300 text-neutral-400'
            }`}>
              {t({ en: 'Take Action', es: 'Tomar Acción' })}
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg space-y-3">
            <h4 className="text-base font-medium text-neutral-500">
              {t({ en: 'Less Important Note', es: 'Nota Menos Importante' })}
            </h4>
            <p className="text-sm text-neutral-500">
              {t({ 
                en: 'This information is secondary and optional.',
                es: 'Esta información es secundaria y opcional.'
              })}
            </p>
          </div>
        </div>
      </div>

      <p className="text-sm text-neutral-600">
        {highContrast 
          ? t({
              en: '✓ High contrast draws attention to primary actions and content',
              es: '✓ El alto contraste atrae atención a acciones y contenido primario'
            })
          : t({
              en: '✗ Low contrast makes it difficult to distinguish important elements',
              es: '✗ El bajo contraste dificulta distinguir elementos importantes'
            })
        }
      </p>
    </div>
  );
}