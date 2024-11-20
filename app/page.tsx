import { FC } from 'react';

import ProductsView from '@/components/products-view';
import placeholderImage from '@/assets/images/placeholder.svg';

const IndexPage: FC = () => {
  return <ProductsView products={products} />;
};

export default IndexPage;

const products = [
  {
    id: 1,
    name: 'PS5 Controller',
    price: 70.0,
    description:
      'A sleek, ergonomic PlayStation controller with responsive buttons and adaptive triggers.',
    image: placeholderImage,
    color: 'Black',
  },
  {
    id: 2,
    name: 'Gamecube',
    price: 120.0,
    description:
      'A compact and durable GameCube console with a unique, cube-shaped design.',
    image: placeholderImage,
    color: 'Grey',
  },
  {
    id: 3,
    name: 'Steam Deck',
    price: 350.0,
    description:
      'A powerful, portable Steam Deck console with a vibrant touchscreen and ergonomic controls.',
    image: placeholderImage,
    color: 'Black',
  },
  {
    id: 4,
    name: 'Sega Handheld',
    price: 50.0,
    description:
      'A classic Sega handheld console with a vibrant screen and a library of iconic games.',
    image: placeholderImage,
    color: 'Black',
  },
  {
    id: 5,
    name: 'Playdate',
    price: 220.0,
    description:
      'A charming, pocket-sized Playdate console with a unique crank controller.',
    image: placeholderImage,
    color: 'Yellow',
  },
  {
    id: 6,
    name: 'Nintendo Switch',
    price: 350.0,
    description:
      'Console with a vibrant display, detachable Joy-Con controllers.',
    image: placeholderImage,
    color: 'Black',
  },
];
