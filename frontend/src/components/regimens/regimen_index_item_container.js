import { connect } from 'react-redux'
import RegimenIndexItem from './regimen_index_item'
import { getUser } from '../../actions/user_actions'

const mSTP = (state) => ({
    state: state
})

const mDTP = (dispatch) => {
    return {
        // fetchUser: (userId) => dispatch(getUser(userId))
    }
}


export default connect(mSTP, mDTP)(RegimenIndexItem)