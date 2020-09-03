import React, { useEffect } from "react"
import { connect } from "react-redux"
import { fetchUserDebriefs } from "../../actions/debrief_actions"
import DebriefList from "../debriefs/debrief_list"

const Profile = ({ currentUser, debriefs, fetchUserDebriefs, match }) => {

    useEffect(() => {
      fetchUserDebriefs()
    }, [fetchUserDebriefs])

    // const userDebriefs = debriefs.filter(debrief => debrief.author_id === currentUser._id) // Clint-TODO: Watch out for the parameter after the period. Check the state. May not need this because of fetchUserDebrief

    return (
        <div>
            <h1>Hi {currentUser.handle}</h1>
            <DebriefList debriefs={debriefs} />
        </div>
    )
}

const mapSTP = (state) => {
    return {
        currentUser: state.session.user,
        debriefs: state.debriefs.data || []
    }
}

const mapDTP = (dispatch) => {
    return {
        fetchUserDebriefs: () => dispatch(fetchUserDebriefs())
    }
}

export default connect(mapSTP, mapDTP)(Profile)