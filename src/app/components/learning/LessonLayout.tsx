import React, { ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Menu } from 'lucide-react';
import { EnhancedTOC } from '../shared/EnhancedTOC';

interface LessonLayoutProps {
  children: ReactNode;
  sections: { id: string; label: string; icon: any }[];
}

/**
 * LessonLayout - Reusable layout component for all lesson pages
 * 
 * Features:
 * - 2-column grid layout (sidebar + main content)
 * - Sticky sidebar on desktop with IntersectionObserver
 * - Mobile: floating "Contents" button with drawer
 * - Back to top button
 * - Max content width: 800px centered
 * - Max container width: 1480px
 * 
 * @param children - Main lesson content
 * @param sections - Array of TOC sections with id, label, and icon
 */
export function LessonLayout({
  children,
  sections,
}: LessonLayoutProps) {
  return (
    <div className="max-w-[1480px] mx-auto px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12">
        {/* Sidebar - Desktop sticky, Mobile drawer with EnhancedTOC */}
        <EnhancedTOC sections={sections} />

        {/* Main Content - Max width 800px, normal scroll */}
        <main className="max-w-[800px]">
          {children}
        </main>
      </div>
    </div>
  );
}