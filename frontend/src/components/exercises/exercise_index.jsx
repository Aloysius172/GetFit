
import React, { useEffect } from 'react'
import { connect } from "react-redux";
import { fetchExercises } from "../../actions/exercise_action";
import { Link } from 'react-router-dom'

import ExerciseItemContainer from './exercise_item/exercise_item_container'



class ExerciseIndex extends React.Component{
// function ExerciseIndex(props) {
 componentDidMount(){
  // debugger
  this.props.fetchExercises()
 }  

  // useEffect(() => { props.fetchExercises()}, [])
  // const exercises_name = props.exercises.map(exercise => {
  //   return <>
  //   <div className="events-loco" key={exercise.id}
  //     onClick={() => { window.location.href = `/#/exercises/${exercise._id}` }}>
  //     <div className="momo">
  //       {exercise.name}
  //       <br />
  //       difficulty: {exercise.difficulty}
  //       <br />
  //       <div>
  //       </div>
  //       <img className="momo-pic" src="https://www.djtimes.com/wp-content/uploads/2021/08/electric-zoo-music-festival-reveals-set-times-for-2021-dj-times.jpg" alt="" />
  //     </div>

  //   </div>

  //   {/* const exercises_name = props.exercises.map(exercise => {
  //     return <>
  //     <div className='events-trash'>
  //       {exercise.difficult}
  //     </div>
  //       } */}

  //       </>
  // });

  // return <div className="events-index-container">
  //   <div className="index-header">
  //   </div>
  //   <div className="index-panels-container">
  //     <div className="index-panels-wrapper">
  //       <div className="default-wrappa">
  //         {exercises_name}
  //       </div>
  //     </div>
  //   </div>
  // </div>


 render(){
<<<<<<< HEAD
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

  