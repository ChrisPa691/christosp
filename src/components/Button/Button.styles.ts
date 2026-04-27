import { ButtonVariant } from './Button.types';

export const buttonBase = 'inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg font-semibold text-sm tracking-wide transition-all duration-200 active:scale-[0.97] disabled:opacity-60 disabled:cursor-not-allowed aria-disabled:opacity-60 aria-disabled:cursor-not-allowed';

export const buttonVariants: Record<ButtonVariant, string> = {
  primary: 'bg-(--accent) text-white hover:bg-(--accent-hover) shadow-md shadow-blue-500/30 hover:shadow-lg hover:shadow-blue-500/45 hover:-translate-y-px',
  secondary: 'bg-(--surface-elevated) text-(--text-primary) border border-(--border) hover:border-(--accent)/50 hover:text-(--accent) hover:bg-(--surface)',
} as const;
