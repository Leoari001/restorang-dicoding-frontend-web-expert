import { getAllRestaurants } from '../../data/restaurant-service';
import { createRestaurantCard } from '../template/template-creator';
const home = {
  async render() {
    return `
      <h1 class="text-title">
        Explore Restaurant
      </h1>
      <div class="list-restaurant" id="list-restaurant"></div>
      `;
  },

  async afterRender() {
    const restaurants = await getAllRestaurants();
    const restaurantsList = document.querySelector('#list-restaurant');
    restaurants.forEach((restaurant) => {
      restaurantsList.innerHTML += createRestaurantCard(restaurant);
    });
  },
};

export default home;
