import { createBrowserRouter, Navigate } from 'react-router';
import { RootLayout } from './components/layout/RootLayout';
import { Roadmap } from './components/learning/Roadmap';
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
import { PedagogicalFramework } from './components/pedagogy/PedagogicalFramework';
import { Hero } from './components/home/Hero';
import { Link, useNavigate } from 'react-router';

// Home component wrapper
function HomePage() {
  const navigate = useNavigate();
  
  return (
    <>
      <Hero onStart={() => navigate('/paths')} />
      <Roadmap />
      <div id="heuristics-preview" className="py-20 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Looking for specific rules?</h2>
          <Link 
            to="/heuristics"
            className="text-indigo-400 hover:text-indigo-300 underline underline-offset-4"
          >
            Explore Usability Heuristics &rarr;
          </Link>
        </div>
      </div>
    </>
  );
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'paths',
        element: <Roadmap />,
      },
      {
        path: 'lesson/:slug',
        element: <LessonPage />,
      },
      {
        path: 'pedagogy',
        element: <PedagogicalFramework />,
      },
      {
        path: 'design-system',
        element: <DesignSystem />,
      },
      {
        path: 'synthesis',
        element: <RoadmapCanvas />,
      },
      {
        path: 'tooling',
        element: <ToolingPath />,
      },
      {
        path: 'heuristics',
        element: <HeuristicsExplorer />,
      },
      {
        path: 'validation',
        element: <ValidationFramework />,
      },
      {
        path: 'wireframe-dashboard',
        element: <WireframeDashboard />,
      },
      {
        path: 'wireframe-list-detail',
        element: <WireframeListDetail />,
      },
      {
        path: 'wireframe-form-wizard',
        element: <WireframeFormWizard />,
      },
      {
        path: 'wireframe-settings',
        element: <WireframeSettings />,
      },
      {
        path: 'wireframe-checkout',
        element: <WireframeCheckout />,
      },
      {
        path: 'wireframe-confirmation',
        element: <WireframeConfirmation />,
      },
      {
        path: '*',
        element: <Navigate to="/" replace />,
      },
    ],
  },
]);