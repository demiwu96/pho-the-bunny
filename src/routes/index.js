import { Home, About, Blog, Free, Games } from 'pages';

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
    Element: Games
  }
];

const routes = [...navRoutes];

export default routes;
