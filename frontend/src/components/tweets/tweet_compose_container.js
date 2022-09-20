import { connect } from 'react-redux';
import { composeTweet } from '../../actions/tweet_action';
import TweetCompose from './tweet_compose';

const mapStateToProps = (state) => {
    console.log(state)
    return {
        currentUser: state.session.user,
        newTweet: state.entities.tweets.new
    };
};

const mapDispatchToProps = dispatch => {
    return {
        composeTweet: data => dispatch(composeTweet(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TweetCompose);