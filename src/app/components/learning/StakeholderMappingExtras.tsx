import React, { useState } from 'react';
import { useLanguage } from '../layout/LanguageContext';
import { motion } from 'motion/react';
import {
  Users, Crown, Eye, Radio, Target, MessageSquare,
  AlertTriangle, Shield, TrendingUp, ArrowRight,
  ChevronRight, Sparkles, PenLine, Building2,
  Zap, Scale, CircleDot, Megaphone, BarChart3,
  UserCheck, GitBranch
} from 'lucide-react';

// ─── Section 1: What is a Stakeholder ─────────────────────────
function WhatIsStakeholder() {
  const { t } = useLanguage();

  const examples = [
    {
      role: { en: 'Product Manager', es: 'Product Manager' },
      why: { en: 'Defines scope, priorities, and success criteria. Your closest collaborator.', es: 'Define alcance, prioridades y criterios de éxito. Tu colaborador más cercano.' },
      icon: Target,
      color: 'text-blue-400',
      bg: 'bg-blue-500/10',
      border: 'border-blue-500/20',
    },
    {
      role: { en: 'Engineering Lead', es: 'Líder de Ingeniería' },
      why: { en: 'Determines technical feasibility and implementation timeline. Can veto complex interactions.', es: 'Determina viabilidad técnica y timeline de implementación. Puede vetar interacciones complejas.' },
      icon: GitBranch,
      color: 'text-green-400',
      bg: 'bg-green-500/10',
      border: 'border-green-500/20',
    },
    {
      role: { en: 'VP of Product / CTO', es: 'VP de Producto / CTO' },
      why: { en: 'Controls budget and strategic direction. One email can change your entire roadmap.', es: 'Controla presupuesto y dirección estratégica. Un email puede cambiar todo tu roadmap.' },
      icon: Crown,
      color: 'text-amber-400',
      bg: 'bg-amber-500/10',
      border: 'border-amber-500/20',
    },
    {
      role: { en: 'Customer Support', es: 'Soporte al Cliente' },
      why: { en: 'Hears user pain daily. Knows which flows generate the most tickets and complaints.', es: 'Escucha el dolor del usuario diariamente. Sabe qué flujos generan más tickets y quejas.' },
      icon: MessageSquare,
      color: 'text-cyan-400',
      bg: 'bg-cyan-500/10',
      border: 'border-cyan-500/20',
    },
    {
      role: { en: 'Legal / Compliance', es: 'Legal / Compliance' },
      why: { en: 'Can block launches due to regulatory requirements. GDPR, PCI-DSS, accessibility laws.', es: 'Puede bloquear lanzamientos por requisitos regulatorios. GDPR, PCI-DSS, leyes de accesibilidad.' },
      icon: Shield,
      color: 'text-rose-400',
      bg: 'bg-rose-500/10',
      border: 'border-rose-500/20',
    },
    {
      role: { en: 'Sales Team', es: 'Equipo de Ventas' },
      why: { en: 'Promises features to close deals. Their pipeline creates pressure on your roadmap.', es: 'Promete features para cerrar deals. Su pipeline crea presión en tu roadmap.' },
      icon: TrendingUp,
      color: 'text-purple-400',
      bg: 'bg-purple-500/10',
      border: 'border-purple-500/20',
    },
  ];

  return (
    <section id="what-is-stakeholder" className="mb-12 scroll-mt-24">
      <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
        <Users className="size-6 text-blue-400" />
        {t({ en: 'What is a Stakeholder?', es: '¿Qué es un Stakeholder?' })}
      </h2>
      <p className="text-zinc-400 mb-6 leading-relaxed">
        {t({
          en: 'A stakeholder is any person or group that can affect — or be affected by — your project\'s outcome. In enterprise environments, they are everywhere: from the executive who controls funding to the support agent who handles the fallout of bad design decisions.',
          es: 'Un stakeholder es cualquier persona o grupo que puede afectar — o verse afectado por — el resultado de tu proyecto. En entornos empresariales, están en todas partes: desde el ejecutivo que controla el financiamiento hasta el agente de soporte que maneja las consecuencias de malas decisiones de diseño.'
        })}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {examples.map((ex, i) => {
          const Icon = ex.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`rounded-xl border ${ex.border} ${ex.bg} p-5 flex flex-col gap-3`}
            >
              <div className="flex items-center gap-3">
                <Icon className={`size-5 ${ex.color}`} />
                <h4 className="text-sm font-bold text-white">{t(ex.role)}</h4>
              </div>
              <p className="text-sm text-zinc-300 leading-relaxed">{t(ex.why)}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

// ─── Section 2: Why Stakeholder Mapping Matters ───────────────
function WhyMappingMatters() {
  const { t } = useLanguage();

  const risks = [
    {
      title: { en: 'Silent Veto', es: 'Veto Silencioso' },
      description: {
        en: 'A stakeholder you never consulted blocks your design in the final review. Three weeks of work — wasted.',
        es: 'Un stakeholder que nunca consultaste bloquea tu diseño en la revisión final. Tres semanas de trabajo — desperdiciadas.'
      },
      color: 'text-red-400',
      bg: 'from-red-950/30 to-red-900/10',
      border: 'border-red-500/20',
    },
    {
      title: { en: 'Invisible Constraints', es: 'Restricciones Invisibles' },
      description: {
        en: 'You design a flow that legal cannot approve, or engineering cannot build within the timeline. Nobody told you because nobody was asked.',
        es: 'Diseñas un flujo que legal no puede aprobar, o ingeniería no puede construir dentro del timeline. Nadie te dijo porque a nadie le preguntaron.'
      },
      color: 'text-amber-400',
      bg: 'from-amber-950/30 to-amber-900/10',
      border: 'border-amber-500/20',
    },
    {
      title: { en: 'Scope Explosion', es: 'Explosión de Alcance' },
      description: {
        en: 'Stakeholders who feel unheard inject last-minute requirements. "We also need this for enterprise clients" — two days before launch.',
        es: 'Stakeholders que se sienten ignorados inyectan requisitos de último momento. "También necesitamos esto para clientes enterprise" — dos días antes del lanzamiento.'
      },
      color: 'text-orange-400',
      bg: 'from-orange-950/30 to-orange-900/10',
      border: 'border-orange-500/20',
    },
    {
      title: { en: 'Political Blindness', es: 'Ceguera Política' },
      description: {
        en: 'Two VPs have competing KPIs. You align with one and unknowingly make an enemy of the other. Your project loses executive support.',
        es: 'Dos VPs tienen KPIs competitivos. Te alineas con uno y sin saberlo te ganas un enemigo del otro. Tu proyecto pierde soporte ejecutivo.'
      },
      color: 'text-purple-400',
      bg: 'from-purple-950/30 to-purple-900/10',
      border: 'border-purple-500/20',
    },
  ];

  return (
    <section id="why-mapping-matters" className="mb-12 scroll-mt-24">
      <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
        <AlertTriangle className="size-6 text-amber-400" />
        {t({ en: 'Why Stakeholder Mapping Matters', es: 'Por Qué Importa el Mapeo de Stakeholders' })}
      </h2>
      <p className="text-zinc-400 mb-6 leading-relaxed">
        {t({
          en: 'Projects fail not because of bad designs, but because of misalignment. Here are the four most common misalignment risks that stakeholder mapping prevents:',
          es: 'Los proyectos fallan no por malos diseños, sino por desalineación. Estos son los cuatro riesgos de desalineación más comunes que el mapeo de stakeholders previene:'
        })}
      </p>

      <div className="space-y-4">
        {risks.map((risk, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className={`bg-gradient-to-r ${risk.bg} border ${risk.border} rounded-xl p-5`}
          >
            <h4 className={`font-bold ${risk.color} mb-2 flex items-center gap-2`}>
              <Zap className="size-4" />
              {t(risk.title)}
            </h4>
            <p className="text-sm text-zinc-300 leading-relaxed">{t(risk.description)}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// ─── Section 3: Power vs Interest Matrix (Visual 2x2) ────────
function PowerInterestMatrix() {
  const { t } = useLanguage();

  const quadrants = [
    {
      position: 'top-left',
      power: 'HIGH',
      interest: 'LOW',
      label: { en: 'Keep Satisfied', es: 'Mantener Satisfecho' },
      strategy: {
        en: 'Send executive summaries at milestones. Never surprise them. Respect their time.',
        es: 'Envía resúmenes ejecutivos en hitos. Nunca los sorprendas. Respeta su tiempo.'
      },
      examples: { en: 'CEO, CFO, CTO', es: 'CEO, CFO, CTO' },
      color: 'bg-amber-500/10 border-amber-500/30',
      textColor: 'text-amber-400',
      icon: Crown,
    },
    {
      position: 'top-right',
      power: 'HIGH',
      interest: 'HIGH',
      label: { en: 'Manage Closely', es: 'Gestionar de Cerca' },
      strategy: {
        en: 'Weekly syncs, co-creation sessions, detailed reviews. These are your key partners.',
        es: 'Syncs semanales, sesiones de co-creación, revisiones detalladas. Estos son tus socios clave.'
      },
      examples: { en: 'PM, Eng Lead, VP Product', es: 'PM, Líder Ing., VP Producto' },
      color: 'bg-red-500/10 border-red-500/30',
      textColor: 'text-red-400',
      icon: Target,
    },
    {
      position: 'bottom-left',
      power: 'LOW',
      interest: 'LOW',
      label: { en: 'Monitor', es: 'Monitorear' },
      strategy: {
        en: 'Minimal effort. Watch for changes in their power or interest level over time.',
        es: 'Esfuerzo mínimo. Observa cambios en su nivel de poder o interés con el tiempo.'
      },
      examples: { en: 'HR, Facilities, Other teams', es: 'RRHH, Instalaciones, Otros equipos' },
      color: 'bg-zinc-500/10 border-zinc-500/30',
      textColor: 'text-zinc-400',
      icon: Eye,
    },
    {
      position: 'bottom-right',
      power: 'LOW',
      interest: 'HIGH',
      label: { en: 'Keep Informed', es: 'Mantener Informado' },
      strategy: {
        en: 'Regular updates, open feedback channels. They are your advocates and early adopters.',
        es: 'Actualizaciones regulares, canales de feedback abiertos. Son tus defensores y early adopters.'
      },
      examples: { en: 'Support, QA, End Users', es: 'Soporte, QA, Usuarios Finales' },
      color: 'bg-blue-500/10 border-blue-500/30',
      textColor: 'text-blue-400',
      icon: Radio,
    },
  ];

  return (
    <section id="power-interest-matrix" className="mb-12 scroll-mt-24">
      <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
        <BarChart3 className="size-6 text-indigo-400" />
        {t({ en: 'Power vs Interest Matrix', es: 'Matriz de Poder vs Interés' })}
      </h2>
      <p className="text-zinc-400 mb-6 leading-relaxed">
        {t({
          en: 'The Mendelow Matrix (1991) is the most widely used stakeholder mapping framework. It plots stakeholders on two axes — Power (ability to impact the project) and Interest (how much they care) — creating four quadrants with distinct engagement strategies.',
          es: 'La Matriz de Mendelow (1991) es el framework de mapeo de stakeholders más utilizado. Ubica stakeholders en dos ejes — Poder (capacidad de impactar el proyecto) e Interés (cuánto les importa) — creando cuatro cuadrantes con estrategias de engagement distintas.'
        })}
      </p>

      {/* Visual Matrix */}
      <div className="relative bg-zinc-900/50 border border-zinc-800 rounded-2xl p-4 sm:p-6 md:p-8">
        {/* Axis labels */}
        <div className="flex items-center justify-center mb-2">
          <span className="text-xs font-bold uppercase tracking-widest text-zinc-500">
            {t({ en: 'Interest', es: 'Interés' })} &rarr;
          </span>
        </div>

        <div className="flex gap-4">
          {/* Y-axis label */}
          <div className="flex items-center justify-center shrink-0" style={{ writingMode: 'vertical-lr' }}>
            <span className="text-xs font-bold uppercase tracking-widest text-zinc-500 rotate-180">
              {t({ en: 'Power', es: 'Poder' })} &rarr;
            </span>
          </div>

          {/* Grid */}
          <div className="flex-1 grid grid-cols-2 gap-2 sm:gap-3">
            {/* Top-left: High Power, Low Interest */}
            {quadrants.slice(0, 2).map((q, i) => {
              const Icon = q.icon;
              return (
                <motion.div
                  key={q.position}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`rounded-xl border ${q.color} p-3 sm:p-4 md:p-5 flex flex-col gap-2 sm:gap-3 min-h-[140px] sm:min-h-[180px]`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5 sm:gap-2">
                    <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
                      <Icon className={`size-4 sm:size-5 shrink-0 ${q.textColor}`} />
                      <h4 className={`text-xs sm:text-sm font-bold ${q.textColor} truncate`}>{t(q.label)}</h4>
                    </div>
                    <div className="flex gap-1 sm:gap-1.5 shrink-0">
                      <span className="text-[9px] sm:text-[10px] font-mono bg-zinc-800 px-1 sm:px-1.5 py-0.5 rounded text-zinc-400">
                        P:{q.power}
                      </span>
                      <span className="text-[9px] sm:text-[10px] font-mono bg-zinc-800 px-1 sm:px-1.5 py-0.5 rounded text-zinc-400">
                        I:{q.interest}
                      </span>
                    </div>
                  </div>
                  <p className="text-[11px] sm:text-xs text-zinc-300 leading-relaxed flex-1">{t(q.strategy)}</p>
                  <div className="text-[10px] sm:text-[11px] text-zinc-500 font-medium italic">
                    {t({ en: 'e.g.', es: 'ej.' })} {t(q.examples)}
                  </div>
                </motion.div>
              );
            })}

            {/* Bottom-left: Low Power, Low Interest */}
            {quadrants.slice(2, 4).map((q, i) => {
              const Icon = q.icon;
              return (
                <motion.div
                  key={q.position}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i + 2) * 0.1 }}
                  className={`rounded-xl border ${q.color} p-3 sm:p-4 md:p-5 flex flex-col gap-2 sm:gap-3 min-h-[140px] sm:min-h-[180px]`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5 sm:gap-2">
                    <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
                      <Icon className={`size-4 sm:size-5 shrink-0 ${q.textColor}`} />
                      <h4 className={`text-xs sm:text-sm font-bold ${q.textColor} truncate`}>{t(q.label)}</h4>
                    </div>
                    <div className="flex gap-1 sm:gap-1.5 shrink-0">
                      <span className="text-[9px] sm:text-[10px] font-mono bg-zinc-800 px-1 sm:px-1.5 py-0.5 rounded text-zinc-400">
                        P:{q.power}
                      </span>
                      <span className="text-[9px] sm:text-[10px] font-mono bg-zinc-800 px-1 sm:px-1.5 py-0.5 rounded text-zinc-400">
                        I:{q.interest}
                      </span>
                    </div>
                  </div>
                  <p className="text-[11px] sm:text-xs text-zinc-300 leading-relaxed flex-1">{t(q.strategy)}</p>
                  <div className="text-[10px] sm:text-[11px] text-zinc-500 font-medium italic">
                    {t({ en: 'e.g.', es: 'ej.' })} {t(q.examples)}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Callout */}
        <div className="mt-4 bg-indigo-500/5 border border-indigo-500/20 rounded-xl px-5 py-3">
          <p className="text-xs text-zinc-400 leading-relaxed">
            <span className="font-semibold text-indigo-300">
              {t({ en: 'Key insight:', es: 'Insight clave:' })}
            </span>{' '}
            {t({
              en: 'The most dangerous quadrant is "Keep Satisfied" (High Power, Low Interest). These stakeholders can kill your project with one email but won\'t warn you in advance because they\'re not paying attention to the details.',
              es: 'El cuadrante más peligroso es "Mantener Satisfecho" (Alto Poder, Bajo Interés). Estos stakeholders pueden matar tu proyecto con un email pero no te advertirán por adelantado porque no están prestando atención a los detalles.'
            })}
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── Section 4: Power vs Influence ────────────────────────────
function PowerVsInfluence() {
  const { t } = useLanguage();

  return (
    <section id="power-vs-influence" className="mb-12 scroll-mt-24">
      <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
        <Scale className="size-6 text-violet-400" />
        {t({ en: 'Power vs Influence', es: 'Poder vs Influencia' })}
      </h2>
      <p className="text-zinc-400 mb-6 leading-relaxed">
        {t({
          en: 'These two concepts are often confused, but the distinction is critical for effective stakeholder management.',
          es: 'Estos dos conceptos se confunden frecuentemente, pero la distinción es crítica para una gestión efectiva de stakeholders.'
        })}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Power */}
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <Crown className="size-6 text-amber-400" />
            <h3 className="text-lg font-bold text-amber-300">
              {t({ en: 'Power', es: 'Poder' })}
            </h3>
          </div>
          <p className="text-sm text-zinc-300 leading-relaxed mb-4">
            {t({
              en: 'Formal authority derived from organizational position. Power is structural — it comes from titles, budget control, and decision-making authority.',
              es: 'Autoridad formal derivada de la posición organizacional. El poder es estructural — viene de títulos, control presupuestario y autoridad de toma de decisiones.'
            })}
          </p>
          <div className="bg-zinc-900/60 rounded-lg p-4">
            <p className="text-xs text-zinc-500 font-semibold mb-2 uppercase tracking-wider">
              {t({ en: 'Example', es: 'Ejemplo' })}
            </p>
            <p className="text-sm text-zinc-300 italic">
              {t({
                en: '"The VP of Engineering can reallocate the team to another project. She doesn\'t need anyone\'s permission — it\'s within her authority."',
                es: '"La VP de Ingeniería puede reasignar al equipo a otro proyecto. No necesita permiso de nadie — está dentro de su autoridad."'
              })}
            </p>
          </div>
        </motion.div>

        {/* Influence */}
        <motion.div
          initial={{ opacity: 0, x: 12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-xl border border-violet-500/20 bg-violet-500/5 p-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <Megaphone className="size-6 text-violet-400" />
            <h3 className="text-lg font-bold text-violet-300">
              {t({ en: 'Influence', es: 'Influencia' })}
            </h3>
          </div>
          <p className="text-sm text-zinc-300 leading-relaxed mb-4">
            {t({
              en: 'Informal sway derived from expertise, respect, or relationships. Influence is earned — it comes from track record, trust, and social capital.',
              es: 'Influencia informal derivada de experiencia, respeto o relaciones. La influencia se gana — viene del historial, confianza y capital social.'
            })}
          </p>
          <div className="bg-zinc-900/60 rounded-lg p-4">
            <p className="text-xs text-zinc-500 font-semibold mb-2 uppercase tracking-wider">
              {t({ en: 'Example', es: 'Ejemplo' })}
            </p>
            <p className="text-sm text-zinc-300 italic">
              {t({
                en: '"The senior engineer has no management authority, but when he says \'this architecture won\'t scale,\' the whole team pauses. His opinion carries weight because he\'s been right before."',
                es: '"El ingeniero senior no tiene autoridad gerencial, pero cuando dice \'esta arquitectura no escalará,\' todo el equipo se detiene. Su opinión tiene peso porque ha tenido razón antes."'
              })}
            </p>
          </div>
        </motion.div>
      </div>

      <div className="mt-4 bg-zinc-900/50 border border-zinc-700/50 rounded-xl px-5 py-4">
        <p className="text-xs text-zinc-400 leading-relaxed">
          <span className="font-semibold text-violet-300">
            {t({ en: 'Why it matters:', es: 'Por qué importa:' })}
          </span>{' '}
          {t({
            en: 'Map both dimensions. A person with low power but high influence can rally a team against your design through hallway conversations. A person with high power but low influence may approve your budget but fail to get their own team to implement it.',
            es: 'Mapea ambas dimensiones. Una persona con bajo poder pero alta influencia puede movilizar a un equipo contra tu diseño a través de conversaciones de pasillo. Una persona con alto poder pero baja influencia puede aprobar tu presupuesto pero fallar en lograr que su propio equipo lo implemente.'
          })}
        </p>
      </div>
    </section>
  );
}

// ─── Section 5: Practical Exercise ────────────────────────────
function PracticalExercise() {
  const { t } = useLanguage();
  const [assignments, setAssignments] = useState<Record<string, string>>({});

  const stakeholders = [
    { name: { en: 'VP of Digital Products', es: 'VP de Productos Digitales' }, hint: { en: 'Controls budget, approves launches', es: 'Controla presupuesto, aprueba lanzamientos' } },
    { name: { en: 'Mobile Engineering Lead', es: 'Líder de Ingeniería Móvil' }, hint: { en: 'Builds the feature, knows technical limits', es: 'Construye el feature, conoce límites técnicos' } },
    { name: { en: 'Customer Support Manager', es: 'Gerente de Soporte al Cliente' }, hint: { en: 'Handles billing complaints daily', es: 'Maneja quejas de facturación diariamente' } },
    { name: { en: 'CFO', es: 'CFO' }, hint: { en: 'Revenue implications, pricing strategy', es: 'Implicaciones de ingresos, estrategia de precios' } },
    { name: { en: 'Marketing Team', es: 'Equipo de Marketing' }, hint: { en: 'Promotes the new flow to customers', es: 'Promueve el nuevo flujo a clientes' } },
    { name: { en: 'QA Team', es: 'Equipo QA' }, hint: { en: 'Tests edge cases, payment failures', es: 'Prueba edge cases, fallos de pago' } },
    { name: { en: 'Regulatory / Compliance', es: 'Regulatorio / Compliance' }, hint: { en: 'Telecom regulations, data privacy', es: 'Regulaciones de telecomunicaciones, privacidad de datos' } },
    { name: { en: 'End Users (Subscribers)', es: 'Usuarios Finales (Suscriptores)' }, hint: { en: 'Buy data packages, experience the flow', es: 'Compran paquetes de datos, experimentan el flujo' } },
  ];

  const quadrantOptions = [
    { value: 'manage-closely', label: { en: 'Manage Closely', es: 'Gestionar de Cerca' }, color: 'text-red-400' },
    { value: 'keep-satisfied', label: { en: 'Keep Satisfied', es: 'Mantener Satisfecho' }, color: 'text-amber-400' },
    { value: 'keep-informed', label: { en: 'Keep Informed', es: 'Mantener Informado' }, color: 'text-blue-400' },
    { value: 'monitor', label: { en: 'Monitor', es: 'Monitorear' }, color: 'text-zinc-400' },
  ];

  return (
    <section id="practical-exercise" className="mb-12 scroll-mt-24">
      <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
        <PenLine className="size-6 text-emerald-400" />
        {t({ en: 'Practical Exercise', es: 'Ejercicio Práctico' })}
      </h2>

      <div className="bg-gradient-to-br from-emerald-950/30 to-teal-950/20 border-2 border-dashed border-emerald-500/30 rounded-2xl p-6 md:p-8">
        <div className="flex items-center gap-3 mb-4">
          <Sparkles className="size-5 text-emerald-400" />
          <h3 className="text-lg font-bold text-white">
            {t({ en: 'Scenario: Mobile Data Purchase Flow', es: 'Escenario: Flujo de Compra de Datos Móviles' })}
          </h3>
        </div>

        <div className="bg-zinc-900/60 border border-zinc-700/50 rounded-xl p-5 mb-6">
          <p className="text-sm text-zinc-200 leading-relaxed">
            {t({
              en: 'You are the UX Designer on Claro\'s mobile app team. The project: redesigning the mobile data purchase flow to reduce drop-off from 45% to under 20%. The flow involves browsing plans, selecting a package, confirming payment, and receiving a confirmation. Multiple departments are involved. Classify each stakeholder into the correct quadrant and think about your engagement strategy.',
              es: 'Eres el Diseñador UX en el equipo de la app móvil de Claro. El proyecto: rediseñar el flujo de compra de datos móviles para reducir el abandono de 45% a menos de 20%. El flujo incluye explorar planes, seleccionar un paquete, confirmar pago y recibir confirmación. Múltiples departamentos están involucrados. Clasifica cada stakeholder en el cuadrante correcto y piensa en tu estrategia de engagement.'
            })}
          </p>
        </div>

        <div className="space-y-3">
          {stakeholders.map((sh, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="bg-zinc-900/80 border border-zinc-700 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center gap-3"
            >
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-white">{t(sh.name)}</p>
                <p className="text-xs text-zinc-500">{t(sh.hint)}</p>
              </div>
              <select
                value={assignments[t(sh.name)] || ''}
                onChange={(e) => setAssignments(prev => ({ ...prev, [t(sh.name)]: e.target.value }))}
                className="bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-sm text-zinc-300 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/30 transition-colors sm:w-48 shrink-0"
              >
                <option value="">{t({ en: 'Select quadrant...', es: 'Seleccionar cuadrante...' })}</option>
                {quadrantOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {t(opt.label)}
                  </option>
                ))}
              </select>
            </motion.div>
          ))}
        </div>

        {/* Tip */}
        <div className="mt-6 bg-zinc-900/50 border border-zinc-700/50 rounded-xl px-5 py-4">
          <p className="text-xs text-zinc-400 leading-relaxed">
            <span className="font-semibold text-emerald-300">
              {t({ en: 'Pro tip:', es: 'Consejo pro:' })}
            </span>{' '}
            {t({
              en: 'There are no "right" answers — stakeholder positioning depends on your specific organizational context. The goal is to practice the thinking process. Discuss your choices with your PM or team lead to calibrate.',
              es: 'No hay respuestas "correctas" — el posicionamiento de stakeholders depende de tu contexto organizacional específico. El objetivo es practicar el proceso de pensamiento. Discute tus elecciones con tu PM o team lead para calibrar.'
            })}
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── Section 6: Communication Strategy ────────────────────────
function CommunicationStrategy() {
  const { t } = useLanguage();

  const strategies = [
    {
      quadrant: { en: 'Manage Closely', es: 'Gestionar de Cerca' },
      power: 'HIGH',
      interest: 'HIGH',
      color: 'text-red-400',
      border: 'border-red-500/20',
      bg: 'bg-red-500/5',
      items: [
        { label: { en: 'Frequency', es: 'Frecuencia' }, value: { en: 'Weekly (or more)', es: 'Semanal (o más)' } },
        { label: { en: 'Format', es: 'Formato' }, value: { en: 'Live meetings, Figma reviews, Slack DM', es: 'Reuniones en vivo, reviews en Figma, Slack DM' } },
        { label: { en: 'Depth', es: 'Profundidad' }, value: { en: 'Full detail — wireframes, rationale, trade-offs', es: 'Detalle completo — wireframes, justificación, trade-offs' } },
        { label: { en: 'Feedback', es: 'Feedback' }, value: { en: 'Interactive — co-creation, real-time annotations', es: 'Interactivo — co-creación, anotaciones en tiempo real' } },
      ]
    },
    {
      quadrant: { en: 'Keep Satisfied', es: 'Mantener Satisfecho' },
      power: 'HIGH',
      interest: 'LOW',
      color: 'text-amber-400',
      border: 'border-amber-500/20',
      bg: 'bg-amber-500/5',
      items: [
        { label: { en: 'Frequency', es: 'Frecuencia' }, value: { en: 'Bi-weekly or at milestones', es: 'Quincenal o en hitos' } },
        { label: { en: 'Format', es: 'Formato' }, value: { en: 'Executive summary email, 5-slide deck', es: 'Email de resumen ejecutivo, deck de 5 slides' } },
        { label: { en: 'Depth', es: 'Profundidad' }, value: { en: 'High-level — outcomes, impact, risks only', es: 'Alto nivel — resultados, impacto, solo riesgos' } },
        { label: { en: 'Feedback', es: 'Feedback' }, value: { en: 'Async — email reply, brief approval meetings', es: 'Async — respuesta por email, reuniones breves de aprobación' } },
      ]
    },
    {
      quadrant: { en: 'Keep Informed', es: 'Mantener Informado' },
      power: 'LOW',
      interest: 'HIGH',
      color: 'text-blue-400',
      border: 'border-blue-500/20',
      bg: 'bg-blue-500/5',
      items: [
        { label: { en: 'Frequency', es: 'Frecuencia' }, value: { en: 'Weekly updates', es: 'Actualizaciones semanales' } },
        { label: { en: 'Format', es: 'Formato' }, value: { en: 'Slack channel, newsletter, shared doc', es: 'Canal de Slack, newsletter, documento compartido' } },
        { label: { en: 'Depth', es: 'Profundidad' }, value: { en: 'Medium — progress, decisions, next steps', es: 'Media — progreso, decisiones, próximos pasos' } },
        { label: { en: 'Feedback', es: 'Feedback' }, value: { en: 'Open — surveys, comment threads, office hours', es: 'Abierto — encuestas, hilos de comentarios, office hours' } },
      ]
    },
    {
      quadrant: { en: 'Monitor', es: 'Monitorear' },
      power: 'LOW',
      interest: 'LOW',
      color: 'text-zinc-400',
      border: 'border-zinc-500/20',
      bg: 'bg-zinc-500/5',
      items: [
        { label: { en: 'Frequency', es: 'Frecuencia' }, value: { en: 'Monthly or as-needed', es: 'Mensual o según necesidad' } },
        { label: { en: 'Format', es: 'Formato' }, value: { en: 'Company-wide updates, public dashboards', es: 'Actualizaciones a nivel empresa, dashboards públicos' } },
        { label: { en: 'Depth', es: 'Profundidad' }, value: { en: 'Minimal — headlines only', es: 'Mínima — solo titulares' } },
        { label: { en: 'Feedback', es: 'Feedback' }, value: { en: 'Passive — available if they seek it', es: 'Pasivo — disponible si lo buscan' } },
      ]
    },
  ];

  return (
    <section id="communication-strategy" className="mb-12 scroll-mt-24">
      <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
        <MessageSquare className="size-6 text-cyan-400" />
        {t({ en: 'Communication Strategy per Quadrant', es: 'Estrategia de Comunicación por Cuadrante' })}
      </h2>
      <p className="text-zinc-400 mb-6 leading-relaxed">
        {t({
          en: 'Each quadrant demands a different communication approach. Sending the wrong depth to the wrong stakeholder wastes your time and theirs.',
          es: 'Cada cuadrante demanda un enfoque de comunicación diferente. Enviar la profundidad equivocada al stakeholder equivocado desperdicia tu tiempo y el de ellos.'
        })}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {strategies.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className={`rounded-xl border ${s.border} ${s.bg} p-5`}
          >
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4">
              <div className="flex items-center gap-2">
                <CircleDot className={`size-4 ${s.color}`} />
                <h4 className={`text-sm font-bold ${s.color}`}>{t(s.quadrant)}</h4>
              </div>
              <div className="flex gap-1.5 sm:ml-auto">
                <span className="text-[10px] font-mono bg-zinc-800 px-1.5 py-0.5 rounded text-zinc-500">
                  P:{s.power}
                </span>
                <span className="text-[10px] font-mono bg-zinc-800 px-1.5 py-0.5 rounded text-zinc-500">
                  I:{s.interest}
                </span>
              </div>
            </div>
            <div className="space-y-2.5">
              {s.items.map((item, j) => (
                <div key={j} className="flex flex-col sm:flex-row gap-0.5 sm:gap-2">
                  <span className="text-xs font-semibold text-zinc-500 sm:w-20 shrink-0">{t(item.label)}</span>
                  <span className="text-xs text-zinc-300">{t(item.value)}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// ─── Section 7: Political Risk Signals ────────────────────────
function PoliticalRiskSignals() {
  const { t } = useLanguage();

  const antiPatterns = [
    {
      name: { en: 'HiPPO Effect', es: 'Efecto HiPPO' },
      full: { en: 'Highest Paid Person\'s Opinion', es: 'Opinión de la Persona Mejor Pagada' },
      description: {
        en: 'The most senior person in the room overrides data, research, and team consensus simply because of their title. "The CEO wants the button blue, so it\'s blue." No testing, no rationale, no discussion.',
        es: 'La persona más senior en la sala anula datos, investigación y consenso del equipo simplemente por su título. "El CEO quiere el botón azul, entonces es azul." Sin pruebas, sin justificación, sin discusión.'
      },
      signal: {
        en: 'Decisions flip after executive meetings. Team morale drops. Designers stop proposing alternatives.',
        es: 'Las decisiones cambian después de reuniones ejecutivas. La moral del equipo baja. Los diseñadores dejan de proponer alternativas.'
      },
      counter: {
        en: 'Present data before opinions. Frame decisions as hypotheses: "Let\'s A/B test both options."',
        es: 'Presenta datos antes de opiniones. Enmarca decisiones como hipótesis: "Hagamos A/B test de ambas opciones."'
      },
      color: 'text-rose-400',
      bg: 'bg-rose-500/10',
      border: 'border-rose-500/20',
      icon: Crown,
    },
    {
      name: { en: 'Scope Creep', es: 'Scope Creep' },
      full: { en: 'Uncontrolled Feature Expansion', es: 'Expansión No Controlada de Features' },
      description: {
        en: 'Stakeholders who were not involved early start adding requirements mid-project. "Can we also support family plans?" "We need dark mode for this flow." Each addition seems small but compounds into months of delay.',
        es: 'Stakeholders que no fueron involucrados temprano comienzan a agregar requisitos a mitad del proyecto. "¿Podemos también soportar planes familiares?" "Necesitamos modo oscuro para este flujo." Cada adición parece pequeña pero se acumula en meses de retraso.'
      },
      signal: {
        en: 'New requirements appear after design is "finalized." Sprint scope changes every week. Launch date keeps sliding.',
        es: 'Nuevos requisitos aparecen después de que el diseño está "finalizado." El alcance del sprint cambia cada semana. La fecha de lanzamiento sigue deslizándose.'
      },
      counter: {
        en: 'Map stakeholders early. Document scope agreement. Use a "parking lot" for future requests.',
        es: 'Mapea stakeholders temprano. Documenta el acuerdo de alcance. Usa un "estacionamiento" para solicitudes futuras.'
      },
      color: 'text-orange-400',
      bg: 'bg-orange-500/10',
      border: 'border-orange-500/20',
      icon: Building2,
    },
    {
      name: { en: 'Conflicting KPIs', es: 'KPIs Conflictivos' },
      full: { en: 'Misaligned Organizational Metrics', es: 'Métricas Organizacionales Desalineadas' },
      description: {
        en: 'Sales wants more features (higher conversion). Engineering wants fewer features (less tech debt). Support wants simpler flows (fewer tickets). Marketing wants bold design (brand differentiation). Everyone is "right" — but optimizing for one metric hurts another.',
        es: 'Ventas quiere más features (mayor conversión). Ingeniería quiere menos features (menos deuda técnica). Soporte quiere flujos más simples (menos tickets). Marketing quiere diseño audaz (diferenciación de marca). Todos tienen "razón" — pero optimizar para una métrica perjudica a otra.'
      },
      signal: {
        en: 'Different stakeholders cite different success metrics for the same project. Meetings end with "we\'ll figure it out later."',
        es: 'Diferentes stakeholders citan diferentes métricas de éxito para el mismo proyecto. Las reuniones terminan con "lo resolveremos después."'
      },
      counter: {
        en: 'Align on a single North Star Metric before starting. Acknowledge trade-offs explicitly: "Optimizing for X means deprioritizing Y."',
        es: 'Alinéense en una sola Métrica North Star antes de comenzar. Reconoce trade-offs explícitamente: "Optimizar para X significa despriorizar Y."'
      },
      color: 'text-purple-400',
      bg: 'bg-purple-500/10',
      border: 'border-purple-500/20',
      icon: BarChart3,
    },
  ];

  return (
    <section id="political-risks" className="mb-12 scroll-mt-24">
      <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
        <AlertTriangle className="size-6 text-rose-400" />
        {t({ en: 'Political Risk Signals', es: 'Señales de Riesgo Político' })}
      </h2>
      <p className="text-zinc-400 mb-6 leading-relaxed">
        {t({
          en: 'These are the most common enterprise anti-patterns that derail design projects. Learn to recognize them early and prepare your counter-strategy.',
          es: 'Estos son los anti-patrones empresariales más comunes que descarrilan proyectos de diseño. Aprende a reconocerlos temprano y prepara tu contra-estrategia.'
        })}
      </p>

      <div className="space-y-5">
        {antiPatterns.map((ap, i) => {
          const Icon = ap.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`rounded-2xl border ${ap.border} ${ap.bg} p-6`}
            >
              <div className="flex items-start gap-4">
                <Icon className={`size-6 ${ap.color} shrink-0 mt-1`} />
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-3">
                    <h4 className={`text-lg font-bold ${ap.color}`}>{t(ap.name)}</h4>
                    <span className="text-xs text-zinc-500 font-medium">{t(ap.full)}</span>
                  </div>
                  <p className="text-sm text-zinc-300 leading-relaxed mb-4">{t(ap.description)}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="bg-zinc-900/60 rounded-lg p-3">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-red-400/70 mb-1.5">
                        {t({ en: 'Warning Signal', es: 'Señal de Advertencia' })}
                      </p>
                      <p className="text-xs text-zinc-400 leading-relaxed">{t(ap.signal)}</p>
                    </div>
                    <div className="bg-zinc-900/60 rounded-lg p-3">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-green-400/70 mb-1.5">
                        {t({ en: 'Counter-Strategy', es: 'Contra-Estrategia' })}
                      </p>
                      <p className="text-xs text-zinc-400 leading-relaxed">{t(ap.counter)}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

// ─── Main Export ───────────────────────────────────────────────
export function StakeholderMappingExtras() {
  return (
    <>
      <WhatIsStakeholder />
      <WhyMappingMatters />
      <PowerInterestMatrix />
      <PowerVsInfluence />
      <PracticalExercise />
      <CommunicationStrategy />
      <PoliticalRiskSignals />
    </>
  );
}