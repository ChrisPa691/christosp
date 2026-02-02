import React from 'react';

export type ButtonVariant = 'primary' | 'secondary';

export interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  href?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  target?: React.HTMLAttributeAnchorTarget;
  rel?: string;
}
