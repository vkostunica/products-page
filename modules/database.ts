import { wait } from '@/utils/wait';

import { Product } from '@/types/models';
import { CONFIG } from '@/config/app';
import { products } from '@/data/products';

const { waitDatabase } = CONFIG;

export const getProducts = (): Promise<Product[]> =>
  wait(waitDatabase).then(() => products);

// todo: search products
