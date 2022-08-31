import { connect } from 'react-redux';
// import { createRegimen } from '../../actions/regimen_actions';
import CreateRegimenForm from './create_regimen_form';
import { fetchExercises } from '../../../actions/exercise_action';
import RegimenCreateStyle from './create_regimen.css'


const mSTP = (state) => {
    const exercises = Object.values(state.entities.exercises);
    return {
        exercises: exercises,
        errors: state.errors.session
    };
};

const mDTP = (dispatch) => {
    return {
        fetchExercises: () => dispatch(fetchExercises()),
    }
}

export default connect(mSTP,mDTP)(CreateRegimenForm);