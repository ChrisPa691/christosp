import React from 'react';
import { Container } from '@/components/Container';
import { cn } from '@/lib/cn';
import { socialLinks } from '@/components/nav.config';
import {
  footerInner,
  footerLink,
  footerLinks,
  footerRoot,
  footerSeparator,
  footerText,
} from './Footer.styles';
import type { FooterProps } from './Footer.types';

export function Footer({ className }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={cn(footerRoot, className)}>
      <Container className={footerInner}>
        <p className={footerText}>© {currentYear} Christos. All rights reserved.</p>
        <div className={footerLinks}>
          {socialLinks.map((link, index) => (
            <React.Fragment key={link.href}>
              {index > 0 && <span className={footerSeparator}>·</span>}
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={link.ariaLabel}
                className={footerLink}
              >
                {link.label}
              </a>
            </React.Fragment>
          ))}
        </div>
      </Container>
    </footer>
  );
}
