import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useLanguage } from '../layout/LanguageContext';
import { motion, AnimatePresence } from 'motion/react';
import {
  Brain,
  Eye,
  ScanLine,
  Trophy,
  Zap,
  Check,
  X,
  Clock,
  RotateCcw,
  ChevronRight,
  Lightbulb,
  Target,
  Star,
  Flame,
  Award,
  MousePointer,
  Info,
  BookOpen,
  Sparkles,
  BarChart3,
  Layers,
  AlertTriangle,
  ArrowRight,
} from 'lucide-react';

// ─── Types & Constants ───────────────────────────────────────

type PrincipleTab = 'scanning' | 'memory' | 'progress' | 'peripheral';

interface TabDef {
  id: PrincipleTab;
  label: { en: string; es: string };
  principle: { en: string; es: string };
  icon: React.ReactNode;
  color: string;
  accentColor: string;
}

const TABS: TabDef[] = [
  {
    id: 'scanning',
    label: { en: 'Scanning', es: 'Escaneo' },
    principle: { en: 'People don\'t read, they scan', es: 'La gente no lee, escanea' },
    icon: <ScanLine className="size-4" />,
    color: 'text-sky-400 bg-sky-500/15 border-sky-500/30',
    accentColor: 'sky',
  },
  {
    id: 'memory',
    label: { en: 'Working Memory', es: 'Memoria de Trabajo' },
    principle: { en: 'People hold 3-4 items max', es: 'Retienen 3-4 items maximo' },
    icon: <Brain className="size-4" />,
    color: 'text-violet-400 bg-violet-500/15 border-violet-500/30',
    accentColor: 'violet',
  },
  {
    id: 'progress',
    label: { en: 'Progress', es: 'Progreso' },
    principle: { en: 'Motivated by progress', es: 'Motivados por el progreso' },
    icon: <Trophy className="size-4" />,
    color: 'text-amber-400 bg-amber-500/15 border-amber-500/30',
    accentColor: 'amber',
  },
  {
    id: 'peripheral',
    label: { en: 'Peripheral Vision', es: 'Vision Periferica' },
    principle: { en: 'Periphery decides where to look', es: 'La periferia decide donde mirar' },
    icon: <Eye className="size-4" />,
    color: 'text-emerald-400 bg-emerald-500/15 border-emerald-500/30',
    accentColor: 'emerald',
  },
];


// ─── Utility: Section Header ─────────────────────────────────

function SectionHeader({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="size-10 bg-zinc-800/50 border border-zinc-700 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
        {icon}
      </div>
      <div className="space-y-1">
        <h4 className="text-lg font-semibold text-white">{title}</h4>
        <p className="text-sm text-zinc-400 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function InsightCard({ icon, title, desc, color }: { icon: React.ReactNode; title: string; desc: string; color: string }) {
  return (
    <div className={`border rounded-xl p-4 space-y-2 ${color}`}>
      <div className="flex items-center gap-2">
        {icon}
        <h6 className="text-xs font-bold text-white uppercase tracking-wider">{title}</h6>
      </div>
      <p className="text-xs text-zinc-400 leading-relaxed">{desc}</p>
    </div>
  );
}


// ═══════════════════════════════════════════════════════════════
// 1. SCANNING PATTERN DEMO
// ═══════════════════════════════════════════════════════════════

function ScanningDemo() {
  const { t } = useLanguage();
  const [mode, setMode] = useState<'wall' | 'scannable'>('wall');
  const [challenge, setChallenge] = useState<'idle' | 'running' | 'found'>('idle');
  const [startTime, setStartTime] = useState(0);
  const [wallTime, setWallTime] = useState<number | null>(null);
  const [scannableTime, setScannableTime] = useState<number | null>(null);
  const [showHeatmap, setShowHeatmap] = useState(false);

  const targetAnswer = t({ en: '30-day money-back guarantee', es: 'Garantia de devolucion de 30 dias' });

  const startChallenge = () => {
    setChallenge('running');
    setStartTime(Date.now());
  };

  const foundIt = () => {
    const elapsed = Date.now() - startTime;
    if (mode === 'wall') setWallTime(elapsed);
    else setScannableTime(elapsed);
    setChallenge('found');
  };

  const resetChallenge = () => {
    setChallenge('idle');
  };

  // Wall of text content
  const wallContent = (
    <div className="text-xs text-zinc-400 leading-relaxed space-y-2 p-4">
      <p>
        {t({
          en: 'Welcome to our product page. Our team has been working hard to bring you the best experience possible. We offer a wide variety of products in multiple categories including electronics, home goods, fashion accessories, and outdoor equipment. All of our products are sourced from verified manufacturers and undergo a rigorous quality check process. We ship to over 50 countries worldwide with standard shipping taking 5-7 business days and express shipping available for 2-3 business days. Our customer service team is available 24/7 via chat, email, or phone. We offer a 30-day money-back guarantee on all purchases, no questions asked. Payment methods include Visa, Mastercard, PayPal, Apple Pay, and Google Pay. For bulk orders over 100 units, please contact our B2B team for special pricing. All items are covered by a 1-year manufacturer warranty. We also offer gift wrapping services for an additional $3.99 per item.',
          es: 'Bienvenido a nuestra pagina de producto. Nuestro equipo ha trabajado duro para ofrecerte la mejor experiencia posible. Ofrecemos una amplia variedad de productos en multiples categorias incluyendo electronica, articulos para el hogar, accesorios de moda y equipamiento exterior. Todos nuestros productos provienen de fabricantes verificados y pasan por un riguroso proceso de control de calidad. Enviamos a mas de 50 paises con envio estandar de 5-7 dias habiles y envio express disponible en 2-3 dias habiles. Nuestro equipo de atencion al cliente esta disponible 24/7 via chat, email o telefono. Ofrecemos una garantia de devolucion de 30 dias en todas las compras, sin preguntas. Los metodos de pago incluyen Visa, Mastercard, PayPal, Apple Pay y Google Pay. Para pedidos mayoristas de mas de 100 unidades, contacta a nuestro equipo B2B para precios especiales. Todos los articulos estan cubiertos por una garantia del fabricante de 1 ano. Tambien ofrecemos servicio de envoltura de regalos por $3.99 adicionales por articulo.'
        })}
      </p>
    </div>
  );

  // Scannable version
  const scannableContent = (
    <div className="text-xs p-4 space-y-3">
      <h5 className="text-sm font-bold text-white">
        {t({ en: 'Product Information', es: 'Informacion del Producto' })}
      </h5>

      <div className="space-y-2">
        <div className="flex items-start gap-2">
          <div className="size-1.5 rounded-full bg-sky-400 mt-1.5 flex-shrink-0" />
          <p className="text-zinc-400">
            <strong className="text-zinc-200">{t({ en: 'Categories:', es: 'Categorias:' })}</strong> {t({ en: 'Electronics, Home, Fashion, Outdoor', es: 'Electronica, Hogar, Moda, Exterior' })}
          </p>
        </div>
        <div className="flex items-start gap-2">
          <div className="size-1.5 rounded-full bg-sky-400 mt-1.5 flex-shrink-0" />
          <p className="text-zinc-400">
            <strong className="text-zinc-200">{t({ en: 'Shipping:', es: 'Envio:' })}</strong> {t({ en: '50+ countries | Standard 5-7 days | Express 2-3 days', es: '50+ paises | Estandar 5-7 dias | Express 2-3 dias' })}
          </p>
        </div>
        <div className="flex items-start gap-2">
          <div className="size-1.5 rounded-full bg-sky-400 mt-1.5 flex-shrink-0" />
          <p className="text-zinc-400">
            <strong className="text-zinc-200">{t({ en: 'Support:', es: 'Soporte:' })}</strong> {t({ en: '24/7 via Chat, Email, Phone', es: '24/7 via Chat, Email, Telefono' })}
          </p>
        </div>
      </div>

      <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg px-3 py-2">
        <p className="text-zinc-300 font-semibold flex items-center gap-1.5">
          <Check className="size-3.5 text-emerald-400" />
          {t({ en: '30-day money-back guarantee', es: 'Garantia de devolucion de 30 dias' })}
        </p>
      </div>

      <div className="space-y-2">
        <div className="flex items-start gap-2">
          <div className="size-1.5 rounded-full bg-sky-400 mt-1.5 flex-shrink-0" />
          <p className="text-zinc-400">
            <strong className="text-zinc-200">{t({ en: 'Payment:', es: 'Pago:' })}</strong> Visa, Mastercard, PayPal, Apple Pay, Google Pay
          </p>
        </div>
        <div className="flex items-start gap-2">
          <div className="size-1.5 rounded-full bg-sky-400 mt-1.5 flex-shrink-0" />
          <p className="text-zinc-400">
            <strong className="text-zinc-200">{t({ en: 'Warranty:', es: 'Garantia:' })}</strong> {t({ en: '1-year manufacturer warranty', es: 'Garantia del fabricante de 1 ano' })}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Mode toggle */}
      <div className="flex items-center gap-2 justify-center">
        <button
          onClick={() => { setMode('wall'); resetChallenge(); }}
          className={`px-4 py-2 rounded-xl text-sm font-medium border transition-all ${
            mode === 'wall' ? 'bg-red-500/15 border-red-500/40 text-red-300' : 'bg-zinc-900 border-zinc-800 text-zinc-500 hover:text-zinc-300'
          }`}
        >
          {t({ en: 'Wall of Text', es: 'Muro de Texto' })}
        </button>
        <button
          onClick={() => { setMode('scannable'); resetChallenge(); }}
          className={`px-4 py-2 rounded-xl text-sm font-medium border transition-all ${
            mode === 'scannable' ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-300' : 'bg-zinc-900 border-zinc-800 text-zinc-500 hover:text-zinc-300'
          }`}
        >
          {t({ en: 'Scannable Version', es: 'Version Escaneable' })}
        </button>
      </div>

      {/* Challenge */}
      <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-4">
        <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <Target className="size-4 text-amber-400" />
            <span className="text-xs font-semibold text-zinc-300">
              {t({ en: 'Challenge: Find the return policy!', es: 'Reto: Encuentra la politica de devolucion!' })}
            </span>
          </div>
          {challenge === 'idle' && (
            <button onClick={startChallenge} className="text-xs px-3 py-1.5 bg-sky-600 hover:bg-sky-700 text-white rounded-lg transition-colors font-medium">
              {t({ en: 'Start Timer', es: 'Iniciar Cronometro' })}
            </button>
          )}
          {challenge === 'running' && (
            <button onClick={foundIt} className="text-xs px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors font-medium animate-pulse">
              {t({ en: 'Found it!', es: 'Lo encontre!' })}
            </button>
          )}
          {challenge === 'found' && (
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold text-amber-300">
                {((mode === 'wall' ? wallTime : scannableTime) || 0) / 1000}s
              </span>
              <button onClick={resetChallenge} className="text-zinc-500 hover:text-zinc-300 transition-colors">
                <RotateCcw className="size-3.5" />
              </button>
            </div>
          )}
        </div>

        {/* Content display */}
        <div className={`relative bg-zinc-950 border rounded-xl overflow-hidden transition-colors ${
          challenge === 'running' ? 'border-amber-500/30' : 'border-zinc-800'
        }`}>
          {/* F-pattern heatmap overlay */}
          {showHeatmap && mode === 'wall' && (
            <div className="absolute inset-0 z-10 pointer-events-none">
              <div className="absolute top-2 left-2 right-4 h-5 bg-red-500/20 rounded" />
              <div className="absolute top-9 left-2 right-[40%] h-4 bg-orange-500/15 rounded" />
              <div className="absolute top-[52px] left-2 w-4 h-[60%] bg-yellow-500/10 rounded" />
            </div>
          )}
          {showHeatmap && mode === 'scannable' && (
            <div className="absolute inset-0 z-10 pointer-events-none">
              <div className="absolute top-2 left-2 right-4 h-6 bg-red-500/20 rounded" />
              <div className="absolute top-[38px] left-6 right-[30%] h-3 bg-orange-500/15 rounded" />
              <div className="absolute top-[60px] left-6 right-[30%] h-3 bg-orange-500/15 rounded" />
              <div className="absolute top-[80px] left-2 right-4 h-8 bg-red-500/25 rounded" />
              <div className="absolute top-[118px] left-6 right-[30%] h-3 bg-yellow-500/10 rounded" />
            </div>
          )}
          <AnimatePresence mode="wait">
            <motion.div
              key={mode}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              {mode === 'wall' ? wallContent : scannableContent}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Heatmap toggle */}
      <div className="flex items-center justify-center">
        <button
          onClick={() => setShowHeatmap(!showHeatmap)}
          className={`text-xs px-3 py-1.5 rounded-lg border transition-all flex items-center gap-1.5 ${
            showHeatmap ? 'bg-red-500/15 border-red-500/30 text-red-300' : 'bg-zinc-900 border-zinc-800 text-zinc-500 hover:text-zinc-300'
          }`}
        >
          <BarChart3 className="size-3.5" />
          {t({ en: 'F-Pattern Eye-Tracking Heatmap', es: 'Mapa de Calor F-Pattern Eye-Tracking' })}
        </button>
      </div>

      {/* Results comparison */}
      {(wallTime !== null || scannableTime !== null) && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-2 gap-3"
        >
          <div className={`rounded-xl p-3 border text-center ${wallTime !== null ? 'bg-red-500/5 border-red-500/20' : 'bg-zinc-900/30 border-zinc-800'}`}>
            <p className="text-[10px] text-zinc-500 uppercase tracking-wider mb-1">{t({ en: 'Wall of Text', es: 'Muro de Texto' })}</p>
            <p className="text-xl font-bold text-red-300">{wallTime !== null ? `${(wallTime / 1000).toFixed(1)}s` : '—'}</p>
          </div>
          <div className={`rounded-xl p-3 border text-center ${scannableTime !== null ? 'bg-emerald-500/5 border-emerald-500/20' : 'bg-zinc-900/30 border-zinc-800'}`}>
            <p className="text-[10px] text-zinc-500 uppercase tracking-wider mb-1">{t({ en: 'Scannable', es: 'Escaneable' })}</p>
            <p className="text-xl font-bold text-emerald-300">{scannableTime !== null ? `${(scannableTime / 1000).toFixed(1)}s` : '—'}</p>
          </div>
        </motion.div>
      )}

      {/* Insight */}
      <InsightCard
        icon={<Lightbulb className="size-4 text-sky-400" />}
        title={t({ en: 'Design Takeaway', es: 'Leccion de Diseno' })}
        desc={t({
          en: 'Nielsen Norman Group research shows users read only 20-28% of text on a page. Use visual hierarchy: headings, bold keywords, bullet points, and highlighted boxes to help users scan and find what they need in seconds.',
          es: 'La investigacion de Nielsen Norman Group muestra que los usuarios leen solo el 20-28% del texto en una pagina. Usa jerarquia visual: encabezados, palabras clave en negrita, puntos y cajas resaltadas para ayudar a los usuarios a escanear y encontrar lo que necesitan en segundos.'
        })}
        color="border-sky-500/20 bg-sky-500/5"
      />
    </div>
  );
}


// ═══════════════════════════════════════════════════════════════
// 2. WORKING MEMORY DEMO (Miller's Law)
// ═══════════════════════════════════════════════════════════════

const MEMORY_ICONS = ['🍎', '🚗', '🌟', '🎵', '🏠', '🌈', '⚡', '🎯', '🔮', '💎', '🦋', '🌺'];

type MemoryPhase = 'ready' | 'memorize' | 'recall' | 'result';

function WorkingMemoryDemo() {
  const { t } = useLanguage();
  const [itemCount, setItemCount] = useState(3);
  const [phase, setPhase] = useState<MemoryPhase>('ready');
  const [shownItems, setShownItems] = useState<string[]>([]);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [allOptions, setAllOptions] = useState<string[]>([]);
  const [score, setScore] = useState<number | null>(null);
  const [history, setHistory] = useState<{ count: number; correct: number }[]>([]);
  const [countdown, setCountdown] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const [showChunking, setShowChunking] = useState(false);

  const startRound = useCallback(() => {
    const shuffled = [...MEMORY_ICONS].sort(() => Math.random() - 0.5);
    const items = shuffled.slice(0, itemCount);
    const options = [...shuffled.slice(0, Math.min(itemCount + 4, MEMORY_ICONS.length))].sort(() => Math.random() - 0.5);

    setShownItems(items);
    setAllOptions(options);
    setSelectedItems([]);
    setScore(null);
    setPhase('memorize');

    const displayTime = 1000 + itemCount * 600;
    setCountdown(Math.ceil(displayTime / 1000));

    timerRef.current = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          if (timerRef.current) clearInterval(timerRef.current);
          setPhase('recall');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  }, [itemCount]);

  useEffect(() => {
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  const toggleSelect = (item: string) => {
    if (phase !== 'recall') return;
    setSelectedItems(prev =>
      prev.includes(item) ? prev.filter(i => i !== item) : prev.length < itemCount ? [...prev, item] : prev
    );
  };

  const checkResult = () => {
    const correct = selectedItems.filter(s => shownItems.includes(s)).length;
    setScore(correct);
    setHistory(prev => [...prev, { count: itemCount, correct }]);
    setPhase('result');
  };

  const nextRound = () => {
    setPhase('ready');
  };

  const getAccuracyColor = (correct: number, total: number) => {
    const pct = correct / total;
    if (pct >= 0.9) return 'text-emerald-400';
    if (pct >= 0.6) return 'text-amber-400';
    return 'text-red-400';
  };

  return (
    <div className="space-y-6">
      {/* Item count selector */}
      <div className="flex items-center justify-center gap-3 flex-wrap">
        <span className="text-xs text-zinc-500 font-medium">{t({ en: 'Items to memorize:', es: 'Items a memorizar:' })}</span>
        <div className="flex gap-1">
          {[3, 4, 5, 7, 9].map(n => (
            <button
              key={n}
              onClick={() => { setItemCount(n); setPhase('ready'); }}
              className={`size-8 rounded-lg text-xs font-bold border transition-all ${
                itemCount === n
                  ? n <= 4 ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-300'
                    : n <= 5 ? 'bg-amber-500/15 border-amber-500/40 text-amber-300'
                    : 'bg-red-500/15 border-red-500/40 text-red-300'
                  : 'bg-zinc-900 border-zinc-800 text-zinc-500 hover:text-zinc-300'
              }`}
            >
              {n}
            </button>
          ))}
        </div>
        {itemCount > 4 && (
          <span className="text-[10px] text-amber-400 bg-amber-500/10 border border-amber-500/20 rounded-full px-2 py-0.5">
            {t({ en: '> Miller\'s limit!', es: '> Limite de Miller!' })}
          </span>
        )}
      </div>

      {/* Game area */}
      <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-6 min-h-[200px] flex flex-col items-center justify-center">
        <AnimatePresence mode="wait">
          {/* READY phase */}
          {phase === 'ready' && (
            <motion.div
              key="ready"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center space-y-4"
            >
              <Brain className="size-10 text-violet-400 mx-auto" />
              <p className="text-sm text-zinc-300">
                {t({
                  en: `Memorize ${itemCount} items. They will flash for ${(1 + itemCount * 0.6).toFixed(1)}s`,
                  es: `Memoriza ${itemCount} items. Apareceran por ${(1 + itemCount * 0.6).toFixed(1)}s`
                })}
              </p>
              <button
                onClick={startRound}
                className="px-5 py-2.5 bg-violet-600 hover:bg-violet-700 text-white rounded-xl text-sm font-medium transition-colors"
              >
                {t({ en: 'Start', es: 'Comenzar' })}
              </button>
            </motion.div>
          )}

          {/* MEMORIZE phase */}
          {phase === 'memorize' && (
            <motion.div
              key="memorize"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="text-center space-y-4"
            >
              <div className="flex items-center justify-center gap-1 mb-2">
                <Clock className="size-3.5 text-amber-400" />
                <span className="text-sm font-bold text-amber-300 font-mono">{countdown}s</span>
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                {shownItems.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ delay: i * 0.08, type: 'spring', stiffness: 400, damping: 20 }}
                    className="size-14 bg-violet-500/10 border-2 border-violet-500/30 rounded-xl flex items-center justify-center text-2xl shadow-lg"
                  >
                    {item}
                  </motion.div>
                ))}
              </div>
              <p className="text-xs text-zinc-500 animate-pulse">
                {t({ en: 'Memorize these items...', es: 'Memoriza estos items...' })}
              </p>
            </motion.div>
          )}

          {/* RECALL phase */}
          {phase === 'recall' && (
            <motion.div
              key="recall"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center space-y-4 w-full"
            >
              <p className="text-sm font-semibold text-zinc-300">
                {t({
                  en: `Select the ${itemCount} items you saw (${selectedItems.length}/${itemCount})`,
                  es: `Selecciona los ${itemCount} items que viste (${selectedItems.length}/${itemCount})`
                })}
              </p>
              <div className="flex flex-wrap justify-center gap-2.5">
                {allOptions.map(item => (
                  <button
                    key={item}
                    onClick={() => toggleSelect(item)}
                    className={`size-14 rounded-xl text-2xl border-2 transition-all ${
                      selectedItems.includes(item)
                        ? 'bg-violet-500/20 border-violet-400 scale-110 shadow-lg shadow-violet-500/20'
                        : 'bg-zinc-900 border-zinc-700 hover:border-zinc-600 hover:scale-105'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
              <button
                onClick={checkResult}
                disabled={selectedItems.length !== itemCount}
                className="px-5 py-2 bg-violet-600 hover:bg-violet-700 disabled:bg-zinc-800 disabled:text-zinc-600 text-white rounded-xl text-sm font-medium transition-colors disabled:cursor-not-allowed"
              >
                {t({ en: 'Check Answer', es: 'Verificar Respuesta' })}
              </button>
            </motion.div>
          )}

          {/* RESULT phase */}
          {phase === 'result' && (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="text-center space-y-4"
            >
              <div className={`text-3xl font-bold ${getAccuracyColor(score!, itemCount)}`}>
                {score}/{itemCount}
              </div>
              <p className="text-sm text-zinc-400">
                {score === itemCount
                  ? t({ en: 'Perfect recall!', es: 'Recuerdo perfecto!' })
                  : score! >= itemCount * 0.6
                    ? t({ en: 'Good! But notice the difficulty increasing.', es: 'Bien! Pero nota la dificultad creciente.' })
                    : t({ en: 'This is beyond working memory limits!', es: 'Esto excede los limites de la memoria de trabajo!' })}
              </p>
              {/* Show which were correct */}
              <div className="flex flex-wrap justify-center gap-2">
                {shownItems.map(item => {
                  const wasSelected = selectedItems.includes(item);
                  return (
                    <div
                      key={item}
                      className={`size-12 rounded-xl text-xl flex items-center justify-center border-2 ${
                        wasSelected ? 'border-emerald-500 bg-emerald-500/10' : 'border-red-500 bg-red-500/10'
                      }`}
                    >
                      {item}
                    </div>
                  );
                })}
              </div>
              <button
                onClick={nextRound}
                className="px-5 py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-xl text-sm font-medium transition-colors flex items-center gap-1.5 mx-auto"
              >
                {t({ en: 'Try Again', es: 'Intentar de Nuevo' })} <RotateCcw className="size-3.5" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Score history */}
      {history.length > 0 && (
        <div className="flex items-end gap-1.5 justify-center h-16">
          {history.map((h, i) => {
            const pct = h.correct / h.count;
            return (
              <div key={i} className="flex flex-col items-center gap-0.5">
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: Math.max(8, pct * 48) }}
                  className={`w-6 rounded-t-md ${pct >= 0.9 ? 'bg-emerald-500' : pct >= 0.6 ? 'bg-amber-500' : 'bg-red-500'}`}
                />
                <span className="text-[8px] text-zinc-600 font-mono">{h.count}</span>
              </div>
            );
          })}
        </div>
      )}

      {/* Chunking comparison */}
      <div className="space-y-3">
        <button
          onClick={() => setShowChunking(!showChunking)}
          className="text-xs text-zinc-400 hover:text-zinc-200 transition-colors flex items-center gap-1.5 mx-auto"
        >
          <Layers className="size-3.5" />
          {t({ en: 'See Chunking Strategy', es: 'Ver Estrategia de Agrupacion' })}
          <ChevronRight className={`size-3 transition-transform ${showChunking ? 'rotate-90' : ''}`} />
        </button>

        <AnimatePresence>
          {showChunking && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-3 space-y-2">
                  <div className="flex items-center gap-1.5">
                    <X className="size-3.5 text-red-400" />
                    <span className="text-[10px] font-bold text-red-300 uppercase tracking-wider">{t({ en: 'Unchunked (10 items)', es: 'Sin Agrupar (10 items)' })}</span>
                  </div>
                  <div className="font-mono text-lg text-zinc-400 tracking-[0.25em] text-center py-2">
                    5 5 5 1 2 3 4 5 6 7
                  </div>
                  <p className="text-[10px] text-zinc-500 text-center">{t({ en: '10 individual digits — exceeds working memory', es: '10 digitos individuales — excede la memoria de trabajo' })}</p>
                </div>
                <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-xl p-3 space-y-2">
                  <div className="flex items-center gap-1.5">
                    <Check className="size-3.5 text-emerald-400" />
                    <span className="text-[10px] font-bold text-emerald-300 uppercase tracking-wider">{t({ en: 'Chunked (3 groups)', es: 'Agrupado (3 grupos)' })}</span>
                  </div>
                  <div className="font-mono text-lg text-zinc-200 text-center py-2">
                    <span className="bg-violet-500/15 px-2 py-1 rounded-md border border-violet-500/20">555</span>
                    {' - '}
                    <span className="bg-sky-500/15 px-2 py-1 rounded-md border border-sky-500/20">123</span>
                    {' - '}
                    <span className="bg-emerald-500/15 px-2 py-1 rounded-md border border-emerald-500/20">4567</span>
                  </div>
                  <p className="text-[10px] text-zinc-500 text-center">{t({ en: '3 meaningful groups — within working memory', es: '3 grupos significativos — dentro de la memoria de trabajo' })}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-3">
                {[
                  { figma: { en: 'Phone: 555-123-4567', es: 'Telefono: 555-123-4567' }, chunks: '3', icon: '📱' },
                  { figma: { en: 'Card: 4532 · 1234 · 5678 · 9012', es: 'Tarjeta: 4532 · 1234 · 5678 · 9012' }, chunks: '4', icon: '💳' },
                  { figma: { en: 'Form: 3 steps with progress', es: 'Formulario: 3 pasos con progreso' }, chunks: '3', icon: '📋' },
                ].map((item, i) => (
                  <div key={i} className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-2.5 flex items-center gap-2">
                    <span className="text-base">{item.icon}</span>
                    <div>
                      <p className="text-[10px] text-zinc-300 font-medium">{t(item.figma)}</p>
                      <p className="text-[9px] text-zinc-600">{item.chunks} chunks</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <InsightCard
        icon={<Lightbulb className="size-4 text-violet-400" />}
        title={t({ en: 'Miller\'s Law', es: 'Ley de Miller' })}
        desc={t({
          en: 'The average person can hold 7±2 items (more recent research says 3-4) in working memory. In UI design: limit navigation to 5-7 items, chunk forms into 3-4 step wizards, and group related information visually.',
          es: 'La persona promedio puede retener 7±2 items (investigacion mas reciente dice 3-4) en memoria de trabajo. En diseno UI: limita la navegacion a 5-7 items, divide formularios en asistentes de 3-4 pasos, y agrupa informacion relacionada visualmente.'
        })}
        color="border-violet-500/20 bg-violet-500/5"
      />
    </div>
  );
}


// ═══════════════════════════════════════════════════════════════
// 3. PROGRESS & GAMIFICATION DEMO
// ═══════════════════════════════════════════════════════════════

interface MicroTask {
  id: string;
  label: { en: string; es: string };
  done: boolean;
}

function ProgressGamificationDemo() {
  const { t } = useLanguage();

  const defaultTasks: MicroTask[] = [
    { id: 'profile', label: { en: 'Complete your profile', es: 'Completa tu perfil' }, done: false },
    { id: 'avatar', label: { en: 'Upload an avatar', es: 'Sube un avatar' }, done: false },
    { id: 'preferences', label: { en: 'Set preferences', es: 'Configura preferencias' }, done: false },
    { id: 'firstProject', label: { en: 'Create first project', es: 'Crea tu primer proyecto' }, done: false },
    { id: 'invite', label: { en: 'Invite a teammate', es: 'Invita a un companero' }, done: false },
    { id: 'explore', label: { en: 'Explore templates', es: 'Explora plantillas' }, done: false },
    { id: 'shortcut', label: { en: 'Learn a shortcut', es: 'Aprende un atajo' }, done: false },
    { id: 'feedback', label: { en: 'Give feedback', es: 'Da feedback' }, done: false },
  ];

  const [tasks, setTasks] = useState<MicroTask[]>(defaultTasks);
  const [showType, setShowType] = useState<'none' | 'bar' | 'gamified'>('gamified');
  const [useEndowed, setUseEndowed] = useState(false);
  const [streak, setStreak] = useState(0);

  const completedCount = tasks.filter(t => t.done).length;
  const totalCount = tasks.length;
  const progress = completedCount / totalCount;
  const endowedProgress = useEndowed ? (completedCount + 2) / (totalCount + 2) : progress;
  const displayProgress = showType === 'gamified' ? endowedProgress : progress;

  const toggleTask = (id: string) => {
    setTasks(prev => {
      const newTasks = prev.map(t => t.id === id ? { ...t, done: !t.done } : t);
      const newCompleted = newTasks.filter(t => t.done).length;
      const oldCompleted = prev.filter(t => t.done).length;
      if (newCompleted > oldCompleted) setStreak(s => s + 1);
      return newTasks;
    });
  };

  const resetTasks = () => {
    setTasks(defaultTasks);
    setStreak(0);
  };

  const level = completedCount <= 2 ? 1 : completedCount <= 5 ? 2 : 3;
  const levelLabel = level === 1 ? { en: 'Beginner', es: 'Principiante' } : level === 2 ? { en: 'Explorer', es: 'Explorador' } : { en: 'Champion', es: 'Campeon' };
  const levelColor = level === 1 ? 'text-zinc-400' : level === 2 ? 'text-amber-400' : 'text-emerald-400';
  const allDone = completedCount === totalCount;

  return (
    <div className="space-y-6">
      {/* Visualization type */}
      <div className="flex items-center gap-2 justify-center flex-wrap">
        {([
          { id: 'none' as const, label: { en: 'No Progress', es: 'Sin Progreso' } },
          { id: 'bar' as const, label: { en: 'Simple Bar', es: 'Barra Simple' } },
          { id: 'gamified' as const, label: { en: 'Gamified', es: 'Gamificado' } },
        ]).map(type => (
          <button
            key={type.id}
            onClick={() => setShowType(type.id)}
            className={`px-3 py-1.5 rounded-xl text-xs font-medium border transition-all ${
              showType === type.id ? 'bg-amber-500/15 border-amber-500/40 text-amber-300' : 'bg-zinc-900 border-zinc-800 text-zinc-500 hover:text-zinc-300'
            }`}
          >
            {t(type.label)}
          </button>
        ))}
      </div>

      {/* Progress visualization */}
      <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-5 space-y-4">
        {showType === 'none' && (
          <p className="text-xs text-zinc-600 text-center italic">
            {t({ en: 'No progress indicator — users feel lost. How many tasks remain?', es: 'Sin indicador de progreso — los usuarios se sienten perdidos. Cuantas tareas faltan?' })}
          </p>
        )}

        {showType === 'bar' && (
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="text-[10px] text-zinc-500 font-medium">{t({ en: 'Progress', es: 'Progreso' })}</span>
              <span className="text-xs text-zinc-400 font-mono">{completedCount}/{totalCount}</span>
            </div>
            <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-zinc-400 rounded-full"
                animate={{ width: `${progress * 100}%` }}
                transition={{ type: 'spring', stiffness: 200, damping: 25 }}
              />
            </div>
          </div>
        )}

        {showType === 'gamified' && (
          <div className="space-y-3">
            {/* Level + Streak */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className={`flex items-center gap-1 ${levelColor}`}>
                  <Star className="size-3.5" />
                  <span className="text-xs font-bold">{t(levelLabel)}</span>
                </div>
                <span className="text-[9px] text-zinc-600">Lv.{level}</span>
              </div>
              {streak > 0 && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="flex items-center gap-1 bg-orange-500/10 border border-orange-500/20 rounded-full px-2 py-0.5"
                >
                  <Flame className="size-3 text-orange-400" />
                  <span className="text-[10px] font-bold text-orange-300">{streak} streak</span>
                </motion.div>
              )}
            </div>

            {/* Gamified progress bar */}
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-zinc-500">{Math.round(displayProgress * 100)}%</span>
                {useEndowed && (
                  <span className="text-[8px] text-amber-400 bg-amber-500/10 border border-amber-500/20 rounded-full px-1.5 py-0.5">
                    Endowed +25%
                  </span>
                )}
              </div>
              <div className="h-3 bg-zinc-800 rounded-full overflow-hidden relative">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-emerald-400"
                  animate={{ width: `${displayProgress * 100}%` }}
                  transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                />
                {/* Milestone markers */}
                {[25, 50, 75].map(pct => (
                  <div key={pct} className={`absolute top-0 bottom-0 w-px ${displayProgress * 100 >= pct ? 'bg-white/20' : 'bg-zinc-700'}`} style={{ left: `${pct}%` }} />
                ))}
              </div>
            </div>

            {/* Achievement */}
            <AnimatePresence>
              {allDone && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  className="bg-gradient-to-r from-amber-500/10 to-emerald-500/10 border border-amber-500/20 rounded-xl p-3 flex items-center gap-3"
                >
                  <Award className="size-8 text-amber-400" />
                  <div>
                    <p className="text-sm font-bold text-white">{t({ en: 'Onboarding Complete!', es: 'Onboarding Completo!' })}</p>
                    <p className="text-[10px] text-zinc-400">{t({ en: 'You earned the "Quick Starter" badge', es: 'Ganaste la insignia "Inicio Rapido"' })}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}

        {/* Task list */}
        <div className="space-y-1.5 pt-2">
          {tasks.map(task => (
            <button
              key={task.id}
              onClick={() => toggleTask(task.id)}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-all group ${
                task.done
                  ? 'bg-emerald-500/5 border border-emerald-500/15'
                  : 'bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700'
              }`}
            >
              <div className={`size-5 rounded-md border-2 flex items-center justify-center transition-colors flex-shrink-0 ${
                task.done ? 'bg-emerald-500 border-emerald-500' : 'border-zinc-600 group-hover:border-zinc-500'
              }`}>
                {task.done && <Check className="size-3 text-white" />}
              </div>
              <span className={`text-xs transition-colors ${task.done ? 'text-zinc-500 line-through' : 'text-zinc-300'}`}>
                {t(task.label)}
              </span>
              {task.done && showType === 'gamified' && (
                <span className="ml-auto text-[10px] text-emerald-400 font-mono">+1 XP</span>
              )}
            </button>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between pt-2 flex-wrap gap-2">
          <button
            onClick={resetTasks}
            className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors flex items-center gap-1"
          >
            <RotateCcw className="size-3" /> {t({ en: 'Reset', es: 'Reiniciar' })}
          </button>

          {showType === 'gamified' && (
            <button
              onClick={() => setUseEndowed(!useEndowed)}
              className={`text-[10px] px-3 py-1.5 rounded-lg border transition-all flex items-center gap-1.5 ${
                useEndowed ? 'bg-amber-500/15 border-amber-500/30 text-amber-300' : 'bg-zinc-900 border-zinc-800 text-zinc-500 hover:text-zinc-300'
              }`}
            >
              <Sparkles className="size-3" />
              {t({ en: 'Endowed Progress Effect', es: 'Efecto de Progreso Dotado' })}
            </button>
          )}
        </div>
      </div>

      {/* Psychology effects explained */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="bg-zinc-900/40 border border-zinc-800 rounded-lg p-3 space-y-1.5">
          <div className="flex items-center gap-1.5">
            <Zap className="size-3 text-amber-400" />
            <h6 className="text-[10px] font-bold text-amber-300 uppercase tracking-wider">Zeigarnik</h6>
          </div>
          <p className="text-[10px] text-zinc-500 leading-relaxed">
            {t({ en: 'Incomplete tasks create psychological tension. The brain remembers unfinished business more than completed ones.', es: 'Las tareas incompletas crean tension psicologica. El cerebro recuerda lo inacabado mas que lo completado.' })}
          </p>
        </div>
        <div className="bg-zinc-900/40 border border-zinc-800 rounded-lg p-3 space-y-1.5">
          <div className="flex items-center gap-1.5">
            <ArrowRight className="size-3 text-emerald-400" />
            <h6 className="text-[10px] font-bold text-emerald-300 uppercase tracking-wider">Goal Gradient</h6>
          </div>
          <p className="text-[10px] text-zinc-500 leading-relaxed">
            {t({ en: 'People accelerate effort as they approach a goal. The last 20% feels faster. Progress bars exploit this.', es: 'Las personas aceleran esfuerzo al acercarse a la meta. El ultimo 20% se siente mas rapido. Las barras de progreso explotan esto.' })}
          </p>
        </div>
        <div className="bg-zinc-900/40 border border-zinc-800 rounded-lg p-3 space-y-1.5">
          <div className="flex items-center gap-1.5">
            <Sparkles className="size-3 text-violet-400" />
            <h6 className="text-[10px] font-bold text-violet-300 uppercase tracking-wider">Endowed Progress</h6>
          </div>
          <p className="text-[10px] text-zinc-500 leading-relaxed">
            {t({ en: 'Starting at 20% instead of 0% (e.g., "2/10 done already!") dramatically increases completion rates. LinkedIn uses this for profile completion.', es: 'Empezar en 20% en vez de 0% (ej. "2/10 ya hechos!") aumenta dramaticamente las tasas de completado. LinkedIn usa esto para completar perfiles.' })}
          </p>
        </div>
      </div>

      <InsightCard
        icon={<Lightbulb className="size-4 text-amber-400" />}
        title={t({ en: 'Design Takeaway', es: 'Leccion de Diseno' })}
        desc={t({
          en: 'Toggle between "No Progress" and "Gamified" to feel the difference. Without progress indicators, users feel lost and abandon tasks. With gamification (streaks, levels, badges, progress bars), completion rates can increase by 30-50%. Duolingo, LinkedIn, and GitHub all leverage these principles.',
          es: 'Alterna entre "Sin Progreso" y "Gamificado" para sentir la diferencia. Sin indicadores de progreso, los usuarios se sienten perdidos y abandonan tareas. Con gamificacion (rachas, niveles, insignias, barras de progreso), las tasas de completado pueden aumentar un 30-50%. Duolingo, LinkedIn y GitHub aprovechan estos principios.'
        })}
        color="border-amber-500/20 bg-amber-500/5"
      />
    </div>
  );
}


// ═══════════════════════════════════════════════════════════════
// 4. PERIPHERAL VISION DEMO
// ═══════════════════════════════════════════════════════════════

interface FlashTarget {
  id: number;
  row: number;
  col: number;
  caught: boolean;
}

function PeripheralVisionDemo() {
  const { t } = useLanguage();
  const GRID = 5;
  const CENTER = Math.floor(GRID / 2);
  const [phase, setPhase] = useState<'intro' | 'playing' | 'results'>('intro');
  const [flashingCell, setFlashingCell] = useState<{ row: number; col: number } | null>(null);
  const [targets, setTargets] = useState<FlashTarget[]>([]);
  const [round, setRound] = useState(0);
  const [totalRounds] = useState(8);
  const flashTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const roundTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [showStaticVsMotion, setShowStaticVsMotion] = useState(false);
  const [ctaAnimate, setCtaAnimate] = useState(true);

  const startGame = () => {
    setPhase('playing');
    setTargets([]);
    setRound(0);
    triggerNextFlash(0);
  };

  const triggerNextFlash = (currentRound: number) => {
    if (currentRound >= totalRounds) {
      setPhase('results');
      return;
    }

    const delay = 800 + Math.random() * 1500;
    roundTimer.current = setTimeout(() => {
      let r, c;
      do {
        r = Math.floor(Math.random() * GRID);
        c = Math.floor(Math.random() * GRID);
      } while (r === CENTER && c === CENTER);

      setFlashingCell({ row: r, col: c });
      setTargets(prev => [...prev, { id: currentRound, row: r, col: c, caught: false }]);
      setRound(currentRound + 1);

      flashTimer.current = setTimeout(() => {
        setFlashingCell(null);
      }, 600);
    }, delay);
  };

  useEffect(() => {
    return () => {
      if (flashTimer.current) clearTimeout(flashTimer.current);
      if (roundTimer.current) clearTimeout(roundTimer.current);
    };
  }, []);

  const handleCellClick = (row: number, col: number) => {
    if (phase !== 'playing') return;
    if (flashingCell && flashingCell.row === row && flashingCell.col === col) {
      setTargets(prev =>
        prev.map(t => t.row === row && t.col === col && !t.caught ? { ...t, caught: true } : t)
      );
      setFlashingCell(null);
      if (flashTimer.current) clearTimeout(flashTimer.current);
      triggerNextFlash(round);
    }
  };

  const caught = targets.filter(t => t.caught).length;
  const total = targets.length;

  const getDistanceFromCenter = (row: number, col: number) => {
    return Math.sqrt(Math.pow(row - CENTER, 2) + Math.pow(col - CENTER, 2));
  };

  const resetGame = () => {
    setPhase('intro');
    setTargets([]);
    setRound(0);
    setFlashingCell(null);
    if (flashTimer.current) clearTimeout(flashTimer.current);
    if (roundTimer.current) clearTimeout(roundTimer.current);
  };

  // Heatmap for results
  const buildHeatmap = () => {
    const map: Record<string, { total: number; caught: number }> = {};
    targets.forEach(t => {
      const key = `${t.row}-${t.col}`;
      if (!map[key]) map[key] = { total: 0, caught: 0 };
      map[key].total++;
      if (t.caught) map[key].caught++;
    });
    return map;
  };

  return (
    <div className="space-y-6">
      {/* Game grid */}
      <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-4 sm:p-6">
        {phase === 'intro' && (
          <div className="text-center space-y-4 py-4">
            <Eye className="size-10 text-emerald-400 mx-auto" />
            <p className="text-sm text-zinc-300 max-w-sm mx-auto">
              {t({
                en: 'Focus on the center crosshair. When you see a green flash in your peripheral vision, click it as fast as you can!',
                es: 'Enfocate en la cruceta central. Cuando veas un destello verde en tu vision periferica, haz clic lo mas rapido posible!'
              })}
            </p>
            <button
              onClick={startGame}
              className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-sm font-medium transition-colors"
            >
              {t({ en: 'Start Test', es: 'Iniciar Test' })}
            </button>
          </div>
        )}

        {phase === 'playing' && (
          <div className="space-y-3">
            {/* Round indicator */}
            <div className="flex items-center justify-between">
              <span className="text-[10px] text-zinc-500 font-medium">
                {t({ en: 'Round', es: 'Ronda' })} {round}/{totalRounds}
              </span>
              <span className="text-[10px] text-emerald-400 font-medium">
                {t({ en: 'Caught:', es: 'Atrapados:' })} {caught}
              </span>
            </div>

            {/* Grid */}
            <div className="grid gap-1.5 mx-auto w-fit" style={{ gridTemplateColumns: `repeat(${GRID}, minmax(0, 1fr))` }}>
              {Array.from({ length: GRID }).map((_, row) =>
                Array.from({ length: GRID }).map((_, col) => {
                  const isCenter = row === CENTER && col === CENTER;
                  const isFlashing = flashingCell?.row === row && flashingCell?.col === col;
                  return (
                    <button
                      key={`${row}-${col}`}
                      onClick={() => handleCellClick(row, col)}
                      className={`size-12 sm:size-14 rounded-lg border-2 transition-all relative ${
                        isCenter
                          ? 'border-zinc-600 bg-zinc-800/50 cursor-default'
                          : isFlashing
                            ? 'border-emerald-400 bg-emerald-500/30 scale-105 shadow-lg shadow-emerald-500/30'
                            : 'border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900/60 cursor-crosshair'
                      }`}
                    >
                      {isCenter && (
                        <span className="text-zinc-500 text-lg font-bold">+</span>
                      )}
                      {isFlashing && (
                        <motion.div
                          initial={{ scale: 0.5, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          className="absolute inset-2 bg-emerald-400 rounded-md"
                        />
                      )}
                    </button>
                  );
                })
              )}
            </div>

            <p className="text-[10px] text-zinc-600 text-center animate-pulse">
              {t({ en: 'Keep your eyes on the +', es: 'Manten los ojos en el +' })}
            </p>
          </div>
        )}

        {phase === 'results' && (
          <div className="space-y-4">
            <div className="text-center space-y-2">
              <p className="text-2xl font-bold text-emerald-400">{caught}/{total}</p>
              <p className="text-sm text-zinc-400">
                {caught >= total * 0.75
                  ? t({ en: 'Great peripheral awareness!', es: 'Excelente conciencia periferica!' })
                  : caught >= total * 0.5
                    ? t({ en: 'Not bad! Motion in periphery is hard to miss.', es: 'Nada mal! El movimiento en la periferia es dificil de ignorar.' })
                    : t({ en: 'Tricky! Try again and notice how your eyes are drawn to movement.', es: 'Dificil! Intenta de nuevo y nota como tus ojos son atraidos por el movimiento.' })}
              </p>
            </div>

            {/* Heatmap */}
            <div className="space-y-2">
              <p className="text-[10px] text-zinc-500 font-semibold uppercase tracking-wider text-center">
                {t({ en: 'Reaction Heatmap', es: 'Mapa de Calor de Reaccion' })}
              </p>
              <div className="grid gap-1 mx-auto w-fit" style={{ gridTemplateColumns: `repeat(${GRID}, minmax(0, 1fr))` }}>
                {(() => {
                  const heatmap = buildHeatmap();
                  return Array.from({ length: GRID }).map((_, row) =>
                    Array.from({ length: GRID }).map((_, col) => {
                      const isCenter = row === CENTER && col === CENTER;
                      const key = `${row}-${col}`;
                      const data = heatmap[key];
                      const distance = getDistanceFromCenter(row, col);
                      const hasCaught = data && data.caught > 0;
                      const hasMissed = data && data.total > data.caught;
                      return (
                        <div
                          key={`h-${row}-${col}`}
                          className={`size-10 rounded-md flex items-center justify-center text-[9px] font-bold ${
                            isCenter ? 'bg-zinc-700 text-zinc-400' :
                            hasCaught ? 'bg-emerald-500/30 text-emerald-300 border border-emerald-500/40' :
                            hasMissed ? 'bg-red-500/20 text-red-400 border border-red-500/30' :
                            'bg-zinc-900/30 border border-zinc-800'
                          }`}
                        >
                          {isCenter ? '+' : hasCaught ? '✓' : hasMissed ? '✗' : ''}
                        </div>
                      );
                    })
                  );
                })()}
              </div>
              <div className="flex items-center justify-center gap-4 mt-2">
                <div className="flex items-center gap-1.5">
                  <div className="size-3 rounded-sm bg-emerald-500/30 border border-emerald-500/40" />
                  <span className="text-[9px] text-zinc-500">{t({ en: 'Caught', es: 'Atrapado' })}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="size-3 rounded-sm bg-red-500/20 border border-red-500/30" />
                  <span className="text-[9px] text-zinc-500">{t({ en: 'Missed', es: 'Perdido' })}</span>
                </div>
              </div>
            </div>

            <button
              onClick={resetGame}
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-medium transition-colors flex items-center gap-1.5 mx-auto"
            >
              <RotateCcw className="size-3" /> {t({ en: 'Play Again', es: 'Jugar de Nuevo' })}
            </button>
          </div>
        )}
      </div>

      {/* Static vs Animated CTA comparison */}
      <div className="space-y-3">
        <button
          onClick={() => setShowStaticVsMotion(!showStaticVsMotion)}
          className="text-xs text-zinc-400 hover:text-zinc-200 transition-colors flex items-center gap-1.5 mx-auto"
        >
          <MousePointer className="size-3.5" />
          {t({ en: 'See: Static vs Animated CTA', es: 'Ver: CTA Estatico vs Animado' })}
          <ChevronRight className={`size-3 transition-transform ${showStaticVsMotion ? 'rotate-90' : ''}`} />
        </button>

        <AnimatePresence>
          {showStaticVsMotion && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <div className="grid grid-cols-2 gap-4">
                {/* Static form */}
                <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-4 space-y-3">
                  <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">{t({ en: 'Static CTA', es: 'CTA Estatico' })}</p>
                  <div className="space-y-2">
                    <div className="h-2 w-20 bg-zinc-800 rounded" />
                    <div className="h-7 bg-zinc-800 rounded-md border border-zinc-700" />
                    <div className="h-2 w-16 bg-zinc-800 rounded" />
                    <div className="h-7 bg-zinc-800 rounded-md border border-zinc-700" />
                  </div>
                  <button className="w-full py-2 bg-indigo-600 text-white text-xs font-medium rounded-lg">
                    {t({ en: 'Subscribe', es: 'Suscribirse' })}
                  </button>
                </div>

                {/* Animated form */}
                <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-4 space-y-3">
                  <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">{t({ en: 'Animated CTA', es: 'CTA Animado' })}</p>
                  <div className="space-y-2">
                    <div className="h-2 w-20 bg-zinc-800 rounded" />
                    <div className="h-7 bg-zinc-800 rounded-md border border-zinc-700" />
                    <div className="h-2 w-16 bg-zinc-800 rounded" />
                    <div className="h-7 bg-zinc-800 rounded-md border border-zinc-700" />
                  </div>
                  <motion.button
                    className="w-full py-2 bg-indigo-600 text-white text-xs font-medium rounded-lg shadow-lg shadow-indigo-500/30"
                    animate={ctaAnimate ? {
                      boxShadow: [
                        '0 0 0 0 rgba(99,102,241,0.3)',
                        '0 0 0 8px rgba(99,102,241,0)',
                        '0 0 0 0 rgba(99,102,241,0.3)',
                      ],
                    } : undefined}
                    transition={ctaAnimate ? { duration: 2, repeat: Infinity, ease: 'easeInOut' } : undefined}
                  >
                    {t({ en: 'Subscribe', es: 'Suscribirse' })} ✨
                  </motion.button>
                </div>
              </div>

              <div className="flex justify-center mt-3">
                <button
                  onClick={() => setCtaAnimate(!ctaAnimate)}
                  className={`text-[10px] px-3 py-1.5 rounded-lg border transition-all ${
                    ctaAnimate ? 'bg-indigo-500/15 border-indigo-500/30 text-indigo-300' : 'bg-zinc-900 border-zinc-800 text-zinc-500'
                  }`}
                >
                  {ctaAnimate ? t({ en: 'Pause Animation', es: 'Pausar Animacion' }) : t({ en: 'Play Animation', es: 'Reproducir Animacion' })}
                </button>
              </div>

              <p className="text-[10px] text-zinc-500 text-center mt-2">
                {t({
                  en: 'Your peripheral vision immediately detects the animated button. Studies show animated CTAs get 30-40% more attention than static ones.',
                  es: 'Tu vision periferica detecta inmediatamente el boton animado. Estudios muestran que los CTAs animados obtienen 30-40% mas atencion que los estaticos.'
                })}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <InsightCard
        icon={<Lightbulb className="size-4 text-emerald-400" />}
        title={t({ en: 'Design Takeaway', es: 'Leccion de Diseno' })}
        desc={t({
          en: 'Peripheral vision evolved to detect movement and threats. Use subtle motion (pulse, glow, micro-animation) to guide attention to important elements like CTAs, notifications, and error states. But use it sparingly — too much motion creates cognitive overload and accessibility issues.',
          es: 'La vision periferica evoluciono para detectar movimiento y amenazas. Usa movimiento sutil (pulso, brillo, micro-animacion) para guiar la atencion a elementos importantes como CTAs, notificaciones y estados de error. Pero usalo con moderacion — demasiado movimiento crea sobrecarga cognitiva y problemas de accesibilidad.'
        })}
        color="border-emerald-500/20 bg-emerald-500/5"
      />
    </div>
  );
}


// ═══════════════════════════════════════════════════════════════
// MAIN EXPORTED COMPONENT
// ═══════════════════════════════════════════════════════════════

export function UXPsychologyLab() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<PrincipleTab>('scanning');

  const tabContent: Record<PrincipleTab, React.ReactNode> = {
    scanning: (
      <div className="space-y-6">
        <SectionHeader
          icon={<ScanLine className="size-5 text-sky-400" />}
          title={t({ en: 'F-Pattern: People Don\'t Read, They Scan', es: 'Patron-F: La Gente No Lee, Escanea' })}
          desc={t({ en: 'Try the timed challenge below: find the return policy in both versions. The difference in speed is dramatic — and it\'s the same content.', es: 'Prueba el reto cronometrado: encuentra la politica de devolucion en ambas versiones. La diferencia de velocidad es dramatica — y es el mismo contenido.' })}
        />
        <ScanningDemo />
      </div>
    ),
    memory: (
      <div className="space-y-6">
        <SectionHeader
          icon={<Brain className="size-5 text-violet-400" />}
          title={t({ en: 'Working Memory: The 3-4 Item Limit', es: 'Memoria de Trabajo: El Limite de 3-4 Items' })}
          desc={t({ en: 'Test your own working memory. Start with 3 items, then push to 7 or 9. You\'ll feel Miller\'s Law firsthand — and understand why good UI never shows more than 4-5 options at once.', es: 'Prueba tu propia memoria de trabajo. Empieza con 3 items, luego intenta 7 o 9. Sentiras la Ley de Miller de primera mano — y entenderas por que una buena UI nunca muestra mas de 4-5 opciones a la vez.' })}
        />
        <WorkingMemoryDemo />
      </div>
    ),
    progress: (
      <div className="space-y-6">
        <SectionHeader
          icon={<Trophy className="size-5 text-amber-400" />}
          title={t({ en: 'Progress & Gamification Psychology', es: 'Psicologia del Progreso y Gamificacion' })}
          desc={t({ en: 'Complete the onboarding tasks while switching between visualization modes. Notice how "No Progress" feels aimless, while "Gamified" creates urgency and satisfaction. Toggle the Endowed Progress Effect to see how starting at 20% changes your motivation.', es: 'Completa las tareas de onboarding mientras cambias entre modos de visualizacion. Nota como "Sin Progreso" se siente sin rumbo, mientras que "Gamificado" crea urgencia y satisfaccion. Activa el Efecto de Progreso Dotado para ver como empezar en 20% cambia tu motivacion.' })}
        />
        <ProgressGamificationDemo />
      </div>
    ),
    peripheral: (
      <div className="space-y-6">
        <SectionHeader
          icon={<Eye className="size-5 text-emerald-400" />}
          title={t({ en: 'Peripheral Vision: Motion Captures Attention', es: 'Vision Periferica: El Movimiento Captura la Atencion' })}
          desc={t({ en: 'Focus on the center crosshair (+) and try to catch the green flashes in your peripheral vision. Then compare a static vs animated CTA button — your eyes can\'t help but notice the motion.', es: 'Enfocate en la cruceta central (+) e intenta atrapar los destellos verdes en tu vision periferica. Luego compara un boton CTA estatico vs animado — tus ojos no pueden evitar notar el movimiento.' })}
        />
        <PeripheralVisionDemo />
      </div>
    ),
  };

  return (
    <div className="w-full max-w-5xl mx-auto space-y-8 mt-12">
      {/* Header */}
      <div className="text-center space-y-3">
        <div className="flex items-center justify-center gap-3">
          <Brain className="size-8 text-violet-400" />
          <h3 className="text-3xl font-bold text-white">
            {t({ en: 'UX Psychology Lab', es: 'Laboratorio de Psicologia UX' })}
          </h3>
        </div>
        <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
          {t({
            en: 'Experience the 4 key principles of cognitive psychology in design — not just read about them. Each demo makes you feel the principle yourself.',
            es: 'Experimenta los 4 principios clave de la psicologia cognitiva en diseno — no solo leas sobre ellos. Cada demo te hace sentir el principio en primera persona.'
          })}
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-2 justify-center">
        {TABS.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all border ${
              activeTab === tab.id
                ? tab.color
                : 'bg-zinc-900/50 border-zinc-800 text-zinc-400 hover:text-zinc-300 hover:border-zinc-700'
            }`}
          >
            {tab.icon}
            <span className="hidden sm:inline">{t(tab.label)}</span>
          </button>
        ))}
      </div>

      {/* Principle quote */}
      <div className="text-center">
        <p className="text-sm text-zinc-500 italic">
          "{t(TABS.find(tab => tab.id === activeTab)!.principle)}"
        </p>
      </div>

      {/* Active Tab Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className="bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 border border-zinc-800 rounded-2xl p-6 md:p-8"
        >
          {tabContent[activeTab]}
        </motion.div>
      </AnimatePresence>

      {/* Cross-principle summary */}
      <div className="bg-zinc-900/30 border border-zinc-800 rounded-xl p-5">
        <h4 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-3 flex items-center gap-2">
          <BookOpen className="size-4 text-indigo-400" />
          {t({ en: 'How These Principles Connect', es: 'Como se Conectan Estos Principios' })}
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            {
              from: { en: 'Scanning + Memory', es: 'Escaneo + Memoria' },
              insight: { en: 'Since users scan and can only hold 3-4 items, design navigation with ≤5 visible items and use visual hierarchy to make the primary action instantly scannable.', es: 'Dado que los usuarios escanean y solo retienen 3-4 items, disena la navegacion con ≤5 items visibles y usa jerarquia visual para hacer la accion primaria instantaneamente escaneable.' },
              color: 'border-sky-500/20',
            },
            {
              from: { en: 'Progress + Peripheral', es: 'Progreso + Periferia' },
              insight: { en: 'Combine subtle animation (peripheral attention) with progress indicators (motivation) — e.g., an animated progress ring that pulses when near completion triggers both principles.', es: 'Combina animacion sutil (atencion periferica) con indicadores de progreso (motivacion) — ej. un anillo de progreso animado que pulsa cerca del completado activa ambos principios.' },
              color: 'border-amber-500/20',
            },
            {
              from: { en: 'Memory + Progress', es: 'Memoria + Progreso' },
              insight: { en: 'Break complex flows into 3-4 steps (memory limit) and show progress through them (motivation). This is why step wizards outperform long forms by 30%.', es: 'Divide flujos complejos en 3-4 pasos (limite de memoria) y muestra progreso a traves de ellos (motivacion). Por eso los asistentes por pasos superan a los formularios largos en un 30%.' },
              color: 'border-violet-500/20',
            },
            {
              from: { en: 'Scanning + Peripheral', es: 'Escaneo + Periferia' },
              insight: { en: 'Place key information where the F-pattern lands AND use subtle motion to pull attention to critical elements outside the scan path — like error messages or notifications.', es: 'Coloca informacion clave donde el patron-F aterriza Y usa movimiento sutil para atraer atencion a elementos criticos fuera del camino de escaneo — como mensajes de error o notificaciones.' },
              color: 'border-emerald-500/20',
            },
          ].map((item, i) => (
            <div key={i} className={`border ${item.color} rounded-lg p-3 space-y-1`}>
              <p className="text-xs font-bold text-zinc-300">{t(item.from)}</p>
              <p className="text-[11px] text-zinc-500 leading-relaxed">{t(item.insight)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
