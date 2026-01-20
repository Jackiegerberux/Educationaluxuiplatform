import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'motion/react';

export interface AccordionItemData {
  id: string;
  title: string;
  content: React.ReactNode;
  disabled?: boolean;
}

export interface AccordionProps {
  items: AccordionItemData[];
  allowMultiple?: boolean;
  defaultExpanded?: string[];
  className?: string;
}

export function Accordion({
  items,
  allowMultiple = false,
  defaultExpanded = [],
  className
}: AccordionProps) {
  const [expanded, setExpanded] = useState<string[]>(defaultExpanded);

  const toggleItem = (itemId: string) => {
    if (allowMultiple) {
      setExpanded((prev) =>
        prev.includes(itemId)
          ? prev.filter((id) => id !== itemId)
          : [...prev, itemId]
      );
    } else {
      setExpanded((prev) =>
        prev.includes(itemId) ? [] : [itemId]
      );
    }
  };

  return (
    <div className={cn('space-y-2', className)}>
      {items.map((item) => {
        const isExpanded = expanded.includes(item.id);

        return (
          <div
            key={item.id}
            className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden"
          >
            <button
              onClick={() => !item.disabled && toggleItem(item.id)}
              disabled={item.disabled}
              className={cn(
                'w-full flex items-center justify-between p-4 text-left transition-colors',
                'focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-inset',
                !item.disabled && 'hover:bg-zinc-800/50',
                item.disabled && 'opacity-50 cursor-not-allowed'
              )}
              aria-expanded={isExpanded}
            >
              <span className="font-medium text-white">{item.title}</span>
              <ChevronDown
                className={cn(
                  'size-5 text-zinc-400 transition-transform',
                  isExpanded && 'rotate-180'
                )}
              />
            </button>

            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="px-4 pb-4 text-sm text-zinc-300 border-t border-zinc-800 pt-4">
                    {item.content}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
