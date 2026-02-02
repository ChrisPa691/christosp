import React from 'react';
import { cn } from '@/lib/cn';
import { containerBase } from './Container.styles';
import type { ContainerProps } from './Container.types';

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, className = '' }, forwardedRef) => {
    return (
      <div className={cn(containerBase, className)} ref={forwardedRef}>
        {children}
      </div>
    );
  }
);

Container.displayName = 'Container';
