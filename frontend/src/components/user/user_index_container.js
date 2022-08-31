import { connect } from "react-redux";
import { getUsers } from "../../actions/user_actions";
import UserIndex from "./user_index";


const mSTP = (state) => {
    // debugger
    return {
        users: Object.values(state.entities.users)
    }
}

const mDTP = dispatch => {
    // debugger
    return {
        getUsers: () => dispatch(getUsers())

    }
}

export default connect(mSTP, mDTP)(UserIndex)