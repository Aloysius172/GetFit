import axios from 'axios';

export const getUsers = () => {
    return axios.get('/api/users')
    // .then(function (response) {
    // your action after success
        // console.log(response);
};

export const getUser = (userId) => {
    return axios.get(`api/users/${userId}`)
};
