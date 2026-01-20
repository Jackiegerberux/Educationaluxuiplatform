import React, { useState } from 'react';
import { useLanguage } from '../../layout/LanguageContext';
import { Button } from '../../ui/button';
import { 
  Check, 
  X, 
  Copy, 
  Loader2,
  ExternalLink,
  ChevronRight,
  Info,
  AlertTriangle,
  CheckCircle2,
  HelpCircle,
  Menu,
  Search,
  Globe,
  Home,
  BookOpen,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

function CodeBlock({ code, language = 'tsx' }: { code: string; language?: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative bg-zinc-950 border border-zinc-800 rounded-lg overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 border-b border-zinc-800 bg-zinc-900/50">
        <span className="text-xs text-zinc-500 font-mono">{language}</span>
        <button
          onClick={handleCopy}
          className="text-xs text-zinc-400 hover:text-white flex items-center gap-1.5 transition-colors"
        >
          {copied ? (
            <>
              <Check className="size-3" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="size-3" />
              Copy
            </>
          )}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto text-sm">
        <code className="text-zinc-300 font-mono">{code}</code>
      </pre>
    </div>
  );
}

function ComponentSection({ 
  title, 
  description, 
  children 
}: { 
  title: string; 
  description: string; 
  children: React.ReactNode;
}) {
  return (
    <div className="mb-16">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-zinc-400">{description}</p>
      </div>
      {children}
    </div>
  );
}

export function DesignSystemComponents() {
  const { t } = useLanguage();

  return (
    <div className="space-y-12">
      <div className="bg-gradient-to-br from-blue-950/30 to-indigo-950/30 border border-blue-500/20 rounded-xl p-6">
        <p className="text-zinc-300 leading-relaxed">
          {t({
            en: 'This gallery showcases all UI components used across AditiDesign. Each component includes variants, states, accessibility notes, and code examples for easy reuse.',
            es: 'Esta galería muestra todos los componentes UI usados en AditiDesign. Cada componente incluye variantes, estados, notas de accesibilidad y ejemplos de código para fácil reutilización.'
          })}
        </p>
      </div>

      {/* BUTTONS */}
      <ComponentSection
        title={t({ en: '1. Buttons', es: '1. Botones' })}
        description={t({ 
          en: 'Primary interaction elements with multiple variants and states',
          es: 'Elementos de interacción primarios con múltiples variantes y estados'
        })}
      >
        {/* Variants */}
        <div className="mb-8">
          <h4 className="text-lg font-semibold text-white mb-4">Variants</h4>
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8">
            <div className="flex flex-wrap gap-4 mb-6">
              <Button variant="default">Primary Button</Button>
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="outline">Outline Button</Button>
              <Button variant="ghost">Ghost Button</Button>
              <Button variant="link">Link Button</Button>
            </div>
          </div>
        </div>

        {/* States */}
        <div className="mb-8">
          <h4 className="text-lg font-semibold text-white mb-4">States</h4>
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8">
            <div className="flex flex-wrap gap-4 mb-6">
              <Button>Default</Button>
              <Button className="hover:bg-indigo-700">Hover</Button>
              <Button disabled>Disabled</Button>
              <Button>
                <Loader2 className="size-4 animate-spin" />
                Loading
              </Button>
            </div>
          </div>
        </div>

        {/* Sizes */}
        <div className="mb-8">
          <h4 className="text-lg font-semibold text-white mb-4">Sizes</h4>
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8">
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
              <Button size="icon">
                <ChevronRight className="size-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Usage Code */}
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-white mb-4">Usage</h4>
          <CodeBlock code={`import { Button } from '@/app/components/ui/button';

// Primary CTA
<Button variant="default">Open Full Lesson</Button>

// Secondary action
<Button variant="outline">View Reference</Button>

// Icon button
<Button size="icon" variant="ghost">
  <ChevronRight className="size-4" />
</Button>

// Loading state
<Button disabled>
  <Loader2 className="size-4 animate-spin" />
  Loading...
</Button>`} />
        </div>

        {/* Guidelines */}
        <div className="bg-gradient-to-br from-green-950/30 to-emerald-950/30 border border-green-500/20 rounded-xl p-6">
          <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
            <CheckCircle2 className="size-5 text-green-400" />
            Do's & Don'ts
          </h4>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-medium text-green-400 mb-2">✓ Do:</p>
              <ul className="space-y-1 text-sm text-zinc-300">
                <li>• Use primary for main action (max 1 per section)</li>
                <li>• Add loading state for async actions</li>
                <li>• Include icons to clarify action</li>
                <li>• Make touch targets 44x44px minimum</li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-medium text-red-400 mb-2">✗ Don't:</p>
              <ul className="space-y-1 text-sm text-zinc-300">
                <li>• Use multiple primary buttons in one view</li>
                <li>• Hide button text on mobile</li>
                <li>• Rely on color alone (add icon/text)</li>
                <li>• Remove focus rings (accessibility)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Accessibility */}
        <div className="bg-gradient-to-br from-blue-950/30 to-indigo-950/30 border border-blue-500/20 rounded-xl p-6 mt-6">
          <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
            <Info className="size-5 text-blue-400" />
            Accessibility Notes
          </h4>
          <ul className="space-y-2 text-sm text-zinc-300">
            <li>• <strong className="text-white">Keyboard:</strong> Tab to focus, Enter/Space to activate</li>
            <li>• <strong className="text-white">Focus ring:</strong> Always visible (indigo-500 ring)</li>
            <li>• <strong className="text-white">Disabled state:</strong> pointer-events-none + opacity-50</li>
            <li>• <strong className="text-white">Icon-only:</strong> Add aria-label (e.g., "Close dialog")</li>
          </ul>
        </div>
      </ComponentSection>

      {/* CARDS */}
      <ComponentSection
        title={t({ en: '2. Cards', es: '2. Cards' })}
        description={t({ 
          en: 'Container components for grouping related content',
          es: 'Componentes contenedores para agrupar contenido relacionado'
        })}
      >
        {/* Lesson Card */}
        <div className="mb-8">
          <h4 className="text-lg font-semibold text-white mb-4">Lesson Card</h4>
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8">
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 hover:border-indigo-500/50 transition-all group cursor-pointer max-w-md">
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-400 border border-green-500/20">
                  Beginner
                </span>
                <span className="text-xs text-zinc-500">45min</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                UX vs UI vs Product Design
              </h3>
              <p className="text-sm text-zinc-400 mb-4">
                Understanding the differences and overlaps between design roles.
              </p>
              <div className="flex items-center gap-2 text-sm text-indigo-400">
                <span>Learn more</span>
                <ChevronRight className="size-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </div>

        {/* Content Card */}
        <div className="mb-8">
          <h4 className="text-lg font-semibold text-white mb-4">Content Card</h4>
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8">
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 max-w-md">
              <h4 className="font-semibold text-white mb-2">What is this?</h4>
              <p className="text-sm text-zinc-300 leading-relaxed">
                Usability is a quality attribute that assesses how easy user interfaces are to use.
              </p>
            </div>
          </div>
        </div>

        {/* Validation Card */}
        <div className="mb-8">
          <h4 className="text-lg font-semibold text-white mb-4">Validation Card (Good Example)</h4>
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8">
            <div className="bg-gradient-to-br from-green-950/30 to-emerald-950/30 border border-green-500/20 rounded-xl p-6 max-w-md">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center shrink-0">
                  <Check className="size-4 text-green-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Good: Clear Hierarchy</h4>
                  <p className="text-sm text-zinc-300">
                    Use size, weight, and color to create visual hierarchy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Usage Code */}
        <CodeBlock code={`// Lesson Card
<div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 
  hover:border-indigo-500/50 transition-all group cursor-pointer">
  <div className="flex items-center gap-3 mb-3">
    <span className="px-3 py-1 rounded-full text-xs font-medium 
      bg-green-500/10 text-green-400 border border-green-500/20">
      Beginner
    </span>
    <span className="text-xs text-zinc-500">45min</span>
  </div>
  <h3 className="text-lg font-semibold text-white mb-2 
    group-hover:text-indigo-400 transition-colors">
    Lesson Title
  </h3>
  <p className="text-sm text-zinc-400 mb-4">
    Description text
  </p>
  <div className="flex items-center gap-2 text-sm text-indigo-400">
    <span>Learn more</span>
    <ChevronRight className="size-4 group-hover:translate-x-1 transition-transform" />
  </div>
</div>`} />
      </ComponentSection>

      {/* BADGES */}
      <ComponentSection
        title={t({ en: '3. Badges & Tags', es: '3. Badges y Tags' })}
        description={t({ 
          en: 'Small labels for categorization and status indication',
          es: 'Etiquetas pequeñas para categorización e indicación de estado'
        })}
      >
        {/* Level Badges */}
        <div className="mb-8">
          <h4 className="text-lg font-semibold text-white mb-4">Level Badges</h4>
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8">
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-400 border border-green-500/20">
                Beginner
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-yellow-500/10 text-yellow-400 border border-yellow-500/20">
                Intermediate
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-red-500/10 text-red-400 border border-red-500/20">
                Advanced
              </span>
            </div>
          </div>
        </div>

        {/* Tool Chips */}
        <div className="mb-8">
          <h4 className="text-lg font-semibold text-white mb-4">Tool Chips</h4>
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8">
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1.5 rounded-full text-xs font-medium bg-zinc-800 text-zinc-300 border border-zinc-700">
                Figma
              </span>
              <span className="px-3 py-1.5 rounded-full text-xs font-medium bg-zinc-800 text-zinc-300 border border-zinc-700">
                UserTesting
              </span>
              <span className="px-3 py-1.5 rounded-full text-xs font-medium bg-zinc-800 text-zinc-300 border border-zinc-700">
                Maze
              </span>
            </div>
          </div>
        </div>

        {/* Status Chips */}
        <div className="mb-8">
          <h4 className="text-lg font-semibold text-white mb-4">Status Chips</h4>
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8">
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="px-3 py-1.5 rounded-full text-xs font-medium bg-green-500/10 text-green-400 border border-green-500/20 flex items-center gap-1.5">
                <CheckCircle2 className="size-3" />
                Completed
              </span>
              <span className="px-3 py-1.5 rounded-full text-xs font-medium bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 flex items-center gap-1.5">
                <Loader2 className="size-3" />
                In Progress
              </span>
            </div>
          </div>
        </div>

        {/* Usage Code */}
        <CodeBlock code={`// Level Badge
<span className="px-3 py-1 rounded-full text-xs font-medium 
  bg-green-500/10 text-green-400 border border-green-500/20">
  Beginner
</span>

// Tool Chip
<span className="px-3 py-1.5 rounded-full text-xs font-medium 
  bg-zinc-800 text-zinc-300 border border-zinc-700">
  Figma
</span>

// Status Chip with Icon
<span className="px-3 py-1.5 rounded-full text-xs font-medium 
  bg-green-500/10 text-green-400 border border-green-500/20 
  flex items-center gap-1.5">
  <CheckCircle2 className="size-3" />
  Completed
</span>`} />
      </ComponentSection>

      {/* CALLOUTS */}
      <ComponentSection
        title={t({ en: '4. Callouts & Alerts', es: '4. Callouts y Alertas' })}
        description={t({ 
          en: 'Highlighted messages for information, warnings, errors, and success states',
          es: 'Mensajes destacados para información, advertencias, errores y estados de éxito'
        })}
      >
        <div className="space-y-4 mb-8">
          {/* Info */}
          <div className="bg-gradient-to-br from-blue-950/30 to-indigo-950/30 border border-blue-500/20 rounded-xl p-6">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                <Info className="size-4 text-blue-400" />
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">Information</h4>
                <p className="text-sm text-zinc-300">
                  This is an informational message to provide context or helpful tips.
                </p>
              </div>
            </div>
          </div>

          {/* Success */}
          <div className="bg-gradient-to-br from-green-950/30 to-emerald-950/30 border border-green-500/20 rounded-xl p-6">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center shrink-0">
                <CheckCircle2 className="size-4 text-green-400" />
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">Success</h4>
                <p className="text-sm text-zinc-300">
                  Your action was completed successfully!
                </p>
              </div>
            </div>
          </div>

          {/* Warning */}
          <div className="bg-gradient-to-br from-yellow-950/30 to-orange-950/30 border border-yellow-500/20 rounded-xl p-6">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center shrink-0">
                <AlertTriangle className="size-4 text-yellow-400" />
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">Warning</h4>
                <p className="text-sm text-zinc-300">
                  Please review this information carefully before proceeding.
                </p>
              </div>
            </div>
          </div>

          {/* Error */}
          <div className="bg-gradient-to-br from-red-950/30 to-orange-950/30 border border-red-500/20 rounded-xl p-6">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center shrink-0">
                <X className="size-4 text-red-400" />
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">Error</h4>
                <p className="text-sm text-zinc-300">
                  An error occurred. Please try again or contact support.
                </p>
              </div>
            </div>
          </div>
        </div>

        <CodeBlock code={`// Info Callout
<div className="bg-gradient-to-br from-blue-950/30 to-indigo-950/30 
  border border-blue-500/20 rounded-xl p-6">
  <div className="flex items-start gap-3">
    <div className="w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500/20 
      flex items-center justify-center shrink-0">
      <Info className="size-4 text-blue-400" />
    </div>
    <div>
      <h4 className="font-semibold text-white mb-1">Title</h4>
      <p className="text-sm text-zinc-300">Message text</p>
    </div>
  </div>
</div>`} />
      </ComponentSection>

      {/* NAVIGATION */}
      <ComponentSection
        title={t({ en: '5. Navigation', es: '5. Navegación' })}
        description={t({ 
          en: 'Navigation patterns including navbar, breadcrumbs, and tabs',
          es: 'Patrones de navegación incluyendo navbar, breadcrumbs y tabs'
        })}
      >
        {/* Top Navbar */}
        <div className="mb-8">
          <h4 className="text-lg font-semibold text-white mb-4">Top Navbar</h4>
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-0 overflow-hidden">
            <div className="bg-black/50 backdrop-blur-xl border-b border-white/10 px-6 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="size-8 rounded bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                    <span className="text-white text-sm font-bold">UX</span>
                  </div>
                  <span className="font-bold text-white">AditiDesign</span>
                </div>
                <nav className="flex items-center gap-6">
                  <button className="text-sm font-medium text-white flex items-center gap-2">
                    <Home className="size-4" />
                    Home
                  </button>
                  <button className="text-sm font-medium text-zinc-400 hover:text-white flex items-center gap-2">
                    <BookOpen className="size-4" />
                    Learning Paths
                  </button>
                </nav>
                <div className="flex items-center gap-2 bg-zinc-800 rounded-full p-1">
                  <button className="px-3 py-1 rounded-full text-xs font-medium bg-zinc-600 text-white">
                    EN
                  </button>
                  <button className="px-3 py-1 rounded-full text-xs font-medium text-zinc-400">
                    ES
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Breadcrumb */}
        <div className="mb-8">
          <h4 className="text-lg font-semibold text-white mb-4">Breadcrumb</h4>
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8">
            <nav className="flex items-center gap-2 text-sm">
              <a href="#" className="text-indigo-400 hover:text-indigo-300">Home</a>
              <ChevronRight className="size-4 text-zinc-600" />
              <a href="#" className="text-indigo-400 hover:text-indigo-300">Learning Paths</a>
              <ChevronRight className="size-4 text-zinc-600" />
              <span className="text-zinc-400">UX Foundations</span>
            </nav>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-8">
          <h4 className="text-lg font-semibold text-white mb-4">Tabs Navigation</h4>
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8">
            <div className="border-b border-zinc-800">
              <nav className="flex gap-6">
                <button className="px-4 py-3 border-b-2 border-indigo-500 text-white text-sm font-medium">
                  Overview
                </button>
                <button className="px-4 py-3 border-b-2 border-transparent text-zinc-400 hover:text-white text-sm font-medium">
                  Foundations
                </button>
                <button className="px-4 py-3 border-b-2 border-transparent text-zinc-400 hover:text-white text-sm font-medium">
                  Components
                </button>
              </nav>
            </div>
          </div>
        </div>

        <CodeBlock code={`// Top Navbar
<header className="sticky top-0 z-50 border-b border-white/10 
  bg-black/50 backdrop-blur-xl">
  <div className="max-w-7xl mx-auto px-6 py-4">
    <div className="flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="size-8 rounded bg-gradient-to-br 
          from-indigo-500 to-purple-600">UX</div>
        <span className="font-bold">AditiDesign</span>
      </div>
      {/* Nav Items */}
      <nav className="flex items-center gap-6">
        <button className="text-sm font-medium text-white">
          Home
        </button>
      </nav>
    </div>
  </div>
</header>

// Breadcrumb
<nav className="flex items-center gap-2 text-sm">
  <a href="#" className="text-indigo-400">Home</a>
  <ChevronRight className="size-4 text-zinc-600" />
  <span className="text-zinc-400">Current</span>
</nav>

// Tabs
<div className="border-b border-zinc-800">
  <nav className="flex gap-6">
    <button className="px-4 py-3 border-b-2 border-indigo-500 
      text-white text-sm font-medium">
      Active Tab
    </button>
  </nav>
</div>`} />
      </ComponentSection>

      {/* MODALS & DRAWERS */}
      <ComponentSection
        title={t({ en: '6. Modals & Drawers', es: '6. Modals y Drawers' })}
        description={t({ 
          en: 'Overlay patterns for focused interactions',
          es: 'Patrones de overlay para interacciones enfocadas'
        })}
      >
        <div className="space-y-6 mb-8">
          <div className="bg-gradient-to-br from-indigo-950/30 to-purple-950/30 border border-indigo-500/20 rounded-xl p-6">
            <h4 className="font-semibold text-white mb-3">Right-Side Drawer (Preview Pattern)</h4>
            <p className="text-sm text-zinc-300 mb-4">
              Used for lesson previews. Slides in from right with backdrop blur.
            </p>
            <ul className="space-y-2 text-sm text-zinc-300">
              <li>• <strong className="text-white">Width:</strong> 540px desktop, 100vw mobile</li>
              <li>• <strong className="text-white">Animation:</strong> Spring physics (smooth slide)</li>
              <li>• <strong className="text-white">Backdrop:</strong> bg-black/60 + backdrop-blur-sm</li>
              <li>• <strong className="text-white">Close:</strong> ESC key, click outside, X button</li>
              <li>• <strong className="text-white">Scroll:</strong> Internal only (body locked)</li>
              <li>• <strong className="text-white">Focus trap:</strong> Tab cycles within drawer</li>
            </ul>
          </div>
        </div>

        <CodeBlock code={`import { motion, AnimatePresence } from 'motion/react';

// Right Drawer Pattern
<AnimatePresence>
  {/* Backdrop */}
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    onClick={onClose}
    className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
  />

  {/* Drawer */}
  <motion.div
    role="dialog"
    aria-modal="true"
    initial={{ x: '100%' }}
    animate={{ x: 0 }}
    exit={{ x: '100%' }}
    transition={{ type: 'spring', damping: 30, stiffness: 300 }}
    className="fixed right-0 top-0 bottom-0 z-50 
      w-full sm:w-[540px] bg-zinc-950 border-l border-zinc-800 
      flex flex-col"
  >
    {/* Header */}
    <div className="p-6 border-b border-zinc-800">
      <button onClick={onClose} aria-label="Close">
        <X className="size-5" />
      </button>
    </div>

    {/* Scrollable Content */}
    <div className="flex-1 overflow-y-auto p-6">
      {/* Content here */}
    </div>

    {/* Sticky Footer */}
    <div className="p-6 border-t border-zinc-800">
      <Button className="w-full">Primary Action</Button>
    </div>
  </motion.div>
</AnimatePresence>`} />

        <div className="bg-gradient-to-br from-amber-950/30 to-yellow-950/30 border border-amber-500/20 rounded-xl p-6 mt-6">
          <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
            <Info className="size-5 text-amber-400" />
            Best Practices
          </h4>
          <ul className="space-y-2 text-sm text-zinc-300">
            <li>• Always lock background scroll when modal/drawer is open</li>
            <li>• Implement focus trap to keep keyboard navigation contained</li>
            <li>• Provide multiple close methods (ESC, backdrop, close button)</li>
            <li>• Use spring physics for natural animations (not linear)</li>
            <li>• Add fade indicators for scrollable content</li>
          </ul>
        </div>
      </ComponentSection>

      {/* INPUTS */}
      <ComponentSection
        title={t({ en: '7. Input Components', es: '7. Componentes de Input' })}
        description={t({ 
          en: 'Form controls for user input',
          es: 'Controles de formulario para entrada de usuario'
        })}
      >
        {/* Search Input */}
        <div className="mb-8">
          <h4 className="text-lg font-semibold text-white mb-4">Search Input</h4>
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8">
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-zinc-500" />
              <input
                type="text"
                placeholder="Search lessons..."
                className="w-full pl-10 pr-4 py-2.5 bg-zinc-900 border border-zinc-700 rounded-lg text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>
        </div>

        {/* Language Toggle */}
        <div className="mb-8">
          <h4 className="text-lg font-semibold text-white mb-4">Language Toggle</h4>
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8">
            <div className="flex items-center bg-zinc-800 rounded-full p-1 border border-zinc-700 w-fit">
              <button className="px-3 py-1 rounded-full text-xs font-medium bg-zinc-600 text-white">
                EN
              </button>
              <button className="px-3 py-1 rounded-full text-xs font-medium text-zinc-400 hover:text-white">
                ES
              </button>
            </div>
          </div>
        </div>

        <CodeBlock code={`// Search Input
<div className="relative">
  <Search className="absolute left-3 top-1/2 -translate-y-1/2 
    size-4 text-zinc-500" />
  <input
    type="text"
    placeholder="Search..."
    className="w-full pl-10 pr-4 py-2.5 bg-zinc-900 border border-zinc-700 
      rounded-lg text-white placeholder:text-zinc-500 
      focus:outline-none focus:ring-2 focus:ring-indigo-500"
  />
</div>

// Language Toggle
<div className="flex items-center bg-zinc-800 rounded-full p-1 
  border border-zinc-700">
  <button className="px-3 py-1 rounded-full text-xs font-medium 
    bg-zinc-600 text-white">
    EN
  </button>
  <button className="px-3 py-1 rounded-full text-xs font-medium 
    text-zinc-400 hover:text-white">
    ES
  </button>
</div>`} />
      </ComponentSection>

      {/* ACCORDIONS */}
      <ComponentSection
        title={t({ en: '8. Accordions / Collapsible', es: '8. Acordeones / Colapsables' })}
        description={t({ 
          en: 'Expandable sections for progressive disclosure',
          es: 'Secciones expandibles para divulgación progresiva'
        })}
      >
        <div className="mb-8">
          <h4 className="text-lg font-semibold text-white mb-4">Accordion Example</h4>
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8">
            <div className="space-y-2 max-w-2xl">
              {/* Expanded */}
              <div className="bg-zinc-900 border border-zinc-800 rounded-lg">
                <button className="w-full flex items-center justify-between p-4 text-left">
                  <span className="font-medium text-white">Step 1: Identify the Problem</span>
                  <ChevronUp className="size-4 text-zinc-400" />
                </button>
                <div className="px-4 pb-4 text-sm text-zinc-300 border-t border-zinc-800 pt-4">
                  Start by understanding what user problem you're solving. Conduct research and define user needs clearly.
                </div>
              </div>

              {/* Collapsed */}
              <div className="bg-zinc-900 border border-zinc-800 rounded-lg">
                <button className="w-full flex items-center justify-between p-4 text-left hover:bg-zinc-800/50 transition-colors">
                  <span className="font-medium text-white">Step 2: Research & Analyze</span>
                  <ChevronDown className="size-4 text-zinc-400" />
                </button>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-lg">
                <button className="w-full flex items-center justify-between p-4 text-left hover:bg-zinc-800/50 transition-colors">
                  <span className="font-medium text-white">Step 3: Design Solution</span>
                  <ChevronDown className="size-4 text-zinc-400" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <CodeBlock code={`// Accordion Pattern
const [expanded, setExpanded] = useState<string | null>(null);

<div className="space-y-2">
  {steps.map((step) => (
    <div key={step.id} className="bg-zinc-900 border border-zinc-800 rounded-lg">
      <button
        onClick={() => setExpanded(expanded === step.id ? null : step.id)}
        className="w-full flex items-center justify-between p-4 text-left 
          hover:bg-zinc-800/50 transition-colors"
      >
        <span className="font-medium text-white">{step.title}</span>
        {expanded === step.id ? (
          <ChevronUp className="size-4 text-zinc-400" />
        ) : (
          <ChevronDown className="size-4 text-zinc-400" />
        )}
      </button>
      {expanded === step.id && (
        <div className="px-4 pb-4 text-sm text-zinc-300 
          border-t border-zinc-800 pt-4">
          {step.content}
        </div>
      )}
    </div>
  ))}
</div>`} />
      </ComponentSection>

      {/* QUIZ BLOCKS */}
      <ComponentSection
        title={t({ en: '9. Quiz Block Components', es: '9. Componentes de Bloque Quiz' })}
        description={t({ 
          en: 'Interactive quiz patterns for knowledge checks',
          es: 'Patrones de quiz interactivos para verificación de conocimiento'
        })}
      >
        <div className="mb-8">
          <h4 className="text-lg font-semibold text-white mb-4">Quiz Question Pattern</h4>
          <div className="bg-gradient-to-br from-orange-950/30 to-red-950/30 border border-orange-500/20 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <HelpCircle className="size-5 text-orange-400" />
              Knowledge Check
            </h3>
            
            <div className="bg-black/40 rounded-xl p-4 border border-orange-500/20">
              <p className="text-white font-medium mb-4">What is the primary purpose of a Design System?</p>
              
              <div className="space-y-2 mb-4">
                <button className="w-full text-left p-3 rounded-lg bg-zinc-900/50 border border-zinc-700 hover:border-orange-500/30 transition-colors text-zinc-300">
                  A) To make designs look pretty
                </button>
                <button className="w-full text-left p-3 rounded-lg bg-orange-950/50 border border-orange-500/50 text-orange-200">
                  B) To ensure consistency and reusability (Selected)
                </button>
                <button className="w-full text-left p-3 rounded-lg bg-zinc-900/50 border border-zinc-700 hover:border-orange-500/30 transition-colors text-zinc-300">
                  C) To slow down development
                </button>
                <button className="w-full text-left p-3 rounded-lg bg-zinc-900/50 border border-zinc-700 hover:border-orange-500/30 transition-colors text-zinc-300">
                  D) To replace developers
                </button>
              </div>

              <button className="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg text-sm font-medium transition-colors">
                Check Answer
              </button>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h4 className="text-lg font-semibold text-white mb-4">Quiz Feedback States</h4>
          <div className="space-y-4">
            {/* Correct */}
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
              <p className="text-sm font-semibold text-zinc-400 mb-3">Correct Answer State:</p>
              <button className="w-full text-left p-3 rounded-lg bg-green-950/50 border border-green-500/50 text-green-200 flex items-center gap-2">
                <Check className="size-4 text-green-400" />
                B) Ensure consistency and reusability ✓
              </button>
            </div>

            {/* Incorrect */}
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
              <p className="text-sm font-semibold text-zinc-400 mb-3">Incorrect Answer State:</p>
              <button className="w-full text-left p-3 rounded-lg bg-red-950/50 border border-red-500/50 text-red-200 flex items-center gap-2">
                <X className="size-4 text-red-400" />
                A) To make designs look pretty ✗
              </button>
            </div>
          </div>
        </div>

        <CodeBlock code={`// Quiz Component Pattern
const [selected, setSelected] = useState<number | null>(null);
const [showResult, setShowResult] = useState(false);

const handleCheck = () => {
  setShowResult(true);
};

<div className="bg-gradient-to-br from-orange-950/30 to-red-950/30 
  border border-orange-500/20 rounded-2xl p-8">
  <h3 className="text-xl font-semibold text-white mb-6">
    Knowledge Check
  </h3>
  
  <div className="bg-black/40 rounded-xl p-4">
    <p className="text-white font-medium mb-4">{question.text}</p>
    
    <div className="space-y-2 mb-4">
      {options.map((option, idx) => (
        <button
          key={idx}
          onClick={() => !showResult && setSelected(idx)}
          disabled={showResult}
          className={\`w-full text-left p-3 rounded-lg border transition-colors 
            \${showResult
              ? correctIndex === idx
                ? 'bg-green-950/50 border-green-500/50 text-green-200'
                : selected === idx
                ? 'bg-red-950/50 border-red-500/50 text-red-200'
                : 'bg-zinc-900/50 border-zinc-700 text-zinc-400'
              : selected === idx
              ? 'bg-orange-950/50 border-orange-500/50 text-orange-200'
              : 'bg-zinc-900/50 border-zinc-700 text-zinc-300 hover:border-orange-500/30'
            }\`}
        >
          {showResult && correctIndex === idx && (
            <Check className="size-4 text-green-400 inline mr-2" />
          )}
          {showResult && selected === idx && correctIndex !== idx && (
            <X className="size-4 text-red-400 inline mr-2" />
          )}
          {option}
        </button>
      ))}
    </div>

    {!showResult && selected !== null && (
      <button
        onClick={handleCheck}
        className="px-4 py-2 bg-orange-600 hover:bg-orange-700 
          text-white rounded-lg text-sm font-medium"
      >
        Check Answer
      </button>
    )}

    {showResult && (
      <div className="mt-4 p-3 rounded-lg bg-zinc-900/80 border border-zinc-700">
        <p className="text-sm text-zinc-300">{explanation}</p>
      </div>
    )}
  </div>
</div>`} />
      </ComponentSection>

      {/* FOOTER */}
      <ComponentSection
        title={t({ en: '10. Footer', es: '10. Footer' })}
        description={t({ 
          en: 'Bottom navigation and information section',
          es: 'Sección de navegación e información inferior'
        })}
      >
        <div className="mb-8">
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl overflow-hidden">
            <div className="bg-black border-t border-white/5 px-6 py-12">
              <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
                <div>
                  <h4 className="font-semibold text-white mb-4">AditiDesign</h4>
                  <p className="text-sm text-zinc-400">
                    Professional UX/UI learning platform
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-4">Quick Links</h4>
                  <ul className="space-y-2 text-sm">
                    <li><a href="#" className="text-zinc-400 hover:text-white">Learning Paths</a></li>
                    <li><a href="#" className="text-zinc-400 hover:text-white">Design System</a></li>
                    <li><a href="#" className="text-zinc-400 hover:text-white">Heuristics</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-4">Resources</h4>
                  <ul className="space-y-2 text-sm">
                    <li><a href="#" className="text-zinc-400 hover:text-white">Documentation</a></li>
                    <li><a href="#" className="text-zinc-400 hover:text-white">Tools</a></li>
                    <li><a href="#" className="text-zinc-400 hover:text-white">Support</a></li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-white/5 text-center text-sm text-zinc-500">
                © 2024 AditiDesign. All rights reserved.
              </div>
            </div>
          </div>
        </div>

        <CodeBlock code={`// Footer Pattern
<footer className="border-t border-white/5 bg-black px-6 py-12">
  <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
    <div>
      <h4 className="font-semibold text-white mb-4">Brand</h4>
      <p className="text-sm text-zinc-400">Description</p>
    </div>
    <div>
      <h4 className="font-semibold text-white mb-4">Links</h4>
      <ul className="space-y-2 text-sm">
        <li><a href="#" className="text-zinc-400 hover:text-white">Link</a></li>
      </ul>
    </div>
    <div>
      <h4 className="font-semibold text-white mb-4">Resources</h4>
      <ul className="space-y-2 text-sm">
        <li><a href="#" className="text-zinc-400 hover:text-white">Link</a></li>
      </ul>
    </div>
  </div>
  <div className="mt-8 pt-8 border-t border-white/5 text-center 
    text-sm text-zinc-500">
    © 2024 Brand. All rights reserved.
  </div>
</footer>`} />
      </ComponentSection>

      {/* Summary */}
      <div className="bg-gradient-to-br from-green-950/30 to-emerald-950/30 border border-green-500/20 rounded-xl p-8 text-center">
        <CheckCircle2 className="size-12 text-green-400 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-white mb-2">
          {t({ en: 'Component Library Complete', es: 'Biblioteca de Componentes Completa' })}
        </h3>
        <p className="text-zinc-400">
          {t({ 
            en: '10 component categories documented with variants, states, code examples, and accessibility notes.',
            es: '10 categorías de componentes documentadas con variantes, estados, ejemplos de código y notas de accesibilidad.'
          })}
        </p>
      </div>
    </div>
  );
}