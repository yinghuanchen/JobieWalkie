import React from "react"
import { connect } from "react-redux"
import { FaExternalLinkAlt } from "react-icons/fa"
import { createFavorite, deleteFavorite } from "../../actions/favorite_actions"

const JobListingItem = ({ currentUser, createFavorite, deleteFavorite, favorite, jobListing }) => {

    const handleCreateFavorite = () => {
        createFavorite({
            user: currentUser,
            jobListing: jobListing._id
        })
    }

    const handleDeleteFavorite = () => {
        return deleteFavorite(favorite._id)
    }

    const favoriteJobListing = favorite.jobListing === jobListing._id

    const placeFavorite = favoriteJobListing ? (
        <button onClick={handleDeleteFavorite}>Favorited</button>
    ) : (
        <button onClick={handleCreateFavorite}>Not Favorited</button>
    )

    return (
        <div className="main-listings">
            <div className="invidiual-job-listings">
                <div className="listings-title">{jobListing.jobTitle}</div>
                <div className="listings-item">{jobListing.companyName}</div>
                <div className="listings-item">{jobListing.place}</div>
                <div className="listings-item">{jobListing.datePosted}</div>
            </div>

            <div className="link-listings">
                <a href={`${jobListing.jobLink}`}>
                    {" "}
                    <FaExternalLinkAlt className="link-logo" />{" "}
                </a>
                {placeFavorite}
            </div>
        </div>
    )
}

const mapSTP = (state) => {
    return {
        favorite: state.favorites.data ? state.favorites.data : [],
    }
}

const mapDTP = (dispatch) => {
    return {
        createFavorite: (favorite) => dispatch(createFavorite(favorite)),
        deleteFavorite: (favorite) => dispatch(deleteFavorite(favorite)),
    }
}

export default connect(mapSTP, mapDTP)(JobListingItem)