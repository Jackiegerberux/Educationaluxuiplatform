import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../layout/LanguageContext';
import { motion, AnimatePresence } from 'motion/react';
import {
  Terminal,
  Play,
  Variable,
  FunctionSquare,
  Repeat,
  MousePointer,
  Boxes,
  Check,
  RotateCcw,
  Lightbulb,
  Star,
  Award,
  ExternalLink,
  BookOpen,
  ChevronRight,
  Code2,
  Zap,
} from 'lucide-react';
import { ScrollableTabs } from './ScrollableTabs';

// ─── Types ───────────────────────────────────────────────────

interface JSConcept {
  id: string;
  name: { en: string; es: string };
  icon: React.ElementType;
  accent: string;
}

const concepts: JSConcept[] = [
  { id: 'variables', name: { en: 'Variables & Types', es: 'Variables y Tipos' }, icon: Variable, accent: 'text-yellow-400' },
  { id: 'functions', name: { en: 'Functions', es: 'Funciones' }, icon: FunctionSquare, accent: 'text-green-400' },
  { id: 'conditionals', name: { en: 'Conditionals', es: 'Condicionales' }, icon: Repeat, accent: 'text-blue-400' },
  { id: 'dom', name: { en: 'DOM Manipulation', es: 'Manipulación del DOM' }, icon: MousePointer, accent: 'text-purple-400' },
  { id: 'events', name: { en: 'Events', es: 'Eventos' }, icon: Zap, accent: 'text-orange-400' },
  { id: 'frameworks', name: { en: 'Frameworks & Ecosystem', es: 'Frameworks y Ecosistema' }, icon: Boxes, accent: 'text-pink-400' },
];

// ─── Mini Console ────────────────────────────────────────────

function MiniConsole({ code, autoRun = false }: { code: string; autoRun?: boolean }) {
  const { t } = useLanguage();
  const [editableCode, setEditableCode] = useState(code);
  const [output, setOutput] = useState<string[]>([]);
  const [ran, setRan] = useState(false);

  const runCode = () => {
    const logs: string[] = [];
    const fakeConsole = {
      log: (...args: any[]) => logs.push(args.map((a) => (typeof a === 'object' ? JSON.stringify(a, null, 2) : String(a))).join(' ')),
    };
    try {
      const fn = new Function('console', editableCode);
      fn(fakeConsole);
      if (logs.length === 0) logs.push('(no output)');
    } catch (e: any) {
      logs.push(`Error: ${e.message}`);
    }
    setOutput(logs);
    setRan(true);
  };

  const reset = () => {
    setEditableCode(code);
    setOutput([]);
    setRan(false);
  };

  return (
    <div className="space-y-3">
      {/* Editor */}
      <div className="relative">
        <textarea
          value={editableCode}
          onChange={(e) => { setEditableCode(e.target.value); setRan(false); }}
          spellCheck={false}
          className="w-full h-40 bg-zinc-950 border border-zinc-800 rounded-xl p-4 text-sm font-mono text-zinc-200 leading-relaxed resize-none focus:outline-none focus:border-yellow-500/50 hide-scrollbar"
          style={{ tabSize: 2 }}
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-2">
        <button onClick={runCode} className="flex items-center gap-1.5 px-4 py-1.5 bg-yellow-600 hover:bg-yellow-500 text-black text-xs font-semibold rounded-lg transition-colors">
          <Play className="size-3" />
          {t({ en: 'Run', es: 'Ejecutar' })}
        </button>
        <button onClick={reset} className="flex items-center gap-1.5 px-3 py-1.5 bg-zinc-800 text-zinc-400 hover:text-white text-xs rounded-lg transition-colors">
          <RotateCcw className="size-3" />
          {t({ en: 'Reset', es: 'Resetear' })}
        </button>
      </div>

      {/* Output */}
      {ran && (
        <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} className="bg-zinc-950 border border-zinc-800 rounded-lg p-3">
          <p className="text-[10px] text-zinc-600 mb-1.5 uppercase tracking-wider flex items-center gap-1">
            <Terminal className="size-3" /> Console output
          </p>
          <div className="space-y-0.5">
            {output.map((line, i) => (
              <p key={i} className={`text-xs font-mono ${line.startsWith('Error') ? 'text-red-400' : 'text-green-400'}`}>
                <span className="text-zinc-600 mr-1.5">{'>'}</span>{line}
              </p>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// DEMO 1 — Variables & Types
// ═══════════════════════════════════════════════════════════════

function VariablesDemo() {
  const { t } = useLanguage();
  return (
    <div className="space-y-5">
      <p className="text-sm text-zinc-400">
        {t({ en: 'Variables store data. JavaScript has 3 ways to declare them and several data types.', es: 'Las variables almacenan datos. JavaScript tiene 3 formas de declararlas y varios tipos de datos.' })}
      </p>
      <MiniConsole code={`// Declare variables
let userName = "Jackie";      // Can change
const age = 28;               // Cannot change
var legacy = "avoid this";    // Old way

// Data types
console.log(typeof userName); // string
console.log(typeof age);      // number
console.log(typeof true);     // boolean
console.log(typeof null);     // object (JS quirk!)
console.log(typeof undefined);// undefined
console.log(typeof [1,2,3]);  // object (array)
console.log(typeof {a: 1});   // object

// Template literals (backticks)
console.log(\`Hello, \${userName}! You are \${age}.\`);

// Math
console.log(age + 2);    // 30
console.log(age * 2);    // 56
console.log(10 % 3);     // 1 (remainder)
`} />
      <div className="bg-yellow-950/20 border border-yellow-500/20 rounded-lg p-3 flex gap-3 items-start">
        <Lightbulb className="size-4 text-yellow-400 mt-0.5 flex-shrink-0" />
        <p className="text-xs text-zinc-400">
          {t({ en: 'Use const by default. Only use let when you need to reassign. Never use var — it has scoping issues.', es: 'Usa const por defecto. Solo usa let cuando necesites reasignar. Nunca uses var — tiene problemas de scope.' })}
        </p>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// DEMO 2 — Functions
// ═══════════════════════════════════════════════════════════════

function FunctionsDemo() {
  const { t } = useLanguage();
  return (
    <div className="space-y-5">
      <p className="text-sm text-zinc-400">
        {t({ en: 'Functions are reusable blocks of code. They take inputs (parameters) and return outputs.', es: 'Las funciones son bloques de código reutilizables. Reciben entradas (parámetros) y devuelven salidas.' })}
      </p>
      <MiniConsole code={`// Function declaration
function greet(name) {
  return "Hello, " + name + "!";
}

// Arrow function (modern)
const add = (a, b) => a + b;

// Arrow with body
const describe = (name, role) => {
  const msg = \`\${name} is a \${role}\`;
  return msg;
};

console.log(greet("Designer"));
console.log(add(5, 3));
console.log(describe("Jackie", "UX Designer"));

// Array methods (very common in React!)
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
const evens = numbers.filter(n => n % 2 === 0);

console.log("Doubled:", doubled);
console.log("Evens:", evens);
`} />
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// DEMO 3 — Conditionals
// ═══════════════════════════════════════════════════════════════

function ConditionalsDemo() {
  const { t } = useLanguage();
  return (
    <div className="space-y-5">
      <p className="text-sm text-zinc-400">
        {t({ en: 'Conditionals let your code make decisions based on values.', es: 'Los condicionales permiten que tu código tome decisiones basadas en valores.' })}
      </p>
      <MiniConsole code={`const userRole = "admin";
const isLoggedIn = true;
const cartItems = 3;

// if / else if / else
if (userRole === "admin") {
  console.log("Show admin panel");
} else if (userRole === "editor") {
  console.log("Show editor tools");
} else {
  console.log("Show read-only view");
}

// Ternary operator (used A LOT in React)
const greeting = isLoggedIn 
  ? "Welcome back!" 
  : "Please sign in";
console.log(greeting);

// Logical operators
console.log(isLoggedIn && "Show dashboard");
console.log(cartItems > 0 || "Cart is empty");

// Optional chaining (?.)
const user = { name: "Jackie", address: null };
console.log(user?.address?.city ?? "No city");

// Nullish coalescing (??)
const theme = null;
console.log(theme ?? "dark"); // "dark"
`} />
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// DEMO 4 — DOM Manipulation
// ═══════════════════════════════════════════════════════════════

function DOMDemo() {
  const { t } = useLanguage();
  const [bgColor, setBgColor] = useState('#1a1a2e');
  const [text, setText] = useState('Hello World');
  const [fontSize, setFontSize] = useState(16);

  return (
    <div className="space-y-5">
      <p className="text-sm text-zinc-400">
        {t({ en: 'The DOM (Document Object Model) is how JavaScript interacts with HTML. In React, you rarely touch the DOM directly — but understanding it helps you debug.', es: 'El DOM (Document Object Model) es cómo JavaScript interactúa con HTML. En React, raramente tocas el DOM directamente — pero entenderlo te ayuda a depurar.' })}
      </p>

      {/* Live DOM manipulation */}
      <div className="bg-zinc-900/70 border border-zinc-800 rounded-xl p-5 space-y-4">
        <p className="text-xs text-zinc-500 uppercase tracking-wider">{t({ en: 'Try manipulating the DOM:', es: 'Intenta manipular el DOM:' })}</p>

        {/* Preview */}
        <div className="rounded-lg p-6 text-center transition-all duration-300 border border-zinc-700" style={{ backgroundColor: bgColor }}>
          <p style={{ fontSize, color: '#fff', transition: 'all 0.3s' }}>{text}</p>
        </div>

        {/* Controls */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div>
            <label className="text-[10px] uppercase tracking-wider text-zinc-500 block mb-1">textContent</label>
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-full bg-zinc-800 border border-zinc-700 rounded px-2 py-1.5 text-xs text-white font-mono focus:outline-none focus:border-purple-500"
            />
          </div>
          <div>
            <label className="text-[10px] uppercase tracking-wider text-zinc-500 block mb-1">style.fontSize</label>
            <input type="range" min={10} max={40} value={fontSize} onChange={(e) => setFontSize(Number(e.target.value))} className="w-full accent-purple-500" />
            <span className="text-xs font-mono text-zinc-400">{fontSize}px</span>
          </div>
          <div>
            <label className="text-[10px] uppercase tracking-wider text-zinc-500 block mb-1">style.backgroundColor</label>
            <div className="flex gap-1.5">
              {['#1a1a2e', '#1e3a5f', '#2d1b4e', '#1b3d2f', '#4a1a1a'].map((c) => (
                <button
                  key={c}
                  onClick={() => setBgColor(c)}
                  className={`size-6 rounded border-2 transition-all ${bgColor === c ? 'border-white scale-110' : 'border-zinc-600'}`}
                  style={{ backgroundColor: c }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Equivalent code */}
      <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-3">
        <p className="text-[10px] text-zinc-600 mb-1 uppercase tracking-wider">Vanilla JS equivalent</p>
        <code className="text-xs font-mono text-zinc-300">
          <span className="text-zinc-500">// Select element</span><br />
          <span className="text-blue-400">const</span> el = <span className="text-yellow-400">document</span>.querySelector(<span className="text-green-400">"p"</span>);<br /><br />
          <span className="text-zinc-500">// Modify it</span><br />
          el.<span className="text-purple-400">textContent</span> = <span className="text-green-400">"{text}"</span>;<br />
          el.style.<span className="text-purple-400">fontSize</span> = <span className="text-green-400">"{fontSize}px"</span>;<br />
          el.style.<span className="text-purple-400">backgroundColor</span> = <span className="text-green-400">"{bgColor}"</span>;
        </code>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// DEMO 5 — Events
// ═══════════════════════════════════════════════════════════════

function EventsDemo() {
  const { t } = useLanguage();
  const [eventLog, setEventLog] = useState<string[]>([]);
  const [clickCount, setClickCount] = useState(0);

  const logEvent = (name: string) => {
    setEventLog((prev) => [...prev.slice(-7), `${new Date().toLocaleTimeString()} — ${name}`]);
  };

  return (
    <div className="space-y-5">
      <p className="text-sm text-zinc-400">
        {t({ en: 'Events let you respond to user actions — clicks, hovers, typing, scrolling, and more.', es: 'Los eventos te permiten responder a acciones del usuario — clics, hover, escritura, scroll y más.' })}
      </p>

      {/* Event playground */}
      <div className="bg-zinc-900/70 border border-zinc-800 rounded-xl p-5 space-y-4">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <button
            onClick={() => { setClickCount((c) => c + 1); logEvent(`click (${clickCount + 1})`); }}
            className="p-4 bg-orange-500/20 border border-orange-500/30 rounded-xl text-center hover:bg-orange-500/30 transition-all active:scale-95"
          >
            <span className="text-lg">👆</span>
            <p className="text-[10px] text-orange-300 font-mono mt-1">onClick</p>
          </button>
          <div
            onMouseEnter={() => logEvent('mouseenter')}
            onMouseLeave={() => logEvent('mouseleave')}
            className="p-4 bg-blue-500/20 border border-blue-500/30 rounded-xl text-center cursor-pointer"
          >
            <span className="text-lg">🖱️</span>
            <p className="text-[10px] text-blue-300 font-mono mt-1">onHover</p>
          </div>
          <div
            onDoubleClick={() => logEvent('dblclick')}
            className="p-4 bg-purple-500/20 border border-purple-500/30 rounded-xl text-center cursor-pointer select-none"
          >
            <span className="text-lg">✌️</span>
            <p className="text-[10px] text-purple-300 font-mono mt-1">onDblClick</p>
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Type..."
              onInput={(e) => logEvent(`input: "${(e.target as HTMLInputElement).value}"`)}
              onFocus={() => logEvent('focus')}
              onBlur={() => logEvent('blur')}
              className="w-full h-full bg-green-500/20 border border-green-500/30 rounded-xl text-center text-xs text-green-200 font-mono px-2 focus:outline-none focus:border-green-400/50 placeholder:text-green-400/30"
            />
          </div>
        </div>

        {/* Event log */}
        <div className="bg-zinc-950 rounded-lg p-3 min-h-[80px]">
          <p className="text-[10px] text-zinc-600 mb-1.5 uppercase tracking-wider flex items-center gap-1">
            <Terminal className="size-3" /> {t({ en: 'Event Log', es: 'Log de Eventos' })}
          </p>
          {eventLog.length === 0 ? (
            <p className="text-xs text-zinc-600 italic">{t({ en: 'Interact with the elements above...', es: 'Interactúa con los elementos de arriba...' })}</p>
          ) : (
            <div className="space-y-0.5">
              {eventLog.map((line, i) => (
                <motion.p key={`${i}-${line}`} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="text-xs font-mono text-green-400">
                  <span className="text-zinc-600 mr-1.5">{'>'}</span>{line}
                </motion.p>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// DEMO 6 — Frameworks & Ecosystem
// ═══════════════════════════════════════════════════════════════

function FrameworksDemo() {
  const { t } = useLanguage();

  const frameworks = [
    {
      name: 'React',
      logo: '⚛️',
      desc: { en: 'Component-based UI library by Meta. Most popular.', es: 'Librería UI basada en componentes por Meta. La más popular.' },
      usedBy: 'Facebook, Instagram, Netflix, Airbnb',
      color: 'border-cyan-500/30 bg-cyan-500/5',
    },
    {
      name: 'Vue.js',
      logo: '🟢',
      desc: { en: 'Progressive framework. Easy to learn, great DX.', es: 'Framework progresivo. Fácil de aprender, excelente DX.' },
      usedBy: 'Alibaba, GitLab, Nintendo',
      color: 'border-green-500/30 bg-green-500/5',
    },
    {
      name: 'Angular',
      logo: '🔴',
      desc: { en: 'Full-featured framework by Google. Enterprise-focused.', es: 'Framework completo por Google. Enfocado en empresas.' },
      usedBy: 'Google, Microsoft, Samsung',
      color: 'border-red-500/30 bg-red-500/5',
    },
    {
      name: 'Svelte',
      logo: '🧡',
      desc: { en: 'Compiler-based. No virtual DOM = smaller, faster apps.', es: 'Basado en compilador. Sin virtual DOM = apps más pequeñas y rápidas.' },
      usedBy: 'NY Times, Apple, Spotify',
      color: 'border-orange-500/30 bg-orange-500/5',
    },
  ];

  const freeResources = [
    {
      name: 'midudev - JavaScript',
      url: 'https://www.youtube.com/c/midudev',
      desc: { en: 'Best Spanish-language JS/React content. Full courses free on YouTube.', es: 'Mejor contenido JS/React en español. Cursos completos gratis en YouTube.' },
      lang: '🇪🇸',
    },
    {
      name: 'freeCodeCamp',
      url: 'https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/',
      desc: { en: 'Interactive JS course with 300+ challenges. Earn a certification.', es: 'Curso JS interactivo con 300+ retos. Obtén una certificación.' },
      lang: '🇺🇸',
    },
    {
      name: 'javascript.info',
      url: 'https://javascript.info/',
      desc: { en: 'The most comprehensive modern JS tutorial. From basics to advanced.', es: 'El tutorial JS moderno más completo. De lo básico a lo avanzado.' },
      lang: '🇺🇸',
    },
    {
      name: 'MDN Web Docs',
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
      desc: { en: 'The official reference. Use it to look up any JS concept.', es: 'La referencia oficial. Úsala para buscar cualquier concepto JS.' },
      lang: '🇺🇸/🇪🇸',
    },
    {
      name: 'Aprende JavaScript - midudev',
      url: 'https://aprendejavascript.dev/',
      desc: { en: 'Free Spanish course by midudev. Progressive learning path.', es: 'Curso gratis en español por midudev. Ruta de aprendizaje progresiva.' },
      lang: '🇪🇸',
    },
    {
      name: 'The Odin Project',
      url: 'https://www.theodinproject.com/paths/full-stack-javascript',
      desc: { en: 'Full-stack JS path. Project-based learning with a strong community.', es: 'Ruta full-stack JS. Aprendizaje basado en proyectos con comunidad fuerte.' },
      lang: '🇺🇸',
    },
  ];

  const tools = [
    { name: 'VS Code', desc: { en: 'Best code editor. Free.', es: 'Mejor editor de código. Gratis.' }, url: 'https://code.visualstudio.com/', icon: '💻' },
    { name: 'CodePen', desc: { en: 'Online playground for quick experiments.', es: 'Playground online para experimentos rápidos.' }, url: 'https://codepen.io/', icon: '🖊️' },
    { name: 'StackBlitz', desc: { en: 'Full IDE in the browser. Instant environments.', es: 'IDE completo en el navegador. Entornos instantáneos.' }, url: 'https://stackblitz.com/', icon: '⚡' },
    { name: 'Chrome DevTools', desc: { en: 'Built-in browser debugger. Essential skill.', es: 'Debugger integrado del navegador. Habilidad esencial.' }, url: 'https://developer.chrome.com/docs/devtools/', icon: '🔧' },
  ];

  return (
    <div className="space-y-6">
      <p className="text-sm text-zinc-400">
        {t({ en: 'JavaScript powers the modern web. Here\'s the ecosystem you should know as a designer.', es: 'JavaScript impulsa la web moderna. Aquí está el ecosistema que debes conocer como diseñador.' })}
      </p>

      {/* Frameworks */}
      <div>
        <p className="text-xs text-zinc-500 uppercase tracking-wider mb-3 flex items-center gap-1.5">
          <Boxes className="size-3.5" />
          {t({ en: 'Popular Frameworks', es: 'Frameworks Populares' })}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {frameworks.map((fw) => (
            <div key={fw.name} className={`border rounded-xl p-3.5 ${fw.color} transition-all hover:brightness-110`}>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-lg">{fw.logo}</span>
                <span className="text-sm font-semibold text-white">{fw.name}</span>
              </div>
              <p className="text-xs text-zinc-400 mb-1.5">{t(fw.desc)}</p>
              <p className="text-[10px] text-zinc-600">{t({ en: 'Used by:', es: 'Usado por:' })} {fw.usedBy}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Free Resources */}
      <div>
        <p className="text-xs text-zinc-500 uppercase tracking-wider mb-3 flex items-center gap-1.5">
          <BookOpen className="size-3.5" />
          {t({ en: 'Free Learning Resources', es: 'Recursos de Aprendizaje Gratuitos' })}
        </p>
        <div className="space-y-2">
          {freeResources.map((r) => (
            <a
              key={r.name}
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:border-yellow-500/30 hover:bg-yellow-500/5 transition-all group"
            >
              <span className="text-base">{r.lang}</span>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-white group-hover:text-yellow-300 transition-colors">{r.name}</p>
                <p className="text-xs text-zinc-500 truncate">{t(r.desc)}</p>
              </div>
              <ExternalLink className="size-3.5 text-zinc-600 group-hover:text-yellow-400 flex-shrink-0 transition-colors" />
            </a>
          ))}
        </div>
      </div>

      {/* Tools */}
      <div>
        <p className="text-xs text-zinc-500 uppercase tracking-wider mb-3 flex items-center gap-1.5">
          <Code2 className="size-3.5" />
          {t({ en: 'Essential Tools', es: 'Herramientas Esenciales' })}
        </p>
        <div className="grid grid-cols-2 gap-2">
          {tools.map((tool) => (
            <a
              key={tool.name}
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 p-3 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:border-zinc-600 transition-all group"
            >
              <span className="text-lg">{tool.icon}</span>
              <div className="min-w-0">
                <p className="text-xs font-medium text-white">{tool.name}</p>
                <p className="text-[10px] text-zinc-500">{t(tool.desc)}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════

export function JavaScriptLab() {
  const { t } = useLanguage();
  const [activeConcept, setActiveConcept] = useState('variables');
  const [explored, setExplored] = useState<Set<string>>(new Set(['variables']));

  const handleSelect = (id: string) => {
    setActiveConcept(id);
    setExplored((prev) => new Set(prev).add(id));
  };

  const demoComponents: Record<string, React.ReactNode> = {
    variables: <VariablesDemo />,
    functions: <FunctionsDemo />,
    conditionals: <ConditionalsDemo />,
    dom: <DOMDemo />,
    events: <EventsDemo />,
    frameworks: <FrameworksDemo />,
  };

  return (
    <section className="scroll-mt-24">
      {/* Header */}
      <div className="bg-gradient-to-br from-yellow-950/40 via-amber-950/30 to-orange-950/20 border border-yellow-500/20 rounded-2xl p-6 md:p-8 mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="size-12 rounded-xl bg-yellow-500/20 border border-yellow-500/30 flex items-center justify-center">
            <Terminal className="size-6 text-yellow-400" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">
              {t({ en: 'JavaScript Interactive Lab', es: 'Laboratorio Interactivo de JavaScript' })}
            </h3>
            <p className="text-sm text-zinc-400">
              {t({ en: 'Write real JavaScript. Run it. See the output. Learn by doing.', es: 'Escribe JavaScript real. Ejecútalo. Ve el resultado. Aprende haciendo.' })}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs text-zinc-500">
          <Award className="size-3.5" />
          <span>{explored.size}/{concepts.length} {t({ en: 'explored', es: 'explorados' })}</span>
          <div className="flex-1 h-1.5 bg-zinc-800 rounded-full overflow-hidden ml-2">
            <motion.div className="h-full bg-gradient-to-r from-yellow-500 to-orange-500" animate={{ width: `${(explored.size / concepts.length) * 100}%` }} transition={{ type: 'spring', stiffness: 100 }} />
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
              <Play className="size-4 text-yellow-400" />
              <h4 className="text-sm font-semibold text-white">{t(concepts.find((c) => c.id === activeConcept)!.name)}</h4>
              <span className="ml-auto text-[10px] bg-yellow-500/20 text-yellow-400 px-2 py-0.5 rounded-full font-medium">
                {activeConcept === 'frameworks' ? t({ en: 'Reference', es: 'Referencia' }) : t({ en: 'Runnable!', es: '¡Ejecutable!' })}
              </span>
            </div>
            {demoComponents[activeConcept]}
          </div>
        </motion.div>
      </AnimatePresence>

      {explored.size === concepts.length && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mt-8 bg-gradient-to-r from-yellow-950/30 to-amber-950/20 border border-yellow-500/20 rounded-xl p-6 text-center">
          <Star className="size-8 text-yellow-400 mx-auto mb-3 fill-yellow-400" />
          <h4 className="text-lg font-bold text-white mb-2">{t({ en: 'JavaScript Foundations Complete!', es: '¡Fundamentos JavaScript Completos!' })}</h4>
          <p className="text-sm text-zinc-400 max-w-lg mx-auto">{t({ en: 'You understand the core concepts. Start with React (or Vue) and build real projects!', es: '¡Entiendes los conceptos fundamentales. Empieza con React (o Vue) y construye proyectos reales!' })}</p>
        </motion.div>
      )}
    </section>
  );
}