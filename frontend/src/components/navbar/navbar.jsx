import React from "react"
import { connect } from "react-redux"
import { Link, useHistory } from "react-router-dom"
import { logout } from "../../actions/session_actions"
import SearchBarContainer from './searchbar'
import "../../stylesheets/navbar.css"

const NavBar = ({ loggedIn, logout, currentUser }) => {

	const pushHistory = useHistory()
	const handleLogout = () => {
		logout()
		pushHistory.replace("/")
	}

	// Selectively render links dependent on whether the user is logged in
	const getLinks = () => {
		if (loggedIn) {
			return (
					<div className="profile-dropdown-container fas fa-angle-down" >
						<ul className="profile-dropdown-content">
							<Link to="/debriefs" className="dropdown-btn">
								Debriefs
									</Link>
							<Link to="/jobListings" className="dropdown-btn">
								Job Listings
									</Link>
							<Link to={`/users/${currentUser.id}`} className="dropdown-btn">
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

	const githubLinks = () => (
		<div className="profile-dropdown-container fab fa-github-alt" >
			<ul className="profile-dropdown-content github-dropdown">
				<a href="https://github.com/yinghuanchen" target="_blank" className="dropdown-btn">
					<span class="fab fa-github-square"></span>
					<span className="member-names">Emily Chen</span>
				</a>
				<a href="https://github.com/thomaslgrega" target="_blank" className="dropdown-btn">
					<span class="fab fa-github-square"></span>
					<span className="member-names">Thomas Grega</span>
				</a>
				<a href="https://github.com/sulizz" target="_blank" className="dropdown-btn">
					<span class="fab fa-github-square"></span>
					<span className="member-names">Suliz Basnet</span>
				</a>
				<a href="https://github.com/clint-chu" target="_blank" className="dropdown-btn">
					<span class="fab fa-github-square"></span>
					<span className="member-names">Clint Chu</span>
				</a>
			</ul>
		</div>
	)

	const SearchBar = loggedIn ? <SearchBarContainer /> : null

	return (
    <div className="NavBar">
		<Link to="/">
        <span className="left-container"> JobieWalkie</span>
      </Link>
      {SearchBar}
      <span className="right-container"> 
			{githubLinks()}
			{getLinks()} 
		</span>
    </div>
  );
}

const mapSTP = (state) => {
	return {
		loggedIn: state.session.isAuthenticated,
		currentUser: state.session.user
	}
}

const mapDTP = (dispatch) => {
	return {
		logout: () => dispatch(logout())
	}
}

export default connect(mapSTP, mapDTP)(NavBar)