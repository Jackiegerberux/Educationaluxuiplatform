import React from 'react';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface BreadcrumbItem {
  label: string;
  href?: string;
  onClick?: () => void;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  separator?: React.ReactNode;
  className?: string;
}

export function Breadcrumb({
  items,
  separator = <ChevronRight className="size-4 text-zinc-600" />,
  className
}: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={cn('flex items-center gap-2 text-sm', className)}>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <React.Fragment key={index}>
            {item.href || item.onClick ? (
              <button
                onClick={item.onClick}
                className={cn(
                  'transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded',
                  isLast
                    ? 'text-zinc-400 cursor-default'
                    : 'text-indigo-400 hover:text-indigo-300'
                )}
                aria-current={isLast ? 'page' : undefined}
              >
                {item.label}
              </button>
            ) : (
              <span className="text-zinc-400">{item.label}</span>
            )}

            {!isLast && separator}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
