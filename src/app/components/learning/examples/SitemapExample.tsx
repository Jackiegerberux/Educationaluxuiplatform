import React from 'react';
import { useLanguage } from '../../layout/LanguageContext';
import { GitBranch, Home, ShoppingCart, User, HelpCircle, FileText, Package, CreditCard } from 'lucide-react';

export function SitemapExample() {
  const { t } = useLanguage();

  return (
    <div className="bg-white rounded-xl overflow-hidden border border-zinc-200 shadow-lg">
      <div className="p-1 bg-zinc-100 border-b border-zinc-200 flex items-center justify-between px-4 py-2">
        <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
            {t({ en: 'Hierarchical Structure', es: 'Estructura Jerárquica' })}
        </span>
        <div className="flex gap-2">
            <span className="w-2 h-2 rounded-full bg-red-400"></span>
            <span className="w-2 h-2 rounded-full bg-amber-400"></span>
            <span className="w-2 h-2 rounded-full bg-green-400"></span>
        </div>
      </div>
      
      <div className="p-8 bg-zinc-50 flex flex-col items-center justify-center min-h-[300px]">
        {/* Level 1: Home */}
        <div className="flex flex-col items-center relative z-10">
            <div className="w-32 h-12 bg-blue-600 text-white rounded-lg shadow-md flex items-center justify-center gap-2 mb-8 relative z-10">
                <Home size={16} />
                <span className="text-sm font-medium">Home</span>
            </div>
            
            {/* Connecting Lines */}
            <div className="absolute top-10 left-1/2 -translate-x-1/2 w-0.5 h-6 bg-zinc-300"></div>
            <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[280px] h-0.5 bg-zinc-300"></div>
            
            {/* Vertical connectors for children */}
            <div className="absolute top-16 left-[calc(50%-140px)] w-0.5 h-6 bg-zinc-300"></div>
            <div className="absolute top-16 left-1/2 w-0.5 h-6 bg-zinc-300"></div>
            <div className="absolute top-16 right-[calc(50%-140px)] w-0.5 h-6 bg-zinc-300"></div>
        </div>

        {/* Level 2 */}
        <div className="grid grid-cols-3 gap-8 w-full max-w-lg">
            
            {/* Branch 1 */}
            <div className="flex flex-col items-center">
                <div className="w-28 h-10 bg-white border border-zinc-200 text-zinc-700 rounded shadow-sm flex items-center justify-center gap-2 mb-4 relative z-10">
                    <ShoppingCart size={14} />
                    <span className="text-xs font-medium">Shop</span>
                </div>
                {/* L3 Connectors */}
                <div className="w-0.5 h-4 bg-zinc-300 mb-[-4px]"></div>
                <div className="flex flex-col gap-2 w-full pl-4 border-l-2 border-zinc-200 py-1">
                    <div className="flex items-center gap-2 text-zinc-500">
                        <div className="w-3 h-[1px] bg-zinc-200"></div>
                        <span className="text-[10px] uppercase tracking-wide">Men</span>
                    </div>
                    <div className="flex items-center gap-2 text-zinc-500">
                        <div className="w-3 h-[1px] bg-zinc-200"></div>
                        <span className="text-[10px] uppercase tracking-wide">Women</span>
                    </div>
                </div>
            </div>

            {/* Branch 2 */}
            <div className="flex flex-col items-center">
                <div className="w-28 h-10 bg-white border border-zinc-200 text-zinc-700 rounded shadow-sm flex items-center justify-center gap-2 mb-4 relative z-10">
                    <User size={14} />
                    <span className="text-xs font-medium">Account</span>
                </div>
                 {/* L3 Connectors */}
                 <div className="w-0.5 h-4 bg-zinc-300 mb-[-4px]"></div>
                 <div className="flex flex-col gap-2 w-full pl-4 border-l-2 border-zinc-200 py-1">
                    <div className="flex items-center gap-2 text-zinc-500">
                        <div className="w-3 h-[1px] bg-zinc-200"></div>
                        <span className="text-[10px] uppercase tracking-wide">Profile</span>
                    </div>
                    <div className="flex items-center gap-2 text-zinc-500">
                        <div className="w-3 h-[1px] bg-zinc-200"></div>
                        <span className="text-[10px] uppercase tracking-wide">Orders</span>
                    </div>
                </div>
            </div>

            {/* Branch 3 */}
            <div className="flex flex-col items-center">
                <div className="w-28 h-10 bg-white border border-zinc-200 text-zinc-700 rounded shadow-sm flex items-center justify-center gap-2 mb-4 relative z-10">
                    <HelpCircle size={14} />
                    <span className="text-xs font-medium">Support</span>
                </div>
                 {/* L3 Connectors */}
                 <div className="w-0.5 h-4 bg-zinc-300 mb-[-4px]"></div>
                 <div className="flex flex-col gap-2 w-full pl-4 border-l-2 border-zinc-200 py-1">
                    <div className="flex items-center gap-2 text-zinc-500">
                        <div className="w-3 h-[1px] bg-zinc-200"></div>
                        <span className="text-[10px] uppercase tracking-wide">FAQ</span>
                    </div>
                    <div className="flex items-center gap-2 text-zinc-500">
                        <div className="w-3 h-[1px] bg-zinc-200"></div>
                        <span className="text-[10px] uppercase tracking-wide">Contact</span>
                    </div>
                </div>
            </div>

        </div>
      </div>

      <div className="bg-zinc-50 p-6 border-t border-zinc-100">
        <div className="flex items-start gap-4">
            <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                <GitBranch size={20} />
            </div>
            <div>
                <h4 className="text-sm font-bold text-zinc-900">
                    {t({ en: 'Visualizing Hierarchy', es: 'Visualizando la Jerarquía' })}
                </h4>
                <p className="text-xs text-zinc-600 mt-1 leading-relaxed">
                    {t({
                        en: 'A clear sitemap helps identify navigation depth. If users need more than 3 clicks to reach a goal, consider flattening the structure.',
                        es: 'Un mapa de sitio claro ayuda a identificar la profundidad de navegación. Si los usuarios necesitan más de 3 clics para lograr un objetivo, considera aplanar la estructura.'
                    })}
                </p>
            </div>
        </div>
      </div>
    </div>
  );
}
