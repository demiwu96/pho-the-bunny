import { Home, About, Blog, Free, GamesGallery, GamePage, EatAllCarrots } from 'pages';

const navRoutes = [
  {
    path: '/about',
    Element: About
  },
  {
    path: '/',
    Element: Home
  },
  {
    path: '/blog',
    Element: Blog
  },
  {
    path: '/freestuff',
    Element: Free
  },
  {
    path: '/games',
    Element: GamesGallery
  },
  {
    path: '/games/eat-all-carrots',
    Element: EatAllCarrots
  },
  {
    path: '/games/how-high-can-you-jump',
    Element: GamePage
  }
];

const routes = [...navRoutes];

export default routes;
