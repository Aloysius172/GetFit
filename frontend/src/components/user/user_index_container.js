import { connect } from "react-redux";
import { getUsers } from "../../actions/user_actions";
import UserIndex from "./user_index";


const mSTP = (state, props) => {
    // console.log(Object.values(state.entities.users))
    console.log(props) 
    // return {
    //     users: Object.values(state.entities.users)
    // }
};

const mDTP = dispatch => ({
    // getUsers: () => dispatch(getUsers())
});

export default connect(mSTP, mDTP)(UserIndex);