import React, { useState } from 'react';
import { useLanguage } from '../layout/LanguageContext';
import { motion } from 'motion/react';
import {
  Target, TrendingUp, ArrowRightLeft, BarChart3, Timer,
  ArrowDownRight, Percent, Star, ThumbsUp, Activity,
  Compass, Eye, EyeOff, Lightbulb, PenLine, ChevronRight,
  CheckCircle2, XCircle, Sparkles, MoveHorizontal
} from 'lucide-react';

// ─── Mobile Scroll Wrapper ────────────────────────────────────
function MobileScrollWrapper({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const { t } = useLanguage();
  return (
    <div className={className}>
      {/* Swipe hint - visible only on small screens */}
      <div className="flex items-center justify-end gap-1.5 mb-2 md:hidden">
        <MoveHorizontal className="size-3.5 text-zinc-500" />
        <span className="text-[11px] text-zinc-500 font-medium">
          {t({ en: 'Swipe to explore', es: 'Desliza para explorar' })}
        </span>
      </div>
      {/* Scroll container with hidden native scrollbar */}
      <div className="relative">
        <div
          className="overflow-x-auto"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' } as React.CSSProperties}
        >
          <style>{`.mobile-scroll-hide::-webkit-scrollbar { display: none; }`}</style>
          <div className="mobile-scroll-hide" style={{ overflow: 'inherit' }}>
            {children}
          </div>
        </div>
        {/* Fade hint on right edge - mobile only */}
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-zinc-950/80 to-transparent pointer-events-none md:hidden" />
      </div>
    </div>
  );
}

// ─── Business Goals vs UX Goals Comparison Table ──────────────
function GoalsComparisonTable() {
  const { t } = useLanguage();

  const rows = [
    {
      business: { en: 'Increase revenue by 20%', es: 'Aumentar ingresos en 20%' },
      ux: { en: 'Reduce checkout friction → higher conversion', es: 'Reducir fricción en checkout → mayor conversión' },
      connection: { en: 'Fewer drop-offs = more completed purchases', es: 'Menos abandonos = más compras completadas' },
    },
    {
      business: { en: 'Reduce support costs by 30%', es: 'Reducir costos de soporte en 30%' },
      ux: { en: 'Improve onboarding clarity → fewer confused users', es: 'Mejorar claridad del onboarding → menos usuarios confundidos' },
      connection: { en: 'Self-service success = fewer support tickets', es: 'Éxito de autoservicio = menos tickets de soporte' },
    },
    {
      business: { en: 'Grow monthly active users to 50K', es: 'Crecer usuarios activos mensuales a 50K' },
      ux: { en: 'Increase feature discoverability → higher engagement', es: 'Aumentar descubribilidad de features → mayor engagement' },
      connection: { en: 'Users who find value stay active longer', es: 'Usuarios que encuentran valor permanecen activos más tiempo' },
    },
    {
      business: { en: 'Improve customer retention by 15%', es: 'Mejorar retención de clientes en 15%' },
      ux: { en: 'Streamline recurring task flows → less frustration', es: 'Simplificar flujos de tareas recurrentes → menos frustración' },
      connection: { en: 'Efficient workflows build habit loops', es: 'Flujos eficientes construyen loops de hábito' },
    },
  ];

  return (
    <section id="goals-comparison" className="mb-12 scroll-mt-24">
      <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
        <ArrowRightLeft className="size-6 text-blue-400" />
        {t({ en: 'Business Goals vs UX Goals', es: 'Objetivos de Negocio vs Objetivos UX' })}
      </h2>
      <p className="text-zinc-400 mb-6 leading-relaxed">
        {t({
          en: 'Business goals and UX goals are not opposing forces — they\'re two sides of the same coin. Every UX improvement should connect to a business outcome, and every business target should consider the user experience required to achieve it.',
          es: 'Los objetivos de negocio y los objetivos UX no son fuerzas opuestas — son dos caras de la misma moneda. Cada mejora UX debería conectarse a un resultado de negocio, y cada meta de negocio debería considerar la experiencia de usuario necesaria para lograrla.'
        })}
      </p>

      <MobileScrollWrapper>
        <div className="min-w-[640px]">
          {/* Header */}
          <div className="grid grid-cols-3 gap-px bg-zinc-800 rounded-t-xl overflow-hidden">
            <div className="bg-indigo-500/10 px-5 py-3.5">
              <div className="flex items-center gap-2">
                <TrendingUp className="size-4 text-indigo-400" />
                <span className="text-sm font-semibold text-indigo-300">
                  {t({ en: 'Business Goal', es: 'Objetivo de Negocio' })}
                </span>
              </div>
            </div>
            <div className="bg-emerald-500/10 px-5 py-3.5">
              <div className="flex items-center gap-2">
                <Target className="size-4 text-emerald-400" />
                <span className="text-sm font-semibold text-emerald-300">
                  {t({ en: 'UX Goal', es: 'Objetivo UX' })}
                </span>
              </div>
            </div>
            <div className="bg-amber-500/10 px-5 py-3.5">
              <div className="flex items-center gap-2">
                <Lightbulb className="size-4 text-amber-400" />
                <span className="text-sm font-semibold text-amber-300">
                  {t({ en: 'How They Connect', es: 'Cómo Se Conectan' })}
                </span>
              </div>
            </div>
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <div
              key={i}
              className={`grid grid-cols-3 gap-px bg-zinc-800 ${i === rows.length - 1 ? 'rounded-b-xl overflow-hidden' : ''}`}
            >
              <div className="bg-zinc-900/80 px-5 py-4">
                <p className="text-sm text-zinc-200">{t(row.business)}</p>
              </div>
              <div className="bg-zinc-900/80 px-5 py-4">
                <p className="text-sm text-zinc-300">{t(row.ux)}</p>
              </div>
              <div className="bg-zinc-900/80 px-5 py-4">
                <p className="text-sm text-zinc-400 italic">{t(row.connection)}</p>
              </div>
            </div>
          ))}
        </div>
      </MobileScrollWrapper>
    </section>
  );
}

// ─── UX KPIs Visual Cards ─────────────────────────────────────
function UxKpiCards() {
  const { t } = useLanguage();

  const kpis = [
    {
      name: 'Task Success Rate',
      icon: CheckCircle2,
      color: 'text-green-400',
      bg: 'bg-green-500/10',
      border: 'border-green-500/20',
      definition: {
        en: 'Percentage of users who complete a given task without errors.',
        es: 'Porcentaje de usuarios que completan una tarea sin errores.'
      },
      benchmark: { en: 'Target: >80%', es: 'Objetivo: >80%' },
    },
    {
      name: 'Time on Task',
      icon: Timer,
      color: 'text-blue-400',
      bg: 'bg-blue-500/10',
      border: 'border-blue-500/20',
      definition: {
        en: 'Average time users take to complete a specific task.',
        es: 'Tiempo promedio que toman los usuarios para completar una tarea específica.'
      },
      benchmark: { en: 'Lower = better', es: 'Menor = mejor' },
    },
    {
      name: 'Drop-off Rate',
      icon: ArrowDownRight,
      color: 'text-red-400',
      bg: 'bg-red-500/10',
      border: 'border-red-500/20',
      definition: {
        en: 'Percentage of users who abandon a flow at a specific step.',
        es: 'Porcentaje de usuarios que abandonan un flujo en un paso específico.'
      },
      benchmark: { en: 'Target: <20% per step', es: 'Objetivo: <20% por paso' },
    },
    {
      name: 'Conversion Rate',
      icon: Percent,
      color: 'text-amber-400',
      bg: 'bg-amber-500/10',
      border: 'border-amber-500/20',
      definition: {
        en: 'Percentage of users who complete a desired action (signup, purchase, upgrade).',
        es: 'Porcentaje de usuarios que completan una acción deseada (registro, compra, upgrade).'
      },
      benchmark: { en: 'Varies by industry', es: 'Varía por industria' },
    },
    {
      name: 'NPS',
      nameExpanded: 'Net Promoter Score',
      icon: Star,
      color: 'text-purple-400',
      bg: 'bg-purple-500/10',
      border: 'border-purple-500/20',
      definition: {
        en: '"How likely are you to recommend this product?" Scored -100 to +100.',
        es: '"¿Qué tan probable es que recomiendes este producto?" Puntuación de -100 a +100.'
      },
      benchmark: { en: 'Good: >30 · Great: >50', es: 'Bueno: >30 · Excelente: >50' },
    },
    {
      name: 'CSAT',
      nameExpanded: 'Customer Satisfaction Score',
      icon: ThumbsUp,
      color: 'text-cyan-400',
      bg: 'bg-cyan-500/10',
      border: 'border-cyan-500/20',
      definition: {
        en: '"How satisfied are you with this experience?" Usually 1-5 scale.',
        es: '"¿Qué tan satisfecho estás con esta experiencia?" Usualmente escala 1-5.'
      },
      benchmark: { en: 'Target: >4.0/5.0', es: 'Objetivo: >4.0/5.0' },
    },
    {
      name: 'SUS',
      nameExpanded: 'System Usability Scale',
      icon: Activity,
      color: 'text-pink-400',
      bg: 'bg-pink-500/10',
      border: 'border-pink-500/20',
      definition: {
        en: '10-question standardized usability questionnaire. Scored 0-100.',
        es: 'Cuestionario estandarizado de usabilidad de 10 preguntas. Puntuación 0-100.'
      },
      benchmark: { en: 'Average: 68 · Good: >80', es: 'Promedio: 68 · Bueno: >80' },
    },
  ];

  return (
    <section id="ux-kpis" className="mb-12 scroll-mt-24">
      <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
        <BarChart3 className="size-6 text-indigo-400" />
        {t({ en: 'UX KPIs Every Designer Should Know', es: 'KPIs UX que Todo Diseñador Debe Conocer' })}
      </h2>
      <p className="text-zinc-400 mb-6 leading-relaxed">
        {t({
          en: 'These are the metrics that directly reflect the quality of user experience. Learn them, track them, and use them to justify your design decisions.',
          es: 'Estas son las métricas que reflejan directamente la calidad de la experiencia de usuario. Apréndelas, rastréalas y úsalas para justificar tus decisiones de diseño.'
        })}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {kpis.map((kpi, i) => {
          const Icon = kpi.icon;
          return (
            <motion.div
              key={kpi.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`rounded-xl border ${kpi.border} ${kpi.bg} p-5 flex flex-col gap-3`}
            >
              <div className="flex items-center gap-3">
                <Icon className={`size-5 ${kpi.color}`} />
                <div>
                  <h4 className="text-sm font-bold text-white">{kpi.name}</h4>
                  {kpi.nameExpanded && (
                    <p className="text-[11px] text-zinc-500">{kpi.nameExpanded}</p>
                  )}
                </div>
              </div>
              <p className="text-sm text-zinc-300 leading-relaxed flex-1">{t(kpi.definition)}</p>
              <div className={`text-xs font-medium ${kpi.color} opacity-80`}>
                {t(kpi.benchmark)}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

// ─── North Star Metric Section ────────────────────────────────
function NorthStarSection() {
  const { t } = useLanguage();

  const examples = [
    {
      company: 'Spotify',
      metric: { en: 'Time Spent Listening', es: 'Tiempo Escuchando' },
      why: { en: 'Captures value for users (enjoying music) and business (ad revenue + retention).', es: 'Captura valor para usuarios (disfrutar música) y negocio (ingresos por ads + retención).' },
      color: 'text-green-400',
      bg: 'bg-green-500/10',
      border: 'border-green-500/20',
    },
    {
      company: 'Airbnb',
      metric: { en: 'Nights Booked', es: 'Noches Reservadas' },
      why: { en: 'Represents the core transaction between guests and hosts.', es: 'Representa la transacción central entre huéspedes y anfitriones.' },
      color: 'text-rose-400',
      bg: 'bg-rose-500/10',
      border: 'border-rose-500/20',
    },
    {
      company: 'Slack',
      metric: { en: 'Messages Sent per Team per Week', es: 'Mensajes Enviados por Equipo por Semana' },
      why: { en: 'Indicates active collaboration — the core value Slack provides.', es: 'Indica colaboración activa — el valor central que Slack provee.' },
      color: 'text-purple-400',
      bg: 'bg-purple-500/10',
      border: 'border-purple-500/20',
    },
  ];

  return (
    <section id="north-star" className="mb-12 scroll-mt-24">
      <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
        <Compass className="size-6 text-amber-400" />
        {t({ en: 'The North Star Metric', es: 'La Métrica North Star' })}
      </h2>

      {/* Callout definition */}
      <div className="bg-gradient-to-br from-amber-950/30 to-orange-950/20 border border-amber-500/20 rounded-2xl p-6 mb-6">
        <p className="text-zinc-200 leading-relaxed">
          {t({
            en: 'The North Star Metric is the single most important metric that captures the core value your product delivers to customers. It\'s the one number the entire company — design, engineering, product, marketing — should be working to improve. A good North Star Metric: (1) represents value delivered to the user, (2) is a leading indicator of revenue, and (3) is something every team can influence.',
            es: 'La Métrica North Star es la métrica más importante que captura el valor central que tu producto entrega a clientes. Es el número único que toda la empresa — diseño, ingeniería, producto, marketing — debería estar trabajando para mejorar. Una buena Métrica North Star: (1) representa valor entregado al usuario, (2) es un indicador adelantado de ingresos, y (3) es algo que cada equipo puede influenciar.'
          })}
        </p>
      </div>

      {/* Product examples */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {examples.map((ex, i) => (
          <motion.div
            key={ex.company}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className={`rounded-xl border ${ex.border} ${ex.bg} p-5`}
          >
            <p className="text-xs font-bold uppercase tracking-wider text-zinc-500 mb-2">{ex.company}</p>
            <h4 className={`text-lg font-bold ${ex.color} mb-3`}>{t(ex.metric)}</h4>
            <p className="text-sm text-zinc-400 leading-relaxed">{t(ex.why)}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// ─── Vanity vs Real Metrics ───────────────────────────────────
function VanityVsRealSection() {
  const { t } = useLanguage();

  const pairs = [
    {
      vanity: { en: 'Total app downloads', es: 'Descargas totales de la app' },
      real: { en: 'Day-7 retention rate', es: 'Tasa de retención al día 7' },
    },
    {
      vanity: { en: 'Registered users', es: 'Usuarios registrados' },
      real: { en: 'Monthly active users (MAU)', es: 'Usuarios activos mensuales (MAU)' },
    },
    {
      vanity: { en: 'Page views per month', es: 'Vistas de página por mes' },
      real: { en: 'Conversion rate per visit', es: 'Tasa de conversión por visita' },
    },
    {
      vanity: { en: 'Social media followers', es: 'Seguidores en redes sociales' },
      real: { en: 'Referral sign-up rate', es: 'Tasa de registro por referidos' },
    },
    {
      vanity: { en: 'Time on page (high)', es: 'Tiempo en página (alto)' },
      real: { en: 'Task completion rate', es: 'Tasa de completación de tareas' },
    },
  ];

  return (
    <section id="vanity-vs-real" className="mb-12 scroll-mt-24">
      <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
        <Eye className="size-6 text-rose-400" />
        {t({ en: 'Vanity Metrics vs Real Metrics', es: 'Métricas Vanidad vs Métricas Reales' })}
      </h2>
      <p className="text-zinc-400 mb-6 leading-relaxed">
        {t({
          en: 'Vanity metrics make you feel good but don\'t help you make decisions. Real metrics are actionable — they tell you what to change and whether your changes worked.',
          es: 'Las métricas vanidad te hacen sentir bien pero no te ayudan a tomar decisiones. Las métricas reales son accionables — te dicen qué cambiar y si tus cambios funcionaron.'
        })}
      </p>

      <MobileScrollWrapper>
        <div className="min-w-[480px]">
          {/* Header */}
          <div className="grid grid-cols-2 gap-px bg-zinc-800 rounded-t-xl overflow-hidden">
            <div className="bg-red-500/10 px-5 py-3.5 flex items-center gap-2">
              <EyeOff className="size-4 text-red-400" />
              <span className="text-sm font-semibold text-red-300">
                {t({ en: 'Vanity Metric', es: 'Métrica Vanidad' })}
              </span>
              <XCircle className="size-3.5 text-red-500/50 ml-auto" />
            </div>
            <div className="bg-green-500/10 px-5 py-3.5 flex items-center gap-2">
              <Eye className="size-4 text-green-400" />
              <span className="text-sm font-semibold text-green-300">
                {t({ en: 'Real Metric', es: 'Métrica Real' })}
              </span>
              <CheckCircle2 className="size-3.5 text-green-500/50 ml-auto" />
            </div>
          </div>

          {/* Rows */}
          {pairs.map((pair, i) => (
            <div
              key={i}
              className={`grid grid-cols-2 gap-px bg-zinc-800 ${i === pairs.length - 1 ? 'rounded-b-xl overflow-hidden' : ''}`}
            >
              <div className="bg-zinc-900/80 px-5 py-3.5 flex items-center gap-2">
                <span className="text-sm text-zinc-400 line-through decoration-red-500/40">{t(pair.vanity)}</span>
              </div>
              <div className="bg-zinc-900/80 px-5 py-3.5 flex items-center gap-2">
                <span className="text-sm text-zinc-200 font-medium">{t(pair.real)}</span>
              </div>
            </div>
          ))}
        </div>
      </MobileScrollWrapper>
    </section>
  );
}

// ─── Workshop Exercise Section ────────────────────────────────
function WorkshopExercise() {
  const { t } = useLanguage();
  const [goal, setGoal] = useState('');
  const [uxProblem, setUxProblem] = useState('');
  const [hypothesis, setHypothesis] = useState('');
  const [kpi, setKpi] = useState('');

  const exampleFlow = {
    goal: {
      en: 'Increase trial-to-paid conversion from 12% to 20%',
      es: 'Aumentar conversión de prueba a pago de 12% a 20%'
    },
    uxProblem: {
      en: '60% of trial users drop off at the payment step — they don\'t understand what they\'ll lose',
      es: '60% de usuarios de prueba abandonan en el paso de pago — no entienden qué perderán'
    },
    hypothesis: {
      en: 'Adding a value comparison screen before payment will increase conversion by 8%',
      es: 'Agregar una pantalla de comparación de valor antes del pago aumentará conversión en 8%'
    },
    kpi: {
      en: 'Primary: trial-to-paid conversion · Secondary: step 3 drop-off rate',
      es: 'Primario: conversión de prueba a pago · Secundario: tasa de abandono del paso 3'
    },
  };

  return (
    <section id="workshop" className="mb-12 scroll-mt-24">
      <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
        <PenLine className="size-6 text-violet-400" />
        {t({ en: 'Workshop Exercise', es: 'Ejercicio de Taller' })}
      </h2>

      <div className="bg-gradient-to-br from-violet-950/30 to-indigo-950/20 border-2 border-dashed border-violet-500/30 rounded-2xl p-6 md:p-8">
        <div className="flex items-center gap-3 mb-6">
          <Sparkles className="size-5 text-violet-400" />
          <h3 className="text-lg font-bold text-white">
            {t({ en: 'Goals-to-Metrics Mapping', es: 'Mapeo de Objetivos a Métricas' })}
          </h3>
        </div>

        <p className="text-zinc-300 mb-6 leading-relaxed">
          {t({
            en: 'Practice the core framework from this lesson. Fill in each box thinking about a real or imaginary product. Follow the chain: every field should logically connect to the next.',
            es: 'Practica el framework central de esta lección. Llena cada caja pensando en un producto real o imaginario. Sigue la cadena: cada campo debería conectar lógicamente con el siguiente.'
          })}
        </p>

        {/* Flow chain */}
        <div className="space-y-4 mb-8">
          {/* Step 1 */}
          <div>
            <label className="flex items-center gap-2 text-sm font-semibold text-indigo-300 mb-2">
              <TrendingUp className="size-4" />
              {t({ en: 'Business Goal', es: 'Objetivo de Negocio' })}
            </label>
            <input
              type="text"
              value={goal}
              onChange={e => setGoal(e.target.value)}
              placeholder={t(exampleFlow.goal)}
              className="w-full bg-zinc-900/80 border border-zinc-700 rounded-lg px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500/30 transition-colors"
            />
          </div>

          <div className="flex justify-center">
            <ChevronRight className="size-5 text-zinc-600 rotate-90" />
          </div>

          {/* Step 2 */}
          <div>
            <label className="flex items-center gap-2 text-sm font-semibold text-emerald-300 mb-2">
              <Target className="size-4" />
              {t({ en: 'UX Problem', es: 'Problema UX' })}
            </label>
            <input
              type="text"
              value={uxProblem}
              onChange={e => setUxProblem(e.target.value)}
              placeholder={t(exampleFlow.uxProblem)}
              className="w-full bg-zinc-900/80 border border-zinc-700 rounded-lg px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500/30 transition-colors"
            />
          </div>

          <div className="flex justify-center">
            <ChevronRight className="size-5 text-zinc-600 rotate-90" />
          </div>

          {/* Step 3 */}
          <div>
            <label className="flex items-center gap-2 text-sm font-semibold text-amber-300 mb-2">
              <Lightbulb className="size-4" />
              {t({ en: 'Design Hypothesis', es: 'Hipótesis de Diseño' })}
            </label>
            <textarea
              value={hypothesis}
              onChange={e => setHypothesis(e.target.value)}
              placeholder={t(exampleFlow.hypothesis)}
              rows={2}
              className="w-full bg-zinc-900/80 border border-zinc-700 rounded-lg px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500/30 transition-colors resize-none"
            />
          </div>

          <div className="flex justify-center">
            <ChevronRight className="size-5 text-zinc-600 rotate-90" />
          </div>

          {/* Step 4 */}
          <div>
            <label className="flex items-center gap-2 text-sm font-semibold text-rose-300 mb-2">
              <BarChart3 className="size-4" />
              {t({ en: 'KPIs to Track', es: 'KPIs a Rastrear' })}
            </label>
            <input
              type="text"
              value={kpi}
              onChange={e => setKpi(e.target.value)}
              placeholder={t(exampleFlow.kpi)}
              className="w-full bg-zinc-900/80 border border-zinc-700 rounded-lg px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500/30 transition-colors"
            />
          </div>
        </div>

        {/* Tip */}
        <div className="bg-zinc-900/50 border border-zinc-700/50 rounded-xl px-5 py-4">
          <p className="text-xs text-zinc-400 leading-relaxed">
            <span className="font-semibold text-violet-300">
              {t({ en: 'Pro tip:', es: 'Consejo pro:' })}
            </span>{' '}
            {t({
              en: 'Try this exercise with a product you use daily (Spotify, Netflix, your company\'s app). It trains you to think in business terms naturally. In your next stakeholder meeting, present your design decisions using this exact framework.',
              es: 'Prueba este ejercicio con un producto que uses diariamente (Spotify, Netflix, la app de tu empresa). Te entrena para pensar en términos de negocio naturalmente. En tu próxima reunión con stakeholders, presenta tus decisiones de diseño usando exactamente este framework.'
            })}
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── Goals-to-Metrics Flow Diagram ────────────────────────────
function GoalsToMetricsFlow() {
  const { t } = useLanguage();

  const steps = [
    {
      label: { en: 'Business Goal', es: 'Objetivo de Negocio' },
      example: { en: 'Increase trial-to-paid conversion from 12% to 20%', es: 'Aumentar conversión de prueba a pago de 12% a 20%' },
      color: 'border-indigo-500/40 bg-indigo-500/5',
      iconColor: 'text-indigo-400',
      icon: TrendingUp,
    },
    {
      label: { en: 'UX Problem', es: 'Problema UX' },
      example: { en: '60% drop off at payment step — unclear value proposition', es: '60% abandona en paso de pago — propuesta de valor confusa' },
      color: 'border-emerald-500/40 bg-emerald-500/5',
      iconColor: 'text-emerald-400',
      icon: Target,
    },
    {
      label: { en: 'Design Hypothesis', es: 'Hipótesis de Diseño' },
      example: { en: 'Value comparison screen before payment → +8% conversion', es: 'Pantalla de comparación de valor antes del pago → +8% conversión' },
      color: 'border-amber-500/40 bg-amber-500/5',
      iconColor: 'text-amber-400',
      icon: Lightbulb,
    },
    {
      label: { en: 'KPI to Track', es: 'KPI a Rastrear' },
      example: { en: 'Trial-to-paid rate · Step 3 drop-off · CTA click-through', es: 'Tasa prueba a pago · Abandono paso 3 · Clics en CTA' },
      color: 'border-rose-500/40 bg-rose-500/5',
      iconColor: 'text-rose-400',
      icon: BarChart3,
    },
  ];

  return (
    <section id="goals-to-metrics" className="mb-12 scroll-mt-24">
      <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
        <TrendingUp className="size-6 text-emerald-400" />
        {t({ en: 'Translating Goals into Metrics', es: 'Traduciendo Objetivos en Métricas' })}
      </h2>
      <p className="text-zinc-400 mb-6 leading-relaxed">
        {t({
          en: 'This is the core framework of the lesson. Every design project should follow this chain — it ensures your work is connected to real business outcomes.',
          es: 'Este es el framework central de la lección. Cada proyecto de diseño debería seguir esta cadena — asegura que tu trabajo esté conectado a resultados reales de negocio.'
        })}
      </p>

      {/* Flow chain */}
      <div className="flex flex-col gap-3">
        {steps.map((step, i) => {
          const Icon = step.icon;
          return (
            <React.Fragment key={i}>
              <motion.div
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`rounded-xl border ${step.color} p-5 flex items-start gap-4`}
              >
                <Icon className={`size-5 shrink-0 mt-0.5 ${step.iconColor}`} />
                <div>
                  <p className={`text-xs font-bold uppercase tracking-wider ${step.iconColor} mb-1`}>
                    {t(step.label)}
                  </p>
                  <p className="text-sm text-zinc-200">{t(step.example)}</p>
                </div>
              </motion.div>
              {i < steps.length - 1 && (
                <div className="flex justify-center">
                  <ChevronRight className="size-5 text-zinc-600 rotate-90" />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
}

// ─── Main Export ───────────────────────────────────────────────
export function BusinessGoalsExtras() {
  return (
    <>
      <GoalsComparisonTable />
      <UxKpiCards />
      <GoalsToMetricsFlow />
      <NorthStarSection />
      <VanityVsRealSection />
      <WorkshopExercise />
    </>
  );
}