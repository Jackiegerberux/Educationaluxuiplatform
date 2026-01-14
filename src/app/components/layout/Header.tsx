
import React from 'react';
import { useLanguage } from './LanguageContext';
import { Layers, BookOpen, Brain, Menu, X, Wrench, Map } from 'lucide-react';
import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { motion } from 'motion/react';

interface HeaderProps {
  onNavigate: (section: string) => void;
  currentSection: string;
}

export function Header({ onNavigate, currentSection }: HeaderProps) {
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { id: 'home', label: { en: 'Home', es: 'Inicio' }, icon: Layers },
    { id: 'paths', label: { en: 'Learning Paths', es: 'Rutas' }, icon: BookOpen },
    { id: 'synthesis', label: { en: 'Overview', es: 'Síntesis' }, icon: Map },
    { id: 'tooling', label: { en: 'Tooling', es: 'Herramientas' }, icon: Wrench },
    { id: 'heuristics', label: { en: 'Heuristics', es: 'Heurísticas' }, icon: Brain },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur-xl supports-[backdrop-filter]:bg-black/20">
      <div className="mx-auto max-w-7xl flex h-16 items-center justify-between px-4 md:px-6">
        <div 
          className="flex items-center gap-2 font-bold text-xl cursor-pointer" 
          onClick={() => onNavigate('home')}
        >
          <div className="size-8 rounded bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
            <span className="text-white">UX</span>
          </div>
          <span className="hidden sm:inline-block bg-gradient-to-r from-indigo-200 to-purple-200 bg-clip-text text-transparent">
            AditiDesign
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`text-sm font-medium transition-colors hover:text-white flex items-center gap-2 ${
                currentSection === item.id ? 'text-white' : 'text-zinc-400'
              }`}
            >
              <item.icon className="size-4" />
              {t(item.label)}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="flex items-center bg-zinc-800 rounded-full p-1 border border-zinc-700">
            <button
              onClick={() => setLanguage('en')}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                language === 'en' ? 'bg-zinc-600 text-white' : 'text-zinc-400 hover:text-white'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage('es')}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                language === 'es' ? 'bg-zinc-600 text-white' : 'text-zinc-400 hover:text-white'
              }`}
            >
              ES
            </button>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="size-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-zinc-950 border-zinc-800">
              <nav className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      onNavigate(item.id);
                    }}
                    className={`text-lg font-medium transition-colors hover:text-white flex items-center gap-3 ${
                      currentSection === item.id ? 'text-white' : 'text-zinc-400'
                    }`}
                  >
                    <item.icon className="size-5" />
                    {t(item.label)}
                  </button>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
