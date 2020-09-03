import React from "react"
import { withRouter } from "react-router-dom"
import '../../stylesheets/log_in.css';
class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      errors: {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.history.push("/tweets"); // JW-TODO: Needs to be changed
    }

    this.setState({ errors: nextProps.errors });
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  handleSubmit(e) {
    e.preventDefault();

    let user = {
      email: this.state.email,
      password: this.state.password,
    };

    this.props.login(user);
  }

  renderErrors() {
    return (
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>{this.state.errors[error]}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="form-container">
        {/* <button className='demo-user-btn' onClick={this.handleDemoSubmit}><span className="fas fa-user-alt"></span>SIGN IN WITH DEMO USER</button> */}
        {/* <div className='divider-container'>
          <span className='divider'></span><span className='divider-text'>OR</span><span className='divider'></span>
        </div> */}
        <form onSubmit={this.handleSubmit} className="session-form">
          <div>
            <input
                type="text"
                value={this.state.email}
                onChange={this.update("email")}
                required
            />
            <label>Email</label>
          </div>
          <div>
            <input
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
                required
            />
            <label>Password</label>
          </div>
          <button className="session-form-btn">LOG IN</button>
          {this.renderErrors()}
        </form>
      </div>
    )
  }
}

export default withRouter(LoginForm);
