import React from "react"
import { AuthRoute } from "../util/route_util"
import { Route, Switch } from "react-router-dom"
import MainPage from "./main/main_page"
import LoginFormContainer from "./session/login_form_container"
import SignupFormContainer from "./session/signup_form_container"
import NavBar from "../components/navbar/navbar"
import Profile from "../components/profile/profile"
import DebriefIndex from "./debriefs/debrief_index"
import JobListingIndex from "./job_listings/job_listing_index"
import CompanyIndex from "./companies/company_index"
import CompanyShow from "./companies/company_show"
import ToDos from './todos/todo_item'
import SearchResult from './search_result/search_result'

import '../stylesheets/reset.css'

const App = () => (
  <div>
    <NavBar />
    <Switch>
      <AuthRoute exact path="/" component={MainPage} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <Route exact path="/debriefs" component={DebriefIndex} />
      <Route exact path="/jobListings" component={JobListingIndex} />
      <Route exact path="/companies" component={CompanyIndex} />
      <Route exact path="/companies/:companyId" component={CompanyShow} />
      <Route exact path="/users/:userId" component={Profile} />
      <Route exact path="/todos" component={ToDos} />
      <Route path="/search" component={SearchResult} />
    </Switch>
  </div>
);

export default App

// JW-TODO: How do we get rid of the missing favicon.ico error? (Delete favicon.ico to get the error in the terminal. Restart npm run dev.)