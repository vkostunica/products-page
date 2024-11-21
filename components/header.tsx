'use client';

import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';
import { NAVIGATION } from '@/constants/navigation';
import logoImage from '@/assets/icons/logo.svg';

const Header: FC = () => {
  const segment = useSelectedLayoutSegment();
  const pathSegment = !segment ? '/' : `/${segment}/`;

  return (
    <header className="border-b">
      <div className="container flex h-16 items-center justify-between px-4">
        <Image src={logoImage} alt="Level Up Gaming" className="h-24" />

        <nav className="flex items-center gap-6">
          {NAVIGATION.map((navItem) => {
            const { href, title } = navItem;

            return (
              <Link
                key={title}
                className={cn('text-sm font-medium', {
                  'font-bold text-tertiary-foreground':
                    pathSegment === navItem.href,
                })}
                href={href}
              >
                {title}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="outline">View Cart</Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
