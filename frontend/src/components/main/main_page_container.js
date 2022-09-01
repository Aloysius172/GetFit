import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import MainPage from './main_page';

const mSTP = ({ session }) => {
    return {
        currentUser: session.currentUser
    };
};

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal)),
    processDemoLogin: (user) => dispatch(login(user)),
});

export default connect(mSTP, mDTP)(MainPage);