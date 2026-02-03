import React from 'react';
import { Outlet } from 'react-router';
import { Header } from './Header';

export function RootLayout() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Outlet />
    </div>
  );
}