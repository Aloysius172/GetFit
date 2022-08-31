import React from "react";
import { Link } from 'react-router-dom'


class Regimens extends React.Component {

    render () {

        return (
            <div>
                Welcome to the Regimens page

                <Link className="create-regimen-link" to={'/regimens/create'}>Create a new Regimen!</Link>
            </div>
        )

    }
}

export default Regimens