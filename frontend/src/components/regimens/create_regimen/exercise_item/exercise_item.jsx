

import React from 'react';
import { Link } from 'react-router-dom';
import Style from './exercise_item.css'
import { withRouter } from 'react-router-dom';
// import './exercise_item.css';


class ExerciseItem extends React.Component {
    constructor(props) {
        super(props);

    };


    render() {

        let musc;
        let diff;
        if (this.props.exrc.muscle.length > 20) {
            musc = this.props.exrc.muscle.slice(0, 20) + "...";
        } else {
            musc = this.props.exrc.muscle;
        };

        if (this.props.exrc.difficulty === "intermediate") {
            diff = "Intermediate"
        } else {
            diff = this.props.exrc.difficulty;
        }
        let asst;
        if (this.props.exrc.assisted) {
            asst = "Assisted";
        } else {
            asst = "Solo";
        }
        return (
                <div className='exercise-item-container'>
                        <div className='exercise-text-container'>
                            <div className="exercise-text">

                                <div className="exercise-content">
                                    <h3 className="exercise-name-form">
                                        {this.props.exrc.name}
                                    </h3>
                                    <p className='difficulty-label-submit-page'>Difficulty</p>
                                    <p readOnly className="exercise-difficulty-form">
                                         {diff}
                                    </p>
                                    <p readOnly className="exercise-difficulty-form">
                                        {asst}
                                    </p>
                                </div>
                                <div className='regimen-buttons-container'>
                                    <button id="add-exrc-info-button" className="button-submit" onClick={() => this.props.openModal(["exc_info", this.props.exrc])}> 
                                        Info
                                    </button>
                                    <div className='button-spacer'></div>
                                    <button id="add-exrc-button" className='button-submit' onClick={() => this.props.addExercise(this.props.exrc)}>Add</button>
                                </div>
                            </div>
                        </div>
                </div>
        ) 
    }  
}

export default withRouter(ExerciseItem);