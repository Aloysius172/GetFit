import { combineReducers } from 'redux';
import exercisesReducer from './exercise_reducer';
import regimensReducer from './regimen_reducer'

const EntitiesReducer = combineReducers({
 exercises: exercisesReducer,
 regimens: regimensReducer
});

export default EntitiesReducer;