import React from 'react';
import { useLanguage } from '../layout/LanguageContext';
import { ArrowLeft, CheckCircle2, ArrowRight } from 'lucide-react';

export function WireframeConfirmation() {
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
          <button onClick={handleBack} className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors">
            <ArrowLeft className="size-4" />
            {t({ en: 'Back to Wireframe Kit', es: 'Volver al Kit Wireframe' })}
          </button>
        </div>
      </div>

      <div className="border-b border-white/5 bg-gradient-to-b from-zinc-900/50 to-transparent">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-800 border border-zinc-700 text-zinc-400 text-xs font-medium">✅ Wireframe Template</div>
          <h1 className="text-3xl font-bold text-white mb-3">Confirmation Template</h1>
          <p className="text-zinc-400 max-w-3xl">
            {t({ en: 'A success state page confirming user action completion (order, signup, booking, etc.).', es: 'Una página de estado de éxito confirmando completado de acción del usuario (orden, registro, reserva, etc.).' })}
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="bg-zinc-900/50 border-2 border-zinc-800 border-dashed rounded-2xl p-8">
          {/* Hero Section */}
          <div className="border-2 border-zinc-700 border-dashed rounded-lg p-12 text-center mb-8">
            <div className="w-20 h-20 bg-zinc-700 rounded-full mx-auto mb-6 flex items-center justify-center">
              <CheckCircle2 className="size-12 text-zinc-500" />
            </div>
            <div className="h-8 w-64 bg-zinc-700 rounded mx-auto mb-3" />
            <div className="h-4 w-96 bg-zinc-700 rounded mx-auto mb-2" />
            <div className="h-4 w-80 bg-zinc-700 rounded mx-auto" />
          </div>

          {/* Order Details */}
          <div className="border-2 border-zinc-700 border-dashed rounded-lg p-8 mb-8">
            <div className="flex items-center justify-between mb-6">
              <div className="h-6 w-40 bg-zinc-700 rounded" />
              <div className="h-4 w-32 bg-zinc-700 rounded" />
            </div>

            {/* Items */}
            <div className="space-y-4 mb-6">
              {[1,2,3].map(i => (
                <div key={i} className="flex items-center gap-4 p-4 border-2 border-zinc-700 border-dashed rounded-lg">
                  <div className="w-16 h-16 bg-zinc-700 rounded" />
                  <div className="flex-1">
                    <div className="h-4 bg-zinc-700 rounded mb-2 w-3/4" />
                    <div className="h-3 bg-zinc-700 rounded w-1/2" />
                  </div>
                  <div className="h-4 w-16 bg-zinc-700 rounded" />
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="border-t-2 border-zinc-700 pt-6 space-y-3">
              <div className="flex justify-between"><div className="h-3 w-24 bg-zinc-700 rounded" /><div className="h-3 w-20 bg-zinc-700 rounded" /></div>
              <div className="flex justify-between"><div className="h-3 w-32 bg-zinc-700 rounded" /><div className="h-3 w-20 bg-zinc-700 rounded" /></div>
              <div className="flex justify-between items-center pt-3 border-t-2 border-zinc-700">
                <div className="h-5 w-20 bg-zinc-700 rounded" />
                <div className="h-5 w-24 bg-zinc-600 rounded" />
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="border-2 border-zinc-700 border-dashed rounded-lg p-8 mb-8">
            <div className="h-6 w-32 bg-zinc-700 rounded mb-6" />
            <div className="space-y-4">
              {[1,2,3].map(i => (
                <div key={i} className="flex items-start gap-4 p-4 bg-zinc-800/50 rounded-lg">
                  <div className="w-8 h-8 bg-zinc-700 rounded-full shrink-0" />
                  <div className="flex-1 space-y-2">
                    <div className="h-4 bg-zinc-700 rounded w-3/4" />
                    <div className="h-3 bg-zinc-700 rounded" />
                    <div className="h-3 bg-zinc-700 rounded w-5/6" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTAs */}
          <div className="grid grid-cols-2 gap-4">
            <div className="h-12 border-2 border-zinc-700 rounded-lg" />
            <div className="h-12 bg-zinc-600 rounded-lg" />
          </div>

          {/* Support Info */}
          <div className="mt-8 text-center border-2 border-zinc-700 border-dashed rounded-lg p-6">
            <div className="h-3 w-64 bg-zinc-700 rounded mx-auto mb-2" />
            <div className="h-3 w-48 bg-zinc-700 rounded mx-auto" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="bg-gradient-to-br from-blue-950/30 to-indigo-950/30 border border-blue-500/20 rounded-xl p-6">
            <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2"><CheckCircle2 className="size-5 text-blue-400" />{t({ en: 'What to Validate', es: 'Qué Validar' })}</h2>
            <ul className="space-y-2 text-sm text-zinc-300">
              <li className="flex items-start gap-2"><CheckCircle2 className="size-4 text-blue-400 mt-0.5 shrink-0" /><span>{t({ en: 'Is success clearly communicated?', es: '¿El éxito está claramente comunicado?' })}</span></li>
              <li className="flex items-start gap-2"><CheckCircle2 className="size-4 text-blue-400 mt-0.5 shrink-0" /><span>{t({ en: 'Are next steps obvious?', es: '¿Los próximos pasos son obvios?' })}</span></li>
              <li className="flex items-start gap-2"><CheckCircle2 className="size-4 text-blue-400 mt-0.5 shrink-0" /><span>{t({ en: 'Can user access confirmation details?', es: '¿El usuario puede acceder a detalles de confirmación?' })}</span></li>
              <li className="flex items-start gap-2"><CheckCircle2 className="size-4 text-blue-400 mt-0.5 shrink-0" /><span>{t({ en: 'Is support information available?', es: '¿La información de soporte está disponible?' })}</span></li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-950/30 to-pink-950/30 border border-purple-500/20 rounded-xl p-6">
            <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2"><ArrowRight className="size-5 text-purple-400" />{t({ en: 'Suggested User Flow', es: 'Flujo de Usuario Sugerido' })}</h2>
            <ol className="space-y-2 text-sm text-zinc-300">
              <li className="flex items-start gap-3"><span className="text-purple-400 font-bold shrink-0">1.</span><span>{t({ en: 'User completes action → lands on confirmation', es: 'Usuario completa acción → llega a confirmación' })}</span></li>
              <li className="flex items-start gap-3"><span className="text-purple-400 font-bold shrink-0">2.</span><span>{t({ en: 'Sees success message and details', es: 'Ve mensaje de éxito y detalles' })}</span></li>
              <li className="flex items-start gap-3"><span className="text-purple-400 font-bold shrink-0">3.</span><span>{t({ en: 'Reviews order summary', es: 'Revisa resumen de orden' })}</span></li>
              <li className="flex items-start gap-3"><span className="text-purple-400 font-bold shrink-0">4.</span><span>{t({ en: 'Reads next steps', es: 'Lee próximos pasos' })}</span></li>
              <li className="flex items-start gap-3"><span className="text-purple-400 font-bold shrink-0">5.</span><span>{t({ en: 'Takes action (continue, download, etc.)', es: 'Toma acción (continuar, descargar, etc.)' })}</span></li>
            </ol>
          </div>
        </div>

        <div className="mt-8 bg-gradient-to-r from-indigo-950/50 to-purple-950/50 border border-indigo-500/30 rounded-xl p-8 text-center">
          <h3 className="text-xl font-semibold text-white mb-3">{t({ en: 'Ready to upgrade to high-fidelity?', es: '¿Listo para actualizar a alta fidelidad?' })}</h3>
          <p className="text-zinc-400 mb-6">{t({ en: 'Apply colors, typography, and UI components from our design system.', es: 'Aplica colores, tipografía y componentes UI de nuestro sistema de diseño.' })}</p>
          <button onClick={handleUpgrade} className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors inline-flex items-center gap-2">
            {t({ en: 'Explore UI Kit', es: 'Explorar UI Kit' })}<ArrowRight className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
