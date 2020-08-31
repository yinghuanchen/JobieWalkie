import * as CompanyAPIUtil from "../util/company_api_util"


// Action Constants
export const RECEIVE_ALL_COMPANIES = "RECEIVE_ALL_COMPANIES"
export const RECEIVE_COMPANY = "RECEIVE_COMPANY"


// Regular Action Creators
export const receiveAllCompanies = (companies) => ({
    type: RECEIVE_ALL_COMPANIES,
    companies
})

export const receiveCompany = (company) => ({
    type: RECEIVE_COMPANY,
    company
})


// Thunk Action Creator
export const fetchAllCompanies = () => (dispatch) => {
    return CompanyAPIUtil.fetchAllCompanies()
        .then((companies) => {
            return dispatch(receiveAllCompanies(jobListings))
        })
}

export const fetchCompany = (companyId) => (dispatch) => {
    return CompanyAPIUtil.fetchCompany(companyId)
        .then((company) => {
            return dispatch(receiveAllJobListings(company))
        })
}