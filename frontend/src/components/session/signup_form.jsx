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
        <form onSubmit={this.handleSubmit} className="session-form">
          <div>
            <input
              type="text"
              onChange={this.update("handle")}
              value={this.state.handle}
              // className="session-form-inputs"
              required
            />
            <label>Handle</label>
          </div>
          <div>
            <input
              type="text"
              onChange={this.update("email")}
              value={this.state.email}
              // className="session-form-inputs"
              required
            />
            <label>Email</label>
          </div>
          <div>
            <input
              type="password"
              onChange={this.update("password")}
              value={this.state.password}
              // className="session-form-inputs"
              required
            />
            <label>Password</label>
          </div>
          <button className="session-form-btn">SIGN UP</button>
          {this.renderErrors()}
        </form>
      </div>
    );
    }
}

export default withRouter(SignupForm)