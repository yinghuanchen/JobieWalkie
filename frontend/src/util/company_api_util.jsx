import axios from "axios"

export const fetchAllCompanies = () => {
    return axios.get(`/api/companies`)
}

export const fetchCompany = (companyId) => {
    return axios.get(`/api/companies/${companyId}`, companyId)
}