import { connect } from 'react-redux';
import { login, deleteErrors } from '../../actions/session_actions';
import LoginForm from './login_form';
import { closeModal } from '../../actions/modal_actions';
import ModalStyle from '../modal/modal.css'

const mSTP = (state) => {
  return {
    errors: state.errors.session
  };
};

const mDTP = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal()),
    login: user => dispatch(login(user)),
    deleteErrors: () => dispatch(deleteErrors())
  }
}

export default connect(
  mSTP,
  mDTP
)(LoginForm);