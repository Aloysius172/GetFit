import * as APIUtil from '../util/user_api_util';

export const RECEIVE_USERS = 'RECEIVE_USERS'; 
export const RECEIVE_USER = 'RECEIVE_USER'; 

export const receiveUsers = users => ({
    type: RECEIVE_USERS,
    users
});

export const receiveUser = user => ({
    type: RECEIVE_USER,
    user
});

export const getUsers = () => dispatch => {
    return APIUtil.getUsers()
        .then(users => dispatch(receiveUsers(users)))
}

export const getUser = (userId) => dispatch => {
    return APIUtil.getUser(userId)
        .then(user => dispatch(receiveUser(user)))
}