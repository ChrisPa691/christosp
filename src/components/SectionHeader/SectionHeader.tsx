import React from 'react';
import { cn } from '@/lib/cn';
import { sectionHeaderBase, sectionSubtitle, sectionTitle } from './SectionHeader.styles';
import type { SectionHeaderProps } from './SectionHeader.types';

export function SectionHeader({ title, subtitle, className = '' }: SectionHeaderProps) {
  return (
    <div className={cn(sectionHeaderBase, className)}>
      <h2 className={sectionTitle}>{title}</h2>
      {subtitle && <p className={sectionSubtitle}>{subtitle}</p>}
    </div>
  );
}
