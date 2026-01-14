
import React from 'react';
import { Topic } from '../../data/content';
import { useLanguage } from '../layout/LanguageContext';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, AlertTriangle, Lightbulb, BookOpen, ExternalLink, ListChecks, Sparkles, Bot, ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
import { ScrollArea } from '../ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { ComparisonView } from './ComparisonView';
import { UserPersonaCard } from './examples/UserPersonaCard';
import { RetroModernComparison } from './examples/RetroModernComparison';
import { MentalModelExample } from './examples/MentalModelExample';
import { SitemapExample } from './examples/SitemapExample';
import { MethodologiesDeepDive } from './examples/MethodologiesDeepDive';

interface TopicDetailProps {
  topic: Topic | null;
  onClose: () => void;
}

export function TopicDetail({ topic, onClose }: TopicDetailProps) {
  const { t } = useLanguage();

  if (!topic) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="absolute right-0 top-0 h-full w-full md:w-[800px] bg-zinc-950 border-l border-zinc-800 shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-zinc-800">
              <div>
                <span className="text-xs font-mono text-indigo-400 uppercase tracking-wider">
                  {topic.status} • {topic.timeEstimate}
                </span>
                <h2 className="text-2xl font-bold text-white mt-1">{t(topic.title)}</h2>
                
                <div className="flex flex-col gap-2 mt-2">
                  {topic.reference && (
                    <p className="text-sm text-zinc-500 flex items-center gap-2">
                       <span className="inline-block size-1.5 rounded-full bg-indigo-500"></span>
                       {t({ en: 'Source: ', es: 'Fuente: ' })} 
                       <span className="text-zinc-400 italic">{t(topic.reference)}</span>
                    </p>
                  )}
                  
                  {topic.referenceLink && (
                    <a 
                      href={topic.referenceLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xs flex items-center gap-1.5 text-indigo-400 hover:text-indigo-300 transition-colors w-fit group ml-3.5"
                    >
                      <ExternalLink className="size-3 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                      <span className="underline underline-offset-4 decoration-indigo-400/30 group-hover:decoration-indigo-400">
                        {t({ en: 'Read full source material', es: 'Leer material completo' })}
                      </span>
                    </a>
                  )}
                </div>
              </div>
              <Button variant="ghost" size="icon" onClick={onClose} className="hover:bg-zinc-800 rounded-full">
                <X className="size-6 text-zinc-400" />
              </Button>
            </div>

            {/* Content */}
            <ScrollArea className="flex-1 min-h-0">
              <div className="p-6 md:p-10 max-w-3xl mx-auto space-y-12 pb-20">
                
                {/* 1. Definition Section */}
                <section>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="size-8 rounded bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                      <BookOpen className="size-5" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">
                      {t({ en: 'Definition', es: 'Definición' })}
                    </h3>
                  </div>
                  <div className="p-6 rounded-xl bg-zinc-900 border border-zinc-800 text-lg leading-relaxed text-zinc-300">
                    {t(topic.content?.definition)}
                  </div>
                </section>

                {/* 2. Why it Matters Section */}
                <section>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="size-8 rounded bg-yellow-500/10 flex items-center justify-center text-yellow-400">
                      <Lightbulb className="size-5" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">
                      {t({ en: 'Why it Matters', es: 'Por qué importa' })}
                    </h3>
                  </div>
                  <p className="text-zinc-400 leading-relaxed">
                    {t(topic.content?.why)}
                  </p>
                </section>

                {/* 3. Core Principles */}
                <section>
                  <h3 className="text-xl font-semibold text-white mb-6">
                    {t({ en: 'Core Principles', es: 'Principios Fundamentales' })}
                  </h3>
                  <div className="grid gap-4">
                    {t(topic.content?.keyPrinciples)?.map((item, i) => (
                      <div key={i} className="flex items-start gap-4 p-4 rounded-lg bg-indigo-950/20 border border-indigo-500/20">
                         <Check className="size-5 text-indigo-400 mt-0.5 shrink-0" />
                         <span className="text-zinc-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </section>

                {/* 4. Real Example (Visual Analysis) */}
                <section>
                  <h3 className="text-xl font-semibold text-white mb-6">
                    {topic.id === 'design-methodologies' 
                      ? t({ en: 'Methodologies Deep Dive', es: 'Profundización en Metodologías' })
                      : t({ en: 'Real Example', es: 'Ejemplo Real' })
                    }
                  </h3>
                  
                  {topic.id === 'user-personas' ? (
                    <UserPersonaCard />
                  ) : topic.id === 'usability-basics' ? (
                    <RetroModernComparison />
                  ) : topic.id === 'ux-psychology' ? (
                    <MentalModelExample />
                  ) : topic.id === 'information-architecture' ? (
                    <SitemapExample />
                  ) : topic.id === 'design-methodologies' ? (
                    <MethodologiesDeepDive />
                  ) : (
                    <ComparisonView />
                  )}
                </section>

                {/* 5. Common Mistakes */}
                <section>
                  <h3 className="text-xl font-semibold text-white mb-6">
                    {t({ en: 'Common Mistakes', es: 'Errores Comunes' })}
                  </h3>
                  <div className="grid gap-4">
                    {t(topic.content?.commonMistakes)?.map((item, i) => (
                      <div key={i} className="flex items-start gap-4 p-4 rounded-lg bg-red-950/20 border border-red-500/20">
                         <AlertTriangle className="size-5 text-red-400 mt-0.5 shrink-0" />
                         <span className="text-zinc-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </section>

                {/* 6. How to Apply (New) */}
                {topic.content?.howToApply && (
                <section>
                   <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                      <ListChecks className="size-5 text-emerald-400" />
                      {t({ en: 'How to Apply', es: 'Cómo Aplicar' })}
                   </h3>
                   <div className="space-y-6 border-l-2 border-zinc-800 ml-3 pl-8 relative">
                      {topic.content.howToApply.steps.map((step, i) => (
                        <div key={i} className="relative">
                           <div className="absolute -left-[41px] top-0 size-6 rounded-full bg-zinc-900 border-2 border-emerald-500/50 flex items-center justify-center text-xs font-bold text-emerald-400">
                             {i + 1}
                           </div>
                           <h4 className="text-lg font-medium text-white mb-2">{t(step.name)}</h4>
                           <p className="text-zinc-400">{t(step.description)}</p>
                        </div>
                      ))}
                   </div>
                </section>
                )}

                {/* 7. AI in Practice (New) */}
                {topic.content?.aiInPractice && (
                <section className="bg-gradient-to-br from-indigo-900/20 to-purple-900/20 border border-white/5 rounded-2xl p-6 md:p-8">
                   <div className="flex items-center gap-3 mb-6">
                      <div className="size-10 rounded-lg bg-indigo-500/20 flex items-center justify-center">
                         <Sparkles className="size-5 text-indigo-300" />
                      </div>
                      <div>
                         <h3 className="text-xl font-semibold text-white">
                            {t({ en: 'AI in Practice', es: 'IA en la Práctica' })}
                         </h3>
                         <p className="text-sm text-indigo-200/70">{t({en: 'Supercharge your workflow', es: 'Potencia tu flujo de trabajo'})}</p>
                      </div>
                   </div>
                   
                   <p className="text-zinc-300 mb-8 leading-relaxed">
                     {t(topic.content.aiInPractice.description)}
                   </p>

                   <div className="space-y-4">
                      {topic.content.aiInPractice.prompts.map((prompt, i) => (
                        <div key={i} className="bg-black/40 rounded-xl p-4 border border-white/5">
                           <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2">
                              <Bot className="size-3" />
                              {prompt.tool} Prompt
                           </div>
                           <p className="text-sm text-zinc-400 mb-3 italic">"{t(prompt.context)}..."</p>
                           <div className="bg-zinc-900/80 rounded-lg p-3 text-indigo-100 font-mono text-sm border-l-2 border-indigo-500">
                              {t(prompt.prompt)}
                           </div>
                        </div>
                      ))}
                   </div>
                </section>
                )}

              </div>
            </ScrollArea>
            
            {/* Footer Actions */}
            <div className="p-6 border-t border-zinc-800 bg-zinc-900/50 backdrop-blur-md">
              <Button className="w-full bg-white text-black hover:bg-zinc-200">
                {t({ en: 'Complete Lesson', es: 'Completar Lección' })}
              </Button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
