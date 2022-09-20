import { connect } from 'react-redux';
import { fetchTweets } from '../../actions/tweet_action';
import Tweets from './tweets';

const mapStateToProps = (state) => {
    console.log(state)
    return {
        tweets: Object.values(state.entities.tweets.all)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchTweets: () => dispatch(fetchTweets())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tweets);