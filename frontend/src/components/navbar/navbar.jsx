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
		pushHistory.replace("/")
	}

	const handleClick = (e) => {
		const dropdown = document.getElementsByClassName('profile-dropdown-content');
		if (Array.from(dropdown).includes('dropdown-close')) {
			dropdown.classList.remove('dropdown-close')
			dropdown.classList.add('dropdown-open')
		} else {
			dropdown.classList.remove("dropdown-open");
			dropdown.classList.add("dropdown-close");
		}
	}

	// Selectively render links dependent on whether the user is logged in
	const getLinks = () => {
		if (loggedIn) {
			return (
					<div className="profile-dropdown-container fas fa-angle-down" onClick={handleClick}>
						<ul className="profile-dropdown-content">
							<Link to="/" className="dropdown-btn">
								Debriefs
									</Link>
							<Link to="/jobListings" className="dropdown-btn">
								Job Listings
									</Link>
							<Link to="/" className="dropdown-btn">
								Profile
									</Link>
							<div className="dropdown-btn" onClick={handleLogout}>
								Logout
									</div>
						</ul>
					</div>
			)
		} else {
			return (
				<div className="login-signup-link">
					<Link to={"/signup"}>Signup</Link>
					<Link to={"/login"}>Login</Link>
				</div>
			)
		}
	}

	const SearchBar = loggedIn ? <SearchBarContainer /> : null

	return (
    <div className="NavBar">
      <Link to="/">
        <span className="left-container"> JobieWalkie</span>
      </Link>
      {SearchBar}
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