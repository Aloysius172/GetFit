import React from 'react';
import { withRouter } from 'react-router-dom';
import ExerciseItemContainer from './exercise_item/exercise_item_container'


class CreateRegimenForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user_id: '',
            title: '',
            description: '',
            exercise: [],
            errors: {}
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    }


    // Once the user has been authenticated, redirect to the Tweets page
    componentDidMount() {
        if (this.props.currentUser === true) {
            this.props.history.push('/regimen');
        }

        // Set or clear errors
        this.setState({ errors: this.props.errors })
        this.props.fetchExercises();
        // this.props.fetchAllUsers(); we might need this later to identify current user info?
    }

    // Handle field updates (called in the render method)
    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    // Handle form submission
    handleSubmit(e) {
        e.preventDefault();

        let regimen = {
            user_id: this.state.user_id,
            title: this.state.title,
            description: this.state.description,
            exercise: this.state.exercise
        };

        this.props.createRegimen(regimen);
    }



    // Render the session errors if there are any
    renderErrors() {
        return (
            <ul>
                {Object.keys(this.state.errors).map((error, i) => (
                    <li className='errors' key={`error-${i}`}>
                        {this.state.errors[error]}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        if(this.props.exercises) {
        let exercises = this.props.exercises.map(exercise =>
            <ExerciseItemContainer
                exercise={exercise}
                key={exercise.id}
                // users={this.props.users}
            />)

        return (
            <div className="regimen-submit-container">
                <form className='regimen-form' onSubmit={this.handleSubmit}>
                    <div className='regimen-form-interior'>
                        <input type="text"
                            value={this.state.title}
                            onChange={this.update('title')}
                            placeholder="Title"
                            className='submission-field'
                        />
                        <input type="text"
                            value={this.state.description}
                            onChange={this.update('description')}
                            placeholder="Description"
                            className='submission-field'
                        />
                        <div className='submit-regimen-errors'>
                            {this.renderErrors()}
                        </div>
                        <div className="selected-exercises-container">
                            <ul className='selected-exercises'>
                                Users Selected Exercises
                            </ul>
                        </div>
                        <div className='submit-regimen-button'>
                            <input className='regimen-submit' type="submit" value="Create Regimen!" />
                        </div>
                    </div>
                </form>
                <div className='exercises-on-regimen-form'>
                    {exercises}
                </div>
            </div>
        );
        }
    }
}

export default withRouter(CreateRegimenForm);