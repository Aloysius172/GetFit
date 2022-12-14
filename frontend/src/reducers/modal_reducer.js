import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions';
import { REMOVE_REGIMEN } from '../actions/regimen_actions'
import {
    RECEIVE_CURRENT_USER,
    RECEIVE_USER_LOGOUT,
    RECEIVE_USER_SIGN_IN
} from '../actions/session_actions';


export default function modalReducer(state = null, action) {
    switch (action.type) {
        case OPEN_MODAL:
            return action.modal;
        case CLOSE_MODAL:
            return null;
        case RECEIVE_USER_SIGN_IN:
            return null;
        case RECEIVE_USER_LOGOUT:
            return null;
        case RECEIVE_CURRENT_USER:
            return null;
        case REMOVE_REGIMEN:
            return null;
        default:
            return state;
    }
}