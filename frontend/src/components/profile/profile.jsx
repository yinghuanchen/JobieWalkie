import React, { useEffect } from "react"
import { connect } from "react-redux"
// import { fetchAllDebriefs } from "../../actions/debrief_actions"
import { fetchAllJobListings } from "../../actions/job_listing_actions"
import { fetchAllFavorites } from "../../actions/favorite_actions"

const Profile = ({ currentUser, favorite, jobListings, fetchAllJobListings, fetchAllFavorites, match }) => {
  // let favoriteId = match.params.favoriteId

  // useEffect(() => {
  //   fetchAllDebriefs()
  // }, [fetchAllDebriefs])

  useEffect(() => {
    fetchAllFavorites()
  }, [fetchAllFavorites])

  useEffect(() => {
    fetchAllJobListings()
  }, [fetchAllJobListings])

  // const favoriteJobListings = jobListings.filter((jobListing) => {
  //   jobListing.favorite_id === favoriteId
  // })

  // const userDebriefs = debriefs.filter(debrief => debrief.author_id === currentUser._id)

  return (
    <div>
      <h1>{currentUser.handle}</h1>
      {/* <JobListingList jobListings={jobListings} favorites={favoriteJobListings} /> */}
      {/* <JobListingList jobListings={jobListings} /> */}
      {/* <DebriefItem debriefs={userDebriefs} /> */}
      <p>HI</p>
    </div>
  )
}

const mapSTP = (state ) => {
    return {
      currentUser: state.session.user,
      // debriefs: state.debriefs.data ? state.debriefs.data : [],
      favorite: state.favorites.data,
      jobListings: state.jobListings.data ? state.jobListings.data : []
    }
}

const mapDTP = (dispatch) => {
    return {
      // fetchAllDebriefs: () => dispatch(fetchAllDebriefs()),
      fetchAllJobListings: () => dispatch(fetchAllJobListings()),
      fetchAllFavorites: () => dispatch(fetchAllFavorites())
    }
}

export default connect(mapSTP, mapDTP)(Profile)