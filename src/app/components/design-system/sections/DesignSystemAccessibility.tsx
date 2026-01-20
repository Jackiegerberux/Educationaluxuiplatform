import React from 'react';
import { useLanguage } from '../../layout/LanguageContext';
import { Eye, Keyboard, Contrast, AlertTriangle, CheckCircle2, ExternalLink } from 'lucide-react';

export function DesignSystemAccessibility() {
  const { t } = useLanguage();

  return (
    <div className="space-y-12">
      <div className="bg-gradient-to-br from-green-950/30 to-emerald-950/30 border border-green-500/20 rounded-xl p-6">
        <p className="text-zinc-300 leading-relaxed">
          {t({
            en: 'Accessibility ensures our platform works for everyone, including people with disabilities. Following WCAG 2.1 AA guidelines helps create an inclusive learning experience.',
            es: 'La accesibilidad asegura que nuestra plataforma funcione para todos, incluyendo personas con discapacidades. Seguir las guías WCAG 2.1 AA ayuda a crear una experiencia de aprendizaje inclusiva.'
          })}
        </p>
      </div>

      {/* WCAG Checklist */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <CheckCircle2 className="size-7 text-green-400" />
          {t({ en: 'WCAG Quick Checklist', es: 'Checklist Rápido WCAG' })}
        </h2>

        <div className="space-y-4">
          {[
            {
              category: { en: 'Perceivable', es: 'Perceptible' },
              items: {
                en: [
                  'Text has sufficient color contrast (4.5:1 minimum)',
                  'Images have alt text describing content',
                  'Videos have captions/transcripts',
                  'Content is distinguishable (not relying on color alone)'
                ],
                es: [
                  'El texto tiene contraste de color suficiente (4.5:1 mínimo)',
                  'Las imágenes tienen texto alt describiendo el contenido',
                  'Los videos tienen subtítulos/transcripciones',
                  'El contenido es distinguible (no depende solo del color)'
                ]
              }
            },
            {
              category: { en: 'Operable', es: 'Operable' },
              items: {
                en: [
                  'All functionality available via keyboard',
                  'Focus is visible (focus ring present)',
                  'Navigation is consistent across pages',
                  'Users have enough time to read/interact'
                ],
                es: [
                  'Toda funcionalidad disponible vía teclado',
                  'El foco es visible (anillo de foco presente)',
                  'La navegación es consistente entre páginas',
                  'Los usuarios tienen suficiente tiempo para leer/interactuar'
                ]
              }
            },
            {
              category: { en: 'Understandable', es: 'Comprensible' },
              items: {
                en: [
                  'Text is readable and understandable',
                  'Navigation is predictable',
                  'Error messages are clear and helpful',
                  'Instructions are provided for complex interactions'
                ],
                es: [
                  'El texto es legible y comprensible',
                  'La navegación es predecible',
                  'Los mensajes de error son claros y útiles',
                  'Se proporcionan instrucciones para interacciones complejas'
                ]
              }
            },
            {
              category: { en: 'Robust', es: 'Robusto' },
              items: {
                en: [
                  'Valid HTML/semantic markup used',
                  'ARIA attributes used correctly',
                  'Compatible with assistive technologies',
                  'Works across browsers and devices'
                ],
                es: [
                  'HTML válido/markup semántico usado',
                  'Atributos ARIA usados correctamente',
                  'Compatible con tecnologías asistivas',
                  'Funciona en todos los navegadores y dispositivos'
                ]
              }
            }
          ].map((section, idx) => (
            <div key={idx} className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4">
                {idx + 1}. {t(section.category)}
              </h3>
              <ul className="space-y-2">
                {t(section.items).map((item: string, itemIdx: number) => (
                  <li key={itemIdx} className="flex items-start gap-2 text-zinc-300">
                    <CheckCircle2 className="size-4 text-green-400 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Focus States */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <Keyboard className="size-7 text-indigo-400" />
          {t({ en: 'Focus States & Keyboard Navigation', es: 'Estados de Foco y Navegación con Teclado' })}
        </h2>

        <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8 space-y-6">
          <div>
            <h4 className="font-semibold text-white mb-3">
              {t({ en: 'Focus Ring Requirements', es: 'Requisitos de Anillo de Foco' })}
            </h4>
            <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-6">
              <div className="space-y-4">
                <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-zinc-950">
                  Button with Focus Ring
                </button>
                <p className="text-sm text-zinc-400">
                  {t({ 
                    en: '↑ Try pressing Tab to see the focus ring',
                    es: '↑ Presiona Tab para ver el anillo de foco'
                  })}
                </p>
              </div>
            </div>
            <div className="mt-4 bg-zinc-950 border border-zinc-800 rounded-lg p-4">
              <code className="text-sm text-indigo-400 font-mono">
                focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-zinc-950
              </code>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-3">
              {t({ en: 'Keyboard Shortcuts', es: 'Atajos de Teclado' })}
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-between p-3 bg-zinc-900/50 rounded-lg">
                <span className="text-zinc-300">Navigate between elements</span>
                <kbd className="px-2 py-1 bg-zinc-800 rounded text-zinc-400 font-mono">Tab</kbd>
              </div>
              <div className="flex items-center justify-between p-3 bg-zinc-900/50 rounded-lg">
                <span className="text-zinc-300">Navigate backwards</span>
                <kbd className="px-2 py-1 bg-zinc-800 rounded text-zinc-400 font-mono">Shift + Tab</kbd>
              </div>
              <div className="flex items-center justify-between p-3 bg-zinc-900/50 rounded-lg">
                <span className="text-zinc-300">Activate button/link</span>
                <kbd className="px-2 py-1 bg-zinc-800 rounded text-zinc-400 font-mono">Enter / Space</kbd>
              </div>
              <div className="flex items-center justify-between p-3 bg-zinc-900/50 rounded-lg">
                <span className="text-zinc-300">Close modal/drawer</span>
                <kbd className="px-2 py-1 bg-zinc-800 rounded text-zinc-400 font-mono">Escape</kbd>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contrast */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <Contrast className="size-7 text-yellow-400" />
          {t({ en: 'Color Contrast (Dark Mode)', es: 'Contraste de Color (Modo Oscuro)' })}
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-green-950/30 to-emerald-950/30 border border-green-500/20 rounded-xl p-6">
            <h4 className="font-semibold text-white mb-4 flex items-center gap-2">
              <CheckCircle2 className="size-5 text-green-400" />
              {t({ en: 'Good Contrast', es: 'Buen Contraste' })}
            </h4>
            <div className="space-y-3">
              <div className="bg-zinc-950 p-4 rounded-lg">
                <p className="text-white">White on Zinc-950 (17:1) ✓ AAA</p>
              </div>
              <div className="bg-zinc-950 p-4 rounded-lg">
                <p className="text-zinc-300">Zinc-300 on Zinc-950 (8:1) ✓ AA</p>
              </div>
              <div className="bg-zinc-950 p-4 rounded-lg">
                <p className="text-indigo-400">Indigo-400 on Zinc-950 (4.8:1) ✓ AA</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-red-950/30 to-orange-950/30 border border-red-500/20 rounded-xl p-6">
            <h4 className="font-semibold text-white mb-4 flex items-center gap-2">
              <AlertTriangle className="size-5 text-red-400" />
              {t({ en: 'Poor Contrast', es: 'Mal Contraste' })}
            </h4>
            <div className="space-y-3">
              <div className="bg-zinc-950 p-4 rounded-lg">
                <p className="text-zinc-700">Zinc-700 on Zinc-950 (2:1) ✗ Fail</p>
              </div>
              <div className="bg-zinc-950 p-4 rounded-lg">
                <p className="text-zinc-600">Zinc-600 on Zinc-950 (1.8:1) ✗ Fail</p>
              </div>
              <div className="bg-zinc-950 p-4 rounded-lg">
                <p className="text-blue-900">Blue-900 on Zinc-950 (3:1) ✗ Fail</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
          <h4 className="font-semibold text-white mb-3">
            {t({ en: 'Minimum Contrast Ratios', es: 'Ratios Mínimos de Contraste' })}
          </h4>
          <div className="space-y-2 text-sm text-zinc-300">
            <p>• <strong className="text-white">AA (Normal text):</strong> 4.5:1 minimum</p>
            <p>• <strong className="text-white">AA (Large text 18pt+):</strong> 3:1 minimum</p>
            <p>• <strong className="text-white">AAA (Normal text):</strong> 7:1 minimum</p>
            <p>• <strong className="text-white">AAA (Large text):</strong> 4.5:1 minimum</p>
          </div>
        </div>
      </section>

      {/* Testing Tools */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <Eye className="size-7 text-blue-400" />
          {t({ en: 'Testing Tools & Resources', es: 'Herramientas de Testing y Recursos' })}
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              name: 'WAVE',
              url: 'https://wave.webaim.org/',
              description: { en: 'Web accessibility evaluation tool', es: 'Herramienta de evaluación de accesibilidad web' }
            },
            {
              name: 'axe DevTools',
              url: 'https://www.deque.com/axe/devtools/',
              description: { en: 'Browser extension for accessibility testing', es: 'Extensión de navegador para testing de accesibilidad' }
            },
            {
              name: 'Contrast Checker',
              url: 'https://webaim.org/resources/contrastchecker/',
              description: { en: 'Check color contrast ratios', es: 'Verificar ratios de contraste de color' }
            },
            {
              name: 'Stark',
              url: 'https://www.getstark.co/',
              description: { en: 'Design plugin for accessibility', es: 'Plugin de diseño para accesibilidad' }
            },
            {
              name: 'NVDA',
              url: 'https://www.nvaccess.org/',
              description: { en: 'Free screen reader for testing', es: 'Lector de pantalla gratuito para testing' }
            },
            {
              name: 'Lighthouse',
              url: 'https://developers.google.com/web/tools/lighthouse',
              description: { en: 'Chrome DevTools auditing', es: 'Auditoría de Chrome DevTools' }
            }
          ].map((tool, idx) => (
            <a
              key={idx}
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 hover:border-indigo-500/50 transition-colors group"
            >
              <div className="flex items-start justify-between mb-2">
                <h4 className="font-semibold text-white group-hover:text-indigo-400 transition-colors">
                  {tool.name}
                </h4>
                <ExternalLink className="size-4 text-zinc-500 group-hover:text-indigo-400 transition-colors" />
              </div>
              <p className="text-sm text-zinc-400">{t(tool.description)}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Quick Testing Steps */}
      <section>
        <div className="bg-gradient-to-br from-purple-950/30 to-pink-950/30 border border-purple-500/20 rounded-xl p-8">
          <h3 className="text-xl font-semibold text-white mb-4">
            {t({ en: 'Quick Accessibility Testing Steps', es: 'Pasos Rápidos de Testing de Accesibilidad' })}
          </h3>
          <ol className="space-y-3 text-zinc-300">
            <li className="flex items-start gap-3">
              <span className="font-bold text-purple-400">1.</span>
              <span>{t({ 
                en: 'Keyboard navigation: Can you reach all interactive elements with Tab?',
                es: 'Navegación con teclado: ¿Puedes alcanzar todos los elementos interactivos con Tab?'
              })}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-purple-400">2.</span>
              <span>{t({ 
                en: 'Focus visibility: Is the focus ring visible on all focusable elements?',
                es: 'Visibilidad del foco: ¿El anillo de foco es visible en todos los elementos enfocables?'
              })}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-purple-400">3.</span>
              <span>{t({ 
                en: 'Color contrast: Use a contrast checker to verify all text meets 4.5:1 minimum',
                es: 'Contraste de color: Usa un verificador de contraste para verificar que todo el texto cumple 4.5:1 mínimo'
              })}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-purple-400">4.</span>
              <span>{t({ 
                en: 'Screen reader: Test with NVDA (Windows) or VoiceOver (Mac) to verify content is announced correctly',
                es: 'Lector de pantalla: Prueba con NVDA (Windows) o VoiceOver (Mac) para verificar que el contenido se anuncia correctamente'
              })}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-purple-400">5.</span>
              <span>{t({ 
                en: 'Semantic HTML: Verify headings hierarchy (H1 → H2 → H3, no skips)',
                es: 'HTML semántico: Verifica jerarquía de encabezados (H1 → H2 → H3, sin saltos)'
              })}</span>
            </li>
          </ol>
        </div>
      </section>
    </div>
  );
}
