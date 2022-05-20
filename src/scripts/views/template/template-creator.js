import CONFIG from '../../config/config';

const createRestaurantCard = (restaurant) => {
  return `<div class="restaurant-card">
    <a href="#/detail/${restaurant.id}">
        <div class="img-container">
        <img
        class="lazyload"
        data-src="${CONFIG.BASE_IMAGE_M_URL + restaurant.pictureId}"
            alt="${restaurant.name}"></
        />
        <span class="card-rating"><i title="ratings" class="fa fa-star"></i> ${
          restaurant.rating
        }</span>
        <span class="card-title">${restaurant.name} - ${restaurant.city}</span>
        </div>
        <div class="content-container">
        <p class="restaurant-description" >
            ${restaurant.description.slice(0, 200)}...
        </p>
        </div>
        </a>
     </div>`;
};

const createRestaurantDetailCard = (restaurant) => {
  return `<div class="restaurant-card detail-restaurant">
        <div class="img-container">
        <img
            class="lazyload"
            data-src="${CONFIG.BASE_IMAGE_M_URL + restaurant.pictureId}"
            alt="${restaurant.name}"></
        />
        <span class="card-rating"><i title="ratings" class="fa fa-star"></i> ${
          restaurant.rating
        }</span>
        <span class="card-title">${restaurant.name} - ${restaurant.city} (${
    restaurant.address
  })</span>
        </div>
        <div class="content-container">
        <h2 class="text-secondary">Tentang</h2>
        <p class="restaurant-description" >
            ${restaurant.description}
        </p>
        </div>
        <div class="content-container">
        <h2 class="text-secondary">Menu (${restaurant.categories.map(
          (category) => `${category.name}`
        )})</h2>
        <ul class="list-menu food">
            ${restaurant.menus.foods
              .map((food) => `<li>${food.name}</li>`)
              .join(' ')}
        </ul>
        <ul class="list-menu drink">
            ${restaurant.menus.drinks
              .map((drink) => `<li>${drink.name}</li>`)
              .join(' ')}
        </ul>
        </div>
        <div class="content-container">
        <h2 class="text-secondary">Reviews</h2>
        <div class="reviews">
                ${restaurant.customerReviews
                  .map((review) => {
                    return `<div class="review">
                <div class="review-title">
                  <p><i class="fa fa-user"></i> ${review.name}</p>
                  <span>${review.date}</span>
                </div>
                <div class="review-content">
                  <p>${review.review}</p>
                </div>
              </div>`;
                  })
                  .join('')}
        </div>
        </div>
     </div>`;
};

const createLikeButton = () => {
  return `
  <button aria-label="like this resto" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;
};

const createLikedButton = () => {
  return `
  <button aria-label="unlike this resto" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;
};

export {
  createRestaurantCard,
  createRestaurantDetailCard,
  createLikeButton,
  createLikedButton,
};
