import React from 'react';
import { useLanguage } from '../../layout/LanguageContext';
import { User, MapPin, Briefcase, Home } from 'lucide-react';

export function UserPersonaCard() {
  const { t } = useLanguage();

  return (
    <div className="space-y-8 mt-8">
      {/* Persona 1: Mary Taylor - Young First-time Homeowner */}
      <div className="w-full max-w-4xl mx-auto bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row text-zinc-800">
        {/* Left Column: Image & Quote */}
        <div className="md:w-5/12 relative bg-gradient-to-br from-fuchsia-600 to-pink-500">
          <div className="absolute inset-0 z-10">
            <img 
              src="https://images.unsplash.com/photo-1758521540968-3af0cc2074a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHdvbWFuJTIwc3R1ZGVudCUyMHBvcnRyYWl0JTIwbmF0dXJhbCUyMGxpZ2h0fGVufDF8fHx8MTc2Nzk5MTE5Nnww&ixlib=rb-4.1.0&q=80&w=1080" 
              alt="Mary Taylor"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-fuchsia-900/80 to-transparent" />
          </div>
          
          <div className="absolute bottom-6 left-6 right-6 z-20">
            <div className="bg-black/60 backdrop-blur-md p-4 rounded-xl border border-white/10 text-white italic text-base md:text-lg leading-relaxed shadow-lg">
              {t({
                en: '"I want a living room like in Pinterest photos, but I need some guidance..."',
                es: '"Quiero una sala como en las fotos de Pinterest, pero necesito orientación..."'
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Details */}
        <div className="md:w-7/12 p-6 md:p-8 space-y-6 bg-white">
          
          {/* Header Info */}
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-zinc-900">Mary Taylor</h2>
              <div className="flex flex-wrap gap-3 md:gap-4 mt-3 text-xs md:text-sm text-zinc-600">
                <div className="flex items-center gap-1"><User className="size-4" /> 26</div>
                <div className="flex items-center gap-1"><MapPin className="size-4" /> Brooklyn</div>
                <div className="flex items-center gap-1"><Briefcase className="size-4" /> {t({ en: 'Student, Waitress', es: 'Estudiante, Mesera' })}</div>
                <div className="flex items-center gap-1"><Home className="size-4" /> {t({ en: 'Married', es: 'Casada' })}</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Bio */}
            <div className="space-y-2">
              <h3 className="text-base md:text-lg font-bold text-fuchsia-700 uppercase tracking-wider border-b-2 border-fuchsia-100 pb-1">Bio</h3>
              <p className="text-xs md:text-sm leading-relaxed text-zinc-600">
                {t({
                  en: 'She lives with her new husband in a rented apartment with three rooms. She has a busy schedule between school and work. They just moved in and are expecting a child in 7 months.',
                  es: 'Vive con su nuevo esposo en un apartamento rentado de tres habitaciones. Tiene un horario ocupado entre la escuela y el trabajo. Acaban de mudarse y esperan un bebé en 7 meses.'
                })}
              </p>
            </div>

            {/* Tech Skills */}
            <div className="space-y-3">
               <h3 className="text-base md:text-lg font-bold text-fuchsia-700 uppercase tracking-wider border-b-2 border-fuchsia-100 pb-1">Tech</h3>
               <div className="space-y-2 text-xs md:text-sm">
                  <SkillBar label={t({ en: 'Internet', es: 'Internet' })} level={4} />
                  <SkillBar label={t({ en: 'Social Media', es: 'Redes Sociales' })} level={5} />
                  <SkillBar label={t({ en: 'Online Shopping', es: 'Compras Online' })} level={4} />
                  <SkillBar label={t({ en: 'Gadgets', es: 'Gadgets' })} level={3} />
               </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
             {/* Wants & Needs */}
             <div className="space-y-2">
              <h3 className="text-base md:text-lg font-bold text-fuchsia-700 uppercase tracking-wider border-b-2 border-fuchsia-100 pb-1">
                {t({ en: 'Wants & Needs', es: 'Necesidades' })}
              </h3>
              <ul className="text-xs md:text-sm space-y-2 text-zinc-600 list-disc list-outside pl-4">
                <li>{t({ 
                  en: 'Design the new apartment with existing furniture and some new additions.',
                  es: 'Diseñar el nuevo apartamento con muebles existentes y algunas adiciones.'
                })}</li>
                <li>{t({ 
                  en: 'Add plants to her home to make it feel more alive.',
                  es: 'Agregar plantas al hogar para hacerlo más acogedor.'
                })}</li>
                <li>{t({ 
                  en: 'Stay within a limited budget.',
                  es: 'Mantenerse dentro de un presupuesto limitado.'
                })}</li>
              </ul>
            </div>

            {/* Frustrations */}
            <div className="space-y-2">
              <h3 className="text-base md:text-lg font-bold text-fuchsia-700 uppercase tracking-wider border-b-2 border-fuchsia-100 pb-1">
                {t({ en: 'Frustrations', es: 'Frustraciones' })}
              </h3>
               <p className="text-xs md:text-sm leading-relaxed text-zinc-600">
                 {t({
                   en: 'Wants to add accessories that will make the living room like the pictures on Pinterest, but she cannot decide what to do and does not do that.',
                   es: 'Quiere agregar accesorios para que la sala se vea como las fotos de Pinterest, pero no puede decidir qué hacer y no lo hace.'
                 })}
              </p>
            </div>
          </div>

           {/* Brands */}
           <div className="space-y-2 pt-2">
              <h3 className="text-base md:text-lg font-bold text-fuchsia-700 uppercase tracking-wider border-b-2 border-fuchsia-100 pb-1">
                {t({ en: 'Favorite Brands', es: 'Marcas Favoritas' })}
              </h3>
              <div className="flex flex-wrap gap-3 md:gap-4 items-center opacity-60 grayscale hover:grayscale-0 transition-all">
                 <span className="font-black text-lg md:text-xl italic tracking-tighter">NIKE</span>
                 <span className="font-bold text-lg md:text-xl">asos</span>
                 <span className="font-bold text-lg md:text-xl text-red-600">NETFLIX</span>
                 <span className="font-bold text-lg md:text-xl">Apple</span>
              </div>
           </div>

        </div>
      </div>

      {/* Persona 2: James Rodriguez - Busy Tech Professional */}
      <div className="w-full max-w-4xl mx-auto bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row text-zinc-800">
        {/* Left Column: Image & Quote */}
        <div className="md:w-5/12 relative bg-gradient-to-br from-blue-600 to-indigo-600">
          <div className="absolute inset-0 z-10">
            <img 
              src="https://images.unsplash.com/photo-1737574821698-862e77f044c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHByb2Zlc3Npb25hbCUyMG1hbiUyMHBvcnRyYWl0JTIwb2ZmaWNlfGVufDF8fHx8MTc3MDE1MTQ0N3ww&ixlib=rb-4.1.0&q=80&w=1080" 
              alt="James Rodriguez"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent" />
          </div>
          
          <div className="absolute bottom-6 left-6 right-6 z-20">
            <div className="bg-black/60 backdrop-blur-md p-4 rounded-xl border border-white/10 text-white italic text-base md:text-lg leading-relaxed shadow-lg">
              {t({
                en: '"I need a home office that looks professional for video calls, but I have no time to shop around..."',
                es: '"Necesito una oficina en casa que se vea profesional para videollamadas, pero no tengo tiempo para buscar..."'
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Details */}
        <div className="md:w-7/12 p-6 md:p-8 space-y-6 bg-white">
          
          {/* Header Info */}
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-zinc-900">James Rodriguez</h2>
              <div className="flex flex-wrap gap-3 md:gap-4 mt-3 text-xs md:text-sm text-zinc-600">
                <div className="flex items-center gap-1"><User className="size-4" /> 34</div>
                <div className="flex items-center gap-1"><MapPin className="size-4" /> {t({ en: 'San Francisco', es: 'San Francisco' })}</div>
                <div className="flex items-center gap-1"><Briefcase className="size-4" /> {t({ en: 'Software Engineer', es: 'Ingeniero de Software' })}</div>
                <div className="flex items-center gap-1"><Home className="size-4" /> {t({ en: 'Single', es: 'Soltero' })}</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Bio */}
            <div className="space-y-2">
              <h3 className="text-base md:text-lg font-bold text-blue-700 uppercase tracking-wider border-b-2 border-blue-100 pb-1">Bio</h3>
              <p className="text-xs md:text-sm leading-relaxed text-zinc-600">
                {t({
                  en: 'Works remotely for a tech startup. Recently bought a condo and needs to set up a functional home office. Has daily video meetings with clients and team. Values efficiency and modern aesthetics.',
                  es: 'Trabaja remotamente para una startup tech. Recientemente compró un condominio y necesita configurar una oficina funcional en casa. Tiene reuniones diarias por video con clientes y equipo. Valora eficiencia y estética moderna.'
                })}
              </p>
            </div>

            {/* Tech Skills */}
            <div className="space-y-3">
               <h3 className="text-base md:text-lg font-bold text-blue-700 uppercase tracking-wider border-b-2 border-blue-100 pb-1">Tech</h3>
               <div className="space-y-2 text-xs md:text-sm">
                  <SkillBar label={t({ en: 'Internet', es: 'Internet' })} level={5} color="blue" />
                  <SkillBar label={t({ en: 'Social Media', es: 'Redes Sociales' })} level={3} color="blue" />
                  <SkillBar label={t({ en: 'Online Shopping', es: 'Compras Online' })} level={5} color="blue" />
                  <SkillBar label={t({ en: 'Gadgets', es: 'Gadgets' })} level={5} color="blue" />
               </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
             {/* Wants & Needs */}
             <div className="space-y-2">
              <h3 className="text-base md:text-lg font-bold text-blue-700 uppercase tracking-wider border-b-2 border-blue-100 pb-1">
                {t({ en: 'Wants & Needs', es: 'Necesidades' })}
              </h3>
              <ul className="text-xs md:text-sm space-y-2 text-zinc-600 list-disc list-outside pl-4">
                <li>{t({ 
                  en: 'Professional-looking home office background for video calls.',
                  es: 'Fondo de oficina en casa profesional para videollamadas.'
                })}</li>
                <li>{t({ 
                  en: 'Ergonomic setup that supports long working hours.',
                  es: 'Configuración ergonómica que soporte largas horas de trabajo.'
                })}</li>
                <li>{t({ 
                  en: 'Quick delivery - needs it set up within 2 weeks.',
                  es: 'Entrega rápida - lo necesita listo en 2 semanas.'
                })}</li>
              </ul>
            </div>

            {/* Frustrations */}
            <div className="space-y-2">
              <h3 className="text-base md:text-lg font-bold text-blue-700 uppercase tracking-wider border-b-2 border-blue-100 pb-1">
                {t({ en: 'Frustrations', es: 'Frustraciones' })}
              </h3>
               <p className="text-xs md:text-sm leading-relaxed text-zinc-600">
                 {t({
                   en: 'Has no time to visit furniture stores. Overwhelmed by too many online options. Needs expert recommendations but doesn\'t want to spend hours researching.',
                   es: 'No tiene tiempo para visitar tiendas de muebles. Abrumado por demasiadas opciones online. Necesita recomendaciones de expertos pero no quiere pasar horas investigando.'
                 })}
              </p>
            </div>
          </div>

           {/* Brands */}
           <div className="space-y-2 pt-2">
              <h3 className="text-base md:text-lg font-bold text-blue-700 uppercase tracking-wider border-b-2 border-blue-100 pb-1">
                {t({ en: 'Favorite Brands', es: 'Marcas Favoritas' })}
              </h3>
              <div className="flex flex-wrap gap-3 md:gap-4 items-center opacity-60 grayscale hover:grayscale-0 transition-all">
                 <span className="font-bold text-lg md:text-xl">Tesla</span>
                 <span className="font-bold text-lg md:text-xl">Apple</span>
                 <span className="font-bold text-lg md:text-xl">Herman Miller</span>
                 <span className="font-bold text-lg md:text-xl">Amazon</span>
              </div>
           </div>

        </div>
      </div>
    </div>
  );
}

function SkillBar({ label, level, color = 'fuchsia' }: { label: string, level: number, color?: string }) {
  const colorClass = color === 'blue' ? 'bg-blue-700' : 'bg-fuchsia-700';
  
  return (
    <div className="flex items-center justify-between">
      <span className="font-medium text-zinc-700">{label}</span>
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((i) => (
          <div 
            key={i} 
            className={`size-3 rounded-full ${i <= level ? colorClass : 'bg-zinc-200'}`}
          />
        ))}
      </div>
    </div>
  );
}
