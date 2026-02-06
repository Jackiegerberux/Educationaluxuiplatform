import React from 'react';
import { Image, Code, Wrench, ExternalLink, CheckCircle2 } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface LanguageFunction {
  (obj: any): any;
}

interface VisualExamplesProps {
  visualExamples: any;
  t: LanguageFunction;
}

export function VisualExamplesSection({ visualExamples, t }: VisualExamplesProps) {
  if (!visualExamples) return null;

  return (
    <section id="visual-examples" className="mb-12 scroll-mt-24">
      <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
        <Image className="size-6 text-cyan-400" />
        {t({ en: 'Visual Examples', es: 'Ejemplos Visuales' })}
      </h2>
      <p className="text-zinc-400 mb-6 text-sm">{t(visualExamples.description)}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {visualExamples.examples.map((example: any, idx: number) => (
          <div key={idx} className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6">
            <h3 className="font-semibold text-white mb-3">{t(example.title)}</h3>
            {example.image && (
              <div className="mb-4 rounded-lg overflow-hidden border border-zinc-700">
                <ImageWithFallback
                  src={example.image}
                  alt={t(example.title)}
                  className="w-full h-48 object-cover"
                />
              </div>
            )}
            <p className="text-zinc-400 text-sm leading-relaxed">{t(example.description)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

interface CodeExamplesProps {
  codeExamples: any;
  t: LanguageFunction;
}

export function CodeExamplesSection({ codeExamples, t }: CodeExamplesProps) {
  if (!codeExamples) return null;

  return (
    <section id="code-examples" className="mb-12 scroll-mt-24">
      <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
        <Code className="size-6 text-emerald-400" />
        {t({ en: 'Code Examples', es: 'Ejemplos de Código' })}
      </h2>
      <p className="text-zinc-400 mb-6 text-sm">{t(codeExamples.description)}</p>
      <div className="space-y-6">
        {codeExamples.examples.map((example: any, idx: number) => (
          <div key={idx} className="bg-zinc-900/50 border border-zinc-800 rounded-2xl overflow-hidden">
            <div className="p-4 border-b border-zinc-800 bg-zinc-950/50">
              <h3 className="font-semibold text-white text-sm">{t(example.title)}</h3>
            </div>
            <div className="p-4">
              <pre className="bg-black/60 border border-zinc-700 rounded-lg p-4 overflow-x-auto mb-4">
                <code className="text-xs text-zinc-300 font-mono">{example.code}</code>
              </pre>
              <p className="text-zinc-400 text-sm leading-relaxed">{t(example.explanation)}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

interface ToolsProps {
  tools: any;
  t: LanguageFunction;
}

export function ToolsSection({ tools, t }: ToolsProps) {
  if (!tools) return null;

  return (
    <section id="accessibility-tools" className="mb-12 scroll-mt-24">
      <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
        <Wrench className="size-6 text-orange-400" />
        {t({ en: 'Accessibility Tools', es: 'Herramientas de Accesibilidad' })}
      </h2>
      <p className="text-zinc-400 mb-6 text-sm">{t(tools.description)}</p>
      <div className="space-y-8">
        {tools.categories.map((category: any, catIdx: number) => (
          <div key={catIdx}>
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <CheckCircle2 className="size-5 text-orange-400" />
              {t(category.name)}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.tools.map((tool: any, toolIdx: number) => (
                <div key={toolIdx} className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-4 hover:border-orange-500/30 transition-all group">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold text-white text-sm group-hover:text-orange-400 transition-colors">
                      {tool.name}
                    </h4>
                    <a
                      href={tool.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-500 hover:text-orange-400 transition-colors"
                    >
                      <ExternalLink className="size-4" />
                    </a>
                  </div>
                  <p className="text-zinc-400 text-xs leading-relaxed">{t(tool.description)}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
