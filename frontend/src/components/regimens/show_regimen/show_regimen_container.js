import { connect } from 'react-redux';
// import { EditRegimentForm } from '../edit_regimen/edit_regimen_form';
import { fetchExercises } from '../../../actions/exercise_action';
import { fetchRegimen } from '../../../actions/regimen_actions';
import { deleteRegimens } from '../../../actions/regimen_actions';
import RegimenShow from './show_regimen';

const mSTP = (state, ownProps) => {
    const exercises = Object.values(state.entities.exercises);
    return {
        exercises: exercises,
        currentUserId: state.session.user.id,
        regimen: state.entities.regimens[ownProps.match.params.regimenId]
    };
};

const mDTP = (dispatch) => {
    return {
        fetchExercises: () => dispatch(fetchExercises()),
        fetchRegimen: regimenId => dispatch(fetchRegimen(regimenId)),
        deleteRegimens: regimenId => dispatch(deleteRegimens(regimenId))
    };
};

export default connect(mSTP, mDTP)(RegimenShow);
