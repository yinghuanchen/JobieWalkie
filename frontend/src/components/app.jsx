import React from "react"
import { AuthRoute } from "../util/route_util"
import { Route, Switch } from "react-router-dom"
import MainPage from "./main/main_page"
import LoginFormContainer from "./session/login_form_container"
import SignupFormContainer from "./session/signup_form_container"
import NavBar from "../components/navbar/navbar"
import Profile from "../components/profile/profile"

const App = () => (
    <div>
        <NavBar />
        <Switch>
            <AuthRoute exact path="/" component={MainPage} />
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <Route exact path="/user/:userId" component={Profile} />
        </Switch>
    </div>
)

export default App

// JW-TODO: How do we get rid of the missing favicon.ico error? (Delete favicon.ico to get the error in the terminal. Restart npm run dev.)