import React from 'react';
import { useLanguage } from '../../layout/LanguageContext';
import { MousePointer2, Minus, Square, X } from 'lucide-react';

export function RetroModernComparison() {
  const { t } = useLanguage();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Retro (Windows 98 Style) */}
      <div className="space-y-3">
        <h4 className="text-sm font-mono text-zinc-500 text-center uppercase tracking-widest">
          {t({ en: 'Before: System-Centric', es: 'Antes: Centrado en Sistema' })}
        </h4>
        <div className="bg-[#c0c0c0] p-1 border-t-2 border-l-2 border-white border-b-2 border-r-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.5)]">
            {/* Title Bar */}
            <div className="bg-[#000080] px-2 py-1 flex items-center justify-between mb-2">
                <span className="text-white font-bold text-xs font-mono tracking-tighter">Program.exe</span>
                <div className="flex gap-0.5">
                    <div className="size-4 bg-[#c0c0c0] border border-white border-b-black border-r-black flex items-center justify-center">
                        <Minus className="size-2 text-black" />
                    </div>
                    <div className="size-4 bg-[#c0c0c0] border border-white border-b-black border-r-black flex items-center justify-center">
                        <Square className="size-2 text-black fill-transparent" />
                    </div>
                    <div className="size-4 bg-[#c0c0c0] border border-white border-b-black border-r-black flex items-center justify-center">
                        <X className="size-3 text-black" />
                    </div>
                </div>
            </div>
            
            {/* Content */}
            <div className="p-4 space-y-4 font-mono text-xs text-black">
                <p>Critical Error: User input required.</p>
                <div className="bg-white border inset-2 border-black border-t-[#808080] border-l-[#808080] p-1 h-6 w-full"></div>
                <div className="flex justify-center gap-4">
                     <button className="px-4 py-1 bg-[#c0c0c0] border-t border-l border-white border-b border-r border-black active:border-t-black active:border-l-black active:border-b-white active:border-r-white outline-none focus:outline-dotted focus:outline-1">
                        OK
                     </button>
                     <button className="px-4 py-1 bg-[#c0c0c0] border-t border-l border-white border-b border-r border-black">
                        Cancel
                     </button>
                </div>
            </div>
        </div>
      </div>

      {/* Modern */}
      <div className="space-y-3">
        <h4 className="text-sm font-mono text-indigo-400 text-center uppercase tracking-widest">
          {t({ en: 'Now: User-Centric', es: 'Ahora: Centrado en Usuario' })}
        </h4>
        <div className="bg-zinc-900 rounded-2xl border border-zinc-800 shadow-xl overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            
            {/* Header */}
            <div className="p-4 border-b border-zinc-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="size-3 rounded-full bg-red-500/20 text-red-500 flex items-center justify-center">
                         <div className="size-1.5 rounded-full bg-current" />
                    </div>
                    <span className="text-sm font-medium text-white">Upload Status</span>
                </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
                <div className="space-y-1">
                    <p className="text-zinc-200 font-medium">Action Required</p>
                    <p className="text-sm text-zinc-400">Please confirm your selection to proceed.</p>
                </div>
                
                <div className="flex gap-3 pt-2">
                    <button className="flex-1 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium rounded-lg transition-colors shadow-lg shadow-indigo-900/20 flex items-center justify-center gap-2">
                        Confirm
                    </button>
                    <button className="px-4 py-2 bg-white/5 hover:bg-white/10 text-zinc-300 text-sm font-medium rounded-lg transition-colors">
                        Cancel
                    </button>
                </div>
            </div>
            
            {/* Cursor */}
            <MousePointer2 className="absolute bottom-6 right-8 text-white drop-shadow-md fill-black opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0" />
        </div>
      </div>
    </div>
  );
}
