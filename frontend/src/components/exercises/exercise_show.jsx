import React from 'react'
import { connect } from "react-redux";
import { fetchExercise } from "../../actions/exercise_action";
// import ExerciseShow from "./exercise_show";
// import {withRouter} from 'react-router-dom'

class ExerciseShow extends React.Component{
  // constructor(props){
  //   super(props)
  // }
  
  componentDidMount(){
    // debugger
   this.props.fetchExercise(this.props.match.params.exerciseId)
  }

  render(){
    // debugger
    // let alo = this.props.exercise ? this.props.exercise : { name: '...loading'}
    console.log(this.props)
    if(this.props.exercise)
    return (
     <div>
      <h1 className='exercise-show-title'>
      {this.props.exercise.name}
      </h1>
      <p className='exercise-show-description'>
        Description: {this.props.exercise.description}
      </p>
      <div className='exercise-show-difficulty'>
        Difficulty: {this.props.exercise.difficulty}
      </div>
        <div className='exercise-show-muscle'>
        Muscle: {this.props.exercise.muscle}
      </div>
        <div className='exercise-show-type'>
          Type Of Exercise: {this.props.exercise.typeOfExercise}
        </div>
     </div>
    )
  } 
}

// export default ExerciseShow
// const ExerciseShow = (props) => {

//   // use

//   // render() {
//     // debugger
//     // let alo = this.props.exercise ? this.props.exercise : { name: '...loading'}
//     // console.log(this.props)
//     console.log(props)
//     return (
//       <div>
//         {props}
//         SOMETHING
//       </div>
//     )
//   // }
// }
// console.log('something')
const mSTP = (state, ownProps) => {
  // console.log(ownProps.match.params.exerciseId)
  // console.log(state.entities.exercises)
  return { exercise: state.entities.exercises[ownProps.match.params.exerciseId]}

}

const mDTP = dispatch => {
  // console.log(fetchExercise)
  return { fetchExercise: exerciseId => dispatch(fetchExercise(exerciseId)) }
}

export default connect(mSTP, mDTP)(ExerciseShow)



