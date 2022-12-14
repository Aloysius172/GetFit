import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import jwt_decode from 'jwt-decode';
import { setAuthToken } from './util/session_api_util';
import { fetchExercise, fetchExercises } from './util/exercise_util';
import { logout } from './actions/session_actions';
import { getUsers } from './util/user_api_util'
 

document.addEventListener('DOMContentLoaded', () => {
  let store;

  if (localStorage.jwtToken) {

    setAuthToken(localStorage.jwtToken);

    const decodedUser = jwt_decode(localStorage.jwtToken);
    const preloadedState = { session: { isAuthenticated: true, user: decodedUser } };

    store = configureStore(preloadedState);

    const currentTime = Date.now() / 1000;

    if (decodedUser.exp < currentTime) {
      store.dispatch(logout());
      window.location.href = '/login';
      
    }
  } else {
    store = configureStore({});
  }
  const root = document.getElementById('root');


  ReactDOM.render(<Root store={store} />, root);
  window.logout = logout()
  window.fetchExercise = fetchExercise("630d1ca98797e1fe9a0040a5")
  window.fetchExercises = fetchExercises()
  window.getState = store.getState;
  window.getUsers = getUsers()

});