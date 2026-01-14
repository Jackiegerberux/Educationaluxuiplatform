import React from 'react';
import { useLanguage } from '../../layout/LanguageContext';
import { GitGraph, RefreshCw, Box, Search, Play, Layers, Users, Clock, Target, ArrowRight, Zap, Repeat } from 'lucide-react';

export function MethodologiesDeepDive() {
  const { t } = useLanguage();

  return (
    <div className="space-y-12">
      
      {/* 3. Methodologies Overview (Table) */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
        <div className="p-4 border-b border-zinc-800 bg-zinc-950/50">
          <h4 className="font-semibold text-white flex items-center gap-2">
            <Layers className="size-4 text-indigo-400" />
            {t({ en: 'Methodologies Overview', es: 'Resumen de Metodologías' })}
          </h4>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-zinc-500 uppercase bg-zinc-950/50">
              <tr>
                <th className="px-6 py-3">{t({ en: 'Methodology', es: 'Metodología' })}</th>
                <th className="px-6 py-3">{t({ en: 'Purpose', es: 'Propósito' })}</th>
                <th className="px-6 py-3">{t({ en: 'When to Use', es: 'Cuándo Usar' })}</th>
                <th className="px-6 py-3">{t({ en: 'UX Role', es: 'Rol de UX' })}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800">
              <tr className="bg-zinc-900/50">
                <td className="px-6 py-4 font-medium text-white">Waterfall</td>
                <td className="px-6 py-4 text-zinc-400">{t({ en: 'Linear, sequential delivery', es: 'Entrega lineal y secuencial' })}</td>
                <td className="px-6 py-4 text-zinc-400">{t({ en: 'Fixed scope, strict regulations', es: 'Alcance fijo, regulaciones estrictas' })}</td>
                <td className="px-6 py-4 text-zinc-400">{t({ en: 'Upfront research & detailed specs', es: 'Investigación previa y especificaciones detalladas' })}</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium text-white">Agile (Scrum)</td>
                <td className="px-6 py-4 text-zinc-400">{t({ en: 'Iterative, incremental delivery', es: 'Entrega iterativa e incremental' })}</td>
                <td className="px-6 py-4 text-zinc-400">{t({ en: 'Unclear requirements, fast-paced', es: 'Requisitos poco claros, ritmo rápido' })}</td>
                <td className="px-6 py-4 text-zinc-400">{t({ en: 'Continuous discovery, sprint support', es: 'Descubrimiento continuo, soporte al sprint' })}</td>
              </tr>
              <tr className="bg-zinc-900/50">
                <td className="px-6 py-4 font-medium text-white">Design Thinking</td>
                <td className="px-6 py-4 text-zinc-400">{t({ en: 'Problem solving & innovation', es: 'Resolución de problemas e innovación' })}</td>
                <td className="px-6 py-4 text-zinc-400">{t({ en: 'Solving complex, undefined problems', es: 'Resolver problemas complejos e indefinidos' })}</td>
                <td className="px-6 py-4 text-zinc-400">{t({ en: 'Leads the process', es: 'Lidera el proceso' })}</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium text-white">Design Sprint</td>
                <td className="px-6 py-4 text-zinc-400">{t({ en: 'Rapid validation (5 days)', es: 'Validación rápida (5 días)' })}</td>
                <td className="px-6 py-4 text-zinc-400">{t({ en: 'Kickstarting big features/projects', es: 'Arrancar grandes funcionalidades/proyectos' })}</td>
                <td className="px-6 py-4 text-zinc-400">{t({ en: 'Facilitator & Prototyper', es: 'Facilitador y Prototipador' })}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 4. Agile vs Waterfall */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-6 bg-zinc-900 rounded-xl border border-zinc-800">
            <h4 className="font-bold text-white mb-4 flex items-center gap-2">
                <div className="size-2 bg-red-500 rounded-full"></div>
                Waterfall (Cascade)
            </h4>
            <div className="space-y-4 relative">
                <div className="absolute left-3 top-2 bottom-2 w-0.5 bg-zinc-800"></div>
                {['Requirements', 'Design', 'Implementation', 'Verification', 'Maintenance'].map((step, i) => (
                    <div key={i} className="flex items-center gap-3 relative z-10">
                        <div className="size-6 bg-zinc-800 rounded-full border border-zinc-700 flex items-center justify-center text-[10px] text-zinc-400">
                            {i+1}
                        </div>
                        <span className="text-zinc-400 text-sm">{step}</span>
                    </div>
                ))}
            </div>
            <p className="mt-6 text-xs text-zinc-500">
                {t({ en: 'Risk: You only see the product at the end.', es: 'Riesgo: Solo ves el producto al final.' })}
            </p>
        </div>

        <div className="p-6 bg-zinc-900 rounded-xl border border-zinc-800">
            <h4 className="font-bold text-white mb-4 flex items-center gap-2">
                <div className="size-2 bg-green-500 rounded-full"></div>
                Agile (Iterative)
            </h4>
            <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                     <div className="flex flex-col items-center gap-2">
                        <div className="size-10 rounded-full bg-green-900/30 border border-green-500/30 flex items-center justify-center text-green-400">
                            <Repeat size={18} />
                        </div>
                        <span className="text-xs text-zinc-400">Sprint 1</span>
                     </div>
                     <ArrowRight className="text-zinc-700" size={16} />
                     <div className="flex flex-col items-center gap-2">
                        <div className="size-10 rounded-full bg-green-900/30 border border-green-500/30 flex items-center justify-center text-green-400">
                            <Repeat size={18} />
                        </div>
                        <span className="text-xs text-zinc-400">Sprint 2</span>
                     </div>
                     <ArrowRight className="text-zinc-700" size={16} />
                     <div className="flex flex-col items-center gap-2">
                        <div className="size-10 rounded-full bg-green-900/30 border border-green-500/30 flex items-center justify-center text-green-400">
                            <Repeat size={18} />
                        </div>
                        <span className="text-xs text-zinc-400">Sprint 3</span>
                     </div>
                </div>
                <div className="bg-green-900/10 p-3 rounded border border-green-500/20 text-xs text-green-300 mt-2">
                    <strong>{t({ en: 'Misconception:', es: 'Malentendido:' })}</strong> {t({ en: 'Agile does NOT mean "no documentation" or "no research". It means doing it in smaller batches.', es: 'Agile NO significa "sin documentación" o "sin investigación". Significa hacerlo en lotes más pequeños.' })}
                </div>
            </div>
        </div>
      </div>

      {/* 6. Scrum */}
      <div className="bg-indigo-950/20 rounded-xl border border-indigo-500/20 p-6">
        <h4 className="font-bold text-white mb-6 flex items-center gap-2">
            <GitGraph className="text-indigo-400" />
            Scrum Framework
        </h4>
        <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-3">
                <h5 className="text-sm font-semibold text-indigo-200 border-b border-indigo-500/20 pb-2">Roles</h5>
                <ul className="text-sm text-zinc-400 space-y-2">
                    <li className="flex gap-2"><Users size={14} className="mt-0.5" /> Product Owner (Priorities)</li>
                    <li className="flex gap-2"><Users size={14} className="mt-0.5" /> Scrum Master (Process)</li>
                    <li className="flex gap-2"><Users size={14} className="mt-0.5" /> The Team (Builders)</li>
                </ul>
            </div>
            <div className="space-y-3">
                <h5 className="text-sm font-semibold text-indigo-200 border-b border-indigo-500/20 pb-2">Ceremonies</h5>
                <ul className="text-sm text-zinc-400 space-y-2">
                    <li className="flex gap-2"><Clock size={14} className="mt-0.5" /> Daily Standup</li>
                    <li className="flex gap-2"><Clock size={14} className="mt-0.5" /> Sprint Planning</li>
                    <li className="flex gap-2"><Clock size={14} className="mt-0.5" /> Sprint Review & Retro</li>
                </ul>
            </div>
            <div className="space-y-3">
                <h5 className="text-sm font-semibold text-indigo-200 border-b border-indigo-500/20 pb-2">UX in Scrum</h5>
                <p className="text-sm text-zinc-400 italic">
                    {t({ 
                        en: 'UX often works one sprint ahead ("staggered sprints") to prepare designs before dev starts.', 
                        es: 'UX a menudo trabaja un sprint por delante para preparar diseños antes del desarrollo.' 
                    })}
                </p>
            </div>
        </div>
      </div>

      {/* 7. Design Thinking */}
      <div className="border border-zinc-800 rounded-xl p-6 bg-zinc-900/30">
        <h4 className="font-bold text-white mb-6 flex items-center gap-2">
            <Target className="text-pink-400" />
            Design Thinking
        </h4>
        <div className="flex flex-wrap justify-center gap-4">
            {[
                { name: 'Empathize', icon: '❤️' },
                { name: 'Define', icon: '🎯' },
                { name: 'Ideate', icon: '💡' },
                { name: 'Prototype', icon: '🛠️' },
                { name: 'Test', icon: '📝' }
            ].map((step, i) => (
                <div key={i} className="flex items-center">
                    <div className="flex flex-col items-center gap-2">
                        <div className="size-16 rounded-full bg-zinc-800 border-2 border-zinc-700 flex items-center justify-center text-2xl shadow-lg">
                            {step.icon}
                        </div>
                        <span className="text-xs font-medium text-zinc-400 uppercase tracking-wider">{step.name}</span>
                    </div>
                    {i < 4 && <div className="w-8 h-0.5 bg-zinc-700 mx-2 hidden md:block"></div>}
                </div>
            ))}
        </div>
        <div className="mt-6 bg-pink-950/20 p-4 rounded-lg border border-pink-500/20 text-sm text-pink-200">
            <strong>{t({ en: 'When to use:', es: 'Cuándo usar:' })}</strong> {t({ en: 'When the problem is ambiguous and you don\'t know the solution yet.', es: 'Cuando el problema es ambiguo y aún no conoces la solución.' })}
        </div>
      </div>

      {/* 8. Design Sprint */}
      <div className="border border-zinc-800 rounded-xl p-6 bg-zinc-900/30">
        <h4 className="font-bold text-white mb-6 flex items-center gap-2">
            <Zap className="text-yellow-400" />
            Design Sprint (5 Days)
        </h4>
        <div className="grid grid-cols-5 gap-2 text-center">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((day, i) => (
                <div key={i} className="flex flex-col gap-2">
                    <div className="text-xs text-zinc-500 uppercase font-mono">{day}</div>
                    <div className="h-24 rounded bg-zinc-800 border border-zinc-700 p-2 flex items-center justify-center text-xs text-zinc-300 font-medium">
                        {i === 0 && 'Map'}
                        {i === 1 && 'Sketch'}
                        {i === 2 && 'Decide'}
                        {i === 3 && 'Prototype'}
                        {i === 4 && 'Test'}
                    </div>
                </div>
            ))}
        </div>
      </div>

       {/* 9. Desk Research */}
       <div className="border border-zinc-800 rounded-xl p-6 bg-zinc-900/30">
        <h4 className="font-bold text-white mb-4 flex items-center gap-2">
            <Search className="text-cyan-400" />
            Desk Research
        </h4>
        <div className="flex gap-6 items-start">
            <div className="flex-1">
                <p className="text-sm text-zinc-400 mb-4">
                    {t({ 
                        en: 'Secondary research. Reviewing what already exists before starting something new.', 
                        es: 'Investigación secundaria. Revisar lo que ya existe antes de empezar algo nuevo.' 
                    })}
                </p>
                <div className="flex gap-2">
                    <span className="px-2 py-1 bg-zinc-800 rounded text-xs text-zinc-300 border border-zinc-700">Competitors</span>
                    <span className="px-2 py-1 bg-zinc-800 rounded text-xs text-zinc-300 border border-zinc-700">Analytics</span>
                    <span className="px-2 py-1 bg-zinc-800 rounded text-xs text-zinc-300 border border-zinc-700">Academic Papers</span>
                </div>
            </div>
            <div className="w-1/3 bg-zinc-950 p-4 rounded border border-zinc-800">
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                        <Search size={14} className="text-zinc-500"/>
                        <div className="h-2 w-full bg-zinc-800 rounded"></div>
                    </div>
                    <div className="flex items-center gap-2">
                        <Box size={14} className="text-zinc-500"/>
                        <div className="h-2 w-3/4 bg-zinc-800 rounded"></div>
                    </div>
                    <ArrowRight className="self-center rotate-90 text-zinc-600 my-1" size={14} />
                    <div className="text-xs text-center text-cyan-400 font-medium">Insights</div>
                </div>
            </div>
        </div>
      </div>

       {/* 10. Hybrid Workflow */}
       <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-6 rounded-xl border border-white/10">
            <h4 className="font-bold text-white mb-4">
                {t({ en: 'Real Life: The Hybrid Model', es: 'Vida Real: El Modelo Híbrido' })}
            </h4>
            <div className="flex items-center gap-4 overflow-x-auto pb-2">
                <div className="shrink-0 w-32 p-3 bg-zinc-900 rounded border border-zinc-700 text-center">
                    <div className="text-xs text-cyan-400 mb-1">Week 1</div>
                    <div className="font-bold text-white text-sm">Desk Research</div>
                </div>
                <ArrowRight className="text-zinc-600 shrink-0" />
                <div className="shrink-0 w-32 p-3 bg-zinc-900 rounded border border-zinc-700 text-center">
                    <div className="text-xs text-pink-400 mb-1">Week 2</div>
                    <div className="font-bold text-white text-sm">Design Thinking</div>
                </div>
                 <ArrowRight className="text-zinc-600 shrink-0" />
                <div className="shrink-0 w-32 p-3 bg-zinc-900 rounded border border-zinc-700 text-center">
                    <div className="text-xs text-green-400 mb-1">Week 3-N</div>
                    <div className="font-bold text-white text-sm">Agile Delivery</div>
                </div>
            </div>
       </div>

    </div>
  );
}
