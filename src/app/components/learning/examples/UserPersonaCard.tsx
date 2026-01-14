
import React from 'react';
import { useLanguage } from '../../layout/LanguageContext';
import { User, MapPin, Briefcase, Home, Star } from 'lucide-react';
import exampleImage from 'figma:asset/086c8cde2172e51f30d49dcc88af01d2cf53aff1.png';

export function UserPersonaCard() {
  const { t } = useLanguage();

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row text-zinc-800">
      {/* Left Column: Image & Quote */}
      <div className="md:w-5/12 relative bg-fuchsia-600">
        <div className="absolute inset-0 z-10">
          <img 
            src="https://images.unsplash.com/photo-1758521540968-3af0cc2074a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHdvbWFuJTIwc3R1ZGVudCUyMHBvcnRyYWl0JTIwbmF0dXJhbCUyMGxpZ2h0fGVufDF8fHx8MTc2Nzk5MTE5Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Mary Taylor"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-fuchsia-900/60 to-transparent" />
        </div>
        <img 
          src={exampleImage} 
          alt="User Persona Portrait" 
          className="w-full h-full object-cover relative z-0"
        />
        
        <div className="absolute bottom-6 left-6 right-6 z-20">
          <div className="bg-black/60 backdrop-blur-md p-4 rounded-xl border border-white/10 text-white italic text-lg leading-relaxed shadow-lg">
            "I want a living room like in Pinterest photos, but I need some guidance..."
          </div>
        </div>
      </div>

      {/* Right Column: Details */}
      <div className="md:w-7/12 p-8 space-y-8 bg-white">
        
        {/* Header Info */}
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-3xl font-bold text-zinc-900">Mary Taylor</h2>
            <div className="flex flex-wrap gap-4 mt-3 text-sm text-zinc-600">
              <div className="flex items-center gap-1"><User className="size-4" /> 26</div>
              <div className="flex items-center gap-1"><MapPin className="size-4" /> Brooklyn</div>
              <div className="flex items-center gap-1"><Briefcase className="size-4" /> Student, Waitress</div>
              <div className="flex items-center gap-1"><Home className="size-4" /> Married</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Bio */}
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-fuchsia-700 uppercase tracking-wider border-b-2 border-fuchsia-100 pb-1">Bio</h3>
            <p className="text-sm leading-relaxed text-zinc-600">
              She lives with her new husband in a rented apartment, with three rooms. She has a busy schedule between school and work. She and her husband now moved into the apartment, and they are expecting a child in 7 months.
            </p>
          </div>

          {/* Tech Skills */}
          <div className="space-y-3">
             <h3 className="text-lg font-bold text-fuchsia-700 uppercase tracking-wider border-b-2 border-fuchsia-100 pb-1">Tech</h3>
             <div className="space-y-2 text-sm">
                <SkillBar label="Internet" level={4} />
                <SkillBar label="Social Media" level={5} />
                <SkillBar label="Online Shopping" level={4} />
                <SkillBar label="Gadgets" level={3} />
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           {/* Wants & Needs */}
           <div className="space-y-2">
            <h3 className="text-lg font-bold text-fuchsia-700 uppercase tracking-wider border-b-2 border-fuchsia-100 pb-1">Wants & Needs</h3>
            <ul className="text-sm space-y-2 text-zinc-600 list-disc list-outside pl-4">
              <li>Design the new apartment with existing furniture and some new additions.</li>
              <li>Add plants to her home to make it feel more alive.</li>
            </ul>
          </div>

          {/* Frustrations */}
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-fuchsia-700 uppercase tracking-wider border-b-2 border-fuchsia-100 pb-1">Frustrations</h3>
             <p className="text-sm leading-relaxed text-zinc-600">
               Wants to add accessories that will make the living room like the pictures on Pinterest, but she cannot decide what to do and does not do that.
            </p>
          </div>
        </div>

         {/* Brands */}
         <div className="space-y-2 pt-2">
            <h3 className="text-lg font-bold text-fuchsia-700 uppercase tracking-wider border-b-2 border-fuchsia-100 pb-1">Favorite Brands</h3>
            <div className="flex gap-4 opacity-60 grayscale hover:grayscale-0 transition-all">
               {/* Simple text placeholders for logos as we don't have SVGs for brands */}
               <span className="font-black text-xl italic tracking-tighter">NIKE</span>
               <span className="font-bold text-xl">asos</span>
               <span className="font-bold text-xl text-red-600">NETFLIX</span>
               <span className="font-bold text-xl">Apple</span>
            </div>
         </div>

      </div>
    </div>
  );
}

function SkillBar({ label, level }: { label: string, level: number }) {
  return (
    <div className="flex items-center justify-between">
      <span className="font-medium text-zinc-700">{label}</span>
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((i) => (
          <div 
            key={i} 
            className={`size-3 rounded-full ${i <= level ? 'bg-fuchsia-700' : 'bg-zinc-200'}`}
          />
        ))}
      </div>
    </div>
  );
}
