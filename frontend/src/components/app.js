import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route } from 'react-router-dom';
import SignupFormContainer from './session/signup_form_container'
import LoginFormContainer from './session/login_form_container'
import ExerciseIndex from '../components/exercises/exercise_index'
// import ExerciseIndexContainer from '../components/exercises/exercise_index_container'
// import ExerciseShowContainer from '../components/exercises/exercise_show_container'
import ExerciseShow from "../components/exercises/exercise_show"
import Regimens from './regimens/regimens';
import Modal from './modal/modal';

import user_index_container from './user/user_index_container';


// import MainPageContainer from './main/main_page_container';
// import User from './user/user_index_container'

import MainPageContainer from './main/main_page_container';

// console.log(ExerciseShow)


const App = () => (
  <div>
    
    <Modal />
    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />

     
    <Route exact path="/exercises" component = {ExerciseIndex}/>
      {/* <Route exact path="/exercises/exerciseId" component={ExerciseShowContainer} /> */}
      <Route exact path="/exercises/:exerciseId" component={ExerciseShow} />
      <ProtectedRoute exact path="/regimens" component={Regimens} />

      <AuthRoute exact path="/users" component={user_index_container} />
      {/* <AuthRoute exact path="/" component={MainPageContainer} /> */}

      <AuthRoute exact path="/" component={MainPageContainer} />


    </Switch>
  </div>

);

export default App;