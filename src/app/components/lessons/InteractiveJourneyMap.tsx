import React, { useState, useRef } from 'react';
import { useLanguage } from '../layout/LanguageContext';
import { useNavigate, useLocation } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { X, Smile, Meh, Frown, ExternalLink, ArrowUp, ChevronLeft, ChevronRight } from 'lucide-react';

interface JourneyStage {
  id: string;
  title: { en: string; es: string };
  goal: { en: string; es: string };
  thoughts: { en: string; es: string };
  touchpoints: string[];
  painPoints: { en: string[]; es: string[] };
  opportunities: { en: string[]; es: string[] };
  emotion: number; // 1-5 scale
}

const airbnbJourneyData: JourneyStage[] = [
  {
    id: 'discover',
    title: { en: 'Discover', es: 'Descubrir' },
    goal: { en: 'Find a place to stay', es: 'Encontrar un lugar para quedarse' },
    thoughts: { en: 'I need accommodation for my trip', es: 'Necesito alojamiento para mi viaje' },
    touchpoints: ['Google Search', 'Social Media', 'Friend Recommendation'],
    painPoints: {
      en: ['Too many options', 'Uncertain about quality', 'Price comparison difficult'],
      es: ['Demasiadas opciones', 'Incierto sobre calidad', 'Comparación de precios difícil']
    },
    opportunities: {
      en: ['Smart filters', 'Curated collections', 'Price transparency'],
      es: ['Filtros inteligentes', 'Colecciones curadas', 'Transparencia de precios']
    },
    emotion: 3
  },
  {
    id: 'consider',
    title: { en: 'Consider', es: 'Considerar' },
    goal: { en: 'Evaluate options and choose', es: 'Evaluar opciones y elegir' },
    thoughts: { en: 'Which listing is best for my needs?', es: '¿Qué listado es mejor para mis necesidades?' },
    touchpoints: ['Airbnb Website', 'Reviews', 'Photos', 'Map View'],
    painPoints: {
      en: ['Hard to compare listings', 'Reviews overwhelming', 'Unclear availability'],
      es: ['Difícil comparar listados', 'Reviews abrumadores', 'Disponibilidad poco clara']
    },
    opportunities: {
      en: ['Comparison tool', 'Review summary AI', 'Real-time availability'],
      es: ['Herramienta de comparación', 'Resumen de reviews con IA', 'Disponibilidad en tiempo real']
    },
    emotion: 4
  },
  {
    id: 'onboard',
    title: { en: 'Onboard', es: 'Registrar' },
    goal: { en: 'Book and confirm reservation', es: 'Reservar y confirmar' },
    thoughts: { en: 'Will the host approve quickly?', es: '¿El anfitrión aprobará rápido?' },
    touchpoints: ['Booking Form', 'Payment Gateway', 'Confirmation Email'],
    painPoints: {
      en: ['Waiting for host approval creates anxiety', 'Payment holds confusing', 'Cancellation policy unclear'],
      es: ['Esperar aprobación crea ansiedad', 'Retención de pago confusa', 'Política de cancelación poco clara']
    },
    opportunities: {
      en: ['Instant booking', 'Clear payment timeline', 'Simple cancellation policy display'],
      es: ['Reserva instantánea', 'Línea de tiempo de pago clara', 'Mostrar política de cancelación simple']
    },
    emotion: 2
  },
  {
    id: 'use',
    title: { en: 'Use', es: 'Usar' },
    goal: { en: 'Check-in and enjoy stay', es: 'Hacer check-in y disfrutar' },
    thoughts: { en: 'How do I get in? What are the house rules?', es: '¿Cómo entro? ¿Cuáles son las reglas?' },
    touchpoints: ['Check-in Instructions', 'Host Communication', 'In-app Messaging'],
    painPoints: {
      en: ['Check-in instructions buried in messages', 'Host unresponsive', 'WiFi password hard to find'],
      es: ['Instrucciones de check-in enterradas en mensajes', 'Anfitrión no responde', 'Contraseña WiFi difícil de encontrar']
    },
    opportunities: {
      en: ['Dedicated check-in section', 'Auto-reminders for hosts', 'Essential info pinned'],
      es: ['Sección dedicada de check-in', 'Recordatorios auto para anfitriones', 'Info esencial fijada']
    },
    emotion: 5
  },
  {
    id: 'support',
    title: { en: 'Support', es: 'Soporte' },
    goal: { en: 'Get help when needed', es: 'Obtener ayuda cuando se necesita' },
    thoughts: { en: 'Something went wrong, I need help', es: 'Algo salió mal, necesito ayuda' },
    touchpoints: ['Support Center', 'Live Chat', 'Help Articles'],
    painPoints: {
      en: ['Hard to reach support', 'Generic responses', 'Long resolution time'],
      es: ['Difícil contactar soporte', 'Respuestas genéricas', 'Tiempo de resolución largo']
    },
    opportunities: {
      en: ['24/7 live support', 'Context-aware help', 'Priority for issues'],
      es: ['Soporte en vivo 24/7', 'Ayuda contextual', 'Prioridad para problemas']
    },
    emotion: 2
  }
];

export function InteractiveJourneyMap() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedStage, setSelectedStage] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const selectedStageData = airbnbJourneyData.find(s => s.id === selectedStage);

  // Check if we're currently on the customer-journey-map lesson page
  const isOnLessonPage = location.pathname === '/lesson/customer-journey-map';

  const handleOpenLesson = () => {
    setSelectedStage(null); // Close the panel
    
    if (isOnLessonPage) {
      // Scroll to "How to Apply" section if on the lesson page
      const howToApplySection = document.getElementById('how-to-apply');
      if (howToApplySection) {
        const headerOffset = 96;
        const elementPosition = howToApplySection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      } else {
        // Fallback: scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      // Navigate to the lesson page if not already there
      navigate('/lesson/customer-journey-map');
    }
  };

  const scrollStages = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300; // Scroll by 300px
      const newScrollLeft = direction === 'left' 
        ? scrollContainerRef.current.scrollLeft - scrollAmount
        : scrollContainerRef.current.scrollLeft + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  const getEmotionIcon = (emotion: number) => {
    if (emotion >= 4) return <Smile className="size-4 text-green-400" />;
    if (emotion === 3) return <Meh className="size-4 text-yellow-400" />;
    return <Frown className="size-4 text-red-400" />;
  };

  const getEmotionColor = (emotion: number) => {
    if (emotion >= 4) return 'bg-green-500';
    if (emotion === 3) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className="my-8 bg-zinc-950 border border-zinc-800 rounded-xl p-4 md:p-6 max-w-full overflow-x-hidden">
      <h3 className="text-xl font-bold text-white mb-4">
        {t({ en: 'Interactive Journey Map: Airbnb Guest Booking', es: 'Mapa de Viaje Interactivo: Reserva de Huésped Airbnb' })}
      </h3>
      <p className="text-sm text-zinc-400 mb-6">
        {t({ en: 'Click on any stage to explore user goals, pain points, and opportunities', es: 'Haz clic en cualquier etapa para explorar objetivos, puntos de dolor y oportunidades' })}
      </p>

      {/* Stages Timeline - Responsive */}
      <div className="mb-6">
        {/* Chevron Navigation for Mobile - Shows only on small screens */}
        <div className="relative lg:hidden">
          {/* Left Chevron */}
          <button
            onClick={() => scrollStages('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 size-10 bg-zinc-900/90 backdrop-blur-sm border border-zinc-700 rounded-full flex items-center justify-center hover:bg-zinc-800 transition-colors shadow-lg"
            aria-label="Scroll left"
          >
            <ChevronLeft className="size-5 text-zinc-400" />
          </button>
          
          {/* Right Chevron */}
          <button
            onClick={() => scrollStages('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 size-10 bg-zinc-900/90 backdrop-blur-sm border border-zinc-700 rounded-full flex items-center justify-center hover:bg-zinc-800 transition-colors shadow-lg"
            aria-label="Scroll right"
          >
            <ChevronRight className="size-5 text-zinc-400" />
          </button>
        </div>

        {/* Stages Container */}
        <div 
          ref={scrollContainerRef}
          className="flex lg:grid lg:grid-cols-5 gap-3 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 lg:pb-0 lg:overflow-visible"
        >
          {airbnbJourneyData.map((stage, index) => (
            <motion.button
              key={stage.id}
              onClick={() => setSelectedStage(stage.id)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedStage(stage.id);
                }
              }}
              tabIndex={0}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`relative flex-shrink-0 w-[280px] lg:w-full snap-center p-4 rounded-lg border-2 transition-all focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-black ${
                selectedStage === stage.id
                  ? 'border-indigo-500 bg-indigo-500/10'
                  : 'border-zinc-700 bg-zinc-900 hover:border-zinc-600'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium text-zinc-500">
                  {t({ en: `Stage ${index + 1}`, es: `Etapa ${index + 1}` })}
                </span>
                {getEmotionIcon(stage.emotion)}
              </div>
              <h4 className="font-semibold text-white text-sm mb-1">{t(stage.title)}</h4>
              <p className="text-xs text-zinc-400 line-clamp-2">{t(stage.goal)}</p>
              
              {/* Emotion indicator */}
              <div className="absolute bottom-2 left-2 right-2 h-1 bg-zinc-800 rounded-full overflow-hidden">
                <div 
                  className={`h-full ${getEmotionColor(stage.emotion)}`}
                  style={{ width: `${stage.emotion * 20}%` }}
                />
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Emotion Line Chart */}
      <div className="mb-6 p-4 bg-zinc-900/50 rounded-lg max-w-full overflow-hidden">
        <h4 className="text-sm font-semibold text-white mb-3">
          {t({ en: 'Emotional Journey', es: 'Viaje Emocional' })}
        </h4>
        <div className="relative h-24 w-full">
          <svg className="w-full h-full" viewBox="0 0 500 100" preserveAspectRatio="none">
            <polyline
              points={airbnbJourneyData.map((stage, i) => 
                `${(i / (airbnbJourneyData.length - 1)) * 500},${100 - (stage.emotion * 20)}`
              ).join(' ')}
              fill="none"
              stroke="url(#emotionGradient)"
              strokeWidth="3"
            />
            {/* Highlight selected stage */}
            {airbnbJourneyData.map((stage, i) => {
              const x = (i / (airbnbJourneyData.length - 1)) * 500;
              const y = 100 - (stage.emotion * 20);
              const isSelected = selectedStage === stage.id;
              return (
                <circle
                  key={stage.id}
                  cx={x}
                  cy={y}
                  r={isSelected ? "8" : "4"}
                  fill={isSelected ? "#6366f1" : "#3f3f46"}
                  stroke={isSelected ? "#a5b4fc" : "none"}
                  strokeWidth={isSelected ? "2" : "0"}
                  className="transition-all"
                />
              );
            })}
            <defs>
              <linearGradient id="emotionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ef4444" />
                <stop offset="50%" stopColor="#eab308" />
                <stop offset="100%" stopColor="#22c55e" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute left-0 top-0 text-xs text-zinc-500">High</div>
          <div className="absolute left-0 bottom-0 text-xs text-zinc-500">Low</div>
        </div>
      </div>

      {/* Detail Panel */}
      <AnimatePresence>
        {selectedStageData && (
          <>
            {isMobile ? (
              /* Mobile: Bottom Drawer */
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
                  onClick={() => setSelectedStage(null)}
                />
                <motion.div
                  initial={{ y: '100%' }}
                  animate={{ y: 0 }}
                  exit={{ y: '100%' }}
                  transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                  className="fixed left-0 right-0 bottom-0 z-50 max-h-[80vh] bg-zinc-950 border-t border-zinc-800 rounded-t-2xl overflow-hidden"
                >
                  <div className="p-6 overflow-y-auto max-h-[80vh]">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1">{t(selectedStageData.title)}</h3>
                        <p className="text-sm text-zinc-400">{t(selectedStageData.goal)}</p>
                      </div>
                      <button onClick={() => setSelectedStage(null)} className="text-zinc-500 hover:text-white">
                        <X className="size-6" />
                      </button>
                    </div>
                    <StageDetails stage={selectedStageData} onOpenLesson={handleOpenLesson} />
                  </div>
                </motion.div>
              </>
            ) : (
              /* Desktop: Right Panel */
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="p-6 bg-zinc-900 border border-zinc-800 rounded-lg"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{t(selectedStageData.title)}</h3>
                    <p className="text-sm text-zinc-400">{t(selectedStageData.goal)}</p>
                  </div>
                  <button onClick={() => setSelectedStage(null)} className="text-zinc-500 hover:text-white">
                    <X className="size-5" />
                  </button>
                </div>
                <StageDetails stage={selectedStageData} onOpenLesson={handleOpenLesson} />
              </motion.div>
            )}
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

function StageDetails({ stage, onOpenLesson }: { stage: JourneyStage; onOpenLesson: () => void }) {
  const { t } = useLanguage();
  const location = useLocation();
  const isOnLessonPage = location.pathname === '/lesson/customer-journey-map';

  return (
    <div className="space-y-6">
      {/* Thoughts */}
      <div>
        <h4 className="text-sm font-semibold text-white mb-2">
          {t({ en: 'User Thoughts', es: 'Pensamientos del Usuario' })}
        </h4>
        <p className="text-sm text-zinc-300 italic">"{t(stage.thoughts)}"</p>
      </div>

      {/* Touchpoints */}
      <div>
        <h4 className="text-sm font-semibold text-white mb-2">
          {t({ en: 'Touchpoints', es: 'Puntos de Contacto' })}
        </h4>
        <div className="flex flex-wrap gap-2">
          {stage.touchpoints.map((tp, idx) => (
            <span key={idx} className="px-3 py-1 bg-indigo-500/20 text-indigo-300 text-xs rounded-full border border-indigo-500/30">
              {tp}
            </span>
          ))}
        </div>
      </div>

      {/* Pain Points */}
      <div>
        <h4 className="text-sm font-semibold text-white mb-2">
          {t({ en: 'Pain Points', es: 'Puntos de Dolor' })}
        </h4>
        <ul className="space-y-2">
          {t(stage.painPoints).map((pain: string, idx: number) => (
            <li key={idx} className="flex items-start gap-2 text-sm text-red-300">
              <span className="text-red-400 mt-0.5">•</span>
              <span>{pain}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Opportunities */}
      <div>
        <h4 className="text-sm font-semibold text-white mb-2">
          {t({ en: 'Opportunities', es: 'Oportunidades' })}
        </h4>
        <ul className="space-y-2">
          {t(stage.opportunities).map((opp: string, idx: number) => (
            <li key={idx} className="flex items-start gap-2 text-sm text-green-300">
              <span className="text-green-400 mt-0.5">✓</span>
              <span>{opp}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Emotion Score */}
      <div className="pt-4 border-t border-zinc-800">
        <h4 className="text-sm font-semibold text-white mb-2">
          {t({ en: 'Emotional State', es: 'Estado Emocional' })}
        </h4>
        <div className="flex items-center gap-3">
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map(level => (
              <div
                key={level}
                className={`w-8 h-8 rounded ${
                  level <= stage.emotion ? 'bg-indigo-500' : 'bg-zinc-800'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-zinc-400">{stage.emotion}/5</span>
        </div>
      </div>

      {/* Open Full Lesson CTA */}
      <div className="pt-4 border-t border-zinc-800">
        <button
          onClick={onOpenLesson}
          className="w-full px-4 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
        >
          {isOnLessonPage ? (
            <>
              {t({ en: 'Go to How to Apply', es: 'Ir a Cómo Aplicar' })}
              <ArrowUp className="size-4" />
            </>
          ) : (
            <>
              {t({ en: 'Open Full Lesson', es: 'Abrir Lección Completa' })}
              <ExternalLink className="size-4" />
            </>
          )}
        </button>
      </div>
    </div>
  );
}