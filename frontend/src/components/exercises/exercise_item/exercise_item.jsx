

import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom'
import ItemStyle from './exercise_item.css'
import { GiWeightLiftingUp } from '@react-icons/all-files/gi/GiWeightLiftingUp'
import { AiOutlineTeam } from '@react-icons/all-files/ai/AiOutlineTeam'
import { BsPerson } from '@react-icons/all-files/bs/BsPerson'

class ExerciseItem extends React.Component {
    constructor(props) {
        super(props)

    }

    // renderDeleteButtons() {
    //     if (this.props.exercise.author_id === this.props.currentUserId) {
    //         return (
    //             <button className="delete-exercise-from-regimen-button"
    //                 onClick={() => this.props.deleteExerciseFromRegimen(this.props.exercise.id)} >
    //             </button>
    //         );
    //     }
    // }

    render() {
    
        let asst;
        let difficulty;
        if (this.props.exercise.assisted) {
            asst = <p className='assisted-index'> Solo/ Assisted? : <br /> <AiOutlineTeam /></p>
        } else {
            asst = <p className='assisted-index'> Solo/ Assisted? : <br /><BsPerson /></p>
        }

        switch(this.props.exercise.difficulty) {
            case 'Beginner':
            difficulty = <div><GiWeightLiftingUp /></div> 
            break;
            case 'intermediate':
                difficulty = <div><GiWeightLiftingUp /><GiWeightLiftingUp /></div>
                break;
            case 'Advanced':
                difficulty = <div><GiWeightLiftingUp /><GiWeightLiftingUp /><GiWeightLiftingUp /></div>
                break;
            default:
                console.log("");
        }
    
        return (
        <div className='index-exercise-container'>
            <div className="index-exercise-content">
                <div className='index-container-text'>
                    <h3 className="exercise-index-name-form">
                        <Link className='exercise-index-link-name-form' to={`/exercises/${this.props.link}`}>
                            {this.props.exercise.name}
                        </Link>
                    </h3>
                    <div className='spacer-index'>
                    </div>
                    <h4 className='exercise-type-index'>Type of Exercise: <br /> {this.props.exercise.typeOfExercise}</h4>
                    <div className='spacer-index'>
                    </div>
    
                    <p readOnly className="exercise-index-difficulty-form">
                        Difficulty Level: {difficulty}
                    </p>
                    {asst}
                </div>
            </div>
        </div>
        );
    }
}

export default ExerciseItem;