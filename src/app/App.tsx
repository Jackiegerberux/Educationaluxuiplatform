import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate as useRouterNavigate } from 'react-router-dom';
import { LanguageProvider } from './components/layout/LanguageContext';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/home/Hero';
import { Roadmap } from './components/learning/Roadmap';
import { LessonPreview } from './components/learning/LessonPreview';
import { LessonPage } from './components/learning/LessonPage';
import { HeuristicsExplorer } from './components/heuristics/HeuristicsExplorer';
import { ToolingPath } from './components/tools/ToolingPath';
import { RoadmapCanvas } from './components/home/RoadmapCanvas';
import { ValidationFramework } from './components/validation/ValidationFramework';
import { DesignSystem } from './components/design-system/DesignSystem';
import { WireframeDashboard } from './components/wireframe-templates/WireframeDashboard';
import { WireframeListDetail } from './components/wireframe-templates/WireframeListDetail';
import { WireframeFormWizard } from './components/wireframe-templates/WireframeFormWizard';
import { WireframeSettings } from './components/wireframe-templates/WireframeSettings';
import { WireframeCheckout } from './components/wireframe-templates/WireframeCheckout';
import { WireframeConfirmation } from './components/wireframe-templates/WireframeConfirmation';
import { Topic } from './data/content';

function HomePage({ onNavigate, onSelectTopic, handleStartLearning }: any) {
  return (
    <>
      <Hero onStart={handleStartLearning} />
      <Roadmap onSelectTopic={onSelectTopic} />
      <div id="heuristics-preview" className="py-20 border-t border-white/5">
         <div className="mx-auto max-w-7xl px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Looking for specific rules?</h2>
            <button 
                onClick={() => onNavigate('heuristics')}
                className="text-indigo-400 hover:text-indigo-300 underline underline-offset-4"
            >
                Explore Usability Heuristics &rarr;
            </button>
         </div>
      </div>
    </>
  );
}

function AppContent() {
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

  // Listen for custom navigate events from child components
  React.useEffect(() => {
    const handleCustomNavigate = (e: any) => {
      if (e.detail) {
        handleNavigate(e.detail);
      }
    };
    
    window.addEventListener('navigate', handleCustomNavigate);
    return () => window.removeEventListener('navigate', handleCustomNavigate);
  }, []);

  return (
    <div className="dark min-h-screen bg-black text-zinc-100 font-sans selection:bg-indigo-500/30">
      <Header onNavigate={handleNavigate} currentSection={currentSection} />
      
      <main>
        {currentSection === 'home' && (
          <HomePage 
            onNavigate={handleNavigate} 
            onSelectTopic={setSelectedTopic}
            handleStartLearning={handleStartLearning}
          />
        )}

        {currentSection === 'paths' && (
          <Roadmap onSelectTopic={setSelectedTopic} />
        )}

        {currentSection === 'design-system' && (
          <DesignSystem />
        )}

        {currentSection === 'synthesis' && (
          <RoadmapCanvas onNavigate={handleNavigate} />
        )}

        {currentSection === 'tooling' && (
          <ToolingPath />
        )}

        {currentSection === 'heuristics' && (
          <HeuristicsExplorer />
        )}

        {currentSection === 'validation' && (
          <ValidationFramework />
        )}

        {currentSection === 'wireframe-dashboard' && (
          <WireframeDashboard />
        )}

        {currentSection === 'wireframe-list-detail' && (
          <WireframeListDetail />
        )}

        {currentSection === 'wireframe-form-wizard' && (
          <WireframeFormWizard />
        )}

        {currentSection === 'wireframe-settings' && (
          <WireframeSettings />
        )}

        {currentSection === 'wireframe-checkout' && (
          <WireframeCheckout />
        )}

        {currentSection === 'wireframe-confirmation' && (
          <WireframeConfirmation />
        )}
      </main>

      <Footer />
      
      <LessonPreview 
        topic={selectedTopic} 
        onClose={() => setSelectedTopic(null)} 
      />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppContent />} />
          <Route path="/lesson/:slug" element={<LessonPage />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}