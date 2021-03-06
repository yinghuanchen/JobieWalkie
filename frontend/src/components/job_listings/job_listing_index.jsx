import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { fetchAllJobListings, clearJobListing } from "../../actions/job_listing_actions"
import { fetchUserFavoriteJobListingIds } from "../../actions/favorite_actions";
import JobListingItem from "./job_listing_item"; 
import MapContainer from '../map/map';
import '../../stylesheets/job_listings.css';

const JobListingIndex = ({ favorites, jobListings, clearJobListing, fetchUserFavoriteJobListingIds, fetchAllJobListings }) => {


    useEffect(() => {
      clearJobListing()
    }, [])

    useEffect(() => {
        fetchAllJobListings()
    }, [fetchAllJobListings])

    useEffect(() => {
      fetchUserFavoriteJobListingIds()
    }, [])

    return (
      <div className="joblisting-index-map">
        <div className="map-container">
          <MapContainer />
        </div>
        <ul className="joblisting-index">
          {jobListings.map((jobListing) => {
            return (
              <JobListingItem key={jobListing._id} jobListing={jobListing} />
            );
          })}
        </ul>
      </div>
    );
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
      fetchUserFavoriteJobListingIds: () => dispatch(fetchUserFavoriteJobListingIds()),
      clearJobListing: () => dispatch(clearJobListing()),
    }
}

export default connect(mapSTP, mapDTP)(JobListingIndex);
