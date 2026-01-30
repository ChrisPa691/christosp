import React from 'react';
import { cn } from '@/lib/cn';
import { containerBase } from './Container.styles';
import type { ContainerProps } from './Container.types';

export function Container({ children, className = '' }: ContainerProps) {
  return <div className={cn(containerBase, className)}>{children}</div>;
}
