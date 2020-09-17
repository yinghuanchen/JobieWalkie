import {
    RECEIVE_ALL_JOB_LISTINGS,
    RECEIVE_JOB_LISTING,
    CLEAR_JOB_LISTINGS
} from '../actions/job_listing_actions'

const jobListingReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    
    switch (action.type) {
        case RECEIVE_ALL_JOB_LISTINGS:
            return Object.assign({}, oldState, action.jobListings)
        case RECEIVE_JOB_LISTING:
            return Object.assign({}, oldState, { [action.jobListing.id]: action.jobListing })
        case CLEAR_JOB_LISTINGS: 
            return {};
        default:
            return oldState
    }
}

export default jobListingReducer