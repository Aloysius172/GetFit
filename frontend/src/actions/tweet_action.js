import { getTweets, getUserTweets, getRegimenTweets, writeTweet, editTweet, deleteTweet } from '../util/tweet_api_util';
import { RECEIVE_REGIMEN } from './regimen_actions';

export const RECEIVE_TWEETS = "RECEIVE_TWEETS";
export const RECEIVE_USER_TWEETS = "RECEIVE_USER_TWEETS";
export const RECEIVE_NEW_TWEET = "RECEIVE_NEW_TWEET";
export const RECEIVE_REGIMEN_TWEETS = "RECEIVE_REGIMEN_TWEETS";
export const DELETE_TWEET = "DELETE_TWEET";

export const receiveTweets = tweets => ({
    type: RECEIVE_TWEETS,
    tweets
});

export const receiveUserTweets = tweets => ({
    type: RECEIVE_USER_TWEETS,
    tweets
});

export const receiveRegimenTweets = tweets => ({
    type: RECEIVE_REGIMEN_TWEETS,
    tweets
})

export const receiveNewTweet = tweet => ({
    type: RECEIVE_NEW_TWEET,
    tweet
});

export const removeTweet = tweetId => ({
    type: DELETE_TWEET,
    tweetId
})

export const fetchTweets = () => dispatch => (
    getTweets()
        .then(tweets => dispatch(receiveTweets(tweets)))
        .catch(err => console.log(err))
);

export const fetchUserTweets = id => dispatch => (
    getUserTweets(id)
        .then(tweets => dispatch(receiveUserTweets(tweets)))
        .catch(err => console.log(err))
);

export const fetchRegimenTweets = regimenId => dispatch => (
    getRegimenTweets(regimenId)
        .then(tweets => dispatch(receiveRegimenTweets(tweets)))
        .catch(err => console.log(err))
);

export const composeTweet = data => dispatch => (
    writeTweet(data)
        .then(tweet => dispatch(receiveNewTweet(tweet)))
        .catch(err => console.log(err))
);

export const updateTweet = data => dispatch => (
    editTweet(data)
        .then(tweet => dispatch(receiveNewTweet(tweet)))
        .catch(err => console.log(err))
);

export const tweetDeletion = tweetId => dispatch => (
    deleteTweet(tweetId)
        .then(() => dispatch(removeTweet(tweetId)))
        .catch(err => console.log(err))

);