import React from "react"
import { withRouter } from "react-router-dom"

class SignupForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            handle: "",
            password: "",
            password2: "",
            errors: {},
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.clearedErrors = false
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.signedIn === true) {
            this.props.history.push("/login")
        }

        this.setState({ errors: nextProps.errors })
    }

    update(field) {
        return (e) =>
            this.setState({
                [field]: e.currentTarget.value,
            })
    }

    handleSubmit(e) {
        e.preventDefault();
        let user = {
            email: this.state.email,
            handle: this.state.handle,
            password: this.state.password,
            password2: this.state.password2,
        }

        this.props.signup(user, this.props.history)
    }

    renderErrors() {
        return (
            <ul>
                {Object.keys(this.state.errors).map((error, i) => (
                    <li key={`error-${i}`}>{this.state.errors[error]}</li>
                ))}
            </ul>
        )
    }

    render() {

        return (
            <div className="form-container">
                <button className="demo-user-btn" onClick={this.handleDemoSubmit}>
                    <span className="fas fa-user-alt"></span>SIGN IN WITH DEMO USER
        </button>
                <div className="divider-container">
                    <span className="divider"></span>
                    <span className="divider-text">OR</span>
                    <span className="divider"></span>
                </div>
                <form onSubmit={this.handleSubmit} className="session-form">
                    <input
                        type="text"
                        onChange={this.update("handle")}
                        value={this.state.handle}
                        placeholder="Handle"
                        className="session-form-inputs"
                    />
                    <input
                        type="text"
                        onChange={this.update("email")}
                        value={this.state.email}
                        placeholder="Email"
                        className="session-form-inputs"
                    />
                    <input
                        type="password"
                        onChange={this.update("password")}
                        value={this.state.password}
                        placeholder="Password"
                        className="session-form-inputs"
                    />
                    <button className="session-form-btn">SIGN UP</button>
                    {this.renderErrors()}
                </form>
            </div>
        )
    }
}

export default withRouter(SignupForm)