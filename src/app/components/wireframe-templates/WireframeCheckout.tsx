import React from 'react';
import { useLanguage } from '../layout/LanguageContext';
import { ArrowLeft, CheckCircle2, ArrowRight, Lock } from 'lucide-react';

export function WireframeCheckout() {
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
          <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-800 border border-zinc-700 text-zinc-400 text-xs font-medium">🛒 Wireframe Template</div>
          <h1 className="text-3xl font-bold text-white mb-3">Checkout Template</h1>
          <p className="text-zinc-400 max-w-3xl">
            {t({ en: 'An e-commerce checkout flow with order summary and payment form.', es: 'Un flujo de checkout e-commerce con resumen de orden y formulario de pago.' })}
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="bg-zinc-900/50 border-2 border-zinc-800 border-dashed rounded-2xl p-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Checkout Form */}
            <div className="lg:col-span-2 space-y-6">
              {/* Shipping */}
              <div className="border-2 border-zinc-700 border-dashed rounded-lg p-6">
                <div className="h-6 w-40 bg-zinc-700 rounded mb-6" />
                <div className="grid grid-cols-2 gap-4">
                  <div><div className="h-3 w-20 bg-zinc-700 rounded mb-2" /><div className="h-10 border-2 border-zinc-700 rounded-lg" /></div>
                  <div><div className="h-3 w-20 bg-zinc-700 rounded mb-2" /><div className="h-10 border-2 border-zinc-700 rounded-lg" /></div>
                  <div className="col-span-2"><div className="h-3 w-24 bg-zinc-700 rounded mb-2" /><div className="h-10 border-2 border-zinc-700 rounded-lg" /></div>
                  <div><div className="h-3 w-16 bg-zinc-700 rounded mb-2" /><div className="h-10 border-2 border-zinc-700 rounded-lg" /></div>
                  <div><div className="h-3 w-20 bg-zinc-700 rounded mb-2" /><div className="h-10 border-2 border-zinc-700 rounded-lg" /></div>
                </div>
              </div>

              {/* Payment */}
              <div className="border-2 border-zinc-700 border-dashed rounded-lg p-6">
                <div className="flex items-center gap-2 mb-6"><Lock className="size-5 text-zinc-600" /><div className="h-6 w-48 bg-zinc-700 rounded" /></div>
                <div className="space-y-4">
                  <div><div className="h-3 w-32 bg-zinc-700 rounded mb-2" /><div className="h-10 border-2 border-zinc-700 rounded-lg" /></div>
                  <div className="grid grid-cols-2 gap-4">
                    <div><div className="h-3 w-28 bg-zinc-700 rounded mb-2" /><div className="h-10 border-2 border-zinc-700 rounded-lg" /></div>
                    <div><div className="h-3 w-16 bg-zinc-700 rounded mb-2" /><div className="h-10 border-2 border-zinc-700 rounded-lg" /></div>
                  </div>
                </div>
              </div>

              {/* Terms */}
              <div className="border-2 border-zinc-700 border-dashed rounded-lg p-4 flex items-start gap-3">
                <div className="w-5 h-5 border-2 border-zinc-700 rounded" />
                <div className="flex-1 space-y-1"><div className="h-3 bg-zinc-700 rounded" /><div className="h-2 bg-zinc-700 rounded w-5/6" /></div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="border-2 border-zinc-700 border-dashed rounded-lg p-6 h-fit sticky top-4">
              <div className="h-6 w-32 bg-zinc-700 rounded mb-6" />
              <div className="space-y-4 mb-6">
                {[1,2,3].map(i => (
                  <div key={i} className="flex gap-4">
                    <div className="w-16 h-16 bg-zinc-700 rounded" />
                    <div className="flex-1"><div className="h-4 bg-zinc-700 rounded mb-2" /><div className="h-3 bg-zinc-700 rounded w-3/4" /></div>
                    <div className="h-4 w-16 bg-zinc-700 rounded" />
                  </div>
                ))}
              </div>
              <div className="border-t-2 border-zinc-700 pt-4 space-y-2 mb-6">
                <div className="flex justify-between"><div className="h-3 w-20 bg-zinc-700 rounded" /><div className="h-3 w-16 bg-zinc-700 rounded" /></div>
                <div className="flex justify-between"><div className="h-3 w-24 bg-zinc-700 rounded" /><div className="h-3 w-16 bg-zinc-700 rounded" /></div>
                <div className="flex justify-between items-center pt-2"><div className="h-5 w-16 bg-zinc-700 rounded" /><div className="h-5 w-20 bg-zinc-600 rounded" /></div>
              </div>
              <div className="h-12 bg-zinc-600 rounded-lg mb-3" />
              <div className="text-center"><div className="h-2 w-48 bg-zinc-700 rounded mx-auto" /></div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="bg-gradient-to-br from-blue-950/30 to-indigo-950/30 border border-blue-500/20 rounded-xl p-6">
            <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2"><CheckCircle2 className="size-5 text-blue-400" />{t({ en: 'What to Validate', es: 'Qué Validar' })}</h2>
            <ul className="space-y-2 text-sm text-zinc-300">
              <li className="flex items-start gap-2"><CheckCircle2 className="size-4 text-blue-400 mt-0.5 shrink-0" /><span>{t({ en: 'Is order summary always visible?', es: '¿El resumen de orden es siempre visible?' })}</span></li>
              <li className="flex items-start gap-2"><CheckCircle2 className="size-4 text-blue-400 mt-0.5 shrink-0" /><span>{t({ en: 'Is payment section secure and clear?', es: '¿La sección de pago es segura y clara?' })}</span></li>
              <li className="flex items-start gap-2"><CheckCircle2 className="size-4 text-blue-400 mt-0.5 shrink-0" /><span>{t({ en: 'Can users review before submitting?', es: '¿Los usuarios pueden revisar antes de enviar?' })}</span></li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-950/30 to-pink-950/30 border border-purple-500/20 rounded-xl p-6">
            <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2"><ArrowRight className="size-5 text-purple-400" />{t({ en: 'Suggested User Flow', es: 'Flujo de Usuario Sugerido' })}</h2>
            <ol className="space-y-2 text-sm text-zinc-300">
              <li className="flex items-start gap-3"><span className="text-purple-400 font-bold shrink-0">1.</span><span>{t({ en: 'User reviews order summary', es: 'Usuario revisa resumen de orden' })}</span></li>
              <li className="flex items-start gap-3"><span className="text-purple-400 font-bold shrink-0">2.</span><span>{t({ en: 'Enters shipping information', es: 'Ingresa información de envío' })}</span></li>
              <li className="flex items-start gap-3"><span className="text-purple-400 font-bold shrink-0">3.</span><span>{t({ en: 'Adds payment details', es: 'Agrega detalles de pago' })}</span></li>
              <li className="flex items-start gap-3"><span className="text-purple-400 font-bold shrink-0">4.</span><span>{t({ en: 'Agrees to terms → places order', es: 'Acepta términos → realiza orden' })}</span></li>
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
