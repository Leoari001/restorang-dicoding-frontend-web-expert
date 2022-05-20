const CONFIG = {
  BASE_URL: 'https://restaurant-api.dicoding.dev/',
  BASE_IMAGE_S_URL: 'https://restaurant-api.dicoding.dev/images/small/',
  BASE_IMAGE_M_URL: 'https://restaurant-api.dicoding.dev/images/medium/',
  BASE_IMAGE_L_URL: 'https://restaurant-api.dicoding.dev/images/large/',
  DEFAULT_LANGUAGE: 'en-us',
  CACHE_NAME: new Date().toISOString(),
  DATABASE_NAME: 'restorang-db',
  DATABASE_VERSION: 1,
  OBJECT_STORE_NAME: 'restorang',
  API_LIST_RESTAURANT: 'https://restaurant-api.dicoding.dev/list',
  API_DETAIL_RESTAURANT: (id) => {
    return `https://restaurant-api.dicoding.dev/detail/${id}`;
  },
};
export default CONFIG;
