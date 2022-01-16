import { Home, About } from 'pages';

const navRoutes = [
  {
    path: '/about',
    Element: About
  },
  {
    path: '/',
    Element: Home
  }
];

const routes = [...navRoutes];

export default routes;
