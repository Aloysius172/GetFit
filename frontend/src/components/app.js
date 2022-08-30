import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route } from 'react-router-dom';
import SignupFormContainer from './session/signup_form_container'
import LoginFormContainer from './session/login_form_container'
// import ExerciseIndexContainer from '../components/exercises/exercise_index_container'
// import ExerciseShowContainer from '../components/exercises/exercise_show_container'


import MainPage from './main/main_page';

const App = () => (
    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <AuthRoute exact path="/" component={MainPage} />
    {/* <Route exact path="/exercises" component = {ExerciseIndexContainer}/>
    <Route exact path="/exercises/exerciseId" component={ExerciseShowContainer} /> */}
    </Switch>

);

export default App;