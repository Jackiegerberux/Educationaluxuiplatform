import React from 'react';
import { useLanguage } from '../../layout/LanguageContext';
import { Layout, Sidebar, FileText, MessageSquare, CheckSquare } from 'lucide-react';

export function DesignSystemPatterns() {
  const { t } = useLanguage();

  const patterns = [
    {
      name: { en: 'Landing Page Hero', es: 'Hero de Página Principal' },
      icon: Layout,
      when: { 
        en: 'Use for main landing pages to capture attention and communicate value',
        es: 'Usar para páginas principales para captar atención y comunicar valor'
      },
      structure: {
        en: 'Centered layout with gradient background, large heading, subtitle, and primary CTA',
        es: 'Layout centrado con fondo degradado, título grande, subtítulo y CTA principal'
      },
      example: `<section className="bg-gradient-to-b from-indigo-950/20 to-transparent">
  <div className="mx-auto max-w-7xl px-4 py-16">
    <h1 className="text-5xl font-bold mb-6">Title</h1>
    <p className="text-xl text-zinc-400 mb-8">Subtitle</p>
    <Button>Primary CTA</Button>
  </div>
</section>`
    },
    {
      name: { en: 'Lesson Preview Drawer', es: 'Drawer de Vista Previa de Lección' },
      icon: Sidebar,
      when: { 
        en: 'Use for quick previews without leaving current context',
        es: 'Usar para vistas previas rápidas sin salir del contexto actual'
      },
      structure: {
        en: 'Right-side drawer, 540px width, 5 preview sections, sticky CTA at bottom',
        es: 'Drawer lateral derecho, 540px ancho, 5 secciones de preview, CTA sticky abajo'
      },
      example: `<motion.div className="fixed right-0 top-0 bottom-0 w-[540px] 
  bg-zinc-950 border-l border-zinc-800">
  <div className="p-6">
    {/* 5 preview sections */}
  </div>
  <div className="sticky bottom-0 border-t p-6">
    <Button className="w-full">Open Full Lesson</Button>
  </div>
</motion.div>`
    },
    {
      name: { en: 'Full Lesson Page', es: 'Página de Lección Completa' },
      icon: FileText,
      when: { 
        en: 'Use for in-depth learning content with multiple sections',
        es: 'Usar para contenido de aprendizaje profundo con múltiples secciones'
      },
      structure: {
        en: 'Sticky header, sidebar TOC (desktop), centered content (max-w-800px), 12 sections',
        es: 'Header sticky, TOC sidebar (desktop), contenido centrado (max-w-800px), 12 secciones'
      },
      example: `<div className="grid lg:grid-cols-[280px_1fr] gap-8">
  <aside className="sticky top-24">
    {/* Table of Contents */}
  </aside>
  <main className="max-w-3xl">
    {/* 12 lesson sections */}
  </main>
</div>`
    },
    {
      name: { en: 'AI in Practice Section', es: 'Sección AI en Práctica' },
      icon: MessageSquare,
      when: { 
        en: 'Use to showcase AI prompts with tool context',
        es: 'Usar para mostrar prompts de IA con contexto de herramienta'
      },
      structure: {
        en: 'Pink gradient card with tool badge, context label, and monospaced prompt',
        es: 'Card con degradado rosa con badge de herramienta, etiqueta de contexto y prompt monospace'
      },
      example: `<div className="bg-gradient-to-br from-pink-950/20 to-purple-950/20 
  border border-pink-500/20 rounded-xl p-6">
  <span className="px-2 py-1 bg-pink-500/10 text-pink-400 rounded">
    ChatGPT
  </span>
  <p className="text-sm text-zinc-400 mt-2">Context</p>
  <pre className="bg-zinc-950 p-4 rounded-lg mt-3">
    <code className="text-sm">Prompt text...</code>
  </pre>
</div>`
    },
    {
      name: { en: 'Quiz Block Pattern', es: 'Patrón de Bloque Quiz' },
      icon: CheckSquare,
      when: { 
        en: 'Use for knowledge checks with multiple choice questions',
        es: 'Usar para verificación de conocimiento con preguntas de opción múltiple'
      },
      structure: {
        en: 'Orange gradient section, question card, selectable options, check answer button, feedback',
        es: 'Sección con degradado naranja, card de pregunta, opciones seleccionables, botón verificar, feedback'
      },
      example: `<section className="bg-gradient-to-br from-orange-950/30 to-red-950/30 
  border border-orange-500/20 rounded-2xl p-8">
  <h3 className="text-xl font-semibold mb-6">Knowledge Check</h3>
  <div className="bg-black/40 rounded-xl p-4">
    <p className="text-white mb-4">Question?</p>
    <div className="space-y-2">
      <button className="w-full text-left p-3 rounded-lg 
        bg-zinc-900/50 border border-zinc-700 
        hover:border-orange-500/30">
        Option A
      </button>
    </div>
  </div>
</section>`
    }
  ];

  return (
    <div className="space-y-12">
      <div className="bg-gradient-to-br from-purple-950/30 to-pink-950/30 border border-purple-500/20 rounded-xl p-6">
        <p className="text-zinc-300 leading-relaxed">
          {t({
            en: 'Patterns are reusable combinations of components that solve specific design problems. Use these templates to maintain consistency across the platform.',
            es: 'Los patrones son combinaciones reutilizables de componentes que resuelven problemas de diseño específicos. Usa estas plantillas para mantener consistencia en la plataforma.'
          })}
        </p>
      </div>

      <div className="space-y-12">
        {patterns.map((pattern, idx) => {
          const Icon = pattern.icon;
          return (
            <div key={idx} className="bg-zinc-900/50 border border-zinc-800 rounded-2xl overflow-hidden">
              <div className="p-6 border-b border-zinc-800">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
                    <Icon className="size-5 text-indigo-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {t(pattern.name)}
                  </h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-semibold text-zinc-400 mb-1">
                      {t({ en: 'When to Use', es: 'Cuándo Usar' })}
                    </p>
                    <p className="text-zinc-300">{t(pattern.when)}</p>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-zinc-400 mb-1">
                      {t({ en: 'Structure', es: 'Estructura' })}
                    </p>
                    <p className="text-zinc-300">{t(pattern.structure)}</p>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-950">
                <div className="p-4 border-b border-zinc-800 bg-zinc-900/50">
                  <span className="text-xs text-zinc-500 font-mono">Example Code</span>
                </div>
                <pre className="p-6 overflow-x-auto">
                  <code className="text-sm text-zinc-300 font-mono">
                    {pattern.example}
                  </code>
                </pre>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
