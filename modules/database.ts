import { wait } from '@/utils/wait';

import { Product } from '@/types/models';
import { CONFIG } from '@/config/app';
import { products } from '@/data/products';

const { waitDatabase } = CONFIG;

export const searchProducts = async (query = ''): Promise<Product[]> => {
  await wait(waitDatabase);

  if (!query) return products;

  const lowerCaseQuery = query.trim().toLowerCase();

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(lowerCaseQuery)
  );

  return filteredProducts;
};
