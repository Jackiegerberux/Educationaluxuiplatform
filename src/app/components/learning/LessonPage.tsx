import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import { Topic, tracks } from '../../data/content';
import { useLanguage } from '../layout/LanguageContext';
import { useProgress } from '@/app/contexts/ProgressContext';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  Check, 
  AlertTriangle, 
  Lightbulb, 
  BookOpen, 
  ExternalLink, 
  ListChecks, 
  Sparkles, 
  Bot, 
  ArrowRight, 
  CheckCircle2, 
  Wrench, 
  FileCheck, 
  HelpCircle,
  X,
  ChevronRight,
  Image,
  Code,
  ArrowRightLeft,
  BarChart3,
  TrendingUp,
  Compass,
  Eye,
  PenLine,
  Users,
  Scale,
  MessageSquare,
  GitBranch,
  Shield,
  Map,
  Filter,
  FileText,
  Rocket
} from 'lucide-react';
import { Button } from '../ui/button';
import { UserPersonaCard } from './examples/UserPersonaCard';
import { EmpathyMapExample } from './examples/EmpathyMapExample';
import { RoleComparisonInteractive } from './examples/RoleComparisonInteractive';
import { ModalEvolutionComparison } from './examples/ModalEvolutionComparison';
import { MentalModelExample } from './examples/MentalModelExample';
import { SitemapExample } from './examples/SitemapExample';
import { UserFlowInteractive } from './examples/UserFlowInteractive';
import { MethodologiesDeepDive } from './examples/MethodologiesDeepDive';
import { WireframeFidelityComparison } from './examples/WireframeFidelityComparison';
import { UXResearchDataExample } from './examples/UXResearchDataExample';
import { CompetitiveBenchmarkExample } from './examples/CompetitiveBenchmarkExample';
import { InteractiveJourneyMap } from '../lessons/InteractiveJourneyMap';
import { BlueprintSimulator } from '../lessons/BlueprintSimulator';
import { AtomicVisualGuideSection } from './examples/AtomicVisualGuideSection';
import { VisualHierarchyExamples } from '../lessons/visual-hierarchy/VisualHierarchyExamples';
import { LessonLayout } from './LessonLayout';
import { VisualExamplesSection, CodeExamplesSection, ToolsSection } from './AccessibilityExtensions';
import { AccessibilityInteractiveExamples } from '../lessons/accessibility/AccessibilityInteractiveExamples';
import LeanUXHypothesisBuilder from '../lessons/LeanUXHypothesisBuilder';
import MVPScopeSlider from '../lessons/MVPScopeSlider';
import UXDeliverablesCaseStudy from '../lessons/UXDeliverablesCaseStudy';
import { MethodologyPicker } from '../lessons/MethodologyPicker';
import { HMWWorkshop } from '../lessons/HMWWorkshop';
import { SprintPlanner } from '../lessons/SprintPlanner';
import { TicketBuilder } from '../lessons/TicketBuilder';
import { RequirementClassifier } from '../lessons/RequirementClassifier';
import { RoadmapBuilder } from '../lessons/RoadmapBuilder';
import { FunnelBuilder } from '../lessons/FunnelBuilder';
import {
  ProductLifecycleLoop,
  NorthStarExamples,
  LeadingVsLagging,
  FeatureFactoryComparison,
  MeasurementLoop,
  ImpactFormulaCallout,
} from '../lessons/MetricsVisuals';
import { TypeScaleComparison } from '../lessons/TypeScaleComparison';
import { ColorPaletteGenerator } from '../lessons/ColorPaletteGenerator';
import { ProblemStatementWorkshop } from '../lessons/ProblemStatementWorkshop';
import { MicrointeractionsLab } from '../lessons/MicrointeractionsLab';
import { FigmaLab } from '../lessons/FigmaLab';
import { UXPsychologyLab } from '../lessons/UXPsychologyLab';
import { DarkPatternsLab } from '../lessons/DarkPatternsLab';
import { LawsOfUXLab } from '../lessons/LawsOfUXLab';
import { HTMLLab } from '../lessons/HTMLLab';
import { CSSLab } from '../lessons/CSSLab';
import { JavaScriptLab } from '../lessons/JavaScriptLab';
import { HeuristicAnalysisLab } from '../lessons/HeuristicAnalysisLab';
import { BusinessGoalsExtras } from './BusinessGoalsExtras';
import { StakeholderMappingExtras } from './StakeholderMappingExtras';
import { DualTrackVisualizer, DoRChecklist, SprintCeremonyPlaybook, UXDevNegotiation } from './ScrumExtras';
import { DesignSprintExtras } from './DesignSprintExtras';
import { StateMapper } from '../lessons/StateMapper';
import { ClaroAdminCaseStudy } from '../lessons/ClaroAdminCaseStudy';
import { DocumentationBuilder } from '../lessons/DocumentationBuilder';
import { ReleasePlanner } from '../lessons/ReleasePlanner';
import { CaseStudyBuilder } from '../lessons/CaseStudyBuilder';
import {
  CaseStudyHeroBanner,
  NarrativeArcDiagram,
  JuniorVsSeniorComparison,
  RecruiterTimeVisual,
  SevenSectionFramework,
  WeakVsStrongImpact,
  InterviewCallbackStats,
  PortfolioMistakesVisual,
  StorytellingBanner,
} from '../lessons/CaseStudyVisuals';

function QuizSection({ quiz, language }: { quiz: any[], language: any }) {
  const [selectedAnswers, setSelectedAnswers] = useState<{[key: number]: number}>({});
  const [showResults, setShowResults] = useState<{[key: number]: boolean}>({});

  const handleAnswer = (quizIndex: number, optionIndex: number) => {
    setSelectedAnswers({...selectedAnswers, [quizIndex]: optionIndex});
  };

  const checkAnswer = (quizIndex: number) => {
    setShowResults({...showResults, [quizIndex]: true});
  };

  return (
    <section id="knowledge-check" className="bg-gradient-to-br from-orange-950/30 to-red-950/30 border border-orange-500/20 rounded-2xl p-6 md:p-8 scroll-mt-36">
       <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
          <HelpCircle className="size-5 text-orange-400" />
          {language({ en: 'Knowledge Check', es: 'Verificación de Conocimiento' })}
       </h3>
       <div className="space-y-6">
          {quiz.map((q: any, qIdx: number) => (
            <div key={qIdx} className="bg-black/40 rounded-xl p-4 border border-orange-500/20">
               <p className="text-white font-medium mb-4">{language(q.question)}</p>
               <div className="space-y-2 mb-4">
                  {language(q.options).map((option: string, oIdx: number) => {
                    const isSelected = selectedAnswers[qIdx] === oIdx;
                    const isCorrect = q.correctIndex === oIdx;
                    const showFeedback = showResults[qIdx];
                    
                    return (
                      <button
                        key={oIdx}
                        onClick={() => !showFeedback && handleAnswer(qIdx, oIdx)}
                        disabled={showFeedback}
                        className={`w-full text-left p-3 rounded-lg border transition-all ${
                          showFeedback
                            ? isCorrect
                              ? 'bg-green-950/50 border-green-500/50 text-green-200'
                              : isSelected
                              ? 'bg-red-950/50 border-red-500/50 text-red-200'
                              : 'bg-zinc-900/50 border-zinc-700 text-zinc-400'
                            : isSelected
                            ? 'bg-orange-950/50 border-orange-500/50 text-orange-200'
                            : 'bg-zinc-900/50 border-zinc-700 text-zinc-300 hover:border-orange-500/30'
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          {showFeedback && isCorrect && <Check className="size-4 text-green-400" />}
                          {showFeedback && isSelected && !isCorrect && <X className="size-4 text-red-400" />}
                          {option}
                        </span>
                      </button>
                    );
                  })}
               </div>
               {!showResults[qIdx] && selectedAnswers[qIdx] !== undefined && (
                 <button
                   onClick={() => checkAnswer(qIdx)}
                   className="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg text-sm font-medium transition-colors"
                 >
                   {language({ en: 'Check Answer', es: 'Verificar Respuesta' })}
                 </button>
               )}
               {showResults[qIdx] && (
                 <div className="mt-4 p-3 rounded-lg bg-zinc-900/80 border border-zinc-700">
                    <p className="text-sm text-zinc-300">{language(q.explanation)}</p>
                 </div>
               )}
            </div>
          ))}
       </div>
    </section>
  );
}

export function LessonPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { t } = useLanguage();
  const { markAsComplete, isLessonComplete } = useProgress();
  const [isCompleted, setIsCompleted] = useState(false);

  // Reset completion state when lesson changes and check if already completed
  useEffect(() => {
    const alreadyCompleted = isLessonComplete(slug || '');
    setIsCompleted(alreadyCompleted);
    window.scrollTo(0, 0);
  }, [slug, isLessonComplete]);

  // Find the current topic
  const allTopics: Topic[] = [];
  tracks.forEach(path => {
    path.topics.forEach(topic => allTopics.push(topic));
  });
  const topic = allTopics.find(t => t.id === slug);

  // Find previous and next lessons
  const currentIndex = allTopics.findIndex(t => t.id === slug);
  const previousLesson = currentIndex > 0 ? allTopics[currentIndex - 1] : null;
  const nextLesson = currentIndex < allTopics.length - 1 ? allTopics[currentIndex + 1] : null;

  if (!topic) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Lesson not found</h1>
          <Button onClick={() => navigate('/')}>
            <ArrowLeft className="size-4 mr-2" />
            Back to Learning Paths
          </Button>
        </div>
      </div>
    );
  }

  // Guard against topics without content
  if (!topic.content) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">{t({ en: 'Content coming soon', es: 'Contenido próximamente' })}</h1>
          <p className="text-zinc-400 mb-6">{t(topic.title)}</p>
          <Button onClick={() => navigate('/')}>
            <ArrowLeft className="size-4 mr-2" />
            {t({ en: 'Back to Learning Paths', es: 'Volver a Rutas de Aprendizaje' })}
          </Button>
        </div>
      </div>
    );
  }

  const sections = [
    { id: 'overview', label: t({ en: 'Overview', es: 'Resumen' }), icon: BookOpen },
    { id: 'why-it-matters', label: t({ en: 'Why it matters', es: 'Por qué importa' }), icon: Lightbulb },
    { id: 'key-principles', label: t({ en: 'Key Principles', es: 'Principios Clave' }), icon: ListChecks },
    ...(topic.id === 'atomic-design' ? [{ id: 'visual-guide', label: t({ en: 'Visual Guide', es: 'Guía Visual' }), icon: Sparkles }] : []),
    ...(topic.id === 'business-goals-kpis' ? [
      { id: 'goals-comparison', label: t({ en: 'Goals Comparison', es: 'Comparación de Objetivos' }), icon: ArrowRightLeft },
      { id: 'ux-kpis', label: t({ en: 'UX KPIs', es: 'KPIs UX' }), icon: BarChart3 },
      { id: 'goals-to-metrics', label: t({ en: 'Goals → Metrics', es: 'Objetivos → Métricas' }), icon: TrendingUp },
      { id: 'north-star', label: t({ en: 'North Star', es: 'North Star' }), icon: Compass },
      { id: 'vanity-vs-real', label: t({ en: 'Vanity vs Real', es: 'Vanidad vs Real' }), icon: Eye },
      { id: 'workshop', label: t({ en: 'Workshop', es: 'Taller' }), icon: PenLine },
    ] : []),
    ...(topic.id === 'stakeholder-mapping' ? [
      { id: 'what-is-stakeholder', label: t({ en: 'What is a Stakeholder?', es: '¿Qué es un Stakeholder?' }), icon: Users },
      { id: 'why-mapping-matters', label: t({ en: 'Why Mapping Matters', es: 'Por Qué Mapear' }), icon: AlertTriangle },
      { id: 'power-interest-matrix', label: t({ en: 'Power vs Interest', es: 'Poder vs Interés' }), icon: BarChart3 },
      { id: 'power-vs-influence', label: t({ en: 'Power vs Influence', es: 'Poder vs Influencia' }), icon: Scale },
      { id: 'practical-exercise', label: t({ en: 'Exercise', es: 'Ejercicio' }), icon: PenLine },
      { id: 'communication-strategy', label: t({ en: 'Communication', es: 'Comunicación' }), icon: MessageSquare },
      { id: 'political-risks', label: t({ en: 'Political Risks', es: 'Riesgos Políticos' }), icon: AlertTriangle },
    ] : []),
    ...(topic.id === 'scrum-for-designers' ? [
      { id: 'dual-track', label: t({ en: 'Dual Track Agile', es: 'Doble Vía Agile' }), icon: GitBranch },
      { id: 'dor-checker', label: t({ en: 'DoR Checker', es: 'Verificador DoR' }), icon: Shield },
      { id: 'ceremony-playbook', label: t({ en: 'Ceremony Playbook', es: 'Playbook Ceremonias' }), icon: Users },
      { id: 'ux-dev-negotiation', label: t({ en: 'UX-Dev Trade-offs', es: 'Trade-offs UX-Dev' }), icon: Scale },
    ] : []),
    ...(topic.id === 'design-sprint' ? [
      { id: 'sprint-variants', label: t({ en: 'Sprint Variants', es: 'Variantes de Sprint' }), icon: Compass },
      { id: 'when-not-to-sprint', label: t({ en: 'When NOT to Sprint', es: 'Cuándo NO Sprint' }), icon: AlertTriangle },
      { id: 'selling-sprint', label: t({ en: 'Selling a Sprint', es: 'Vender un Sprint' }), icon: TrendingUp },
      { id: 'post-sprint', label: t({ en: 'Post-Sprint', es: 'Post-Sprint' }), icon: ArrowRight },
      { id: 'sprint-risks', label: t({ en: 'Sprint Risks', es: 'Riesgos de Sprint' }), icon: AlertTriangle },
    ] : []),
    ...(topic.id === 'product-roadmapping' ? [
      { id: 'roadmap-builder', label: t({ en: 'Roadmap Builder', es: 'Constructor de Roadmap' }), icon: Map },
    ] : []),
    ...(topic.id === 'ux-metrics-advanced' ? [
      { id: 'funnel-builder', label: t({ en: 'Funnel Builder', es: 'Constructor de Funnel' }), icon: Filter },
    ] : []),
    ...(topic.id === 'edge-and-system-states' ? [
      { id: 'state-mapper', label: t({ en: 'State Mapper', es: 'Mapeador de Estados' }), icon: Shield },
    ] : []),
    ...(topic.id === 'ux-documentation-pro' ? [
      { id: 'documentation-builder', label: t({ en: 'Doc Builder', es: 'Constructor de Docs' }), icon: FileText },
    ] : []),
    ...(topic.id === 'release-planning-and-increment-strategy' ? [
      { id: 'release-planner', label: t({ en: 'Release Planner', es: 'Planificador de Release' }), icon: Rocket },
    ] : []),
    ...(topic.id === 'portfolio-case-study-writing' ? [
      { id: 'case-study-builder', label: t({ en: 'Case Study Builder', es: 'Constructor de Casos' }), icon: FileText },
    ] : []),
    { id: 'how-to-apply', label: t({ en: 'How to Apply', es: 'Cómo Aplicar' }), icon: ArrowRight },
    ...(topic.content.visualExamples ? [{ id: 'visual-examples', label: t({ en: 'Visual Examples', es: 'Ejemplos Visuales' }), icon: Image }] : []),
    ...(topic.content.codeExamples ? [{ id: 'code-examples', label: t({ en: 'Code Examples', es: 'Ejemplos de Código' }), icon: Code }] : []),
    ...(topic.content.tools ? [{ id: 'accessibility-tools', label: t({ en: 'A11y Tools', es: 'Herramientas A11y' }), icon: Wrench }] : []),
    { id: 'common-mistakes', label: t({ en: 'Common Mistakes', es: 'Errores Comunes' }), icon: AlertTriangle },
    ...(topic.content.deliverables ? [{ id: 'deliverables', label: t({ en: 'Deliverables', es: 'Entregables' }), icon: FileCheck }] : []),
    ...(topic.content.practicalTools ? [{ id: 'tools', label: t({ en: 'Tools', es: 'Herramientas' }), icon: Wrench }] : []),
    ...(topic.content.aiInPractice ? [{ id: 'ai-practice', label: t({ en: 'AI in Practice', es: 'IA en Práctica' }), icon: Sparkles }] : []),
    ...(topic.content.howToValidate ? [{ id: 'validation', label: t({ en: 'Validation', es: 'Validación' }), icon: CheckCircle2 }] : []),
    ...(topic.content.quiz ? [{ id: 'knowledge-check', label: t({ en: 'Knowledge Check', es: 'Verificación' }), icon: HelpCircle }] : []),
    ...(topic.content.realExample ? [{ id: 'real-example', label: t({ en: 'Real Example', es: 'Ejemplo Real' }), icon: Lightbulb }] : []),
    { id: 'references', label: t({ en: 'References', es: 'Referencias' }), icon: BookOpen },
  ];

  const handleComplete = () => {
    setIsCompleted(true);
    markAsComplete(slug);
    // In a real app, this would save to localStorage or a backend
  };

  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      {/* Header */}
      <div className="sticky top-16 z-40 bg-black/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-[1480px] mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors min-w-0"
          >
            <ArrowLeft className="size-4 shrink-0" />
            <span className="text-sm truncate">{t({ en: 'Back to Learning Paths', es: 'Volver a Rutas' })}</span>
          </button>
          <div className="flex items-center gap-4">
            <div className="text-sm text-zinc-500">
              {topic.timeEstimate}
            </div>
            <div className={`px-3 py-1 rounded-full text-xs font-medium ${
              topic.status === 'beginner' ? 'bg-green-500/10 text-green-400 border border-green-500/20' :
              topic.status === 'intermediate' ? 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20' :
              'bg-red-500/10 text-red-400 border border-red-500/20'
            }`}>
              {topic.status === 'beginner' ? t({ en: 'Beginner', es: 'Principiante' }) :
               topic.status === 'intermediate' ? t({ en: 'Intermediate', es: 'Intermedio' }) :
               t({ en: 'Advanced', es: 'Avanzado' })}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content with Reusable LessonLayout */}
      <LessonLayout sections={sections}>
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t(topic.title)}
          </h1>
          <p className="text-xl text-zinc-400 mb-6">
            {t(topic.description)}
          </p>
          {/* Portfolio Case Study Writing - Hero Banner */}
          {topic.id === 'portfolio-case-study-writing' && <CaseStudyHeroBanner />}
        </motion.div>

        {/* Overview/Definition */}
        <section id="overview" className="mb-12 scroll-mt-36">
          <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
            <BookOpen className="size-6 text-indigo-400" />
            {t({ en: 'What is this?', es: '¿Qué es esto?' })}
          </h2>
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6">
            {(() => {
              const text = t(topic.content.definition);
              const paragraphs = text.split('\n\n').filter((p: string) => p.trim());
              const isMetrics = topic.id === 'ux-metrics-advanced';
              const isCaseStudy = topic.id === 'portfolio-case-study-writing';

              return (
                <div className="space-y-4">
                  {paragraphs.map((para: string, idx: number) => (
                    <React.Fragment key={idx}>
                      <p className="text-zinc-300 leading-relaxed">{para}</p>
                      {/* Insert visuals after specific paragraphs for ux-metrics-advanced */}
                      {isMetrics && idx === 0 && <ProductLifecycleLoop />}
                      {isMetrics && idx === 1 && <NorthStarExamples />}
                      {isMetrics && idx === 2 && <LeadingVsLagging />}
                      {/* Insert visuals for portfolio-case-study-writing */}
                      {isCaseStudy && idx === 0 && <NarrativeArcDiagram />}
                    </React.Fragment>
                  ))}
                </div>
              );
            })()}
          </div>
        </section>

        {/* Why it matters */}
        <section id="why-it-matters" className="mb-12 scroll-mt-36">
          <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
            <Lightbulb className="size-6 text-yellow-400" />
            {t({ en: 'Why it matters', es: 'Por qué importa' })}
          </h2>
          <div className="bg-gradient-to-br from-yellow-950/20 to-orange-950/20 border border-yellow-500/20 rounded-2xl p-6">
            {(() => {
              const text = t(topic.content.why);
              const paragraphs = text.split('\n\n').filter((p: string) => p.trim());
              const isMetrics = topic.id === 'ux-metrics-advanced';
              const isCaseStudy = topic.id === 'portfolio-case-study-writing';

              return (
                <div className="space-y-4">
                  {paragraphs.map((para: string, idx: number) => (
                    <React.Fragment key={idx}>
                      <p className="text-zinc-300 leading-relaxed">{para}</p>
                      {/* Insert visuals after specific paragraphs for ux-metrics-advanced */}
                      {isMetrics && idx === 0 && <FeatureFactoryComparison />}
                      {isMetrics && idx === 1 && <ImpactFormulaCallout />}
                      {isMetrics && idx === 2 && <MeasurementLoop />}
                      {/* Insert visuals for portfolio-case-study-writing */}
                      {isCaseStudy && idx === 0 && <InterviewCallbackStats />}
                      {isCaseStudy && idx === 1 && <JuniorVsSeniorComparison />}
                    </React.Fragment>
                  ))}
                </div>
              );
            })()}
          </div>
        </section>

        {/* Key Principles */}
        <section id="key-principles" className="mb-12 scroll-mt-36">
          <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
            <ListChecks className="size-6 text-blue-400" />
            {t({ en: 'Key Principles', es: 'Principios Clave' })}
          </h2>
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6">
            <ul className="space-y-4">
              {t(topic.content.keyPrinciples).map((principle: string, idx: number) => (
                <li key={idx} className="flex gap-3 text-zinc-300">
                  <CheckCircle2 className="size-5 text-indigo-400 mt-0.5 shrink-0" />
                  <span className="leading-relaxed">{principle}</span>
                </li>
              ))}
            </ul>
            {/* Portfolio Case Study Writing - Recruiter Time Visual after principles */}
            {topic.id === 'portfolio-case-study-writing' && <RecruiterTimeVisual />}
          </div>
        </section>

        {/* Atomic Design Visual Guide - Special Interactive Section */}
        {topic.id === 'atomic-design' && (
          <div className="mb-12">
            <AtomicVisualGuideSection />
          </div>
        )}

        {/* Business Goals & KPIs - Custom Sections (comparison table, KPI cards, North Star, Vanity vs Real) */}
        {topic.id === 'business-goals-kpis' && (
          <BusinessGoalsExtras />
        )}

        {/* Stakeholder Mapping - Custom Sections (matrix, exercise, communication, political risks) */}
        {topic.id === 'stakeholder-mapping' && (
          <StakeholderMappingExtras />
        )}

        {/* Scrum for Designers 2.0 - Dual Track, DoR Checker, Ceremony Playbook, UX-Dev Negotiation */}
        {topic.id === 'scrum-for-designers' && (
          <div className="mb-12">
            <DualTrackVisualizer />
            <DoRChecklist />
            <SprintCeremonyPlaybook />
            <UXDevNegotiation />
          </div>
        )}

        {/* Design Sprint 2.0 - Variants, When NOT to Sprint, Selling a Sprint, Post-Sprint, Risks */}
        {topic.id === 'design-sprint' && (
          <DesignSprintExtras />
        )}

        {/* Product Roadmapping - Interactive RICE-based Roadmap Builder */}
        {topic.id === 'product-roadmapping' && <RoadmapBuilder />}
        {/* UX Metrics Advanced - Funnel Builder */}
        {topic.id === 'ux-metrics-advanced' && <FunnelBuilder />}
        {/* Edge & System States - State Mapper */}
        {topic.id === 'edge-and-system-states' && <StateMapper />}
        {/* UX Documentation Pro - Documentation Builder */}
        {topic.id === 'ux-documentation-pro' && <DocumentationBuilder />}
        {/* Release Planning - Release Planner */}
        {topic.id === 'release-planning-and-increment-strategy' && <ReleasePlanner />}
        {/* Portfolio Case Study Writing - Case Study Builder */}
        {topic.id === 'portfolio-case-study-writing' && (
          <>
            <StorytellingBanner />
            <CaseStudyBuilder />
          </>
        )}
        {/* Lean UX - Hypothesis Builder */}
        {topic.id === 'lean-ux' && <LeanUXHypothesisBuilder />}
        {/* MVP Scope - Slider */}
        {topic.id === 'mvp-scope' && <MVPScopeSlider />}

        {/* How to Apply */}
        {topic.content.howToApply && (
          <section id="how-to-apply" className="mb-12 scroll-mt-36">
            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
              <ArrowRight className="size-6 text-green-400" />
              {t({ en: 'How to Apply', es: 'Cómo Aplicar' })}
            </h2>
            <div className="space-y-4">
              {topic.content.howToApply.steps.map((step: any, idx: number) => (
                <div key={idx} className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="size-8 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0">
                      <span className="text-sm font-bold text-indigo-400">{idx + 1}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-white mb-2">{t(step.name)}</h3>
                      <p className="text-zinc-400 text-sm leading-relaxed">{t(step.description)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Portfolio Case Study Writing - 7-Section Framework after How to Apply */}
            {topic.id === 'portfolio-case-study-writing' && <SevenSectionFramework />}
          </section>
        )}

        {/* Interactive Accessibility Examples (only for accessibility lesson) */}
        {topic.id === 'accessibility' && topic.content.visualExamples && (
          <section id="visual-examples" className="mb-12 scroll-mt-36">
            <AccessibilityInteractiveExamples />
          </section>
        )}

        {/* Visual Examples (for other lessons) */}
        {topic.id !== 'accessibility' && topic.content.visualExamples && (
          <VisualExamplesSection visualExamples={topic.content.visualExamples} t={t} />
        )}

        {/* Code Examples (Accessibility) */}
        <CodeExamplesSection codeExamples={topic.content.codeExamples} t={t} />

        {/* Tools (Accessibility) */}
        <ToolsSection tools={topic.content.tools} t={t} />

        {/* Common Mistakes */}
        {topic.content.commonMistakes && (
          <section id="common-mistakes" className="mb-12 scroll-mt-36">
            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
              <AlertTriangle className="size-6 text-red-400" />
              {t({ en: 'Common Mistakes', es: 'Errores Comunes' })}
            </h2>
            <div className="bg-gradient-to-br from-red-950/20 to-orange-950/20 border border-red-500/20 rounded-2xl p-6">
              <ul className="space-y-3">
                {t(topic.content.commonMistakes).map((mistake: string, idx: number) => (
                  <li key={idx} className="flex gap-3 text-zinc-300">
                    <X className="size-5 text-red-400 mt-0.5 shrink-0" />
                    <span className="leading-relaxed">{mistake}</span>
                  </li>
                ))}
              </ul>
              {/* Portfolio Case Study Writing - Portfolio Mistakes Visual after Common Mistakes */}
              {topic.id === 'portfolio-case-study-writing' && <PortfolioMistakesVisual />}
            </div>
          </section>
        )}

        {/* Deliverables */}
        {topic.content.deliverables && (
          <section id="deliverables" className="mb-12 scroll-mt-36">
            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
              <FileCheck className="size-6 text-purple-400" />
              {t({ en: 'Deliverables', es: 'Entregables' })}
            </h2>
            <div className="bg-gradient-to-br from-purple-950/20 to-indigo-950/20 border border-purple-500/20 rounded-2xl p-6">
              <p className="text-zinc-400 mb-4 text-sm">{t(topic.content.deliverables.description)}</p>
              <ul className="space-y-3">
                {t(topic.content.deliverables.items).map((item: string, idx: number) => (
                  <li key={idx} className="flex gap-3 text-zinc-300">
                    <CheckCircle2 className="size-5 text-purple-400 mt-0.5 shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* Tools */}
        {topic.content.practicalTools && (() => {
          const pt = topic.content.practicalTools;
          const categories: { key: string; data: { en: string[]; es: string[] } | undefined; label: { en: string; es: string }; icon: string; color: string }[] = [
            { key: 'design', data: pt.design, label: { en: 'Design', es: 'Diseño' }, icon: '🎨', color: 'border-pink-500/20' },
            { key: 'research', data: pt.research, label: { en: 'Research', es: 'Investigación' }, icon: '🔬', color: 'border-blue-500/20' },
            { key: 'coding', data: pt.coding, label: { en: 'Coding', es: 'Código' }, icon: '💻', color: 'border-emerald-500/20' },
            { key: 'ai', data: pt.ai, label: { en: 'AI Tools', es: 'Herramientas IA' }, icon: '🤖', color: 'border-purple-500/20' },
            { key: 'management', data: pt.management, label: { en: 'Management & Planning', es: 'Gestión y Planificación' }, icon: '📋', color: 'border-orange-500/20' },
            { key: 'documentation', data: pt.documentation, label: { en: 'Documentation', es: 'Documentación' }, icon: '📝', color: 'border-cyan-500/20' },
            { key: 'testing', data: pt.testing, label: { en: 'Testing & QA', es: 'Testing y QA' }, icon: '🧪', color: 'border-yellow-500/20' },
            { key: 'analytics', data: pt.analytics, label: { en: 'Analytics', es: 'Analíticas' }, icon: '📊', color: 'border-indigo-500/20' },
            { key: 'handoff', data: pt.handoff, label: { en: 'Handoff', es: 'Entrega' }, icon: '🤝', color: 'border-amber-500/20' },
          ].filter(c => c.data);

          return (
            <section id="tools" className="mb-12 scroll-mt-36">
              <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                <Wrench className="size-6 text-cyan-400" />
                {t({ en: 'Recommended Tools', es: 'Herramientas Recomendadas' })}
                <span className="text-xs text-zinc-500 font-normal ml-2">
                  ({categories.reduce((sum, c) => sum + (t(c.data!).length), 0)} {t({ en: 'tools', es: 'herramientas' })})
                </span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {categories.map(cat => (
                  <div key={cat.key} className={`bg-zinc-900/50 border border-zinc-800 ${cat.color} rounded-xl p-4`}>
                    <h3 className="text-sm font-semibold text-zinc-400 mb-3 uppercase tracking-wide flex items-center gap-2">
                      <span>{cat.icon}</span>
                      {t(cat.label)}
                    </h3>
                    <ul className="space-y-2">
                      {t(cat.data!).map((tool: string, idx: number) => (
                        <li key={idx} className="text-sm text-zinc-300 flex items-start gap-2">
                          <span className="text-zinc-600 mt-1 text-[8px]">●</span>
                          <span>{tool}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          );
        })()}

        {/* AI in Practice */}
        {topic.content.aiInPractice && (
          <section id="ai-practice" className="mb-12 scroll-mt-36">
            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
              <Sparkles className="size-6 text-pink-400" />
              {t({ en: 'AI in Practice', es: 'IA en Práctica' })}
            </h2>
            <div className="bg-gradient-to-br from-pink-950/20 to-purple-950/20 border border-pink-500/20 rounded-2xl p-6">
              <p className="text-zinc-400 mb-6 text-sm">{t(topic.content.aiInPractice.description)}</p>
              <div className="space-y-4">
                {topic.content.aiInPractice.prompts.map((p: any, idx: number) => (
                  <div key={idx} className="bg-black/40 rounded-xl p-4 border border-pink-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Bot className="size-4 text-pink-400" />
                      <span className="text-xs font-semibold text-pink-400 uppercase tracking-wide">
                        {p.tool}
                      </span>
                      <span className="text-xs text-zinc-500">•</span>
                      <span className="text-xs text-zinc-500">{t(p.context)}</span>
                    </div>
                    <p className="text-sm text-zinc-300 font-mono bg-zinc-950/50 rounded p-3 border border-zinc-800">
                      {t(p.prompt)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Validation */}
        {topic.content.howToValidate && (
          <section id="validation" className="mb-12 scroll-mt-36">
            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
              <CheckCircle2 className="size-6 text-green-400" />
              {t({ en: 'How to Validate', es: 'Cómo Validar' })}
            </h2>
            <div className="bg-gradient-to-br from-green-950/20 to-emerald-950/20 border border-green-500/20 rounded-2xl p-6 space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-green-400 mb-2 uppercase tracking-wide">
                  {t({ en: 'What to validate', es: 'Qué validar' })}
                </h3>
                <p className="text-zinc-300 text-sm leading-relaxed">{t(topic.content.howToValidate.what)}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-green-400 mb-2 uppercase tracking-wide">
                  {t({ en: 'Methods', es: 'Métodos' })}
                </h3>
                <ul className="space-y-2">
                  {t(topic.content.howToValidate.methods).map((method: string, idx: number) => (
                    <li key={idx} className="flex gap-2 text-sm text-zinc-300">
                      <CheckCircle2 className="size-4 text-green-400 mt-0.5 shrink-0" />
                      <span>{method}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {topic.content.howToValidate.tools && (
                <div>
                  <h3 className="text-sm font-semibold text-green-400 mb-2 uppercase tracking-wide">
                    {t({ en: 'Tools', es: 'Herramientas' })}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {t(topic.content.howToValidate.tools).map((tool: string, idx: number) => (
                      <span key={idx} className="px-3 py-1 bg-green-950/30 border border-green-500/30 rounded-full text-xs text-green-300">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              {topic.content.howToValidate.evidenceExample && (
                <div className="bg-black/40 rounded-lg p-4 border border-green-500/20">
                  <h3 className="text-xs font-semibold text-green-400 mb-2 uppercase tracking-wide">
                    {t({ en: 'Evidence Example', es: 'Ejemplo de Evidencia' })}
                  </h3>
                  <p className="text-sm text-zinc-400">{t(topic.content.howToValidate.evidenceExample)}</p>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Quiz */}
        {topic.content.quiz && topic.content.quiz.length > 0 && (
          <QuizSection quiz={topic.content.quiz} language={t} />
        )}

        {/* Real Example */}
        {topic.content.realExample && (
          <section id="real-example" className="mb-12 mt-16 scroll-mt-36">
            {/* Portfolio Case Study Writing - Weak vs Strong Impact before Real Example */}
            {topic.id === 'portfolio-case-study-writing' && <WeakVsStrongImpact />}
            <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
              <Lightbulb className="size-6 text-amber-400" />
              {t({ en: 'Real World Example', es: 'Ejemplo del Mundo Real' })}
            </h2>
            <div className="bg-gradient-to-br from-amber-950/20 to-yellow-950/20 border border-amber-500/20 rounded-2xl p-6">
              <h3 className="font-semibold text-white mb-2">{t(topic.content.realExample.title)}</h3>
              {topic.content.realExample.company && (
                <p className="text-xs text-amber-400 mb-4">{topic.content.realExample.company}</p>
              )}
              <p className="text-zinc-300 leading-relaxed">{t(topic.content.realExample.description)}</p>
            </div>

            {/* Special Examples */}
            {topic.id === 'user-personas' && (
              <>
                <UserPersonaCard />
                <EmpathyMapExample />
              </>
            )}
            {topic.id === 'ux-ui-product-design-intro' && <RoleComparisonInteractive />}
            {topic.id === 'usability-basics' && <ModalEvolutionComparison />}
            {topic.id === 'visual-hierarchy' && <VisualHierarchyExamples />}
            {topic.id === 'ux-psychology' && <MentalModelExample />}
            {topic.id === 'information-architecture' && <SitemapExample />}
            {topic.id === 'methodologies-overview' && <MethodologiesDeepDive />}
            {topic.id === 'customer-journey-map' && <InteractiveJourneyMap />}
            {topic.id === 'service-blueprint' && <BlueprintSimulator />}
            {topic.id === 'atomic-visual-guide' && <AtomicVisualGuideSection />}
            {topic.id === 'user-flows' && <UserFlowInteractive />}
            {topic.id === 'wireframing-prototyping' && <WireframeFidelityComparison />}
            {topic.id === 'ux-research' && <UXResearchDataExample />}
            {topic.id === 'competitive-analysis' && <CompetitiveBenchmarkExample />}
            {topic.id === 'ux-process' && <UXDeliverablesCaseStudy />}
            {topic.id === 'methodologies-overview' && <MethodologyPicker />}
            {topic.id === 'design-thinking' && <HMWWorkshop />}
            {topic.id === 'design-sprint' && <SprintPlanner />}
            {topic.id === 'scrum-for-designers' && <TicketBuilder />}
            {topic.id === 'user-stories-and-requirements' && <RequirementClassifier />}
            {/* Note: RoadmapBuilder, ReleasePlanner, CaseStudyBuilder, LeanUXHypothesisBuilder, MVPScopeSlider
                are rendered in their dedicated sections above (outside realExample) to avoid duplication */}
            {topic.id === 'type-scale' && (
              <div className="mt-12">
                <TypeScaleComparison />
              </div>
            )}
            {topic.id === 'typography-fundamentals' && (
              <div className="mt-12">
                <TypeScaleComparison />
              </div>
            )}
            {topic.id === 'color-theory' && (
              <div className="mt-12">
                <ColorPaletteGenerator />
              </div>
            )}
            {topic.id === 'color-palette' && (
              <div className="mt-12">
                <ColorPaletteGenerator />
              </div>
            )}
            {topic.id === 'problem-statements' && (
              <div className="mt-12">
                <ProblemStatementWorkshop />
              </div>
            )}
            {topic.id === 'microinteractions' && (
              <div className="mt-12">
                <MicrointeractionsLab />
              </div>
            )}
            {topic.id === 'figma-mastery' && (
              <div className="mt-12">
                <FigmaLab />
              </div>
            )}
            {topic.id === 'ux-psychology' && (
              <div className="mt-12">
                <UXPsychologyLab />
              </div>
            )}
            {topic.id === 'design-ethics' && (
              <div className="mt-12">
                <DarkPatternsLab />
              </div>
            )}
            {topic.id === 'laws-of-ux' && (
              <div className="mt-12">
                <LawsOfUXLab />
              </div>
            )}
            {topic.id === 'html-fundamentals' && (
              <div className="mt-12">
                <HTMLLab />
              </div>
            )}
            {topic.id === 'css-fundamentals' && (
              <div className="mt-12">
                <CSSLab />
              </div>
            )}
            {topic.id === 'intro-javascript' && (
              <div className="mt-12">
                <JavaScriptLab />
              </div>
            )}
            {topic.id === 'heuristic-analysis' && (
              <div className="mt-12">
                <HeuristicAnalysisLab />
              </div>
            )}
            {topic.id === 'edge-and-system-states' && (
              <div className="mt-12">
                <ClaroAdminCaseStudy />
              </div>
            )}
          </section>
        )}

        {/* References */}
        <section id="references" className="mb-12 scroll-mt-36">
          <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
            <BookOpen className="size-6 text-indigo-400" />
            {t({ en: 'References & Resources', es: 'Referencias y Recursos' })}
          </h2>
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6">
            {topic.reference && (
              <a
                href={topic.referenceLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                <ExternalLink className="size-4" />
                <span>{t(topic.reference)}</span>
              </a>
            )}
          </div>
        </section>

        {/* Completion CTA */}
        <div className="border-t border-zinc-800 pt-8 space-y-6">
          {!isCompleted ? (
            <Button
              onClick={handleComplete}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-6 text-lg"
            >
              <CheckCircle2 className="size-5 mr-2" />
              {t({ en: 'Mark as Complete', es: 'Marcar como Completado' })}
            </Button>
          ) : (
            <div className="bg-green-950/20 border border-green-500/20 rounded-2xl p-6 text-center">
              <CheckCircle2 className="size-12 text-green-400 mx-auto mb-3" />
              <p className="text-green-400 font-semibold mb-2">
                {t({ en: 'Lesson Completed!', es: '¡Lección Completada!' })}
              </p>
              <p className="text-sm text-zinc-400">
                {t({ en: 'Great job! Ready for the next one?', es: '¡Buen trabajo! ¿Listo para la siguiente?' })}
              </p>
            </div>
          )}

          {/* Navigation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {previousLesson && (
              <button
                onClick={() => navigate(`/lesson/${previousLesson.id}`)}
                className="flex items-center gap-3 p-4 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:border-indigo-500/30 transition-all group"
              >
                <ArrowLeft className="size-5 text-zinc-500 group-hover:text-indigo-400 transition-colors" />
                <div className="text-left">
                  <p className="text-xs text-zinc-500 mb-1">
                    {t({ en: 'Previous', es: 'Anterior' })}
                  </p>
                  <p className="text-sm text-white group-hover:text-indigo-400 transition-colors">
                    {t(previousLesson.title)}
                  </p>
                </div>
              </button>
            )}
            {nextLesson && (
              <button
                onClick={() => navigate(`/lesson/${nextLesson.id}`)}
                className="flex items-center gap-3 p-4 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:border-indigo-500/30 transition-all group md:ml-auto"
              >
                <div className="text-right">
                  <p className="text-xs text-zinc-500 mb-1">
                    {t({ en: 'Next', es: 'Siguiente' })}
                  </p>
                  <p className="text-sm text-white group-hover:text-indigo-400 transition-colors">
                    {t(nextLesson.title)}
                  </p>
                </div>
                <ChevronRight className="size-5 text-zinc-500 group-hover:text-indigo-400 transition-colors" />
              </button>
            )}
          </div>
        </div>
      </LessonLayout>
    </div>
  );
}