
import React, { useEffect } from 'react'
import { connect } from "react-redux";
import { fetchExercises } from "../../actions/exercise_action";
import { Link } from 'react-router-dom'
import IndexStyle from './exercise_index.css'
import { GiWeightLiftingUp } from '@react-icons/all-files/gi/GiWeightLiftingUp'

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
    // debugger



    if(this.props.exercises) {

      let exercises = this.props.exercises.map(exercise =>
        <ExerciseItemContainer
          exercise={exercise}
          key={exercise._id}
          link={exercise._id}
        // users={this.props.users}
        />)
    return(
        <div id="exercise-index-container">
          <div id="instructions">
            <div id="instructions-content">
              <div id="index-key-blob">
                <p id="key-key">
                  Difficulty:
                </p>
               <div className='spacer-index'/>
                <div id="key-content-beginner">
                Beginner &nbsp; &nbsp; &nbsp; <GiWeightLiftingUp />
                  <br/>
                &nbsp;
                </div>
                <div id="key-content-Intermediate">
                Intermediate <GiWeightLiftingUp /> <GiWeightLiftingUp />
                <br />
                &nbsp;
                </div>
                <div id="key-content-Advanced">
                Advanced &nbsp; &nbsp;&nbsp;<GiWeightLiftingUp /> <GiWeightLiftingUp /> <GiWeightLiftingUp />
                <br />
                &nbsp;
              </div>
              
              </div>
            <div className='spacer-index-width' />
              <div id="instructions-words">
              Hello! Have a look at some of the most common exercises. 
              Any of the exercises here can be added to a regiment under
              our 'Regiments' tab, and you can click any exercise title
              to view a page with more info and a video of that exercise.
              </div>
            </div>
          </div>
          <div className='exercise-index-index'>
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

  