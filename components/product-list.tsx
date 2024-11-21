import { FC } from 'react';
import { searchProducts } from '@/modules/database';

import { SearchParams } from '@/types/url';
import { cn } from '@/lib/utils';
import ProductCard from '@/components/product-card';
import ProductListItem from '@/components/product-list-item';

export interface Props extends SearchParams {}

const ProductList: FC<Props> = async ({ query, display }) => {
  const products = await searchProducts(query);

  const isGrid = display === 'grid';
  const isList = display === 'list';

  return (
    <>
      <h2 className="text-2xl font-bold mb-6">All Products</h2>
      <ul
        className={cn({
          'grid gap-6 md:grid-cols-2 lg:grid-cols-3': isGrid,
          'flex flex-col': isList,
        })}
      >
        {products.map((product) => (
          <li key={product.id}>
            {isGrid && <ProductCard product={product} />}
            {isList && <ProductListItem product={product} />}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProductList;
