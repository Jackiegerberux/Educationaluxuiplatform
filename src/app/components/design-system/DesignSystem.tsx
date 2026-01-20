import React, { useState } from 'react';
import { useLanguage } from '../layout/LanguageContext';
import { 
  Palette, 
  Type, 
  Grid3x3, 
  Boxes, 
  Eye, 
  BookOpen,
  Code2,
  Layers,
  Frame,
  Variable
} from 'lucide-react';
import { DesignSystemOverview } from './sections/DesignSystemOverview';
import { DesignSystemWireframeKit } from './sections/DesignSystemWireframeKit';
import { DesignSystemFoundations } from './sections/DesignSystemFoundations';
import { DesignSystemComponents } from './sections/DesignSystemComponents';
import { DesignSystemPatterns } from './sections/DesignSystemPatterns';
import { DesignSystemAccessibility } from './sections/DesignSystemAccessibility';
import { DesignSystemTokens } from './sections/DesignSystemTokens';
import { DesignSystemArchitecture } from './sections/DesignSystemArchitecture';
import { DesignSystemIndex } from './sections/DesignSystemIndex';
import { DesignSystemGuidelines } from './sections/DesignSystemGuidelines';

type Section = 'overview' | 'guidelines' | 'index' | 'wireframe-kit' | 'tokens' | 'architecture' | 'foundations' | 'components' | 'patterns' | 'accessibility';

export function DesignSystem() {
  const { t } = useLanguage();
  const [activeSection, setActiveSection] = useState<Section>('overview');

  const sections = [
    {
      id: 'overview' as Section,
      label: { en: 'Overview', es: 'Visión General' },
      icon: BookOpen,
      description: { en: 'What is a Design System', es: 'Qué es un Design System' }
    },
    {
      id: 'guidelines' as Section,
      label: { en: 'Guidelines', es: 'Directrices' },
      icon: Type,
      description: { en: 'Design System Guidelines', es: 'Directrices del Sistema de Diseño' }
    },
    {
      id: 'index' as Section,
      label: { en: 'Index', es: 'Índice' },
      icon: Grid3x3,
      description: { en: 'Design System Index', es: 'Índice del Sistema de Diseño' }
    },
    {
      id: 'wireframe-kit' as Section,
      label: { en: 'Wireframe Kit', es: 'Kit Wireframe' },
      icon: Frame,
      description: { en: 'Low-Fidelity Components', es: 'Componentes Baja Fidelidad' }
    },
    {
      id: 'tokens' as Section,
      label: { en: 'Tokens', es: 'Tokens' },
      icon: Variable,
      description: { en: 'Design Variables', es: 'Variables de Diseño' }
    },
    {
      id: 'architecture' as Section,
      label: { en: 'Architecture', es: 'Arquitectura' },
      icon: Layers,
      description: { en: 'System Structure', es: 'Estructura del Sistema' }
    },
    {
      id: 'foundations' as Section,
      label: { en: 'Foundations', es: 'Fundamentos' },
      icon: Palette,
      description: { en: 'Colors, Typography, Spacing', es: 'Colores, Tipografía, Espaciado' }
    },
    {
      id: 'components' as Section,
      label: { en: 'Components', es: 'Componentes' },
      icon: Boxes,
      description: { en: 'UI Kit Gallery', es: 'Galería de UI Kit' }
    },
    {
      id: 'patterns' as Section,
      label: { en: 'Patterns', es: 'Patrones' },
      icon: Layers,
      description: { en: 'Reusable Templates', es: 'Plantillas Reutilizables' }
    },
    {
      id: 'accessibility' as Section,
      label: { en: 'Accessibility', es: 'Accesibilidad' },
      icon: Eye,
      description: { en: 'WCAG Guidelines', es: 'Guías WCAG' }
    }
  ];

  const renderSection = () => {
    switch (activeSection) {
      case 'overview':
        return <DesignSystemOverview />;
      case 'guidelines':
        return <DesignSystemGuidelines />;
      case 'index':
        return <DesignSystemIndex />;
      case 'wireframe-kit':
        return <DesignSystemWireframeKit />;
      case 'tokens':
        return <DesignSystemTokens />;
      case 'architecture':
        return <DesignSystemArchitecture />;
      case 'foundations':
        return <DesignSystemFoundations />;
      case 'components':
        return <DesignSystemComponents />;
      case 'patterns':
        return <DesignSystemPatterns />;
      case 'accessibility':
        return <DesignSystemAccessibility />;
      default:
        return <DesignSystemOverview />;
    }
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="border-b border-white/5 bg-gradient-to-b from-indigo-950/20 to-transparent">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-6">
              <Code2 className="size-4" />
              {t({ en: 'Internal UI Kit', es: 'UI Kit Interno' })}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
              {t({ en: 'AditiDesign System', es: 'Sistema de Diseño AditiDesign' })}
            </h1>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              {t({ 
                en: 'A comprehensive UI kit and component library for building consistent, accessible, and beautiful learning experiences.',
                es: 'Un kit completo de UI y biblioteca de componentes para construir experiencias de aprendizaje consistentes, accesibles y hermosas.'
              })}
            </p>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="sticky top-0 z-40 border-b border-white/5 bg-black/80 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex overflow-x-auto hide-scrollbar">
            {sections.map((section) => {
              const Icon = section.icon;
              const isActive = activeSection === section.id;
              
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`flex items-center gap-2 px-6 py-4 border-b-2 transition-all whitespace-nowrap ${
                    isActive
                      ? 'border-indigo-500 text-white'
                      : 'border-transparent text-zinc-500 hover:text-zinc-300'
                  }`}
                >
                  <Icon className="size-4" />
                  <span className="font-medium text-sm">
                    {t(section.label)}
                  </span>
                </button>
              );
            })}
          </nav>
        </div>
      </section>

      {/* Section Content */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {renderSection()}
      </section>
    </div>
  );
}