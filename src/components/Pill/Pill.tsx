import React from 'react';
import { cn } from '@/lib/cn';
import { pillBase } from './Pill.styles';
import type { PillProps } from './Pill.types';

export function Pill({ children, className = '' }: PillProps) {
  return <span className={cn(pillBase, className)}>{children}</span>;
}
