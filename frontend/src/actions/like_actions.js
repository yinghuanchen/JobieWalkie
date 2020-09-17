import * as LikeAPIUtil from "../util/like_api_util";

export const RECEIVE_LIKE_COUNT = "RECEIVE_LIKE_COUNT"
export const RECEIVE_ALL_LIKES = "RECEIVE_ALL_LIKE"
export const RECEIVE_LIKE = "RECEIVE_LIKE"
export const DELETE_LIKE = "DELETE_LIKE" 

export const receiveDebriefLikeCount = (debriefId) => ({
    type: RECEIVE_LIKE_COUNT, 
    debriefId
})

export const receiveAllLikes = (debriefIds) => ({
    type: RECEIVE_ALL_LIKES,
    debriefIds
})

export const receiveLike = (debriefId) => ({
    type: RECEIVE_LIKE,
    debriefId 
})

export const removeLike = (debriefId) => ({
    type: DELETE_LIKE,
    debriefId
}) 

export const fetchUserLikeDebriefIds = () => (dispatch) => {
    return LikeAPIUtil.fetchUserLikeDebriefIds()
        .then((debriefIds) => {
            dispatch(receiveAllLikes(debriefIds));
        })
        .catch((err) => console.log(err));
};

export const createLike = (debriefId) => (dispatch) => {
    return LikeAPIUtil.createLike(debriefId)
        .then((debriefId) => {
            dispatch(receiveLike(debriefId));
        })
        .catch((err) => console.log(err));
}

export const deleteLike = (debriefId) => (dispatch) => {
    return LikeAPIUtil.deleteLike(debriefId)
        .then((debriefId) => {
            dispatch(removeLike(debriefId));
        })
        .catch((err) => console.log(err));
}
