

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
        if (this.props.exrc.muscle.length > 20) {
            musc = this.props.exrc.muscle.slice(0, 20) + "...";
        } else {
            musc = this.props.exrc.muscle;
        };
        return (
                <div className='exercise-item-container'>
                        <div className='exercise-text-container'>
                            <div className="exercise-text">

                                <div className="exercise-content">
                                    <h3 className="exercise-name-form">
                                        {this.props.exrc.name}
                                    </h3>
                                    <p readOnly className="exercise-difficulty-form">
                                        {this.props.exrc.difficulty}
                                    </p>
                                    <p readOnly className="exercise-difficulty-form">
                                        {musc}
                                    </p>
                                </div>
                                <div className='regimen-buttons-container'>
                            <button onClick={() => this.props.openModal(["exc_info", this.props.exrc.difficulty])}> 
                                        Info
                                    </button>
                                    <div className='button-spacer'></div>
                                    <button className='exercise-regimen-submit' onClick={() => this.props.addExercise(this.props.exrc)}>Add</button>
                                </div>
                            </div>
                        </div>
                </div>
        ) 
    }  
}

export default withRouter(ExerciseItem);