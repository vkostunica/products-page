'use client';

import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/icons';
import { ThemeToggle } from '@/components/theme-toggle';
import { NAVIGATION } from '@/constants/navigation';
import { ROUTES } from '@/constants/routes';
import starImage from '@/assets/icons/star.svg';

const { HOME } = ROUTES;

const Header: FC = () => {
  const segment = useSelectedLayoutSegment();
  const pathSegment = !segment ? '/' : `/${segment}/`;

  return (
    <header className="border-b">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href={HOME} className="flex items-center gap-2 shrink-0">
          <Image src={starImage} alt="Star logo" className="h-16" />
          <Icons.levelUpGaming className="h-16" />
        </Link>

        <nav className="flex items-center gap-6">
          {NAVIGATION.map((navItem) => {
            const { href, title } = navItem;

            return (
              <Link
                key={title}
                className={cn('text-lg text-muted-foreground', {
                  'font-medium text-tertiary-foreground':
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
          <Button variant="outline" size="lg" className="px-8">
            View Cart
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
