import React from 'react';
import { cn } from '@/lib/cn';
import { pillBase } from './Pill.styles';
import type { PillProps } from './Pill.types';

export const Pill = React.forwardRef<HTMLSpanElement, PillProps>(
  ({ children, className = '' }, forwardedRef) => {
    return (
      <span className={cn(pillBase, className)} ref={forwardedRef}>
        {children}
      </span>
    );
  }
);

Pill.displayName = 'Pill';
