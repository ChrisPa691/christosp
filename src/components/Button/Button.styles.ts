import { ButtonVariant } from './Button.types';

export const buttonBase = 'inline-flex items-center justify-center pr-10 pl-10 m-15 border-0 rounded-lg font-medium transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed aria-disabled:opacity-60 aria-disabled:cursor-not-allowed';

export const buttonVariants: Record<ButtonVariant, string> = {
  primary: 'bg-(--accent) text-white hover:bg-(--accent-hover) shadow-lg shadow-blue-500/20',
  secondary: 'bg-(--surface-elevated) text-(--text-primary) hover:bg-(--surface)'
} as const;
