import React from 'react';
import { Link, Redirect } from 'react-router-dom'
import { openModal } from '../../actions/modal_actions';
import './navbar.css';
import { BiLogIn } from '@react-icons/all-files/bi/BiLogIn'
import { RiAccountCircleLine } from '@react-icons/all-files/ri/RiAccountCircleLine'
import { RiAccountCircleFill } from '@react-icons/all-files/ri/RiAccountCircleFill'
import { FaRunning } from '@react-icons/all-files/fa/FaRunning'
import { CgGym } from '@react-icons/all-files/cg/CgGym'
import { GiMuscleUp } from '@react-icons/all-files/gi/GiMuscleUp'
import { AiOutlineCalendar } from '@react-icons/all-files/ai/AiOutlineCalendar'
import { ImCool } from '@react-icons/all-files/im/ImCool'
import { BiLogOut } from '@react-icons/all-files/bi/BiLogOut'

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
                    <Link className="nav-button" to={'/exercises'}>
                        <button className="button" id="exercises-nav-logged-in">
                            <div><CgGym size={30} /></div>
                             <div>Exercises</div> 
                        </button>
                    </Link>

                    <Link className="nav-button" to={'/regimens'}>
                        <button className="button" id="regimens-nav-logged-in">
                            <div><GiMuscleUp size={30}/> </div>
                        <div>Regimens</div>
                        </button>
                    </Link>

                    <Link className="nav-button" to={'/calendar'}> 
                        <button className="button" id="calendar-nav">
                            <div><AiOutlineCalendar size={30} /></div>
                        <div>Calendar</div>
                        </button>
                    </Link>
                    <Link className="nav-button" to={'/users'}>
                        <button className="button" id="user-nav-logged-in">
                            <div><ImCool size={30}/></div>
                           <div>{this.props.username}</div> 
                        </button>
                    </Link>

                    <button className="button" id="logout-nav-button" onClick={this.logoutUser}>
                        <div><BiLogOut size={30}/></div>
                        <div>Logout</div>
                    </button>
                </div>
            );
        } else {
            return (
                <div className='logged-out-links'>
                    <Link className="nav-button" to={'/exercises'}>
                        <button className="button" id="exercises-button">
                            <div id="exercises-icon"><CgGym size={30}/></div>
                            <div id="exercises-word">Exercises</div>
                        </button>    
                    </Link>
                    <button className="button" id="greeting-login" onClick={() => this.props.openModal('login')}>
                       <div id="login-icon">< BiLogIn size={30} /></div>  
                        <div id="login-word">Login</div>    
                    </button>
                    
                    <button className="button" id="greeting-signup" onClick={() => this.props.openModal('signup')}>
                        <div id="signup-icon"><RiAccountCircleLine size={30}/></div>
                        <div id="signup-word">Signup</div> 
                    </button>

                     <button className='button' id="demo-login-button" onClick={() => this.handleDemoLogin()}>
                        <div id="demo-login-icon">< RiAccountCircleFill size={30}/></div>
                        <div id="demo-login-word">Demo</div> 
                    </button>
                    {/* <Link to={'/signup'}>Signup</Link>
                    <Link to={'/login'}>Login</Link> */}
                </div>
            );
        }
    }

    render() {
        return (
            <div className='navbar-div'>
                <Link to='/'><button className='button' id="splash-button">
                    <div><FaRunning size={30}/></div>
                     <div>GetFit</div> 
                </button>
                </Link>
                { this.getLinks() }
            </div>
        );
    }
}

export default NavBar;