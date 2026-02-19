import React, { useState } from 'react';
import { useLanguage } from '../layout/LanguageContext';
import { motion, AnimatePresence } from 'motion/react';
import {
  Palette,
  Box,
  AlignCenter,
  Grid3X3,
  Smartphone,
  Sparkles,
  Check,
  RotateCcw,
  Lightbulb,
  Star,
  Award,
  Play,
  Layers,
} from 'lucide-react';
import { ScrollableTabs } from './ScrollableTabs';

// ─── Types & Data ────────────────────────────────────────────

interface CSSConcept {
  id: string;
  name: { en: string; es: string };
  icon: React.ElementType;
  accent: string;
}

const concepts: CSSConcept[] = [
  { id: 'selectors', name: { en: 'Selectors & Cascade', es: 'Selectores y Cascada' }, icon: Layers, accent: 'text-blue-400' },
  { id: 'boxmodel', name: { en: 'Box Model', es: 'Modelo de Caja' }, icon: Box, accent: 'text-green-400' },
  { id: 'flexbox', name: { en: 'Flexbox', es: 'Flexbox' }, icon: AlignCenter, accent: 'text-purple-400' },
  { id: 'grid', name: { en: 'CSS Grid', es: 'CSS Grid' }, icon: Grid3X3, accent: 'text-orange-400' },
  { id: 'responsive', name: { en: 'Responsive Design', es: 'Diseño Responsivo' }, icon: Smartphone, accent: 'text-pink-400' },
  { id: 'animations', name: { en: 'Transitions & Animation', es: 'Transiciones y Animación' }, icon: Sparkles, accent: 'text-yellow-400' },
];

// ═══════════════════════════════════════════════════════════════
// DEMO 1 — Box Model Interactive
// ═══════════════════════════════════════════════════════════════

function BoxModelDemo() {
  const { t } = useLanguage();
  const [margin, setMargin] = useState(16);
  const [padding, setPadding] = useState(20);
  const [border, setBorder] = useState(3);

  return (
    <div className="space-y-5">
      <p className="text-sm text-zinc-400">
        {t({ en: 'Every HTML element is a box. Adjust margin, border, and padding to see how they affect layout.', es: 'Cada elemento HTML es una caja. Ajusta margin, border y padding para ver cómo afectan el layout.' })}
      </p>

      <div className="bg-zinc-900/70 border border-zinc-800 rounded-xl p-6 flex items-center justify-center min-h-[260px]">
        {/* Visual Box Model */}
        <div className="relative">
          {/* Margin layer */}
          <div
            className="bg-orange-500/15 border border-dashed border-orange-500/40 transition-all duration-300"
            style={{ padding: margin }}
          >
            <span className="absolute top-1 left-1 text-[9px] text-orange-400 font-mono">margin</span>
            {/* Border layer */}
            <div
              className="bg-yellow-500/15 transition-all duration-300"
              style={{ borderWidth: border, borderColor: 'rgba(234,179,8,0.5)', borderStyle: 'solid' }}
            >
              <span className="absolute text-[9px] text-yellow-400 font-mono" style={{ marginTop: -14 }}>border</span>
              {/* Padding layer */}
              <div
                className="bg-green-500/15 transition-all duration-300"
                style={{ padding }}
              >
                <span className="text-[9px] text-green-400 font-mono absolute" style={{ marginTop: -12 }}>padding</span>
                {/* Content */}
                <div className="bg-blue-500/30 border border-blue-500/50 rounded px-4 py-3 text-center min-w-[80px]">
                  <span className="text-xs text-blue-300 font-mono">content</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="grid grid-cols-3 gap-3">
        {[
          { label: 'Margin', value: margin, setter: setMargin, color: 'accent-orange-500' },
          { label: 'Border', value: border, setter: setBorder, color: 'accent-yellow-500' },
          { label: 'Padding', value: padding, setter: setPadding, color: 'accent-green-500' },
        ].map((ctrl) => (
          <div key={ctrl.label} className="text-center">
            <label className="text-[10px] uppercase tracking-wider text-zinc-500 block mb-1">{ctrl.label}</label>
            <input
              type="range"
              min={0}
              max={40}
              value={ctrl.value}
              onChange={(e) => ctrl.setter(Number(e.target.value))}
              className={`w-full ${ctrl.color}`}
            />
            <span className="text-xs font-mono text-zinc-400">{ctrl.value}px</span>
          </div>
        ))}
      </div>

      {/* Generated CSS */}
      <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-3">
        <p className="text-[10px] text-zinc-600 mb-1 uppercase tracking-wider">CSS</p>
        <code className="text-xs font-mono text-zinc-300">
          <span className="text-purple-400">.box</span> {'{'}<br />
          &nbsp;&nbsp;<span className="text-blue-400">margin</span>: <span className="text-orange-400">{margin}px</span>;<br />
          &nbsp;&nbsp;<span className="text-blue-400">border</span>: <span className="text-orange-400">{border}px solid #ccc</span>;<br />
          &nbsp;&nbsp;<span className="text-blue-400">padding</span>: <span className="text-orange-400">{padding}px</span>;<br />
          {'}'}
        </code>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// DEMO 2 — Flexbox Playground
// ═══════════════════════════════════════════════════════════════

function FlexboxDemo() {
  const { t } = useLanguage();
  const [direction, setDirection] = useState<'row' | 'column'>('row');
  const [justify, setJustify] = useState('center');
  const [align, setAlign] = useState('center');
  const [gap, setGap] = useState(12);

  const justifyOptions = ['flex-start', 'center', 'flex-end', 'space-between', 'space-around'];
  const alignOptions = ['flex-start', 'center', 'flex-end', 'stretch'];

  return (
    <div className="space-y-5">
      <p className="text-sm text-zinc-400">
        {t({ en: 'Flexbox arranges items in one direction. Change properties to see how items flow.', es: 'Flexbox organiza elementos en una dirección. Cambia las propiedades para ver cómo fluyen.' })}
      </p>

      {/* Preview */}
      <div
        className="bg-zinc-900/70 border border-zinc-800 rounded-xl p-4 min-h-[200px] transition-all duration-300"
        style={{ display: 'flex', flexDirection: direction, justifyContent: justify, alignItems: align, gap }}
      >
        {[1, 2, 3, 4].map((n) => (
          <motion.div
            key={n}
            layout
            className="bg-purple-500/30 border border-purple-500/50 rounded-lg flex items-center justify-center font-mono text-xs text-purple-300"
            style={{ width: direction === 'row' ? 56 : 'auto', height: 56, minWidth: 40, padding: '0 12px' }}
          >
            {n}
          </motion.div>
        ))}
      </div>

      {/* Controls */}
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="text-[10px] uppercase tracking-wider text-zinc-500 block mb-1.5">flex-direction</label>
          <div className="flex gap-1">
            {(['row', 'column'] as const).map((d) => (
              <button key={d} onClick={() => setDirection(d)} className={`px-3 py-1 rounded text-xs font-mono ${direction === d ? 'bg-purple-600 text-white' : 'bg-zinc-800 text-zinc-400'}`}>
                {d}
              </button>
            ))}
          </div>
        </div>
        <div>
          <label className="text-[10px] uppercase tracking-wider text-zinc-500 block mb-1.5">gap</label>
          <input type="range" min={0} max={32} value={gap} onChange={(e) => setGap(Number(e.target.value))} className="w-full accent-purple-500" />
          <span className="text-xs font-mono text-zinc-400">{gap}px</span>
        </div>
        <div>
          <label className="text-[10px] uppercase tracking-wider text-zinc-500 block mb-1.5">justify-content</label>
          <select value={justify} onChange={(e) => setJustify(e.target.value)} className="w-full bg-zinc-800 border border-zinc-700 rounded px-2 py-1 text-xs font-mono text-zinc-300 focus:outline-none">
            {justifyOptions.map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
        </div>
        <div>
          <label className="text-[10px] uppercase tracking-wider text-zinc-500 block mb-1.5">align-items</label>
          <select value={align} onChange={(e) => setAlign(e.target.value)} className="w-full bg-zinc-800 border border-zinc-700 rounded px-2 py-1 text-xs font-mono text-zinc-300 focus:outline-none">
            {alignOptions.map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
        </div>
      </div>

      {/* Generated CSS */}
      <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-3">
        <p className="text-[10px] text-zinc-600 mb-1 uppercase tracking-wider">CSS</p>
        <code className="text-xs font-mono text-zinc-300">
          <span className="text-purple-400">.container</span> {'{'}<br />
          &nbsp;&nbsp;<span className="text-blue-400">display</span>: <span className="text-orange-400">flex</span>;<br />
          &nbsp;&nbsp;<span className="text-blue-400">flex-direction</span>: <span className="text-orange-400">{direction}</span>;<br />
          &nbsp;&nbsp;<span className="text-blue-400">justify-content</span>: <span className="text-orange-400">{justify}</span>;<br />
          &nbsp;&nbsp;<span className="text-blue-400">align-items</span>: <span className="text-orange-400">{align}</span>;<br />
          &nbsp;&nbsp;<span className="text-blue-400">gap</span>: <span className="text-orange-400">{gap}px</span>;<br />
          {'}'}
        </code>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// DEMO 3 — Selectors & Specificity
// ═══════════════════════════════════════════════════════════════

function SelectorsDemo() {
  const { t } = useLanguage();
  const [activeSelector, setActiveSelector] = useState(0);

  const selectors = [
    { selector: 'p', specificity: '0-0-1', desc: { en: 'Selects ALL <p> elements', es: 'Selecciona TODOS los elementos <p>' }, type: { en: 'Element', es: 'Elemento' }, color: 'text-blue-400' },
    { selector: '.card', specificity: '0-1-0', desc: { en: 'Selects elements with class="card"', es: 'Selecciona elementos con class="card"' }, type: { en: 'Class', es: 'Clase' }, color: 'text-green-400' },
    { selector: '#hero', specificity: '1-0-0', desc: { en: 'Selects the element with id="hero"', es: 'Selecciona el elemento con id="hero"' }, type: { en: 'ID', es: 'ID' }, color: 'text-orange-400' },
    { selector: '.card > h2', specificity: '0-1-1', desc: { en: 'Selects <h2> that is a direct child of .card', es: 'Selecciona <h2> que es hijo directo de .card' }, type: { en: 'Combinator', es: 'Combinador' }, color: 'text-purple-400' },
    { selector: 'a:hover', specificity: '0-1-1', desc: { en: 'Selects <a> when mouse hovers over it', es: 'Selecciona <a> cuando el mouse pasa sobre él' }, type: { en: 'Pseudo-class', es: 'Pseudo-clase' }, color: 'text-pink-400' },
    { selector: '::before', specificity: '0-0-1', desc: { en: 'Inserts content before an element', es: 'Inserta contenido antes de un elemento' }, type: { en: 'Pseudo-element', es: 'Pseudo-elemento' }, color: 'text-cyan-400' },
  ];

  return (
    <div className="space-y-5">
      <p className="text-sm text-zinc-400">
        {t({ en: 'CSS selectors target HTML elements. Specificity determines which rule wins when multiple rules conflict.', es: 'Los selectores CSS apuntan a elementos HTML. La especificidad determina qué regla gana cuando múltiples reglas entran en conflicto.' })}
      </p>

      {/* Specificity pyramid */}
      <div className="bg-zinc-900/70 border border-zinc-800 rounded-xl p-5">
        <p className="text-xs text-zinc-500 uppercase tracking-wider mb-3 text-center">{t({ en: 'Specificity Hierarchy (low → high)', es: 'Jerarquía de Especificidad (baja → alta)' })}</p>
        <div className="flex items-end justify-center gap-2">
          {[
            { label: '*', h: 30, color: 'bg-zinc-600', tip: 'Universal' },
            { label: 'p, div', h: 50, color: 'bg-blue-500/60', tip: 'Element' },
            { label: '.class', h: 80, color: 'bg-green-500/60', tip: 'Class' },
            { label: '#id', h: 110, color: 'bg-orange-500/60', tip: 'ID' },
            { label: 'style=""', h: 140, color: 'bg-red-500/60', tip: 'Inline' },
            { label: '!important', h: 160, color: 'bg-pink-500/60', tip: '!important' },
          ].map((bar) => (
            <div key={bar.label} className="flex flex-col items-center gap-1 group">
              <div className={`w-12 sm:w-16 ${bar.color} rounded-t-lg transition-all group-hover:brightness-125`} style={{ height: bar.h }} />
              <span className="text-[9px] font-mono text-zinc-500 group-hover:text-zinc-300 transition-colors text-center">{bar.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Selector explorer */}
      <div className="space-y-2">
        {selectors.map((s, i) => (
          <button
            key={i}
            onClick={() => setActiveSelector(i)}
            className={`w-full flex items-center gap-3 p-3 rounded-lg border text-left transition-all ${
              activeSelector === i
                ? 'bg-zinc-800/70 border-zinc-700 ring-1 ring-white/5'
                : 'bg-zinc-900/30 border-zinc-800/50 hover:bg-zinc-800/40'
            }`}
          >
            <code className={`font-mono text-sm font-bold ${s.color} min-w-[100px]`}>{s.selector}</code>
            <span className="text-xs text-zinc-400 flex-1">{t(s.desc)}</span>
            <span className="text-[10px] font-mono bg-zinc-800 text-zinc-500 px-2 py-0.5 rounded">{s.specificity}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// DEMO 4 — CSS Grid
// ═══════════════════════════════════════════════════════════════

function GridDemo() {
  const { t } = useLanguage();
  const [cols, setCols] = useState(3);
  const [rows, setRows] = useState(2);
  const [gridGap, setGridGap] = useState(8);

  const items = Array.from({ length: cols * rows }, (_, i) => i + 1);

  return (
    <div className="space-y-5">
      <p className="text-sm text-zinc-400">
        {t({ en: 'CSS Grid creates two-dimensional layouts. Adjust columns, rows, and gap.', es: 'CSS Grid crea layouts bidimensionales. Ajusta columnas, filas y espacio.' })}
      </p>

      <div className="bg-zinc-900/70 border border-zinc-800 rounded-xl p-4">
        <div
          className="transition-all duration-300"
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${cols}, 1fr)`,
            gridTemplateRows: `repeat(${rows}, 60px)`,
            gap: gridGap,
          }}
        >
          {items.map((n) => (
            <motion.div
              key={n}
              layout
              className="bg-orange-500/25 border border-orange-500/40 rounded-lg flex items-center justify-center font-mono text-xs text-orange-300"
            >
              {n}
            </motion.div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <div>
          <label className="text-[10px] uppercase tracking-wider text-zinc-500 block mb-1">Columns</label>
          <input type="range" min={1} max={6} value={cols} onChange={(e) => setCols(Number(e.target.value))} className="w-full accent-orange-500" />
          <span className="text-xs font-mono text-zinc-400">{cols}</span>
        </div>
        <div>
          <label className="text-[10px] uppercase tracking-wider text-zinc-500 block mb-1">Rows</label>
          <input type="range" min={1} max={4} value={rows} onChange={(e) => setRows(Number(e.target.value))} className="w-full accent-orange-500" />
          <span className="text-xs font-mono text-zinc-400">{rows}</span>
        </div>
        <div>
          <label className="text-[10px] uppercase tracking-wider text-zinc-500 block mb-1">Gap</label>
          <input type="range" min={0} max={24} value={gridGap} onChange={(e) => setGridGap(Number(e.target.value))} className="w-full accent-orange-500" />
          <span className="text-xs font-mono text-zinc-400">{gridGap}px</span>
        </div>
      </div>

      <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-3">
        <code className="text-xs font-mono text-zinc-300">
          <span className="text-purple-400">.grid</span> {'{'}<br />
          &nbsp;&nbsp;<span className="text-blue-400">display</span>: <span className="text-orange-400">grid</span>;<br />
          &nbsp;&nbsp;<span className="text-blue-400">grid-template-columns</span>: <span className="text-orange-400">repeat({cols}, 1fr)</span>;<br />
          &nbsp;&nbsp;<span className="text-blue-400">grid-template-rows</span>: <span className="text-orange-400">repeat({rows}, 60px)</span>;<br />
          &nbsp;&nbsp;<span className="text-blue-400">gap</span>: <span className="text-orange-400">{gridGap}px</span>;<br />
          {'}'}
        </code>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// DEMO 5 — Responsive Design
// ═══════════════════════════════════════════════════════════════

function ResponsiveDemo() {
  const { t } = useLanguage();
  const [viewport, setViewport] = useState(375);

  const breakpoints = [
    { name: 'Mobile', width: 375, icon: '📱' },
    { name: 'Tablet', width: 768, icon: '📋' },
    { name: 'Desktop', width: 1024, icon: '💻' },
    { name: 'Wide', width: 1440, icon: '🖥️' },
  ];

  return (
    <div className="space-y-5">
      <p className="text-sm text-zinc-400">
        {t({ en: 'Responsive design adapts layouts to different screen sizes using media queries and flexible units.', es: 'El diseño responsivo adapta layouts a diferentes tamaños de pantalla usando media queries y unidades flexibles.' })}
      </p>

      {/* Viewport selector */}
      <div className="flex gap-2 justify-center">
        {breakpoints.map((bp) => (
          <button
            key={bp.width}
            onClick={() => setViewport(bp.width)}
            className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg text-xs transition-all ${
              viewport === bp.width ? 'bg-pink-600/20 text-pink-300 ring-1 ring-pink-500/30' : 'bg-zinc-800 text-zinc-500 hover:text-zinc-300'
            }`}
          >
            <span className="text-base">{bp.icon}</span>
            <span className="font-mono">{bp.width}px</span>
          </button>
        ))}
      </div>

      {/* Simulated viewport */}
      <div className="flex justify-center">
        <motion.div
          animate={{ width: Math.min(viewport, 400) }}
          transition={{ type: 'spring', stiffness: 200, damping: 25 }}
          className="bg-zinc-900/70 border border-zinc-800 rounded-xl p-3 overflow-hidden"
        >
          {/* Simulated nav */}
          <div className="flex items-center justify-between mb-3 pb-2 border-b border-zinc-800">
            <span className="text-xs font-bold text-white">Logo</span>
            {viewport >= 768 ? (
              <div className="flex gap-3">
                <span className="text-[10px] text-zinc-400">Home</span>
                <span className="text-[10px] text-zinc-400">About</span>
                <span className="text-[10px] text-zinc-400">Contact</span>
              </div>
            ) : (
              <div className="flex flex-col gap-0.5 cursor-pointer">
                <div className="w-4 h-0.5 bg-zinc-400 rounded" />
                <div className="w-4 h-0.5 bg-zinc-400 rounded" />
                <div className="w-3 h-0.5 bg-zinc-400 rounded" />
              </div>
            )}
          </div>

          {/* Simulated content */}
          <div className={viewport >= 768 ? 'grid grid-cols-2 gap-2' : 'space-y-2'}>
            {[1, 2].map((n) => (
              <div key={n} className="bg-zinc-800/70 rounded-lg p-2.5">
                <div className="h-2 w-3/4 bg-zinc-700 rounded mb-1.5" />
                <div className="h-1.5 w-full bg-zinc-700/50 rounded mb-1" />
                <div className="h-1.5 w-2/3 bg-zinc-700/50 rounded" />
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Media query example */}
      <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-3">
        <code className="text-xs font-mono text-zinc-300">
          <span className="text-zinc-500">/* Mobile first */</span><br />
          <span className="text-purple-400">.grid</span> {'{'} <span className="text-blue-400">display</span>: <span className="text-orange-400">block</span>; {'}'}<br /><br />
          <span className="text-pink-400">@media</span> <span className="text-zinc-400">(min-width: 768px)</span> {'{'}<br />
          &nbsp;&nbsp;<span className="text-purple-400">.grid</span> {'{'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">display</span>: <span className="text-orange-400">grid</span>;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">grid-template-columns</span>: <span className="text-orange-400">1fr 1fr</span>;<br />
          &nbsp;&nbsp;{'}'}<br />
          {'}'}
        </code>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// DEMO 6 — Transitions & Animation
// ═══════════════════════════════════════════════════════════════

function AnimationsDemo() {
  const { t } = useLanguage();
  const [hovered, setHovered] = useState(false);
  const [animProp, setAnimProp] = useState<'transform' | 'background' | 'shadow' | 'all'>('all');

  return (
    <div className="space-y-5">
      <p className="text-sm text-zinc-400">
        {t({ en: 'CSS transitions create smooth changes between states. Hover the card below to see properties animate.', es: 'Las transiciones CSS crean cambios suaves entre estados. Pasa el mouse sobre la tarjeta para ver las propiedades animarse.' })}
      </p>

      {/* Property selector */}
      <div className="flex gap-1.5 flex-wrap">
        {(['all', 'transform', 'background', 'shadow'] as const).map((p) => (
          <button
            key={p}
            onClick={() => setAnimProp(p)}
            className={`px-3 py-1 rounded-full text-xs font-mono ${animProp === p ? 'bg-yellow-600/20 text-yellow-300 ring-1 ring-yellow-500/30' : 'bg-zinc-800 text-zinc-500'}`}
          >
            {p}
          </button>
        ))}
      </div>

      {/* Interactive card */}
      <div className="flex justify-center py-6">
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="cursor-pointer"
          style={{
            width: 180,
            height: 120,
            borderRadius: 16,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: hovered && (animProp === 'background' || animProp === 'all')
              ? 'linear-gradient(135deg, #6366f1, #a855f7)'
              : 'linear-gradient(135deg, #27272a, #3f3f46)',
            transform: hovered && (animProp === 'transform' || animProp === 'all')
              ? 'scale(1.08) translateY(-4px)'
              : 'scale(1) translateY(0)',
            boxShadow: hovered && (animProp === 'shadow' || animProp === 'all')
              ? '0 20px 40px rgba(99,102,241,0.3)'
              : '0 4px 12px rgba(0,0,0,0.2)',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            border: '1px solid rgba(255,255,255,0.1)',
          }}
        >
          <span className="text-sm font-medium text-white">
            {hovered ? t({ en: 'Hovering!', es: '¡Hover!' }) : t({ en: 'Hover me', es: 'Pasa el mouse' })}
          </span>
        </div>
      </div>

      <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-3">
        <code className="text-xs font-mono text-zinc-300">
          <span className="text-purple-400">.card</span> {'{'}<br />
          &nbsp;&nbsp;<span className="text-blue-400">transition</span>: <span className="text-orange-400">{animProp} 0.3s ease</span>;<br />
          {'}'}<br /><br />
          <span className="text-purple-400">.card:hover</span> {'{'}<br />
          {(animProp === 'transform' || animProp === 'all') && <>&nbsp;&nbsp;<span className="text-blue-400">transform</span>: <span className="text-orange-400">scale(1.08) translateY(-4px)</span>;<br /></>}
          {(animProp === 'background' || animProp === 'all') && <>&nbsp;&nbsp;<span className="text-blue-400">background</span>: <span className="text-orange-400">linear-gradient(...)</span>;<br /></>}
          {(animProp === 'shadow' || animProp === 'all') && <>&nbsp;&nbsp;<span className="text-blue-400">box-shadow</span>: <span className="text-orange-400">0 20px 40px ...</span>;<br /></>}
          {'}'}
        </code>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════

export function CSSLab() {
  const { t } = useLanguage();
  const [activeConcept, setActiveConcept] = useState('boxmodel');
  const [explored, setExplored] = useState<Set<string>>(new Set(['boxmodel']));

  const handleSelect = (id: string) => {
    setActiveConcept(id);
    setExplored((prev) => new Set(prev).add(id));
  };

  const demoComponents: Record<string, React.ReactNode> = {
    selectors: <SelectorsDemo />,
    boxmodel: <BoxModelDemo />,
    flexbox: <FlexboxDemo />,
    grid: <GridDemo />,
    responsive: <ResponsiveDemo />,
    animations: <AnimationsDemo />,
  };

  return (
    <section className="scroll-mt-24">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-950/40 via-indigo-950/30 to-purple-950/20 border border-blue-500/20 rounded-2xl p-6 md:p-8 mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="size-12 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
            <Palette className="size-6 text-blue-400" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">
              {t({ en: 'CSS Interactive Lab', es: 'Laboratorio Interactivo de CSS' })}
            </h3>
            <p className="text-sm text-zinc-400">
              {t({ en: 'Master CSS visually. Tweak properties and see results in real time.', es: 'Domina CSS visualmente. Ajusta propiedades y ve resultados en tiempo real.' })}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs text-zinc-500">
          <Award className="size-3.5" />
          <span>{explored.size}/{concepts.length} {t({ en: 'explored', es: 'explorados' })}</span>
          <div className="flex-1 h-1.5 bg-zinc-800 rounded-full overflow-hidden ml-2">
            <motion.div className="h-full bg-gradient-to-r from-blue-500 to-purple-500" animate={{ width: `${(explored.size / concepts.length) * 100}%` }} transition={{ type: 'spring', stiffness: 100 }} />
          </div>
        </div>
      </div>

      {/* Concept Selector */}
      <ScrollableTabs className="mb-6">
        {concepts.map((c) => {
          const Icon = c.icon;
          const isActive = activeConcept === c.id;
          const isDone = explored.has(c.id);
          return (
            <button
              key={c.id}
              onClick={() => handleSelect(c.id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all whitespace-nowrap flex-shrink-0 ${
                isActive ? `bg-white/10 ${c.accent} ring-1 ring-white/10` : isDone ? 'text-zinc-400 hover:text-zinc-200 hover:bg-white/5' : 'text-zinc-500 hover:text-zinc-300 hover:bg-white/5'
              }`}
            >
              <Icon className="size-3.5" />
              {t(c.name)}
              {isDone && !isActive && <Check className="size-2.5 text-green-500" />}
            </button>
          );
        })}
      </ScrollableTabs>

      {/* Active Demo */}
      <AnimatePresence mode="wait">
        <motion.div key={activeConcept} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>
          <div className="bg-black/40 border border-zinc-800 rounded-xl p-5 md:p-6">
            <div className="flex items-center gap-2 mb-5">
              <Play className="size-4 text-blue-400" />
              <h4 className="text-sm font-semibold text-white">{t(concepts.find((c) => c.id === activeConcept)!.name)}</h4>
              <span className="ml-auto text-[10px] bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded-full font-medium">{t({ en: 'Interactive', es: 'Interactivo' })}</span>
            </div>
            {demoComponents[activeConcept]}
          </div>
        </motion.div>
      </AnimatePresence>

      {explored.size === concepts.length && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mt-8 bg-gradient-to-r from-blue-950/30 to-purple-950/20 border border-blue-500/20 rounded-xl p-6 text-center">
          <Star className="size-8 text-blue-400 mx-auto mb-3 fill-blue-400" />
          <h4 className="text-lg font-bold text-white mb-2">{t({ en: 'All CSS Concepts Mastered!', es: '!Todos los Conceptos CSS Dominados!' })}</h4>
          <p className="text-sm text-zinc-400 max-w-lg mx-auto">{t({ en: 'You now understand how CSS controls layout, style, and animation. Next: JavaScript to add interactivity!', es: 'Ahora entiendes cómo CSS controla layout, estilo y animación. Siguiente: JavaScript para agregar interactividad!' })}</p>
        </motion.div>
      )}
    </section>
  );
}