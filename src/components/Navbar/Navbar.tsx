"use client";

import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/cn';
import { Container } from '@/components/Container/Container';
import { Button } from '@/components/Button';
import { navLinks, socialIcons, socialLinks } from '@/components/nav.config';
import {
  brand,
  navInner,
  navLinkActive,
  navLinkBaseWithUnderline,
  navLinkInactive,
  navList,
  navRoot,
  socialLink,
  socialWrap,
  navCtaWrap,
} from './Navbar.styles';
import type { NavbarProps } from './Navbar.types';

export function Navbar({ className }: NavbarProps) {
  const pathname = usePathname();
  const isActive = (path: string) => {
    if (path === '/') return pathname === '/';
    return pathname === path || pathname.startsWith(`${path}/`);
  };

  return (
    <nav className={cn(navRoot, className)}>
      <Container className={navInner}>
        <div className="flex items-center shrink-0">
          <Link href="/" className={brand}>
            <span className="text-(--text-primary)">Christos</span>
            <span className="text-(--accent)">.</span>
          </Link>
        </div>

        <div className="flex items-center gap-8 shrink-0">
          <ul className={navList}>
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(navLinkBaseWithUnderline, active ? navLinkActive : navLinkInactive)}
                    aria-current={active ? 'page' : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className={cn(socialWrap, 'gap-3')}>
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={link.ariaLabel}
                className={socialLink}
              >
                {socialIcons[link.id]}
              </a>
            ))}

            <div className={navCtaWrap}>
              <Button href="/contact" variant="primary" className="px-4 py-2 text-sm rounded-full">
                Get in touch
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
}
