import React, { useState } from 'react';
import { LayoutDashboard, FileText, Home, Settings, Bell } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/app/components/atoms/Card';
import { Badge } from '@/app/components/atoms/Badge';
import { useLanguage } from '@/app/components/layout/LanguageContext';

type TemplateType = 'dashboard' | 'article';

export function TemplatePreview() {
  const { t } = useLanguage();
  const [activeTemplate, setActiveTemplate] = useState<TemplateType>('dashboard');

  return (
    <div className="space-y-6">
      {/* Template Preview */}
      <div className="bg-zinc-900/50 rounded-lg border border-zinc-800 overflow-hidden">
        <div className="flex" style={{ minHeight: '280px' }}>
          {/* Sidebar */}
          <aside className="w-16 md:w-48 bg-black/60 border-r border-zinc-800 p-3">
            <div className="space-y-2">
              <div className="flex items-center gap-3 p-2 bg-indigo-950/50 text-indigo-400 rounded-lg">
                {activeTemplate === 'dashboard' ? (
                  <>
                    <LayoutDashboard className="size-5" />
                    <span className="hidden md:block text-sm font-medium">
                      {t({ en: 'Dashboard', es: 'Tablero' })}
                    </span>
                  </>
                ) : (
                  <>
                    <FileText className="size-5" />
                    <span className="hidden md:block text-sm font-medium">
                      {t({ en: 'Article', es: 'Artículo' })}
                    </span>
                  </>
                )}
              </div>
              <div className="flex items-center gap-3 p-2 text-zinc-400 hover:bg-zinc-800 rounded-lg">
                <Home className="size-5" />
                <span className="hidden md:block text-sm">
                  {t({ en: 'Home', es: 'Inicio' })}
                </span>
              </div>
              <div className="flex items-center gap-3 p-2 text-zinc-400 hover:bg-zinc-800 rounded-lg">
                <Settings className="size-5" />
                <span className="hidden md:block text-sm">
                  {t({ en: 'Settings', es: 'Ajustes' })}
                </span>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 p-4 md:p-6 overflow-hidden">
            {activeTemplate === 'dashboard' ? (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-white">
                    {t({ en: 'Dashboard Overview', es: 'Resumen del Tablero' })}
                  </h2>
                  <Bell className="size-5 text-zinc-400" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <Card variant="surface" padding="sm">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs text-zinc-400">
                          {t({ en: 'Active Users', es: 'Usuarios Activos' })}
                        </p>
                        <p className="text-xl font-bold text-white mt-1">1,234</p>
                      </div>
                      <div className="w-8 h-8 bg-indigo-600/20 rounded-lg" />
                    </div>
                  </Card>
                  <Card variant="surface" padding="sm">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs text-zinc-400">
                          {t({ en: 'Completion', es: 'Completado' })}
                        </p>
                        <p className="text-xl font-bold text-white mt-1">78%</p>
                      </div>
                      <div className="w-8 h-8 bg-purple-600/20 rounded-lg" />
                    </div>
                  </Card>
                </div>
                <Card variant="surface" padding="sm">
                  <p className="text-sm text-zinc-400 mb-2">
                    {t({ en: 'Recent Activity', es: 'Actividad Reciente' })}
                  </p>
                  <div className="space-y-2">
                    {[1, 2].map((i) => (
                      <div key={i} className="flex items-center gap-3 p-2 bg-black/40 rounded-lg">
                        <div className="w-6 h-6 bg-zinc-700 rounded-full" />
                        <div className="flex-1 min-w-0">
                          <div className="h-2 bg-zinc-700 rounded w-3/4" />
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            ) : (
              <div className="space-y-4 max-w-2xl">
                <div>
                  <div className="h-4 bg-zinc-700 rounded w-3/4 mb-2" />
                  <div className="h-3 bg-zinc-800 rounded w-1/4" />
                </div>
                <div className="space-y-2">
                  <div className="h-2 bg-zinc-800 rounded w-full" />
                  <div className="h-2 bg-zinc-800 rounded w-full" />
                  <div className="h-2 bg-zinc-800 rounded w-5/6" />
                </div>
                <div className="h-32 bg-zinc-800 rounded" />
                <div className="space-y-2">
                  <div className="h-2 bg-zinc-800 rounded w-full" />
                  <div className="h-2 bg-zinc-800 rounded w-full" />
                  <div className="h-2 bg-zinc-800 rounded w-4/5" />
                </div>
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Template Switcher */}
      <div className="flex items-center gap-3">
        <p className="text-sm font-medium text-zinc-400">
          {t({ en: 'Switch Template:', es: 'Cambiar Plantilla:' })}
        </p>
        <button
          onClick={() => setActiveTemplate('dashboard')}
          className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
            activeTemplate === 'dashboard'
              ? 'bg-indigo-600 text-white'
              : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'
          }`}
        >
          {t({ en: 'Dashboard', es: 'Tablero' })}
        </button>
        <button
          onClick={() => setActiveTemplate('article')}
          className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
            activeTemplate === 'article'
              ? 'bg-indigo-600 text-white'
              : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'
          }`}
        >
          {t({ en: 'Article', es: 'Artículo' })}
        </button>
      </div>

      {/* Template Composition */}
      <div className="pt-4 border-t border-zinc-800">
        <p className="text-sm font-medium text-zinc-400 mb-3">
          {t({ en: 'Template = Page Layout Pattern:', es: 'Plantilla = Patrón de Layout de Página:' })}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
          <div className="p-3 bg-black/40 rounded-lg border border-zinc-800">
            <p className="font-medium text-zinc-300 mb-2">
              {t({ en: 'Organisms:', es: 'Organismos:' })}
            </p>
            <ul className="space-y-1 text-zinc-400">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                {t({ en: 'Header', es: 'Cabecera' })}
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                {t({ en: 'Sidebar Nav', es: 'Nav Lateral' })}
              </li>
            </ul>
          </div>
          <div className="p-3 bg-black/40 rounded-lg border border-zinc-800">
            <p className="font-medium text-zinc-300 mb-2">
              {t({ en: 'Molecules:', es: 'Moléculas:' })}
            </p>
            <ul className="space-y-1 text-zinc-400">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                {t({ en: 'Stat Cards', es: 'Tarjetas de Estadísticas' })}
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                {t({ en: 'Activity List', es: 'Lista de Actividad' })}
              </li>
            </ul>
          </div>
          <div className="p-3 bg-black/40 rounded-lg border border-zinc-800">
            <p className="font-medium text-zinc-300 mb-2">
              {t({ en: 'Layout:', es: 'Layout:' })}
            </p>
            <ul className="space-y-1 text-zinc-400">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                {t({ en: 'Sidebar + Main', es: 'Lateral + Principal' })}
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                {t({ en: 'Grid System', es: 'Sistema de Grid' })}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
