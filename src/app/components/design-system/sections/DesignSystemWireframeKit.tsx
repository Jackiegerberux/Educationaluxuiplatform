import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { useLanguage } from '../../layout/LanguageContext';
import { 
  Frame,
  Lightbulb,
  Box,
  CheckCircle2,
  ArrowRight,
  Search,
  Menu,
  Settings,
  User,
  Home,
  ChevronRight,
  Info,
  AlertTriangle,
  Loader2,
  TrendingUp,
  BarChart3,
  FileText,
  ShoppingCart,
  CheckSquare
} from 'lucide-react';
import {
  DashboardTemplate,
  ListDetailTemplate,
  FormWizardTemplate,
  SettingsTemplate,
  CheckoutTemplate,
  ConfirmationTemplate
} from '../wireframe-templates';

type TemplateView = 'list' | 'dashboard' | 'list-detail' | 'form-wizard' | 'settings' | 'checkout' | 'confirmation';

function WireframeComponent({ 
  title, 
  useWhen, 
  anatomy, 
  children 
}: { 
  title: string; 
  useWhen?: string;
  anatomy?: string[];
  children: React.ReactNode;
}) {
  return (
    <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
      <h4 className="text-sm font-semibold text-zinc-400 mb-4">{title}</h4>
      
      {useWhen && (
        <div className="mb-3 flex items-start gap-2 text-xs text-zinc-500">
          <Lightbulb className="size-3 mt-0.5 shrink-0 text-yellow-400" />
          <span><strong className="text-yellow-400">Use when:</strong> {useWhen}</span>
        </div>
      )}
      
      {anatomy && anatomy.length > 0 && (
        <div className="mb-4 text-xs text-zinc-600">
          <strong>Anatomy:</strong> {anatomy.join(' • ')}
        </div>
      )}
      
      {children}
    </div>
  );
}

export function DesignSystemWireframeKit() {
  const { t } = useLanguage();
  const [currentView, setCurrentView] = useState<TemplateView>('list');
  const navigate = useNavigate();

  const handleUpgradeToUIKit = () => {
    // This would be handled by parent component to switch to Components tab
    setCurrentView('list');
  };

  // If viewing a template, show that template
  if (currentView === 'dashboard') {
    return <DashboardTemplate onBack={() => setCurrentView('list')} onUpgrade={handleUpgradeToUIKit} />;
  }
  if (currentView === 'list-detail') {
    return <ListDetailTemplate onBack={() => setCurrentView('list')} onUpgrade={handleUpgradeToUIKit} />;
  }
  if (currentView === 'form-wizard') {
    return <FormWizardTemplate onBack={() => setCurrentView('list')} onUpgrade={handleUpgradeToUIKit} />;
  }
  if (currentView === 'settings') {
    return <SettingsTemplate onBack={() => setCurrentView('list')} onUpgrade={handleUpgradeToUIKit} />;
  }
  if (currentView === 'checkout') {
    return <CheckoutTemplate onBack={() => setCurrentView('list')} onUpgrade={handleUpgradeToUIKit} />;
  }
  if (currentView === 'confirmation') {
    return <ConfirmationTemplate onBack={() => setCurrentView('list')} onUpgrade={handleUpgradeToUIKit} />;
  }

  return (
    <div className="space-y-16">
      {/* Overview */}
      <section>
        <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
          <Frame className="size-8 text-indigo-400" />
          {t({ en: 'Wireframe Kit Overview', es: 'Visión General del Kit Wireframe' })}
        </h2>

        <div className="bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 border border-zinc-700 rounded-2xl p-8 mb-8">
          <p className="text-zinc-300 leading-relaxed mb-6">
            {t({
              en: 'Wireframes are low-fidelity, neutral representations of a design that focus on layout, hierarchy, and functionality—without colors, images, or detailed styling. They help validate structure and user flows early, before investing time in high-fidelity design.',
              es: 'Los wireframes son representaciones de baja fidelidad y neutrales de un diseño que se enfocan en layout, jerarquía y funcionalidad—sin colores, imágenes o estilos detallados. Ayudan a validar estructura y flujos de usuario temprano, antes de invertir tiempo en diseño de alta fidelidad.'
            })}
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
              <div className="w-10 h-10 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center mb-4">
                <span className="text-2xl">📐</span>
              </div>
              <h3 className="font-semibold text-white mb-2">
                {t({ en: 'Low-Fidelity', es: 'Baja Fidelidad' })}
              </h3>
              <p className="text-sm text-zinc-400">
                {t({ 
                  en: 'Grayscale, basic shapes, placeholder text. Focus on structure.',
                  es: 'Escala de grises, formas básicas, texto placeholder. Enfoque en estructura.'
                })}
              </p>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
              <div className="w-10 h-10 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="font-semibold text-white mb-2">
                {t({ en: 'Mid-Fidelity', es: 'Fidelidad Media' })}
              </h3>
              <p className="text-sm text-zinc-400">
                {t({ 
                  en: 'Some spacing details, real text, basic interactions.',
                  es: 'Algunos detalles de espaciado, texto real, interacciones básicas.'
                })}
              </p>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
              <div className="w-10 h-10 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center mb-4">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="font-semibold text-white mb-2">
                {t({ en: 'High-Fidelity', es: 'Alta Fidelidad' })}
              </h3>
              <p className="text-sm text-zinc-400">
                {t({ 
                  en: 'Final colors, typography, images, micro-interactions.',
                  es: 'Colores finales, tipografía, imágenes, micro-interacciones.'
                })}
              </p>
            </div>
          </div>
        </div>

        {/* When to Use */}
        <div className="bg-gradient-to-br from-blue-950/30 to-indigo-950/30 border border-blue-500/20 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Lightbulb className="size-5 text-blue-400" />
            {t({ en: 'When to Use Wireframes', es: 'Cuándo Usar Wireframes' })}
          </h3>
          <ul className="space-y-2 text-sm text-zinc-300">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="size-4 text-blue-400 mt-0.5 shrink-0" />
              <span><strong className="text-white">Early exploration:</strong> Test multiple layout ideas quickly</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="size-4 text-blue-400 mt-0.5 shrink-0" />
              <span><strong className="text-white">Stakeholder alignment:</strong> Get feedback on structure before visual design</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="size-4 text-blue-400 mt-0.5 shrink-0" />
              <span><strong className="text-white">Information architecture:</strong> Validate content hierarchy and navigation</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="size-4 text-blue-400 mt-0.5 shrink-0" />
              <span><strong className="text-white">User flow validation:</strong> Test task completion without visual distraction</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="size-4 text-blue-400 mt-0.5 shrink-0" />
              <span><strong className="text-white">Developer handoff:</strong> Communicate layout structure clearly</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Wireframe Components Library */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-6">
          {t({ en: 'Wireframe Components Library', es: 'Biblioteca de Componentes Wireframe' })}
        </h2>
        <p className="text-zinc-400 mb-8">
          {t({
            en: 'Neutral, reusable components for creating low-fidelity wireframes. Copy and combine these to build your screens.',
            es: 'Componentes neutrales y reutilizables para crear wireframes de baja fidelidad. Copia y combina estos para construir tus pantallas.'
          })}
        </p>

        {/* Layout Blocks */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-white mb-6">Layout Blocks</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <WireframeComponent title="Header">
              <div className="border-2 border-zinc-700 border-dashed rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-zinc-700 rounded" />
                    <div className="h-4 w-24 bg-zinc-700 rounded" />
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="h-4 w-16 bg-zinc-700 rounded" />
                    <div className="h-4 w-16 bg-zinc-700 rounded" />
                    <div className="h-4 w-16 bg-zinc-700 rounded" />
                  </div>
                </div>
              </div>
            </WireframeComponent>

            <WireframeComponent title="Sidebar + Content">
              <div className="border-2 border-zinc-700 border-dashed rounded-lg p-4">
                <div className="flex gap-4">
                  <div className="w-1/4 space-y-2">
                    <div className="h-4 bg-zinc-700 rounded" />
                    <div className="h-4 bg-zinc-700 rounded" />
                    <div className="h-4 bg-zinc-700 rounded" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="h-6 bg-zinc-700 rounded" />
                    <div className="h-4 bg-zinc-700 rounded" />
                    <div className="h-4 bg-zinc-700 rounded w-3/4" />
                  </div>
                </div>
              </div>
            </WireframeComponent>

            <WireframeComponent title="Grid Container (3 columns)">
              <div className="border-2 border-zinc-700 border-dashed rounded-lg p-4">
                <div className="grid grid-cols-3 gap-3">
                  <div className="h-24 bg-zinc-700 rounded" />
                  <div className="h-24 bg-zinc-700 rounded" />
                  <div className="h-24 bg-zinc-700 rounded" />
                </div>
              </div>
            </WireframeComponent>

            <WireframeComponent title="Content Section">
              <div className="border-2 border-zinc-700 border-dashed rounded-lg p-4 space-y-3">
                <div className="h-5 bg-zinc-700 rounded w-1/3" />
                <div className="h-3 bg-zinc-700 rounded" />
                <div className="h-3 bg-zinc-700 rounded w-5/6" />
                <div className="h-3 bg-zinc-700 rounded w-4/6" />
              </div>
            </WireframeComponent>
          </div>
        </div>

        {/* Navigation */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-white mb-6">Navigation</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <WireframeComponent title="Top Nav">
              <div className="border-2 border-zinc-700 border-dashed rounded-lg p-3">
                <div className="flex items-center gap-6">
                  <div className="h-4 w-20 bg-zinc-700 rounded" />
                  <div className="h-4 w-20 bg-zinc-700 rounded" />
                  <div className="h-4 w-20 bg-zinc-700 rounded" />
                </div>
              </div>
            </WireframeComponent>

            <WireframeComponent title="Breadcrumb">
              <div className="border-2 border-zinc-700 border-dashed rounded-lg p-3">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-12 bg-zinc-700 rounded" />
                  <ChevronRight className="size-3 text-zinc-700" />
                  <div className="h-3 w-16 bg-zinc-700 rounded" />
                  <ChevronRight className="size-3 text-zinc-700" />
                  <div className="h-3 w-14 bg-zinc-700 rounded" />
                </div>
              </div>
            </WireframeComponent>

            <WireframeComponent title="Tabs">
              <div className="border-2 border-zinc-700 border-dashed rounded-lg p-3">
                <div className="flex gap-4 border-b-2 border-zinc-700 pb-2">
                  <div className="h-4 w-16 bg-zinc-600 rounded" />
                  <div className="h-4 w-16 bg-zinc-700 rounded" />
                  <div className="h-4 w-16 bg-zinc-700 rounded" />
                </div>
              </div>
            </WireframeComponent>

            <WireframeComponent title="Stepper">
              <div className="border-2 border-zinc-700 border-dashed rounded-lg p-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-zinc-600 rounded-full" />
                    <div className="h-3 w-12 bg-zinc-700 rounded" />
                  </div>
                  <div className="h-px flex-1 bg-zinc-700 mx-2" />
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 border-2 border-zinc-700 rounded-full" />
                    <div className="h-3 w-12 bg-zinc-700 rounded" />
                  </div>
                </div>
              </div>
            </WireframeComponent>
          </div>
        </div>

        {/* Content Elements */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-white mb-6">Content Elements</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <WireframeComponent title="Heading + Paragraph">
              <div className="border-2 border-zinc-700 border-dashed rounded-lg p-4 space-y-3">
                <div className="h-6 bg-zinc-700 rounded w-2/3" />
                <div className="space-y-2">
                  <div className="h-3 bg-zinc-700 rounded" />
                  <div className="h-3 bg-zinc-700 rounded" />
                  <div className="h-3 bg-zinc-700 rounded w-4/5" />
                </div>
              </div>
            </WireframeComponent>

            <WireframeComponent title="List Block">
              <div className="border-2 border-zinc-700 border-dashed rounded-lg p-4 space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-zinc-700 rounded-full" />
                  <div className="h-3 bg-zinc-700 rounded flex-1" />
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-zinc-700 rounded-full" />
                  <div className="h-3 bg-zinc-700 rounded flex-1" />
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-zinc-700 rounded-full" />
                  <div className="h-3 bg-zinc-700 rounded flex-1" />
                </div>
              </div>
            </WireframeComponent>

            <WireframeComponent title="Card (Neutral)">
              <div className="border-2 border-zinc-700 border-dashed rounded-lg p-4 space-y-3">
                <div className="h-20 bg-zinc-700 rounded" />
                <div className="h-4 bg-zinc-700 rounded w-3/4" />
                <div className="h-3 bg-zinc-700 rounded" />
                <div className="h-3 bg-zinc-700 rounded w-5/6" />
              </div>
            </WireframeComponent>

            <WireframeComponent title="Icon + Label">
              <div className="border-2 border-zinc-700 border-dashed rounded-lg p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-zinc-700 rounded-full" />
                  <div>
                    <div className="h-4 bg-zinc-700 rounded w-24 mb-1" />
                    <div className="h-3 bg-zinc-700 rounded w-32" />
                  </div>
                </div>
              </div>
            </WireframeComponent>
          </div>
        </div>

        {/* Form Elements */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-white mb-6">Form Elements</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <WireframeComponent title="Input Field">
              <div className="border-2 border-zinc-700 border-dashed rounded-lg p-4 space-y-2">
                <div className="h-3 bg-zinc-700 rounded w-1/4" />
                <div className="h-10 border-2 border-zinc-700 rounded" />
              </div>
            </WireframeComponent>

            <WireframeComponent title="Textarea">
              <div className="border-2 border-zinc-700 border-dashed rounded-lg p-4 space-y-2">
                <div className="h-3 bg-zinc-700 rounded w-1/3" />
                <div className="h-20 border-2 border-zinc-700 rounded" />
              </div>
            </WireframeComponent>

            <WireframeComponent title="Checkbox / Radio">
              <div className="border-2 border-zinc-700 border-dashed rounded-lg p-4 space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-zinc-700 rounded" />
                  <div className="h-3 bg-zinc-700 rounded w-24" />
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-zinc-700 rounded" />
                  <div className="h-3 bg-zinc-700 rounded w-32" />
                </div>
              </div>
            </WireframeComponent>

            <WireframeComponent title="Select / Dropdown">
              <div className="border-2 border-zinc-700 border-dashed rounded-lg p-4 space-y-2">
                <div className="h-3 bg-zinc-700 rounded w-1/4" />
                <div className="h-10 border-2 border-zinc-700 rounded flex items-center justify-end pr-3">
                  <div className="w-4 h-4 border-t-2 border-r-2 border-zinc-700 transform rotate-[135deg]" />
                </div>
              </div>
            </WireframeComponent>
          </div>
        </div>

        {/* Tables */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-white mb-6">Tables</h3>
          <div className="space-y-6">
            <WireframeComponent title="Simple Table">
              <div className="border-2 border-zinc-700 border-dashed rounded-lg overflow-hidden">
                <div className="grid grid-cols-4 gap-px bg-zinc-700">
                  <div className="bg-zinc-900 p-3"><div className="h-3 bg-zinc-600 rounded" /></div>
                  <div className="bg-zinc-900 p-3"><div className="h-3 bg-zinc-600 rounded" /></div>
                  <div className="bg-zinc-900 p-3"><div className="h-3 bg-zinc-600 rounded" /></div>
                  <div className="bg-zinc-900 p-3"><div className="h-3 bg-zinc-600 rounded" /></div>
                  <div className="bg-zinc-900 p-3"><div className="h-3 bg-zinc-700 rounded" /></div>
                  <div className="bg-zinc-900 p-3"><div className="h-3 bg-zinc-700 rounded" /></div>
                  <div className="bg-zinc-900 p-3"><div className="h-3 bg-zinc-700 rounded" /></div>
                  <div className="bg-zinc-900 p-3"><div className="h-3 bg-zinc-700 rounded" /></div>
                  <div className="bg-zinc-900 p-3"><div className="h-3 bg-zinc-700 rounded" /></div>
                  <div className="bg-zinc-900 p-3"><div className="h-3 bg-zinc-700 rounded" /></div>
                  <div className="bg-zinc-900 p-3"><div className="h-3 bg-zinc-700 rounded" /></div>
                  <div className="bg-zinc-900 p-3"><div className="h-3 bg-zinc-700 rounded" /></div>
                </div>
              </div>
            </WireframeComponent>
          </div>
        </div>

        {/* Feedback States */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-white mb-6">Feedback States</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <WireframeComponent title="Empty State">
              <div className="border-2 border-zinc-700 border-dashed rounded-lg p-8 text-center">
                <div className="w-16 h-16 bg-zinc-700 rounded-full mx-auto mb-4" />
                <div className="h-4 bg-zinc-700 rounded w-32 mx-auto mb-2" />
                <div className="h-3 bg-zinc-700 rounded w-48 mx-auto" />
              </div>
            </WireframeComponent>

            <WireframeComponent title="Loading Skeleton">
              <div className="border-2 border-zinc-700 border-dashed rounded-lg p-4 space-y-3">
                <div className="h-4 bg-zinc-700 rounded animate-pulse" />
                <div className="h-4 bg-zinc-700 rounded animate-pulse w-5/6" />
                <div className="h-4 bg-zinc-700 rounded animate-pulse w-4/6" />
              </div>
            </WireframeComponent>

            <WireframeComponent title="Error State">
              <div className="border-2 border-zinc-700 border-dashed rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="size-5 text-zinc-600 shrink-0" />
                  <div className="flex-1 space-y-2">
                    <div className="h-3 bg-zinc-700 rounded" />
                    <div className="h-3 bg-zinc-700 rounded w-4/5" />
                  </div>
                </div>
              </div>
            </WireframeComponent>

            <WireframeComponent title="Success State">
              <div className="border-2 border-zinc-700 border-dashed rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="size-5 text-zinc-600 shrink-0" />
                  <div className="flex-1 space-y-2">
                    <div className="h-3 bg-zinc-700 rounded" />
                    <div className="h-3 bg-zinc-700 rounded w-3/5" />
                  </div>
                </div>
              </div>
            </WireframeComponent>
          </div>
        </div>

        {/* CTAs */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-white mb-6">CTAs & Buttons</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <WireframeComponent title="Primary Button">
              <div className="border-2 border-zinc-700 border-dashed rounded-lg p-4">
                <div className="h-10 bg-zinc-600 rounded-lg flex items-center justify-center">
                  <div className="h-3 w-24 bg-zinc-800 rounded" />
                </div>
              </div>
            </WireframeComponent>

            <WireframeComponent title="Secondary Button">
              <div className="border-2 border-zinc-700 border-dashed rounded-lg p-4">
                <div className="h-10 border-2 border-zinc-600 rounded-lg flex items-center justify-center">
                  <div className="h-3 w-24 bg-zinc-700 rounded" />
                </div>
              </div>
            </WireframeComponent>

            <WireframeComponent title="Sticky Bottom Bar">
              <div className="border-2 border-zinc-700 border-dashed rounded-lg overflow-hidden">
                <div className="h-32 bg-zinc-900/50" />
                <div className="border-t-2 border-zinc-700 p-4">
                  <div className="h-10 bg-zinc-600 rounded-lg" />
                </div>
              </div>
            </WireframeComponent>

            <WireframeComponent title="Button Group">
              <div className="border-2 border-zinc-700 border-dashed rounded-lg p-4">
                <div className="flex gap-3">
                  <div className="h-10 border-2 border-zinc-600 rounded-lg flex-1" />
                  <div className="h-10 bg-zinc-600 rounded-lg flex-1" />
                </div>
              </div>
            </WireframeComponent>
          </div>
        </div>
      </section>

      {/* Wireframe Templates */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-6">
          {t({ en: 'Wireframe Templates', es: 'Plantillas Wireframe' })}
        </h2>
        <p className="text-zinc-400 mb-8">
          {t({
            en: 'Ready-to-use wireframe patterns for common page types. Click to view the full interactive template.',
            es: 'Patrones wireframe listos para usar para tipos de página comunes. Haz clic para ver el template interactivo completo.'
          })}
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: 'Dashboard', icon: '📊', route: 'wireframe-dashboard' },
            { name: 'List + Detail', icon: '📋', route: 'wireframe-list-detail' },
            { name: 'Form Wizard', icon: '📝', route: 'wireframe-form-wizard' },
            { name: 'Settings', icon: '⚙️', route: 'wireframe-settings' },
            { name: 'Checkout', icon: '🛒', route: 'wireframe-checkout' },
            { name: 'Confirmation', icon: '✅', route: 'wireframe-confirmation' }
          ].map((template) => (
            <button 
              key={template.name}
              onClick={() => {
                navigate(`/${template.route}`);
              }}
              className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 hover:border-indigo-500/50 hover:bg-zinc-900 transition-all group text-left"
            >
              <div className="text-4xl mb-4">{template.icon}</div>
              <h3 className="font-semibold text-white mb-2">{template.name}</h3>
              <div className="h-32 border-2 border-zinc-700 border-dashed rounded-lg mb-4 bg-zinc-950" />
              <div className="text-sm text-indigo-400 group-hover:text-indigo-300 flex items-center gap-1 transition-colors">
                {t({ en: 'View Template', es: 'Ver Template' })}
                <ArrowRight className="size-3 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Validation Checklist */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-6">
          {t({ en: 'Wireframe Validation Checklist', es: 'Checklist de Validación Wireframe' })}
        </h2>

        <div className="bg-gradient-to-br from-green-950/30 to-emerald-950/30 border border-green-500/20 rounded-xl p-8">
          <p className="text-zinc-300 mb-6">
            {t({
              en: 'Before moving to high-fidelity design, validate these aspects of your wireframes:',
              es: 'Antes de pasar a diseño de alta fidelidad, valida estos aspectos de tus wireframes:'
            })}
          </p>

          <div className="space-y-4">
            {[
              {
                title: { en: 'Information Hierarchy', es: 'Jerarquía de Información' },
                items: {
                  en: [
                    'Most important content is visually prominent',
                    'Clear visual hierarchy (headings, subheadings, body)',
                    'Related content is grouped logically'
                  ],
                  es: [
                    'El contenido más importante es visualmente prominente',
                    'Jerarquía visual clara (encabezados, subencabezados, cuerpo)',
                    'Contenido relacionado está agrupado lógicamente'
                  ]
                }
              },
              {
                title: { en: 'Clarity Without Styling', es: 'Claridad Sin Estilo' },
                items: {
                  en: [
                    'Page purpose is clear from layout alone',
                    'CTAs are obvious without color',
                    'Content can be understood with placeholder text'
                  ],
                  es: [
                    'El propósito de la página es claro solo del layout',
                    'Los CTAs son obvios sin color',
                    'El contenido se puede entender con texto placeholder'
                  ]
                }
              },
              {
                title: { en: 'Navigation Clarity', es: 'Claridad de Navegación' },
                items: {
                  en: [
                    'User always knows where they are',
                    'Path to complete task is obvious',
                    'Back/forward navigation is clear'
                  ],
                  es: [
                    'El usuario siempre sabe dónde está',
                    'El camino para completar la tarea es obvio',
                    'La navegación atrás/adelante es clara'
                  ]
                }
              },
              {
                title: { en: 'Edge States', es: 'Estados Extremos' },
                items: {
                  en: [
                    'Empty state designed (what if no data?)',
                    'Error state designed (what if action fails?)',
                    'Loading state designed (what while waiting?)'
                  ],
                  es: [
                    'Estado vacío diseñado (¿qué si no hay datos?)',
                    'Estado de error diseñado (¿qué si la acción falla?)',
                    'Estado de carga diseñado (¿qué mientras espera?)'
                  ]
                }
              },
              {
                title: { en: 'Task Completion Flow', es: 'Flujo de Completado de Tarea' },
                items: {
                  en: [
                    'User can complete primary task',
                    'No dead ends or missing steps',
                    'Confirmation/success state exists'
                  ],
                  es: [
                    'El usuario puede completar la tarea principal',
                    'No hay callejones sin salida o pasos faltantes',
                    'Estado de confirmación/éxito existe'
                  ]
                }
              }
            ].map((section, idx) => (
              <div key={idx} className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
                <h3 className="font-semibold text-white mb-3">{t(section.title)}</h3>
                <ul className="space-y-2">
                  {t(section.items).map((item: string, itemIdx: number) => (
                    <li key={itemIdx} className="flex items-start gap-2 text-sm text-zinc-300">
                      <CheckCircle2 className="size-4 text-green-400 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upgrade to High-Fidelity */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-6">
          {t({ en: 'Upgrade to High-Fidelity Guide', es: 'Guía para Actualizar a Alta Fidelidad' })}
        </h2>

        <div className="bg-gradient-to-br from-indigo-950/30 to-purple-950/30 border border-indigo-500/20 rounded-xl p-8">
          <p className="text-zinc-300 mb-6">
            {t({
              en: 'Once wireframes are validated, follow these steps to convert them into high-fidelity designs:',
              es: 'Una vez que los wireframes estén validados, sigue estos pasos para convertirlos en diseños de alta fidelidad:'
            })}
          </p>

          <div className="space-y-6">
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0">
                <span className="text-indigo-400 font-bold">1</span>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2">
                  {t({ en: 'Apply Spacing & Typography Tokens', es: 'Aplicar Tokens de Espaciado y Tipografía' })}
                </h3>
                <p className="text-sm text-zinc-400 mb-2">
                  {t({
                    en: 'Replace placeholder boxes with actual spacing values from the Foundations section (8pt grid).',
                    es: 'Reemplaza cajas placeholder con valores reales de espaciado de la sección Fundamentos (grid 8pt).'
                  })}
                </p>
                <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-3 text-xs font-mono text-zinc-400">
                  space-y-6, mb-12, p-6, text-2xl, font-semibold
                </div>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0">
                <span className="text-indigo-400 font-bold">2</span>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2">
                  {t({ en: 'Replace Placeholders with UI Components', es: 'Reemplazar Placeholders con Componentes UI' })}
                </h3>
                <p className="text-sm text-zinc-400 mb-2">
                  {t({
                    en: 'Use components from the Components section instead of gray boxes.',
                    es: 'Usa componentes de la sección Componentes en lugar de cajas grises.'
                  })}
                </p>
                <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-3 text-xs font-mono text-zinc-400">
                  Gray box → Button, Card, Badge, Input, etc.
                </div>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0">
                <span className="text-indigo-400 font-bold">3</span>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2">
                  {t({ en: 'Apply Color Palette', es: 'Aplicar Paleta de Colores' })}
                </h3>
                <p className="text-sm text-zinc-400 mb-2">
                  {t({
                    en: 'Add semantic colors for different states and contexts.',
                    es: 'Agrega colores semánticos para diferentes estados y contextos.'
                  })}
                </p>
                <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-3 text-xs font-mono text-zinc-400">
                  Primary: indigo-600, Success: green-500, Error: red-500
                </div>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0">
                <span className="text-indigo-400 font-bold">4</span>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2">
                  {t({ en: 'Ensure Accessibility & Contrast', es: 'Asegurar Accesibilidad y Contraste' })}
                </h3>
                <p className="text-sm text-zinc-400 mb-2">
                  {t({
                    en: 'Verify all text meets WCAG AA contrast ratio (4.5:1 minimum).',
                    es: 'Verifica que todo el texto cumpla con el ratio de contraste WCAG AA (4.5:1 mínimo).'
                  })}
                </p>
                <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-3 text-xs font-mono text-zinc-400">
                  Check: White on Zinc-950 = 17:1 ✓
                </div>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0">
                <span className="text-indigo-400 font-bold">5</span>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2">
                  {t({ en: 'Add Micro-interactions', es: 'Agregar Micro-interacciones' })}
                </h3>
                <p className="text-sm text-zinc-400">
                  {t({
                    en: 'Add hover states, focus rings, transitions, and animations.',
                    es: 'Agrega estados hover, anillos de foco, transiciones y animaciones.'
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}