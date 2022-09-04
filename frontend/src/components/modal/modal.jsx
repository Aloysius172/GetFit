import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../session/login_form_container';
import SignupFormContainer from '../session/signup_form_container';
import ExerciseInfo from './exrc_info';

function Modal({ modal, closeModal }) {

    if (!modal) {
        return null;
    }
    let component;
    if(modal === "signup") {
        component = <SignupFormContainer />;
    } else if(modal === "login") {
        component = <LoginFormContainer />;
    } else if(modal[0] === "exc_info") {
        component = <ExerciseInfo 
                exrc={modal[1]}/>;
    }
    // switch (modal) { //[string, info]
    //     case 'login':
    //         component = <LoginFormContainer />;
    //         break;
    //     case 'signup':
    //         component = <SignupFormContainer />;
    //         break;
    //     default:
    //         return null;
    // }

    // if(modal === "signup") {
    //     // component = <ExcInfoContainer
    //     //                 exc={info} 
    //     //             />;
    //     component = <SignupFormContainer />;
    // }
    return (
        <div className="modal-background">
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        modal: state.ui.modal
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
