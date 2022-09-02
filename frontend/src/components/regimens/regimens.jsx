import React from "react";
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchRegimens } from "../../actions/regimen_actions";
import { RegimenIndexItem } from "./regimen_index_item";


class Regimens extends React.Component {

    componentDidMount(){
        this.props.fetchRegimens()
        // fetchUserRegimen()
        
    }

    render () {
        if(this.props.regimens) 
        return (
            <div className="regimens-index-container">
                <div className="regimens-index-intro">
                    Welcome to the Regimens Page!
                    <Link className="create-regimen-link" to={'/regimens/create'}>Create a new Regimen!</Link>
                </div>
                <div>
                    {this.props.regimens.map(regimen => 
                    <RegimenIndexItem regimen={regimen}/>)}
                </div>
            </div>

        )
    }
}


const mSTP = (state) => {
    // debugger
    return {
        regimens: Object.values(state.entities.regimens),
        // users: Object.values(state.entities.users)
    }
}

const mDTP = dispatch => {
    // debugger
    return {
        fetchRegimens: () => dispatch(fetchRegimens()),
        // fetchUserRegimen: (userId) => dispatch(fetchUserRegimen(userId))
    }
}

export default connect(mSTP, mDTP)(Regimens)