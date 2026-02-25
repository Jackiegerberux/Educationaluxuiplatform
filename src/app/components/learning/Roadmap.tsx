import React, { useState } from 'react';
import { useLanguage } from '../layout/LanguageContext';
import { tracks, Topic } from '../../data/content';
import type { LessonTag } from '../../data/types';
import { evaluateLessonQuality, getBadgeStyles } from '../../data/lesson-quality';
import { motion } from 'motion/react';
import { Clock, ChevronRight, ChevronDown, Award } from 'lucide-react';
import { Badge } from '../ui/badge';
import { Card, CardContent } from '../ui/card';
import { LessonPreview } from './LessonPreview';

const DEFAULT_VISIBLE = 3;

// Tag color mapping — subtle, consistent with the dark theme
const tagStyles: Record<LessonTag, { bg: string; text: string; border: string }> = {
  'Core UX':  { bg: 'bg-indigo-500/10',  text: 'text-indigo-300',  border: 'border-indigo-500/30' },
  'Product':  { bg: 'bg-amber-500/10',   text: 'text-amber-300',   border: 'border-amber-500/30' },
  'UI':       { bg: 'bg-sky-500/10',      text: 'text-sky-300',     border: 'border-sky-500/30' },
  'Tech':     { bg: 'bg-emerald-500/10',  text: 'text-emerald-300', border: 'border-emerald-500/30' },
  'Strategy': { bg: 'bg-violet-500/10',   text: 'text-violet-300',  border: 'border-violet-500/30' },
  'Metrics':  { bg: 'bg-rose-500/10',     text: 'text-rose-300',    border: 'border-rose-500/30' },
};

export function Roadmap() {
  const { t } = useLanguage();
  const [previewTopic, setPreviewTopic] = useState<Topic | null>(null);
  const [expandedPhases, setExpandedPhases] = useState<Record<string, boolean>>({});

  // Phase colors for 9-phase structure
  const phaseColors = [
    { bg: 'bg-purple-500/20', text: 'text-purple-400', border: 'border-purple-500', dot: 'border-purple-500 group-hover:bg-purple-500', expandBg: 'bg-purple-500/10 hover:bg-purple-500/20', expandBorder: 'border-purple-500/30', line: 'border-purple-500/40' },
    { bg: 'bg-blue-500/20', text: 'text-blue-400', border: 'border-blue-500', dot: 'border-blue-500 group-hover:bg-blue-500', expandBg: 'bg-blue-500/10 hover:bg-blue-500/20', expandBorder: 'border-blue-500/30', line: 'border-blue-500/40' },
    { bg: 'bg-green-500/20', text: 'text-green-400', border: 'border-green-500', dot: 'border-green-500 group-hover:bg-green-500', expandBg: 'bg-green-500/10 hover:bg-green-500/20', expandBorder: 'border-green-500/30', line: 'border-green-500/40' },
    { bg: 'bg-cyan-500/20', text: 'text-cyan-400', border: 'border-cyan-500', dot: 'border-cyan-500 group-hover:bg-cyan-500', expandBg: 'bg-cyan-500/10 hover:bg-cyan-500/20', expandBorder: 'border-cyan-500/30', line: 'border-cyan-500/40' },
    { bg: 'bg-orange-500/20', text: 'text-orange-400', border: 'border-orange-500', dot: 'border-orange-500 group-hover:bg-orange-500', expandBg: 'bg-orange-500/10 hover:bg-orange-500/20', expandBorder: 'border-orange-500/30', line: 'border-orange-500/40' },
    { bg: 'bg-pink-500/20', text: 'text-pink-400', border: 'border-pink-500', dot: 'border-pink-500 group-hover:bg-pink-500', expandBg: 'bg-pink-500/10 hover:bg-pink-500/20', expandBorder: 'border-pink-500/30', line: 'border-pink-500/40' },
    { bg: 'bg-red-500/20', text: 'text-red-400', border: 'border-red-500', dot: 'border-red-500 group-hover:bg-red-500', expandBg: 'bg-red-500/10 hover:bg-red-500/20', expandBorder: 'border-red-500/30', line: 'border-red-500/40' },
    { bg: 'bg-teal-500/20', text: 'text-teal-400', border: 'border-teal-500', dot: 'border-teal-500 group-hover:bg-teal-500', expandBg: 'bg-teal-500/10 hover:bg-teal-500/20', expandBorder: 'border-teal-500/30', line: 'border-teal-500/40' },
    { bg: 'bg-indigo-500/20', text: 'text-indigo-400', border: 'border-indigo-500', dot: 'border-indigo-500 group-hover:bg-indigo-500', expandBg: 'bg-indigo-500/10 hover:bg-indigo-500/20', expandBorder: 'border-indigo-500/30', line: 'border-indigo-500/40' },
  ];

  const togglePhase = (trackId: string) => {
    setExpandedPhases(prev => ({ ...prev, [trackId]: !prev[trackId] }));
  };

  const handleTopicClick = (topic: Topic) => {
    setPreviewTopic(topic);
  };

  const handleClosePreview = () => {
    setPreviewTopic(null);
  };

  // Calculate running lesson number across all phases
  let globalIndex = 0;
  const phaseStartIndices: number[] = tracks.map(track => {
    const start = globalIndex;
    globalIndex += track.topics.length;
    return start;
  });

  return (
    <>
      <div className="py-20 bg-black min-h-screen" id="preview">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-16">
            <Badge variant="outline" className="mb-4 border-indigo-500/50 text-indigo-400">
              {t({ en: 'Curriculum', es: 'Plan de Estudios' })}
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              {t({ en: 'Learning Paths', es: 'Rutas de Aprendizaje' })}
            </h2>
            <p className="text-zinc-400 max-w-2xl mb-8">
              {t({
                en: '9 phases following a real UX project workflow — from foundations to career growth. 47 lessons ordered by complexity.',
                es: '9 fases siguiendo un flujo real de proyecto UX — desde fundamentos hasta crecimiento profesional. 47 lecciones ordenadas por complejidad.'
              })}
            </p>
            {/* Tag legend */}
            <div className="flex flex-wrap justify-center gap-2">
              {(Object.keys(tagStyles) as LessonTag[]).map(tag => {
                const s = tagStyles[tag];
                return (
                  <span key={tag} className={`px-2.5 py-1 rounded-full text-xs font-medium border ${s.bg} ${s.text} ${s.border}`}>
                    {tag}
                  </span>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {tracks.map((track, trackIndex) => {
              const colors = phaseColors[trackIndex % phaseColors.length];
              const isExpanded = expandedPhases[track.id] || false;
              const totalTopics = track.topics.length;
              const hasMore = totalTopics > DEFAULT_VISIBLE;
              const visibleTopics = isExpanded ? track.topics : track.topics.slice(0, DEFAULT_VISIBLE);
              const hiddenCount = totalTopics - DEFAULT_VISIBLE;
              const phaseStart = phaseStartIndices[trackIndex];

              return (
              <motion.div
                key={track.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: trackIndex * 0.08 }}
                className="space-y-6"
              >
                {/* Phase header */}
                <div className="flex items-start gap-4 mb-8">
                  <div className={`size-12 rounded-xl flex items-center justify-center shrink-0 ${colors.bg} ${colors.text} font-bold text-lg`}>
                    {trackIndex + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="text-xl md:text-2xl font-bold text-white">{t(track.title)}</h3>
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${colors.bg} ${colors.text}`}>
                        {totalTopics} {t({ en: 'lessons', es: 'lecciones' })}
                      </span>
                    </div>
                    <p className="text-zinc-500 text-sm mt-1">{t(track.description)}</p>
                  </div>
                </div>

                {/* Timeline */}
                <div className={`relative border-l ${colors.line} ml-6 space-y-6 pb-4`}>
                  {visibleTopics.map((topic, index) => {
                    const lessonNumber = phaseStart + index + 1;
                    const tag = topic.tag;
                    const tStyle = tag ? tagStyles[tag] : null;

                    return (
                    <motion.div
                      key={topic.id}
                      className="relative pl-8 group"
                      initial={index >= DEFAULT_VISIBLE ? { opacity: 0, y: 12 } : false}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index >= DEFAULT_VISIBLE ? (index - DEFAULT_VISIBLE) * 0.06 : 0, duration: 0.3 }}
                    >
                      {/* Timeline dot */}
                      <div className={`absolute left-[-5px] top-1.5 size-2.5 rounded-full border-2 transition-colors bg-black ${colors.dot}`} />

                      <Card
                        className="transition-all overflow-hidden group/card bg-zinc-900/50 border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900 cursor-pointer"
                        onClick={() => handleTopicClick(topic)}
                      >
                        <CardContent className="p-5">
                          {/* Top row: order number + badges */}
                          <div className="flex justify-between items-start mb-3">
                            <div className="flex items-center gap-2 flex-wrap">
                              {/* Lesson order number */}
                              <span className={`text-[10px] font-bold uppercase tracking-widest ${colors.text} opacity-60`}>
                                #{String(lessonNumber).padStart(2, '0')}
                              </span>

                              {/* Level badge */}
                              <Badge
                                variant="secondary"
                                className={`text-[10px] px-1.5 py-0 ${
                                  topic.status === 'beginner' ? 'bg-green-500/10 text-green-400' :
                                  topic.status === 'intermediate' ? 'bg-blue-500/10 text-blue-400' :
                                  'bg-orange-500/10 text-orange-400'
                                }`}
                              >
                                {topic.status === 'beginner' ? t({ en: 'Basic', es: 'Básico' }) :
                                 topic.status === 'intermediate' ? t({ en: 'Intermediate', es: 'Intermedio' }) :
                                 t({ en: 'Advanced', es: 'Avanzado' })}
                              </Badge>

                              {/* Tag badge */}
                              {tStyle && (
                                <Badge
                                  variant="secondary"
                                  className={`text-[10px] px-1.5 py-0 border ${tStyle.bg} ${tStyle.text} ${tStyle.border}`}
                                >
                                  {tag}
                                </Badge>
                              )}

                              {/* Quality badge */}
                              {(() => {
                                const quality = evaluateLessonQuality(topic);
                                const styles = getBadgeStyles(quality.badge);
                                return (
                                  <Badge
                                    variant="secondary"
                                    className={`text-[10px] px-1.5 py-0 ${styles.bg} ${styles.border} ${styles.text} border flex items-center gap-1`}
                                  >
                                    <Award className="size-2.5" />
                                    {t(styles.label)}
                                  </Badge>
                                );
                              })()}
                            </div>

                            <div className="flex items-center text-[11px] text-zinc-500 shrink-0 ml-2">
                              <Clock className="size-3 mr-1" />
                              {topic.timeEstimate}
                            </div>
                          </div>

                          {/* Title */}
                          <h4 className="text-lg font-semibold mb-1.5 transition-colors text-white group-hover/card:text-indigo-400">
                            {t(topic.title)}
                          </h4>

                          {/* Description */}
                          <p className="text-sm mb-4 leading-relaxed text-zinc-400">
                            {t(topic.description)}
                          </p>

                          {/* CTA */}
                          <div className="flex items-center text-sm font-medium text-white group-hover/card:translate-x-1 transition-transform">
                            {t({ en: 'Start Lesson', es: 'Empezar Lección' })}
                            <ChevronRight className="size-4 ml-1" />
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                    );
                  })}

                  {/* Expand / Collapse button */}
                  {hasMore && (
                    <div className="relative pl-8">
                      <div className={`absolute left-[-5px] top-3.5 size-2.5 rounded-full border-2 bg-black ${colors.border}`} />
                      <button
                        onClick={() => togglePhase(track.id)}
                        className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl border transition-all duration-200 ${colors.expandBg} ${colors.expandBorder} ${colors.text} text-sm font-medium`}
                      >
                        <ChevronDown className={`size-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                        {isExpanded
                          ? t({ en: 'Show less', es: 'Ver menos' })
                          : t({
                              en: `Show ${hiddenCount} more lesson${hiddenCount > 1 ? 's' : ''}`,
                              es: `Ver ${hiddenCount} lección${hiddenCount > 1 ? 'es' : ''} más`
                            })
                        }
                      </button>
                    </div>
                  )}
                </div>
              </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Quick Preview Drawer */}
      <LessonPreview topic={previewTopic} onClose={handleClosePreview} />
    </>
  );
}