import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/cn';
import { buttonBase, buttonVariants } from './Button.styles';
import type { ButtonProps, ButtonVariant } from './Button.types';

export function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
  type = 'button',
}: ButtonProps) {
  const selectedVariant: ButtonVariant = variant in buttonVariants ? variant : 'primary';
  const classes = cn(buttonBase, buttonVariants[selectedVariant], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
