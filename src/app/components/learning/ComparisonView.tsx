
import React from 'react';
import { Check, X } from 'lucide-react';
import { useLanguage } from '../layout/LanguageContext';

export function ComparisonView() {
  const { t } = useLanguage();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Bad Example */}
      <div className="border border-red-500/20 bg-red-950/5 rounded-xl overflow-hidden">
        <div className="bg-red-950/20 p-3 border-b border-red-500/20 flex items-center gap-2">
          <div className="bg-red-500/20 p-1 rounded-full">
            <X className="size-4 text-red-400" />
          </div>
          <span className="text-sm font-semibold text-red-400">
            {t({ en: 'Don\'t', es: 'No hacer' })}
          </span>
        </div>
        <div className="p-8 flex flex-col items-center justify-center gap-4 min-h-[200px] bg-zinc-900/50">
          {/* Mock Bad UI: Cluttered, low contrast */}
          <div className="w-full max-w-[200px] space-y-2 opacity-50 blur-[1px] transition-all hover:blur-0">
             <div className="h-8 bg-zinc-700 w-full rounded-sm"></div>
             <div className="h-8 bg-zinc-700 w-full rounded-sm"></div>
             <div className="h-8 bg-zinc-700 w-full rounded-sm"></div>
             <div className="text-[10px] text-zinc-600 text-center">Click here to maybe submit if you want</div>
          </div>
          <p className="text-xs text-zinc-500 text-center px-4">
            {t({ 
              en: 'Low contrast, cluttered layout, unclear CTA.', 
              es: 'Bajo contraste, diseño desordenado, CTA poco claro.' 
            })}
          </p>
        </div>
      </div>

      {/* Good Example */}
      <div className="border border-green-500/20 bg-green-950/5 rounded-xl overflow-hidden">
        <div className="bg-green-950/20 p-3 border-b border-green-500/20 flex items-center gap-2">
           <div className="bg-green-500/20 p-1 rounded-full">
            <Check className="size-4 text-green-400" />
          </div>
          <span className="text-sm font-semibold text-green-400">
            {t({ en: 'Do', es: 'Hacer' })}
          </span>
        </div>
        <div className="p-8 flex flex-col items-center justify-center gap-4 min-h-[200px] bg-zinc-900/50">
          {/* Mock Good UI: Clean, clear */}
          <div className="w-full max-w-[200px] space-y-4">
             <div className="h-10 bg-indigo-600 w-full rounded-md shadow-lg shadow-indigo-900/20 flex items-center justify-center text-white text-xs font-bold">
               {t({ en: 'Submit Action', es: 'Acción de Enviar' })}
             </div>
             <div className="flex gap-2 justify-center">
               <div className="h-2 w-2 rounded-full bg-zinc-700"></div>
               <div className="h-2 w-2 rounded-full bg-zinc-700"></div>
               <div className="h-2 w-10 rounded-full bg-zinc-700"></div>
             </div>
          </div>
           <p className="text-xs text-zinc-500 text-center px-4">
            {t({ 
              en: 'Clear hierarchy, accessible contrast, distinct CTA.', 
              es: 'Jerarquía clara, contraste accesible, CTA distintivo.' 
            })}
          </p>
        </div>
      </div>
    </div>
  );
}
