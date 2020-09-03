import axios from "axios"

export const fetchAllFavorites = () => {
  return axios.get(`/api/users/current/favorites`)
}

export const createFavorite = (favorite) => {
  return axios.post(`/api/favorites`, favorite)
}

export const deleteFavorite = (favoriteId) => {
  return axios.delete(`/api/favorites/${favoriteId}`)
}