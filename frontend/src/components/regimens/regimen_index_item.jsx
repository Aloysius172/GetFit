import { Link } from 'react-router-dom'
import React from 'react'
import './regimen_index_item.css'


class RegimenIndexItem extends React.Component{
  constructor(props){
    super(props)
  }
  

  render(){

    let muscles = this.props.regimen.exercise_ids.map(exercise => exercise.muscle ? exercise.muscle : null)
    
    let uniqueMuscles = [...new Set(muscles)]



    return(
      <div className="regimen-index-item-container">
        <Link className="regimen-index-item-title" to={`/regimens/${this.props.regimen._id}`}>
          {this.props.regimen.title}
        </Link>
        <div className='regimen-index-item-muscles'>
          {uniqueMuscles}
        </div>
      </div>
    )
  }
}

export default RegimenIndexItem;
