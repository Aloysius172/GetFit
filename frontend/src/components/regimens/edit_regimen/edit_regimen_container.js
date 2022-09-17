import { connect } from 'react-redux';
import EditRegimenForm from './edit_regimen';
import { fetchExercises } from '../../../actions/exercise_action';
import RegimenCreateStyle from './create_regimen.css'
import { updateRegimen } from '../../../actions/regimen_actions';
import { fetchRegimen } from '../../../actions/regimen_actions';


const mSTP = (state, ownProps) => {
    const exercises = Object.values(state.entities.exercises);
    return {
        exercises: exercises,
        errors: state.errors.session,
        regimen: state.entities.regimens[ownProps.match.params.regimenId]
    };
};

const mDTP = (dispatch) => {
    return {
        fetchExercises: () => dispatch(fetchExercises()),
        fetchRegimen: RegimenId => dispatch(fetchRegimen(RegimenId)),
        updateRegimen: (regimenForm) => dispatch(updateRegimen(regimenForm))
    }
}

export default connect(mSTP, mDTP)(EditRegimenForm);