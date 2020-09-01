import React from "react"
import { connect } from "react-redux"
import { useParams } from "react-router-dom"
import { fetchAllJobListings } from "../../actions/job_listing_actions"
// import { fetchSingleFavorite } from "../../actions/"
import JobListingList from "../job_listings/job_listing_list"

const Profile = ({ currentUser, favorite, jobListings, fetchAllJobListings, fetchSingleFavorite }) => {
  
  let { favoriteId } = useParams()
  favoriteId = parseInt(favoriteId)

  useEffect(() => {
    fetchSingleFavorite(favoriteId)
  }, [fetchSingleFavorite, favoriteId])

  useEffect(() => {
    fetchAllJobListings()
  }, [fetchAllJobListings])

  const favoriteJobListings = jobListings.filter((jobListing) => {
    jobListing.favorite_id === favoriteId
  })

  return (
    <div>
        <h1>{currentUser.handle}</h1>
        <JobListingList jobListings={jobListings} favorites={favoriteJobListings} />
    </div>
  )
}

const mapSTP = (state) => {
    return {
      currentUser: state.session.users[state.session.id],
      favorite: state.favorites.data[ownProps.match.params.favoriteId] ? state.favorites.data[ownProps.match.params.favoriteId] : [],
      jobListings: state.jobListings.data ? state.jobListings.data : [],
    }
}

const mapDTP = (dispatch) => {
    return {
        fetchSingleFavorite: () => dispatch(fetchSingleFavorite(favoriteId)),
        fetchAllJobListings: () => dispatch(fetchAllJobListings())
    }
}

export default connect(mapSTP, mapDTP)(Profile)

// JW-TODO: Create Favorites actions