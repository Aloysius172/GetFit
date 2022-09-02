

import React from 'react';
import { Link } from 'react-router-dom';
// import './exercise_item.css';


const ExerciseItem = ({ exrc, addExercise }) => {

    // renderDeleteButtons() {
    //     if (this.props.exercise.author_id === this.props.currentUserId) {
    //         return (
    //             <button className="delete-exercise-from-regimen-button"
    //                 onClick={() => this.props.deleteExerciseFromRegimen(this.props.exercise.id)} >
    //             </button>
    //         );
    //     }
    // }


            return (
                <div className='exercise-item-container'>
                        <div className='exercise-text-container'>
                            <div className="exercise-text">

                                <div className="exercise-content">
                                    <h3 className="exercise-name-form">
                                        {exrc.name}
                                    </h3>
                                    <p readOnly className="exercise-difficulty-form">
                                        {exrc.difficulty}
                                    </p>
                                    <p readOnly className="exercise-difficulty-form">
                                        {exrc.muscle}
                                    </p>
                                </div>
                                <div className='regimen-buttons-container'>
                                    <Link to={`/exercises/${exrc._id}`}><button className='exercise-regimen-modal'>Info</button></Link>
                                    <div className='button-spacer'></div>
                                    <button className='exercise-regimen-submit' onClick={() => addExercise(exrc)}>Add</button>
                                </div>
                            </div>
                        </div>
                </div>
        );

}

export default ExerciseItem;