import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route } from 'react-router-dom';
import CreateRegimenFormContainer from './regimens/create_regimen/create_regimen_form_container'
import ExerciseIndex from '../components/exercises/exercise_index'
// import ExerciseIndexContainer from '../components/exercises/exercise_index_container'
// import ExerciseShowContainer from '../components/exercises/exercise_show_container'
import ExerciseShow from "../components/exercises/exercise_show"
import Regimens from './regimens/regimens';
import Modal from './modal/modal';
import RegimenShowContainer from './regimens/show_regimen/show_regimen_container';
import EditRegimenContainer from './regimens/edit_regimen/edit_regimen_container';

import './app_css_reset.css';


import NavBarContainer from './nav/navbar_container'

import user_index_container from './user/user_index_container';


// import MainPageContainer from './main/main_page_container';
// import User from './user/user_index_container'


import MainPageContainer from './main/main_page_container';

import TweetsContainer from './tweets/tweets_container';
// import ProfileContainer from './profile/profile_container';
// import TweetComposeContainer from './tweets/tweet_compose_container';





// console.log(ExerciseShow)


const App = () => (
  <div>
    
    <Modal />
    <NavBarContainer />
    <Switch>
      <ProtectedRoute exact path="/regimens/create" component={CreateRegimenFormContainer} />
      <Route exact path="/exercises" component = {ExerciseIndex}/>
      {/* <Route exact path="/exercises/exerciseId" component={ExerciseShowContainer} /> */}
      <Route exact path="/exercises/:exerciseId" component={ExerciseShow} />
      <ProtectedRoute exact path="/regimens" component={Regimens} />
      <ProtectedRoute exact path="/regimens/:regimenId" component={RegimenShowContainer} />
      <ProtectedRoute exact path="/regimens/updateRegimen/:regimenId" component={EditRegimenContainer} />
      <ProtectedRoute exact path="/users" component={user_index_container} />
      {/* <AuthRoute exact path="/" component={MainPageContainer} /> */}

      <Route exact path="/tweets" component={TweetsContainer} />
      {/* <ProtectedRoute exact path="/profile" component={ProfileContainer} /> */}
      {/* <Route exact path="/new_tweet" component={TweetComposeContainer} /> */}

      <Route exact path="/" component={MainPageContainer} />
      <AuthRoute exact path="/exercise/exerciseId" component={ExerciseIndex} />
    </Switch>
  </div>

);

export default App;