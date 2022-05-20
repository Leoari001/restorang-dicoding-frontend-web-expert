import LikeButtonInitiator from '../src/scripts/utils/like-button-initiator';
import FavoriteRestaurant from '../src/scripts/data/favorite-restaurant-idb';

describe('Liking the restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(async () => {
    addLikeButtonContainer();
    FavoriteRestaurant.putRestaurant({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteRestaurant.deleteRestaurant(1);
  });

  it('should show the unlike button when the restaurant has not been liked before', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: { id: 1 },
    });
    expect(
      document.querySelector('[aria-label="unlike this resto"]')
    ).toBeTruthy();
  });

  it('should not show the like button when the restaurant has not been liked before', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: { id: 1 },
    });
    expect(
      document.querySelector('[aria-label="like this resto"]')
    ).toBeFalsy();
  });

  it('should be able to remove liked restaurant', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: { id: 1 },
    });

    document
      .querySelector('[aria-label="unlike this resto"]')
      .dispatchEvent(new Event('click'));

    const allRestaurants = await FavoriteRestaurant.getAllRestaurants();
    expect(allRestaurants).toEqual([]);
  });

  it('should not throw error if the unliked restaurant is not in the list', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: { id: 1 },
    });

    await FavoriteRestaurant.deleteRestaurant(1);

    document
      .querySelector('[aria-label="unlike this resto"]')
      .dispatchEvent(new Event('click'));

    const allRestaurants = await FavoriteRestaurant.getAllRestaurants();
    expect(allRestaurants).toEqual([]);
  });
});
