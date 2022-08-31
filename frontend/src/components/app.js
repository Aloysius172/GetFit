import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route } from 'react-router-dom';
import SignupFormContainer from './session/signup_form_container'
import LoginFormContainer from './session/login_form_container'
import Regimens from './regimens/regimens';
import Modal from './modal/modal';
import user_index_container from './user/user_index_container';


// import MainPageContainer from './main/main_page_container';
// import User from './user/user_index_container'


const App = () => (
  <div>
    <Modal />
    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <ProtectedRoute exact path="/regimens" component={Regimens} />
      <AuthRoute exact path="/users" component={user_index_container} />
      {/* <AuthRoute exact path="/" component={MainPageContainer} /> */}
    </Switch>
  </div>

);

export default App;