import { connect } from 'react-redux'
import RegimenIndexItem from './regimen_index_item'
import { getUser } from '../../actions/user_actions'
import { openModal } from '../../actions/modal_actions';
// import { likeRegimen } from '../../actions/regimen_actions';
import { createLike } from '../../actions/like_actions'
import { fetchLikes } from "../../actions/like_actions";
import { deleteLike } from "../../actions/like_actions"

const mSTP = (state) => ({
    state: state,
    likes: Object.values(state.entities.likes)
})

const mDTP = (dispatch) => {
    // debugger;
    return {
        fetchUser: (userId) => dispatch(getUser(userId)),
        openModal: modal => dispatch(openModal(modal)),
        createLike: (like) => dispatch(createLike(like)),
        fetchLikes: () => dispatch(fetchLikes()),
        destroyLike: (likeId) => dispatch(deleteLike(likeId))
        // likeRegimen: (likeInfo) => dispatch(likeRegimen(likeInfo))
    }
}


export default connect(mSTP, mDTP)(RegimenIndexItem)