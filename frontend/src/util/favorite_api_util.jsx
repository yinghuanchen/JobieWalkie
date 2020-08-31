import axios from "axios"

export const createFavorite = (favorite) => {
    return axios.post(`/api/favorites`, favorite)
}

export const deleteFavorite = (favoriteId) => {
    return axios.delete(`/api/favorites/${favoriteId}`)
}