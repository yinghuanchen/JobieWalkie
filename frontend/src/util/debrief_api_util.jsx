import axios from "axios"

export const fetchAllDebriefs = () => {
    return axios.get(`/api/debriefs`)
}

export const fetchDebrief = (debriefId) => {
    return axios.get(`/api/debriefs/${debriefId}`, debriefId)
}

export const createDebrief = (debrief) => {
    return axios.post(`/api/debriefs`, debrief)
}

export const updateDebrief = (debrief) => {
    return axios.patch(`/api/debriefs/${debrief.id}`, debrief)
}

export const deleteDebrief = (debriefId) => {
    return axios.delete(`/api/debriefs/${debriefId}`)
}