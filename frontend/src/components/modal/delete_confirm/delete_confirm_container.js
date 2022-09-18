import { connect } from 'react-redux';
import { closeModal } from '../../../actions/modal_actions';
import DeleteConfirm from './delete_confirm.jsx';

const mSTP = (state) => {
    return {
        errors: state.errors.session
    };
};

const mDTP = (dispatch) => {
    return {
        closeModal: () => dispatch(closeModal()),
    }
}

export default connect(
    mSTP,
    mDTP
)(DeleteConfirm);