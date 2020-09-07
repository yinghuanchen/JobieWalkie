import {
    RECEIVE_ALL_FAVORITES,
    RECEIVE_FAVORITE,
    DELETE_FAVORITE,
} from "../actions/favorite_actions"

// const favoriteReducer = (oldState = {}, action) => {
//     Object.freeze(oldState)
//     let nextState = Object.assign({}, oldState)

//     switch (action.type) {
//         case RECEIVE_ALL_FAVORITES:
//             return Object.assign({}, oldState, action.favorites)
//         case RECEIVE_FAVORITE:
//             return action.favorite
//         case DELETE_FAVORITE:
//             delete nextState[action.favoriteId]
//             return nextState
//         default:
//             return oldState
//     }
// }

const favoriteReducer = (oldState = [], action) => {
    // Object.freeze(oldState)
    let nextState = oldState.slice();
    switch (action.type) {
        case RECEIVE_ALL_FAVORITES:
            return action.jobListingIds.data; 
        case RECEIVE_FAVORITE:
            nextState.push(action.jobListingId.data);
            return nextState;
        case DELETE_FAVORITE:
            return nextState
        default:
            return oldState
    }
}

export default favoriteReducer