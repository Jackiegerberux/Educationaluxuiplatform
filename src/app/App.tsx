import React, { useEffect, useState } from 'react';
import { RouterProvider } from 'react-router';
import { LanguageProvider } from './components/layout/LanguageContext';
import { ProgressProvider } from './contexts/ProgressContext';
import { router } from './routes';
import { initializeUser } from './utils/initUser';

export default function App() {
  const [isInitializing, setIsInitializing] = useState(true);

  useEffect(() => {
    // Ensure the initial user exists before rendering the app
    const initUser = async () => {
      try {
        await initializeUser();
      } catch (error) {
        console.error('Error initializing user:', error);
      } finally {
        setIsInitializing(false);
      }
    };
    
    initUser();
  }, []);

  // Show loading screen while initializing
  if (isInitializing) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="size-12 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-zinc-400">Initializing...</p>
        </div>
      </div>
    );
  }

  return (
    <LanguageProvider>
      <ProgressProvider>
        <RouterProvider router={router} />
      </ProgressProvider>
    </LanguageProvider>
  );
}