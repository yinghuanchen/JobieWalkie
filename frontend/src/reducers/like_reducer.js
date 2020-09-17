import {
    RECEIVE_LIKE,
    DELETE_LIKE,
    RECEIVE_ALL_LIKES
} from "../actions/like_actions"

const likeReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    let nextState = Object.assign({}, oldState)

    switch (action.type) {
        case RECEIVE_ALL_LIKES: 
            const state = action.debriefIds.data.reduce((obj, debriefId) => {
                obj[debriefId] = debriefId;
                return obj
            }, {});
            return state; 
        case RECEIVE_LIKE:
            nextState[action.debriefId.data] = action.debriefId.data;
            return nextState
        case DELETE_LIKE:
            delete nextState[action.debriefId.data]
            return nextState
        default:
            return oldState
    }
}

export default likeReducer;