import CONFIG from '../config/config';
const getAllRestaurants = async () => {
  try {
    const response = await fetch(CONFIG.API_LIST_RESTAURANT);
    const result = await response.json();
    return result.restaurants;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const getRestaurantById = async (id) => {
  try {
    const response = await fetch(CONFIG.API_DETAIL_RESTAURANT(id));
    const result = await response.json();
    return result.restaurant;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export { getAllRestaurants,getRestaurantById };
