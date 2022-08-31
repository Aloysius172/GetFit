

import React from 'react';
import { withRouter } from 'react-router';

class ExerciseItem extends React.Component {
    constructor(props) {
        super(props)

    }

    // renderDeleteButtons() {
    //     if (this.props.post.author_id === this.props.currentUserId) {
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
                        <li className="exercise-regimen-item">
                            <div className="exercise-text">

                                <div className="post-content">
                                    <h3 className="exercise-name-form">
                                        {this.props.exercise.name}
                                    </h3>
                                    <p readOnly className="exercise-description-form">
                                        {this.props.post.description}
                                    </p>
                                    <p readOnly className="exercise-type-form">
                                        {this.props.post.tpyeOfExercise}
                                    </p>
                                    <p readOnly className="exercise-difficulty-form">
                                        {this.props.post.difficulty}
                                    </p>
                                    <p readOnly className="exercise-muscle-form">
                                        {this.props.post.muscle}
                                    </p>
                                </div>
                            </div>
                        </li>
                </div>
        );
    }
}

export default ExerciseItem;