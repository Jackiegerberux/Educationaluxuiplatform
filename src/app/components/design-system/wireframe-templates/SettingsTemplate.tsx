import React from 'react';
import { useLanguage } from '../../layout/LanguageContext';
import { ArrowLeft, Settings, ArrowRight } from 'lucide-react';

interface TemplateProps { onBack: () => void; onUpgrade: () => void; }

export function SettingsTemplate({ onBack, onUpgrade }: TemplateProps) {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-black">
      <div className="border-b border-zinc-800 bg-zinc-950 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <button onClick={onBack} className="flex items-center gap-2 text-zinc-400 hover:text-white">
            <ArrowLeft className="size-4" /> {t({ en: 'Back', es: 'Volver' })}
          </button>
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="flex items-center gap-3 mb-8">
          <Settings className="size-8 text-zinc-600" />
          <h1 className="text-3xl font-bold text-white">{t({ en: 'Settings', es: 'Configuración' })}</h1>
        </div>
        <div className="grid lg:grid-cols-[240px_1fr] gap-8">
          <div className="border-2 border-zinc-700 border-dashed rounded-lg p-4 space-y-2">
            {['Profile', 'Account', 'Security', 'Notifications', 'Privacy'].map((item, idx) => (
              <div key={item} className={`p-3 rounded ${idx === 0 ? 'bg-zinc-700' : ''}`}>
                <div className="h-3 bg-zinc-600 rounded w-20" />
              </div>
            ))}
          </div>
          <div className="space-y-6">
            <div className="bg-zinc-900/50 border-2 border-zinc-700 border-dashed rounded-xl p-6 space-y-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="space-y-2">
                  <div className="h-3 bg-zinc-700 rounded w-32" />
                  <div className="h-10 border-2 border-zinc-700 rounded" />
                </div>
              ))}
              <div className="flex gap-3 pt-4">
                <div className="h-10 border-2 border-zinc-600 rounded w-24" />
                <div className="h-10 bg-zinc-600 rounded w-24" />
              </div>
            </div>
            <button onClick={onUpgrade} className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg">
              {t({ en: 'Upgrade', es: 'Actualizar' })} <ArrowRight className="size-4 inline" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
