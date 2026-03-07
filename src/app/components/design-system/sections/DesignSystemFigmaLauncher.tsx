import React, { useState } from 'react';
import { useLanguage } from '../../layout/LanguageContext';
import {
  Figma,
  ExternalLink,
  Copy,
  Check,
  Layers,
  Palette,
  Type,
  Grid3x3,
  Component,
  Frame,
  Smartphone,
  Monitor,
  Sparkles,
  Download,
  BookOpen,
  ArrowRight
} from 'lucide-react';

interface FigmaResource {
  id: string;
  title: { en: string; es: string };
  description: { en: string; es: string };
  icon: React.ElementType;
  color: string;
  bgColor: string;
  pages: { en: string; es: string }[];
  figmaUrl: string;
}

export function DesignSystemFigmaLauncher() {
  const { t } = useLanguage();
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [activeResource, setActiveResource] = useState<string>('foundations');

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const figmaResources: FigmaResource[] = [
    {
      id: 'foundations',
      title: { en: 'Foundations', es: 'Fundamentos' },
      description: {
        en: 'Color palettes, typography scales, spacing system, elevation, and grid specifications.',
        es: 'Paletas de color, escalas tipográficas, sistema de espaciado, elevación y especificaciones de grilla.'
      },
      icon: Palette,
      color: 'text-violet-400',
      bgColor: 'bg-violet-500/10 border-violet-500/20',
      pages: [
        { en: 'Color Tokens', es: 'Tokens de Color' },
        { en: 'Typography Scale', es: 'Escala Tipográfica' },
        { en: 'Spacing & Grid', es: 'Espaciado y Grilla' },
        { en: 'Elevation & Shadows', es: 'Elevación y Sombras' },
        { en: 'Border Radius', es: 'Bordes Redondeados' }
      ],
      figmaUrl: 'https://figma.com/community'
    },
    {
      id: 'components',
      title: { en: 'Components', es: 'Componentes' },
      description: {
        en: 'Buttons, inputs, cards, modals, navigation elements, and all reusable UI components.',
        es: 'Botones, inputs, tarjetas, modales, elementos de navegación y todos los componentes UI reutilizables.'
      },
      icon: Component,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10 border-blue-500/20',
      pages: [
        { en: 'Buttons & CTAs', es: 'Botones y CTAs' },
        { en: 'Form Controls', es: 'Controles de Formulario' },
        { en: 'Cards & Containers', es: 'Tarjetas y Contenedores' },
        { en: 'Navigation', es: 'Navegación' },
        { en: 'Feedback & Alerts', es: 'Feedback y Alertas' },
        { en: 'Data Display', es: 'Visualización de Datos' }
      ],
      figmaUrl: 'https://figma.com/community'
    },
    {
      id: 'patterns',
      title: { en: 'Patterns', es: 'Patrones' },
      description: {
        en: 'Common layout patterns, page templates, and interaction flows for consistent experiences.',
        es: 'Patrones de layout comunes, plantillas de página y flujos de interacción para experiencias consistentes.'
      },
      icon: Grid3x3,
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10 border-emerald-500/20',
      pages: [
        { en: 'Dashboard Layouts', es: 'Layouts de Dashboard' },
        { en: 'Form Patterns', es: 'Patrones de Formulario' },
        { en: 'Empty States', es: 'Estados Vacíos' },
        { en: 'Loading States', es: 'Estados de Carga' },
        { en: 'Error Handling', es: 'Manejo de Errores' }
      ],
      figmaUrl: 'https://figma.com/community'
    },
    {
      id: 'responsive',
      title: { en: 'Responsive', es: 'Responsivo' },
      description: {
        en: 'Breakpoint specifications, responsive component variants, and adaptive layout guides.',
        es: 'Especificaciones de breakpoints, variantes responsivas de componentes y guías de layout adaptativo.'
      },
      icon: Smartphone,
      color: 'text-amber-400',
      bgColor: 'bg-amber-500/10 border-amber-500/20',
      pages: [
        { en: 'Breakpoint System', es: 'Sistema de Breakpoints' },
        { en: 'Mobile Components', es: 'Componentes Mobile' },
        { en: 'Tablet Layouts', es: 'Layouts Tablet' },
        { en: 'Desktop Layouts', es: 'Layouts Desktop' }
      ],
      figmaUrl: 'https://figma.com/community'
    },
    {
      id: 'wireframes',
      title: { en: 'Wireframe Kit', es: 'Kit de Wireframes' },
      description: {
        en: 'Low-fidelity wireframe components for rapid prototyping and early-stage design exploration.',
        es: 'Componentes de wireframe de baja fidelidad para prototipado rápido y exploración de diseño temprana.'
      },
      icon: Frame,
      color: 'text-zinc-400',
      bgColor: 'bg-zinc-500/10 border-zinc-500/20',
      pages: [
        { en: 'Basic Elements', es: 'Elementos Básicos' },
        { en: 'Page Templates', es: 'Plantillas de Página' },
        { en: 'Flow Diagrams', es: 'Diagramas de Flujo' },
        { en: 'Annotation Kit', es: 'Kit de Anotaciones' }
      ],
      figmaUrl: 'https://figma.com/community'
    }
  ];

  const activeRes = figmaResources.find(r => r.id === activeResource) || figmaResources[0];

  const quickLinks = [
    {
      label: { en: 'Figma Community', es: 'Comunidad Figma' },
      url: 'https://figma.com/community',
      icon: Figma
    },
    {
      label: { en: 'Documentation', es: 'Documentación' },
      url: 'https://help.figma.com',
      icon: BookOpen
    },
    {
      label: { en: 'Figma Plugins', es: 'Plugins de Figma' },
      url: 'https://figma.com/community/plugins',
      icon: Sparkles
    },
    {
      label: { en: 'Desktop App', es: 'App de Escritorio' },
      url: 'https://figma.com/downloads',
      icon: Monitor
    }
  ];

  return (
    <div className="space-y-12">
      {/* Header */}
      <section>
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20">
            <Figma className="size-6 text-purple-400" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white">
              {t({ en: 'Figma Design System Launcher', es: 'Lanzador de Figma Design System' })}
            </h2>
            <p className="text-zinc-500 text-sm mt-1">
              {t({
                en: 'Quick access to all Figma design system resources',
                es: 'Acceso rápido a todos los recursos del design system en Figma'
              })}
            </p>
          </div>
        </div>
        <p className="text-zinc-400 text-lg max-w-3xl">
          {t({
            en: 'Launch and explore the complete Figma design system files. Each resource contains structured pages with components, tokens, and documentation ready for your design workflow.',
            es: 'Lanza y explora los archivos completos del design system en Figma. Cada recurso contiene páginas estructuradas con componentes, tokens y documentación listos para tu flujo de trabajo de diseño.'
          })}
        </p>
      </section>

      {/* Resource Cards Grid */}
      <section>
        <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
          <Layers className="size-5 text-indigo-400" />
          {t({ en: 'Design System Files', es: 'Archivos del Design System' })}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {figmaResources.map((resource) => {
            const Icon = resource.icon;
            const isActive = activeResource === resource.id;

            return (
              <button
                key={resource.id}
                onClick={() => setActiveResource(resource.id)}
                className={`text-left p-5 rounded-xl border transition-all duration-200 ${
                  isActive
                    ? 'bg-zinc-800/80 border-indigo-500/40 ring-1 ring-indigo-500/20'
                    : 'bg-zinc-900/50 border-zinc-800 hover:border-zinc-700 hover:bg-zinc-800/50'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className={`p-2 rounded-lg border ${resource.bgColor}`}>
                    <Icon className={`size-5 ${resource.color}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-white font-medium mb-1">{t(resource.title)}</h4>
                    <p className="text-zinc-500 text-sm line-clamp-2">{t(resource.description)}</p>
                    <div className="mt-3 flex items-center gap-1.5 text-xs text-zinc-600">
                      <Type className="size-3" />
                      {resource.pages.length} {t({ en: 'pages', es: 'páginas' })}
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* Active Resource Detail */}
      <section className="bg-zinc-900/50 border border-zinc-800 rounded-xl overflow-hidden">
        <div className="p-6 border-b border-zinc-800">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-lg border ${activeRes.bgColor}`}>
                <activeRes.icon className={`size-5 ${activeRes.color}`} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">{t(activeRes.title)}</h3>
                <p className="text-zinc-500 text-sm">{t(activeRes.description)}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleCopy(activeRes.figmaUrl, activeRes.id)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-800 border border-zinc-700 text-zinc-300 text-sm hover:bg-zinc-700 transition-colors"
              >
                {copiedId === activeRes.id ? (
                  <Check className="size-4 text-green-400" />
                ) : (
                  <Copy className="size-4" />
                )}
                {copiedId === activeRes.id
                  ? t({ en: 'Copied!', es: 'Copiado!' })
                  : t({ en: 'Copy Link', es: 'Copiar Enlace' })
                }
              </button>
              <a
                href={activeRes.figmaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-500 transition-colors"
              >
                <Figma className="size-4" />
                {t({ en: 'Open in Figma', es: 'Abrir en Figma' })}
                <ExternalLink className="size-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Pages List */}
        <div className="p-6">
          <h4 className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-4">
            {t({ en: 'File Pages', es: 'Páginas del Archivo' })}
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {activeRes.pages.map((page, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-3 rounded-lg bg-zinc-800/50 border border-zinc-800 hover:border-zinc-700 transition-colors group"
              >
                <div className="flex items-center justify-center size-8 rounded-md bg-zinc-700/50 text-zinc-400 text-sm font-mono">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <span className="text-zinc-300 text-sm flex-1">{t(page)}</span>
                <ArrowRight className="size-4 text-zinc-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section>
        <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
          <ExternalLink className="size-5 text-indigo-400" />
          {t({ en: 'Quick Links', es: 'Enlaces Rápidos' })}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickLinks.map((link, index) => {
            const LinkIcon = link.icon;
            return (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-800/50 transition-all group"
              >
                <LinkIcon className="size-5 text-zinc-500 group-hover:text-indigo-400 transition-colors" />
                <span className="text-zinc-300 text-sm group-hover:text-white transition-colors">
                  {t(link.label)}
                </span>
                <ExternalLink className="size-3.5 text-zinc-600 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            );
          })}
        </div>
      </section>

      {/* Tips Section */}
      <section className="bg-gradient-to-br from-indigo-950/30 to-purple-950/20 border border-indigo-500/10 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
          <Sparkles className="size-5 text-indigo-400" />
          {t({ en: 'Pro Tips', es: 'Consejos Pro' })}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              en: 'Use Figma\'s "Publish Styles & Components" feature to share your design system across team files.',
              es: 'Usa la función "Publicar Estilos y Componentes" de Figma para compartir tu design system entre archivos del equipo.'
            },
            {
              en: 'Enable "Variables" in Figma to create design tokens that map directly to your CSS custom properties.',
              es: 'Habilita "Variables" en Figma para crear tokens de diseño que mapeen directamente a tus CSS custom properties.'
            },
            {
              en: 'Organize components using slash naming (e.g., Button/Primary/Large) for auto-grouped component panels.',
              es: 'Organiza componentes usando nombres con barras (ej. Button/Primary/Large) para paneles de componentes auto-agrupados.'
            },
            {
              en: 'Use Figma\'s branching feature to propose design system changes without affecting the main file.',
              es: 'Usa la función de branching de Figma para proponer cambios al design system sin afectar el archivo principal.'
            }
          ].map((tip, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="mt-0.5 flex-shrink-0 size-5 rounded-full bg-indigo-500/20 flex items-center justify-center">
                <span className="text-indigo-400 text-xs font-bold">{index + 1}</span>
              </div>
              <p className="text-zinc-400 text-sm">{t(tip)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-8">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-medium mb-4">
          <Download className="size-3.5" />
          {t({ en: 'Free Resource', es: 'Recurso Gratuito' })}
        </div>
        <h3 className="text-2xl font-bold text-white mb-3">
          {t({
            en: 'Ready to start designing?',
            es: 'Listo para empezar a diseñar?'
          })}
        </h3>
        <p className="text-zinc-500 mb-6 max-w-lg mx-auto">
          {t({
            en: 'Duplicate the Figma files to your drafts and start building with the complete design system.',
            es: 'Duplica los archivos de Figma a tus borradores y empieza a construir con el design system completo.'
          })}
        </p>
        <a
          href="https://figma.com/community"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-500 transition-colors"
        >
          <Figma className="size-5" />
          {t({ en: 'Get the Figma Files', es: 'Obtener los Archivos de Figma' })}
          <ArrowRight className="size-4" />
        </a>
      </section>
    </div>
  );
}
