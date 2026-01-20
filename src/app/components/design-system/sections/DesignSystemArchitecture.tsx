import React from 'react';
import { useLanguage } from '../../layout/LanguageContext';
import { Atom, Layers, Building, CheckCircle2, Code2 } from 'lucide-react';

export function DesignSystemArchitecture() {
  const { t } = useLanguage();

  return (
    <div className="space-y-12">
      {/* Overview */}
      <section>
        <h2 className="text-3xl font-bold text-white mb-6">
          {t({ en: 'Component Architecture', es: 'Arquitectura de Componentes' })}
        </h2>
        <p className="text-zinc-400 mb-8 max-w-3xl">
          {t({
            en: 'Our component library follows atomic design principles with a hybrid structure optimized for learning platforms. Components are categorized into Atoms, Molecules, and Organisms.',
            es: 'Nuestra biblioteca de componentes sigue principios de diseño atómico con una estructura híbrida optimizada para plataformas de aprendizaje. Los componentes se categorizan en Átomos, Moléculas y Organismos.'
          })}
        </p>
      </section>

      {/* Architecture Layers */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Atoms */}
        <div className="bg-gradient-to-br from-blue-950/30 to-indigo-950/30 border border-blue-500/20 rounded-xl p-6">
          <div className="w-12 h-12 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-4">
            <Atom className="size-6 text-blue-400" />
          </div>
          <h3 className="text-lg font-semibold text-white mb-3">
            {t({ en: 'Atoms', es: 'Átomos' })}
          </h3>
          <p className="text-sm text-zinc-400 mb-4">
            {t({
              en: 'Basic building blocks that cannot be broken down further. Buttons, inputs, badges, icons.',
              es: 'Bloques de construcción básicos que no pueden descomponerse más. Botones, inputs, badges, íconos.'
            })}
          </p>
          <ul className="space-y-2 text-sm text-zinc-300">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-blue-400 shrink-0" />
              <code className="text-indigo-400">Button</code>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-blue-400 shrink-0" />
              <code className="text-indigo-400">IconButton</code>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-blue-400 shrink-0" />
              <code className="text-indigo-400">Badge</code>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-blue-400 shrink-0" />
              <code className="text-indigo-400">Chip</code>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-blue-400 shrink-0" />
              <code className="text-indigo-400">Input</code>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-blue-400 shrink-0" />
              <code className="text-indigo-400">Select</code>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-blue-400 shrink-0" />
              <code className="text-indigo-400">Checkbox</code>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-blue-400 shrink-0" />
              <code className="text-indigo-400">Switch</code>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-blue-400 shrink-0" />
              <code className="text-indigo-400">Divider</code>
            </li>
          </ul>
        </div>

        {/* Molecules */}
        <div className="bg-gradient-to-br from-purple-950/30 to-pink-950/30 border border-purple-500/20 rounded-xl p-6">
          <div className="w-12 h-12 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-4">
            <Layers className="size-6 text-purple-400" />
          </div>
          <h3 className="text-lg font-semibold text-white mb-3">
            {t({ en: 'Molecules', es: 'Moléculas' })}
          </h3>
          <p className="text-sm text-zinc-400 mb-4">
            {t({
              en: 'Simple combinations of atoms functioning together. Tabs, accordions, search bars.',
              es: 'Combinaciones simples de átomos funcionando juntos. Tabs, acordeones, barras de búsqueda.'
            })}
          </p>
          <ul className="space-y-2 text-sm text-zinc-300">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-purple-400 shrink-0" />
              <code className="text-indigo-400">Tabs</code>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-purple-400 shrink-0" />
              <code className="text-indigo-400">Accordion</code>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-purple-400 shrink-0" />
              <code className="text-indigo-400">Breadcrumb</code>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-purple-400 shrink-0" />
              <code className="text-indigo-400">SearchBar</code>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-purple-400 shrink-0" />
              <code className="text-indigo-400">Toast</code>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-purple-400 shrink-0" />
              <code className="text-indigo-400">Card</code>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-purple-400 shrink-0" />
              <code className="text-indigo-400">Modal</code>
            </li>
          </ul>
        </div>

        {/* Organisms */}
        <div className="bg-gradient-to-br from-orange-950/30 to-red-950/30 border border-orange-500/20 rounded-xl p-6">
          <div className="w-12 h-12 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-4">
            <Building className="size-6 text-orange-400" />
          </div>
          <h3 className="text-lg font-semibold text-white mb-3">
            {t({ en: 'Organisms', es: 'Organismos' })}
          </h3>
          <p className="text-sm text-zinc-400 mb-4">
            {t({
              en: 'Complex components built from molecules and atoms. Headers, lesson cards, quiz blocks.',
              es: 'Componentes complejos construidos de moléculas y átomos. Headers, tarjetas de lección, bloques de quiz.'
            })}
          </p>
          <ul className="space-y-2 text-sm text-zinc-300">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-orange-400 shrink-0" />
              <code className="text-indigo-400">Navbar</code>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-orange-400 shrink-0" />
              <code className="text-indigo-400">Footer</code>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-orange-400 shrink-0" />
              <code className="text-indigo-400">LessonCard</code>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-orange-400 shrink-0" />
              <code className="text-indigo-400">LessonDrawer</code>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-orange-400 shrink-0" />
              <code className="text-indigo-400">LessonSidebar</code>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-orange-400 shrink-0" />
              <code className="text-indigo-400">QuizBlock</code>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-orange-400 shrink-0" />
              <code className="text-indigo-400">ValidationBlock</code>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-orange-400 shrink-0" />
              <code className="text-indigo-400">AIPracticeBlock</code>
            </li>
          </ul>
        </div>
      </div>

      {/* Component Specifications */}
      <section className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8">
        <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
          <Code2 className="size-5 text-indigo-400" />
          {t({ en: 'Component Specifications', es: 'Especificaciones de Componentes' })}
        </h3>

        <div className="space-y-6">
          {/* Variants */}
          <div>
            <h4 className="font-semibold text-white mb-3">{t({ en: 'Variants', es: 'Variantes' })}</h4>
            <p className="text-sm text-zinc-400 mb-3">
              {t({
                en: 'Each component supports multiple visual variants to match different contexts and use cases.',
                es: 'Cada componente soporta múltiples variantes visuales para coincidir con diferentes contextos y casos de uso.'
              })}
            </p>
            <div className="bg-zinc-950 rounded-lg p-4 font-mono text-sm">
              <div className="text-zinc-500">// Example: Button variants</div>
              <div className="text-indigo-400">variant=<span className="text-orange-400">"primary"</span> | <span className="text-orange-400">"secondary"</span> | <span className="text-orange-400">"ghost"</span> | <span className="text-orange-400">"danger"</span></div>
            </div>
          </div>

          {/* Sizes */}
          <div>
            <h4 className="font-semibold text-white mb-3">{t({ en: 'Sizes', es: 'Tamaños' })}</h4>
            <p className="text-sm text-zinc-400 mb-3">
              {t({
                en: 'Components are available in multiple sizes following the 8pt grid system.',
                es: 'Los componentes están disponibles en múltiples tamaños siguiendo el sistema de grid 8pt.'
              })}
            </p>
            <div className="bg-zinc-950 rounded-lg p-4 font-mono text-sm">
              <div className="text-zinc-500">// Example: Size options</div>
              <div className="text-indigo-400">size=<span className="text-orange-400">"sm"</span> | <span className="text-orange-400">"md"</span> | <span className="text-orange-400">"lg"</span> | <span className="text-orange-400">"xl"</span></div>
            </div>
          </div>

          {/* States */}
          <div>
            <h4 className="font-semibold text-white mb-3">{t({ en: 'States', es: 'Estados' })}</h4>
            <p className="text-sm text-zinc-400 mb-3">
              {t({
                en: 'All interactive components support standard interaction states with proper visual feedback.',
                es: 'Todos los componentes interactivos soportan estados de interacción estándar con retroalimentación visual apropiada.'
              })}
            </p>
            <ul className="space-y-2 text-sm text-zinc-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-indigo-400" />
                <span><code className="text-indigo-400">default</code> - Normal resting state</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-indigo-400" />
                <span><code className="text-indigo-400">hover</code> - Pointer hover (desktop)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-indigo-400" />
                <span><code className="text-indigo-400">active</code> - Pressed/click state</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-indigo-400" />
                <span><code className="text-indigo-400">focus</code> - Keyboard focus (accessibility)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-indigo-400" />
                <span><code className="text-indigo-400">disabled</code> - Non-interactive state</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-indigo-400" />
                <span><code className="text-indigo-400">loading</code> - Async operation in progress</span>
              </li>
            </ul>
          </div>

          {/* Accessibility */}
          <div>
            <h4 className="font-semibold text-white mb-3">{t({ en: 'Accessibility', es: 'Accesibilidad' })}</h4>
            <p className="text-sm text-zinc-400 mb-3">
              {t({
                en: 'Every component is built with WCAG 2.1 AA compliance in mind, including:',
                es: 'Cada componente está construido con cumplimiento WCAG 2.1 AA en mente, incluyendo:'
              })}
            </p>
            <ul className="space-y-2 text-sm text-zinc-300">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="size-4 text-green-400 mt-0.5 shrink-0" />
                <span><strong className="text-white">Semantic HTML:</strong> Proper use of native elements (button, input, etc.)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="size-4 text-green-400 mt-0.5 shrink-0" />
                <span><strong className="text-white">ARIA attributes:</strong> role, aria-label, aria-expanded when needed</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="size-4 text-green-400 mt-0.5 shrink-0" />
                <span><strong className="text-white">Keyboard navigation:</strong> Tab, Enter, Space, Arrow keys support</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="size-4 text-green-400 mt-0.5 shrink-0" />
                <span><strong className="text-white">Focus visible:</strong> Clear focus indicators (ring-2 ring-indigo-500)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="size-4 text-green-400 mt-0.5 shrink-0" />
                <span><strong className="text-white">Color contrast:</strong> Minimum 4.5:1 for text, 3:1 for UI elements</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="size-4 text-green-400 mt-0.5 shrink-0" />
                <span><strong className="text-white">Screen reader support:</strong> Descriptive labels and live regions</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* File Structure */}
      <section className="bg-gradient-to-br from-indigo-950/30 to-purple-950/30 border border-indigo-500/20 rounded-xl p-8">
        <h3 className="text-lg font-semibold text-white mb-4">
          {t({ en: 'Component File Structure', es: 'Estructura de Archivos de Componentes' })}
        </h3>
        <div className="bg-zinc-950 rounded-lg p-4 font-mono text-sm overflow-x-auto">
          <pre className="text-zinc-300">
{`src/
└── app/
    └── components/
        ├── atoms/          # Basic building blocks
        │   ├── Button.tsx
        │   ├── Badge.tsx
        │   ├── Input.tsx
        │   └── ...
        ├── molecules/      # Simple combinations
        │   ├── Tabs.tsx
        │   ├── Accordion.tsx
        │   ├── SearchBar.tsx
        │   └── ...
        ├── organisms/      # Complex components
        │   ├── LessonCard.tsx
        │   ├── QuizBlock.tsx
        │   └── ...
        ├── layout/         # Layout components
        │   ├── Header.tsx
        │   ├── Footer.tsx
        │   └── ...
        └── ui/             # shadcn/ui components
            ├── button.tsx
            └── ...`}
          </pre>
        </div>
      </section>
    </div>
  );
}
