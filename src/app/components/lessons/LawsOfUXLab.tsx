import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useLanguage } from '../layout/LanguageContext';
import { motion, AnimatePresence } from 'motion/react';
import {
  Brain,
  MousePointer,
  Eye,
  Layers,
  Clock,
  Target,
  ArrowRight,
  Check,
  X,
  RotateCcw,
  ChevronRight,
  Lightbulb,
  Star,
  Award,
  Zap,
  Info,
  Timer,
  Maximize2,
  Grid3X3,
  Users,
  Sparkles,
  AlertTriangle,
  BookOpen,
} from 'lucide-react';

import { copyToClipboard } from '../../utils/clipboard';
import { ScrollableTabs } from './ScrollableTabs';

// ─── Types ───────────────────────────────────────────────────

interface Law {
  id: string;
  name: { en: string; es: string };
  icon: React.ElementType;
  color: string;
  accent: string;
  summary: { en: string; es: string };
  principle: { en: string; es: string };
  designTip: { en: string; es: string };
}

// ─── Data ────────────────────────────────────────────────────

const laws: Law[] = [
  {
    id: 'hicks',
    name: { en: "Hick's Law", es: 'Ley de Hick' },
    icon: Clock,
    color: 'from-blue-500/20 to-indigo-500/20 border-blue-500/30',
    accent: 'text-blue-400',
    summary: {
      en: 'The time to make a decision increases with the number and complexity of choices.',
      es: 'El tiempo para tomar una decisión aumenta con la cantidad y complejidad de opciones.',
    },
    principle: {
      en: 'Decision time = a + b × log₂(n) — where n = number of choices.',
      es: 'Tiempo de decisión = a + b × log₂(n) — donde n = número de opciones.',
    },
    designTip: {
      en: 'Reduce options, use progressive disclosure, break complex tasks into steps.',
      es: 'Reduce opciones, usa revelación progresiva, divide tareas complejas en pasos.',
    },
  },
  {
    id: 'fitts',
    name: { en: "Fitts's Law", es: 'Ley de Fitts' },
    icon: Target,
    color: 'from-green-500/20 to-emerald-500/20 border-green-500/30',
    accent: 'text-green-400',
    summary: {
      en: 'The time to reach a target is a function of its size and distance.',
      es: 'El tiempo para alcanzar un objetivo depende de su tamaño y distancia.',
    },
    principle: {
      en: 'MT = a + b × log₂(2D / W) — bigger and closer targets are faster to hit.',
      es: 'MT = a + b × log₂(2D / W) — objetivos más grandes y cercanos son más rápidos de alcanzar.',
    },
    designTip: {
      en: 'Make primary actions large and accessible. Place destructive actions away from common paths.',
      es: 'Haz las acciones principales grandes y accesibles. Aleja las acciones destructivas de los caminos comunes.',
    },
  },
  {
    id: 'jakobs',
    name: { en: "Jakob's Law", es: 'Ley de Jakob' },
    icon: Users,
    color: 'from-purple-500/20 to-pink-500/20 border-purple-500/30',
    accent: 'text-purple-400',
    summary: {
      en: 'Users spend most of their time on other sites. They prefer yours to work the same way.',
      es: 'Los usuarios pasan la mayor parte de su tiempo en otros sitios. Prefieren que el tuyo funcione igual.',
    },
    principle: {
      en: 'Leverage existing mental models. Users transfer expectations from familiar products.',
      es: 'Aprovecha los modelos mentales existentes. Los usuarios transfieren expectativas de productos familiares.',
    },
    designTip: {
      en: "Use conventional patterns (hamburger menu, search icon, cart icon). Innovate on value, not on navigation.",
      es: 'Usa patrones convencionales (menú hamburguesa, icono de búsqueda, icono de carrito). Innova en valor, no en navegación.',
    },
  },
  {
    id: 'millers',
    name: { en: "Miller's Law", es: 'Ley de Miller' },
    icon: Grid3X3,
    color: 'from-orange-500/20 to-amber-500/20 border-orange-500/30',
    accent: 'text-orange-400',
    summary: {
      en: 'The average person can hold about 7 (±2) items in working memory.',
      es: 'La persona promedio puede retener unos 7 (±2) elementos en memoria de trabajo.',
    },
    principle: {
      en: 'Chunk information into groups of 5-9 to reduce cognitive load.',
      es: 'Agrupa la información en conjuntos de 5-9 para reducir la carga cognitiva.',
    },
    designTip: {
      en: 'Group navigation items, chunk phone numbers, organize content into scannable sections.',
      es: 'Agrupa ítems de navegación, divide números de teléfono, organiza contenido en secciones escaneables.',
    },
  },
  {
    id: 'aesthetic',
    name: { en: 'Aesthetic-Usability Effect', es: 'Efecto Estético-Usabilidad' },
    icon: Sparkles,
    color: 'from-pink-500/20 to-rose-500/20 border-pink-500/30',
    accent: 'text-pink-400',
    summary: {
      en: 'Users perceive aesthetically pleasing designs as more usable than ugly ones.',
      es: 'Los usuarios perciben los diseños estéticamente agradables como más usables que los feos.',
    },
    principle: {
      en: 'Beauty creates positive emotional response → increases tolerance for minor usability issues.',
      es: 'La belleza crea respuesta emocional positiva → aumenta tolerancia a problemas menores de usabilidad.',
    },
    designTip: {
      en: "Visual polish matters — but don't let beauty mask real usability problems.",
      es: 'El pulido visual importa — pero no dejes que la belleza esconda problemas reales de usabilidad.',
    },
  },
  {
    id: 'doherty',
    name: { en: 'Doherty Threshold', es: 'Umbral de Doherty' },
    icon: Zap,
    color: 'from-yellow-500/20 to-lime-500/20 border-yellow-500/30',
    accent: 'text-yellow-400',
    summary: {
      en: 'Productivity soars when a system responds in < 400ms.',
      es: 'La productividad se dispara cuando un sistema responde en < 400ms.',
    },
    principle: {
      en: 'Response time > 400ms breaks flow. Users lose focus and confidence.',
      es: 'Un tiempo de respuesta > 400ms rompe el flujo. Los usuarios pierden foco y confianza.',
    },
    designTip: {
      en: 'Use skeleton screens, optimistic UI, progress indicators. Perceived speed > actual speed.',
      es: 'Usa skeleton screens, UI optimista, indicadores de progreso. Velocidad percibida > velocidad real.',
    },
  },
];

// ═══════════════════════════════════════════════════════════════
// DEMO 1 — Hick's Law: Choice Overload Timer
// ═══════════════════════════════════════════════════════════════

function HicksLawDemo() {
  const { t } = useLanguage();
  const [mode, setMode] = useState<'few' | 'many'>('few');
  const [started, setStarted] = useState(false);
  const [chosen, setChosen] = useState(false);
  const [startTime, setStartTime] = useState(0);
  const [elapsed, setElapsed] = useState(0);
  const [results, setResults] = useState<{ few: number[]; many: number[] }>({ few: [], many: [] });

  const fewOptions = ['🍎', '🍊', '🍋'];
  const manyOptions = ['🍎', '🍊', '🍋', '🍇', '🍓', '🫐', '🥝', '🍑', '🍒', '🥭', '🍍', '🍌'];

  const options = mode === 'few' ? fewOptions : manyOptions;

  const handleStart = () => {
    setStarted(true);
    setChosen(false);
    setStartTime(Date.now());
  };

  const handleChoice = () => {
    if (!started || chosen) return;
    const time = Date.now() - startTime;
    setElapsed(time);
    setChosen(true);
    setStarted(false);
    setResults((prev) => ({
      ...prev,
      [mode]: [...prev[mode].slice(-4), time],
    }));
  };

  const reset = () => {
    setStarted(false);
    setChosen(false);
    setElapsed(0);
  };

  const avgFew = results.few.length ? Math.round(results.few.reduce((a, b) => a + b, 0) / results.few.length) : 0;
  const avgMany = results.many.length ? Math.round(results.many.reduce((a, b) => a + b, 0) / results.many.length) : 0;

  return (
    <div className="space-y-5">
      <p className="text-sm text-zinc-400">
        {t({
          en: 'Pick your favorite fruit as fast as you can. Compare your reaction time with 3 vs 12 options.',
          es: 'Elige tu fruta favorita lo más rápido posible. Compara tu tiempo de reacción con 3 vs 12 opciones.',
        })}
      </p>

      {/* Mode Toggle */}
      <div className="flex gap-2">
        {(['few', 'many'] as const).map((m) => (
          <button
            key={m}
            onClick={() => { setMode(m); reset(); }}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              mode === m
                ? 'bg-blue-600 text-white'
                : 'bg-zinc-800 text-zinc-400 hover:text-white'
            }`}
          >
            {m === 'few'
              ? t({ en: '3 Options', es: '3 Opciones' })
              : t({ en: '12 Options', es: '12 Opciones' })}
          </button>
        ))}
      </div>

      {/* Arena */}
      <div className="bg-zinc-900/70 border border-zinc-800 rounded-xl p-6 text-center min-h-[180px] flex flex-col items-center justify-center">
        {!started && !chosen && (
          <button
            onClick={handleStart}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-colors"
          >
            {t({ en: 'Start!', es: '¡Empezar!' })}
          </button>
        )}
        {started && !chosen && (
          <div className="space-y-4">
            <p className="text-white font-medium animate-pulse">
              {t({ en: '⚡ Pick one NOW!', es: '⚡ ¡Elige uno AHORA!' })}
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {options.map((o, i) => (
                <motion.button
                  key={i}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: i * 0.03 }}
                  onClick={handleChoice}
                  className="text-3xl p-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 hover:border-blue-500/50 transition-colors cursor-pointer"
                >
                  {o}
                </motion.button>
              ))}
            </div>
          </div>
        )}
        {chosen && (
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="space-y-2">
            <p className="text-3xl font-bold text-blue-400">{elapsed}ms</p>
            <p className="text-sm text-zinc-400">
              {elapsed < 600
                ? t({ en: 'Lightning fast!', es: '¡Rapidísimo!' })
                : elapsed < 1200
                  ? t({ en: 'Pretty quick', es: 'Bastante rápido' })
                  : t({ en: 'Took a moment...', es: 'Tardó un momento...' })}
            </p>
            <button onClick={reset} className="mt-2 text-xs text-zinc-500 hover:text-white flex items-center gap-1 mx-auto">
              <RotateCcw className="size-3" /> {t({ en: 'Try again', es: 'Intentar de nuevo' })}
            </button>
          </motion.div>
        )}
      </div>

      {/* Results Comparison */}
      {(avgFew > 0 || avgMany > 0) && (
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-green-950/30 border border-green-500/20 rounded-lg p-4 text-center">
            <p className="text-xs text-green-400 font-medium mb-1">{t({ en: '3 Options Avg', es: 'Promedio 3 Opciones' })}</p>
            <p className="text-2xl font-bold text-green-300">{avgFew || '—'}ms</p>
          </div>
          <div className="bg-red-950/30 border border-red-500/20 rounded-lg p-4 text-center">
            <p className="text-xs text-red-400 font-medium mb-1">{t({ en: '12 Options Avg', es: 'Promedio 12 Opciones' })}</p>
            <p className="text-2xl font-bold text-red-300">{avgMany || '—'}ms</p>
          </div>
        </div>
      )}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// DEMO 2 — Fitts's Law: Target Practice
// ═══════════════════════════════════════════════════════════════

function FittsLawDemo() {
  const { t } = useLanguage();
  const [round, setRound] = useState(0);
  const [results, setResults] = useState<{ size: string; time: number }[]>([]);
  const [startTime, setStartTime] = useState(0);
  const [targetPos, setTargetPos] = useState({ x: 50, y: 50 });
  const [targetSize, setTargetSize] = useState(48);
  const [phase, setPhase] = useState<'waiting' | 'aiming'>('waiting');
  const containerRef = useRef<HTMLDivElement>(null);

  const rounds = [
    { size: 64, label: { en: 'Large', es: 'Grande' } },
    { size: 32, label: { en: 'Medium', es: 'Mediano' } },
    { size: 16, label: { en: 'Tiny', es: 'Pequeño' } },
    { size: 64, label: { en: 'Large (far)', es: 'Grande (lejos)' } },
    { size: 16, label: { en: 'Tiny (far)', es: 'Pequeño (lejos)' } },
  ];

  const startRound = () => {
    if (round >= rounds.length) return;
    const r = rounds[round];
    setTargetSize(r.size);
    // Random position keeping target within bounds
    const margin = r.size + 20;
    const x = margin + Math.random() * (100 - 2 * margin);
    const y = margin + Math.random() * (100 - 2 * margin);
    if (round >= 3) {
      // "far" rounds — push to corners
      setTargetPos({ x: x < 50 ? 15 : 85, y: y < 50 ? 15 : 85 });
    } else {
      setTargetPos({ x, y });
    }
    setPhase('aiming');
    setStartTime(Date.now());
  };

  const handleHit = () => {
    if (phase !== 'aiming') return;
    const time = Date.now() - startTime;
    setResults((prev) => [...prev, { size: t(rounds[round].label), time }]);
    setPhase('waiting');
    setRound((prev) => prev + 1);
  };

  const resetGame = () => {
    setRound(0);
    setResults([]);
    setPhase('waiting');
  };

  const finished = round >= rounds.length;

  return (
    <div className="space-y-5">
      <p className="text-sm text-zinc-400">
        {t({
          en: 'Click the green target as fast as you can. Notice how size and distance affect your speed.',
          es: 'Haz clic en el objetivo verde lo más rápido posible. Nota cómo el tamaño y la distancia afectan tu velocidad.',
        })}
      </p>

      <div
        ref={containerRef}
        className="relative bg-zinc-900/70 border border-zinc-800 rounded-xl overflow-hidden"
        style={{ height: 260 }}
      >
        {phase === 'waiting' && !finished && (
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              onClick={startRound}
              className="px-5 py-2.5 bg-green-600 hover:bg-green-500 text-white font-semibold rounded-xl transition-colors"
            >
              {round === 0
                ? t({ en: 'Start Target Practice', es: 'Iniciar Práctica de Tiro' })
                : t({ en: `Round ${round + 1}/${rounds.length}`, es: `Ronda ${round + 1}/${rounds.length}` })}
            </button>
          </div>
        )}

        {phase === 'aiming' && (
          <>
            {/* Start position indicator */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-3 rounded-full bg-zinc-600 ring-2 ring-zinc-700" />
            {/* Target */}
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              onClick={handleHit}
              className="absolute rounded-full bg-green-500 hover:bg-green-400 transition-colors shadow-lg shadow-green-500/30 cursor-crosshair"
              style={{
                width: targetSize,
                height: targetSize,
                left: `${targetPos.x}%`,
                top: `${targetPos.y}%`,
                transform: 'translate(-50%, -50%)',
              }}
            />
            <p className="absolute bottom-3 left-0 right-0 text-center text-xs text-zinc-500">
              {t(rounds[round].label)} — {targetSize}px
            </p>
          </>
        )}

        {finished && (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
            <Award className="size-8 text-green-400 mb-2" />
            <p className="text-white font-semibold mb-3">{t({ en: 'Results', es: 'Resultados' })}</p>
            <div className="grid grid-cols-5 gap-2 w-full max-w-md">
              {results.map((r, i) => (
                <div key={i} className="text-center">
                  <p className="text-[10px] text-zinc-500 truncate">{r.size}</p>
                  <p className={`text-sm font-bold ${r.time < 400 ? 'text-green-400' : r.time < 800 ? 'text-yellow-400' : 'text-red-400'}`}>
                    {r.time}ms
                  </p>
                </div>
              ))}
            </div>
            <button onClick={resetGame} className="mt-3 text-xs text-zinc-500 hover:text-white flex items-center gap-1">
              <RotateCcw className="size-3" /> {t({ en: 'Play again', es: 'Jugar de nuevo' })}
            </button>
          </div>
        )}
      </div>

      {/* Insight */}
      <div className="bg-green-950/20 border border-green-500/20 rounded-lg p-3 flex gap-3 items-start">
        <Lightbulb className="size-4 text-green-400 mt-0.5 flex-shrink-0" />
        <p className="text-xs text-zinc-400">
          {t({
            en: 'Larger, closer targets are faster to reach. This is why primary CTAs should be big and within thumb reach on mobile.',
            es: 'Los objetivos más grandes y cercanos son más rápidos de alcanzar. Por eso los CTA principales deben ser grandes y alcanzables con el pulgar en móvil.',
          })}
        </p>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// DEMO 3 — Jakob's Law: Pattern Recognition
// ═══════════════════════════════════════════════════════════════

function JakobsLawDemo() {
  const { t } = useLanguage();
  const [selected, setSelected] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [questionIdx, setQuestionIdx] = useState(0);
  const [answered, setAnswered] = useState(false);

  const questions = [
    {
      question: { en: 'Where do users expect the logo to link to?', es: '¿A dónde esperan los usuarios que lleve el logo?' },
      options: [
        { en: 'About page', es: 'Página "Acerca de"' },
        { en: 'Homepage', es: 'Página de inicio' },
        { en: 'Contact page', es: 'Página de contacto' },
      ],
      correct: 1,
    },
    {
      question: { en: 'Where do users look for the shopping cart?', es: '¿Dónde buscan los usuarios el carrito de compras?' },
      options: [
        { en: 'Bottom-left', es: 'Abajo-izquierda' },
        { en: 'Top-right', es: 'Arriba-derecha' },
        { en: 'Center of nav', es: 'Centro de la nav' },
      ],
      correct: 1,
    },
    {
      question: { en: 'What does the ≡ icon mean to users?', es: '¿Qué significa el icono ≡ para los usuarios?' },
      options: [
        { en: 'Settings', es: 'Configuración' },
        { en: 'Filter', es: 'Filtrar' },
        { en: 'Navigation menu', es: 'Menú de navegación' },
      ],
      correct: 2,
    },
    {
      question: { en: 'Where do users expect "Sign Up" on a SaaS site?', es: '¿Dónde esperan los usuarios "Registrarse" en un SaaS?' },
      options: [
        { en: 'Footer', es: 'Footer' },
        { en: 'Top-right header', es: 'Header arriba-derecha' },
        { en: 'Sidebar', es: 'Barra lateral' },
      ],
      correct: 1,
    },
    {
      question: { en: 'Swipe right in a dating app means...', es: 'Deslizar a la derecha en una app de citas significa...' },
      options: [
        { en: 'Skip / reject', es: 'Saltar / rechazar' },
        { en: 'Like / approve', es: 'Me gusta / aprobar' },
        { en: 'View profile', es: 'Ver perfil' },
      ],
      correct: 1,
    },
  ];

  const q = questions[questionIdx];

  const handleAnswer = (idx: number) => {
    if (answered) return;
    setSelected(String(idx));
    setAnswered(true);
    if (idx === q.correct) setScore((s) => s + 1);
  };

  const next = () => {
    setSelected(null);
    setAnswered(false);
    setQuestionIdx((i) => i + 1);
  };

  const restart = () => {
    setQuestionIdx(0);
    setScore(0);
    setSelected(null);
    setAnswered(false);
  };

  const finished = questionIdx >= questions.length;

  return (
    <div className="space-y-5">
      <p className="text-sm text-zinc-400">
        {t({
          en: "Test how well you know universal UI conventions — the mental models users bring from other products.",
          es: 'Prueba qué tan bien conoces las convenciones UI universales — los modelos mentales que los usuarios traen de otros productos.',
        })}
      </p>

      {!finished ? (
        <div className="bg-zinc-900/70 border border-zinc-800 rounded-xl p-6 space-y-4">
          <div className="flex justify-between items-center text-xs text-zinc-500">
            <span>{questionIdx + 1}/{questions.length}</span>
            <span>{score} {t({ en: 'correct', es: 'correctas' })}</span>
          </div>
          <p className="text-white font-medium">{t(q.question)}</p>
          <div className="space-y-2">
            {q.options.map((opt, i) => {
              const isSelected = selected === String(i);
              const isCorrect = i === q.correct;
              return (
                <button
                  key={i}
                  onClick={() => handleAnswer(i)}
                  disabled={answered}
                  className={`w-full text-left p-3 rounded-lg border transition-all text-sm ${
                    answered
                      ? isCorrect
                        ? 'bg-green-950/40 border-green-500/40 text-green-300'
                        : isSelected
                          ? 'bg-red-950/40 border-red-500/40 text-red-300'
                          : 'bg-zinc-900/50 border-zinc-800 text-zinc-500'
                      : 'bg-zinc-900/50 border-zinc-800 text-zinc-300 hover:border-purple-500/40 hover:bg-purple-500/5 cursor-pointer'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {answered && isCorrect && <Check className="size-4 text-green-400" />}
                    {answered && isSelected && !isCorrect && <X className="size-4 text-red-400" />}
                    {t(opt)}
                  </span>
                </button>
              );
            })}
          </div>
          {answered && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-end">
              <button onClick={next} className="px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white text-sm rounded-lg flex items-center gap-1">
                {t({ en: 'Next', es: 'Siguiente' })} <ChevronRight className="size-4" />
              </button>
            </motion.div>
          )}
        </div>
      ) : (
        <div className="bg-zinc-900/70 border border-zinc-800 rounded-xl p-6 text-center space-y-3">
          <Award className="size-8 text-purple-400 mx-auto" />
          <p className="text-2xl font-bold text-white">
            {score}/{questions.length}
          </p>
          <p className="text-sm text-zinc-400">
            {score === questions.length
              ? t({ en: "Perfect! You know Jakob's Law inside out.", es: '¡Perfecto! Conoces la Ley de Jakob de pies a cabeza.' })
              : score >= 3
                ? t({ en: 'Good understanding of user expectations!', es: '¡Buen entendimiento de las expectativas del usuario!' })
                : t({ en: "Time to study common UI patterns.", es: 'Hora de estudiar patrones UI comunes.' })}
          </p>
          <button onClick={restart} className="text-xs text-zinc-500 hover:text-white flex items-center gap-1 mx-auto">
            <RotateCcw className="size-3" /> {t({ en: 'Try again', es: 'Intentar de nuevo' })}
          </button>
        </div>
      )}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// DEMO 4 — Miller's Law: Chunking Visualizer
// ═══════════════════════════════════════════════════════════════

function MillersLawDemo() {
  const { t } = useLanguage();
  const [showChunked, setShowChunked] = useState(false);
  const [testPhase, setTestPhase] = useState<'memorize' | 'recall' | 'result'>('memorize');
  const [recallInput, setRecallInput] = useState('');
  const [memorizeTimer, setMemorizeTimer] = useState(5);

  const rawNumber = '4158237940';
  const chunkedNumber = '(415) 823-7940';

  // Timer for memorize phase
  useEffect(() => {
    if (testPhase !== 'memorize') return;
    if (memorizeTimer <= 0) {
      setTestPhase('recall');
      return;
    }
    const timer = setTimeout(() => setMemorizeTimer((t) => t - 1), 1000);
    return () => clearTimeout(timer);
  }, [testPhase, memorizeTimer]);

  const checkRecall = () => {
    setTestPhase('result');
  };

  const resetTest = () => {
    setTestPhase('memorize');
    setMemorizeTimer(5);
    setRecallInput('');
    setShowChunked(!showChunked);
  };

  const isCorrect = recallInput.replace(/\D/g, '') === rawNumber;

  return (
    <div className="space-y-5">
      <p className="text-sm text-zinc-400">
        {t({
          en: 'Try to memorize this phone number. Chunked numbers are dramatically easier to remember.',
          es: 'Intenta memorizar este número de teléfono. Los números agrupados son dramáticamente más fáciles de recordar.',
        })}
      </p>

      {/* Visual comparison */}
      <div className="grid grid-cols-2 gap-3">
        <div
          className={`p-4 rounded-xl border text-center transition-all cursor-pointer ${
            !showChunked
              ? 'bg-orange-950/30 border-orange-500/30 ring-2 ring-orange-500/20'
              : 'bg-zinc-900/50 border-zinc-800 hover:border-zinc-700'
          }`}
          onClick={() => setShowChunked(false)}
        >
          <p className="text-[10px] uppercase tracking-wider text-zinc-500 mb-2">
            {t({ en: 'Unchunked', es: 'Sin agrupar' })}
          </p>
          <p className="text-xl font-mono text-white tracking-widest">{rawNumber}</p>
          <p className="text-xs text-red-400 mt-2">😰 {t({ en: '10 individual digits', es: '10 dígitos individuales' })}</p>
        </div>
        <div
          className={`p-4 rounded-xl border text-center transition-all cursor-pointer ${
            showChunked
              ? 'bg-green-950/30 border-green-500/30 ring-2 ring-green-500/20'
              : 'bg-zinc-900/50 border-zinc-800 hover:border-zinc-700'
          }`}
          onClick={() => setShowChunked(true)}
        >
          <p className="text-[10px] uppercase tracking-wider text-zinc-500 mb-2">
            {t({ en: 'Chunked', es: 'Agrupado' })}
          </p>
          <p className="text-xl font-mono text-white">{chunkedNumber}</p>
          <p className="text-xs text-green-400 mt-2">😌 {t({ en: '3 easy chunks', es: '3 grupos fáciles' })}</p>
        </div>
      </div>

      {/* Memory Test */}
      <div className="bg-zinc-900/70 border border-zinc-800 rounded-xl p-5 space-y-4">
        <p className="text-sm text-white font-medium flex items-center gap-2">
          <Brain className="size-4 text-orange-400" />
          {t({ en: 'Memory Challenge', es: 'Desafío de Memoria' })}
        </p>

        {testPhase === 'memorize' && (
          <div className="text-center space-y-3">
            <p className="text-3xl font-mono font-bold text-white tracking-wider">
              {showChunked ? chunkedNumber : rawNumber}
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-zinc-400">
              <Timer className="size-4" />
              {t({ en: `Memorize! ${memorizeTimer}s left`, es: `¡Memoriza! ${memorizeTimer}s restantes` })}
            </div>
            <div className="w-full bg-zinc-800 rounded-full h-1.5 overflow-hidden">
              <motion.div
                className="h-full bg-orange-500"
                initial={{ width: '100%' }}
                animate={{ width: '0%' }}
                transition={{ duration: 5, ease: 'linear' }}
              />
            </div>
          </div>
        )}

        {testPhase === 'recall' && (
          <div className="text-center space-y-3">
            <p className="text-sm text-zinc-400">{t({ en: 'Type the number from memory:', es: 'Escribe el número de memoria:' })}</p>
            <input
              type="text"
              value={recallInput}
              onChange={(e) => setRecallInput(e.target.value)}
              placeholder="4158237940"
              className="w-full max-w-xs mx-auto bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2.5 text-center text-white font-mono text-lg focus:outline-none focus:border-orange-500"
              autoFocus
              onKeyDown={(e) => e.key === 'Enter' && checkRecall()}
            />
            <button
              onClick={checkRecall}
              className="px-5 py-2 bg-orange-600 hover:bg-orange-500 text-white text-sm font-medium rounded-lg transition-colors"
            >
              {t({ en: 'Check', es: 'Verificar' })}
            </button>
          </div>
        )}

        {testPhase === 'result' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center space-y-3">
            {isCorrect ? (
              <div className="flex items-center justify-center gap-2 text-green-400">
                <Check className="size-5" />
                <span className="font-semibold">{t({ en: 'Correct!', es: '¡Correcto!' })}</span>
              </div>
            ) : (
              <div className="space-y-1">
                <div className="flex items-center justify-center gap-2 text-red-400">
                  <X className="size-5" />
                  <span className="font-semibold">{t({ en: 'Not quite', es: 'No del todo' })}</span>
                </div>
                <p className="text-xs text-zinc-500">
                  {t({ en: 'Correct answer:', es: 'Respuesta correcta:' })} <span className="text-zinc-300 font-mono">{rawNumber}</span>
                </p>
              </div>
            )}
            <button onClick={resetTest} className="text-xs text-zinc-500 hover:text-white flex items-center gap-1 mx-auto mt-2">
              <RotateCcw className="size-3" />{' '}
              {t({ en: `Try ${showChunked ? 'unchunked' : 'chunked'} version`, es: `Probar versión ${showChunked ? 'sin agrupar' : 'agrupada'}` })}
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// DEMO 5 — Aesthetic-Usability Effect: A/B Comparison
// ═══════════════════════════════════════════════════════════════

function AestheticUsabilityDemo() {
  const { t } = useLanguage();
  const [rated, setRated] = useState<{ ugly: number | null; pretty: number | null }>({ ugly: null, pretty: null });

  const LoginCard = ({ variant, onRate }: { variant: 'ugly' | 'pretty'; onRate: (n: number) => void }) => {
    if (variant === 'ugly') {
      return (
        <div className="border-2 border-zinc-600 p-4 rounded bg-zinc-800" style={{ fontFamily: 'monospace' }}>
          <p className="text-white mb-3 text-sm font-bold">LOGIN</p>
          <input
            className="w-full p-1.5 mb-2 bg-zinc-700 text-white text-xs border border-zinc-500 rounded-none"
            placeholder="email"
            readOnly
          />
          <input
            className="w-full p-1.5 mb-3 bg-zinc-700 text-white text-xs border border-zinc-500 rounded-none"
            placeholder="password"
            type="password"
            readOnly
          />
          <button className="w-full py-1.5 bg-zinc-500 text-white text-xs font-bold uppercase">Submit</button>
        </div>
      );
    }
    return (
      <div className="border border-indigo-500/30 p-5 rounded-2xl bg-gradient-to-br from-indigo-950/40 to-purple-950/30 shadow-xl">
        <p className="text-white mb-4 text-sm font-semibold tracking-tight">Welcome back</p>
        <input
          className="w-full p-2.5 mb-2.5 bg-white/5 text-white text-xs border border-white/10 rounded-xl placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
          placeholder="your@email.com"
          readOnly
        />
        <input
          className="w-full p-2.5 mb-4 bg-white/5 text-white text-xs border border-white/10 rounded-xl placeholder:text-zinc-500"
          placeholder="••••••••"
          type="password"
          readOnly
        />
        <button className="w-full py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs font-semibold rounded-xl hover:brightness-110 transition-all">
          Sign in
        </button>
      </div>
    );
  };

  return (
    <div className="space-y-5">
      <p className="text-sm text-zinc-400">
        {t({
          en: 'Both forms have identical functionality. Rate how "usable" each one feels (1-5). Most people rate the pretty one higher — even though usability is the same.',
          es: 'Ambos formularios tienen funcionalidad idéntica. Califica qué tan "usable" se siente cada uno (1-5). La mayoría califica más alto al bonito — aunque la usabilidad es la misma.',
        })}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {(['ugly', 'pretty'] as const).map((variant) => (
          <div key={variant} className="space-y-3">
            <p className="text-xs text-zinc-500 uppercase tracking-wider text-center">
              {variant === 'ugly'
                ? t({ en: 'Version A', es: 'Versión A' })
                : t({ en: 'Version B', es: 'Versión B' })}
            </p>
            <LoginCard variant={variant} onRate={() => {}} />
            <div className="flex justify-center gap-1.5 pt-1">
              {[1, 2, 3, 4, 5].map((n) => (
                <button
                  key={n}
                  onClick={() => setRated((p) => ({ ...p, [variant]: n }))}
                  className={`size-8 rounded-lg text-xs font-bold transition-all ${
                    rated[variant] === n
                      ? variant === 'pretty'
                        ? 'bg-indigo-600 text-white scale-110'
                        : 'bg-zinc-500 text-white scale-110'
                      : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'
                  }`}
                >
                  {n}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {rated.ugly !== null && rated.pretty !== null && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-pink-950/20 border border-pink-500/20 rounded-lg p-4"
        >
          <p className="text-sm text-white font-medium mb-1">
            {rated.pretty! > rated.ugly!
              ? t({ en: "You rated the polished version higher — that's the Aesthetic-Usability Effect!", es: '¡Calificaste más alto la versión pulida — ese es el Efecto Estético-Usabilidad!' })
              : rated.pretty! === rated.ugly!
                ? t({ en: "You rated them equally — impressive objectivity! But most users don't.", es: '¡Los calificaste igual — impresionante objetividad! Pero la mayoría de usuarios no.' })
                : t({ en: "Interesting — you prefer the raw version. You might be a developer!", es: 'Interesante — prefieres la versión cruda. ¡Podrías ser desarrollador!' })}
          </p>
          <p className="text-xs text-zinc-400">
            {t({
              en: 'In usability studies, users consistently rate attractive interfaces as "easier to use" — even when task completion rates are identical.',
              es: 'En estudios de usabilidad, los usuarios consistentemente califican interfaces atractivas como "más fáciles de usar" — incluso cuando las tasas de completado de tareas son idénticas.',
            })}
          </p>
        </motion.div>
      )}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// DEMO 6 — Doherty Threshold: Perceived Performance
// ═══════════════════════════════════════════════════════════════

function DohertyThresholdDemo() {
  const { t } = useLanguage();
  const [loading, setLoading] = useState<'none' | 'slow' | 'skeleton'>('none');
  const [showContent, setShowContent] = useState(false);

  const simulate = (type: 'slow' | 'skeleton') => {
    setLoading(type);
    setShowContent(false);
    setTimeout(() => {
      setShowContent(true);
      setLoading('none');
    }, 2000);
  };

  const ContentCard = () => (
    <div className="space-y-3 p-4 bg-zinc-900/70 border border-zinc-800 rounded-xl">
      <div className="flex items-center gap-3">
        <div className="size-10 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 text-sm font-bold">JD</div>
        <div>
          <p className="text-sm text-white font-semibold">Jane Designer</p>
          <p className="text-xs text-zinc-500">Senior Product Designer</p>
        </div>
      </div>
      <p className="text-sm text-zinc-300 leading-relaxed">
        {t({
          en: 'Just shipped the new checkout flow! Conversion rate improved by 23% after simplifying from 5 steps to 3.',
          es: '¡Acabo de lanzar el nuevo flujo de checkout! La tasa de conversión mejoró un 23% al simplificar de 5 pasos a 3.',
        })}
      </p>
      <div className="flex gap-4 text-xs text-zinc-500">
        <span>❤️ 142</span>
        <span>💬 28</span>
        <span>🔄 15</span>
      </div>
    </div>
  );

  const SkeletonCard = () => (
    <div className="space-y-3 p-4 bg-zinc-900/70 border border-zinc-800 rounded-xl animate-pulse">
      <div className="flex items-center gap-3">
        <div className="size-10 rounded-full bg-zinc-700" />
        <div className="space-y-1.5">
          <div className="h-3 w-28 bg-zinc-700 rounded" />
          <div className="h-2.5 w-20 bg-zinc-800 rounded" />
        </div>
      </div>
      <div className="space-y-2">
        <div className="h-3 w-full bg-zinc-700 rounded" />
        <div className="h-3 w-3/4 bg-zinc-700 rounded" />
      </div>
      <div className="flex gap-4">
        <div className="h-3 w-12 bg-zinc-800 rounded" />
        <div className="h-3 w-10 bg-zinc-800 rounded" />
        <div className="h-3 w-10 bg-zinc-800 rounded" />
      </div>
    </div>
  );

  return (
    <div className="space-y-5">
      <p className="text-sm text-zinc-400">
        {t({
          en: 'Both buttons wait 2 seconds. But skeleton screens make the wait feel much shorter. Click both and compare.',
          es: 'Ambos botones esperan 2 segundos. Pero los skeleton screens hacen que la espera se sienta mucho más corta. Haz clic en ambos y compara.',
        })}
      </p>

      <div className="grid grid-cols-2 gap-3">
        <button
          onClick={() => simulate('slow')}
          disabled={loading !== 'none'}
          className="px-4 py-2.5 bg-red-600/80 hover:bg-red-500 disabled:opacity-50 text-white text-sm font-medium rounded-xl transition-colors"
        >
          {t({ en: '🐌 Blank Wait', es: '🐌 Espera en Blanco' })}
        </button>
        <button
          onClick={() => simulate('skeleton')}
          disabled={loading !== 'none'}
          className="px-4 py-2.5 bg-green-600/80 hover:bg-green-500 disabled:opacity-50 text-white text-sm font-medium rounded-xl transition-colors"
        >
          {t({ en: '⚡ Skeleton Screen', es: '⚡ Skeleton Screen' })}
        </button>
      </div>

      <div className="min-h-[140px]">
        <AnimatePresence mode="wait">
          {loading === 'slow' && (
            <motion.div
              key="slow"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center justify-center h-[140px] bg-zinc-900/70 border border-zinc-800 rounded-xl"
            >
              <div className="size-8 border-3 border-red-500 border-t-transparent rounded-full animate-spin" />
            </motion.div>
          )}
          {loading === 'skeleton' && (
            <motion.div key="skeleton" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <SkeletonCard />
            </motion.div>
          )}
          {showContent && loading === 'none' && (
            <motion.div key="content" initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }}>
              <ContentCard />
            </motion.div>
          )}
          {!showContent && loading === 'none' && (
            <motion.div
              key="empty"
              className="flex items-center justify-center h-[140px] text-zinc-600 text-sm"
            >
              {t({ en: '↑ Click a button to compare loading patterns', es: '↑ Haz clic en un botón para comparar patrones de carga' })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="bg-yellow-950/20 border border-yellow-500/20 rounded-lg p-3 flex gap-3 items-start">
        <Zap className="size-4 text-yellow-400 mt-0.5 flex-shrink-0" />
        <p className="text-xs text-zinc-400">
          {t({
            en: 'Skeleton screens give the brain structure to anticipate content layout. Research shows they reduce perceived wait time by up to 50%.',
            es: 'Los skeleton screens dan al cerebro estructura para anticipar el layout del contenido. Investigación muestra que reducen el tiempo de espera percibido hasta un 50%.',
          })}
        </p>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════

export function LawsOfUXLab() {
  const { t } = useLanguage();
  const [activeLaw, setActiveLaw] = useState<string>('hicks');
  const [completedLaws, setCompletedLaws] = useState<Set<string>>(new Set());

  const markComplete = (id: string) => {
    setCompletedLaws((prev) => new Set(prev).add(id));
  };

  const demoComponents: Record<string, React.ReactNode> = {
    hicks: <HicksLawDemo />,
    fitts: <FittsLawDemo />,
    jakobs: <JakobsLawDemo />,
    millers: <MillersLawDemo />,
    aesthetic: <AestheticUsabilityDemo />,
    doherty: <DohertyThresholdDemo />,
  };

  const currentLaw = laws.find((l) => l.id === activeLaw)!;

  return (
    <section className="scroll-mt-24">
      {/* Header */}
      <div className="bg-gradient-to-br from-indigo-950/40 via-purple-950/30 to-pink-950/20 border border-indigo-500/20 rounded-2xl p-6 md:p-8 mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="size-12 rounded-xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center">
            <Brain className="size-6 text-indigo-400" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">
              {t({ en: 'Laws of UX — Interactive Lab', es: 'Leyes de UX — Laboratorio Interactivo' })}
            </h3>
            <p className="text-sm text-zinc-400">
              {t({
                en: 'Experience each law through hands-on demos. Learn by doing, not just reading.',
                es: 'Experimenta cada ley con demos prácticas. Aprende haciendo, no solo leyendo.',
              })}
            </p>
          </div>
        </div>

        {/* Progress */}
        <div className="flex items-center gap-2 text-xs text-zinc-500">
          <Award className="size-3.5" />
          <span>
            {completedLaws.size}/{laws.length} {t({ en: 'explored', es: 'exploradas' })}
          </span>
          <div className="flex-1 h-1.5 bg-zinc-800 rounded-full overflow-hidden ml-2">
            <motion.div
              className="h-full bg-gradient-to-r from-indigo-500 to-purple-500"
              animate={{ width: `${(completedLaws.size / laws.length) * 100}%` }}
              transition={{ type: 'spring', stiffness: 100 }}
            />
          </div>
        </div>
      </div>

      {/* Law Selector — Horizontal scroll on mobile */}
      <ScrollableTabs className="mb-6">
        {laws.map((law) => {
          const Icon = law.icon;
          const isActive = activeLaw === law.id;
          const isDone = completedLaws.has(law.id);
          return (
            <button
              key={law.id}
              onClick={() => {
                setActiveLaw(law.id);
                markComplete(law.id);
              }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all whitespace-nowrap flex-shrink-0 ${
                isActive
                  ? `bg-white/10 ${law.accent} ring-1 ring-white/10`
                  : isDone
                    ? 'text-zinc-400 hover:text-zinc-200 hover:bg-white/5'
                    : 'text-zinc-500 hover:text-zinc-300 hover:bg-white/5'
              }`}
            >
              <Icon className="size-3.5" />
              {t(law.name)}
              {isDone && !isActive && <Check className="size-3 text-green-500" />}
            </button>
          );
        })}
      </ScrollableTabs>

      {/* Active Law Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeLaw}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="space-y-6"
        >
          {/* Theory Panel */}
          <div className={`bg-gradient-to-r ${currentLaw.color} border rounded-xl p-5 md:p-6`}>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <p className="text-[10px] uppercase tracking-wider text-zinc-500 mb-1">{t({ en: 'Summary', es: 'Resumen' })}</p>
                <p className="text-sm text-zinc-200 leading-relaxed">{t(currentLaw.summary)}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-zinc-500 mb-1">{t({ en: 'Principle', es: 'Principio' })}</p>
                <p className="text-sm text-zinc-200 leading-relaxed font-mono text-xs">{t(currentLaw.principle)}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-zinc-500 mb-1">{t({ en: 'Design Tip', es: 'Tip de Diseño' })}</p>
                <p className="text-sm text-zinc-200 leading-relaxed">{t(currentLaw.designTip)}</p>
              </div>
            </div>
          </div>

          {/* Interactive Demo */}
          <div className="bg-black/40 border border-zinc-800 rounded-xl p-5 md:p-6">
            <div className="flex items-center gap-2 mb-5">
              <MousePointer className="size-4 text-indigo-400" />
              <h4 className="text-sm font-semibold text-white">
                {t({ en: 'Interactive Demo', es: 'Demo Interactiva' })}
              </h4>
              <span className="ml-auto text-[10px] bg-indigo-500/20 text-indigo-400 px-2 py-0.5 rounded-full font-medium">
                {t({ en: 'Try it!', es: '¡Pruébalo!' })}
              </span>
            </div>
            {demoComponents[activeLaw]}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Summary Card after all explored */}
      {completedLaws.size === laws.length && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 bg-gradient-to-r from-yellow-950/30 to-amber-950/20 border border-yellow-500/20 rounded-xl p-6 text-center"
        >
          <Star className="size-8 text-yellow-400 mx-auto mb-3 fill-yellow-400" />
          <h4 className="text-lg font-bold text-white mb-2">
            {t({ en: 'All Laws Explored!', es: '¡Todas las Leyes Exploradas!' })}
          </h4>
          <p className="text-sm text-zinc-400 max-w-lg mx-auto">
            {t({
              en: "You've experienced all 6 fundamental laws of UX. Use them to defend your design decisions with science, not just intuition.",
              es: 'Has experimentado las 6 leyes fundamentales de UX. Úsalas para defender tus decisiones de diseño con ciencia, no solo intuición.',
            })}
          </p>
        </motion.div>
      )}
    </section>
  );
}