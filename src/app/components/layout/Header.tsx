import React from 'react';
import { Link, useLocation } from 'react-router';
import { useLanguage } from './LanguageContext';
import { Layers, BookOpen, Brain, Menu, X, Wrench, Map, Code2, GraduationCap } from 'lucide-react';
import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { motion } from 'motion/react';

export function Header() {
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  // Determine current section from pathname
  const getCurrentSection = () => {
    const path = location.pathname;
    if (path === '/') return 'home';
    if (path.startsWith('/lesson/')) return 'paths';
    return path.substring(1) || 'home';
  };

  const currentSection = getCurrentSection();

  const navItems = [
    { id: 'paths', path: '/paths', label: { en: 'Learning Paths', es: 'Rutas' }, icon: BookOpen },
    { id: 'pedagogy', path: '/pedagogy', label: { en: 'Pedagogy', es: 'Pedagogía' }, icon: GraduationCap },
    { id: 'design-system', path: '/design-system', label: { en: 'Design System', es: 'Design System' }, icon: Code2 },
    { id: 'synthesis', path: '/synthesis', label: { en: 'Knowledge Map', es: 'Mapa de Conocimiento' }, icon: Map },
    { id: 'tooling', path: '/tooling', label: { en: 'Tooling', es: 'Herramientas' }, icon: Wrench },
    { id: 'heuristics', path: '/heuristics', label: { en: 'Heuristics', es: 'Heurísticas' }, icon: Brain },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-zinc-950">
      <div className="mx-auto max-w-7xl flex h-16 items-center justify-between px-4 md:px-6">
        <Link 
          to="/"
          className="flex items-center gap-2 font-bold text-xl"
        >
          <div className="size-8 rounded bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
            <span className="text-white">UX</span>
          </div>
          <span className="hidden sm:inline-block bg-gradient-to-r from-indigo-200 to-purple-200 bg-clip-text text-transparent">
            Fusion
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              className={`text-sm font-medium transition-colors hover:text-white flex items-center gap-2 ${
                currentSection === item.id ? 'text-white' : 'text-zinc-400'
              }`}
            >
              <item.icon className="size-4" />
              {t(item.label)}
            </Link>
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
                  <Link
                    key={item.id}
                    to={item.path}
                    className={`text-lg font-medium transition-colors hover:text-white flex items-center gap-3 ${
                      currentSection === item.id ? 'text-white' : 'text-zinc-400'
                    }`}
                  >
                    <item.icon className="size-5" />
                    {t(item.label)}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}