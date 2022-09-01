import { connect } from 'react-redux';
import ExerciseItem from './exercise_item.jsx';
import { fetchExercises } from '../../../actions/exercise_action';
import ExerciseItemStyle from './exercise_item.css';
// import { deleteExerciseFromRegimen } from '../../../../actions/regimen_actions';

const mSTP = (state) => {
    const exercises = Object.values(state.entities.exercises);
    return {
        exercises: exercises,
        errors: state.errors.session
    };
};

const mDTP = dispatch => {
    return {
        fetchExercises: () => dispatch(fetchExercises()),
    }
};

export default connect(mSTP, mDTP)(ExerciseItem);