import React, { useState } from 'react';
import { Topic } from '../../data/content';
import { useLanguage } from '../layout/LanguageContext';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, AlertTriangle, Lightbulb, BookOpen, ExternalLink, ListChecks, Sparkles, Bot, ArrowRight, CheckCircle2, Wrench, FileCheck, Code, HelpCircle, Image as ImageIcon } from 'lucide-react';
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

function QuizSection({ quiz, language }: { quiz: any[], language: any }) {
  const [selectedAnswers, setSelectedAnswers] = useState<{[key: number]: number}>({});
  const [showResults, setShowResults] = useState<{[key: number]: boolean}>({});

  const handleAnswer = (quizIndex: number, optionIndex: number) => {
    setSelectedAnswers({...selectedAnswers, [quizIndex]: optionIndex});
  };

  const checkAnswer = (quizIndex: number) => {
    setShowResults({...showResults, [quizIndex]: true});
  };

  return (
    <section className="bg-gradient-to-br from-orange-950/30 to-red-950/30 border border-orange-500/20 rounded-2xl p-6 md:p-8">
       <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
          <HelpCircle className="size-5 text-orange-400" />
          {language({ en: 'Knowledge Check', es: 'Verificación de Conocimiento' })}
       </h3>
       <div className="space-y-6">
          {quiz.map((q: any, qIdx: number) => (
            <div key={qIdx} className="bg-black/40 rounded-xl p-4 border border-orange-500/20">
               <p className="text-white font-medium mb-4">{language(q.question)}</p>
               <div className="space-y-2 mb-4">
                  {language(q.options).map((option: string, oIdx: number) => {
                    const isSelected = selectedAnswers[qIdx] === oIdx;
                    const isCorrect = q.correctIndex === oIdx;
                    const showFeedback = showResults[qIdx];
                    
                    return (
                      <button
                        key={oIdx}
                        onClick={() => !showFeedback && handleAnswer(qIdx, oIdx)}
                        disabled={showFeedback}
                        className={`w-full text-left p-3 rounded-lg border transition-all ${
                          showFeedback
                            ? isCorrect
                              ? 'bg-green-950/50 border-green-500/50 text-green-200'
                              : isSelected
                              ? 'bg-red-950/50 border-red-500/50 text-red-200'
                              : 'bg-zinc-900/50 border-zinc-700 text-zinc-400'
                            : isSelected
                            ? 'bg-orange-950/50 border-orange-500/50 text-orange-200'
                            : 'bg-zinc-900/50 border-zinc-700 text-zinc-300 hover:border-orange-500/30'
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          {showFeedback && isCorrect && <Check className="size-4 text-green-400" />}
                          {showFeedback && isSelected && !isCorrect && <X className="size-4 text-red-400" />}
                          {option}
                        </span>
                      </button>
                    );
                  })}
               </div>
               {!showResults[qIdx] && selectedAnswers[qIdx] !== undefined && (
                 <button
                   onClick={() => checkAnswer(qIdx)}
                   className="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg text-sm font-medium transition-colors"
                 >
                   {language({ en: 'Check Answer', es: 'Verificar Respuesta' })}
                 </button>
               )}
               {showResults[qIdx] && (
                 <div className="mt-4 p-3 rounded-lg bg-zinc-900/80 border border-zinc-700">
                    <p className="text-sm text-zinc-300">{language(q.explanation)}</p>
                 </div>
               )}
            </div>
          ))}
       </div>
    </section>
  );
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

                {/* 8. How to Validate This (New) */}
                {topic.content?.howToValidate && (
                <section className="bg-gradient-to-br from-green-950/30 to-emerald-950/30 border border-green-500/20 rounded-2xl p-6 md:p-8">
                   <div className="flex items-center gap-3 mb-6">
                      <div className="size-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                         <CheckCircle2 className="size-5 text-green-300" />
                      </div>
                      <div>
                         <h3 className="text-xl font-semibold text-white">
                            {t({ en: 'How to Validate This', es: 'Cómo Validar Esto' })}
                         </h3>
                         <p className="text-sm text-green-200/70">{t({en: 'Make your work evidence-based', es: 'Haz tu trabajo basado en evidencia'})}</p>
                      </div>
                   </div>
                   
                   <div className="space-y-6">
                      <div>
                         <h4 className="text-sm font-semibold text-green-400 mb-2 flex items-center gap-2">
                            {t({ en: 'What to Validate', es: 'Qué Validar' })}
                         </h4>
                         <p className="text-zinc-300 leading-relaxed">
                           {t(topic.content.howToValidate.what)}
                         </p>
                      </div>

                      <div>
                         <h4 className="text-sm font-semibold text-green-400 mb-3 flex items-center gap-2">
                            {t({ en: 'Validation Methods', es: 'Métodos de Validación' })}
                         </h4>
                         <div className="space-y-2">
                            {t(topic.content.howToValidate.methods).map((method: string, idx: number) => (
                              <div key={idx} className="flex items-start gap-2 text-sm text-zinc-300">
                                <CheckCircle2 className="size-4 text-green-400 mt-0.5 shrink-0" />
                                <span>{method}</span>
                              </div>
                            ))}
                         </div>
                      </div>

                      <div>
                         <h4 className="text-sm font-semibold text-green-400 mb-3 flex items-center gap-2">
                            <Wrench className="size-4" />
                            {t({ en: 'Recommended Tools', es: 'Herramientas Recomendadas' })}
                         </h4>
                         <div className="flex flex-wrap gap-2">
                            {t(topic.content.howToValidate.tools).map((tool: string, idx: number) => (
                              <span key={idx} className="px-3 py-1.5 bg-green-950/50 border border-green-500/30 rounded-lg text-xs text-green-200">
                                {tool}
                              </span>
                            ))}
                         </div>
                      </div>

                      <div className="bg-black/40 rounded-xl p-4 border border-green-500/20">
                         <h4 className="text-sm font-semibold text-green-400 mb-2">
                            {t({ en: 'What Evidence Looks Like', es: 'Cómo se Ve la Evidencia' })}
                         </h4>
                         <p className="text-sm text-zinc-300 italic">
                           {t(topic.content.howToValidate.evidenceExample)}
                         </p>
                      </div>
                   </div>
                </section>
                )}

                {/* 9. Deliverables / Outputs (New) */}
                {topic.content?.deliverables && (
                <section>
                   <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                      <FileCheck className="size-5 text-yellow-400" />
                      {t({ en: 'Deliverables & Outputs', es: 'Entregables y Outputs' })}
                   </h3>
                   <p className="text-zinc-400 mb-4">{t(topic.content.deliverables.description)}</p>
                   <div className="grid gap-3">
                     {t(topic.content.deliverables.items).map((item: string, i: number) => (
                       <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-yellow-950/20 border border-yellow-500/20">
                          <FileCheck className="size-5 text-yellow-400 mt-0.5 shrink-0" />
                          <span className="text-zinc-300">{item}</span>
                       </div>
                     ))}
                   </div>
                </section>
                )}

                {/* 10. Practical Tools (New) */}
                {topic.content?.practicalTools && (
                <section>
                   <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                      <Wrench className="size-5 text-blue-400" />
                      {t({ en: 'Tools Ecosystem', es: 'Ecosistema de Herramientas' })}
                   </h3>
                   <div className="space-y-4">
                      <div>
                         <h4 className="text-sm font-semibold text-blue-400 mb-3">
                            {t({ en: 'Design Tools', es: 'Herramientas de Diseño' })}
                         </h4>
                         <div className="flex flex-wrap gap-2">
                            {t(topic.content.practicalTools.design).map((tool: string, idx: number) => (
                              <span key={idx} className="px-3 py-1.5 bg-blue-950/50 border border-blue-500/30 rounded-lg text-sm text-blue-200">
                                {tool}
                              </span>
                            ))}
                         </div>
                      </div>
                      {t(topic.content.practicalTools.research).length > 0 && (
                      <div>
                         <h4 className="text-sm font-semibold text-purple-400 mb-3">
                            {t({ en: 'Research Tools', es: 'Herramientas de Investigación' })}
                         </h4>
                         <div className="flex flex-wrap gap-2">
                            {t(topic.content.practicalTools.research).map((tool: string, idx: number) => (
                              <span key={idx} className="px-3 py-1.5 bg-purple-950/50 border border-purple-500/30 rounded-lg text-sm text-purple-200">
                                {tool}
                              </span>
                            ))}
                         </div>
                      </div>
                      )}
                      {t(topic.content.practicalTools.handoff).length > 0 && (
                      <div>
                         <h4 className="text-sm font-semibold text-green-400 mb-3">
                            {t({ en: 'Handoff & Collaboration', es: 'Handoff y Colaboración' })}
                         </h4>
                         <div className="flex flex-wrap gap-2">
                            {t(topic.content.practicalTools.handoff).map((tool: string, idx: number) => (
                              <span key={idx} className="px-3 py-1.5 bg-green-950/50 border border-green-500/30 rounded-lg text-sm text-green-200">
                                {tool}
                              </span>
                            ))}
                         </div>
                      </div>
                      )}
                   </div>
                </section>
                )}

                {/* 11. Real Example (New) */}
                {topic.content?.realExample && (
                <section className="bg-gradient-to-br from-zinc-900/50 to-zinc-800/50 border border-zinc-700 rounded-2xl p-6 md:p-8">
                   <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                      <ImageIcon className="size-5 text-indigo-400" />
                      {t({ en: 'Real-World Example', es: 'Ejemplo del Mundo Real' })}
                   </h3>
                   <div className="space-y-4">
                      <div>
                         <h4 className="text-lg font-medium text-white mb-2">{t(topic.content.realExample.title)}</h4>
                         {topic.content.realExample.company && (
                            <span className="text-sm text-zinc-500">Company: {topic.content.realExample.company}</span>
                         )}
                      </div>
                      {topic.content.realExample.imageUrl && (
                         <div className="rounded-lg overflow-hidden border border-zinc-700">
                            <img src={topic.content.realExample.imageUrl} alt={t(topic.content.realExample.title)} className="w-full" />
                         </div>
                      )}
                      <p className="text-zinc-300 leading-relaxed">{t(topic.content.realExample.description)}</p>
                   </div>
                </section>
                )}

                {/* 12. Mini Quiz (New) */}
                {topic.content?.quiz && topic.content.quiz.length > 0 && (
                <QuizSection quiz={topic.content.quiz} language={t} />
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