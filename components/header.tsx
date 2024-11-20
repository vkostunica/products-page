import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { NAVIGATION } from '@/constants/navigation';
import placeholderImage from '@/assets/images/placeholder.svg';

// import { ThemeToggle } from '@/components/theme-toggle';

const Header: FC = () => {
  return (
    <header className="border-b">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Image
            src={placeholderImage}
            alt="Level Up Gaming"
            width={40}
            height={40}
            className="rounded"
          />
          <span className="text-xl font-bold">Level Up Gaming</span>
        </div>
        <nav className="flex items-center gap-6">
          {NAVIGATION.map((navItem) => {
            const { href, title } = navItem;

            return (
              <Link
                key={title}
                className="text-sm font-medium hover:underline"
                href={href}
              >
                {title}
              </Link>
            );
          })}
        </nav>
        <Button variant="outline" size="icon">
          <ShoppingCart className="size-4" />
          <span className="sr-only">View Cart</span>
        </Button>
      </div>
    </header>
  );
};

export default Header;
