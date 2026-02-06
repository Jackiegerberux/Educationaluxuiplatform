import { useLanguage } from '@/app/components/layout/LanguageContext';
import { AccessibleSearchBar } from './AccessibleSearchBar';
import { AccessibleButton } from './AccessibleButton';
import { AccessibleFormInput } from './AccessibleFormInput';

export function AccessibilityInteractiveExamples() {
  const { t } = useLanguage();

  return (
    <div className="space-y-8">
      <div className="text-center space-y-2 pb-4 border-b border-zinc-800">
        <h3 className="text-2xl font-bold text-white">
          {t({
            en: 'Accessibility in Practice: Interactive Examples',
            es: 'Accesibilidad en la Práctica: Ejemplos Interactivos'
          })}
        </h3>
        <p className="text-zinc-400 max-w-2xl mx-auto text-sm">
          {t({
            en: 'Toggle between accessible and inaccessible implementations to see the real impact on users. Each example shows what screen readers announce and how keyboard navigation works.',
            es: 'Alterna entre implementaciones accesibles e inaccesibles para ver el impacto real en los usuarios. Cada ejemplo muestra qué anuncian los lectores de pantalla y cómo funciona la navegación por teclado.'
          })}
        </p>
      </div>

      <div className="grid gap-8">
        {/* Example 1: Search Bar */}
        <div className="bg-gradient-to-br from-zinc-900/50 to-zinc-950 border border-zinc-800 rounded-xl p-6 shadow-lg">
          <div className="flex items-start gap-3 mb-4">
            <div className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-lg flex items-center justify-center font-bold text-sm">
              1
            </div>
            <div className="flex-1">
              <AccessibleSearchBar />
            </div>
          </div>
        </div>

        {/* Example 2: Button */}
        <div className="bg-gradient-to-br from-zinc-900/50 to-zinc-950 border border-zinc-800 rounded-xl p-6 shadow-lg">
          <div className="flex items-start gap-3 mb-4">
            <div className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-lg flex items-center justify-center font-bold text-sm">
              2
            </div>
            <div className="flex-1">
              <AccessibleButton />
            </div>
          </div>
        </div>

        {/* Example 3: Form Input */}
        <div className="bg-gradient-to-br from-zinc-900/50 to-zinc-950 border border-zinc-800 rounded-xl p-6 shadow-lg">
          <div className="flex items-start gap-3 mb-4">
            <div className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-lg flex items-center justify-center font-bold text-sm">
              3
            </div>
            <div className="flex-1">
              <AccessibleFormInput />
            </div>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="bg-gradient-to-br from-blue-950/30 to-indigo-950/30 border-2 border-blue-500/30 rounded-xl p-8 mt-8">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <div className="flex-1">
            <h4 className="text-lg font-bold text-blue-400 mb-2">
              {t({
                en: 'Key Takeaway',
                es: 'Conclusión Clave'
              })}
            </h4>
            <p className="text-zinc-300 mb-3 text-sm">
              {t({
                en: 'Accessibility is not just about following rules—it\'s about creating an inclusive experience. Small implementation details like semantic HTML, ARIA attributes, and proper labels make a huge difference for users who rely on assistive technologies.',
                es: 'La accesibilidad no se trata solo de seguir reglas, se trata de crear una experiencia inclusiva. Pequeños detalles de implementación como HTML semántico, atributos ARIA y labels apropiados marcan una gran diferencia para usuarios que dependen de tecnologías de asistencia.'
              })}
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-zinc-900 rounded-full text-xs font-medium text-blue-400 border border-blue-500/30">
                {t({ en: 'Semantic HTML', es: 'HTML Semántico' })}
              </span>
              <span className="px-3 py-1 bg-zinc-900 rounded-full text-xs font-medium text-blue-400 border border-blue-500/30">
                {t({ en: 'ARIA', es: 'ARIA' })}
              </span>
              <span className="px-3 py-1 bg-zinc-900 rounded-full text-xs font-medium text-blue-400 border border-blue-500/30">
                {t({ en: 'Keyboard Nav', es: 'Nav. Teclado' })}
              </span>
              <span className="px-3 py-1 bg-zinc-900 rounded-full text-xs font-medium text-blue-400 border border-blue-500/30">
                {t({ en: 'Contrast', es: 'Contraste' })}
              </span>
              <span className="px-3 py-1 bg-zinc-900 rounded-full text-xs font-medium text-blue-400 border border-blue-500/30">
                {t({ en: 'Focus States', es: 'Estados de Foco' })}
              </span>
              <span className="px-3 py-1 bg-zinc-900 rounded-full text-xs font-medium text-blue-400 border border-blue-500/30">
                {t({ en: 'Screen Readers', es: 'Lectores de Pantalla' })}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
