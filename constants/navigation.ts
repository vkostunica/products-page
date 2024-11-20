export const ROUTES = {
  home: '/',
  empty: '#',
} as const;

export const NAVIGATION = [
  {
    title: 'Store',
    href: ROUTES.empty,
    external: false,
  },
  {
    title: 'Reviews',
    href: ROUTES.empty,
    external: false,
  },
  {
    title: 'Blog',
    href: ROUTES.empty,
    external: false,
  },
  {
    title: 'Media',
    href: ROUTES.empty,
    external: false,
  },
  {
    title: 'Locations',
    href: ROUTES.empty,
    external: false,
  },
  {
    title: 'Contact',
    href: ROUTES.empty,
    external: false,
  },
] as const;
