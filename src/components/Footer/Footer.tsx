import React from 'react';
import { Container } from '@/components/Container';
import { cn } from '@/lib/cn';
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
          <a
            href="https://github.com/ChrisPa691"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className={footerLink}
          >
            GitHub
          </a>
          <span className={footerSeparator}>·</span>
          <a
            href="https://www.linkedin.com/in/cpaparistodemou/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className={footerLink}
          >
            LinkedIn
          </a>
        </div>
      </Container>
    </footer>
  );
}
