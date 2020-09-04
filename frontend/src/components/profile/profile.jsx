import React, { useEffect } from "react"
import { connect } from "react-redux"
import { fetchAllJobListings } from "../../actions/job_listing_actions"
import { fetchUserDebriefs } from "../../actions/debrief_actions"
import { fetchUserFavoriteJobListingIds } from "../../actions/favorite_actions"
import DebriefList from "../debriefs/debrief_list"
import JobListingItem from "../job_listings/job_listing_item"
import '../../stylesheets/profile.css'

const Profile = ({ currentUser, debriefs, favoriteJobListingID, fetchAllJobListings, fetchUserDebriefs, fetchUserFavoriteJobListingIds, jobListings, match }) => {

    // useEffect(() => {
    //     fetchAllJobListings()
    // }, [fetchAllJobListings])

    useEffect(() => {
        fetchUserDebriefs()
    }, [fetchUserDebriefs])

    useEffect(() => {
        fetchUserFavoriteJobListingIds()
    }, [fetchUserFavoriteJobListingIds])

    // debugger
    // const favoriteJobListings = jobListings.filter(jobListing => favoriteJobListingID.includes(jobListing._id) ? jobListing._id : null)
    
    return (
        <div className='main-profile'>
            {/* <ul className="joblisting-index">
                {jobListings.map((jobListing) => {
                    return (
                        <JobListingItem key={jobListing._id} jobListing={favoriteJobListings} />
                    )
                })}
            </ul> */}
            <p>{currentUser.handle}</p>
            <DebriefList debriefs={debriefs} className='debrief'/>
        </div>
    )
}

const mapSTP = (state) => {
    return {
        currentUser: state.session.user,
        debriefs: state.debriefs.data || [],
        favoriteJobListingID: state.favorites,
        jobListings: state.jobListings.data ? state.jobListings.data : [],
    }
}

const mapDTP = (dispatch) => {
    return {
        // fetchAllJobListings: () => dispatch(fetchAllJobListings()),
        fetchUserDebriefs: () => dispatch(fetchUserDebriefs()),
        fetchUserFavoriteJobListingIds: () => dispatch(fetchUserFavoriteJobListingIds())
    }
}

export default connect(mapSTP, mapDTP)(Profile)