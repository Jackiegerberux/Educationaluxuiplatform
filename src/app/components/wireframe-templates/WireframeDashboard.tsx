import React from 'react';
import { useLanguage } from '../layout/LanguageContext';
import { ArrowLeft, CheckCircle2, ArrowRight, TrendingUp } from 'lucide-react';

export function WireframeDashboard() {
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
      {/* Back Button */}
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

      {/* Template Header */}
      <div className="border-b border-white/5 bg-gradient-to-b from-zinc-900/50 to-transparent">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-800 border border-zinc-700 text-zinc-400 text-xs font-medium">
            📊 Wireframe Template
          </div>
          <h1 className="text-3xl font-bold text-white mb-3">Dashboard Template</h1>
          <p className="text-zinc-400 max-w-3xl">
            {t({
              en: 'A low-fidelity dashboard layout for displaying key metrics, charts, and navigation. Use this to validate information hierarchy and data visualization placement.',
              es: 'Un layout de dashboard de baja fidelidad para mostrar métricas clave, gráficos y navegación. Usa esto para validar jerarquía de información y posicionamiento de visualización de datos.'
            })}
          </p>
        </div>
      </div>

      {/* Wireframe Template */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="bg-zinc-900/50 border-2 border-zinc-800 border-dashed rounded-2xl p-8">
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
                <div className="h-4 w-20 bg-zinc-700 rounded" />
                <div className="w-8 h-8 bg-zinc-700 rounded-full" />
              </div>
            </div>
          </div>

          {/* Page Title + Actions */}
          <div className="border-2 border-zinc-700 border-dashed rounded-lg p-6 mb-6">
            <div className="flex items-center justify-between mb-2">
              <div className="h-6 w-48 bg-zinc-700 rounded" />
              <div className="h-10 w-32 bg-zinc-600 rounded-lg" />
            </div>
            <div className="h-3 w-64 bg-zinc-700 rounded" />
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="border-2 border-zinc-700 border-dashed rounded-lg p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="h-3 w-24 bg-zinc-700 rounded" />
                  <TrendingUp className="size-4 text-zinc-600" />
                </div>
                <div className="h-7 w-20 bg-zinc-600 rounded mb-2" />
                <div className="h-2 w-16 bg-zinc-700 rounded" />
              </div>
            ))}
          </div>

          {/* Main Content: Charts + Sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Charts Column */}
            <div className="lg:col-span-2 space-y-6">
              {/* Large Chart */}
              <div className="border-2 border-zinc-700 border-dashed rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="h-5 w-32 bg-zinc-700 rounded" />
                  <div className="flex gap-2">
                    <div className="h-8 w-16 border-2 border-zinc-700 rounded" />
                    <div className="h-8 w-16 border-2 border-zinc-700 rounded" />
                  </div>
                </div>
                <div className="h-64 bg-zinc-800/50 rounded flex items-end justify-around p-4 gap-2">
                  <div className="w-full h-32 bg-zinc-700 rounded" />
                  <div className="w-full h-48 bg-zinc-700 rounded" />
                  <div className="w-full h-40 bg-zinc-700 rounded" />
                  <div className="w-full h-56 bg-zinc-700 rounded" />
                  <div className="w-full h-44 bg-zinc-700 rounded" />
                  <div className="w-full h-52 bg-zinc-700 rounded" />
                </div>
              </div>

              {/* Table */}
              <div className="border-2 border-zinc-700 border-dashed rounded-lg p-6">
                <div className="h-5 w-40 bg-zinc-700 rounded mb-4" />
                <div className="grid grid-cols-4 gap-px bg-zinc-700 rounded overflow-hidden">
                  <div className="bg-zinc-900 p-3"><div className="h-3 bg-zinc-600 rounded" /></div>
                  <div className="bg-zinc-900 p-3"><div className="h-3 bg-zinc-600 rounded" /></div>
                  <div className="bg-zinc-900 p-3"><div className="h-3 bg-zinc-600 rounded" /></div>
                  <div className="bg-zinc-900 p-3"><div className="h-3 bg-zinc-600 rounded" /></div>
                  {[1, 2, 3, 4, 5].map((row) => (
                    <React.Fragment key={row}>
                      <div className="bg-zinc-900 p-3"><div className="h-3 bg-zinc-700 rounded" /></div>
                      <div className="bg-zinc-900 p-3"><div className="h-3 bg-zinc-700 rounded" /></div>
                      <div className="bg-zinc-900 p-3"><div className="h-3 bg-zinc-700 rounded" /></div>
                      <div className="bg-zinc-900 p-3"><div className="h-3 bg-zinc-700 rounded" /></div>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Activity Feed */}
              <div className="border-2 border-zinc-700 border-dashed rounded-lg p-6">
                <div className="h-5 w-28 bg-zinc-700 rounded mb-4" />
                <div className="space-y-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="flex gap-3">
                      <div className="w-8 h-8 bg-zinc-700 rounded-full shrink-0" />
                      <div className="flex-1 space-y-1">
                        <div className="h-3 bg-zinc-700 rounded" />
                        <div className="h-2 bg-zinc-700 rounded w-3/4" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="border-2 border-zinc-700 border-dashed rounded-lg p-6">
                <div className="h-5 w-32 bg-zinc-700 rounded mb-4" />
                <div className="space-y-2">
                  <div className="h-10 bg-zinc-600 rounded-lg" />
                  <div className="h-10 border-2 border-zinc-700 rounded-lg" />
                  <div className="h-10 border-2 border-zinc-700 rounded-lg" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Template Info Grid */}
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {/* What to Validate */}
          <div className="bg-gradient-to-br from-blue-950/30 to-indigo-950/30 border border-blue-500/20 rounded-xl p-6">
            <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <CheckCircle2 className="size-5 text-blue-400" />
              {t({ en: 'What to Validate', es: 'Qué Validar' })}
            </h2>
            <ul className="space-y-2 text-sm text-zinc-300">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="size-4 text-blue-400 mt-0.5 shrink-0" />
                <span>{t({ en: 'Are key metrics visible at a glance?', es: '¿Las métricas clave son visibles de un vistazo?' })}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="size-4 text-blue-400 mt-0.5 shrink-0" />
                <span>{t({ en: 'Is information hierarchy clear (stats → charts → details)?', es: '¿La jerarquía de información es clara (stats → charts → detalles)?' })}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="size-4 text-blue-400 mt-0.5 shrink-0" />
                <span>{t({ en: 'Can users quickly identify trends or anomalies?', es: '¿Los usuarios pueden identificar tendencias o anomalías rápidamente?' })}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="size-4 text-blue-400 mt-0.5 shrink-0" />
                <span>{t({ en: 'Are navigation and quick actions accessible?', es: '¿La navegación y acciones rápidas son accesibles?' })}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="size-4 text-blue-400 mt-0.5 shrink-0" />
                <span>{t({ en: 'Does the layout work on different screen sizes?', es: '¿El layout funciona en diferentes tamaños de pantalla?' })}</span>
              </li>
            </ul>
          </div>

          {/* Suggested User Flow */}
          <div className="bg-gradient-to-br from-purple-950/30 to-pink-950/30 border border-purple-500/20 rounded-xl p-6">
            <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <ArrowRight className="size-5 text-purple-400" />
              {t({ en: 'Suggested User Flow', es: 'Flujo de Usuario Sugerido' })}
            </h2>
            <ol className="space-y-2 text-sm text-zinc-300">
              <li className="flex items-start gap-3">
                <span className="text-purple-400 font-bold shrink-0">1.</span>
                <span>{t({ en: 'User lands on dashboard → sees high-level stats', es: 'Usuario llega al dashboard → ve stats de alto nivel' })}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 font-bold shrink-0">2.</span>
                <span>{t({ en: 'Scans main chart for trends', es: 'Escanea gráfico principal para tendencias' })}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 font-bold shrink-0">3.</span>
                <span>{t({ en: 'Reviews detailed table for specific data', es: 'Revisa tabla detallada para datos específicos' })}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 font-bold shrink-0">4.</span>
                <span>{t({ en: 'Checks activity feed for recent updates', es: 'Revisa feed de actividad para actualizaciones recientes' })}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 font-bold shrink-0">5.</span>
                <span>{t({ en: 'Uses quick actions for common tasks', es: 'Usa acciones rápidas para tareas comunes' })}</span>
              </li>
            </ol>
          </div>
        </div>

        {/* Upgrade CTA */}
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