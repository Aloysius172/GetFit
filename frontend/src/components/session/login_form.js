import React from 'react';
import { withRouter } from 'react-router-dom';


class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.handleDemoLogin = this.handleDemoLogin(this);
  }

  // Once the user has been authenticated, redirect to the Tweets page
  componentDidMount() {
    if (this.props.currentUser === true) {
      this.props.history.push('/regimen');
    }

    // Set or clear errors
    this.setState({ errors: this.props.errors })
  }

  // Handle field updates (called in the render method)
  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  // Handle form submission
  handleSubmit(e) {
    e.preventDefault();

    let user = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.login(user);
  }

  handleDemoLogin(e) {
    // e.preventDefault();

    let user = {
      email: "demoUser@demo.com",
      password: "demoPassword"
    };

    this.props.login(user);
  }


  // Render the session errors if there are any
  renderErrors() {
    return (
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li className='errors' key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="login-form-container">
        <form className='login-form' onSubmit={this.handleSubmit}>
          <div className='greeting-login'>
            <h1>Welcome<br /> &nbsp; Back!</h1>
          </div>
          <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
          <div className='login-form-interior'>
            <input type="text"
              value={this.state.email}
              onChange={this.update('email')}
              placeholder="Email"
              className='submission-field'
            />
            <div className='spacer' />
            <input type="password"
              value={this.state.password}
              onChange={this.update('password')}
              placeholder="Password"
              className='submission-field'
            />
            <div className='spacer' />
            <div className='submit-button'>
              <button className='demo-login' onClick={this.handleDemoLogin}>Demo</button>
              <input className='login-signup-submit' type="submit" value="Submit" />
            </div>
            {this.renderErrors()}
          </div>
        </form>
        <div className='modal-footer-login'>
          <button className='close-modal-button'
            onClick={this.props.closeModal}>
            Close
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginForm);