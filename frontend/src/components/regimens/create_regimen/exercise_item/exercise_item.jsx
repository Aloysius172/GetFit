

import React from 'react';
import { withRouter } from 'react-router';

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

            return (
                <div className='exercise-item-container'>
                            <div className="exercise-text">

                                <div className="exercise-content">
                                    <h3 className="exercise-name-form">
                                        {this.props.exercise.name}
                                    </h3>
                                    <p readOnly className="exercise-description-form">
                                        {this.props.exercise.description}
                                    </p>
                                    <p readOnly className="exercise-type-form">
                                        {this.props.exercise.tpyeOfExercise}
                                    </p>
                                    <p readOnly className="exercise-difficulty-form">
                                        {this.props.exercise.difficulty}
                                    </p>
                                    <p readOnly className="exercise-muscle-form">
                                        {this.props.exercise.muscle}
                                    </p>
                                </div>
                            </div>
                </div>
        );
    }
}

export default ExerciseItem;