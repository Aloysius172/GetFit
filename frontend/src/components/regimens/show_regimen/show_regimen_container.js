import { connect } from 'react-redux';

import { fetchRegimen } from '../../../actions/regimen_actions';
import { deleteRegimens } from '../../../actions/regimen_actions';
import RegimenShow from './show_regimen';
import { openModal } from '../../../actions/modal_actions';
import { createLike } from '../../../actions/like_actions'
import { fetchLikes } from "../../../actions/like_actions";
import { deleteLike } from "../../../actions/like_actions"

import { composeTweet, fetchRegimenTweets, updateTweet, tweetDeletion } from '../../../actions/tweet_action';



const mSTP = (state, ownProps) => {

    return {
        state: state,
        currentUserId: state.session.user.id,
        currentUserName: state.session.user.username,
        regimen: state.entities.regimens[ownProps.match.params.regimenId],
        newTweet: state.entities.tweets.new,
        regimenTweets: Object.values(state.entities.tweets),
        likes: Object.values(state.entities.likes)
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
        deleteTweet: tweetId => dispatch(tweetDeletion(tweetId)),
        createLike: (like) => dispatch(createLike(like)),
        fetchLikes: () => dispatch(fetchLikes()),
        destroyLike: (likeId) => dispatch(deleteLike(likeId)),
    };
};

export default connect(mSTP, mDTP)(RegimenShow);
