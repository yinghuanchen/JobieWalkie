import { combineReducers } from "redux"
import sessionReducer from "./session_reducer"
import errorsReducer from "./errors_reducer"
import JobListingReducer from "./job_listing_reducer"

const rootReducer = combineReducers({
    session: sessionReducer,
    jobListings: JobListingReducer,
    errors: errorsReducer
})

export default rootReducer