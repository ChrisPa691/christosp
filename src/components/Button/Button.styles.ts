import { ButtonVariant } from './Button.types';

export const buttonBase = 'inline-flex items-center justify-center px-8 py-3.5 rounded-lg font-medium transition-all duration-200';

export const buttonVariants: Record<ButtonVariant, string> = {
  primary: 'bg-(--accent) text-white hover:bg-(--accent-hover) shadow-lg shadow-blue-500/20',
  secondary: 'bg-(--surface-elevated) text-(--text-primary) hover:bg-(--surface)'
} as const;
