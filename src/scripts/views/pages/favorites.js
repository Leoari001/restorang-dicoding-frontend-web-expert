import { createRestaurantCard } from '../template/template-creator';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
const favorites = {
  async render() {
    return `
    <h1 class="text-title">
      Favorites Restaurant
    </h1>
    <div class="favorite-restaurant" id="favorite-restaurant"></div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    if (restaurants.length < 1) {
      const restaurantsList = document.querySelector('#favorite-restaurant');
      restaurantsList.innerHTML =
        '<p>You dont have any favorite Restaurant</p>';
    }
    const restaurantsList = document.querySelector('#favorite-restaurant');
    restaurants.forEach((restaurant) => {
      restaurantsList.innerHTML += createRestaurantCard(restaurant);
    });
  },
};

export default favorites;
