// import React, { useState } from "react"
// import { connect } from "react-redux"
// import { FaStar } from "react-icons/fa";
// import { createFavorite, deleteFavorite } from "../../actions/favorite_actions"

// const FavoriteItem = ({ jobListing, favorite, currentUser, createFavorite, deleteFavorite }) => {
//     const isFavorited = !!favorite
  
//     const handleCreateFavorite = () => {
//         createFavorite({
//             user: currentUser,
//             jobListing: jobListing._id
//         })
//     }

//     const handleDeleteFavorite = () => {
//         deleteFavorite(favorite)
//     }

//     // <FaStar className="link-star" />
//     const placeFavorite = isFavorited ? (
//         <>
//             <button onClick={handleDeleteFavorite}>Favorited</button>
//         </>
//     ) : (
//         <>
//             <button onClick={handleCreateFavorite}>Not Favorited</button>
//         </>
//     );

//     return (
//         <>
//             {placeFavorite}
//         </>
//     )

// }

// const mapSTP = (state) => {
//     return {
//         currentUser: state.session.user,
//     }
// }

// const mapDTP = (dispatch) => {
//     return {
//         createFavorite: (favorite) => dispatch(createFavorite(favorite)),
//         deleteFavorite: (favorite) => dispatch(deleteFavorite(favorite._id))
//     }
// }

// export default connect(mapSTP, mapDTP)(FavoriteItem)

// // JW-TODO: Setup FavoriteItem