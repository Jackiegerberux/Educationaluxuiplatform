import React from 'react';
import { useLanguage } from '../../layout/LanguageContext';
import { Eye, Ear, MessageSquare, Brain, Smile, Frown } from 'lucide-react';

export function EmpathyMapExample() {
  const { t } = useLanguage();

  return (
    <div className="w-full max-w-5xl mx-auto mt-8 space-y-6">
      {/* Title & Description */}
      <div className="text-center space-y-2 mb-6">
        <h3 className="text-2xl md:text-3xl font-bold text-zinc-900">
          {t({ en: 'Empathy Map: Mary Taylor', es: 'Mapa de Empatía: Mary Taylor' })}
        </h3>
        <p className="text-sm md:text-base text-zinc-600 max-w-3xl mx-auto">
          {t({
            en: 'An empathy map helps us understand Mary\'s experience from her perspective. This validates our proto-persona by exploring what she thinks, feels, sees, hears, says, and does.',
            es: 'Un mapa de empatía nos ayuda a entender la experiencia de Mary desde su perspectiva. Esto valida nuestra proto-persona explorando qué piensa, siente, ve, escucha, dice y hace.'
          })}
        </p>
      </div>

      {/* Empathy Map Grid */}
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-zinc-100">
        
        {/* Header - User in Center */}
        <div className="bg-gradient-to-br from-fuchsia-500 to-pink-500 p-8 text-white text-center">
          <div className="inline-flex items-center justify-center size-20 bg-white/20 backdrop-blur-sm rounded-full mb-3">
            <span className="text-4xl">👤</span>
          </div>
          <h4 className="text-2xl font-bold">Mary Taylor</h4>
          <p className="text-sm opacity-90 mt-1">
            {t({ en: '26 • Student & Waitress • Brooklyn', es: '26 • Estudiante y Mesera • Brooklyn' })}
          </p>
        </div>

        {/* 4 Quadrants Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-zinc-200">
          
          {/* THINKS & FEELS */}
          <div className="p-6 md:p-8 space-y-4 bg-purple-50/50">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center size-10 bg-purple-600 rounded-lg">
                <Brain className="size-5 text-white" />
              </div>
              <h5 className="text-lg md:text-xl font-bold text-purple-900">
                {t({ en: 'Thinks & Feels', es: 'Piensa y Siente' })}
              </h5>
            </div>
            <ul className="space-y-3 text-sm md:text-base text-zinc-700">
              <li className="flex gap-2">
                <span className="text-purple-600 font-bold">•</span>
                <span>{t({ 
                  en: '"I want our home to feel cozy and Pinterest-worthy"',
                  es: '"Quiero que nuestro hogar se sienta acogedor y digno de Pinterest"'
                })}</span>
              </li>
              <li className="flex gap-2">
                <span className="text-purple-600 font-bold">•</span>
                <span>{t({ 
                  en: 'Worried about spending too much before baby arrives',
                  es: 'Preocupada por gastar demasiado antes de que llegue el bebé'
                })}</span>
              </li>
              <li className="flex gap-2">
                <span className="text-purple-600 font-bold">•</span>
                <span>{t({ 
                  en: 'Overwhelmed by too many design options',
                  es: 'Abrumada por demasiadas opciones de diseño'
                })}</span>
              </li>
              <li className="flex gap-2">
                <span className="text-purple-600 font-bold">•</span>
                <span>{t({ 
                  en: 'Excited about creating a welcoming space for the baby',
                  es: 'Emocionada por crear un espacio acogedor para el bebé'
                })}</span>
              </li>
            </ul>
          </div>

          {/* SEES */}
          <div className="p-6 md:p-8 space-y-4 bg-blue-50/50">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center size-10 bg-blue-600 rounded-lg">
                <Eye className="size-5 text-white" />
              </div>
              <h5 className="text-lg md:text-xl font-bold text-blue-900">
                {t({ en: 'Sees', es: 'Ve' })}
              </h5>
            </div>
            <ul className="space-y-3 text-sm md:text-base text-zinc-700">
              <li className="flex gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>{t({ 
                  en: 'Beautiful home designs on Pinterest and Instagram',
                  es: 'Diseños hermosos de hogar en Pinterest e Instagram'
                })}</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>{t({ 
                  en: 'Friends posting their decorated apartments on social media',
                  es: 'Amigas publicando sus apartamentos decorados en redes sociales'
                })}</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>{t({ 
                  en: 'IKEA and Target ads with affordable furniture',
                  es: 'Anuncios de IKEA y Target con muebles asequibles'
                })}</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>{t({ 
                  en: 'Her empty apartment walls that need decorating',
                  es: 'Las paredes vacías de su apartamento que necesitan decoración'
                })}</span>
              </li>
            </ul>
          </div>

          {/* SAYS & DOES */}
          <div className="p-6 md:p-8 space-y-4 bg-green-50/50">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center size-10 bg-green-600 rounded-lg">
                <MessageSquare className="size-5 text-white" />
              </div>
              <h5 className="text-lg md:text-xl font-bold text-green-900">
                {t({ en: 'Says & Does', es: 'Dice y Hace' })}
              </h5>
            </div>
            <ul className="space-y-3 text-sm md:text-base text-zinc-700">
              <li className="flex gap-2">
                <span className="text-green-600 font-bold">•</span>
                <span>{t({ 
                  en: '"I need help deciding what to buy"',
                  es: '"Necesito ayuda para decidir qué comprar"'
                })}</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-600 font-bold">•</span>
                <span>{t({ 
                  en: 'Saves Pinterest pins but rarely acts on them',
                  es: 'Guarda pines de Pinterest pero rara vez actúa sobre ellos'
                })}</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-600 font-bold">•</span>
                <span>{t({ 
                  en: 'Asks friends for recommendations on home decor',
                  es: 'Pide recomendaciones a amigas sobre decoración del hogar'
                })}</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-600 font-bold">•</span>
                <span>{t({ 
                  en: 'Browses online stores late at night after work',
                  es: 'Navega tiendas online tarde en la noche después del trabajo'
                })}</span>
              </li>
            </ul>
          </div>

          {/* HEARS */}
          <div className="p-6 md:p-8 space-y-4 bg-orange-50/50">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center size-10 bg-orange-600 rounded-lg">
                <Ear className="size-5 text-white" />
              </div>
              <h5 className="text-lg md:text-xl font-bold text-orange-900">
                {t({ en: 'Hears', es: 'Escucha' })}
              </h5>
            </div>
            <ul className="space-y-3 text-sm md:text-base text-zinc-700">
              <li className="flex gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span>{t({ 
                  en: 'Husband saying "We should save money for the baby"',
                  es: 'Esposo diciendo "Deberíamos ahorrar dinero para el bebé"'
                })}</span>
              </li>
              <li className="flex gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span>{t({ 
                  en: 'Friends: "Check out this app/website for home ideas"',
                  es: 'Amigas: "Mira esta app/sitio web para ideas de hogar"'
                })}</span>
              </li>
              <li className="flex gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span>{t({ 
                  en: 'Interior design influencers on TikTok/YouTube',
                  es: 'Influencers de diseño de interiores en TikTok/YouTube'
                })}</span>
              </li>
              <li className="flex gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span>{t({ 
                  en: 'Family: "You need to make it feel like home"',
                  es: 'Familia: "Necesitas hacer que se sienta como hogar"'
                })}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Section - Pains & Gains */}
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-zinc-200 border-t-4 border-zinc-200">
          
          {/* PAINS */}
          <div className="p-6 md:p-8 space-y-4 bg-red-50/50">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center size-10 bg-red-600 rounded-lg">
                <Frown className="size-5 text-white" />
              </div>
              <h5 className="text-lg md:text-xl font-bold text-red-900">
                {t({ en: 'Pains (Frustrations)', es: 'Dolores (Frustraciones)' })}
              </h5>
            </div>
            <ul className="space-y-3 text-sm md:text-base text-zinc-700">
              <li className="flex gap-2">
                <span className="text-red-600 font-bold">•</span>
                <span>{t({ 
                  en: 'Paralysis by analysis - can\'t decide what to buy',
                  es: 'Parálisis por análisis - no puede decidir qué comprar'
                })}</span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-600 font-bold">•</span>
                <span>{t({ 
                  en: 'Limited budget but expensive taste',
                  es: 'Presupuesto limitado pero gusto caro'
                })}</span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-600 font-bold">•</span>
                <span>{t({ 
                  en: 'No time to shop in physical stores',
                  es: 'Sin tiempo para comprar en tiendas físicas'
                })}</span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-600 font-bold">•</span>
                <span>{t({ 
                  en: 'Unsure if items will match existing furniture',
                  es: 'Insegura si los artículos combinarán con muebles existentes'
                })}</span>
              </li>
            </ul>
          </div>

          {/* GAINS */}
          <div className="p-6 md:p-8 space-y-4 bg-emerald-50/50">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center size-10 bg-emerald-600 rounded-lg">
                <Smile className="size-5 text-white" />
              </div>
              <h5 className="text-lg md:text-xl font-bold text-emerald-900">
                {t({ en: 'Gains (Desires)', es: 'Ganancias (Deseos)' })}
              </h5>
            </div>
            <ul className="space-y-3 text-sm md:text-base text-zinc-700">
              <li className="flex gap-2">
                <span className="text-emerald-600 font-bold">•</span>
                <span>{t({ 
                  en: 'A home that looks Pinterest-worthy on a budget',
                  es: 'Un hogar que se vea digno de Pinterest con presupuesto'
                })}</span>
              </li>
              <li className="flex gap-2">
                <span className="text-emerald-600 font-bold">•</span>
                <span>{t({ 
                  en: 'Expert guidance without hiring an interior designer',
                  es: 'Guía experta sin contratar diseñador de interiores'
                })}</span>
              </li>
              <li className="flex gap-2">
                <span className="text-emerald-600 font-bold">•</span>
                <span>{t({ 
                  en: 'Confidence that purchases will look good together',
                  es: 'Confianza de que las compras se verán bien juntas'
                })}</span>
              </li>
              <li className="flex gap-2">
                <span className="text-emerald-600 font-bold">•</span>
                <span>{t({ 
                  en: 'Quick, easy shopping without visiting multiple stores',
                  es: 'Compras rápidas y fáciles sin visitar múltiples tiendas'
                })}</span>
              </li>
            </ul>
          </div>

        </div>

      </div>

      {/* Validation Note */}
      <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-lg">
        <h5 className="font-bold text-amber-900 mb-2 flex items-center gap-2">
          <span className="text-xl">💡</span>
          {t({ en: 'Validation Insight', es: 'Insight de Validación' })}
        </h5>
        <p className="text-sm md:text-base text-amber-900/80">
          {t({
            en: 'This empathy map validates our proto-persona by revealing that Mary\'s main barrier isn\'t lack of options—it\'s decision paralysis and budget constraints. This insight suggests our app should focus on curated recommendations and budget-friendly bundles rather than overwhelming her with endless choices.',
            es: 'Este mapa de empatía valida nuestra proto-persona al revelar que la principal barrera de Mary no es la falta de opciones—es la parálisis de decisión y restricciones de presupuesto. Este insight sugiere que nuestra app debe enfocarse en recomendaciones curadas y paquetes económicos en lugar de abrumarla con opciones infinitas.'
          })}
        </p>
      </div>
    </div>
  );
}
