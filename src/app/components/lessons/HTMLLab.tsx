import React, { useState, useCallback } from 'react';
import { useLanguage } from '../layout/LanguageContext';
import { motion, AnimatePresence } from 'motion/react';
import {
  Code2,
  Eye,
  Layers,
  ChevronRight,
  Check,
  Copy,
  RotateCcw,
  Lightbulb,
  Star,
  Award,
  FileCode,
  Box,
  List,
  Image,
  Link,
  Table,
  FormInput,
  Play,
} from 'lucide-react';
import { copyToClipboard } from '../../utils/clipboard';
import { ScrollableTabs } from './ScrollableTabs';

// ─── Types ───────────────────────────────────────────────────

interface HTMLConcept {
  id: string;
  name: { en: string; es: string };
  icon: React.ElementType;
  color: string;
  accent: string;
}

// ─── Data ────────────────────────────────────────────────────

const concepts: HTMLConcept[] = [
  { id: 'structure', name: { en: 'Document Structure', es: 'Estructura del Documento' }, icon: FileCode, color: 'from-orange-500/20 to-red-500/20', accent: 'text-orange-400' },
  { id: 'semantic', name: { en: 'Semantic HTML', es: 'HTML Semántico' }, icon: Layers, color: 'from-blue-500/20 to-cyan-500/20', accent: 'text-blue-400' },
  { id: 'text', name: { en: 'Text & Lists', es: 'Texto y Listas' }, icon: List, color: 'from-green-500/20 to-emerald-500/20', accent: 'text-green-400' },
  { id: 'media', name: { en: 'Media & Links', es: 'Medios y Enlaces' }, icon: Image, color: 'from-purple-500/20 to-pink-500/20', accent: 'text-purple-400' },
  { id: 'forms', name: { en: 'Forms', es: 'Formularios' }, icon: FormInput, color: 'from-yellow-500/20 to-amber-500/20', accent: 'text-yellow-400' },
  { id: 'tables', name: { en: 'Tables', es: 'Tablas' }, icon: Table, color: 'from-teal-500/20 to-cyan-500/20', accent: 'text-teal-400' },
];

// ─── Code Examples ───────────────────────────────────────────

const codeExamples: Record<string, { code: string; explanation: { en: string; es: string } }> = {
  structure: {
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" 
    content="width=device-width, initial-scale=1.0">
  <title>My First Page</title>
</head>
<body>
  <header>
    <h1>Welcome to my site</h1>
    <nav>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>

  <main>
    <p>This is the main content area.</p>
  </main>

  <footer>
    <p>&copy; 2026 My Site</p>
  </footer>
</body>
</html>`,
    explanation: {
      en: 'Every HTML document starts with <!DOCTYPE html>. The <html> element wraps everything. <head> contains metadata (title, charset, viewport). <body> contains visible content structured with <header>, <main>, and <footer>.',
      es: 'Todo documento HTML empieza con <!DOCTYPE html>. El elemento <html> envuelve todo. <head> contiene metadatos (título, charset, viewport). <body> contiene contenido visible estructurado con <header>, <main> y <footer>.'
    }
  },
  semantic: {
    code: `<!-- Bad: div soup -->
<div class="header">
  <div class="nav">...</div>
</div>
<div class="content">
  <div class="article">...</div>
  <div class="sidebar">...</div>
</div>

<!-- Good: semantic HTML -->
<header>
  <nav>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
    </ul>
  </nav>
</header>
<main>
  <article>
    <h2>Article Title</h2>
    <p>Content here...</p>
  </article>
  <aside>
    <h3>Related Links</h3>
  </aside>
</main>`,
    explanation: {
      en: 'Semantic HTML uses meaningful tags (<header>, <nav>, <main>, <article>, <aside>, <footer>) instead of generic <div>s. This improves accessibility (screen readers), SEO (search engines understand content), and code readability.',
      es: 'El HTML semántico usa etiquetas significativas (<header>, <nav>, <main>, <article>, <aside>, <footer>) en lugar de <div>s genéricos. Esto mejora la accesibilidad (lectores de pantalla), SEO (buscadores entienden el contenido) y legibilidad del código.'
    }
  },
  text: {
    code: `<!-- Headings: h1 to h6 (hierarchy!) -->
<h1>Main Title (only one per page)</h1>
<h2>Section Title</h2>
<h3>Subsection</h3>

<!-- Paragraphs and emphasis -->
<p>This is a paragraph with 
  <strong>bold text</strong> and 
  <em>italic text</em>.
</p>

<!-- Unordered list -->
<ul>
  <li>Figma</li>
  <li>Sketch</li>
  <li>Adobe XD</li>
</ul>

<!-- Ordered list -->
<ol>
  <li>Research</li>
  <li>Wireframe</li>
  <li>Prototype</li>
  <li>Test</li>
</ol>

<!-- Description list -->
<dl>
  <dt>UX</dt>
  <dd>User Experience</dd>
  <dt>UI</dt>
  <dd>User Interface</dd>
</dl>`,
    explanation: {
      en: 'Headings (h1-h6) create hierarchy — h1 is the page title (only one!), h2 for sections, h3 for subsections. Use <strong> for importance, <em> for emphasis. Lists (<ul>, <ol>, <dl>) structure grouped content. Screen readers use heading hierarchy to navigate.',
      es: 'Los encabezados (h1-h6) crean jerarquía — h1 es el título de la página (¡solo uno!), h2 para secciones, h3 para subsecciones. Usa <strong> para importancia, <em> para énfasis. Las listas (<ul>, <ol>, <dl>) estructuran contenido agrupado. Los lectores de pantalla usan la jerarquía para navegar.'
    }
  },
  media: {
    code: `<!-- Image with alt text (accessibility!) -->
<img 
  src="photo.jpg" 
  alt="A designer working on wireframes"
  width="800" 
  height="600"
>

<!-- Figure with caption -->
<figure>
  <img src="chart.png" alt="User flow diagram">
  <figcaption>
    Fig 1: User registration flow
  </figcaption>
</figure>

<!-- Links -->
<a href="https://figma.com">Visit Figma</a>
<a href="mailto:hello@site.com">Email us</a>
<a href="#section2">Jump to Section 2</a>

<!-- Open in new tab (safely) -->
<a href="https://example.com" 
   target="_blank" 
   rel="noopener noreferrer">
  External Link
</a>

<!-- Video embed -->
<video controls width="640">
  <source src="demo.mp4" type="video/mp4">
  Your browser doesn't support video.
</video>`,
    explanation: {
      en: 'Images MUST have alt text for accessibility — describe what the image shows. Use <figure>/<figcaption> for images that need captions. Links can point to URLs, emails (mailto:), or page sections (#id). Always add rel="noopener noreferrer" to target="_blank" links for security.',
      es: 'Las imágenes DEBEN tener texto alt para accesibilidad — describe lo que muestra la imagen. Usa <figure>/<figcaption> para imágenes con leyendas. Los enlaces pueden apuntar a URLs, emails (mailto:), o secciones (#id). Siempre agrega rel="noopener noreferrer" a enlaces target="_blank" por seguridad.'
    }
  },
  forms: {
    code: `<form action="/submit" method="POST">
  <!-- Text input with label -->
  <label for="name">Full Name</label>
  <input 
    type="text" 
    id="name" 
    name="name" 
    placeholder="Jane Doe"
    required
  >

  <!-- Email (validates format) -->
  <label for="email">Email</label>
  <input 
    type="email" 
    id="email" 
    name="email"
    required
  >

  <!-- Password -->
  <label for="pass">Password</label>
  <input 
    type="password" 
    id="pass" 
    name="password"
    minlength="8"
  >

  <!-- Select dropdown -->
  <label for="role">Your Role</label>
  <select id="role" name="role">
    <option value="">Select...</option>
    <option value="designer">Designer</option>
    <option value="developer">Developer</option>
    <option value="pm">Product Manager</option>
  </select>

  <!-- Textarea -->
  <label for="bio">Bio</label>
  <textarea id="bio" name="bio" rows="4">
  </textarea>

  <!-- Checkbox -->
  <label>
    <input type="checkbox" name="terms" required>
    I accept the terms
  </label>

  <button type="submit">Sign Up</button>
</form>`,
    explanation: {
      en: 'Forms collect user data. Every input MUST have a <label> connected via for/id (critical for accessibility). Use the right input type (email, password, tel, number) for built-in validation and correct mobile keyboards. The required attribute prevents empty submissions. Use <fieldset>/<legend> to group related inputs.',
      es: 'Los formularios recolectan datos del usuario. Cada input DEBE tener un <label> conectado via for/id (crítico para accesibilidad). Usa el tipo correcto de input (email, password, tel, number) para validación nativa y teclados móviles correctos. El atributo required previene envíos vacíos. Usa <fieldset>/<legend> para agrupar inputs relacionados.'
    }
  },
  tables: {
    code: `<table>
  <caption>Design Sprint Schedule</caption>
  
  <thead>
    <tr>
      <th>Day</th>
      <th>Activity</th>
      <th>Output</th>
    </tr>
  </thead>
  
  <tbody>
    <tr>
      <td>Monday</td>
      <td>Map & Understand</td>
      <td>Problem definition</td>
    </tr>
    <tr>
      <td>Tuesday</td>
      <td>Sketch Solutions</td>
      <td>Individual sketches</td>
    </tr>
    <tr>
      <td>Wednesday</td>
      <td>Decide</td>
      <td>Winning concept</td>
    </tr>
    <tr>
      <td>Thursday</td>
      <td>Prototype</td>
      <td>Realistic mockup</td>
    </tr>
    <tr>
      <td>Friday</td>
      <td>Test with Users</td>
      <td>Validated learnings</td>
    </tr>
  </tbody>
</table>`,
    explanation: {
      en: 'Tables are for TABULAR DATA only (never for page layout!). Use <thead> for headers, <tbody> for data rows, <th> for header cells, <td> for data cells. <caption> describes the table for screen readers. Tables are responsive-unfriendly — on mobile, consider using stacked cards instead.',
      es: 'Las tablas son solo para DATOS TABULARES (¡nunca para layout!). Usa <thead> para encabezados, <tbody> para filas de datos, <th> para celdas de encabezado, <td> para celdas de datos. <caption> describe la tabla para lectores de pantalla. Las tablas no son amigables con responsive — en móvil, considera usar tarjetas apiladas.'
    }
  },
};

// ─── Interactive Editor ──────────────────────────────────────

function CodeEditor({ initialCode, conceptId }: { initialCode: string; conceptId: string }) {
  const { t } = useLanguage();
  const [code, setCode] = useState(initialCode);
  const [showPreview, setShowPreview] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    copyToClipboard(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReset = () => {
    setCode(initialCode);
  };

  // Generate a safe preview with basic styling
  const previewHTML = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { 
          font-family: -apple-system, system-ui, sans-serif; 
          padding: 16px; 
          background: #1a1a2e; 
          color: #e0e0e0;
          font-size: 14px;
          line-height: 1.6;
        }
        h1 { font-size: 1.5em; color: #fff; margin-bottom: 8px; }
        h2 { font-size: 1.25em; color: #ddd; margin-bottom: 6px; }
        h3 { font-size: 1.1em; color: #ccc; margin-bottom: 4px; }
        p { margin-bottom: 8px; }
        a { color: #818cf8; }
        ul, ol { padding-left: 20px; margin-bottom: 8px; }
        li { margin-bottom: 4px; }
        img { max-width: 100%; border-radius: 6px; }
        table { width: 100%; border-collapse: collapse; margin: 8px 0; }
        th, td { border: 1px solid #333; padding: 6px 10px; text-align: left; }
        th { background: #2a2a4a; color: #a5b4fc; }
        caption { color: #9ca3af; margin-bottom: 6px; font-size: 0.85em; }
        input, select, textarea { 
          display: block; width: 100%; padding: 6px 10px; margin: 4px 0 12px; 
          background: #2a2a3a; border: 1px solid #444; border-radius: 6px; 
          color: #fff; font-size: 13px;
        }
        label { display: block; color: #a5b4fc; font-size: 13px; margin-top: 4px; }
        button { 
          padding: 8px 16px; background: #6366f1; color: white; 
          border: none; border-radius: 6px; cursor: pointer; margin-top: 8px;
        }
        header, footer { padding: 8px 0; border-bottom: 1px solid #333; margin-bottom: 8px; }
        footer { border-bottom: none; border-top: 1px solid #333; margin-top: 8px; padding-top: 8px; }
        nav a { margin-right: 12px; }
        figure { margin: 8px 0; }
        figcaption { font-size: 0.8em; color: #888; margin-top: 4px; }
        aside { background: #2a2a3a; padding: 10px; border-radius: 6px; margin: 8px 0; }
        article { margin: 8px 0; }
        dt { font-weight: bold; color: #a5b4fc; }
        dd { margin-left: 16px; margin-bottom: 6px; }
        fieldset { border: 1px solid #444; border-radius: 6px; padding: 12px; margin: 8px 0; }
        legend { color: #a5b4fc; padding: 0 6px; }
      </style>
    </head>
    <body>${code}</body>
    </html>
  `;

  return (
    <div className="space-y-3">
      {/* Toolbar */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => setShowPreview(false)}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
            !showPreview ? 'bg-indigo-600 text-white' : 'bg-zinc-800 text-zinc-400 hover:text-white'
          }`}
        >
          <Code2 className="size-3.5" />
          {t({ en: 'Code', es: 'Código' })}
        </button>
        <button
          onClick={() => setShowPreview(true)}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
            showPreview ? 'bg-indigo-600 text-white' : 'bg-zinc-800 text-zinc-400 hover:text-white'
          }`}
        >
          <Eye className="size-3.5" />
          {t({ en: 'Preview', es: 'Vista Previa' })}
        </button>
        <div className="flex-1" />
        <button onClick={handleCopy} className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs bg-zinc-800 text-zinc-400 hover:text-white transition-colors">
          {copied ? <Check className="size-3 text-green-400" /> : <Copy className="size-3" />}
          {copied ? t({ en: 'Copied', es: 'Copiado' }) : t({ en: 'Copy', es: 'Copiar' })}
        </button>
        <button onClick={handleReset} className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs bg-zinc-800 text-zinc-400 hover:text-white transition-colors">
          <RotateCcw className="size-3" />
          {t({ en: 'Reset', es: 'Resetear' })}
        </button>
      </div>

      {/* Editor / Preview */}
      <AnimatePresence mode="wait">
        {!showPreview ? (
          <motion.div key="editor" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              spellCheck={false}
              className="w-full h-72 bg-zinc-950 border border-zinc-800 rounded-xl p-4 text-sm font-mono text-zinc-200 leading-relaxed resize-none focus:outline-none focus:border-indigo-500/50 hide-scrollbar"
              style={{ tabSize: 2 }}
            />
          </motion.div>
        ) : (
          <motion.div key="preview" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <iframe
              srcDoc={previewHTML}
              title="HTML Preview"
              sandbox="allow-scripts"
              className="w-full h-72 bg-[#1a1a2e] border border-zinc-800 rounded-xl"
              style={{ border: 'none' }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <p className="text-[11px] text-zinc-600 text-center">
        {t({ en: 'Edit the code and switch to Preview to see your changes live', es: 'Edita el código y cambia a Vista Previa para ver tus cambios en vivo' })}
      </p>
    </div>
  );
}

// ─── Element Anatomy ─────────────────────────────────────────

function ElementAnatomy() {
  const { t } = useLanguage();
  const [hoveredPart, setHoveredPart] = useState<string | null>(null);

  const parts = [
    { id: 'opening', label: { en: 'Opening tag', es: 'Etiqueta de apertura' }, color: 'text-blue-400', bg: 'bg-blue-500/10' },
    { id: 'attribute', label: { en: 'Attribute', es: 'Atributo' }, color: 'text-purple-400', bg: 'bg-purple-500/10' },
    { id: 'value', label: { en: 'Value', es: 'Valor' }, color: 'text-green-400', bg: 'bg-green-500/10' },
    { id: 'content', label: { en: 'Content', es: 'Contenido' }, color: 'text-orange-400', bg: 'bg-orange-500/10' },
    { id: 'closing', label: { en: 'Closing tag', es: 'Etiqueta de cierre' }, color: 'text-red-400', bg: 'bg-red-500/10' },
  ];

  return (
    <div className="bg-zinc-900/70 border border-zinc-800 rounded-xl p-5 space-y-4">
      <p className="text-sm font-medium text-white flex items-center gap-2">
        <Box className="size-4 text-indigo-400" />
        {t({ en: 'Anatomy of an HTML Element', es: 'Anatomía de un Elemento HTML' })}
      </p>

      {/* Interactive anatomy */}
      <div className="flex flex-wrap items-center gap-0 font-mono text-lg justify-center py-4">
        <span
          onMouseEnter={() => setHoveredPart('opening')}
          onMouseLeave={() => setHoveredPart(null)}
          className={`transition-all cursor-pointer px-1 py-0.5 rounded ${hoveredPart === 'opening' ? 'bg-blue-500/20 text-blue-300 scale-110' : 'text-blue-400'}`}
        >{'<a'}</span>
        <span className="text-zinc-600 mx-0.5"> </span>
        <span
          onMouseEnter={() => setHoveredPart('attribute')}
          onMouseLeave={() => setHoveredPart(null)}
          className={`transition-all cursor-pointer px-1 py-0.5 rounded ${hoveredPart === 'attribute' ? 'bg-purple-500/20 text-purple-300 scale-110' : 'text-purple-400'}`}
        >href</span>
        <span className="text-zinc-500">=</span>
        <span
          onMouseEnter={() => setHoveredPart('value')}
          onMouseLeave={() => setHoveredPart(null)}
          className={`transition-all cursor-pointer px-1 py-0.5 rounded ${hoveredPart === 'value' ? 'bg-green-500/20 text-green-300 scale-110' : 'text-green-400'}`}
        >{'"https://..."'}</span>
        <span
          onMouseEnter={() => setHoveredPart('opening')}
          onMouseLeave={() => setHoveredPart(null)}
          className={`transition-all cursor-pointer px-1 py-0.5 rounded ${hoveredPart === 'opening' ? 'bg-blue-500/20 text-blue-300 scale-110' : 'text-blue-400'}`}
        >{'>'}</span>
        <span
          onMouseEnter={() => setHoveredPart('content')}
          onMouseLeave={() => setHoveredPart(null)}
          className={`transition-all cursor-pointer px-1 py-0.5 rounded ${hoveredPart === 'content' ? 'bg-orange-500/20 text-orange-300 scale-110' : 'text-orange-400'}`}
        >Click me</span>
        <span
          onMouseEnter={() => setHoveredPart('closing')}
          onMouseLeave={() => setHoveredPart(null)}
          className={`transition-all cursor-pointer px-1 py-0.5 rounded ${hoveredPart === 'closing' ? 'bg-red-500/20 text-red-300 scale-110' : 'text-red-400'}`}
        >{'</a>'}</span>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-2 justify-center">
        {parts.map((p) => (
          <span
            key={p.id}
            onMouseEnter={() => setHoveredPart(p.id)}
            onMouseLeave={() => setHoveredPart(null)}
            className={`text-[11px] px-2.5 py-1 rounded-full border transition-all cursor-pointer ${
              hoveredPart === p.id
                ? `${p.bg} ${p.color} border-current`
                : 'bg-zinc-800/50 text-zinc-500 border-zinc-800'
            }`}
          >
            {t(p.label)}
          </span>
        ))}
      </div>

      {/* Description on hover */}
      <AnimatePresence mode="wait">
        {hoveredPart && (
          <motion.p
            key={hoveredPart}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="text-xs text-zinc-400 text-center"
          >
            {hoveredPart === 'opening' && t({ en: 'The opening tag starts the element — includes the tag name', es: 'La etiqueta de apertura inicia el elemento — incluye el nombre de la etiqueta' })}
            {hoveredPart === 'attribute' && t({ en: 'Attributes add extra info — like href for links or src for images', es: 'Los atributos agregan información extra — como href para enlaces o src para imágenes' })}
            {hoveredPart === 'value' && t({ en: 'The attribute value — always wrapped in quotes', es: 'El valor del atributo — siempre entre comillas' })}
            {hoveredPart === 'content' && t({ en: 'The content between tags — text, images, or other elements', es: 'El contenido entre etiquetas — texto, imágenes u otros elementos' })}
            {hoveredPart === 'closing' && t({ en: 'The closing tag ends the element — same name with a / prefix', es: 'La etiqueta de cierre termina el elemento — mismo nombre con prefijo /' })}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════

export function HTMLLab() {
  const { t } = useLanguage();
  const [activeConcept, setActiveConcept] = useState('structure');
  const [exploredConcepts, setExploredConcepts] = useState<Set<string>>(new Set(['structure']));

  const currentConcept = concepts.find((c) => c.id === activeConcept)!;
  const example = codeExamples[activeConcept];

  const handleSelect = (id: string) => {
    setActiveConcept(id);
    setExploredConcepts((prev) => new Set(prev).add(id));
  };

  return (
    <section className="scroll-mt-24">
      {/* Header */}
      <div className="bg-gradient-to-br from-orange-950/40 via-red-950/30 to-pink-950/20 border border-orange-500/20 rounded-2xl p-6 md:p-8 mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="size-12 rounded-xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center">
            <Code2 className="size-6 text-orange-400" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">
              {t({ en: 'HTML Interactive Lab', es: 'Laboratorio Interactivo de HTML' })}
            </h3>
            <p className="text-sm text-zinc-400">
              {t({ en: 'Explore HTML structure with a live code editor. Edit, preview, learn.', es: 'Explora la estructura HTML con un editor de código en vivo. Edita, previsualiza, aprende.' })}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs text-zinc-500">
          <Award className="size-3.5" />
          <span>{exploredConcepts.size}/{concepts.length} {t({ en: 'explored', es: 'explorados' })}</span>
          <div className="flex-1 h-1.5 bg-zinc-800 rounded-full overflow-hidden ml-2">
            <motion.div
              className="h-full bg-gradient-to-r from-orange-500 to-red-500"
              animate={{ width: `${(exploredConcepts.size / concepts.length) * 100}%` }}
              transition={{ type: 'spring', stiffness: 100 }}
            />
          </div>
        </div>
      </div>

      {/* Element Anatomy (always visible) */}
      <div className="mb-6">
        <ElementAnatomy />
      </div>

      {/* Concept Selector */}
      <ScrollableTabs className="mb-6">
        {concepts.map((c) => {
          const Icon = c.icon;
          const isActive = activeConcept === c.id;
          const isDone = exploredConcepts.has(c.id);
          return (
            <button
              key={c.id}
              onClick={() => handleSelect(c.id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all whitespace-nowrap flex-shrink-0 ${
                isActive
                  ? `bg-white/10 ${c.accent} ring-1 ring-white/10`
                  : isDone
                    ? 'text-zinc-400 hover:text-zinc-200 hover:bg-white/5'
                    : 'text-zinc-500 hover:text-zinc-300 hover:bg-white/5'
              }`}
            >
              <Icon className="size-3.5" />
              {t(c.name)}
              {isDone && !isActive && <Check className="size-2.5 text-green-500" />}
            </button>
          );
        })}
      </ScrollableTabs>

      {/* Active Concept */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeConcept}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="space-y-5"
        >
          {/* Explanation */}
          <div className={`bg-gradient-to-r ${currentConcept.color} border border-white/5 rounded-xl p-4`}>
            <div className="flex gap-3 items-start">
              <Lightbulb className={`size-4 mt-0.5 flex-shrink-0 ${currentConcept.accent}`} />
              <p className="text-sm text-zinc-200 leading-relaxed">{t(example.explanation)}</p>
            </div>
          </div>

          {/* Code Editor */}
          <div className="bg-black/40 border border-zinc-800 rounded-xl p-5 md:p-6">
            <div className="flex items-center gap-2 mb-4">
              <Play className="size-4 text-orange-400" />
              <h4 className="text-sm font-semibold text-white">
                {t({ en: 'Live Code Editor', es: 'Editor de Código en Vivo' })}
              </h4>
              <span className="ml-auto text-[10px] bg-orange-500/20 text-orange-400 px-2 py-0.5 rounded-full font-medium">
                {t({ en: 'Editable!', es: '¡Editable!' })}
              </span>
            </div>
            <CodeEditor initialCode={example.code} conceptId={activeConcept} />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Completion badge */}
      {exploredConcepts.size === concepts.length && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 bg-gradient-to-r from-orange-950/30 to-amber-950/20 border border-orange-500/20 rounded-xl p-6 text-center"
        >
          <Star className="size-8 text-orange-400 mx-auto mb-3 fill-orange-400" />
          <h4 className="text-lg font-bold text-white mb-2">
            {t({ en: 'All HTML Concepts Explored!', es: '!Todos los Conceptos HTML Explorados!' })}
          </h4>
          <p className="text-sm text-zinc-400 max-w-lg mx-auto">
            {t({ en: 'You now understand the building blocks of every web page. Next up: CSS to make it beautiful!', es: 'Ahora entiendes los bloques de construcción de toda página web. Siguiente: CSS para hacerlo hermoso!' })}
          </p>
        </motion.div>
      )}
    </section>
  );
}