import React from 'react';
import { useLanguage } from '../../layout/LanguageContext';
import { ArrowLeft, CheckCircle, ArrowRight } from 'lucide-react';

interface TemplateProps { onBack: () => void; onUpgrade: () => void; }

export function ConfirmationTemplate({ onBack, onUpgrade }: TemplateProps) {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-black">
      <div className="border-b border-zinc-800 bg-zinc-950 sticky top-16 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <button onClick={onBack} className="flex items-center gap-2 text-zinc-400 hover:text-white">
            <ArrowLeft className="size-4" /> {t({ en: 'Back', es: 'Volver' })}
          </button>
        </div>
      </div>
      <div className="max-w-2xl mx-auto px-6 py-16">
        <div className="bg-zinc-900/50 border-2 border-zinc-700 border-dashed rounded-xl p-12 text-center space-y-6">
          <div className="w-20 h-20 bg-zinc-700 rounded-full mx-auto flex items-center justify-center">
            <CheckCircle className="size-10 text-zinc-600" />
          </div>
          <div className="space-y-3">
            <div className="h-8 bg-zinc-700 rounded w-64 mx-auto" />
            <div className="h-4 bg-zinc-700 rounded w-96 mx-auto" />
            <div className="h-4 bg-zinc-700 rounded w-80 mx-auto" />
          </div>
          <div className="bg-zinc-800 border-2 border-zinc-700 rounded-lg p-6 space-y-3 text-left">
            <div className="h-4 bg-zinc-700 rounded w-32" />
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex justify-between">
                <div className="h-3 bg-zinc-700 rounded w-32" />
                <div className="h-3 bg-zinc-700 rounded w-24" />
              </div>
            ))}
          </div>
          <div className="flex gap-4 justify-center pt-4">
            <div className="h-12 border-2 border-zinc-600 rounded w-40" />
            <div className="h-12 bg-zinc-600 rounded w-40" />
          </div>
        </div>
        <div className="mt-8 bg-gradient-to-br from-blue-950/30 to-indigo-950/30 border border-blue-500/20 rounded-xl p-6">
          <h3 className="font-semibold text-white mb-3">{t({ en: 'Validate', es: 'Validar' })}</h3>
          <ul className="text-sm text-zinc-300 space-y-1 mb-4">
            <li>• {t({ en: 'Success is obvious', es: 'Éxito es obvio' })}</li>
            <li>• {t({ en: 'Next steps clear', es: 'Próximos pasos claros' })}</li>
            <li>• {t({ en: 'Summary complete', es: 'Resumen completo' })}</li>
          </ul>
          <button onClick={onUpgrade} className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg">
            {t({ en: 'Upgrade to UI Kit', es: 'Actualizar a UI Kit' })} <ArrowRight className="size-4 inline" />
          </button>
        </div>
      </div>
    </div>
  );
}