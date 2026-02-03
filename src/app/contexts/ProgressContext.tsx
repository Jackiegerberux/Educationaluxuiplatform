import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface ProgressContextType {
  progress: Record<string, boolean>;
  markAsComplete: (lessonId: string) => void;
  isLessonComplete: (lessonId: string) => boolean;
  isLoading: boolean;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [progress, setProgress] = useState<Record<string, boolean>>({});
  const [isLoading, setIsLoading] = useState(true);

  // Load progress from localStorage on mount
  useEffect(() => {
    try {
      const savedProgress = localStorage.getItem('aditidesign-progress');
      if (savedProgress) {
        setProgress(JSON.parse(savedProgress));
      }
    } catch (error) {
      console.error('Error loading progress:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Save progress to localStorage whenever it changes
  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem('aditidesign-progress', JSON.stringify(progress));
    }
  }, [progress, isLoading]);

  const markAsComplete = (lessonId: string) => {
    setProgress(prev => ({
      ...prev,
      [lessonId]: true
    }));
  };

  const isLessonComplete = (lessonId: string): boolean => {
    return progress[lessonId] || false;
  };

  return (
    <ProgressContext.Provider value={{ progress, markAsComplete, isLessonComplete, isLoading }}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const context = useContext(ProgressContext);
  if (context === undefined) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
}