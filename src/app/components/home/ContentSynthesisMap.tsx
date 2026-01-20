import React, { useState, useEffect } from 'react';
import { useLanguage } from '../layout/LanguageContext';
import { tracks } from '../../data/content';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Layers, Brain, Wrench, ArrowRight, X, ZoomIn, CheckSquare } from 'lucide-react';

interface ContentSynthesisMapProps {
  onNavigate: (section: string) => void;
}

export function ContentSynthesisMap({ onNavigate }: ContentSynthesisMapProps) {
  const { t } = useLanguage();
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Define static nodes for Tooling and Heuristics, plus dynamic nodes from tracks
  const coreNode = {
    id: 'core',
    title: 'AditiDesign',
    icon: Layers,
    description: { en: 'The central hub of your UX journey.', es: 'El núcleo de tu viaje UX.' },
    color: 'bg-white text-black',
    borderColor: 'border-white',
    x: 50,
    y: 50
  };

  // Calculate positions for surrounding nodes (circular layout)
  const otherNodes = [
    // Dynamic tracks
    ...tracks.map((track, i) => ({
      id: `track-${track.id}`,
      type: 'track',
      title: track.title,
      description: track.description,
      icon: Layers, // You might want specific icons per track if available
      targetSection: 'paths',
      color: 'bg-indigo-500/20 text-indigo-400',
      borderColor: 'border-indigo-500/50',
      delay: i * 0.1
    })),
    // Static sections
    {
      id: 'tooling',
      type: 'section',
      title: { en: 'Tooling Path', es: 'Ruta de Herramientas' },
      description: { en: 'Master the software that powers design.', es: 'Domina el software que impulsa el diseño.' },
      icon: Wrench,
      targetSection: 'tooling',
      color: 'bg-emerald-500/20 text-emerald-400',
      borderColor: 'border-emerald-500/50',
      delay: 0.3
    },
    {
      id: 'validation',
      type: 'section',
      title: { en: 'Validation Framework', es: 'Marco de Validación' },
      description: { en: 'Evidence-based validation methods for every artifact.', es: 'Métodos de validación basados en evidencia para cada artefacto.' },
      icon: CheckSquare,
      targetSection: 'validation',
      color: 'bg-green-500/20 text-green-400',
      borderColor: 'border-green-500/50',
      delay: 0.35
    },
    {
      id: 'heuristics',
      type: 'section',
      title: { en: 'Heuristics', es: 'Heurísticas' },
      description: { en: 'Laws of UX and usability principles.', es: 'Leyes de UX y principios de usabilidad.' },
      icon: Brain,
      targetSection: 'heuristics',
      color: 'bg-pink-500/20 text-pink-400',
      borderColor: 'border-pink-500/50',
      delay: 0.4
    }
  ];

  // Distribute nodes in a circle
  const radius = isMobile ? 35 : 30; // % distance from center
  const nodes = otherNodes.map((node, i) => {
    const angle = (i / otherNodes.length) * 2 * Math.PI - Math.PI / 2; // Start from top
    return {
      ...node,
      x: 50 + radius * Math.cos(angle),
      y: 50 + radius * Math.sin(angle)
    };
  });

  return (
    <div className="min-h-screen bg-black relative overflow-hidden flex flex-col items-center justify-center py-20">
      
      {/* Header text */}
      <div className="absolute top-10 left-0 right-0 text-center z-10 px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          {t({ en: 'Knowledge Map', es: 'Mapa de Conocimiento' })}
        </h2>
        <p className="text-zinc-400 max-w-2xl mx-auto">
          {t({ 
            en: 'Interactive overview of the entire curriculum. Click on any node to explore.', 
            es: 'Vista general interactiva de todo el plan de estudios. Haz clic en cualquier nodo para explorar.' 
          })}
        </p>
      </div>

      {/* Diagram Container */}
      <div className="relative w-full max-w-4xl aspect-square md:aspect-video mx-auto mt-10">
        
        {/* Connection Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-50">
          {nodes.map((node) => (
            <motion.line
              key={`line-${node.id}`}
              x1={`${coreNode.x}%`}
              y1={`${coreNode.y}%`}
              x2={`${node.x}%`}
              y2={`${node.y}%`}
              stroke="url(#gradient-line)"
              strokeWidth="2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.5 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          ))}
          <defs>
            <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.1)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.5)" />
            </linearGradient>
          </defs>
        </svg>

        {/* Central Node */}
        <motion.div
          className="absolute transform -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer"
          style={{ left: `${coreNode.x}%`, top: `${coreNode.y}%` }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          onClick={() => setSelectedNode('core')}
        >
          <div className={`size-24 md:size-32 rounded-full ${coreNode.color} flex flex-col items-center justify-center border-4 ${coreNode.borderColor} shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:scale-110 transition-transform`}>
            <coreNode.icon className="size-8 md:size-10 mb-1" />
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest">Aditi</span>
          </div>
        </motion.div>

        {/* Child Nodes */}
        {nodes.map((node, index) => (
          <motion.div
            key={node.id}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 z-20"
            style={{ left: `${node.x}%`, top: `${node.y}%` }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: node.delay }}
          >
             <button
                onClick={() => setSelectedNode(node.id)}
                className={`
                  group relative flex flex-col items-center justify-center
                  size-20 md:size-28 rounded-full 
                  bg-zinc-900/90 backdrop-blur-md border-2 
                  ${selectedNode === node.id ? 'border-white scale-110' : 'border-zinc-700 hover:border-white/50 hover:scale-105'}
                  transition-all duration-300
                  shadow-xl
                `}
             >
                <div className={`p-2 rounded-full mb-2 ${node.color.split(' ')[0]}`}>
                  <node.icon className={`size-5 md:size-6 ${node.color.split(' ')[1]}`} />
                </div>
                <span className="text-[10px] md:text-xs font-medium text-center px-1 text-zinc-300 leading-tight">
                  {t(node.title)}
                </span>
                
                {/* Pulse effect for unvisited nodes could go here */}
             </button>
          </motion.div>
        ))}

      </div>

      {/* Modal / Overlay for details */}
      <AnimatePresence>
        {selectedNode && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedNode(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-lg bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-2xl relative"
            >
              <button 
                onClick={() => setSelectedNode(null)}
                className="absolute right-4 top-4 text-zinc-500 hover:text-white"
              >
                <X className="size-5" />
              </button>

              {(() => {
                const node = selectedNode === 'core' ? coreNode : nodes.find(n => n.id === selectedNode);
                if (!node) return null;

                return (
                  <div className="text-center">
                    <div className={`mx-auto size-16 rounded-full flex items-center justify-center mb-4 ${node.color ? node.color.split(' ')[0] : 'bg-white/10'} `}>
                       <node.icon className={`size-8 ${node.color ? node.color.split(' ')[1] : 'text-white'}`} />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-2">{typeof node.title === 'string' ? node.title : t(node.title)}</h3>
                    
                    <p className="text-zinc-400 mb-8 leading-relaxed">
                      {t(node.description)}
                    </p>

                    {selectedNode !== 'core' && (
                       <Button 
                         className="w-full bg-white text-black hover:bg-zinc-200"
                         onClick={() => {
                           // @ts-ignore
                           if(node.targetSection) onNavigate(node.targetSection);
                         }}
                       >
                         {t({ en: 'Go to Class', es: 'Ir a la Clase' })}
                         <ArrowRight className="ml-2 size-4" />
                       </Button>
                    )}
                    
                    {selectedNode === 'core' && (
                       <div className="grid grid-cols-2 gap-3">
                          <Button 
                            variant="outline"
                            className="border-zinc-700 hover:bg-zinc-800"
                            onClick={() => setSelectedNode(nodes[0].id)}
                          >
                             {t({ en: 'Start Here', es: 'Empieza Aquí' })}
                          </Button>
                          <Button 
                            className="bg-white text-black hover:bg-zinc-200"
                            onClick={() => onNavigate('paths')}
                          >
                             {t({ en: 'View All Paths', es: 'Ver Todas las Rutas' })}
                          </Button>
                       </div>
                    )}
                  </div>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}