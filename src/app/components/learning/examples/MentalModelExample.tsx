import React from 'react';
import { useLanguage } from '../../layout/LanguageContext';
import mentalModelImg from 'figma:asset/2f1f7513a4027664f136ff25911bbd48701d21cf.png';

export function MentalModelExample() {
  const { t } = useLanguage();

  return (
    <div className="bg-white rounded-xl overflow-hidden border border-zinc-200 shadow-lg">
      <div className="p-1 bg-zinc-100 border-b border-zinc-200 flex items-center justify-between px-4 py-2">
        <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
            {t({ en: 'Perspective & Interpretation', es: 'Perspectiva e Interpretación' })}
        </span>
      </div>
      <div className="p-8 flex flex-col items-center">
        <div className="max-w-md w-full bg-white relative">
            <img 
                src={mentalModelImg} 
                alt="Mental Model Illustration - Two people seeing different numbers (6 and 9) from the same object" 
                className="w-full h-auto mix-blend-multiply opacity-90"
            />
        </div>
        <div className="mt-8 text-center max-w-lg">
            <h4 className="text-lg font-bold text-zinc-900 mb-2">
                {t({ en: 'The Gap of Understanding', es: 'La Brecha de Entendimiento' })}
            </h4>
            <p className="text-sm text-zinc-600 leading-relaxed">
                {t({
                    en: 'What you design (the system image) is interpreted through the user\'s mental model. If their model doesn\'t match your logic, errors occur.',
                    es: 'Lo que diseñas (la imagen del sistema) se interpreta a través del modelo mental del usuario. Si su modelo no coincide con tu lógica, ocurren errores.'
                })}
            </p>
        </div>
      </div>
    </div>
  );
}
