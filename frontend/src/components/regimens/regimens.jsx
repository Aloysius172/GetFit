import React from "react";
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchUserRegimen, fetchRegimens } from "../../util/regimen_util";


class Regimens extends React.Component {

    render () {

        return (
            <div className="regimens-index-container">
                <div className="regimens-index-intro">
                    Welcome to the Regimens Page!
                    <Link className="create-regimen-link" to={'/regimens/create'}>Create a new Regimen!</Link>
                </div>
                <div>

                </div>
            </div>

        )

    }
}

export default Regimens

// const mSTP = (state) => {
//     // debugger
//     return {
//         regimens: Object.values(state.entities.regimens)
//     }
// }

// const mDTP = dispatch => {
//     // debugger
//     return {
//         fetchRegimens: () => dispatch(fetchRegimens()),
//         fetchUserRegimen: (userId) => dispatch(fetchUserRegimen(userId))
//     }
// }

// export default connect(mSTP, mDTP)()