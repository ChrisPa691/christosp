import React from 'react';
import { cn } from '@/lib/cn';
import { cardBase, cardHover } from './Card.styles';
import type { CardProps } from './Card.types';

export function Card({ children, className = '', hover = true }: CardProps) {
  const classes = cn(cardBase, hover && cardHover, className);
  return <div className={classes}>{children}</div>;
}
