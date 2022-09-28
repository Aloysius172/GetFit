import axios from 'axios';

export const getTweets = () => {
    return axios.get('/api/tweets')
};

export const getUserTweets = id => {
    return axios.get(`/api/tweets/user/${id}`)
};

export const getRegimenTweets = regimenId => {
    return axios.get(`/api/tweets/regimen/${regimenId}`)
};

export const writeTweet = data => {
    return axios.post('/api/tweets/', data)
};

export const editTweet = data => {
    return axios.patch('/api/tweets/', data)
};

export const deleteTweet = id => {
    return axios.delete(`api/tweets/${id}`)
};