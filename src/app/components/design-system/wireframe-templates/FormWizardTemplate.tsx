import React from 'react';
import { useLanguage } from '../../layout/LanguageContext';
import { ArrowLeft, CheckCircle2, ArrowRight, FileText } from 'lucide-react';

interface TemplateProps {
  onBack: () => void;
  onUpgrade: () => void;
}

export function FormWizardTemplate({ onBack, onUpgrade }: TemplateProps) {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-black">
      <div className="border-b border-zinc-800 bg-zinc-950 sticky top-16 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <button onClick={onBack} className="flex items-center gap-2 text-zinc-400 hover:text-white">
            <ArrowLeft className="size-4" />
            {t({ en: 'Back', es: 'Volver' })}
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="flex items-center gap-3 mb-8">
          <FileText className="size-8 text-zinc-600" />
          <h1 className="text-3xl font-bold text-white">
            {t({ en: 'Form Wizard', es: 'Asistente de Formulario' })}
          </h1>
        </div>

        <div className="space-y-8">
          <div className="bg-zinc-900/50 border-2 border-zinc-700 border-dashed rounded-xl p-8">
            {/* Stepper */}
            <div className="flex items-center justify-between mb-8">
              {[1, 2, 3, 4].map((step, idx) => (
                <React.Fragment key={step}>
                  <div className="flex items-center gap-2">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${idx === 1 ? 'bg-zinc-600' : 'border-2 border-zinc-700'}`}>
                      <span className="text-zinc-400 text-sm font-bold">{step}</span>
                    </div>
                    <div className="h-3 w-16 bg-zinc-700 rounded" />
                  </div>
                  {idx < 3 && <div className="h-px flex-1 bg-zinc-700 mx-2" />}
                </React.Fragment>
              ))}
            </div>

            {/* Form Fields */}
            <div className="space-y-6 max-w-xl">
              {[1, 2, 3].map((i) => (
                <div key={i} className="space-y-2">
                  <div className="h-3 bg-zinc-700 rounded w-32" />
                  <div className="h-12 border-2 border-zinc-700 rounded" />
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="flex gap-3 mt-8">
              <div className="h-10 border-2 border-zinc-600 rounded w-32" />
              <div className="h-10 bg-zinc-600 rounded w-32" />
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-950/30 to-indigo-950/30 border border-blue-500/20 rounded-xl p-6">
            <h3 className="font-semibold text-white mb-3">{t({ en: 'Validate', es: 'Validar' })}</h3>
            <ul className="text-sm text-zinc-300 space-y-1">
              <li>• {t({ en: 'Progress is clear', es: 'Progreso es claro' })}</li>
              <li>• {t({ en: 'Can navigate back', es: 'Puede navegar atrás' })}</li>
              <li>• {t({ en: 'Validation per step', es: 'Validación por paso' })}</li>
            </ul>
            <button onClick={onUpgrade} className="w-full mt-4 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm">
              {t({ en: 'Upgrade', es: 'Actualizar' })} →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}