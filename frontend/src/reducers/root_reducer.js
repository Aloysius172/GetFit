import { combineReducers } from 'redux';
import EntitiesReducer from './entities_reducer';
import session from './session_reducer';
import errors from './errors_reducer';

import ui from './ui_reducer';



const RootReducer = combineReducers({
  entities: EntitiesReducer,
  errors,
  session,
  ui
});

export default RootReducer;