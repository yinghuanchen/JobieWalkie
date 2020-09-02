import React from "react"
import { AuthRoute } from "../util/route_util"
import { Route, Switch } from "react-router-dom"
import MainPage from "./main/main_page"
import LoginFormContainer from "./session/login_form_container"
import SignupFormContainer from "./session/signup_form_container"
import NavBar from "../components/navbar/navbar"
import Profile from "../components/profile/profile"
// import debriefIndex from "./debriefs/debrief_index"
import jobListingIndex from "./job_listings/job_listing_index"
import companyIndex from "./companies/company_index"
import companyShow from "./companies/company_show"

//import css reset
import '../stylesheets/reset.css'

const App = () => (
    <div>
        <NavBar />
        <Switch>
            <AuthRoute exact path="/" component={MainPage} />
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            {/* <Route exact path="/api/debriefs" component={debriefIndex} /> */}
            <Route exact path="/jobListings" component={jobListingIndex} />
            <Route exact path="/companies" component={companyIndex} />
            <Route exact path="/companies/:companyId" component={companyShow} />
            <Route exact path="/users/:userId" component={Profile} />
        </Switch>
    </div>
)

export default App

// JW-TODO: How do we get rid of the missing favicon.ico error? (Delete favicon.ico to get the error in the terminal. Restart npm run dev.)