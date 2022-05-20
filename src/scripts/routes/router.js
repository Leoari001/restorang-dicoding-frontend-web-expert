import home from '../views/pages/home';
import favorites from '../views/pages/favorites';
import detail from '../views/pages/detail';

const routes = {
  '/': home,
  '/home': home,
  '/detail/:id': detail,
  '/favorite': favorites,
};

export default routes;
