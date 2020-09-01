import React, {useEffect} from "react"
import { connect } from "react-redux"
import { fetchAllJobListings } from "../../actions/job_listing_actions"
// import JobListingList from "./job_listing_list"
import JobListingItem from "./job_listing_item"

const JobListingIndex = ({ jobListings, fetchAllJobListings }) => {
    useEffect(() => {
        fetchAllJobListings()
    }, [fetchAllJobListings])

    return (
        <ul>
            {jobListings.map(jobListing => <JobListingItem jobListing={jobListing} />)}
        </ul>
    )
}

const mapSTP = (state) => {
    return {
        jobListings: state.jobListings.data ? state.jobListings.data : []
    }
}

const mapDTP = (dispatch) => {
    return {
        fetchAllJobListings: () => dispatch(fetchAllJobListings())
    }
}

export default connect(mapSTP, mapDTP)(JobListingIndex)