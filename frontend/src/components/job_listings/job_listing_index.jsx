import React, {useEffect} from "react"
import { connect } from "react-redux"
import { fetchAllJobListings } from "../../actions/job_listing_actions"
import JobListingList from "./job_listing_list"
import '../../stylesheets/job_listings.css'

const JobListingIndex = ({ jobListings, fetchAllJobListings }) => {
    useEffect(() => {
        fetchAllJobListings()
    }, [fetchAllJobListings])

    return (
      <>
        <div>
          <JobListingList jobListings={jobListings}/>
        </div>
      </>
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