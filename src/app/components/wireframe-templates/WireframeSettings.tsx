import React from 'react';
import { useNavigate } from 'react-router';
import { useLanguage } from '../layout/LanguageContext';
import { ArrowLeft, CheckCircle2, ArrowRight } from 'lucide-react';

export function WireframeSettings() {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/design-system');
  };

  const handleUpgrade = () => {
    navigate('/design-system');
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
          <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-800 border border-zinc-700 text-zinc-400 text-xs font-medium">⚙️ Wireframe Template</div>
          <h1 className="text-3xl font-bold text-white mb-3">Settings Template</h1>
          <p className="text-zinc-400 max-w-3xl">
            {t({ en: 'A settings page pattern with sidebar navigation and grouped configuration options.', es: 'Un patrón de página de configuración con navegación sidebar y opciones de configuración agrupadas.' })}
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="bg-zinc-900/50 border-2 border-zinc-800 border-dashed rounded-2xl p-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Nav */}
            <div className="border-2 border-zinc-700 border-dashed rounded-lg p-4">
              <div className="h-5 w-32 bg-zinc-700 rounded mb-6" />
              <div className="space-y-2">
                <div className="h-10 bg-zinc-600 rounded-lg" />
                {[1,2,3,4,5].map(i => <div key={i} className="h-10 border-2 border-zinc-700 rounded-lg" />)}
              </div>
            </div>

            {/* Settings Content */}
            <div className="lg:col-span-3 space-y-8">
              {/* Profile Section */}
              <div className="border-2 border-zinc-700 border-dashed rounded-lg p-6">
                <div className="h-6 w-40 bg-zinc-700 rounded mb-6" />
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-20 h-20 bg-zinc-700 rounded-full" />
                  <div className="flex-1 space-y-4">
                    <div><div className="h-3 w-20 bg-zinc-700 rounded mb-2" /><div className="h-10 border-2 border-zinc-700 rounded-lg" /></div>
                    <div><div className="h-3 w-20 bg-zinc-700 rounded mb-2" /><div className="h-10 border-2 border-zinc-700 rounded-lg" /></div>
                  </div>
                </div>
                <div className="h-10 w-32 bg-zinc-600 rounded-lg" />
              </div>

              {/* Preferences */}
              <div className="border-2 border-zinc-700 border-dashed rounded-lg p-6">
                <div className="h-6 w-48 bg-zinc-700 rounded mb-6" />
                <div className="space-y-4">
                  {[1,2,3].map(i => (
                    <div key={i} className="flex items-center justify-between p-4 border-2 border-zinc-700 border-dashed rounded-lg">
                      <div><div className="h-4 w-32 bg-zinc-700 rounded mb-1" /><div className="h-3 w-48 bg-zinc-700 rounded" /></div>
                      <div className="w-12 h-6 bg-zinc-600 rounded-full" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Danger Zone */}
              <div className="border-2 border-zinc-700 border-dashed rounded-lg p-6">
                <div className="h-6 w-36 bg-zinc-700 rounded mb-6" />
                <div className="p-4 border-2 border-zinc-700 border-dashed rounded-lg mb-4">
                  <div className="h-4 w-40 bg-zinc-700 rounded mb-2" />
                  <div className="h-3 w-full bg-zinc-700 rounded mb-4" />
                  <div className="h-10 w-40 border-2 border-zinc-600 rounded-lg" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="bg-gradient-to-br from-blue-950/30 to-indigo-950/30 border border-blue-500/20 rounded-xl p-6">
            <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2"><CheckCircle2 className="size-5 text-blue-400" />{t({ en: 'What to Validate', es: 'Qué Validar' })}</h2>
            <ul className="space-y-2 text-sm text-zinc-300">
              <li className="flex items-start gap-2"><CheckCircle2 className="size-4 text-blue-400 mt-0.5 shrink-0" /><span>{t({ en: 'Is navigation clear and organized?', es: '¿La navegación es clara y organizada?' })}</span></li>
              <li className="flex items-start gap-2"><CheckCircle2 className="size-4 text-blue-400 mt-0.5 shrink-0" /><span>{t({ en: 'Are settings grouped logically?', es: '¿Las configuraciones están agrupadas lógicamente?' })}</span></li>
              <li className="flex items-start gap-2"><CheckCircle2 className="size-4 text-blue-400 mt-0.5 shrink-0" /><span>{t({ en: 'Are dangerous actions clearly separated?', es: '¿Las acciones peligrosas están claramente separadas?' })}</span></li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-950/30 to-pink-950/30 border border-purple-500/20 rounded-xl p-6">
            <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2"><ArrowRight className="size-5 text-purple-400" />{t({ en: 'Suggested User Flow', es: 'Flujo de Usuario Sugerido' })}</h2>
            <ol className="space-y-2 text-sm text-zinc-300">
              <li className="flex items-start gap-3"><span className="text-purple-400 font-bold shrink-0">1.</span><span>{t({ en: 'User navigates to Settings', es: 'Usuario navega a Configuración' })}</span></li>
              <li className="flex items-start gap-3"><span className="text-purple-400 font-bold shrink-0">2.</span><span>{t({ en: 'Selects category from sidebar', es: 'Selecciona categoría del sidebar' })}</span></li>
              <li className="flex items-start gap-3"><span className="text-purple-400 font-bold shrink-0">3.</span><span>{t({ en: 'Updates preferences', es: 'Actualiza preferencias' })}</span></li>
              <li className="flex items-start gap-3"><span className="text-purple-400 font-bold shrink-0">4.</span><span>{t({ en: 'Saves changes', es: 'Guarda cambios' })}</span></li>
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