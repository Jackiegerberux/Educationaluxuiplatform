
import React from 'react';
import { useLanguage } from '../layout/LanguageContext';
import { Button } from '../ui/button';
import { motion } from 'motion/react';
import { ArrowRight, BookOpen, Layers } from 'lucide-react';

interface HeroProps {
  onStart: () => void;
}

export function Hero({ onStart }: HeroProps) {
  const { t } = useLanguage();

  return (
    <div className="relative overflow-hidden bg-black text-white py-20 lg:py-32">
      {/* Background gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-900/30 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-900/30 rounded-full blur-[128px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium mb-6">
              {t({ en: 'Interactive Learning Platform', es: 'Plataforma de Aprendizaje Interactivo' })}
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
              {t({ 
                en: 'Learn UX/UI Design — From Foundations to Real Product Thinking', 
                es: 'Aprende Diseño UX/UI — Desde Fundamentos hasta Pensamiento de Producto' 
              })}
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl text-zinc-400 max-w-2xl"
          >
            {t({
              en: 'Master the principles of user experience, interface design, and design systems through interactive lessons and real-world examples.',
              es: 'Domina los principios de la experiencia de usuario, diseño de interfaces y sistemas de diseño a través de lecciones interactivas y ejemplos del mundo real.'
            })}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <Button 
              size="lg" 
              className="bg-white text-black hover:bg-zinc-200 text-base h-12 px-8"
              onClick={onStart}
            >
              <BookOpen className="mr-2 size-5" />
              {t({ en: 'Start Learning', es: 'Empezar a Aprender' })}
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-zinc-700 hover:bg-zinc-800 text-white hover:text-white text-base h-12 px-8"
              onClick={() => document.getElementById('preview')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Layers className="mr-2 size-5" />
              {t({ en: 'Explore Roadmap', es: 'Explorar Mapa' })}
            </Button>
          </motion.div>
        </div>
      </div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-soft-light"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>
    </div>
  );
}
