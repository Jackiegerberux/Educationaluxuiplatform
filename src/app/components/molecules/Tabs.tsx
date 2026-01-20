import React, { useState } from 'react';
import { cn } from '@/lib/utils';

export interface TabItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  disabled?: boolean;
}

export interface TabsProps {
  tabs: TabItem[];
  activeTab: string;
  onChange: (tabId: string) => void;
  variant?: 'underline' | 'pills';
  className?: string;
}

export function Tabs({
  tabs,
  activeTab,
  onChange,
  variant = 'underline',
  className
}: TabsProps) {
  if (variant === 'pills') {
    return (
      <div className={cn('inline-flex bg-zinc-800 rounded-lg p-1 border border-zinc-700', className)}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => !tab.disabled && onChange(tab.id)}
            disabled={tab.disabled}
            className={cn(
              'px-4 py-2 rounded-md text-sm font-medium transition-all',
              'focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-zinc-800',
              activeTab === tab.id
                ? 'bg-indigo-600 text-white'
                : 'text-zinc-400 hover:text-white hover:bg-zinc-700',
              tab.disabled && 'opacity-50 cursor-not-allowed'
            )}
          >
            <span className="flex items-center gap-2">
              {tab.icon}
              {tab.label}
            </span>
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className={cn('border-b border-zinc-800', className)}>
      <nav className="flex gap-6" aria-label="Tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => !tab.disabled && onChange(tab.id)}
            disabled={tab.disabled}
            className={cn(
              'px-4 py-3 text-sm font-medium border-b-2 transition-all',
              'focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-black',
              activeTab === tab.id
                ? 'border-indigo-500 text-white'
                : 'border-transparent text-zinc-400 hover:text-white hover:border-zinc-700',
              tab.disabled && 'opacity-50 cursor-not-allowed'
            )}
          >
            <span className="flex items-center gap-2">
              {tab.icon}
              {tab.label}
            </span>
          </button>
        ))}
      </nav>
    </div>
  );
}
