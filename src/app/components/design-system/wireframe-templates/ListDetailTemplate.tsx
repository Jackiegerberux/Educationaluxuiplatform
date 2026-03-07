import React from 'react';
import { useLanguage } from '../../layout/LanguageContext';
import { ArrowLeft, CheckCircle2, ArrowRight, List } from 'lucide-react';

interface TemplateProps {
  onBack: () => void;
  onUpgrade: () => void;
}

export function ListDetailTemplate({ onBack, onUpgrade }: TemplateProps) {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-black">
      <div className="border-b border-zinc-800 bg-zinc-950 sticky top-16 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <button onClick={onBack} className="flex items-center gap-2 text-zinc-400 hover:text-white">
            <ArrowLeft className="size-4" />
            {t({ en: 'Back to Wireframe Kit', es: 'Volver al Kit Wireframe' })}
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-lg bg-zinc-800 border-2 border-zinc-700 flex items-center justify-center">
              <List className="size-6 text-zinc-600" />
            </div>
            <h1 className="text-3xl font-bold text-white">
              {t({ en: 'List + Detail Template', es: 'Template Lista + Detalle' })}
            </h1>
          </div>
        </div>

        <div className="grid lg:grid-cols-[1fr_320px] gap-8">
          <div className="bg-zinc-900/50 border-2 border-zinc-700 border-dashed rounded-xl p-8">
            <div className="grid md:grid-cols-[320px_1fr] gap-6">
              {/* List */}
              <div className="border-2 border-zinc-700 border-dashed rounded-lg p-4 space-y-2">
                <div className="h-10 border-2 border-zinc-700 rounded" />
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className={`p-3 rounded ${i === 1 ? 'bg-zinc-700' : 'bg-zinc-800'}`}>
                    <div className="h-3 bg-zinc-600 rounded w-3/4 mb-2" />
                    <div className="h-2 bg-zinc-600 rounded w-1/2" />
                  </div>
                ))}
              </div>

              {/* Detail */}
              <div className="border-2 border-zinc-700 border-dashed rounded-lg p-6 space-y-4">
                <div className="h-6 bg-zinc-700 rounded w-2/3" />
                <div className="space-y-2">
                  <div className="h-3 bg-zinc-700 rounded" />
                  <div className="h-3 bg-zinc-700 rounded w-5/6" />
                  <div className="h-3 bg-zinc-700 rounded w-4/6" />
                </div>
                <div className="h-48 bg-zinc-800 rounded" />
                <div className="flex gap-3">
                  <div className="h-10 bg-zinc-600 rounded flex-1" />
                  <div className="h-10 border-2 border-zinc-600 rounded flex-1" />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-950/30 to-indigo-950/30 border border-blue-500/20 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <CheckCircle2 className="size-5 text-blue-400" />
                {t({ en: 'What to Validate', es: 'Qué Validar' })}
              </h3>
              <ul className="space-y-2 text-sm text-zinc-300">
                <li>• {t({ en: 'List items are scannable', es: 'Items de lista son escaneables' })}</li>
                <li>• {t({ en: 'Selected state is clear', es: 'Estado seleccionado es claro' })}</li>
                <li>• {t({ en: 'Detail view shows key info', es: 'Vista detalle muestra info clave' })}</li>
                <li>• {t({ en: 'Actions are accessible', es: 'Acciones son accesibles' })}</li>
              </ul>
            </div>

            <button onClick={onUpgrade} className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg">
              {t({ en: 'Upgrade to UI Kit', es: 'Actualizar a UI Kit' })}
              <ArrowRight className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}