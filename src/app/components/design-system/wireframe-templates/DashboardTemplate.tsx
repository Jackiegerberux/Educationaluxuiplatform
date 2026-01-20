import React from 'react';
import { useLanguage } from '../../layout/LanguageContext';
import { ArrowLeft, CheckCircle2, ArrowRight, LayoutDashboard } from 'lucide-react';

interface TemplateProps {
  onBack: () => void;
  onUpgrade: () => void;
}

export function DashboardTemplate({ onBack, onUpgrade }: TemplateProps) {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <div className="border-b border-zinc-800 bg-zinc-950 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="size-4" />
              {t({ en: 'Back to Wireframe Kit', es: 'Volver al Kit Wireframe' })}
            </button>
            <div className="flex items-center gap-3">
              <div className="px-3 py-1 rounded-full text-xs font-medium bg-zinc-800 text-zinc-400 border border-zinc-700">
                {t({ en: 'Low-Fidelity', es: 'Baja Fidelidad' })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Template Info */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-lg bg-zinc-800 border-2 border-zinc-700 flex items-center justify-center">
              <LayoutDashboard className="size-6 text-zinc-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">
                {t({ en: 'Dashboard Template', es: 'Template Dashboard' })}
              </h1>
              <p className="text-zinc-400">
                {t({ en: 'Low-fidelity wireframe for dashboard layouts', es: 'Wireframe de baja fidelidad para layouts de dashboard' })}
              </p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-[1fr_320px] gap-8">
          {/* Main Template */}
          <div className="space-y-6">
            {/* Wireframe Container */}
            <div className="bg-zinc-900/50 border-2 border-zinc-700 border-dashed rounded-xl p-8">
              {/* Header */}
              <div className="border-2 border-zinc-700 border-dashed rounded-lg p-4 mb-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-zinc-700 rounded" />
                    <div className="h-4 w-32 bg-zinc-700 rounded" />
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="h-4 w-20 bg-zinc-700 rounded" />
                    <div className="h-4 w-20 bg-zinc-700 rounded" />
                    <div className="w-8 h-8 bg-zinc-700 rounded-full" />
                  </div>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-4 gap-4 mb-6">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="border-2 border-zinc-700 border-dashed rounded-lg p-4 space-y-2">
                    <div className="h-3 w-16 bg-zinc-700 rounded" />
                    <div className="h-6 w-20 bg-zinc-600 rounded" />
                    <div className="h-2 w-12 bg-zinc-700 rounded" />
                  </div>
                ))}
              </div>

              {/* Main Content Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Chart Area */}
                <div className="border-2 border-zinc-700 border-dashed rounded-lg p-4 space-y-3">
                  <div className="h-4 w-24 bg-zinc-700 rounded" />
                  <div className="h-48 bg-zinc-800 rounded flex items-end justify-around p-4 gap-2">
                    {[40, 70, 50, 80, 60, 90, 75].map((height, i) => (
                      <div key={i} className="flex-1 bg-zinc-700 rounded-t" style={{ height: `${height}%` }} />
                    ))}
                  </div>
                </div>

                {/* Activity List */}
                <div className="border-2 border-zinc-700 border-dashed rounded-lg p-4 space-y-3">
                  <div className="h-4 w-32 bg-zinc-700 rounded" />
                  <div className="space-y-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="flex items-center gap-3 p-2">
                        <div className="w-8 h-8 bg-zinc-700 rounded-full" />
                        <div className="flex-1 space-y-1">
                          <div className="h-3 bg-zinc-700 rounded w-3/4" />
                          <div className="h-2 bg-zinc-700 rounded w-1/2" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Table */}
                <div className="md:col-span-2 border-2 border-zinc-700 border-dashed rounded-lg overflow-hidden">
                  <div className="p-4 border-b-2 border-zinc-700 border-dashed">
                    <div className="h-4 w-28 bg-zinc-700 rounded" />
                  </div>
                  <div className="grid grid-cols-4 gap-px bg-zinc-700">
                    {/* Header */}
                    {[1, 2, 3, 4].map((i) => (
                      <div key={`h-${i}`} className="bg-zinc-900 p-3">
                        <div className="h-3 bg-zinc-600 rounded" />
                      </div>
                    ))}
                    {/* Rows */}
                    {[1, 2, 3, 4].map((row) =>
                      [1, 2, 3, 4].map((col) => (
                        <div key={`${row}-${col}`} className="bg-zinc-900 p-3">
                          <div className="h-3 bg-zinc-700 rounded" />
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-6">
            {/* What to Validate */}
            <div className="bg-gradient-to-br from-blue-950/30 to-indigo-950/30 border border-blue-500/20 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <CheckCircle2 className="size-5 text-blue-400" />
                {t({ en: 'What to Validate', es: 'Qué Validar' })}
              </h3>
              <ul className="space-y-2 text-sm text-zinc-300">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-0.5">•</span>
                  <span>{t({ en: 'Are key metrics visible at a glance?', es: '¿Las métricas clave son visibles de un vistazo?' })}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-0.5">•</span>
                  <span>{t({ en: 'Is the visual hierarchy clear?', es: '¿La jerarquía visual es clara?' })}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-0.5">•</span>
                  <span>{t({ en: 'Can users navigate to details easily?', es: '¿Los usuarios pueden navegar a detalles fácilmente?' })}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-0.5">•</span>
                  <span>{t({ en: 'Is data refresh mechanism clear?', es: '¿El mecanismo de actualización de datos es claro?' })}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-0.5">•</span>
                  <span>{t({ en: 'Are empty/loading states designed?', es: '¿Los estados vacío/carga están diseñados?' })}</span>
                </li>
              </ul>
            </div>

            {/* User Flow */}
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4">
                {t({ en: 'Suggested User Flow', es: 'Flujo de Usuario Sugerido' })}
              </h3>
              <ol className="space-y-3 text-sm text-zinc-300">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-indigo-400">1.</span>
                  <span>{t({ en: 'User lands on dashboard', es: 'Usuario llega al dashboard' })}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-indigo-400">2.</span>
                  <span>{t({ en: 'Reviews key metrics at top', es: 'Revisa métricas clave arriba' })}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-indigo-400">3.</span>
                  <span>{t({ en: 'Checks chart for trends', es: 'Revisa gráfico para tendencias' })}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-indigo-400">4.</span>
                  <span>{t({ en: 'Scans recent activity', es: 'Escanea actividad reciente' })}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-indigo-400">5.</span>
                  <span>{t({ en: 'Drills into table details', es: 'Profundiza en detalles de tabla' })}</span>
                </li>
              </ol>
            </div>

            {/* Upgrade CTA */}
            <div className="bg-gradient-to-br from-indigo-950/30 to-purple-950/30 border border-indigo-500/20 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-2">
                {t({ en: 'Ready for High-Fidelity?', es: '¿Listo para Alta Fidelidad?' })}
              </h3>
              <p className="text-sm text-zinc-400 mb-4">
                {t({ 
                  en: 'Once validated, upgrade this wireframe to the UI Kit.',
                  es: 'Una vez validado, actualiza este wireframe al UI Kit.'
                })}
              </p>
              <button
                onClick={onUpgrade}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors"
              >
                {t({ en: 'Upgrade to UI Kit', es: 'Actualizar a UI Kit' })}
                <ArrowRight className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
