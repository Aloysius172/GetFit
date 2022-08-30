import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import SignupFormContainer from './session/signup_form_container'
import LoginFormContainer from './session/login_form_container'


import MainPage from './main/main_page';

const App = () => (
    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <AuthRoute exact path="/" component={MainPage} />
    </Switch>

);

export default App;