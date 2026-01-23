import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { useLanguage } from '../layout/LanguageContext';
import { tracks, Topic } from '../../data/content';
import { evaluateLessonQuality, getBadgeStyles } from '../../data/lesson-quality';
import { motion } from 'motion/react';
import { CheckCircle2, Circle, Clock, ChevronRight, Lock, Award } from 'lucide-react';
import { Badge } from '../ui/badge';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/card';
import { LessonPreview } from './LessonPreview';

export function Roadmap() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [previewTopic, setPreviewTopic] = useState<Topic | null>(null);

  const handleTopicClick = (topic: Topic) => {
    setPreviewTopic(topic);
  };

  const handleClosePreview = () => {
    setPreviewTopic(null);
  };

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
            <p className="text-zinc-400 max-w-2xl">
              {t({ 
                en: 'Follow our structured roadmap to go from beginner to pro. Select a path to dive deep into specific topics.', 
                es: 'Sigue nuestro mapa estructurado para ir de principiante a profesional. Selecciona una ruta para profundizar en temas específicos.' 
              })}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {tracks.map((track, trackIndex) => (
              <motion.div
                key={track.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: trackIndex * 0.1 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className={`size-12 rounded-lg flex items-center justify-center ${
                    trackIndex === 0 ? 'bg-indigo-500/20 text-indigo-400' : 'bg-purple-500/20 text-purple-400'
                  }`}>
                    <span className="font-bold text-lg">{trackIndex + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{t(track.title)}</h3>
                    <p className="text-zinc-500">{t(track.description)}</p>
                  </div>
                </div>

                <div className="relative border-l border-zinc-800 ml-6 space-y-8 pb-4">
                  {track.topics.map((topic, index) => (
                    <div key={topic.id} className="relative pl-8 group">
                      {/* Timeline dot */}
                      <div className={`absolute left-[-5px] top-1 size-2.5 rounded-full border-2 ${
                        topic.status === 'beginner' || topic.status === 'intermediate' 
                          ? 'border-indigo-500 bg-black group-hover:bg-indigo-500 transition-colors' 
                          : 'border-zinc-700 bg-black'
                      }`} />
                      
                      <Card 
                        className="bg-zinc-900/50 border-zinc-800 hover:border-zinc-700 transition-all hover:bg-zinc-900 cursor-pointer overflow-hidden group/card"
                        onClick={() => handleTopicClick(topic)}
                      >
                        <CardContent className="p-6">
                          <div className="flex justify-between items-start mb-4">
                            <div className="flex items-center gap-2">
                              <Badge 
                                variant="secondary" 
                                className={`
                                  ${topic.status === 'beginner' ? 'bg-green-500/10 text-green-400' : ''}
                                  ${topic.status === 'intermediate' ? 'bg-blue-500/10 text-blue-400' : ''}
                                  ${topic.status === 'advanced' ? 'bg-orange-500/10 text-orange-400' : ''}
                                `}
                              >
                                {topic.status.charAt(0).toUpperCase() + topic.status.slice(1)}
                              </Badge>
                              {(() => {
                                const quality = evaluateLessonQuality(topic);
                                const styles = getBadgeStyles(quality.badge);
                                return (
                                  <Badge 
                                    variant="secondary" 
                                    className={`${styles.bg} ${styles.border} ${styles.text} border flex items-center gap-1`}
                                  >
                                    <Award className="size-3" />
                                    {t(styles.label)}
                                  </Badge>
                                );
                              })()}
                            </div>
                            <div className="flex items-center text-xs text-zinc-500">
                              <Clock className="size-3 mr-1" />
                              {topic.timeEstimate}
                            </div>
                          </div>
                          
                          <h4 className="text-xl font-semibold text-white mb-2 group-hover/card:text-indigo-400 transition-colors">
                            {t(topic.title)}
                          </h4>
                          <p className="text-sm text-zinc-400 mb-6">
                            {t(topic.description)}
                          </p>

                          <div className="flex items-center text-sm font-medium text-white group-hover/card:translate-x-1 transition-transform">
                            {t({ en: 'Start Lesson', es: 'Empezar Lección' })}
                            <ChevronRight className="size-4 ml-1" />
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Preview Drawer */}
      <LessonPreview topic={previewTopic} onClose={handleClosePreview} />
    </>
  );
}