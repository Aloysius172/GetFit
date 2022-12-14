import { connect } from 'react-redux';
import { composeTweet } from '../../actions/tweet_action';
import TweetCompose from './tweet_compose';
import { fetchRegimen } from '../../actions/regimen_actions';

const mapStateToProps = (state, ownProps) => {
    console.log(state)
    return {
        currentUserId: state.session.user.id,
        currentUserName: state.session.user.username,
        regimen: state.entities.regimens[ownProps.match.params.regimenId],
        newTweet: state.entities.tweets.new
    };
};

const mapDispatchToProps = dispatch => {
    return {
        composeTweet: data => dispatch(composeTweet(data)),
        fetchRegimen: regimenId => dispatch(fetchRegimen(regimenId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TweetCompose);