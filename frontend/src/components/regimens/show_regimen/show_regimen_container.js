import { connect } from 'react-redux';

import { fetchRegimen } from '../../../actions/regimen_actions';
import { deleteRegimens } from '../../../actions/regimen_actions';
import RegimenShow from './show_regimen';
import { openModal } from '../../../actions/modal_actions';

import { composeTweet, fetchRegimenTweets, updateTweet, tweetDeletion } from '../../../actions/tweet_action';



const mSTP = (state, ownProps) => {

    return {
        state: state,
        currentUserId: state.session.user.id,
        currentUserName: state.session.user.username,
        regimen: state.entities.regimens[ownProps.match.params.regimenId],
        newTweet: state.entities.tweets.new,
        regimenTweets: Object.values(state.entities.tweets)
    };
};

const mDTP = (dispatch) => {
    return {
        fetchRegimen: regimenId => dispatch(fetchRegimen(regimenId)),
        deleteRegimens: regimenId => dispatch(deleteRegimens(regimenId)),
        openModal: modal => dispatch(openModal(modal)),
        composeTweet: data => dispatch(composeTweet(data)),
        fetchRegimenTweets: regimenId => dispatch(fetchRegimenTweets(regimenId)),
        updateTweet: data => dispatch(updateTweet(data)),
        deleteTweet: tweetId => dispatch(tweetDeletion(tweetId))
    };
};

export default connect(mSTP, mDTP)(RegimenShow);
