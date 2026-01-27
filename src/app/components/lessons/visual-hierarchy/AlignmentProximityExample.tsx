import { useState } from 'react';
import { useLanguage } from '@/app/components/layout/LanguageContext';

export function AlignmentProximityExample() {
  const { t } = useLanguage();
  const [grouped, setGrouped] = useState(true);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-medium text-neutral-700">
          {t({
            en: 'Alignment & Proximity: Grouped items are perceived as related',
            es: 'Alineación y Proximidad: Elementos agrupados se perciben como relacionados'
          })}
        </h4>
        <button
          onClick={() => setGrouped(!grouped)}
          className="px-3 py-1.5 text-xs rounded-md bg-neutral-100 hover:bg-neutral-200 text-neutral-700 transition-colors"
        >
          {grouped 
            ? t({ en: 'Ungroup', es: 'Desagrupar' })
            : t({ en: 'Group', es: 'Agrupar' })
          }
        </button>
      </div>

      <div className="border border-neutral-200 rounded-lg p-8 bg-white">
        <div className={`grid transition-all duration-500 ${
          grouped 
            ? 'grid-cols-3 gap-8' 
            : 'grid-cols-1 gap-3'
        }`}>
          {/* Group 1 */}
          <div className={`transition-all duration-500 ${
            grouped 
              ? 'bg-blue-50 border-2 border-blue-200 rounded-lg p-6 space-y-3' 
              : 'bg-white space-y-1'
          }`}>
            <div className={`transition-all duration-300 ${
              grouped ? 'flex items-center gap-2' : ''
            }`}>
              <div className={`rounded transition-all duration-300 ${
                grouped 
                  ? 'w-10 h-10 bg-blue-600 flex items-center justify-center' 
                  : 'w-6 h-6 bg-neutral-300 inline-block mr-2'
              }`}>
                {grouped && (
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                )}
              </div>
              <h4 className={`font-bold transition-all duration-300 ${
                grouped ? 'text-blue-900 text-lg' : 'text-neutral-700 text-sm inline'
              }`}>
                {t({ en: 'User Info', es: 'Info Usuario' })}
              </h4>
            </div>
            <p className={`transition-all duration-300 ${
              grouped ? 'text-sm text-blue-800' : 'text-xs text-neutral-600'
            }`}>
              {t({ en: 'Name', es: 'Nombre' })}: John Doe
            </p>
            <p className={`transition-all duration-300 ${
              grouped ? 'text-sm text-blue-800' : 'text-xs text-neutral-600'
            }`}>
              {t({ en: 'Email', es: 'Email' })}: john@example.com
            </p>
          </div>

          {/* Group 2 */}
          <div className={`transition-all duration-500 ${
            grouped 
              ? 'bg-green-50 border-2 border-green-200 rounded-lg p-6 space-y-3' 
              : 'bg-white space-y-1'
          }`}>
            <div className={`transition-all duration-300 ${
              grouped ? 'flex items-center gap-2' : ''
            }`}>
              <div className={`rounded transition-all duration-300 ${
                grouped 
                  ? 'w-10 h-10 bg-green-600 flex items-center justify-center' 
                  : 'w-6 h-6 bg-neutral-300 inline-block mr-2'
              }`}>
                {grouped && (
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )}
              </div>
              <h4 className={`font-bold transition-all duration-300 ${
                grouped ? 'text-green-900 text-lg' : 'text-neutral-700 text-sm inline'
              }`}>
                {t({ en: 'Subscription', es: 'Suscripción' })}
              </h4>
            </div>
            <p className={`transition-all duration-300 ${
              grouped ? 'text-sm text-green-800' : 'text-xs text-neutral-600'
            }`}>
              {t({ en: 'Plan', es: 'Plan' })}: Premium
            </p>
            <p className={`transition-all duration-300 ${
              grouped ? 'text-sm text-green-800' : 'text-xs text-neutral-600'
            }`}>
              {t({ en: 'Status', es: 'Estado' })}: Active
            </p>
          </div>

          {/* Group 3 */}
          <div className={`transition-all duration-500 ${
            grouped 
              ? 'bg-purple-50 border-2 border-purple-200 rounded-lg p-6 space-y-3' 
              : 'bg-white space-y-1'
          }`}>
            <div className={`transition-all duration-300 ${
              grouped ? 'flex items-center gap-2' : ''
            }`}>
              <div className={`rounded transition-all duration-300 ${
                grouped 
                  ? 'w-10 h-10 bg-purple-600 flex items-center justify-center' 
                  : 'w-6 h-6 bg-neutral-300 inline-block mr-2'
              }`}>
                {grouped && (
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                )}
              </div>
              <h4 className={`font-bold transition-all duration-300 ${
                grouped ? 'text-purple-900 text-lg' : 'text-neutral-700 text-sm inline'
              }`}>
                {t({ en: 'Activity', es: 'Actividad' })}
              </h4>
            </div>
            <p className={`transition-all duration-300 ${
              grouped ? 'text-sm text-purple-800' : 'text-xs text-neutral-600'
            }`}>
              {t({ en: 'Last login', es: 'Último ingreso' })}: Today
            </p>
            <p className={`transition-all duration-300 ${
              grouped ? 'text-sm text-purple-800' : 'text-xs text-neutral-600'
            }`}>
              {t({ en: 'Actions', es: 'Acciones' })}: 24
            </p>
          </div>
        </div>

        {/* Gestalt Principle Illustration */}
        {grouped && (
          <div className="mt-8 pt-8 border-t border-neutral-200">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="flex-1">
                <h5 className="font-semibold text-neutral-900 mb-1">
                  {t({ en: 'Gestalt Principle: Proximity', es: 'Principio Gestalt: Proximidad' })}
                </h5>
                <p className="text-sm text-neutral-600">
                  {t({ 
                    en: 'Objects that are close together are perceived as a group. Use white space to separate unrelated information and group related items together.',
                    es: 'Los objetos que están cerca se perciben como un grupo. Usa espacio en blanco para separar información no relacionada y agrupar elementos relacionados.'
                  })}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      <p className="text-sm text-neutral-600">
        {grouped 
          ? t({
              en: '✓ Clear grouping and alignment creates visual order and meaning',
              es: '✓ Agrupación y alineación claras crean orden visual y significado'
            })
          : t({
              en: '✗ Without grouping, users must work harder to understand relationships',
              es: '✗ Sin agrupación, los usuarios deben trabajar más para entender relaciones'
            })
        }
      </p>
    </div>
  );
}