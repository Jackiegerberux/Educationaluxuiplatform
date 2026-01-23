import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Menu, ArrowUp } from 'lucide-react';

interface TOCSection {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface EnhancedTOCProps {
  sections: TOCSection[];
  className?: string;
}

/**
 * Enhanced Table of Contents Component
 * 
 * Features:
 * - Sticky sidebar on desktop (position: sticky, top: 96px below header)
 * - Mobile: floating "Contents" button opens right-side drawer
 * - IntersectionObserver for active section highlighting
 * - Auto-scroll within sidebar to keep active section visible
 * - Floating "Back to Top" button after scrolling 400px
 * - Smooth scroll to sections with proper offset
 */
export function EnhancedTOC({ sections, className = '' }: EnhancedTOCProps) {
  const [activeSection, setActiveSection] = useState<string>(sections[0]?.id || '');
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const activeLinkRef = useRef<HTMLButtonElement>(null);

  // IntersectionObserver for active section tracking
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the entry with highest intersection ratio that's actually visible
        const visibleEntries = entries.filter(entry => entry.isIntersecting);
        if (visibleEntries.length > 0) {
          // Sort by intersection ratio (descending) and take the first one
          const mostVisible = visibleEntries.sort((a, b) => 
            b.intersectionRatio - a.intersectionRatio
          )[0];
          setActiveSection(mostVisible.target.id);
        }
      },
      {
        threshold: [0, 0.25, 0.5, 0.75, 1],
        rootMargin: '-100px 0px -50% 0px', // Account for header and focus middle of viewport
      }
    );

    // Observe all sections
    const sectionElements = sections.map(section => 
      document.getElementById(section.id)
    ).filter(Boolean);

    sectionElements.forEach(element => {
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sections]);

  // Auto-scroll within sidebar to keep active section visible
  useEffect(() => {
    if (activeLinkRef.current && sidebarRef.current) {
      const linkRect = activeLinkRef.current.getBoundingClientRect();
      const sidebarRect = sidebarRef.current.getBoundingClientRect();
      
      // Check if link is outside visible area of sidebar
      if (linkRect.top < sidebarRect.top || linkRect.bottom > sidebarRect.bottom) {
        activeLinkRef.current.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'nearest' 
        });
      }
    }
  }, [activeSection]);

  // Track scroll position for "Back to Top" button
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Smooth scroll with offset for sticky header (96px = 6rem = top-24)
      const headerOffset = 96;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    // Close mobile menu after clicking
    if (isMobileOpen) {
      setIsMobileOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* Mobile TOC Toggle Button (FAB) */}
      <button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="lg:hidden fixed bottom-6 left-6 z-40 size-14 bg-indigo-600 hover:bg-indigo-700 rounded-full shadow-lg flex items-center justify-center transition-colors"
        aria-label="Toggle table of contents"
      >
        {isMobileOpen ? (
          <X className="size-6 text-white" />
        ) : (
          <Menu className="size-6 text-white" />
        )}
      </button>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-40 size-12 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 rounded-full shadow-lg flex items-center justify-center transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp className="size-5 text-zinc-300" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Mobile TOC Drawer */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileOpen(false)}
              className="lg:hidden fixed inset-0 z-30 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="lg:hidden fixed right-0 top-0 bottom-0 z-40 w-80 bg-zinc-950 border-l border-zinc-800 overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <p className="text-xs uppercase tracking-wider text-zinc-500 font-semibold">
                    On this page
                  </p>
                  <button
                    onClick={() => setIsMobileOpen(false)}
                    className="p-2 hover:bg-zinc-900 rounded-lg transition-colors"
                    aria-label="Close table of contents"
                  >
                    <X className="size-4 text-zinc-400" />
                  </button>
                </div>
                <nav className="space-y-1">
                  {sections.map((section) => {
                    const Icon = section.icon;
                    const isActive = activeSection === section.id;
                    return (
                      <button
                        key={section.id}
                        ref={isActive ? activeLinkRef : null}
                        onClick={() => scrollToSection(section.id)}
                        className={`flex items-center gap-3 w-full text-left px-3 py-2.5 rounded-lg text-sm transition-all ${
                          isActive
                            ? 'bg-indigo-500/10 text-indigo-400 border-l-2 border-indigo-500 pl-2.5'
                            : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/50'
                        }`}
                      >
                        <Icon className="size-4 shrink-0" />
                        <span>{section.label}</span>
                      </button>
                    );
                  })}
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Desktop Sticky Sidebar */}
      <nav 
        ref={sidebarRef}
        className={`hidden lg:block sticky top-24 max-h-[calc(100vh-96px)] overflow-y-auto space-y-1 pr-2 ${className}`}
        style={{
          scrollbarWidth: 'thin',
          scrollbarColor: '#3f3f46 transparent'
        }}
      >
        <p className="text-xs uppercase tracking-wider text-zinc-500 font-semibold mb-3 px-3">
          On this page
        </p>
        {sections.map((section) => {
          const Icon = section.icon;
          const isActive = activeSection === section.id;
          return (
            <button
              key={section.id}
              ref={isActive ? activeLinkRef : null}
              onClick={() => scrollToSection(section.id)}
              className={`flex items-center gap-3 w-full text-left px-3 py-2.5 rounded-lg text-sm transition-all ${
                isActive
                  ? 'bg-indigo-500/10 text-indigo-400 border-l-2 border-indigo-500 pl-2.5'
                  : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/50'
              }`}
            >
              <Icon className="size-4 shrink-0" />
              <span>{section.label}</span>
            </button>
          );
        })}
      </nav>
    </>
  );
}
