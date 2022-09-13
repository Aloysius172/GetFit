import React from 'react';
import { withRouter } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
      password2: '',
      // errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    // this.clearedErrors = false;
  }

  // componentDidMount() {
  //   if (this.props.signedIn === true) {
  //     this.props.history.push('/login');
  //   }

  //   // this.setState({ errors: this.props.errors })
  // }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    let user = {
      email: this.state.email,
      username: this.state.username,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.signup(user, this.props.history);
  }

  componentWillUnmount(){
    this.props.deleteErrors()
  }


  renderErrors() {
    return (
      <ul>
        {Object.keys(this.props.errors).map((error, i) => (
          <li className='errors' key={`error-${i}`}>
            {this.props.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  render() {
  
    return (
      <div className="signup-form-container">
        <form className='signup-form' onSubmit={this.handleSubmit}>
          <h1> &nbsp; &nbsp; Get <br /> &nbsp; Your <br /> Groove <br /> &nbsp; &nbsp; On!</h1>
          <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
          <div className="signup-form-interior">
            <div className='spacer' />
            <input type="text"
              value={this.state.email}
              onChange={this.update('email')}
              placeholder="Email"
              className='submission-field'
            />
            <div>
              {this.props.errors.email}
            </div>
            <div className='spacer' />
            <input type="text"
              value={this.state.username}
              onChange={this.update('username')}
              placeholder="Username"
              className='submission-field'
            />
            <div>
              {this.props.errors.username}
            </div>
            <div className='spacer' />
            <input type="password"
              value={this.state.password}
              onChange={this.update('password')}
              placeholder="Password"
              className='submission-field'
            />
            <div>
              {this.props.errors.password}
            </div>
            <div className='spacer' />
            <input type="password"
              value={this.state.password2}
              onChange={this.update('password2')}
              placeholder="Confirm Password"
              className='submission-field'
            />
            <div>
              {this.props.errors.password2}
            </div>
            <div className='spacer' />
            <div className='submit-button'>

              <input className='login-signup-submit' type="submit" value="Submit" />
            </div>
            {this.renderErrors()}
          </div>
        </form>
        <div className='modal-footer-signup'>
          <button className='close-modal-button'
            onClick={this.props.closeModal}>
            Close
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(SignupForm);