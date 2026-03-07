import React, { useState, useMemo, useRef } from 'react';
import { useLanguage } from '../layout/LanguageContext';
import { toolingData, categoryInfo, ToolItem, ToolCategory, ToolPricing, ToolLevel } from '../../data/tooling-data';
import { motion, AnimatePresence } from 'motion/react';
import {
  Search, X, ExternalLink, Sparkles, Star, Filter,
  Palette, Code, Microscope, FileText, BarChart3, Users, KanbanSquare,
  ChevronDown, Lightbulb, Zap, Crown, ArrowUpRight, Grid3X3, List, Heart
} from 'lucide-react';

const iconComponents: Record<string, React.ElementType> = {
  Palette, Code, Sparkles, Microscope, KanbanSquare, FileText, BarChart3, Users
};

const pricingConfig: Record<ToolPricing, { label: { en: string; es: string }; class: string }> = {
  free: { label: { en: 'Free', es: 'Gratis' }, class: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30' },
  freemium: { label: { en: 'Freemium', es: 'Freemium' }, class: 'bg-blue-500/15 text-blue-400 border-blue-500/30' },
  paid: { label: { en: 'Paid', es: 'De Pago' }, class: 'bg-amber-500/15 text-amber-400 border-amber-500/30' },
};

const levelConfig: Record<ToolLevel, { label: { en: string; es: string }; icon: React.ElementType; class: string }> = {
  beginner: { label: { en: 'Beginner', es: 'Principiante' }, icon: Zap, class: 'text-emerald-400' },
  intermediate: { label: { en: 'Intermediate', es: 'Intermedio' }, icon: Star, class: 'text-amber-400' },
  advanced: { label: { en: 'Advanced', es: 'Avanzado' }, icon: Crown, class: 'text-purple-400' },
};

function ToolCard({ tool, isExpanded, onToggle }: { tool: ToolItem; isExpanded: boolean; onToggle: () => void }) {
  const { t } = useLanguage();
  const catInfo = categoryInfo.find(c => c.id === tool.category)!;
  const CatIcon = iconComponents[catInfo.icon] || Code;
  const LevelIcon = levelConfig[tool.level].icon;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.25 }}
      className="group"
    >
      <div
        onClick={onToggle}
        className={`
          relative bg-zinc-900/70 border rounded-2xl overflow-hidden cursor-pointer
          transition-all duration-300 hover:shadow-lg hover:shadow-black/20
          ${isExpanded ? 'border-indigo-500/40 shadow-lg shadow-indigo-500/5' : 'border-zinc-800 hover:border-zinc-700'}
        `}
      >
        {/* Essential badge */}
        {tool.essential && (
          <div className="absolute top-3 right-3 z-10">
            <div className="flex items-center gap-1 bg-amber-500/15 border border-amber-500/30 rounded-full px-2 py-0.5">
              <Heart className="size-3 text-amber-400 fill-amber-400" />
              <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider">
                {t({ en: 'Essential', es: 'Esencial' })}
              </span>
            </div>
          </div>
        )}

        {/* Top section */}
        <div className="p-5 pb-3">
          <div className="flex items-start gap-3">
            <div className={`p-2.5 rounded-xl bg-gradient-to-br ${catInfo.gradient} border border-white/5 shrink-0`}>
              <CatIcon className={`size-5 ${catInfo.color}`} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-semibold text-white text-lg leading-tight truncate">{tool.name}</h3>
              </div>
              <p className="text-sm text-zinc-400 line-clamp-2 leading-relaxed">{t(tool.description)}</p>
            </div>
          </div>
        </div>

        {/* Tags row */}
        <div className="px-5 pb-3 flex flex-wrap items-center gap-1.5">
          <span className={`text-[10px] font-semibold border rounded-full px-2 py-0.5 ${pricingConfig[tool.pricing].class}`}>
            {t(pricingConfig[tool.pricing].label)}
          </span>
          <span className={`text-[10px] font-medium flex items-center gap-0.5 ${levelConfig[tool.level].class}`}>
            <LevelIcon className="size-3" />
            {t(levelConfig[tool.level].label)}
          </span>
          <span className="text-zinc-600 text-[10px]">|</span>
          {tool.tags.slice(0, 3).map(tag => (
            <span key={tag} className="text-[10px] text-zinc-500 bg-zinc-800/50 rounded-full px-2 py-0.5">
              {tag}
            </span>
          ))}
        </div>

        {/* Expanded content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden"
            >
              <div className="px-5 pb-5 space-y-3 border-t border-zinc-800/50 pt-3">
                {/* Best For */}
                <div className="bg-emerald-500/5 border border-emerald-500/10 rounded-xl p-3">
                  <div className="flex items-center gap-1.5 mb-1">
                    <Lightbulb className="size-3.5 text-emerald-400" />
                    <span className="text-[11px] font-semibold text-emerald-400 uppercase tracking-wider">
                      {t({ en: 'Best For', es: 'Ideal Para' })}
                    </span>
                  </div>
                  <p className="text-sm text-zinc-300">{t(tool.bestFor)}</p>
                </div>

                {/* Pro Tip */}
                <div className="bg-indigo-500/5 border border-indigo-500/10 rounded-xl p-3">
                  <div className="flex items-center gap-1.5 mb-1">
                    <Sparkles className="size-3.5 text-indigo-400" />
                    <span className="text-[11px] font-semibold text-indigo-400 uppercase tracking-wider">Pro Tip</span>
                  </div>
                  <p className="text-sm text-zinc-400 italic">"{t(tool.proTip)}"</p>
                </div>

                {/* Link */}
                <a
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={e => e.stopPropagation()}
                  className="inline-flex items-center gap-1.5 text-sm text-indigo-400 hover:text-indigo-300 transition-colors group/link"
                >
                  <ExternalLink className="size-3.5" />
                  {t({ en: 'Visit Website', es: 'Visitar Sitio' })}
                  <ArrowUpRight className="size-3 opacity-0 -translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Expand indicator */}
        <div className="flex justify-center pb-2">
          <ChevronDown className={`size-4 text-zinc-600 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
        </div>
      </div>
    </motion.div>
  );
}

export function ToolingPath() {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<ToolCategory | 'all'>('all');
  const [activePricing, setActivePricing] = useState<ToolPricing | 'all'>('all');
  const [activeLevel, setActiveLevel] = useState<ToolLevel | 'all'>('all');
  const [expandedTool, setExpandedTool] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [favorites, setFavorites] = useState<Set<string>>(() => {
    try {
      const saved = localStorage.getItem('fusion-tool-favorites');
      return saved ? new Set(JSON.parse(saved)) : new Set();
    } catch { return new Set(); }
  });
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);

  const toggleFavorite = (id: string) => {
    setFavorites(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      localStorage.setItem('fusion-tool-favorites', JSON.stringify([...next]));
      return next;
    });
  };

  const filteredTools = useMemo(() => {
    return toolingData.filter(tool => {
      if (activeCategory !== 'all' && tool.category !== activeCategory) return false;
      if (activePricing !== 'all' && tool.pricing !== activePricing) return false;
      if (activeLevel !== 'all' && tool.level !== activeLevel) return false;
      if (showFavoritesOnly && !favorites.has(tool.id)) return false;
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        return (
          tool.name.toLowerCase().includes(q) ||
          tool.tags.some(tag => tag.toLowerCase().includes(q)) ||
          tool.description.en.toLowerCase().includes(q) ||
          tool.description.es.toLowerCase().includes(q) ||
          tool.category.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [activeCategory, activePricing, activeLevel, searchQuery, showFavoritesOnly, favorites]);

  const stats = useMemo(() => ({
    total: toolingData.length,
    free: toolingData.filter(t => t.pricing === 'free').length,
    essential: toolingData.filter(t => t.essential).length,
    categories: categoryInfo.length,
  }), []);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: toolingData.length };
    toolingData.forEach(t => { counts[t.category] = (counts[t.category] || 0) + 1; });
    return counts;
  }, []);

  const clearFilters = () => {
    setActiveCategory('all');
    setActivePricing('all');
    setActiveLevel('all');
    setSearchQuery('');
    setShowFavoritesOnly(false);
  };

  const hasActiveFilters = activeCategory !== 'all' || activePricing !== 'all' || activeLevel !== 'all' || searchQuery !== '' || showFavoritesOnly;

  return (
    <div className="min-h-screen bg-zinc-950">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 via-purple-500/5 to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-500/8 rounded-full blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-4 md:px-6 pt-16 pb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6"
          >
            <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-4 py-1.5 text-sm text-indigo-300">
              <Sparkles className="size-4" />
              {t({ en: `${stats.total} curated tools`, es: `${stats.total} herramientas curadas` })}
            </div>

            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
              {t({ en: 'Tooling Arsenal', es: 'Arsenal de Herramientas' })}
            </h1>

            <p className="text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed">
              {t({
                en: 'Every tool a UX/UI designer and front-end developer needs. Curated with pro tips, pricing, and skill levels.',
                es: 'Cada herramienta que un disenador UX/UI y developer front-end necesita. Curada con pro tips, precios y niveles.'
              })}
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-6 pt-4">
              {[
                { value: stats.total, label: { en: 'Tools', es: 'Herramientas' }, color: 'text-indigo-400' },
                { value: stats.categories, label: { en: 'Categories', es: 'Categorias' }, color: 'text-purple-400' },
                { value: stats.free, label: { en: 'Free Tools', es: 'Gratis' }, color: 'text-emerald-400' },
                { value: stats.essential, label: { en: 'Essentials', es: 'Esenciales' }, color: 'text-amber-400' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="text-center"
                >
                  <div className={`text-3xl font-bold ${stat.color}`}>{stat.value}</div>
                  <div className="text-xs text-zinc-500 uppercase tracking-wider">{t(stat.label)}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Search & Filters */}
      <div className="sticky top-16 z-30 bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-800/50">
        <div className="mx-auto max-w-7xl px-4 md:px-6 py-4 space-y-3">
          {/* Search bar */}
          <div className="flex items-center gap-3">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-zinc-500" />
              <input
                ref={searchRef}
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder={t({ en: 'Search tools by name, category, or tag...', es: 'Buscar herramientas por nombre, categoria o tag...' })}
                className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl pl-10 pr-10 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 transition-all"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300">
                  <X className="size-4" />
                </button>
              )}
            </div>

            {/* View toggle */}
            <div className="hidden sm:flex items-center bg-zinc-900/50 border border-zinc-800 rounded-xl p-0.5">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors ${viewMode === 'grid' ? 'bg-zinc-800 text-white' : 'text-zinc-500 hover:text-zinc-300'}`}
              >
                <Grid3X3 className="size-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-colors ${viewMode === 'list' ? 'bg-zinc-800 text-white' : 'text-zinc-500 hover:text-zinc-300'}`}
              >
                <List className="size-4" />
              </button>
            </div>

            {/* Favorites */}
            <button
              onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
              className={`p-2.5 rounded-xl border transition-all ${showFavoritesOnly ? 'bg-amber-500/10 border-amber-500/30 text-amber-400' : 'bg-zinc-900/50 border-zinc-800 text-zinc-500 hover:text-zinc-300'}`}
            >
              <Heart className={`size-4 ${showFavoritesOnly ? 'fill-amber-400' : ''}`} />
            </button>

            {/* Filter toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`p-2.5 rounded-xl border transition-all flex items-center gap-2 ${showFilters ? 'bg-indigo-500/10 border-indigo-500/30 text-indigo-400' : 'bg-zinc-900/50 border-zinc-800 text-zinc-500 hover:text-zinc-300'}`}
            >
              <Filter className="size-4" />
              <span className="hidden sm:inline text-sm">{t({ en: 'Filters', es: 'Filtros' })}</span>
            </button>
          </div>

          {/* Category tabs - always visible */}
          <div className="flex items-center gap-1.5 overflow-x-auto hide-scrollbar pb-1">
            <button
              onClick={() => setActiveCategory('all')}
              className={`shrink-0 text-sm px-3 py-1.5 rounded-lg transition-all ${activeCategory === 'all' ? 'bg-indigo-500/15 text-indigo-300 border border-indigo-500/30' : 'text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/50 border border-transparent'}`}
            >
              {t({ en: 'All', es: 'Todas' })}
              <span className="ml-1.5 text-[10px] opacity-60">{categoryCounts.all}</span>
            </button>
            {categoryInfo.map(cat => {
              const CatIcon = iconComponents[cat.icon] || Code;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`shrink-0 text-sm px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${activeCategory === cat.id ? `bg-gradient-to-r ${cat.gradient} ${cat.color} border border-white/10` : 'text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/50 border border-transparent'}`}
                >
                  <CatIcon className="size-3.5" />
                  {t(cat.label)}
                  <span className="text-[10px] opacity-60">{categoryCounts[cat.id] || 0}</span>
                </button>
              );
            })}
          </div>

          {/* Advanced filters */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <div className="flex flex-wrap items-center gap-4 pt-2 pb-1">
                  {/* Pricing filter */}
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-zinc-500 uppercase tracking-wider">{t({ en: 'Pricing', es: 'Precio' })}</span>
                    <div className="flex items-center gap-1">
                      {(['all', 'free', 'freemium', 'paid'] as const).map(p => (
                        <button
                          key={p}
                          onClick={() => setActivePricing(p)}
                          className={`text-xs px-2.5 py-1 rounded-md transition-all ${activePricing === p ? 'bg-zinc-800 text-white' : 'text-zinc-500 hover:text-zinc-300'}`}
                        >
                          {p === 'all' ? t({ en: 'All', es: 'Todos' }) : t(pricingConfig[p].label)}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Level filter */}
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-zinc-500 uppercase tracking-wider">{t({ en: 'Level', es: 'Nivel' })}</span>
                    <div className="flex items-center gap-1">
                      {(['all', 'beginner', 'intermediate', 'advanced'] as const).map(l => (
                        <button
                          key={l}
                          onClick={() => setActiveLevel(l)}
                          className={`text-xs px-2.5 py-1 rounded-md transition-all ${activeLevel === l ? 'bg-zinc-800 text-white' : 'text-zinc-500 hover:text-zinc-300'}`}
                        >
                          {l === 'all' ? t({ en: 'All', es: 'Todos' }) : t(levelConfig[l].label)}
                        </button>
                      ))}
                    </div>
                  </div>

                  {hasActiveFilters && (
                    <button onClick={clearFilters} className="text-xs text-indigo-400 hover:text-indigo-300 flex items-center gap-1 ml-auto">
                      <X className="size-3" />
                      {t({ en: 'Clear all', es: 'Limpiar todo' })}
                    </button>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Results */}
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-8">
        {/* Results count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-zinc-500">
            {t({
              en: `Showing ${filteredTools.length} of ${stats.total} tools`,
              es: `Mostrando ${filteredTools.length} de ${stats.total} herramientas`
            })}
          </p>
        </div>

        {filteredTools.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <Search className="size-12 text-zinc-700 mx-auto mb-4" />
            <h3 className="text-lg text-zinc-400 mb-2">
              {t({ en: 'No tools found', es: 'No se encontraron herramientas' })}
            </h3>
            <p className="text-sm text-zinc-600 mb-4">
              {t({ en: 'Try adjusting your search or filters', es: 'Intenta ajustar tu busqueda o filtros' })}
            </p>
            <button onClick={clearFilters} className="text-sm text-indigo-400 hover:text-indigo-300">
              {t({ en: 'Clear all filters', es: 'Limpiar todos los filtros' })}
            </button>
          </motion.div>
        ) : (
          <div className={viewMode === 'grid'
            ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'
            : 'space-y-3'
          }>
            <AnimatePresence mode="popLayout">
              {filteredTools.map(tool => (
                <div key={tool.id} className="relative group/fav">
                  {/* Favorite button overlay */}
                  <button
                    onClick={e => { e.stopPropagation(); toggleFavorite(tool.id); }}
                    className={`absolute top-3 ${tool.essential ? 'right-24' : 'right-3'} z-20 p-1.5 rounded-lg transition-all hover:scale-110
                      ${favorites.has(tool.id) ? 'text-red-400 opacity-100' : 'text-zinc-600 hover:text-zinc-400 opacity-0 group-hover/fav:opacity-100'}
                    `}
                  >
                    <Heart className={`size-4 ${favorites.has(tool.id) ? 'fill-red-400' : ''}`} />
                  </button>
                  <ToolCard
                    tool={tool}
                    isExpanded={expandedTool === tool.id}
                    onToggle={() => setExpandedTool(prev => prev === tool.id ? null : tool.id)}
                  />
                </div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>

      {/* Category Guide Section */}
      <div className="mx-auto max-w-7xl px-4 md:px-6 pb-20">
        <div className="border-t border-zinc-800/50 pt-16">
          <h2 className="text-2xl font-bold text-white mb-2 text-center">
            {t({ en: 'Explore by Category', es: 'Explorar por Categoria' })}
          </h2>
          <p className="text-zinc-500 text-center mb-10 text-sm">
            {t({ en: 'Deep dive into each discipline', es: 'Profundiza en cada disciplina' })}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {categoryInfo.map((cat, i) => {
              const CatIcon = iconComponents[cat.icon] || Code;
              const count = categoryCounts[cat.id] || 0;
              return (
                <motion.button
                  key={cat.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`text-left p-5 rounded-2xl bg-gradient-to-br ${cat.gradient} border border-white/5 hover:border-white/10 transition-all group/cat`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <CatIcon className={`size-6 ${cat.color}`} />
                    <span className="text-sm font-semibold text-white">{t(cat.label)}</span>
                    <span className={`text-xs ml-auto ${cat.color} opacity-70`}>{count}</span>
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed">{t(cat.description)}</p>
                  <div className="mt-3 flex items-center gap-1 text-xs text-zinc-500 group-hover/cat:text-zinc-400 transition-colors">
                    {t({ en: 'Browse tools', es: 'Ver herramientas' })}
                    <ArrowUpRight className="size-3 group-hover/cat:translate-x-0.5 group-hover/cat:-translate-y-0.5 transition-transform" />
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}