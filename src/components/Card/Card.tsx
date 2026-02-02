import React from 'react';
import { cn } from '@/lib/cn';
import { cardBase, cardHover } from './Card.styles';
import type { CardProps } from './Card.types';

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ children, className = '', hover = true }, forwardedRef) => {
    const classes = cn(cardBase, hover && cardHover, className);
    return (
      <div className={classes} ref={forwardedRef}>
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';
