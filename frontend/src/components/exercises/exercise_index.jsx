
import React, { useEffect } from 'react'
import { connect } from "react-redux";
import { fetchExercises } from "../../actions/exercise_action";
import { Link } from 'react-router-dom'
import { ExerciseIndexItem } from './exercise_index_item';
import "./exercise.css"

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

    if(this.props.exercises)

    return(
      <div className='exercise-index'>
        <div className='header'>
          <label>Exercise Name</label>
          <label>Exercise difficulty</label>
          <label>Exercise muscle</label>
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

  