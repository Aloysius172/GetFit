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
import MainPageContainer from './main/main_page_container';

// console.log(ExerciseShow)


const App = () => (
  <div>
    
    <Modal />
    <Switch>
      <Route exact path="/regimens/create" component={CreateRegimenFormContainer} />
      <Route exact path="/exercises" component = {ExerciseIndex}/>
      {/* <Route exact path="/exercises/exerciseId" component={ExerciseShowContainer} /> */}
      <Route exact path="/exercises/:exerciseId" component={ExerciseShow} />
      <ProtectedRoute exact path="/regimens" component={Regimens} />
      <AuthRoute exact path="/" component={MainPageContainer} />
      <AuthRoute exact path="/exercise/exerciseId" component={ExerciseIndex} />
    </Switch>
  </div>

);

export default App;