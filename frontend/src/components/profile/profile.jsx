import React from "react"
import { connect } from "react-redux"
import { useParams } from "react-router-dom"
import { fetchAllDebriefs } from "../../actions/debrief_actions"
import { fetchAllJobListings } from "../../actions/job_listing_actions"
// import { fetchSingleFavorite } from "../../actions/"
import JobListingList from "../job_listings/job_listing_list"

const Profile = ({ currentUser, debriefs, favorite, jobListings, fetchAllJobListings, fetchSingleFavorite }) => {
  
  let { favoriteId } = useParams()
  favoriteId = parseInt(favoriteId)

  useEffect(() => {
    fetchAllDebriefs()
  }, [fetchAllDebriefs])

  useEffect(() => {
    fetchSingleFavorite(favoriteId)
  }, [fetchSingleFavorite, favoriteId])

  useEffect(() => {
    fetchAllJobListings()
  }, [fetchAllJobListings])

  const favoriteJobListings = jobListings.filter((jobListing) => {
    jobListing.favorite_id === favoriteId
  })

  const userDebriefs = debriefs.filter(debrief => debrief.author_id === currentUser._id)

  return (
    <div>
      <h1>{currentUser.handle}</h1>
      <JobListingList jobListings={jobListings} favorites={favoriteJobListings} />
      <DebriefItem debriefs={userDebriefs} />
    </div>
  )
}

const mapSTP = (state) => {
    return {
      currentUser: state.session.users[state.session.id],
      debriefs: state.debriefs.data ? state.debriefs.data : [],
      favorite: state.favorites.data[ownProps.match.params.favoriteId] ? state.favorites.data[ownProps.match.params.favoriteId] : [],
      jobListings: state.jobListings.data ? state.jobListings.data : [],
    }
}

const mapDTP = (dispatch) => {
    return {
      fetchAllDebriefs: () => dispatch(fetchAllDebriefs()),
      fetchAllJobListings: () => dispatch(fetchAllJobListings()),
      fetchSingleFavorite: () => dispatch(fetchSingleFavorite(favoriteId))
    }
}

export default connect(mapSTP, mapDTP)(Profile)

// JW-TODO: Create Favorites actions