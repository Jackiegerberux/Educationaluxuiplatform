import React, { useState } from 'react';
import { useLanguage } from '../../layout/LanguageContext';
import { ArrowRight, Circle, Square, Diamond, Hexagon, RectangleHorizontal, Info, ChevronRight } from 'lucide-react';

type FlowType = 'task' | 'user';

export function UserFlowInteractive() {
  const { t } = useLanguage();
  const [activeFlow, setActiveFlow] = useState<FlowType>('task');
  const [currentStep, setCurrentStep] = useState(0);

  // Task Flow Example: Password Reset (single path)
  const taskFlowSteps = [
    { id: 'start', type: 'start', label: { en: 'User clicks "Forgot Password"', es: 'Usuario hace clic en "Olvidé contraseña"' } },
    { id: 'screen1', type: 'screen', label: { en: 'Email input screen', es: 'Pantalla de entrada de email' } },
    { id: 'action1', type: 'action', label: { en: 'User enters email', es: 'Usuario ingresa email' } },
    { id: 'screen2', type: 'screen', label: { en: 'Confirmation screen', es: 'Pantalla de confirmación' } },
    { id: 'end', type: 'end', label: { en: 'Success', es: 'Éxito' } }
  ];

  // User Flow Example: Sign up with decisions and branches
  const userFlowSteps = [
    { id: 'start', type: 'start', label: { en: 'User visits homepage', es: 'Usuario visita página principal' } },
    { id: 'screen1', type: 'screen', label: { en: 'Landing page', es: 'Página de inicio' } },
    { id: 'decision1', type: 'decision', label: { en: 'Has account?', es: '¿Tiene cuenta?' }, branches: ['yes', 'no'] },
    { id: 'screen2a', type: 'screen', label: { en: 'Login screen', es: 'Pantalla de login' }, branch: 'yes' },
    { id: 'screen2b', type: 'screen', label: { en: 'Sign up screen', es: 'Pantalla de registro' }, branch: 'no' },
    { id: 'decision2', type: 'decision', label: { en: 'Sign up method?', es: '¿Método de registro?' }, branches: ['email', 'google'], parent: 'screen2b' },
    { id: 'screen3a', type: 'screen', label: { en: 'Email form', es: 'Formulario email' }, branch: 'email' },
    { id: 'screen3b', type: 'screen', label: { en: 'Google OAuth', es: 'OAuth Google' }, branch: 'google' },
    { id: 'screen4', type: 'screen', label: { en: 'Welcome screen', es: 'Pantalla de bienvenida' } },
    { id: 'end', type: 'end', label: { en: 'User onboarded', es: 'Usuario incorporado' } }
  ];

  const symbols = [
    {
      icon: Circle,
      name: { en: 'Circle/Oval', es: 'Círculo/Óvalo' },
      usage: { en: 'Start or End point', es: 'Punto de inicio o fin' },
      color: 'bg-green-500/20 text-green-400 border-green-500/30'
    },
    {
      icon: RectangleHorizontal,
      name: { en: 'Rectangle', es: 'Rectángulo' },
      usage: { en: 'Screen, page, or process step', es: 'Pantalla, página o paso del proceso' },
      color: 'bg-blue-500/20 text-blue-400 border-blue-500/30'
    },
    {
      icon: Diamond,
      name: { en: 'Diamond', es: 'Rombo' },
      usage: { en: 'Decision point (Yes/No, A/B)', es: 'Punto de decisión (Sí/No, A/B)' },
      color: 'bg-amber-500/20 text-amber-400 border-amber-500/30'
    },
    {
      icon: Hexagon,
      name: { en: 'Hexagon', es: 'Hexágono' },
      usage: { en: 'User action or input', es: 'Acción o entrada del usuario' },
      color: 'bg-purple-500/20 text-purple-400 border-purple-500/30'
    },
    {
      icon: ArrowRight,
      name: { en: 'Arrow', es: 'Flecha' },
      usage: { en: 'Flow direction / connector', es: 'Dirección del flujo / conector' },
      color: 'text-zinc-400'
    }
  ];

  const renderFlowNode = (step: any, index: number, isActive: boolean) => {
    const baseClasses = "transition-all duration-300 border-2";
    const activeClasses = isActive ? "scale-105 shadow-lg" : "opacity-50";
    
    if (step.type === 'start' || step.type === 'end') {
      return (
        <div className={`${baseClasses} ${activeClasses} rounded-full px-6 py-3 bg-green-500/10 border-green-500/30 text-green-400 text-center text-sm font-medium`}>
          {t(step.label)}
        </div>
      );
    }
    
    if (step.type === 'screen') {
      return (
        <div className={`${baseClasses} ${activeClasses} rounded-lg px-6 py-4 bg-blue-500/10 border-blue-500/30 text-blue-300 text-center text-sm font-medium`}>
          {t(step.label)}
        </div>
      );
    }
    
    if (step.type === 'action') {
      return (
        <div className={`${baseClasses} ${activeClasses} rounded px-4 py-3 bg-purple-500/10 border-purple-500/30 text-purple-300 text-center text-sm italic`}>
          {t(step.label)}
        </div>
      );
    }
    
    if (step.type === 'decision') {
      return (
        <div className={`${baseClasses} ${activeClasses} w-40 h-40 flex items-center justify-center bg-amber-500/10 border-amber-500/30 text-amber-300 text-center text-sm font-medium transform rotate-45`}>
          <span className="transform -rotate-45">{t(step.label)}</span>
        </div>
      );
    }
    
    return null;
  };

  return (
    <div className="w-full max-w-6xl mx-auto mt-8 space-y-8">
      {/* Title */}
      <div className="text-center space-y-2">
        <h3 className="text-2xl md:text-3xl font-bold text-white">
          {t({ en: 'Understanding User Flows', es: 'Entendiendo User Flows' })}
        </h3>
        <p className="text-sm md:text-base text-zinc-400 max-w-3xl mx-auto">
          {t({
            en: 'Learn the difference between Task Flows and User Flows, plus the standard symbols used to diagram them.',
            es: 'Aprende la diferencia entre Task Flows y User Flows, además de los símbolos estándar usados para diagramarlos.'
          })}
        </p>
      </div>

      {/* Flowchart Symbols Reference */}
      <div className="bg-zinc-900/80 border-2 border-zinc-800 rounded-2xl overflow-hidden">
        <div className="bg-zinc-950 p-4 border-b border-zinc-800">
          <h4 className="text-lg font-bold text-white flex items-center gap-2">
            <Info className="size-5 text-indigo-400" />
            {t({ en: 'Flowchart Symbols Guide', es: 'Guía de Símbolos de Diagrama de Flujo' })}
          </h4>
        </div>
        
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {symbols.map((symbol, idx) => (
            <div key={idx} className="bg-black/40 rounded-xl p-4 border border-zinc-800">
              <div className="flex items-center gap-3 mb-3">
                <div className={`size-12 rounded border-2 flex items-center justify-center ${symbol.color}`}>
                  <symbol.icon className="size-6" />
                </div>
                <div>
                  <h5 className="font-semibold text-white text-sm">{t(symbol.name)}</h5>
                  <p className="text-xs text-zinc-500">{t({ en: 'Symbol', es: 'Símbolo' })}</p>
                </div>
              </div>
              <p className="text-xs text-zinc-400">
                <strong className="text-zinc-300">{t({ en: 'Usage:', es: 'Uso:' })}</strong> {t(symbol.usage)}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Task Flow vs User Flow Comparison */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Task Flow */}
        <div className={`bg-zinc-900 border-2 rounded-2xl overflow-hidden transition-all ${
          activeFlow === 'task' ? 'border-indigo-500/50 shadow-xl' : 'border-zinc-800'
        }`}>
          <button
            onClick={() => setActiveFlow('task')}
            className="w-full bg-zinc-950 p-4 border-b border-zinc-800 text-left hover:bg-zinc-900 transition-colors"
          >
            <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <ArrowRight className="size-5 text-indigo-400" />
              {t({ en: 'Task Flow', es: 'Task Flow' })}
            </h4>
            <p className="text-xs text-zinc-400">
              {t({
                en: 'Linear path focusing on a single task. No decisions, no branches. Shows the "happy path" only.',
                es: 'Camino lineal enfocado en una sola tarea. Sin decisiones, sin ramificaciones. Muestra solo el "camino feliz".'
              })}
            </p>
          </button>
          
          <div className="p-6">
            <div className="bg-black/40 rounded-xl p-6 space-y-4">
              <p className="text-sm text-zinc-400 mb-4">
                {t({ en: 'Example: Password Reset', es: 'Ejemplo: Restablecer Contraseña' })}
              </p>
              {taskFlowSteps.map((step, idx) => (
                <div key={step.id} className="space-y-2">
                  {renderFlowNode(step, idx, activeFlow === 'task')}
                  {idx < taskFlowSteps.length - 1 && (
                    <div className="flex justify-center">
                      <ArrowRight className="size-5 text-zinc-600 rotate-90" />
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="mt-4 p-3 bg-indigo-500/10 border border-indigo-500/20 rounded-lg">
              <p className="text-xs text-indigo-300">
                <strong>{t({ en: 'Characteristics:', es: 'Características:' })}</strong> {t({
                  en: 'Single path, no branches, focuses on one specific task completion.',
                  es: 'Camino único, sin ramificaciones, se enfoca en completar una tarea específica.'
                })}
              </p>
            </div>
          </div>
        </div>

        {/* User Flow */}
        <div className={`bg-zinc-900 border-2 rounded-2xl overflow-hidden transition-all ${
          activeFlow === 'user' ? 'border-amber-500/50 shadow-xl' : 'border-zinc-800'
        }`}>
          <button
            onClick={() => setActiveFlow('user')}
            className="w-full bg-zinc-950 p-4 border-b border-zinc-800 text-left hover:bg-zinc-900 transition-colors"
          >
            <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <Diamond className="size-5 text-amber-400" />
              {t({ en: 'User Flow', es: 'User Flow' })}
            </h4>
            <p className="text-xs text-zinc-400">
              {t({
                en: 'Includes decision points and multiple branches. Shows different paths users can take based on choices.',
                es: 'Incluye puntos de decisión y múltiples ramificaciones. Muestra diferentes caminos que los usuarios pueden tomar según sus elecciones.'
              })}
            </p>
          </button>
          
          <div className="p-6">
            <div className="bg-black/40 rounded-xl p-6">
              <p className="text-sm text-zinc-400 mb-6 text-center">
                {t({ en: 'Example: Sign Up Flow (Simplified)', es: 'Ejemplo: Flujo de Registro (Simplificado)' })}
              </p>
              
              {/* Simplified visualization */}
              <div className="space-y-4">
                <div className="flex flex-col items-center space-y-2">
                  <div className="rounded-full px-6 py-3 bg-green-500/10 border-2 border-green-500/30 text-green-400 text-center text-sm font-medium">
                    {t({ en: 'Start', es: 'Inicio' })}
                  </div>
                  <ArrowRight className="size-5 text-zinc-600 rotate-90" />
                  <div className="rounded-lg px-6 py-4 bg-blue-500/10 border-2 border-blue-500/30 text-blue-300 text-center text-sm font-medium">
                    {t({ en: 'Landing Page', es: 'Página Inicial' })}
                  </div>
                  <ArrowRight className="size-5 text-zinc-600 rotate-90" />
                  <div className="w-32 h-32 flex items-center justify-center bg-amber-500/10 border-2 border-amber-500/30 text-amber-300 text-center text-xs font-medium transform rotate-45">
                    <span className="transform -rotate-45">{t({ en: 'Has account?', es: '¿Tiene cuenta?' })}</span>
                  </div>
                </div>
                
                {/* Branches */}
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="space-y-2 flex flex-col items-center">
                    <div className="text-xs text-zinc-500">{t({ en: 'YES', es: 'SÍ' })}</div>
                    <div className="rounded-lg px-4 py-3 bg-blue-500/10 border-2 border-blue-500/30 text-blue-300 text-center text-xs">
                      {t({ en: 'Login', es: 'Login' })}
                    </div>
                  </div>
                  <div className="space-y-2 flex flex-col items-center">
                    <div className="text-xs text-zinc-500">{t({ en: 'NO', es: 'NO' })}</div>
                    <div className="rounded-lg px-4 py-3 bg-blue-500/10 border-2 border-blue-500/30 text-blue-300 text-center text-xs">
                      {t({ en: 'Sign Up', es: 'Registro' })}
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col items-center space-y-2 mt-4">
                  <div className="text-xs text-zinc-500">↓</div>
                  <div className="rounded-full px-6 py-3 bg-green-500/10 border-2 border-green-500/30 text-green-400 text-center text-sm font-medium">
                    {t({ en: 'Dashboard', es: 'Panel' })}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-4 p-3 bg-amber-500/10 border border-amber-500/20 rounded-lg">
              <p className="text-xs text-amber-300">
                <strong>{t({ en: 'Characteristics:', es: 'Características:' })}</strong> {t({
                  en: 'Multiple paths, includes decisions (diamonds), shows edge cases and error states.',
                  es: 'Múltiples caminos, incluye decisiones (rombos), muestra casos extremos y estados de error.'
                })}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Key Differences Table */}
      <div className="bg-zinc-900/80 border-2 border-zinc-800 rounded-2xl overflow-hidden">
        <div className="bg-zinc-950 p-4 border-b border-zinc-800">
          <h4 className="text-lg font-bold text-white flex items-center gap-2">
            <ChevronRight className="size-5 text-blue-400" />
            {t({ en: 'Key Differences', es: 'Diferencias Clave' })}
          </h4>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-zinc-950/50 border-b border-zinc-800">
                <th className="text-left p-4 text-zinc-400 font-semibold text-sm">
                  {t({ en: 'Aspect', es: 'Aspecto' })}
                </th>
                <th className="text-left p-4 text-zinc-400 font-semibold text-sm">
                  {t({ en: 'Task Flow', es: 'Task Flow' })}
                </th>
                <th className="text-left p-4 text-zinc-400 font-semibold text-sm">
                  {t({ en: 'User Flow', es: 'User Flow' })}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-zinc-800">
                <td className="p-4 text-zinc-300 font-medium text-sm">
                  {t({ en: 'Complexity', es: 'Complejidad' })}
                </td>
                <td className="p-4 text-zinc-400 text-xs">
                  {t({ en: 'Simple, linear', es: 'Simple, lineal' })}
                </td>
                <td className="p-4 text-zinc-300 text-xs">
                  {t({ en: 'Complex, branching', es: 'Complejo, ramificado' })}
                </td>
              </tr>
              <tr className="border-b border-zinc-800">
                <td className="p-4 text-zinc-300 font-medium text-sm">
                  {t({ en: 'Decisions', es: 'Decisiones' })}
                </td>
                <td className="p-4 text-zinc-400 text-xs">
                  {t({ en: 'No decision points', es: 'Sin puntos de decisión' })}
                </td>
                <td className="p-4 text-zinc-300 text-xs">
                  {t({ en: 'Includes decisions (diamonds)', es: 'Incluye decisiones (rombos)' })}
                </td>
              </tr>
              <tr className="border-b border-zinc-800">
                <td className="p-4 text-zinc-300 font-medium text-sm">
                  {t({ en: 'Paths', es: 'Caminos' })}
                </td>
                <td className="p-4 text-zinc-400 text-xs">
                  {t({ en: 'One path (happy path)', es: 'Un camino (camino feliz)' })}
                </td>
                <td className="p-4 text-zinc-300 text-xs">
                  {t({ en: 'Multiple paths & branches', es: 'Múltiples caminos y ramas' })}
                </td>
              </tr>
              <tr className="border-b border-zinc-800">
                <td className="p-4 text-zinc-300 font-medium text-sm">
                  {t({ en: 'Use Case', es: 'Caso de Uso' })}
                </td>
                <td className="p-4 text-zinc-400 text-xs">
                  {t({ en: 'Documenting a single task', es: 'Documentar una sola tarea' })}
                </td>
                <td className="p-4 text-zinc-300 text-xs">
                  {t({ en: 'Mapping entire user journey', es: 'Mapear todo el viaje del usuario' })}
                </td>
              </tr>
              <tr className="border-b border-zinc-800">
                <td className="p-4 text-zinc-300 font-medium text-sm">
                  {t({ en: 'Error States', es: 'Estados de Error' })}
                </td>
                <td className="p-4 text-zinc-400 text-xs">
                  {t({ en: 'Usually not included', es: 'Usualmente no incluidos' })}
                </td>
                <td className="p-4 text-zinc-300 text-xs">
                  {t({ en: 'Essential to include', es: 'Esencial incluirlos' })}
                </td>
              </tr>
              <tr>
                <td className="p-4 text-zinc-300 font-medium text-sm">
                  {t({ en: 'Example', es: 'Ejemplo' })}
                </td>
                <td className="p-4 text-zinc-400 text-xs">
                  {t({ en: 'Password reset, Add to cart', es: 'Restablecer contraseña, Añadir al carrito' })}
                </td>
                <td className="p-4 text-zinc-300 text-xs">
                  {t({ en: 'Sign up, Checkout, Onboarding', es: 'Registro, Checkout, Incorporación' })}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Best Practices */}
      <div className="bg-gradient-to-br from-blue-950/30 to-indigo-950/30 border border-blue-500/20 rounded-2xl p-6">
        <h5 className="font-bold text-blue-300 mb-3 flex items-center gap-2">
          <Info className="size-5" />
          {t({ en: 'Best Practices for Creating Flows', es: 'Mejores Prácticas para Crear Flujos' })}
        </h5>
        <ul className="space-y-2 text-sm text-zinc-300">
          <li className="flex gap-2">
            <span className="text-blue-400">•</span>
            <span>{t({
              en: 'Start with the happy path (Task Flow), then expand to User Flow with edge cases',
              es: 'Comienza con el camino feliz (Task Flow), luego expande a User Flow con casos extremos'
            })}</span>
          </li>
          <li className="flex gap-2">
            <span className="text-blue-400">•</span>
            <span>{t({
              en: 'Use standard symbols consistently (rectangle = screen, diamond = decision)',
              es: 'Usa símbolos estándar consistentemente (rectángulo = pantalla, rombo = decisión)'
            })}</span>
          </li>
          <li className="flex gap-2">
            <span className="text-blue-400">•</span>
            <span>{t({
              en: 'Keep labels short and action-oriented ("User clicks X", "System shows Y")',
              es: 'Mantén las etiquetas cortas y orientadas a la acción ("Usuario hace clic en X", "Sistema muestra Y")'
            })}</span>
          </li>
          <li className="flex gap-2">
            <span className="text-blue-400">•</span>
            <span>{t({
              en: 'Define clear entry and exit points (ovals/circles)',
              es: 'Define puntos de entrada y salida claros (óvalos/círculos)'
            })}</span>
          </li>
          <li className="flex gap-2">
            <span className="text-blue-400">•</span>
            <span>{t({
              en: 'Use tools like Whimsical, FigJam, Miro, or Lucidchart for collaborative diagramming',
              es: 'Usa herramientas como Whimsical, FigJam, Miro o Lucidchart para diagramación colaborativa'
            })}</span>
          </li>
        </ul>
      </div>

      {/* Reference */}
      <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-4 text-center">
        <p className="text-xs text-zinc-500 mb-2">{t({ en: 'Reference:', es: 'Referencia:' })}</p>
        <a
          href="https://whimsical.com/userflow-coder-5MLcowy4FXp9CnVFsjxhkZ"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-indigo-400 hover:text-indigo-300 underline"
        >
          {t({ en: 'View example in Whimsical', es: 'Ver ejemplo en Whimsical' })}
        </a>
      </div>
    </div>
  );
}
