
const nintendoImage = 'https://i.postimg.cc/2jXNR6mZ/nintendo.png';
const steamdeckImage = 'https://i.postimg.cc/7YG8xkYQ/steam-deck.png';
const ps5Image = 'https://i.postimg.cc/50sdt9CD/ps5-controller.png';
const segaImage = 'https://i.postimg.cc/br57Q6LT/sega-handheld.png';
const gamecubeImage = 'https://i.postimg.cc/fLzQZSJx/gamecube.png';
const playdateImage = 'https://i.postimg.cc/RhqrJr1h/playdate.png';

export const products = [
  {
    id: 1,
    name: 'PS5 Controller',
    price: 70.0,
    description:
      'A sleek, ergonomic PlayStation controller with responsive buttons and adaptive triggers.',
    image: ps5Image,
    tags: ['Tech', 'Black'],
  },
  {
    id: 2,
    name: 'Gamecube',
    price: 120.0,
    description:
      'A compact and durable GameCube console with a unique, cube-shaped design.',
    image: gamecubeImage,
    tags: ['Tech', 'Grey'],
  },
  {
    id: 3,
    name: 'Steam Deck',
    price: 350.0,
    description:
      'A powerful, portable Steam Deck console with a vibrant touchscreen and ergonomic controls.',
    image: steamdeckImage,
    tags: ['Tech', 'Black'],
  },
  {
    id: 4,
    name: 'Sega Handheld',
    price: 50.0,
    description:
      'A classic Sega handheld console with a vibrant screen and a library of iconic games.',
    image: segaImage,
    tags: ['Tech', 'Black'],
  },
  {
    id: 5,
    name: 'Playdate',
    price: 220.0,
    description:
      'A charming, pocket-sized Playdate console with a unique crank controller.',
    image: playdateImage,
    tags: ['Tech', 'Yellow'],
  },
  {
    id: 6,
    name: 'Nintendo Switch',
    price: 350.0,
    description:
      'Console with a vibrant display, detachable Joy-Con controllers.',
    image: nintendoImage,
    tags: ['Tech', 'Black'],
  },
];
