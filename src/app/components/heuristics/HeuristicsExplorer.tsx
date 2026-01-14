
import React, { useState } from 'react';
import { useLanguage } from '../layout/LanguageContext';
import { heuristics, Heuristic } from '../../data/content';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Filter, RefreshCw, Eye, Globe, RotateCcw, Copy, AlertTriangle, Zap, Sparkles, LifeBuoy, BookOpen, Target, List, Ear, ScanEye } from 'lucide-react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Card, CardContent } from '../ui/card';

const iconMap: Record<string, React.ElementType> = {
  h1: Eye,
  h2: Globe,
  h3: RotateCcw,
  h4: Copy,
  h5: AlertTriangle,
  h6: ScanEye,
  h7: Zap,
  h8: Sparkles,
  h9: LifeBuoy,
  h10: BookOpen,
  law1: List,
  law2: Target,
  a11y1: Ear,
};

export function HeuristicsExplorer() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<'all' | 'usability' | 'psychology' | 'accessibility'>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [flippedCards, setFlippedCards] = useState<string[]>([]);

  const filteredHeuristics = heuristics.filter(h => {
    // @ts-ignore - temporary fix for type mismatch in filter state vs heuristic category
    const matchesFilter = filter === 'all' || h.category === filter;
    const matchesSearch = t(h.title).toLowerCase().includes(searchTerm.toLowerCase()) || 
                          t(h.description).toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const toggleFlip = (id: string) => {
    setFlippedCards(prev => 
      prev.includes(id) ? prev.filter(cardId => cardId !== id) : [...prev, id]
    );
  };

  return (
    <div className="py-20 bg-zinc-950 min-h-screen">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-12 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            {t({ en: 'Heuristics & Laws', es: 'Heurísticas y Leyes' })}
          </h2>
          <p className="text-zinc-400 max-w-2xl">
            {t({ 
              en: 'Explore the 10 Usability Heuristics and key Laws of UX Psychology. Click on a card to reveal details.', 
              es: 'Explora las 10 Heurísticas de Usabilidad y las Leyes clave de la Psicología UX. Haz clic en una tarjeta para revelar detalles.' 
            })}
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 items-start md:items-center justify-between">
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
            {(['all', 'usability', 'psychology', 'accessibility'] as const).map((f) => (
              <Button
                key={f}
                variant={filter === f ? 'default' : 'outline'}
                onClick={() => setFilter(f)}
                className={`capitalize whitespace-nowrap ${filter === f ? 'bg-indigo-600 hover:bg-indigo-700' : 'border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800'}`}
              >
                {t({ en: f === 'all' ? 'All' : f, es: f === 'all' ? 'Todos' : f === 'psychology' ? 'Psicología' : f === 'usability' ? 'Usabilidad' : 'Accesibilidad' })}
              </Button>
            ))}
          </div>
          
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-zinc-500" />
            <Input 
              placeholder={t({ en: 'Search heuristics...', es: 'Buscar heurísticas...' })} 
              className="pl-9 bg-zinc-900 border-zinc-800 text-white placeholder:text-zinc-600 focus-visible:ring-indigo-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredHeuristics.map((heuristic) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                key={heuristic.id}
              >
                <div 
                  className="group perspective-1000 h-[520px] cursor-pointer"
                  onClick={() => toggleFlip(heuristic.id)}
                >
                  <motion.div 
                    className="relative w-full h-full preserve-3d transition-all duration-500"
                    animate={{ rotateY: flippedCards.includes(heuristic.id) ? 180 : 0 }}
                  >
                    {/* Front */}
                    <Card className="absolute inset-0 backface-hidden bg-zinc-900 border-zinc-800 hover:border-indigo-500/50 transition-colors flex flex-col justify-between p-6">
                      <div>
                        <div className="flex justify-between items-start mb-4">
                          <span className="text-4xl font-black text-zinc-800 group-hover:text-zinc-700 transition-colors">
                            #{heuristic.number}
                          </span>
                          <Badge variant="outline" className="capitalize text-xs border-zinc-700 text-zinc-500">
                            {heuristic.category}
                          </Badge>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">
                          {t(heuristic.title)}
                        </h3>
                      </div>
                      <div className="flex items-center text-sm text-indigo-400 font-medium mt-auto">
                        <RefreshCw className="size-4 mr-2" />
                        {t({ en: 'Flip for details', es: 'Girar para detalles' })}
                      </div>
                    </Card>

                    {/* Back */}
                    <Card 
                      className="absolute inset-0 backface-hidden rotate-y-180 bg-zinc-900 border-zinc-800 flex flex-col overflow-hidden"
                      style={{ transform: 'rotateY(180deg)' }}
                    >
                      {/* Visual Header */}
                      <div className="h-28 bg-gradient-to-br from-indigo-900/30 to-purple-900/30 flex items-center justify-center relative shrink-0 border-b border-white/5">
                        {(() => {
                          const Icon = iconMap[heuristic.id] || Sparkles;
                          return <Icon className="size-12 text-indigo-300/90" strokeWidth={1.5} />;
                        })()}
                         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light pointer-events-none"></div>
                      </div>

                      {/* Content */}
                      <div className="p-5 flex flex-col flex-1 overflow-y-auto">
                        <h3 className="font-bold text-white mb-2 text-lg leading-tight">
                          {t(heuristic.title)}
                        </h3>
                        <p className="text-zinc-300 text-sm mb-4 leading-relaxed">
                          {t(heuristic.description)}
                        </p>
                        
                        <div className="mt-auto bg-black/40 p-3 rounded-lg border border-white/5">
                          <span className="text-xs font-semibold text-indigo-400 block mb-1">
                            {t({ en: 'Example:', es: 'Ejemplo:' })}
                          </span>
                          <p className="text-xs text-zinc-400 italic leading-relaxed">
                            "{t(heuristic.example)}"
                          </p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
