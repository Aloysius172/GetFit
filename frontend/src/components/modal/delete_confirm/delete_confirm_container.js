import { connect } from 'react-redux';
import { closeModal } from '../../../actions/modal_actions';
import DeleteConfirm from './delete_confirm.jsx';
import { deleteRegimens } from '../../../actions/regimen_actions'

const mSTP = (state) => {
    return {
        errors: state.errors.session
    };
};

const mDTP = (dispatch) => {
    debugger;
    return {
        closeModal: () => dispatch(closeModal()),
        deleteRegimen: (regimenId)=>dispatch(deleteRegimens(regimenId)),
    }
}

export default connect(
    mSTP,
    mDTP
)(DeleteConfirm);