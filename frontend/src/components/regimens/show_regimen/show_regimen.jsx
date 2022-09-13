import React from "react";


class RegimenShow extends React.Component {

    componentDidMount() {
        this.props.fetchRegimen(this.props.match.params.regimenId);
    }

    render() {

        if(this.props.regimen)

        return (
            <div>
                <h1>
                    {this.props.regimen.title}
                </h1>
                <h2>
                    Created by: Creator Name
                </h2>
                <h3>
                    {this.props.regimen.description}
                </h3>
                <ul>
                    {this.props.regimen.exercise_ids.map((exerciseObject) =>
                    <li>
                        <div>
                            {exerciseObject.name}
                        </div>
                        <div>
                            {exerciseObject.typeOfExercise}
                        </div>
                    </li>
                    )}
                </ul>


            </div>
        )
    }
}

export default RegimenShow;