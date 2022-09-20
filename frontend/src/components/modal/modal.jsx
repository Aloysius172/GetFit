import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../session/login_form_container';
import SignupFormContainer from '../session/signup_form_container';
import ExerciseInfoContainer from './exrc_info_container.js';
import DeleteConfirmContainer from './delete_confirm/delete_confirm_container.js'

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
        component = <ExerciseInfoContainer 
                exrc={modal[1]}/>;
    } else if(modal[0] === "delete_confirm") {
        component = <DeleteConfirmContainer
                regimen={modal[1]}/>;
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
