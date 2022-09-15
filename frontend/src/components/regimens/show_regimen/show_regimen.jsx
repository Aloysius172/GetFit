import React from "react";
import './show_regimen.css'
import { Link } from 'react-router-dom'


class RegimenShow extends React.Component {

    componentDidMount() {
        this.props.fetchRegimen(this.props.match.params.regimenId);
    }

    render() {
        let exercise_description;


        if(this.props.regimen) {
            this.props.regimen.exercise_ids.map(exercise => 
                exercise.description = exercise.description.slice(0, 300) + "...");
        let creator = "Steve"

        return (
            <div className="regi-shw-pg">
                <div className="regi-shw-pg-container">
                    <div className="reg-shw-title-auth">
                        <div>
                            <h1 className="reg-shw-title">
                                {this.props.regimen.title}
                            </h1>
                            <h5 className="reg-shw-title-underline">
                                regimen
                            </h5>
                        </div>
                        <div>
                            <h1 className="reg-shw-creator">
                                {creator}
                            </h1>
                            <h5 className="reg-shw-creator-underline">
                                creator
                            </h5>
                        </div>
                    </div>
                </div>
                <div className="regi-exercises-desc-container">
                    <div>
                    <div>
                        <div>
                            <div className="regi-show">
                                <div>
                                    <div className="regi-desc">
                                        Description:
                                    </div>
                                    <div className="reg-shw-desc-body">
                                        {this.props.regimen.description}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ul className="regi-shw-exrc">
                        <div className="regi-shw-exrc-center">
                        <div className="regi-shw-exrc-hard">
                            Included Exercises
                        </div>
                        <div className="regi-shw-exrc-grid">
                            {this.props.regimen.exercise_ids.map((exerciseObject) =>
                            <li>
                                <div className="regi-shw-exrc-title">
                                        <Link className='exercise-index-link-name-form' to={`/exercises/${exerciseObject._id}`}>
                                            {exerciseObject.name}
                                        </Link>
                                </div>
                                <div className="regi-shw-exrc-desc">
                                    {exerciseObject.description}
                                </div>
                            </li>
                            )}
                        </div>
                        </div>
                    </ul>
                    </div>
                </div>
            </div>
        )
    }
    }
}

export default RegimenShow;