import React from "react"
import { connect } from "react-redux"

const Profile = ({ currentUser }) => {
    return (
        <div>
            <h1>{currentUser.handle}</h1>
        </div>
    )
}

const mapSTP = (state) => {
    return {
        currentUser: state.session.users[state.session.id]
    }
}

// const mapDTP = (dispatch) => {
//     return {
//         // JW-TODO: Setup profile mapDTP
//     }
// }

export default connect(mapSTP, null)(Profile)