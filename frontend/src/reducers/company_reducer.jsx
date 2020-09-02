import {
  RECEIVE_ALL_COMPANIES,
  RECEIVE_COMPANY,
} from "../actions/company_actions"

const companyReducer = (oldState = {}, action) => {
  Object.freeze(oldState)
  // let nextState = Object.assign({}, oldState)

  switch (action.type) {
    case RECEIVE_ALL_COMPANIES:
      return action.companies
    case RECEIVE_COMPANY:
      return action.company
    default:
      return oldState
  }
}

export default companyReducer