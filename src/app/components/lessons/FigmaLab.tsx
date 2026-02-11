import React, { useState } from 'react';
import { useLanguage } from '../layout/LanguageContext';
import { motion, AnimatePresence } from 'motion/react';
import {
  PenTool,
  Layers,
  Component,
  Settings2,
  Repeat,
  Grid3X3,
  Palette,
  Unlink,
  RotateCcw,
  ChevronRight,
  Check,
  X,
  Square,
  Diamond,
  ExternalLink,
  Zap,
  BookOpen,
  Copy,
  Sun,
  Moon,
  ArrowRight,
  ArrowDown,
  Sparkles,
  Box,
  MousePointer,
  Info,
  RefreshCw,
} from 'lucide-react';
import { Tooltip, TooltipTrigger, TooltipContent } from '../ui/tooltip';
import { copyToClipboard } from '../../utils/clipboard';

// ─── Types ───────────────────────────────────────────────────

interface FigmaLearnLink {
  label: { en: string; es: string };
  url: string;
  tag?: string;
}

// ─── Figma Learn Links Data ──────────────────────────────────

const FIGMA_LEARN_LINKS: Record<string, FigmaLearnLink[]> = {
  interface: [
    { label: { en: 'Explore the Editor', es: 'Explora el Editor' }, url: 'https://help.figma.com/hc/en-us/articles/360041064174-Explore-the-Figma-editor', tag: 'Basics' },
    { label: { en: 'Keyboard Shortcuts', es: 'Atajos de Teclado' }, url: 'https://help.figma.com/hc/en-us/articles/360040328653-Use-shortcuts-and-quick-actions', tag: 'Reference' },
    { label: { en: 'Frames and Groups', es: 'Frames y Grupos' }, url: 'https://help.figma.com/hc/en-us/articles/360041539473-Frames-and-groups', tag: 'Core' },
  ],
  components: [
    { label: { en: 'Create Components', es: 'Crear Componentes' }, url: 'https://help.figma.com/hc/en-us/articles/360038662654-Guide-to-components-in-Figma', tag: 'Core' },
    { label: { en: 'Create and Use Variants', es: 'Crear y Usar Variantes' }, url: 'https://help.figma.com/hc/en-us/articles/360056440594-Create-and-use-variants', tag: 'Core' },
    { label: { en: 'Component Properties', es: 'Propiedades de Componentes' }, url: 'https://help.figma.com/hc/en-us/articles/5579474826519-Create-and-use-component-properties', tag: 'Advanced' },
    { label: { en: 'Name and Organize', es: 'Nombrar y Organizar' }, url: 'https://help.figma.com/hc/en-us/articles/360038663994-Name-and-organize-components', tag: 'Best Practice' },
  ],
  instances: [
    { label: { en: 'Create Instances', es: 'Crear Instancias' }, url: 'https://help.figma.com/hc/en-us/articles/360039150413-Create-an-instance-of-a-component', tag: 'Core' },
    { label: { en: 'Swap Instances', es: 'Intercambiar Instancias' }, url: 'https://help.figma.com/hc/en-us/articles/360039150413-Swap-between-component-instances', tag: 'Core' },
    { label: { en: 'Override Properties', es: 'Sobreescribir Propiedades' }, url: 'https://help.figma.com/hc/en-us/articles/360039150733-Apply-overrides-to-instances', tag: 'Core' },
    { label: { en: 'Reset Instances', es: 'Restablecer Instancias' }, url: 'https://help.figma.com/hc/en-us/articles/360039150733-Apply-overrides-to-instances#reset', tag: 'Tip' },
    { label: { en: 'Detach Instances', es: 'Desvincular Instancias' }, url: 'https://help.figma.com/hc/en-us/articles/360039150733-Apply-overrides-to-instances#detach', tag: 'Caution' },
  ],
  autoLayout: [
    { label: { en: 'Auto Layout Basics', es: 'Fundamentos de Auto Layout' }, url: 'https://help.figma.com/hc/en-us/articles/5731482952599-Using-auto-layout', tag: 'Core' },
    { label: { en: 'Advanced Auto Layout', es: 'Auto Layout Avanzado' }, url: 'https://help.figma.com/hc/en-us/articles/13011700694295-Advanced-auto-layout', tag: 'Advanced' },
    { label: { en: 'Auto Layout Playground', es: 'Playground de Auto Layout' }, url: 'https://www.figma.com/community/file/784448220678228461', tag: 'Practice' },
  ],
  variables: [
    { label: { en: 'Variables Overview', es: 'Vista General de Variables' }, url: 'https://help.figma.com/hc/en-us/articles/15339657135383-Guide-to-variables-in-Figma', tag: 'Core' },
    { label: { en: 'Create Variables', es: 'Crear Variables' }, url: 'https://help.figma.com/hc/en-us/articles/15145852043927-Create-and-manage-variables', tag: 'Core' },
    { label: { en: 'Variable Modes (Theming)', es: 'Modos de Variables (Temas)' }, url: 'https://help.figma.com/hc/en-us/articles/15343816063383-Modes-for-variables', tag: 'Advanced' },
    { label: { en: 'Scoping Variables', es: 'Alcance de Variables' }, url: 'https://help.figma.com/hc/en-us/articles/15339657135383-Guide-to-variables-in-Figma#scope', tag: 'Best Practice' },
  ],
};


// ─── Section Tab Component ───────────────────────────────────

type TabId = 'interface' | 'components' | 'autoLayout' | 'variables' | 'instances';

interface TabDef {
  id: TabId;
  label: { en: string; es: string };
  icon: React.ReactNode;
  color: string;
}

const TABS: TabDef[] = [
  { id: 'interface', label: { en: 'Interface', es: 'Interfaz' }, icon: <MousePointer className="size-4" />, color: 'text-sky-400 bg-sky-500/15 border-sky-500/30' },
  { id: 'components', label: { en: 'Components', es: 'Componentes' }, icon: <Component className="size-4" />, color: 'text-violet-400 bg-violet-500/15 border-violet-500/30' },
  { id: 'autoLayout', label: { en: 'Auto Layout', es: 'Auto Layout' }, icon: <Grid3X3 className="size-4" />, color: 'text-emerald-400 bg-emerald-500/15 border-emerald-500/30' },
  { id: 'variables', label: { en: 'Variables', es: 'Variables' }, icon: <Palette className="size-4" />, color: 'text-amber-400 bg-amber-500/15 border-amber-500/30' },
  { id: 'instances', label: { en: 'Instances', es: 'Instancias' }, icon: <Diamond className="size-4" />, color: 'text-pink-400 bg-pink-500/15 border-pink-500/30' },
];


// ─── Figma Learn Links Panel ─────────────────────────────────

function FigmaLearnPanel({ section }: { section: TabId }) {
  const { t } = useLanguage();
  const links = FIGMA_LEARN_LINKS[section] || [];

  const tagColors: Record<string, string> = {
    Basics: 'bg-sky-500/15 text-sky-300 border-sky-500/30',
    Core: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
    Advanced: 'bg-violet-500/15 text-violet-300 border-violet-500/30',
    Reference: 'bg-zinc-500/15 text-zinc-300 border-zinc-500/30',
    'Best Practice': 'bg-amber-500/15 text-amber-300 border-amber-500/30',
    Practice: 'bg-pink-500/15 text-pink-300 border-pink-500/30',
    Tip: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30',
    Caution: 'bg-red-500/15 text-red-300 border-red-500/30',
  };

  if (links.length === 0) return null;

  return (
    <div className="bg-zinc-950/50 border border-zinc-800 rounded-xl p-4 space-y-3">
      <div className="flex items-center gap-2">
        <BookOpen className="size-4 text-indigo-400" />
        <h5 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
          {t({ en: 'Figma Learn Resources', es: 'Recursos de Figma Learn' })}
        </h5>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {links.map((link) => (
          <a
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-3 py-2 bg-zinc-900/60 border border-zinc-800 rounded-lg hover:border-indigo-500/30 hover:bg-zinc-900 transition-all group"
          >
            <ExternalLink className="size-3.5 text-zinc-600 group-hover:text-indigo-400 transition-colors flex-shrink-0" />
            <span className="text-xs text-zinc-300 group-hover:text-white transition-colors flex-1 truncate">
              {t(link.label)}
            </span>
            {link.tag && (
              <span className={`text-[9px] font-medium px-1.5 py-0.5 rounded-full border flex-shrink-0 ${tagColors[link.tag] || tagColors.Core}`}>
                {link.tag}
              </span>
            )}
          </a>
        ))}
      </div>
    </div>
  );
}


// ─── 1. Interface Overview Demo ──────────────────────────────

function InterfaceOverviewDemo() {
  const { t } = useLanguage();
  const [activeArea, setActiveArea] = useState<string | null>(null);

  const areas = [
    {
      id: 'toolbar',
      label: { en: 'Toolbar', es: 'Barra de Herramientas' },
      desc: { en: 'Move (V), Frame (F), Shape (R), Pen (P), Text (T), Hand (H)', es: 'Mover (V), Frame (F), Forma (R), Pluma (P), Texto (T), Mano (H)' },
      position: 'top-0 left-0 right-0 h-[32px]',
      color: 'bg-sky-500/20 border-sky-500/50',
      icon: <PenTool className="size-3" />,
    },
    {
      id: 'layers',
      label: { en: 'Layers Panel', es: 'Panel de Capas' },
      desc: { en: 'Frame hierarchy, visibility, locking, search layers', es: 'Jerarquia de frames, visibilidad, bloqueo, buscar capas' },
      position: 'top-[32px] left-0 w-[90px] bottom-0',
      color: 'bg-emerald-500/20 border-emerald-500/50',
      icon: <Layers className="size-3" />,
    },
    {
      id: 'canvas',
      label: { en: 'Canvas', es: 'Lienzo' },
      desc: { en: 'Infinite workspace. Zoom: Cmd/Ctrl+scroll, Pan: Space+drag', es: 'Espacio de trabajo infinito. Zoom: Cmd/Ctrl+scroll, Pan: Espacio+arrastrar' },
      position: 'top-[32px] left-[90px] right-[110px] bottom-0',
      color: 'bg-zinc-500/10 border-zinc-600/30',
      icon: <Square className="size-3" />,
    },
    {
      id: 'properties',
      label: { en: 'Design Panel', es: 'Panel de Diseno' },
      desc: { en: 'Fill, stroke, effects, typography, Auto Layout, component properties', es: 'Relleno, trazo, efectos, tipografia, Auto Layout, propiedades de componente' },
      position: 'top-[32px] right-0 w-[110px] bottom-0',
      color: 'bg-violet-500/20 border-violet-500/50',
      icon: <Settings2 className="size-3" />,
    },
  ];

  return (
    <div className="space-y-4">
      {/* Mini Figma UI */}
      <div className="relative bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden h-[220px] sm:h-[260px]">
        {areas.map((area) => (
          <button
            key={area.id}
            onClick={() => setActiveArea(activeArea === area.id ? null : area.id)}
            className={`absolute ${area.position} border transition-all cursor-pointer ${
              activeArea === area.id
                ? `${area.color} z-10`
                : 'border-transparent hover:bg-zinc-800/30'
            }`}
          >
            <div className={`p-1.5 flex items-center gap-1 ${activeArea === area.id ? 'opacity-100' : 'opacity-40 hover:opacity-70'} transition-opacity`}>
              {area.icon}
              <span className="text-[9px] font-medium text-zinc-300 hidden sm:inline">{t(area.label)}</span>
            </div>
          </button>
        ))}

        {/* Canvas content - mini mockup */}
        <div className="absolute top-[52px] left-[110px] right-[130px] flex items-center justify-center h-[140px]">
          <div className="bg-zinc-900 border border-zinc-700 rounded-lg p-3 w-[140px] sm:w-[180px] space-y-2 shadow-xl">
            <div className="h-2 w-16 bg-zinc-700 rounded" />
            <div className="h-1.5 w-24 bg-zinc-800 rounded" />
            <div className="flex gap-1.5 mt-2">
              <div className="h-6 w-16 bg-indigo-600 rounded text-[7px] text-white flex items-center justify-center font-medium">Button</div>
              <div className="h-6 w-12 bg-zinc-800 border border-zinc-700 rounded text-[7px] text-zinc-400 flex items-center justify-center">Ghost</div>
            </div>
          </div>
        </div>
      </div>

      {/* Area detail */}
      <AnimatePresence mode="wait">
        {activeArea && (
          <motion.div
            key={activeArea}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            className="bg-zinc-900/60 border border-zinc-800 rounded-lg p-3"
          >
            <h6 className="text-sm font-semibold text-white mb-1">
              {t(areas.find(a => a.id === activeArea)!.label)}
            </h6>
            <p className="text-xs text-zinc-400 leading-relaxed">
              {t(areas.find(a => a.id === activeArea)!.desc)}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <p className="text-[10px] text-zinc-600 text-center">
        {t({ en: 'Click each area to learn more', es: 'Haz clic en cada area para aprender mas' })}
      </p>
    </div>
  );
}


// ─── Keyboard Shortcuts Reference ────────────────────────────

function KeyboardShortcutsPanel() {
  const { t } = useLanguage();
  const [copied, setCopied] = useState<string | null>(null);

  const shortcuts = [
    { key: 'V', action: { en: 'Move tool', es: 'Herramienta Mover' } },
    { key: 'F', action: { en: 'Frame tool', es: 'Herramienta Frame' } },
    { key: 'R', action: { en: 'Rectangle', es: 'Rectangulo' } },
    { key: 'T', action: { en: 'Text', es: 'Texto' } },
    { key: 'P', action: { en: 'Pen tool', es: 'Herramienta Pluma' } },
    { key: 'Shift+A', action: { en: 'Auto Layout', es: 'Auto Layout' } },
    { key: 'Ctrl+Alt+K', action: { en: 'Create Component', es: 'Crear Componente' } },
    { key: 'Ctrl+K', action: { en: 'Quick Actions', es: 'Acciones Rapidas' } },
    { key: 'Ctrl+D', action: { en: 'Duplicate', es: 'Duplicar' } },
    { key: 'Ctrl+G', action: { en: 'Group', es: 'Agrupar' } },
    { key: 'Ctrl+Alt+G', action: { en: 'Frame selection', es: 'Enmarcar seleccion' } },
    { key: 'Ctrl+Shift+H', action: { en: 'Flip horizontal', es: 'Voltear horizontal' } },
  ];

  const handleCopy = (key: string) => {
    copyToClipboard(key);
    setCopied(key);
    setTimeout(() => setCopied(null), 1500);
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
      {shortcuts.map(s => (
        <button
          key={s.key}
          onClick={() => handleCopy(s.key)}
          className="flex items-center gap-2 px-2 py-1.5 bg-zinc-950/80 border border-zinc-800 rounded-lg hover:border-zinc-700 transition-colors group text-left"
        >
          <kbd className="text-[10px] font-mono font-bold text-indigo-400 bg-zinc-800 px-1.5 py-0.5 rounded min-w-[48px] text-center border border-zinc-700">
            {s.key}
          </kbd>
          <span className="text-[10px] text-zinc-400 group-hover:text-zinc-300 transition-colors truncate flex-1">
            {t(s.action)}
          </span>
          {copied === s.key && <Check className="size-3 text-emerald-400 flex-shrink-0" />}
        </button>
      ))}
    </div>
  );
}


// ─── 2. Component Builder Demo ───────────────────────────────

type BtnSize = 'sm' | 'md' | 'lg';
type BtnVariant = 'primary' | 'secondary' | 'ghost';
type BtnState = 'default' | 'hover' | 'disabled';

interface ComponentConfig {
  size: BtnSize;
  variant: BtnVariant;
  state: BtnState;
  hasIcon: boolean;
  label: string;
}

function ComponentBuilderDemo() {
  const { t } = useLanguage();
  const [config, setConfig] = useState<ComponentConfig>({
    size: 'md',
    variant: 'primary',
    state: 'default',
    hasIcon: true,
    label: 'Submit',
  });
  const [showCode, setShowCode] = useState(false);

  const sizeStyles: Record<BtnSize, string> = {
    sm: 'text-xs px-3 py-1.5 gap-1.5 rounded-md',
    md: 'text-sm px-4 py-2 gap-2 rounded-lg',
    lg: 'text-base px-6 py-3 gap-2.5 rounded-xl',
  };

  const variantStyles: Record<BtnVariant, Record<BtnState, string>> = {
    primary: {
      default: 'bg-indigo-600 text-white hover:bg-indigo-700',
      hover: 'bg-indigo-700 text-white ring-2 ring-indigo-400/50',
      disabled: 'bg-indigo-600/40 text-white/50 cursor-not-allowed',
    },
    secondary: {
      default: 'bg-zinc-800 text-zinc-200 border border-zinc-700 hover:bg-zinc-700',
      hover: 'bg-zinc-700 text-white border border-zinc-600 ring-2 ring-zinc-400/30',
      disabled: 'bg-zinc-800/40 text-zinc-500 border border-zinc-800 cursor-not-allowed',
    },
    ghost: {
      default: 'bg-transparent text-zinc-300 hover:bg-zinc-800/50',
      hover: 'bg-zinc-800/50 text-white',
      disabled: 'bg-transparent text-zinc-600 cursor-not-allowed',
    },
  };

  const iconSizes: Record<BtnSize, string> = { sm: 'size-3', md: 'size-4', lg: 'size-5' };

  const variantCount = 3 * 3; // size x variant
  const withoutProps = variantCount * 2; // x hasIcon
  const withProps = variantCount;

  return (
    <div className="space-y-5">
      {/* Live Preview */}
      <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-6 flex items-center justify-center min-h-[80px]">
        <motion.button
          layout
          className={`font-medium flex items-center transition-colors ${sizeStyles[config.size]} ${variantStyles[config.variant][config.state]}`}
          whileTap={config.state !== 'disabled' ? { scale: 0.96 } : undefined}
        >
          {config.hasIcon && <ArrowRight className={iconSizes[config.size]} />}
          {config.label}
        </motion.button>
      </div>

      {/* Property Controls (looks like Figma Design panel) */}
      <div className="bg-zinc-900/40 border border-zinc-800 rounded-xl p-4 space-y-4">
        <div className="flex items-center gap-2 pb-2 border-b border-zinc-800">
          <Diamond className="size-4 text-violet-400" />
          <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
            {t({ en: 'Component Properties', es: 'Propiedades del Componente' })}
          </span>
        </div>

        {/* Variant: Size */}
        <div className="space-y-1.5">
          <label className="text-[11px] font-medium text-zinc-500 flex items-center gap-1">
            <span className="text-violet-400 text-[9px] px-1 py-0.5 bg-violet-500/10 border border-violet-500/20 rounded font-mono">variant</span>
            Size
          </label>
          <div className="flex gap-1">
            {(['sm', 'md', 'lg'] as BtnSize[]).map(s => (
              <button
                key={s}
                onClick={() => setConfig(c => ({ ...c, size: s }))}
                className={`flex-1 text-xs py-1.5 rounded-lg font-medium border transition-colors ${
                  config.size === s ? 'bg-violet-500/15 border-violet-500/40 text-violet-300' : 'bg-zinc-900 border-zinc-800 text-zinc-500 hover:text-zinc-300'
                }`}
              >
                {s.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Variant: Type */}
        <div className="space-y-1.5">
          <label className="text-[11px] font-medium text-zinc-500 flex items-center gap-1">
            <span className="text-violet-400 text-[9px] px-1 py-0.5 bg-violet-500/10 border border-violet-500/20 rounded font-mono">variant</span>
            Type
          </label>
          <div className="flex gap-1">
            {(['primary', 'secondary', 'ghost'] as BtnVariant[]).map(v => (
              <button
                key={v}
                onClick={() => setConfig(c => ({ ...c, variant: v }))}
                className={`flex-1 text-xs py-1.5 rounded-lg font-medium border transition-colors capitalize ${
                  config.variant === v ? 'bg-violet-500/15 border-violet-500/40 text-violet-300' : 'bg-zinc-900 border-zinc-800 text-zinc-500 hover:text-zinc-300'
                }`}
              >
                {v}
              </button>
            ))}
          </div>
        </div>

        {/* Variant: State */}
        <div className="space-y-1.5">
          <label className="text-[11px] font-medium text-zinc-500 flex items-center gap-1">
            <span className="text-violet-400 text-[9px] px-1 py-0.5 bg-violet-500/10 border border-violet-500/20 rounded font-mono">variant</span>
            State
          </label>
          <div className="flex gap-1">
            {(['default', 'hover', 'disabled'] as BtnState[]).map(st => (
              <button
                key={st}
                onClick={() => setConfig(c => ({ ...c, state: st }))}
                className={`flex-1 text-xs py-1.5 rounded-lg font-medium border transition-colors capitalize ${
                  config.state === st ? 'bg-violet-500/15 border-violet-500/40 text-violet-300' : 'bg-zinc-900 border-zinc-800 text-zinc-500 hover:text-zinc-300'
                }`}
              >
                {st}
              </button>
            ))}
          </div>
        </div>

        {/* Boolean: hasIcon */}
        <div className="flex items-center justify-between py-1">
          <label className="text-[11px] font-medium text-zinc-500 flex items-center gap-1">
            <span className="text-emerald-400 text-[9px] px-1 py-0.5 bg-emerald-500/10 border border-emerald-500/20 rounded font-mono">boolean</span>
            hasIcon
          </label>
          <button
            onClick={() => setConfig(c => ({ ...c, hasIcon: !c.hasIcon }))}
            className={`relative w-9 h-5 rounded-full transition-colors ${config.hasIcon ? 'bg-emerald-500' : 'bg-zinc-700'}`}
          >
            <div className={`absolute top-0.5 size-4 rounded-full bg-white shadow transition-transform ${config.hasIcon ? 'translate-x-4' : 'translate-x-0.5'}`} />
          </button>
        </div>

        {/* Text: label */}
        <div className="space-y-1.5">
          <label className="text-[11px] font-medium text-zinc-500 flex items-center gap-1">
            <span className="text-sky-400 text-[9px] px-1 py-0.5 bg-sky-500/10 border border-sky-500/20 rounded font-mono">text</span>
            label
          </label>
          <input
            type="text"
            value={config.label}
            onChange={e => setConfig(c => ({ ...c, label: e.target.value }))}
            className="w-full text-xs bg-zinc-950 border border-zinc-700 rounded-lg px-3 py-1.5 text-zinc-200 focus:outline-none focus:border-indigo-500/50"
          />
        </div>
      </div>

      {/* Variant Explosion Info */}
      <div className="bg-gradient-to-r from-amber-500/5 via-transparent to-transparent border border-amber-500/20 rounded-xl p-3 flex items-start gap-3">
        <Info className="size-4 text-amber-400 flex-shrink-0 mt-0.5" />
        <div className="space-y-1">
          <p className="text-xs text-zinc-300 leading-relaxed">
            <strong className="text-amber-300">{t({ en: 'Variant Explosion Prevention:', es: 'Prevencion de Explosion de Variantes:' })}</strong>
          </p>
          <p className="text-[11px] text-zinc-400 leading-relaxed">
            {t({
              en: `Without properties: ${withoutProps} variants needed (size × type × hasIcon). With boolean property: only ${withProps} variants + 1 prop. Text properties further reduce the need for variant-per-label.`,
              es: `Sin propiedades: ${withoutProps} variantes necesarias (tamano × tipo × hasIcon). Con propiedad booleana: solo ${withProps} variantes + 1 prop. Las propiedades de texto reducen aun mas la necesidad de variante-por-etiqueta.`
            })}
          </p>
        </div>
      </div>
    </div>
  );
}


// ─── 3. Auto Layout Playground ───────────────────────────────

type Direction = 'horizontal' | 'vertical';
type AlignItems = 'start' | 'center' | 'end';
type Sizing = 'hug' | 'fill';

function AutoLayoutPlayground() {
  const { t } = useLanguage();
  const [direction, setDirection] = useState<Direction>('horizontal');
  const [gap, setGap] = useState(12);
  const [padding, setPadding] = useState(16);
  const [align, setAlign] = useState<AlignItems>('center');
  const [sizing, setSizing] = useState<Sizing>('hug');
  const [itemCount, setItemCount] = useState(3);

  const items = [
    { label: 'Button', color: 'bg-indigo-600', w: 'w-16' },
    { label: 'Tag', color: 'bg-emerald-600', w: 'w-10' },
    { label: 'Avatar', color: 'bg-violet-600', w: 'w-8' },
    { label: 'Badge', color: 'bg-amber-600', w: 'w-12' },
    { label: 'Icon', color: 'bg-rose-600', w: 'w-6' },
  ];

  const cssCode = `display: flex;
flex-direction: ${direction === 'horizontal' ? 'row' : 'column'};
gap: ${gap}px;
padding: ${padding}px;
align-items: ${align === 'start' ? 'flex-start' : align === 'end' ? 'flex-end' : 'center'};
${sizing === 'fill' ? 'width: 100%;' : 'width: fit-content;'}`;

  const [copied, setCopied] = useState(false);
  const handleCopyCSS = () => {
    copyToClipboard(cssCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const alignIcon = align === 'start' ? <AlignLeft className="size-3.5" /> : align === 'center' ? <AlignCenter className="size-3.5" /> : <AlignRight className="size-3.5" />;

  return (
    <div className="space-y-5">
      {/* Preview */}
      <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-4 min-h-[140px] flex items-center justify-center overflow-auto">
        <motion.div
          layout
          className={`border-2 border-dashed border-indigo-500/40 rounded-xl bg-indigo-500/5 ${
            sizing === 'fill' ? 'w-full' : 'w-fit'
          }`}
          style={{
            display: 'flex',
            flexDirection: direction === 'horizontal' ? 'row' : 'column',
            gap: `${gap}px`,
            padding: `${padding}px`,
            alignItems: align === 'start' ? 'flex-start' : align === 'end' ? 'flex-end' : 'center',
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        >
          {items.slice(0, itemCount).map((item, i) => (
            <motion.div
              key={i}
              layout
              className={`${item.color} rounded-lg flex items-center justify-center text-[9px] font-bold text-white shadow-lg`}
              style={{ height: direction === 'horizontal' ? (20 + i * 6) : 24, minWidth: direction === 'horizontal' ? 40 + i * 10 : undefined, width: direction === 'vertical' ? (sizing === 'fill' ? '100%' : `${40 + i * 10}px`) : undefined }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            >
              {item.label}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Controls */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {/* Direction */}
        <div className="space-y-1.5">
          <label className="text-[10px] font-medium text-zinc-500 uppercase tracking-wider">
            {t({ en: 'Direction', es: 'Direccion' })}
          </label>
          <div className="flex gap-1">
            {(['horizontal', 'vertical'] as Direction[]).map(d => (
              <button
                key={d}
                onClick={() => setDirection(d)}
                className={`flex-1 text-[10px] py-1.5 rounded-lg font-medium border transition-colors ${
                  direction === d ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-300' : 'bg-zinc-900 border-zinc-800 text-zinc-500 hover:text-zinc-300'
                }`}
              >
                {d === 'horizontal' ? <span className="flex items-center justify-center gap-1"><ArrowRight className="size-3" /> Row</span> : <span className="flex items-center justify-center gap-1"><ArrowDown className="size-3" /> Col</span>}
              </button>
            ))}
          </div>
        </div>

        {/* Gap */}
        <div className="space-y-1.5">
          <label className="text-[10px] font-medium text-zinc-500 uppercase tracking-wider flex items-center justify-between">
            Gap <span className="text-zinc-400 font-mono">{gap}px</span>
          </label>
          <input
            type="range" min={0} max={40} step={4} value={gap}
            onChange={e => setGap(Number(e.target.value))}
            className="w-full accent-emerald-500 h-1 bg-zinc-800 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:size-3.5 [&::-webkit-slider-thumb]:bg-emerald-500 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer"
          />
        </div>

        {/* Padding */}
        <div className="space-y-1.5">
          <label className="text-[10px] font-medium text-zinc-500 uppercase tracking-wider flex items-center justify-between">
            Padding <span className="text-zinc-400 font-mono">{padding}px</span>
          </label>
          <input
            type="range" min={0} max={40} step={4} value={padding}
            onChange={e => setPadding(Number(e.target.value))}
            className="w-full accent-emerald-500 h-1 bg-zinc-800 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:size-3.5 [&::-webkit-slider-thumb]:bg-emerald-500 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer"
          />
        </div>

        {/* Align */}
        <div className="space-y-1.5">
          <label className="text-[10px] font-medium text-zinc-500 uppercase tracking-wider">
            {t({ en: 'Align', es: 'Alinear' })}
          </label>
          <div className="flex gap-1">
            {(['start', 'center', 'end'] as AlignItems[]).map(a => (
              <button
                key={a}
                onClick={() => setAlign(a)}
                className={`flex-1 text-[10px] py-1.5 rounded-lg font-medium border transition-colors capitalize ${
                  align === a ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-300' : 'bg-zinc-900 border-zinc-800 text-zinc-500 hover:text-zinc-300'
                }`}
              >
                {a}
              </button>
            ))}
          </div>
        </div>

        {/* Sizing */}
        <div className="space-y-1.5">
          <label className="text-[10px] font-medium text-zinc-500 uppercase tracking-wider">
            {t({ en: 'Sizing', es: 'Tamano' })}
          </label>
          <div className="flex gap-1">
            {(['hug', 'fill'] as Sizing[]).map(s => (
              <button
                key={s}
                onClick={() => setSizing(s)}
                className={`flex-1 text-[10px] py-1.5 rounded-lg font-medium border transition-colors ${
                  sizing === s ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-300' : 'bg-zinc-900 border-zinc-800 text-zinc-500 hover:text-zinc-300'
                }`}
              >
                {s === 'hug' ? 'Hug' : 'Fill'}
              </button>
            ))}
          </div>
        </div>

        {/* Item Count */}
        <div className="space-y-1.5">
          <label className="text-[10px] font-medium text-zinc-500 uppercase tracking-wider flex items-center justify-between">
            Items <span className="text-zinc-400 font-mono">{itemCount}</span>
          </label>
          <input
            type="range" min={1} max={5} step={1} value={itemCount}
            onChange={e => setItemCount(Number(e.target.value))}
            className="w-full accent-emerald-500 h-1 bg-zinc-800 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:size-3.5 [&::-webkit-slider-thumb]:bg-emerald-500 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer"
          />
        </div>
      </div>

      {/* CSS Output */}
      <div className="bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden">
        <div className="flex items-center justify-between px-3 py-2 border-b border-zinc-800">
          <div className="flex items-center gap-2">
            <span className="text-[9px] font-mono text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">CSS</span>
            <span className="text-[10px] text-zinc-500">
              {t({ en: 'Equivalent CSS Flexbox', es: 'CSS Flexbox Equivalente' })}
            </span>
          </div>
          <button onClick={handleCopyCSS} className="text-zinc-500 hover:text-zinc-300 transition-colors">
            {copied ? <Check className="size-3.5 text-emerald-400" /> : <Copy className="size-3.5" />}
          </button>
        </div>
        <pre className="p-3 text-[11px] font-mono text-zinc-300 leading-relaxed overflow-x-auto">
          {cssCode}
        </pre>
      </div>

      {/* Mapping Reference */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {[
          { figma: 'Direction', css: 'flex-direction' },
          { figma: 'Gap', css: 'gap' },
          { figma: 'Padding', css: 'padding' },
          { figma: 'Hug contents', css: 'fit-content' },
          { figma: 'Fill container', css: 'flex: 1' },
          { figma: 'Alignment', css: 'align-items' },
        ].map(m => (
          <div key={m.figma} className="bg-zinc-900/40 border border-zinc-800 rounded-lg px-2.5 py-2 flex items-center gap-2">
            <span className="text-[10px] font-medium text-zinc-300">{m.figma}</span>
            <ArrowRight className="size-3 text-zinc-600 flex-shrink-0" />
            <code className="text-[10px] font-mono text-emerald-400">{m.css}</code>
          </div>
        ))}
      </div>
    </div>
  );
}


// ─── 4. Variables & Tokens Demo ──────────────────────────────

interface TokenValue {
  name: string;
  primitive: string;
  light: string;
  dark: string;
  hex: { light: string; dark: string };
}

const TOKENS: TokenValue[] = [
  { name: 'bg-primary', primitive: 'white / gray-950', light: '#FFFFFF', dark: '#09090B', hex: { light: '#FFFFFF', dark: '#09090B' } },
  { name: 'bg-secondary', primitive: 'gray-100 / gray-900', light: '#F4F4F5', dark: '#18181B', hex: { light: '#F4F4F5', dark: '#18181B' } },
  { name: 'text-primary', primitive: 'gray-900 / gray-50', light: '#18181B', dark: '#FAFAFA', hex: { light: '#18181B', dark: '#FAFAFA' } },
  { name: 'text-secondary', primitive: 'gray-500 / gray-400', light: '#71717A', dark: '#A1A1AA', hex: { light: '#71717A', dark: '#A1A1AA' } },
  { name: 'accent', primitive: 'indigo-600 / indigo-400', light: '#4F46E5', dark: '#818CF8', hex: { light: '#4F46E5', dark: '#818CF8' } },
  { name: 'border-default', primitive: 'gray-200 / gray-800', light: '#E4E4E7', dark: '#27272A', hex: { light: '#E4E4E7', dark: '#27272A' } },
  { name: 'success', primitive: 'emerald-600 / emerald-400', light: '#059669', dark: '#34D399', hex: { light: '#059669', dark: '#34D399' } },
  { name: 'error', primitive: 'red-600 / red-400', light: '#DC2626', dark: '#F87171', hex: { light: '#DC2626', dark: '#F87171' } },
];

function VariablesTokensDemo() {
  const { t } = useLanguage();
  const [mode, setMode] = useState<'light' | 'dark'>('light');
  const [highlightToken, setHighlightToken] = useState<string | null>(null);

  const getTokenColor = (token: TokenValue) => mode === 'light' ? token.hex.light : token.hex.dark;
  const bg = mode === 'light' ? TOKENS[0].hex.light : TOKENS[0].hex.dark;
  const bgSec = mode === 'light' ? TOKENS[1].hex.light : TOKENS[1].hex.dark;
  const textPrimary = mode === 'light' ? TOKENS[2].hex.light : TOKENS[2].hex.dark;
  const textSecondary = mode === 'light' ? TOKENS[3].hex.light : TOKENS[3].hex.dark;
  const accent = mode === 'light' ? TOKENS[4].hex.light : TOKENS[4].hex.dark;
  const border = mode === 'light' ? TOKENS[5].hex.light : TOKENS[5].hex.dark;

  return (
    <div className="space-y-5">
      {/* Mode Switcher */}
      <div className="flex items-center justify-center gap-2">
        <button
          onClick={() => setMode('light')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium border transition-all ${
            mode === 'light' ? 'bg-amber-500/15 border-amber-500/40 text-amber-300' : 'bg-zinc-900 border-zinc-800 text-zinc-500 hover:text-zinc-300'
          }`}
        >
          <Sun className="size-4" /> Light
        </button>
        <button
          onClick={() => setMode('dark')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium border transition-all ${
            mode === 'dark' ? 'bg-indigo-500/15 border-indigo-500/40 text-indigo-300' : 'bg-zinc-900 border-zinc-800 text-zinc-500 hover:text-zinc-300'
          }`}
        >
          <Moon className="size-4" /> Dark
        </button>
      </div>

      {/* Live Preview Card */}
      <motion.div
        layout
        className="rounded-xl border overflow-hidden shadow-xl transition-colors"
        style={{ background: bg, borderColor: border }}
      >
        {/* Card header */}
        <div className="px-4 py-3 border-b flex items-center justify-between" style={{ borderColor: border, background: bgSec }}>
          <div className="flex items-center gap-2">
            <div className="size-8 rounded-full flex items-center justify-center text-white text-xs font-bold" style={{ background: accent }}>
              U
            </div>
            <div>
              <p className="text-sm font-semibold" style={{ color: textPrimary }}>User Profile</p>
              <p className="text-[10px]" style={{ color: textSecondary }}>Online</p>
            </div>
          </div>
          <button className="text-xs font-medium px-3 py-1.5 rounded-lg text-white" style={{ background: accent }}>
            Edit
          </button>
        </div>
        {/* Card body */}
        <div className="px-4 py-3 space-y-2">
          <p className="text-xs" style={{ color: textSecondary }}>
            {t({ en: 'This card uses semantic tokens that automatically adapt to the selected mode.', es: 'Esta tarjeta usa tokens semanticos que se adaptan automaticamente al modo seleccionado.' })}
          </p>
          <div className="flex gap-2">
            <span className="text-[10px] font-medium px-2 py-1 rounded-md border" style={{ borderColor: border, color: TOKENS[6].hex[mode], background: TOKENS[6].hex[mode] + '15' }}>
              {t({ en: 'Active', es: 'Activo' })}
            </span>
            <span className="text-[10px] font-medium px-2 py-1 rounded-md border" style={{ borderColor: border, color: TOKENS[7].hex[mode], background: TOKENS[7].hex[mode] + '15' }}>
              {t({ en: '2 Errors', es: '2 Errores' })}
            </span>
          </div>
        </div>
      </motion.div>

      {/* Token Table */}
      <div className="bg-zinc-950/50 border border-zinc-800 rounded-xl overflow-hidden">
        <div className="px-3 py-2 border-b border-zinc-800 flex items-center gap-2">
          <Palette className="size-3.5 text-amber-400" />
          <span className="text-[10px] font-semibold text-zinc-400 uppercase tracking-wider">
            {t({ en: 'Semantic Tokens', es: 'Tokens Semanticos' })}
          </span>
          <span className="ml-auto text-[9px] text-zinc-600">
            {t({ en: 'Mode:', es: 'Modo:' })} <span className="text-zinc-400">{mode === 'light' ? 'Light' : 'Dark'}</span>
          </span>
        </div>
        <div className="divide-y divide-zinc-800/50">
          {TOKENS.map(token => (
            <div
              key={token.name}
              className={`flex items-center gap-3 px-3 py-2 transition-colors ${highlightToken === token.name ? 'bg-amber-500/5' : 'hover:bg-zinc-900/50'}`}
              onMouseEnter={() => setHighlightToken(token.name)}
              onMouseLeave={() => setHighlightToken(null)}
            >
              <div className="size-5 rounded border border-zinc-700 flex-shrink-0 shadow-inner" style={{ background: getTokenColor(token) }} />
              <code className="text-[10px] font-mono text-amber-400/80 flex-1">{token.name}</code>
              <span className="text-[9px] text-zinc-600 font-mono hidden sm:inline">{token.primitive}</span>
              <span className="text-[9px] font-mono text-zinc-500 w-16 text-right">{getTokenColor(token)}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Explanation */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        <div className="bg-zinc-900/40 border border-zinc-800 rounded-lg p-3 space-y-1">
          <p className="text-[10px] font-semibold text-zinc-400 uppercase tracking-wider">
            {t({ en: 'Primitive Collection', es: 'Coleccion Primitiva' })}
          </p>
          <p className="text-[11px] text-zinc-500 leading-relaxed">
            {t({ en: 'Raw color values: gray-50, gray-100 ... gray-950, indigo-400, indigo-600, etc.', es: 'Valores de color crudos: gray-50, gray-100 ... gray-950, indigo-400, indigo-600, etc.' })}
          </p>
        </div>
        <div className="bg-zinc-900/40 border border-zinc-800 rounded-lg p-3 space-y-1">
          <p className="text-[10px] font-semibold text-zinc-400 uppercase tracking-wider">
            {t({ en: 'Semantic Collection', es: 'Coleccion Semantica' })}
          </p>
          <p className="text-[11px] text-zinc-500 leading-relaxed">
            {t({ en: 'Aliases with purpose: bg-primary, text-primary, accent. Each has Light + Dark modes pointing to different primitives.', es: 'Alias con proposito: bg-primary, text-primary, accent. Cada uno tiene modos Claro + Oscuro apuntando a diferentes primitivos.' })}
          </p>
        </div>
      </div>
    </div>
  );
}


// ─── 5. Instance Management Demo ─────────────────────────────

interface InstanceState {
  id: string;
  label: string;
  isInstance: boolean;
  overrides: { text?: string; color?: string; iconVisible?: boolean };
  baseText: string;
  baseColor: string;
}

function InstanceManagementDemo() {
  const { t } = useLanguage();

  const defaultBase = {
    baseText: 'Submit',
    baseColor: '#4F46E5', // indigo-600
  };

  const [instances, setInstances] = useState<InstanceState[]>([
    { id: '1', label: 'Instance A', isInstance: true, overrides: {}, ...defaultBase },
    { id: '2', label: 'Instance B', isInstance: true, overrides: { text: 'Buy Now' }, ...defaultBase },
    { id: '3', label: 'Instance C', isInstance: true, overrides: { color: '#059669', text: 'Confirm' }, ...defaultBase },
  ]);

  const [mainText, setMainText] = useState('Submit');
  const [mainColor, setMainColor] = useState('#4F46E5');
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [lastAction, setLastAction] = useState<string | null>(null);

  const showAction = (msg: string) => {
    setLastAction(msg);
    setTimeout(() => setLastAction(null), 2500);
  };

  const handleMainUpdate = () => {
    setInstances(prev => prev.map(inst => ({
      ...inst,
      baseText: mainText,
      baseColor: mainColor,
    })));
    showAction(t({ en: 'Main component updated! Changes propagated to all instances.', es: 'Componente principal actualizado! Cambios propagados a todas las instancias.' }));
  };

  const handleOverrideText = (id: string, text: string) => {
    setInstances(prev => prev.map(inst =>
      inst.id === id ? { ...inst, overrides: { ...inst.overrides, text: text || undefined } } : inst
    ));
  };

  const handleOverrideColor = (id: string, color: string) => {
    setInstances(prev => prev.map(inst =>
      inst.id === id ? { ...inst, overrides: { ...inst.overrides, color } } : inst
    ));
  };

  const handleReset = (id: string) => {
    setInstances(prev => prev.map(inst =>
      inst.id === id ? { ...inst, overrides: {}, isInstance: true } : inst
    ));
    showAction(t({ en: 'Instance reset! All overrides removed.', es: 'Instancia restablecida! Todas las sobreescrituras eliminadas.' }));
  };

  const handleDetach = (id: string) => {
    setInstances(prev => prev.map(inst =>
      inst.id === id ? { ...inst, isInstance: false } : inst
    ));
    showAction(t({ en: 'Instance detached! No longer linked to main component.', es: 'Instancia desvinculada! Ya no esta enlazada al componente principal.' }));
  };

  const handleSwap = (id: string) => {
    setInstances(prev => prev.map(inst => {
      if (inst.id !== id) return inst;
      const shapes = ['Submit', 'Cancel', 'Delete', 'Save'];
      const colors = ['#4F46E5', '#059669', '#DC2626', '#D97706'];
      const nextIdx = (shapes.indexOf(inst.baseText) + 1) % shapes.length;
      return { ...inst, baseText: shapes[nextIdx], baseColor: colors[nextIdx], overrides: {} };
    }));
    showAction(t({ en: 'Instance swapped to different component!', es: 'Instancia intercambiada a componente diferente!' }));
  };

  const getDisplayText = (inst: InstanceState) => inst.overrides.text || inst.baseText;
  const getDisplayColor = (inst: InstanceState) => inst.overrides.color || inst.baseColor;
  const hasOverrides = (inst: InstanceState) => Object.values(inst.overrides).some(v => v !== undefined);

  return (
    <div className="space-y-5">
      {/* Main Component */}
      <div className="bg-zinc-900/60 border-2 border-violet-500/30 rounded-xl p-4 space-y-3">
        <div className="flex items-center gap-2">
          <Diamond className="size-4 text-violet-400 fill-violet-400" />
          <span className="text-xs font-semibold text-violet-300 uppercase tracking-wider">
            {t({ en: 'Main Component', es: 'Componente Principal' })}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <motion.button
            layout
            className="px-4 py-2 rounded-lg text-sm font-medium text-white transition-colors"
            style={{ background: mainColor }}
          >
            {mainText}
          </motion.button>

          <div className="flex-1 flex gap-2 items-center">
            <input
              type="text" value={mainText}
              onChange={e => setMainText(e.target.value)}
              className="text-xs bg-zinc-950 border border-zinc-700 rounded-lg px-2 py-1.5 text-zinc-200 focus:outline-none focus:border-violet-500/50 w-24"
              placeholder="Label"
            />
            <input
              type="color" value={mainColor}
              onChange={e => setMainColor(e.target.value)}
              className="size-7 bg-transparent border border-zinc-700 rounded cursor-pointer"
            />
            <button
              onClick={handleMainUpdate}
              className="text-xs px-3 py-1.5 bg-violet-600 hover:bg-violet-700 text-white rounded-lg transition-colors flex items-center gap-1.5 font-medium"
            >
              <RefreshCw className="size-3" />
              {t({ en: 'Push Update', es: 'Propagar' })}
            </button>
          </div>
        </div>
      </div>

      {/* Arrow */}
      <div className="flex justify-center">
        <div className="flex flex-col items-center gap-0.5 text-zinc-600">
          <ArrowDown className="size-4" />
          <span className="text-[9px] font-medium">
            {t({ en: 'propagates to', es: 'se propaga a' })}
          </span>
        </div>
      </div>

      {/* Instances Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {instances.map(inst => (
          <div
            key={inst.id}
            className={`border rounded-xl p-3 space-y-3 transition-all cursor-pointer ${
              !inst.isInstance
                ? 'bg-zinc-900/30 border-red-500/30 border-dashed'
                : selectedId === inst.id
                  ? 'bg-zinc-900/60 border-indigo-500/40'
                  : 'bg-zinc-900/30 border-zinc-800 hover:border-zinc-700'
            }`}
            onClick={() => setSelectedId(selectedId === inst.id ? null : inst.id)}
          >
            {/* Instance header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                {inst.isInstance ? (
                  <Diamond className="size-3 text-indigo-400" />
                ) : (
                  <Unlink className="size-3 text-red-400" />
                )}
                <span className="text-[10px] font-semibold text-zinc-400">{inst.label}</span>
              </div>
              {hasOverrides(inst) && inst.isInstance && (
                <span className="text-[8px] font-medium px-1.5 py-0.5 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30">
                  {t({ en: 'overridden', es: 'sobreescrito' })}
                </span>
              )}
              {!inst.isInstance && (
                <span className="text-[8px] font-medium px-1.5 py-0.5 rounded-full bg-red-500/15 text-red-300 border border-red-500/30">
                  {t({ en: 'detached', es: 'desvinculado' })}
                </span>
              )}
            </div>

            {/* Button preview */}
            <div className="flex justify-center py-2">
              <motion.div
                layout
                className="px-4 py-2 rounded-lg text-xs font-medium text-white transition-colors"
                style={{ background: getDisplayColor(inst) }}
              >
                {getDisplayText(inst)}
              </motion.div>
            </div>

            {/* Actions */}
            <AnimatePresence>
              {selectedId === inst.id && inst.isInstance && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden space-y-2 pt-2 border-t border-zinc-800"
                >
                  {/* Override text */}
                  <div className="space-y-1">
                    <label className="text-[9px] text-zinc-600 font-medium">
                      {t({ en: 'Override Text', es: 'Sobreescribir Texto' })}
                    </label>
                    <input
                      type="text"
                      value={inst.overrides.text || ''}
                      onChange={e => handleOverrideText(inst.id, e.target.value)}
                      placeholder={inst.baseText}
                      className="w-full text-[10px] bg-zinc-950 border border-zinc-700 rounded-md px-2 py-1 text-zinc-200 focus:outline-none focus:border-indigo-500/50"
                      onClick={e => e.stopPropagation()}
                    />
                  </div>
                  {/* Override color */}
                  <div className="flex items-center gap-2">
                    <label className="text-[9px] text-zinc-600 font-medium flex-1">
                      {t({ en: 'Override Color', es: 'Sobreescribir Color' })}
                    </label>
                    <input
                      type="color"
                      value={getDisplayColor(inst)}
                      onChange={e => { e.stopPropagation(); handleOverrideColor(inst.id, e.target.value); }}
                      className="size-5 bg-transparent border border-zinc-700 rounded cursor-pointer"
                      onClick={e => e.stopPropagation()}
                    />
                  </div>
                  {/* Action buttons */}
                  <div className="flex gap-1.5 pt-1">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <button onClick={e => { e.stopPropagation(); handleReset(inst.id); }} className="flex-1 text-[9px] py-1.5 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-zinc-300 rounded-md transition-colors flex items-center justify-center gap-1">
                          <RotateCcw className="size-3" />
                          {t({ en: 'Reset', es: 'Reset' })}
                        </button>
                      </TooltipTrigger>
                      <TooltipContent>{t({ en: 'Remove all overrides', es: 'Eliminar todas las sobreescrituras' })}</TooltipContent>
                    </Tooltip>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <button onClick={e => { e.stopPropagation(); handleSwap(inst.id); }} className="flex-1 text-[9px] py-1.5 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-zinc-300 rounded-md transition-colors flex items-center justify-center gap-1">
                          <Repeat className="size-3" />
                          {t({ en: 'Swap', es: 'Swap' })}
                        </button>
                      </TooltipTrigger>
                      <TooltipContent>{t({ en: 'Swap to another component', es: 'Intercambiar a otro componente' })}</TooltipContent>
                    </Tooltip>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <button onClick={e => { e.stopPropagation(); handleDetach(inst.id); }} className="flex-1 text-[9px] py-1.5 bg-red-950/50 hover:bg-red-900/40 border border-red-500/30 text-red-300 rounded-md transition-colors flex items-center justify-center gap-1">
                          <Unlink className="size-3" />
                          {t({ en: 'Detach', es: 'Desvincular' })}
                        </button>
                      </TooltipTrigger>
                      <TooltipContent>{t({ en: 'Break link to main component (caution!)', es: 'Romper enlace al componente principal (cuidado!)' })}</TooltipContent>
                    </Tooltip>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {/* Action feedback */}
      <AnimatePresence>
        {lastAction && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            className="bg-indigo-500/10 border border-indigo-500/20 rounded-lg px-3 py-2 text-xs text-indigo-300 text-center"
          >
            {lastAction}
          </motion.div>
        )}
      </AnimatePresence>

      <p className="text-[10px] text-zinc-600 text-center">
        {t({ en: 'Click instances to override, reset, swap, or detach. Push updates from the main component.', es: 'Haz clic en las instancias para sobreescribir, restablecer, intercambiar o desvincular. Propaga actualizaciones desde el componente principal.' })}
      </p>
    </div>
  );
}


// ─── Naming Convention Demo ──────────────────────────────────

function NamingConventionDemo() {
  const { t } = useLanguage();

  const tree = [
    { level: 0, name: 'Button', icon: '📁', isFolder: true },
    { level: 1, name: 'Primary', icon: '📁', isFolder: true },
    { level: 2, name: 'Small', icon: '◆', isFolder: false },
    { level: 2, name: 'Medium', icon: '◆', isFolder: false },
    { level: 2, name: 'Large', icon: '◆', isFolder: false },
    { level: 1, name: 'Secondary', icon: '📁', isFolder: true },
    { level: 2, name: 'Small', icon: '◆', isFolder: false },
    { level: 2, name: 'Medium', icon: '◆', isFolder: false },
    { level: 1, name: 'Ghost', icon: '📁', isFolder: true },
    { level: 2, name: 'Small', icon: '◆', isFolder: false },
    { level: 2, name: 'Medium', icon: '◆', isFolder: false },
  ];

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Good naming */}
        <div className="space-y-2">
          <div className="flex items-center gap-1.5">
            <Check className="size-3.5 text-emerald-400" />
            <span className="text-[11px] font-semibold text-emerald-300">
              {t({ en: 'Slash Naming (Auto-groups)', es: 'Nomenclatura con Barras (Auto-agrupa)' })}
            </span>
          </div>
          <div className="bg-zinc-950 border border-emerald-500/20 rounded-lg p-3 space-y-1 font-mono text-[10px]">
            {tree.map((item, i) => (
              <div key={i} className="flex items-center gap-1.5" style={{ paddingLeft: `${item.level * 16}px` }}>
                <span className="text-[9px]">{item.icon}</span>
                <span className={item.isFolder ? 'text-zinc-400 font-medium' : 'text-violet-400'}>{item.name}</span>
              </div>
            ))}
          </div>
          <code className="text-[9px] text-zinc-600 block">Button/Primary/Small</code>
        </div>

        {/* Bad naming */}
        <div className="space-y-2">
          <div className="flex items-center gap-1.5">
            <X className="size-3.5 text-red-400" />
            <span className="text-[11px] font-semibold text-red-300">
              {t({ en: 'Flat Naming (No structure)', es: 'Nomenclatura Plana (Sin estructura)' })}
            </span>
          </div>
          <div className="bg-zinc-950 border border-red-500/20 rounded-lg p-3 space-y-1 font-mono text-[10px]">
            {['btn-primary-sm', 'btn-primary-md', 'btn-primary-lg', 'btn-secondary-sm', 'btn-secondary-md', 'btn-ghost-sm', 'btn-ghost-md', 'button-v2', 'button-FINAL', 'Button copy', 'old-button'].map(name => (
              <div key={name} className="flex items-center gap-1.5">
                <span className="text-[9px]">◆</span>
                <span className="text-red-400/70">{name}</span>
              </div>
            ))}
          </div>
          <code className="text-[9px] text-zinc-600 block">btn-primary-sm (no grouping)</code>
        </div>
      </div>
    </div>
  );
}


// ─── Step-by-Step Component Creation Guide ───────────────────

function StepByStepGuide() {
  const { t } = useLanguage();
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: { en: 'Design the Element', es: 'Disena el Elemento' },
      desc: { en: 'Create a frame with Auto Layout. Add a rectangle background, text layer, and optional icon. Style it with fills, corner radius, and padding.', es: 'Crea un frame con Auto Layout. Agrega un rectangulo de fondo, capa de texto e icono opcional. Estilizalo con rellenos, radio de esquinas y padding.' },
      visual: 'design',
      shortcut: 'Shift+A → Auto Layout',
    },
    {
      title: { en: 'Create Component', es: 'Crear Componente' },
      desc: { en: 'Select the frame and press Cmd/Ctrl+Alt+K. The layer icon changes from a frame (##) to a diamond (◆). This is now your Main Component.', es: 'Selecciona el frame y presiona Cmd/Ctrl+Alt+K. El icono de capa cambia de frame (##) a diamante (◆). Este es ahora tu Componente Principal.' },
      visual: 'component',
      shortcut: 'Cmd+Alt+K',
    },
    {
      title: { en: 'Add Variants', es: 'Agregar Variantes' },
      desc: { en: 'In the Design panel, click "+" next to "Variants". Add properties like Size and State. Duplicate the component to create each variant combination and adjust styles.', es: 'En el panel Diseno, haz clic en "+" junto a "Variantes". Agrega propiedades como Tamano y Estado. Duplica el componente para crear cada combinacion de variantes y ajusta estilos.' },
      visual: 'variants',
      shortcut: '+ button in Design panel',
    },
    {
      title: { en: 'Add Properties', es: 'Agregar Propiedades' },
      desc: { en: 'Add boolean (hasIcon), text (label), and instance swap (iconSlot) properties. These reduce the number of variants needed.', es: 'Agrega propiedades booleanas (hasIcon), de texto (label), e intercambio de instancia (iconSlot). Estas reducen el numero de variantes necesarias.' },
      visual: 'properties',
      shortcut: 'Component Properties section',
    },
    {
      title: { en: 'Apply Variables', es: 'Aplicar Variables' },
      desc: { en: 'Replace hardcoded fills with variables: background → accent, text → text-on-accent, border → border-default. Now theme switching works automatically.', es: 'Reemplaza rellenos hardcodeados con variables: background → accent, text → text-on-accent, border → border-default. Ahora el cambio de tema funciona automaticamente.' },
      visual: 'variables',
      shortcut: 'Click fill → Variables icon',
    },
    {
      title: { en: 'Use Instances', es: 'Usar Instancias' },
      desc: { en: 'Drag from Assets panel to your designs. Override text and toggle properties per instance. Changes to the Main Component propagate everywhere.', es: 'Arrastra desde el panel Assets a tus disenos. Sobreescribe texto y alterna propiedades por instancia. Los cambios al Componente Principal se propagan a todas partes.' },
      visual: 'instances',
      shortcut: 'Drag from Assets panel',
    },
  ];

  const stepVisuals: Record<string, React.ReactNode> = {
    design: (
      <div className="flex items-center gap-2 p-3 bg-zinc-800/50 rounded-lg border border-dashed border-zinc-600">
        <div className="size-8 bg-indigo-600 rounded-lg" />
        <div className="space-y-1">
          <div className="h-2 w-12 bg-zinc-500 rounded" />
          <div className="h-1.5 w-8 bg-zinc-600 rounded" />
        </div>
      </div>
    ),
    component: (
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1.5 text-zinc-500">
          <Square className="size-4" />
          <span className="text-[10px]">Frame</span>
        </div>
        <ArrowRight className="size-4 text-zinc-600" />
        <div className="flex items-center gap-1.5 text-violet-400">
          <Diamond className="size-4 fill-violet-400" />
          <span className="text-[10px] font-semibold">Component</span>
        </div>
      </div>
    ),
    variants: (
      <div className="flex gap-1.5">
        {['S', 'M', 'L'].map(s => (
          <div key={s} className={`rounded-lg flex items-center justify-center font-bold text-white ${
            s === 'S' ? 'px-2 py-1 text-[8px] bg-indigo-600' : s === 'M' ? 'px-3 py-1.5 text-[10px] bg-indigo-600' : 'px-4 py-2 text-xs bg-indigo-600'
          }`}>
            {s}
          </div>
        ))}
      </div>
    ),
    properties: (
      <div className="space-y-1.5">
        <div className="flex items-center gap-2 text-[9px]">
          <span className="text-emerald-400 bg-emerald-500/10 px-1 rounded font-mono">bool</span>
          <span className="text-zinc-400">hasIcon = true</span>
        </div>
        <div className="flex items-center gap-2 text-[9px]">
          <span className="text-sky-400 bg-sky-500/10 px-1 rounded font-mono">text</span>
          <span className="text-zinc-400">label = "Submit"</span>
        </div>
        <div className="flex items-center gap-2 text-[9px]">
          <span className="text-pink-400 bg-pink-500/10 px-1 rounded font-mono">swap</span>
          <span className="text-zinc-400">icon = ArrowRight</span>
        </div>
      </div>
    ),
    variables: (
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1">
          <div className="size-3 rounded-sm bg-indigo-600" />
          <span className="text-[9px] text-zinc-500">#4F46E5</span>
        </div>
        <ArrowRight className="size-3 text-zinc-600" />
        <div className="flex items-center gap-1">
          <Palette className="size-3 text-amber-400" />
          <code className="text-[9px] text-amber-400 font-mono">accent</code>
        </div>
      </div>
    ),
    instances: (
      <div className="flex items-center gap-2">
        <Diamond className="size-3.5 text-violet-400 fill-violet-400" />
        <ArrowRight className="size-3 text-zinc-600" />
        {['A', 'B', 'C'].map(i => (
          <Diamond key={i} className="size-3 text-indigo-400" />
        ))}
      </div>
    ),
  };

  return (
    <div className="space-y-4">
      {/* Step indicators */}
      <div className="flex gap-1">
        {steps.map((step, i) => (
          <button
            key={i}
            onClick={() => setActiveStep(i)}
            className={`flex-1 py-2 rounded-lg text-[10px] font-medium border transition-all ${
              activeStep === i
                ? 'bg-indigo-500/15 border-indigo-500/40 text-indigo-300'
                : i < activeStep
                  ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'
                  : 'bg-zinc-900 border-zinc-800 text-zinc-600 hover:text-zinc-400'
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>

      {/* Active step content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -10 }}
          transition={{ duration: 0.15 }}
          className="bg-zinc-900/40 border border-zinc-800 rounded-xl p-4 space-y-3"
        >
          <div className="flex items-start justify-between gap-3">
            <div className="space-y-1 flex-1">
              <h6 className="text-sm font-semibold text-white flex items-center gap-2">
                <span className="text-[10px] text-indigo-400 bg-indigo-500/15 border border-indigo-500/30 rounded-full size-5 flex items-center justify-center font-bold">
                  {activeStep + 1}
                </span>
                {t(steps[activeStep].title)}
              </h6>
              <p className="text-xs text-zinc-400 leading-relaxed">
                {t(steps[activeStep].desc)}
              </p>
            </div>
          </div>

          {/* Visual */}
          <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-4 flex items-center justify-center min-h-[50px]">
            {stepVisuals[steps[activeStep].visual]}
          </div>

          {/* Shortcut */}
          <div className="flex items-center gap-2">
            <kbd className="text-[9px] font-mono font-bold text-indigo-400 bg-zinc-800 px-2 py-1 rounded border border-zinc-700">
              {steps[activeStep].shortcut}
            </kbd>
          </div>

          {/* Navigation */}
          <div className="flex justify-between pt-2">
            <button
              onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
              disabled={activeStep === 0}
              className="text-[10px] px-3 py-1.5 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-zinc-300 rounded-lg transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              {t({ en: 'Previous', es: 'Anterior' })}
            </button>
            <button
              onClick={() => setActiveStep(Math.min(steps.length - 1, activeStep + 1))}
              disabled={activeStep === steps.length - 1}
              className="text-[10px] px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-1"
            >
              {t({ en: 'Next', es: 'Siguiente' })} <ChevronRight className="size-3" />
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}


// ─── Main Exported Component ─────────────────────────────────

export function FigmaLab() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<TabId>('interface');

  const sectionContent: Record<TabId, React.ReactNode> = {
    interface: (
      <div className="space-y-8">
        <SectionHeader
          icon={<MousePointer className="size-5 text-sky-400" />}
          title={t({ en: 'Figma Interface Overview', es: 'Vista General de la Interfaz de Figma' })}
          desc={t({ en: 'Click on each area of the Figma editor to learn about its function.', es: 'Haz clic en cada area del editor de Figma para aprender sobre su funcion.' })}
        />
        <InterfaceOverviewDemo />
        <SectionHeader
          icon={<Zap className="size-5 text-sky-400" />}
          title={t({ en: 'Essential Keyboard Shortcuts', es: 'Atajos de Teclado Esenciales' })}
          desc={t({ en: 'Click any shortcut to copy it. These will dramatically speed up your workflow.', es: 'Haz clic en cualquier atajo para copiarlo. Estos aceleraran drasticamente tu flujo de trabajo.' })}
        />
        <KeyboardShortcutsPanel />
        <FigmaLearnPanel section="interface" />
      </div>
    ),
    components: (
      <div className="space-y-8">
        <SectionHeader
          icon={<Component className="size-5 text-violet-400" />}
          title={t({ en: 'Component Architecture Builder', es: 'Constructor de Arquitectura de Componentes' })}
          desc={t({ en: 'Experiment with variants, properties, and states. See how component properties prevent variant explosion.', es: 'Experimenta con variantes, propiedades y estados. Ve como las propiedades de componentes previenen la explosion de variantes.' })}
        />
        <ComponentBuilderDemo />
        <SectionHeader
          icon={<Layers className="size-5 text-violet-400" />}
          title={t({ en: 'Step-by-Step: Building a Component', es: 'Paso a Paso: Construyendo un Componente' })}
          desc={t({ en: 'Follow the complete workflow from design to reusable component system.', es: 'Sigue el flujo de trabajo completo desde el diseno hasta un sistema de componentes reutilizable.' })}
        />
        <StepByStepGuide />
        <SectionHeader
          icon={<Box className="size-5 text-violet-400" />}
          title={t({ en: 'Naming Conventions', es: 'Convenciones de Nomenclatura' })}
          desc={t({ en: 'Good naming auto-organizes your Assets panel. Bad naming creates chaos.', es: 'Un buen nombrado auto-organiza tu panel Assets. Un mal nombrado crea caos.' })}
        />
        <NamingConventionDemo />
        <FigmaLearnPanel section="components" />
      </div>
    ),
    autoLayout: (
      <div className="space-y-8">
        <SectionHeader
          icon={<Grid3X3 className="size-5 text-emerald-400" />}
          title={t({ en: 'Auto Layout Playground', es: 'Playground de Auto Layout' })}
          desc={t({ en: 'Auto Layout is the Figma equivalent of CSS Flexbox. Adjust controls to see how each property maps to CSS.', es: 'Auto Layout es el equivalente en Figma de CSS Flexbox. Ajusta los controles para ver como cada propiedad se mapea a CSS.' })}
        />
        <AutoLayoutPlayground />
        <FigmaLearnPanel section="autoLayout" />
      </div>
    ),
    variables: (
      <div className="space-y-8">
        <SectionHeader
          icon={<Palette className="size-5 text-amber-400" />}
          title={t({ en: 'Variables & Design Tokens', es: 'Variables y Design Tokens' })}
          desc={t({ en: 'Switch between Light and Dark mode to see how semantic tokens resolve to different primitive values. This is how modern design systems handle theming.', es: 'Cambia entre modo Claro y Oscuro para ver como los tokens semanticos resuelven a diferentes valores primitivos. Asi es como los sistemas de diseno modernos manejan el theming.' })}
        />
        <VariablesTokensDemo />
        <FigmaLearnPanel section="variables" />
      </div>
    ),
    instances: (
      <div className="space-y-8">
        <SectionHeader
          icon={<Diamond className="size-5 text-pink-400" />}
          title={t({ en: 'Instance Management', es: 'Gestion de Instancias' })}
          desc={t({ en: 'Learn the full lifecycle: create instances, override properties, swap components, reset overrides, and (carefully!) detach. Push updates from the main component to see propagation in action.', es: 'Aprende el ciclo completo: crear instancias, sobreescribir propiedades, intercambiar componentes, restablecer sobreescrituras, y (con cuidado!) desvincular. Propaga actualizaciones desde el componente principal para verlo en accion.' })}
        />
        <InstanceManagementDemo />
        <FigmaLearnPanel section="instances" />
      </div>
    ),
  };

  return (
    <div className="w-full max-w-5xl mx-auto space-y-8 mt-12">
      {/* Header */}
      <div className="text-center space-y-3">
        <div className="flex items-center justify-center gap-3">
          <PenTool className="size-8 text-indigo-400" />
          <h3 className="text-3xl font-bold text-white">
            {t({ en: 'Figma Mastery Lab', es: 'Laboratorio de Dominio de Figma' })}
          </h3>
        </div>
        <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
          {t({
            en: 'Interactive demos covering the Figma interface, component architecture, Auto Layout, variables, tokens, and instance management. Each section links to official Figma Learn resources.',
            es: 'Demos interactivos cubriendo la interfaz de Figma, arquitectura de componentes, Auto Layout, variables, tokens y gestion de instancias. Cada seccion enlaza a recursos oficiales de Figma Learn.'
          })}
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-2 justify-center">
        {TABS.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all border ${
              activeTab === tab.id
                ? tab.color
                : 'bg-zinc-900/50 border-zinc-800 text-zinc-400 hover:text-zinc-300 hover:border-zinc-700'
            }`}
          >
            {tab.icon}
            <span className="hidden sm:inline">{t(tab.label)}</span>
          </button>
        ))}
      </div>

      {/* Active Section Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className="bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 border border-zinc-800 rounded-2xl p-6 md:p-8"
        >
          {sectionContent[activeTab]}
        </motion.div>
      </AnimatePresence>

      {/* Quick Reference: Figma → Code Mapping */}
      <div className="bg-zinc-900/30 border border-zinc-800 rounded-xl p-5">
        <h4 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-3 flex items-center gap-2">
          <Sparkles className="size-4 text-indigo-400" />
          {t({ en: 'Figma → Code Mental Model', es: 'Modelo Mental Figma → Codigo' })}
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { figma: { en: 'Component', es: 'Componente' }, code: 'React Component', color: 'border-violet-500/30 bg-violet-500/5' },
            { figma: { en: 'Variants', es: 'Variantes' }, code: 'Props / Enum', color: 'border-indigo-500/30 bg-indigo-500/5' },
            { figma: { en: 'Auto Layout', es: 'Auto Layout' }, code: 'Flexbox', color: 'border-emerald-500/30 bg-emerald-500/5' },
            { figma: { en: 'Variables', es: 'Variables' }, code: 'CSS Variables', color: 'border-amber-500/30 bg-amber-500/5' },
          ].map(item => (
            <div key={item.code} className={`border rounded-lg p-3 ${item.color}`}>
              <p className="text-xs font-medium text-zinc-300 mb-0.5">{t(item.figma)}</p>
              <p className="text-[10px] text-zinc-500">=</p>
              <code className="text-[11px] font-mono font-bold text-white">{item.code}</code>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


// ─── Utility: Section Header ─────────────────────────────────

function SectionHeader({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="size-10 bg-zinc-800/50 border border-zinc-700 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
        {icon}
      </div>
      <div className="space-y-1">
        <h4 className="text-lg font-semibold text-white">{title}</h4>
        <p className="text-sm text-zinc-400">{desc}</p>
      </div>
    </div>
  );
}
