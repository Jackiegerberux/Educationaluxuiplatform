import React, { useState } from 'react';
import { useLanguage } from '../layout/LanguageContext';
import { useNavigate } from 'react-router';
import { Users, Clock, AlertCircle, Rocket } from 'lucide-react';

type Phase = 'discovery' | 'definition' | 'delivery' | 'validation';
type TeamSize = 'solo' | 'small' | 'large';
type Timeline = 'days' | 'weeks' | 'months';
type Uncertainty = 'low' | 'medium' | 'high';

interface Methodology {
  id: string;
  name: { en: string; es: string };
  slug: string;
  bestFor: { en: string; es: string };
  duration: { en: string; es: string };
  coreActivities: { en: string[]; es: string[] };
  outputs: { en: string[]; es: string[] };
  color: string;
  phases: Phase[];
  teamSizes: TeamSize[];
  timelines: Timeline[];
  uncertainties: Uncertainty[];
}

const methodologies: Methodology[] = [
  {
    id: 'design-thinking',
    name: { en: 'Design Thinking', es: 'Design Thinking' },
    slug: 'design-thinking-intro',
    bestFor: { 
      en: 'Exploring ambiguous problems with deep user empathy',
      es: 'Explorar problemas ambiguos con empatía profunda de usuario'
    },
    duration: { en: '2-8 weeks', es: '2-8 semanas' },
    coreActivities: {
      en: ['Empathy interviews', 'Ideation workshops', 'Prototyping', 'User testing'],
      es: ['Entrevistas de empatía', 'Talleres de ideación', 'Prototipado', 'Pruebas de usuario']
    },
    outputs: {
      en: ['Personas', 'Journey maps', 'Problem statements', 'Tested prototypes'],
      es: ['Personas', 'Mapas de viaje', 'Declaraciones de problema', 'Prototipos probados']
    },
    color: 'blue',
    phases: ['discovery', 'definition'],
    teamSizes: ['small', 'large'],
    timelines: ['weeks', 'months'],
    uncertainties: ['high', 'medium']
  },
  {
    id: 'design-sprint',
    name: { en: 'Design Sprint', es: 'Design Sprint' },
    slug: 'design-sprint',
    bestFor: { 
      en: 'Time-boxed validation of specific solutions in 5 days',
      es: 'Validación con límite de tiempo de soluciones específicas en 5 días'
    },
    duration: { en: '5 days', es: '5 días' },
    coreActivities: {
      en: ['Map problem', 'Sketch solutions', 'Decide approach', 'Build prototype', 'Test with users'],
      es: ['Mapear problema', 'Bosquejar soluciones', 'Decidir enfoque', 'Construir prototipo', 'Probar con usuarios']
    },
    outputs: {
      en: ['Validated prototype', 'User test insights', 'Decision framework'],
      es: ['Prototipo validado', 'Insights de pruebas de usuario', 'Marco de decisión']
    },
    color: 'purple',
    phases: ['discovery', 'definition'],
    teamSizes: ['small', 'large'],
    timelines: ['days'],
    uncertainties: ['high', 'medium']
  },
  {
    id: 'lean-ux',
    name: { en: 'Lean UX', es: 'Lean UX' },
    slug: 'lean-ux',
    bestFor: { 
      en: 'Integrating UX into fast-paced Agile development cycles',
      es: 'Integrar UX en ciclos de desarrollo Agile de ritmo rápido'
    },
    duration: { en: '1-2 week sprints', es: 'Sprints de 1-2 semanas' },
    coreActivities: {
      en: ['Hypotheses creation', 'Collaborative design', 'MVPs', 'Continuous validation'],
      es: ['Creación de hipótesis', 'Diseño colaborativo', 'MVPs', 'Validación continua']
    },
    outputs: {
      en: ['Hypothesis board', 'Low-fi prototypes', 'Validation reports', 'Iteration insights'],
      es: ['Tablero de hipótesis', 'Prototipos baja fidelidad', 'Reportes de validación', 'Insights de iteración']
    },
    color: 'green',
    phases: ['definition', 'delivery', 'validation'],
    teamSizes: ['solo', 'small'],
    timelines: ['days', 'weeks'],
    uncertainties: ['medium', 'low']
  },
  {
    id: 'scrum',
    name: { en: 'Scrum', es: 'Scrum' },
    slug: 'scrum-ux',
    bestFor: { 
      en: 'Structured delivery with cross-functional teams',
      es: 'Entrega estructurada con equipos interfuncionales'
    },
    duration: { en: '2-4 week sprints', es: 'Sprints de 2-4 semanas' },
    coreActivities: {
      en: ['Sprint planning', 'Daily standups', 'Sprint reviews', 'Retrospectives'],
      es: ['Planeación de sprint', 'Daily standups', 'Revisiones de sprint', 'Retrospectivas']
    },
    outputs: {
      en: ['Product backlog', 'Sprint goals', 'Shippable increments', 'Burndown charts'],
      es: ['Product backlog', 'Objetivos de sprint', 'Incrementos entregables', 'Gráficos burndown']
    },
    color: 'orange',
    phases: ['delivery', 'validation'],
    teamSizes: ['small', 'large'],
    timelines: ['weeks', 'months'],
    uncertainties: ['low', 'medium']
  }
];

export function MethodologyPicker() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  
  const [selectedPhase, setSelectedPhase] = useState<Phase>('discovery');
  const [selectedTeamSize, setSelectedTeamSize] = useState<TeamSize | null>(null);
  const [selectedTimeline, setSelectedTimeline] = useState<Timeline | null>(null);
  const [selectedUncertainty, setSelectedUncertainty] = useState<Uncertainty | null>(null);

  // Filter methodologies based on selections
  const filteredMethodologies = methodologies.filter(method => {
    const phaseMatch = method.phases.includes(selectedPhase);
    const teamMatch = !selectedTeamSize || method.teamSizes.includes(selectedTeamSize);
    const timeMatch = !selectedTimeline || method.timelines.includes(selectedTimeline);
    const uncertaintyMatch = !selectedUncertainty || method.uncertainties.includes(selectedUncertainty);
    return phaseMatch && teamMatch && timeMatch && uncertaintyMatch;
  });

  const phases: { value: Phase; label: { en: string; es: string } }[] = [
    { value: 'discovery', label: { en: 'Discovery', es: 'Descubrimiento' } },
    { value: 'definition', label: { en: 'Definition', es: 'Definición' } },
    { value: 'delivery', label: { en: 'Delivery', es: 'Entrega' } },
    { value: 'validation', label: { en: 'Validation', es: 'Validación' } }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto space-y-8 mt-12">
      {/* Header */}
      <div className="text-center space-y-3">
        <h3 className="text-3xl font-bold text-white">
          {t({ en: 'Methodology Picker', es: 'Selector de Metodologías' })}
        </h3>
        <p className="text-zinc-400 text-lg">
          {t({ 
            en: 'Find the right methodology for your project based on phase, team, timeline, and uncertainty',
            es: 'Encuentra la metodología correcta para tu proyecto según fase, equipo, cronograma e incertidumbre'
          })}
        </p>
      </div>

      {/* Filters */}
      <div className="space-y-6">
        {/* Phase Segmented Control */}
        <div>
          <label className="block text-sm font-semibold text-zinc-300 mb-3">
            {t({ en: 'Project Phase', es: 'Fase del Proyecto' })}
          </label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 p-1 bg-zinc-900/50 border border-zinc-800 rounded-xl">
            {phases.map(phase => (
              <button
                key={phase.value}
                onClick={() => setSelectedPhase(phase.value)}
                className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  selectedPhase === phase.value
                    ? 'bg-indigo-600 text-white shadow-lg'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
                }`}
              >
                {t(phase.label)}
              </button>
            ))}
          </div>
        </div>

        {/* Additional Filters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Team Size */}
          <div>
            <label className="block text-sm font-semibold text-zinc-300 mb-2 flex items-center gap-2">
              <Users className="size-4 text-indigo-400" />
              {t({ en: 'Team Size', es: 'Tamaño de Equipo' })}
            </label>
            <select
              value={selectedTeamSize || ''}
              onChange={(e) => setSelectedTeamSize(e.target.value as TeamSize || null)}
              className="w-full px-4 py-2.5 bg-zinc-900/50 border border-zinc-800 rounded-lg text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors"
            >
              <option value="">{t({ en: 'All sizes', es: 'Todos los tamaños' })}</option>
              <option value="solo">{t({ en: 'Solo (1 person)', es: 'Solo (1 persona)' })}</option>
              <option value="small">{t({ en: 'Small (2-5)', es: 'Pequeño (2-5)' })}</option>
              <option value="large">{t({ en: 'Large (6+)', es: 'Grande (6+)' })}</option>
            </select>
          </div>

          {/* Timeline */}
          <div>
            <label className="block text-sm font-semibold text-zinc-300 mb-2 flex items-center gap-2">
              <Clock className="size-4 text-indigo-400" />
              {t({ en: 'Timeline', es: 'Cronograma' })}
            </label>
            <select
              value={selectedTimeline || ''}
              onChange={(e) => setSelectedTimeline(e.target.value as Timeline || null)}
              className="w-full px-4 py-2.5 bg-zinc-900/50 border border-zinc-800 rounded-lg text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors"
            >
              <option value="">{t({ en: 'Any timeline', es: 'Cualquier cronograma' })}</option>
              <option value="days">{t({ en: 'Days (1-7)', es: 'Días (1-7)' })}</option>
              <option value="weeks">{t({ en: 'Weeks (1-8)', es: 'Semanas (1-8)' })}</option>
              <option value="months">{t({ en: 'Months (2+)', es: 'Meses (2+)' })}</option>
            </select>
          </div>

          {/* Uncertainty */}
          <div>
            <label className="block text-sm font-semibold text-zinc-300 mb-2 flex items-center gap-2">
              <AlertCircle className="size-4 text-indigo-400" />
              {t({ en: 'Uncertainty Level', es: 'Nivel de Incertidumbre' })}
            </label>
            <select
              value={selectedUncertainty || ''}
              onChange={(e) => setSelectedUncertainty(e.target.value as Uncertainty || null)}
              className="w-full px-4 py-2.5 bg-zinc-900/50 border border-zinc-800 rounded-lg text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors"
            >
              <option value="">{t({ en: 'Any level', es: 'Cualquier nivel' })}</option>
              <option value="low">{t({ en: 'Low (clear problem + solution)', es: 'Bajo (problema + solución claros)' })}</option>
              <option value="medium">{t({ en: 'Medium (clear problem)', es: 'Medio (problema claro)' })}</option>
              <option value="high">{t({ en: 'High (unclear problem)', es: 'Alto (problema poco claro)' })}</option>
            </select>
          </div>
        </div>
      </div>

      {/* Results */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-lg font-semibold text-white">
            {t({ en: 'Recommended Methodologies', es: 'Metodologías Recomendadas' })}
          </h4>
          <span className="text-sm text-zinc-500">
            {filteredMethodologies.length} {t({ en: 'match', es: 'coinciden' })}{filteredMethodologies.length !== 1 && 'es'}
          </span>
        </div>

        {filteredMethodologies.length === 0 ? (
          <div className="text-center py-12 bg-zinc-900/30 border border-zinc-800 rounded-2xl">
            <p className="text-zinc-400">
              {t({ 
                en: 'No methodologies match your criteria. Try adjusting your filters.',
                es: 'No hay metodologías que coincidan con tus criterios. Intenta ajustar tus filtros.'
              })}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredMethodologies.map(method => (
              <div
                key={method.id}
                className="bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 border border-zinc-800 rounded-2xl p-6 hover:border-indigo-500/30 transition-all group"
              >
                <div className="flex items-start justify-between mb-3">
                  <h5 className={`text-xl font-bold text-${method.color}-400 group-hover:text-${method.color}-300 transition-colors`}>
                    {t(method.name)}
                  </h5>
                  <div className={`px-2 py-1 bg-${method.color}-500/10 border border-${method.color}-500/20 rounded text-xs text-${method.color}-400`}>
                    {t(method.duration)}
                  </div>
                </div>

                <p className="text-sm text-zinc-400 mb-4">{t(method.bestFor)}</p>

                <div className="space-y-3 mb-4">
                  <div>
                    <h6 className="text-xs font-semibold text-zinc-500 uppercase tracking-wide mb-1.5">
                      {t({ en: 'Core Activities', es: 'Actividades Principales' })}
                    </h6>
                    <div className="flex flex-wrap gap-1.5">
                      {t(method.coreActivities).map((activity: string, idx: number) => (
                        <span key={idx} className="px-2 py-1 bg-zinc-800/50 border border-zinc-700 rounded text-xs text-zinc-300">
                          {activity}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h6 className="text-xs font-semibold text-zinc-500 uppercase tracking-wide mb-1.5">
                      {t({ en: 'Outputs', es: 'Entregables' })}
                    </h6>
                    <ul className="space-y-1">
                      {t(method.outputs).slice(0, 3).map((output: string, idx: number) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-zinc-400">
                          <div className={`size-1.5 rounded-full bg-${method.color}-400`}></div>
                          {output}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <button
                  onClick={() => navigate(`/lesson/${method.slug}`)}
                  className={`w-full px-4 py-2.5 bg-${method.color}-600 hover:bg-${method.color}-700 text-white rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2 group-hover:shadow-lg`}
                >
                  <Rocket className="size-4" />
                  {t({ en: 'Open Full Lesson', es: 'Abrir Lección Completa' })}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
