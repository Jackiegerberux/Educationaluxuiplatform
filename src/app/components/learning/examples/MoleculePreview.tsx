import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/app/components/atoms/Input';
import { Button } from '@/app/components/atoms/Button';
import { Chip } from '@/app/components/atoms/Chip';
import { useLanguage } from '@/app/components/layout/LanguageContext';

export function MoleculePreview() {
  const { t } = useLanguage();
  const [searchValue, setSearchValue] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [activeFilters, setActiveFilters] = useState<string[]>(['UX Design']);

  const handleRemoveFilter = (filter: string) => {
    setActiveFilters(activeFilters.filter(f => f !== filter));
  };

  return (
    <div className="space-y-6">
      {/* Molecule Preview */}
      <div className="p-6 bg-zinc-900/50 rounded-lg border border-zinc-800">
        <div className="flex gap-2 mb-4">
          <div className="flex-1">
            <Input
              placeholder={t({ 
                en: 'Search lessons...',
                es: 'Buscar lecciones...'
              })}
              leftIcon={<Search className="size-4" />}
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </div>
          <Button variant="primary">
            {t({ en: 'Search', es: 'Buscar' })}
          </Button>
        </div>

        {/* Live Hint */}
        {searchValue && (
          <p className="text-sm text-indigo-400 mb-4">
            {t({ 
              en: `Searching for "${searchValue}"...`,
              es: `Buscando "${searchValue}"...`
            })}
          </p>
        )}

        {/* Filter Chips */}
        {showFilters && activeFilters.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {activeFilters.map((filter) => (
              <Chip
                key={filter}
                label={filter}
                variant="primary"
                onRemove={() => handleRemoveFilter(filter)}
              />
            ))}
          </div>
        )}
      </div>

      {/* Toggle Filters */}
      <div className="flex items-center gap-3">
        <p className="text-sm font-medium text-zinc-400">
          {t({ en: 'With Filters:', es: 'Con Filtros:' })}
        </p>
        <button
          onClick={() => setShowFilters(!showFilters)}
          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
            showFilters ? 'bg-indigo-600' : 'bg-zinc-700'
          }`}
        >
          <span
            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
              showFilters ? 'translate-x-6' : 'translate-x-1'
            }`}
          />
        </button>
      </div>

      {/* Molecule Components */}
      <div className="pt-4 border-t border-zinc-800">
        <p className="text-sm font-medium text-zinc-400 mb-3">
          {t({ en: 'Molecule = Atoms Combined:', es: 'Molécula = Átomos Combinados:' })}
        </p>
        <div className="space-y-2 text-sm text-zinc-300">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-indigo-500" />
            <span>{t({ en: 'Input (with icon)', es: 'Input (con ícono)' })}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-indigo-500" />
            <span>{t({ en: 'Button', es: 'Botón' })}</span>
          </div>
          {showFilters && (
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-indigo-500" />
              <span>{t({ en: 'Filter Chips (removable)', es: 'Chips de Filtro (removibles)' })}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
