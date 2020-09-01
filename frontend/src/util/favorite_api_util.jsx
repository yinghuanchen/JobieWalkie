import axios from "axios"

export const fetchAllFavorites = () => {
  return axios.get(`/api/favorites`)
}

export const fetchFavorite = (favoriteId) => {
  return axios.get(`/api/favorites/${favoriteId}`)
}

export const createFavorite = (favorite) => {
  return axios.post(`/api/favorites/`, favorite)
}

export const updateFavorite = (favorite) => {
  return axios.patch(`/api/favorites/${favorite.id}`, favorite);
};

export const deleteFavorite = (favoriteId) => {
  return axios.delete(`/api/favorites/${favoriteId}`)
}
