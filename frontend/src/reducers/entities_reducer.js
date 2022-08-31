import { combineReducers } from 'redux';
import exercisesReducer from './exercise_reducer';

const EntitiesReducer = combineReducers({
 exercises: exercisesReducer
});

export default EntitiesReducer;