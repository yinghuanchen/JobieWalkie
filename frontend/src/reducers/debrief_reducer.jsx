import {
    RECEIVE_ALL_DEBRIEFS,
    RECEIVE_DEBRIEF,
    DELETE_DEBRIEF,
} from "../actions/debrief_actions"

const debriefReducer = (oldState = {}, action) => {
    Object.freeze(oldState) 
    let nextState =  Object.assign({}, oldState)
    
    switch (action.type) {
        case RECEIVE_ALL_DEBRIEFS:
            return Object.assign({}, oldState, action.debriefs)
        case RECEIVE_DEBRIEF:
            return Object.assign({}, oldState, {[action.debrief._id]: action.debrief })
        case DELETE_DEBRIEF:
            delete nextState[action.debriefId]
        default:
            oldState
    }
}

export default debriefReducer