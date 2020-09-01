import React, { useEffect } from "react"
import { connect } from "react-redux"
import { fetchAllJobListings } from "../../actions/job_listing_actions"
import JobListingList from "./job_listing_list"

const JobListingIndex = ({ jobListings, fetchAllJobListings }) => {
    
    useEffect(() => {
        fetchAllJobListings()
    }, [fetchAllJobListings])

    return (
        <>
            <div>
                <h1>Job Listings</h1>
                <JobListingList jobListings={jobListings}/>
            </div>
        </>
    )
}

const mapSTP = (state) => {
    return {
        jobListings: Object.values(state.jobListings)
    }
}

const mapDTP = (dispatch) => {
    return {
        fetchAllJobListings: () => dispatch(fetchAllJobListings())
    }
}

export default connect(mapSTP, mapDTP)(JobListingIndex)


