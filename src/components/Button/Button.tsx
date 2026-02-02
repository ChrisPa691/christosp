"use client";

import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/cn';
import { buttonBase, buttonVariants } from './Button.styles';
import type { ButtonProps, ButtonVariant } from './Button.types';

export const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      href,
      onClick,
      className = '',
      type = 'button',
      disabled = false,
      target,
      rel,
    },
    forwardedRef
  ) => {
    const selectedVariant: ButtonVariant = variant in buttonVariants ? variant : 'primary';
    const classes = cn(buttonBase, buttonVariants[selectedVariant], className);
    const computedRel = rel ?? (target === '_blank' ? 'noreferrer noopener' : undefined);

    const handleClick: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement> = (event) => {
      if (disabled) {
        event.preventDefault();
        event.stopPropagation();
        return;
      }
      onClick?.(event);
    };

    if (href) {
      return (
        <Link
          href={href}
          ref={forwardedRef as React.Ref<HTMLAnchorElement>}
          className={classes}
          aria-disabled={disabled || undefined}
          onClick={handleClick}
          target={target}
          rel={computedRel}
        >
          {children}
        </Link>
      );
    }

    return (
      <button
        type={type}
        onClick={handleClick}
        className={classes}
        disabled={disabled}
        ref={forwardedRef as React.Ref<HTMLButtonElement>}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
