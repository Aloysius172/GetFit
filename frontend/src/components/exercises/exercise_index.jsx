
import React from 'react'
import { connect } from "react-redux";
import { fetchExercises } from "../../actions/exercise_action";
import { Link } from 'react-router-dom'
import ExerciseItemContainer from './exercise_item/exercise_item_container'

class ExerciseIndex extends React.Component{

 componentDidMount(){
  // debugger
  this.props.fetchExercises()
 }  


 render(){
    // debugger



    if(this.props.exercises) {

      let exercises = this.props.exercises.map(exercise =>
        <ExerciseItemContainer
          exercise={exercise}
          key={exercise.id}
        // users={this.props.users}
        />)
    return(
      <div className='exercise-index'>
        <div className='exercise-index-list'>
            {exercises}
        </div>
      </div>

    )
 }
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

  