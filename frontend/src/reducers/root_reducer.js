import { combineReducers } from "redux"
import sessionReducer from "./session_reducer"
import errorsReducer from "./errors_reducer"
import companyReducer from "./company_reducer"
import debriefReducer from "./debrief_reducer"
import favoriteReducer from "./favorite_reducer"
import jobListingReducer from "./job_listing_reducer"
import placeReducer from './place_reducer'; 
import likeReducer from './like_reducer';
const rootReducer = combineReducers({
  errors: errorsReducer,
  companies: companyReducer,
  debriefs: debriefReducer,
  favorites: favoriteReducer,
  jobListings: jobListingReducer,
  session: sessionReducer,
  place: placeReducer,
  likes: likeReducer, 
});

export default rootReducer