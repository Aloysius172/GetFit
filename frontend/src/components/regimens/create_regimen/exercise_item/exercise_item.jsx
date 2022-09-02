

import React from 'react';
import { withRouter } from 'react-router';


const ExerciseItem = ({ exrc }) => {

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
                                </div>
                                <div className='regimen-buttons-container'>
                                    <button className='exercise-regimen-modal'>Info</button>
                                    <div className='button-spacer'></div>
                                    <button className='exercise-regimen-submit'>Add</button>
                                    <button onClick={() => this.props.addExercise(exrc)}>add exercise</button>
                                </div>
                            </div>
                        </div>
                </div>
        );

}

export default ExerciseItem;