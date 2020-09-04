import React from "react"
import { AuthRoute, ProtectedRoute } from "../util/route_util"
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
import DebriefCreate from "../components/debriefs/debrief_create"

import '../stylesheets/reset.css'

const App = () => (
  <div>
    <NavBar />
    <Switch>
      <AuthRoute exact path="/" component={MainPage} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <ProtectedRoute exact path="/debriefs" component={DebriefIndex} />
      <ProtectedRoute exact path="/debriefs/:companyId/create" component={DebriefCreate} />
      <ProtectedRoute exact path="/jobListings" component={JobListingIndex} />
      <ProtectedRoute exact path="/companies" component={CompanyIndex} />
      <ProtectedRoute exact path="/companies/:companyId" component={CompanyShow} />
      <ProtectedRoute exact path="/users/:userId" component={Profile} />
      <ProtectedRoute exact path="/todos" component={ToDos} />
      <ProtectedRoute path="/search" component={SearchResult} />
    </Switch>
  </div>
);

export default App

// JW-TODO: Replace React icon in favicon.ico with a JobieWokie icon.