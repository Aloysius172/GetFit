import React from "react";
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchRegimens } from "../../actions/regimen_actions";
import { getUsers } from '../../actions/user_actions'
import  RegimenIndexItemContainer  from "./regimen_index_item_container";
import './regimens.css'


class Regimens extends React.Component {

    componentDidMount(){
        this.props.fetchRegimens()
        this.props.getUsers()
        // fetchUserRegimen()
        
    }

    render () {
        if(this.props.regimens && this.props.users) 
        return (
            <div className="regimens-index-container">
                <div className="regimens-index-intro">
                    Welcome to the Regimens Page!
                    <Link className="create-regimen-link" to={'/regimens/create'}>Create a new Regimen!</Link>
                </div>
                <div className="create-regimen-item-div">
                    {this.props.regimens.map((regimen, i) => 
                    <RegimenIndexItemContainer key={i} regimen={regimen} users={this.props.users} />)}
                </div>
                {/* <div>
                    {this.props.users.map(user => user.email)}
                </div> */}
            </div>

        )
    }
}


const mSTP = (state) => {
    // debugger
    return {
        regimens: Object.values(state.entities.regimens),
        users: Object.values(state.entities.users)
    }
}

const mDTP = dispatch => {
    // debugger
    return {
        fetchRegimens: () => dispatch(fetchRegimens()),
        getUsers: () => dispatch(getUsers())
        // fetchUserRegimen: (userId) => dispatch(fetchUserRegimen(userId))
    }
}

export default connect(mSTP, mDTP)(Regimens)