import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SignupForm from './signup_form';
import { closeModal } from '../../actions/modal_actions';
import ModalStyle from '../modal/modal.css'
import { login, deleteErrors } from '../../actions/session_actions';

const mSTP = (state) => {
  return {
    signedIn: state.session.isSignedIn,
    errors: state.errors.session
  }
};

const mDTP = (dispatch) => ({
  closeModal: () => dispatch(closeModal()),
  signup: user => dispatch(signup(user)),
  login: user => dispatch(login(user)),
  deleteErrors: () => dispatch(deleteErrors())
  
});

export default connect(
  mSTP,
  mDTP
)(SignupForm);