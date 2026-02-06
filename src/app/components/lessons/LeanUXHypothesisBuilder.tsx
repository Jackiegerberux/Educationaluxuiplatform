import React, { useState } from 'react';
import { useLanguage } from '../layout/LanguageContext';
import { motion, AnimatePresence } from 'motion/react';
import { Lightbulb, Target, Users, TrendingUp, RotateCcw, CheckCircle2, XCircle, ArrowRight } from 'lucide-react';

interface HypothesisState {
  outcome: string;
  feature: string;
  persona: string;
}

interface ExperimentResult {
  metric: string;
  target: number;
  actual: number;
  status: 'success' | 'partial' | 'fail';
}

const LeanUXHypothesisBuilder: React.FC = () => {
  const { language } = useLanguage();
  const t = (text: { en: string; es: string }) => text[language];

  const [hypothesis, setHypothesis] = useState<HypothesisState>({
    outcome: '',
    feature: '',
    persona: ''
  });

  const [currentPhase, setCurrentPhase] = useState<'build' | 'measure' | 'learn' | 'idle'>('idle');
  const [showResult, setShowResult] = useState(false);
  const [experimentResult, setExperimentResult] = useState<ExperimentResult | null>(null);

  const examples = {
    en: [
      {
        outcome: '20% increase in newsletter signups',
        feature: 'add social proof testimonials above the fold',
        persona: 'first-time blog visitors'
      },
      {
        outcome: 'reduce cart abandonment by 15%',
        feature: 'show estimated delivery date before checkout',
        persona: 'online shoppers'
      },
      {
        outcome: 'increase feature adoption by 30%',
        feature: 'add interactive onboarding tour',
        persona: 'new SaaS users'
      }
    ],
    es: [
      {
        outcome: '20% aumento en suscripciones al boletín',
        feature: 'agregar testimonios de prueba social en la parte superior',
        persona: 'visitantes primerizos del blog'
      },
      {
        outcome: 'reducir abandono de carrito en 15%',
        feature: 'mostrar fecha estimada de entrega antes del checkout',
        persona: 'compradores en línea'
      },
      {
        outcome: 'aumentar adopción de característica en 30%',
        feature: 'agregar tour interactivo de onboarding',
        persona: 'nuevos usuarios SaaS'
      }
    ]
  };

  const loadExample = (index: number) => {
    const example = examples[language][index];
    setHypothesis(example);
    setCurrentPhase('idle');
    setShowResult(false);
  };

  const generateHypothesis = () => {
    if (!hypothesis.outcome || !hypothesis.feature || !hypothesis.persona) return '';
    
    const template = language === 'en' 
      ? `We believe ${hypothesis.outcome} will happen if we ${hypothesis.feature} for ${hypothesis.persona}.`
      : `Creemos que ${hypothesis.outcome} sucederá si ${hypothesis.feature} para ${hypothesis.persona}.`;
    
    return template;
  };

  const runExperiment = () => {
    if (!hypothesis.outcome || !hypothesis.feature || !hypothesis.persona) return;
    
    setCurrentPhase('build');
    
    // Simulate Build phase
    setTimeout(() => {
      setCurrentPhase('measure');
      
      // Simulate Measure phase
      setTimeout(() => {
        setCurrentPhase('learn');
        
        // Generate simulated result
        const targetMatch = hypothesis.outcome.match(/(\d+)%/);
        const target = targetMatch ? parseInt(targetMatch[1]) : 20;
        const actual = Math.floor(target * (0.5 + Math.random() * 0.7)); // Random between 50%-120% of target
        
        const result: ExperimentResult = {
          metric: hypothesis.outcome,
          target,
          actual,
          status: actual >= target ? 'success' : actual >= target * 0.7 ? 'partial' : 'fail'
        };
        
        setExperimentResult(result);
        setShowResult(true);
      }, 2000);
    }, 2000);
  };

  const reset = () => {
    setCurrentPhase('idle');
    setShowResult(false);
    setExperimentResult(null);
  };

  const isFormValid = hypothesis.outcome && hypothesis.feature && hypothesis.persona;
  const generatedHypothesis = generateHypothesis();

  const phaseLabels = {
    build: { en: 'Build', es: 'Construir' },
    measure: { en: 'Measure', es: 'Medir' },
    learn: { en: 'Learn', es: 'Aprender' }
  };

  return (
    <div className="w-full max-w-5xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center space-y-2">
        <h3 className="text-2xl font-bold text-gray-900">
          {t({ en: 'Lean UX Hypothesis Builder', es: 'Constructor de Hipótesis Lean UX' })}
        </h3>
        <p className="text-gray-600">
          {t({ 
            en: 'Create testable hypotheses and simulate the Build-Measure-Learn cycle', 
            es: 'Crea hipótesis comprobables y simula el ciclo Construir-Medir-Aprender' 
          })}
        </p>
      </div>

      {/* Quick Examples */}
      <div className="flex gap-2 flex-wrap justify-center">
        {examples[language].map((_, index) => (
          <button
            key={index}
            onClick={() => loadExample(index)}
            className="px-3 py-1.5 text-sm bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg transition-colors"
          >
            {t({ en: `Example ${index + 1}`, es: `Ejemplo ${index + 1}` })}
          </button>
        ))}
      </div>

      {/* Hypothesis Form */}
      <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 space-y-6">
        <div className="grid md:grid-cols-3 gap-4">
          {/* Outcome */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
              <Target className="size-4 text-green-600" />
              {t({ en: 'Outcome', es: 'Resultado' })}
            </label>
            <input
              type="text"
              value={hypothesis.outcome}
              onChange={(e) => setHypothesis({ ...hypothesis, outcome: e.target.value })}
              placeholder={t({ 
                en: 'e.g., 20% increase in signups', 
                es: 'ej., 20% aumento en registros' 
              })}
              className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none transition-colors"
            />
          </div>

          {/* Feature */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
              <Lightbulb className="size-4 text-yellow-600" />
              {t({ en: 'Feature', es: 'Característica' })}
            </label>
            <input
              type="text"
              value={hypothesis.feature}
              onChange={(e) => setHypothesis({ ...hypothesis, feature: e.target.value })}
              placeholder={t({ 
                en: 'e.g., add testimonials above fold', 
                es: 'ej., agregar testimonios arriba' 
              })}
              className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:border-yellow-500 focus:outline-none transition-colors"
            />
          </div>

          {/* Persona */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
              <Users className="size-4 text-blue-600" />
              {t({ en: 'Persona', es: 'Persona' })}
            </label>
            <input
              type="text"
              value={hypothesis.persona}
              onChange={(e) => setHypothesis({ ...hypothesis, persona: e.target.value })}
              placeholder={t({ 
                en: 'e.g., first-time visitors', 
                es: 'ej., visitantes primerizos' 
              })}
              className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
            />
          </div>
        </div>

        {/* Generated Hypothesis */}
        {generatedHypothesis && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-xl p-6"
          >
            <div className="flex items-start gap-3">
              <div className="size-10 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                <Lightbulb className="size-5 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-blue-900 mb-2">
                  {t({ en: 'Your Hypothesis:', es: 'Tu Hipótesis:' })}
                </p>
                <p className="text-lg font-medium text-gray-900 leading-relaxed">
                  "{generatedHypothesis}"
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-3 justify-center">
          <button
            onClick={runExperiment}
            disabled={!isFormValid || currentPhase !== 'idle'}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
          >
            <TrendingUp className="size-5" />
            {t({ en: 'Run Experiment', es: 'Ejecutar Experimento' })}
          </button>
          
          {(currentPhase !== 'idle' || showResult) && (
            <button
              onClick={reset}
              className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-lg transition-colors flex items-center gap-2"
            >
              <RotateCcw className="size-5" />
              {t({ en: 'Reset', es: 'Reiniciar' })}
            </button>
          )}
        </div>
      </div>

      {/* Build-Measure-Learn Cycle Visualization */}
      <AnimatePresence>
        {currentPhase !== 'idle' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-gray-200 rounded-2xl p-8"
          >
            <h4 className="text-xl font-bold text-center mb-8 text-gray-900">
              {t({ en: 'Build-Measure-Learn Cycle', es: 'Ciclo Construir-Medir-Aprender' })}
            </h4>

            <div className="grid md:grid-cols-3 gap-6">
              {(['build', 'measure', 'learn'] as const).map((phase, index) => {
                const isActive = currentPhase === phase;
                const isPast = ['build', 'measure', 'learn'].indexOf(currentPhase) > index;
                
                return (
                  <React.Fragment key={phase}>
                    <motion.div
                      animate={{
                        scale: isActive ? 1.05 : 1,
                        opacity: isActive || isPast ? 1 : 0.5
                      }}
                      className={`relative ${
                        isActive 
                          ? 'bg-blue-600 text-white' 
                          : isPast 
                          ? 'bg-green-100 text-green-900 border-2 border-green-300' 
                          : 'bg-white text-gray-600 border-2 border-gray-300'
                      } rounded-xl p-6 transition-all`}
                    >
                      {/* Phase Number */}
                      <div className={`absolute -top-3 -left-3 size-8 rounded-full flex items-center justify-center text-sm font-bold ${
                        isActive 
                          ? 'bg-blue-800 text-white' 
                          : isPast 
                          ? 'bg-green-600 text-white' 
                          : 'bg-gray-200 text-gray-600'
                      }`}>
                        {isPast ? <CheckCircle2 className="size-5" /> : index + 1}
                      </div>

                      <h5 className="text-lg font-bold mb-3 mt-2">
                        {t(phaseLabels[phase])}
                      </h5>

                      {phase === 'build' && (
                        <p className="text-sm opacity-90">
                          {t({ 
                            en: 'Create minimal prototype to test hypothesis', 
                            es: 'Crear prototipo mínimo para probar hipótesis' 
                          })}
                        </p>
                      )}
                      {phase === 'measure' && (
                        <p className="text-sm opacity-90">
                          {t({ 
                            en: 'Collect data and track key metrics', 
                            es: 'Recopilar datos y rastrear métricas clave' 
                          })}
                        </p>
                      )}
                      {phase === 'learn' && (
                        <p className="text-sm opacity-90">
                          {t({ 
                            en: 'Analyze results and decide: pivot or persevere', 
                            es: 'Analizar resultados y decidir: pivotar o perseverar' 
                          })}
                        </p>
                      )}

                      {/* Loading Animation */}
                      {isActive && (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                          className="absolute bottom-4 right-4"
                        >
                          <RotateCcw className="size-5" />
                        </motion.div>
                      )}
                    </motion.div>

                    {/* Arrow between phases */}
                    {index < 2 && (
                      <div className="hidden md:flex items-center justify-center">
                        <ArrowRight className={`size-8 ${
                          isPast || isActive ? 'text-blue-600' : 'text-gray-300'
                        }`} />
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Results */}
      <AnimatePresence>
        {showResult && experimentResult && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`border-2 rounded-2xl p-8 ${
              experimentResult.status === 'success' 
                ? 'bg-green-50 border-green-300' 
                : experimentResult.status === 'partial'
                ? 'bg-yellow-50 border-yellow-300'
                : 'bg-red-50 border-red-300'
            }`}
          >
            <div className="flex items-start gap-4">
              <div className={`size-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                experimentResult.status === 'success' 
                  ? 'bg-green-600' 
                  : experimentResult.status === 'partial'
                  ? 'bg-yellow-600'
                  : 'bg-red-600'
              }`}>
                {experimentResult.status === 'success' ? (
                  <CheckCircle2 className="size-7 text-white" />
                ) : (
                  <XCircle className="size-7 text-white" />
                )}
              </div>

              <div className="flex-1">
                <h4 className={`text-2xl font-bold mb-3 ${
                  experimentResult.status === 'success' 
                    ? 'text-green-900' 
                    : experimentResult.status === 'partial'
                    ? 'text-yellow-900'
                    : 'text-red-900'
                }`}>
                  {experimentResult.status === 'success' 
                    ? t({ en: 'Hypothesis Validated! 🎉', es: '¡Hipótesis Validada! 🎉' })
                    : experimentResult.status === 'partial'
                    ? t({ en: 'Partial Success', es: 'Éxito Parcial' })
                    : t({ en: 'Hypothesis Not Validated', es: 'Hipótesis No Validada' })
                  }
                </h4>

                <div className="space-y-3">
                  <div className="flex items-center gap-4">
                    <div>
                      <p className="text-sm font-semibold text-gray-600">
                        {t({ en: 'Target:', es: 'Objetivo:' })}
                      </p>
                      <p className="text-3xl font-bold text-gray-900">
                        {experimentResult.target}%
                      </p>
                    </div>
                    <ArrowRight className="size-6 text-gray-400" />
                    <div>
                      <p className="text-sm font-semibold text-gray-600">
                        {t({ en: 'Actual:', es: 'Real:' })}
                      </p>
                      <p className={`text-3xl font-bold ${
                        experimentResult.status === 'success' 
                          ? 'text-green-700' 
                          : experimentResult.status === 'partial'
                          ? 'text-yellow-700'
                          : 'text-red-700'
                      }`}>
                        {experimentResult.actual}%
                      </p>
                    </div>
                  </div>

                  <div className={`p-4 rounded-lg ${
                    experimentResult.status === 'success' 
                      ? 'bg-green-100' 
                      : experimentResult.status === 'partial'
                      ? 'bg-yellow-100'
                      : 'bg-red-100'
                  }`}>
                    <p className="font-semibold mb-2">
                      {t({ en: 'Decision:', es: 'Decisión:' })}
                    </p>
                    <p className="text-sm">
                      {experimentResult.status === 'success' 
                        ? t({ 
                            en: '✅ Persevere: The hypothesis is validated. Scale this feature and continue iterating.', 
                            es: '✅ Perseverar: La hipótesis está validada. Escala esta característica y continúa iterando.' 
                          })
                        : experimentResult.status === 'partial'
                        ? t({ 
                            en: '⚡ Iterate: Partial success. Refine the feature and test again with improvements.', 
                            es: '⚡ Iterar: Éxito parcial. Refina la característica y prueba de nuevo con mejoras.' 
                          })
                        : t({ 
                            en: '🔄 Pivot: The hypothesis failed. Revisit assumptions and try a different approach.', 
                            es: '🔄 Pivotar: La hipótesis falló. Revisa las suposiciones e intenta un enfoque diferente.' 
                          })
                      }
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Educational Note */}
      <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-lg">
        <p className="text-sm text-blue-900">
          <strong>{t({ en: 'Remember:', es: 'Recuerda:' })}</strong>{' '}
          {t({ 
            en: 'Your MVP should be the smallest thing that tests your riskiest assumption. Even a landing page or prototype can be a valid MVP.', 
            es: 'Tu MVP debe ser la cosa más pequeña que pruebe tu suposición más riesgosa. Incluso una landing page o prototipo puede ser un MVP válido.' 
          })}
        </p>
      </div>
    </div>
  );
};

export default LeanUXHypothesisBuilder;
