import { connect } from 'react-redux'
import RegimenIndexItem from './regimen_index_item'
import { getUser } from '../../actions/user_actions'
import { openModal } from '../../actions/modal_actions';

const mSTP = (state) => ({
    state: state
})

const mDTP = (dispatch) => {
    return {
        fetchUser: (userId) => dispatch(getUser(userId)),
        openModal: modal => dispatch(openModal(modal)),
    }
}


export default connect(mSTP, mDTP)(RegimenIndexItem)