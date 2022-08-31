<<<<<<< HEAD
// import React from 'react'
// class ExerciseIndex extends React.Component{
//  constructor(props){
//     super(props)
    
//  }

//  componentDidMount(){
//   debugger
//   this.props.exercises
//  }  
 

//  render(){
//     debugger
//     return(
//       <div>
//         <ul>
//         {this.props.exercises.map((exercise, i) => (
//           <li>
//             {exercise.muscle}
//           </li>
//         ))}

//         </ul>
//       </div>
      
//     )
//  }
 

  
// }

// export default ExerciseIndex;
=======
import React from 'react'
import { connect } from "react-redux";
import { fetchExercises } from "../../actions/exercise_action";
import { Link } from 'react-router-dom'
import { ExerciseIndexItem } from './exercise_index_item';

class ExerciseIndex extends React.Component{

 componentDidMount(){
  // debugger
  this.props.fetchExercises()
 }  


 render(){
    // debugger
    if(this.props.exercises)
    return(
      <div className='exercise-index'>
        <ul className='exercise-index-list'>
        {this.props.exercises.map((exercise, i) => (
          <li key={i} className='exercise-index-item'>
            <Link to={`/exercises/${exercise._id}`}>
              <ExerciseIndexItem exercise={exercise}/>
            </Link>
          </li>
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

>>>>>>> main
  