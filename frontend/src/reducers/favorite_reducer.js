import {
    RECEIVE_ALL_FAVORITES,
    RECEIVE_FAVORITE,
    DELETE_FAVORITE,
} from "../actions/favorite_actions"

const favoriteReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    let nextState = Object.assign({}, oldState)

    switch (action.type) {
        case RECEIVE_ALL_FAVORITES:
            const state = action.jobListingIds.data.reduce((obj, jobListingId) => {
                obj[jobListingId] = jobListingId; 
                return obj
            }, {});
            return state; 
        case RECEIVE_FAVORITE:
            nextState[action.jobListingId.data] = action.jobListingId.data; 
            return nextState 
        case DELETE_FAVORITE:
            delete nextState[action.jobListingId.data]
            return nextState
        default:
            return oldState
    }
}

// const favoriteReducer = (oldState = [], action) => {
//     // Object.freeze(oldState)
//     let nextState = oldState.slice();
//     switch (action.type) {
//         case RECEIVE_ALL_FAVORITES:
//             return action.jobListingIds.data; 
//         case RECEIVE_FAVORITE:
//             nextState.push(action.jobListingId.data);
//             return nextState;
//         case DELETE_FAVORITE:
//             return nextState
//         default:
//             return oldState
//     }
// }

export default favoriteReducer