import { Home, About, Blog, Free, GamesGallery, GamePage, EatAllCarrots, ToDoList } from 'pages';

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
    path: '/freeapp',
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
  },
  {
    path: '/phothebunny/calendar',
    Element: ToDoList
  }
];

const routes = [...navRoutes];

export default routes;
