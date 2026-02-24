import React, { useState } from 'react';
import { useLanguage } from '../layout/LanguageContext';
import { motion } from 'motion/react';
import {
  Clock, AlertTriangle, CheckCircle2, XCircle, Users,
  ArrowRight, Zap, Target, Megaphone, ShieldAlert,
  ChevronRight, ChevronDown, GitBranch, FileText,
  Ban, TrendingDown, DollarSign, Presentation,
  Package, TriangleAlert, Eye, Layers
} from 'lucide-react';

// ─── Section 1: Modern Sprint Variants ────────────────────────
export function SprintVariants() {
  const { t } = useLanguage();

  const formats = [
    {
      name: { en: '5-Day Classic', es: '5 Días Clásico' },
      duration: { en: '5 full days', es: '5 días completos' },
      teamSize: '5–7',
      risk: { en: 'Low', es: 'Bajo' },
      riskColor: 'text-green-400',
      riskBg: 'bg-green-500/10',
      output: { en: 'High-fidelity prototype + 5 user tests', es: 'Prototipo alta fidelidad + 5 pruebas de usuario' },
      when: { en: 'Complex problems, new products, critical decisions with high stakes', es: 'Problemas complejos, productos nuevos, decisiones críticas de alto impacto' },
      pros: {
        en: ['Deep exploration', 'Full validation cycle', 'Team alignment', 'Comprehensive output'],
        es: ['Exploración profunda', 'Ciclo de validación completo', 'Alineación del equipo', 'Output completo']
      },
      risks: {
        en: ['Expensive (5 people × 5 days)', 'Calendar blocking difficult', 'Fatigue after day 3'],
        es: ['Costoso (5 personas × 5 días)', 'Difícil bloquear calendarios', 'Fatiga después del día 3']
      }
    },
    {
      name: { en: '3-Day Sprint', es: 'Sprint de 3 Días' },
      duration: { en: '3 full days', es: '3 días completos' },
      teamSize: '4–6',
      risk: { en: 'Medium', es: 'Medio' },
      riskColor: 'text-amber-400',
      riskBg: 'bg-amber-500/10',
      output: { en: 'Mid-fi prototype + 3-5 user tests', es: 'Prototipo mid-fi + 3-5 pruebas de usuario' },
      when: { en: 'Feature-level problems, teams with sprint experience, tight timelines', es: 'Problemas a nivel de feature, equipos con experiencia en sprints, timelines apretados' },
      pros: {
        en: ['Faster results', 'Easier to schedule', 'Good for iterations', 'Less fatigue'],
        es: ['Resultados más rápidos', 'Más fácil de agendar', 'Bueno para iteraciones', 'Menos fatiga']
      },
      risks: {
        en: ['Rushed sketching', 'Less diverse exploration', 'Prototype may be shallow'],
        es: ['Boceteo apresurado', 'Exploración menos diversa', 'Prototipo puede ser superficial']
      }
    },
    {
      name: { en: '2-Day Sprint', es: 'Sprint de 2 Días' },
      duration: { en: '2 intense days', es: '2 días intensos' },
      teamSize: '3–5',
      risk: { en: 'High', es: 'Alto' },
      riskColor: 'text-red-400',
      riskBg: 'bg-red-500/10',
      output: { en: 'Lo-fi prototype + 3 guerrilla tests', es: 'Prototipo lo-fi + 3 pruebas de guerrilla' },
      when: { en: 'Small focused problems, validated assumptions need quick checking, budget-constrained', es: 'Problemas pequeños y enfocados, supuestos validados necesitan chequeo rápido, presupuesto limitado' },
      pros: {
        en: ['Minimal calendar impact', 'Quick directional signal', 'Low cost', 'Good for follow-up sprints'],
        es: ['Impacto mínimo en calendario', 'Señal direccional rápida', 'Bajo costo', 'Bueno para sprints de seguimiento']
      },
      risks: {
        en: ['Superficial exploration', 'Confirmation bias risk', 'No time for divergence', 'Output may not be actionable'],
        es: ['Exploración superficial', 'Riesgo de sesgo de confirmación', 'Sin tiempo para divergencia', 'Output podría no ser accionable']
      }
    },
    {
      name: { en: 'Remote Sprint', es: 'Sprint Remoto' },
      duration: { en: '4-5 days (shorter sessions)', es: '4-5 días (sesiones más cortas)' },
      teamSize: '4–7',
      risk: { en: 'Medium-High', es: 'Medio-Alto' },
      riskColor: 'text-orange-400',
      riskBg: 'bg-orange-500/10',
      output: { en: 'Digital prototype + remote user tests', es: 'Prototipo digital + pruebas de usuario remotas' },
      when: { en: 'Distributed teams, global stakeholders, pandemic/travel restrictions', es: 'Equipos distribuidos, stakeholders globales, restricciones de viaje/pandemia' },
      pros: {
        en: ['No travel costs', 'Async pre-work possible', 'Recording for absent members', 'Broader participant pool'],
        es: ['Sin costos de viaje', 'Pre-trabajo asíncrono posible', 'Grabación para ausentes', 'Pool de participantes más amplio']
      },
      risks: {
        en: ['Zoom fatigue', 'Harder to read body language', 'Tech issues', 'Time zone challenges'],
        es: ['Fatiga de Zoom', 'Difícil leer lenguaje corporal', 'Problemas técnicos', 'Retos de zona horaria']
      }
    },
    {
      name: { en: 'Async Sprint', es: 'Sprint Asíncrono' },
      duration: { en: '1-2 weeks (distributed work)', es: '1-2 semanas (trabajo distribuido)' },
      teamSize: '3–8',
      risk: { en: 'High', es: 'Alto' },
      riskColor: 'text-red-400',
      riskBg: 'bg-red-500/10',
      output: { en: 'Concept + documented rationale', es: 'Concepto + justificación documentada' },
      when: { en: 'Teams across 4+ time zones, when synchronous time is impossible, ongoing discovery', es: 'Equipos en 4+ zonas horarias, cuando tiempo sincrónico es imposible, discovery continuo' },
      pros: {
        en: ['Flexible scheduling', 'Deep individual thinking', 'Well-documented output', 'No burnout'],
        es: ['Agenda flexible', 'Pensamiento individual profundo', 'Output bien documentado', 'Sin burnout']
      },
      risks: {
        en: ['Loss of momentum', 'Misalignment between sessions', 'Hard to build on others\' ideas', 'Requires strong facilitation'],
        es: ['Pérdida de impulso', 'Desalineación entre sesiones', 'Difícil construir sobre ideas de otros', 'Requiere facilitación fuerte']
      }
    }
  ];

  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="sprint-variants" className="mb-12 scroll-mt-24">
      <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
        <Layers className="size-6 text-indigo-400" />
        {t({ en: 'Modern Sprint Variants', es: 'Variantes Modernas de Sprint' })}
      </h2>
      <p className="text-zinc-400 mb-6 leading-relaxed">
        {t({
          en: 'The original 5-day sprint isn\'t always practical. Modern teams adapt the format to their constraints. Choosing the right variant depends on problem complexity, team availability, and organizational risk tolerance.',
          es: 'El sprint original de 5 días no siempre es práctico. Equipos modernos adaptan el formato a sus restricciones. Elegir la variante correcta depende de la complejidad del problema, disponibilidad del equipo y tolerancia al riesgo organizacional.'
        })}
      </p>

      {/* Comparison Table */}
      <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl overflow-hidden mb-6">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px]">
            <thead>
              <tr className="bg-zinc-800/60 border-b border-zinc-700">
                <th className="px-4 py-3 text-left text-xs font-bold text-zinc-400 uppercase tracking-wider">{t({ en: 'Format', es: 'Formato' })}</th>
                <th className="px-4 py-3 text-left text-xs font-bold text-zinc-400 uppercase tracking-wider">{t({ en: 'Duration', es: 'Duración' })}</th>
                <th className="px-4 py-3 text-center text-xs font-bold text-zinc-400 uppercase tracking-wider">{t({ en: 'Team', es: 'Equipo' })}</th>
                <th className="px-4 py-3 text-center text-xs font-bold text-zinc-400 uppercase tracking-wider">{t({ en: 'Risk', es: 'Riesgo' })}</th>
                <th className="px-4 py-3 text-left text-xs font-bold text-zinc-400 uppercase tracking-wider">{t({ en: 'Output Depth', es: 'Profundidad' })}</th>
              </tr>
            </thead>
            <tbody>
              {formats.map((f, i) => (
                <tr key={i} className="border-b border-zinc-800/40 hover:bg-zinc-800/20 transition-colors">
                  <td className="px-4 py-3 text-sm font-semibold text-white">{t(f.name)}</td>
                  <td className="px-4 py-3 text-sm text-zinc-300">{t(f.duration)}</td>
                  <td className="px-4 py-3 text-sm text-zinc-400 text-center">{f.teamSize}</td>
                  <td className="px-4 py-3 text-center">
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${f.riskBg} ${f.riskColor}`}>
                      {t(f.risk)}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm text-zinc-300">{t(f.output)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Expandable Detail Cards */}
      <div className="space-y-3">
        {formats.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
          >
            <button
              onClick={() => setExpanded(expanded === i ? null : i)}
              className="w-full bg-zinc-900/40 border border-zinc-800 rounded-xl p-4 flex items-center justify-between hover:border-zinc-700 transition-colors text-left"
            >
              <div className="flex items-center gap-3">
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${f.riskBg} ${f.riskColor}`}>
                  {t(f.risk)}
                </span>
                <span className="text-sm font-semibold text-white">{t(f.name)}</span>
              </div>
              <ChevronDown className={`size-4 text-zinc-500 transition-transform ${expanded === i ? 'rotate-180' : ''}`} />
            </button>
            {expanded === i && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="border border-t-0 border-zinc-800 rounded-b-xl bg-zinc-900/30 px-5 py-4 -mt-1"
              >
                <p className="text-sm text-zinc-400 mb-4">
                  <span className="font-semibold text-zinc-200">{t({ en: 'Best when:', es: 'Mejor cuando:' })}</span>{' '}
                  {t(f.when)}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <h5 className="text-[10px] font-bold uppercase tracking-wider text-green-400 mb-2">{t({ en: 'Pros', es: 'Ventajas' })}</h5>
                    <ul className="space-y-1.5">
                      {t(f.pros).map((p: string, pi: number) => (
                        <li key={pi} className="flex items-start gap-2 text-xs text-zinc-300">
                          <CheckCircle2 className="size-3 text-green-400 mt-0.5 shrink-0" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-[10px] font-bold uppercase tracking-wider text-red-400 mb-2">{t({ en: 'Risks', es: 'Riesgos' })}</h5>
                    <ul className="space-y-1.5">
                      {t(f.risks).map((r: string, ri: number) => (
                        <li key={ri} className="flex items-start gap-2 text-xs text-zinc-300">
                          <AlertTriangle className="size-3 text-red-400 mt-0.5 shrink-0" />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// ─── Section 2: When NOT to Use a Design Sprint ───────────────
export function WhenNotToSprint() {
  const { t } = useLanguage();

  const antiPatterns = [
    {
      signal: { en: 'Problem is too vague', es: 'El problema es demasiado vago' },
      detail: { en: '"We need to improve engagement" — this isn\'t a sprint problem, it\'s a research problem. You need to understand the problem space first before you can solve it in a week.', es: '"Necesitamos mejorar engagement" — esto no es un problema de sprint, es un problema de investigación. Necesitas entender el espacio del problema primero antes de resolverlo en una semana.' },
      icon: Eye,
      color: 'text-amber-400',
    },
    {
      signal: { en: 'No stakeholder/decider access', es: 'Sin acceso a stakeholder/decisor' },
      detail: { en: 'A sprint without a Decider is a brainstorm with no teeth. If the person who can say "yes" isn\'t available for the full sprint, you\'ll waste everyone\'s time generating ideas that will be rejected later.', es: 'Un sprint sin Decisor es un brainstorm sin fuerza. Si la persona que puede decir "sí" no está disponible para todo el sprint, perderás el tiempo de todos generando ideas que serán rechazadas después.' },
      icon: Users,
      color: 'text-red-400',
    },
    {
      signal: { en: 'Small incremental feature', es: 'Feature incremental pequeño' },
      detail: { en: '"Add a sort dropdown to the table" — this doesn\'t need a sprint. It needs a ticket with clear acceptance criteria. Sprints are for big, ambiguous problems, not UI polish tasks.', es: '"Agregar dropdown de ordenamiento a la tabla" — esto no necesita un sprint. Necesita un ticket con criterios de aceptación claros. Los sprints son para problemas grandes y ambiguos, no tareas de pulido UI.' },
      icon: Package,
      color: 'text-blue-400',
    },
    {
      signal: { en: 'Technical constraints already known', es: 'Restricciones técnicas ya conocidas' },
      detail: { en: 'If engineering already said "we can only use component X with API Y" — there\'s no design space to explore. A sprint needs open solution space. If the solution is already constrained, just design it and ship it.', es: 'Si ingeniería ya dijo "solo podemos usar componente X con API Y" — no hay espacio de diseño para explorar. Un sprint necesita espacio de solución abierto. Si la solución ya está restringida, simplemente diséñala y lánzala.' },
      icon: Ban,
      color: 'text-orange-400',
    },
    {
      signal: { en: 'Organizational politics too high', es: 'Política organizacional muy alta' },
      detail: { en: 'If the real decision will be made in a boardroom after the sprint, the sprint is performative. Sprints require genuine decision-making power in the room. If the Decider will defer to their boss anyway, do stakeholder alignment first.', es: 'Si la decisión real se tomará en una sala de juntas después del sprint, el sprint es performativo. Los sprints requieren poder de decisión genuino en la sala. Si el Decisor delegará a su jefe de todas formas, haz alineación de stakeholders primero.' },
      icon: ShieldAlert,
      color: 'text-rose-400',
    },
  ];

  const [showTree, setShowTree] = useState(false);
  const [treeStep, setTreeStep] = useState(0);

  const treeSteps = [
    {
      question: { en: 'Is the problem clearly defined?', es: '¿El problema está claramente definido?' },
      yes: 1,
      no: { en: 'Run discovery research first.', es: 'Ejecuta investigación de discovery primero.' }
    },
    {
      question: { en: 'Can a Decider attend the full sprint?', es: '¿Puede un Decisor asistir al sprint completo?' },
      yes: 2,
      no: { en: 'Do stakeholder alignment workshop instead.', es: 'Haz taller de alineación de stakeholders en su lugar.' }
    },
    {
      question: { en: 'Is the solution space open (multiple possible approaches)?', es: '¿El espacio de solución está abierto (múltiples enfoques posibles)?' },
      yes: 3,
      no: { en: 'Just design and ship — no sprint needed.', es: 'Solo diseña y lanza — no se necesita sprint.' }
    },
    {
      question: { en: 'Can you commit 3-5 days of team time?', es: '¿Puedes comprometer 3-5 días de tiempo del equipo?' },
      yes: 4,
      no: { en: 'Consider a 2-day sprint or structured workshop instead.', es: 'Considera un sprint de 2 días o taller estructurado en su lugar.' }
    },
    {
      question: { en: 'Will test users be available by end of sprint?', es: '¿Los usuarios de prueba estarán disponibles al final del sprint?' },
      yes: -1,
      no: { en: 'Recruit users first, then schedule the sprint.', es: 'Recluta usuarios primero, luego agenda el sprint.' }
    }
  ];

  const currentTreeStep = treeSteps[treeStep];

  return (
    <section id="when-not-to-sprint" className="mb-12 scroll-mt-24">
      <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
        <Ban className="size-6 text-red-400" />
        {t({ en: 'When NOT to Use a Design Sprint', es: 'Cuándo NO Usar un Design Sprint' })}
      </h2>
      <p className="text-zinc-400 mb-6 leading-relaxed">
        {t({
          en: 'Sprints are powerful but not universal. Using a sprint when the conditions aren\'t right wastes time and erodes trust in the methodology. Recognize these anti-patterns before committing your team.',
          es: 'Los sprints son poderosos pero no universales. Usar un sprint cuando las condiciones no son correctas desperdicia tiempo y erosiona la confianza en la metodología. Reconoce estos anti-patrones antes de comprometer a tu equipo.'
        })}
      </p>

      {/* Anti-patterns */}
      <div className="space-y-3 mb-6">
        {antiPatterns.map((ap, i) => {
          const Icon = ap.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-5"
            >
              <div className="flex items-start gap-3">
                <Icon className={`size-5 ${ap.color} shrink-0 mt-0.5`} />
                <div className="flex-1 min-w-0">
                  <h4 className={`text-sm font-bold ${ap.color} mb-1.5`}>{t(ap.signal)}</h4>
                  <p className="text-sm text-zinc-300 leading-relaxed">{t(ap.detail)}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Decision Tree */}
      <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-sm font-bold text-zinc-300 uppercase tracking-wider flex items-center gap-2">
            <GitBranch className="size-4 text-indigo-400" />
            {t({ en: 'Should You Run a Sprint?', es: '¿Deberías Ejecutar un Sprint?' })}
          </h4>
          {showTree && (
            <button
              onClick={() => { setTreeStep(0); setShowTree(false); }}
              className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
            >
              {t({ en: 'Reset', es: 'Reiniciar' })}
            </button>
          )}
        </div>

        {!showTree ? (
          <button
            onClick={() => setShowTree(true)}
            className="w-full px-4 py-3 bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-300 rounded-xl text-sm font-medium transition-colors border border-indigo-500/30"
          >
            {t({ en: 'Start Decision Tree →', es: 'Iniciar Árbol de Decisión →' })}
          </button>
        ) : currentTreeStep ? (
          <motion.div
            key={treeStep}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="text-white font-medium mb-4 text-sm">
              {t({ en: `Step ${treeStep + 1}/5:`, es: `Paso ${treeStep + 1}/5:` })} {t(currentTreeStep.question)}
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => {
                  if (typeof currentTreeStep.yes === 'number' && currentTreeStep.yes === -1) {
                    setTreeStep(5);
                  } else if (typeof currentTreeStep.yes === 'number') {
                    setTreeStep(currentTreeStep.yes);
                  }
                }}
                className="flex-1 px-4 py-2.5 bg-green-500/10 hover:bg-green-500/20 border border-green-500/30 text-green-300 rounded-lg text-sm font-medium transition-colors"
              >
                {t({ en: 'Yes', es: 'Sí' })}
              </button>
              <button
                onClick={() => setTreeStep(10 + treeStep)}
                className="flex-1 px-4 py-2.5 bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 text-red-300 rounded-lg text-sm font-medium transition-colors"
              >
                {t({ en: 'No', es: 'No' })}
              </button>
            </div>
          </motion.div>
        ) : treeStep >= 10 ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-4">
            <XCircle className="size-10 text-red-400 mx-auto mb-3" />
            <p className="text-red-300 font-bold text-sm mb-1">{t({ en: 'Don\'t run a sprint yet.', es: 'No ejecutes un sprint todavía.' })}</p>
            <p className="text-zinc-400 text-xs">{t(treeSteps[treeStep - 10]?.no || { en: '', es: '' })}</p>
            <button onClick={() => { setTreeStep(0); }} className="mt-3 text-xs text-indigo-400 hover:text-indigo-300">
              {t({ en: 'Try again', es: 'Intentar de nuevo' })}
            </button>
          </motion.div>
        ) : (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-4">
            <CheckCircle2 className="size-10 text-green-400 mx-auto mb-3" />
            <p className="text-green-300 font-bold text-sm mb-1">{t({ en: 'Yes — run a Design Sprint!', es: '¡Sí — ejecuta un Design Sprint!' })}</p>
            <p className="text-zinc-400 text-xs">{t({ en: 'All conditions are met. Choose a format and schedule it.', es: 'Todas las condiciones se cumplen. Elige un formato y agéndalo.' })}</p>
            <button onClick={() => { setTreeStep(0); setShowTree(false); }} className="mt-3 text-xs text-indigo-400 hover:text-indigo-300">
              {t({ en: 'Reset', es: 'Reiniciar' })}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}

// ─── Section 3: Selling a Sprint Internally ───────────────────
export function SellingASprint() {
  const { t } = useLanguage();

  const pitches = [
    {
      audience: { en: 'Product Manager', es: 'Product Manager' },
      icon: Target,
      color: 'text-blue-400',
      border: 'border-blue-500/20',
      bg: 'bg-blue-500/5',
      angle: { en: 'Speed to validated learning', es: 'Velocidad a aprendizaje validado' },
      script: {
        en: '"Instead of spending 2 months building a feature and hoping users like it, we can test a concept in 5 days with real users. If it fails, we saved 6 weeks of engineering. If it works, we have a validated direction + test recordings to share with stakeholders."',
        es: '"En lugar de pasar 2 meses construyendo un feature y esperando que a usuarios les guste, podemos testear un concepto en 5 días con usuarios reales. Si falla, ahorramos 6 semanas de ingeniería. Si funciona, tenemos una dirección validada + grabaciones de pruebas para compartir con stakeholders."'
      },
      metrics: {
        en: ['6 weeks of build time potentially saved', '5 user tests in 1 day', 'Validated backlog items, not assumptions'],
        es: ['6 semanas de tiempo de construcción potencialmente ahorradas', '5 pruebas de usuario en 1 día', 'Items de backlog validados, no suposiciones']
      }
    },
    {
      audience: { en: 'CTO / Engineering Lead', es: 'CTO / Líder de Ingeniería' },
      icon: Zap,
      color: 'text-amber-400',
      border: 'border-amber-500/20',
      bg: 'bg-amber-500/5',
      angle: { en: 'Risk reduction before engineering investment', es: 'Reducción de riesgo antes de inversión en ingeniería' },
      script: {
        en: '"We\'re about to commit 3 engineers for 8 weeks to this initiative. Before we do that, let me spend 1 week with a small team to validate the concept with users. If the concept is wrong, we just saved $120K+ in engineering costs. If it\'s right, engineers get validated specs — not guesswork."',
        es: '"Estamos a punto de comprometer 3 ingenieros por 8 semanas para esta iniciativa. Antes de eso, déjame pasar 1 semana con un equipo pequeño para validar el concepto con usuarios. Si el concepto está mal, acabamos de ahorrar $120K+ en costos de ingeniería. Si está bien, ingenieros reciben specs validadas — no adivinanzas."'
      },
      metrics: {
        en: ['$120K+ potential savings (3 engineers × 8 weeks)', 'Zero code written before validation', 'Reduced rework and scope changes mid-build'],
        es: ['$120K+ ahorro potencial (3 ingenieros × 8 semanas)', 'Cero código escrito antes de validación', 'Reducción de retrabajo y cambios de alcance durante construcción']
      }
    },
    {
      audience: { en: 'VP / Executive Sponsor', es: 'VP / Sponsor Ejecutivo' },
      icon: DollarSign,
      color: 'text-emerald-400',
      border: 'border-emerald-500/20',
      bg: 'bg-emerald-500/5',
      angle: { en: 'Strategic de-risking', es: 'De-riesgo estratégico' },
      script: {
        en: '"This quarter we\'re betting on 3 big initiatives. Each one could cost $200K+ in development. A Design Sprint gives us a cheap validation checkpoint: 1 week, no code, real user feedback. We can kill bad ideas early and double down on winners — before we spend real budget."',
        es: '"Este trimestre apostamos a 3 iniciativas grandes. Cada una podría costar $200K+ en desarrollo. Un Design Sprint nos da un checkpoint de validación barato: 1 semana, sin código, retroalimentación real de usuarios. Podemos matar malas ideas temprano y doblar la apuesta en ganadoras — antes de gastar presupuesto real."'
      },
      metrics: {
        en: ['$200K+ per initiative at risk', '1 week vs 3 months to learn', 'Data-backed go/no-go decision'],
        es: ['$200K+ por iniciativa en riesgo', '1 semana vs 3 meses para aprender', 'Decisión go/no-go basada en datos']
      }
    }
  ];

  return (
    <section id="selling-sprint" className="mb-12 scroll-mt-24">
      <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
        <Presentation className="size-6 text-emerald-400" />
        {t({ en: 'Selling a Sprint Internally', es: 'Vendiendo un Sprint Internamente' })}
      </h2>
      <p className="text-zinc-400 mb-6 leading-relaxed">
        {t({
          en: 'The hardest part of a Design Sprint isn\'t running it — it\'s getting buy-in. Different stakeholders care about different things. Tailor your pitch to their priorities.',
          es: 'La parte más difícil de un Design Sprint no es ejecutarlo — es obtener buy-in. Diferentes stakeholders se preocupan por cosas diferentes. Adapta tu pitch a sus prioridades.'
        })}
      </p>

      <div className="space-y-4">
        {pitches.map((p, i) => {
          const Icon = p.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`rounded-2xl border ${p.border} ${p.bg} p-5 md:p-6`}
            >
              <div className="flex items-center gap-3 mb-4">
                <Icon className={`size-5 ${p.color}`} />
                <h3 className={`text-base font-bold ${p.color}`}>
                  {t({ en: 'Pitch to:', es: 'Pitch a:' })} {t(p.audience)}
                </h3>
                <span className="text-[10px] text-zinc-500 uppercase tracking-wider ml-auto">
                  {t(p.angle)}
                </span>
              </div>
              <div className="bg-zinc-900/60 rounded-xl p-4 mb-4 border border-zinc-800/50">
                <p className="text-sm text-zinc-200 leading-relaxed italic">{t(p.script)}</p>
              </div>
              <div>
                <h5 className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 mb-2">
                  {t({ en: 'Key metrics to share', es: 'Métricas clave para compartir' })}
                </h5>
                <ul className="flex flex-wrap gap-2">
                  {t(p.metrics).map((m: string, mi: number) => (
                    <li key={mi} className="flex items-center gap-1.5 text-xs text-zinc-300 bg-zinc-900/80 px-3 py-1.5 rounded-lg border border-zinc-700">
                      <TrendingDown className="size-3 text-emerald-400 shrink-0" />
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

// ─── Section 4: Post-Sprint Execution Framework ───────────────
export function PostSprintExecution() {
  const { t } = useLanguage();

  const steps = [
    {
      num: '01',
      title: { en: 'Synthesize Sprint Findings', es: 'Sintetizar Hallazgos del Sprint' },
      detail: {
        en: 'Within 48 hours: compile user test patterns into a findings document. Use a 3-column format: "What worked" | "What failed" | "What surprised us." Tag each finding with the specific prototype section and user quote. This is your evidence base.',
        es: 'Dentro de 48 horas: compila patrones de pruebas de usuario en un documento de hallazgos. Usa formato de 3 columnas: "Qué funcionó" | "Qué falló" | "Qué nos sorprendió." Etiqueta cada hallazgo con la sección específica del prototipo y cita del usuario. Esta es tu base de evidencia.'
      },
      color: 'text-blue-400',
    },
    {
      num: '02',
      title: { en: 'Convert Prototype → Backlog', es: 'Convertir Prototipo → Backlog' },
      detail: {
        en: 'Break the validated prototype into implementation tickets. Each ticket should reference: (1) sprint finding that validates it, (2) specific prototype screen, (3) user quote supporting the decision. Use the format from scrum-for-designers: user story + acceptance criteria + Figma link.',
        es: 'Descompón el prototipo validado en tickets de implementación. Cada ticket debe referenciar: (1) hallazgo del sprint que lo valida, (2) pantalla específica del prototipo, (3) cita de usuario apoyando la decisión. Usa el formato de scrum-for-designers: user story + criterios de aceptación + link de Figma.'
      },
      color: 'text-indigo-400',
    },
    {
      num: '03',
      title: { en: 'Prioritize with Evidence', es: 'Priorizar con Evidencia' },
      detail: {
        en: 'Not everything from the sprint should ship. Use a 2×2 matrix: Impact (validated user need) vs Effort (engineering estimate). Start with: high impact + low effort. Defer: low impact + high effort. Negotiate: high impact + high effort (split into increments).',
        es: 'No todo del sprint debería lanzarse. Usa una matriz 2×2: Impacto (necesidad validada del usuario) vs Esfuerzo (estimación de ingeniería). Comienza con: alto impacto + bajo esfuerzo. Difiere: bajo impacto + alto esfuerzo. Negocia: alto impacto + alto esfuerzo (divide en incrementos).'
      },
      color: 'text-violet-400',
    },
    {
      num: '04',
      title: { en: 'Avoid the Prototype Graveyard', es: 'Evita el Cementerio de Prototipos' },
      detail: {
        en: 'The #1 sprint failure mode: great sprint, validated prototype... and nothing ships. Prevention: (1) Schedule a "Sprint → Backlog" session within 1 week, (2) assign an owner for each validated concept, (3) add sprint items to the very next sprint planning, (4) share findings with leadership to create accountability.',
        es: 'El modo de falla #1 del sprint: gran sprint, prototipo validado... y nada se lanza. Prevención: (1) Agenda sesión "Sprint → Backlog" dentro de 1 semana, (2) asigna un dueño para cada concepto validado, (3) agrega items del sprint al próximo sprint planning, (4) comparte hallazgos con liderazgo para crear accountability.'
      },
      color: 'text-emerald-400',
    }
  ];

  return (
    <section id="post-sprint" className="mb-12 scroll-mt-24">
      <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
        <FileText className="size-6 text-violet-400" />
        {t({ en: 'Post-Sprint Execution Framework', es: 'Framework de Ejecución Post-Sprint' })}
      </h2>
      <p className="text-zinc-400 mb-6 leading-relaxed">
        {t({
          en: 'A successful sprint doesn\'t end on Friday. The real impact happens in the weeks after — when validated concepts become shipped features. Without a post-sprint execution plan, your prototype joins the graveyard of great ideas that never shipped.',
          es: 'Un sprint exitoso no termina el viernes. El impacto real ocurre en las semanas después — cuando conceptos validados se convierten en features lanzados. Sin un plan de ejecución post-sprint, tu prototipo se une al cementerio de grandes ideas que nunca se lanzaron.'
        })}
      </p>

      <div className="space-y-4 mb-6">
        {steps.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-5"
          >
            <div className="flex items-start gap-4">
              <span className={`text-2xl font-black ${s.color} shrink-0 opacity-40`}>{s.num}</span>
              <div className="flex-1 min-w-0">
                <h4 className={`text-sm font-bold ${s.color} mb-2`}>{t(s.title)}</h4>
                <p className="text-sm text-zinc-300 leading-relaxed">{t(s.detail)}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Connection to other lessons */}
      <div className="bg-indigo-500/5 border border-indigo-500/20 rounded-xl px-5 py-3">
        <p className="text-xs text-zinc-400 leading-relaxed">
          <span className="font-semibold text-indigo-300">
            {t({ en: 'Connected lessons:', es: 'Lecciones conectadas:' })}
          </span>{' '}
          {t({
            en: 'The ticket creation process connects directly to Scrum for Designers (ticket writing, DoR) and User Stories & Requirements (story format, acceptance criteria). Sprint outputs should flow into your team\'s existing Scrum workflow.',
            es: 'El proceso de creación de tickets se conecta directamente con Scrum para Diseñadores (escritura de tickets, DoR) y User Stories & Requirements (formato de story, criterios de aceptación). Los outputs del sprint deberían fluir al workflow Scrum existente de tu equipo.'
          })}
        </p>
      </div>
    </section>
  );
}

// ─── Section 5: Real Sprint Risks ─────────────────────────────
export function RealSprintRisks() {
  const { t } = useLanguage();

  const risks = [
    {
      name: { en: 'HiPPO Domination', es: 'Dominación del HiPPO' },
      subtitle: { en: 'Highest Paid Person\'s Opinion', es: 'Opinión de la Persona Mejor Pagada' },
      detail: {
        en: 'The VP uses their super vote to override team ideas every time. The sprint becomes a performance of democracy that ends in autocracy. Prevention: enforce silent sketching, anonymous voting, and remind the Decider their role is to pick the best idea — not their own idea.',
        es: 'El VP usa su super voto para anular ideas del equipo cada vez. El sprint se convierte en una actuación de democracia que termina en autocracia. Prevención: impón boceteo silencioso, votación anónima, y recuerda al Decisor que su rol es elegir la mejor idea — no su propia idea.'
      },
      severity: { en: 'Critical', es: 'Crítico' },
      severityColor: 'text-red-400 bg-red-500/10',
    },
    {
      name: { en: 'Silent Team Members', es: 'Miembros Silenciosos del Equipo' },
      subtitle: { en: 'Introverts get bulldozed', es: 'Introvertidos son aplastados' },
      detail: {
        en: 'Loud voices dominate ideation. The best ideas might come from the quiet engineer in the corner. Prevention: use "Sketch alone, share together" pattern. All ideation is individual and silent. Voting is done with dots, not debates. Give introverts time to write before they speak.',
        es: 'Voces fuertes dominan la ideación. Las mejores ideas podrían venir del ingeniero callado en la esquina. Prevención: usa patrón "Bocetea solo, comparte juntos". Toda ideación es individual y silenciosa. Votación se hace con puntos, no debates. Da a introvertidos tiempo para escribir antes de hablar.'
      },
      severity: { en: 'High', es: 'Alto' },
      severityColor: 'text-amber-400 bg-amber-500/10',
    },
    {
      name: { en: 'Fake Validation', es: 'Validación Falsa' },
      subtitle: { en: 'Confirmation bias in testing', es: 'Sesgo de confirmación en testing' },
      detail: {
        en: '"Users loved it!" — but did you ask leading questions? Did you show them only the happy path? Did you interpret politeness as approval? Prevention: write a neutral test script, include edge cases, have a separate note-taker, and look for patterns across 5 users — not individual reactions.',
        es: '"¡A los usuarios les encantó!" — ¿pero hiciste preguntas dirigidas? ¿Les mostraste solo el happy path? ¿Interpretaste cortesía como aprobación? Prevención: escribe un script de prueba neutral, incluye edge cases, ten un tomador de notas separado, y busca patrones entre 5 usuarios — no reacciones individuales.'
      },
      severity: { en: 'Critical', es: 'Crítico' },
      severityColor: 'text-red-400 bg-red-500/10',
    },
    {
      name: { en: 'Prototype Too Polished', es: 'Prototipo Demasiado Pulido' },
      subtitle: { en: 'Users think it\'s real', es: 'Usuarios creen que es real' },
      detail: {
        en: 'If the prototype looks like a finished product, users won\'t give honest feedback — they\'ll think it\'s too late to change. They also focus on visual polish instead of core flow. Prevention: use mid-fidelity prototypes. Tell users: "This is an early concept — nothing is final. Your honest criticism helps us."',
        es: 'Si el prototipo parece un producto terminado, usuarios no darán retroalimentación honesta — pensarán que es muy tarde para cambiar. También se enfocan en pulido visual en vez del flujo principal. Prevención: usa prototipos de fidelidad media. Dile a usuarios: "Este es un concepto temprano — nada es final. Tu crítica honesta nos ayuda."'
      },
      severity: { en: 'Medium', es: 'Medio' },
      severityColor: 'text-amber-400 bg-amber-500/10',
    },
    {
      name: { en: 'Time Pressure Distortion', es: 'Distorsión por Presión de Tiempo' },
      subtitle: { en: 'Speed over quality decisions', es: 'Velocidad sobre decisiones de calidad' },
      detail: {
        en: 'The sprint clock creates urgency that can lead to premature convergence. The team picks the "good enough" idea instead of exploring further because "we\'re behind schedule." Prevention: trust the process. The time constraint is the feature, not the bug. If ideas are truly weak, run a second sprint — don\'t force a bad decision.',
        es: 'El reloj del sprint crea urgencia que puede llevar a convergencia prematura. El equipo elige la idea "suficientemente buena" en vez de explorar más porque "estamos atrasados." Prevención: confía en el proceso. La restricción de tiempo es la funcionalidad, no el bug. Si las ideas son realmente débiles, ejecuta un segundo sprint — no fuerces una mala decisión.'
      },
      severity: { en: 'Medium', es: 'Medio' },
      severityColor: 'text-amber-400 bg-amber-500/10',
    },
  ];

  return (
    <section id="sprint-risks" className="mb-12 scroll-mt-24">
      <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
        <TriangleAlert className="size-6 text-amber-400" />
        {t({ en: 'Real Sprint Risks', es: 'Riesgos Reales del Sprint' })}
      </h2>
      <p className="text-zinc-400 mb-6 leading-relaxed">
        {t({
          en: 'These risks don\'t appear in methodology books. They come from running sprints in messy, political, real-world organizations. Knowing them is the difference between a sprint that changes direction and a sprint that becomes an expensive brainstorm.',
          es: 'Estos riesgos no aparecen en libros de metodología. Vienen de ejecutar sprints en organizaciones reales, desordenadas y políticas. Conocerlos es la diferencia entre un sprint que cambia la dirección y un sprint que se convierte en un brainstorm costoso.'
        })}
      </p>

      <div className="space-y-4">
        {risks.map((r, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-5"
          >
            <div className="flex items-start justify-between gap-3 mb-2">
              <div>
                <h4 className="text-sm font-bold text-white">{t(r.name)}</h4>
                <p className="text-[11px] text-zinc-500">{t(r.subtitle)}</p>
              </div>
              <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full shrink-0 ${r.severityColor}`}>
                {t(r.severity)}
              </span>
            </div>
            <p className="text-sm text-zinc-300 leading-relaxed">{t(r.detail)}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// ─── Main Export ──────────────────────────────────────────────
export function DesignSprintExtras() {
  return (
    <>
      <SprintVariants />
      <WhenNotToSprint />
      <SellingASprint />
      <PostSprintExecution />
      <RealSprintRisks />
    </>
  );
}
