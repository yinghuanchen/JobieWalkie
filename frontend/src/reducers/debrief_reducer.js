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
            const state = action.debriefs.data.reduce((obj, debrief) => {
              obj[debrief._id] = debrief;
              return obj;
            }, {});
            return state;  
        case RECEIVE_DEBRIEF:
            nextState[action.debrief.data._id] = action.debrief.data;
            return nextState; 
        case DELETE_DEBRIEF:
            delete nextState[action.debriefId]
            return nextState
        default:
            return oldState
    }
}

export default debriefReducer