import React, { useState } from 'react';
import { useLanguage } from '../layout/LanguageContext';
import { Calendar, Users, Target, Copy, Check, Clock, AlertTriangle, ShieldCheck, Zap } from 'lucide-react';
import { copyToClipboard } from '../../utils/clipboard';

interface AgendaItem {
  day: string;
  time: string;
  session: { en: string; es: string };
  duration: string;
  owner: { en: string; es: string };
  output: { en: string; es: string };
  stakeholderRequired?: boolean;
}

type SprintFormat = '5day' | '3day' | '2day';

const FORMAT_META: Record<SprintFormat, {
  label: { en: string; es: string };
  desc: { en: string; es: string };
  risk: { en: string; es: string };
  riskColor: string;
  riskBg: string;
  dayCount: number;
}> = {
  '5day': {
    label: { en: '5-Day Classic', es: '5 Días Clásico' },
    desc: { en: 'Full GV-style sprint. Deep exploration, comprehensive validation.', es: 'Sprint estilo GV completo. Exploración profunda, validación comprehensiva.' },
    risk: { en: 'Low', es: 'Bajo' },
    riskColor: 'text-green-400',
    riskBg: 'bg-green-500/10 border-green-500/30',
    dayCount: 5,
  },
  '3day': {
    label: { en: '3-Day Sprint', es: 'Sprint de 3 Días' },
    desc: { en: 'Compressed. Faster results, less divergent exploration.', es: 'Comprimido. Resultados más rápidos, menos exploración divergente.' },
    risk: { en: 'Medium', es: 'Medio' },
    riskColor: 'text-amber-400',
    riskBg: 'bg-amber-500/10 border-amber-500/30',
    dayCount: 3,
  },
  '2day': {
    label: { en: '2-Day Sprint', es: 'Sprint de 2 Días' },
    desc: { en: 'Minimal. Quick directional signal, shallow depth.', es: 'Mínimo. Señal direccional rápida, profundidad limitada.' },
    risk: { en: 'High', es: 'Alto' },
    riskColor: 'text-red-400',
    riskBg: 'bg-red-500/10 border-red-500/30',
    dayCount: 2,
  },
};

export function SprintPlanner() {
  const { t, language } = useLanguage();

  const [format, setFormat] = useState<SprintFormat>('5day');
  const [teamSize, setTeamSize] = useState<number>(7);
  const [goal, setGoal] = useState('');
  const [agenda, setAgenda] = useState<AgendaItem[]>([]);
  const [copied, setCopied] = useState(false);

  const meta = FORMAT_META[format];

  const generateAgenda = () => {
    if (!goal.trim()) return;

    let gen: AgendaItem[] = [];

    if (format === '5day') {
      gen = [
        {
          day: t({ en: 'Monday', es: 'Lunes' }),
          time: '9:00 - 10:00',
          session: { en: 'Set long-term goal & sprint questions', es: 'Establecer objetivo largo plazo y preguntas' },
          duration: '60min',
          owner: { en: 'Facilitator', es: 'Facilitador' },
          output: { en: 'Sprint brief document', es: 'Documento brief del sprint' },
          stakeholderRequired: true,
        },
        {
          day: t({ en: 'Monday', es: 'Lunes' }),
          time: '10:00 - 12:00',
          session: { en: 'Expert interviews (3-4 experts)', es: 'Entrevistas con expertos (3-4 expertos)' },
          duration: '120min',
          owner: { en: 'Whole team', es: 'Todo el equipo' },
          output: { en: 'Key insights notes (HMW format)', es: 'Notas de insights clave (formato HMW)' },
          stakeholderRequired: true,
        },
        {
          day: t({ en: 'Monday', es: 'Lunes' }),
          time: '13:00 - 16:00',
          session: { en: 'Map user journey & pick target moment', es: 'Mapear viaje de usuario y elegir momento objetivo' },
          duration: '180min',
          owner: { en: 'Facilitator + Designer', es: 'Facilitador + Diseñador' },
          output: { en: 'Journey map with target area circled', es: 'Mapa de viaje con área objetivo marcada' },
          stakeholderRequired: true,
        },
        {
          day: t({ en: 'Tuesday', es: 'Martes' }),
          time: '9:00 - 11:00',
          session: { en: 'Lightning demos (competitors + analogous)', es: 'Lightning demos (competidores + análogos)' },
          duration: '120min',
          owner: { en: 'All participants', es: 'Todos los participantes' },
          output: { en: 'Inspiration library', es: 'Biblioteca de inspiración' },
        },
        {
          day: t({ en: 'Tuesday', es: 'Martes' }),
          time: '11:00 - 12:00',
          session: { en: 'Crazy 8s warm-up sketching', es: 'Calentamiento Crazy 8s' },
          duration: '60min',
          owner: { en: 'Individual (silent)', es: 'Individual (silencioso)' },
          output: { en: '8 rough sketches per person', es: '8 bocetos por persona' },
        },
        {
          day: t({ en: 'Tuesday', es: 'Martes' }),
          time: '13:00 - 16:00',
          session: { en: 'Solution sketch (3-panel storyboard)', es: 'Boceto de solución (storyboard 3 paneles)' },
          duration: '180min',
          owner: { en: 'Individual (silent)', es: 'Individual (silencioso)' },
          output: { en: 'Detailed solution sketches (anonymous)', es: 'Bocetos de solución detallados (anónimos)' },
        },
        {
          day: t({ en: 'Wednesday', es: 'Miércoles' }),
          time: '9:00 - 11:00',
          session: { en: 'Art museum + heat map voting', es: 'Galería de arte + votación heat map' },
          duration: '120min',
          owner: { en: 'Facilitator', es: 'Facilitador' },
          output: { en: 'Voted concepts with clusters', es: 'Conceptos votados con clusters' },
        },
        {
          day: t({ en: 'Wednesday', es: 'Miércoles' }),
          time: '11:00 - 12:00',
          session: { en: 'Decider super votes & rumble (if needed)', es: 'Super votos del Decisor y rumble (si necesario)' },
          duration: '60min',
          owner: { en: 'Decider', es: 'Decisor' },
          output: { en: 'Winning concept selected', es: 'Concepto ganador seleccionado' },
          stakeholderRequired: true,
        },
        {
          day: t({ en: 'Wednesday', es: 'Miércoles' }),
          time: '13:00 - 17:00',
          session: { en: 'Build detailed storyboard (10-15 frames)', es: 'Construir storyboard detallado (10-15 cuadros)' },
          duration: '240min',
          owner: { en: 'Designer + Team', es: 'Diseñador + Equipo' },
          output: { en: 'Test-ready storyboard', es: 'Storyboard listo para testear' },
        },
        {
          day: t({ en: 'Thursday', es: 'Jueves' }),
          time: '9:00 - 17:00',
          session: { en: 'Build prototype (Figma: Maker, Writer, Collector)', es: 'Construir prototipo (Figma: Maker, Writer, Collector)' },
          duration: '480min',
          owner: { en: 'Maker + Stitcher + Writer + Asset Collector', es: 'Maker + Stitcher + Writer + Collector' },
          output: { en: 'High-fidelity clickable prototype', es: 'Prototipo clicable alta fidelidad' },
        },
        {
          day: t({ en: 'Friday', es: 'Viernes' }),
          time: '9:00 - 16:00',
          session: { en: '5 user tests (1hr each, 30min breaks)', es: '5 pruebas de usuario (1h cada una, 30min descansos)' },
          duration: '420min',
          owner: { en: 'Interviewer + Note-taker', es: 'Entrevistador + Tomador de notas' },
          output: { en: 'Test recordings, observation grid', es: 'Grabaciones, grid de observación' },
        },
        {
          day: t({ en: 'Friday', es: 'Viernes' }),
          time: '16:00 - 17:00',
          session: { en: 'Debrief: patterns, decisions, next steps', es: 'Debrief: patrones, decisiones, próximos pasos' },
          duration: '60min',
          owner: { en: 'Whole team', es: 'Todo el equipo' },
          output: { en: 'Sprint findings report + go/no-go', es: 'Reporte de hallazgos + go/no-go' },
          stakeholderRequired: true,
        },
      ];
    } else if (format === '3day') {
      gen = [
        {
          day: t({ en: 'Day 1 – Understand & Sketch', es: 'Día 1 – Entender y Bocetear' }),
          time: '9:00 - 10:30',
          session: { en: 'Set goal, map journey, pick target', es: 'Establecer objetivo, mapear viaje, elegir target' },
          duration: '90min',
          owner: { en: 'Facilitator', es: 'Facilitador' },
          output: { en: 'Sprint focus & journey map', es: 'Enfoque del sprint y mapa de viaje' },
          stakeholderRequired: true,
        },
        {
          day: t({ en: 'Day 1 – Understand & Sketch', es: 'Día 1 – Entender y Bocetear' }),
          time: '10:30 - 12:30',
          session: { en: 'Lightning demos + Crazy 8s', es: 'Lightning demos + Crazy 8s' },
          duration: '120min',
          owner: { en: 'All participants', es: 'Todos los participantes' },
          output: { en: 'Inspiration + rough sketches', es: 'Inspiración + bocetos rápidos' },
        },
        {
          day: t({ en: 'Day 1 – Understand & Sketch', es: 'Día 1 – Entender y Bocetear' }),
          time: '13:30 - 16:00',
          session: { en: 'Solution sketch (individual, silent)', es: 'Boceto de solución (individual, silencioso)' },
          duration: '150min',
          owner: { en: 'Individual work', es: 'Trabajo individual' },
          output: { en: 'Detailed solution sketches', es: 'Bocetos de solución detallados' },
        },
        {
          day: t({ en: 'Day 1 – Understand & Sketch', es: 'Día 1 – Entender y Bocetear' }),
          time: '16:00 - 17:00',
          session: { en: 'Vote + Decide + Build storyboard', es: 'Votar + Decidir + Construir storyboard' },
          duration: '60min',
          owner: { en: 'Decider + Designer', es: 'Decisor + Diseñador' },
          output: { en: 'Winning concept + storyboard draft', es: 'Concepto ganador + borrador de storyboard' },
          stakeholderRequired: true,
        },
        {
          day: t({ en: 'Day 2 – Prototype', es: 'Día 2 – Prototipar' }),
          time: '9:00 - 17:00',
          session: { en: 'Build mid-fi prototype in Figma', es: 'Construir prototipo mid-fi en Figma' },
          duration: '480min',
          owner: { en: 'Prototype team (2-3 people)', es: 'Equipo de prototipo (2-3 personas)' },
          output: { en: 'Testable mid-fi prototype', es: 'Prototipo mid-fi testeable' },
        },
        {
          day: t({ en: 'Day 3 – Test & Learn', es: 'Día 3 – Testear y Aprender' }),
          time: '9:00 - 14:00',
          session: { en: '4-5 user tests (45min each)', es: '4-5 pruebas de usuario (45min cada una)' },
          duration: '300min',
          owner: { en: 'Interviewer + Note-taker', es: 'Entrevistador + Tomador de notas' },
          output: { en: 'Test recordings + observation notes', es: 'Grabaciones + notas de observación' },
        },
        {
          day: t({ en: 'Day 3 – Test & Learn', es: 'Día 3 – Testear y Aprender' }),
          time: '14:30 - 17:00',
          session: { en: 'Synthesize findings + next steps', es: 'Sintetizar hallazgos + próximos pasos' },
          duration: '150min',
          owner: { en: 'Whole team', es: 'Todo el equipo' },
          output: { en: 'Action plan + go/no-go decision', es: 'Plan de acción + decisión go/no-go' },
          stakeholderRequired: true,
        },
      ];
    } else {
      // 2-day
      gen = [
        {
          day: t({ en: 'Day 1 – Define & Build', es: 'Día 1 – Definir y Construir' }),
          time: '9:00 - 10:00',
          session: { en: 'Problem framing + goal + constraints', es: 'Enmarcado de problema + objetivo + restricciones' },
          duration: '60min',
          owner: { en: 'Facilitator', es: 'Facilitador' },
          output: { en: 'Problem statement + success criteria', es: 'Declaración de problema + criterios de éxito' },
          stakeholderRequired: true,
        },
        {
          day: t({ en: 'Day 1 – Define & Build', es: 'Día 1 – Definir y Construir' }),
          time: '10:00 - 12:00',
          session: { en: 'Rapid sketch + dot vote + decide', es: 'Boceto rápido + votación + decidir' },
          duration: '120min',
          owner: { en: 'Team + Decider', es: 'Equipo + Decisor' },
          output: { en: 'Winning concept selected', es: 'Concepto ganador seleccionado' },
          stakeholderRequired: true,
        },
        {
          day: t({ en: 'Day 1 – Define & Build', es: 'Día 1 – Definir y Construir' }),
          time: '13:00 - 17:00',
          session: { en: 'Build lo-fi prototype (focus on core flow)', es: 'Construir prototipo lo-fi (enfoque en flujo principal)' },
          duration: '240min',
          owner: { en: 'Designer (solo or pair)', es: 'Diseñador (solo o en pareja)' },
          output: { en: 'Lo-fi clickable prototype', es: 'Prototipo clicable lo-fi' },
        },
        {
          day: t({ en: 'Day 2 – Test & Decide', es: 'Día 2 – Testear y Decidir' }),
          time: '9:00 - 13:00',
          session: { en: '3-5 guerrilla user tests (30-45min each)', es: '3-5 pruebas de guerrilla (30-45min cada una)' },
          duration: '240min',
          owner: { en: 'Interviewer + Note-taker', es: 'Entrevistador + Tomador de notas' },
          output: { en: 'Quick pattern identification', es: 'Identificación rápida de patrones' },
        },
        {
          day: t({ en: 'Day 2 – Test & Decide', es: 'Día 2 – Testear y Decidir' }),
          time: '14:00 - 16:00',
          session: { en: 'Debrief: what worked, what didn\'t, what\'s next', es: 'Debrief: qué funcionó, qué no, qué sigue' },
          duration: '120min',
          owner: { en: 'Whole team', es: 'Todo el equipo' },
          output: { en: 'Findings + recommendations + risk assessment', es: 'Hallazgos + recomendaciones + evaluación de riesgo' },
          stakeholderRequired: true,
        },
      ];
    }

    setAgenda(gen);
  };

  const copyAgenda = () => {
    const riskLabel = t(meta.risk);
    const agendaText = `Design Sprint Agenda (${t(meta.label)})\n\nGoal: ${goal}\nTeam Size: ${teamSize}\nDuration: ${meta.dayCount} days\nRisk Level: ${riskLabel}\n\n${agenda.map(item =>
      `${item.day} | ${item.time} | ${item.session[language]} | ${item.duration} | ${item.owner[language]} | ${item.output[language]}${item.stakeholderRequired ? ' [STAKEHOLDER REQUIRED]' : ''}`
    ).join('\n')}`;

    copyToClipboard(agendaText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-6xl mx-auto space-y-8 mt-12">
      {/* Header */}
      <div className="text-center space-y-3">
        <div className="flex items-center justify-center gap-3">
          <Calendar className="size-8 text-indigo-400" />
          <h3 className="text-3xl font-bold text-white">
            {t({ en: 'Sprint Planner', es: 'Planificador de Sprint' })}
          </h3>
        </div>
        <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
          {t({
            en: 'Generate a custom Design Sprint agenda. Choose your format, configure your team, and get a ready-to-send schedule with risk assessment.',
            es: 'Genera una agenda personalizada de Design Sprint. Elige tu formato, configura tu equipo y obtén un horario listo para enviar con evaluación de riesgo.'
          })}
        </p>
      </div>

      {/* Input Section */}
      <div className="bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 border border-zinc-800 rounded-2xl p-6 space-y-5">
        <div className="flex items-center gap-2 mb-2">
          <Target className="size-5 text-indigo-400" />
          <h4 className="text-lg font-semibold text-white">
            {t({ en: 'Sprint Configuration', es: 'Configuración del Sprint' })}
          </h4>
        </div>

        {/* Format Selector — visual cards */}
        <div>
          <label className="block text-sm font-medium text-zinc-300 mb-3">
            <Zap className="size-4 inline mr-1" />
            {t({ en: 'Sprint Format', es: 'Formato del Sprint' })}
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {(Object.entries(FORMAT_META) as [SprintFormat, typeof FORMAT_META['5day']][]).map(([key, m]) => (
              <button
                key={key}
                onClick={() => { setFormat(key); setAgenda([]); }}
                className={`relative rounded-xl border p-4 text-left transition-all ${
                  format === key
                    ? `${m.riskBg} ring-1 ring-offset-0 ring-${m.riskColor.replace('text-', '')}`
                    : 'border-zinc-800 bg-zinc-900/30 hover:border-zinc-700'
                }`}
              >
                <p className="text-sm font-semibold text-white mb-1">{t(m.label)}</p>
                <p className="text-[11px] text-zinc-400 leading-relaxed mb-2">{t(m.desc)}</p>
                <span className={`inline-block text-[10px] font-bold px-2 py-0.5 rounded-full ${m.riskBg} ${m.riskColor}`}>
                  {t({ en: 'Risk:', es: 'Riesgo:' })} {t(m.risk)}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="teamSize" className="block text-sm font-medium text-zinc-300 mb-2">
              <Users className="size-4 inline mr-1" />
              {t({ en: 'Team Size', es: 'Tamaño del Equipo' })}
            </label>
            <input
              id="teamSize"
              type="number"
              min="3"
              max="12"
              value={teamSize}
              onChange={(e) => setTeamSize(parseInt(e.target.value) || 7)}
              className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-700 rounded-lg text-white focus:outline-none focus:border-indigo-500 transition-colors"
            />
            <p className="text-xs text-zinc-500 mt-1">
              {t({ en: 'Ideal: 5-7 people. Min 3, max 12.', es: 'Ideal: 5-7 personas. Mín 3, máx 12.' })}
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-2">
              <Clock className="size-4 inline mr-1" />
              {t({ en: 'Duration', es: 'Duración' })}
            </label>
            <div className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-700 rounded-lg text-zinc-300">
              {meta.dayCount} {t({ en: 'days', es: 'días' })} — {t(meta.label)}
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="goal" className="block text-sm font-medium text-zinc-300 mb-2">
            {t({ en: 'Sprint Goal (What big question are you answering?)', es: 'Objetivo del Sprint (¿Qué gran pregunta estás respondiendo?)' })}
          </label>
          <textarea
            id="goal"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            placeholder={t({
              en: 'e.g., Can we reduce checkout abandonment by simplifying the payment flow?',
              es: 'ej., ¿Podemos reducir abandono de checkout simplificando el flujo de pago?'
            })}
            rows={2}
            className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
          />
        </div>

        <button
          onClick={generateAgenda}
          disabled={!goal.trim()}
          className="w-full px-6 py-3 bg-indigo-600 hover:bg-indigo-700 disabled:bg-zinc-800 disabled:text-zinc-600 disabled:cursor-not-allowed text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
        >
          <Calendar className="size-5" />
          {t({ en: 'Generate Sprint Agenda', es: 'Generar Agenda del Sprint' })}
        </button>
      </div>

      {/* Generated Agenda */}
      {agenda.length > 0 && (
        <div className="space-y-4">
          {/* Header row with risk + copy */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <h4 className="text-xl font-semibold text-white">
                {t({ en: 'Your Sprint Agenda', es: 'Tu Agenda del Sprint' })}
              </h4>
              <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${meta.riskBg} ${meta.riskColor}`}>
                {t({ en: 'Risk:', es: 'Riesgo:' })} {t(meta.risk)}
              </span>
            </div>
            <button
              onClick={copyAgenda}
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
            >
              {copied ? (
                <>
                  <Check className="size-4" />
                  {t({ en: 'Copied!', es: '¡Copiado!' })}
                </>
              ) : (
                <>
                  <Copy className="size-4" />
                  {t({ en: 'Copy Agenda', es: 'Copiar Agenda' })}
                </>
              )}
            </button>
          </div>

          {/* Legend */}
          <div className="flex flex-wrap gap-4 text-[11px] text-zinc-500">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="size-3.5 text-amber-400" />
              {t({ en: 'Stakeholder / Decider required', es: 'Stakeholder / Decisor requerido' })}
            </span>
          </div>

          {/* Agenda table */}
          <div className="bg-zinc-900/30 border border-zinc-800 rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[700px]">
                <thead>
                  <tr className="bg-zinc-800/50 border-b border-zinc-700">
                    <th className="px-4 py-3 text-left text-xs font-bold text-zinc-400 uppercase tracking-wider">
                      {t({ en: 'Day', es: 'Día' })}
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-bold text-zinc-400 uppercase tracking-wider">
                      {t({ en: 'Time', es: 'Hora' })}
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-bold text-zinc-400 uppercase tracking-wider">
                      {t({ en: 'Session', es: 'Sesión' })}
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-bold text-zinc-400 uppercase tracking-wider">
                      {t({ en: 'Duration', es: 'Duración' })}
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-bold text-zinc-400 uppercase tracking-wider">
                      {t({ en: 'Owner', es: 'Responsable' })}
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-bold text-zinc-400 uppercase tracking-wider">
                      {t({ en: 'Output', es: 'Resultado' })}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {agenda.map((item, idx) => (
                    <tr key={idx} className="border-b border-zinc-800/50 hover:bg-zinc-800/20 transition-colors">
                      <td className="px-4 py-3 text-sm text-white font-medium">{item.day}</td>
                      <td className="px-4 py-3 text-sm text-zinc-300">{item.time}</td>
                      <td className="px-4 py-3 text-sm text-white">
                        <span className="flex items-center gap-2">
                          {item.session[language]}
                          {item.stakeholderRequired && (
                            <ShieldCheck className="size-3.5 text-amber-400 shrink-0" title={t({ en: 'Stakeholder Required', es: 'Stakeholder Requerido' })} />
                          )}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm text-zinc-400">{item.duration}</td>
                      <td className="px-4 py-3 text-sm text-zinc-300">{item.owner[language]}</td>
                      <td className="px-4 py-3 text-sm text-zinc-400">{item.output[language]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Risk & Team Size Warnings */}
          {(format !== '5day' || teamSize < 4 || teamSize > 8) && (
            <div className="bg-amber-500/5 border border-amber-500/20 rounded-xl p-4 flex items-start gap-3">
              <AlertTriangle className="size-5 text-amber-400 shrink-0 mt-0.5" />
              <div className="text-sm text-amber-200 space-y-1">
                {format === '2day' && (
                  <p>{t({ en: 'Warning: 2-day sprints produce shallow validation. Consider a follow-up 3-day sprint if results are inconclusive.', es: 'Advertencia: sprints de 2 días producen validación superficial. Considera un sprint de seguimiento de 3 días si los resultados no son concluyentes.' })}</p>
                )}
                {format === '3day' && (
                  <p>{t({ en: 'Note: 3-day sprints compress sketching + deciding into one day. Ensure participants arrive prepared with competitive research.', es: 'Nota: sprints de 3 días comprimen boceteo + decisión en un día. Asegura que participantes lleguen preparados con investigación competitiva.' })}</p>
                )}
                {teamSize < 4 && (
                  <p>{t({ en: 'Warning: Teams smaller than 4 lack diverse perspectives. Consider adding a subject matter expert.', es: 'Advertencia: equipos menores a 4 carecen de perspectivas diversas. Considera agregar un experto en la materia.' })}</p>
                )}
                {teamSize > 8 && (
                  <p>{t({ en: 'Warning: Teams larger than 8 slow down decision-making. Consider splitting into 2 parallel tracks.', es: 'Advertencia: equipos mayores a 8 ralentizan la toma de decisiones. Considera dividir en 2 vías paralelas.' })}</p>
                )}
              </div>
            </div>
          )}

          <div className="bg-indigo-950/20 border border-indigo-500/30 rounded-xl p-4">
            <p className="text-sm text-indigo-300">
              <strong>{t({ en: 'Pro tip:', es: 'Consejo:' })}</strong> {t({
                en: 'Send this agenda to all participants 1 week before the sprint. Block calendars and confirm the Decider. Sessions marked with the shield icon require stakeholder presence — do not run them without the Decider in the room.',
                es: 'Envía esta agenda a todos los participantes 1 semana antes del sprint. Bloquea calendarios y confirma al Decisor. Sesiones marcadas con el ícono de escudo requieren presencia del stakeholder — no las ejecutes sin el Decisor en la sala.'
              })}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
