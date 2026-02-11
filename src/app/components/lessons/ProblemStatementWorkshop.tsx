import React, { useState } from 'react';
import { useLanguage } from '../layout/LanguageContext';
import { 
  Target, 
  Users, 
  Copy, 
  Check, 
  AlertTriangle, 
  Lightbulb, 
  ChevronDown, 
  ChevronRight,
  ArrowDown,
  Sparkles,
  ThumbsUp,
  ThumbsDown,
  RotateCcw,
  Eye,
  Search
} from 'lucide-react';
import { copyToClipboard } from '../../utils/clipboard';

// ============================================================
// 1. POV Statement Builder
// ============================================================

interface POVData {
  user: string;
  need: string;
  insight: string;
}

function POVStatementBuilder() {
  const { t, language } = useLanguage();
  const [pov, setPov] = useState<POVData>({ user: '', need: '', insight: '' });
  const [copied, setCopied] = useState(false);
  const [showExample, setShowExample] = useState(false);

  const examplePOV: POVData = language === 'en' 
    ? {
        user: 'An adult person who lives in a city',
        need: 'To use a car for 10-60 minute trips 1-4 times per week',
        insight: 'The user would not want to own his own car as it would be too expensive compared to his needs. He would like to share a car with others who have similar needs, however, there are no easy and affordable solutions for him. It\'s important for the user to think and live green and to not own more than he truly needs.'
      }
    : {
        user: 'Una persona adulta que vive en una ciudad',
        need: 'Usar un auto para viajes de 10-60 minutos, 1-4 veces por semana',
        insight: 'El usuario no querria tener su propio auto ya que seria demasiado caro en comparacion con sus necesidades. Le gustaria compartir un auto con otros que tienen necesidades similares, sin embargo, no hay soluciones faciles y asequibles. Es importante para el usuario pensar y vivir verde y no poseer mas de lo que realmente necesita.'
      };

  const isComplete = pov.user.trim() && pov.need.trim() && pov.insight.trim();

  const formattedStatement = isComplete
    ? language === 'en'
      ? `${pov.user} needs a way to ${pov.need.toLowerCase()} because ${pov.insight.toLowerCase()}`
      : `${pov.user} necesita una forma de ${pov.need.toLowerCase()} porque ${pov.insight.toLowerCase()}`
    : '';

  const handleCopy = () => {
    if (!formattedStatement) return;
    const content = language === 'en'
      ? `POV Statement\n\nUser: ${pov.user}\nNeed: ${pov.need}\nInsight: ${pov.insight}\n\nFormatted: ${formattedStatement}`
      : `Declaracion POV\n\nUsuario: ${pov.user}\nNecesidad: ${pov.need}\nInsight: ${pov.insight}\n\nFormato: ${formattedStatement}`;
    copyToClipboard(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleLoadExample = () => {
    setPov(examplePOV);
    setShowExample(true);
  };

  const handleReset = () => {
    setPov({ user: '', need: '', insight: '' });
    setShowExample(false);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-3">
          <div className="size-10 bg-violet-500/20 border border-violet-500/30 rounded-xl flex items-center justify-center">
            <Eye className="size-5 text-violet-400" />
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white">
              {t({ en: 'Point of View (POV) Builder', es: 'Constructor de Punto de Vista (POV)' })}
            </h4>
            <p className="text-sm text-zinc-400">
              {t({ 
                en: 'Fill in the three fields to craft your POV statement', 
                es: 'Completa los tres campos para crear tu declaracion POV' 
              })}
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <button
            onClick={handleLoadExample}
            className="px-3 py-1.5 text-xs bg-violet-500/10 border border-violet-500/30 hover:bg-violet-500/20 text-violet-300 rounded-lg transition-colors flex items-center gap-1.5"
          >
            <Sparkles className="size-3.5" />
            {t({ en: 'Load Example', es: 'Cargar Ejemplo' })}
          </button>
          <button
            onClick={handleReset}
            className="px-3 py-1.5 text-xs bg-zinc-800 border border-zinc-700 hover:bg-zinc-700 text-zinc-300 rounded-lg transition-colors flex items-center gap-1.5"
          >
            <RotateCcw className="size-3.5" />
            {t({ en: 'Reset', es: 'Reiniciar' })}
          </button>
        </div>
      </div>

      {/* POV Table — inspired by the Figma reference image */}
      <div className="border-2 border-red-500/40 rounded-xl overflow-hidden">
        {/* Table Header */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-b-2 border-red-500/40">
          <div className="px-4 py-3 bg-red-950/30 border-b md:border-b-0 md:border-r border-red-500/40 flex items-center justify-center">
            <span className="text-sm font-bold text-white uppercase tracking-wider">
              {t({ en: 'User', es: 'Usuario' })}
            </span>
          </div>
          <div className="px-4 py-3 bg-red-950/30 border-b md:border-b-0 md:border-r border-red-500/40 flex items-center justify-center">
            <span className="text-sm font-bold text-white uppercase tracking-wider">
              {t({ en: 'Need', es: 'Necesidad' })}
            </span>
          </div>
          <div className="px-4 py-3 bg-red-950/30 flex items-center justify-center">
            <span className="text-sm font-bold text-white uppercase tracking-wider">
              {t({ en: 'Insight', es: 'Insight' })}
            </span>
          </div>
        </div>

        {/* Table Body — Input Fields */}
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="p-3 border-b md:border-b-0 md:border-r border-red-500/20 bg-zinc-950/50">
            <textarea
              value={pov.user}
              onChange={(e) => setPov({ ...pov, user: e.target.value })}
              placeholder={t({ 
                en: 'e.g., An adult person who lives in a city',
                es: 'ej., Una persona adulta que vive en una ciudad'
              })}
              rows={4}
              className="w-full bg-transparent text-white placeholder-zinc-600 text-sm leading-relaxed resize-none focus:outline-none"
            />
          </div>
          <div className="p-3 border-b md:border-b-0 md:border-r border-red-500/20 bg-zinc-950/50">
            <textarea
              value={pov.need}
              onChange={(e) => setPov({ ...pov, need: e.target.value })}
              placeholder={t({
                en: 'e.g., To use a car for 10-60 minute trips 1-4 times per week',
                es: 'ej., Usar un auto para viajes de 10-60 min, 1-4 veces por semana'
              })}
              rows={4}
              className="w-full bg-transparent text-white placeholder-zinc-600 text-sm leading-relaxed resize-none focus:outline-none"
            />
          </div>
          <div className="p-3 bg-zinc-950/50">
            <textarea
              value={pov.insight}
              onChange={(e) => setPov({ ...pov, insight: e.target.value })}
              placeholder={t({
                en: 'e.g., The user would not want to own a car as it would be too expensive...',
                es: 'ej., El usuario no querria tener un auto propio ya que seria demasiado caro...'
              })}
              rows={4}
              className="w-full bg-transparent text-white placeholder-zinc-600 text-sm leading-relaxed resize-none focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* Formatted Statement Output */}
      {isComplete && (
        <div className="bg-gradient-to-br from-violet-950/30 to-indigo-950/30 border border-violet-500/30 rounded-xl p-5 space-y-3">
          <div className="flex items-center justify-between">
            <h5 className="text-sm font-semibold text-violet-300 uppercase tracking-wider">
              {t({ en: 'Your POV Statement', es: 'Tu Declaracion POV' })}
            </h5>
            <button
              onClick={handleCopy}
              className="px-3 py-1.5 bg-violet-600 hover:bg-violet-700 text-white rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5"
            >
              {copied ? (
                <>
                  <Check className="size-3.5" />
                  {t({ en: 'Copied!', es: 'Copiado!' })}
                </>
              ) : (
                <>
                  <Copy className="size-3.5" />
                  {t({ en: 'Copy', es: 'Copiar' })}
                </>
              )}
            </button>
          </div>
          <p className="text-white leading-relaxed text-base italic">
            &ldquo;{formattedStatement}&rdquo;
          </p>
        </div>
      )}

      {/* Tip for vague vs. specific */}
      {showExample && (
        <div className="bg-amber-950/20 border border-amber-500/20 rounded-xl p-4 flex gap-3">
          <AlertTriangle className="size-5 text-amber-400 flex-shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="text-sm font-medium text-amber-300">
              {t({ en: 'Avoid vague POVs!', es: 'Evita POVs vagos!' })}
            </p>
            <p className="text-sm text-zinc-400 leading-relaxed">
              {t({
                en: 'A vague POV like "Consumers need to be educated about ugly produce" lacks specificity. Ask yourself: Why are they NOT educated? What\'s the real barrier? The more specific your insight, the better your design solutions.',
                es: 'Un POV vago como "Los consumidores necesitan ser educados sobre vegetales feos" carece de especificidad. Preguntate: Por que NO estan educados? Cual es la barrera real? Mientras mas especifico tu insight, mejores seran tus soluciones de diseno.'
              })}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}


// ============================================================
// 2. Problem Statement Evaluator
// ============================================================

interface ProblemExample {
  id: number;
  statement: { en: string; es: string };
  quality: 'good' | 'bad' | 'vague';
  feedback: { en: string; es: string };
  improvedVersion?: { en: string; es: string };
}

const PROBLEM_EXAMPLES: ProblemExample[] = [
  {
    id: 1,
    statement: {
      en: 'We need to build a mobile app for our customers.',
      es: 'Necesitamos construir una app movil para nuestros clientes.'
    },
    quality: 'bad',
    feedback: {
      en: 'This is a SOLUTION disguised as a problem. It jumps to "mobile app" without explaining the user need. What problem does the app solve? Who specifically needs it and why?',
      es: 'Esta es una SOLUCION disfrazada de problema. Salta a "app movil" sin explicar la necesidad del usuario. Que problema resuelve la app? Quien la necesita especificamente y por que?'
    },
    improvedVersion: {
      en: 'Frequent travelers need a faster way to check their loyalty points on the go because they make purchasing decisions at airports with limited time.',
      es: 'Los viajeros frecuentes necesitan una forma mas rapida de revisar sus puntos de lealtad en movimiento porque toman decisiones de compra en aeropuertos con tiempo limitado.'
    }
  },
  {
    id: 2,
    statement: {
      en: 'Busy parents need a faster way to schedule pediatric appointments because they struggle to find time during work hours to call the clinic.',
      es: 'Los padres ocupados necesitan una forma mas rapida de programar citas pediatricas porque tienen dificultades para encontrar tiempo durante horas de trabajo para llamar a la clinica.'
    },
    quality: 'good',
    feedback: {
      en: 'Excellent! This is user-centered (busy parents), specific (scheduling pediatric appointments), and has a clear insight (time constraints during work hours). It doesn\'t prescribe a solution.',
      es: 'Excelente! Esta centrado en el usuario (padres ocupados), es especifico (programar citas pediatricas), y tiene un insight claro (restricciones de tiempo durante horas de trabajo). No prescribe una solucion.'
    }
  },
  {
    id: 3,
    statement: {
      en: 'Users want better design.',
      es: 'Los usuarios quieren mejor diseno.'
    },
    quality: 'vague',
    feedback: {
      en: 'Too vague! Which users? What aspect of "design"? Visual design? Navigation? Information architecture? What specific pain point makes the current design inadequate?',
      es: 'Demasiado vago! Cuales usuarios? Que aspecto del "diseno"? Diseno visual? Navegacion? Arquitectura de informacion? Que punto de dolor especifico hace inadecuado el diseno actual?'
    },
    improvedVersion: {
      en: 'First-time e-commerce shoppers need clearer product category navigation because they abandon the site when they can\'t find items within 30 seconds.',
      es: 'Los compradores de e-commerce por primera vez necesitan una navegacion de categorias de productos mas clara porque abandonan el sitio cuando no pueden encontrar articulos en 30 segundos.'
    }
  },
  {
    id: 4,
    statement: {
      en: 'Our conversion rate is too low and we need to increase revenue by 20%.',
      es: 'Nuestra tasa de conversion es demasiado baja y necesitamos aumentar los ingresos un 20%.'
    },
    quality: 'bad',
    feedback: {
      en: 'This is BUSINESS-focused, not user-centered. It talks about conversion and revenue (business metrics), not user needs. What are users struggling with that causes low conversion?',
      es: 'Esta ENFOCADO EN EL NEGOCIO, no centrado en el usuario. Habla de conversion e ingresos (metricas de negocio), no necesidades de usuario. Con que luchan los usuarios que causa baja conversion?'
    },
    improvedVersion: {
      en: 'New users need to understand the value proposition within 10 seconds of landing because 73% leave the homepage without scrolling, suggesting the benefit isn\'t immediately clear.',
      es: 'Los nuevos usuarios necesitan entender la propuesta de valor en 10 segundos de aterrizar porque el 73% abandona la pagina de inicio sin hacer scroll, sugiriendo que el beneficio no es inmediatamente claro.'
    }
  },
  {
    id: 5,
    statement: {
      en: 'Remote team leads need an asynchronous way to track project progress across time zones because synchronous standups exclude team members who work outside core hours.',
      es: 'Los lideres de equipos remotos necesitan una forma asincrona de rastrear el progreso del proyecto a traves de zonas horarias porque los standups sincronos excluyen a miembros del equipo que trabajan fuera de horas centrales.'
    },
    quality: 'good',
    feedback: {
      en: 'Strong! Specific user (remote team leads), clear need (async progress tracking), and evidence-based insight (time zone exclusion problem). This naturally leads to solution ideation without prescribing one.',
      es: 'Fuerte! Usuario especifico (lideres de equipos remotos), necesidad clara (rastreo asincrono de progreso), e insight basado en evidencia (problema de exclusion por zona horaria). Esto naturalmente lleva a ideacion de soluciones sin prescribir una.'
    }
  },
  {
    id: 6,
    statement: {
      en: 'Consumers need to be educated and motivated to learn about how much ugly produce is wasted at farms.',
      es: 'Los consumidores necesitan ser educados y motivados para aprender sobre cuanto producto feo se desperdicia en las granjas.'
    },
    quality: 'vague',
    feedback: {
      en: 'Kind of vague. Why are they NOT educated or motivated? What\'s the real barrier? Is it lack of awareness, inaccessible information, or apathy? The insight is missing — dig deeper into root causes.',
      es: 'Algo vago. Por que NO estan educados o motivados? Cual es la barrera real? Es falta de conciencia, informacion inaccesible, o apatia? Falta el insight — profundiza en las causas raiz.'
    },
    improvedVersion: {
      en: 'Urban grocery shoppers need to see the environmental impact of produce waste at purchase time because they assume store produce is the only option and don\'t realize 40% of farm produce is wasted due to cosmetic standards.',
      es: 'Los compradores urbanos de comestibles necesitan ver el impacto ambiental del desperdicio de productos al momento de compra porque asumen que los productos de tienda son la unica opcion y no saben que el 40% de los productos de granja se desperdician por estandares cosmeticos.'
    }
  }
];

function ProblemStatementEvaluator() {
  const { t, language } = useLanguage();
  const [currentIdx, setCurrentIdx] = useState(0);
  const [userGuess, setUserGuess] = useState<'good' | 'bad' | 'vague' | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [answeredIds, setAnsweredIds] = useState<Set<number>>(new Set());

  const current = PROBLEM_EXAMPLES[currentIdx];
  const isFinished = answeredIds.size === PROBLEM_EXAMPLES.length;

  const handleGuess = (guess: 'good' | 'bad' | 'vague') => {
    if (showFeedback) return;
    setUserGuess(guess);
    setShowFeedback(true);
    
    const isCorrect = guess === current.quality;
    setScore(prev => ({
      correct: prev.correct + (isCorrect ? 1 : 0),
      total: prev.total + 1
    }));
    setAnsweredIds(prev => new Set(prev).add(current.id));
  };

  const handleNext = () => {
    if (currentIdx < PROBLEM_EXAMPLES.length - 1) {
      setCurrentIdx(currentIdx + 1);
      setUserGuess(null);
      setShowFeedback(false);
    }
  };

  const handleRestart = () => {
    setCurrentIdx(0);
    setUserGuess(null);
    setShowFeedback(false);
    setScore({ correct: 0, total: 0 });
    setAnsweredIds(new Set());
  };

  const qualityLabel = (q: 'good' | 'bad' | 'vague') => {
    const labels = {
      good: { en: 'Good', es: 'Bueno' },
      bad: { en: 'Bad', es: 'Malo' },
      vague: { en: 'Vague', es: 'Vago' }
    };
    return t(labels[q]);
  };

  const qualityColor = (q: 'good' | 'bad' | 'vague') => {
    const colors = {
      good: 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300',
      bad: 'bg-red-500/20 border-red-500/40 text-red-300',
      vague: 'bg-amber-500/20 border-amber-500/40 text-amber-300'
    };
    return colors[q];
  };

  const qualityIcon = (q: 'good' | 'bad' | 'vague') => {
    if (q === 'good') return <ThumbsUp className="size-4" />;
    if (q === 'bad') return <ThumbsDown className="size-4" />;
    return <AlertTriangle className="size-4" />;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-3">
          <div className="size-10 bg-amber-500/20 border border-amber-500/30 rounded-xl flex items-center justify-center">
            <Search className="size-5 text-amber-400" />
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white">
              {t({ en: 'Statement Evaluator', es: 'Evaluador de Declaraciones' })}
            </h4>
            <p className="text-sm text-zinc-400">
              {t({ 
                en: 'Classify each problem statement as Good, Bad, or Vague', 
                es: 'Clasifica cada declaracion de problema como Buena, Mala o Vaga' 
              })}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs text-zinc-500">
            {currentIdx + 1} / {PROBLEM_EXAMPLES.length}
          </span>
          <div className="flex gap-1">
            {PROBLEM_EXAMPLES.map((_, idx) => (
              <div 
                key={idx}
                className={`size-2 rounded-full transition-colors ${
                  idx === currentIdx 
                    ? 'bg-amber-400' 
                    : answeredIds.has(PROBLEM_EXAMPLES[idx].id) 
                    ? 'bg-zinc-500' 
                    : 'bg-zinc-800'
                }`} 
              />
            ))}
          </div>
        </div>
      </div>

      {/* Finished State */}
      {isFinished && showFeedback && currentIdx === PROBLEM_EXAMPLES.length - 1 ? (
        <div className="text-center space-y-4 py-6">
          <div className="text-5xl font-bold text-white">
            {score.correct}/{score.total}
          </div>
          <p className="text-zinc-300 text-lg">
            {score.correct === score.total
              ? t({ en: 'Perfect score! You have a sharp eye for problem statements.', es: 'Puntuacion perfecta! Tienes buen ojo para declaraciones de problema.' })
              : score.correct >= score.total * 0.7
              ? t({ en: 'Great job! You understand most problem statement patterns.', es: 'Buen trabajo! Entiendes la mayoria de patrones de declaraciones de problema.' })
              : t({ en: 'Keep practicing! Review the feedback to improve your skills.', es: 'Sigue practicando! Revisa el feedback para mejorar tus habilidades.' })
            }
          </p>
          <button
            onClick={handleRestart}
            className="px-5 py-2.5 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-medium transition-colors flex items-center gap-2 mx-auto"
          >
            <RotateCcw className="size-4" />
            {t({ en: 'Try Again', es: 'Intentar de Nuevo' })}
          </button>
        </div>
      ) : (
        <>
          {/* Statement Card */}
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 bg-zinc-800 text-zinc-400 rounded text-xs font-mono">
                #{current.id}
              </span>
              <span className="text-xs text-zinc-500">
                {t({ en: 'Evaluate this statement:', es: 'Evalua esta declaracion:' })}
              </span>
            </div>
            <blockquote className="text-white text-lg leading-relaxed pl-4 border-l-2 border-zinc-700 italic">
              &ldquo;{t(current.statement)}&rdquo;
            </blockquote>

            {/* Classify Buttons */}
            {!showFeedback && (
              <div className="flex flex-wrap gap-3 pt-2">
                {(['good', 'bad', 'vague'] as const).map(q => (
                  <button
                    key={q}
                    onClick={() => handleGuess(q)}
                    className={`px-5 py-2.5 rounded-lg border text-sm font-medium transition-all hover:scale-105 ${
                      q === 'good' 
                        ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300 hover:bg-emerald-500/20' 
                        : q === 'bad' 
                        ? 'bg-red-500/10 border-red-500/30 text-red-300 hover:bg-red-500/20' 
                        : 'bg-amber-500/10 border-amber-500/30 text-amber-300 hover:bg-amber-500/20'
                    } flex items-center gap-2`}
                  >
                    {qualityIcon(q)}
                    {qualityLabel(q)}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Feedback */}
          {showFeedback && (
            <div className="space-y-4">
              {/* Result Banner */}
              <div className={`rounded-xl p-4 border flex items-start gap-3 ${
                userGuess === current.quality 
                  ? 'bg-emerald-950/30 border-emerald-500/30' 
                  : 'bg-red-950/20 border-red-500/30'
              }`}>
                <div className={`size-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  userGuess === current.quality ? 'bg-emerald-500/20' : 'bg-red-500/20'
                }`}>
                  {userGuess === current.quality 
                    ? <Check className="size-4 text-emerald-400" /> 
                    : <AlertTriangle className="size-4 text-red-400" />
                  }
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium text-white">
                    {userGuess === current.quality
                      ? t({ en: 'Correct!', es: 'Correcto!' })
                      : t({ en: 'Not quite.', es: 'No exactamente.' })
                    }
                    {' '}
                    <span className="text-zinc-400">
                      {t({ en: 'This statement is:', es: 'Esta declaracion es:' })}
                    </span>
                    {' '}
                    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-semibold ${qualityColor(current.quality)}`}>
                      {qualityIcon(current.quality)} {qualityLabel(current.quality)}
                    </span>
                  </p>
                  <p className="text-sm text-zinc-300 leading-relaxed">
                    {t(current.feedback)}
                  </p>
                </div>
              </div>

              {/* Improved Version */}
              {current.improvedVersion && (
                <div className="bg-emerald-950/20 border border-emerald-500/20 rounded-xl p-4 space-y-2">
                  <p className="text-xs font-semibold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Lightbulb className="size-3.5" />
                    {t({ en: 'Improved Version', es: 'Version Mejorada' })}
                  </p>
                  <p className="text-sm text-zinc-200 leading-relaxed italic">
                    &ldquo;{t(current.improvedVersion)}&rdquo;
                  </p>
                </div>
              )}

              {/* Next Button */}
              {currentIdx < PROBLEM_EXAMPLES.length - 1 && (
                <button
                  onClick={handleNext}
                  className="w-full px-5 py-3 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                >
                  {t({ en: 'Next Statement', es: 'Siguiente Declaracion' })}
                  <ChevronRight className="size-4" />
                </button>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
}


// ============================================================
// 3. Five Whys Root Cause Explorer
// ============================================================

interface WhyStep {
  question: string;
  answer: string;
}

const PRESET_SCENARIOS = [
  {
    label: { en: 'E-commerce checkout abandonment', es: 'Abandono de checkout en e-commerce' },
    initial: { 
      en: 'Users are abandoning the checkout process', 
      es: 'Los usuarios estan abandonando el proceso de checkout' 
    },
    whys: {
      en: [
        { q: 'Why are users abandoning checkout?', a: 'They get confused at the shipping options step.' },
        { q: 'Why are they confused at shipping options?', a: 'There are 6 options with no estimated delivery dates.' },
        { q: 'Why are there no estimated delivery dates?', a: 'The API provides them but the frontend never displays them.' },
        { q: 'Why doesn\'t the frontend display them?', a: 'The original design was rushed and nobody prioritized showing dates.' },
        { q: 'Why wasn\'t it prioritized?', a: 'There was no user research to highlight this as a pain point.' }
      ],
      es: [
        { q: 'Por que los usuarios abandonan el checkout?', a: 'Se confunden en el paso de opciones de envio.' },
        { q: 'Por que se confunden en las opciones de envio?', a: 'Hay 6 opciones sin fechas de entrega estimadas.' },
        { q: 'Por que no hay fechas de entrega estimadas?', a: 'La API las proporciona pero el frontend nunca las muestra.' },
        { q: 'Por que el frontend no las muestra?', a: 'El diseno original fue apresurado y nadie priorizo mostrar fechas.' },
        { q: 'Por que no se priorizo?', a: 'No hubo investigacion de usuario que destacara esto como punto de dolor.' }
      ]
    }
  },
  {
    label: { en: 'Low user onboarding completion', es: 'Baja finalizacion de onboarding' },
    initial: { 
      en: 'Only 23% of new users complete the onboarding flow', 
      es: 'Solo el 23% de nuevos usuarios completan el flujo de onboarding' 
    },
    whys: {
      en: [
        { q: 'Why do 77% of users not complete onboarding?', a: 'They drop off at step 3 of 7 — the profile setup.' },
        { q: 'Why do they drop off at profile setup?', a: 'It asks for too many mandatory fields (12 fields).' },
        { q: 'Why are there 12 mandatory fields?', a: 'The marketing team requested all fields for segmentation purposes.' },
        { q: 'Why does marketing need all fields upfront?', a: 'They assumed they couldn\'t collect data progressively over time.' },
        { q: 'Why did they assume that?', a: 'There was no conversation between product and marketing about progressive profiling.' }
      ],
      es: [
        { q: 'Por que el 77% de usuarios no completan el onboarding?', a: 'Abandonan en el paso 3 de 7 — la configuracion de perfil.' },
        { q: 'Por que abandonan en la configuracion de perfil?', a: 'Pide demasiados campos obligatorios (12 campos).' },
        { q: 'Por que hay 12 campos obligatorios?', a: 'El equipo de marketing solicito todos los campos para segmentacion.' },
        { q: 'Por que marketing necesita todos los campos por adelantado?', a: 'Asumieron que no podrian recolectar datos progresivamente.' },
        { q: 'Por que asumieron eso?', a: 'No hubo conversacion entre producto y marketing sobre perfilado progresivo.' }
      ]
    }
  }
];

function FiveWhysExplorer() {
  const { t, language } = useLanguage();
  const [mode, setMode] = useState<'preset' | 'custom'>('preset');
  const [selectedPreset, setSelectedPreset] = useState(0);
  const [revealedStep, setRevealedStep] = useState(0);
  const [customProblem, setCustomProblem] = useState('');
  const [customWhys, setCustomWhys] = useState<WhyStep[]>(
    Array(5).fill(null).map(() => ({ question: '', answer: '' }))
  );
  const [copied, setCopied] = useState(false);

  const preset = PRESET_SCENARIOS[selectedPreset];
  const presetWhys = preset.whys[language];

  const handleRevealNext = () => {
    if (revealedStep < 5) {
      setRevealedStep(revealedStep + 1);
    }
  };

  const handleSelectPreset = (idx: number) => {
    setSelectedPreset(idx);
    setRevealedStep(0);
  };

  const handleCopyCustom = () => {
    const lines = customWhys
      .filter(w => w.question.trim() || w.answer.trim())
      .map((w, i) => `Why #${i + 1}: ${w.question}\nAnswer: ${w.answer}`)
      .join('\n\n');
    const content = `5 Whys Analysis\n\nProblem: ${customProblem}\n\n${lines}`;
    copyToClipboard(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="size-10 bg-cyan-500/20 border border-cyan-500/30 rounded-xl flex items-center justify-center">
          <Target className="size-5 text-cyan-400" />
        </div>
        <div>
          <h4 className="text-lg font-semibold text-white">
            {t({ en: '5 Whys Root Cause Explorer', es: 'Explorador de Causa Raiz: 5 Por Ques' })}
          </h4>
          <p className="text-sm text-zinc-400">
            {t({ 
              en: 'Drill down from symptom to root cause by asking "Why?" five times', 
              es: 'Profundiza del sintoma a la causa raiz preguntando "Por que?" cinco veces' 
            })}
          </p>
        </div>
      </div>

      {/* Mode Toggle */}
      <div className="flex gap-2">
        <button
          onClick={() => setMode('preset')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            mode === 'preset' 
              ? 'bg-cyan-500/20 border border-cyan-500/40 text-cyan-300' 
              : 'bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-zinc-300'
          }`}
        >
          {t({ en: 'Guided Example', es: 'Ejemplo Guiado' })}
        </button>
        <button
          onClick={() => setMode('custom')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            mode === 'custom' 
              ? 'bg-cyan-500/20 border border-cyan-500/40 text-cyan-300' 
              : 'bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-zinc-300'
          }`}
        >
          {t({ en: 'Build Your Own', es: 'Crea el Tuyo' })}
        </button>
      </div>

      {mode === 'preset' ? (
        <div className="space-y-5">
          {/* Scenario Selector */}
          <div className="flex flex-wrap gap-2">
            {PRESET_SCENARIOS.map((scenario, idx) => (
              <button
                key={idx}
                onClick={() => handleSelectPreset(idx)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors border ${
                  selectedPreset === idx
                    ? 'bg-cyan-500/15 border-cyan-500/40 text-cyan-300'
                    : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-zinc-300 hover:border-zinc-700'
                }`}
              >
                {t(scenario.label)}
              </button>
            ))}
          </div>

          {/* Initial Problem */}
          <div className="bg-red-950/20 border border-red-500/30 rounded-xl p-4">
            <p className="text-xs font-semibold text-red-400 uppercase tracking-wider mb-2">
              {t({ en: 'Surface Problem', es: 'Problema Superficial' })}
            </p>
            <p className="text-white font-medium">
              {t(preset.initial)}
            </p>
          </div>

          {/* Why Chain — Progressive Reveal */}
          <div className="space-y-0">
            {presetWhys.map((why, idx) => (
              <div key={idx} className="relative">
                {/* Connector Line */}
                {idx > 0 && (
                  <div className="absolute left-6 -top-1 w-px h-2 bg-zinc-700" />
                )}
                
                <div className={`transition-all duration-500 ${
                  idx < revealedStep 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 h-0 overflow-hidden pointer-events-none'
                }`}>
                  <div className="flex gap-3 py-2">
                    <div className="flex flex-col items-center flex-shrink-0">
                      <div className={`size-12 rounded-full flex items-center justify-center text-sm font-bold border-2 ${
                        idx < 3 
                          ? 'bg-amber-500/10 border-amber-500/30 text-amber-400' 
                          : idx < 4 
                          ? 'bg-orange-500/10 border-orange-500/30 text-orange-400'
                          : 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                      }`}>
                        {t({ en: 'W', es: 'P' })}{idx + 1}
                      </div>
                      {idx < revealedStep - 1 && (
                        <div className="w-px h-full bg-zinc-700 min-h-[8px]" />
                      )}
                    </div>
                    <div className="flex-1 space-y-2 pb-4">
                      <p className="text-sm font-medium text-zinc-300">{why.q}</p>
                      <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-3">
                        <p className="text-sm text-white leading-relaxed">{why.a}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Reveal Button */}
          {revealedStep < 5 && (
            <button
              onClick={handleRevealNext}
              className="w-full px-5 py-3 bg-cyan-600/20 hover:bg-cyan-600/30 border border-cyan-500/30 text-cyan-300 rounded-xl font-medium transition-colors flex items-center justify-center gap-2"
            >
              <ArrowDown className="size-4" />
              {revealedStep === 0
                ? t({ en: 'Start: Ask Why #1', es: 'Comenzar: Preguntar Por Que #1' })
                : t({ en: `Dig Deeper: Ask Why #${revealedStep + 1}`, es: `Profundizar: Preguntar Por Que #${revealedStep + 1}` })
              }
            </button>
          )}

          {/* Root Cause Revealed */}
          {revealedStep === 5 && (
            <div className="bg-gradient-to-br from-emerald-950/30 to-cyan-950/30 border border-emerald-500/30 rounded-xl p-5 space-y-3">
              <div className="flex items-center gap-2">
                <Lightbulb className="size-5 text-emerald-400" />
                <h5 className="text-sm font-semibold text-emerald-300 uppercase tracking-wider">
                  {t({ en: 'Root Cause Identified!', es: 'Causa Raiz Identificada!' })}
                </h5>
              </div>
              <p className="text-white leading-relaxed">
                {presetWhys[4].a}
              </p>
              <p className="text-sm text-zinc-400 leading-relaxed">
                {t({
                  en: 'Notice how the real problem is completely different from the surface symptom. This is the problem worth solving.',
                  es: 'Nota como el problema real es completamente diferente del sintoma superficial. Este es el problema que vale la pena resolver.'
                })}
              </p>
              <button
                onClick={() => { setRevealedStep(0); }}
                className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
              >
                <RotateCcw className="size-3.5" />
                {t({ en: 'Replay', es: 'Repetir' })}
              </button>
            </div>
          )}
        </div>
      ) : (
        /* Custom Mode */
        <div className="space-y-5">
          {/* Custom Problem Input */}
          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-2">
              {t({ en: 'Your surface-level problem:', es: 'Tu problema superficial:' })}
            </label>
            <input
              type="text"
              value={customProblem}
              onChange={(e) => setCustomProblem(e.target.value)}
              placeholder={t({
                en: 'e.g., Users are not completing the signup form',
                es: 'ej., Los usuarios no estan completando el formulario de registro'
              })}
              className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-700 rounded-lg text-white placeholder-zinc-600 focus:outline-none focus:border-cyan-500 transition-colors"
            />
          </div>

          {/* 5 Why Steps */}
          <div className="space-y-4">
            {customWhys.map((why, idx) => (
              <div key={idx} className="flex gap-3">
                <div className="flex-shrink-0 size-10 bg-zinc-800 border border-zinc-700 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-zinc-400">{idx + 1}</span>
                </div>
                <div className="flex-1 space-y-2">
                  <input
                    type="text"
                    value={why.question}
                    onChange={(e) => {
                      const updated = [...customWhys];
                      updated[idx] = { ...updated[idx], question: e.target.value };
                      setCustomWhys(updated);
                    }}
                    placeholder={t({ 
                      en: `Why #${idx + 1}? (the question)`, 
                      es: `Por Que #${idx + 1}? (la pregunta)` 
                    })}
                    className="w-full px-3 py-2 bg-zinc-900/50 border border-zinc-700 rounded-lg text-white text-sm placeholder-zinc-600 focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                  <input
                    type="text"
                    value={why.answer}
                    onChange={(e) => {
                      const updated = [...customWhys];
                      updated[idx] = { ...updated[idx], answer: e.target.value };
                      setCustomWhys(updated);
                    }}
                    placeholder={t({ 
                      en: 'Because... (the answer)', 
                      es: 'Porque... (la respuesta)' 
                    })}
                    className="w-full px-3 py-2 bg-zinc-900/30 border border-zinc-800 rounded-lg text-white text-sm placeholder-zinc-600 focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Export */}
          {customProblem.trim() && (
            <button
              onClick={handleCopyCustom}
              className="px-5 py-2.5 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg font-medium transition-colors flex items-center gap-2"
            >
              {copied ? (
                <>
                  <Check className="size-4" />
                  {t({ en: 'Copied!', es: 'Copiado!' })}
                </>
              ) : (
                <>
                  <Copy className="size-4" />
                  {t({ en: 'Export Analysis', es: 'Exportar Analisis' })}
                </>
              )}
            </button>
          )}
        </div>
      )}
    </div>
  );
}


// ============================================================
// Main Exported Component
// ============================================================

export function ProblemStatementWorkshop() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'pov' | 'evaluator' | 'five-whys'>('pov');

  const tabs = [
    { 
      id: 'pov' as const, 
      label: { en: 'POV Builder', es: 'Constructor POV' }, 
      icon: Eye,
      color: 'violet' 
    },
    { 
      id: 'evaluator' as const, 
      label: { en: 'Statement Evaluator', es: 'Evaluador' }, 
      icon: Search,
      color: 'amber' 
    },
    { 
      id: 'five-whys' as const, 
      label: { en: '5 Whys Explorer', es: '5 Por Ques' }, 
      icon: Target,
      color: 'cyan' 
    }
  ];

  return (
    <div className="w-full max-w-5xl mx-auto space-y-8 mt-12">
      {/* Section Header */}
      <div className="text-center space-y-3">
        <div className="flex items-center justify-center gap-3">
          <Target className="size-8 text-rose-400" />
          <h3 className="text-3xl font-bold text-white">
            {t({ en: 'Problem Statement Workshop', es: 'Taller de Declaraciones de Problema' })}
          </h3>
        </div>
        <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
          {t({ 
            en: 'Practice crafting clear, user-centered problem statements. Build POV statements, evaluate examples, and uncover root causes.',
            es: 'Practica crear declaraciones de problema claras y centradas en el usuario. Construye declaraciones POV, evalua ejemplos y descubre causas raiz.'
          })}
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-2 justify-center">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          const colorClasses = {
            violet: isActive ? 'bg-violet-500/15 border-violet-500/40 text-violet-300' : '',
            amber: isActive ? 'bg-amber-500/15 border-amber-500/40 text-amber-300' : '',
            cyan: isActive ? 'bg-cyan-500/15 border-cyan-500/40 text-cyan-300' : ''
          };

          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all border flex items-center gap-2 ${
                isActive 
                  ? colorClasses[tab.color as keyof typeof colorClasses]
                  : 'bg-zinc-900/50 border-zinc-800 text-zinc-400 hover:text-zinc-300 hover:border-zinc-700'
              }`}
            >
              <Icon className="size-4" />
              {t(tab.label)}
            </button>
          );
        })}
      </div>

      {/* Tab Content */}
      <div className="bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 border border-zinc-800 rounded-2xl p-6 md:p-8">
        {activeTab === 'pov' && <POVStatementBuilder />}
        {activeTab === 'evaluator' && <ProblemStatementEvaluator />}
        {activeTab === 'five-whys' && <FiveWhysExplorer />}
      </div>
    </div>
  );
}
