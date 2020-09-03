import React, { useEffect } from "react"
import { connect } from "react-redux"
import { fetchAllFavorites } from "../../actions/favorite_actions" // JW-TODO: Should change this to UserFavorites
import { fetchAllJobListings } from "../../actions/job_listing_actions"
import { fetchUserDebriefs } from "../../actions/debrief_actions"
import DebriefList from "../debriefs/debrief_list"

const Profile = ({ currentUser, debriefs, favorite, fetchAllFavorites, fetchAllJobListings, fetchUserDebriefs, jobListings, match }) => {
    // let favoriteId = match.params.favoriteId

    useEffect(() => {
      fetchUserDebriefs()
    }, [fetchUserDebriefs])

    useEffect(() => {
        fetchAllFavorites()
    }, [fetchAllFavorites])

    useEffect(() => {
        fetchAllJobListings()
    }, [fetchAllJobListings])

    // const favoriteJobListings = jobListings.filter((jobListing) => {jobListing.user === userId})
    // const userDebriefs = debriefs.filter(debrief => debrief.author_id === currentUser._id) // Clint-TODO: Watch out for the parameter after the period. Check the state. May not need this because of fetchUserDebrief

    return (
        <div>
            <h1>Hi {currentUser.handle}</h1>
            {/* <JobListingList jobListings={jobListings} favorites={favoriteJobListings} /> */}
            <DebriefList debriefs={debriefs} />
        </div>
    )
}

const mapSTP = (state) => {
    return {
        currentUser: state.session.user,
        debriefs: state.debriefs.data || [],
        favorite: state.favorites.data,
        jobListings: state.jobListings.data || []
    }
}

const mapDTP = (dispatch) => {
    return {
        fetchAllFavorites: () => dispatch(fetchAllFavorites()), // JW-TODO: Fix backend route. Should rename this to fetchUserFavorites
        fetchAllJobListings: () => dispatch(fetchAllJobListings()),
        fetchUserDebriefs: () => dispatch(fetchUserDebriefs()) // JW-TODO: Create backend route
    }
}

export default connect(mapSTP, mapDTP)(Profile)