import React from 'react';
import { useLanguage } from '../layout/LanguageContext';
import { Button } from '../ui/button';
import { motion } from 'motion/react';
import { ArrowRight, BookOpen, Map } from 'lucide-react';
import { useNavigate } from 'react-router';

interface HeroProps {
  onStart: () => void;
}

export function Hero({ onStart }: HeroProps) {
  const { t } = useLanguage();
  const navigate = useNavigate();

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
              {t({ en: 'Open-Source Learning Platform', es: 'Plataforma de Aprendizaje Open-Source' })}
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
              {t({ 
                en: 'UX Fusion', 
                es: 'UX Fusion' 
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
              en: 'A collaborative UX/UI platform for learning, sharing, and building better experiences together.',
              es: 'Una plataforma colaborativa de UX/UI para aprender, compartir y construir mejores experiencias juntos.'
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
              onClick={() => navigate('/paths')}
            >
              <BookOpen className="mr-2 size-5" />
              {t({ en: 'Learning Paths', es: 'Rutas de Aprendizaje' })}
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-zinc-600 bg-zinc-900/50 hover:bg-zinc-800 hover:border-zinc-500 text-white hover:text-white text-base h-12 px-8"
              onClick={() => navigate('/synthesis')}
            >
              <Map className="mr-2 size-5" />
              {t({ en: 'Knowledge Map', es: 'Mapa de Conocimiento' })}
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