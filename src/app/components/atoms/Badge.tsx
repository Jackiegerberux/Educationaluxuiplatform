import React from 'react';
import { cn } from '@/app/components/ui/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function Badge({
  variant = 'default',
  size = 'md',
  className,
  children,
  ...props
}: BadgeProps) {
  const baseStyles = 'inline-flex items-center gap-1.5 font-medium rounded-full transition-colors';

  const variants = {
    default: 'bg-zinc-800 text-zinc-300 border border-zinc-700',
    success: 'bg-green-950/50 text-green-400 border border-green-500/20',
    warning: 'bg-yellow-950/50 text-yellow-400 border border-yellow-500/20',
    error: 'bg-red-950/50 text-red-400 border border-red-500/20',
    info: 'bg-blue-950/50 text-blue-400 border border-blue-500/20',
    outline: 'bg-transparent text-indigo-400 border border-indigo-600'
  };

  const sizes = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-1.5 text-base'
  };

  return (
    <span
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}