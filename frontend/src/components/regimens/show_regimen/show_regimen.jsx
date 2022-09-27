import React from "react";
import './show_regimen.css'
import { Link } from 'react-router-dom'
import { HiOutlineTrash } from '@react-icons/all-files/hi/HiOutlineTrash'
import { BiEdit } from '@react-icons/all-files/bi/BiEdit'
import { AiFillLike } from '@react-icons/all-files/ai/AiFillLike';
import { AiOutlineLike } from '@react-icons/all-files/ai/AiOutlineLike';
import { GiWeightLiftingUp } from '@react-icons/all-files/gi/GiWeightLiftingUp'
import { AiOutlineTeam } from '@react-icons/all-files/ai/AiOutlineTeam'
import { BsPerson } from '@react-icons/all-files/bs/BsPerson'

class RegimenShow extends React.Component {
    constructor(props) {
        super(props)
        this.calcAvg = this.calcAvg.bind(this);
        this.renderFooterButtons = this.renderFooterButtons.bind(this);
        this.calcTotal = this.calcTotal.bind(this);
        this.createShowExercises = this.createShowExercises.bind(this);
        this.renderLiked = this.renderLiked.bind(this);
        this.thumbsUpRegimen = this.thumbsUpRegimen.bind(this);
        this.thumbsDownRegimen = this.thumbsDownRegimen.bind(this);
        this.creatDescriptionDots = this.creatDescriptionDots.bind(this);
        this.createExrcStyle = this.createExrcStyle.bind(this);
        this.generateDifficulty = this.generateDifficulty.bind(this);
        this.generateAssisted = this.generateAssisted.bind(this);
    }

    componentDidMount() {
        this.props.fetchRegimen(this.props.match.params.regimenId);
        this.props.fetchLikes();
    }

    thumbsUpRegimen() {
        let like = {
            user_id: this.props.state.session.user.id,
            regimen_id: this.props.regimen._id
        }
        this.props.createLike(like);
    }

    thumbsDownRegimen(likeId) {
        this.props.destroyLike(likeId);
    }

    renderLiked(regimenId) {
        if (this.props.likes) {
            let count = 0;
            let liked = false;
            let like;
            let theLikes = this.props.likes.map(like => like)
            for (let i = 0; i < theLikes.length; i++) {
                if (theLikes[i].user_id === this.props.state.session.user.id
                    && theLikes[i].regimen_id === regimenId) {
                    liked = true;
                    like = theLikes[i]._id
                }
                if (theLikes[i].regimen_id === regimenId) {
                    count++;
                }
            }
            if (liked) {
                return (
                    <div className='regi-idx-likes'>
                        <div>
                            Likes {count}
                            {/* {this.renderLikes} */}
                        </div>
                        <div className='likes-spacer'>

                        </div>
                        <div onClick={() => this.thumbsDownRegimen(like)}>
                            <AiFillLike size={20} />
                        </div>
                    </div>
                )
            } else {
                return (
                    <div className='regi-idx-likes'>
                        <div>
                            Likes {count}
                            {/* {this.renderLikes} */}
                        </div>
                        <div className='likes-spacer'>

                        </div>
                        <div onClick={() => this.thumbsUpRegimen()}>
                            <AiOutlineLike size={20} />
                        </div>
                    </div>
                )
            }
        }
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
            return (
                <div className='not-creator-diff-regi-shw'>
                    Avg. Difficulty: {this.calcAvg(this.props.regimen.exercise_ids.map(exercise => exercise.difficulty ? exercise.difficulty : " "))}/3
                </div>
            ) 
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

    calcTotal(exrcs) {
        let exrcShow = [];
        let exrcTitles = [];

        for (let i = 0; i < exrcs.length; i++) {

            if(!exrcTitles.includes(exrcs[i].name)) {
                let count = 0;
                exrcTitles.push(exrcs[i].name);
                for(let j = 0; j < exrcs.length; j++) {
                    if(exrcs[i].name === exrcs[j].name) {
                        count++;
                    }
                }
                let exrcItem = [exrcs[i], count];
                exrcShow.push(exrcItem);
            }
        }
        return exrcShow
    }

    createShowExercises(exrcShow) {
        let showArr = [];
        for (let i = 0; i < exrcShow.length; i++) {
            if (exrcShow[i][1] > 1) {
                let num = exrcShow[i][1].toString();
                num = (" (" + num + ")"); 
                exrcShow[i].push(num) 
            } else {
                let num = "";
                exrcShow[i].push(num)
            }
            showArr.push(exrcShow[i])
        }
        return showArr;
    }

    creatDescriptionDots(description) {
        if(description.length > 300) {
            return description.slice(0,300) + "...";
        } else {

            return description;
        }
    }

    createExrcStyle(exrcCount) {
        let style;
        switch(exrcCount) {
            case 1:
                style = "regi-shw-exrc-grid-1"
                break;
            case 2:
                style = "regi-shw-exrc-grid-2"
                break;
            case 3:
                style = "regi-shw-exrc-grid-3"
                break;
            case 4: 
                style = "regi-shw-exrc-grid-4"
                break;
            default:
                style = "regi-shw-exrc-grid-5";
        }
        return style; 
    }

    generateDifficulty(diff) {
        let icons;
        switch (diff) {
            case 'Beginner':
                icons = <div><GiWeightLiftingUp /></div>
                break;
            case 'intermediate':
                icons = <div><GiWeightLiftingUp /><GiWeightLiftingUp /></div>
                break;
            case 'Advanced':
                icons = <div><GiWeightLiftingUp /><GiWeightLiftingUp /><GiWeightLiftingUp /></div>
                break;
            default:
                console.log("");
        }
        return icons;
    }

    generateAssisted(asst) {
        if (asst) {
            asst = <p className='assisted-index'> Solo/ Assisted <br /> <AiOutlineTeam /></p>
        } else {
            asst = <p className='assisted-index'> Solo/ Assisted <br /><BsPerson /></p>
        }
        return asst;
    }

    render() {
        let muscles = this.props.regimen.exercise_ids.map(exercise => exercise.muscle ? exercise.muscle + " " : " ");
        let exercises = this.props.regimen.exercise_ids.map(exercise => exercise? exercise : " ");
        let uniqueMuscles = [...new Set(muscles)];
        let countedExercises = this.calcTotal(exercises)
        let showExercises = this.createShowExercises(countedExercises);
        let creator = this.props.regimen.creator;

        if(this.props.regimen) {

        return (
            <div className="regi-shw-pg">
                {this.renderLiked(this.props.regimen._id)}
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
                                <div className={this.createExrcStyle(showExercises.length)}>
                                    {showExercises.map((exerciseObject) =>
                            <li>
                                <div className="regi-shw-exrc-title">
                                    <Link className='exercise-index-link-name-form' to={`/exercises/${exerciseObject._id}`}>
                                        {exerciseObject[0].name + exerciseObject[2]}
                                    </Link>
                                </div>
                                <div className="regi-shw-exrc-desc">
                                    {this.creatDescriptionDots(exerciseObject[0].description)}
                                </div>
                                <div className="regi-shw-exrc-diff">
                                    Difficulty {this.generateDifficulty(exerciseObject[0].difficulty)}
                                </div>
                                <div>
                                    {this.generateAssisted(exerciseObject[0].assisted)}
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