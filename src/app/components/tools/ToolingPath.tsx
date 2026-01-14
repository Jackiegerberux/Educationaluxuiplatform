
import React from 'react';
import { useLanguage } from '../layout/LanguageContext';
import { tools, Tool } from '../../data/content';
import { motion } from 'motion/react';
import { PenTool, StickyNote, Bot, Sparkles, Microscope, Layers, Code, Laptop, Lightbulb, AlertTriangle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { Badge } from '../ui/badge';

const iconMap: Record<string, React.ElementType> = {
  'PenTool': PenTool,
  'StickyNote': StickyNote,
  'Bot': Bot,
  'Sparkles': Sparkles,
  'Microscope': Microscope,
  'Layers': Layers,
  'Code': Code,
  'Laptop': Laptop
};

export function ToolingPath() {
  const { t } = useLanguage();

  const levels = [1, 2, 3, 4, 5];
  
  const getLevelTitle = (level: number) => {
    switch(level) {
      case 1: return { en: 'Level 1: Design Foundations', es: 'Nivel 1: Fundamentos de Diseño' };
      case 2: return { en: 'Level 2: AI as Design Copilot', es: 'Nivel 2: IA como Copiloto de Diseño' };
      case 3: return { en: 'Level 3: Research & Testing', es: 'Nivel 3: Investigación y Pruebas' };
      case 4: return { en: 'Level 4: Design Systems', es: 'Nivel 4: Sistemas de Diseño' };
      case 5: return { en: 'Level 5: Front-End Foundations', es: 'Nivel 5: Fundamentos Front-End' };
      default: return { en: 'Tools', es: 'Herramientas' };
    }
  };

  return (
    <div className="py-20 bg-zinc-950 min-h-screen">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-12 space-y-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            {t({ en: 'Tooling Path', es: 'Ruta de Herramientas' })}
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            {t({ 
              en: 'A curated guide on WHICH tools to learn, WHEN to use them, and WHY. From industry standards to AI copilots.', 
              es: 'Una guía curada sobre QUÉ herramientas aprender, CUÁNDO usarlas y POR QUÉ. Desde estándares de la industria hasta copilotos de IA.' 
            })}
          </p>
        </div>

        <div className="space-y-16 relative">
           {/* Connecting Line (Desktop) */}
           <div className="hidden md:block absolute left-8 top-8 bottom-8 w-px bg-gradient-to-b from-indigo-500/0 via-indigo-500/50 to-indigo-500/0"></div>

          {levels.map((level) => {
            const levelTools = tools.filter(tool => tool.level === level);
            if (levelTools.length === 0) return null;

            return (
              <div key={level} className="relative">
                <div className="flex flex-col md:flex-row gap-8">
                  {/* Level Marker */}
                  <div className="flex-shrink-0 md:w-16 flex flex-col items-center">
                    <div className="size-8 rounded-full bg-indigo-500/20 border border-indigo-500 flex items-center justify-center text-indigo-400 font-bold z-10 bg-zinc-950">
                      {level}
                    </div>
                  </div>

                  <div className="flex-1 space-y-6">
                    <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                      {t(getLevelTitle(level))}
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                      {levelTools.map((tool) => {
                        const Icon = iconMap[tool.icon] || Laptop;
                        return (
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            key={tool.id}
                          >
                            <Card className="h-full bg-zinc-900 border-zinc-800 hover:border-indigo-500/40 transition-colors">
                              <CardHeader className="pb-2">
                                <div className="flex justify-between items-start">
                                  <div className="flex items-center gap-3">
                                    <div className="p-2 rounded-md bg-indigo-500/10 text-indigo-400">
                                      <Icon className="size-6" />
                                    </div>
                                    <div>
                                      <CardTitle className="text-xl text-white">{tool.name}</CardTitle>
                                      <CardDescription className="text-zinc-500 mt-1 capitalize">{tool.category}</CardDescription>
                                    </div>
                                  </div>
                                </div>
                              </CardHeader>
                              <CardContent className="space-y-4 pt-4">
                                <p className="text-zinc-300">
                                  {t(tool.description)}
                                </p>
                                
                                <div className="space-y-3">
                                  <div className="bg-black/40 p-3 rounded border border-white/5">
                                    <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-1 block flex items-center gap-1">
                                      <Lightbulb className="size-3" /> {t({ en: 'Best For', es: 'Ideal Para' })}
                                    </span>
                                    <p className="text-sm text-zinc-400">{t(tool.bestFor)}</p>
                                  </div>

                                  <div className="bg-indigo-950/10 p-3 rounded border border-indigo-500/10">
                                    <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider mb-1 block flex items-center gap-1">
                                      <Sparkles className="size-3" /> {t({ en: 'Pro Tip', es: 'Pro Tip' })}
                                    </span>
                                    <p className="text-sm text-zinc-400 italic">"{t(tool.tips)}"</p>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
