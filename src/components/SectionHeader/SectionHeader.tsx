import React from 'react';
import { cn } from '@/lib/cn';
import { sectionHeaderBase, sectionSubtitle, sectionTitle } from './SectionHeader.styles';
import type { SectionHeaderProps } from './SectionHeader.types';

export const SectionHeader = React.forwardRef<HTMLHeadingElement, SectionHeaderProps>(
  ({ title, subtitle, className = '', as = 'h2' }, forwardedRef) => {
    const HeadingTag = as;

    return (
      <div className={cn(sectionHeaderBase, className)}>
        <HeadingTag className={sectionTitle} ref={forwardedRef}>
          {title}
        </HeadingTag>
        <div className="w-10 h-0.5 bg-linear-to-r from-blue-500 to-cyan-400 rounded-full" />
        {subtitle && <p className={sectionSubtitle}>{subtitle}</p>}
      </div>
    );
  }
);

SectionHeader.displayName = 'SectionHeader';
