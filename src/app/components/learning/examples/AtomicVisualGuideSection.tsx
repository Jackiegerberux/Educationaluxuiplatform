import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Sparkles, AlertCircle, CheckCircle2, Package } from 'lucide-react';
import { Card } from '@/app/components/atoms/Card';
import { Badge } from '@/app/components/atoms/Badge';
import { Button } from '@/app/components/atoms/Button';
import { useLanguage } from '@/app/components/layout/LanguageContext';
import { TokenPreview } from './TokenPreview';
import { AtomPreview } from './AtomPreview';
import { MoleculePreview } from './MoleculePreview';
import { OrganismPreview } from './OrganismPreview';
import { TemplatePreview } from './TemplatePreview';

interface StepData {
  id: string;
  title: { en: string; es: string };
  description: { en: string; es: string };
  level: 1 | 2 | 3 | 4 | 5;
  whatItIs: { en: string; es: string };
  whyItMatters: { en: string; es: string };
  typicalDeliverable: { en: string; es: string };
  commonMistake: { en: string; es: string };
  preview: React.ComponentType;
}

const steps: StepData[] = [
  {
    id: 'tokens',
    title: { en: 'Design Tokens', es: 'Design Tokens' },
    description: { 
      en: 'The sub-atomic foundation: colors, spacing, typography values that power your entire system.',
      es: 'La base subatómica: colores, espaciado, valores de tipografía que impulsan todo tu sistema.'
    },
    level: 1,
    whatItIs: {
      en: 'Design tokens are the foundational variables (colors, spacing, fonts) that ensure visual consistency across all components.',
      es: 'Los design tokens son las variables fundamentales (colores, espaciado, fuentes) que aseguran consistencia visual en todos los componentes.'
    },
    whyItMatters: {
      en: 'Tokens make global design changes effortless. Update one value, and every component using that token updates automatically.',
      es: 'Los tokens hacen que los cambios globales de diseño sean fáciles. Actualiza un valor y cada componente que use ese token se actualiza automáticamente.'
    },
    typicalDeliverable: {
      en: 'CSS variables, design token JSON files, Figma variables/styles.',
      es: 'Variables CSS, archivos JSON de tokens de diseño, variables/estilos de Figma.'
    },
    commonMistake: {
      en: 'Hardcoding values (e.g., #6366f1) instead of using semantic tokens (e.g., --color-primary).',
      es: 'Codificar valores directamente (ej. #6366f1) en lugar de usar tokens semánticos (ej. --color-primary).'
    },
    preview: TokenPreview
  },
  {
    id: 'atoms',
    title: { en: 'Atoms', es: 'Átomos' },
    description: {
      en: 'The smallest functional components: labels, inputs, buttons that cannot be broken down further.',
      es: 'Los componentes funcionales más pequeños: etiquetas, inputs, botones que no pueden descomponerse más.'
    },
    level: 2,
    whatItIs: {
      en: 'Atoms are the basic building blocks like buttons, inputs, labels, and icons. They use design tokens for styling.',
      es: 'Los átomos son los bloques de construcción básicos como botones, inputs, etiquetas e íconos. Usan design tokens para el estilo.'
    },
    whyItMatters: {
      en: 'Atoms ensure consistency at the most granular level. Every button, input, or label follows the same patterns.',
      es: 'Los átomos aseguran consistencia en el nivel más granular. Cada botón, input o etiqueta sigue los mismos patrones.'
    },
    typicalDeliverable: {
      en: 'Component library with atoms: Button, Input, Label, Icon, Badge components.',
      es: 'Biblioteca de componentes con átomos: Componentes de Botón, Input, Etiqueta, Ícono, Badge.'
    },
    commonMistake: {
      en: 'Making atoms too complex. If it has multiple purposes, it\'s probably a molecule.',
      es: 'Hacer átomos demasiado complejos. Si tiene múltiples propósitos, probablemente es una molécula.'
    },
    preview: AtomPreview
  },
  {
    id: 'molecules',
    title: { en: 'Molecules', es: 'Moléculas' },
    description: {
      en: 'Simple groups of atoms functioning together: search form, card header, input with validation.',
      es: 'Grupos simples de átomos funcionando juntos: formulario de búsqueda, cabecera de tarjeta, input con validación.'
    },
    level: 3,
    whatItIs: {
      en: 'Molecules combine multiple atoms into functional units. A search form = input + button + optional filters.',
      es: 'Las moléculas combinan múltiples átomos en unidades funcionales. Un formulario de búsqueda = input + botón + filtros opcionales.'
    },
    whyItMatters: {
      en: 'Molecules create reusable patterns that solve common UI needs without rebuilding from atoms each time.',
      es: 'Las moléculas crean patrones reutilizables que resuelven necesidades comunes de UI sin reconstruir desde átomos cada vez.'
    },
    typicalDeliverable: {
      en: 'Reusable patterns: SearchBar, FormField, CardHeader, Pagination, Breadcrumbs.',
      es: 'Patrones reutilizables: SearchBar, FormField, CardHeader, Paginación, Breadcrumbs.'
    },
    commonMistake: {
      en: 'Making molecules too specific. They should be flexible enough to work in multiple contexts.',
      es: 'Hacer moléculas demasiado específicas. Deben ser lo suficientemente flexibles para funcionar en múltiples contextos.'
    },
    preview: MoleculePreview
  },
  {
    id: 'organisms',
    title: { en: 'Organisms', es: 'Organismos' },
    description: {
      en: 'Complex components made of molecules and atoms: navigation header, product card grid, sidebar.',
      es: 'Componentes complejos hechos de moléculas y átomos: cabecera de navegación, grid de tarjetas de producto, sidebar.'
    },
    level: 4,
    whatItIs: {
      en: 'Organisms are relatively complex UI sections that combine molecules and atoms. Example: A header with logo, nav, search, and profile.',
      es: 'Los organismos son secciones de UI relativamente complejas que combinan moléculas y átomos. Ejemplo: Un header con logo, nav, búsqueda y perfil.'
    },
    whyItMatters: {
      en: 'Organisms represent distinct sections of the interface that can be reused across different pages and templates.',
      es: 'Los organismos representan secciones distintas de la interfaz que pueden reutilizarse en diferentes páginas y plantillas.'
    },
    typicalDeliverable: {
      en: 'Major UI sections: Header, Footer, ProductCard, NavigationSidebar, UserProfilePanel.',
      es: 'Secciones principales de UI: Header, Footer, ProductCard, NavigationSidebar, UserProfilePanel.'
    },
    commonMistake: {
      en: 'Creating organisms that are too page-specific. They should be reusable across multiple contexts.',
      es: 'Crear organismos que son demasiado específicos de página. Deben ser reutilizables en múltiples contextos.'
    },
    preview: OrganismPreview
  },
  {
    id: 'templates',
    title: { en: 'Templates & Pages', es: 'Plantillas y Páginas' },
    description: {
      en: 'Page-level layouts that arrange organisms into specific contexts: dashboard, article, checkout flow.',
      es: 'Layouts a nivel de página que organizan organismos en contextos específicos: tablero, artículo, flujo de checkout.'
    },
    level: 5,
    whatItIs: {
      en: 'Templates define page-level layout patterns. Pages are specific instances with real content. Template = wireframe, Page = with actual data.',
      es: 'Las plantillas definen patrones de layout a nivel de página. Las páginas son instancias específicas con contenido real. Plantilla = wireframe, Página = con datos reales.'
    },
    whyItMatters: {
      en: 'Templates ensure consistent page structure while remaining flexible for different content types and use cases.',
      es: 'Las plantillas aseguran estructura de página consistente mientras permanecen flexibles para diferentes tipos de contenido y casos de uso.'
    },
    typicalDeliverable: {
      en: 'Page layouts: DashboardTemplate, ArticleTemplate, CheckoutTemplate, SettingsTemplate.',
      es: 'Layouts de página: DashboardTemplate, ArticleTemplate, CheckoutTemplate, SettingsTemplate.'
    },
    commonMistake: {
      en: 'Designing unique pages without recognizing reusable layout patterns. Most sites need only 3-5 template types.',
      es: 'Diseñar páginas únicas sin reconocer patrones de layout reutilizables. La mayoría de sitios necesitan solo 3-5 tipos de plantilla.'
    },
    preview: TemplatePreview
  }
];

export function AtomicVisualGuideSection() {
  const { t } = useLanguage();
  const [expandedStep, setExpandedStep] = useState<string | null>('tokens');

  const toggleExpand = (stepId: string) => {
    setExpandedStep(expandedStep === stepId ? null : stepId);
  };

  const getLevelColor = (level: number) => {
    const colors = {
      1: 'from-blue-500 to-cyan-500',
      2: 'from-indigo-500 to-blue-500',
      3: 'from-purple-500 to-indigo-500',
      4: 'from-pink-500 to-purple-500',
      5: 'from-rose-500 to-pink-500'
    };
    return colors[level as keyof typeof colors] || colors[1];
  };

  return (
    <section id="visual-guide" className="scroll-mt-24 space-y-8">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-8">
        <div className="inline-flex items-center gap-2 bg-indigo-950/50 text-indigo-400 border border-indigo-500/20 rounded-full px-4 py-2 mb-4">
          <Sparkles className="size-4" />
          <span className="text-sm font-medium">
            {t({ en: 'Interactive Visual Guide', es: 'Guía Visual Interactiva' })}
          </span>
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
          {t({ 
            en: 'Atomic Design Visual Guide',
            es: 'Guía Visual de Atomic Design'
          })}
        </h3>
        <p className="text-zinc-400">
          {t({
            en: 'Explore each level of the atomic design methodology with live examples built from our design system components.',
            es: 'Explora cada nivel de la metodología de diseño atómico con ejemplos en vivo construidos con componentes de nuestro sistema de diseño.'
          })}
        </p>
      </div>

      {/* Visual Progression Steps */}
      <div className="space-y-4">
        {steps.map((step, index) => {
          const PreviewComponent = step.preview;
          const isExpanded = expandedStep === step.id;

          return (
            <Card
              key={step.id}
              variant="default"
              padding="none"
              className="overflow-hidden hover:border-zinc-700 transition-all"
            >
              {/* Step Header */}
              <div className="p-6 border-b border-zinc-800 bg-zinc-900/50">
                <div className="flex items-start gap-4">
                  {/* Level Badge */}
                  <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${getLevelColor(step.level)} flex items-center justify-center font-bold text-white text-lg`}>
                    {step.level}
                  </div>

                  {/* Title & Description */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="text-lg font-semibold text-white">
                        {t(step.title)}
                      </h4>
                      <Badge variant="default" size="sm">
                        {t({ en: 'Level', es: 'Nivel' })} {step.level}
                      </Badge>
                    </div>
                    <p className="text-sm text-zinc-400">
                      {t(step.description)}
                    </p>
                  </div>

                  {/* Expand Button */}
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleExpand(step.id)}
                    className="flex-shrink-0"
                  >
                    {isExpanded ? (
                      <>
                        <ChevronUp className="size-4" />
                        {t({ en: 'Collapse', es: 'Colapsar' })}
                      </>
                    ) : (
                      <>
                        <ChevronDown className="size-4" />
                        {t({ en: 'Expand Details', es: 'Expandir Detalles' })}
                      </>
                    )}
                  </Button>
                </div>
              </div>

              {/* Interactive Preview - Always Visible */}
              <div className="p-6 bg-black/20">
                <PreviewComponent />
              </div>

              {/* Expanded Details Panel */}
              {isExpanded && (
                <div className="p-6 border-t border-zinc-800 bg-zinc-900/30 animate-in slide-in-from-top duration-200">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* What It Is */}
                    <div className="p-4 bg-black/40 rounded-lg border border-zinc-800">
                      <div className="flex items-center gap-2 mb-2">
                        <Package className="size-4 text-blue-400" />
                        <h5 className="font-semibold text-white text-sm">
                          {t({ en: 'What It Is', es: 'Qué Es' })}
                        </h5>
                      </div>
                      <p className="text-sm text-zinc-400">
                        {t(step.whatItIs)}
                      </p>
                    </div>

                    {/* Why It Matters */}
                    <div className="p-4 bg-black/40 rounded-lg border border-zinc-800">
                      <div className="flex items-center gap-2 mb-2">
                        <Sparkles className="size-4 text-yellow-400" />
                        <h5 className="font-semibold text-white text-sm">
                          {t({ en: 'Why It Matters', es: 'Por Qué Importa' })}
                        </h5>
                      </div>
                      <p className="text-sm text-zinc-400">
                        {t(step.whyItMatters)}
                      </p>
                    </div>

                    {/* Typical Deliverable */}
                    <div className="p-4 bg-black/40 rounded-lg border border-zinc-800">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle2 className="size-4 text-green-400" />
                        <h5 className="font-semibold text-white text-sm">
                          {t({ en: 'Typical Deliverable', es: 'Entregable Típico' })}
                        </h5>
                      </div>
                      <p className="text-sm text-zinc-400">
                        {t(step.typicalDeliverable)}
                      </p>
                    </div>

                    {/* Common Mistake */}
                    <div className="p-4 bg-black/40 rounded-lg border border-zinc-800">
                      <div className="flex items-center gap-2 mb-2">
                        <AlertCircle className="size-4 text-red-400" />
                        <h5 className="font-semibold text-white text-sm">
                          {t({ en: 'Common Mistake', es: 'Error Común' })}
                        </h5>
                      </div>
                      <p className="text-sm text-zinc-400">
                        {t(step.commonMistake)}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </Card>
          );
        })}
      </div>

      {/* Summary Callout */}
      <Card variant="surface" padding="lg" className="bg-gradient-to-br from-indigo-950/30 to-purple-950/30 border-indigo-500/20">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-indigo-600 flex items-center justify-center">
            <Sparkles className="size-5 text-white" />
          </div>
          <div>
            <h4 className="font-semibold text-white mb-2">
              {t({ 
                en: 'The Power of Atomic Design',
                es: 'El Poder del Atomic Design'
              })}
            </h4>
            <p className="text-sm text-zinc-300 mb-3">
              {t({
                en: 'By building from tokens → atoms → molecules → organisms → templates, you create a scalable, maintainable design system where changes cascade naturally through the hierarchy.',
                es: 'Al construir desde tokens → átomos → moléculas → organismos → plantillas, creas un sistema de diseño escalable y mantenible donde los cambios se propagan naturalmente a través de la jerarquía.'
              })}
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="success" size="sm">
                {t({ en: 'Consistent', es: 'Consistente' })}
              </Badge>
              <Badge variant="success" size="sm">
                {t({ en: 'Scalable', es: 'Escalable' })}
              </Badge>
              <Badge variant="success" size="sm">
                {t({ en: 'Maintainable', es: 'Mantenible' })}
              </Badge>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
}