import React, { useState } from 'react';
import { useLanguage } from '../layout/LanguageContext';
import { Calendar, Users, Target, Copy, Check, Clock } from 'lucide-react';
import { copyToClipboard } from '../../utils/clipboard';

interface AgendaItem {
  day: string;
  time: string;
  session: { en: string; es: string };
  duration: string;
  owner: { en: string; es: string };
  output: { en: string; es: string };
}

export function SprintPlanner() {
  const { t, language } = useLanguage();
  
  const [teamSize, setTeamSize] = useState<number>(7);
  const [days, setDays] = useState<number>(5);
  const [goal, setGoal] = useState('');
  const [agenda, setAgenda] = useState<AgendaItem[]>([]);
  const [copied, setCopied] = useState(false);

  const generateAgenda = () => {
    if (!goal.trim()) return;

    // Generate agenda based on days available
    let generatedAgenda: AgendaItem[] = [];

    if (days === 5) {
      // Classic 5-day sprint
      generatedAgenda = [
        {
          day: t({ en: 'Monday', es: 'Lunes' }),
          time: '9:00 - 10:00',
          session: { en: 'Set long-term goal & sprint questions', es: 'Establecer objetivo largo plazo y preguntas' },
          duration: '60min',
          owner: { en: 'Facilitator', es: 'Facilitador' },
          output: { en: 'Sprint brief document', es: 'Documento brief del sprint' }
        },
        {
          day: t({ en: 'Monday', es: 'Lunes' }),
          time: '10:00 - 12:00',
          session: { en: 'Expert interviews', es: 'Entrevistas con expertos' },
          duration: '120min',
          owner: { en: 'Whole team', es: 'Todo el equipo' },
          output: { en: 'Key insights notes', es: 'Notas de insights clave' }
        },
        {
          day: t({ en: 'Monday', es: 'Lunes' }),
          time: '13:00 - 16:00',
          session: { en: 'Map user journey & pick target', es: 'Mapear viaje de usuario y elegir objetivo' },
          duration: '180min',
          owner: { en: 'Facilitator + Designer', es: 'Facilitador + Diseñador' },
          output: { en: 'Journey map with target area', es: 'Mapa de viaje con área objetivo' }
        },
        {
          day: t({ en: 'Tuesday', es: 'Martes' }),
          time: '9:00 - 11:00',
          session: { en: 'Lightning demos', es: 'Lightning demos' },
          duration: '120min',
          owner: { en: 'All participants', es: 'Todos los participantes' },
          output: { en: 'Inspiration library', es: 'Biblioteca de inspiración' }
        },
        {
          day: t({ en: 'Tuesday', es: 'Martes' }),
          time: '11:00 - 12:00',
          session: { en: 'Crazy 8s warm-up', es: 'Calentamiento Crazy 8s' },
          duration: '60min',
          owner: { en: 'Individual work', es: 'Trabajo individual' },
          output: { en: '8 rough sketches per person', es: '8 bocetos por persona' }
        },
        {
          day: t({ en: 'Tuesday', es: 'Martes' }),
          time: '13:00 - 16:00',
          session: { en: 'Solution sketch (4-panel storyboard)', es: 'Boceto de solución (storyboard 4 paneles)' },
          duration: '180min',
          owner: { en: 'Individual work', es: 'Trabajo individual' },
          output: { en: 'Detailed solution sketches', es: 'Bocetos de solución detallados' }
        },
        {
          day: t({ en: 'Wednesday', es: 'Miércoles' }),
          time: '9:00 - 11:00',
          session: { en: 'Present sketches & heat map voting', es: 'Presentar bocetos y votación heat map' },
          duration: '120min',
          owner: { en: 'Facilitator', es: 'Facilitador' },
          output: { en: 'Voted concepts', es: 'Conceptos votados' }
        },
        {
          day: t({ en: 'Wednesday', es: 'Miércoles' }),
          time: '11:00 - 12:00',
          session: { en: 'Decider super votes', es: 'Super votos del Decisor' },
          duration: '60min',
          owner: { en: 'Decider', es: 'Decisor' },
          output: { en: 'Winning concept', es: 'Concepto ganador' }
        },
        {
          day: t({ en: 'Wednesday', es: 'Miércoles' }),
          time: '13:00 - 17:00',
          session: { en: 'Build detailed storyboard', es: 'Construir storyboard detallado' },
          duration: '240min',
          owner: { en: 'Designer + Team', es: 'Diseñador + Equipo' },
          output: { en: '10-15 frame storyboard', es: 'Storyboard de 10-15 cuadros' }
        },
        {
          day: t({ en: 'Thursday', es: 'Jueves' }),
          time: '9:00 - 17:00',
          session: { en: 'Build prototype', es: 'Construir prototipo' },
          duration: '480min',
          owner: { en: 'Maker, Stitcher, Writer, Collector', es: 'Maker, Stitcher, Writer, Collector' },
          output: { en: 'High-fidelity clickable prototype', es: 'Prototipo clicable alta fidelidad' }
        },
        {
          day: t({ en: 'Friday', es: 'Viernes' }),
          time: '9:00 - 16:00',
          session: { en: '5 user tests (1hr each)', es: '5 pruebas de usuario (1h cada una)' },
          duration: '420min',
          owner: { en: 'Facilitator + Note-taker', es: 'Facilitador + Tomador de notas' },
          output: { en: 'Test recordings & notes', es: 'Grabaciones y notas de pruebas' }
        },
        {
          day: t({ en: 'Friday', es: 'Viernes' }),
          time: '16:00 - 17:00',
          session: { en: 'Debrief & decide next steps', es: 'Debrief y decidir próximos pasos' },
          duration: '60min',
          owner: { en: 'Whole team', es: 'Todo el equipo' },
          output: { en: 'Sprint findings report', es: 'Reporte de hallazgos del sprint' }
        }
      ];
    } else if (days === 4) {
      // 4-day compressed sprint
      generatedAgenda = [
        {
          day: t({ en: 'Day 1', es: 'Día 1' }),
          time: '9:00 - 12:00',
          session: { en: 'Map + Expert interviews', es: 'Mapear + Entrevistas con expertos' },
          duration: '180min',
          owner: { en: 'Facilitator', es: 'Facilitador' },
          output: { en: 'Journey map & sprint questions', es: 'Mapa de viaje y preguntas' }
        },
        {
          day: t({ en: 'Day 1', es: 'Día 1' }),
          time: '13:00 - 17:00',
          session: { en: 'Lightning demos + Sketch', es: 'Lightning demos + Bocetear' },
          duration: '240min',
          owner: { en: 'Individual work', es: 'Trabajo individual' },
          output: { en: 'Solution sketches', es: 'Bocetos de solución' }
        },
        {
          day: t({ en: 'Day 2', es: 'Día 2' }),
          time: '9:00 - 12:00',
          session: { en: 'Decide + Storyboard', es: 'Decidir + Storyboard' },
          duration: '180min',
          owner: { en: 'Decider + Designer', es: 'Decisor + Diseñador' },
          output: { en: 'Winning storyboard', es: 'Storyboard ganador' }
        },
        {
          day: t({ en: 'Day 2', es: 'Día 2' }),
          time: '13:00 - 17:00',
          session: { en: 'Start prototype', es: 'Comenzar prototipo' },
          duration: '240min',
          owner: { en: 'Maker + Writer', es: 'Maker + Writer' },
          output: { en: 'Prototype foundation', es: 'Fundamento del prototipo' }
        },
        {
          day: t({ en: 'Day 3', es: 'Día 3' }),
          time: '9:00 - 17:00',
          session: { en: 'Finish prototype', es: 'Terminar prototipo' },
          duration: '480min',
          owner: { en: 'Full prototype team', es: 'Equipo completo de prototipo' },
          output: { en: 'Clickable prototype', es: 'Prototipo clicable' }
        },
        {
          day: t({ en: 'Day 4', es: 'Día 4' }),
          time: '9:00 - 16:00',
          session: { en: '5 user tests', es: '5 pruebas de usuario' },
          duration: '420min',
          owner: { en: 'Facilitator', es: 'Facilitador' },
          output: { en: 'Test insights', es: 'Insights de pruebas' }
        },
        {
          day: t({ en: 'Day 4', es: 'Día 4' }),
          time: '16:00 - 17:00',
          session: { en: 'Debrief', es: 'Debrief' },
          duration: '60min',
          owner: { en: 'Whole team', es: 'Todo el equipo' },
          output: { en: 'Next steps', es: 'Próximos pasos' }
        }
      ];
    } else if (days === 3) {
      // 3-day ultra-compressed sprint
      generatedAgenda = [
        {
          day: t({ en: 'Day 1', es: 'Día 1' }),
          time: '9:00 - 11:00',
          session: { en: 'Map + Define target', es: 'Mapear + Definir objetivo' },
          duration: '120min',
          owner: { en: 'Facilitator', es: 'Facilitador' },
          output: { en: 'Sprint focus', es: 'Enfoque del sprint' }
        },
        {
          day: t({ en: 'Day 1', es: 'Día 1' }),
          time: '11:00 - 13:00',
          session: { en: 'Sketch solutions', es: 'Bocetear soluciones' },
          duration: '120min',
          owner: { en: 'Individual', es: 'Individual' },
          output: { en: 'Sketches', es: 'Bocetos' }
        },
        {
          day: t({ en: 'Day 1', es: 'Día 1' }),
          time: '14:00 - 17:00',
          session: { en: 'Decide + Storyboard', es: 'Decidir + Storyboard' },
          duration: '180min',
          owner: { en: 'Decider', es: 'Decisor' },
          output: { en: 'Storyboard', es: 'Storyboard' }
        },
        {
          day: t({ en: 'Day 2', es: 'Día 2' }),
          time: '9:00 - 17:00',
          session: { en: 'Build prototype', es: 'Construir prototipo' },
          duration: '480min',
          owner: { en: 'Prototype team', es: 'Equipo de prototipo' },
          output: { en: 'Testable prototype', es: 'Prototipo testeable' }
        },
        {
          day: t({ en: 'Day 3', es: 'Día 3' }),
          time: '9:00 - 15:00',
          session: { en: 'Test with users', es: 'Testear con usuarios' },
          duration: '360min',
          owner: { en: 'Facilitator', es: 'Facilitador' },
          output: { en: 'User feedback', es: 'Retroalimentación de usuario' }
        },
        {
          day: t({ en: 'Day 3', es: 'Día 3' }),
          time: '15:00 - 17:00',
          session: { en: 'Synthesize & plan', es: 'Sintetizar y planear' },
          duration: '120min',
          owner: { en: 'Team', es: 'Equipo' },
          output: { en: 'Action plan', es: 'Plan de acción' }
        }
      ];
    } else {
      // 2-day sprint (minimal)
      generatedAgenda = [
        {
          day: t({ en: 'Day 1', es: 'Día 1' }),
          time: '9:00 - 10:30',
          session: { en: 'Define problem & target', es: 'Definir problema y objetivo' },
          duration: '90min',
          owner: { en: 'Facilitator', es: 'Facilitador' },
          output: { en: 'Problem statement', es: 'Declaración de problema' }
        },
        {
          day: t({ en: 'Day 1', es: 'Día 1' }),
          time: '10:30 - 13:00',
          session: { en: 'Sketch & decide', es: 'Bocetear y decidir' },
          duration: '150min',
          owner: { en: 'Team + Decider', es: 'Equipo + Decisor' },
          output: { en: 'Winning concept', es: 'Concepto ganador' }
        },
        {
          day: t({ en: 'Day 1', es: 'Día 1' }),
          time: '14:00 - 17:00',
          session: { en: 'Build prototype', es: 'Construir prototipo' },
          duration: '180min',
          owner: { en: 'Designer', es: 'Diseñador' },
          output: { en: 'Basic prototype', es: 'Prototipo básico' }
        },
        {
          day: t({ en: 'Day 2', es: 'Día 2' }),
          time: '9:00 - 14:00',
          session: { en: 'User testing (3-5 users)', es: 'Pruebas de usuario (3-5 usuarios)' },
          duration: '300min',
          owner: { en: 'Facilitator', es: 'Facilitador' },
          output: { en: 'Test recordings', es: 'Grabaciones de pruebas' }
        },
        {
          day: t({ en: 'Day 2', es: 'Día 2' }),
          time: '14:00 - 17:00',
          session: { en: 'Debrief & next steps', es: 'Debrief y próximos pasos' },
          duration: '180min',
          owner: { en: 'Whole team', es: 'Todo el equipo' },
          output: { en: 'Findings & recommendations', es: 'Hallazgos y recomendaciones' }
        }
      ];
    }

    setAgenda(generatedAgenda);
  };

  const copyAgenda = () => {
    const agendaText = `Design Sprint Agenda\n\nGoal: ${goal}\nTeam Size: ${teamSize}\nDuration: ${days} days\n\n${agenda.map(item => 
      `${item.day} | ${item.time} | ${item.session[language]} | ${item.duration} | ${item.owner[language]} | ${item.output[language]}`
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
            en: 'Generate a custom Design Sprint agenda based on your team size, available days, and sprint goal.',
            es: 'Genera una agenda personalizada de Design Sprint basada en el tamaño de tu equipo, días disponibles y objetivo del sprint.'
          })}
        </p>
      </div>

      {/* Input Section */}
      <div className="bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 border border-zinc-800 rounded-2xl p-6 space-y-5">
        <div className="flex items-center gap-2 mb-4">
          <Target className="size-5 text-indigo-400" />
          <h4 className="text-lg font-semibold text-white">
            {t({ en: 'Sprint Configuration', es: 'Configuración del Sprint' })}
          </h4>
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
              min="4"
              max="12"
              value={teamSize}
              onChange={(e) => setTeamSize(parseInt(e.target.value) || 7)}
              className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-700 rounded-lg text-white focus:outline-none focus:border-indigo-500 transition-colors"
            />
            <p className="text-xs text-zinc-500 mt-1">
              {t({ en: 'Ideal: 5-7 people', es: 'Ideal: 5-7 personas' })}
            </p>
          </div>

          <div>
            <label htmlFor="days" className="block text-sm font-medium text-zinc-300 mb-2">
              <Clock className="size-4 inline mr-1" />
              {t({ en: 'Days Available', es: 'Días Disponibles' })}
            </label>
            <select
              id="days"
              value={days}
              onChange={(e) => setDays(parseInt(e.target.value))}
              className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-700 rounded-lg text-white focus:outline-none focus:border-indigo-500 transition-colors"
            >
              <option value={5}>{t({ en: '5 days (Classic Sprint)', es: '5 días (Sprint Clásico)' })}</option>
              <option value={4}>{t({ en: '4 days (Compressed)', es: '4 días (Comprimido)' })}</option>
              <option value={3}>{t({ en: '3 days (Ultra-Compressed)', es: '3 días (Ultra-Comprimido)' })}</option>
              <option value={2}>{t({ en: '2 days (Minimal Sprint 2.0)', es: '2 días (Sprint 2.0 Mínimo)' })}</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="goal" className="block text-sm font-medium text-zinc-300 mb-2">
            {t({ en: 'Sprint Goal (What are you trying to solve?)', es: 'Objetivo del Sprint (¿Qué intentas resolver?)' })}
          </label>
          <textarea
            id="goal"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            placeholder={t({ 
              en: 'e.g., Reduce checkout abandonment by simplifying the payment flow',
              es: 'ej., Reducir abandono de checkout simplificando el flujo de pago'
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
          <div className="flex items-center justify-between">
            <h4 className="text-xl font-semibold text-white">
              {t({ en: 'Your Sprint Agenda', es: 'Tu Agenda del Sprint' })}
            </h4>
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

          {/* Responsive table wrapper - only this section scrolls horizontally on mobile */}
          <div className="bg-zinc-900/30 border border-zinc-800 rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[700px]">
                <thead>
                  <tr className="bg-zinc-800/50 border-b border-zinc-700">
                    <th className="px-4 py-3 text-left text-sm font-semibold text-zinc-300">
                      {t({ en: 'Day', es: 'Día' })}
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-zinc-300">
                      {t({ en: 'Time', es: 'Hora' })}
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-zinc-300">
                      {t({ en: 'Session', es: 'Sesión' })}
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-zinc-300">
                      {t({ en: 'Duration', es: 'Duración' })}
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-zinc-300">
                      {t({ en: 'Owner', es: 'Responsable' })}
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-zinc-300">
                      {t({ en: 'Output', es: 'Resultado' })}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {agenda.map((item, idx) => (
                    <tr key={idx} className="border-b border-zinc-800/50 hover:bg-zinc-800/20 transition-colors">
                      <td className="px-4 py-3 text-sm text-white font-medium">{item.day}</td>
                      <td className="px-4 py-3 text-sm text-zinc-300">{item.time}</td>
                      <td className="px-4 py-3 text-sm text-white">{item.session[language]}</td>
                      <td className="px-4 py-3 text-sm text-zinc-400">{item.duration}</td>
                      <td className="px-4 py-3 text-sm text-zinc-300">{item.owner[language]}</td>
                      <td className="px-4 py-3 text-sm text-zinc-400">{item.output[language]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-indigo-950/20 border border-indigo-500/30 rounded-xl p-4">
            <p className="text-sm text-indigo-300">
              <strong>{t({ en: 'Pro tip:', es: 'Consejo:' })}</strong> {t({ 
                en: 'Send this agenda to all participants 1 week before the sprint. Block calendars and confirm the Decider.',
                es: 'Envía esta agenda a todos los participantes 1 semana antes del sprint. Bloquea calendarios y confirma al Decisor.'
              })}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}