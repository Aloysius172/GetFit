import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import SignupFormContainer from './session/signup_form_container'
import LoginFormContainer from './session/login_form_container'
import Modal from './modal/modal';


import MainPageContainer from './main/main_page_container';

const App = () => (
  <div>
    <Modal />
    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <AuthRoute exact path="/" component={MainPageContainer} />
    </Switch>
  </div>

);

export default App;