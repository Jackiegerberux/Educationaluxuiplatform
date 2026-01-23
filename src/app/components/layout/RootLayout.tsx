import React from 'react';
import { Outlet } from 'react-router';
import { Header } from './Header';
import { Footer } from './Footer';

export function RootLayout() {
  return (
    <div className="dark min-h-screen bg-black text-zinc-100 font-sans selection:bg-indigo-500/30">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
