import React from 'react';
import { useLanguage } from './LanguageContext';
import { Linkedin, BookOpen, GraduationCap, Github, Star, Heart } from 'lucide-react';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-white/10 bg-black py-12 text-zinc-400">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 font-bold text-xl mb-4 text-white">
              <div className="size-8 rounded bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-sm font-bold">
                UX
              </div>
              UX Fusion
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              {t({
                en: 'A collaborative UX/UI platform for learning, sharing, and building better experiences together.',
                es: 'Una plataforma colaborativa de UX/UI para aprender, compartir y construir mejores experiencias juntos.'
              })}
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">
              {t({ en: 'Platform', es: 'Plataforma' })}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/#paths" className="hover:text-indigo-400 transition-colors flex items-center gap-2">
                  <BookOpen className="size-3" />
                  {t({ en: 'Learning Paths', es: 'Rutas de Aprendizaje' })}
                </a>
              </li>
              <li>
                <a href="/#pedagogy" className="hover:text-indigo-400 transition-colors flex items-center gap-2">
                  <GraduationCap className="size-3" />
                  {t({ en: 'Pedagogical Framework', es: 'Marco Pedagógico' })}
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">
              {t({ en: 'References & Sources', es: 'Referencias y Fuentes' })}
            </h3>
            <ul className="space-y-2 text-sm">
              <li><a href="https://www.nngroup.com/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">Nielsen Norman Group</a></li>
              <li><a href="https://lawsofux.com/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">Laws of UX</a></li>
              <li><a href="https://m3.material.io/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">Material Design Guidelines</a></li>
              <li><a href="https://developer.apple.com/design/human-interface-guidelines/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">Apple Human Interface Guidelines</a></li>
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

        {/* ── GitHub Star CTA ── */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="bg-gradient-to-r from-indigo-950/40 via-purple-950/30 to-indigo-950/40 border border-indigo-500/20 rounded-xl p-5 md:p-6 flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <div className="flex items-center gap-3 flex-shrink-0">
              <div className="size-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-yellow-500/20 border border-amber-500/30 flex items-center justify-center">
                <Star className="size-6 text-amber-400" />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h4 className="text-sm font-semibold text-white mb-1">
                {t({
                  en: 'Enjoying UX Fusion? Leave a star on GitHub!',
                  es: '¿Te gusta UX Fusion? ¡Dejanos una estrellita en GitHub!'
                })}
              </h4>
              <p className="text-xs text-zinc-500 leading-relaxed">
                {t({
                  en: 'If this platform is helping you learn UX/UI, a GitHub star is the best way to say thanks and help others discover it too.',
                  es: 'Si esta plataforma te está ayudando a aprender UX/UI, una estrella en GitHub es la mejor forma de agradecer y ayudar a que otros la descubran también.'
                })}
              </p>
            </div>
            <a
              href="https://github.com/Jackiegerberux/Educationaluxuiplatform"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-black font-semibold text-sm rounded-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-amber-500/20 flex-shrink-0"
            >
              <Star className="size-4" />
              {t({ en: 'Star on GitHub', es: 'Estrella en GitHub' })}
            </a>
          </div>
        </div>

        {/* ── Bottom Bar: Credits + Socials ── */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-xs">
          {/* Left: Author credit */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
            <p className="text-zinc-500">
              © 2026 UX Fusion.{' '}
              {t({ en: 'Open-source learning platform.', es: 'Plataforma de aprendizaje open-source.' })}
            </p>
            <span className="hidden sm:inline text-zinc-700">|</span>
            <p className="flex items-center gap-1.5 text-zinc-400">
              {t({ en: 'Made with', es: 'Hecho con' })}{' '}
              <Heart className="size-3 text-red-500 fill-red-500 inline" />{' '}
              {t({ en: 'by', es: 'por' })}{' '}
              <a
                href="https://www.linkedin.com/in/jackiegerber"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-semibold hover:text-indigo-400 transition-colors"
              >
                jackiegerber
              </a>
            </p>
          </div>

          {/* Right: Social links */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/jackiegerber"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-blue-400 transition-all text-zinc-400"
            >
              <Linkedin className="size-3.5" />
              <span className="text-xs font-medium">LinkedIn</span>
            </a>
            <a
              href="https://github.com/Jackiegerberux/Educationaluxuiplatform"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-500/40 hover:bg-zinc-800 hover:text-white transition-all text-zinc-400"
            >
              <Github className="size-3.5" />
              <span className="text-xs font-medium">GitHub</span>
            </a>
            <div className="hidden md:flex items-center gap-3 ml-2 text-zinc-600">
              <a href="#" className="hover:text-white transition-colors">{t({ en: 'Privacy', es: 'Privacidad' })}</a>
              <a href="#" className="hover:text-white transition-colors">{t({ en: 'Terms', es: 'Términos' })}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}