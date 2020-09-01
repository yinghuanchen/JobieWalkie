import {
    RECEIVE_ALL_JOB_LISTINGS,
    RECEIVE_JOB_LISTING
} from '../actions/job_listing_actions'

const JobListingReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    
    switch (action.type) {
        case RECEIVE_ALL_JOB_LISTINGS:
            return Object.assign({}, oldState, action.jobListings)
        case RECEIVE_JOB_LISTING:
            return Object.assign({}, oldState, { [action.jobListing.id]: action.jobListing})
        default:
            return oldState
    }
}

export default JobListingReducer