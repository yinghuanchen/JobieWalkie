import * as FavoriteAPIUtil from "../util/favorite_api_util"
import { receiveAllJobListings } from "./job_listing_actions"

// Action Constants
export const RECEIVE_ALL_FAVORITES = "RECEIVE_ALL_FAVORITES"
export const RECEIVE_FAVORITE = "RECEIVE_FAVORITE"
export const DELETE_FAVORITE = "DELETE_FAVORITE"

// Regular Action Creators
export const receiveAllFavorites = (jobListingIds) => ({
    type: RECEIVE_ALL_FAVORITES,
    jobListingIds,
});

export const receiveFavorite = (jobListingId) => ({
    type: RECEIVE_FAVORITE,
    jobListingId,
});

export const removeFavorite = (jobListingId) => ({
    type: DELETE_FAVORITE,
    jobListingId,
});


// Thunk Action Creator
// export const fetchAllFavorites = () => (dispatch) => {
//   return FavoriteAPIUtil.fetchAllFavorites()
//     .then((jobListings) => {
//       dispatch(receiveAllFavorites(jobListings));
//     })
//     .catch((err) => console.log(err));
// };

export const fetchAllFavorites = () => (dispatch) => {
  return FavoriteAPIUtil.fetchAllFavorites()
    .then((jobListings) => {
      dispatch(receiveAllJobListings(jobListings));
    })
    .catch((err) => console.log(err));
};


export const fetchUserFavoriteJobListingIds = () => (dispatch) => {
  return FavoriteAPIUtil.fetchUserFavoriteJobListingIds()
    .then((jobListingIds) => {
      dispatch(receiveAllFavorites(jobListingIds));
    })
    .catch((err) => console.log(err));
};

export const createFavorite = (favorite) => (dispatch) => {
    return FavoriteAPIUtil.createFavorite(favorite)
      .then((jobListingId) => {
        dispatch(receiveFavorite(favorite));
      })
      .catch((err) => console.log(err));
}

export const deleteFavorite = (favoriteId) => (dispatch) => {
    return FavoriteAPIUtil.deleteFavorite(favoriteId)
      .then((jobListingId) => {
        dispatch(removeFavorite(jobListingId));
      })
      .catch((err) => console.log(err));
}
