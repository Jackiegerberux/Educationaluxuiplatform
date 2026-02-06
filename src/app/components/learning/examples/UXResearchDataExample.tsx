import React, { useState } from 'react';
import { useLanguage } from '../../layout/LanguageContext';
import { 
  Users, 
  BarChart3, 
  MessageSquare, 
  TrendingUp, 
  TrendingDown,
  Clock,
  ThumbsUp,
  ThumbsDown,
  AlertCircle,
  CheckCircle2,
  Activity
} from 'lucide-react';

type ResearchMethod = 'interviews' | 'surveys' | 'analytics' | 'usability';

export function UXResearchDataExample() {
  const { t } = useLanguage();
  const [activeMethod, setActiveMethod] = useState<ResearchMethod>('interviews');

  // Datos de ejemplo - Caso de estudio: Checkout de e-commerce
  const researchData = {
    interviews: {
      participants: 8,
      duration: '45 min avg',
      findings: [
        {
          painPoint: { 
            en: 'Shipping costs appear too late in checkout', 
            es: 'Los costos de envío aparecen muy tarde en el checkout' 
          },
          frequency: '7/8 users',
          severity: 'high',
          quote: { 
            en: '"I hate when I get to the end and suddenly there\'s a $15 shipping fee I didn\'t know about."',
            es: '"Odio cuando llego al final y de repente hay una tarifa de envío de $15 que no conocía."'
          },
          participant: 'Sarah, 32'
        },
        {
          painPoint: { 
            en: 'No guest checkout option visible', 
            es: 'Opción de checkout como invitado no visible' 
          },
          frequency: '6/8 users',
          severity: 'high',
          quote: { 
            en: '"I don\'t want to create another account. I just want my item."',
            es: '"No quiero crear otra cuenta. Solo quiero mi artículo."'
          },
          participant: 'Mike, 28'
        },
        {
          painPoint: { 
            en: 'Payment form too long and intimidating', 
            es: 'Formulario de pago muy largo e intimidante' 
          },
          frequency: '5/8 users',
          severity: 'medium',
          quote: { 
            en: '"Why do they need my phone number twice? Feels sketchy."',
            es: '"¿Por qué necesitan mi número de teléfono dos veces? Se siente sospechoso."'
          },
          participant: 'Lisa, 41'
        }
      ]
    },
    surveys: {
      responses: 342,
      completionRate: '68%',
      metrics: [
        { 
          question: { en: 'Checkout satisfaction', es: 'Satisfacción con checkout' },
          score: 6.2,
          outOf: 10,
          change: -1.3,
          benchmark: 7.8
        },
        { 
          question: { en: 'Would you recommend?', es: '¿Recomendarías?' },
          score: 45,
          outOf: 100,
          suffix: 'NPS',
          change: -8,
          benchmark: 60
        },
        { 
          question: { en: 'Ease of checkout', es: 'Facilidad de checkout' },
          score: 5.8,
          outOf: 10,
          change: -0.9,
          benchmark: 8.1
        }
      ],
      topComplaints: [
        { 
          issue: { en: 'Shipping costs', es: 'Costos de envío' }, 
          percentage: 64 
        },
        { 
          issue: { en: 'Forced account creation', es: 'Creación forzada de cuenta' }, 
          percentage: 51 
        },
        { 
          issue: { en: 'Too many form fields', es: 'Demasiados campos de formulario' }, 
          percentage: 38 
        },
        { 
          issue: { en: 'Slow page load', es: 'Carga lenta de página' }, 
          percentage: 22 
        }
      ]
    },
    analytics: {
      period: { en: 'Last 30 days', es: 'Últimos 30 días' },
      totalSessions: 45821,
      metrics: [
        {
          name: { en: 'Checkout Started', es: 'Checkout Iniciado' },
          value: 8934,
          percentage: 100,
          icon: Users
        },
        {
          name: { en: 'Reached Payment', es: 'Llegó a Pago' },
          value: 5124,
          percentage: 57,
          icon: Activity,
          dropoff: 43
        },
        {
          name: { en: 'Completed Purchase', es: 'Compra Completada' },
          value: 2341,
          percentage: 26,
          icon: CheckCircle2,
          dropoff: 31
        }
      ],
      dropoffPoints: [
        {
          step: { en: 'Login/Register screen', es: 'Pantalla Login/Registro' },
          dropoffRate: 43,
          users: 3810
        },
        {
          step: { en: 'Shipping info form', es: 'Formulario info envío' },
          dropoffRate: 18,
          users: 922
        },
        {
          step: { en: 'Payment screen', es: 'Pantalla de pago' },
          dropoffRate: 31,
          users: 1588
        },
        {
          step: { en: 'Review & confirm', es: 'Revisar y confirmar' },
          dropoffRate: 8,
          users: 195
        }
      ],
      avgTimeSpent: {
        total: '4m 23s',
        byStep: [
          { step: { en: 'Login', es: 'Login' }, time: '1m 12s' },
          { step: { en: 'Shipping', es: 'Envío' }, time: '1m 45s' },
          { step: { en: 'Payment', es: 'Pago' }, time: '1m 08s' },
          { step: { en: 'Review', es: 'Revisar' }, time: '18s' }
        ]
      }
    },
    usability: {
      participants: 6,
      tasks: 3,
      successRate: '67%',
      results: [
        {
          task: { en: 'Complete a purchase as guest', es: 'Completar compra como invitado' },
          successRate: 33,
          avgTime: '5m 42s',
          errors: 12,
          severity: 'critical'
        },
        {
          task: { en: 'Apply a promo code', es: 'Aplicar código promocional' },
          successRate: 67,
          avgTime: '1m 18s',
          errors: 4,
          severity: 'medium'
        },
        {
          task: { en: 'Change shipping address', es: 'Cambiar dirección de envío' },
          successRate: 83,
          avgTime: '52s',
          errors: 2,
          severity: 'low'
        }
      ]
    }
  };

  const methods = [
    {
      id: 'interviews' as ResearchMethod,
      name: { en: 'User Interviews', es: 'Entrevistas' },
      icon: MessageSquare,
      type: { en: 'Qualitative', es: 'Cualitativo' },
      color: 'purple',
      purpose: { en: 'Understand WHY', es: 'Entender POR QUÉ' }
    },
    {
      id: 'surveys' as ResearchMethod,
      name: { en: 'Surveys', es: 'Encuestas' },
      icon: BarChart3,
      type: { en: 'Quantitative', es: 'Cuantitativo' },
      color: 'blue',
      purpose: { en: 'Measure HOW MANY', es: 'Medir CUÁNTOS' }
    },
    {
      id: 'analytics' as ResearchMethod,
      name: { en: 'Analytics', es: 'Analíticas' },
      icon: Activity,
      type: { en: 'Behavioral', es: 'Comportamental' },
      color: 'green',
      purpose: { en: 'Track WHAT happens', es: 'Rastrear QUÉ pasa' }
    },
    {
      id: 'usability' as ResearchMethod,
      name: { en: 'Usability Testing', es: 'Pruebas Usabilidad' },
      icon: Users,
      type: { en: 'Observational', es: 'Observacional' },
      color: 'orange',
      purpose: { en: 'Validate HOW it works', es: 'Validar CÓMO funciona' }
    }
  ];

  const renderInterviews = () => (
    <div className="space-y-6">
      {/* Header Stats */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-zinc-900 border border-purple-500/20 rounded-xl p-4">
          <div className="text-2xl font-bold text-white">{researchData.interviews.participants}</div>
          <div className="text-sm text-zinc-400">{t({ en: 'Participants', es: 'Participantes' })}</div>
        </div>
        <div className="bg-zinc-900 border border-purple-500/20 rounded-xl p-4">
          <div className="text-2xl font-bold text-white">{researchData.interviews.duration}</div>
          <div className="text-sm text-zinc-400">{t({ en: 'Avg Duration', es: 'Duración Prom.' })}</div>
        </div>
      </div>

      {/* Findings Table */}
      <div className="bg-zinc-900 border border-purple-500/20 rounded-xl overflow-hidden">
        <div className="px-4 py-3 bg-purple-950/30 border-b border-purple-500/20">
          <h4 className="font-semibold text-purple-300 text-sm">
            {t({ en: 'Key Findings', es: 'Hallazgos Clave' })}
          </h4>
        </div>
        
        <div className="divide-y divide-zinc-800">
          {researchData.interviews.findings.map((finding, idx) => (
            <div key={idx} className="p-4">
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    {finding.severity === 'high' ? (
                      <AlertCircle className="size-4 text-red-400" />
                    ) : (
                      <AlertCircle className="size-4 text-yellow-400" />
                    )}
                    <h5 className="font-medium text-white text-sm">{t(finding.painPoint)}</h5>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-zinc-500">
                    <span className="flex items-center gap-1">
                      <Users className="size-3" />
                      {finding.frequency}
                    </span>
                    <span className={`px-2 py-0.5 rounded-full ${
                      finding.severity === 'high' 
                        ? 'bg-red-500/10 text-red-400' 
                        : 'bg-yellow-500/10 text-yellow-400'
                    }`}>
                      {finding.severity === 'high' 
                        ? t({ en: 'High', es: 'Alto' }) 
                        : t({ en: 'Medium', es: 'Medio' })}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="bg-black/40 border-l-2 border-purple-500/30 pl-4 py-2 italic text-sm text-zinc-400">
                "{t(finding.quote)}"
                <div className="text-xs text-zinc-600 mt-1">— {finding.participant}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderSurveys = () => (
    <div className="space-y-6">
      {/* Header Stats */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-zinc-900 border border-blue-500/20 rounded-xl p-4">
          <div className="text-2xl font-bold text-white">{researchData.surveys.responses}</div>
          <div className="text-sm text-zinc-400">{t({ en: 'Responses', es: 'Respuestas' })}</div>
        </div>
        <div className="bg-zinc-900 border border-blue-500/20 rounded-xl p-4">
          <div className="text-2xl font-bold text-white">{researchData.surveys.completionRate}</div>
          <div className="text-sm text-zinc-400">{t({ en: 'Completion Rate', es: 'Tasa Completación' })}</div>
        </div>
      </div>

      {/* Metrics Table */}
      <div className="bg-zinc-900 border border-blue-500/20 rounded-xl overflow-hidden">
        <table className="w-full">
          <thead className="bg-blue-950/30 border-b border-blue-500/20">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-semibold text-blue-300">
                {t({ en: 'Metric', es: 'Métrica' })}
              </th>
              <th className="px-4 py-3 text-center text-xs font-semibold text-blue-300">
                {t({ en: 'Score', es: 'Puntaje' })}
              </th>
              <th className="px-4 py-3 text-center text-xs font-semibold text-blue-300">
                {t({ en: 'Change', es: 'Cambio' })}
              </th>
              <th className="px-4 py-3 text-center text-xs font-semibold text-blue-300">
                {t({ en: 'Benchmark', es: 'Referencia' })}
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-800">
            {researchData.surveys.metrics.map((metric, idx) => (
              <tr key={idx}>
                <td className="px-4 py-3 text-sm text-white">{t(metric.question)}</td>
                <td className="px-4 py-3 text-center">
                  <span className="font-bold text-white">{metric.score}</span>
                  <span className="text-xs text-zinc-500">/{metric.outOf}</span>
                  {metric.suffix && <span className="text-xs text-zinc-500 ml-1">{metric.suffix}</span>}
                </td>
                <td className="px-4 py-3 text-center">
                  <span className={`flex items-center justify-center gap-1 text-sm ${
                    metric.change < 0 ? 'text-red-400' : 'text-green-400'
                  }`}>
                    {metric.change < 0 ? <TrendingDown className="size-4" /> : <TrendingUp className="size-4" />}
                    {Math.abs(metric.change)}
                  </span>
                </td>
                <td className="px-4 py-3 text-center text-sm text-zinc-400">{metric.benchmark}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Top Complaints Chart */}
      <div className="bg-zinc-900 border border-blue-500/20 rounded-xl p-4">
        <h4 className="font-semibold text-blue-300 text-sm mb-4">
          {t({ en: 'Top User Complaints', es: 'Principales Quejas de Usuarios' })}
        </h4>
        <div className="space-y-3">
          {researchData.surveys.topComplaints.map((complaint, idx) => (
            <div key={idx}>
              <div className="flex items-center justify-between text-sm mb-1">
                <span className="text-white">{t(complaint.issue)}</span>
                <span className="font-semibold text-blue-400">{complaint.percentage}%</span>
              </div>
              <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full transition-all"
                  style={{ width: `${complaint.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderAnalytics = () => (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-zinc-900 border border-green-500/20 rounded-xl p-4">
        <div className="text-sm text-zinc-400 mb-1">{t(researchData.analytics.period)}</div>
        <div className="text-2xl font-bold text-white">{researchData.analytics.totalSessions.toLocaleString()}</div>
        <div className="text-sm text-zinc-500">{t({ en: 'Total Sessions', es: 'Sesiones Totales' })}</div>
      </div>

      {/* Funnel */}
      <div className="bg-zinc-900 border border-green-500/20 rounded-xl p-6">
        <h4 className="font-semibold text-green-300 text-sm mb-6">
          {t({ en: 'Checkout Funnel', es: 'Embudo de Checkout' })}
        </h4>
        
        <div className="space-y-4">
          {researchData.analytics.metrics.map((metric, idx) => {
            const Icon = metric.icon;
            return (
              <div key={idx}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Icon className="size-4 text-green-400" />
                    <span className="text-sm text-white">{t(metric.name)}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold text-white">
                      {metric.value.toLocaleString()}
                    </span>
                    <span className="text-xs text-zinc-500 w-12 text-right">
                      {metric.percentage}%
                    </span>
                  </div>
                </div>
                
                {/* Bar */}
                <div className="relative h-8 bg-zinc-800 rounded-lg overflow-hidden">
                  <div 
                    className={`h-full rounded-lg transition-all ${
                      idx === 0 ? 'bg-gradient-to-r from-green-600 to-green-500' :
                      idx === 1 ? 'bg-gradient-to-r from-yellow-600 to-yellow-500' :
                      'bg-gradient-to-r from-red-600 to-red-500'
                    }`}
                    style={{ width: `${metric.percentage}%` }}
                  />
                  {metric.dropoff && (
                    <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1 text-xs font-medium">
                      <TrendingDown className="size-3 text-red-300" />
                      <span className="text-red-300">{metric.dropoff}% drop</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Drop-off Points Table */}
      <div className="bg-zinc-900 border border-green-500/20 rounded-xl overflow-hidden">
        <div className="px-4 py-3 bg-green-950/30 border-b border-green-500/20">
          <h4 className="font-semibold text-green-300 text-sm">
            {t({ en: 'Drop-off Analysis', es: 'Análisis de Abandono' })}
          </h4>
        </div>
        <table className="w-full">
          <thead className="bg-black/40">
            <tr className="border-b border-zinc-800">
              <th className="px-4 py-3 text-left text-xs font-medium text-zinc-400">
                {t({ en: 'Step', es: 'Paso' })}
              </th>
              <th className="px-4 py-3 text-center text-xs font-medium text-zinc-400">
                {t({ en: 'Drop-off Rate', es: 'Tasa Abandono' })}
              </th>
              <th className="px-4 py-3 text-center text-xs font-medium text-zinc-400">
                {t({ en: 'Users Lost', es: 'Usuarios Perdidos' })}
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-800">
            {researchData.analytics.dropoffPoints.map((point, idx) => (
              <tr key={idx} className={point.dropoffRate > 30 ? 'bg-red-950/10' : ''}>
                <td className="px-4 py-3 text-sm text-white">{t(point.step)}</td>
                <td className="px-4 py-3 text-center">
                  <span className={`font-semibold ${
                    point.dropoffRate > 30 ? 'text-red-400' :
                    point.dropoffRate > 15 ? 'text-yellow-400' :
                    'text-green-400'
                  }`}>
                    {point.dropoffRate}%
                  </span>
                </td>
                <td className="px-4 py-3 text-center text-sm text-zinc-400">
                  {point.users.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Avg Time */}
      <div className="bg-zinc-900 border border-green-500/20 rounded-xl p-4">
        <div className="flex items-center gap-2 mb-3">
          <Clock className="size-4 text-green-400" />
          <h4 className="font-semibold text-green-300 text-sm">
            {t({ en: 'Average Time Spent', es: 'Tiempo Promedio' })}
          </h4>
          <span className="ml-auto text-lg font-bold text-white">{researchData.analytics.avgTimeSpent.total}</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {researchData.analytics.avgTimeSpent.byStep.map((step, idx) => (
            <div key={idx} className="bg-black/40 rounded-lg p-2 text-center">
              <div className="text-xs text-zinc-500 mb-1">{t(step.step)}</div>
              <div className="text-sm font-semibold text-white">{step.time}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderUsability = () => (
    <div className="space-y-6">
      {/* Header Stats */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-zinc-900 border border-orange-500/20 rounded-xl p-4">
          <div className="text-2xl font-bold text-white">{researchData.usability.participants}</div>
          <div className="text-sm text-zinc-400">{t({ en: 'Participants', es: 'Participantes' })}</div>
        </div>
        <div className="bg-zinc-900 border border-orange-500/20 rounded-xl p-4">
          <div className="text-2xl font-bold text-white">{researchData.usability.tasks}</div>
          <div className="text-sm text-zinc-400">{t({ en: 'Tasks', es: 'Tareas' })}</div>
        </div>
        <div className="bg-zinc-900 border border-orange-500/20 rounded-xl p-4">
          <div className="text-2xl font-bold text-white">{researchData.usability.successRate}</div>
          <div className="text-sm text-zinc-400">{t({ en: 'Avg Success', es: 'Éxito Prom.' })}</div>
        </div>
      </div>

      {/* Task Results */}
      <div className="bg-zinc-900 border border-orange-500/20 rounded-xl overflow-hidden">
        <div className="px-4 py-3 bg-orange-950/30 border-b border-orange-500/20">
          <h4 className="font-semibold text-orange-300 text-sm">
            {t({ en: 'Task Performance', es: 'Rendimiento de Tareas' })}
          </h4>
        </div>
        
        <div className="divide-y divide-zinc-800">
          {researchData.usability.results.map((result, idx) => (
            <div key={idx} className="p-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h5 className="font-medium text-white text-sm mb-2">{t(result.task)}</h5>
                  <div className="flex items-center gap-4 text-xs">
                    <span className="flex items-center gap-1">
                      {result.successRate >= 70 ? (
                        <CheckCircle2 className="size-3 text-green-400" />
                      ) : result.successRate >= 50 ? (
                        <AlertCircle className="size-3 text-yellow-400" />
                      ) : (
                        <AlertCircle className="size-3 text-red-400" />
                      )}
                      <span className={`font-semibold ${
                        result.successRate >= 70 ? 'text-green-400' :
                        result.successRate >= 50 ? 'text-yellow-400' :
                        'text-red-400'
                      }`}>
                        {result.successRate}% {t({ en: 'success', es: 'éxito' })}
                      </span>
                    </span>
                    <span className="flex items-center gap-1 text-zinc-500">
                      <Clock className="size-3" />
                      {result.avgTime}
                    </span>
                    <span className="flex items-center gap-1 text-zinc-500">
                      <AlertCircle className="size-3" />
                      {result.errors} {t({ en: 'errors', es: 'errores' })}
                    </span>
                  </div>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  result.severity === 'critical' ? 'bg-red-500/10 text-red-400' :
                  result.severity === 'medium' ? 'bg-yellow-500/10 text-yellow-400' :
                  'bg-green-500/10 text-green-400'
                }`}>
                  {result.severity === 'critical' ? t({ en: 'Critical', es: 'Crítico' }) :
                   result.severity === 'medium' ? t({ en: 'Medium', es: 'Medio' }) :
                   t({ en: 'Low', es: 'Bajo' })}
                </span>
              </div>
              
              {/* Success rate bar */}
              <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                <div 
                  className={`h-full rounded-full transition-all ${
                    result.successRate >= 70 ? 'bg-gradient-to-r from-green-600 to-green-400' :
                    result.successRate >= 50 ? 'bg-gradient-to-r from-yellow-600 to-yellow-400' :
                    'bg-gradient-to-r from-red-600 to-red-400'
                  }`}
                  style={{ width: `${result.successRate}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const currentMethod = methods.find(m => m.id === activeMethod)!;

  return (
    <div className="w-full max-w-6xl mx-auto mt-8 space-y-8">
      {/* Title */}
      <div className="text-center space-y-2">
        <h3 className="text-2xl md:text-3xl font-bold text-white">
          {t({ en: 'UX Research in Practice: E-commerce Checkout Study', es: 'Investigación UX en Práctica: Estudio de Checkout E-commerce' })}
        </h3>
        <p className="text-sm md:text-base text-zinc-400 max-w-3xl mx-auto">
          {t({
            en: 'Real data, metrics, and insights from a checkout optimization project. See how different research methods triangulate to reveal the full picture.',
            es: 'Datos reales, métricas e insights de un proyecto de optimización de checkout. Ve cómo diferentes métodos de investigación se triangular para revelar la imagen completa.'
          })}
        </p>
      </div>

      {/* Method Tabs */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {methods.map((method) => {
          const Icon = method.icon;
          const isActive = activeMethod === method.id;
          const colorClasses = {
            purple: 'border-purple-500/50 bg-gradient-to-br from-purple-950/30 to-pink-950/30',
            blue: 'border-blue-500/50 bg-gradient-to-br from-blue-950/30 to-cyan-950/30',
            green: 'border-green-500/50 bg-gradient-to-br from-green-950/30 to-emerald-950/30',
            orange: 'border-orange-500/50 bg-gradient-to-br from-orange-950/30 to-red-950/30'
          };

          return (
            <button
              key={method.id}
              onClick={() => setActiveMethod(method.id)}
              className={`p-4 rounded-2xl border-2 transition-all text-left ${
                isActive
                  ? colorClasses[method.color as keyof typeof colorClasses] + ' shadow-xl scale-105'
                  : 'border-zinc-800 bg-zinc-900/50 hover:border-zinc-700'
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className={`size-10 rounded-lg flex items-center justify-center ${
                  method.color === 'purple' ? 'bg-purple-500/10 text-purple-400' :
                  method.color === 'blue' ? 'bg-blue-500/10 text-blue-400' :
                  method.color === 'green' ? 'bg-green-500/10 text-green-400' :
                  'bg-orange-500/10 text-orange-400'
                }`}>
                  <Icon className="size-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-white text-sm truncate">{t(method.name)}</h4>
                  <p className="text-xs text-zinc-500">{t(method.type)}</p>
                </div>
              </div>
              <p className="text-xs text-zinc-400 mt-2">{t(method.purpose)}</p>
            </button>
          );
        })}
      </div>

      {/* Active Method Content */}
      <div className="bg-zinc-950 border-2 border-zinc-800 rounded-2xl p-6">
        {activeMethod === 'interviews' && renderInterviews()}
        {activeMethod === 'surveys' && renderSurveys()}
        {activeMethod === 'analytics' && renderAnalytics()}
        {activeMethod === 'usability' && renderUsability()}
      </div>

      {/* Key Insight */}
      <div className="bg-gradient-to-br from-indigo-950/30 to-purple-950/30 border border-indigo-500/20 rounded-2xl p-6">
        <h4 className="font-bold text-indigo-300 mb-3 flex items-center gap-2">
          <TrendingUp className="size-5" />
          {t({ en: 'Triangulated Insight', es: 'Insight Triangulado' })}
        </h4>
        <p className="text-zinc-300 text-sm mb-4">
          {t({
            en: 'All four methods point to the same core issues: (1) Shipping costs appear too late, (2) Forced account creation creates friction, (3) Payment form is too long. By triangulating qualitative WHY (interviews) with quantitative HOW MANY (surveys), behavioral WHAT (analytics), and observational HOW (usability tests), we have high confidence in our findings.',
            es: 'Los cuatro métodos apuntan a los mismos problemas centrales: (1) Los costos de envío aparecen muy tarde, (2) La creación forzada de cuenta crea fricción, (3) El formulario de pago es muy largo. Al triangular el POR QUÉ cualitativo (entrevistas) con el CUÁNTOS cuantitativo (encuestas), el QUÉ comportamental (analíticas) y el CÓMO observacional (pruebas de usabilidad), tenemos alta confianza en nuestros hallazgos.'
          })}
        </p>

        <div className="bg-black/40 rounded-xl p-4 border border-indigo-500/20">
          <h5 className="font-semibold text-white text-sm mb-2">
            {t({ en: 'Recommended Actions:', es: 'Acciones Recomendadas:' })}
          </h5>
          <ul className="space-y-1 text-sm text-zinc-300">
            <li className="flex gap-2">
              <span className="text-indigo-400 shrink-0">1.</span>
              <span>{t({
                en: 'Show shipping costs earlier (on product page or cart)',
                es: 'Mostrar costos de envío antes (en página de producto o carrito)'
              })}</span>
            </li>
            <li className="flex gap-2">
              <span className="text-indigo-400 shrink-0">2.</span>
              <span>{t({
                en: 'Make guest checkout the default, prominent option',
                es: 'Hacer checkout como invitado la opción predeterminada y prominente'
              })}</span>
            </li>
            <li className="flex gap-2">
              <span className="text-indigo-400 shrink-0">3.</span>
              <span>{t({
                en: 'Simplify payment form (remove duplicate fields, use autofill)',
                es: 'Simplificar formulario de pago (eliminar campos duplicados, usar autofill)'
              })}</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Best Practices */}
      <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6">
        <h5 className="font-bold text-white mb-3 flex items-center gap-2">
          <span className="text-yellow-400">💡</span>
          {t({ en: 'Research Best Practices', es: 'Mejores Prácticas de Investigación' })}
        </h5>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h6 className="font-semibold text-green-400 text-sm mb-2 flex items-center gap-1">
              <ThumbsUp className="size-4" />
              {t({ en: 'Do This', es: 'Haz Esto' })}
            </h6>
            <ul className="space-y-1 text-sm text-zinc-300">
              <li className="flex gap-2">
                <span className="text-green-400 shrink-0">✓</span>
                <span>{t({ en: 'Use multiple methods to triangulate', es: 'Usa múltiples métodos para triangular' })}</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-400 shrink-0">✓</span>
                <span>{t({ en: 'Define clear research questions first', es: 'Define preguntas de investigación claras primero' })}</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-400 shrink-0">✓</span>
                <span>{t({ en: 'Include real users, not just stakeholders', es: 'Incluye usuarios reales, no solo stakeholders' })}</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-400 shrink-0">✓</span>
                <span>{t({ en: 'Look for patterns across participants', es: 'Busca patrones entre participantes' })}</span>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="font-semibold text-red-400 text-sm mb-2 flex items-center gap-1">
              <ThumbsDown className="size-4" />
              {t({ en: 'Avoid This', es: 'Evita Esto' })}
            </h6>
            <ul className="space-y-1 text-sm text-zinc-300">
              <li className="flex gap-2">
                <span className="text-red-400 shrink-0">✗</span>
                <span>{t({ en: 'Leading questions that bias responses', es: 'Preguntas inducidas que sesgan respuestas' })}</span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-400 shrink-0">✗</span>
                <span>{t({ en: 'Only looking for data that confirms your idea', es: 'Solo buscar datos que confirmen tu idea' })}</span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-400 shrink-0">✗</span>
                <span>{t({ en: 'Testing with sample size of 1-2 users', es: 'Probar con muestra de 1-2 usuarios' })}</span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-400 shrink-0">✗</span>
                <span>{t({ en: 'Ignoring negative/unexpected findings', es: 'Ignorar hallazgos negativos/inesperados' })}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
