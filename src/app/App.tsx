
import React, { useState } from 'react';
import { LanguageProvider } from './components/layout/LanguageContext';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/home/Hero';
import { Roadmap } from './components/learning/Roadmap';
import { TopicDetail } from './components/learning/TopicDetail';
import { HeuristicsExplorer } from './components/heuristics/HeuristicsExplorer';
import { ToolingPath } from './components/tools/ToolingPath';
import { ContentSynthesisMap } from './components/home/ContentSynthesisMap';
import { Topic } from './data/content';

export default function App() {
  const [currentSection, setCurrentSection] = useState('home');
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);

  const handleNavigate = (section: string) => {
    setCurrentSection(section);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleStartLearning = () => {
    setCurrentSection('paths');
    setTimeout(() => {
        const el = document.getElementById('preview');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <LanguageProvider>
      <div className="dark min-h-screen bg-black text-zinc-100 font-sans selection:bg-indigo-500/30">
        <Header onNavigate={handleNavigate} currentSection={currentSection} />
        
        <main>
          {currentSection === 'home' && (
            <>
              <Hero onStart={handleStartLearning} />
              <Roadmap onSelectTopic={setSelectedTopic} />
              <div id="heuristics-preview" className="py-20 border-t border-white/5">
                 <div className="mx-auto max-w-7xl px-4 text-center">
                    <h2 className="text-3xl font-bold mb-8">Looking for specific rules?</h2>
                    <button 
                        onClick={() => handleNavigate('heuristics')}
                        className="text-indigo-400 hover:text-indigo-300 underline underline-offset-4"
                    >
                        Explore Usability Heuristics &rarr;
                    </button>
                 </div>
              </div>
            </>
          )}

          {currentSection === 'paths' && (
            <Roadmap onSelectTopic={setSelectedTopic} />
          )}

          {currentSection === 'synthesis' && (
            <ContentSynthesisMap onNavigate={handleNavigate} />
          )}

          {currentSection === 'tooling' && (
            <ToolingPath />
          )}

          {currentSection === 'heuristics' && (
            <HeuristicsExplorer />
          )}
        </main>

        <Footer />
        
        <TopicDetail 
          topic={selectedTopic} 
          onClose={() => setSelectedTopic(null)} 
        />
      </div>
    </LanguageProvider>
  );
}
