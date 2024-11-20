import { FC } from 'react';
import { LayoutGrid, List } from 'lucide-react';

import { Input } from '@/components/ui/input';
import { Toggle } from '@/components/ui/toggle';

const Search: FC = () => {
  return (
    <div className="flex items-center justify-between mb-6">
      <div className="relative w-full max-w-sm">
        <Input className="pl-8" placeholder="Search..." type="search" />
        <svg
          className=" absolute left-2.5 top-2.5 size-4 text-muted-foreground"
          fill="none"
          height="24"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
      </div>
      <div className="flex gap-2">
        <Toggle aria-label="Toggle grid view">
          <LayoutGrid className="size-4" />
        </Toggle>
        <Toggle aria-label="Toggle list view">
          <List className="size-4" />
        </Toggle>
      </div>
    </div>
  );
};

export default Search;
