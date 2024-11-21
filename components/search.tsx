'use client';

import { ChangeEvent, FC } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { LayoutGrid, List, Search as SearchIcon } from 'lucide-react';
import { useDebouncedCallback } from 'use-debounce';

import { CONFIG } from '@/config/app';
import { Input } from '@/components/ui/input';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

const { WAIT_DEBOUNCE_SEARCH_INPUT } = CONFIG;

const queryParam = 'query' as const;

const Search: FC = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = (event: ChangeEvent<HTMLInputElement>): void => {
    const term = event.target.value;
    const params = new URLSearchParams(searchParams);

    if (term) {
      params.set(queryParam, term);
    } else {
      params.delete(queryParam);
    }

    replace(`${pathname}?${params.toString()}`);
  };

  const debouncedHandleSearch = useDebouncedCallback(
    handleSearch,
    WAIT_DEBOUNCE_SEARCH_INPUT
  );

  const initialTerm = searchParams.get(queryParam)?.toString();

  return (
    <div className="flex items-center justify-between mb-6">
      <div className="relative w-full max-w-sm">
        <Input
          onChange={debouncedHandleSearch}
          defaultValue={initialTerm}
          className="pl-8"
          placeholder="Search..."
          type="search"
        />
        <SearchIcon className=" absolute left-2.5 top-2.5 size-4 text-muted-foreground" />
      </div>
      <ToggleGroup type="single">
        <ToggleGroupItem value="bold" aria-label="Toggle bold">
          <LayoutGrid className="size-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Toggle italic">
          <List className="size-4" />
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
};

export default Search;
