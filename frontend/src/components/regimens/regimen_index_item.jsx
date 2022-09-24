import { Link } from 'react-router-dom';
import React from 'react';
import './regimen_index_item.css';
import { HiOutlineTrash } from '@react-icons/all-files/hi/HiOutlineTrash';
import { BiEdit } from '@react-icons/all-files/bi/BiEdit';
import { AiFillLike } from '@react-icons/all-files/ai/AiFillLike';
import { AiOutlineLike } from '@react-icons/all-files/ai/AiOutlineLike';


class RegimenIndexItem extends React.Component{
  constructor(props){
    super(props)
    this.calcAvg = this.calcAvg.bind(this);
    this.renderFooterButtons = this.renderFooterButtons.bind(this);
    this.calcTotal = this.calcTotal.bind(this);
    this.createShowExercises = this.createShowExercises.bind(this);
    this.renderLiked = this.renderLiked.bind(this);
    this.thumbsUpRegimen = this.thumbsUpRegimen.bind(this);
    this.thumbsDownRegimen = this.thumbsDownRegimen.bind(this);
  }

  componentDidMount() {
    this.props.fetchLikes();
  }

  thumbsUpRegimen() {
    let like = {
      user_id: this.props.state.session.user.id,
      regimen_id: this.props.regimen._id
    }
    debugger;
    this.props.createLike(like);
  }

  thumbsDownRegimen(likeId) {
    this.props.destroyLike(likeId);
  }

  renderLiked(regimenId) {
    if(this.props.likes) {
    let count = 0;
    let liked = false;
    let like;
    let theLikes = this.props.likes.map(like => like)
    for(let i = 0; i < theLikes.length; i++) {
      if (theLikes[i].user_id === this.props.state.session.user.id 
        && theLikes[i].regimen_id === regimenId) {
          liked = true;
          like = theLikes[i]._id
        }
      if(theLikes[i].regimen_id === regimenId) {
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
              <AiOutlineLike size={20}/>
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
        <div className='regi-idx-footer'>
          <div>
            <button id="regi-idx-delete" className="button" onClick={() => this.props.openModal(["delete_confirm", creator[1]])}>
              <HiOutlineTrash />

            </button >
          </div>
          <div className='reg-idx-avg-diff'>
            Avg. Difficulty: {this.calcAvg(this.props.regimen.exercise_ids.map(exercise => exercise.difficulty ? exercise.difficulty : " "))}/3
          </div>
          <div>
            <Link className='exercise-index-link-name-form' to={`/regimens/updateRegimen/${this.props.regimen._id}`}>
              <button id='regi-idx-edit' className="button">
                <BiEdit />
              </button>
            </Link>
          </div>
        </div>
      )
    } else {
      return(
        <div className='reg-idx-avg-diff'>
          Avg. Difficulty: { this.calcAvg(this.props.regimen.exercise_ids.map(exercise => exercise.difficulty ? exercise.difficulty : " ")) }/3
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
      } else if(exrcs[i] === "intermediate") {
        x = 2;
      } else if(exrcs[i] === 'Advanced') {
        x = 3;
      }
      y++;
      sum += x;
    }
    diff = sum/y;
    diffWord = diff + ""
    return diffWord.slice(0,4);
  }

  calcTotal(exrcs, uniqExrcs) {
    let exrcShow = []

    for(let i = 0; i < uniqExrcs.length; i++) {
      let exrcItem = [uniqExrcs[i], 0];
      for(let j = 0; j < exrcs.length; j++) {
        if(exrcs[j] === uniqExrcs[i]) {
          exrcItem[1]++;
        }
      }
      exrcShow.push(exrcItem);
    }
    return exrcShow
  }

  createShowExercises(exrcArr) {
    let showArr = [];
    for(let i = 0; i < exrcArr.length; i++) {
      let showArrItem = [];
      if(exrcArr[i][1] > 1) {
      exrcArr[i][0] = exrcArr[i][0] + " (";
      exrcArr[i].push(")");
      showArr.push(exrcArr[i]);
      } else {
        showArr.push(exrcArr[i][0]);
      }
    }
    return showArr;
  }


  

  render(){

    let muscles = this.props.regimen.exercise_ids.map(exercise => exercise.muscle ? exercise.muscle + " " : " ");
    let exercises = this.props.regimen.exercise_ids.map(exercise => exercise.name ? exercise.name: " ");
    let uniqueMuscles = [...new Set(muscles)];
    let uniqueExercises = [...new Set(exercises)];
    let countedExercises = this.calcTotal(exercises, uniqueExercises)
    let showExercises = this.createShowExercises(countedExercises);
    let user = this.props.regimen.creator;
   
    


    // let user = this.props.regimen.creator





    return(
      <div className="regimen-index-item-container">
        <div className='regi-idx-title-auth'>
          <div> Regimen: &nbsp;
            <Link className="regimen-index-item-title" to={`/regimens/${this.props.regimen._id}`}>
              {this.props.regimen.title}
            </Link>
          </div>
          <div className='regi-auth'>
            Creator: &nbsp;
            {user}
          </div>
        </div>

        <div className='regimen-index-item'>
          <div className='regi-idx-exrc-cont'>
            <div className='regi-idx-exrc-title'>
              Exercises
            </div>
            <div className='reg-shw-exrc-list'>
              {showExercises.map((exercise) =>
                <li className='regi-idx-list-exrc'>
                  {exercise}
                </li>
              )}
            </div>
          </div>

          <div className='regi-idx-musc-cont'>
            <div className='regi-idx-musc-title'>
              Muscle Groups
            </div>
            <div className='reg-shw-musc-list'>
              {uniqueMuscles.map((muscle) =>
                <li className='regi-idx-list-musc'>
                  {muscle}
                </li>
              )}
            </div>
          </div>
        </div>
        <div className='regi-idx-footer'>
            {this.renderFooterButtons([this.props.regimen.creator, this.props.regimen])}
        </div>
          {this.renderLiked(this.props.regimen._id)}
      </div>
    )
  }
}

export default RegimenIndexItem;
