import React, { useEffect } from "react"
import { connect } from "react-redux"
import { fetchUserDebriefs } from "../../actions/debrief_actions"
import DebriefList from "../debriefs/debrief_list"
import { fetchAllFavorites } from "../../actions/favorite_actions"
import JobListingItem from "../job_listings/job_listing_item"

const Profile = ({ currentUser, debriefs, jobListings, fetchUserDebriefs, fetchAllFavorites, match }) => {

    useEffect(() => {
      fetchUserDebriefs()
    }, [])

    useEffect(() => {
      fetchAllFavorites()
    }, [])
    
    // const userDebriefs = debriefs.filter(debrief => debrief.author_id === currentUser._id) // Clint-TODO: Watch out for the parameter after the period. Check the state. May not need this because of fetchUserDebrief
    debugger
    return (
        <div>
            <h1>Hi {currentUser.handle}</h1>
            <DebriefList debriefs={debriefs} />
            {
                jobListings.map(jobListing => <JobListingItem jobListing={jobListing}/>)
                // JW-TODO: Used fetchAllFavorites to grab all of user's favorites and used receiveAllJobListings
                // to get the jobListing objects. Mapped through them and passed them into JobListingItem
            }
        </div>
    )
}



const mapSTP = (state) => {
    return {
        currentUser: state.session.user,
        debriefs: state.debriefs.data || [],
        jobListings: state.jobListings.data || []
    }
}

const mapDTP = (dispatch) => {
    return {
        fetchUserDebriefs: () => dispatch(fetchUserDebriefs()),
        fetchAllFavorites: () => dispatch(fetchAllFavorites())
    }
}

export default connect(mapSTP, mapDTP)(Profile)