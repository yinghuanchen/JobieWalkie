import React from "react"
import { connect } from "react-redux"
import { Link, useHistory } from "react-router-dom"
import { logout } from "../../actions/session_actions"

const NavBar = ({ loggedIn, logout }) => {

    const pushHistory = useHistory()
    const handleLogout = () => {
        // Dispatch (call) logout prop
        logout()
        // Route to root page ("/")
        pushHistory.push("/")
    }

    // Selectively render links dependent on whether the user is logged in
    const getLinks = () => {
        if (loggedIn) {
            return (
                <div className="NavBar">
                    {/* JW-TODO: more links to the pages if needed on the navbar */}
                    <button onClick={handleLogout}>Logout</button>
                </div>
            )
        } else {
            return (
                <div className="Links">
                    <Link to={"/signup"}>Signup</Link>
                    <Link to={"/login"}>Login</Link>
                </div>
            )
        }
    }

    return (
        <div>
            <h1>JobieWalkie</h1>
            {getLinks()}
        </div>
    )
}

const mapSTP = (state) => {
    return {
    loggedIn: state.session.isAuthenticated
}}

const mapDTP = (dispatch) => {
    return {
        logout: () => dispatch(logout())
}}

export default connect(mapSTP, mapDTP)(NavBar)