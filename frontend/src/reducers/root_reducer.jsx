import { combineReducers } from "redux"
import sessionReducer from "./session_reducer"
import errorsReducer from "./errors_reducer"
import debriefReducer from "./debrief_reducer"
import favoriteReducer from "./favorite_reducer"
import jobListingReducer from "./job_listing_reducer"

const rootReducer = combineReducers({
    errors: errorsReducer,
    debriefs: debriefReducer,
    favorites: favoriteReducer,
    jobListings: jobListingReducer,
    session: sessionReducer,
})

export default rootReducer