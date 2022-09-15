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
        // this.props.getUsers()
        // fetchUserRegimen()
        
    }

    render () {
        if(this.props.regimens) {
        let regimens = this.props.regimens.map(regimen => regimen)
            let colOne;
            let colTwo;
            let colThree;
            if (regimens.length > 0) {

                let col1 = [];
                let col2 = [];
                let col3 = [];
                for (let i = 0; i < regimens.length; i++) {
                    let temp = i % 4;
                    if (temp === 0) {
                        col1.push(regimens[i]);
                    } else if (temp === 1) {
                        col2.push(regimens[i]);
                    } else if (temp === 2) {
                        col3.push(regimens[i]);
                    }
                }
                colOne = col1.map((regimen, i) => {
                        return(
                            <RegimenIndexItemContainer
                                key={i} regimen={regimen} 
                            />
                        )
                });
                colTwo = col2.map((regimen, i) => {
                    return (
                        <RegimenIndexItemContainer
                            key={i} regimen={regimen}
                        />
                    )
                });
                colThree = col3.map((regimen, i) => {
                    return (
                        <RegimenIndexItemContainer
                            key={i} regimen={regimen}
                        />
                    )
                });
                 
            }


        return (
            <div className="regimens-index-container">
                <div className="regimens-index-intro">
                    Welcome to the Regimens Page.
                    <br />
                    Below you can check out all the Regimen's created by our users!
                    <Link className="create-regimen-link" to={'/regimens/create'}>
                        Create a new Regimen!
                    </Link>
                </div>
                <div className="create-regimen-item-div">
                    <div className="col-1">
                        <div className="col-1-spacer"/>
                        {colOne}
                    </div>
                    <div className="col-2">
                        <div className="col-2-spacer" />
                        {colTwo}
                    </div>
                    <div className="col-3">
                        <div className="col-3-spacer" />
                        {colThree}
                    </div>
                </div>
                {/* <div>
                    {this.props.users.map(user => user.email)}
                </div> */}
            </div>

        )
    }
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
        // fetchUserRegimen: (userId) => dispatch(fetchUserRegimen(userId))
    }
}

export default connect(mSTP, mDTP)(Regimens)