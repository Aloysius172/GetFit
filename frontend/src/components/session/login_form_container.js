import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import LoginForm from './login_form';
import { closeModal } from '../../actions/modal_actions';
import ModalStyle from '../../modal.css'

const mSTP = (state) => {
  return {
    errors: state.errors.session
  };
};

const mDTP = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal()),
    login: user => dispatch(login(user))
  }
}

export default connect(
  mSTP,
  mDTP
)(LoginForm);