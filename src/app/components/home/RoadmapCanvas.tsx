import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../layout/LanguageContext';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  CheckCircle2, 
  Circle, 
  Play,
  ArrowRight,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Search,
  BookOpen,
  Clock,
  Target,
  Sparkles,
  Bookmark,
  AlertCircle
} from 'lucide-react';
import { roadmapData, getContinueLessonId, type RoadmapNode, type NodeStatus, type NodeLevel, type NodeTag } from '../../data/roadmap-data';

export function RoadmapCanvas({ onNavigate }: { onNavigate: (section: string) => void }) {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [comingSoonNode, setComingSoonNode] = useState<RoadmapNode | null>(null);
  const [zoom, setZoom] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterLevel, setFilterLevel] = useState<NodeLevel | 'all'>('all');
  const [filterTag, setFilterTag] = useState<NodeTag | 'all'>('all');
  const canvasRef = useRef<HTMLDivElement>(null);

  const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.1, 1.5));
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 0.1, 0.5));
  const handleReset = () => setZoom(1);

  const handleNodeClick = (node: RoadmapNode) => {
    // Navigate directly to lesson if it exists
    if (node.hasLesson && node.lessonSlug) {
      navigate(`/lesson/${node.lessonSlug}`);
    } else {
      // Show coming soon modal
      setComingSoonNode(node);
    }
  };

  const handleBookmark = () => {
    // TODO: Implement bookmark functionality
    setComingSoonNode(null);
  };

  const handleContinueLearning = () => {
    const nextLessonSlug = getContinueLessonId(roadmapData);
    
    if (nextLessonSlug) {
      navigate(`/lesson/${nextLessonSlug}`);
    } else {
      // All completed - show toast
      alert(t({ 
        en: 'All lessons completed 🎉\nCongratulations! You can revisit any lesson from the roadmap.', 
        es: 'Todas las lecciones completadas 🎉\n¡Felicitaciones! Puedes revisitar cualquier lección del roadmap.'
      }));
    }
  };

  const getStatusIcon = (status: NodeStatus) => {
    if (status === 'completed') return <CheckCircle2 className="size-3 text-green-400" />;
    if (status === 'in-progress') return <Play className="size-3 text-yellow-400" />;
    return <Circle className="size-3 text-zinc-600" />;
  };

  const getStatusColor = (status: NodeStatus) => {
    if (status === 'completed') return 'border-green-500/50 bg-green-500/5';
    if (status === 'in-progress') return 'border-yellow-500/50 bg-yellow-500/5';
    return 'border-zinc-700/50 bg-zinc-900/50';
  };

  const getLevelBadgeColor = (level: NodeLevel) => {
    if (level === 'beginner') return 'bg-green-500/20 text-green-400 border-green-500/30';
    if (level === 'intermediate') return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
    return 'bg-red-500/20 text-red-400 border-red-500/30';
  };

  const getClusterColor = (color: string) => {
    const colors: Record<string, string> = {
      blue: 'from-blue-500/20 to-indigo-500/20 border-blue-500/30',
      purple: 'from-purple-500/20 to-pink-500/20 border-purple-500/30',
      cyan: 'from-cyan-500/20 to-teal-500/20 border-cyan-500/30',
      green: 'from-green-500/20 to-emerald-500/20 border-green-500/30',
      orange: 'from-orange-500/20 to-yellow-500/20 border-orange-500/30',
      pink: 'from-pink-500/20 to-rose-500/20 border-pink-500/30'
    };
    return colors[color] || colors.blue;
  };

  const filterNodes = (nodes: RoadmapNode[]) => {
    return nodes.filter(node => {
      if (filterLevel !== 'all' && node.level !== filterLevel) return false;
      if (filterTag !== 'all' && !node.tags.includes(filterTag)) return false;
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const titleMatch = t(node.title).toLowerCase().includes(query);
        const descMatch = t(node.description).toLowerCase().includes(query);
        if (!titleMatch && !descMatch) return false;
      }
      return true;
    });
  };

  const completedCount = roadmapData.reduce((acc, cluster) => {
    return acc + cluster.nodes.filter(n => n.status === 'completed').length;
  }, 0);
  const totalCount = roadmapData.reduce((acc, cluster) => acc + cluster.nodes.length, 0);

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <div className="border-b border-zinc-800 bg-black/95 backdrop-blur-sm sticky top-0 z-30">
        <div className="mx-auto max-w-7xl px-6 py-6">
          <div className="mb-6">
            <h1 className="text-4xl font-bold text-white mb-2">
              {t({ en: 'UX/UI Roadmap', es: 'Roadmap UX/UI' })}
            </h1>
            <p className="text-zinc-400">
              {t({
                en: 'Explore the curriculum as a visual roadmap. Click any topic to open its lesson.',
                es: 'Explora el curriculum como roadmap visual. Haz clic en cualquier tópico para abrir su lección.'
              })}
            </p>
            <div className="flex items-center gap-3 mt-3">
              <div className="text-sm text-zinc-500">
                {t({ en: 'Progress:', es: 'Progreso:' })} <span className="text-white font-medium">{completedCount}/{totalCount}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5 text-xs text-zinc-500">
                  <Circle className="size-3 text-zinc-600" />
                  {t({ en: 'Not Started', es: 'No Iniciado' })}
                </div>
                <div className="flex items-center gap-1.5 text-xs text-zinc-500">
                  <Play className="size-3 text-yellow-400" />
                  {t({ en: 'In Progress', es: 'En Progreso' })}
                </div>
                <div className="flex items-center gap-1.5 text-xs text-zinc-500">
                  <CheckCircle2 className="size-3 text-green-400" />
                  {t({ en: 'Completed', es: 'Completado' })}
                </div>
              </div>
              <button
                onClick={handleContinueLearning}
                className="ml-auto px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-lg text-sm font-medium transition-all flex items-center gap-2 shadow-lg shadow-indigo-500/20"
              >
                <Play className="size-4" />
                {t({ en: 'Continue Learning', es: 'Continuar Aprendiendo' })}
              </button>
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="relative flex-1 min-w-[250px] max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-zinc-500" />
              <input
                type="text"
                placeholder={t({ en: 'Search topics...', es: 'Buscar tópicos...' })}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-white text-sm placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 rounded-lg p-1">
              {(['all', 'beginner', 'intermediate', 'advanced'] as const).map((level) => (
                <button
                  key={level}
                  onClick={() => setFilterLevel(level)}
                  className={`px-3 py-1.5 rounded text-xs font-medium transition-colors ${
                    filterLevel === level ? 'bg-indigo-600 text-white' : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {level === 'all' ? t({ en: 'All', es: 'Todos' }) : level.charAt(0).toUpperCase() + level.slice(1)}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 rounded-lg p-1">
              {(['all', 'ux', 'ui', 'product', 'research', 'strategy'] as const).map((tag) => (
                <button
                  key={tag}
                  onClick={() => setFilterTag(tag)}
                  className={`px-3 py-1.5 rounded text-xs font-medium uppercase transition-colors ${
                    filterTag === tag ? 'bg-purple-600 text-white' : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {tag === 'all' ? t({ en: 'All', es: 'Todos' }) : tag}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2 ml-auto">
              <button
                onClick={handleZoomOut}
                className="p-2 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-lg transition-colors"
                title="Zoom Out"
              >
                <ZoomOut className="size-4 text-zinc-400" />
              </button>
              <button
                onClick={handleReset}
                className="p-2 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-lg transition-colors"
                title="Reset Zoom"
              >
                <RotateCcw className="size-4 text-zinc-400" />
              </button>
              <button
                onClick={handleZoomIn}
                className="p-2 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-lg transition-colors"
                title="Zoom In"
              >
                <ZoomIn className="size-4 text-zinc-400" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Roadmap Canvas */}
      <div className="py-12 px-6" ref={canvasRef}>
        <div 
          className="mx-auto max-w-7xl"
          style={{ 
            transform: `scale(${zoom})`,
            transformOrigin: 'top center',
            transition: 'transform 0.2s ease-out'
          }}
        >
          <div className="space-y-12">
            {roadmapData.map((cluster, clusterIndex) => {
              const filteredNodes = filterNodes(cluster.nodes);
              if (filteredNodes.length === 0) return null;

              const completedInCluster = filteredNodes.filter(n => n.status === 'completed').length;
              const progressPercent = (completedInCluster / filteredNodes.length) * 100;

              return (
                <motion.div
                  key={cluster.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: clusterIndex * 0.1 }}
                  className="relative"
                >
                  {/* Cluster Header */}
                  <div className={`bg-gradient-to-r ${getClusterColor(cluster.color)} border rounded-xl p-6 mb-6`}>
                    <div className="flex items-center justify-between">
                      <div>
                        <h2 className="text-2xl font-bold text-white mb-2">{t(cluster.title)}</h2>
                        <div className="flex items-center gap-3 text-sm text-zinc-400">
                          <span>{completedInCluster}/{filteredNodes.length} {t({ en: 'completed', es: 'completados' })}</span>
                          <div className="h-2 w-32 bg-zinc-800 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300"
                              style={{ width: `${progressPercent}%` }}
                            />
                          </div>
                        </div>
                      </div>
                      <Target className="size-8 text-zinc-500" />
                    </div>
                  </div>

                  {/* Nodes Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pl-6 border-l-2 border-dotted border-zinc-800">
                    {filteredNodes.map((node, nodeIndex) => (
                      <motion.button
                        key={node.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: clusterIndex * 0.1 + nodeIndex * 0.05 }}
                        onClick={() => handleNodeClick(node)}
                        className={`group relative p-4 rounded-lg border transition-all duration-200 hover:scale-105 text-left ${getStatusColor(node.status)}`}
                      >
                        {/* Status Badge */}
                        <div className="absolute -top-2 -right-2">
                          {getStatusIcon(node.status)}
                        </div>

                        <h3 className="font-semibold text-white mb-2 pr-4 leading-tight">
                          {t(node.title)}
                        </h3>

                        <div className="flex items-center gap-2 flex-wrap">
                          <span className={`px-2 py-0.5 rounded text-[10px] font-medium border ${getLevelBadgeColor(node.level)}`}>
                            {node.level}
                          </span>
                          {node.tags.map(tag => (
                            <span key={tag} className="px-2 py-0.5 rounded text-[10px] font-medium bg-zinc-800 text-zinc-400 uppercase">
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Hover Effect */}
                        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-500/0 to-purple-500/0 group-hover:from-indigo-500/10 group-hover:to-purple-500/10 transition-all duration-200 pointer-events-none" />
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Coming Soon Modal */}
      <AnimatePresence>
        {comingSoonNode && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm"
              onClick={() => setComingSoonNode(null)}
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md mx-4"
            >
              <div className="bg-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden">
                {/* Header */}
                <div className="p-6 border-b border-zinc-800 bg-gradient-to-r from-indigo-950/30 to-purple-950/30">
                  <div className="flex items-start justify-between mb-3">
                    <Clock className="size-6 text-indigo-400" />
                    <button
                      onClick={() => setComingSoonNode(null)}
                      className="text-zinc-500 hover:text-white transition-colors"
                    >
                      <X className="size-5" />
                    </button>
                  </div>
                  <h2 className="text-xl font-bold text-white mb-2">{t(comingSoonNode.title)}</h2>
                  <span className={`px-2 py-1 rounded text-xs font-medium border ${getLevelBadgeColor(comingSoonNode.level)}`}>
                    {comingSoonNode.level}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {t(comingSoonNode.description)}
                  </p>

                  <div className="bg-orange-950/30 border border-orange-500/20 rounded-lg p-4">
                    <p className="text-sm text-orange-400 font-medium">
                      {t({ en: 'Coming Soon', es: 'Próximamente' })}
                    </p>
                    <p className="text-xs text-zinc-500 mt-1">
                      {t({
                        en: 'This lesson is currently being developed and will be available soon.',
                        es: 'Esta lección está siendo desarrollada y estará disponible próximamente.'
                      })}
                    </p>
                  </div>

                  {/* Suggested Alternatives */}
                  {comingSoonNode.relatedLessons && comingSoonNode.relatedLessons.length > 0 && (
                    <div className="bg-indigo-950/30 border border-indigo-500/20 rounded-lg p-4">
                      <p className="text-sm text-indigo-400 font-medium mb-3">
                        {t({ en: 'Suggested Alternative Lessons', es: 'Lecciones Alternativas Sugeridas' })}
                      </p>
                      <div className="space-y-2">
                        {comingSoonNode.relatedLessons.map((lesson, idx) => (
                          <button
                            key={idx}
                            onClick={() => {
                              navigate(`/lesson/${lesson.slug}`);
                              setComingSoonNode(null);
                            }}
                            className="w-full flex items-center justify-between p-2 bg-zinc-900/50 hover:bg-zinc-900 border border-zinc-800 rounded text-left transition-colors group"
                          >
                            <span className="text-sm text-zinc-300 group-hover:text-white">
                              {t(lesson.title)}
                            </span>
                            <ArrowRight className="size-4 text-zinc-600 group-hover:text-indigo-400" />
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {comingSoonNode.tags.map(tag => (
                      <span key={tag} className="px-2 py-1 rounded text-xs font-medium bg-zinc-800 text-zinc-400 uppercase">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div className="p-6 pt-0 flex gap-3">
                  <button
                    onClick={handleBookmark}
                    className="flex-1 px-4 py-2.5 bg-zinc-900 hover:bg-zinc-800 text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2 border border-zinc-800"
                  >
                    <Bookmark className="size-4" />
                    {t({ en: 'Bookmark', es: 'Guardar' })}
                  </button>
                  <button
                    onClick={() => setComingSoonNode(null)}
                    className="flex-1 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors"
                  >
                    {t({ en: 'Close', es: 'Cerrar' })}
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}