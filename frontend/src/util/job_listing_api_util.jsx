import axios from "axios"

export const fetchAllJobListings = () => {
    return axios.get(`/api/jobListings`)
}

export const fetchUserJobListings = () => { // user favorites
    return axios.get(`/api/users/favoriteJoblistings`)
}

export const fetchJobListing = (jobListingId) => {
    return axios.get(`/api/jobListings/${jobListingId}`, jobListingId)
}