import React from 'react';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface ChipProps {
  label: string;
  onRemove?: () => void;
  variant?: 'default' | 'primary' | 'success' | 'warning';
  size?: 'sm' | 'md';
  disabled?: boolean;
  className?: string;
}

export function Chip({
  label,
  onRemove,
  variant = 'default',
  size = 'md',
  disabled = false,
  className
}: ChipProps) {
  const baseStyles = 'inline-flex items-center gap-2 rounded-full font-medium transition-all';

  const variants = {
    default: 'bg-zinc-800 text-zinc-300 border border-zinc-700',
    primary: 'bg-indigo-950/50 text-indigo-400 border border-indigo-500/20',
    success: 'bg-green-950/50 text-green-400 border border-green-500/20',
    warning: 'bg-yellow-950/50 text-yellow-400 border border-yellow-500/20'
  };

  const sizes = {
    sm: 'px-2.5 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm'
  };

  return (
    <span
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
    >
      {label}
      {onRemove && !disabled && (
        <button
          onClick={onRemove}
          className="hover:bg-zinc-700 rounded-full p-0.5 transition-colors focus:outline-none focus:ring-1 focus:ring-indigo-500"
          aria-label={`Remove ${label}`}
        >
          <X className="size-3" />
        </button>
      )}
    </span>
  );
}
