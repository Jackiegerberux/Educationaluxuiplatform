import { useState } from 'react';
import { useLanguage } from '@/app/components/layout/LanguageContext';

export function TypographyExample() {
  const { t } = useLanguage();
  const [emphasis, setEmphasis] = useState<'weight' | 'style' | 'case' | 'all'>('all');

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-medium text-neutral-700">
          {t({
            en: 'Typography: Weight, style, and case create emphasis',
            es: 'Tipografía: Peso, estilo y caso crean énfasis'
          })}
        </h4>
        <div className="flex gap-2 flex-wrap">
          <button
            onClick={() => setEmphasis('weight')}
            className={`px-3 py-1.5 text-xs rounded-md transition-colors ${
              emphasis === 'weight' 
                ? 'bg-blue-600 text-white' 
                : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-700'
            }`}
          >
            {t({ en: 'Weight', es: 'Peso' })}
          </button>
          <button
            onClick={() => setEmphasis('style')}
            className={`px-3 py-1.5 text-xs rounded-md transition-colors ${
              emphasis === 'style' 
                ? 'bg-blue-600 text-white' 
                : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-700'
            }`}
          >
            {t({ en: 'Style', es: 'Estilo' })}
          </button>
          <button
            onClick={() => setEmphasis('case')}
            className={`px-3 py-1.5 text-xs rounded-md transition-colors ${
              emphasis === 'case' 
                ? 'bg-blue-600 text-white' 
                : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-700'
            }`}
          >
            {t({ en: 'Case', es: 'Caso' })}
          </button>
          <button
            onClick={() => setEmphasis('all')}
            className={`px-3 py-1.5 text-xs rounded-md transition-colors ${
              emphasis === 'all' 
                ? 'bg-blue-600 text-white' 
                : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-700'
            }`}
          >
            {t({ en: 'All', es: 'Todo' })}
          </button>
        </div>
      </div>

      <div className="border border-neutral-200 rounded-lg p-8 bg-white">
        <div className="space-y-6">
          {/* Weight Example */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full transition-colors ${
                emphasis === 'weight' || emphasis === 'all' ? 'bg-blue-600' : 'bg-neutral-300'
              }`}></div>
              <span className="text-xs font-medium text-neutral-600 uppercase tracking-wide">
                {t({ en: 'Weight Variations', es: 'Variaciones de Peso' })}
              </span>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg space-y-2">
              <p className={`text-neutral-900 transition-all duration-300 ${
                emphasis === 'weight' || emphasis === 'all' ? 'font-bold text-lg' : 'font-normal text-base'
              }`}>
                {t({ en: 'Bold weight = High importance', es: 'Peso negrita = Alta importancia' })}
              </p>
              <p className={`text-neutral-900 transition-all duration-300 ${
                emphasis === 'weight' || emphasis === 'all' ? 'font-semibold' : 'font-normal'
              }`}>
                {t({ en: 'Semibold weight = Medium importance', es: 'Peso seminegrita = Importancia media' })}
              </p>
              <p className={`transition-all duration-300 ${
                emphasis === 'weight' || emphasis === 'all' ? 'font-normal text-neutral-600' : 'font-normal text-neutral-900'
              }`}>
                {t({ en: 'Normal weight = Standard text', es: 'Peso normal = Texto estándar' })}
              </p>
              <p className={`transition-all duration-300 ${
                emphasis === 'weight' || emphasis === 'all' ? 'font-light text-neutral-500 text-sm' : 'font-normal text-neutral-900'
              }`}>
                {t({ en: 'Light weight = De-emphasized', es: 'Peso ligero = Des-enfatizado' })}
              </p>
            </div>
          </div>

          {/* Style Example */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full transition-colors ${
                emphasis === 'style' || emphasis === 'all' ? 'bg-blue-600' : 'bg-neutral-300'
              }`}></div>
              <span className="text-xs font-medium text-neutral-600 uppercase tracking-wide">
                {t({ en: 'Style Variations', es: 'Variaciones de Estilo' })}
              </span>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg space-y-2">
              <p className="text-base text-neutral-900">
                {t({ en: 'Regular text flows naturally ', es: 'El texto regular fluye naturalmente ' })}
                <span className={`transition-all duration-300 ${
                  emphasis === 'style' || emphasis === 'all' ? 'italic text-blue-700' : ''
                }`}>
                  {t({ en: 'while italics add subtle emphasis', es: 'mientras que las cursivas añaden énfasis sutil' })}
                </span>
                {t({ en: ' for quotes or key terms.', es: ' para citas o términos clave.' })}
              </p>
            </div>
          </div>

          {/* Case Example */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full transition-colors ${
                emphasis === 'case' || emphasis === 'all' ? 'bg-blue-600' : 'bg-neutral-300'
              }`}></div>
              <span className="text-xs font-medium text-neutral-600 uppercase tracking-wide">
                {t({ en: 'Case Variations', es: 'Variaciones de Caso' })}
              </span>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg space-y-3">
              <div>
                <p className={`transition-all duration-300 ${
                  emphasis === 'case' || emphasis === 'all' 
                    ? 'uppercase text-xs font-bold tracking-wide text-neutral-700' 
                    : 'text-base text-neutral-900'
                }`}>
                  {t({ en: 'Uppercase for labels', es: 'Mayúsculas para etiquetas' })}
                </p>
              </div>
              <div>
                <p className={`transition-all duration-300 ${
                  emphasis === 'case' || emphasis === 'all' 
                    ? 'capitalize text-lg font-semibold text-neutral-900' 
                    : 'text-base text-neutral-900'
                }`}>
                  {t({ en: 'Title case for headings', es: 'Capitalización para encabezados' })}
                </p>
              </div>
              <div>
                <p className="text-base text-neutral-900">
                  {t({ en: 'Sentence case for body text', es: 'Caso de oración para texto del cuerpo' })}
                </p>
              </div>
            </div>
          </div>

          {/* Combined Example */}
          {emphasis === 'all' && (
            <div className="border-t-2 border-blue-100 pt-6 mt-6">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg">
                <div className="uppercase text-xs font-bold tracking-wide text-blue-700 mb-3">
                  {t({ en: 'Best Practice', es: 'Mejor Práctica' })}
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                  {t({ en: 'Combine Techniques', es: 'Combinar Técnicas' })}
                </h3>
                <p className="text-base text-neutral-700 mb-4">
                  {t({ 
                    en: 'Use weight, style, and case together to create a clear typographic hierarchy. ',
                    es: 'Usa peso, estilo y caso juntos para crear una jerarquía tipográfica clara. '
                  })}
                  <span className="italic font-medium text-neutral-900">
                    {t({ en: 'But don\'t overdo it', es: 'Pero no lo exageres' })}
                  </span>
                  {t({ en: ' – too much emphasis equals no emphasis.', es: ' – demasiado énfasis equivale a ningún énfasis.' })}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      <p className="text-sm text-neutral-600">
        {emphasis === 'weight' && t({
          en: '📊 Font weight creates visual hierarchy through varying boldness levels',
          es: '📊 El peso de fuente crea jerarquía visual a través de niveles variables de negrita'
        })}
        {emphasis === 'style' && t({
          en: '✍️ Italic style provides subtle emphasis without being overwhelming',
          es: '✍️ El estilo cursiva proporciona énfasis sutil sin ser abrumador'
        })}
        {emphasis === 'case' && t({
          en: '🔤 Text case helps differentiate labels, headings, and body content',
          es: '🔤 El caso de texto ayuda a diferenciar etiquetas, encabezados y contenido del cuerpo'
        })}
        {emphasis === 'all' && t({
          en: '✨ Combining weight, style, and case creates a rich typographic system',
          es: '✨ Combinar peso, estilo y caso crea un sistema tipográfico rico'
        })}
      </p>
    </div>
  );
}