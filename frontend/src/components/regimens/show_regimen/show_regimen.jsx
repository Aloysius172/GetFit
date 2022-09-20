import React from "react";
import './show_regimen.css'
import { Link } from 'react-router-dom'
import { HiOutlineTrash } from '@react-icons/all-files/hi/HiOutlineTrash'
import { BiEdit } from '@react-icons/all-files/bi/BiEdit'

class RegimenShow extends React.Component {
    constructor(props) {
        super(props)
        this.calcAvg = this.calcAvg.bind(this);
        this.renderFooterButtons = this.renderFooterButtons.bind(this);
        this.calcTotal = this.calcTotal.bind(this);
        this.createShowExercises = this.createShowExercises.bind(this)
    }

    componentDidMount() {
        this.props.fetchRegimen(this.props.match.params.regimenId);
    }

    renderFooterButtons(creator) {
        if (this.props.state.session.user.username &&
            this.props.state.session.user.username === creator[0]) {
            return (
                <div className="regi-shw-footer">
                    <div>
                        <button title="delete" id="regi-show-delete" className="button" onClick={() => this.props.openModal(["delete_confirm", creator[1]])}>
                            <HiOutlineTrash />
                        </button >
                    </div>
                    <div className='reg-idx-avg-diff'>
                        Avg. Difficulty: {this.calcAvg(this.props.regimen.exercise_ids.map(exercise => exercise.difficulty ? exercise.difficulty : " "))}/3
                    </div>
                    <div>
                        <Link className='exercise-index-link-name-form' to={`/regimens/updateRegimen/${this.props.regimen._id}`}>
                            <button title="edit" id='regi-show-edit' className="button">
                                <BiEdit />
                            </button>
                        </Link>
                    </div>
                </div>
                
            )
        } else {
            return "";
        }
    }

    calcAvg(exrcs) {
        let sum = 0;
        let x = 0;
        let y = 0;
        let diff;
        let diffWord;
        for (let i = 0; i < exrcs.length; i++) {
            if (exrcs[i] === 'Beginner') {
                x = 1;
            } else if (exrcs[i] === "intermediate") {
                x = 2;
            } else if (exrcs[i] === 'Advanced') {
                x = 3;
            }
            y++;
            sum += x;
        }
        diff = sum / y;
        diffWord = diff + ""
        return diffWord.slice(0, 4);
    }

    calcTotal(exrcs, uniqExrcs) {
        let exrcShow = []

        for (let i = 0; i < uniqExrcs.length; i++) {
            let exrcItem = [uniqExrcs[i], 0];
            for (let j = 0; j < exrcs.length; j++) {
                if (exrcs[j] === uniqExrcs[i]) {
                    exrcItem[1]++;
                }
            }
            exrcShow.push(exrcItem);
        }
        return exrcShow
    }

    createShowExercises(exrcArr) {
        let showArr = [];
        for (let i = 0; i < exrcArr.length; i++) {
            if (exrcArr[i][1] > 1) {
                exrcArr[i][0].name = exrcArr[i][0].name + " (" + exrcArr[i][1] + ")";
            }
        }
        return showArr;
    }

    render() {
        let muscles = this.props.regimen.exercise_ids.map(exercise => exercise.muscle ? exercise.muscle + " " : " ");
        let exercises = this.props.regimen.exercise_ids.map(exercise => exercise? exercise : " ");
        let uniqueMuscles = [...new Set(muscles)];
        let uniqueExercises = [...new Set(exercises)];
        let countedExercises = this.calcTotal(exercises, uniqueExercises)
        let showExercises = this.createShowExercises(countedExercises);


        if(this.props.regimen) {
            this.props.regimen.exercise_ids.map(exercise => 
                exercise.description = exercise.description.slice(0, 300) + "...");
        let creator = this.props.regimen.creator;

        return (
            <div className="regi-shw-pg">
                <div className="regi-shw-pg-container">
                    <div className="reg-shw-title-auth">
                        <div>
                            <h1 className="reg-shw-title">
                                {this.props.regimen.title}
                            </h1>
                            <h5 className="reg-shw-title-underline">
                                regimen
                            </h5>
                        </div>
                        <div>
                            <h1 className="reg-shw-creator">
                                {creator}
                            </h1>
                            <h5 className="reg-shw-creator-underline">
                                creator
                            </h5>
                        </div>
                    </div>
                </div>
                <div className="regi-exercises-desc-container">
                    <div>
                    <div>
                        <div>
                            <div className="regi-show">
                                <div>
                                    <div className="regi-desc">
                                        Description:
                                    </div>
                                    <div className="reg-shw-desc-body">
                                        {this.props.regimen.description}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ul className="regi-shw-exrc">
                        <div className="regi-shw-exrc-center">
                        <div className="regi-shw-exrc-hard">
                            Included Exercises
                        </div>
                        <div className="regi-shw-exrc-grid">
                            {this.props.regimen.exercise_ids.map((exerciseObject) =>
                            <li>
                                <div className="regi-shw-exrc-title">
                                        <Link className='exercise-index-link-name-form' to={`/exercises/${exerciseObject._id}`}>
                                            {exerciseObject.name}
                                        </Link>
                                </div>
                                <div className="regi-shw-exrc-desc">
                                    {exerciseObject.description}
                                </div>
                            </li>
                            )}
                        </div>
                        </div>
                    </ul>
                    </div>
                </div>
                <div>
                    {this.renderFooterButtons([this.props.regimen.creator, this.props.regimen])}
                </div>
            </div>
        )
    }
    }
}

export default RegimenShow;