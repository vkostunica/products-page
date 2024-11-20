import { FC } from 'react';
import { getProducts } from '@/modules/database';

import ProductsView from '@/components/products-view';

const IndexPage: FC = async () => {
  const products = await getProducts();

  return <ProductsView products={products} />;
};

export default IndexPage;
