import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../layout/LanguageContext';
import { motion, AnimatePresence } from 'motion/react';
import {
  ShieldAlert,
  ShieldCheck,
  Eye,
  EyeOff,
  Search,
  AlertTriangle,
  Check,
  X,
  ArrowRight,
  RotateCcw,
  Lightbulb,
  Scale,
  Gavel,
  CreditCard,
  Cookie,
  Mail,
  XCircle,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  Heart,
  Star,
  Award,
  ThumbsUp,
  ThumbsDown,
  Ban,
  CheckCircle2,
  Clock,
  DollarSign,
  Lock,
  Unlock,
  UserX,
  Users,
  Scroll,
  BookOpen,
  Zap,
  Info,
} from 'lucide-react';

// ─── Types ───────────────────────────────────────────────────

type LabTab = 'detective' | 'comparison' | 'audit' | 'redesign' | 'legal';

interface TabDef {
  id: LabTab;
  label: { en: string; es: string };
  icon: React.ReactNode;
  color: string;
}

const TABS: TabDef[] = [
  {
    id: 'detective',
    label: { en: 'Pattern Detective', es: 'Detective de Patrones' },
    icon: <Search className="size-4" />,
    color: 'text-red-400 bg-red-500/15 border-red-500/30',
  },
  {
    id: 'comparison',
    label: { en: 'Dark vs Ethical', es: 'Oscuro vs Etico' },
    icon: <Scale className="size-4" />,
    color: 'text-amber-400 bg-amber-500/15 border-amber-500/30',
  },
  {
    id: 'audit',
    label: { en: 'Manipulation Meter', es: 'Medidor de Manipulacion' },
    icon: <ShieldAlert className="size-4" />,
    color: 'text-violet-400 bg-violet-500/15 border-violet-500/30',
  },
  {
    id: 'redesign',
    label: { en: 'Redesign Challenge', es: 'Reto de Rediseno' },
    icon: <Sparkles className="size-4" />,
    color: 'text-emerald-400 bg-emerald-500/15 border-emerald-500/30',
  },
  {
    id: 'legal',
    label: { en: 'Legal Consequences', es: 'Consecuencias Legales' },
    icon: <Gavel className="size-4" />,
    color: 'text-sky-400 bg-sky-500/15 border-sky-500/30',
  },
];


// ─── Shared Components ───────────────────────────────────────

function SectionHeader({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="flex items-start gap-3 mb-6">
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

function DarkBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-1 text-[9px] font-bold uppercase tracking-wider bg-red-500/15 text-red-400 border border-red-500/25 rounded-full px-2 py-0.5">
      <ShieldAlert className="size-2.5" /> {label}
    </span>
  );
}

function EthicalBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-1 text-[9px] font-bold uppercase tracking-wider bg-emerald-500/15 text-emerald-400 border border-emerald-500/25 rounded-full px-2 py-0.5">
      <ShieldCheck className="size-2.5" /> {label}
    </span>
  );
}


// ═══════════════════════════════════════════════════════════════
// 1. PATTERN DETECTIVE
// ═══════════════════════════════════════════════════════════════

interface DetectiveCase {
  id: string;
  name: { en: string; es: string };
  description: { en: string; es: string };
  pattern: { en: string; es: string };
  explanation: { en: string; es: string };
  severity: 'mild' | 'moderate' | 'severe';
}

const DETECTIVE_CASES: DetectiveCase[] = [
  {
    id: 'confirmshaming',
    name: { en: 'Confirmshaming', es: 'Confirmshaming' },
    description: { en: 'A newsletter popup with the dismiss option reading: "No thanks, I prefer paying full price"', es: 'Un popup de newsletter con la opcion de rechazo: "No gracias, prefiero pagar precio completo"' },
    pattern: { en: 'Confirmshaming', es: 'Confirmshaming' },
    explanation: { en: 'The decline option is written to make the user feel guilty or stupid for saying no. The ethical alternative: "No, thanks" or "Maybe later".', es: 'La opcion de rechazo esta escrita para hacer sentir culpable o tonto al usuario por decir no. La alternativa etica: "No, gracias" o "Quizas luego".' },
    severity: 'moderate',
  },
  {
    id: 'trick-questions',
    name: { en: 'Trick Questions', es: 'Preguntas Trampa' },
    description: { en: 'A checkbox that reads: "Uncheck this box if you prefer not to not receive marketing emails from our partners"', es: 'Una casilla que dice: "Desmarca esta casilla si prefieres no dejar de no recibir emails de marketing de nuestros socios"' },
    pattern: { en: 'Trick Question / Double Negative', es: 'Pregunta Trampa / Doble Negacion' },
    explanation: { en: 'Triple negatives make it nearly impossible to understand what checking or unchecking actually does. The ethical alternative: "Send me offers from partners" (unchecked by default).', es: 'Las triples negaciones hacen casi imposible entender que hace realmente marcar o desmarcar. La alternativa etica: "Enviarme ofertas de socios" (desmarcado por defecto).' },
    severity: 'severe',
  },
  {
    id: 'roach-motel',
    name: { en: 'Roach Motel', es: 'Hotel Cucaracha' },
    description: { en: 'Signing up takes 2 clicks. Canceling requires: calling a phone number, waiting on hold, navigating 5 confirmation screens, and a 30-day "cooling off" period.', es: 'Registrarse toma 2 clics. Cancelar requiere: llamar a un telefono, esperar en linea, navegar 5 pantallas de confirmacion, y un periodo de "enfriamiento" de 30 dias.' },
    pattern: { en: 'Roach Motel', es: 'Hotel Cucaracha' },
    explanation: { en: 'Making it easy to enter but hard to leave. The EU Digital Services Act now requires cancellation to be as easy as sign-up. Amazon was fined €25M for this in 2024.', es: 'Hacer facil entrar pero dificil salir. El Acta de Servicios Digitales de la UE ahora requiere que la cancelacion sea tan facil como el registro. Amazon fue multada con €25M por esto en 2024.' },
    severity: 'severe',
  },
  {
    id: 'hidden-costs',
    name: { en: 'Hidden Costs', es: 'Costos Ocultos' },
    description: { en: 'Product page shows "$29.99". At checkout: $29.99 + $8.99 service fee + $4.99 processing fee + $2.99 convenience charge = $46.96', es: 'La pagina de producto muestra "$29.99". En el checkout: $29.99 + $8.99 tarifa de servicio + $4.99 tarifa de procesamiento + $2.99 cargo por conveniencia = $46.96' },
    pattern: { en: 'Hidden Costs / Drip Pricing', es: 'Costos Ocultos / Precio Goteo' },
    explanation: { en: 'Revealing additional charges only at the end of a purchase flow, when the user is already committed. The FTC has specifically targeted this practice. Ticketmaster faced a $10M fine.', es: 'Revelar cargos adicionales solo al final del flujo de compra, cuando el usuario ya esta comprometido. La FTC ha apuntado especificamente a esta practica. Ticketmaster enfrento una multa de $10M.' },
    severity: 'severe',
  },
  {
    id: 'misdirection',
    name: { en: 'Misdirection', es: 'Distraccion Visual' },
    description: { en: 'A modal with a giant green "Accept All Cookies" button and a tiny gray "Manage preferences" text link below', es: 'Un modal con un boton gigante verde "Aceptar Todas las Cookies" y un pequeno enlace gris "Gestionar preferencias" abajo' },
    pattern: { en: 'Misdirection / Visual Interference', es: 'Distraccion / Interferencia Visual' },
    explanation: { en: 'Using visual hierarchy to make the company-preferred option overwhelmingly prominent while hiding the user-friendly option. Google was fined €150M by CNIL France for this exact cookie pattern.', es: 'Usar jerarquia visual para hacer la opcion preferida por la empresa abrumadoramente prominente mientras oculta la opcion amigable para el usuario. Google fue multada con €150M por CNIL Francia por este exacto patron de cookies.' },
    severity: 'moderate',
  },
  {
    id: 'forced-continuity',
    name: { en: 'Forced Continuity', es: 'Continuidad Forzada' },
    description: { en: '"Free 7-day trial!" (requires credit card). Day 8: automatically charges $49.99/month. No reminder email before charging.', es: '"Prueba gratis de 7 dias!" (requiere tarjeta de credito). Dia 8: cobra automaticamente $49.99/mes. Sin email recordatorio antes del cobro.' },
    pattern: { en: 'Forced Continuity', es: 'Continuidad Forzada' },
    explanation: { en: 'Auto-enrolling users into paid plans after free trials without clear notification. The ethical approach: send a reminder 3 days before, make it one-click to cancel, no card required for trial.', es: 'Auto-inscribir usuarios en planes de pago despues de pruebas gratuitas sin notificacion clara. El enfoque etico: enviar recordatorio 3 dias antes, cancelar con un clic, sin tarjeta para la prueba.' },
    severity: 'severe',
  },
];

function PatternDetectiveDemo() {
  const { t } = useLanguage();
  const [currentCase, setCurrentCase] = useState(0);
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});
  const [score, setScore] = useState(0);
  const [guesses, setGuesses] = useState<Record<string, string>>({});

  const caseItem = DETECTIVE_CASES[currentCase];
  const isRevealed = revealed[caseItem.id];
  const totalCases = DETECTIVE_CASES.length;

  const options = [
    { en: 'Confirmshaming', es: 'Confirmshaming' },
    { en: 'Trick Question / Double Negative', es: 'Pregunta Trampa / Doble Negacion' },
    { en: 'Roach Motel', es: 'Hotel Cucaracha' },
    { en: 'Hidden Costs / Drip Pricing', es: 'Costos Ocultos / Precio Goteo' },
    { en: 'Misdirection / Visual Interference', es: 'Distraccion / Interferencia Visual' },
    { en: 'Forced Continuity', es: 'Continuidad Forzada' },
  ];

  const handleGuess = (optionEn: string) => {
    if (isRevealed) return;
    const isCorrect = optionEn === caseItem.pattern.en;
    setGuesses(prev => ({ ...prev, [caseItem.id]: optionEn }));
    if (isCorrect) setScore(prev => prev + 1);
    setRevealed(prev => ({ ...prev, [caseItem.id]: true }));
  };

  const goNext = () => {
    if (currentCase < totalCases - 1) setCurrentCase(prev => prev + 1);
  };

  const goPrev = () => {
    if (currentCase > 0) setCurrentCase(prev => prev - 1);
  };

  const resetAll = () => {
    setCurrentCase(0);
    setRevealed({});
    setScore(0);
    setGuesses({});
  };

  const severityColor = {
    mild: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
    moderate: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
    severe: 'bg-red-500/10 text-red-400 border-red-500/20',
  };

  const allDone = Object.keys(revealed).length === totalCases;

  return (
    <div className="space-y-6">
      {/* Progress */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xs text-zinc-500 font-medium">
            {t({ en: 'Case', es: 'Caso' })} {currentCase + 1}/{totalCases}
          </span>
          <span className={`text-[9px] font-bold uppercase px-2 py-0.5 rounded-full border ${severityColor[caseItem.severity]}`}>
            {caseItem.severity === 'mild' ? t({ en: 'Mild', es: 'Leve' }) :
             caseItem.severity === 'moderate' ? t({ en: 'Moderate', es: 'Moderado' }) :
             t({ en: 'Severe', es: 'Severo' })}
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <Star className="size-3.5 text-amber-400" />
          <span className="text-xs font-bold text-amber-300">{score}/{Object.keys(revealed).length || 0}</span>
        </div>
      </div>

      {/* Progress dots */}
      <div className="flex gap-1 justify-center">
        {DETECTIVE_CASES.map((c, i) => (
          <button
            key={c.id}
            onClick={() => setCurrentCase(i)}
            className={`size-2.5 rounded-full transition-all ${
              i === currentCase ? 'bg-red-400 scale-125' :
              revealed[c.id] ? (guesses[c.id] === c.pattern.en ? 'bg-emerald-500' : 'bg-red-500/60') :
              'bg-zinc-700'
            }`}
          />
        ))}
      </div>

      {/* Case card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={caseItem.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.2 }}
          className="bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden"
        >
          {/* Mock UI scenario */}
          <div className="bg-zinc-900/80 border-b border-zinc-800 p-5">
            <h5 className="text-sm font-semibold text-zinc-200 mb-3 flex items-center gap-2">
              <AlertTriangle className="size-4 text-red-400" />
              {t({ en: 'Scenario', es: 'Escenario' })}
            </h5>

            {/* Render interactive mock based on case */}
            {caseItem.id === 'confirmshaming' && (
              <MockConfirmshaming />
            )}
            {caseItem.id === 'trick-questions' && (
              <MockTrickQuestion />
            )}
            {caseItem.id === 'roach-motel' && (
              <MockRoachMotel />
            )}
            {caseItem.id === 'hidden-costs' && (
              <MockHiddenCosts />
            )}
            {caseItem.id === 'misdirection' && (
              <MockMisdirection />
            )}
            {caseItem.id === 'forced-continuity' && (
              <MockForcedContinuity />
            )}
          </div>

          {/* Guess options */}
          <div className="p-4 space-y-3">
            <p className="text-xs font-semibold text-zinc-400">
              {t({ en: 'Which dark pattern is this?', es: 'Que patron oscuro es este?' })}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {options.map(opt => {
                const isCorrectOption = opt.en === caseItem.pattern.en;
                const wasGuessed = guesses[caseItem.id] === opt.en;
                return (
                  <button
                    key={opt.en}
                    onClick={() => handleGuess(opt.en)}
                    disabled={isRevealed}
                    className={`px-3 py-2 rounded-lg text-[11px] font-medium border transition-all text-left ${
                      isRevealed
                        ? isCorrectOption
                          ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-300'
                          : wasGuessed
                            ? 'bg-red-500/15 border-red-500/40 text-red-300'
                            : 'bg-zinc-900/50 border-zinc-800 text-zinc-600'
                        : 'bg-zinc-900/50 border-zinc-800 text-zinc-300 hover:border-zinc-600 hover:bg-zinc-800/50'
                    }`}
                  >
                    <div className="flex items-center gap-1.5">
                      {isRevealed && isCorrectOption && <Check className="size-3 text-emerald-400 flex-shrink-0" />}
                      {isRevealed && wasGuessed && !isCorrectOption && <X className="size-3 text-red-400 flex-shrink-0" />}
                      <span>{t(opt)}</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Explanation */}
            <AnimatePresence>
              {isRevealed && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="overflow-hidden"
                >
                  <div className="bg-zinc-900/60 border border-zinc-800 rounded-lg p-3 mt-2">
                    <p className="text-xs text-zinc-400 leading-relaxed">{t(caseItem.explanation)}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="flex items-center justify-between">
        <button
          onClick={goPrev}
          disabled={currentCase === 0}
          className="flex items-center gap-1 text-xs text-zinc-500 hover:text-zinc-300 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        >
          <ChevronLeft className="size-4" /> {t({ en: 'Prev', es: 'Ant' })}
        </button>
        {allDone && (
          <button onClick={resetAll} className="flex items-center gap-1 text-xs text-zinc-500 hover:text-zinc-300 transition-colors">
            <RotateCcw className="size-3" /> {t({ en: 'Restart', es: 'Reiniciar' })}
          </button>
        )}
        <button
          onClick={goNext}
          disabled={currentCase === totalCases - 1}
          className="flex items-center gap-1 text-xs text-zinc-500 hover:text-zinc-300 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        >
          {t({ en: 'Next', es: 'Sig' })} <ChevronRight className="size-4" />
        </button>
      </div>

      {/* Final score */}
      <AnimatePresence>
        {allDone && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <InsightCard
              icon={<Award className="size-4 text-amber-400" />}
              title={t({ en: `Score: ${score}/${totalCases}`, es: `Puntuacion: ${score}/${totalCases}` })}
              desc={
                score >= 5
                  ? t({ en: 'Excellent! You can spot dark patterns like a pro. Your users are lucky to have you.', es: 'Excelente! Puedes detectar patrones oscuros como un profesional. Tus usuarios tienen suerte de tenerte.' })
                  : score >= 3
                    ? t({ en: 'Good awareness! Review the ones you missed — these patterns are intentionally subtle.', es: 'Buena conciencia! Revisa los que fallaste — estos patrones son intencionalmente sutiles.' })
                    : t({ en: 'Dark patterns are tricky by design. Review each case to build your pattern-detection muscle.', es: 'Los patrones oscuros son tramposos por diseno. Revisa cada caso para fortalecer tu musculo detector de patrones.' })
              }
              color="border-amber-500/20 bg-amber-500/5"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Mock UI Components for Detective ────────────────────────

function MockConfirmshaming() {
  const { t } = useLanguage();
  return (
    <div className="bg-zinc-950 rounded-lg border border-zinc-700 p-5 max-w-xs mx-auto text-center space-y-3">
      <Mail className="size-8 text-indigo-400 mx-auto" />
      <h6 className="text-sm font-bold text-white">{t({ en: 'Get 20% OFF!', es: 'Obtene 20% de DESCUENTO!' })}</h6>
      <p className="text-[10px] text-zinc-500">{t({ en: 'Subscribe to our exclusive deals newsletter', es: 'Suscribete a nuestro newsletter de ofertas exclusivas' })}</p>
      <div className="h-8 bg-zinc-800 rounded-md border border-zinc-700" />
      <button className="w-full py-2 bg-indigo-600 text-white text-xs font-bold rounded-lg">
        {t({ en: 'YES, SAVE ME MONEY!', es: 'SI, AHORRA MI DINERO!' })}
      </button>
      <button className="text-[10px] text-zinc-600 underline decoration-dotted">
        {t({ en: 'No thanks, I prefer paying full price', es: 'No gracias, prefiero pagar precio completo' })}
      </button>
    </div>
  );
}

function MockTrickQuestion() {
  const { t } = useLanguage();
  return (
    <div className="bg-zinc-950 rounded-lg border border-zinc-700 p-4 max-w-sm mx-auto space-y-3">
      <h6 className="text-xs font-bold text-zinc-400 uppercase tracking-wider">{t({ en: 'Communication Preferences', es: 'Preferencias de Comunicacion' })}</h6>
      <label className="flex items-start gap-2 cursor-pointer">
        <div className="size-4 rounded border-2 border-zinc-600 flex items-center justify-center mt-0.5 flex-shrink-0 bg-indigo-500">
          <Check className="size-2.5 text-white" />
        </div>
        <span className="text-[11px] text-zinc-400 leading-relaxed">
          {t({ en: 'Uncheck this box if you prefer not to not receive marketing emails from our partners', es: 'Desmarca esta casilla si prefieres no dejar de no recibir emails de marketing de nuestros socios' })}
        </span>
      </label>
      <label className="flex items-start gap-2 cursor-pointer">
        <div className="size-4 rounded border-2 border-zinc-600 flex items-center justify-center mt-0.5 flex-shrink-0 bg-indigo-500">
          <Check className="size-2.5 text-white" />
        </div>
        <span className="text-[11px] text-zinc-400 leading-relaxed">
          {t({ en: 'I do not wish to not opt out of non-essential communications', es: 'No deseo no optar por no recibir comunicaciones no esenciales' })}
        </span>
      </label>
    </div>
  );
}

function MockRoachMotel() {
  const { t } = useLanguage();
  return (
    <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
      <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-lg p-3 space-y-2">
        <span className="text-[9px] font-bold text-emerald-400 uppercase tracking-wider">{t({ en: 'Sign Up', es: 'Registro' })}</span>
        <div className="space-y-1.5">
          <div className="h-1.5 w-full bg-emerald-500/20 rounded-full">
            <div className="h-1.5 w-full bg-emerald-500 rounded-full" />
          </div>
          <p className="text-[9px] text-emerald-400 text-center">2 {t({ en: 'clicks', es: 'clics' })} ✓</p>
        </div>
      </div>
      <div className="bg-red-500/5 border border-red-500/20 rounded-lg p-3 space-y-2">
        <span className="text-[9px] font-bold text-red-400 uppercase tracking-wider">{t({ en: 'Cancel', es: 'Cancelar' })}</span>
        <div className="space-y-1 text-[8px] text-zinc-500">
          <p>1. {t({ en: 'Call 1-800-XXX', es: 'Llamar 1-800-XXX' })}</p>
          <p>2. {t({ en: 'Wait 45 min on hold', es: 'Esperar 45 min en espera' })}</p>
          <p>3. {t({ en: 'Navigate 5 screens', es: 'Navegar 5 pantallas' })}</p>
          <p>4. {t({ en: '"Are you sure?" x3', es: '"Estas seguro?" x3' })}</p>
          <p>5. {t({ en: '30-day cooling period', es: 'Periodo de 30 dias' })}</p>
        </div>
      </div>
    </div>
  );
}

function MockHiddenCosts() {
  const { t } = useLanguage();
  return (
    <div className="bg-zinc-950 rounded-lg border border-zinc-700 p-4 max-w-xs mx-auto space-y-2">
      <h6 className="text-xs font-bold text-zinc-300 mb-2">{t({ en: 'Order Summary', es: 'Resumen del Pedido' })}</h6>
      <div className="flex justify-between text-[11px] text-zinc-400">
        <span>{t({ en: 'Wireless Headphones', es: 'Auriculares Inalambricos' })}</span>
        <span>$29.99</span>
      </div>
      <div className="border-t border-zinc-800 pt-1.5 space-y-1">
        <div className="flex justify-between text-[10px] text-zinc-600">
          <span>{t({ en: 'Service fee', es: 'Tarifa de servicio' })}</span>
          <span>$8.99</span>
        </div>
        <div className="flex justify-between text-[10px] text-zinc-600">
          <span>{t({ en: 'Processing fee', es: 'Tarifa de proceso' })}</span>
          <span>$4.99</span>
        </div>
        <div className="flex justify-between text-[10px] text-zinc-600">
          <span>{t({ en: 'Convenience charge', es: 'Cargo por conveniencia' })}</span>
          <span>$2.99</span>
        </div>
      </div>
      <div className="border-t border-zinc-700 pt-2 flex justify-between">
        <span className="text-xs font-bold text-white">{t({ en: 'Total', es: 'Total' })}</span>
        <div className="text-right">
          <span className="text-xs font-bold text-red-400">$46.96</span>
          <p className="text-[8px] text-zinc-600">({t({ en: 'was', es: 'era' })} $29.99)</p>
        </div>
      </div>
    </div>
  );
}

function MockMisdirection() {
  const { t } = useLanguage();
  return (
    <div className="bg-zinc-950 rounded-lg border border-zinc-700 p-5 max-w-xs mx-auto space-y-3 text-center">
      <Cookie className="size-6 text-amber-400 mx-auto" />
      <h6 className="text-xs font-bold text-white">{t({ en: 'We value your privacy', es: 'Valoramos tu privacidad' })}</h6>
      <p className="text-[9px] text-zinc-600 leading-relaxed">{t({ en: 'We use cookies to enhance your experience, serve personalized ads, and analyze traffic.', es: 'Usamos cookies para mejorar tu experiencia, mostrar anuncios personalizados y analizar trafico.' })}</p>
      <button className="w-full py-2.5 bg-green-600 text-white text-sm font-bold rounded-lg shadow-lg shadow-green-500/20">
        {t({ en: 'Accept All Cookies', es: 'Aceptar Todas las Cookies' })}
      </button>
      <button className="text-[8px] text-zinc-700 underline">
        {t({ en: 'Manage preferences', es: 'Gestionar preferencias' })}
      </button>
    </div>
  );
}

function MockForcedContinuity() {
  const { t } = useLanguage();
  return (
    <div className="bg-zinc-950 rounded-lg border border-zinc-700 p-4 max-w-sm mx-auto space-y-3">
      <div className="flex items-center gap-2">
        <div className="size-8 bg-gradient-to-br from-violet-500 to-pink-500 rounded-lg flex items-center justify-center">
          <Sparkles className="size-4 text-white" />
        </div>
        <div>
          <h6 className="text-xs font-bold text-white">ProDesign+</h6>
          <p className="text-[9px] text-emerald-400 font-semibold">{t({ en: 'FREE 7-day trial!', es: 'Prueba GRATIS de 7 dias!' })}</p>
        </div>
      </div>
      <div className="bg-zinc-900 rounded-md p-2.5 border border-zinc-800 space-y-1.5">
        <div className="flex items-center gap-2">
          <CreditCard className="size-3 text-zinc-500" />
          <span className="text-[10px] text-zinc-400">{t({ en: 'Credit card required', es: 'Tarjeta de credito requerida' })}</span>
        </div>
        <div className="h-7 bg-zinc-800 rounded border border-zinc-700" />
      </div>
      <p className="text-[7px] text-zinc-700 leading-relaxed">
        {t({ en: 'By starting your trial you agree to be charged $49.99/month after the trial period ends. Charges are non-refundable.', es: 'Al iniciar tu prueba aceptas ser cobrado $49.99/mes despues de que termine el periodo de prueba. Los cargos no son reembolsables.' })}
      </p>
      <button className="w-full py-2 bg-violet-600 text-white text-xs font-bold rounded-lg">
        {t({ en: 'Start Free Trial', es: 'Iniciar Prueba Gratis' })}
      </button>
    </div>
  );
}


// ═══════════════════════════════════════════════════════════════
// 2. DARK VS ETHICAL COMPARISON
// ═══════════════════════════════════════════════════════════════

interface ComparisonItem {
  id: string;
  category: { en: string; es: string };
  icon: React.ReactNode;
}

const COMPARISONS: ComparisonItem[] = [
  { id: 'cookie', category: { en: 'Cookie Consent', es: 'Consentimiento de Cookies' }, icon: <Cookie className="size-4" /> },
  { id: 'unsubscribe', category: { en: 'Unsubscribe Flow', es: 'Flujo de Baja' }, icon: <Mail className="size-4" /> },
  { id: 'pricing', category: { en: 'Pricing Display', es: 'Mostrar Precios' }, icon: <DollarSign className="size-4" /> },
  { id: 'deletion', category: { en: 'Account Deletion', es: 'Eliminacion de Cuenta' }, icon: <UserX className="size-4" /> },
];

function DarkVsEthicalDemo() {
  const { t } = useLanguage();
  const [activeComparison, setActiveComparison] = useState(0);

  const comp = COMPARISONS[activeComparison];

  return (
    <div className="space-y-6">
      {/* Category selector */}
      <div className="flex flex-wrap gap-2 justify-center">
        {COMPARISONS.map((c, i) => (
          <button
            key={c.id}
            onClick={() => setActiveComparison(i)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
              i === activeComparison
                ? 'bg-amber-500/15 border-amber-500/40 text-amber-300'
                : 'bg-zinc-900 border-zinc-800 text-zinc-500 hover:text-zinc-300'
            }`}
          >
            {c.icon}
            <span className="hidden sm:inline">{t(c.category)}</span>
          </button>
        ))}
      </div>

      {/* Comparison panels */}
      <AnimatePresence mode="wait">
        <motion.div
          key={comp.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {/* Dark pattern side */}
          <div className="bg-red-500/3 border border-red-500/20 rounded-xl overflow-hidden">
            <div className="bg-red-500/8 px-4 py-2 border-b border-red-500/15 flex items-center gap-2">
              <ShieldAlert className="size-3.5 text-red-400" />
              <span className="text-[10px] font-bold text-red-400 uppercase tracking-wider">{t({ en: 'Dark Pattern', es: 'Patron Oscuro' })}</span>
            </div>
            <div className="p-4">
              {comp.id === 'cookie' && <DarkCookie />}
              {comp.id === 'unsubscribe' && <DarkUnsubscribe />}
              {comp.id === 'pricing' && <DarkPricing />}
              {comp.id === 'deletion' && <DarkDeletion />}
            </div>
          </div>

          {/* Ethical side */}
          <div className="bg-emerald-500/3 border border-emerald-500/20 rounded-xl overflow-hidden">
            <div className="bg-emerald-500/8 px-4 py-2 border-b border-emerald-500/15 flex items-center gap-2">
              <ShieldCheck className="size-3.5 text-emerald-400" />
              <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">{t({ en: 'Ethical Design', es: 'Diseno Etico' })}</span>
            </div>
            <div className="p-4">
              {comp.id === 'cookie' && <EthicalCookie />}
              {comp.id === 'unsubscribe' && <EthicalUnsubscribe />}
              {comp.id === 'pricing' && <EthicalPricing />}
              {comp.id === 'deletion' && <EthicalDeletion />}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* What changed */}
      <div className="bg-zinc-900/40 border border-zinc-800 rounded-lg p-3 space-y-2">
        <h6 className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
          <Lightbulb className="size-3 text-amber-400" />
          {t({ en: 'What Changed?', es: 'Que Cambio?' })}
        </h6>
        {comp.id === 'cookie' && (
          <ul className="space-y-1 text-[10px] text-zinc-500">
            <li className="flex items-start gap-1.5"><Check className="size-3 text-emerald-400 mt-0.5 flex-shrink-0" />{t({ en: 'Both buttons have equal visual weight — no misdirection', es: 'Ambos botones tienen igual peso visual — sin distraccion' })}</li>
            <li className="flex items-start gap-1.5"><Check className="size-3 text-emerald-400 mt-0.5 flex-shrink-0" />{t({ en: '"Reject Non-Essential" is a real button, not a hidden link', es: '"Rechazar No Esenciales" es un boton real, no un enlace oculto' })}</li>
            <li className="flex items-start gap-1.5"><Check className="size-3 text-emerald-400 mt-0.5 flex-shrink-0" />{t({ en: 'Granular control is immediately accessible', es: 'El control granular es accesible inmediatamente' })}</li>
          </ul>
        )}
        {comp.id === 'unsubscribe' && (
          <ul className="space-y-1 text-[10px] text-zinc-500">
            <li className="flex items-start gap-1.5"><Check className="size-3 text-emerald-400 mt-0.5 flex-shrink-0" />{t({ en: 'One-click unsubscribe — no emotional manipulation', es: 'Baja con un clic — sin manipulacion emocional' })}</li>
            <li className="flex items-start gap-1.5"><Check className="size-3 text-emerald-400 mt-0.5 flex-shrink-0" />{t({ en: 'Frequency options offered as a genuine alternative', es: 'Opciones de frecuencia ofrecidas como alternativa genuina' })}</li>
            <li className="flex items-start gap-1.5"><Check className="size-3 text-emerald-400 mt-0.5 flex-shrink-0" />{t({ en: 'Respectful language — no guilt-tripping', es: 'Lenguaje respetuoso — sin culpabilizar' })}</li>
          </ul>
        )}
        {comp.id === 'pricing' && (
          <ul className="space-y-1 text-[10px] text-zinc-500">
            <li className="flex items-start gap-1.5"><Check className="size-3 text-emerald-400 mt-0.5 flex-shrink-0" />{t({ en: 'All fees visible upfront — no checkout surprises', es: 'Todas las tarifas visibles desde el inicio — sin sorpresas en checkout' })}</li>
            <li className="flex items-start gap-1.5"><Check className="size-3 text-emerald-400 mt-0.5 flex-shrink-0" />{t({ en: 'Total price shown from the start, breakdown available', es: 'Precio total mostrado desde el inicio, desglose disponible' })}</li>
            <li className="flex items-start gap-1.5"><Check className="size-3 text-emerald-400 mt-0.5 flex-shrink-0" />{t({ en: 'Builds trust and reduces cart abandonment', es: 'Construye confianza y reduce abandono de carrito' })}</li>
          </ul>
        )}
        {comp.id === 'deletion' && (
          <ul className="space-y-1 text-[10px] text-zinc-500">
            <li className="flex items-start gap-1.5"><Check className="size-3 text-emerald-400 mt-0.5 flex-shrink-0" />{t({ en: 'Clear path to deletion — accessible from settings', es: 'Camino claro a la eliminacion — accesible desde configuracion' })}</li>
            <li className="flex items-start gap-1.5"><Check className="size-3 text-emerald-400 mt-0.5 flex-shrink-0" />{t({ en: 'Data export option before deletion (GDPR compliant)', es: 'Opcion de exportar datos antes de eliminar (cumple GDPR)' })}</li>
            <li className="flex items-start gap-1.5"><Check className="size-3 text-emerald-400 mt-0.5 flex-shrink-0" />{t({ en: 'Grace period clearly communicated, not used as obstacle', es: 'Periodo de gracia claramente comunicado, no usado como obstaculo' })}</li>
          </ul>
        )}
      </div>
    </div>
  );
}

// ─── Comparison Mock UIs ─────────────────────────────────────

function DarkCookie() {
  const { t } = useLanguage();
  return (
    <div className="bg-zinc-950 rounded-lg border border-zinc-700 p-4 space-y-3 text-center">
      <p className="text-[9px] text-zinc-600">{t({ en: 'We use cookies to improve your experience.', es: 'Usamos cookies para mejorar tu experiencia.' })}</p>
      <button className="w-full py-2.5 bg-green-600 text-white text-sm font-bold rounded-lg shadow-lg shadow-green-500/20">
        {t({ en: 'Accept All', es: 'Aceptar Todas' })}
      </button>
      <p className="text-[7px] text-zinc-800 cursor-pointer">{t({ en: 'manage preferences', es: 'gestionar preferencias' })}</p>
    </div>
  );
}

function EthicalCookie() {
  const { t } = useLanguage();
  return (
    <div className="bg-zinc-950 rounded-lg border border-zinc-700 p-4 space-y-3 text-center">
      <p className="text-[9px] text-zinc-500">{t({ en: 'We use cookies. You choose which ones.', es: 'Usamos cookies. Tu eliges cuales.' })}</p>
      <div className="grid grid-cols-2 gap-2">
        <button className="py-2 bg-emerald-600 text-white text-[10px] font-semibold rounded-lg">
          {t({ en: 'Accept All', es: 'Aceptar Todas' })}
        </button>
        <button className="py-2 bg-zinc-700 text-white text-[10px] font-semibold rounded-lg">
          {t({ en: 'Reject Non-Essential', es: 'Rechazar No Esenciales' })}
        </button>
      </div>
      <button className="text-[9px] text-indigo-400 underline">{t({ en: 'Customize my choices', es: 'Personalizar mis opciones' })}</button>
    </div>
  );
}

function DarkUnsubscribe() {
  const { t } = useLanguage();
  return (
    <div className="bg-zinc-950 rounded-lg border border-zinc-700 p-4 space-y-3 text-center">
      <div className="text-3xl">😢</div>
      <h6 className="text-xs font-bold text-white">{t({ en: 'We\'ll miss you!', es: 'Te extranaremos!' })}</h6>
      <p className="text-[9px] text-zinc-500">{t({ en: 'Are you REALLY sure? You\'ll miss out on exclusive deals, limited offers, and personalized recommendations curated just for YOU.', es: 'Estas REALMENTE seguro? Te perderas ofertas exclusivas, ofertas limitadas y recomendaciones personalizadas curadas solo para TI.' })}</p>
      <button className="w-full py-2 bg-indigo-600 text-white text-xs font-bold rounded-lg">
        {t({ en: 'Keep my subscription (recommended)', es: 'Mantener mi suscripcion (recomendado)' })}
      </button>
      <button className="text-[8px] text-zinc-700 underline">
        {t({ en: 'I don\'t want to save money, unsubscribe me', es: 'No quiero ahorrar dinero, darme de baja' })}
      </button>
    </div>
  );
}

function EthicalUnsubscribe() {
  const { t } = useLanguage();
  return (
    <div className="bg-zinc-950 rounded-lg border border-zinc-700 p-4 space-y-3">
      <h6 className="text-xs font-bold text-white">{t({ en: 'Email Preferences', es: 'Preferencias de Email' })}</h6>
      <p className="text-[9px] text-zinc-500">{t({ en: 'We understand. Here are your options:', es: 'Entendemos. Aqui estan tus opciones:' })}</p>
      <div className="space-y-2">
        <button className="w-full flex items-center gap-2 text-left px-3 py-2 bg-zinc-900 border border-zinc-700 rounded-lg text-[10px] text-zinc-300 hover:border-zinc-600">
          <Mail className="size-3 text-zinc-500 flex-shrink-0" />
          {t({ en: 'Reduce to weekly digest', es: 'Reducir a resumen semanal' })}
        </button>
        <button className="w-full flex items-center gap-2 text-left px-3 py-2 bg-zinc-900 border border-zinc-700 rounded-lg text-[10px] text-zinc-300 hover:border-zinc-600">
          <Clock className="size-3 text-zinc-500 flex-shrink-0" />
          {t({ en: 'Pause for 30 days', es: 'Pausar por 30 dias' })}
        </button>
        <button className="w-full flex items-center gap-2 text-left px-3 py-2 bg-red-500/5 border border-red-500/20 rounded-lg text-[10px] text-red-300">
          <XCircle className="size-3 text-red-400 flex-shrink-0" />
          {t({ en: 'Unsubscribe from all', es: 'Darse de baja de todo' })}
        </button>
      </div>
    </div>
  );
}

function DarkPricing() {
  const { t } = useLanguage();
  return (
    <div className="bg-zinc-950 rounded-lg border border-zinc-700 p-4 space-y-2 text-center">
      <h6 className="text-xl font-bold text-white">$29<span className="text-xs text-zinc-500">/mo</span></h6>
      <p className="text-[8px] text-zinc-700 leading-relaxed">
        {t({ en: '* Plus $12.99 platform fee, $4.99 support fee, applicable taxes. Price may vary. Terms apply.', es: '* Mas $12.99 tarifa de plataforma, $4.99 tarifa de soporte, impuestos aplicables. El precio puede variar. Aplican terminos.' })}
      </p>
      <button className="w-full py-2 bg-indigo-600 text-white text-xs font-bold rounded-lg">
        {t({ en: 'Start Now', es: 'Comenzar' })}
      </button>
    </div>
  );
}

function EthicalPricing() {
  const { t } = useLanguage();
  return (
    <div className="bg-zinc-950 rounded-lg border border-zinc-700 p-4 space-y-2.5">
      <div className="text-center">
        <h6 className="text-xl font-bold text-white">$46.98<span className="text-xs text-zinc-400">/mo</span></h6>
        <p className="text-[9px] text-zinc-400">{t({ en: 'Total price — no hidden fees', es: 'Precio total — sin cargos ocultos' })}</p>
      </div>
      <div className="space-y-1 text-[9px] text-zinc-500 bg-zinc-900 rounded-md p-2">
        <div className="flex justify-between"><span>{t({ en: 'Base plan', es: 'Plan base' })}</span><span>$29.00</span></div>
        <div className="flex justify-between"><span>{t({ en: 'Platform', es: 'Plataforma' })}</span><span>$12.99</span></div>
        <div className="flex justify-between"><span>{t({ en: 'Support', es: 'Soporte' })}</span><span>$4.99</span></div>
        <div className="flex justify-between text-zinc-300 font-semibold border-t border-zinc-800 pt-1"><span>Total</span><span>$46.98</span></div>
      </div>
      <button className="w-full py-2 bg-indigo-600 text-white text-xs font-bold rounded-lg">
        {t({ en: 'Start Now — $46.98/mo', es: 'Comenzar — $46.98/mes' })}
      </button>
    </div>
  );
}

function DarkDeletion() {
  const { t } = useLanguage();
  return (
    <div className="bg-zinc-950 rounded-lg border border-zinc-700 p-4 space-y-3 text-center">
      <AlertTriangle className="size-8 text-red-400 mx-auto" />
      <h6 className="text-xs font-bold text-red-300">{t({ en: 'DANGER ZONE!', es: 'ZONA DE PELIGRO!' })}</h6>
      <p className="text-[8px] text-zinc-600 leading-relaxed">
        {t({ en: 'All your data, memories, connections, and history will be PERMANENTLY DESTROYED. This action is IRREVERSIBLE. Your friends will be notified.', es: 'Todos tus datos, memorias, conexiones e historial seran PERMANENTEMENTE DESTRUIDOS. Esta accion es IRREVERSIBLE. Tus amigos seran notificados.' })}
      </p>
      <button className="w-full py-2 bg-indigo-600 text-white text-xs font-bold rounded-lg">
        {t({ en: 'Keep My Account', es: 'Mantener Mi Cuenta' })}
      </button>
      <p className="text-[7px] text-zinc-800">{t({ en: 'To delete, email legal@company.com with notarized ID', es: 'Para eliminar, enviar email a legal@company.com con ID notarizado' })}</p>
    </div>
  );
}

function EthicalDeletion() {
  const { t } = useLanguage();
  return (
    <div className="bg-zinc-950 rounded-lg border border-zinc-700 p-4 space-y-3">
      <h6 className="text-xs font-bold text-white">{t({ en: 'Delete Account', es: 'Eliminar Cuenta' })}</h6>
      <p className="text-[9px] text-zinc-500">{t({ en: 'We\'re sorry to see you go. Before you leave:', es: 'Lamentamos verte ir. Antes de irte:' })}</p>
      <button className="w-full flex items-center gap-2 px-3 py-2 bg-zinc-900 border border-zinc-700 rounded-lg text-[10px] text-zinc-300">
        <Scroll className="size-3 flex-shrink-0" />
        {t({ en: 'Download my data (GDPR)', es: 'Descargar mis datos (GDPR)' })}
      </button>
      <div className="bg-amber-500/5 border border-amber-500/15 rounded-lg p-2">
        <p className="text-[9px] text-amber-300">
          {t({ en: '30-day recovery window. You can reactivate anytime during this period.', es: 'Ventana de recuperacion de 30 dias. Puedes reactivar en cualquier momento durante este periodo.' })}
        </p>
      </div>
      <button className="w-full py-2 bg-red-600 text-white text-xs font-semibold rounded-lg">
        {t({ en: 'Delete My Account', es: 'Eliminar Mi Cuenta' })}
      </button>
    </div>
  );
}


// ═══════════════════════════════════════════════════════════════
// 3. MANIPULATION METER (AUDIT)
// ═══════════════════════════════════════════════════════════════

interface AuditItem {
  id: string;
  question: { en: string; es: string };
  dark: { en: string; es: string };
  ethical: { en: string; es: string };
  weight: number;
}

const AUDIT_ITEMS: AuditItem[] = [
  {
    id: 'cancel',
    question: { en: 'How easy is it to cancel/unsubscribe?', es: 'Que tan facil es cancelar/darse de baja?' },
    dark: { en: 'Requires phone call, multiple confirmations, or hidden option', es: 'Requiere llamada, multiples confirmaciones u opcion oculta' },
    ethical: { en: 'One-click, same flow as subscribing', es: 'Un clic, mismo flujo que suscribirse' },
    weight: 20,
  },
  {
    id: 'pricing',
    question: { en: 'Is the total price transparent?', es: 'Es el precio total transparente?' },
    dark: { en: 'Hidden fees revealed only at checkout', es: 'Tarifas ocultas reveladas solo en checkout' },
    ethical: { en: 'All costs shown upfront, breakdown available', es: 'Todos los costos mostrados desde el inicio' },
    weight: 18,
  },
  {
    id: 'consent',
    question: { en: 'How is data consent handled?', es: 'Como se maneja el consentimiento de datos?' },
    dark: { en: 'Pre-checked boxes, confusing opt-out language', es: 'Casillas pre-marcadas, lenguaje confuso de opt-out' },
    ethical: { en: 'Opt-in by default, clear plain language', es: 'Opt-in por defecto, lenguaje claro y simple' },
    weight: 18,
  },
  {
    id: 'language',
    question: { en: 'Is the copy manipulative?', es: 'Es el copy manipulador?' },
    dark: { en: 'Confirmshaming, urgency scarcity, double negatives', es: 'Confirmshaming, urgencia/escasez, dobles negaciones' },
    ethical: { en: 'Neutral, respectful, honest', es: 'Neutral, respetuoso, honesto' },
    weight: 15,
  },
  {
    id: 'visual',
    question: { en: 'Does visual hierarchy bias the user?', es: 'La jerarquia visual sesga al usuario?' },
    dark: { en: 'Desired action is huge, alternative is hidden', es: 'La accion deseada es enorme, la alternativa esta oculta' },
    ethical: { en: 'Both options clearly visible and accessible', es: 'Ambas opciones visibles y accesibles' },
    weight: 15,
  },
  {
    id: 'defaults',
    question: { en: 'Are defaults user-friendly?', es: 'Los valores por defecto son amigables?' },
    dark: { en: 'Defaults favor the company (auto-renewal, data sharing)', es: 'Los defectos favorecen la empresa (auto-renovacion, datos)' },
    ethical: { en: 'Defaults protect the user (privacy, no extras)', es: 'Los defectos protegen al usuario (privacidad, sin extras)' },
    weight: 14,
  },
];

function ManipulationMeterDemo() {
  const { t } = useLanguage();
  const [scores, setScores] = useState<Record<string, number>>({});

  const handleScore = (id: string, value: number) => {
    setScores(prev => ({ ...prev, [id]: value }));
  };

  const answeredCount = Object.keys(scores).length;
  const totalWeight = AUDIT_ITEMS.reduce((sum, item) => sum + item.weight, 0);

  // Calculate weighted manipulation score: 0 = fully ethical, 100 = fully manipulative
  const manipulationScore = answeredCount > 0
    ? Math.round(AUDIT_ITEMS.reduce((sum, item) => {
        const s = scores[item.id];
        if (s === undefined) return sum;
        return sum + (s / 4) * item.weight;
      }, 0) / totalWeight * 100)
    : 0;

  const allAnswered = answeredCount === AUDIT_ITEMS.length;

  const getGaugeColor = (score: number) => {
    if (score <= 25) return 'text-emerald-400';
    if (score <= 50) return 'text-amber-400';
    if (score <= 75) return 'text-orange-400';
    return 'text-red-400';
  };

  const getGaugeBg = (score: number) => {
    if (score <= 25) return 'from-emerald-500 to-emerald-400';
    if (score <= 50) return 'from-amber-500 to-amber-400';
    if (score <= 75) return 'from-orange-500 to-orange-400';
    return 'from-red-500 to-red-400';
  };

  const getVerdict = (score: number) => {
    if (score <= 25) return { en: 'Ethical Design', es: 'Diseno Etico' };
    if (score <= 50) return { en: 'Some Concerns', es: 'Algunas Preocupaciones' };
    if (score <= 75) return { en: 'Manipulative Patterns Detected', es: 'Patrones Manipuladores Detectados' };
    return { en: 'Dark Pattern Alert!', es: 'Alerta de Patron Oscuro!' };
  };

  const resetAudit = () => setScores({});

  return (
    <div className="space-y-6">
      <p className="text-xs text-zinc-500 text-center italic">
        {t({ en: 'Rate each aspect of your design from 0 (ethical) to 4 (manipulative)', es: 'Califica cada aspecto de tu diseno de 0 (etico) a 4 (manipulador)' })}
      </p>

      {/* Audit items */}
      <div className="space-y-3">
        {AUDIT_ITEMS.map(item => (
          <div key={item.id} className="bg-zinc-950 border border-zinc-800 rounded-xl p-4 space-y-3">
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1">
                <p className="text-xs font-semibold text-zinc-300">{t(item.question)}</p>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  <p className="text-[9px] text-emerald-500 flex items-start gap-1">
                    <ShieldCheck className="size-3 mt-0.5 flex-shrink-0" />
                    {t(item.ethical)}
                  </p>
                  <p className="text-[9px] text-red-400 flex items-start gap-1">
                    <ShieldAlert className="size-3 mt-0.5 flex-shrink-0" />
                    {t(item.dark)}
                  </p>
                </div>
              </div>
              <span className="text-[8px] text-zinc-600 bg-zinc-900 rounded-full px-1.5 py-0.5 flex-shrink-0">
                {item.weight}%
              </span>
            </div>

            {/* Score buttons */}
            <div className="flex items-center gap-1.5">
              <span className="text-[8px] text-emerald-500 w-10 flex-shrink-0">{t({ en: 'Ethical', es: 'Etico' })}</span>
              {[0, 1, 2, 3, 4].map(val => (
                <button
                  key={val}
                  onClick={() => handleScore(item.id, val)}
                  className={`flex-1 h-7 rounded-md text-[10px] font-bold border transition-all ${
                    scores[item.id] === val
                      ? val <= 1
                        ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300'
                        : val === 2
                          ? 'bg-amber-500/20 border-amber-500/40 text-amber-300'
                          : 'bg-red-500/20 border-red-500/40 text-red-300'
                      : 'bg-zinc-900 border-zinc-800 text-zinc-600 hover:text-zinc-400 hover:border-zinc-700'
                  }`}
                >
                  {val}
                </button>
              ))}
              <span className="text-[8px] text-red-400 w-8 text-right flex-shrink-0">{t({ en: 'Dark', es: 'Oscuro' })}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Results gauge */}
      {allAnswered && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-zinc-950 border border-zinc-800 rounded-xl p-6 space-y-4"
        >
          <div className="text-center space-y-2">
            <p className="text-[10px] text-zinc-500 uppercase tracking-wider font-semibold">
              {t({ en: 'Manipulation Score', es: 'Puntuacion de Manipulacion' })}
            </p>
            <div className={`text-4xl font-bold ${getGaugeColor(manipulationScore)}`}>
              {manipulationScore}%
            </div>
            <div className={`text-sm font-semibold ${getGaugeColor(manipulationScore)}`}>
              {t(getVerdict(manipulationScore))}
            </div>
          </div>

          {/* Bar gauge */}
          <div className="relative h-4 bg-zinc-800 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${manipulationScore}%` }}
              transition={{ type: 'spring', stiffness: 100, damping: 20 }}
              className={`absolute inset-y-0 left-0 bg-gradient-to-r ${getGaugeBg(manipulationScore)} rounded-full`}
            />
            {/* Zone markers */}
            {[25, 50, 75].map(pct => (
              <div key={pct} className="absolute top-0 bottom-0 w-px bg-zinc-700" style={{ left: `${pct}%` }} />
            ))}
          </div>
          <div className="grid grid-cols-4 gap-1 text-center">
            <span className="text-[7px] text-emerald-500">{t({ en: 'Ethical', es: 'Etico' })}</span>
            <span className="text-[7px] text-amber-500">{t({ en: 'Concerns', es: 'Preocupaciones' })}</span>
            <span className="text-[7px] text-orange-500">{t({ en: 'Manipulative', es: 'Manipulador' })}</span>
            <span className="text-[7px] text-red-500">{t({ en: 'Dark Pattern', es: 'Patron Oscuro' })}</span>
          </div>

          {manipulationScore > 50 && (
            <div className="bg-red-500/5 border border-red-500/20 rounded-lg p-3">
              <p className="text-[10px] text-red-300 leading-relaxed flex items-start gap-1.5">
                <Gavel className="size-3.5 mt-0.5 flex-shrink-0" />
                {t({ en: 'Warning: Designs scoring above 50% risk violating the EU Digital Services Act, FTC guidelines, and GDPR. Companies have been fined millions for these patterns.', es: 'Advertencia: Disenos con puntaje superior a 50% arriesgan violar el Acta de Servicios Digitales de la UE, directrices de la FTC y GDPR. Empresas han sido multadas con millones por estos patrones.' })}
              </p>
            </div>
          )}

          <button onClick={resetAudit} className="flex items-center gap-1 text-xs text-zinc-500 hover:text-zinc-300 mx-auto transition-colors">
            <RotateCcw className="size-3" /> {t({ en: 'Reset Audit', es: 'Reiniciar Auditoria' })}
          </button>
        </motion.div>
      )}
    </div>
  );
}


// ═══════════════════════════════════════════════════════════════
// 4. REDESIGN CHALLENGE
// ═══════════════════════════════════════════════════════════════

interface RedesignChallenge {
  id: string;
  scenario: { en: string; es: string };
  darkPattern: { en: string; es: string };
  options: { text: { en: string; es: string }; isEthical: boolean }[];
  explanation: { en: string; es: string };
}

const REDESIGN_CHALLENGES: RedesignChallenge[] = [
  {
    id: 'newsletter',
    scenario: { en: 'A newsletter popup dismiss button', es: 'Boton de rechazo de popup de newsletter' },
    darkPattern: { en: '"No thanks, I hate saving money"', es: '"No gracias, odio ahorrar dinero"' },
    options: [
      { text: { en: '"No thanks, I don\'t need discounts right now"', es: '"No gracias, no necesito descuentos ahora"' }, isEthical: false },
      { text: { en: '"Maybe later"', es: '"Quizas luego"' }, isEthical: true },
      { text: { en: '"I\'m too rich for discounts"', es: '"Soy demasiado rico para descuentos"' }, isEthical: false },
      { text: { en: '"No thanks"', es: '"No gracias"' }, isEthical: true },
    ],
    explanation: { en: 'Both "Maybe later" and "No thanks" are ethical because they\'re neutral — no guilt, no judgment. Any copy that implies the user is making a bad decision by declining is confirmshaming.', es: 'Tanto "Quizas luego" como "No gracias" son eticos porque son neutrales — sin culpa, sin juicio. Cualquier copy que implique que el usuario toma una mala decision al rechazar es confirmshaming.' },
  },
  {
    id: 'trial',
    scenario: { en: 'A free trial sign-up flow', es: 'Flujo de registro de prueba gratis' },
    darkPattern: { en: 'Requires credit card, auto-charges after 7 days, no reminder', es: 'Requiere tarjeta de credito, cobra automaticamente despues de 7 dias, sin recordatorio' },
    options: [
      { text: { en: 'No card required. Reminder email 2 days before trial ends.', es: 'Sin tarjeta requerida. Email recordatorio 2 dias antes de que termine la prueba.' }, isEthical: true },
      { text: { en: 'Card required, but charge $1 to verify. Auto-charge on day 8.', es: 'Tarjeta requerida, pero cobrar $1 para verificar. Cobro automatico el dia 8.' }, isEthical: false },
      { text: { en: 'Card required. Reminder + one-click cancel link 3 days before.', es: 'Tarjeta requerida. Recordatorio + enlace de cancelar con un clic 3 dias antes.' }, isEthical: true },
      { text: { en: 'Card required. Mention auto-charge in fine print.', es: 'Tarjeta requerida. Mencionar cobro automatico en letra pequena.' }, isEthical: false },
    ],
    explanation: { en: 'The ethical options either don\'t require a card at all, or clearly notify users before charging. Fine print disclosures don\'t count as genuine consent — users don\'t read fine print (as we learned in UX Psychology!).', es: 'Las opciones eticas o no requieren tarjeta, o notifican claramente a los usuarios antes de cobrar. Las divulgaciones en letra pequena no cuentan como consentimiento genuino — los usuarios no leen la letra pequena (como aprendimos en Psicologia UX!).' },
  },
  {
    id: 'checkout',
    scenario: { en: 'A checkout page with add-ons', es: 'Pagina de checkout con complementos' },
    darkPattern: { en: 'Insurance auto-added to cart. Must click tiny "remove" link to take it out.', es: 'Seguro auto-agregado al carrito. Debe hacer clic en enlace "remover" pequeno para quitarlo.' },
    options: [
      { text: { en: 'Show add-ons as unchecked options below the cart summary', es: 'Mostrar complementos como opciones desmarcadas debajo del resumen del carrito' }, isEthical: true },
      { text: { en: 'Pre-select add-on but make removal prominent with a clear "X" button', es: 'Pre-seleccionar complemento pero hacer la eliminacion prominente con un boton "X" claro' }, isEthical: false },
      { text: { en: 'Present add-on as a suggestion card: "Would you like to add protection?"', es: 'Presentar complemento como tarjeta de sugerencia: "Te gustaria agregar proteccion?"' }, isEthical: true },
      { text: { en: 'Hide the add-on in the price breakdown as a "service charge"', es: 'Ocultar el complemento en el desglose de precios como "cargo de servicio"' }, isEthical: false },
    ],
    explanation: { en: 'Ethical add-ons are opt-IN, not opt-OUT. Presenting them as clearly optional suggestions respects user autonomy. Pre-selecting anything the user didn\'t explicitly choose is a dark pattern, even with a visible remove button.', es: 'Los complementos eticos son opt-IN, no opt-OUT. Presentarlos como sugerencias claramente opcionales respeta la autonomia del usuario. Pre-seleccionar cualquier cosa que el usuario no eligio explicitamente es un patron oscuro, incluso con un boton de remover visible.' },
  },
];

function RedesignChallengeDemo() {
  const { t } = useLanguage();
  const [currentChallenge, setCurrentChallenge] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<Record<string, number[]>>({});
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});

  const challenge = REDESIGN_CHALLENGES[currentChallenge];
  const isRevealed = revealed[challenge.id];
  const selected = selectedOptions[challenge.id] || [];

  const toggleOption = (idx: number) => {
    if (isRevealed) return;
    setSelectedOptions(prev => {
      const current = prev[challenge.id] || [];
      const next = current.includes(idx) ? current.filter(i => i !== idx) : [...current, idx];
      return { ...prev, [challenge.id]: next };
    });
  };

  const checkAnswer = () => {
    setRevealed(prev => ({ ...prev, [challenge.id]: true }));
  };

  return (
    <div className="space-y-6">
      {/* Challenge progress */}
      <div className="flex items-center justify-between">
        <span className="text-xs text-zinc-500 font-medium">
          {t({ en: 'Challenge', es: 'Reto' })} {currentChallenge + 1}/{REDESIGN_CHALLENGES.length}
        </span>
        <div className="flex gap-1">
          {REDESIGN_CHALLENGES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentChallenge(i)}
              className={`size-2.5 rounded-full transition-all ${
                i === currentChallenge ? 'bg-emerald-400 scale-125' : revealed[REDESIGN_CHALLENGES[i].id] ? 'bg-emerald-500/50' : 'bg-zinc-700'
              }`}
            />
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={challenge.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.2 }}
          className="bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden"
        >
          {/* Dark pattern being replaced */}
          <div className="bg-red-500/5 border-b border-red-500/15 p-4 space-y-2">
            <div className="flex items-center gap-2">
              <DarkBadge label={t({ en: 'Current Dark Pattern', es: 'Patron Oscuro Actual' })} />
            </div>
            <p className="text-xs font-semibold text-zinc-300">{t(challenge.scenario)}</p>
            <p className="text-xs text-red-300 bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2 font-mono">
              {t(challenge.darkPattern)}
            </p>
          </div>

          {/* Redesign options */}
          <div className="p-4 space-y-3">
            <p className="text-xs font-semibold text-zinc-400">
              {t({ en: 'Select ALL ethical redesign options:', es: 'Selecciona TODAS las opciones de rediseno etico:' })}
            </p>
            <div className="space-y-2">
              {challenge.options.map((opt, idx) => {
                const isSelected = selected.includes(idx);
                return (
                  <button
                    key={idx}
                    onClick={() => toggleOption(idx)}
                    disabled={isRevealed}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left text-[11px] border transition-all ${
                      isRevealed
                        ? opt.isEthical
                          ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
                          : isSelected
                            ? 'bg-red-500/10 border-red-500/30 text-red-300'
                            : 'bg-zinc-900/50 border-zinc-800 text-zinc-600'
                        : isSelected
                          ? 'bg-indigo-500/10 border-indigo-500/30 text-indigo-300'
                          : 'bg-zinc-900/50 border-zinc-800 text-zinc-300 hover:border-zinc-700'
                    }`}
                  >
                    <div className={`size-4 rounded border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                      isRevealed
                        ? opt.isEthical
                          ? 'bg-emerald-500 border-emerald-500'
                          : isSelected
                            ? 'bg-red-500 border-red-500'
                            : 'border-zinc-700'
                        : isSelected
                          ? 'bg-indigo-500 border-indigo-500'
                          : 'border-zinc-600'
                    }`}>
                      {((isRevealed && opt.isEthical) || (!isRevealed && isSelected)) && <Check className="size-2.5 text-white" />}
                      {isRevealed && isSelected && !opt.isEthical && <X className="size-2.5 text-white" />}
                    </div>
                    <span>{t(opt.text)}</span>
                    {isRevealed && opt.isEthical && <EthicalBadge label={t({ en: 'Ethical', es: 'Etico' })} />}
                  </button>
                );
              })}
            </div>

            {!isRevealed && selected.length > 0 && (
              <button
                onClick={checkAnswer}
                className="px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-sm font-medium transition-colors mx-auto flex"
              >
                {t({ en: 'Check Answer', es: 'Verificar Respuesta' })}
              </button>
            )}

            <AnimatePresence>
              {isRevealed && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="overflow-hidden"
                >
                  <div className="bg-zinc-900/60 border border-zinc-800 rounded-lg p-3 mt-1">
                    <p className="text-xs text-zinc-400 leading-relaxed">{t(challenge.explanation)}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => setCurrentChallenge(prev => Math.max(0, prev - 1))}
          disabled={currentChallenge === 0}
          className="flex items-center gap-1 text-xs text-zinc-500 hover:text-zinc-300 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        >
          <ChevronLeft className="size-4" /> {t({ en: 'Prev', es: 'Ant' })}
        </button>
        <button
          onClick={() => setCurrentChallenge(prev => Math.min(REDESIGN_CHALLENGES.length - 1, prev + 1))}
          disabled={currentChallenge === REDESIGN_CHALLENGES.length - 1}
          className="flex items-center gap-1 text-xs text-zinc-500 hover:text-zinc-300 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        >
          {t({ en: 'Next', es: 'Sig' })} <ChevronRight className="size-4" />
        </button>
      </div>
    </div>
  );
}


// ═══════════════════════════════════════════════════════════════
// 5. LEGAL CONSEQUENCES TIMELINE
// ═══════════════════════════════════════════════════════════════

interface LegalCase {
  year: string;
  company: string;
  fine: string;
  pattern: { en: string; es: string };
  description: { en: string; es: string };
  law: string;
}

const LEGAL_CASES: LegalCase[] = [
  {
    year: '2021',
    company: 'Google',
    fine: '€150M',
    pattern: { en: 'Cookie consent misdirection', es: 'Distraccion en consentimiento de cookies' },
    description: { en: 'CNIL France ruled that Google made it easy to "Accept All" cookies but required multiple clicks to reject them. The reject button was not equally prominent.', es: 'CNIL Francia determino que Google facilitaba "Aceptar Todas" las cookies pero requeria multiples clics para rechazarlas. El boton de rechazo no era igualmente prominente.' },
    law: 'GDPR / ePrivacy',
  },
  {
    year: '2022',
    company: 'Epic Games (Fortnite)',
    fine: '$245M',
    pattern: { en: 'Trick questions, hidden charges', es: 'Preguntas trampa, cargos ocultos' },
    description: { en: 'FTC found Epic used confusing button layouts causing unintended purchases, especially by children. Payment buttons were placed where "cancel" was expected.', es: 'La FTC determino que Epic uso disenos de botones confusos causando compras no intencionadas, especialmente por ninos. Los botones de pago estaban donde se esperaba "cancelar".' },
    law: 'FTC Act / COPPA',
  },
  {
    year: '2023',
    company: 'Meta (Facebook)',
    fine: '€1.2B',
    pattern: { en: 'Forced consent for data transfer', es: 'Consentimiento forzado para transferencia de datos' },
    description: { en: 'Ireland\'s DPC issued the largest GDPR fine ever for transferring EU user data to the US without proper consent mechanisms. Users couldn\'t opt out without losing the service.', es: 'La DPC de Irlanda emitio la multa GDPR mas grande de la historia por transferir datos de usuarios de la UE a los EE.UU. sin mecanismos de consentimiento adecuados. Los usuarios no podian optar por no participar sin perder el servicio.' },
    law: 'GDPR',
  },
  {
    year: '2024',
    company: 'Amazon',
    fine: '$25M + €35M',
    pattern: { en: 'Roach Motel (Prime cancellation)', es: 'Hotel Cucaracha (cancelacion de Prime)' },
    description: { en: 'The FTC and EU sued Amazon for making Prime subscription easy to join but intentionally difficult to cancel, requiring users to navigate through multiple screens designed to prevent cancellation.', es: 'La FTC y la UE demandaron a Amazon por hacer la suscripcion Prime facil de unirse pero intencionalmente dificil de cancelar, requiriendo navegar multiples pantallas disenadas para prevenir la cancelacion.' },
    law: 'FTC Act / DSA',
  },
  {
    year: '2024',
    company: 'TikTok',
    fine: '€345M',
    pattern: { en: 'Privacy defaults targeting minors', es: 'Configuracion de privacidad apuntando a menores' },
    description: { en: 'Ireland\'s DPC fined TikTok for defaulting children\'s accounts to public visibility and using "dark pattern" design in privacy settings that nudged young users toward less private options.', es: 'La DPC de Irlanda multo a TikTok por configurar cuentas de ninos como publicas por defecto y usar diseno de "patron oscuro" en configuracion de privacidad que empujaba a usuarios jovenes hacia opciones menos privadas.' },
    law: 'GDPR / COPPA',
  },
  {
    year: '2025',
    company: 'EU Digital Services Act',
    fine: '—',
    pattern: { en: 'Comprehensive dark pattern ban', es: 'Prohibicion integral de patrones oscuros' },
    description: { en: 'The DSA now explicitly bans dark patterns across all digital services in the EU: no manipulative interfaces, no trick questions, no hidden options. Fines up to 6% of global revenue.', es: 'El DSA ahora prohibe explicitamente patrones oscuros en todos los servicios digitales de la UE: sin interfaces manipuladoras, sin preguntas trampa, sin opciones ocultas. Multas hasta 6% de los ingresos globales.' },
    law: 'DSA Art. 25',
  },
];

function LegalConsequencesDemo() {
  const { t } = useLanguage();
  const [expandedCase, setExpandedCase] = useState<string | null>(null);

  const totalFines = '$1.8B+';

  return (
    <div className="space-y-6">
      {/* Total counter */}
      <div className="text-center bg-red-500/5 border border-red-500/20 rounded-xl p-4">
        <p className="text-[10px] text-zinc-500 uppercase tracking-wider mb-1">{t({ en: 'Total Fines for Dark Patterns (2021-2025)', es: 'Multas Totales por Patrones Oscuros (2021-2025)' })}</p>
        <p className="text-3xl font-bold text-red-400">{totalFines}</p>
      </div>

      {/* Timeline */}
      <div className="relative space-y-0">
        {/* Timeline line */}
        <div className="absolute left-[27px] top-0 bottom-0 w-px bg-gradient-to-b from-zinc-700 via-red-500/30 to-zinc-700" />

        {LEGAL_CASES.map((legalCase, i) => (
          <div key={i} className="relative pl-14 pb-4">
            {/* Timeline dot */}
            <div className={`absolute left-5 top-3 size-5 rounded-full border-2 flex items-center justify-center ${
              expandedCase === legalCase.company ? 'bg-red-500 border-red-400' : 'bg-zinc-900 border-zinc-700'
            }`}>
              <div className="size-1.5 rounded-full bg-current" />
            </div>

            <button
              onClick={() => setExpandedCase(expandedCase === legalCase.company ? null : legalCase.company)}
              className="w-full text-left bg-zinc-950 border border-zinc-800 rounded-xl p-4 hover:border-zinc-700 transition-all"
            >
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-[9px] font-mono text-zinc-600 bg-zinc-900 rounded px-1.5 py-0.5">{legalCase.year}</span>
                  <span className="text-xs font-bold text-white">{legalCase.company}</span>
                </div>
                <div className="flex items-center gap-2">
                  {legalCase.fine !== '—' && (
                    <span className="text-xs font-bold text-red-400 bg-red-500/10 rounded-full px-2 py-0.5">
                      {legalCase.fine}
                    </span>
                  )}
                  <span className="text-[8px] text-sky-400 bg-sky-500/10 rounded-full px-2 py-0.5">{legalCase.law}</span>
                  <ChevronRight className={`size-3.5 text-zinc-500 transition-transform ${expandedCase === legalCase.company ? 'rotate-90' : ''}`} />
                </div>
              </div>
              <p className="text-[10px] text-zinc-500 mt-1">{t(legalCase.pattern)}</p>
            </button>

            <AnimatePresence>
              {expandedCase === legalCase.company && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden"
                >
                  <div className="bg-zinc-900/40 border border-zinc-800 border-t-0 rounded-b-xl p-4 -mt-2 ml-0">
                    <p className="text-xs text-zinc-400 leading-relaxed">{t(legalCase.description)}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      <InsightCard
        icon={<Gavel className="size-4 text-sky-400" />}
        title={t({ en: 'The Legal Landscape is Changing', es: 'El Panorama Legal Esta Cambiando' })}
        desc={t({
          en: 'The EU Digital Services Act (2025), California CPRA, and updated FTC guidelines now explicitly target dark patterns. Designers who understand these laws protect their companies from fines of up to 6% of global revenue. Ethical design is no longer optional — it\'s a legal requirement.',
          es: 'El Acta de Servicios Digitales de la UE (2025), la CPRA de California y las directrices actualizadas de la FTC ahora apuntan explicitamente a patrones oscuros. Los disenadores que entienden estas leyes protegen a sus empresas de multas de hasta el 6% de los ingresos globales. El diseno etico ya no es opcional — es un requisito legal.'
        })}
        color="border-sky-500/20 bg-sky-500/5"
      />
    </div>
  );
}


// ═══════════════════════════════════════════════════════════════
// MAIN EXPORTED COMPONENT
// ═══════════════════════════════════════════════════════════════

export function DarkPatternsLab() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<LabTab>('detective');

  const tabContent: Record<LabTab, React.ReactNode> = {
    detective: (
      <>
        <SectionHeader
          icon={<Search className="size-5 text-red-400" />}
          title={t({ en: 'Pattern Detective: Identify the Dark Pattern', es: 'Detective de Patrones: Identifica el Patron Oscuro' })}
          desc={t({ en: 'You\'ll see 6 real-world UI scenarios. Each one uses a specific dark pattern. Can you identify which one? Study the mock UI carefully — the devil is in the details.', es: 'Veras 6 escenarios UI del mundo real. Cada uno usa un patron oscuro especifico. Puedes identificar cual? Estudia la UI de ejemplo cuidadosamente — el diablo esta en los detalles.' })}
        />
        <PatternDetectiveDemo />
      </>
    ),
    comparison: (
      <>
        <SectionHeader
          icon={<Scale className="size-5 text-amber-400" />}
          title={t({ en: 'Dark vs Ethical: Side-by-Side', es: 'Oscuro vs Etico: Lado a Lado' })}
          desc={t({ en: 'The same functionality, designed two ways. On the left: the manipulative version you see on many sites. On the right: the ethical alternative. Notice how small changes in copy, button sizing, and defaults completely change the user experience.', es: 'La misma funcionalidad, disenada de dos formas. A la izquierda: la version manipuladora que ves en muchos sitios. A la derecha: la alternativa etica. Nota como pequenos cambios en copy, tamano de botones y valores por defecto cambian completamente la experiencia del usuario.' })}
        />
        <DarkVsEthicalDemo />
      </>
    ),
    audit: (
      <>
        <SectionHeader
          icon={<ShieldAlert className="size-5 text-violet-400" />}
          title={t({ en: 'Manipulation Meter: Audit Your Design', es: 'Medidor de Manipulacion: Audita tu Diseno' })}
          desc={t({ en: 'Think of a real product you use or one you\'re designing. Rate each aspect honestly. The meter will tell you if your design is ethical, borderline, or crosses the line into dark patterns. Scores above 50% risk legal consequences.', es: 'Piensa en un producto real que uses o uno que estes disenando. Califica cada aspecto honestamente. El medidor te dira si tu diseno es etico, en el limite, o cruza la linea hacia patrones oscuros. Puntajes sobre 50% arriesgan consecuencias legales.' })}
        />
        <ManipulationMeterDemo />
      </>
    ),
    redesign: (
      <>
        <SectionHeader
          icon={<Sparkles className="size-5 text-emerald-400" />}
          title={t({ en: 'Redesign Challenge: Fix the Dark Pattern', es: 'Reto de Rediseno: Corrige el Patron Oscuro' })}
          desc={t({ en: 'You\'re given a dark pattern and 4 possible redesigns. Select ALL the ethical options — careful, some look ethical but still subtly manipulate. This tests your ability to distinguish genuinely respectful design from "ethical-washing".', es: 'Se te presenta un patron oscuro y 4 posibles redisenos. Selecciona TODAS las opciones eticas — cuidado, algunas parecen eticas pero aun manipulan sutilmente. Esto prueba tu habilidad para distinguir diseno genuinamente respetuoso del "ethical-washing".' })}
        />
        <RedesignChallengeDemo />
      </>
    ),
    legal: (
      <>
        <SectionHeader
          icon={<Gavel className="size-5 text-sky-400" />}
          title={t({ en: 'Legal Consequences: $1.8B+ in Fines', es: 'Consecuencias Legales: $1.8B+ en Multas' })}
          desc={t({ en: 'Dark patterns aren\'t just unethical — they\'re increasingly illegal. This timeline shows real enforcement actions against major companies. Click each case to learn what they did wrong and which laws they violated.', es: 'Los patrones oscuros no son solo poco eticos — son cada vez mas ilegales. Esta linea de tiempo muestra acciones de aplicacion reales contra empresas importantes. Haz clic en cada caso para aprender que hicieron mal y que leyes violaron.' })}
        />
        <LegalConsequencesDemo />
      </>
    ),
  };

  return (
    <div className="w-full max-w-5xl mx-auto space-y-8 mt-12">
      {/* Header */}
      <div className="text-center space-y-3">
        <div className="flex items-center justify-center gap-3">
          <ShieldAlert className="size-8 text-red-400" />
          <h3 className="text-3xl font-bold text-white">
            {t({ en: 'Dark Patterns Lab', es: 'Laboratorio de Patrones Oscuros' })}
          </h3>
        </div>
        <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
          {t({
            en: 'Learn to recognize, audit, and redesign manipulative UI patterns. These demos use real examples from companies fined millions for deceptive design.',
            es: 'Aprende a reconocer, auditar y redisenar patrones UI manipuladores. Estas demos usan ejemplos reales de empresas multadas con millones por diseno enganoso.'
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

      {/* Ethical design principles summary */}
      <div className="bg-emerald-500/3 border border-emerald-500/20 rounded-xl p-5">
        <h4 className="text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-3 flex items-center gap-2">
          <ShieldCheck className="size-4" />
          {t({ en: 'The Ethical Design Checklist', es: 'El Checklist de Diseno Etico' })}
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {[
            { icon: <Unlock className="size-3.5 text-emerald-400" />, text: { en: 'Cancellation is as easy as sign-up', es: 'Cancelar es tan facil como registrarse' } },
            { icon: <DollarSign className="size-3.5 text-emerald-400" />, text: { en: 'All costs visible upfront', es: 'Todos los costos visibles desde el inicio' } },
            { icon: <Lock className="size-3.5 text-emerald-400" />, text: { en: 'Privacy-first defaults', es: 'Privacidad como valor por defecto' } },
            { icon: <Users className="size-3.5 text-emerald-400" />, text: { en: 'Equal visual weight for all options', es: 'Igual peso visual para todas las opciones' } },
            { icon: <Heart className="size-3.5 text-emerald-400" />, text: { en: 'Respectful, neutral copy', es: 'Copy respetuoso y neutral' } },
            { icon: <Eye className="size-3.5 text-emerald-400" />, text: { en: 'Opt-in, never opt-out', es: 'Opt-in, nunca opt-out' } },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 bg-emerald-500/5 rounded-lg px-3 py-2">
              {item.icon}
              <span className="text-[10px] text-zinc-300">{t(item.text)}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
