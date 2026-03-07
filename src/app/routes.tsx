import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router';
import { RootLayout } from './components/layout/RootLayout';
import { Roadmap } from './components/learning/Roadmap';
import { LessonPage } from './components/learning/LessonPage';
import { HeuristicsExplorer } from './components/heuristics/HeuristicsExplorer';
import { ToolingPath } from './components/tools/ToolingPath';
import { RoadmapCanvas } from './components/home/RoadmapCanvas';
import { DesignSystem } from './components/design-system/DesignSystem';
import { WireframeDashboard } from './components/wireframe-templates/WireframeDashboard';
import { WireframeListDetail } from './components/wireframe-templates/WireframeListDetail';
import { WireframeFormWizard } from './components/wireframe-templates/WireframeFormWizard';
import { WireframeSettings } from './components/wireframe-templates/WireframeSettings';
import { WireframeCheckout } from './components/wireframe-templates/WireframeCheckout';
import { WireframeConfirmation } from './components/wireframe-templates/WireframeConfirmation';
import { PedagogicalFramework } from './components/pedagogy/PedagogicalFramework';
import { Hero } from './components/home/Hero';
import { useNavigate } from 'react-router';

// Home component wrapper
function HomePage() {
  const navigate = useNavigate();
  
  return (
    <>
      <Hero onStart={() => navigate('/paths')} />
      <Roadmap />
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