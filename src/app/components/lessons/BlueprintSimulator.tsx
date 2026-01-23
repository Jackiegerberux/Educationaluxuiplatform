import React, { useState } from 'react';
import { useLanguage } from '../layout/LanguageContext';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate, useLocation } from 'react-router'; // Changed from 'react-router-dom' to 'react-router'
import { Eye, EyeOff, TrendingUp, ExternalLink, ArrowUp, X } from 'lucide-react';

interface BlueprintCell {
  stage: string;
  layer: string;
  description: { en: string; es: string };
  painPoints: { en: string[]; es: string[] };
  opportunities: { en: string[]; es: string[] };
  metrics: { en: string[]; es: string[] };
}

const stages = ['Discover', 'Apply', 'Verify', 'Wait', 'Onboard'];
const layers = ['User Actions', 'Frontstage', 'Backstage', 'Support', 'Evidence'];

const blueprintData: BlueprintCell[] = [
  // Discover stage
  { stage: 'Discover', layer: 'User Actions', description: { en: 'Searches for service provider', es: 'Busca proveedor de servicio' }, painPoints: { en: ['Too many options'], es: ['Demasiadas opciones'] }, opportunities: { en: ['Smart recommendations'], es: ['Recomendaciones inteligentes'] }, metrics: { en: ['Time to first click', 'Search abandonment rate'], es: ['Tiempo al primer clic', 'Tasa de abandono de búsqueda'] } },
  { stage: 'Discover', layer: 'Frontstage', description: { en: 'Website loads, shows options', es: 'Web carga, muestra opciones' }, painPoints: { en: ['Slow load time'], es: ['Carga lenta'] }, opportunities: { en: ['Optimize speed'], es: ['Optimizar velocidad'] }, metrics: { en: ['Page load time', 'Bounce rate'], es: ['Tiempo de carga', 'Tasa de rebote'] } },
  { stage: 'Discover', layer: 'Backstage', description: { en: 'Algorithm filters results', es: 'Algoritmo filtra resultados' }, painPoints: { en: ['Poor relevance'], es: ['Poca relevancia'] }, opportunities: { en: ['ML personalization'], es: ['Personalización ML'] }, metrics: { en: ['Relevance score', 'Click-through rate'], es: ['Score de relevancia', 'Tasa de clics'] } },
  { stage: 'Discover', layer: 'Support', description: { en: 'Search API, CDN', es: 'API de búsqueda, CDN' }, painPoints: { en: ['API latency'], es: ['Latencia API'] }, opportunities: { en: ['Caching layer'], es: ['Capa de caché'] }, metrics: { en: ['API response time', 'Cache hit rate'], es: ['Tiempo de respuesta API', 'Tasa de acierto de caché'] } },
  { stage: 'Discover', layer: 'Evidence', description: { en: 'Search results page', es: 'Página de resultados' }, painPoints: { en: ['Cluttered UI'], es: ['UI saturada'] }, opportunities: { en: ['Clean layout'], es: ['Layout limpio'] }, metrics: { en: ['Visual hierarchy score', 'User satisfaction'], es: ['Score de jerarquía visual', 'Satisfacción de usuario'] } },
  
  // Apply stage  
  { stage: 'Apply', layer: 'User Actions', description: { en: 'Fills application form', es: 'Llena formulario' }, painPoints: { en: ['Too many fields'], es: ['Demasiados campos'] }, opportunities: { en: ['Smart autofill'], es: ['Autofill inteligente'] }, metrics: { en: ['Form completion rate', 'Time to complete'], es: ['Tasa de completación', 'Tiempo de completación'] } },
  { stage: 'Apply', layer: 'Frontstage', description: { en: 'Form validation shows errors', es: 'Validación muestra errores' }, painPoints: { en: ['Confusing error messages'], es: ['Mensajes confusos'] }, opportunities: { en: ['Clear guidance'], es: ['Guía clara'] }, metrics: { en: ['Error rate', 'Retry attempts'], es: ['Tasa de error', 'Intentos de reintento'] } },
  { stage: 'Apply', layer: 'Backstage', description: { en: 'Data saved to DB', es: 'Datos guardados en BD' }, painPoints: { en: ['Save failures'], es: ['Fallos al guardar'] }, opportunities: { en: ['Auto-save drafts'], es: ['Auto-guardar borradores'] }, metrics: { en: ['Save success rate', 'Data loss incidents'], es: ['Tasa de éxito de guardado', 'Incidentes de pérdida de datos'] } },
  { stage: 'Apply', layer: 'Support', description: { en: 'Form API, Database', es: 'API de formulario, Base de datos' }, painPoints: { en: ['DB timeouts'], es: ['Timeouts de BD'] }, opportunities: { en: ['Queue system'], es: ['Sistema de colas'] }, metrics: { en: ['DB response time', 'Timeout rate'], es: ['Tiempo de respuesta BD', 'Tasa de timeout'] } },
  { stage: 'Apply', layer: 'Evidence', description: { en: 'Application confirmation', es: 'Confirmación de aplicación' }, painPoints: { en: ['Unclear next steps'], es: ['Próximos pasos poco claros'] }, opportunities: { en: ['Timeline display'], es: ['Mostrar línea de tiempo'] }, metrics: { en: ['User clarity score', 'Support ticket rate'], es: ['Score de claridad', 'Tasa de tickets de soporte'] } },

  // Verify stage
  { stage: 'Verify', layer: 'User Actions', description: { en: 'Uploads documents', es: 'Sube documentos' }, painPoints: { en: ['Unclear requirements'], es: ['Requisitos poco claros'] }, opportunities: { en: ['Document checklist'], es: ['Checklist de documentos'] }, metrics: { en: ['Upload success rate', 'Re-upload rate'], es: ['Tasa de éxito de subida', 'Tasa de re-subida'] } },
  { stage: 'Verify', layer: 'Frontstage', description: { en: 'Document upload UI', es: 'UI de subida de docs' }, painPoints: { en: ['Large file errors'], es: ['Errores archivos grandes'] }, opportunities: { en: ['Compression'], es: ['Compresión'] }, metrics: { en: ['Upload error rate', 'Average file size'], es: ['Tasa de error de subida', 'Tamaño promedio de archivo'] } },
  { stage: 'Verify', layer: 'Backstage', description: { en: 'OCR scans documents', es: 'OCR escanea docs' }, painPoints: { en: ['OCR fails'], es: ['OCR falla'] }, opportunities: { en: ['Manual review queue'], es: ['Cola de revisión manual'] }, metrics: { en: ['OCR accuracy', 'Manual review rate'], es: ['Precisión OCR', 'Tasa de revisión manual'] } },
  { stage: 'Verify', layer: 'Support', description: { en: 'Storage, OCR API', es: 'Almacenamiento, API OCR' }, painPoints: { en: ['Storage costs'], es: ['Costos de almacenamiento'] }, opportunities: { en: ['Archival strategy'], es: ['Estrategia de archivo'] }, metrics: { en: ['Storage cost per user', 'OCR API latency'], es: ['Costo de almacenamiento por usuario', 'Latencia API OCR'] } },
  { stage: 'Verify', layer: 'Evidence', description: { en: 'Upload confirmation', es: 'Confirmación de subida' }, painPoints: { en: ['No status updates'], es: ['Sin actualizaciones'] }, opportunities: { en: ['Real-time status'], es: ['Estado en tiempo real'] }, metrics: { en: ['Status visibility score', 'User anxiety level'], es: ['Score de visibilidad de estado', 'Nivel de ansiedad de usuario'] } },

  // Wait stage
  { stage: 'Wait', layer: 'User Actions', description: { en: 'Checks application status', es: 'Revisa estado' }, painPoints: { en: ['No visibility'], es: ['Sin visibilidad'] }, opportunities: { en: ['Status dashboard'], es: ['Dashboard de estado'] }, metrics: { en: ['Status check frequency', 'User engagement'], es: ['Frecuencia de revisión de estado', 'Engagement de usuario'] } },
  { stage: 'Wait', layer: 'Frontstage', description: { en: 'Status page shows progress', es: 'Página muestra progreso' }, painPoints: { en: ['Generic messages'], es: ['Mensajes genéricos'] }, opportunities: { en: ['Specific timelines'], es: ['Líneas de tiempo específicas'] }, metrics: { en: ['Message clarity score', 'User satisfaction'], es: ['Score de claridad de mensaje', 'Satisfacción de usuario'] } },
  { stage: 'Wait', layer: 'Backstage', description: { en: 'Review team processes', es: 'Equipo procesa revisión' }, painPoints: { en: ['Manual review slow'], es: ['Revisión manual lenta'] }, opportunities: { en: ['Automation rules'], es: ['Reglas de automatización'] }, metrics: { en: ['Average processing time', 'Automation rate'], es: ['Tiempo promedio de procesamiento', 'Tasa de automatización'] } },
  { stage: 'Wait', layer: 'Support', description: { en: 'CRM, Notification system', es: 'CRM, Sistema de notificaciones' }, painPoints: { en: ['Email delays'], es: ['Retrasos de email'] }, opportunities: { en: ['Push notifications'], es: ['Notificaciones push'] }, metrics: { en: ['Notification delivery time', 'Open rate'], es: ['Tiempo de entrega de notificación', 'Tasa de apertura'] } },
  { stage: 'Wait', layer: 'Evidence', description: { en: 'Status emails', es: 'Emails de estado' }, painPoints: { en: ['Emails go to spam'], es: ['Emails van a spam'] }, opportunities: { en: ['In-app notifications'], es: ['Notificaciones en app'] }, metrics: { en: ['Email deliverability', 'Spam rate'], es: ['Entregabilidad de email', 'Tasa de spam'] } },

  // Onboard stage
  { stage: 'Onboard', layer: 'User Actions', description: { en: 'Completes onboarding', es: 'Completa onboarding' }, painPoints: { en: ['Too many steps'], es: ['Demasiados pasos'] }, opportunities: { en: ['Progressive disclosure'], es: ['Revelación progresiva'] }, metrics: { en: ['Onboarding completion rate', 'Time to activation'], es: ['Tasa de completación de onboarding', 'Tiempo de activación'] } },
  { stage: 'Onboard', layer: 'Frontstage', description: { en: 'Onboarding wizard', es: 'Wizard de onboarding' }, painPoints: { en: ['Confusing flow'], es: ['Flujo confuso'] }, opportunities: { en: ['Guided tour'], es: ['Tour guiado'] }, metrics: { en: ['Step completion rate', 'Exit rate per step'], es: ['Tasa de completación por paso', 'Tasa de salida por paso'] } },
  { stage: 'Onboard', layer: 'Backstage', description: { en: 'Account provisioning', es: 'Aprovisionamiento de cuenta' }, painPoints: { en: ['Provisioning failures'], es: ['Fallos de aprovisionamiento'] }, opportunities: { en: ['Automated rollback'], es: ['Rollback automatizado'] }, metrics: { en: ['Provision success rate', 'Error recovery time'], es: ['Tasa de éxito de aprovisionamiento', 'Tiempo de recuperación de error'] } },
  { stage: 'Onboard', layer: 'Support', description: { en: 'Identity service, Auth', es: 'Servicio de identidad, Auth' }, painPoints: { en: ['Auth errors'], es: ['Errores de auth'] }, opportunities: { en: ['Better error handling'], es: ['Mejor manejo de errores'] }, metrics: { en: ['Auth success rate', 'Error rate'], es: ['Tasa de éxito de auth', 'Tasa de error'] } },
  { stage: 'Onboard', layer: 'Evidence', description: { en: 'Welcome email', es: 'Email de bienvenida' }, painPoints: { en: ['Generic content'], es: ['Contenido genérico'] }, opportunities: { en: ['Personalized welcome'], es: ['Bienvenida personalizada'] }, metrics: { en: ['Email open rate', 'Personalization score'], es: ['Tasa de apertura de email', 'Score de personalización'] } }
];

export function BlueprintSimulator() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedCell, setSelectedCell] = useState<BlueprintCell | null>(null);
  const [showPainPoints, setShowPainPoints] = useState(true);
  const [showOpportunities, setShowOpportunities] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const getCell = (stage: string, layer: string) => 
    blueprintData.find(c => c.stage === stage && c.layer === layer);

  // Check if we're on the lesson page
  const isOnLessonPage = location.pathname === '/lesson/service-blueprint';

  const handleOpenLesson = () => {
    setSelectedCell(null); // Close the panel
    
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
      navigate('/lesson/service-blueprint');
    }
  };

  return (
    <div className="my-8 bg-zinc-950 border border-zinc-800 rounded-xl p-4 md:p-6 max-w-full overflow-x-hidden">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-4">
        <div>
          <h3 className="text-xl font-bold text-white mb-2">
            {t({ en: 'Service Blueprint Simulator: Onboarding Flow', es: 'Simulador de Service Blueprint: Flujo de Onboarding' })}
          </h3>
          <p className="text-sm text-zinc-400">
            {t({ en: 'Click cells to explore backend processes. Toggle views with buttons.', es: 'Haz clic en celdas para explorar procesos backend. Alterna vistas con botones.' })}
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setShowPainPoints(!showPainPoints)}
            className={`px-3 py-1.5 rounded text-xs font-medium border transition-colors ${
              showPainPoints ? 'bg-red-500/20 text-red-400 border-red-500/30' : 'bg-zinc-800 text-zinc-500 border-zinc-700'
            }`}
          >
            {showPainPoints ? <Eye className="size-3 inline mr-1" /> : <EyeOff className="size-3 inline mr-1" />}
            {t({ en: 'Pain Points', es: 'Dolor' })}
          </button>
          <button
            onClick={() => setShowOpportunities(!showOpportunities)}
            className={`px-3 py-1.5 rounded text-xs font-medium border transition-colors ${
              showOpportunities ? 'bg-green-500/20 text-green-400 border-green-500/30' : 'bg-zinc-800 text-zinc-500 border-zinc-700'
            }`}
          >
            {showOpportunities ? <Eye className="size-3 inline mr-1" /> : <EyeOff className="size-3 inline mr-1" />}
            {t({ en: 'Opportunities', es: 'Oportunidades' })}
          </button>
        </div>
      </div>

      {/* Blueprint Table */}
      <div className="overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-4 md:mx-0">
        <div className="inline-block min-w-full align-middle px-4 md:px-0">
          <table className="w-full border-collapse min-w-[640px]">
            <thead>
              <tr>
                <th className="border border-zinc-700 bg-zinc-900 p-2 text-left text-xs font-semibold text-white sticky left-0 z-10">
                  {t({ en: 'Layer', es: 'Capa' })}
                </th>
                {stages.map(stage => (
                  <th key={stage} className="border border-zinc-700 bg-zinc-900 p-2 text-center text-xs font-semibold text-white min-w-[120px]">
                    {stage}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {layers.map((layer, layerIndex) => (
                <tr key={layer}>
                  <td className="border border-zinc-700 bg-zinc-900 p-2 text-xs font-medium text-white sticky left-0 z-10">
                    {t({ en: layer, es: layer })}
                  </td>
                  {stages.map(stage => {
                    const cell = getCell(stage, layer);
                    const hasPain = cell && cell.painPoints.en.length > 0 && showPainPoints;
                    const hasOpp = cell && cell.opportunities.en.length > 0 && showOpportunities;
                    
                    return (
                      <td 
                        key={`${stage}-${layer}`}
                        className={`border border-zinc-700 p-2 cursor-pointer transition-colors relative ${
                          selectedCell === cell ? 'bg-indigo-500/20 border-indigo-500' : 'bg-zinc-950 hover:bg-zinc-900'
                        }`}
                        onClick={() => setSelectedCell(cell || null)}
                      >
                        <div className="text-xs text-zinc-300 leading-tight">
                          {cell ? t(cell.description) : '-'}
                        </div>
                        {(hasPain || hasOpp) && (
                          <div className="flex gap-1 mt-1">
                            {hasPain && <div className="w-2 h-2 rounded-full bg-red-400" />}
                            {hasOpp && <div className="w-2 h-2 rounded-full bg-green-400" />}
                          </div>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Detail Panel */}
      <AnimatePresence>
        {selectedCell && (
          <>
            {isMobile ? (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
                  onClick={() => setSelectedCell(null)}
                />
                <motion.div
                  initial={{ y: '100%' }}
                  animate={{ y: 0 }}
                  exit={{ y: '100%' }}
                  transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                  className="fixed left-0 right-0 bottom-0 z-50 max-h-[80vh] bg-zinc-950 border-t border-zinc-800 rounded-t-2xl overflow-y-auto"
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white">{selectedCell.stage} - {selectedCell.layer}</h3>
                        <p className="text-sm text-zinc-400">{t(selectedCell.description)}</p>
                      </div>
                      <button onClick={() => setSelectedCell(null)}>
                        <X className="size-6 text-zinc-500" />
                      </button>
                    </div>
                    <CellDetails cell={selectedCell} showPain={showPainPoints} showOpp={showOpportunities} onOpenLesson={handleOpenLesson} />
                  </div>
                </motion.div>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="mt-6 p-6 bg-zinc-900 border border-zinc-800 rounded-lg"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-white">{selectedCell.stage} - {selectedCell.layer}</h3>
                    <p className="text-sm text-zinc-400">{t(selectedCell.description)}</p>
                  </div>
                  <button onClick={() => setSelectedCell(null)}>
                    <X className="size-5 text-zinc-500" />
                  </button>
                </div>
                <CellDetails cell={selectedCell} showPain={showPainPoints} showOpp={showOpportunities} onOpenLesson={handleOpenLesson} />
              </motion.div>
            )}
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

function CellDetails({ cell, showPain, showOpp, onOpenLesson }: { cell: BlueprintCell; showPain: boolean; showOpp: boolean; onOpenLesson: () => void }) {
  const { t } = useLanguage();
  const location = useLocation();
  const isOnLessonPage = location.pathname === '/lesson/service-blueprint';

  return (
    <div className="space-y-4">
      {/* What happens here */}
      <div>
        <h4 className="text-sm font-semibold text-white mb-2">
          {t({ en: 'What Happens Here', es: 'Qué Sucede Aquí' })}
        </h4>
        <p className="text-sm text-zinc-300">{t(cell.description)}</p>
      </div>

      {showPain && cell.painPoints.en.length > 0 && (
        <div className={`p-3 rounded-lg ${showPain ? 'bg-red-950/20 border border-red-500/30' : ''}`}>
          <h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            {t({ en: 'Pain Points', es: 'Puntos de Dolor' })}
          </h4>
          <ul className="space-y-1">
            {t(cell.painPoints).map((pain: string, idx: number) => (
              <li key={idx} className="text-sm text-red-300 flex items-start gap-2">
                <span className="text-red-400 mt-0.5">•</span>
                <span>{pain}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {showOpp && cell.opportunities.en.length > 0 && (
        <div className={`p-3 rounded-lg ${showOpp ? 'bg-green-950/20 border border-green-500/30' : ''}`}>
          <h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-400" />
            {t({ en: 'Opportunities', es: 'Oportunidades' })}
          </h4>
          <ul className="space-y-1">
            {t(cell.opportunities).map((opp: string, idx: number) => (
              <li key={idx} className="text-sm text-green-300 flex items-start gap-2">
                <span className="text-green-400 mt-0.5">✓</span>
                <span>{opp}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Metrics/KPIs */}
      {cell.metrics && cell.metrics.en.length > 0 && (
        <div className="p-3 rounded-lg bg-blue-950/20 border border-blue-500/30">
          <h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
            <TrendingUp className="size-3 text-blue-400" />
            {t({ en: 'Key Metrics', es: 'Métricas Clave' })}
          </h4>
          <ul className="space-y-1">
            {t(cell.metrics).map((metric: string, idx: number) => (
              <li key={idx} className="text-sm text-blue-300 flex items-start gap-2">
                <span className="text-blue-400 mt-0.5">→</span>
                <span>{metric}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

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