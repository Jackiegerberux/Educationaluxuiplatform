import React from 'react';
import { RouterProvider } from 'react-router';
import { LanguageProvider } from './components/layout/LanguageContext';
import { router } from './routes';

export default function App() {
  return (
    <LanguageProvider>
      <RouterProvider router={router} />
    </LanguageProvider>
  );
}
