import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import exercisesReducer from './exercise_reducer';


const RootReducer = combineReducers({
  errors,
  session,
  exercisesReducer

 
});

export default RootReducer;