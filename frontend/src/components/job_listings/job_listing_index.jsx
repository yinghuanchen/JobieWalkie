import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { fetchAllJobListings } from "../../actions/job_listing_actions"
// import { fetchAllFavorites } from "../../actions/favorite_actions"
import JobListingItem from "./job_listing_item"
import '../../stylesheets/job_listings.css'

// const JobListingIndex = ({ favorites, jobListings, fetchAllFavorites, fetchAllJobListings }) => {
const JobListingIndex = ({ jobListings, fetchAllFavorites, fetchAllJobListings }) => {

    useEffect(() => {
        fetchAllJobListings()
    }, [fetchAllJobListings])

    // useEffect(() => {
    //     fetchAllFavorites()
    // }, [fetchAllFavorites])

    return (
      <ul className="joblisting-index">
        {jobListings.map((jobListing) => {
            return (
                <JobListingItem key={jobListing._id} jobListing={jobListing} />
            )
        })}
      </ul>
    )
}

const mapSTP = (state) => {
    return {
        // favorites: state.favorites.data ? state.favorites.data : [],
        jobListings: state.jobListings.data ? state.jobListings.data : []
    }
}

const mapDTP = (dispatch) => {
    return {
        fetchAllJobListings: () => dispatch(fetchAllJobListings()),
        // fetchAllFavorites: () => dispatch(fetchAllFavorites())
    }
}

export default connect(mapSTP, mapDTP)(JobListingIndex);
