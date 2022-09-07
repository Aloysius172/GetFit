import React from 'react';
// import ModalStyle from './modal.css'
import Style from './exrc_info.css'


class ExerciseInfo extends React.Component {

    render() {
        let musc;

        if (this.props.exrc.muscle.length > 20) {
            musc = this.props.exrc.muscle.slice(0, 20) + "...";
        } else {
            musc = this.props.exrc.muscle;
        };
        let equip;
        if (this.props.exrc.equipment === "none") {
            equip = "None";
        } else {
            equip = this.props.exrc.equipment;
        }
    return(
            <div className='exrc-info'>
                <div>
                    <div id="exercise-name-modal">
                        {this.props.exrc.name}
                    </div>

                    <div className='exrc-modal-grid'>
                        <div className='exrc-info-diff'>
                            <div className='exrc-modal-diff'>Difficulty</div>
                            {this.props.exrc.difficulty}
                        </div>

                        <div className='exrc-info-muscles'>
                            <div className='exrc-modal-musc'>Muscle Groups</div>
                          {musc} 
                        </div>

                        <div className='exrc-info-type'>
                            <div className='exrc-modal-type'>Type of Exercise</div>
                         {this.props.exrc.typeOfExercise}
                        </div>

                        <div className='exrc-info-equip'>
                            <div className='exrc-modal-equip'>Equipment</div>
                              {equip}
                        </div>
                    </div>  

                    <div className='close-modal-button-div'>
                        <button className='close-modal-button'
                            onClick={this.props.closeModal}>
                            Close
                        </button>
                    </div>
                </div>
            </div>
        )       
    }
}

export default ExerciseInfo;