import { useLanguage } from '@/app/components/layout/LanguageContext';
import { SizeHierarchyExample } from './SizeHierarchyExample';
import { ColorContrastExample } from './ColorContrastExample';
import { WhiteSpaceExample } from './WhiteSpaceExample';
import { PositionExample } from './PositionExample';
import { TypographyExample } from './TypographyExample';
import { AlignmentProximityExample } from './AlignmentProximityExample';

export function VisualHierarchyExamples() {
  const { t } = useLanguage();

  return (
    <div className="space-y-8">
      <div className="text-center space-y-2 pb-4 border-b border-neutral-200">
        <h3 className="text-2xl font-bold text-[rgb(175,175,175)]">
          {t({
            en: 'Visual Hierarchy Principles in Practice',
            es: 'Principios de Jerarquía Visual en la Práctica'
          })}
        </h3>
        <p className="text-neutral-600 max-w-2xl mx-auto">
          {t({
            en: 'Explore interactive examples of each principle. Toggle the controls to see how each technique affects user attention and comprehension.',
            es: 'Explora ejemplos interactivos de cada principio. Cambia los controles para ver cómo cada técnica afecta la atención y comprensión del usuario.'
          })}
        </p>
      </div>

      <div className="grid gap-8">
        {/* Principle 1: Size */}
        <div className="bg-gradient-to-br from-neutral-50 to-white border border-neutral-200 rounded-xl p-6 shadow-sm">
          <div className="flex items-start gap-3 mb-4">
            <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold text-sm">
              1
            </div>
            <div className="flex-1">
              <SizeHierarchyExample />
            </div>
          </div>
        </div>

        {/* Principle 2: Color & Contrast */}
        <div className="bg-gradient-to-br from-neutral-50 to-white border border-neutral-200 rounded-xl p-6 shadow-sm">
          <div className="flex items-start gap-3 mb-4">
            <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold text-sm">
              2
            </div>
            <div className="flex-1">
              <ColorContrastExample />
            </div>
          </div>
        </div>

        {/* Principle 3: White Space */}
        <div className="bg-gradient-to-br from-neutral-50 to-white border border-neutral-200 rounded-xl p-6 shadow-sm">
          <div className="flex items-start gap-3 mb-4">
            <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold text-sm">
              3
            </div>
            <div className="flex-1">
              <WhiteSpaceExample />
            </div>
          </div>
        </div>

        {/* Principle 4: Position */}
        <div className="bg-gradient-to-br from-neutral-50 to-white border border-neutral-200 rounded-xl p-6 shadow-sm">
          <div className="flex items-start gap-3 mb-4">
            <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold text-sm">
              4
            </div>
            <div className="flex-1">
              <PositionExample />
            </div>
          </div>
        </div>

        {/* Principle 5: Typography */}
        <div className="bg-gradient-to-br from-neutral-50 to-white border border-neutral-200 rounded-xl p-6 shadow-sm">
          <div className="flex items-start gap-3 mb-4">
            <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold text-sm">
              5
            </div>
            <div className="flex-1">
              <TypographyExample />
            </div>
          </div>
        </div>

        {/* Principle 6: Alignment & Proximity */}
        <div className="bg-gradient-to-br from-neutral-50 to-white border border-neutral-200 rounded-xl p-6 shadow-sm">
          <div className="flex items-start gap-3 mb-4">
            <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold text-sm">
              6
            </div>
            <div className="flex-1">
              <AlignmentProximityExample />
            </div>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-xl p-8 mt-8">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <div className="flex-1">
            <h4 className="text-lg font-bold text-blue-900 mb-2">
              {t({
                en: 'Key Takeaway',
                es: 'Conclusión Clave'
              })}
            </h4>
            <p className="text-blue-800 mb-3">
              {t({
                en: 'Visual hierarchy is not about using just one technique—it\'s about combining multiple principles strategically to guide user attention and create a clear information structure.',
                es: 'La jerarquía visual no se trata de usar solo una técnica, se trata de combinar múltiples principios estratégicamente para guiar la atención del usuario y crear una estructura de información clara.'
              })}
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-white rounded-full text-xs font-medium text-blue-700 border border-blue-200">
                {t({ en: 'Size', es: 'Tamaño' })}
              </span>
              <span className="px-3 py-1 bg-white rounded-full text-xs font-medium text-blue-700 border border-blue-200">
                {t({ en: 'Color', es: 'Color' })}
              </span>
              <span className="px-3 py-1 bg-white rounded-full text-xs font-medium text-blue-700 border border-blue-200">
                {t({ en: 'Space', es: 'Espacio' })}
              </span>
              <span className="px-3 py-1 bg-white rounded-full text-xs font-medium text-blue-700 border border-blue-200">
                {t({ en: 'Position', es: 'Posición' })}
              </span>
              <span className="px-3 py-1 bg-white rounded-full text-xs font-medium text-blue-700 border border-blue-200">
                {t({ en: 'Typography', es: 'Tipografía' })}
              </span>
              <span className="px-3 py-1 bg-white rounded-full text-xs font-medium text-blue-700 border border-blue-200">
                {t({ en: 'Proximity', es: 'Proximidad' })}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}