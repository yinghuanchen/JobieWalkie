import React from "react"
import { connect } from "react-redux"
import { FaStar } from "react-icons/fa";
import { createFavorite, deleteFavorite } from "../../actions/favorite_actions"

const FavoriteItem = ({ jobListing, favorite, currentUser, createFavorite, deleteFavorite }) => {

    const isFavorited = !!favorite

    const handleCreateFavorite = () => {
        createFavorite({
            user_id: currentUser._id,
            favorite_id: favorite._id
        })
    }

    const handleDeleteFavorite = () => {
        deleteFavorite(favorite)
    }

    const placeFavorite = isFavorited ? (
      <>
        <button onClick={handleDeleteFavorite}><FaStar className="link-star" /></button>
      </>
    ) : (
      <>
        <button onClick={handleCreateFavorite}><FaStar className="link-star" /></button>
      </>
    );

    return (
        <>
            {placeFavorite}
        </>
    )

}

const mapSTP = (state) => {
    return {
        currentUser: state.session.users[state.session._id]
    }
}

const mapDTP = (dispatch) => {
    return {
        createFavorite: (favorite) => dispatch(createFavorite(favorite)),
        deleteFavorite: (favorite) => dispatch(deleteFavorite(favorite._id))
    }
}

export default connect(mapSTP, mapDTP)(FavoriteItem)

// JW-TODO: Setup FavoriteItem