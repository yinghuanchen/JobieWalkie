import * as DebriefAPIUtil from "../util/debrief_api_util"

// Action Constants
export const RECEIVE_ALL_DEBRIEFS = "RECEIVE_ALL_DEBRIEFS"
export const RECEIVE_DEBRIEF = "RECEIVE_DEBRIEF"
export const DELETE_DEBRIEF = "DELETE_DEBRIEF"

// Regular Action Creators
export const receiveAllDebriefs = (debriefs) => ({
    type: RECEIVE_ALL_DEBRIEFS,
    debriefs
})

export const receiveDebrief = (debrief) => ({
    type: RECEIVE_DEBRIEF,
    debrief
})

export const removeDebrief = (debriefId) => ({
    type: DELETE_DEBRIEF,
    debriefId
})

// Thunk Action Creator
export const fetchAllDebriefs = () => (dispatch) => {
    return DebriefAPIUtil.fetchAllDebriefs()
    .then((debriefs) => {dispatch(receiveAllDebriefs(debriefs))})
    .catch((err) => console.log(err))
}

export const fetchAllCompanyDebriefs = (companyId) => (dispatch) => {
    return DebriefAPIUtil.fetchAllCompanyDebriefs(companyId)
    .then((debriefs) => {dispatch(receiveAllDebriefs(debriefs))})
    .catch((err) => console.log(err))
}

export const fetchDebrief = (debriefId) => (dispatch) => {
    return DebriefAPIUtil.fetchDebrief(debriefId)
    .then((debrief) => {dispatch(receiveDebrief(debrief))})
    .catch((err) => console.log(err))
}

export const createDebrief = (debrief) => (dispatch) => {
    return DebriefAPIUtil.createDebrief(debrief)
    .then((debrief) => {dispatch(receiveDebrief(debrief))})
    .catch((err) => console.log(err))
}

export const updateDebrief = (debrief) => (dispatch) => {
    return DebriefAPIUtil.updateDebrief(debrief)
    .then((debrief) => {dispatch(receiveDebrief(debrief))})
    .catch((err) => console.log(err))
}

export const deleteDebrief = (debriefId) => (dispatch) => {
    return DebriefAPIUtil.deleteDebrief(debriefId)
    .then(() => {dispatch(receiveDebrief(debriefId))})
    .catch((err) => console.log(err))
}