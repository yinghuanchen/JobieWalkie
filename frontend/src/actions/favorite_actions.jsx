import * as FavoriteAPIUtil from "../util/favorite_api_util"

// Action Constants
export const RECEIVE_ALL_FAVORITES = "RECEIVE_ALL_FAVORITES"
export const RECEIVE_FAVORITE = "RECEIVE_FAVORITE"
export const DELETE_FAVORITE = "DELETE_FAVORITE"

// Regular Action Creators
export const receiveAllFavorites = (favorites) => ({
    type: RECEIVE_ALL_FAVORITES,
    favorites,
})

export const receiveFavorite = (favorite) => ({
    type: RECEIVE_FAVORITE,
    favorite,
})

export const removeFavorite = (favoriteId) => ({
    type: DELETE_FAVORITE,
    favoriteId,
})

// Thunk Action Creator
export const fetchAllFavorites = () => (dispatch) => {
    return FavoriteAPIUtil.fetchAllFavorites()
    .then((favorites) => {
        dispatch(receiveAllFavorites(favorites))
    })
    .catch((err) => console.log(err))
}

// export const fetchFavorite = (favoriteId) => (dispatch) => {
//     return FavoriteAPIUtil.fetchFavorite(favoriteId)
//     .then((favorite) => {
//         dispatch(receiveFavorite(favorite))
//     })
//     .catch((err) => console.log(err))
// }

export const createFavorite = (favorite) => (dispatch) => {
    return FavoriteAPIUtil.createFavorite(favorite)
    .then((favorite) => {
        dispatch(receiveFavorite(favorite))
    })
    .catch((err) => console.log(err))
}

export const deleteFavorite = (favoriteId) => (dispatch) => {
    return FavoriteAPIUtil.deleteFavorite(favoriteId)
    .then((favorite) => {
        dispatch(receiveFavorite(favorite))
    })
    .catch((err) => console.log(err))
}
