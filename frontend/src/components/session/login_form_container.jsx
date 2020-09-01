import { connect } from "react-redux"
import { login } from "../../actions/session_actions"
import LoginForm from "./login_form"

const mapSTP = (state) => {
    return {
        errors: state.errors.session,
    }
}

const mapDTP = (dispatch) => {
    return {
        login: (user) => dispatch(login(user)),
    }
}

export default connect(mapSTP, mapDTP)(LoginForm)