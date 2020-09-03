import axios from "axios"

export const fetchAllDebriefs = () => {
    return axios.get(`/api/debriefs`)
}

export const fetchCompanyDebriefs = (companyId) => {
  return axios.get(`/api/companies/${companyId}/debriefs`)
}

export const fetchUserDebriefs = (userId) => {
    return axios.get(`/api/users/${userId}/debriefs`)
}

export const fetchDebrief = (debriefId) => {
    return axios.get(`/api/debriefs/${debriefId}`)
}

export const createDebrief = (debrief) => {
    return axios.post(`/api/debriefs`, debrief)
}

export const updateDebrief = (debrief) => {
    return axios.post(`/api/debriefs/${debrief._id}`, debrief)
}

export const deleteDebrief = (debriefId) => {
    return axios.delete(`/api/debriefs/${debriefId}`)
}