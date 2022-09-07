import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import ExerciseInfo from './exrc_info';

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
)(ExerciseInfo);