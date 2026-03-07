import React from 'react';
import { useLanguage } from '../../layout/LanguageContext';
import { ArrowLeft, ShoppingCart, ArrowRight } from 'lucide-react';

interface TemplateProps { onBack: () => void; onUpgrade: () => void; }

export function CheckoutTemplate({ onBack, onUpgrade }: TemplateProps) {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-black">
      <div className="border-b border-zinc-800 bg-zinc-950 sticky top-16 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <button onClick={onBack} className="flex items-center gap-2 text-zinc-400 hover:text-white">
            <ArrowLeft className="size-4" /> {t({ en: 'Back', es: 'Volver' })}
          </button>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex items-center gap-3 mb-8">
          <ShoppingCart className="size-8 text-zinc-600" />
          <h1 className="text-3xl font-bold text-white">{t({ en: 'Checkout', es: 'Pago' })}</h1>
        </div>
        <div className="grid lg:grid-cols-[1fr_360px] gap-8">
          <div className="space-y-6">
            <div className="bg-zinc-900/50 border-2 border-zinc-700 border-dashed rounded-xl p-6 space-y-4">
              <div className="h-5 bg-zinc-700 rounded w-40" />
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="space-y-2">
                    <div className="h-3 bg-zinc-700 rounded w-24" />
                    <div className="h-10 border-2 border-zinc-700 rounded" />
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-zinc-900/50 border-2 border-zinc-700 border-dashed rounded-xl p-6">
              <div className="h-5 bg-zinc-700 rounded w-32 mb-4" />
              <div className="h-12 border-2 border-zinc-700 rounded mb-4" />
              <div className="grid grid-cols-3 gap-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-10 border-2 border-zinc-700 rounded" />
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-zinc-900/50 border-2 border-zinc-700 border-dashed rounded-xl p-6 space-y-4">
              <div className="h-4 bg-zinc-700 rounded w-32" />
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex justify-between items-center">
                  <div className="h-3 bg-zinc-700 rounded w-24" />
                  <div className="h-3 bg-zinc-700 rounded w-16" />
                </div>
              ))}
              <div className="border-t-2 border-zinc-700 pt-4">
                <div className="flex justify-between items-center">
                  <div className="h-4 bg-zinc-600 rounded w-20" />
                  <div className="h-4 bg-zinc-600 rounded w-20" />
                </div>
              </div>
            </div>
            <div className="h-12 bg-zinc-600 rounded" />
            <button onClick={onUpgrade} className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm">
              {t({ en: 'Upgrade', es: 'Actualizar' })} <ArrowRight className="size-3 inline" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}