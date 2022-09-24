import { RECEIVE_LIKE, RECEIVE_LIKES, REMOVE_LIKE } from "../actions/like_actions";

const likeReducer = (state = {}, action) => {
    Object.freeze(state)
    let nextState = Object.assign({}, state)

    switch (action.type) {
        case RECEIVE_LIKES:
            Object.values(action.likes).forEach(like => {
                nextState[like._id] = like;
            })
            return nextState;
        case RECEIVE_LIKE:
            nextState[action.like._id] = action.like;
            return nextState;
        case REMOVE_LIKE:
            delete nextState[action.likeId];
            return nextState;
        default:
            return state;
    }
}

export default likeReducer