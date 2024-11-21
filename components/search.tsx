'use client';

import { ChangeEvent, FC } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { LayoutGrid, List, Search as SearchIcon } from 'lucide-react';
import { useDebouncedCallback } from 'use-debounce';

import { CONFIG } from '@/config/app';
import { Input } from '@/components/ui/input';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { QUERY_PARAMS } from '@/constants/url';

const { WAIT_DEBOUNCE_SEARCH_INPUT } = CONFIG;
const { QUERY, DISPLAY } = QUERY_PARAMS;

const Search: FC = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const updateParam = (name: string, value: string): void => {
    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set(name, value);
    } else {
      params.delete(name);
    }

    replace(`${pathname}?${params.toString()}`);
  };

  const handleSearch = (event: ChangeEvent<HTMLInputElement>): void => {
    const value = event.target.value;
    updateParam(QUERY.NAME, value);
  };

  const debouncedHandleSearch = useDebouncedCallback(
    handleSearch,
    WAIT_DEBOUNCE_SEARCH_INPUT
  );

  const handleDisplay = (value: string): void => {
    updateParam(DISPLAY.NAME, value);
  };

  const initialQuery = searchParams.get(QUERY.NAME)?.toString();
  const initialDisplay = searchParams.get(DISPLAY.NAME)?.toString();

  return (
    <div className="flex items-center justify-between mb-6">
      <div className="relative w-full max-w-sm">
        <Input
          onChange={debouncedHandleSearch}
          defaultValue={initialQuery}
          className="pl-8"
          placeholder="Search..."
          type="search"
        />
        <SearchIcon className=" absolute left-2.5 top-2.5 size-4 text-muted-foreground" />
      </div>
      <ToggleGroup
        type="single"
        defaultValue={initialDisplay}
        onValueChange={handleDisplay}
      >
        <ToggleGroupItem value="grid" aria-label="Toggle grid">
          <LayoutGrid className="size-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="list" aria-label="Toggle list">
          <List className="size-4" />
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
};

export default Search;
