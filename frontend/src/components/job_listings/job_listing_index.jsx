import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { fetchAllJobListings } from "../../actions/job_listing_actions"
import { fetchUserFavoriteJobListingIds } from "../../actions/favorite_actions";
import JobListingItem from "./job_listing_item"
import '../../stylesheets/job_listings.css'

const JobListingIndex = ({ favorites, jobListings, fetchUserFavoriteJobListingIds, fetchAllJobListings }) => {

    useEffect(() => {
        fetchAllJobListings()
    }, [fetchAllJobListings])

    useEffect(() => {
      fetchUserFavoriteJobListingIds()
    }, [])

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
      jobListings: state.jobListings.data ? state.jobListings.data : [],
      favorites: state.favorites ? state.favorites : [], 
    };
}

const mapDTP = (dispatch) => {
    return {
      fetchAllJobListings: () => dispatch(fetchAllJobListings()),
      fetchUserFavoriteJobListingIds: () => dispatch(fetchUserFavoriteJobListingIds())
    }
}

export default connect(mapSTP, mapDTP)(JobListingIndex);
