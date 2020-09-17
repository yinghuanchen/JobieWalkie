import React from "react"
import { connect } from "react-redux"
import { FaExternalLinkAlt } from "react-icons/fa"
import { createFavorite, deleteFavorite } from "../../actions/favorite_actions";
import { fetchUserFavoriteJobListingIds } from '../../actions/favorite_actions';
import {receivePlace, removePlace} from '../../actions/place_actions';
;// import {Link} from 'react-router-dom';

const JobListingItem = ({
  currentUser,
  createFavorite,
  deleteFavorite,
  favorites,
  jobListing,
  fetchUserFavoriteJobListingIds,
  receivePlace,
  removePlace,
}) => {
  const handleCreateFavorite = () => {
    createFavorite({
      //user: currentUser,
      jobListingId: jobListing._id,
    }).then(() => fetchUserFavoriteJobListingIds());
  };

  const handleDeleteFavorite = () => {
    return deleteFavorite(jobListing._id).then(() =>
      fetchUserFavoriteJobListingIds()
    );
  };

  const handleClick = (e) => {
      removePlace(); 
      receivePlace(jobListing.place); 
  }


  const isFavorite = jobListing._id in favorites;

  const placeFavorite = isFavorite ? (
    <button className="favorite-btn" onClick={handleDeleteFavorite}>
      <i className="fas fa-star fa-lg favorite"></i>
    </button>
  ) : (
    <button className="favorite-btn" onClick={handleCreateFavorite}>
      <i className="fas fa-star fa-lg unfavorite"></i>
    </button>
  );
  return (
    <div className="main-listings" onClick={handleClick}>
      <div className="invidiual-job-listings">
        <div className="listings-item listings-title">
          {jobListing.jobTitle}
        </div>
        <div className="listings-item" id="listings-company-name">
          {jobListing.companyName}
        </div>
        <div className="listings-item" id="listings-place">
          {jobListing.place}
        </div>
        <div className="listings-item" id="listings-date-posted">
          {jobListing.datePosted.toString().slice(0, 10)}
        </div>
      </div>

      <div className="link-listings">
        <a href={`${jobListing.jobLink}`} target="_blank">
          
          <FaExternalLinkAlt className="link-logo" />
        </a>
        {placeFavorite}
      </div>
    </div>
  );
};


const mapSTP = (state) => {
    return {
        favorites: state.favorites ? state.favorites : {},
    }
}

const mapDTP = (dispatch) => {
    return {
      createFavorite: (favorite) => dispatch(createFavorite(favorite)),
      deleteFavorite: (favorite) => dispatch(deleteFavorite(favorite)),
      fetchUserFavoriteJobListingIds: () =>
        dispatch(fetchUserFavoriteJobListingIds()),
      receivePlace: (place) => dispatch(receivePlace(place)),
      removePlace: () => dispatch(removePlace()),
    };
}

export default connect(mapSTP, mapDTP)(JobListingItem)