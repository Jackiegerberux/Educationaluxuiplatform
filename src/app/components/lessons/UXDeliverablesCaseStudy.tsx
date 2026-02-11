import React, { useState } from 'react';
import { useLanguage } from '../layout/LanguageContext';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  Target, 
  Palette, 
  CheckCircle2, 
  FileText, 
  Users, 
  Map, 
  Boxes, 
  Layout, 
  MousePointer,
  BarChart3,
  ChevronRight,
  Download,
  ExternalLink,
  Lightbulb,
  MessageSquare,
  Zap
} from 'lucide-react';

type Phase = 'discovery' | 'definition' | 'design' | 'validation';

interface Deliverable {
  id: string;
  name: { en: string; es: string };
  icon: React.ReactNode;
  description: { en: string; es: string };
  keyInsights: { en: string[]; es: string[] };
  format: { en: string; es: string };
  stakeholders: { en: string; es: string };
}

interface PhaseData {
  id: Phase;
  title: { en: string; es: string };
  description: { en: string; es: string };
  duration: { en: string; es: string };
  icon: React.ReactNode;
  color: string;
  deliverables: Deliverable[];
}

const UXDeliverablesCaseStudy: React.FC = () => {
  const { language } = useLanguage();
  const t = (text: { en: string; es: string }) => text[language];

  const [selectedPhase, setSelectedPhase] = useState<Phase>('discovery');
  const [selectedDeliverable, setSelectedDeliverable] = useState<string | null>(null);

  // Case Study Context
  const caseStudy = {
    title: { 
      en: 'FitTrack App Redesign', 
      es: 'Rediseño de App FitTrack' 
    },
    context: {
      en: 'A fitness tracking mobile app struggling with 65% user drop-off after first week. Goal: Redesign the onboarding and core tracking experience to increase 30-day retention by 40%.',
      es: 'Una app móvil de seguimiento fitness con 65% de abandono después de la primera semana. Objetivo: Rediseñar el onboarding y experiencia principal para aumentar retención a 30 días en 40%.'
    },
    timeline: { en: '8 weeks', es: '8 semanas' },
    team: { en: '1 UX Designer, 1 Researcher, 1 PM, 2 Developers', es: '1 Diseñador UX, 1 Investigador, 1 PM, 2 Desarrolladores' }
  };

  const phases: PhaseData[] = [
    {
      id: 'discovery',
      title: { en: 'Discovery', es: 'Descubrimiento' },
      description: { 
        en: 'Understanding the problem space, users, and business context',
        es: 'Entendiendo el espacio del problema, usuarios y contexto empresarial'
      },
      duration: { en: 'Week 1-2', es: 'Semana 1-2' },
      icon: <Search className="size-6" />,
      color: 'blue',
      deliverables: [
        {
          id: 'research-plan',
          name: { en: 'Research Plan', es: 'Plan de Investigación' },
          icon: <FileText className="size-5" />,
          description: {
            en: 'Document outlining research objectives, methods, timeline, and participants.',
            es: 'Documento que describe objetivos de investigación, métodos, cronograma y participantes.'
          },
          keyInsights: {
            en: [
              'Research Question: Why do 65% of users abandon after week 1?',
              'Methods: 15 user interviews + analytics review + competitive analysis',
              'Timeline: 2 weeks',
              'Participants: New users (< 7 days) + Churned users + Active users (30+ days)'
            ],
            es: [
              'Pregunta de Investigación: ¿Por qué el 65% de usuarios abandonan después de semana 1?',
              'Métodos: 15 entrevistas + revisión de analytics + análisis competitivo',
              'Cronograma: 2 semanas',
              'Participantes: Usuarios nuevos (< 7 días) + Usuarios que abandonaron + Usuarios activos (30+ días)'
            ]
          },
          format: { en: 'Google Doc / Notion', es: 'Google Doc / Notion' },
          stakeholders: { en: 'PM, Design Lead, Researchers', es: 'PM, Líder de Diseño, Investigadores' }
        },
        {
          id: 'competitive-analysis',
          name: { en: 'Competitive Analysis', es: 'Análisis Competitivo' },
          icon: <BarChart3 className="size-5" />,
          description: {
            en: 'Comparison of 3-5 competitor apps analyzing onboarding, features, and retention tactics.',
            es: 'Comparación de 3-5 apps competidoras analizando onboarding, características y tácticas de retención.'
          },
          keyInsights: {
            en: [
              'MyFitnessPal: Quick 2-min onboarding with immediate value (log first meal)',
              'Strava: Strong social proof (friends using app) in first session',
              'Nike Training Club: Guided first workout within 5 minutes',
              '⚠️ FitTrack: 10-min onboarding, no immediate value, lacks social features'
            ],
            es: [
              'MyFitnessPal: Onboarding rápido de 2 min con valor inmediato (registrar primera comida)',
              'Strava: Fuerte prueba social (amigos usando app) en primera sesión',
              'Nike Training Club: Primer entrenamiento guiado en 5 minutos',
              '⚠️ FitTrack: Onboarding de 10 min, sin valor inmediato, carece de características sociales'
            ]
          },
          format: { en: 'Spreadsheet + Slides', es: 'Hoja de cálculo + Diapositivas' },
          stakeholders: { en: 'Product Team, Leadership', es: 'Equipo de Producto, Liderazgo' }
        },
        {
          id: 'user-interviews',
          name: { en: 'User Interview Synthesis', es: 'Síntesis de Entrevistas' },
          icon: <MessageSquare className="size-5" />,
          description: {
            en: 'Key findings from 15 interviews with new, churned, and active users.',
            es: 'Hallazgos clave de 15 entrevistas con usuarios nuevos, que abandonaron y activos.'
          },
          keyInsights: {
            en: [
              '🔴 "Onboarding felt like homework" (8/10 churned users)',
              '🔴 "Didn\'t see progress fast enough" (9/10 churned users)',
              '🟢 "Weekly recap email motivated me to keep going" (7/8 active users)',
              '🟢 "I liked competing with my friend" (6/8 active users)',
              '💡 Insight: Users need immediate wins + social accountability'
            ],
            es: [
              '🔴 "El onboarding se sintió como tarea" (8/10 usuarios que abandonaron)',
              '🔴 "No vi progreso lo suficientemente rápido" (9/10 usuarios que abandonaron)',
              '🟢 "El resumen semanal me motivó a seguir" (7/8 usuarios activos)',
              '🟢 "Me gustó competir con mi amigo" (6/8 usuarios activos)',
              '💡 Insight: Los usuarios necesitan victorias inmediatas + responsabilidad social'
            ]
          },
          format: { en: 'Miro Board + Report', es: 'Tablero Miro + Reporte' },
          stakeholders: { en: 'Entire Product Team', es: 'Todo el Equipo de Producto' }
        }
      ]
    },
    {
      id: 'definition',
      title: { en: 'Definition', es: 'Definición' },
      description: { 
        en: 'Synthesizing research into actionable design direction',
        es: 'Sintetizando investigación en dirección de diseño accionable'
      },
      duration: { en: 'Week 3', es: 'Semana 3' },
      icon: <Target className="size-6" />,
      color: 'purple',
      deliverables: [
        {
          id: 'personas',
          name: { en: 'User Personas', es: 'Personas de Usuario' },
          icon: <Users className="size-5" />,
          description: {
            en: 'Two primary personas representing new users and their motivations.',
            es: 'Dos personas primarias representando usuarios nuevos y sus motivaciones.'
          },
          keyInsights: {
            en: [
              '👤 Sarah, 28 - "The Motivated Beginner": Just signed up for gym, needs structure & encouragement',
              '👤 Mike, 35 - "The Comeback Athlete": Used to be fit, wants to track progress & compete with friends',
              'Pain Points: Information overload, no quick wins, lonely experience',
              'Goals: See progress fast, stay motivated, feel part of community'
            ],
            es: [
              '👤 Sarah, 28 - "La Principiante Motivada": Recién inscrita en gym, necesita estructura y aliento',
              '👤 Mike, 35 - "El Atleta que Regresa": Solía estar en forma, quiere rastrear progreso y competir con amigos',
              'Puntos de Dolor: Sobrecarga de información, sin victorias rápidas, experiencia solitaria',
              'Objetivos: Ver progreso rápido, mantenerse motivado, sentirse parte de comunidad'
            ]
          },
          format: { en: 'PDF / Figma File', es: 'PDF / Archivo Figma' },
          stakeholders: { en: 'Design, PM, Marketing', es: 'Diseño, PM, Marketing' }
        },
        {
          id: 'journey-map',
          name: { en: 'Customer Journey Map', es: 'Mapa de Viaje del Cliente' },
          icon: <Map className="size-5" />,
          description: {
            en: 'End-to-end journey from app discovery to 30-day active user.',
            es: 'Viaje de extremo a extremo desde descubrimiento de app hasta usuario activo a 30 días.'
          },
          keyInsights: {
            en: [
              '📱 Day 0: Download → Onboarding (Current: 10min, Target: 2min)',
              '💪 Day 1: First workout logged (Current: 40% completion, Target: 80%)',
              '📊 Day 7: First progress check (Current: 15% retention, Target: 60%)',
              '🏆 Day 30: Active user (Current: 10% retention, Target: 50%)',
              '🔴 Drop-off points: Lengthy onboarding, no value in Day 1-3, lack of reminders'
            ],
            es: [
              '📱 Día 0: Descarga → Onboarding (Actual: 10min, Objetivo: 2min)',
              '💪 Día 1: Primer entrenamiento registrado (Actual: 40% completado, Objetivo: 80%)',
              '📊 Día 7: Primera revisión de progreso (Actual: 15% retención, Objetivo: 60%)',
              '🏆 Día 30: Usuario activo (Actual: 10% retención, Objetivo: 50%)',
              '🔴 Puntos de abandono: Onboarding largo, sin valor en Día 1-3, falta de recordatorios'
            ]
          },
          format: { en: 'Miro / FigJam', es: 'Miro / FigJam' },
          stakeholders: { en: 'Cross-functional team', es: 'Equipo interfuncional' }
        },
        {
          id: 'problem-statement',
          name: { en: 'Problem Statement & HMW', es: 'Declaración del Problema y PDC' },
          icon: <Lightbulb className="size-5" />,
          description: {
            en: 'Clear problem framing and "How Might We" questions for ideation.',
            es: 'Marco claro del problema y preguntas "¿Cómo Podríamos?" para ideación.'
          },
          keyInsights: {
            en: [
              '🎯 Problem: New users don\'t experience value in their first 3 days, leading to 65% drop-off',
              '💡 HMW #1: How might we make onboarding feel like a quick win instead of homework?',
              '💡 HMW #2: How might we show progress immediately (even with minimal data)?',
              '💡 HMW #3: How might we add social accountability without being intrusive?',
              '💡 HMW #4: How might we remind users to come back without annoying them?'
            ],
            es: [
              '🎯 Problema: Los nuevos usuarios no experimentan valor en sus primeros 3 días, llevando a 65% de abandono',
              '💡 PDC #1: ¿Cómo podríamos hacer que el onboarding se sienta como una victoria rápida en lugar de tarea?',
              '💡 PDC #2: ¿Cómo podríamos mostrar progreso inmediatamente (incluso con datos mínimos)?',
              '💡 PDC #3: ¿Cómo podríamos agregar responsabilidad social sin ser intrusivos?',
              '💡 PDC #4: ¿Cómo podríamos recordar a los usuarios volver sin molestarlos?'
            ]
          },
          format: { en: 'Document / Workshop', es: 'Documento / Taller' },
          stakeholders: { en: 'Design Team, PM', es: 'Equipo de Diseño, PM' }
        }
      ]
    },
    {
      id: 'design',
      title: { en: 'Design', es: 'Diseño' },
      description: { 
        en: 'Creating and iterating on solutions',
        es: 'Creando e iterando en soluciones'
      },
      duration: { en: 'Week 4-6', es: 'Semana 4-6' },
      icon: <Palette className="size-6" />,
      color: 'pink',
      deliverables: [
        {
          id: 'user-flows',
          name: { en: 'User Flows', es: 'Flujos de Usuario' },
          icon: <Boxes className="size-5" />,
          description: {
            en: 'Step-by-step flows for redesigned onboarding and first-week experience.',
            es: 'Flujos paso a paso para onboarding rediseñado y experiencia de primera semana.'
          },
          keyInsights: {
            en: [
              '🔄 Onboarding Flow: Splash → Choose Goal (3 options) → Quick Profile (2 fields) → First Quick Win (log 1 activity) → Done! (2 min total)',
              '🔄 First Workout Flow: Home → Start Workout (pre-populated template) → Track in real-time → Celebrate with animation → Invite Friend (optional)',
              '🔄 Progress Check Flow: Day 7 trigger → "Your First Week!" recap → Visual progress → Set Week 2 Goal → Share Achievement (optional)',
              '✅ Reduced steps: Onboarding 10→5 steps, First Workout 8→4 taps'
            ],
            es: [
              '🔄 Flujo Onboarding: Splash → Elegir Objetivo (3 opciones) → Perfil Rápido (2 campos) → Primera Victoria Rápida (registrar 1 actividad) → ¡Listo! (2 min total)',
              '🔄 Flujo Primer Entrenamiento: Inicio → Comenzar Entrenamiento (plantilla pre-poblada) → Rastrear en tiempo real → Celebrar con animación → Invitar Amigo (opcional)',
              '🔄 Flujo Revisión Progreso: Activador Día 7 → Resumen "¡Tu Primera Semana!" → Progreso visual → Establecer Objetivo Semana 2 → Compartir Logro (opcional)',
              '✅ Pasos reducidos: Onboarding 10→5 pasos, Primer Entrenamiento 8→4 toques'
            ]
          },
          format: { en: 'Figma / FigJam', es: 'Figma / FigJam' },
          stakeholders: { en: 'Design, Development', es: 'Diseño, Desarrollo' }
        },
        {
          id: 'wireframes',
          name: { en: 'Low-Fi Wireframes', es: 'Wireframes Baja Fidelidad' },
          icon: <Layout className="size-5" />,
          description: {
            en: 'Quick wireframes to validate structure and information hierarchy.',
            es: 'Wireframes rápidos para validar estructura y jerarquía de información.'
          },
          keyInsights: {
            en: [
              '📱 Screen 1: Simple goal selector (Weight Loss / Build Muscle / Stay Active) - No text fields',
              '📱 Screen 2: "Let\'s log your first win!" - Quick activity selector',
              '📱 Screen 3: Home dashboard - Today\'s goal + Quick Start + Weekly streak',
              '📱 Screen 4: Workout tracking - Large timer + Simple controls + Encouragement messages',
              '✅ Validated with 5 users in guerrilla testing - 100% completed onboarding vs. 40% previously'
            ],
            es: [
              '📱 Pantalla 1: Selector de objetivo simple (Perder Peso / Ganar Músculo / Mantenerse Activo) - Sin campos de texto',
              '📱 Pantalla 2: "¡Registremos tu primera victoria!" - Selector rápido de actividad',
              '📱 Pantalla 3: Dashboard Inicio - Objetivo de hoy + Inicio Rápido + Racha semanal',
              '📱 Pantalla 4: Rastreo de entrenamiento - Temporizador grande + Controles simples + Mensajes de aliento',
              '✅ Validado con 5 usuarios en prueba guerrilla - 100% completó onboarding vs. 40% previo'
            ]
          },
          format: { en: 'Figma / Sketch', es: 'Figma / Sketch' },
          stakeholders: { en: 'Design Team, PM', es: 'Equipo de Diseño, PM' }
        },
        {
          id: 'high-fi-prototype',
          name: { en: 'High-Fidelity Prototype', es: 'Prototipo Alta Fidelidad' },
          icon: <MousePointer className="size-5" />,
          description: {
            en: 'Interactive, pixel-perfect prototype for user testing and developer handoff.',
            es: 'Prototipo interactivo, pixel-perfect para pruebas de usuario y entrega a desarrolladores.'
          },
          keyInsights: {
            en: [
              '🎨 Design System: Used existing FitTrack colors/typography for consistency',
              '✨ Micro-interactions: Celebration animations on workout complete, progress bars filling, streak badges',
              '📱 Responsive: Mobile-first (primary), with tablet considerations',
              '🔗 Prototype: 15 screens linked with realistic transitions',
              '📊 Includes: New onboarding (5 screens) + Redesigned home + Workout tracking + Week 1 recap'
            ],
            es: [
              '🎨 Sistema de Diseño: Usó colores/tipografía existente de FitTrack para consistencia',
              '✨ Micro-interacciones: Animaciones de celebración al completar, barras de progreso llenándose, insignias de racha',
              '📱 Responsive: Mobile-first (primario), con consideraciones de tablet',
              '🔗 Prototipo: 15 pantallas enlazadas con transiciones realistas',
              '📊 Incluye: Nuevo onboarding (5 pantallas) + Inicio rediseñado + Rastreo de entrenamiento + Resumen Semana 1'
            ]
          },
          format: { en: 'Figma (Interactive)', es: 'Figma (Interactivo)' },
          stakeholders: { en: 'All stakeholders', es: 'Todos los stakeholders' }
        },
        {
          id: 'design-system',
          name: { en: 'Design Specs & Components', es: 'Especificaciones y Componentes' },
          icon: <Zap className="size-5" />,
          description: {
            en: 'Documented components, spacing, and interaction patterns for developers.',
            es: 'Componentes documentados, espaciado y patrones de interacción para desarrolladores.'
          },
          keyInsights: {
            en: [
              '📐 Spacing: 8px grid system',
              '🎨 Colors: Primary (Green #00D084), Secondary (Blue #4A90E2), Success (Yellow #FFD700)',
              '🔤 Typography: Headings (Poppins Bold), Body (Inter Regular)',
              '⚡ Components: Goal Card, Activity Button, Progress Ring, Celebration Modal, Streak Badge',
              '📋 Annotations: All interactions, states (default/pressed/disabled), animations documented'
            ],
            es: [
              '📐 Espaciado: Sistema de grilla de 8px',
              '🎨 Colores: Primario (Verde #00D084), Secundario (Azul #4A90E2), Éxito (Amarillo #FFD700)',
              '🔤 Tipografía: Encabezados (Poppins Bold), Cuerpo (Inter Regular)',
              '⚡ Componentes: Tarjeta de Objetivo, Botón de Actividad, Anillo de Progreso, Modal de Celebración, Insignia de Racha',
              '📋 Anotaciones: Todas las interacciones, estados (default/presionado/deshabilitado), animaciones documentadas'
            ]
          },
          format: { en: 'Figma Dev Mode / Zeplin', es: 'Figma Dev Mode / Zeplin' },
          stakeholders: { en: 'Developers', es: 'Desarrolladores' }
        }
      ]
    },
    {
      id: 'validation',
      title: { en: 'Validation', es: 'Validación' },
      description: { 
        en: 'Testing and measuring design effectiveness',
        es: 'Probando y midiendo efectividad del diseño'
      },
      duration: { en: 'Week 7-8', es: 'Semana 7-8' },
      icon: <CheckCircle2 className="size-6" />,
      color: 'green',
      deliverables: [
        {
          id: 'usability-test-plan',
          name: { en: 'Usability Test Plan', es: 'Plan de Prueba de Usabilidad' },
          icon: <FileText className="size-5" />,
          description: {
            en: 'Testing protocol to validate if redesign solves user drop-off problem.',
            es: 'Protocolo de prueba para validar si rediseño soluciona problema de abandono.'
          },
          keyInsights: {
            en: [
              '🎯 Goal: Validate if new users can complete onboarding + first workout in < 5 minutes',
              '👥 Participants: 8 users (similar to target personas, never used FitTrack)',
              '📝 Tasks: 1) Complete onboarding, 2) Log first workout, 3) Navigate to progress',
              '📊 Success Metrics: Task completion rate > 85%, Time on task < 5 min, SUS score > 70',
              '🗣️ Questions: "What motivated you?" "What confused you?" "Would you return tomorrow?"'
            ],
            es: [
              '🎯 Objetivo: Validar si nuevos usuarios pueden completar onboarding + primer entrenamiento en < 5 minutos',
              '👥 Participantes: 8 usuarios (similares a personas objetivo, nunca usaron FitTrack)',
              '📝 Tareas: 1) Completar onboarding, 2) Registrar primer entrenamiento, 3) Navegar a progreso',
              '📊 Métricas de Éxito: Tasa de completado > 85%, Tiempo en tarea < 5 min, Puntuación SUS > 70',
              '🗣️ Preguntas: "¿Qué te motivó?" "¿Qué te confundió?" "¿Volverías mañana?"'
            ]
          },
          format: { en: 'Google Doc / Notion', es: 'Google Doc / Notion' },
          stakeholders: { en: 'Research Team, PM', es: 'Equipo de Investigación, PM' }
        },
        {
          id: 'usability-report',
          name: { en: 'Usability Test Results', es: 'Resultados de Prueba de Usabilidad' },
          icon: <BarChart3 className="size-5" />,
          description: {
            en: 'Findings from 8 moderated usability tests with prototype.',
            es: 'Hallazgos de 8 pruebas de usabilidad moderadas con prototipo.'
          },
          keyInsights: {
            en: [
              '✅ Results: 100% task completion (vs. 40% baseline), Avg time 3.5 min (vs. 10 min), SUS score 78',
              '🟢 What Worked: "Quick win felt rewarding" (7/8), "Loved the celebration animation" (8/8)',
              '🟡 Minor Issues: 3 users confused by "Invite Friend" placement (moved to post-workout)',
              '🔴 Critical Issue: 1 user couldn\'t find progress recap (added prominent "Week 1 Progress" card)',
              '🚀 Recommendation: Launch with minor tweaks, A/B test "Invite Friend" timing'
            ],
            es: [
              '✅ Resultados: 100% completado de tareas (vs. 40% base), Tiempo prom 3.5 min (vs. 10 min), Puntuación SUS 78',
              '🟢 Qué Funcionó: "Victoria rápida se sintió gratificante" (7/8), "Amé la animación de celebración" (8/8)',
              '🟡 Problemas Menores: 3 usuarios confundidos por ubicación "Invitar Amigo" (movido a post-entrenamiento)',
              '🔴 Problema Crítico: 1 usuario no pudo encontrar resumen de progreso (agregada tarjeta prominente "Progreso Semana 1")',
              '🚀 Recomendación: Lanzar con ajustes menores, A/B test momento "Invitar Amigo"'
            ]
          },
          format: { en: 'Slides + Video Clips', es: 'Diapositivas + Clips de Video' },
          stakeholders: { en: 'Leadership, Product Team', es: 'Liderazgo, Equipo de Producto' }
        },
        {
          id: 'success-metrics',
          name: { en: 'Success Metrics Dashboard', es: 'Dashboard de Métricas de Éxito' },
          icon: <BarChart3 className="size-5" />,
          description: {
            en: 'Post-launch tracking plan to measure retention improvement.',
            es: 'Plan de seguimiento post-lanzamiento para medir mejora de retención.'
          },
          keyInsights: {
            en: [
              '📊 Primary Metric: 30-day retention (Baseline: 10%, Target: 50%)',
              '📊 Secondary Metrics: Onboarding completion (40% → 80%), Day 1 workout logged (40% → 75%), Week 1 retention (15% → 60%)',
              '📅 Timeline: Track for 4 weeks post-launch',
              '🔔 Alert: If Day 1 workout < 70%, investigate friction points immediately',
              '🎯 Success Criteria: Hit 45%+ 30-day retention to validate redesign worked'
            ],
            es: [
              '📊 Métrica Primaria: Retención a 30 días (Base: 10%, Objetivo: 50%)',
              '📊 Métricas Secundarias: Completado onboarding (40% → 80%), Entrenamiento Día 1 registrado (40% → 75%), Retención Semana 1 (15% → 60%)',
              '📅 Cronograma: Rastrear por 4 semanas post-lanzamiento',
              '🔔 Alerta: Si entrenamiento Día 1 < 70%, investigar puntos de fricción inmediatamente',
              '🎯 Criterio de Éxito: Lograr 45%+ retención a 30 días para validar rediseño funcionó'
            ]
          },
          format: { en: 'Amplitude / Mixpanel Dashboard', es: 'Dashboard Amplitude / Mixpanel' },
          stakeholders: { en: 'PM, Analytics, Leadership', es: 'PM, Analytics, Liderazgo' }
        }
      ]
    }
  ];

  const currentPhase = phases.find(p => p.id === selectedPhase)!;
  const currentDeliverable = currentPhase.deliverables.find(d => d.id === selectedDeliverable);

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: 'bg-blue-950/30',
        border: 'border-blue-500/30',
        text: 'text-blue-400',
        hover: 'hover:border-blue-500/50',
        selected: 'bg-blue-600 border-blue-500'
      },
      purple: {
        bg: 'bg-purple-950/30',
        border: 'border-purple-500/30',
        text: 'text-purple-400',
        hover: 'hover:border-purple-500/50',
        selected: 'bg-purple-600 border-purple-500'
      },
      pink: {
        bg: 'bg-pink-950/30',
        border: 'border-pink-500/30',
        text: 'text-pink-400',
        hover: 'hover:border-pink-500/50',
        selected: 'bg-pink-600 border-pink-500'
      },
      green: {
        bg: 'bg-green-950/30',
        border: 'border-green-500/30',
        text: 'text-green-400',
        hover: 'hover:border-green-500/50',
        selected: 'bg-green-600 border-green-500'
      }
    };
    return colors[color as keyof typeof colors];
  };

  const colorClasses = getColorClasses(currentPhase.color);

  return (
    <div className="w-full max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center space-y-4 mt-12">
        <h3 className="text-3xl font-bold text-white">
          {t({ en: 'Complete UX Process Case Study', es: 'Caso de Estudio Completo de Proceso UX' })}
        </h3>
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border-2 border-indigo-200 rounded-2xl p-6">
          <h4 className="text-xl font-bold text-gray-900 mb-2">{t(caseStudy.title)}</h4>
          <p className="text-gray-700 mb-4">{t(caseStudy.context)}</p>
          <div className="flex flex-wrap gap-4 justify-center text-sm">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-indigo-700">
                {t({ en: 'Timeline:', es: 'Cronograma:' })}
              </span>
              <span className="text-gray-600">{t(caseStudy.timeline)}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-indigo-700">
                {t({ en: 'Team:', es: 'Equipo:' })}
              </span>
              <span className="text-gray-600">{t(caseStudy.team)}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Phase Navigation */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {phases.map((phase) => {
          const isSelected = selectedPhase === phase.id;
          const phaseColors = getColorClasses(phase.color);
          
          return (
            <button
              key={phase.id}
              onClick={() => {
                setSelectedPhase(phase.id);
                setSelectedDeliverable(null);
              }}
              className={`p-4 rounded-xl border-2 transition-all ${
                isSelected 
                  ? `${phaseColors.selected} text-white shadow-lg scale-105`
                  : `bg-white ${phaseColors.border} ${phaseColors.hover}`
              }`}
            >
              <div className={`mb-2 ${isSelected ? 'text-white' : phaseColors.text}`}>
                {phase.icon}
              </div>
              <h5 className={`font-semibold text-sm mb-1 ${isSelected ? 'text-white' : 'text-gray-900'}`}>
                {t(phase.title)}
              </h5>
              <p className={`text-xs ${isSelected ? 'text-white/80' : 'text-gray-500'}`}>
                {t(phase.duration)}
              </p>
            </button>
          );
        })}
      </div>

      {/* Phase Description */}
      <motion.div
        key={selectedPhase}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className={`${colorClasses.bg} border-2 ${colorClasses.border} rounded-xl p-6`}
      >
        <div className="flex items-center gap-3 mb-3">
          <div className={colorClasses.text}>
            {currentPhase.icon}
          </div>
          <div>
            <h4 className="text-xl font-bold text-white">{t(currentPhase.title)}</h4>
            <p className="text-sm text-gray-300">{t(currentPhase.description)}</p>
          </div>
        </div>
      </motion.div>

      {/* Deliverables Grid */}
      <div className="grid md:grid-cols-3 gap-4">
        {currentPhase.deliverables.map((deliverable) => {
          const isSelected = selectedDeliverable === deliverable.id;
          
          return (
            <motion.button
              key={deliverable.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={() => setSelectedDeliverable(isSelected ? null : deliverable.id)}
              className={`p-5 rounded-xl border-2 text-left transition-all ${
                isSelected
                  ? `${colorClasses.selected} text-white shadow-lg`
                  : `bg-white border-gray-200 hover:border-gray-300 hover:shadow-md`
              }`}
            >
              <div className={`mb-3 ${isSelected ? 'text-white' : colorClasses.text}`}>
                {deliverable.icon}
              </div>
              <h5 className={`font-semibold mb-2 ${isSelected ? 'text-white' : 'text-gray-900'}`}>
                {t(deliverable.name)}
              </h5>
              <p className={`text-sm ${isSelected ? 'text-white/90' : 'text-gray-600'}`}>
                {t(deliverable.description)}
              </p>
              <div className="mt-3 flex items-center gap-2 text-xs">
                <ChevronRight className={`size-4 ${isSelected ? 'text-white' : colorClasses.text}`} />
                <span className={isSelected ? 'text-white' : colorClasses.text}>
                  {t({ en: 'View Details', es: 'Ver Detalles' })}
                </span>
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* Deliverable Detail */}
      <AnimatePresence>
        {currentDeliverable && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-xl"
          >
            <div className="flex items-start justify-between mb-6">
              <div>
                <h4 className="text-2xl font-bold text-gray-900 mb-2">
                  {t(currentDeliverable.name)}
                </h4>
                <p className="text-gray-600">{t(currentDeliverable.description)}</p>
              </div>
              <button
                onClick={() => setSelectedDeliverable(null)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <ChevronRight className="size-5 text-gray-400 rotate-90" />
              </button>
            </div>

            {/* Key Insights */}
            <div className="mb-6">
              <h5 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <Lightbulb className="size-5 text-yellow-600" />
                {t({ en: 'Key Content & Insights', es: 'Contenido Clave e Insights' })}
              </h5>
              <ul className="space-y-2 bg-gray-50 rounded-xl p-4">
                {t(currentDeliverable.keyInsights).map((insight, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-gray-700">
                    <span className={`mt-1 size-1.5 rounded-full ${colorClasses.selected} flex-shrink-0`}></span>
                    <span className="flex-1">{insight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Metadata */}
            <div className="grid md:grid-cols-2 gap-4 pt-6 border-t border-gray-200">
              <div>
                <h6 className="text-xs font-semibold text-gray-500 uppercase mb-2">
                  {t({ en: 'Format', es: 'Formato' })}
                </h6>
                <p className="text-sm text-gray-900 flex items-center gap-2">
                  <FileText className="size-4 text-gray-400" />
                  {t(currentDeliverable.format)}
                </p>
              </div>
              <div>
                <h6 className="text-xs font-semibold text-gray-500 uppercase mb-2">
                  {t({ en: 'Stakeholders', es: 'Stakeholders' })}
                </h6>
                <p className="text-sm text-gray-900 flex items-center gap-2">
                  <Users className="size-4 text-gray-400" />
                  {t(currentDeliverable.stakeholders)}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Summary Card */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl p-6">
        <h5 className="font-semibold text-green-900 mb-3 flex items-center gap-2">
          <CheckCircle2 className="size-5" />
          {t({ en: 'Project Outcome', es: 'Resultado del Proyecto' })}
        </h5>
        <div className="space-y-2 text-sm text-green-800">
          <p>
            <strong>{t({ en: '🎯 Result:', es: '🎯 Resultado:' })}</strong>{' '}
            {t({
              en: 'After launch, 30-day retention increased from 10% to 52% (exceeded 50% target by 4%). Onboarding completion jumped to 87%, and Day 1 workout logging reached 78%.',
              es: 'Después del lanzamiento, la retención a 30 días aumentó de 10% a 52% (superó el objetivo de 50% por 4%). La completación de onboarding saltó a 87%, y el registro de entrenamiento Día 1 alcanzó 78%.'
            })}
          </p>
          <p>
            <strong>{t({ en: '💡 Key Learnings:', es: '💡 Aprendizajes Clave:' })}</strong>{' '}
            {t({
              en: 'Quick wins in first session + social features + clear progress visualization = dramatic retention improvement. The complete UX process from discovery to validation was essential to identify the real problem and validate the solution.',
              es: 'Victorias rápidas en primera sesión + características sociales + visualización clara de progreso = mejora dramática de retención. El proceso UX completo desde descubrimiento hasta validación fue esencial para identificar el problema real y validar la solución.'
            })}
          </p>
        </div>
      </div>

      {/* Educational Note */}
      <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-lg">
        <p className="text-sm text-blue-900">
          <strong>{t({ en: 'Pro Tip:', es: 'Consejo Pro:' })}</strong>{' '}
          {t({
            en: 'Not every project needs all these deliverables. Adapt based on project size, timeline, and stakeholder needs. A small feature might only need wireframes + usability testing, while a major product launch requires the full process.',
            es: 'No todo proyecto necesita todos estos entregables. Adapta según el tamaño del proyecto, cronograma y necesidades de stakeholders. Una característica pequeña podría solo necesitar wireframes + prueba de usabilidad, mientras que un lanzamiento mayor requiere el proceso completo.'
          })}
        </p>
      </div>
    </div>
  );
};

export default UXDeliverablesCaseStudy;