import React, { useState } from 'react';
import { useLanguage } from '../layout/LanguageContext';
import { Ticket, User, Target, Copy, Check, ExternalLink, CheckSquare, Shield, AlertTriangle, FileWarning } from 'lucide-react';
import { copyToClipboard } from '../../utils/clipboard';

interface TicketOutput {
  userStory: string;
  acceptanceCriteria: string[];
  uxChecklist: string[];
  analyticsNotes: string[];
  definitionOfDone: string[];
  sprintRisk: 'low' | 'medium' | 'high';
  hasDesignDebt: boolean;
}

export function TicketBuilder() {
  const { t, language } = useLanguage();
  
  const [featureName, setFeatureName] = useState('');
  const [userType, setUserType] = useState('');
  const [goal, setGoal] = useState('');
  const [constraints, setConstraints] = useState('');
  const [output, setOutput] = useState<TicketOutput | null>(null);
  const [copied, setCopied] = useState(false);

  const generateTicket = () => {
    if (!featureName.trim() || !userType.trim() || !goal.trim()) return;

    // Generate user story
    const userStory = t({
      en: `As a ${userType}, I want to ${featureName} so that ${goal}.`,
      es: `Como ${userType}, quiero ${featureName} para que ${goal}.`
    });

    // Generate acceptance criteria (Given/When/Then format)
    const acceptanceCriteria = [
      t({
        en: `Given I am a logged-in ${userType}, When I access the ${featureName} feature, Then I should see the main interface with all controls visible.`,
        es: `Dado que soy un ${userType} con sesión iniciada, Cuando accedo a la funcionalidad ${featureName}, Entonces debería ver la interfaz principal con todos los controles visibles.`
      }),
      t({
        en: `Given I have successfully used ${featureName}, When I complete the action, Then I should see a confirmation message and the system should update the state.`,
        es: `Dado que he usado exitosamente ${featureName}, Cuando completo la acción, Entonces debería ver mensaje de confirmación y el sistema debería actualizar el estado.`
      }),
      t({
        en: `Given there is an error (network failure, validation error), When ${featureName} fails, Then I should see a clear error message with recovery options.`,
        es: `Dado que hay un error (falla de red, error de validación), Cuando ${featureName} falla, Entonces debería ver mensaje de error claro con opciones de recuperación.`
      }),
      t({
        en: `Given I am on mobile (viewport <768px), When I use ${featureName}, Then the interface should be fully responsive and touch-optimized.`,
        es: `Dado que estoy en móvil (viewport <768px), Cuando uso ${featureName}, Entonces la interfaz debería ser completamente responsive y optimizada para touch.`
      }),
      t({
        en: `Given I have screen reader enabled, When I navigate ${featureName}, Then all interactive elements should have proper ARIA labels and keyboard navigation.`,
        es: `Dado que tengo lector de pantalla habilitado, Cuando navego ${featureName}, Entonces todos los elementos interactivos deberían tener etiquetas ARIA apropiadas y navegación por teclado.`
      })
    ];

    // Generate UX checklist
    const uxChecklist = [
      t({ en: 'Mobile responsive (tested on iOS + Android)', es: 'Responsive móvil (testeado en iOS + Android)' }),
      t({ en: 'Dark mode variant included in Figma', es: 'Variante dark mode incluida en Figma' }),
      t({ en: 'Empty state: what shows when no data?', es: 'Estado vacío: ¿qué se muestra cuando no hay datos?' }),
      t({ en: 'Loading state: spinner or skeleton?', es: 'Estado de carga: ¿spinner o skeleton?' }),
      t({ en: 'Error handling: network errors, validation errors', es: 'Manejo de errores: errores de red, errores de validación' }),
      t({ en: 'Accessibility: ARIA labels, keyboard nav, color contrast', es: 'Accesibilidad: etiquetas ARIA, navegación por teclado, contraste de color' })
    ];

    // Generate analytics tracking notes
    const analyticsNotes = [
      t({ en: `Track: User opens ${featureName} (event: feature_opened)`, es: `Trackear: Usuario abre ${featureName} (evento: feature_opened)` }),
      t({ en: `Track: User completes primary action (event: action_completed)`, es: `Trackear: Usuario completa acción primaria (evento: action_completed)` }),
      t({ en: `Track: User encounters error (event: error_shown, properties: error_type)`, es: `Trackear: Usuario encuentra error (evento: error_shown, propiedades: error_type)` }),
      t({ en: `Track: Time to complete task (metric: task_duration_ms)`, es: `Trackear: Tiempo para completar tarea (métrica: task_duration_ms)` })
    ];

    // Generate Definition of Done
    const definitionOfDone = [
      t({ en: 'Code matches Figma mockup pixel-for-pixel at all breakpoints', es: 'Código coincide con mockup de Figma pixel-por-pixel en todos los breakpoints' }),
      t({ en: 'All acceptance criteria pass (Given/When/Then verified)', es: 'Todos los criterios de aceptación pasan (Given/When/Then verificado)' }),
      t({ en: 'Accessibility audit passed (keyboard nav, screen reader, contrast)', es: 'Auditoría de accesibilidad pasada (nav por teclado, lector de pantalla, contraste)' }),
      t({ en: 'Mobile responsive tested on iOS Safari + Android Chrome', es: 'Responsive móvil testeado en iOS Safari + Android Chrome' }),
      t({ en: 'Analytics events verified in staging environment', es: 'Eventos de analytics verificados en ambiente de staging' }),
      t({ en: 'Edge cases handled: empty, loading, error, overflow states', es: 'Edge cases manejados: estados vacío, carga, error, overflow' }),
      t({ en: 'Code reviewed by at least one peer engineer', es: 'Código revisado por al menos un ingeniero par' }),
    ];

    // Determine Sprint Risk based on inputs
    const wordCount = (featureName + ' ' + goal + ' ' + constraints).split(/\s+/).length;
    const hasConstraints = constraints.trim().length > 0;
    const sprintRisk: 'low' | 'medium' | 'high' =
      wordCount > 30 || (hasConstraints && constraints.length > 80) ? 'high' :
      wordCount > 15 || hasConstraints ? 'medium' : 'low';

    // Design Debt flag: triggered when constraints suggest compromises
    const debtKeywords = ['existing', 'legacy', 'workaround', 'temporary', 'limit', 'max', 'only', 'solo', 'sin', 'without', 'no time', 'skip'];
    const hasDesignDebt = hasConstraints && debtKeywords.some(kw => constraints.toLowerCase().includes(kw));

    setOutput({
      userStory,
      acceptanceCriteria,
      uxChecklist,
      analyticsNotes,
      definitionOfDone,
      sprintRisk,
      hasDesignDebt
    });
  };

  const copyTicket = () => {
    if (!output) return;

    const ticketText = `
${t({ en: '## User Story', es: '## User Story' })}
${output.userStory}

${t({ en: '## Acceptance Criteria', es: '## Criterios de Aceptación' })}
${output.acceptanceCriteria.map((ac, idx) => `${idx + 1}. ${ac}`).join('\n')}

${t({ en: '## UX Design Checklist', es: '## Checklist de Diseño UX' })}
${output.uxChecklist.map(item => `- [ ] ${item}`).join('\n')}

${t({ en: '## Analytics & Tracking', es: '## Analytics y Tracking' })}
${output.analyticsNotes.map(note => `- ${note}`).join('\n')}

${t({ en: '## Definition of Done', es: '## Definición de Terminado' })}
${output.definitionOfDone.map(item => `- [ ] ${item}`).join('\n')}

${t({ en: '## Sprint Risk Level', es: '## Nivel de Riesgo del Sprint' })}: ${output.sprintRisk.toUpperCase()}
${output.hasDesignDebt ? `\n${t({ en: '## Design Debt Risk: DETECTED', es: '## Riesgo de Deuda de Diseño: DETECTADO' })}\n${t({ en: 'Constraints suggest compromises. Log design debt ticket for future sprint.', es: 'Las restricciones sugieren compromisos. Registra ticket de deuda de diseño para sprint futuro.' })}` : ''}

${t({ en: '## Figma Link', es: '## Link de Figma' })}
[Add Figma link here]

${constraints ? `${t({ en: '## Constraints & Notes', es: '## Restricciones y Notas' })}\n${constraints}` : ''}
`.trim();

    copyToClipboard(ticketText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToExample = () => {
    const exampleSection = document.getElementById('ticket-example');
    if (exampleSection) {
      exampleSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto space-y-8 mt-12">
      {/* Header */}
      <div className="text-center space-y-3">
        <div className="flex items-center justify-center gap-3">
          <Ticket className="size-8 text-violet-400" />
          <h3 className="text-3xl font-bold text-white">
            {t({ en: 'Ticket Builder', es: 'Constructor de Tickets' })}
          </h3>
        </div>
        <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
          {t({ 
            en: 'Generate production-ready user stories, acceptance criteria, UX checklists, and analytics notes for your Scrum tickets.',
            es: 'Genera user stories listas para producción, criterios de aceptación, checklists UX y notas de analytics para tus tickets Scrum.'
          })}
        </p>
      </div>

      {/* Input Section */}
      <div className="bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 border border-zinc-800 rounded-2xl p-6 space-y-5">
        <div className="flex items-center gap-2 mb-4">
          <Target className="size-5 text-violet-400" />
          <h4 className="text-lg font-semibold text-white">
            {t({ en: 'Feature Details', es: 'Detalles de la Funcionalidad' })}
          </h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="featureName" className="block text-sm font-medium text-zinc-300 mb-2">
              {t({ en: 'Feature Name', es: 'Nombre de la Funcionalidad' })} *
            </label>
            <input
              id="featureName"
              type="text"
              value={featureName}
              onChange={(e) => setFeatureName(e.target.value)}
              placeholder={t({ en: 'e.g., filter products by price', es: 'ej., filtrar productos por precio' })}
              className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-violet-500 transition-colors"
            />
          </div>

          <div>
            <label htmlFor="userType" className="block text-sm font-medium text-zinc-300 mb-2">
              <User className="size-4 inline mr-1" />
              {t({ en: 'User Type', es: 'Tipo de Usuario' })} *
            </label>
            <input
              id="userType"
              type="text"
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
              placeholder={t({ en: 'e.g., shopper, admin, guest user', es: 'ej., comprador, admin, usuario invitado' })}
              className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-violet-500 transition-colors"
            />
          </div>
        </div>

        <div>
          <label htmlFor="goal" className="block text-sm font-medium text-zinc-300 mb-2">
            {t({ en: 'User Goal (so that...)', es: 'Objetivo del Usuario (para que...)' })} *
          </label>
          <input
            id="goal"
            type="text"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            placeholder={t({ 
              en: 'e.g., I can find affordable products quickly',
              es: 'ej., pueda encontrar productos asequibles rápidamente'
            })}
            className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-violet-500 transition-colors"
          />
        </div>

        <div>
          <label htmlFor="constraints" className="block text-sm font-medium text-zinc-300 mb-2">
            {t({ en: 'Constraints / Notes (optional)', es: 'Restricciones / Notas (opcional)' })}
          </label>
          <textarea
            id="constraints"
            value={constraints}
            onChange={(e) => setConstraints(e.target.value)}
            placeholder={t({ 
              en: 'e.g., Must work with existing API, design system colors only, max 3 filter options',
              es: 'ej., Debe funcionar con API existente, solo colores del design system, máx 3 opciones de filtro'
            })}
            rows={2}
            className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-violet-500 transition-colors resize-none"
          />
        </div>

        <button
          onClick={generateTicket}
          disabled={!featureName.trim() || !userType.trim() || !goal.trim()}
          className="w-full px-6 py-3 bg-violet-600 hover:bg-violet-700 disabled:bg-zinc-800 disabled:text-zinc-600 disabled:cursor-not-allowed text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
        >
          <Ticket className="size-5" />
          {t({ en: 'Generate Ticket', es: 'Generar Ticket' })}
        </button>
      </div>

      {/* Generated Output */}
      {output && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-xl font-semibold text-white">
              {t({ en: 'Your Ticket', es: 'Tu Ticket' })}
            </h4>
            <div className="flex gap-2">
              <button
                onClick={scrollToExample}
                className="px-4 py-2 bg-zinc-700 hover:bg-zinc-600 text-white rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
              >
                <ExternalLink className="size-4" />
                {t({ en: 'See Example', es: 'Ver Ejemplo' })}
              </button>
              <button
                onClick={copyTicket}
                className="px-4 py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
              >
                {copied ? (
                  <>
                    <Check className="size-4" />
                    {t({ en: 'Copied!', es: '¡Copiado!' })}
                  </>
                ) : (
                  <>
                    <Copy className="size-4" />
                    {t({ en: 'Copy Ticket', es: 'Copiar Ticket' })}
                  </>
                )}
              </button>
            </div>
          </div>

          <div className="bg-zinc-900/30 border border-zinc-800 rounded-xl p-6 space-y-6">
            {/* User Story */}
            <div>
              <h5 className="text-sm font-semibold text-violet-400 uppercase tracking-wide mb-2">
                {t({ en: 'User Story', es: 'User Story' })}
              </h5>
              <p className="text-white text-base bg-zinc-900/50 p-4 rounded-lg border border-zinc-700">
                {output.userStory}
              </p>
            </div>

            {/* Acceptance Criteria */}
            <div>
              <h5 className="text-sm font-semibold text-violet-400 uppercase tracking-wide mb-2">
                {t({ en: 'Acceptance Criteria (Given/When/Then)', es: 'Criterios de Aceptación (Given/When/Then)' })}
              </h5>
              <ul className="space-y-2">
                {output.acceptanceCriteria.map((ac, idx) => (
                  <li key={idx} className="flex gap-3 text-zinc-300 text-sm bg-zinc-900/50 p-3 rounded-lg border border-zinc-700">
                    <span className="text-violet-400 font-semibold flex-shrink-0">{idx + 1}.</span>
                    <span>{ac}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* UX Checklist */}
            <div>
              <h5 className="text-sm font-semibold text-violet-400 uppercase tracking-wide mb-2">
                {t({ en: 'UX Design Checklist', es: 'Checklist de Diseño UX' })}
              </h5>
              <ul className="space-y-2">
                {output.uxChecklist.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-zinc-300 text-sm bg-zinc-900/50 p-3 rounded-lg border border-zinc-700">
                    <CheckSquare className="size-4 text-violet-400 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Analytics */}
            <div>
              <h5 className="text-sm font-semibold text-violet-400 uppercase tracking-wide mb-2">
                {t({ en: 'Analytics & Tracking', es: 'Analytics y Tracking' })}
              </h5>
              <ul className="space-y-2">
                {output.analyticsNotes.map((note, idx) => (
                  <li key={idx} className="flex gap-3 text-zinc-300 text-sm bg-zinc-900/50 p-3 rounded-lg border border-zinc-700">
                    <span className="text-violet-400">•</span>
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Figma Placeholder */}
            <div>
              <h5 className="text-sm font-semibold text-violet-400 uppercase tracking-wide mb-2">
                {t({ en: 'Figma Link', es: 'Link de Figma' })}
              </h5>
              <div className="bg-zinc-900/50 p-4 rounded-lg border border-zinc-700 border-dashed">
                <p className="text-zinc-500 text-sm italic">
                  {t({ 
                    en: '[Add link to Figma mockups here]',
                    es: '[Agrega link a mockups de Figma aquí]'
                  })}
                </p>
              </div>
            </div>

            {/* Constraints */}
            {constraints && (
              <div>
                <h5 className="text-sm font-semibold text-violet-400 uppercase tracking-wide mb-2">
                  {t({ en: 'Constraints & Notes', es: 'Restricciones y Notas' })}
                </h5>
                <p className="text-zinc-300 text-sm bg-zinc-900/50 p-4 rounded-lg border border-zinc-700">
                  {constraints}
                </p>
              </div>
            )}

            {/* Definition of Done */}
            <div>
              <h5 className="text-sm font-semibold text-emerald-400 uppercase tracking-wide mb-2 flex items-center gap-2">
                <Shield className="size-4" />
                {t({ en: 'Definition of Done', es: 'Definición de Terminado' })}
              </h5>
              <ul className="space-y-2">
                {output.definitionOfDone.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-zinc-300 text-sm bg-emerald-500/5 p-3 rounded-lg border border-emerald-500/20">
                    <CheckSquare className="size-4 text-emerald-400 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sprint Risk + Design Debt */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className={`rounded-xl border p-4 ${
                output.sprintRisk === 'low' ? 'bg-green-500/10 border-green-500/30' :
                output.sprintRisk === 'medium' ? 'bg-amber-500/10 border-amber-500/30' :
                'bg-red-500/10 border-red-500/30'
              }`}>
                <div className="flex items-center gap-2 mb-1">
                  <AlertTriangle className={`size-4 ${
                    output.sprintRisk === 'low' ? 'text-green-400' :
                    output.sprintRisk === 'medium' ? 'text-amber-400' : 'text-red-400'
                  }`} />
                  <h5 className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                    {t({ en: 'Sprint Risk Level', es: 'Nivel de Riesgo del Sprint' })}
                  </h5>
                </div>
                <p className={`text-lg font-bold ${
                  output.sprintRisk === 'low' ? 'text-green-400' :
                  output.sprintRisk === 'medium' ? 'text-amber-400' : 'text-red-400'
                }`}>
                  {output.sprintRisk === 'low' ? t({ en: 'Low', es: 'Bajo' }) :
                   output.sprintRisk === 'medium' ? t({ en: 'Medium', es: 'Medio' }) :
                   t({ en: 'High', es: 'Alto' })}
                </p>
                <p className="text-[11px] text-zinc-500 mt-1">
                  {output.sprintRisk === 'low' ? t({ en: 'Simple scope — low rework probability', es: 'Alcance simple — baja probabilidad de retrabajo' }) :
                   output.sprintRisk === 'medium' ? t({ en: 'Moderate complexity — monitor constraints', es: 'Complejidad moderada — monitorear restricciones' }) :
                   t({ en: 'Complex scope + constraints — split into increments', es: 'Alcance complejo + restricciones — dividir en incrementos' })}
                </p>
              </div>

              {output.hasDesignDebt && (
                <div className="rounded-xl border border-orange-500/30 bg-orange-500/10 p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <FileWarning className="size-4 text-orange-400" />
                    <h5 className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                      {t({ en: 'Design Debt Risk', es: 'Riesgo de Deuda de Diseño' })}
                    </h5>
                  </div>
                  <p className="text-sm font-bold text-orange-400">
                    {t({ en: 'Detected', es: 'Detectado' })}
                  </p>
                  <p className="text-[11px] text-zinc-500 mt-1">
                    {t({ en: 'Constraints suggest compromises. Log design debt ticket for future sprint.', es: 'Las restricciones sugieren compromisos. Registra ticket de deuda de diseño para sprint futuro.' })}
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="bg-violet-950/20 border border-violet-500/30 rounded-xl p-4">
            <p className="text-sm text-violet-300">
              <strong>{t({ en: 'Pro tip:', es: 'Consejo:' })}</strong> {t({ 
                en: 'Paste this ticket into Jira, Linear, or Notion. Share the Figma link with your team before Sprint Planning to ensure Definition of Ready.',
                es: 'Pega este ticket en Jira, Linear o Notion. Comparte el link de Figma con tu equipo antes de Sprint Planning para asegurar Definition of Ready.'
              })}
            </p>
          </div>
        </div>
      )}

      {/* Example Ticket Section */}
      <div id="ticket-example" className="scroll-mt-8 bg-gradient-to-br from-zinc-900/30 to-zinc-950/30 border border-zinc-800 rounded-2xl p-6 space-y-4">
        <h4 className="text-xl font-semibold text-white flex items-center gap-2">
          <Ticket className="size-6 text-violet-400" />
          {t({ en: 'Example Ticket', es: 'Ticket de Ejemplo' })}
        </h4>
        
        <div className="space-y-4 text-sm">
          <div>
            <p className="text-violet-400 font-semibold mb-1">{t({ en: 'User Story:', es: 'User Story:' })}</p>
            <p className="text-zinc-300">
              {t({ 
                en: 'As a shopper, I want to filter products by price range so that I can find affordable items quickly.',
                es: 'Como comprador, quiero filtrar productos por rango de precio para que pueda encontrar artículos asequibles rápidamente.'
              })}
            </p>
          </div>

          <div>
            <p className="text-violet-400 font-semibold mb-1">{t({ en: 'Acceptance Criteria:', es: 'Criterios de Aceptación:' })}</p>
            <ul className="text-zinc-300 space-y-1 list-disc list-inside">
              <li>{t({ en: 'Given I am on the product list page, When I select a price range filter, Then only products within that range are displayed.', es: 'Dado que estoy en la página de lista de productos, Cuando selecciono un filtro de rango de precio, Entonces solo se muestran productos dentro de ese rango.' })}</li>
              <li>{t({ en: 'Given no products match my filter, When I apply the filter, Then I see an empty state message: "No products found. Try adjusting your filters."', es: 'Dado que ningún producto coincide con mi filtro, Cuando aplico el filtro, Entonces veo mensaje de estado vacío: "No se encontraron productos. Intenta ajustar tus filtros."' })}</li>
            </ul>
          </div>

          <div>
            <p className="text-violet-400 font-semibold mb-1">{t({ en: 'UX Checklist:', es: 'Checklist UX:' })}</p>
            <ul className="text-zinc-300 space-y-1">
              <li>☑ {t({ en: 'Mobile responsive', es: 'Responsive móvil' })}</li>
              <li>☑ {t({ en: 'Loading state while filtering', es: 'Estado de carga mientras filtra' })}</li>
              <li>☑ {t({ en: 'Clear filter button', es: 'Botón de limpiar filtro' })}</li>
            </ul>
          </div>

          <div>
            <p className="text-violet-400 font-semibold mb-1">{t({ en: 'Figma:', es: 'Figma:' })}</p>
            <p className="text-zinc-400 italic">
              {t({ en: 'figma.com/file/abc123/product-filters', es: 'figma.com/file/abc123/filtros-de-producto' })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}