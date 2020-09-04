import * as JobListingAPIUtil from "../util/job_listing_api_util"


// Action Constants
export const RECEIVE_ALL_JOB_LISTINGS = "RECEIVE_ALL_JOB_LISTINGS"
export const RECEIVE_JOB_LISTING = "RECEIVE_JOB_LISTING"
export const CLEAR_JOB_LISTINGS = "CLEAR_JOB_LISTINGS"


// Regular Action Creators
export const receiveAllJobListings = (jobListings) => ({
    type: RECEIVE_ALL_JOB_LISTINGS,
    jobListings
})

export const receiveJobListing = (jobListing) => ({
    type: RECEIVE_JOB_LISTING,
    jobListing
})

// Thunk Action Creator
export const fetchAllJobListings = () => (dispatch) => {
    return JobListingAPIUtil.fetchAllJobListings()
    .then((jobListings) => { dispatch(receiveAllJobListings(jobListings)) })
    .catch((err) => console.log(err))
}

export const fetchUserJobListings = () => (dispatch) => {
    return JobListingAPIUtil.fetchUserJobListings()
        .then((debriefs) => { dispatch(receiveAllJobListings(debriefs)) })
        .catch((err) => console.log(err))
}

export const fetchJobListing = (jobListingId) => (dispatch) => {
    return JobListingAPIUtil.fetchJobListing(jobListingId)
    .then((jobListing) => { dispatch(receiveJobListing(jobListing)) })
    .catch((err) => console.log(err))
}
