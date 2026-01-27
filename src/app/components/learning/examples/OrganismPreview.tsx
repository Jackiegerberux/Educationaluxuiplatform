import React, { useState } from 'react';
import { Search, Menu, User } from 'lucide-react';
import { Input } from '@/app/components/atoms/Input';
import { Button } from '@/app/components/atoms/Button';
import { Badge } from '@/app/components/atoms/Badge';
import { useLanguage } from '@/app/components/layout/LanguageContext';

export function OrganismPreview() {
  const { t } = useLanguage();
  const [isCompact, setIsCompact] = useState(false);

  return (
    <div className="space-y-6">
      {/* Organism Preview - Header */}
      <div className="bg-zinc-900/50 rounded-lg border border-zinc-800 overflow-hidden">
        <header
          className={`bg-black/60 border-b border-zinc-800 transition-all ${
            isCompact ? 'px-4 py-2' : 'px-6 py-4'
          }`}
        >
          <div className="flex items-center justify-between gap-4">
            {/* Logo/Title */}
            <div className="flex items-center gap-3">
              <div className={`bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg transition-all ${
                isCompact ? 'w-8 h-8' : 'w-10 h-10'
              }`} />
              <h1 className={`font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent transition-all ${
                isCompact ? 'text-lg' : 'text-xl'
              }`}>
                AditiDesign
              </h1>
            </div>

            {/* Navigation (Desktop only) */}
            <nav className="hidden md:flex items-center gap-1">
              <button className="px-3 py-1.5 text-sm text-zinc-300 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors">
                {t({ en: 'Learn', es: 'Aprender' })}
              </button>
              <button className="px-3 py-1.5 text-sm text-zinc-300 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors">
                {t({ en: 'Tools', es: 'Herramientas' })}
              </button>
              <button className="px-3 py-1.5 text-sm text-zinc-300 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors">
                {t({ en: 'About', es: 'Acerca de' })}
              </button>
            </nav>

            {/* Search Molecule + Profile */}
            <div className="flex items-center gap-3">
              {!isCompact && (
                <div className="hidden lg:block w-64">
                  <Input
                    placeholder={t({ en: 'Search...', es: 'Buscar...' })}
                    leftIcon={<Search className="size-4" />}
                  />
                </div>
              )}
              <button className="p-2 hover:bg-zinc-800 rounded-lg transition-colors">
                <User className="size-5 text-zinc-400" />
              </button>
              <button className="md:hidden p-2 hover:bg-zinc-800 rounded-lg transition-colors">
                <Menu className="size-5 text-zinc-400" />
              </button>
            </div>
          </div>
        </header>
      </div>

      {/* Layout Toggle */}
      <div className="flex items-center gap-3">
        <p className="text-sm font-medium text-zinc-400">
          {t({ en: 'Header Layout:', es: 'Layout del Header:' })}
        </p>
        <button
          onClick={() => setIsCompact(false)}
          className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
            !isCompact
              ? 'bg-indigo-600 text-white'
              : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'
          }`}
        >
          {t({ en: 'Expanded', es: 'Expandido' })}
        </button>
        <button
          onClick={() => setIsCompact(true)}
          className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
            isCompact
              ? 'bg-indigo-600 text-white'
              : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'
          }`}
        >
          {t({ en: 'Compact', es: 'Compacto' })}
        </button>
      </div>

      {/* Organism Breakdown */}
      <div className="pt-4 border-t border-zinc-800">
        <p className="text-sm font-medium text-zinc-400 mb-3">
          {t({ en: 'Organism = Molecules + Atoms:', es: 'Organismo = Moléculas + Átomos:' })}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="p-3 bg-black/40 rounded-lg border border-zinc-800">
            <p className="text-xs font-medium text-zinc-400 mb-2">
              {t({ en: 'Molecules Used:', es: 'Moléculas Usadas:' })}
            </p>
            <div className="space-y-1 text-sm text-zinc-300">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                <span>{t({ en: 'Search Form', es: 'Formulario de Búsqueda' })}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                <span>{t({ en: 'Navigation Menu', es: 'Menú de Navegación' })}</span>
              </div>
            </div>
          </div>
          <div className="p-3 bg-black/40 rounded-lg border border-zinc-800">
            <p className="text-xs font-medium text-zinc-400 mb-2">
              {t({ en: 'Atoms Used:', es: 'Átomos Usados:' })}
            </p>
            <div className="space-y-1 text-sm text-zinc-300">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                <span>{t({ en: 'Logo, Buttons, Icons', es: 'Logo, Botones, Íconos' })}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Spacing Tokens Used */}
      {!isCompact && (
        <div className="pt-4 border-t border-zinc-800">
          <p className="text-sm font-medium text-zinc-400 mb-3">
            {t({ en: 'Spacing Tokens in Use:', es: 'Tokens de Espaciado en Uso:' })}
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="info" size="sm">px-6 (24px)</Badge>
            <Badge variant="info" size="sm">py-4 (16px)</Badge>
            <Badge variant="info" size="sm">gap-4 (16px)</Badge>
          </div>
        </div>
      )}
    </div>
  );
}
