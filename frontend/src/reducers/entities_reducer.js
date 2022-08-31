import { combineReducers } from 'redux';
import exercisesReducer from './exercise_reducer';
import regimensReducer from './regimen_reducer'
import userReducer from './user_reducer'

const EntitiesReducer = combineReducers({
 exercises: exercisesReducer,
 regimens: regimensReducer,
 users: userReducer
});

export default EntitiesReducer;