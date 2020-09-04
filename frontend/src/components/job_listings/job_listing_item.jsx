import React, {useState} from "react"
import { connect } from "react-redux"
import { FaExternalLinkAlt } from "react-icons/fa"
import { createFavorite, deleteFavorite } from "../../actions/favorite_actions";
import {fetchUserFavoriteJobListingIds} from '../../actions/favorite_actions';

const JobListingItem = ({ currentUser, createFavorite, deleteFavorite, favorites, jobListing, fetchUserFavoriteJobListingIds }) => {

    const handleCreateFavorite = () => {
        createFavorite({
          //user: currentUser,
          jobListingId: jobListing._id,
        }).then(() => fetchUserFavoriteJobListingIds()); 
    }

    const handleDeleteFavorite = () => {
        return deleteFavorite(jobListing._id).then(
          () => fetchUserFavoriteJobListingIds()); 
    }

    if (jobListing._id === "5f503ecf58fd92214b5ec124") {
        console.log("5f503ecf58fd92214b5ec124");
        console.log(favorites);
    }

    const isFavorite = favorites.includes(jobListing._id)

    const placeFavorite = isFavorite ? (
      <button onClick={handleDeleteFavorite}>Favorited</button>
    ) : (
      <button onClick={handleCreateFavorite}>Not Favorited</button>
    )

    return (
      <div className="main-listings">
        <div className="invidiual-job-listings">
          <div className="listings-item listings-title">
            {jobListing.jobTitle}
          </div>
          <div className="listings-item listings-company-name">
            {jobListing.companyName}
          </div>
          <div className="listings-item listings-place">{jobListing.place}</div>
          <div className="listings-item listings-date-posted">
            {jobListing.datePosted}
          </div>
        </div>

        <div className="link-listings">
          <a href={`${jobListing.jobLink}`}>
            {" "}
            <FaExternalLinkAlt className="link-logo" />{" "}
          </a>
          {placeFavorite}
        </div>
      </div>
    );
}

const mapSTP = (state) => {
    return {
        favorites: state.favorites ? state.favorites : [],
        // Clint-TODO: This is returning jobListings, not favorites. Look at the state and the data.
    }
}

const mapDTP = (dispatch) => {
    return {
        createFavorite: (favorite) => dispatch(createFavorite(favorite)),
        deleteFavorite: (favorite) => dispatch(deleteFavorite(favorite)),
        fetchUserFavoriteJobListingIds: () => dispatch(fetchUserFavoriteJobListingIds())
    }
}

export default connect(mapSTP, mapDTP)(JobListingItem)