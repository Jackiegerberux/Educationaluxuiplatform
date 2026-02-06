import React, { useState } from 'react';
import { useLanguage } from '../../layout/LanguageContext';
import { useNavigate } from 'react-router';
import { Pencil, Square, MousePointer2, ArrowRight, ExternalLink, Package } from 'lucide-react';

type FidelityLevel = 'sketch' | 'wireframe' | 'prototype';

export function WireframeFidelityComparison() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [activeFidelity, setActiveFidelity] = useState<FidelityLevel>('wireframe');

  const fidelityLevels = [
    {
      id: 'sketch' as FidelityLevel,
      name: { en: 'Paper Sketch', es: 'Boceto en Papel' },
      icon: Pencil,
      time: { en: '5-10 min', es: '5-10 min' },
      purpose: { 
        en: 'Rapid ideation, exploring multiple concepts quickly',
        es: 'Ideación rápida, explorar múltiples conceptos rápidamente'
      },
      when: { 
        en: 'Early concept exploration, brainstorming sessions',
        es: 'Exploración de conceptos iniciales, sesiones de brainstorming'
      },
      characteristics: [
        { en: 'Hand-drawn, rough', es: 'Dibujado a mano, tosco' },
        { en: 'No digital tools needed', es: 'No requiere herramientas digitales' },
        { en: 'Fast to create & iterate', es: 'Rápido de crear e iterar' },
        { en: 'Low commitment', es: 'Bajo compromiso' }
      ],
      color: 'orange'
    },
    {
      id: 'wireframe' as FidelityLevel,
      name: { en: 'Digital Wireframe', es: 'Wireframe Digital' },
      icon: Square,
      time: { en: '30-60 min', es: '30-60 min' },
      purpose: { 
        en: 'Define layout, structure, and information hierarchy',
        es: 'Definir diseño, estructura y jerarquía de información'
      },
      when: { 
        en: 'After concept selection, before visual design',
        es: 'Después de selección de concepto, antes del diseño visual'
      },
      characteristics: [
        { en: 'Grayscale/low-color', es: 'Escala de grises/poco color' },
        { en: 'Shows content priority', es: 'Muestra prioridad de contenido' },
        { en: 'Static or minimal interaction', es: 'Estático o interacción mínima' },
        { en: 'Focuses on layout, not aesthetics', es: 'Enfoque en diseño, no estética' }
      ],
      color: 'blue'
    },
    {
      id: 'prototype' as FidelityLevel,
      name: { en: 'Interactive Prototype', es: 'Prototipo Interactivo' },
      icon: MousePointer2,
      time: { en: '2-4 hours', es: '2-4 horas' },
      purpose: { 
        en: 'Test flows, interactions, and usability with real users',
        es: 'Probar flujos, interacciones y usabilidad con usuarios reales'
      },
      when: { 
        en: 'Before development, for usability testing',
        es: 'Antes del desarrollo, para pruebas de usabilidad'
      },
      characteristics: [
        { en: 'Clickable/tappable', es: 'Clicable/tocable' },
        { en: 'Shows realistic flows', es: 'Muestra flujos realistas' },
        { en: 'Can be low or high fidelity', es: 'Puede ser baja o alta fidelidad' },
        { en: 'Ready for user testing', es: 'Listo para pruebas de usuario' }
      ],
      color: 'green'
    }
  ];

  const currentLevel = fidelityLevels.find(l => l.id === activeFidelity)!;

  const renderSketchExample = () => (
    <svg viewBox="0 0 400 300" className="w-full h-auto">
      {/* Paper texture */}
      <rect x="0" y="0" width="400" height="300" fill="#fafaf8" />
      
      {/* Hand-drawn header */}
      <path d="M 20 30 L 380 35" stroke="#666" strokeWidth="3" strokeLinecap="round" />
      <path d="M 20 50 L 280 53" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeDasharray="2,3" />
      
      {/* Rough boxes for content */}
      <path d="M 20 80 L 180 80 L 180 150 L 20 150 Z" stroke="#666" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M 30 95 L 170 95" stroke="#999" strokeWidth="1.5" strokeDasharray="3,2" />
      <path d="M 30 110 L 150 110" stroke="#999" strokeWidth="1.5" strokeDasharray="3,2" />
      <path d="M 30 125 L 170 125" stroke="#999" strokeWidth="1.5" strokeDasharray="3,2" />
      
      <path d="M 200 80 L 360 80 L 360 150 L 200 150 Z" stroke="#666" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M 210 95 L 350 95" stroke="#999" strokeWidth="1.5" strokeDasharray="3,2" />
      <path d="M 210 110 L 330 110" stroke="#999" strokeWidth="1.5" strokeDasharray="3,2" />
      
      {/* Button sketch */}
      <ellipse cx="100" cy="200" rx="60" ry="25" stroke="#666" strokeWidth="2" fill="none" />
      <text x="100" y="207" fontSize="14" textAnchor="middle" fill="#666" fontFamily="Comic Sans MS, cursive">CTA</text>
      
      {/* Arrows and notes */}
      <path d="M 280 200 L 320 200" stroke="#e74c3c" strokeWidth="2" markerEnd="url(#arrowhead)" />
      <text x="285" y="220" fontSize="12" fill="#e74c3c" fontFamily="Comic Sans MS, cursive">important!</text>
      
      <defs>
        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#e74c3c" />
        </marker>
      </defs>
    </svg>
  );

  const renderWireframeExample = () => (
    <svg viewBox="0 0 400 300" className="w-full h-auto">
      {/* Clean background */}
      <rect x="0" y="0" width="400" height="300" fill="#ffffff" />
      
      {/* Header */}
      <rect x="20" y="20" width="360" height="40" fill="#e5e5e5" stroke="#999" strokeWidth="1" />
      <rect x="30" y="30" width="80" height="20" fill="#fff" stroke="#666" strokeWidth="1" />
      <rect x="330" y="30" width="40" height="20" fill="#fff" stroke="#666" strokeWidth="1" />
      
      {/* Content boxes */}
      <rect x="20" y="80" width="170" height="90" fill="#f5f5f5" stroke="#999" strokeWidth="1" />
      <rect x="30" y="90" width="150" height="8" fill="#d0d0d0" />
      <rect x="30" y="105" width="130" height="6" fill="#e5e5e5" />
      <rect x="30" y="115" width="150" height="6" fill="#e5e5e5" />
      <rect x="30" y="125" width="120" height="6" fill="#e5e5e5" />
      <rect x="30" y="145" width="70" height="20" fill="#666" />
      <text x="65" y="159" fontSize="10" fill="#fff" fontFamily="Arial, sans-serif" textAnchor="middle">Button</text>
      
      <rect x="210" y="80" width="170" height="90" fill="#f5f5f5" stroke="#999" strokeWidth="1" />
      <rect x="220" y="90" width="150" height="8" fill="#d0d0d0" />
      <rect x="220" y="105" width="140" height="6" fill="#e5e5e5" />
      <rect x="220" y="115" width="130" height="6" fill="#e5e5e5" />
      
      {/* Grid system indicators */}
      <line x1="200" y1="80" x2="200" y2="250" stroke="#3498db" strokeWidth="1" strokeDasharray="4,4" opacity="0.3" />
      
      {/* Footer */}
      <rect x="20" y="260" width="360" height="30" fill="#f0f0f0" stroke="#999" strokeWidth="1" />
    </svg>
  );

  const renderPrototypeExample = () => (
    <svg viewBox="0 0 400 300" className="w-full h-auto">
      {/* Background */}
      <rect x="0" y="0" width="400" height="300" fill="#fafafa" />
      
      {/* Navigation with hover states */}
      <rect x="20" y="20" width="360" height="40" fill="#2c3e50" />
      <text x="40" y="45" fontSize="14" fill="#ecf0f1" fontFamily="Arial, sans-serif" fontWeight="bold">Logo</text>
      <rect x="300" y="30" width="70" height="20" fill="#3498db" rx="4" />
      <text x="335" y="44" fontSize="11" fill="#fff" fontFamily="Arial, sans-serif" textAnchor="middle">Sign In</text>
      
      {/* Interactive card with shadow */}
      <g filter="url(#shadow)">
        <rect x="30" y="80" width="160" height="120" fill="#fff" stroke="#ddd" strokeWidth="1" rx="8" />
        <rect x="40" y="90" width="140" height="60" fill="#e8f4f8" />
        <text x="110" y="125" fontSize="12" fill="#34495e" fontFamily="Arial, sans-serif" textAnchor="middle" fontWeight="bold">Feature Card</text>
        <text x="50" y="165" fontSize="10" fill="#7f8c8d" fontFamily="Arial, sans-serif">Description text goes here</text>
        <text x="50" y="178" fontSize="10" fill="#7f8c8d" fontFamily="Arial, sans-serif">with more details...</text>
      </g>
      
      <g filter="url(#shadow)">
        <rect x="210" y="80" width="160" height="120" fill="#fff" stroke="#ddd" strokeWidth="1" rx="8" />
        <rect x="220" y="90" width="140" height="60" fill="#e8f4f8" />
        <text x="290" y="125" fontSize="12" fill="#34495e" fontFamily="Arial, sans-serif" textAnchor="middle" fontWeight="bold">Feature Card</text>
        <text x="230" y="165" fontSize="10" fill="#7f8c8d" fontFamily="Arial, sans-serif">Description text goes here</text>
        <text x="230" y="178" fontSize="10" fill="#7f8c8d" fontFamily="Arial, sans-serif">with more details...</text>
      </g>
      
      {/* Interactive button with hover effect */}
      <rect x="150" y="230" width="100" height="36" fill="#27ae60" rx="18" />
      <text x="200" y="252" fontSize="13" fill="#fff" fontFamily="Arial, sans-serif" textAnchor="middle" fontWeight="bold">Get Started</text>
      
      {/* Click indicator */}
      <circle cx="200" cy="248" r="30" fill="none" stroke="#27ae60" strokeWidth="2" opacity="0.3">
        <animate attributeName="r" from="20" to="35" dur="1.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" from="0.6" to="0" dur="1.5s" repeatCount="indefinite" />
      </circle>
      
      <defs>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
          <feOffset dx="0" dy="2" result="offsetblur"/>
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.1"/>
          </feComponentTransfer>
          <feMerge> 
            <feMergeNode/>
            <feMergeNode in="SourceGraphic"/> 
          </feMerge>
        </filter>
      </defs>
    </svg>
  );

  return (
    <div className="w-full max-w-6xl mx-auto mt-8 space-y-8">
      {/* Title */}
      <div className="text-center space-y-2">
        <h3 className="text-2xl md:text-3xl font-bold text-white">
          {t({ en: 'Wireframing Fidelity Levels', es: 'Niveles de Fidelidad en Wireframing' })}
        </h3>
        <p className="text-sm md:text-base text-zinc-400 max-w-3xl mx-auto">
          {t({
            en: 'Understanding when to use each fidelity level saves time and ensures you\'re testing the right things at the right time.',
            es: 'Entender cuándo usar cada nivel de fidelidad ahorra tiempo y asegura que estés probando lo correcto en el momento correcto.'
          })}
        </p>
      </div>

      {/* Fidelity Level Tabs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {fidelityLevels.map((level) => {
          const Icon = level.icon;
          const isActive = activeFidelity === level.id;
          const colorClasses = {
            orange: 'border-orange-500/50 bg-gradient-to-br from-orange-950/30 to-red-950/30',
            blue: 'border-blue-500/50 bg-gradient-to-br from-blue-950/30 to-indigo-950/30',
            green: 'border-green-500/50 bg-gradient-to-br from-green-950/30 to-emerald-950/30'
          };

          return (
            <button
              key={level.id}
              onClick={() => setActiveFidelity(level.id)}
              className={`p-4 rounded-2xl border-2 transition-all text-left ${
                isActive
                  ? colorClasses[level.color as keyof typeof colorClasses] + ' shadow-xl scale-105'
                  : 'border-zinc-800 bg-zinc-900/50 hover:border-zinc-700'
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className={`size-10 rounded-lg flex items-center justify-center ${
                  level.color === 'orange' ? 'bg-orange-500/10 text-orange-400' :
                  level.color === 'blue' ? 'bg-blue-500/10 text-blue-400' :
                  'bg-green-500/10 text-green-400'
                }`}>
                  <Icon className="size-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm">{t(level.name)}</h4>
                  <p className="text-xs text-zinc-500">{t(level.time)}</p>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Fidelity Details */}
      <div className="bg-zinc-900 border-2 border-zinc-800 rounded-2xl overflow-hidden">
        {/* Visual Example */}
        <div className="bg-zinc-950 p-8 border-b border-zinc-800">
          <div className="max-w-2xl mx-auto bg-white rounded-lg p-4 shadow-2xl">
            {activeFidelity === 'sketch' && renderSketchExample()}
            {activeFidelity === 'wireframe' && renderWireframeExample()}
            {activeFidelity === 'prototype' && renderPrototypeExample()}
          </div>
        </div>

        {/* Details Grid */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-4">
            <div>
              <h5 className="text-sm font-semibold text-zinc-400 uppercase tracking-wide mb-2">
                {t({ en: 'Purpose', es: 'Propósito' })}
              </h5>
              <p className="text-zinc-300">{t(currentLevel.purpose)}</p>
            </div>

            <div>
              <h5 className="text-sm font-semibold text-zinc-400 uppercase tracking-wide mb-2">
                {t({ en: 'When to Use', es: 'Cuándo Usar' })}
              </h5>
              <p className="text-zinc-300">{t(currentLevel.when)}</p>
            </div>
          </div>

          {/* Right Column */}
          <div>
            <h5 className="text-sm font-semibold text-zinc-400 uppercase tracking-wide mb-2">
              {t({ en: 'Characteristics', es: 'Características' })}
            </h5>
            <ul className="space-y-2">
              {currentLevel.characteristics.map((char, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-zinc-300">
                  <span className={`mt-1 size-1.5 rounded-full shrink-0 ${
                    currentLevel.color === 'orange' ? 'bg-orange-400' :
                    currentLevel.color === 'blue' ? 'bg-blue-400' :
                    'bg-green-400'
                  }`} />
                  <span>{t(char)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Progression Flow */}
      <div className="bg-gradient-to-br from-indigo-950/30 to-purple-950/30 border border-indigo-500/20 rounded-2xl p-6">
        <h4 className="font-bold text-indigo-300 mb-4 flex items-center gap-2">
          <ArrowRight className="size-5" />
          {t({ en: 'The Typical Workflow', es: 'El Flujo de Trabajo Típico' })}
        </h4>
        
        <div className="flex flex-col md:flex-row items-center gap-4 text-center">
          <div className="flex-1 bg-black/40 rounded-xl p-4 border border-orange-500/20">
            <Pencil className="size-8 text-orange-400 mx-auto mb-2" />
            <p className="text-sm text-zinc-300 font-medium">
              {t({ en: '1. Sketch Ideas', es: '1. Bocetos de Ideas' })}
            </p>
            <p className="text-xs text-zinc-500 mt-1">
              {t({ en: 'Explore concepts', es: 'Explorar conceptos' })}
            </p>
          </div>
          
          <ArrowRight className="size-6 text-zinc-600 rotate-90 md:rotate-0 shrink-0" />
          
          <div className="flex-1 bg-black/40 rounded-xl p-4 border border-blue-500/20">
            <Square className="size-8 text-blue-400 mx-auto mb-2" />
            <p className="text-sm text-zinc-300 font-medium">
              {t({ en: '2. Wireframe Structure', es: '2. Estructura Wireframe' })}
            </p>
            <p className="text-xs text-zinc-500 mt-1">
              {t({ en: 'Define layout', es: 'Definir diseño' })}
            </p>
          </div>
          
          <ArrowRight className="size-6 text-zinc-600 rotate-90 md:rotate-0 shrink-0" />
          
          <div className="flex-1 bg-black/40 rounded-xl p-4 border border-green-500/20">
            <MousePointer2 className="size-8 text-green-400 mx-auto mb-2" />
            <p className="text-sm text-zinc-300 font-medium">
              {t({ en: '3. Prototype & Test', es: '3. Prototipo y Prueba' })}
            </p>
            <p className="text-xs text-zinc-500 mt-1">
              {t({ en: 'Validate with users', es: 'Validar con usuarios' })}
            </p>
          </div>
        </div>
      </div>

      {/* Wireframe Kit CTA */}
      <div className="bg-gradient-to-br from-blue-950/30 to-cyan-950/30 border-2 border-blue-500/30 rounded-2xl p-6">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Package className="size-6 text-blue-400" />
              <h4 className="font-bold text-blue-300 text-lg">
                {t({ en: 'Ready-to-Use Wireframe Kit', es: 'Kit Wireframe Listo para Usar' })}
              </h4>
            </div>
            <p className="text-sm text-zinc-300 mb-4">
              {t({
                en: 'Start wireframing immediately with our pre-built low-fidelity components. Includes buttons, forms, cards, navigation, and more.',
                es: 'Comienza a hacer wireframes inmediatamente con nuestros componentes de baja fidelidad pre-construidos. Incluye botones, formularios, tarjetas, navegación y más.'
              })}
            </p>
            <ul className="space-y-1 text-xs text-zinc-400">
              <li className="flex items-center gap-2">
                <span className="size-1 rounded-full bg-blue-400" />
                {t({ en: '50+ wireframe components', es: '50+ componentes wireframe' })}
              </li>
              <li className="flex items-center gap-2">
                <span className="size-1 rounded-full bg-blue-400" />
                {t({ en: 'Copy/paste ready', es: 'Listo para copiar/pegar' })}
              </li>
              <li className="flex items-center gap-2">
                <span className="size-1 rounded-full bg-blue-400" />
                {t({ en: 'Grayscale, low-commitment style', es: 'Estilo en escala de grises, bajo compromiso' })}
              </li>
            </ul>
          </div>
          
          <div className="flex flex-col gap-3">
            <button
              onClick={() => navigate('/design-system', { state: { scrollTo: 'wireframe-kit' } })}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors flex items-center gap-2 shadow-lg"
            >
              {t({ en: 'View Wireframe Kit', es: 'Ver Kit Wireframe' })}
              <ArrowRight className="size-4" />
            </button>
            
            <a
              href="/design-system#wireframe-kit"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded-lg text-sm transition-colors flex items-center gap-2"
            >
              {t({ en: 'Open in New Tab', es: 'Abrir en Nueva Pestaña' })}
              <ExternalLink className="size-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Best Practices */}
      <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6">
        <h5 className="font-bold text-white mb-3 flex items-center gap-2">
          <span className="text-yellow-400">💡</span>
          {t({ en: 'Best Practices', es: 'Mejores Prácticas' })}
        </h5>
        <ul className="space-y-2 text-sm text-zinc-300">
          <li className="flex gap-2">
            <span className="text-yellow-400 shrink-0">•</span>
            <span>{t({
              en: 'Match fidelity to your goal: Low for concepts, Medium for structure, High for testing',
              es: 'Ajusta la fidelidad a tu objetivo: Baja para conceptos, Media para estructura, Alta para pruebas'
            })}</span>
          </li>
          <li className="flex gap-2">
            <span className="text-yellow-400 shrink-0">•</span>
            <span>{t({
              en: 'Use real content instead of Lorem Ipsum to test information hierarchy',
              es: 'Usa contenido real en lugar de Lorem Ipsum para probar la jerarquía de información'
            })}</span>
          </li>
          <li className="flex gap-2">
            <span className="text-yellow-400 shrink-0">•</span>
            <span>{t({
              en: 'Don\'t add color/shadows until you\'ve validated the structure',
              es: 'No agregues color/sombras hasta que hayas validado la estructura'
            })}</span>
          </li>
          <li className="flex gap-2">
            <span className="text-yellow-400 shrink-0">•</span>
            <span>{t({
              en: 'Only prototype the flows you need to test - avoid over-engineering',
              es: 'Solo prototipa los flujos que necesitas probar - evita sobreingeniería'
            })}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
