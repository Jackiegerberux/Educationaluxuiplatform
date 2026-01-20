import React, { useState } from 'react';
import { useLanguage } from '../../layout/LanguageContext';
import { Search, ExternalLink, Check, X } from 'lucide-react';

interface ComponentSpec {
  name: string;
  category: 'atom' | 'molecule' | 'organism';
  variants: string[];
  sizes: string[];
  states: string[];
  accessible: boolean;
  responsive: boolean;
  file: string;
}

const components: ComponentSpec[] = [
  // Atoms
  {
    name: 'Button',
    category: 'atom',
    variants: ['primary', 'secondary', 'ghost', 'danger', 'outline'],
    sizes: ['sm', 'md', 'lg', 'xl'],
    states: ['default', 'hover', 'active', 'focus', 'disabled', 'loading'],
    accessible: true,
    responsive: true,
    file: '/src/app/components/atoms/Button.tsx'
  },
  {
    name: 'Card',
    category: 'atom',
    variants: ['default', 'surface', 'bordered', 'elevated'],
    sizes: ['none', 'sm', 'md', 'lg'],
    states: ['default', 'hover'],
    accessible: true,
    responsive: true,
    file: '/src/app/components/atoms/Card.tsx'
  },
  {
    name: 'Badge',
    category: 'atom',
    variants: ['default', 'success', 'warning', 'error', 'info', 'outline'],
    sizes: ['sm', 'md', 'lg'],
    states: ['default'],
    accessible: true,
    responsive: true,
    file: '/src/app/components/atoms/Badge.tsx'
  },
  {
    name: 'Chip',
    category: 'atom',
    variants: ['default', 'primary', 'success', 'warning'],
    sizes: ['sm', 'md'],
    states: ['default', 'disabled'],
    accessible: true,
    responsive: true,
    file: '/src/app/components/atoms/Chip.tsx'
  },
  {
    name: 'Input',
    category: 'atom',
    variants: ['default', 'with-icon'],
    sizes: ['md'],
    states: ['default', 'focus', 'error', 'disabled'],
    accessible: true,
    responsive: true,
    file: '/src/app/components/atoms/Input.tsx'
  },
  // Molecules
  {
    name: 'Tabs',
    category: 'molecule',
    variants: ['underline', 'pills'],
    sizes: ['md'],
    states: ['default', 'active', 'disabled', 'hover', 'focus'],
    accessible: true,
    responsive: true,
    file: '/src/app/components/molecules/Tabs.tsx'
  },
  {
    name: 'Accordion',
    category: 'molecule',
    variants: ['single', 'multiple'],
    sizes: ['md'],
    states: ['collapsed', 'expanded', 'disabled'],
    accessible: true,
    responsive: true,
    file: '/src/app/components/molecules/Accordion.tsx'
  },
  {
    name: 'Breadcrumb',
    category: 'molecule',
    variants: ['default'],
    sizes: ['sm', 'md'],
    states: ['default', 'hover', 'focus', 'current'],
    accessible: true,
    responsive: true,
    file: '/src/app/components/molecules/Breadcrumb.tsx'
  },
  // Organisms
  {
    name: 'LessonCard',
    category: 'organism',
    variants: ['default', 'compact'],
    sizes: ['md', 'lg'],
    states: ['default', 'hover', 'focus'],
    accessible: true,
    responsive: true,
    file: '/src/app/components/organisms/LessonCard.tsx'
  },
  {
    name: 'LessonDrawerPreview',
    category: 'organism',
    variants: ['default'],
    sizes: ['540px'],
    states: ['open', 'closed'],
    accessible: true,
    responsive: true,
    file: '/src/app/components/organisms/LessonDrawerPreview.tsx'
  },
  {
    name: 'LessonSidebarNav',
    category: 'organism',
    variants: ['default'],
    sizes: ['md'],
    states: ['default', 'active'],
    accessible: true,
    responsive: true,
    file: '/src/app/components/organisms/LessonSidebarNav.tsx'
  },
  {
    name: 'QuizBlock',
    category: 'organism',
    variants: ['default'],
    sizes: ['md'],
    states: ['unanswered', 'selected', 'correct', 'incorrect', 'disabled'],
    accessible: true,
    responsive: true,
    file: '/src/app/components/organisms/QuizBlock.tsx'
  },
  {
    name: 'ValidationBlock',
    category: 'organism',
    variants: ['checklist', 'criteria'],
    sizes: ['md'],
    states: ['incomplete', 'complete'],
    accessible: true,
    responsive: true,
    file: '/src/app/components/organisms/ValidationBlock.tsx'
  }
];

export function DesignSystemIndex() {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState<'all' | 'atom' | 'molecule' | 'organism'>('all');

  const filteredComponents = components.filter((comp) => {
    const matchesSearch = comp.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = filterCategory === 'all' || comp.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const categoryColors = {
    atom: 'text-blue-400 bg-blue-950/30 border-blue-500/20',
    molecule: 'text-purple-400 bg-purple-950/30 border-purple-500/20',
    organism: 'text-orange-400 bg-orange-950/30 border-orange-500/20'
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <section>
        <h2 className="text-3xl font-bold text-white mb-4">
          {t({ en: 'Component Index', es: 'Índice de Componentes' })}
        </h2>
        <p className="text-zinc-400 max-w-3xl">
          {t({
            en: 'Complete reference of all design system components with their variants, sizes, states, and accessibility status.',
            es: 'Referencia completa de todos los componentes del sistema de diseño con sus variantes, tamaños, estados y estado de accesibilidad.'
          })}
        </p>
      </section>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Search */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-zinc-500" />
          <input
            type="text"
            placeholder={t({ en: 'Search components...', es: 'Buscar componentes...' })}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-zinc-900 border border-zinc-700 rounded-lg text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Category Filter */}
        <div className="flex gap-2">
          {(['all', 'atom', 'molecule', 'organism'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filterCategory === cat
                  ? 'bg-indigo-600 text-white'
                  : 'bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-700'
              }`}
            >
              {cat === 'all' ? t({ en: 'All', es: 'Todos' }) : cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: { en: 'Total Components', es: 'Componentes Totales' }, value: components.length },
          { label: { en: 'Atoms', es: 'Átomos' }, value: components.filter((c) => c.category === 'atom').length },
          { label: { en: 'Molecules', es: 'Moléculas' }, value: components.filter((c) => c.category === 'molecule').length },
          { label: { en: 'Organisms', es: 'Organismos' }, value: components.filter((c) => c.category === 'organism').length }
        ].map((stat, idx) => (
          <div key={idx} className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-4">
            <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
            <div className="text-sm text-zinc-400">{t(stat.label)}</div>
          </div>
        ))}
      </div>

      {/* Table */}
      <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-zinc-900 border-b border-zinc-800">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                  {t({ en: 'Component', es: 'Componente' })}
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                  {t({ en: 'Category', es: 'Categoría' })}
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                  {t({ en: 'Variants', es: 'Variantes' })}
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                  {t({ en: 'Sizes', es: 'Tamaños' })}
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                  {t({ en: 'States', es: 'Estados' })}
                </th>
                <th className="px-6 py-3 text-center text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                  {t({ en: 'A11y', es: 'A11y' })}
                </th>
                <th className="px-6 py-3 text-center text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                  {t({ en: 'Responsive', es: 'Responsive' })}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800">
              {filteredComponents.map((component, idx) => (
                <tr key={idx} className="hover:bg-zinc-800/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <code className="text-sm font-semibold text-white">{component.name}</code>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${categoryColors[component.category]}`}>
                      {component.category}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-wrap gap-1">
                      {component.variants.slice(0, 3).map((variant, vIdx) => (
                        <span key={vIdx} className="inline-flex px-2 py-0.5 bg-zinc-800 border border-zinc-700 rounded text-xs text-zinc-300">
                          {variant}
                        </span>
                      ))}
                      {component.variants.length > 3 && (
                        <span className="inline-flex px-2 py-0.5 text-xs text-zinc-500">
                          +{component.variants.length - 3}
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-wrap gap-1">
                      {component.sizes.map((size, sIdx) => (
                        <span key={sIdx} className="inline-flex px-2 py-0.5 bg-zinc-800 border border-zinc-700 rounded text-xs text-zinc-300">
                          {size}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-xs text-zinc-400">
                      {component.states.length} states
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    {component.accessible ? (
                      <Check className="size-5 text-green-400 mx-auto" />
                    ) : (
                      <X className="size-5 text-red-400 mx-auto" />
                    )}
                  </td>
                  <td className="px-6 py-4 text-center">
                    {component.responsive ? (
                      <Check className="size-5 text-green-400 mx-auto" />
                    ) : (
                      <X className="size-5 text-red-400 mx-auto" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Token Naming Convention */}
      <section className="bg-gradient-to-br from-indigo-950/30 to-purple-950/30 border border-indigo-500/20 rounded-xl p-8">
        <h3 className="text-xl font-semibold text-white mb-4">
          {t({ en: 'Token Naming Convention', es: 'Convención de Nombres de Tokens' })}
        </h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-white mb-2">{t({ en: 'Semantic Tokens', es: 'Tokens Semánticos' })}</h4>
            <div className="bg-zinc-950 rounded-lg p-4 font-mono text-sm space-y-1">
              <div className="text-zinc-400">// Pattern: --color-[category]-[role]-[variant]</div>
              <div className="text-indigo-400">--color-bg-primary</div>
              <div className="text-indigo-400">--color-text-secondary</div>
              <div className="text-indigo-400">--color-border-focus</div>
              <div className="text-indigo-400">--color-state-success</div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-2">{t({ en: 'Spacing Tokens', es: 'Tokens de Espaciado' })}</h4>
            <div className="bg-zinc-950 rounded-lg p-4 font-mono text-sm space-y-1">
              <div className="text-zinc-400">// Pattern: --space-[multiplier] (8pt grid)</div>
              <div className="text-indigo-400">--space-1  <span className="text-zinc-500">// 4px</span></div>
              <div className="text-indigo-400">--space-4  <span className="text-zinc-500">// 16px</span></div>
              <div className="text-indigo-400">--space-8  <span className="text-zinc-500">// 32px</span></div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-2">{t({ en: 'Typography Tokens', es: 'Tokens de Tipografía' })}</h4>
            <div className="bg-zinc-950 rounded-lg p-4 font-mono text-sm space-y-1">
              <div className="text-zinc-400">// Pattern: --text-[size] | --font-[weight]</div>
              <div className="text-indigo-400">--text-sm   <span className="text-zinc-500">// 14px</span></div>
              <div className="text-indigo-400">--text-base <span className="text-zinc-500">// 16px</span></div>
              <div className="text-indigo-400">--font-semibold <span className="text-zinc-500">// 600</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Legend */}
      <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-white mb-4">
          {t({ en: 'Legend', es: 'Leyenda' })}
        </h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-zinc-400">{t({ en: 'A11y:', es: 'A11y:' })}</span>
            <span className="text-zinc-300 ml-2">{t({ en: 'Accessibility (WCAG 2.1 AA)', es: 'Accesibilidad (WCAG 2.1 AA)' })}</span>
          </div>
          <div>
            <span className="text-zinc-400">{t({ en: 'Responsive:', es: 'Responsive:' })}</span>
            <span className="text-zinc-300 ml-2">{t({ en: 'Mobile-friendly design', es: 'Diseño compatible con móviles' })}</span>
          </div>
          <div>
            <span className="text-zinc-400">{t({ en: 'Variants:', es: 'Variantes:' })}</span>
            <span className="text-zinc-300 ml-2">{t({ en: 'Visual styles (primary, secondary, etc.)', es: 'Estilos visuales (primary, secondary, etc.)' })}</span>
          </div>
          <div>
            <span className="text-zinc-400">{t({ en: 'States:', es: 'Estados:' })}</span>
            <span className="text-zinc-300 ml-2">{t({ en: 'Interactive states (hover, focus, disabled)', es: 'Estados interactivos (hover, focus, disabled)' })}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
