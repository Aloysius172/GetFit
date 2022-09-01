import { RECEIVE_USER, RECEIVE_USERS } from "../actions/user_actions";
import { RECEIVE_CURRENT_USER, RECEIVE_USER_LOGOUT  } from "../actions/session_actions";

const usersReducer = (state = {}, action) => {

    Object.freeze(state);

    let nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_USERS:
            console.log(Object.values)
            Object.values(action.users.data).forEach(user => {
                nextState[user._id] = user;
            });
            return nextState;
        case RECEIVE_USER_LOGOUT:
            nextState = {}
            return nextState
        case RECEIVE_USER:
            nextState[action.user._id] = action.user.data;
            return nextState
        // case RECEIVE_CURRENT_USER:
        //     return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });
        // case LOGOUT_CURRENT_USER:
        //     return {}
        default:
            return state;
    }
};

export default usersReducer;