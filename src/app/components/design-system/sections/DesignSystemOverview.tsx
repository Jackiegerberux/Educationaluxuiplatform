import React from 'react';
import { useLanguage } from '../../layout/LanguageContext';
import { 
  CheckCircle2, 
  Zap, 
  Target, 
  Users,
  Palette,
  Box,
  Code2,
  Eye,
  Layers,
  Variable,
  Frame
} from 'lucide-react';

export function DesignSystemOverview() {
  const { t } = useLanguage();

  return (
    <div className="space-y-16">
      {/* What is a Design System */}
      <section>
        <h2 className="text-3xl font-bold text-white mb-6">
          {t({ en: 'What is a Design System?', es: '¿Qué es un Sistema de Diseño?' })}
        </h2>
        <p className="text-zinc-400 text-lg mb-8 max-w-3xl">
          {t({
            en: 'A design system is a complete set of standards, documentation, and principles along with the toolkit (patterns and code components) to achieve those standards. It serves as a single source of truth for design and development teams.',
            es: 'Un sistema de diseño es un conjunto completo de estándares, documentación y principios junto con el toolkit (patrones y componentes de código) para lograr esos estándares. Sirve como fuente única de verdad para equipos de diseño y desarrollo.'
          })}
        </p>
      </section>

      {/* UI Kit vs Design System */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <Zap className="size-7 text-yellow-400" />
          {t({ en: 'UI Kit vs Design System', es: 'UI Kit vs Design System' })}
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <Palette className="size-5 text-blue-400" />
              {t({ en: 'UI Kit', es: 'UI Kit' })}
            </h3>
            <p className="text-sm text-zinc-400 mb-4">
              {t({
                en: 'A collection of visual design files (Figma, Sketch) showing components, styles, and layouts.',
                es: 'Una colección de archivos de diseño visual (Figma, Sketch) mostrando componentes, estilos y layouts.'
              })}
            </p>
            <ul className="space-y-2 text-sm text-zinc-300">
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-0.5">•</span>
                <span>{t({ en: 'Static design assets', es: 'Activos de diseño estáticos' })}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-0.5">•</span>
                <span>{t({ en: 'Visual reference only', es: 'Solo referencia visual' })}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-0.5">•</span>
                <span>{t({ en: 'Designer-focused', es: 'Enfocado en diseñadores' })}</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-green-950/30 to-emerald-950/30 border border-green-500/20 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <Code2 className="size-5 text-green-400" />
              {t({ en: 'Design System', es: 'Design System' })}
            </h3>
            <p className="text-sm text-zinc-400 mb-4">
              {t({
                en: 'A complete ecosystem including coded components, guidelines, principles, and documentation.',
                es: 'Un ecosistema completo incluyendo componentes codificados, guías, principios y documentación.'
              })}
            </p>
            <ul className="space-y-2 text-sm text-zinc-300">
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-0.5">•</span>
                <span>{t({ en: 'Living, versioned code', es: 'Código vivo y versionado' })}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-0.5">•</span>
                <span>{t({ en: 'Guidelines + principles', es: 'Guías + principios' })}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-0.5">•</span>
                <span>{t({ en: 'Designer + developer focused', es: 'Enfocado en diseñadores + desarrolladores' })}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* How to Use This System */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <CheckCircle2 className="size-7 text-green-400" />
          {t({ en: 'How to Use This System', es: 'Cómo Usar Este Sistema' })}
        </h2>
        <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">
              {t({ en: '🎓 For Trainees (Learning)', es: '🎓 Para Estudiantes (Aprendizaje)' })}
            </h3>
            <ul className="space-y-2 text-zinc-300">
              <li className="flex items-start gap-2">
                <span className="text-indigo-400 mt-1">1.</span>
                <span>{t({ 
                  en: 'Study the Foundations to understand colors, typography, spacing, and layout rules',
                  es: 'Estudia los Fundamentos para entender colores, tipografía, espaciado y reglas de layout'
                })}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-400 mt-1">2.</span>
                <span>{t({ 
                  en: 'Explore Components to see real examples with variants, states, and accessibility notes',
                  es: 'Explora Componentes para ver ejemplos reales con variantes, estados y notas de accesibilidad'
                })}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-400 mt-1">3.</span>
                <span>{t({ 
                  en: 'Review Patterns to learn when and how to use specific templates',
                  es: 'Revisa Patrones para aprender cuándo y cómo usar plantillas específicas'
                })}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-400 mt-1">4.</span>
                <span>{t({ 
                  en: 'Check Accessibility guidelines before designing any new feature',
                  es: 'Revisa las guías de Accesibilidad antes de diseñar cualquier nueva característica'
                })}</span>
              </li>
            </ul>
          </div>

          <div className="border-t border-zinc-800 pt-6">
            <h3 className="text-lg font-semibold text-white mb-3">
              {t({ en: '🔧 For Internal Development', es: '🔧 Para Desarrollo Interno' })}
            </h3>
            <ul className="space-y-2 text-zinc-300">
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-1">1.</span>
                <span>{t({ 
                  en: 'Reuse existing components instead of building new ones from scratch',
                  es: 'Reutiliza componentes existentes en lugar de construir nuevos desde cero'
                })}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-1">2.</span>
                <span>{t({ 
                  en: 'Copy component code snippets directly from the Components section',
                  es: 'Copia snippets de código de componentes directamente de la sección Componentes'
                })}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-1">3.</span>
                <span>{t({ 
                  en: 'Follow spacing and typography tokens to maintain visual consistency',
                  es: 'Sigue los tokens de espaciado y tipografía para mantener consistencia visual'
                })}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-1">4.</span>
                <span>{t({ 
                  en: 'Reduce dependence on AI by using pre-built, tested components',
                  es: 'Reduce la dependencia de IA usando componentes pre-construidos y testeados'
                })}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Golden Rule */}
      <section>
        <div className="bg-gradient-to-br from-amber-950/30 to-orange-950/30 border-2 border-amber-500/30 rounded-2xl p-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-500/10 border border-amber-500/20 mb-4">
            <Zap className="size-8 text-amber-400" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-3">
            {t({ en: 'Golden Rule', es: 'Regla de Oro' })}
          </h3>
          <p className="text-xl text-amber-200 font-medium">
            {t({ 
              en: 'Do not reinvent UI — reuse components & patterns',
              es: 'No reinventes la UI — reutiliza componentes y patrones'
            })}
          </p>
        </div>
      </section>

      {/* Quick Glossary */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-6">
          {t({ en: 'Quick Glossary', es: 'Glosario Rápido' })}
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            {
              term: { en: 'Tokens', es: 'Tokens' },
              definition: { 
                en: 'Reusable values (colors, spacing, typography) that ensure consistency',
                es: 'Valores reutilizables (colores, espaciado, tipografía) que aseguran consistencia'
              }
            },
            {
              term: { en: 'Components', es: 'Componentes' },
              definition: { 
                en: 'Reusable UI building blocks (buttons, cards, inputs)',
                es: 'Bloques de construcción UI reutilizables (botones, cards, inputs)'
              }
            },
            {
              term: { en: 'Patterns', es: 'Patrones' },
              definition: { 
                en: 'Combinations of components solving specific use cases',
                es: 'Combinaciones de componentes resolviendo casos de uso específicos'
              }
            },
            {
              term: { en: 'Variants', es: 'Variantes' },
              definition: { 
                en: 'Different versions of a component (primary, secondary, ghost)',
                es: 'Versiones diferentes de un componente (primary, secondary, ghost)'
              }
            },
            {
              term: { en: 'States', es: 'Estados' },
              definition: { 
                en: 'Visual feedback for interaction (default, hover, focus, disabled)',
                es: 'Feedback visual para interacción (default, hover, focus, disabled)'
              }
            },
            {
              term: { en: 'Accessibility', es: 'Accesibilidad' },
              definition: { 
                en: 'Design that works for everyone, including people with disabilities',
                es: 'Diseño que funciona para todos, incluyendo personas con discapacidades'
              }
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-4">
              <h4 className="font-semibold text-white mb-1">{t(item.term)}</h4>
              <p className="text-sm text-zinc-400">{t(item.definition)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What's Inside */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-6">
          {t({ en: "What's Inside This System", es: 'Qué Contiene Este Sistema' })}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Palette,
              title: { en: 'Foundations', es: 'Fundamentos' },
              desc: { en: 'Colors, typography, spacing, radius, shadows, icons', es: 'Colores, tipografía, espaciado, radio, sombras, iconos' },
              color: 'indigo'
            },
            {
              icon: Box,
              title: { en: 'Components', es: 'Componentes' },
              desc: { en: 'Buttons, cards, badges, navigation, modals, inputs, quiz', es: 'Botones, cards, badges, navegación, modals, inputs, quiz' },
              color: 'blue'
            },
            {
              icon: Layers,
              title: { en: 'Patterns', es: 'Patrones' },
              desc: { en: 'Hero, lesson drawer, full page, quiz block, validation', es: 'Hero, drawer de lección, página completa, bloque quiz, validación' },
              color: 'purple'
            },
            {
              icon: Eye,
              title: { en: 'Accessibility', es: 'Accesibilidad' },
              desc: { en: 'WCAG checklist, focus states, contrast, keyboard nav', es: 'Checklist WCAG, estados focus, contraste, nav teclado' },
              color: 'green'
            }
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 text-center hover:border-zinc-700 transition-colors">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-${item.color}-500/10 border border-${item.color}-500/20 mb-4`}>
                  <Icon className={`size-6 text-${item.color}-400`} />
                </div>
                <h3 className="font-semibold text-white mb-2">{t(item.title)}</h3>
                <p className="text-sm text-zinc-400">{t(item.desc)}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}