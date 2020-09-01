import React, {useEffect} from "react"
import { connect } from "react-redux"
import { fetchAllJobListings } from "../../actions/job_listing_actions"
import { fetchAllFavorites } from "../../actions/favorite_actions"
import JobListingList from "./job_listing_list"
import '../../stylesheets/job_listings.css'

const JobListingIndex = ({ favorites, jobListings, fetchAllJobListings }) => {
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
        jobListings: state.jobListings.data ? state.jobListings.data : [],
        favorites: Object.values(state.favorites)
    }
}

const mapDTP = (dispatch) => {
    return {
        fetchAllJobListings: () => dispatch(fetchAllJobListings()),
        fetchAllFavorites: () => dispatch(fetchAllFavorites())
    }
}

export default connect(mapSTP, mapDTP)(JobListingIndex)