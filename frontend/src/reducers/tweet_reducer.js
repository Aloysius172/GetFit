import { RECEIVE_TWEETS, RECEIVE_USER_TWEETS, RECEIVE_NEW_TWEET, RECEIVE_REGIMEN_TWEETS, DELETE_TWEET } from '../actions/tweet_action';

const TweetsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_TWEETS:
            Object.values(action.tweets.data).forEach(tweet => {
                newState[tweet._id] = tweet;
              })
            // newState = action.tweets.data;
            return newState;
        case RECEIVE_USER_TWEETS:
            newState = action.tweets.data;
            return newState;
        case RECEIVE_REGIMEN_TWEETS:
            Object.values(action.tweets.data).forEach(tweet => {
                newState[tweet._id] = tweet;
              })
            // newState = action.tweets;
            return newState;
        case RECEIVE_NEW_TWEET:
            newState[action.tweet.data._id] = action.tweet.data
            return newState;
        case DELETE_TWEET:
            delete newState[action.tweetId];
            return newState
        default:
            return state;
    }
};

export default TweetsReducer;