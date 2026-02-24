import React, { useState } from 'react';
import { useLanguage } from '../layout/LanguageContext';
import { motion } from 'motion/react';
import {
  GitBranch, AlertTriangle, CheckCircle2, XCircle, Clock,
  ArrowRight, Zap, Shield, Target, Users, MessageSquare,
  Megaphone, RotateCcw, ChevronRight, PenLine,
  Handshake, Scale, FileWarning, Layers
} from 'lucide-react';

// ─── Section 1: Dual Track Agile Visualizer ───────────────────
export function DualTrackVisualizer() {
  const { t } = useLanguage();
  const [mode, setMode] = useState<'same' | 'ahead'>('ahead');

  const metrics = {
    same: {
      risk: { en: 'High', es: 'Alto' },
      riskColor: 'text-red-400',
      riskBg: 'bg-red-500/10 border-red-500/30',
      rework: { en: '25-40%', es: '25-40%' },
      reworkColor: 'text-red-400',
      blocking: { en: 'Frequent', es: 'Frecuente' },
      blockingColor: 'text-red-400',
      description: {
        en: 'Designer and developer work on the same feature in the same sprint. Designs are incomplete when coding starts. Engineers guess, build wrong, wait for answers. Rework is constant.',
        es: 'Diseñador y desarrollador trabajan en la misma funcionalidad en el mismo sprint. Diseños están incompletos cuando la codificación comienza. Ingenieros adivinan, construyen mal, esperan respuestas. El retrabajo es constante.'
      }
    },
    ahead: {
      risk: { en: 'Low', es: 'Bajo' },
      riskColor: 'text-green-400',
      riskBg: 'bg-green-500/10 border-green-500/30',
      rework: { en: '3-8%', es: '3-8%' },
      reworkColor: 'text-green-400',
      blocking: { en: 'Rare', es: 'Raro' },
      blockingColor: 'text-green-400',
      description: {
        en: 'Designer works one sprint ahead — researching and prototyping Sprint N+1 while engineers build Sprint N. Designs arrive complete with edge cases. DoR is met. Engineers build with confidence.',
        es: 'Diseñador trabaja un sprint adelante — investigando y prototipando Sprint N+1 mientras ingenieros construyen Sprint N. Diseños llegan completos con edge cases. DoR se cumple. Ingenieros construyen con confianza.'
      }
    }
  };

  const current = metrics[mode];

  return (
    <section id="dual-track" className="mb-12 scroll-mt-24">
      <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
        <GitBranch className="size-6 text-violet-400" />
        {t({ en: 'Dual Track Agile', es: 'Agile de Doble Vía' })}
      </h2>
      <p className="text-zinc-400 mb-6 leading-relaxed">
        {t({
          en: 'Dual Track Agile separates Discovery (research, design) from Delivery (engineering, QA). The design track runs one sprint ahead, ensuring that when engineers start building, they have complete, validated designs with full edge case coverage.',
          es: 'Agile de Doble Vía separa Discovery (investigación, diseño) de Delivery (ingeniería, QA). La vía de diseño corre un sprint adelante, asegurando que cuando ingenieros comienzan a construir, tienen diseños completos y validados con cobertura total de edge cases.'
        })}
      </p>

      {/* Toggle */}
      <div className="flex gap-2 mb-6 bg-zinc-900/50 rounded-xl p-1.5 max-w-md">
        <button
          onClick={() => setMode('same')}
          className={`flex-1 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
            mode === 'same'
              ? 'bg-red-500/20 text-red-300 border border-red-500/30'
              : 'text-zinc-400 hover:text-zinc-200'
          }`}
        >
          {t({ en: 'Same Sprint', es: 'Mismo Sprint' })}
        </button>
        <button
          onClick={() => setMode('ahead')}
          className={`flex-1 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
            mode === 'ahead'
              ? 'bg-green-500/20 text-green-300 border border-green-500/30'
              : 'text-zinc-400 hover:text-zinc-200'
          }`}
        >
          {t({ en: 'One Sprint Ahead', es: 'Un Sprint Adelante' })}
        </button>
      </div>

      {/* Timeline Diagram */}
      <motion.div
        key={mode}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 mb-4"
      >
        {/* Visual Timeline */}
        <div className="mb-6 overflow-x-auto">
          <div className="min-w-[500px]">
            {/* Sprint Labels */}
            <div className="grid grid-cols-3 gap-2 mb-3">
              <div className="text-center text-xs font-bold text-zinc-500 uppercase tracking-wider">
                {t({ en: 'Sprint N-1', es: 'Sprint N-1' })}
              </div>
              <div className="text-center text-xs font-bold text-violet-400 uppercase tracking-wider">
                {t({ en: 'Sprint N (Current)', es: 'Sprint N (Actual)' })}
              </div>
              <div className="text-center text-xs font-bold text-zinc-500 uppercase tracking-wider">
                {t({ en: 'Sprint N+1', es: 'Sprint N+1' })}
              </div>
            </div>

            {/* Discovery Track */}
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[10px] font-bold text-violet-400 uppercase tracking-wider w-16 shrink-0">
                {t({ en: 'Design', es: 'Diseño' })}
              </span>
              <div className="flex-1 grid grid-cols-3 gap-2">
                {mode === 'ahead' ? (
                  <>
                    <div className="h-10 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
                      <span className="text-[10px] text-violet-400/60">{t({ en: 'Shipped', es: 'Lanzado' })}</span>
                    </div>
                    <div className="h-10 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
                      <span className="text-[10px] text-violet-300">{t({ en: 'Support Dev', es: 'Apoyar Dev' })}</span>
                    </div>
                    <div className="h-10 rounded-lg bg-violet-500/30 border border-violet-500/40 flex items-center justify-center">
                      <span className="text-[10px] text-violet-200 font-semibold">{t({ en: 'Prototype N+1', es: 'Prototipo N+1' })}</span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="h-10 rounded-lg bg-zinc-800/50 border border-zinc-700 flex items-center justify-center">
                      <span className="text-[10px] text-zinc-500">-</span>
                    </div>
                    <div className="h-10 rounded-lg bg-red-500/20 border border-red-500/30 flex items-center justify-center">
                      <span className="text-[10px] text-red-300 font-semibold">{t({ en: 'Design + Dev', es: 'Diseño + Dev' })}</span>
                    </div>
                    <div className="h-10 rounded-lg bg-zinc-800/50 border border-zinc-700 flex items-center justify-center">
                      <span className="text-[10px] text-zinc-500">{t({ en: 'Unknown', es: 'Desconocido' })}</span>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Delivery Track */}
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider w-16 shrink-0">
                {t({ en: 'Dev', es: 'Dev' })}
              </span>
              <div className="flex-1 grid grid-cols-3 gap-2">
                {mode === 'ahead' ? (
                  <>
                    <div className="h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                      <span className="text-[10px] text-emerald-400/60">{t({ en: 'Shipped', es: 'Lanzado' })}</span>
                    </div>
                    <div className="h-10 rounded-lg bg-emerald-500/30 border border-emerald-500/40 flex items-center justify-center">
                      <span className="text-[10px] text-emerald-200 font-semibold">{t({ en: 'Build N', es: 'Construir N' })}</span>
                    </div>
                    <div className="h-10 rounded-lg bg-zinc-800/50 border border-zinc-700 flex items-center justify-center">
                      <span className="text-[10px] text-zinc-500">{t({ en: 'Next', es: 'Siguiente' })}</span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="h-10 rounded-lg bg-zinc-800/50 border border-zinc-700 flex items-center justify-center">
                      <span className="text-[10px] text-zinc-500">-</span>
                    </div>
                    <div className="h-10 rounded-lg bg-red-500/20 border border-red-500/30 flex items-center justify-center">
                      <span className="text-[10px] text-red-300 font-semibold">{t({ en: 'Waiting...', es: 'Esperando...' })}</span>
                    </div>
                    <div className="h-10 rounded-lg bg-zinc-800/50 border border-zinc-700 flex items-center justify-center">
                      <span className="text-[10px] text-zinc-500">-</span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-zinc-300 leading-relaxed mb-5">{t(current.description)}</p>

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-3">
          <div className={`rounded-xl border p-4 ${current.riskBg}`}>
            <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 mb-1">
              {t({ en: 'Risk Level', es: 'Nivel de Riesgo' })}
            </p>
            <p className={`text-lg font-bold ${current.riskColor}`}>{t(current.risk)}</p>
          </div>
          <div className={`rounded-xl border p-4 ${current.riskBg}`}>
            <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 mb-1">
              {t({ en: 'Rework Rate', es: 'Tasa de Retrabajo' })}
            </p>
            <p className={`text-lg font-bold ${current.reworkColor}`}>{t(current.rework)}</p>
          </div>
          <div className={`rounded-xl border p-4 ${current.riskBg}`}>
            <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 mb-1">
              {t({ en: 'Dev Blocking', es: 'Bloqueo Dev' })}
            </p>
            <p className={`text-lg font-bold ${current.blockingColor}`}>{t(current.blocking)}</p>
          </div>
        </div>
      </motion.div>

      {/* Key insight */}
      <div className="bg-violet-500/5 border border-violet-500/20 rounded-xl px-5 py-3">
        <p className="text-xs text-zinc-400 leading-relaxed">
          <span className="font-semibold text-violet-300">
            {t({ en: 'Critical risk:', es: 'Riesgo crítico:' })}
          </span>{' '}
          {t({
            en: 'Designing in the same sprint as development creates a dependency chain: dev waits for design → design rushes → incomplete specs → dev builds wrong → rework. This compounds every sprint until the team is in permanent firefighting mode.',
            es: 'Diseñar en el mismo sprint que desarrollo crea una cadena de dependencia: dev espera diseño → diseño se apresura → specs incompletas → dev construye mal → retrabajo. Esto se acumula cada sprint hasta que el equipo está en modo de apagar incendios permanente.'
          })}
        </p>
      </div>
    </section>
  );
}

// ─── Section 2: Definition of Ready Checker ───────────────────
export function DoRChecklist() {
  const { t } = useLanguage();

  const items = [
    { id: 'story', label: { en: 'User story clear and follows format (As a... I want... So that...)', es: 'User story clara y sigue formato (Como... Quiero... Para que...)' }, icon: PenLine },
    { id: 'criteria', label: { en: 'Acceptance criteria defined (Given/When/Then)', es: 'Criterios de aceptación definidos (Given/When/Then)' }, icon: CheckCircle2 },
    { id: 'edges', label: { en: 'Edge cases listed (empty, error, overflow, permission)', es: 'Edge cases listados (vacío, error, overflow, permisos)' }, icon: AlertTriangle },
    { id: 'figma', label: { en: 'Figma link attached with all states designed', es: 'Link de Figma adjunto con todos los estados diseñados' }, icon: Target },
    { id: 'deps', label: { en: 'Dependencies identified (API, other tickets, teams)', es: 'Dependencias identificadas (API, otros tickets, equipos)' }, icon: GitBranch },
    { id: 'analytics', label: { en: 'Analytics events defined (what to track post-launch)', es: 'Eventos de analytics definidos (qué trackear post-lanzamiento)' }, icon: Zap },
    { id: 'nfr', label: { en: 'Non-functional requirements considered (perf, a11y, i18n)', es: 'Requisitos no funcionales considerados (rendimiento, a11y, i18n)' }, icon: Shield },
  ];

  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const checkedCount = Object.values(checked).filter(Boolean).length;
  const allChecked = checkedCount === items.length;
  const isPartial = checkedCount > 0 && !allChecked;

  return (
    <section id="dor-checker" className="mb-12 scroll-mt-24">
      <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
        <Shield className="size-6 text-emerald-400" />
        {t({ en: 'Definition of Ready Checker', es: 'Verificador de Definition of Ready' })}
      </h2>
      <p className="text-zinc-400 mb-6 leading-relaxed">
        {t({
          en: 'Before a ticket enters Sprint Planning, it must meet these criteria. This is your quality gate — no ticket passes without DoR.',
          es: 'Antes de que un ticket entre a Sprint Planning, debe cumplir estos criterios. Esta es tu puerta de calidad — ningún ticket pasa sin DoR.'
        })}
      </p>

      <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6">
        <div className="space-y-3 mb-6">
          {items.map((item) => {
            const Icon = item.icon;
            const isChecked = checked[item.id] || false;
            return (
              <button
                key={item.id}
                onClick={() => setChecked(prev => ({ ...prev, [item.id]: !prev[item.id] }))}
                className={`w-full flex items-center gap-3 p-3.5 rounded-xl border transition-all text-left ${
                  isChecked
                    ? 'bg-emerald-500/10 border-emerald-500/30'
                    : 'bg-zinc-900/30 border-zinc-700 hover:border-zinc-600'
                }`}
              >
                <div className={`size-5 rounded border-2 flex items-center justify-center shrink-0 transition-colors ${
                  isChecked ? 'bg-emerald-500 border-emerald-500' : 'border-zinc-600'
                }`}>
                  {isChecked && <CheckCircle2 className="size-3.5 text-white" />}
                </div>
                <Icon className={`size-4 shrink-0 ${isChecked ? 'text-emerald-400' : 'text-zinc-500'}`} />
                <span className={`text-sm leading-relaxed ${isChecked ? 'text-emerald-200' : 'text-zinc-300'}`}>
                  {t(item.label)}
                </span>
              </button>
            );
          })}
        </div>

        {/* Status indicator */}
        <motion.div
          key={allChecked ? 'ready' : 'notready'}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className={`rounded-xl border p-4 flex items-center gap-3 ${
            allChecked
              ? 'bg-emerald-500/10 border-emerald-500/30'
              : 'bg-amber-500/10 border-amber-500/30'
          }`}
        >
          {allChecked ? (
            <CheckCircle2 className="size-6 text-emerald-400 shrink-0" />
          ) : (
            <AlertTriangle className="size-6 text-amber-400 shrink-0" />
          )}
          <div>
            <p className={`text-sm font-bold ${allChecked ? 'text-emerald-300' : 'text-amber-300'}`}>
              {allChecked
                ? t({ en: 'Ready for Sprint Planning', es: 'Listo para Sprint Planning' })
                : t({ en: 'High risk of sprint friction', es: 'Alto riesgo de fricción en sprint' })
              }
            </p>
            <p className="text-xs text-zinc-400 mt-0.5">
              {t({ en: `${checkedCount}/${items.length} criteria met`, es: `${checkedCount}/${items.length} criterios cumplidos` })}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Section 3: Sprint Ceremony Playbook ──────────────────────
export function SprintCeremonyPlaybook() {
  const { t } = useLanguage();

  const ceremonies = [
    {
      name: { en: 'Sprint Planning', es: 'Sprint Planning' },
      icon: Target,
      color: 'text-blue-400',
      border: 'border-blue-500/20',
      bg: 'bg-blue-500/5',
      blocks: [
        {
          heading: { en: 'What UX should bring', es: 'Qué debe traer UX' },
          items: {
            en: [
              'Finalized Figma mockups for all tickets meeting DoR',
              'Documented edge cases and empty/error/loading states',
              'Component mapping to existing design system',
              'Responsive breakpoint annotations',
            ],
            es: [
              'Mockups finalizados en Figma para todos los tickets que cumplen DoR',
              'Edge cases documentados y estados vacío/error/carga',
              'Mapeo de componentes al design system existente',
              'Anotaciones de breakpoints responsive',
            ]
          }
        },
        {
          heading: { en: 'What to clarify', es: 'Qué clarificar' },
          items: {
            en: [
              '"Does this API endpoint return the data shape I designed for?"',
              '"What\'s the performance budget for this animation?"',
              '"Are there feature flags we need to account for?"',
            ],
            es: [
              '"¿Este endpoint de API devuelve la estructura de datos que diseñé?"',
              '"¿Cuál es el presupuesto de rendimiento para esta animación?"',
              '"¿Hay feature flags que necesitamos considerar?"',
            ]
          }
        },
        {
          heading: { en: 'What to push back on', es: 'En qué resistir' },
          items: {
            en: [
              'Tickets without acceptance criteria — "This needs DoR before we commit"',
              'Scope added mid-Planning — "Let\'s add that to the backlog for next sprint"',
              'Over-commitment — "We estimated 8 points but are pulling in 13 — something will slip"',
            ],
            es: [
              'Tickets sin criterios de aceptación — "Esto necesita DoR antes de comprometernos"',
              'Alcance agregado durante Planning — "Agreguemos eso al backlog para el próximo sprint"',
              'Sobre-compromiso — "Estimamos 8 puntos pero estamos jalando 13 — algo se resbalará"',
            ]
          }
        }
      ]
    },
    {
      name: { en: 'Daily Scrum', es: 'Daily Scrum' },
      icon: Clock,
      color: 'text-amber-400',
      border: 'border-amber-500/20',
      bg: 'bg-amber-500/5',
      blocks: [
        {
          heading: { en: 'What to say', es: 'Qué decir' },
          items: {
            en: [
              '"Yesterday: finalized responsive variants for checkout (ticket #234)"',
              '"Today: pairing with Maria on form validation micro-interactions"',
              '"I\'ll update the Figma link in Jira by 2pm"',
            ],
            es: [
              '"Ayer: finalicé variantes responsive para checkout (ticket #234)"',
              '"Hoy: trabajo en pareja con María en micro-interacciones de validación de formulario"',
              '"Actualizaré el link de Figma en Jira para las 2pm"',
            ]
          }
        },
        {
          heading: { en: 'When to flag blockers', es: 'Cuándo señalar bloqueadores' },
          items: {
            en: [
              '"Blocked: need API response schema before I can design the error states"',
              '"Blocked: waiting on content team for copy — can\'t finalize empty states"',
              '"Risk: this animation may not work on low-end Android — need eng input"',
            ],
            es: [
              '"Bloqueado: necesito esquema de respuesta de API antes de diseñar estados de error"',
              '"Bloqueado: esperando al equipo de contenido por copy — no puedo finalizar estados vacíos"',
              '"Riesgo: esta animación podría no funcionar en Android de gama baja — necesito input de ing"',
            ]
          }
        },
        {
          heading: { en: 'When NOT to redesign mid-sprint', es: 'Cuándo NO rediseñar a mitad de sprint' },
          items: {
            en: [
              'If the feature is already in code review — log it as design debt for next sprint',
              'If the change would affect more than 2 tickets — scope it as a separate story',
              'If it\'s cosmetic, not functional — add to polish backlog, don\'t interrupt flow',
            ],
            es: [
              'Si el feature ya está en code review — regístralo como deuda de diseño para el próximo sprint',
              'Si el cambio afectaría más de 2 tickets — delimítalo como una story separada',
              'Si es cosmético, no funcional — agrega al backlog de pulido, no interrumpas el flujo',
            ]
          }
        }
      ]
    },
    {
      name: { en: 'Sprint Review', es: 'Sprint Review' },
      icon: Megaphone,
      color: 'text-emerald-400',
      border: 'border-emerald-500/20',
      bg: 'bg-emerald-500/5',
      blocks: [
        {
          heading: { en: 'How to present UX work', es: 'Cómo presentar trabajo UX' },
          items: {
            en: [
              'Demo on the real product, not just Figma — show the shipped experience',
              'Use before/after comparisons: "This was the old flow (3 steps, 45% drop-off). This is the new flow (2 steps)"',
              'Preview upcoming work: "Next sprint we\'re tackling the settings redesign — early wireframes in Figma"',
            ],
            es: [
              'Demuestra en el producto real, no solo Figma — muestra la experiencia lanzada',
              'Usa comparaciones antes/después: "Este era el flujo viejo (3 pasos, 45% abandono). Este es el nuevo (2 pasos)"',
              'Previsualiza trabajo próximo: "Siguiente sprint abordamos el rediseño de settings — wireframes tempranos en Figma"',
            ]
          }
        },
        {
          heading: { en: 'How to handle stakeholder feedback', es: 'Cómo manejar feedback de stakeholders' },
          items: {
            en: [
              'Acknowledge: "Great point — let me note that" (never dismiss feedback in public)',
              'Defer scope: "That\'s a good idea for V2. Let me add it to the backlog with context"',
              'Redirect opinions: "What user problem are we solving with that change? Let\'s test it"',
            ],
            es: [
              'Reconoce: "Buen punto — déjame anotarlo" (nunca descartes feedback en público)',
              'Difiere alcance: "Buena idea para V2. Déjame agregarla al backlog con contexto"',
              'Redirige opiniones: "¿Qué problema del usuario resolvemos con ese cambio? Vamos a probarlo"',
            ]
          }
        }
      ]
    },
    {
      name: { en: 'Retrospective', es: 'Retrospectiva' },
      icon: RotateCcw,
      color: 'text-rose-400',
      border: 'border-rose-500/20',
      bg: 'bg-rose-500/5',
      blocks: [
        {
          heading: { en: 'UX-specific metrics to track', es: 'Métricas específicas de UX a trackear' },
          items: {
            en: [
              'Design handoff timeliness: % of tickets with Figma link before Sprint Planning',
              'Dev clarification requests: # of "what should this look like?" questions mid-sprint',
              'Design rework: # of tickets returned with "doesn\'t match design" feedback',
              'Sprint spillover: # of design tickets that didn\'t complete in the sprint',
            ],
            es: [
              'Puntualidad de handoff de diseño: % de tickets con link de Figma antes de Sprint Planning',
              'Solicitudes de aclaración de dev: # de preguntas "¿cómo debería verse esto?" a mitad de sprint',
              'Retrabajo de diseño: # de tickets devueltos con feedback de "no coincide con diseño"',
              'Spillover de sprint: # de tickets de diseño que no se completaron en el sprint',
            ]
          }
        },
        {
          heading: { en: 'Common UX retro themes', es: 'Temas comunes de retro UX' },
          items: {
            en: [
              '"I handed off designs late — can we add a design review checkpoint on Wednesday?"',
              '"Engineers asked about edge cases I hadn\'t covered — I\'ll add an edge case section to every ticket"',
              '"Stakeholder added scope during Review — we need a clearer parking lot process"',
              '"I spent too much time on pixel-perfection in early sprints — I\'ll use lo-fi for discovery tickets"',
            ],
            es: [
              '"Entregué diseños tarde — ¿podemos agregar un checkpoint de revisión de diseño los miércoles?"',
              '"Ingenieros preguntaron por edge cases que no había cubierto — agregaré sección de edge cases a cada ticket"',
              '"Stakeholder agregó alcance durante Review — necesitamos proceso de parking lot más claro"',
              '"Pasé demasiado tiempo en pixel-perfection en sprints tempranos — usaré lo-fi para tickets de discovery"',
            ]
          }
        }
      ]
    }
  ];

  return (
    <section id="ceremony-playbook" className="mb-12 scroll-mt-24">
      <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
        <Users className="size-6 text-blue-400" />
        {t({ en: 'Sprint Ceremony Playbook', es: 'Playbook de Ceremonias de Sprint' })}
      </h2>
      <p className="text-zinc-400 mb-6 leading-relaxed">
        {t({
          en: 'Tactical guidance for each Scrum ceremony. What to say, what to bring, and when to push back — based on real enterprise scenarios.',
          es: 'Guía táctica para cada ceremonia Scrum. Qué decir, qué traer, y cuándo resistir — basado en escenarios empresariales reales.'
        })}
      </p>

      <div className="space-y-5">
        {ceremonies.map((ceremony, ci) => {
          const Icon = ceremony.icon;
          return (
            <motion.div
              key={ci}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.08 }}
              className={`rounded-2xl border ${ceremony.border} ${ceremony.bg} p-5 md:p-6`}
            >
              <div className="flex items-center gap-3 mb-5">
                <Icon className={`size-5 ${ceremony.color}`} />
                <h3 className={`text-lg font-bold ${ceremony.color}`}>{t(ceremony.name)}</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {ceremony.blocks.map((block, bi) => (
                  <div key={bi} className="bg-zinc-900/60 rounded-xl p-4">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3">
                      {t(block.heading)}
                    </h4>
                    <ul className="space-y-2">
                      {t(block.items).map((item: string, ii: number) => (
                        <li key={ii} className="flex gap-2 text-xs text-zinc-300 leading-relaxed">
                          <ChevronRight className="size-3 text-zinc-600 mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

// ─── Section 4: UX–Dev Negotiation & Trade-offs ───────────────
export function UXDevNegotiation() {
  const { t } = useLanguage();

  const scenarios = [
    {
      trigger: { en: '"This is not technically feasible"', es: '"Esto no es técnicamente viable"' },
      response: {
        en: 'Don\'t argue — ask questions. "What part isn\'t feasible? The animation? The layout? The data requirement?" Often "not feasible" means "not feasible in this sprint." Identify the constraint and propose a phased approach.',
        es: 'No discutas — haz preguntas. "¿Qué parte no es viable? ¿La animación? ¿El layout? ¿El requisito de datos?" A menudo "no viable" significa "no viable en este sprint." Identifica la restricción y propón un enfoque por fases.'
      },
      icon: XCircle,
      color: 'text-red-400',
    },
    {
      trigger: { en: 'Negotiating scope vs quality', es: 'Negociando alcance vs calidad' },
      response: {
        en: 'Use the triangle: "We can ship this feature with full animations (3 sprints), basic transitions (2 sprints), or no animations (1 sprint). Which aligns with our deadline?" Let the PM decide priority — but present the trade-offs clearly.',
        es: 'Usa el triángulo: "Podemos lanzar este feature con animaciones completas (3 sprints), transiciones básicas (2 sprints), o sin animaciones (1 sprint). ¿Cuál se alinea con nuestro deadline?" Deja que el PM decida prioridad — pero presenta los trade-offs claramente.'
      },
      icon: Scale,
      color: 'text-amber-400',
    },
    {
      trigger: { en: 'Documenting design debt', es: 'Documentando deuda de diseño' },
      response: {
        en: 'Create a "Design Debt" label in Jira/Linear. Every time you ship an MVP version instead of the ideal, log the ticket: "DESIGN-DEBT: Checkout flow shipped without micro-interactions. Estimated effort to complete: 3 points. Impact: brand perception."',
        es: 'Crea una etiqueta "Design Debt" en Jira/Linear. Cada vez que lanzas una versión MVP en lugar de la ideal, registra el ticket: "DESIGN-DEBT: Flujo de checkout lanzado sin micro-interacciones. Esfuerzo estimado para completar: 3 puntos. Impacto: percepción de marca."'
      },
      icon: FileWarning,
      color: 'text-orange-400',
    },
    {
      trigger: { en: 'Splitting features into increments', es: 'Dividiendo features en incrementos' },
      response: {
        en: 'Think in vertical slices, not horizontal layers. Don\'t ship "backend only" then "frontend only." Ship: Increment 1 = basic flow (happy path only), Increment 2 = edge cases + error handling, Increment 3 = animations + polish.',
        es: 'Piensa en cortes verticales, no capas horizontales. No lances "solo backend" luego "solo frontend." Lanza: Incremento 1 = flujo básico (solo happy path), Incremento 2 = edge cases + manejo de errores, Incremento 3 = animaciones + pulido.'
      },
      icon: Layers,
      color: 'text-blue-400',
    },
    {
      trigger: { en: 'When to escalate vs compromise', es: 'Cuándo escalar vs comprometer' },
      response: {
        en: 'Compromise on visual polish and animation timing. Escalate on: accessibility violations, broken user flows, data integrity issues, or removing features users depend on. Rule of thumb: if it affects usability or trust, escalate. If it affects aesthetics, compromise.',
        es: 'Compromete en pulido visual y timing de animaciones. Escala en: violaciones de accesibilidad, flujos de usuario rotos, problemas de integridad de datos, o remover features de los que usuarios dependen. Regla general: si afecta usabilidad o confianza, escala. Si afecta estética, compromete.'
      },
      icon: Handshake,
      color: 'text-violet-400',
    },
  ];

  return (
    <section id="ux-dev-negotiation" className="mb-12 scroll-mt-24">
      <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
        <Handshake className="size-6 text-amber-400" />
        {t({ en: 'UX-Dev Negotiation & Trade-offs', es: 'Negociación UX-Dev y Trade-offs' })}
      </h2>
      <p className="text-zinc-400 mb-6 leading-relaxed">
        {t({
          en: 'Real-world design delivery means constant negotiation with engineering. Master these scenarios to protect user experience while respecting technical constraints.',
          es: 'La entrega de diseño del mundo real implica negociación constante con ingeniería. Domina estos escenarios para proteger la experiencia de usuario respetando restricciones técnicas.'
        })}
      </p>

      {/* Scenarios */}
      <div className="space-y-4 mb-6">
        {scenarios.map((s, i) => {
          const Icon = s.icon;
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
                <Icon className={`size-5 ${s.color} shrink-0 mt-0.5`} />
                <div className="flex-1 min-w-0">
                  <h4 className={`text-sm font-bold ${s.color} mb-2`}>{t(s.trigger)}</h4>
                  <p className="text-sm text-zinc-300 leading-relaxed">{t(s.response)}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Incremental UX Visual */}
      <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6">
        <h4 className="text-sm font-bold text-zinc-400 uppercase tracking-wider mb-4">
          {t({ en: 'Incremental UX Delivery', es: 'Entrega Incremental de UX' })}
        </h4>
        <div className="flex flex-col sm:flex-row items-stretch gap-3">
          <div className="flex-1 rounded-xl border border-amber-500/30 bg-amber-500/5 p-4 text-center">
            <p className="text-[10px] font-bold uppercase tracking-wider text-amber-400 mb-2">
              {t({ en: 'MVP UX', es: 'UX MVP' })}
            </p>
            <p className="text-xs text-zinc-300">{t({ en: 'Happy path only. Basic layout. No animations.', es: 'Solo happy path. Layout básico. Sin animaciones.' })}</p>
            <p className="text-[10px] text-zinc-500 mt-2">{t({ en: 'Sprint 1', es: 'Sprint 1' })}</p>
          </div>

          <div className="flex items-center justify-center shrink-0">
            <ArrowRight className="size-5 text-zinc-600 rotate-90 sm:rotate-0" />
          </div>

          <div className="flex-1 rounded-xl border border-blue-500/30 bg-blue-500/5 p-4 text-center">
            <p className="text-[10px] font-bold uppercase tracking-wider text-blue-400 mb-2">
              {t({ en: 'Increment 2', es: 'Incremento 2' })}
            </p>
            <p className="text-xs text-zinc-300">{t({ en: 'Edge cases. Error states. Empty states. Responsive.', es: 'Edge cases. Estados de error. Estados vacíos. Responsive.' })}</p>
            <p className="text-[10px] text-zinc-500 mt-2">{t({ en: 'Sprint 2', es: 'Sprint 2' })}</p>
          </div>

          <div className="flex items-center justify-center shrink-0">
            <ArrowRight className="size-5 text-zinc-600 rotate-90 sm:rotate-0" />
          </div>

          <div className="flex-1 rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-4 text-center">
            <p className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 mb-2">
              {t({ en: 'Full Ideal UX', es: 'UX Ideal Completa' })}
            </p>
            <p className="text-xs text-zinc-300">{t({ en: 'Micro-interactions. Transitions. Delight moments. A11y polish.', es: 'Micro-interacciones. Transiciones. Momentos de deleite. Pulido a11y.' })}</p>
            <p className="text-[10px] text-zinc-500 mt-2">{t({ en: 'Sprint 3', es: 'Sprint 3' })}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Main Export ───────────────────────────────────────────────
export function ScrumExtras() {
  return (
    <>
      <DualTrackVisualizer />
      <DoRChecklist />
      <SprintCeremonyPlaybook />
      <UXDevNegotiation />
    </>
  );
}
