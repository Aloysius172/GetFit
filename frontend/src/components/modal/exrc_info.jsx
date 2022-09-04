import React from 'react';
// import ModalStyle from './modal.css'


class ExerciseInfo extends React.Component {

    render() {
    return(
            <div>
                Hello
                {this.props.exrc.difficulty}
            </div>
        )       
    }
}

export default ExerciseInfo;