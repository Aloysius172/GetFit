import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SignupForm from './signup_form';
import { closeModal } from '../../actions/modal_actions';

const mSTP = (state) => {
  return {
    signedIn: state.session.isSignedIn,
    errors: state.errors.session
  }
};

const mDTP = (dispatch) => ({
  closeModal: () => dispatch(closeModal()),
  signup: user => dispatch(signup(user))
});

export default connect(
  mSTP,
  mDTP
)(SignupForm);