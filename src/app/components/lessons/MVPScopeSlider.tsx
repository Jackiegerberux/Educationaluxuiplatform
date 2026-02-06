import React, { useState } from 'react';
import { useLanguage } from '../layout/LanguageContext';
import { motion } from 'motion/react';
import { AlertTriangle, CheckCircle2, TrendingUp, Clock, DollarSign, Zap } from 'lucide-react';

type MVPLevel = 'broken' | 'minimal' | 'optimal' | 'over-engineered';

interface MVPLevelData {
  id: MVPLevel;
  label: { en: string; es: string };
  range: [number, number];
  color: string;
  icon: React.ReactNode;
  description: { en: string; es: string };
  features: { en: string[]; es: string[] };
  time: { en: string; es: string };
  cost: { en: string; es: string };
  risk: { en: string; es: string };
  example: { en: string; es: string };
}

const MVPScopeSlider: React.FC = () => {
  const { language } = useLanguage();
  const t = (text: { en: string; es: string }) => text[language];

  const [sliderValue, setSliderValue] = useState(50); // Start at "optimal"

  const levels: MVPLevelData[] = [
    {
      id: 'broken',
      label: { en: 'Half-Broken Product', es: 'Producto Medio Roto' },
      range: [0, 25],
      color: 'red',
      icon: <AlertTriangle className="size-6" />,
      description: {
        en: 'Too minimal - missing critical functionality that makes the product unusable.',
        es: 'Demasiado mínimo - falta funcionalidad crítica que hace el producto inutilizable.'
      },
      features: {
        en: ['Incomplete core flow', 'No error handling', 'Confusing UX', 'Missing critical features'],
        es: ['Flujo principal incompleto', 'Sin manejo de errores', 'UX confusa', 'Faltan características críticas']
      },
      time: { en: '1-2 weeks', es: '1-2 semanas' },
      cost: { en: 'Very Low ($)', es: 'Muy Bajo ($)' },
      risk: { en: 'High - May damage brand', es: 'Alto - Puede dañar la marca' },
      example: {
        en: 'E-commerce checkout without payment processing',
        es: 'Checkout de e-commerce sin procesamiento de pagos'
      }
    },
    {
      id: 'minimal',
      label: { en: 'True MVP', es: 'MVP Verdadero' },
      range: [26, 50],
      color: 'yellow',
      icon: <Zap className="size-6" />,
      description: {
        en: 'Minimum functionality to test the core hypothesis. Simple but functional.',
        es: 'Funcionalidad mínima para probar la hipótesis central. Simple pero funcional.'
      },
      features: {
        en: ['Core feature only', 'Basic UX', 'Essential error handling', 'Manual processes OK'],
        es: ['Solo característica principal', 'UX básica', 'Manejo de errores esencial', 'Procesos manuales OK']
      },
      time: { en: '2-4 weeks', es: '2-4 semanas' },
      cost: { en: 'Low ($$)', es: 'Bajo ($$)' },
      risk: { en: 'Low - Fast validation', es: 'Bajo - Validación rápida' },
      example: {
        en: 'Dropbox video demo instead of building software',
        es: 'Video demo de Dropbox en lugar de construir software'
      }
    },
    {
      id: 'optimal',
      label: { en: 'Optimal Scope', es: 'Alcance Óptimo' },
      range: [51, 75],
      color: 'green',
      icon: <CheckCircle2 className="size-6" />,
      description: {
        en: 'Best balance - validates hypothesis with good UX. The sweet spot for most MVPs.',
        es: 'Mejor balance - valida hipótesis con buena UX. El punto óptimo para la mayoría de MVPs.'
      },
      features: {
        en: ['Core feature + 1-2 supporting', 'Polished UX', 'Good error handling', 'Some automation'],
        es: ['Característica principal + 1-2 de soporte', 'UX pulida', 'Buen manejo de errores', 'Algo de automatización']
      },
      time: { en: '4-8 weeks', es: '4-8 semanas' },
      cost: { en: 'Medium ($$$)', es: 'Medio ($$$)' },
      risk: { en: 'Balanced - Reliable validation', es: 'Balanceado - Validación confiable' },
      example: {
        en: 'Instagram: Photo sharing + filters only (no video, stories, DMs)',
        es: 'Instagram: Solo compartir fotos + filtros (sin video, stories, DMs)'
      }
    },
    {
      id: 'over-engineered',
      label: { en: 'Over-Engineered', es: 'Sobre-Ingeniería' },
      range: [76, 100],
      color: 'orange',
      icon: <TrendingUp className="size-6" />,
      description: {
        en: 'Too many features before validation. Wasting time and money on unproven assumptions.',
        es: 'Demasiadas características antes de validar. Desperdiciando tiempo y dinero en suposiciones no probadas.'
      },
      features: {
        en: ['Many nice-to-have features', 'Over-polished UI', 'Premature optimization', 'Complex architecture'],
        es: ['Muchas características no esenciales', 'UI sobre-pulida', 'Optimización prematura', 'Arquitectura compleja']
      },
      time: { en: '3-6 months', es: '3-6 meses' },
      cost: { en: 'Very High ($$$$)', es: 'Muy Alto ($$$$)' },
      risk: { en: 'High - Delayed validation', es: 'Alto - Validación retrasada' },
      example: {
        en: 'Building a full social network before knowing if users want to connect',
        es: 'Construir una red social completa antes de saber si los usuarios quieren conectarse'
      }
    }
  ];

  const getCurrentLevel = (): MVPLevelData => {
    return levels.find(level => 
      sliderValue >= level.range[0] && sliderValue <= level.range[1]
    ) || levels[2];
  };

  const currentLevel = getCurrentLevel();

  const getColorClasses = (color: string) => {
    const colors = {
      red: {
        bg: 'bg-red-950/20',
        border: 'border-red-500/30',
        text: 'text-red-400',
        button: 'bg-red-600',
        gradient: 'from-red-600 to-orange-600'
      },
      yellow: {
        bg: 'bg-yellow-950/20',
        border: 'border-yellow-500/30',
        text: 'text-yellow-400',
        button: 'bg-yellow-600',
        gradient: 'from-yellow-600 to-amber-600'
      },
      green: {
        bg: 'bg-green-950/20',
        border: 'border-green-500/30',
        text: 'text-green-400',
        button: 'bg-green-600',
        gradient: 'from-green-600 to-emerald-600'
      },
      orange: {
        bg: 'bg-orange-950/20',
        border: 'border-orange-500/30',
        text: 'text-orange-400',
        button: 'bg-orange-600',
        gradient: 'from-orange-600 to-red-600'
      }
    };
    return colors[color as keyof typeof colors] || colors.green;
  };

  const colorClasses = getColorClasses(currentLevel.color);

  return (
    <div className="w-full max-w-5xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center space-y-2">
        <h3 className="text-2xl font-bold text-gray-900">
          {t({ en: 'MVP Scope Calculator', es: 'Calculadora de Alcance MVP' })}
        </h3>
        <p className="text-gray-600">
          {t({ 
            en: 'Find the sweet spot between too minimal and over-engineered', 
            es: 'Encuentra el punto óptimo entre demasiado mínimo y sobre-ingeniería' 
          })}
        </p>
      </div>

      {/* Slider */}
      <div className="bg-white border-2 border-gray-200 rounded-2xl p-8">
        <div className="space-y-6">
          {/* Current Level Display */}
          <motion.div
            key={currentLevel.id}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className={`${colorClasses.bg} border-2 ${colorClasses.border} rounded-xl p-6`}
          >
            <div className="flex items-center gap-4 mb-3">
              <div className={`${colorClasses.text}`}>
                {currentLevel.icon}
              </div>
              <div>
                <h4 className={`text-xl font-bold ${colorClasses.text}`}>
                  {t(currentLevel.label)}
                </h4>
                <p className="text-sm text-gray-600">
                  {t(currentLevel.description)}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Slider Track with Zones */}
          <div className="relative">
            {/* Zone Labels */}
            <div className="flex justify-between mb-2 text-xs font-semibold">
              <span className="text-red-600">
                {t({ en: 'Too Little', es: 'Muy Poco' })}
              </span>
              <span className="text-green-600">
                {t({ en: 'Just Right', es: 'Justo' })}
              </span>
              <span className="text-orange-600">
                {t({ en: 'Too Much', es: 'Demasiado' })}
              </span>
            </div>

            {/* Gradient Track */}
            <div className="relative h-3 rounded-full bg-gradient-to-r from-red-300 via-yellow-300 via-green-300 to-orange-300 mb-4">
              {/* Zone Markers */}
              <div className="absolute top-0 left-1/4 w-px h-3 bg-white/50"></div>
              <div className="absolute top-0 left-1/2 w-px h-3 bg-white/50"></div>
              <div className="absolute top-0 left-3/4 w-px h-3 bg-white/50"></div>
            </div>

            {/* Slider Input */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderValue}
              onChange={(e) => setSliderValue(parseInt(e.target.value))}
              className="w-full h-8 appearance-none bg-transparent cursor-pointer relative -mt-7"
              style={{
                background: 'transparent',
              }}
            />
            <style>{`
              input[type='range']::-webkit-slider-thumb {
                appearance: none;
                width: 28px;
                height: 28px;
                border-radius: 50%;
                background: linear-gradient(135deg, ${currentLevel.color === 'red' ? '#dc2626, #ea580c' : currentLevel.color === 'yellow' ? '#ca8a04, #d97706' : currentLevel.color === 'green' ? '#16a34a, #059669' : '#ea580c, #dc2626'});
                cursor: pointer;
                border: 3px solid white;
                box-shadow: 0 2px 8px rgba(0,0,0,0.2);
              }
              input[type='range']::-moz-range-thumb {
                width: 28px;
                height: 28px;
                border-radius: 50%;
                background: linear-gradient(135deg, ${currentLevel.color === 'red' ? '#dc2626, #ea580c' : currentLevel.color === 'yellow' ? '#ca8a04, #d97706' : currentLevel.color === 'green' ? '#16a34a, #059669' : '#ea580c, #dc2626'});
                cursor: pointer;
                border: 3px solid white;
                box-shadow: 0 2px 8px rgba(0,0,0,0.2);
              }
            `}</style>

            {/* Value Display */}
            <div className="text-center mt-2">
              <span className="text-2xl font-bold text-gray-900">{sliderValue}%</span>
              <span className="text-sm text-gray-500 ml-2">
                {t({ en: 'scope complexity', es: 'complejidad del alcance' })}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Details Cards */}
      <motion.div
        key={currentLevel.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid md:grid-cols-2 gap-6"
      >
        {/* Features */}
        <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
          <h5 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <CheckCircle2 className="size-5 text-blue-600" />
            {t({ en: 'Typical Features', es: 'Características Típicas' })}
          </h5>
          <ul className="space-y-2">
            {t(currentLevel.features).map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                <span className={`mt-1 size-1.5 rounded-full ${colorClasses.button} flex-shrink-0`}></span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Metrics */}
        <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
          <h5 className="font-semibold text-gray-900 mb-4">
            {t({ en: 'Key Metrics', es: 'Métricas Clave' })}
          </h5>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Clock className="size-5 text-blue-600" />
              <div>
                <p className="text-xs text-gray-500">
                  {t({ en: 'Time to Build', es: 'Tiempo de Construcción' })}
                </p>
                <p className="font-semibold text-gray-900">{t(currentLevel.time)}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <DollarSign className="size-5 text-green-600" />
              <div>
                <p className="text-xs text-gray-500">
                  {t({ en: 'Estimated Cost', es: 'Costo Estimado' })}
                </p>
                <p className="font-semibold text-gray-900">{t(currentLevel.cost)}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <AlertTriangle className="size-5 text-orange-600" />
              <div>
                <p className="text-xs text-gray-500">
                  {t({ en: 'Risk Level', es: 'Nivel de Riesgo' })}
                </p>
                <p className="font-semibold text-gray-900">{t(currentLevel.risk)}</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Example */}
      <motion.div
        key={currentLevel.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className={`${colorClasses.bg} border-2 ${colorClasses.border} rounded-xl p-6`}
      >
        <h5 className="font-semibold text-gray-900 mb-2">
          {t({ en: 'Real-World Example', es: 'Ejemplo del Mundo Real' })}
        </h5>
        <p className="text-sm text-gray-700 italic">
          "{t(currentLevel.example)}"
        </p>
      </motion.div>

      {/* Recommendation */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-xl p-6">
        <h5 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
          <Zap className="size-5" />
          {t({ en: 'Pro Tip', es: 'Consejo Pro' })}
        </h5>
        <p className="text-sm text-blue-800">
          {currentLevel.id === 'optimal' || currentLevel.id === 'minimal' ? (
            t({
              en: '✅ This is the ideal range for most MVPs. You can validate your hypothesis without over-investing.',
              es: '✅ Este es el rango ideal para la mayoría de MVPs. Puedes validar tu hipótesis sin sobre-invertir.'
            })
          ) : currentLevel.id === 'broken' ? (
            t({
              en: '⚠️ Add more core functionality. Users need a complete (though simple) experience to give meaningful feedback.',
              es: '⚠️ Agrega más funcionalidad principal. Los usuarios necesitan una experiencia completa (aunque simple) para dar retroalimentación significativa.'
            })
          ) : (
            t({
              en: '⚠️ Reduce scope. You\'re building features before validating if anyone wants them. Start simpler.',
              es: '⚠️ Reduce el alcance. Estás construyendo características antes de validar si alguien las quiere. Empieza más simple.'
            })
          )}
        </p>
      </div>

      {/* Quick Actions */}
      <div className="flex gap-3 justify-center flex-wrap">
        <button
          onClick={() => setSliderValue(15)}
          className="px-4 py-2 bg-red-100 hover:bg-red-200 text-red-700 text-sm font-medium rounded-lg transition-colors"
        >
          {t({ en: 'Too Minimal', es: 'Muy Mínimo' })}
        </button>
        <button
          onClick={() => setSliderValue(38)}
          className="px-4 py-2 bg-yellow-100 hover:bg-yellow-200 text-yellow-700 text-sm font-medium rounded-lg transition-colors"
        >
          {t({ en: 'True MVP', es: 'MVP Verdadero' })}
        </button>
        <button
          onClick={() => setSliderValue(63)}
          className="px-4 py-2 bg-green-100 hover:bg-green-200 text-green-700 text-sm font-medium rounded-lg transition-colors"
        >
          {t({ en: 'Optimal ✨', es: 'Óptimo ✨' })}
        </button>
        <button
          onClick={() => setSliderValue(88)}
          className="px-4 py-2 bg-orange-100 hover:bg-orange-200 text-orange-700 text-sm font-medium rounded-lg transition-colors"
        >
          {t({ en: 'Over-Built', es: 'Sobre-Construido' })}
        </button>
      </div>
    </div>
  );
};

export default MVPScopeSlider;
