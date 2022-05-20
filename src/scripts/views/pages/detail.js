import UrlParser from '../../routes/url-parser';
import { getRestaurantById } from '../../data/restaurant-service';
import { createRestaurantDetailCard } from '../template/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';
const detail = {
  async render() {
    return `
      <h1 class="text-title">
        Detail
      </h1>
      <div class="detail-restaurant" id="detail-restaurant"></div>
      <div id="likeButtonContainer"></div>

      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await getRestaurantById(url.id);
    const detailRestaurant = document.querySelector('#detail-restaurant');
    detailRestaurant.innerHTML = createRestaurantDetailCard(restaurant);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: restaurant,
    });
  },
};

export default detail;
