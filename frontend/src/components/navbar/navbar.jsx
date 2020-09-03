import React from "react"
import { connect } from "react-redux"
import { Link, useHistory } from "react-router-dom"
import { logout } from "../../actions/session_actions"
import SearchBarContainer from './searchbar'
import "../../stylesheets/navbar.css"

const NavBar = ({ loggedIn, logout }) => {

	const pushHistory = useHistory()
	const handleLogout = () => {
		logout()
		pushHistory.push("/")
	}

    // Selectively render links dependent on whether the user is logged in
    const getLinks = () => {
        if (loggedIn) {
            return (
              // <div className="nav-index">
              //     <button >Debriefs</button>
              //     <button >Job Listings</button>
              //     <button >Companies</button>
              //     <button >Profile</button>
              //     <button onClick={handleLogout}>Logout</button>
              // </div>
              <div className="right-container-div">
                <div className="profile-dropdown-container fas fa-angle-down">
                  <ul className="profile-dropdown-content">
                    <Link to="/" className="dropdown-btn">
                      Debriefs
                    </Link>
                    <Link to="/" className="dropdown-btn">
                      Job Listings
                    </Link>
                    <Link to="/" className="dropdown-btn">
                      Companies
                    </Link>
                    <Link to="/" className="dropdown-btn">
                      Profile
                    </Link>
                    <div className="dropdown-btn" onClick={handleLogout}>
                      Logout
                    </div>
                  </ul>
                </div>
              </div>
            );
        } else {
            return (
                <div className="login-signup-link">
                    <Link to={"/signup"}>Signup</Link>
                    <Link to={"/login"}>Login</Link>
                </div>
            )
        }
    }

	return (
    <div className="NavBar">
      <Link to="/">
        <span className="left-container"> JobieWalkie</span>
      </Link>
      <SearchBarContainer />
      <span className="right-container"> {getLinks()} </span>
    </div>
  );
}

const mapSTP = (state) => {
	return {
		loggedIn: state.session.isAuthenticated
	}
}

const mapDTP = (dispatch) => {
	return {
		logout: () => dispatch(logout())
	}
}

export default connect(mapSTP, mapDTP)(NavBar)