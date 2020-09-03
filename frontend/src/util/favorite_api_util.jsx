import axios from "axios"

export const fetchAllFavorites = () => {
    return axios.get(`/api/users/current/favorites`)
}

export const fetchUserFavoriteJobListingIds = () => {
  return axios.get(`/api/users/current/favoriteJobListingId`);
};

export const createFavorite = (favorite) => {
    return axios.post(`/api/favorites`, favorite)
}

export const deleteFavorite = (jobListingId) => {
    return axios({
      method: "delete",
      url: "/api/favorites",
      data: { jobListingId },
      //headers: { "Content-Type":"application/json" },
    });
}