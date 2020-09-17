import React, { useEffect } from "react"
import { connect } from "react-redux"
import { fetchAllFavorites } from "../../actions/favorite_actions"
// import { fetchAllJobListings } from "../../actions/job_listing_actions"
import { fetchUserDebriefs } from "../../actions/debrief_actions"
import { fetchUserFavoriteJobListingIds } from "../../actions/favorite_actions" 
import { clearJobListing} from '../../actions/job_listing_actions'
import DebriefItem from "../debriefs/debrief_item"
// import DebriefList from "../debriefs/debrief_list"
import JobListingItem from "../job_listings/job_listing_item"
import '../../stylesheets/profile.css'

const Profile = ({ favorites, currentUser, debriefs, jobListings, fetchUserDebriefs, fetchUserFavoriteJobListingIds, fetchAllFavorites, clearJobListing }) => {

    useEffect(() => {
      fetchUserDebriefs()
    }, [])

    useEffect(() => {
        clearJobListing()
    }, [])

    useEffect(() => {
      fetchAllFavorites()
    }, [favorites])

    useEffect(() => {
        fetchUserFavoriteJobListingIds()
    }, [])

    const handleJobListingsTab = e => {
        const jobListingsElement = document.getElementsByClassName('joblisting-profile')[0]
        const debriefsElement = document.getElementsByClassName('list-all-debriefs')[0]
        const debriefsTabElement = document.getElementsByClassName('debriefs-tab')[0]
        e.currentTarget.classList.add('active')
        debriefsTabElement.classList.remove('active')
        jobListingsElement.classList.add('active')
        debriefsElement.classList.remove('active')
    }

    const handleDebriefsTab = e => {
        const jobListingsElement = document.getElementsByClassName('joblisting-profile')[0]
        const debriefsElement = document.getElementsByClassName('list-all-debriefs')[0]
        const jobListingsTabElement = document.getElementsByClassName('jobListing-tab')[0]
        e.currentTarget.classList.add('active')
        jobListingsTabElement.classList.remove('active')
        debriefsElement.classList.add('active')
        jobListingsElement.classList.remove('active')
    }

    return (
        <div>
            <div className="profile-div-for-margin">
                <div className="profile-tabs">
                    <span className="jobListing-tab active" onClick={handleJobListingsTab}>Favorites</span>
                    <span className="debriefs-tab" onClick={handleDebriefsTab}>Your Debriefs</span>
                </div>
            </div>
            <ul className="joblisting-profile profile-page active">
                {
                    jobListings.map(jobListing => <JobListingItem key={jobListing._id} jobListing={jobListing} />)
                    // Note: Used fetchAllFavorites to grab all of user's favorites and used receiveAllJobListings
                    // to get the jobListing objects. Mapped through them and passed them into JobListingItem
                }
            </ul>
            <ul className="list-all-debriefs profile-page">
                {
                    debriefs.map(debrief => <DebriefItem key={debrief._id} debrief={debrief} />)
                }
            </ul>
        </div>
    )
}

const mapSTP = (state, ownProps) => {
    return {
        currentUser: state.session.user,
        debriefs: Object.values(state.debriefs) || [],
        favorites: state.favorites ? state.favorites : {},
        jobListings: state.jobListings.data ? state.jobListings.data : [],
    }
}

const mapDTP = (dispatch) => {
    return {
        fetchUserDebriefs: () => dispatch(fetchUserDebriefs()),
        fetchAllFavorites: () => dispatch(fetchAllFavorites()),
        fetchUserFavoriteJobListingIds: () => dispatch(fetchUserFavoriteJobListingIds()),
        clearJobListing: () => dispatch(clearJobListing())
    }
}

export default connect(mapSTP, mapDTP)(Profile)