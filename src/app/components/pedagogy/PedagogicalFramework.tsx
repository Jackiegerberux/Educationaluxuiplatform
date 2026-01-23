import React from 'react';
import { useLanguage } from '../layout/LanguageContext';
import { LessonLayout } from '../learning/LessonLayout';
import { 
  BookOpen, 
  Target, 
  Layers, 
  FileCheck, 
  Award, 
  TrendingUp, 
  CheckCircle2, 
  Users, 
  Sparkles,
  BarChart3,
  Clipboard,
  Eye,
  Layout
} from 'lucide-react';

export function PedagogicalFramework() {
  const { t } = useLanguage();

  const sections = [
    {
      id: 'purpose',
      icon: Target,
      title: { en: 'Purpose & Target Learners', es: 'Propósito y Público Objetivo' },
      content: {
        en: (
          <>
            <p className="text-zinc-300 leading-relaxed mb-4">
              AditiDesign is a professional educational platform designed for <strong>trainee designers onboarding into UX/UI roles</strong>. 
              Our mission is to transform theoretical knowledge into practical competencies through applied learning.
            </p>
            <div className="bg-indigo-950/30 border border-indigo-500/20 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-indigo-400 mb-3">Target Learners</h3>
              <ul className="space-y-2 text-zinc-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="size-5 text-indigo-400 mt-0.5 shrink-0" />
                  <span>Junior designers transitioning from academic to professional environments</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="size-5 text-indigo-400 mt-0.5 shrink-0" />
                  <span>Career changers entering UX/UI design field</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="size-5 text-indigo-400 mt-0.5 shrink-0" />
                  <span>Self-taught designers seeking structured professional knowledge</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="size-5 text-indigo-400 mt-0.5 shrink-0" />
                  <span>Design professionals expanding their competencies</span>
                </li>
              </ul>
            </div>
          </>
        ),
        es: (
          <>
            <p className="text-zinc-300 leading-relaxed mb-4">
              AditiDesign es una plataforma educativa profesional diseñada para <strong>diseñadores en formación incorporándose a roles de UX/UI</strong>. 
              Nuestra misión es transformar el conocimiento teórico en competencias prácticas a través del aprendizaje aplicado.
            </p>
            <div className="bg-indigo-950/30 border border-indigo-500/20 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-indigo-400 mb-3">Público Objetivo</h3>
              <ul className="space-y-2 text-zinc-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="size-5 text-indigo-400 mt-0.5 shrink-0" />
                  <span>Diseñadores junior en transición de entornos académicos a profesionales</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="size-5 text-indigo-400 mt-0.5 shrink-0" />
                  <span>Profesionales en cambio de carrera hacia UX/UI</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="size-5 text-indigo-400 mt-0.5 shrink-0" />
                  <span>Diseñadores autodidactas buscando conocimiento profesional estructurado</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="size-5 text-indigo-400 mt-0.5 shrink-0" />
                  <span>Profesionales del diseño expandiendo sus competencias</span>
                </li>
              </ul>
            </div>
          </>
        )
      }
    },
    {
      id: 'approach',
      icon: Sparkles,
      title: { en: 'Pedagogical Approach', es: 'Enfoque Pedagógico' },
      content: {
        en: (
          <>
            <p className="text-zinc-300 leading-relaxed mb-6">
              Our learning model combines three evidence-based principles:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-green-950/20 border border-green-500/20 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-green-400 mb-3">Applied Learning</h3>
                <p className="text-sm text-zinc-300">
                  Every lesson connects theory to real-world practice with concrete examples, tools, and deliverables. 
                  No abstract concepts without practical application.
                </p>
              </div>
              <div className="bg-blue-950/20 border border-blue-500/20 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-blue-400 mb-3">Progressive Complexity</h3>
                <p className="text-sm text-zinc-300">
                  Content is structured from beginner to advanced levels, allowing learners to build competencies 
                  incrementally without overwhelming cognitive load.
                </p>
              </div>
              <div className="bg-purple-950/20 border border-purple-500/20 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-purple-400 mb-3">Competency-Based</h3>
                <p className="text-sm text-zinc-300">
                  Success is measured by demonstrable skills through quizzes, exercises, checklists, and deliverables—not 
                  passive content consumption.
                </p>
              </div>
            </div>
          </>
        ),
        es: (
          <>
            <p className="text-zinc-300 leading-relaxed mb-6">
              Nuestro modelo de aprendizaje combina tres principios basados en evidencia:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-green-950/20 border border-green-500/20 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-green-400 mb-3">Aprendizaje Aplicado</h3>
                <p className="text-sm text-zinc-300">
                  Cada lección conecta teoría con práctica del mundo real mediante ejemplos concretos, herramientas y entregables. 
                  Sin conceptos abstractos sin aplicación práctica.
                </p>
              </div>
              <div className="bg-blue-950/20 border border-blue-500/20 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-blue-400 mb-3">Complejidad Progresiva</h3>
                <p className="text-sm text-zinc-300">
                  El contenido está estructurado desde niveles principiante hasta avanzado, permitiendo construir competencias 
                  incrementalmente sin sobrecarga cognitiva.
                </p>
              </div>
              <div className="bg-purple-950/20 border border-purple-500/20 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-purple-400 mb-3">Basado en Competencias</h3>
                <p className="text-sm text-zinc-300">
                  El éxito se mide por habilidades demostrables a través de quizzes, ejercicios, checklists y entregables—no 
                  por consumo pasivo de contenido.
                </p>
              </div>
            </div>
          </>
        )
      }
    },
    {
      id: 'curriculum',
      icon: Layers,
      title: { en: 'Curriculum Structure', es: 'Estructura del Currículum' },
      content: {
        en: (
          <>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Learning Tracks</h3>
                <p className="text-zinc-300 mb-4">
                  The curriculum is organized into specialized tracks, each containing progressive lessons:
                </p>
                <ul className="space-y-2 text-zinc-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-5 text-indigo-400 mt-0.5 shrink-0" />
                    <span><strong>UX Research Track:</strong> User research, personas, journey maps, testing methods</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-5 text-indigo-400 mt-0.5 shrink-0" />
                    <span><strong>UX Design Track:</strong> Information architecture, wireframing, prototyping, interaction design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-5 text-indigo-400 mt-0.5 shrink-0" />
                    <span><strong>UI Design Track:</strong> Visual hierarchy, typography, color theory, design systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-5 text-indigo-400 mt-0.5 shrink-0" />
                    <span><strong>Professional Track:</strong> Design process, collaboration, handoff, ethics</span>
                  </li>
                </ul>
              </div>
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Roadmap Canvas</h3>
                <p className="text-zinc-300 text-sm">
                  An interactive visual roadmap shows all lessons organized by tracks, allowing learners to see their progress 
                  and navigate between related concepts. Each lesson node displays its status (Not Started / In Progress / Complete) 
                  and quality badge (Bronze / Silver / Gold).
                </p>
              </div>
            </div>
          </>
        ),
        es: (
          <>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Rutas de Aprendizaje</h3>
                <p className="text-zinc-300 mb-4">
                  El currículum está organizado en rutas especializadas, cada una con lecciones progresivas:
                </p>
                <ul className="space-y-2 text-zinc-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-5 text-indigo-400 mt-0.5 shrink-0" />
                    <span><strong>Ruta de Investigación UX:</strong> Investigación de usuarios, personas, mapas de viaje, métodos de testing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-5 text-indigo-400 mt-0.5 shrink-0" />
                    <span><strong>Ruta de Diseño UX:</strong> Arquitectura de información, wireframing, prototipado, diseño de interacción</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-5 text-indigo-400 mt-0.5 shrink-0" />
                    <span><strong>Ruta de Diseño UI:</strong> Jerarquía visual, tipografía, teoría del color, sistemas de diseño</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-5 text-indigo-400 mt-0.5 shrink-0" />
                    <span><strong>Ruta Profesional:</strong> Proceso de diseño, colaboración, handoff, ética</span>
                  </li>
                </ul>
              </div>
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Canvas de Roadmap</h3>
                <p className="text-zinc-300 text-sm">
                  Un roadmap visual interactivo muestra todas las lecciones organizadas por rutas, permitiendo a los estudiantes 
                  ver su progreso y navegar entre conceptos relacionados. Cada nodo de lección muestra su estado (Sin empezar / En progreso / Completa) 
                  y badge de calidad (Bronze / Silver / Gold).
                </p>
              </div>
            </div>
          </>
        )
      }
    },
    {
      id: 'lesson-template',
      icon: Layout,
      title: { en: 'Lesson Template', es: 'Template de Lección' },
      content: {
        en: (
          <>
            <p className="text-zinc-300 leading-relaxed mb-6">
              Every lesson follows a standardized 12-section template to ensure consistency and learning effectiveness:
            </p>
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
              <ol className="space-y-3 text-zinc-300">
                <li className="flex gap-3">
                  <span className="size-6 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0 text-xs font-bold text-indigo-400">1</span>
                  <div>
                    <strong className="text-white">Overview/Definition:</strong> Clear explanation of what the concept is
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="size-6 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0 text-xs font-bold text-indigo-400">2</span>
                  <div>
                    <strong className="text-white">Why it Matters:</strong> Justification and relevance in professional practice
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="size-6 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0 text-xs font-bold text-indigo-400">3</span>
                  <div>
                    <strong className="text-white">Key Principles:</strong> Core concepts (minimum 4)
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="size-6 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0 text-xs font-bold text-indigo-400">4</span>
                  <div>
                    <strong className="text-white">How to Apply:</strong> Step-by-step practical guide
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="size-6 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0 text-xs font-bold text-indigo-400">5</span>
                  <div>
                    <strong className="text-white">Common Mistakes:</strong> What to avoid (minimum 3)
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="size-6 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0 text-xs font-bold text-indigo-400">6</span>
                  <div>
                    <strong className="text-white">Deliverables:</strong> What tangible outputs to create
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="size-6 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0 text-xs font-bold text-indigo-400">7</span>
                  <div>
                    <strong className="text-white">Tools:</strong> Recommended software and platforms (Design / Research / Handoff)
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="size-6 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0 text-xs font-bold text-indigo-400">8</span>
                  <div>
                    <strong className="text-white">AI in Practice:</strong> How to use AI tools for this concept
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="size-6 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0 text-xs font-bold text-indigo-400">9</span>
                  <div>
                    <strong className="text-white">Validation:</strong> How to validate and measure success
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="size-6 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0 text-xs font-bold text-indigo-400">10</span>
                  <div>
                    <strong className="text-white">Knowledge Check:</strong> Quiz questions (minimum 2)
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="size-6 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0 text-xs font-bold text-indigo-400">11</span>
                  <div>
                    <strong className="text-white">Real Example:</strong> Case study with interactive component
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="size-6 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0 text-xs font-bold text-indigo-400">12</span>
                  <div>
                    <strong className="text-white">References:</strong> Sources and further reading
                  </div>
                </li>
              </ol>
            </div>
          </>
        ),
        es: (
          <>
            <p className="text-zinc-300 leading-relaxed mb-6">
              Cada lección sigue un template estandarizado de 12 secciones para asegurar consistencia y efectividad de aprendizaje:
            </p>
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
              <ol className="space-y-3 text-zinc-300">
                <li className="flex gap-3">
                  <span className="size-6 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0 text-xs font-bold text-indigo-400">1</span>
                  <div>
                    <strong className="text-white">Resumen/Definición:</strong> Explicación clara de qué es el concepto
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="size-6 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0 text-xs font-bold text-indigo-400">2</span>
                  <div>
                    <strong className="text-white">Por qué Importa:</strong> Justificación y relevancia en la práctica profesional
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="size-6 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0 text-xs font-bold text-indigo-400">3</span>
                  <div>
                    <strong className="text-white">Principios Clave:</strong> Conceptos fundamentales (mínimo 4)
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="size-6 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0 text-xs font-bold text-indigo-400">4</span>
                  <div>
                    <strong className="text-white">Cómo Aplicar:</strong> Guía práctica paso a paso
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="size-6 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0 text-xs font-bold text-indigo-400">5</span>
                  <div>
                    <strong className="text-white">Errores Comunes:</strong> Qué evitar (mínimo 3)
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="size-6 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0 text-xs font-bold text-indigo-400">6</span>
                  <div>
                    <strong className="text-white">Entregables:</strong> Qué outputs tangibles crear
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="size-6 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0 text-xs font-bold text-indigo-400">7</span>
                  <div>
                    <strong className="text-white">Herramientas:</strong> Software y plataformas recomendadas (Diseño / Investigación / Handoff)
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="size-6 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0 text-xs font-bold text-indigo-400">8</span>
                  <div>
                    <strong className="text-white">IA en Práctica:</strong> Cómo usar herramientas de IA para este concepto
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="size-6 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0 text-xs font-bold text-indigo-400">9</span>
                  <div>
                    <strong className="text-white">Validación:</strong> Cómo validar y medir el éxito
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="size-6 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0 text-xs font-bold text-indigo-400">10</span>
                  <div>
                    <strong className="text-white">Verificación de Conocimiento:</strong> Preguntas de quiz (mínimo 2)
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="size-6 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0 text-xs font-bold text-indigo-400">11</span>
                  <div>
                    <strong className="text-white">Ejemplo Real:</strong> Caso de estudio con componente interactivo
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="size-6 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0 text-xs font-bold text-indigo-400">12</span>
                  <div>
                    <strong className="text-white">Referencias:</strong> Fuentes y lecturas adicionales
                  </div>
                </li>
              </ol>
            </div>
          </>
        )
      }
    },
    {
      id: 'preview-rules',
      icon: Eye,
      title: { en: 'Preview vs Full Lesson', es: 'Preview vs Lección Completa' },
      content: {
        en: (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-950/20 border border-blue-500/20 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-blue-400 mb-4 flex items-center gap-2">
                  <Eye className="size-5" />
                  Preview Modal (Quick View)
                </h3>
                <p className="text-sm text-zinc-400 mb-4">Width: 540px drawer on right side</p>
                <ul className="space-y-2 text-sm text-zinc-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-blue-400 mt-0.5 shrink-0" />
                    <span>Title + Level + Time estimate</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-blue-400 mt-0.5 shrink-0" />
                    <span>Definition (full)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-blue-400 mt-0.5 shrink-0" />
                    <span>Why it matters (truncated)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-blue-400 mt-0.5 shrink-0" />
                    <span>Key Principles (max 4 bullets)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-blue-400 mt-0.5 shrink-0" />
                    <span>Real example (truncated)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-blue-400 mt-0.5 shrink-0" />
                    <span>CTA: "Open Full Lesson"</span>
                  </li>
                </ul>
              </div>
              <div className="bg-indigo-950/20 border border-indigo-500/20 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-indigo-400 mb-4 flex items-center gap-2">
                  <Layout className="size-5" />
                  Full Lesson Page
                </h3>
                <p className="text-sm text-zinc-400 mb-4">Route: /lesson/:slug</p>
                <ul className="space-y-2 text-sm text-zinc-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-indigo-400 mt-0.5 shrink-0" />
                    <span>All 12 sections displayed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-indigo-400 mt-0.5 shrink-0" />
                    <span>Sticky TOC sidebar (desktop)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-indigo-400 mt-0.5 shrink-0" />
                    <span>TOC drawer button (mobile)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-indigo-400 mt-0.5 shrink-0" />
                    <span>Smooth scroll to sections</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-indigo-400 mt-0.5 shrink-0" />
                    <span>Active section highlighting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-indigo-400 mt-0.5 shrink-0" />
                    <span>Interactive examples embedded</span>
                  </li>
                </ul>
              </div>
            </div>
          </>
        ),
        es: (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-950/20 border border-blue-500/20 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-blue-400 mb-4 flex items-center gap-2">
                  <Eye className="size-5" />
                  Modal de Preview (Vista Rápida)
                </h3>
                <p className="text-sm text-zinc-400 mb-4">Ancho: 540px drawer lateral derecho</p>
                <ul className="space-y-2 text-sm text-zinc-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-blue-400 mt-0.5 shrink-0" />
                    <span>Título + Nivel + Tiempo estimado</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-blue-400 mt-0.5 shrink-0" />
                    <span>Definición (completa)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-blue-400 mt-0.5 shrink-0" />
                    <span>Por qué importa (truncado)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-blue-400 mt-0.5 shrink-0" />
                    <span>Principios Clave (máx 4 puntos)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-blue-400 mt-0.5 shrink-0" />
                    <span>Ejemplo real (truncado)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-blue-400 mt-0.5 shrink-0" />
                    <span>CTA: "Abrir Lección Completa"</span>
                  </li>
                </ul>
              </div>
              <div className="bg-indigo-950/20 border border-indigo-500/20 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-indigo-400 mb-4 flex items-center gap-2">
                  <Layout className="size-5" />
                  Página de Lección Completa
                </h3>
                <p className="text-sm text-zinc-400 mb-4">Ruta: /lesson/:slug</p>
                <ul className="space-y-2 text-sm text-zinc-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-indigo-400 mt-0.5 shrink-0" />
                    <span>Las 12 secciones mostradas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-indigo-400 mt-0.5 shrink-0" />
                    <span>Sidebar TOC sticky (desktop)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-indigo-400 mt-0.5 shrink-0" />
                    <span>Botón drawer TOC (móvil)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-indigo-400 mt-0.5 shrink-0" />
                    <span>Scroll suave a secciones</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-indigo-400 mt-0.5 shrink-0" />
                    <span>Resaltado de sección activa</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-indigo-400 mt-0.5 shrink-0" />
                    <span>Ejemplos interactivos embebidos</span>
                  </li>
                </ul>
              </div>
            </div>
          </>
        )
      }
    },
    {
      id: 'evaluation',
      icon: Clipboard,
      title: { en: 'Evaluation System', es: 'Sistema de Evaluación' },
      content: {
        en: (
          <>
            <p className="text-zinc-300 leading-relaxed mb-6">
              Learning is assessed through multiple competency-based evaluation methods:
            </p>
            <div className="space-y-4">
              <div className="bg-orange-950/20 border border-orange-500/20 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-orange-400 mb-3 flex items-center gap-2">
                  <Clipboard className="size-5" />
                  Knowledge Check (Quiz)
                </h3>
                <p className="text-sm text-zinc-300">
                  Multiple-choice questions with immediate feedback. Minimum 2 questions per lesson testing 
                  understanding of core concepts.
                </p>
              </div>
              <div className="bg-green-950/20 border border-green-500/20 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-green-400 mb-3 flex items-center gap-2">
                  <FileCheck className="size-5" />
                  Deliverable-Based Assessment
                </h3>
                <p className="text-sm text-zinc-300">
                  Each lesson specifies tangible outputs (e.g., wireframe, persona, journey map). 
                  Learners demonstrate competency by creating these artifacts.
                </p>
              </div>
              <div className="bg-blue-950/20 border border-blue-500/20 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-blue-400 mb-3 flex items-center gap-2">
                  <CheckCircle2 className="size-5" />
                  Application Checklist
                </h3>
                <p className="text-sm text-zinc-300">
                  Step-by-step practical guides that learners can follow and check off as they apply 
                  concepts to real projects.
                </p>
              </div>
            </div>
          </>
        ),
        es: (
          <>
            <p className="text-zinc-300 leading-relaxed mb-6">
              El aprendizaje se evalúa mediante múltiples métodos basados en competencias:
            </p>
            <div className="space-y-4">
              <div className="bg-orange-950/20 border border-orange-500/20 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-orange-400 mb-3 flex items-center gap-2">
                  <Clipboard className="size-5" />
                  Verificación de Conocimiento (Quiz)
                </h3>
                <p className="text-sm text-zinc-300">
                  Preguntas de opción múltiple con feedback inmediato. Mínimo 2 preguntas por lección evaluando 
                  comprensión de conceptos fundamentales.
                </p>
              </div>
              <div className="bg-green-950/20 border border-green-500/20 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-green-400 mb-3 flex items-center gap-2">
                  <FileCheck className="size-5" />
                  Evaluación Basada en Entregables
                </h3>
                <p className="text-sm text-zinc-300">
                  Cada lección especifica outputs tangibles (ej: wireframe, persona, mapa de viaje). 
                  Los estudiantes demuestran competencia creando estos artefactos.
                </p>
              </div>
              <div className="bg-blue-950/20 border border-blue-500/20 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-blue-400 mb-3 flex items-center gap-2">
                  <CheckCircle2 className="size-5" />
                  Checklist de Aplicación
                </h3>
                <p className="text-sm text-zinc-300">
                  Guías prácticas paso a paso que los estudiantes pueden seguir y marcar mientras aplican 
                  conceptos a proyectos reales.
                </p>
              </div>
            </div>
          </>
        )
      }
    },
    {
      id: 'quality',
      icon: Award,
      title: { en: 'Quality Badges', es: 'Badges de Calidad' },
      content: {
        en: (
          <>
            <p className="text-zinc-300 leading-relaxed mb-6">
              Each lesson is evaluated for completeness and quality using a three-tier badge system:
            </p>
            <div className="space-y-4">
              <div className="bg-amber-950/20 border border-amber-500/20 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="px-3 py-1 bg-amber-600/20 border border-amber-600/30 rounded-full text-xs font-bold text-amber-400 uppercase tracking-wider">
                    Bronze
                  </div>
                  <h3 className="text-lg font-semibold text-amber-400">Minimum Viable Lesson</h3>
                </div>
                <p className="text-sm text-zinc-300 mb-3">Meets basic requirements:</p>
                <ul className="space-y-1 text-sm text-zinc-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-amber-400 mt-0.5 shrink-0" />
                    <span>Definition present</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-amber-400 mt-0.5 shrink-0" />
                    <span>Why it matters present</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-amber-400 mt-0.5 shrink-0" />
                    <span>At least 4 key principles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-amber-400 mt-0.5 shrink-0" />
                    <span>At least 3 common mistakes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-amber-400 mt-0.5 shrink-0" />
                    <span>At least 2 quiz questions</span>
                  </li>
                </ul>
              </div>
              <div className="bg-zinc-400/10 border border-zinc-400/20 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="px-3 py-1 bg-zinc-400/20 border border-zinc-400/30 rounded-full text-xs font-bold text-zinc-300 uppercase tracking-wider">
                    Silver
                  </div>
                  <h3 className="text-lg font-semibold text-zinc-300">Enhanced Lesson</h3>
                </div>
                <p className="text-sm text-zinc-300 mb-3">Bronze requirements + additional content:</p>
                <ul className="space-y-1 text-sm text-zinc-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-zinc-400 mt-0.5 shrink-0" />
                    <span>How to Apply section with steps</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-zinc-400 mt-0.5 shrink-0" />
                    <span>Deliverables specified</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-zinc-400 mt-0.5 shrink-0" />
                    <span>Recommended tools listed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-zinc-400 mt-0.5 shrink-0" />
                    <span>Real example included</span>
                  </li>
                </ul>
              </div>
              <div className="bg-yellow-950/20 border border-yellow-500/20 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="px-3 py-1 bg-yellow-600/20 border border-yellow-600/30 rounded-full text-xs font-bold text-yellow-400 uppercase tracking-wider">
                    Gold
                  </div>
                  <h3 className="text-lg font-semibold text-yellow-400">Complete Professional Lesson</h3>
                </div>
                <p className="text-sm text-zinc-300 mb-3">Silver requirements + premium features:</p>
                <ul className="space-y-1 text-sm text-zinc-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-yellow-400 mt-0.5 shrink-0" />
                    <span>AI in Practice prompts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-yellow-400 mt-0.5 shrink-0" />
                    <span>Validation methods detailed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-yellow-400 mt-0.5 shrink-0" />
                    <span>Interactive example component</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-yellow-400 mt-0.5 shrink-0" />
                    <span>All 12 sections complete</span>
                  </li>
                </ul>
              </div>
            </div>
          </>
        ),
        es: (
          <>
            <p className="text-zinc-300 leading-relaxed mb-6">
              Cada lección se evalúa por completitud y calidad usando un sistema de badges de tres niveles:
            </p>
            <div className="space-y-4">
              <div className="bg-amber-950/20 border border-amber-500/20 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="px-3 py-1 bg-amber-600/20 border border-amber-600/30 rounded-full text-xs font-bold text-amber-400 uppercase tracking-wider">
                    Bronze
                  </div>
                  <h3 className="text-lg font-semibold text-amber-400">Lección Mínima Viable</h3>
                </div>
                <p className="text-sm text-zinc-300 mb-3">Cumple requisitos básicos:</p>
                <ul className="space-y-1 text-sm text-zinc-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-amber-400 mt-0.5 shrink-0" />
                    <span>Definición presente</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-amber-400 mt-0.5 shrink-0" />
                    <span>Por qué importa presente</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-amber-400 mt-0.5 shrink-0" />
                    <span>Al menos 4 principios clave</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-amber-400 mt-0.5 shrink-0" />
                    <span>Al menos 3 errores comunes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-amber-400 mt-0.5 shrink-0" />
                    <span>Al menos 2 preguntas de quiz</span>
                  </li>
                </ul>
              </div>
              <div className="bg-zinc-400/10 border border-zinc-400/20 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="px-3 py-1 bg-zinc-400/20 border border-zinc-400/30 rounded-full text-xs font-bold text-zinc-300 uppercase tracking-wider">
                    Silver
                  </div>
                  <h3 className="text-lg font-semibold text-zinc-300">Lección Mejorada</h3>
                </div>
                <p className="text-sm text-zinc-300 mb-3">Requisitos Bronze + contenido adicional:</p>
                <ul className="space-y-1 text-sm text-zinc-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-zinc-400 mt-0.5 shrink-0" />
                    <span>Sección Cómo Aplicar con pasos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-zinc-400 mt-0.5 shrink-0" />
                    <span>Entregables especificados</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-zinc-400 mt-0.5 shrink-0" />
                    <span>Herramientas recomendadas listadas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-zinc-400 mt-0.5 shrink-0" />
                    <span>Ejemplo real incluido</span>
                  </li>
                </ul>
              </div>
              <div className="bg-yellow-950/20 border border-yellow-500/20 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="px-3 py-1 bg-yellow-600/20 border border-yellow-600/30 rounded-full text-xs font-bold text-yellow-400 uppercase tracking-wider">
                    Gold
                  </div>
                  <h3 className="text-lg font-semibold text-yellow-400">Lección Profesional Completa</h3>
                </div>
                <p className="text-sm text-zinc-300 mb-3">Requisitos Silver + características premium:</p>
                <ul className="space-y-1 text-sm text-zinc-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-yellow-400 mt-0.5 shrink-0" />
                    <span>Prompts de IA en Práctica</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-yellow-400 mt-0.5 shrink-0" />
                    <span>Métodos de validación detallados</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-yellow-400 mt-0.5 shrink-0" />
                    <span>Componente de ejemplo interactivo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-yellow-400 mt-0.5 shrink-0" />
                    <span>Las 12 secciones completas</span>
                  </li>
                </ul>
              </div>
            </div>
          </>
        )
      }
    },
    {
      id: 'metrics',
      icon: BarChart3,
      title: { en: 'Success Metrics', es: 'Métricas de Éxito' },
      content: {
        en: (
          <>
            <p className="text-zinc-300 leading-relaxed mb-6">
              We measure learning effectiveness through multiple data points:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Engagement Metrics</h3>
                <ul className="space-y-2 text-sm text-zinc-300">
                  <li>• Lesson completion rate</li>
                  <li>• Time spent per lesson</li>
                  <li>• Preview-to-full-lesson conversion</li>
                  <li>• Interactive example engagement</li>
                </ul>
              </div>
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Learning Outcomes</h3>
                <ul className="space-y-2 text-sm text-zinc-300">
                  <li>• Quiz success rate</li>
                  <li>• Deliverable completion</li>
                  <li>• Track progression velocity</li>
                  <li>• Knowledge retention (revisits)</li>
                </ul>
              </div>
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Content Quality</h3>
                <ul className="space-y-2 text-sm text-zinc-300">
                  <li>• Lesson quality distribution (Bronze/Silver/Gold)</li>
                  <li>• Content coverage by track</li>
                  <li>• Template compliance rate</li>
                </ul>
              </div>
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3">User Progress</h3>
                <ul className="space-y-2 text-sm text-zinc-300">
                  <li>• Active learning days</li>
                  <li>• Tracks completed</li>
                  <li>• Certification readiness</li>
                </ul>
              </div>
            </div>
          </>
        ),
        es: (
          <>
            <p className="text-zinc-300 leading-relaxed mb-6">
              Medimos la efectividad del aprendizaje a través de múltiples puntos de datos:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Métricas de Engagement</h3>
                <ul className="space-y-2 text-sm text-zinc-300">
                  <li>• Tasa de completación de lecciones</li>
                  <li>• Tiempo dedicado por lección</li>
                  <li>• Conversión preview-a-lección-completa</li>
                  <li>• Engagement con ejemplos interactivos</li>
                </ul>
              </div>
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Resultados de Aprendizaje</h3>
                <ul className="space-y-2 text-sm text-zinc-300">
                  <li>• Tasa de éxito en quizzes</li>
                  <li>• Completación de entregables</li>
                  <li>• Velocidad de progresión en rutas</li>
                  <li>• Retención de conocimiento (revisitas)</li>
                </ul>
              </div>
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Calidad de Contenido</h3>
                <ul className="space-y-2 text-sm text-zinc-300">
                  <li>• Distribución de calidad de lecciones (Bronze/Silver/Gold)</li>
                  <li>• Cobertura de contenido por ruta</li>
                  <li>• Tasa de cumplimiento de template</li>
                </ul>
              </div>
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Progreso del Usuario</h3>
                <ul className="space-y-2 text-sm text-zinc-300">
                  <li>• Días de aprendizaje activo</li>
                  <li>• Rutas completadas</li>
                  <li>• Preparación para certificación</li>
                </ul>
              </div>
            </div>
          </>
        )
      }
    }
  ];

  const tocSections = [
    { id: 'purpose', label: t({ en: 'Purpose & Target Learners', es: 'Propósito y Público Objetivo' }), icon: Target },
    { id: 'approach', label: t({ en: 'Pedagogical Approach', es: 'Enfoque Pedagógico' }), icon: Sparkles },
    { id: 'curriculum', label: t({ en: 'Curriculum Structure', es: 'Estructura del Currículum' }), icon: Layers },
    { id: 'lesson-template', label: t({ en: 'Lesson Template', es: 'Template de Lección' }), icon: Layout },
    { id: 'preview-rules', label: t({ en: 'Preview vs Full Lesson', es: 'Preview vs Lección Completa' }), icon: Eye },
    { id: 'evaluation', label: t({ en: 'Evaluation System', es: 'Sistema de Evaluación' }), icon: Clipboard },
    { id: 'quality', label: t({ en: 'Quality Badges', es: 'Badges de Calidad' }), icon: Award },
    { id: 'metrics', label: t({ en: 'Success Metrics', es: 'Métricas de Éxito' }), icon: BarChart3 },
  ];

  return (
    <div className="min-h-screen bg-black text-zinc-100">
      {/* Hero */}
      <div className="bg-gradient-to-b from-indigo-950/30 to-black border-b border-white/5">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="size-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
              <BookOpen className="size-6 text-indigo-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              {t({ en: 'Pedagogical Framework', es: 'Marco Pedagógico' })}
            </h1>
          </div>
          <p className="text-xl text-zinc-400 max-w-3xl">
            {t({ 
              en: 'How AditiDesign transforms UX/UI theory into professional competencies through evidence-based learning design.', 
              es: 'Cómo AditiDesign transforma la teoría de UX/UI en competencias profesionales a través de diseño de aprendizaje basado en evidencia.' 
            })}
          </p>
        </div>
      </div>

      {/* Content with LessonLayout and TOC */}
      <LessonLayout sections={tocSections}>
        {sections.map((section) => {
          const Icon = section.icon;
          return (
            <section key={section.id} id={section.id} className="mb-16 scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="size-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
                  <Icon className="size-5 text-indigo-400" />
                </div>
                <h2 className="text-3xl font-bold text-white">
                  {t(section.title)}
                </h2>
              </div>
              <div className="pl-0 md:pl-13">
                {t(section.content)}
              </div>
            </section>
          );
        })}

        {/* Footer CTA */}
        <div className="mt-16 border-t border-zinc-800 pt-12">
          <div className="bg-gradient-to-br from-indigo-950/30 to-purple-950/30 border border-indigo-500/20 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              {t({ en: 'Ready to Start Learning?', es: '¿Listo para Empezar a Aprender?' })}
            </h3>
            <p className="text-zinc-300 mb-6 max-w-2xl mx-auto">
              {t({ 
                en: 'Explore our structured learning tracks and begin building professional UX/UI competencies today.', 
                es: 'Explora nuestras rutas de aprendizaje estructuradas y comienza a construir competencias profesionales de UX/UI hoy.' 
              })}
            </p>
            <a
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors"
            >
              {t({ en: 'Browse Learning Tracks', es: 'Explorar Rutas de Aprendizaje' })}
              <TrendingUp className="size-4" />
            </a>
          </div>
        </div>
      </LessonLayout>
    </div>
  );
}