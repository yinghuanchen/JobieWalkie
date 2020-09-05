import {
    RECEIVE_ALL_COMPANIES,
    RECEIVE_COMPANY,
} from "../actions/company_actions"

const companyReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    let nextState = Object.assign({}, oldState)

    switch (action.type) {
        case RECEIVE_ALL_COMPANIES:
            const state = action.companies.data.reduce((obj, company) => {
                obj[company._id] = company;
                return obj
            }, {});
            return state; 
        case RECEIVE_COMPANY:
            nextState[action.company.data._id] = action.company.data; 
            return nextState;
        default:
            return oldState
    }
}

export default companyReducer