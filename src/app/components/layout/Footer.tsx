
import React from 'react';
import { useLanguage } from './LanguageContext';
import { Linkedin } from 'lucide-react';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-white/10 bg-black py-12 text-zinc-400">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 font-bold text-xl mb-4 text-white">
              <div className="size-6 rounded bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-xs">
                UX
              </div>
              DesignMastery
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              {t({
                en: 'An educational platform dedicated to teaching the principles of User Experience and User Interface design.',
                es: 'Una plataforma educativa dedicada a enseñar los principios del diseño de Experiencia de Usuario e Interfaz de Usuario.'
              })}
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">
              {t({ en: 'References & Sources', es: 'Referencias y Fuentes' })}
            </h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Nielsen Norman Group</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Laws of UX</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Material Design Guidelines</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Apple Human Interface Guidelines</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">
              {t({ en: 'Thought Leaders', es: 'Líderes de Pensamiento' })}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>Don Norman</li>
              <li>Jakob Nielsen</li>
              <li>Jared Spool</li>
              <li>Luke Wroblewski</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <div className="flex items-center gap-2">
            <p>© 2026 AditiDesign. {t({ en: 'Created by', es: 'Creado por' })}</p>
            <a 
              href="https://www.linkedin.com/in/jackiegerber/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1 hover:text-white transition-colors"
            >
              Jackie Gerber UX
              <Linkedin size={14} />
            </a>
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">{t({ en: 'Privacy', es: 'Privacidad' })}</a>
            <a href="#" className="hover:text-white transition-colors">{t({ en: 'Terms', es: 'Términos' })}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
