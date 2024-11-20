import { FC, Suspense } from 'react';

import ProductList from '@/components/product-list';
import ProductListSkeleton from '@/components/product-list-skeleton';
import Search from '@/components/search';

export interface Props {
  searchParams?: Promise<{ query?: string }>;
}

const IndexPage: FC<Props> = async (props) => {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';

  return (
    <>
      <Search />
      <Suspense key={query} fallback={<ProductListSkeleton />}>
        <ProductList query={query} />
      </Suspense>
    </>
  );
};

export default IndexPage;
