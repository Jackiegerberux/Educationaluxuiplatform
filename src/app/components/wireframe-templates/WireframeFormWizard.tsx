import React from 'react';
import { useLanguage } from '../layout/LanguageContext';
import { ArrowLeft, CheckCircle2, ArrowRight } from 'lucide-react';

export function WireframeFormWizard() {
  const { t } = useLanguage();

  const handleBack = () => {
    const event = new CustomEvent('navigate', { detail: 'design-system' });
    window.dispatchEvent(event);
  };

  const handleUpgrade = () => {
    const event = new CustomEvent('navigate', { detail: 'design-system' });
    window.dispatchEvent(event);
  };

  return (
    <div className="min-h-screen bg-black">
      <div className="border-b border-white/5 bg-zinc-950">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <button
            onClick={handleBack}
            className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="size-4" />
            {t({ en: 'Back to Wireframe Kit', es: 'Volver al Kit Wireframe' })}
          </button>
        </div>
      </div>

      <div className="border-b border-white/5 bg-gradient-to-b from-zinc-900/50 to-transparent">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-800 border border-zinc-700 text-zinc-400 text-xs font-medium">
            📝 Wireframe Template
          </div>
          <h1 className="text-3xl font-bold text-white mb-3">Form Wizard Template</h1>
          <p className="text-zinc-400 max-w-3xl">
            {t({
              en: 'A multi-step form pattern that breaks complex input into manageable chunks. Ideal for onboarding, surveys, checkout flows, and account setup.',
              es: 'Un patrón de formulario multi-paso que divide input complejo en chunks manejables. Ideal para onboarding, encuestas, flujos de checkout y configuración de cuenta.'
            })}
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="bg-zinc-900/50 border-2 border-zinc-800 border-dashed rounded-2xl p-8">
          {/* Stepper */}
          <div className="border-2 border-zinc-700 border-dashed rounded-lg p-6 mb-8">
            <div className="flex items-center justify-between">
              {/* Step 1 - Completed */}
              <div className="flex items-center gap-3 flex-1">
                <div className="w-10 h-10 bg-zinc-600 rounded-full flex items-center justify-center shrink-0">
                  <CheckCircle2 className="size-5 text-zinc-300" />
                </div>
                <div>
                  <div className="h-3 w-24 bg-zinc-600 rounded mb-1" />
                  <div className="h-2 w-32 bg-zinc-700 rounded" />
                </div>
              </div>
              <div className="h-px w-full bg-zinc-600 mx-4" />

              {/* Step 2 - Active */}
              <div className="flex items-center gap-3 flex-1">
                <div className="w-10 h-10 bg-zinc-500 rounded-full border-2 border-zinc-400 shrink-0" />
                <div>
                  <div className="h-3 w-28 bg-zinc-500 rounded mb-1" />
                  <div className="h-2 w-36 bg-zinc-700 rounded" />
                </div>
              </div>
              <div className="h-px w-full bg-zinc-700 mx-4" />

              {/* Step 3 - Upcoming */}
              <div className="flex items-center gap-3 flex-1">
                <div className="w-10 h-10 border-2 border-zinc-700 rounded-full shrink-0" />
                <div>
                  <div className="h-3 w-20 bg-zinc-700 rounded mb-1" />
                  <div className="h-2 w-24 bg-zinc-700 rounded" />
                </div>
              </div>
            </div>
          </div>

          {/* Form Content */}
          <div className="border-2 border-zinc-700 border-dashed rounded-lg p-8">
            {/* Step Title */}
            <div className="mb-6">
              <div className="h-6 w-48 bg-zinc-700 rounded mb-2" />
              <div className="h-3 w-64 bg-zinc-700 rounded" />
            </div>

            {/* Form Fields */}
            <div className="space-y-6">
              {/* Text Input */}
              <div>
                <div className="h-3 w-32 bg-zinc-700 rounded mb-2" />
                <div className="h-12 border-2 border-zinc-700 rounded-lg" />
              </div>

              {/* Select */}
              <div>
                <div className="h-3 w-40 bg-zinc-700 rounded mb-2" />
                <div className="h-12 border-2 border-zinc-700 rounded-lg flex items-center justify-end pr-4">
                  <div className="w-4 h-4 border-t-2 border-r-2 border-zinc-700 transform rotate-[135deg]" />
                </div>
              </div>

              {/* Radio Group */}
              <div>
                <div className="h-3 w-36 bg-zinc-700 rounded mb-3" />
                <div className="space-y-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center gap-3 p-4 border-2 border-zinc-700 border-dashed rounded-lg">
                      <div className={`w-5 h-5 rounded-full border-2 ${i === 2 ? 'border-zinc-600 bg-zinc-600' : 'border-zinc-700'}`} />
                      <div className="flex-1">
                        <div className="h-3 bg-zinc-700 rounded w-32 mb-1" />
                        <div className="h-2 bg-zinc-700 rounded w-48" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Checkbox */}
              <div className="flex items-start gap-3 p-4 border-2 border-zinc-700 border-dashed rounded-lg">
                <div className="w-5 h-5 border-2 border-zinc-700 rounded" />
                <div className="flex-1">
                  <div className="h-3 bg-zinc-700 rounded mb-1" />
                  <div className="h-2 bg-zinc-700 rounded w-5/6" />
                </div>
              </div>
            </div>

            {/* Helper Text */}
            <div className="mt-6 p-4 bg-zinc-800/50 border-2 border-zinc-700 border-dashed rounded-lg">
              <div className="h-2 bg-zinc-700 rounded mb-1" />
              <div className="h-2 bg-zinc-700 rounded w-4/5" />
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-8">
            <div className="h-12 w-32 border-2 border-zinc-700 rounded-lg" />
            <div className="h-12 w-32 bg-zinc-600 rounded-lg" />
          </div>

          {/* Progress Bar */}
          <div className="mt-6 border-2 border-zinc-700 border-dashed rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="h-2 w-24 bg-zinc-700 rounded" />
              <div className="h-2 w-12 bg-zinc-700 rounded" />
            </div>
            <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
              <div className="h-full w-2/3 bg-zinc-600 rounded-full" />
            </div>
          </div>
        </div>

        {/* Template Info Grid */}
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="bg-gradient-to-br from-blue-950/30 to-indigo-950/30 border border-blue-500/20 rounded-xl p-6">
            <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <CheckCircle2 className="size-5 text-blue-400" />
              {t({ en: 'What to Validate', es: 'Qué Validar' })}
            </h2>
            <ul className="space-y-2 text-sm text-zinc-300">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="size-4 text-blue-400 mt-0.5 shrink-0" />
                <span>{t({ en: 'Is the current step clearly indicated?', es: '¿El paso actual está claramente indicado?' })}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="size-4 text-blue-400 mt-0.5 shrink-0" />
                <span>{t({ en: 'Can users see progress and remaining steps?', es: '¿Los usuarios pueden ver progreso y pasos restantes?' })}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="size-4 text-blue-400 mt-0.5 shrink-0" />
                <span>{t({ en: 'Is each step focused on a single task?', es: '¿Cada paso está enfocado en una sola tarea?' })}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="size-4 text-blue-400 mt-0.5 shrink-0" />
                <span>{t({ en: 'Can users go back to edit previous steps?', es: '¿Los usuarios pueden volver a editar pasos previos?' })}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="size-4 text-blue-400 mt-0.5 shrink-0" />
                <span>{t({ en: 'Are validation errors shown clearly?', es: '¿Los errores de validación se muestran claramente?' })}</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-950/30 to-pink-950/30 border border-purple-500/20 rounded-xl p-6">
            <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <ArrowRight className="size-5 text-purple-400" />
              {t({ en: 'Suggested User Flow', es: 'Flujo de Usuario Sugerido' })}
            </h2>
            <ol className="space-y-2 text-sm text-zinc-300">
              <li className="flex items-start gap-3">
                <span className="text-purple-400 font-bold shrink-0">1.</span>
                <span>{t({ en: 'User starts Step 1 → sees stepper showing 3 total steps', es: 'Usuario empieza Paso 1 → ve stepper mostrando 3 pasos totales' })}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 font-bold shrink-0">2.</span>
                <span>{t({ en: 'Completes fields → clicks "Next"', es: 'Completa campos → hace clic en "Siguiente"' })}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 font-bold shrink-0">3.</span>
                <span>{t({ en: 'Step 2 appears → reviews progress bar (66%)', es: 'Paso 2 aparece → revisa barra de progreso (66%)' })}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 font-bold shrink-0">4.</span>
                <span>{t({ en: 'Can click "Back" to edit Step 1 if needed', es: 'Puede hacer clic en "Atrás" para editar Paso 1 si es necesario' })}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 font-bold shrink-0">5.</span>
                <span>{t({ en: 'Completes all steps → sees confirmation', es: 'Completa todos los pasos → ve confirmación' })}</span>
              </li>
            </ol>
          </div>
        </div>

        <div className="mt-8 bg-gradient-to-r from-indigo-950/50 to-purple-950/50 border border-indigo-500/30 rounded-xl p-8 text-center">
          <h3 className="text-xl font-semibold text-white mb-3">
            {t({ en: 'Ready to upgrade to high-fidelity?', es: '¿Listo para actualizar a alta fidelidad?' })}
          </h3>
          <p className="text-zinc-400 mb-6">
            {t({
              en: 'Apply colors, typography, and UI components from our design system.',
              es: 'Aplica colores, tipografía y componentes UI de nuestro sistema de diseño.'
            })}
          </p>
          <button
            onClick={handleUpgrade}
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors inline-flex items-center gap-2"
          >
            {t({ en: 'Explore UI Kit', es: 'Explorar UI Kit' })}
            <ArrowRight className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
