import React, { useEffect } from 'react';
import { Topic } from '../../data/content';
import { useLanguage } from '../layout/LanguageContext';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { X, BookOpen, Lightbulb, ListChecks, ArrowRight, ExternalLink, Clock } from 'lucide-react';
import { Button } from '../ui/button';

interface LessonPreviewProps {
  topic: Topic | null;
  onClose: () => void;
}

export function LessonPreview({ topic, onClose }: LessonPreviewProps) {
  const { t } = useLanguage();
  const navigate = useNavigate();

  // Lock background scroll when modal is open
  useEffect(() => {
    if (topic) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = '';
      };
    }
  }, [topic]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && topic) {
        onClose();
      }
    };
    
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [topic, onClose]);

  // Focus trap
  useEffect(() => {
    if (!topic) return;

    const drawer = document.querySelector('[data-drawer="preview"]');
    if (!drawer) return;

    const focusableElements = drawer.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstFocusable = focusableElements[0] as HTMLElement;
    const lastFocusable = focusableElements[focusableElements.length - 1] as HTMLElement;

    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        if (document.activeElement === firstFocusable) {
          e.preventDefault();
          lastFocusable?.focus();
        }
      } else {
        if (document.activeElement === lastFocusable) {
          e.preventDefault();
          firstFocusable?.focus();
        }
      }
    };

    drawer.addEventListener('keydown', handleTab as EventListener);
    firstFocusable?.focus();

    return () => {
      drawer.removeEventListener('keydown', handleTab as EventListener);
    };
  }, [topic]);

  if (!topic) return null;

  const handleOpenFullLesson = () => {
    onClose();
    navigate(`/lesson/${topic.id}`);
    
    // Scroll to first unread section (overview for now)
    setTimeout(() => {
      const firstSection = document.getElementById('overview');
      if (firstSection) {
        firstSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <AnimatePresence>
      {/* Background overlay with blur */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
        aria-hidden="true"
      />

      {/* Right-side drawer */}
      <motion.div
        data-drawer="preview"
        role="dialog"
        aria-modal="true"
        aria-labelledby="preview-title"
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 30, stiffness: 300 }}
        className="fixed right-0 top-0 bottom-0 z-50 w-full sm:w-[540px] sm:max-w-[70vw] lg:max-w-[40vw] bg-zinc-950 border-l border-zinc-800 shadow-2xl flex flex-col"
      >
        {/* Header with close button */}
        <div className="flex items-center justify-between p-6 border-b border-zinc-800 shrink-0">
          <div className="flex items-center gap-3">
            <div className={`px-3 py-1 rounded-full text-xs font-medium ${
              topic.status === 'beginner' ? 'bg-green-500/10 text-green-400 border border-green-500/20' :
              topic.status === 'intermediate' ? 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20' :
              'bg-red-500/10 text-red-400 border border-red-500/20'
            }`}>
              {topic.status === 'beginner' ? t({ en: 'Beginner', es: 'Principiante' }) :
               topic.status === 'intermediate' ? t({ en: 'Intermediate', es: 'Intermedio' }) :
               t({ en: 'Advanced', es: 'Avanzado' })}
            </div>
            <div className="flex items-center gap-1.5 text-xs text-zinc-500">
              <Clock className="size-3.5" />
              <span>{topic.timeEstimate}</span>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label={t({ en: 'Close preview', es: 'Cerrar vista previa' })}
            className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-zinc-950"
          >
            <X className="size-5 text-zinc-400" />
          </button>
        </div>

        {/* Fade indicator at top */}
        <div className="absolute top-[73px] left-0 right-0 h-8 bg-gradient-to-b from-zinc-950 to-transparent pointer-events-none z-10" />
        
        {/* Fade indicator at bottom (above CTA) */}
        <div className="absolute bottom-[120px] left-0 right-0 h-12 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent pointer-events-none z-10" />

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-6 pt-8 pb-8 space-y-6">
            {/* Title */}
            <div>
              <h2 id="preview-title" className="text-2xl font-bold text-white mb-2">
                {t(topic.title)}
              </h2>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {t(topic.description)}
              </p>
            </div>

            {/* Definition (2-3 lines max) */}
            <div>
              <h3 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                <BookOpen className="size-4 text-indigo-400" />
                {t({ en: 'What is this?', es: '¿Qué es esto?' })}
              </h3>
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-4">
                <p className="text-zinc-300 text-sm leading-relaxed line-clamp-3">
                  {t(topic.content.definition)}
                </p>
              </div>
            </div>

            {/* Why it matters (2-3 lines max) */}
            <div>
              <h3 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                <Lightbulb className="size-4 text-yellow-400" />
                {t({ en: 'Why it matters', es: 'Por qué importa' })}
              </h3>
              <div className="bg-gradient-to-br from-yellow-950/20 to-orange-950/20 border border-yellow-500/20 rounded-xl p-4">
                <p className="text-zinc-300 text-sm leading-relaxed line-clamp-3">
                  {t(topic.content.why)}
                </p>
              </div>
            </div>

            {/* Key Principles (max 4 bullets) */}
            <div>
              <h3 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                <ListChecks className="size-4 text-blue-400" />
                {t({ en: 'Key Principles', es: 'Principios Clave' })}
              </h3>
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-4">
                <ul className="space-y-2.5">
                  {t(topic.content.keyPrinciples).slice(0, 4).map((principle: string, idx: number) => (
                    <li key={idx} className="flex gap-2.5 text-zinc-300 text-sm">
                      <span className="text-indigo-400 mt-0.5 text-base shrink-0">•</span>
                      <span className="leading-relaxed">{principle}</span>
                    </li>
                  ))}
                </ul>
                {t(topic.content.keyPrinciples).length > 4 && (
                  <p className="text-xs text-zinc-500 mt-3 italic">
                    +{t(topic.content.keyPrinciples).length - 4} {t({ en: 'more in full lesson', es: 'más en la lección completa' })}
                  </p>
                )}
              </div>
            </div>

            {/* Real Example (small preview) */}
            {topic.content.realExample && (
              <div>
                <h3 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                  <Lightbulb className="size-4 text-amber-400" />
                  {t({ en: 'Real Example', es: 'Ejemplo Real' })}
                </h3>
                <div className="bg-gradient-to-br from-amber-950/20 to-yellow-950/20 border border-amber-500/20 rounded-xl p-4">
                  <p className="font-semibold text-white text-sm mb-1">
                    {t(topic.content.realExample.title)}
                  </p>
                  {topic.content.realExample.company && (
                    <p className="text-xs text-amber-400 mb-2">
                      {topic.content.realExample.company}
                    </p>
                  )}
                  <p className="text-zinc-400 text-xs leading-relaxed line-clamp-3">
                    {t(topic.content.realExample.description)}
                  </p>
                </div>
              </div>
            )}

            {/* Spacer for sticky button */}
            <div className="h-24" />
          </div>
        </div>

        {/* Sticky CTA at bottom */}
        <div className="shrink-0 border-t border-zinc-800 bg-zinc-950 p-6 space-y-3">
          <Button
            onClick={handleOpenFullLesson}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white h-12 text-base font-semibold group transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-zinc-950"
          >
            {t({ en: 'Open Full Lesson', es: 'Abrir Lección Completa' })}
            <ArrowRight className="size-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          {topic.referenceLink && (
            <a
              href={topic.referenceLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2 text-sm text-zinc-400 hover:text-zinc-200 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-zinc-950 rounded"
            >
              <ExternalLink className="size-4" />
              {t({ en: 'View Reference', es: 'Ver Referencia' })}
            </a>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}