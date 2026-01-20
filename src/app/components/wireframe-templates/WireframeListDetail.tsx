import React from 'react';
import { useLanguage } from '../layout/LanguageContext';
import { ArrowLeft, CheckCircle2, ArrowRight, ChevronRight } from 'lucide-react';

export function WireframeListDetail() {
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
            📋 Wireframe Template
          </div>
          <h1 className="text-3xl font-bold text-white mb-3">List + Detail Template</h1>
          <p className="text-zinc-400 max-w-3xl">
            {t({
              en: 'A master-detail layout pattern where users can browse a list and view detailed information. Common for email clients, file managers, and product catalogs.',
              es: 'Un patrón de layout maestro-detalle donde los usuarios pueden navegar una lista y ver información detallada. Común para clientes de email, gestores de archivos y catálogos de productos.'
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
              <div className="relative w-64">
                <div className="h-10 border-2 border-zinc-700 rounded-lg" />
              </div>
            </div>
          </div>

          {/* Breadcrumb */}
          <div className="border-2 border-zinc-700 border-dashed rounded-lg p-4 mb-6">
            <div className="flex items-center gap-2">
              <div className="h-3 w-12 bg-zinc-700 rounded" />
              <ChevronRight className="size-3 text-zinc-700" />
              <div className="h-3 w-16 bg-zinc-700 rounded" />
              <ChevronRight className="size-3 text-zinc-700" />
              <div className="h-3 w-14 bg-zinc-700 rounded" />
            </div>
          </div>

          {/* Main Layout: List + Detail */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* List Column */}
            <div className="border-2 border-zinc-700 border-dashed rounded-lg p-4">
              {/* List Header */}
              <div className="flex items-center justify-between mb-4 pb-3 border-b-2 border-zinc-700">
                <div className="h-5 w-32 bg-zinc-700 rounded" />
                <div className="h-8 w-8 bg-zinc-600 rounded" />
              </div>

              {/* Filter/Sort */}
              <div className="flex gap-2 mb-4">
                <div className="h-8 flex-1 border-2 border-zinc-700 rounded" />
                <div className="h-8 w-20 border-2 border-zinc-700 rounded" />
              </div>

              {/* List Items */}
              <div className="space-y-2">
                {/* Selected Item */}
                <div className="bg-zinc-700/50 border-2 border-zinc-600 rounded-lg p-3">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-zinc-600 rounded shrink-0" />
                    <div className="flex-1 space-y-2">
                      <div className="h-4 bg-zinc-600 rounded" />
                      <div className="h-3 bg-zinc-600 rounded w-3/4" />
                      <div className="h-2 bg-zinc-600 rounded w-1/2" />
                    </div>
                  </div>
                </div>

                {/* Regular Items */}
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="border-2 border-zinc-700 border-dashed rounded-lg p-3 hover:bg-zinc-800/30 cursor-pointer">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-zinc-700 rounded shrink-0" />
                      <div className="flex-1 space-y-2">
                        <div className="h-4 bg-zinc-700 rounded" />
                        <div className="h-3 bg-zinc-700 rounded w-3/4" />
                        <div className="h-2 bg-zinc-700 rounded w-1/2" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="mt-4 pt-4 border-t-2 border-zinc-700">
                <div className="flex items-center justify-between">
                  <div className="h-3 w-24 bg-zinc-700 rounded" />
                  <div className="flex gap-1">
                    <div className="w-8 h-8 border-2 border-zinc-700 rounded" />
                    <div className="w-8 h-8 bg-zinc-600 rounded" />
                    <div className="w-8 h-8 border-2 border-zinc-700 rounded" />
                  </div>
                </div>
              </div>
            </div>

            {/* Detail Column */}
            <div className="lg:col-span-2 border-2 border-zinc-700 border-dashed rounded-lg p-6">
              {/* Detail Header */}
              <div className="flex items-start justify-between mb-6 pb-6 border-b-2 border-zinc-700">
                <div>
                  <div className="h-7 w-64 bg-zinc-700 rounded mb-3" />
                  <div className="flex items-center gap-3">
                    <div className="h-3 w-20 bg-zinc-700 rounded" />
                    <div className="h-3 w-24 bg-zinc-700 rounded" />
                    <div className="h-3 w-16 bg-zinc-700 rounded" />
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="h-10 w-24 border-2 border-zinc-700 rounded-lg" />
                  <div className="h-10 w-24 bg-zinc-600 rounded-lg" />
                </div>
              </div>

              {/* Detail Content */}
              <div className="space-y-6">
                {/* Image/Media */}
                <div className="h-64 bg-zinc-800/50 border-2 border-zinc-700 border-dashed rounded-lg" />

                {/* Description */}
                <div className="space-y-3">
                  <div className="h-5 w-32 bg-zinc-700 rounded" />
                  <div className="space-y-2">
                    <div className="h-3 bg-zinc-700 rounded" />
                    <div className="h-3 bg-zinc-700 rounded" />
                    <div className="h-3 bg-zinc-700 rounded w-5/6" />
                    <div className="h-3 bg-zinc-700 rounded w-4/6" />
                  </div>
                </div>

                {/* Metadata Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="border-2 border-zinc-700 border-dashed rounded-lg p-4">
                      <div className="h-3 w-20 bg-zinc-700 rounded mb-2" />
                      <div className="h-4 w-32 bg-zinc-600 rounded" />
                    </div>
                  ))}
                </div>

                {/* Additional Info */}
                <div className="border-2 border-zinc-700 border-dashed rounded-lg p-6">
                  <div className="h-5 w-40 bg-zinc-700 rounded mb-4" />
                  <div className="space-y-2">
                    <div className="h-3 bg-zinc-700 rounded" />
                    <div className="h-3 bg-zinc-700 rounded" />
                    <div className="h-3 bg-zinc-700 rounded w-4/5" />
                  </div>
                </div>

                {/* Related Items */}
                <div className="border-2 border-zinc-700 border-dashed rounded-lg p-6">
                  <div className="h-5 w-32 bg-zinc-700 rounded mb-4" />
                  <div className="grid grid-cols-3 gap-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="border-2 border-zinc-700 border-dashed rounded-lg p-3">
                        <div className="h-20 bg-zinc-700 rounded mb-2" />
                        <div className="h-3 bg-zinc-700 rounded" />
                      </div>
                    ))}
                  </div>
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
                <span>{t({ en: 'Can users quickly scan the list for items?', es: '¿Los usuarios pueden escanear rápidamente la lista de items?' })}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="size-4 text-blue-400 mt-0.5 shrink-0" />
                <span>{t({ en: 'Is the selected item clearly highlighted?', es: '¿El item seleccionado está claramente resaltado?' })}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="size-4 text-blue-400 mt-0.5 shrink-0" />
                <span>{t({ en: 'Does the detail view provide sufficient information?', es: '¿La vista de detalle provee información suficiente?' })}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="size-4 text-blue-400 mt-0.5 shrink-0" />
                <span>{t({ en: 'Are filtering and sorting options accessible?', es: '¿Las opciones de filtrado y ordenamiento son accesibles?' })}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="size-4 text-blue-400 mt-0.5 shrink-0" />
                <span>{t({ en: 'Can users navigate back to the list easily?', es: '¿Los usuarios pueden navegar de vuelta a la lista fácilmente?' })}</span>
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
                <span>{t({ en: 'User lands on list view → sees overview of all items', es: 'Usuario llega a vista de lista → ve overview de todos los items' })}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 font-bold shrink-0">2.</span>
                <span>{t({ en: 'Uses filter/sort to narrow down results', es: 'Usa filtro/ordenamiento para reducir resultados' })}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 font-bold shrink-0">3.</span>
                <span>{t({ en: 'Clicks item → detail view appears', es: 'Hace clic en item → aparece vista de detalle' })}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 font-bold shrink-0">4.</span>
                <span>{t({ en: 'Reviews full information and metadata', es: 'Revisa información completa y metadata' })}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 font-bold shrink-0">5.</span>
                <span>{t({ en: 'Takes action (edit, delete, share) or explores related items', es: 'Toma acción (editar, eliminar, compartir) o explora items relacionados' })}</span>
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