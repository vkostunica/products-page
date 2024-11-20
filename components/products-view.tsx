import { FC } from 'react';

import { Product } from '@/types/models';
import ProductCard from '@/components/product-card';
import Search from '@/components/search';

export interface Props {
  products: Product[];
}

const ProductsView: FC<Props> = ({ products }) => {
  return (
    <>
      <Search />
      <h2 className="text-2xl font-bold mb-6">All Products</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default ProductsView;
