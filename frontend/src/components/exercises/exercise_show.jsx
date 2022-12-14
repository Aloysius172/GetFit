import React from 'react'
import { connect } from "react-redux";
import { fetchExercise } from "../../actions/exercise_action";
import YoutubeEmbed from "./youtube_embed";
import './exercise_show.css'
import { Link } from 'react-router-dom'
import './exercise_show.css'
class ExerciseShow extends React.Component{

  componentDidMount(){
   this.props.fetchExercise(this.props.match.params.exerciseId)
  }

  render(){
    if(this.props.exercise) {
      let asst;
      if(this.props.exercise.assisted) {
        asst = "Assisted";
      } else {
        asst = "Solo;"
      }
    return (
     <div className='exercise-show-container'>
      <div className='exercise-show-top'>
        <h1 className='exercise-show-title'>
          {this.props.exercise.name}
        </h1>
      <div/>
      <div className='top-info'>
        <div className='exercise-show-muscle'>
          <h3 className='muscle-label'>
            Muscle(s):
          </h3>
          <span className='muscle-content'>
            {this.props.exercise.muscle}
          </span>
        </div>
        <div className='exercise-show-type'>
          <h3 className='type-label'>
            Type of Exercise: 
          </h3>
          <span className='type-content'>
            {this.props.exercise.typeOfExercise}
          </span>
        </div>
          <div className='exercise-show-equipment'>
            <h3 className='equipment-label'>
              Equipment Needed:
            </h3>
            <span className='equipment-content'>
              {this.props.exercise.equipment}
            </span>
          </div>
      </div>
      </div>
      <div className='exercise-show-bottom'>
        <div className='exercise-show-description'>
          <h2 className='description-label'>
            Description:
          </h2>
          <p className='description-content'>
            {this.props.exercise.description}
          </p>
          <div className='footer-container-show'>
            <div>
              <div className='description-diff'>
                Difficulty:
              </div>
              <div className='description-content'>
                {this.props.exercise.difficulty}
              </div>
            </div>
            
            <div>
              <div className='description-asst'>
                Assisted or Solo:
              </div>
              <div className='description-content'>
                {asst}
              </div>
            </div>
            </div>
        </div>

            

        <div className='exercise-show-video'>
          <YoutubeEmbed embedId={this.props.exercise.video_id} />
        </div> 
      </div>
     </div>
    )
    }
  } 
}

const mSTP = (state, ownProps) => {
  return { exercise: state.entities.exercises[ownProps.match.params.exerciseId]}
}

const mDTP = dispatch => {
  return { fetchExercise: exerciseId => dispatch(fetchExercise(exerciseId)) }
}

export default connect(mSTP, mDTP)(ExerciseShow)



