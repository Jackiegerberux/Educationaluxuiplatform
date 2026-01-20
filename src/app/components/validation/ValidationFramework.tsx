import React, { useState } from 'react';
import { useLanguage } from '@/app/components/layout/LanguageContext';
import { validationMatrix } from '@/app/data/content';
import { ChevronDown, ChevronUp, CheckCircle2, AlertTriangle, Lightbulb, FileText, Target, Beaker } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function ValidationFramework() {
  const { language, t } = useLanguage();
  const [expandedRow, setExpandedRow] = useState<string | null>(null);

  const stageColors = {
    discover: 'from-blue-500/20 to-blue-600/20 border-blue-500/30',
    define: 'from-purple-500/20 to-purple-600/20 border-purple-500/30',
    develop: 'from-indigo-500/20 to-indigo-600/20 border-indigo-500/30',
    deliver: 'from-green-500/20 to-green-600/20 border-green-500/30'
  };

  const stageLabels = {
    discover: { en: 'Discover', es: 'Descubrir' },
    define: { en: 'Define', es: 'Definir' },
    develop: { en: 'Develop', es: 'Desarrollar' },
    deliver: { en: 'Deliver', es: 'Entregar' }
  };

  const evidenceTypeLabels = {
    qualitative: { en: 'Qualitative', es: 'Cualitativo' },
    quantitative: { en: 'Quantitative', es: 'Cuantitativo' },
    mixed: { en: 'Mixed', es: 'Mixto' }
  };

  const toggleRow = (id: string) => {
    setExpandedRow(expandedRow === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-black text-zinc-100 pt-24 pb-20">
      {/* Hero Section */}
      <div className="w-full border-b border-white/10 bg-gradient-to-b from-indigo-950/20 to-black pb-16">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6">
              <Target className="size-4 text-indigo-400" />
              <span className="text-sm text-indigo-300">
                {language === 'en' ? 'Validation Framework' : 'Marco de Validación'}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
              {language === 'en' 
                ? 'Make Validations Explicit' 
                : 'Haz las Validaciones Explícitas'}
            </h1>
            <p className="text-lg text-zinc-400 max-w-3xl mx-auto leading-relaxed">
              {language === 'en'
                ? 'Every design artifact needs validation. This framework maps what to test, how to test it, what evidence to collect, and what success looks like across the entire UX/UI journey.'
                : 'Cada artefacto de diseño necesita validación. Este marco mapea qué probar, cómo probarlo, qué evidencia recolectar y cómo se ve el éxito a lo largo de todo el viaje UX/UI.'}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Validation Matrix */}
      <div className="mx-auto max-w-7xl px-4 mt-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <Beaker className="size-6 text-indigo-400" />
            {language === 'en' ? 'Validation Matrix' : 'Matriz de Validación'}
          </h2>

          {/* Table Header - Desktop */}
          <div className="hidden lg:block overflow-x-auto">
            <div className="min-w-full bg-zinc-900/50 border border-white/10 rounded-lg overflow-hidden">
              <div className="grid grid-cols-[1.5fr,1fr,1.2fr,1.2fr,1fr,1.2fr,0.5fr] gap-4 p-4 bg-zinc-800/50 border-b border-white/10 text-sm font-medium text-zinc-300">
                <div>{language === 'en' ? 'Artifact' : 'Artefacto'}</div>
                <div>{language === 'en' ? 'Stage' : 'Etapa'}</div>
                <div>{language === 'en' ? 'Validation Method' : 'Método de Validación'}</div>
                <div>{language === 'en' ? 'Evidence Type' : 'Tipo de Evidencia'}</div>
                <div>{language === 'en' ? 'Tools' : 'Herramientas'}</div>
                <div>{language === 'en' ? 'Success Criteria' : 'Criterios de Éxito'}</div>
                <div></div>
              </div>

              {/* Table Rows */}
              {validationMatrix.map((item, index) => (
                <div key={item.id}>
                  <div 
                    className={`grid grid-cols-[1.5fr,1fr,1.2fr,1.2fr,1fr,1.2fr,0.5fr] gap-4 p-4 items-center cursor-pointer transition-colors hover:bg-zinc-800/30 ${
                      expandedRow === item.id ? 'bg-zinc-800/50' : ''
                    } ${index !== validationMatrix.length - 1 ? 'border-b border-white/5' : ''}`}
                    onClick={() => toggleRow(item.id)}
                  >
                    <div>
                      <div className="font-medium text-white">{t(item.artifact)}</div>
                      <div className="text-sm text-zinc-500 mt-1">{t(item.outputArtifact)}</div>
                    </div>
                    <div>
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${stageColors[item.stage]} border`}>
                        {t(stageLabels[item.stage])}
                      </span>
                    </div>
                    <div className="text-sm text-zinc-300">{t(item.validationMethod)}</div>
                    <div>
                      <span className="inline-block px-2 py-1 rounded bg-zinc-700/50 text-xs text-zinc-300">
                        {t(evidenceTypeLabels[item.evidenceType])}
                      </span>
                    </div>
                    <div className="text-sm text-zinc-400">
                      {t(item.tools).slice(0, 2).join(', ')}
                      {t(item.tools).length > 2 && '...'}
                    </div>
                    <div className="text-sm text-zinc-400">{t(item.successCriteria).slice(0, 60)}...</div>
                    <div className="text-center">
                      {expandedRow === item.id ? (
                        <ChevronUp className="size-5 text-zinc-400" />
                      ) : (
                        <ChevronDown className="size-5 text-zinc-400" />
                      )}
                    </div>
                  </div>

                  {/* Expanded Details */}
                  <AnimatePresence>
                    {expandedRow === item.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden bg-zinc-900/80 border-t border-white/5"
                      >
                        <div className="p-6 space-y-6">
                          {/* Hypothesis & Decision Impact */}
                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <h4 className="text-sm font-semibold text-indigo-400 mb-2 flex items-center gap-2">
                                <Target className="size-4" />
                                {language === 'en' ? 'Hypothesis' : 'Hipótesis'}
                              </h4>
                              <p className="text-sm text-zinc-300">{t(item.hypothesis)}</p>
                            </div>
                            <div>
                              <h4 className="text-sm font-semibold text-green-400 mb-2 flex items-center gap-2">
                                <CheckCircle2 className="size-4" />
                                {language === 'en' ? 'Decision Impact' : 'Impacto de Decisión'}
                              </h4>
                              <p className="text-sm text-zinc-300">{t(item.decisionImpact)}</p>
                            </div>
                          </div>

                          {/* Example Scenario */}
                          <div className="bg-zinc-800/50 border border-zinc-700/50 rounded-lg p-4">
                            <h4 className="text-sm font-semibold text-blue-400 mb-2 flex items-center gap-2">
                              <FileText className="size-4" />
                              {language === 'en' ? 'Example Scenario' : 'Escenario de Ejemplo'}
                            </h4>
                            <p className="text-sm text-zinc-300 leading-relaxed">{t(item.exampleScenario)}</p>
                          </div>

                          {/* Common Mistakes */}
                          <div>
                            <h4 className="text-sm font-semibold text-orange-400 mb-3 flex items-center gap-2">
                              <AlertTriangle className="size-4" />
                              {language === 'en' ? 'Common Mistakes' : 'Errores Comunes'}
                            </h4>
                            <ul className="space-y-2">
                              {t(item.commonMistakes).map((mistake: string, idx: number) => (
                                <li key={idx} className="text-sm text-zinc-400 flex items-start gap-2">
                                  <span className="text-orange-400 mt-1">×</span>
                                  <span>{mistake}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* AI in Practice */}
                          <div className="bg-gradient-to-r from-purple-950/30 to-indigo-950/30 border border-purple-500/20 rounded-lg p-4">
                            <h4 className="text-sm font-semibold text-purple-300 mb-3 flex items-center gap-2">
                              <Lightbulb className="size-4" />
                              {language === 'en' ? 'AI in Practice' : 'IA en Práctica'}
                            </h4>
                            <div className="space-y-4">
                              {item.aiPrompts.map((promptItem, idx) => (
                                <div key={idx} className="bg-black/40 rounded p-3">
                                  <div className="flex items-center justify-between mb-2">
                                    <span className="text-xs font-medium text-purple-400">{promptItem.tool}</span>
                                    <span className="text-xs text-zinc-500">{t(promptItem.context)}</span>
                                  </div>
                                  <p className="text-sm text-zinc-300 font-mono bg-zinc-900/50 rounded p-2">
                                    {t(promptItem.prompt)}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* All Tools */}
                          <div>
                            <h4 className="text-sm font-semibold text-zinc-400 mb-2">
                              {language === 'en' ? 'Recommended Tools' : 'Herramientas Recomendadas'}
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {t(item.tools).map((tool: string, idx: number) => (
                                <span key={idx} className="px-3 py-1 bg-zinc-800 border border-zinc-700 rounded-full text-xs text-zinc-300">
                                  {tool}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile/Tablet Card View */}
          <div className="lg:hidden space-y-4">
            {validationMatrix.map((item) => (
              <div 
                key={item.id} 
                className="bg-zinc-900/50 border border-white/10 rounded-lg overflow-hidden"
              >
                <div 
                  className="p-4 cursor-pointer"
                  onClick={() => toggleRow(item.id)}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="font-medium text-white mb-1">{t(item.artifact)}</h3>
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${stageColors[item.stage]} border`}>
                        {t(stageLabels[item.stage])}
                      </span>
                    </div>
                    {expandedRow === item.id ? (
                      <ChevronUp className="size-5 text-zinc-400" />
                    ) : (
                      <ChevronDown className="size-5 text-zinc-400" />
                    )}
                  </div>
                  <div className="text-sm text-zinc-400 space-y-2">
                    <div>
                      <span className="text-zinc-500">{language === 'en' ? 'Method:' : 'Método:'}</span> {t(item.validationMethod)}
                    </div>
                    <div>
                      <span className="text-zinc-500">{language === 'en' ? 'Evidence:' : 'Evidencia:'}</span>{' '}
                      <span className="inline-block px-2 py-0.5 rounded bg-zinc-700/50 text-xs">
                        {t(evidenceTypeLabels[item.evidenceType])}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Expanded Content - Mobile */}
                <AnimatePresence>
                  {expandedRow === item.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden bg-zinc-900/80 border-t border-white/5"
                    >
                      <div className="p-4 space-y-4">
                        {/* Hypothesis */}
                        <div>
                          <h4 className="text-xs font-semibold text-indigo-400 mb-1 flex items-center gap-2">
                            <Target className="size-3" />
                            {language === 'en' ? 'Hypothesis' : 'Hipótesis'}
                          </h4>
                          <p className="text-sm text-zinc-300">{t(item.hypothesis)}</p>
                        </div>

                        {/* Example Scenario */}
                        <div className="bg-zinc-800/50 border border-zinc-700/50 rounded-lg p-3">
                          <h4 className="text-xs font-semibold text-blue-400 mb-1 flex items-center gap-2">
                            <FileText className="size-3" />
                            {language === 'en' ? 'Example' : 'Ejemplo'}
                          </h4>
                          <p className="text-sm text-zinc-300 leading-relaxed">{t(item.exampleScenario)}</p>
                        </div>

                        {/* Common Mistakes */}
                        <div>
                          <h4 className="text-xs font-semibold text-orange-400 mb-2 flex items-center gap-2">
                            <AlertTriangle className="size-3" />
                            {language === 'en' ? 'Common Mistakes' : 'Errores Comunes'}
                          </h4>
                          <ul className="space-y-1">
                            {t(item.commonMistakes).map((mistake: string, idx: number) => (
                              <li key={idx} className="text-xs text-zinc-400 flex items-start gap-2">
                                <span className="text-orange-400">×</span>
                                <span>{mistake}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* AI Prompts */}
                        <div className="bg-gradient-to-r from-purple-950/30 to-indigo-950/30 border border-purple-500/20 rounded-lg p-3">
                          <h4 className="text-xs font-semibold text-purple-300 mb-2 flex items-center gap-2">
                            <Lightbulb className="size-3" />
                            {language === 'en' ? 'AI Prompts' : 'Prompts de IA'}
                          </h4>
                          <div className="space-y-2">
                            {item.aiPrompts.map((promptItem, idx) => (
                              <div key={idx} className="bg-black/40 rounded p-2">
                                <div className="text-xs font-medium text-purple-400 mb-1">{promptItem.tool}</div>
                                <p className="text-xs text-zinc-300 font-mono">{t(promptItem.prompt)}</p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Success Criteria */}
                        <div>
                          <h4 className="text-xs font-semibold text-green-400 mb-1 flex items-center gap-2">
                            <CheckCircle2 className="size-3" />
                            {language === 'en' ? 'Success Criteria' : 'Criterios de Éxito'}
                          </h4>
                          <p className="text-sm text-zinc-300">{t(item.successCriteria)}</p>
                        </div>

                        {/* Tools */}
                        <div>
                          <h4 className="text-xs font-semibold text-zinc-400 mb-2">
                            {language === 'en' ? 'Tools' : 'Herramientas'}
                          </h4>
                          <div className="flex flex-wrap gap-1">
                            {t(item.tools).map((tool: string, idx: number) => (
                              <span key={idx} className="px-2 py-0.5 bg-zinc-800 border border-zinc-700 rounded text-xs text-zinc-300">
                                {tool}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 p-8 bg-gradient-to-r from-indigo-950/30 to-purple-950/30 border border-indigo-500/20 rounded-lg text-center"
        >
          <h3 className="text-xl font-bold mb-3">
            {language === 'en' 
              ? 'Apply This to Every Lesson' 
              : 'Aplica Esto a Cada Lección'}
          </h3>
          <p className="text-zinc-400 mb-6 max-w-2xl mx-auto">
            {language === 'en'
              ? 'Each topic in the learning paths now includes a "How to Validate This" section with methods, tools, and evidence examples specific to that artifact.'
              : 'Cada tema en las rutas de aprendizaje ahora incluye una sección "Cómo Validar Esto" con métodos, herramientas y ejemplos de evidencia específicos para ese artefacto.'}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
