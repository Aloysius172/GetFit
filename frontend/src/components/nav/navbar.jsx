import React from 'react';
import { Link, Redirect } from 'react-router-dom'
import { openModal } from '../../actions/modal_actions';
import './navbar.css';


class NavBar extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        loggedIn: this.props.loggedIn
      }

      this.logoutUser = this.logoutUser.bind(this);
      this.getLinks = this.getLinks.bind(this);
      this.handleDemoLogin = this.handleDemoLogin.bind(this)
    }

    
    handleDemoLogin(e) {
        // e.preventDefault();

        let user = {
        email: "demoUser@demo.com",
        password: "demoPassword"
        };

        this.props.login(user);
    }

    logoutUser(e) {
        e.preventDefault();
        this.props.logout();
        window.location.reload(true)

    }


    getLinks() {
        if (this.props.loggedIn) {
            return (
                <div className='logged-in-links'>
                    <Link className="nav-button" to={'/exercises'}>Exercises</Link>
                    <Link className="nav-button" to={'/regimens'}>Regimens</Link>
                    <Link className="nav-button" to={'/calendar'}> Calendar</Link>
                    <Link className="nav-button" to={'/userpage'}>{this.props.username}</Link>
                    <button className="nav-button-logout" onClick={this.logoutUser}>Logout</button>
                </div>
            );
        } else {
            return (
                <div className='logged-out-links'>
                    <Link className="nav-button" to={'/exercises'}>Exercises</Link>
                    <button className="login-button" id="greeting-login" onClick={() => this.props.openModal('login')}>Login</button>
                    <button className="login-button" id="greeting-signup" onClick={() => this.props.openModal('signup')}>Signup</button>
                     <button className='demo-login' onClick={() => this.handleDemoLogin()}>Demo User</button>
                    {/* <Link to={'/signup'}>Signup</Link>
                    <Link to={'/login'}>Login</Link> */}
                </div>
            );
        }
    }

    render() {
        return (
            <div className='navbar-div'>
                <Link to='/'><h1>GetFit</h1></Link>
                { this.getLinks() }
            </div>
        );
    }
}

export default NavBar;