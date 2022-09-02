import { Link } from 'react-router-dom'
export const RegimenIndexItem = (props) => (
  <div className="regimen-index-item-container">
    <Link className="regimen-index-item-title" to={`/regimens/${props.regimen._id}`}>
      {props.regimen.title}
    </Link>
    <div className="regimen-index-item-description">
      {props.regimen.description}
    </div>
  </div>
)

  // < h3 className = "exercise-index-name-form" >
  //   <Link className='exercise-index-link-name-form' to={`/exercises/${this.props.link}`}>
  //     {this.props.exercise.name}
  //   </Link>
  //                   </ >