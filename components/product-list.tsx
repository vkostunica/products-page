import { FC } from 'react';
import { searchProducts } from '@/modules/database';

import ProductCard from '@/components/product-card';

export interface Props {
  query: string;
}

const ProductList: FC<Props> = async ({ query }) => {
  const products = await searchProducts(query);

  return (
    <>
      <h2 className="text-2xl font-bold mb-6">All Products</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default ProductList;
