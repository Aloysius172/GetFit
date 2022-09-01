import { connect } from 'react-redux';
import { logout } from "../../actions/session_actions";
import { openModal } from '../../actions/modal_actions';
import { login } from '../../actions/session_actions';

import NavBar from './navbar';

const mapStateToProps = state => ({
    loggedIn: state.session.isAuthenticated,
    username: state.session.user.username
});

const mapDispatchToProps = dispatch => ({
    openModal: modal => dispatch(openModal(modal)),
    processDemoLogin: (user) => dispatch(login(user)),
    logout: () => dispatch(logout()),
    login: (user) => dispatch(login(user))
});


export default connect(
    mapStateToProps, mapDispatchToProps
)(NavBar);