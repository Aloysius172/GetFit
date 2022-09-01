import React from 'react';
import { Link } from 'react-router-dom'
import './navbar.css'


class NavBar extends React.Component {
    constructor(props) {
      super(props);
      this.logoutUser = this.logoutUser.bind(this);
      this.getLinks = this.getLinks.bind(this);
    }

    logoutUser(e) {
        e.preventDefault();
        this.props.logout();
    }

    getLinks() {
        if (this.props.loggedIn) {
            return (
                <div className='logged-in-links'>
                    <Link className="nav-button" to={'/exercises'}>Exercises</Link>
                    <Link className="nav-button" to={'/regimens'}>Regimens</Link>
                    <Link className="nav-button" to={'/calendar'}> Calendar</Link>
                    <Link className="nav-button" to={'/users'}>{this.props.username}</Link>
                    <button className="nav-button-logout" onClick={this.logoutUser}>Logout</button>
                </div>
            );
        } else {
            return (
                <div className='logged-out-links'>
                    {/* <Link to={'/signup'}>Signup</Link>
                    <Link to={'/login'}>Login</Link> */}
                    <Link to={'/exercises'}>Exercises</Link>
                </div>
            );
        }
    }

    render() {
        return (
            <div className='navbar-div'>
                <h1 className='app-header'>GetFit</h1>
                { this.getLinks() }
            </div>
        );
    }
}

export default NavBar;