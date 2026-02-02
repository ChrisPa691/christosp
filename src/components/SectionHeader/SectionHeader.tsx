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
        {subtitle && <p className={sectionSubtitle}>{subtitle}</p>}
      </div>
    );
  }
);

SectionHeader.displayName = 'SectionHeader';
