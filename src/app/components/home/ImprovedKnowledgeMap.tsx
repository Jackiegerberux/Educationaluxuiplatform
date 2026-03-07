import React, { useState, useRef } from 'react';
import { useLanguage } from '../layout/LanguageContext';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  CheckCircle2, 
  Circle, 
  Play,
  ArrowRight,
  BookOpen,
  Search,
  Target,
  Layers,
  PenTool,
  TestTube,
  Code2,
  AlertCircle,
  Lock,
  ZoomIn,
  ZoomOut,
  Maximize2,
  RotateCcw,
  Briefcase,
  Monitor
} from 'lucide-react';
import { tracks } from '../../data/content';

interface Lesson {
  title: { en: string; es: string };
  slug: string;
  status: 'completed' | 'in-progress' | 'not-started';
}

interface Cluster {
  id: string;
  title: { en: string; es: string };
  icon: any;
  color: string;
  borderColor: string;
  position: { x: number; y: number };
  definition: { en: string; es: string };
  skills: { en: string[]; es: string[] };
  lessons: Lesson[];
  prerequisites: { en: string[]; es: string[] };
  nextSteps: { en: string[]; es: string[] };
  mainLessonSlug?: string;
}

// Map ALL lessons from content.ts tracks — slugs match topic.id exactly
const clusters: Cluster[] = [
  // ── PHASE 1: Foundations ─────────────────────────────────
  {
    id: 'foundations',
    title: { en: 'Foundations', es: 'Fundamentos' },
    icon: BookOpen,
    color: 'bg-purple-500/20 text-purple-400',
    borderColor: 'border-purple-500/50',
    position: { x: 15, y: 15 },
    definition: { 
      en: 'Core UX/UI principles, design thinking, agile methodologies, and the product design mindset.',
      es: 'Principios fundamentales de UX/UI, design thinking, metodologías ágiles y mentalidad de diseño de producto.'
    },
    skills: {
      en: ['UX vs UI clarity', 'Design thinking', 'Usability heuristics', 'Agile & Scrum', 'Lean UX', 'User stories'],
      es: ['Claridad UX vs UI', 'Design thinking', 'Heurísticas de usabilidad', 'Agile y Scrum', 'Lean UX', 'User stories']
    },
    lessons: [
      { title: { en: 'UX vs UI vs Product Design', es: 'UX vs UI vs Diseño de Producto' }, slug: 'ux-ui-product-design-intro', status: 'not-started' },
      { title: { en: 'Usability Basics', es: 'Conceptos Básicos de Usabilidad' }, slug: 'usability-basics', status: 'not-started' },
      { title: { en: 'Design Thinking', es: 'Design Thinking' }, slug: 'design-thinking', status: 'not-started' },
      { title: { en: 'UX Process & Deliverables', es: 'Proceso UX y Entregables' }, slug: 'ux-process', status: 'not-started' },
      { title: { en: 'Methodologies Overview', es: 'Visión General de Metodologías' }, slug: 'methodologies-overview', status: 'not-started' },
      { title: { en: 'Lean UX', es: 'Lean UX' }, slug: 'lean-ux', status: 'not-started' },
      { title: { en: 'Design Sprint', es: 'Design Sprint' }, slug: 'design-sprint', status: 'not-started' },
      { title: { en: 'Scrum for Designers', es: 'Scrum para Diseñadores' }, slug: 'scrum-for-designers', status: 'not-started' },
      { title: { en: 'User Stories & Requirements', es: 'User Stories y Requisitos' }, slug: 'user-stories-and-requirements', status: 'not-started' },
    ],
    prerequisites: { en: ['None — Start here!'], es: ['Ninguno — ¡Empieza aquí!'] },
    nextSteps: { en: ['Problem Framing & Discovery', 'Research'], es: ['Definición del Problema', 'Investigación'] },
    mainLessonSlug: 'ux-ui-product-design-intro'
  },
  // ── PHASE 2: Discovery ──────────────────────────────────
  {
    id: 'discovery',
    title: { en: 'Problem Framing & Discovery', es: 'Definición y Descubrimiento' },
    icon: Target,
    color: 'bg-blue-500/20 text-blue-400',
    borderColor: 'border-blue-500/50',
    position: { x: 50, y: 10 },
    definition: { 
      en: 'Business goals, stakeholder alignment, competitive landscape, and strategic planning.',
      es: 'Objetivos de negocio, alineación con stakeholders, panorama competitivo y planificación estratégica.'
    },
    skills: {
      en: ['KPI definition', 'Stakeholder mapping', 'Problem statements', 'Competitive analysis', 'Roadmapping', 'Release planning'],
      es: ['Definición de KPIs', 'Mapeo de stakeholders', 'Declaraciones de problema', 'Análisis competitivo', 'Roadmapping', 'Planificación de releases']
    },
    lessons: [
      { title: { en: 'Business Goals & KPIs', es: 'Objetivos de Negocio y KPIs' }, slug: 'business-goals-kpis', status: 'not-started' },
      { title: { en: 'Stakeholder Mapping', es: 'Mapeo de Stakeholders' }, slug: 'stakeholder-mapping', status: 'not-started' },
      { title: { en: 'Problem Statements', es: 'Declaraciones de Problema' }, slug: 'problem-statements', status: 'not-started' },
      { title: { en: 'Competitive Analysis', es: 'Análisis Competitivo' }, slug: 'competitive-analysis', status: 'not-started' },
      { title: { en: 'Product Roadmapping', es: 'Roadmapping de Producto' }, slug: 'product-roadmapping', status: 'not-started' },
      { title: { en: 'Release Planning', es: 'Planificación de Releases' }, slug: 'release-planning-and-increment-strategy', status: 'not-started' },
    ],
    prerequisites: { en: ['Foundations'], es: ['Fundamentos'] },
    nextSteps: { en: ['Research & User Understanding'], es: ['Investigación y Comprensión del Usuario'] },
    mainLessonSlug: 'business-goals-kpis'
  },
  // ── PHASE 3: Research ───────────────────────────────────
  {
    id: 'research',
    title: { en: 'Research & User Understanding', es: 'Investigación y Usuario' },
    icon: Search,
    color: 'bg-green-500/20 text-green-400',
    borderColor: 'border-green-500/50',
    position: { x: 85, y: 15 },
    definition: { 
      en: 'User behavior research through surveys, personas, journey maps, and cognitive psychology.',
      es: 'Investigación del comportamiento del usuario a través de encuestas, personas, mapas de viaje y psicología cognitiva.'
    },
    skills: {
      en: ['Surveys', 'User interviews', 'Personas', 'Journey mapping', 'UX psychology', 'Laws of UX'],
      es: ['Encuestas', 'Entrevistas', 'Personas', 'Mapeo de viaje', 'Psicología UX', 'Leyes de UX']
    },
    lessons: [
      { title: { en: 'Surveys & Questionnaires', es: 'Encuestas y Cuestionarios' }, slug: 'surveys-questionnaires', status: 'not-started' },
      { title: { en: 'UX Research', es: 'Investigación UX' }, slug: 'ux-research', status: 'not-started' },
      { title: { en: 'User Personas', es: 'Personas de Usuario' }, slug: 'user-personas', status: 'not-started' },
      { title: { en: 'Customer Journey Map', es: 'Mapa de Viaje del Cliente' }, slug: 'customer-journey-map', status: 'not-started' },
      { title: { en: 'UX Psychology', es: 'Psicología UX' }, slug: 'ux-psychology', status: 'not-started' },
      { title: { en: 'Laws of UX', es: 'Leyes de UX' }, slug: 'laws-of-ux', status: 'not-started' },
    ],
    prerequisites: { en: ['Foundations'], es: ['Fundamentos'] },
    nextSteps: { en: ['Information Architecture'], es: ['Arquitectura de Información'] },
    mainLessonSlug: 'surveys-questionnaires'
  },
  // ── PHASE 4: Architecture ───────────────────────────────
  {
    id: 'architecture',
    title: { en: 'Information Architecture', es: 'Arquitectura de Información' },
    icon: Layers,
    color: 'bg-cyan-500/20 text-cyan-400',
    borderColor: 'border-cyan-500/50',
    position: { x: 15, y: 50 },
    definition: { 
      en: 'Organizing content, navigation design, card sorting, and user flow mapping.',
      es: 'Organización de contenido, diseño de navegación, card sorting y mapeo de flujos de usuario.'
    },
    skills: {
      en: ['Information architecture', 'Card sorting', 'Site mapping', 'User flows', 'Navigation design'],
      es: ['Arquitectura de información', 'Card sorting', 'Mapeo de sitio', 'Flujos de usuario', 'Diseño de navegación']
    },
    lessons: [
      { title: { en: 'Information Architecture', es: 'Arquitectura de Información' }, slug: 'information-architecture', status: 'not-started' },
      { title: { en: 'Card Sorting', es: 'Card Sorting' }, slug: 'card-sorting', status: 'not-started' },
      { title: { en: 'User Flows & Journeys', es: 'Flujos de Usuario y Viajes' }, slug: 'user-flows', status: 'not-started' },
    ],
    prerequisites: { en: ['Research & User Understanding'], es: ['Investigación y Comprensión del Usuario'] },
    nextSteps: { en: ['Interaction & Interface Design'], es: ['Diseño de Interacción e Interfaz'] },
    mainLessonSlug: 'information-architecture'
  },
  // ── PHASE 5: Design ─────────────────────────────────────
  {
    id: 'design',
    title: { en: 'Interaction & Interface Design', es: 'Diseño de Interacción e Interfaz' },
    icon: PenTool,
    color: 'bg-orange-500/20 text-orange-400',
    borderColor: 'border-orange-500/50',
    position: { x: 50, y: 45 },
    definition: { 
      en: 'Wireframes, visual hierarchy, typography, color theory, accessibility, and microinteractions.',
      es: 'Wireframes, jerarquía visual, tipografía, teoría del color, accesibilidad y microinteracciones.'
    },
    skills: {
      en: ['Wireframing', 'Visual hierarchy', 'Typography', 'Color theory', 'Accessibility', 'Microinteractions', 'Heuristic analysis'],
      es: ['Wireframing', 'Jerarquía visual', 'Tipografía', 'Teoría del color', 'Accesibilidad', 'Microinteracciones', 'Análisis heurístico']
    },
    lessons: [
      { title: { en: 'Wireframing & Prototyping', es: 'Wireframing y Prototipado' }, slug: 'wireframing-prototyping', status: 'not-started' },
      { title: { en: 'Visual Hierarchy', es: 'Jerarquía Visual' }, slug: 'visual-hierarchy', status: 'not-started' },
      { title: { en: 'Typography Fundamentals', es: 'Fundamentos de Tipografía' }, slug: 'typography-fundamentals', status: 'not-started' },
      { title: { en: 'Color Theory', es: 'Teoría del Color' }, slug: 'color-theory', status: 'not-started' },
      { title: { en: 'Accessibility Foundations', es: 'Fundamentos de Accesibilidad' }, slug: 'accessibility-wcag', status: 'not-started' },
      { title: { en: 'Microinteractions', es: 'Microinteracciones' }, slug: 'microinteractions', status: 'not-started' },
      { title: { en: 'Heuristic Analysis', es: 'Análisis Heurístico' }, slug: 'heuristic-analysis', status: 'not-started' },
      { title: { en: 'Edge & System States', es: 'Estados Edge y de Sistema' }, slug: 'edge-and-system-states', status: 'not-started' },
    ],
    prerequisites: { en: ['Information Architecture'], es: ['Arquitectura de Información'] },
    nextSteps: { en: ['Validation & Optimization'], es: ['Validación y Optimización'] },
    mainLessonSlug: 'wireframing-prototyping'
  },
  // ── PHASE 6: Validation ─────────────────────────────────
  {
    id: 'validation',
    title: { en: 'Validation & Optimization', es: 'Validación y Optimización' },
    icon: TestTube,
    color: 'bg-pink-500/20 text-pink-400',
    borderColor: 'border-pink-500/50',
    position: { x: 85, y: 50 },
    definition: { 
      en: 'Usability testing, prototyping methods, advanced accessibility audits, and UX metrics.',
      es: 'Pruebas de usabilidad, métodos de prototipado, auditorías avanzadas de accesibilidad y métricas UX.'
    },
    skills: {
      en: ['Usability testing', 'Prototyping', 'Accessibility auditing', 'UX metrics', 'A/B testing'],
      es: ['Testing de usabilidad', 'Prototipado', 'Auditoría de accesibilidad', 'Métricas UX', 'Testing A/B']
    },
    lessons: [
      { title: { en: 'Usability Testing', es: 'Pruebas de Usabilidad' }, slug: 'usability-testing', status: 'not-started' },
      { title: { en: 'Prototyping Methods', es: 'Métodos de Prototipado' }, slug: 'prototyping-methods', status: 'not-started' },
      { title: { en: 'Advanced Accessibility Auditing', es: 'Auditoría Avanzada de Accesibilidad' }, slug: 'accessibility', status: 'not-started' },
      { title: { en: 'Advanced UX Metrics', es: 'Métricas UX Avanzadas' }, slug: 'ux-metrics-advanced', status: 'not-started' },
    ],
    prerequisites: { en: ['Interaction & Interface Design'], es: ['Diseño de Interacción e Interfaz'] },
    nextSteps: { en: ['Systems & Scale'], es: ['Sistemas y Escala'] },
    mainLessonSlug: 'usability-testing'
  },
  // ── PHASE 7: Systems ────────────────────────────────────
  {
    id: 'systems',
    title: { en: 'Systems & Scale', es: 'Sistemas y Escala' },
    icon: Code2,
    color: 'bg-red-500/20 text-red-400',
    borderColor: 'border-red-500/50',
    position: { x: 15, y: 85 },
    definition: { 
      en: 'Atomic design, Figma mastery, design system governance, ethics, and documentation.',
      es: 'Diseño atómico, dominio de Figma, gobernanza de design systems, ética y documentación.'
    },
    skills: {
      en: ['Atomic design', 'Figma advanced', 'System governance', 'Design ethics', 'Documentation'],
      es: ['Diseño atómico', 'Figma avanzado', 'Gobernanza de sistemas', 'Ética de diseño', 'Documentación']
    },
    lessons: [
      { title: { en: 'Atomic Design', es: 'Diseño Atómico' }, slug: 'atomic-design', status: 'not-started' },
      { title: { en: 'Figma Mastery', es: 'Dominio de Figma' }, slug: 'figma-mastery', status: 'not-started' },
      { title: { en: 'System Governance', es: 'Gobernanza del Sistema' }, slug: 'design-systems-governance', status: 'not-started' },
      { title: { en: 'Design Ethics & Dark Patterns', es: 'Ética y Patrones Oscuros' }, slug: 'design-ethics', status: 'not-started' },
      { title: { en: 'UX Documentation Pro', es: 'Documentación UX Pro' }, slug: 'ux-documentation-pro', status: 'not-started' },
    ],
    prerequisites: { en: ['Validation & Optimization'], es: ['Validación y Optimización'] },
    nextSteps: { en: ['Frontend for Designers'], es: ['Frontend para Diseñadores'] },
    mainLessonSlug: 'atomic-design'
  },
  // ── PHASE 8: Frontend ───────────────────────────────────
  {
    id: 'frontend',
    title: { en: 'Frontend for Designers', es: 'Frontend para Diseñadores' },
    icon: Monitor,
    color: 'bg-teal-500/20 text-teal-400',
    borderColor: 'border-teal-500/50',
    position: { x: 50, y: 85 },
    definition: { 
      en: 'HTML, CSS, JavaScript fundamentals, and front-end foundations for UX/UI designers.',
      es: 'Fundamentos de HTML, CSS, JavaScript y bases de front-end para diseñadores UX/UI.'
    },
    skills: {
      en: ['HTML semantics', 'CSS layout & styling', 'JavaScript basics', 'Responsive design', 'Dev handoff'],
      es: ['Semántica HTML', 'CSS layout y estilos', 'JavaScript básico', 'Diseño responsive', 'Handoff a dev']
    },
    lessons: [
      { title: { en: 'HTML Fundamentals', es: 'Fundamentos de HTML' }, slug: 'html-fundamentals', status: 'not-started' },
      { title: { en: 'CSS Fundamentals', es: 'Fundamentos de CSS' }, slug: 'css-fundamentals', status: 'not-started' },
      { title: { en: 'Intro to JavaScript', es: 'Introducción a JavaScript' }, slug: 'intro-javascript', status: 'not-started' },
      { title: { en: 'Front-End Foundations', es: 'Fundamentos Front-End' }, slug: 'frontend-foundations', status: 'not-started' },
    ],
    prerequisites: { en: ['Systems & Scale'], es: ['Sistemas y Escala'] },
    nextSteps: { en: ['Career & Professional Growth'], es: ['Carrera y Crecimiento Profesional'] },
    mainLessonSlug: 'html-fundamentals'
  },
  // ── PHASE 9: Career ─────────────────────────────────────
  {
    id: 'career',
    title: { en: 'Career & Growth', es: 'Carrera y Crecimiento' },
    icon: Briefcase,
    color: 'bg-indigo-500/20 text-indigo-400',
    borderColor: 'border-indigo-500/50',
    position: { x: 85, y: 85 },
    definition: { 
      en: 'Portfolio storytelling, case study writing, and professional brand building.',
      es: 'Storytelling de portafolio, redacción de casos de estudio y construcción de marca profesional.'
    },
    skills: {
      en: ['Case study writing', 'Portfolio design', 'Interview prep', 'Professional storytelling'],
      es: ['Redacción de casos', 'Diseño de portafolio', 'Preparación entrevistas', 'Storytelling profesional']
    },
    lessons: [
      { title: { en: 'Portfolio Case Study Writing', es: 'Redacción de Casos de Estudio' }, slug: 'portfolio-case-study-writing', status: 'not-started' },
    ],
    prerequisites: { en: ['All previous phases recommended'], es: ['Todas las fases previas recomendadas'] },
    nextSteps: { en: ['Keep building your portfolio!'], es: ['¡Sigue construyendo tu portafolio!'] },
    mainLessonSlug: 'portfolio-case-study-writing'
  },
];

interface MissingTopic {
  name: { en: string; es: string };
  why: { en: string; es: string };
  suggestedLesson: { en: string; es: string };
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  cluster: string;
}

const missingTopics: MissingTopic[] = [
  {
    name: { en: 'Interaction Design Patterns', es: 'Patrones de Diseño de Interacción' },
    why: { 
      en: 'Understanding common UI patterns saves time and improves usability',
      es: 'Entender patrones UI comunes ahorra tiempo y mejora usabilidad'
    },
    suggestedLesson: { en: 'Common UI Patterns Library', es: 'Biblioteca de Patrones UI Comunes' },
    difficulty: 'intermediate',
    cluster: 'Interaction & Interface Design'
  },
  {
    name: { en: 'Content Strategy & UX Writing', es: 'Estrategia de Contenido y UX Writing' },
    why: { 
      en: 'UX writing and content hierarchy are critical for clear communication',
      es: 'UX writing y jerarquía de contenido son críticos para comunicación clara'
    },
    suggestedLesson: { en: 'UX Writing Fundamentals', es: 'Fundamentos de UX Writing' },
    difficulty: 'beginner',
    cluster: 'Foundations'
  },
  {
    name: { en: 'Mobile-First Design', es: 'Diseño Mobile-First' },
    why: { 
      en: 'Most users access products via mobile, this approach is industry standard',
      es: 'La mayoría de usuarios acceden vía móvil, este enfoque es estándar de industria'
    },
    suggestedLesson: { en: 'Mobile-First Strategy', es: 'Estrategia Mobile-First' },
    difficulty: 'beginner',
    cluster: 'Interaction & Interface Design'
  },
  {
    name: { en: 'Service Design', es: 'Diseño de Servicios' },
    why: { 
      en: 'Holistic view beyond screens, mapping entire service ecosystems',
      es: 'Vista holística más allá de pantallas, mapeando ecosistemas de servicio completos'
    },
    suggestedLesson: { en: 'Service Design Blueprints', es: 'Blueprints de Diseño de Servicios' },
    difficulty: 'advanced',
    cluster: 'Systems & Scale'
  },
];

interface KnowledgeMapProps {
  onNavigate: (section: string) => void;
}

export function ImprovedKnowledgeMap({ onNavigate }: KnowledgeMapProps) {
  const { t } = useLanguage();
  const [selectedCluster, setSelectedCluster] = useState<string | null>(null);
  const [hoveredCluster, setHoveredCluster] = useState<string | null>(null);
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const mapRef = useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const selectedClusterData = clusters.find(c => c.id === selectedCluster);

  const getStatusIcon = (status: string) => {
    if (status === 'completed') return <CheckCircle2 className="size-4 text-green-400" />;
    if (status === 'in-progress') return <Play className="size-4 text-yellow-400" />;
    return <Circle className="size-4 text-zinc-600" />;
  };

  const difficultyColors = {
    beginner: 'bg-green-500/20 text-green-400 border-green-500/30',
    intermediate: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    advanced: 'bg-red-500/20 text-red-400 border-red-500/30'
  };

  const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.2, 2));
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 0.2, 0.5));
  const handleReset = () => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  };
  const handleFitScreen = () => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.button !== 0) return;
    setIsDragging(true);
    setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setPan({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleLessonClick = (slug: string) => {
    onNavigate(`/lesson/${slug}`);
    setSelectedCluster(null);
  };

  const handleOpenMainLesson = () => {
    if (selectedClusterData?.mainLessonSlug) {
      onNavigate(`/lesson/${selectedClusterData.mainLessonSlug}`);
      setSelectedCluster(null);
    }
  };

  // Mobile view: Cards list
  if (isMobile) {
    return (
      <div className="min-h-screen bg-black py-20 px-4">
        <div className="mx-auto max-w-2xl mb-16">
          <h1 className="text-4xl font-bold text-white mb-4 text-center">
            {t({ en: 'UX/UI Knowledge Map', es: 'Mapa de Conocimiento UX/UI' })}
          </h1>
          <p className="text-zinc-400 text-center mb-8">
            {t({
              en: 'Complete roadmap from beginner to professional. Tap any card to explore.',
              es: 'Roadmap completo de principiante a profesional. Toca cualquier card para explorar.'
            })}
          </p>
        </div>

        <div className="space-y-4 mb-20">
          {clusters.map((cluster) => {
            const completedLessons = cluster.lessons.filter(l => l.status === 'completed').length;
            const totalLessons = cluster.lessons.length;

            return (
              <button
                key={cluster.id}
                onClick={() => setSelectedCluster(cluster.id)}
                className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 transition-all text-left"
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl ${cluster.color.split(' ')[0]} shrink-0`}>
                    <cluster.icon className={`size-6 ${cluster.color.split(' ')[1]}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-white mb-2">{t(cluster.title)}</h3>
                    <p className="text-sm text-zinc-400 line-clamp-2">{t(cluster.definition)}</p>
                    <div className="flex items-center gap-3 mt-3">
                      <span className="text-xs text-zinc-500">{completedLessons}/{totalLessons} {t({ en: 'lessons', es: 'lecciones' })}</span>
                      <ArrowRight className="size-4 text-indigo-400" />
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Missing Topics */}
        <div className="bg-gradient-to-br from-orange-950/30 to-red-950/30 border border-orange-500/20 rounded-2xl p-6">
          <div className="flex items-start gap-3 mb-6">
            <AlertCircle className="size-6 text-orange-400 shrink-0" />
            <div>
              <h2 className="text-xl font-bold text-white mb-2">
                {t({ en: 'Curriculum Gaps', es: 'Gaps de Curriculum' })}
              </h2>
              <p className="text-sm text-zinc-400">
                {t({
                  en: 'Critical topics to be added',
                  es: 'Tópicos críticos a agregar'
                })}
              </p>
            </div>
          </div>

          <div className="space-y-3">
            {missingTopics.map((topic, idx) => (
              <div key={idx} className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-sm font-semibold text-white">{t(topic.name)}</h3>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-medium border ${difficultyColors[topic.difficulty]}`}>
                    {topic.difficulty}
                  </span>
                </div>
                <p className="text-xs text-zinc-400">{t(topic.why)}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Side Panel for mobile */}
        <AnimatePresence>
          {selectedClusterData && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
                onClick={() => setSelectedCluster(null)}
              />
              <motion.div
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                exit={{ y: '100%' }}
                transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                className="fixed left-0 right-0 bottom-0 z-50 max-h-[85vh] bg-zinc-950 border-t border-zinc-800 rounded-t-2xl flex flex-col overflow-hidden"
              >
                <div className="p-6 border-b border-zinc-800">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl ${selectedClusterData.color.split(' ')[0]}`}>
                      <selectedClusterData.icon className={`size-8 ${selectedClusterData.color.split(' ')[1]}`} />
                    </div>
                    <button onClick={() => setSelectedCluster(null)} className="text-zinc-500 hover:text-white">
                      <X className="size-6" />
                    </button>
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-2">{t(selectedClusterData.title)}</h2>
                  <p className="text-sm text-zinc-400">{t(selectedClusterData.definition)}</p>
                </div>

                <div className="flex-1 overflow-y-auto p-6 space-y-6">
                  {/* Skills */}
                  <div>
                    <h3 className="text-sm font-semibold text-white mb-3">{t({ en: 'Skills', es: 'Habilidades' })}</h3>
                    <ul className="space-y-2">
                      {t(selectedClusterData.skills).map((skill: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-zinc-300">
                          <span className="text-indigo-400 mt-0.5">•</span>
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Lessons */}
                  <div>
                    <h3 className="text-sm font-semibold text-white mb-3">{t({ en: 'Lessons', es: 'Lecciones' })}</h3>
                    <div className="space-y-2">
                      {selectedClusterData.lessons.map((lesson, idx) => (
                        <button
                          key={idx}
                          className="w-full flex items-center justify-between p-3 bg-zinc-900/50 hover:bg-zinc-900 border border-zinc-800 rounded-lg transition-colors group"
                          onClick={() => handleLessonClick(lesson.slug)}
                        >
                          <div className="flex items-center gap-3">
                            {getStatusIcon(lesson.status)}
                            <span className="text-sm text-zinc-300 group-hover:text-white">{t(lesson.title)}</span>
                          </div>
                          <ArrowRight className="size-4 text-zinc-600 group-hover:text-indigo-400" />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 border-t border-zinc-800">
                  <button
                    onClick={handleOpenMainLesson}
                    className="w-full px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                  >
                    {t({ en: 'Open This Cluster', es: 'Abrir Este Cluster' })}
                    <ArrowRight className="size-4" />
                  </button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    );
  }

  // Desktop view: Interactive map
  return (
    <div className="min-h-screen bg-black py-20 px-4" style={{ minHeight: 'calc(100vh - 64px)' }}>
      {/* Header */}
      <div className="mx-auto max-w-7xl mb-8">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 text-center">
          {t({ en: 'UX/UI Knowledge Map', es: 'Mapa de Conocimiento UX/UI' })}
        </h1>
        <p className="text-zinc-400 text-center max-w-2xl mx-auto mb-6">
          {t({
            en: 'Complete roadmap from beginner to professional. Click on any cluster to explore topics, lessons, and learning paths.',
            es: 'Roadmap completo de principiante a profesional. Haz clic en cualquier cluster para explorar tópicos, lecciones y rutas de aprendizaje.'
          })}
        </p>

        {/* Legend */}
        <div className="flex items-center justify-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="size-4 text-green-400" />
            <span className="text-zinc-400">{t({ en: 'Completed', es: 'Completado' })}</span>
          </div>
          <div className="flex items-center gap-2">
            <Play className="size-4 text-yellow-400" />
            <span className="text-zinc-400">{t({ en: 'In Progress', es: 'En Progreso' })}</span>
          </div>
          <div className="flex items-center gap-2">
            <Circle className="size-4 text-zinc-600" />
            <span className="text-zinc-400">{t({ en: 'Not Started', es: 'No Iniciado' })}</span>
          </div>
        </div>
      </div>

      {/* Map Container */}
      <div className="relative mx-auto max-w-7xl mb-20">
        <div 
          ref={mapRef}
          className="relative w-full rounded-2xl border border-zinc-800 bg-zinc-950/50 backdrop-blur-sm overflow-visible"
          style={{ 
            minHeight: '700px',
            height: '80vh',
            maxHeight: '900px',
            cursor: isDragging ? 'grabbing' : 'grab'
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          {/* Zoom Controls */}
          <div className="absolute top-4 right-4 z-30 flex flex-col gap-2">
            <button
              onClick={handleZoomIn}
              className="p-2 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 rounded-lg transition-colors"
              title="Zoom In"
            >
              <ZoomIn className="size-5 text-zinc-300" />
            </button>
            <button
              onClick={handleZoomOut}
              className="p-2 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 rounded-lg transition-colors"
              title="Zoom Out"
            >
              <ZoomOut className="size-5 text-zinc-300" />
            </button>
            <button
              onClick={handleFitScreen}
              className="p-2 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 rounded-lg transition-colors"
              title="Fit to Screen"
            >
              <Maximize2 className="size-5 text-zinc-300" />
            </button>
            <button
              onClick={handleReset}
              className="p-2 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 rounded-lg transition-colors"
              title="Reset View"
            >
              <RotateCcw className="size-5 text-zinc-300" />
            </button>
          </div>

          {/* Zoomable/Pannable Content */}
          <div
            style={{
              transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
              transformOrigin: 'center',
              transition: isDragging ? 'none' : 'transform 0.2s ease-out',
              width: '100%',
              height: '100%',
              position: 'relative'
            }}
          >
            {/* Connection Lines (SVG) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
              {clusters.map((cluster, idx) => {
                if (idx === 0) return null;
                const prev = clusters[idx - 1];
                return (
                  <line
                    key={`line-${cluster.id}`}
                    x1={`${prev.position.x}%`}
                    y1={`${prev.position.y}%`}
                    x2={`${cluster.position.x}%`}
                    y2={`${cluster.position.y}%`}
                    stroke="rgba(99, 102, 241, 0.3)"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                  />
                );
              })}
            </svg>

            {/* Cluster Nodes */}
            {clusters.map((cluster) => {
              const completedLessons = cluster.lessons.filter(l => l.status === 'completed').length;
              const totalLessons = cluster.lessons.length;
              const progress = (completedLessons / totalLessons) * 100;

              return (
                <motion.button
                  key={cluster.id}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 group pointer-events-auto"
                  style={{ 
                    left: `${cluster.position.x}%`, 
                    top: `${cluster.position.y}%`,
                    cursor: 'pointer'
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedCluster(cluster.id);
                  }}
                  onMouseEnter={() => setHoveredCluster(cluster.id)}
                  onMouseLeave={() => setHoveredCluster(null)}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: clusters.indexOf(cluster) * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <div className={`relative flex flex-col items-center justify-center w-40 h-40 rounded-2xl 
                    bg-zinc-900/90 backdrop-blur-md border-2 ${cluster.borderColor}
                    transition-all duration-300 shadow-xl
                    ${selectedCluster === cluster.id ? 'ring-2 ring-white' : ''}
                  `}>
                    {/* Progress Ring */}
                    <svg className="absolute inset-0 w-full h-full -rotate-90">
                      <circle
                        cx="50%"
                        cy="50%"
                        r="45%"
                        fill="none"
                        stroke="rgba(255,255,255,0.1)"
                        strokeWidth="2"
                      />
                      <circle
                        cx="50%"
                        cy="50%"
                        r="45%"
                        fill="none"
                        stroke={cluster.borderColor.includes('blue') ? '#60a5fa' : 
                               cluster.borderColor.includes('purple') ? '#a78bfa' :
                               cluster.borderColor.includes('orange') ? '#fb923c' :
                               cluster.borderColor.includes('cyan') ? '#22d3ee' :
                               cluster.borderColor.includes('green') ? '#4ade80' :
                               cluster.borderColor.includes('pink') ? '#f472b6' :
                               cluster.borderColor.includes('red') ? '#f87171' :
                               cluster.borderColor.includes('teal') ? '#2dd4bf' :
                               cluster.borderColor.includes('indigo') ? '#818cf8' :
                               cluster.borderColor.includes('yellow') ? '#facc15' : '#818cf8'}
                        strokeWidth="3"
                        strokeDasharray={`${progress * 2.8} 280`}
                        className="transition-all duration-500"
                      />
                    </svg>

                    <div className={`p-3 rounded-xl mb-2 ${cluster.color.split(' ')[0]}`}>
                      <cluster.icon className={`size-10 ${cluster.color.split(' ')[1]}`} />
                    </div>
                    <span className="text-sm font-semibold text-center px-2 text-zinc-200 leading-tight">
                      {t(cluster.title)}
                    </span>
                    <span className="text-xs text-zinc-500 mt-1">
                      {completedLessons}/{totalLessons}
                    </span>
                  </div>

                  {/* Tooltip on hover */}
                  {hoveredCluster === cluster.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute top-full mt-2 left-1/2 -translate-x-1/2 w-64 bg-zinc-900 border border-zinc-800 rounded-lg p-4 shadow-2xl z-50 pointer-events-none"
                    >
                      <p className="text-xs text-zinc-300 mb-2">{t(cluster.definition)}</p>
                      <div className="text-xs text-zinc-500">
                        <strong className="text-zinc-400">{t({ en: 'Prerequisites:', es: 'Prerequisitos:' })}</strong> {t(cluster.prerequisites).join(', ')}
                      </div>
                    </motion.div>
                  )}
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Side Panel */}
      <AnimatePresence>
        {selectedClusterData && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
              onClick={() => setSelectedCluster(null)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed right-0 top-0 bottom-0 z-50 w-full sm:w-[540px] bg-zinc-950 border-l border-zinc-800 flex flex-col overflow-hidden"
            >
              {/* Header */}
              <div className="p-6 border-b border-zinc-800">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl ${selectedClusterData.color.split(' ')[0]}`}>
                    <selectedClusterData.icon className={`size-8 ${selectedClusterData.color.split(' ')[1]}`} />
                  </div>
                  <button
                    onClick={() => setSelectedCluster(null)}
                    className="text-zinc-500 hover:text-white transition-colors"
                  >
                    <X className="size-6" />
                  </button>
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">{t(selectedClusterData.title)}</h2>
                <p className="text-sm text-zinc-400">{t(selectedClusterData.definition)}</p>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-6 space-y-8">
                {/* Skills */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle2 className="size-5 text-green-400" />
                    {t({ en: 'Skills You\'ll Learn', es: 'Habilidades que Aprenderás' })}
                  </h3>
                  <ul className="space-y-2">
                    {t(selectedClusterData.skills).map((skill: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-zinc-300">
                        <span className="text-indigo-400 mt-1">•</span>
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Lessons */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {t({ en: 'Related Lessons', es: 'Lecciones Relacionadas' })}
                  </h3>
                  <div className="space-y-2">
                    {selectedClusterData.lessons.map((lesson, idx) => (
                      <button
                        key={idx}
                        className="w-full flex items-center justify-between p-3 bg-zinc-900/50 hover:bg-zinc-900 border border-zinc-800 rounded-lg transition-colors group"
                        onClick={() => handleLessonClick(lesson.slug)}
                      >
                        <div className="flex items-center gap-3">
                          {getStatusIcon(lesson.status)}
                          <span className="text-sm text-zinc-300 group-hover:text-white transition-colors">
                            {t(lesson.title)}
                          </span>
                        </div>
                        <ArrowRight className="size-4 text-zinc-600 group-hover:text-indigo-400 transition-colors" />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Prerequisites */}
                <div className="bg-blue-950/30 border border-blue-500/20 rounded-xl p-4">
                  <h3 className="text-sm font-semibold text-blue-400 mb-2 flex items-center gap-2">
                    <Lock className="size-4" />
                    {t({ en: 'Prerequisites', es: 'Prerequisitos' })}
                  </h3>
                  <ul className="space-y-1">
                    {t(selectedClusterData.prerequisites).map((prereq: string, idx: number) => (
                      <li key={idx} className="text-xs text-zinc-400">• {prereq}</li>
                    ))}
                  </ul>
                </div>

                {/* Next Steps */}
                <div className="bg-green-950/30 border border-green-500/20 rounded-xl p-4">
                  <h3 className="text-sm font-semibold text-green-400 mb-2 flex items-center gap-2">
                    <ArrowRight className="size-4" />
                    {t({ en: 'Suggested Next Steps', es: 'Próximos Pasos Sugeridos' })}
                  </h3>
                  <ul className="space-y-1">
                    {t(selectedClusterData.nextSteps).map((step: string, idx: number) => (
                      <li key={idx} className="text-xs text-zinc-400">• {step}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-zinc-800">
                <button
                  onClick={handleOpenMainLesson}
                  className="w-full px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                >
                  {t({ en: 'Open This Cluster', es: 'Abrir Este Cluster' })}
                  <ArrowRight className="size-4" />
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Missing Topics Section */}
      <div className="mx-auto max-w-7xl">
        <div className="bg-gradient-to-br from-orange-950/30 to-red-950/30 border border-orange-500/20 rounded-2xl p-8">
          <div className="flex items-start gap-4 mb-8">
            <AlertCircle className="size-8 text-orange-400 shrink-0" />
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">
                {t({ en: 'Curriculum Gaps & Recommended Topics', es: 'Gaps de Curriculum y Tópicos Recomendados' })}
              </h2>
              <p className="text-zinc-400">
                {t({
                  en: 'Based on industry standards and learning roadmaps, these critical topics should be added to complete the curriculum.',
                  es: 'Basado en estándares de industria y roadmaps de aprendizaje, estos tópicos críticos deberían agregarse para completar el curriculum.'
                })}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {missingTopics.map((topic, idx) => (
              <div key={idx} className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-semibold text-white">{t(topic.name)}</h3>
                  <span className={`px-2 py-1 rounded text-xs font-medium border ${difficultyColors[topic.difficulty]}`}>
                    {topic.difficulty}
                  </span>
                </div>
                <p className="text-sm text-zinc-400 mb-3">{t(topic.why)}</p>
                <div className="bg-zinc-950 rounded-lg p-3 border border-zinc-800">
                  <div className="text-xs text-zinc-500 mb-1">{t({ en: 'Suggested Lesson:', es: 'Lección Sugerida:' })}</div>
                  <div className="text-sm text-indigo-400 font-medium">{t(topic.suggestedLesson)}</div>
                  <div className="text-xs text-zinc-600 mt-1">{t({ en: 'Cluster:', es: 'Cluster:' })} {topic.cluster}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}