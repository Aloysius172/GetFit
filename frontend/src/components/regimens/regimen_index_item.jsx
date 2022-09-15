import { Link } from 'react-router-dom'
import React from 'react'
import './regimen_index_item.css'


class RegimenIndexItem extends React.Component{
  constructor(props){
    super(props)
  }

  // componentDidMount() {
  //   this.props.fetchUser(this.props.regimen.user_id);
  // }
  

  render(){

    let muscles = this.props.regimen.exercise_ids.map(exercise => exercise.muscle ? exercise.muscle + " " : " ");
    let exercises = this.props.regimen.exercise_ids.map(exercise => exercise.name ? exercise.name + ", \n": " ");
    let uniqueMuscles = [...new Set(muscles)];
    let user = "Steve"
    let muscTitle = "Muscle Groups: "
    


    // let user = this.props.regimen.creator





    return(
      <div className="regimen-index-item-container">
        <div className='regi-idx-title-auth'>
          <div> Regimen: &nbsp;
            <Link className="regimen-index-item-title" to={`/regimens/${this.props.regimen._id}`}>
              {this.props.regimen.title}
            </Link>
          </div>
          <div className='regi-auth'>
            Creator: &nbsp;
            {user}
          </div>
        </div>

        <div className='regimen-index-item'>
          <div className='regi-idx-exrc-cont'>
            <div className='regi-idx-exrc-title'>
              Exercises:
            </div>
            <div className='reg-shw-exrc-list'>
              {exercises}
            </div>
          </div>

          <div className='regi-idx-musc-cont'>
            <div className='regi-idx-musc-title'>
              {muscTitle}
            </div>
            <div className='reg-shw-musc-list'>
              {uniqueMuscles}
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default RegimenIndexItem;
