

import React from 'react';
import { connect } from "react-redux";
import { fetchExercises } from "../../actions/exercise_action";
import { Link } from 'react-router-dom'
import { ExerciseIndexItem } from './exercise_index_item';
import "./exercise.css"


class ExerciseIndex extends React.Component{

 componentDidMount(){
  
  this.props.fetchExercises()
 }  

 render(){

    if(this.props.exercises)

    return(
      <div className='exercise-index'>
        <div className='header'>
          <label>Exercise Name</label>
          <label>Exercise Difficulty</label>
          <label>Exercise Muscle</label>
        </div>
        <ul className='exercise-index-list'>
        {this.props.exercises.map((exercise, i) => (
          
          <div key={i} className='exercise-index-row'>
            <Link className='exercise-index-name' to={`/exercises/${exercise._id}`}>
              <ExerciseIndexItem exercise={exercise} />
            </Link>
        <div className='exercise-index-difficulty'>
          {exercise.difficulty}
        </div>
        <div className='exercise-index-muscle'>
          {exercise.muscle}
        </div>
          </div>
        ))}
        </ul>
        <div>
          
        </div>
      </div>

    )
 }



}

const mSTP = (state) => {
  // debugger
  return{
    exercises: Object.values(state.entities.exercises)
  }
}

const mDTP = dispatch => {
  // debugger
  return{
    fetchExercises: () => dispatch(fetchExercises())

  }
}

export default connect(mSTP, mDTP)(ExerciseIndex)

  