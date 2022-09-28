import { combineReducers } from 'redux';
import tweets from '../components/tweets/tweets';
import exercisesReducer from './exercise_reducer';
import regimensReducer from './regimen_reducer'
import TweetsReducer from './tweet_reducer';
import userReducer from './user_reducer';
import likesReducer from './like_reducer';

const EntitiesReducer = combineReducers({
 exercises: exercisesReducer,
 regimens: regimensReducer,
 users: userReducer,
 tweets: TweetsReducer,
 likes: likesReducer
});

export default EntitiesReducer;