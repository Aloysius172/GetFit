import React from 'react';
import { withRouter } from 'react-router-dom';
// import ExerciseItemContainer from './exercise_item/exercise_item_container'
import ExerciseItem from './exercise_item/exercise_item';


class CreateRegimenForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user_id: props.currentUserId,
            creator: props.username,
            title: '',
            description: '',
            exercise: [],
            errors: {}
        };


        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
        this.addExercise = this.addExercise.bind(this);
        this.removeExercise = this.removeExercise.bind(this);
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

   // Add exercise to this.state.exercise

//    updateExercise(exercise)
   

    addExercise = (exer) => {
        debugger


        const newExercises = Object.assign([], this.state.exercise)
        newExercises.push(exer)
        this.setState({exercise: newExercises})

            // const newExercises = Object.assign([], this.state.exercise);
            // newExercises.push(exercise);
            // this.setState({[this.state.exercise]: newExercises})
    }

    removeExercise = (idx) => {

        const newExercises = Object.assign([], this.state.exercise)
        newExercises.splice(idx)
        this.setState({exercise: newExercises})

    }

    // Handle form submission
    handleSubmit(e) {
        e.preventDefault();

        let regimen = {
            user_id: this.state.user_id,
            title: this.state.title,
            description: this.state.description,
            exercise_ids: this.state.exercise
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
        // if(this.props.exercises) {
        // let exercises = this.props.exercises.map(exrc =>
        //     <ExerciseItem
        //         exrc={exrc}
        //         key={exrc.id}
        //         addExercise={this.addExercise}
        //         // users={this.props.users}
        //     />)
    // }
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
                        <input type="textarea"
                            value={this.state.description}
                            onChange={this.update('description')}
                            placeholder="Description"
                            className='description-field'
                        />
                        <div className='submit-regimen-errors'>
                            {this.renderErrors()}
                        </div>
                        <div className="selected-exercises-container">
                            <div className='spacer'></div>
                            <h3>Selected Exercises</h3>
                            <ul className='selected-exercises'>
                                {this.state.exercise.map((exerciseName, idx) => 
                                    <li>
                                            <div>{exerciseName.name}-{exerciseName.typeOfExercise}<button onClick={() => this.removeExercise(idx)}>Remove Exercise</button></div>
                                    </li>
                                )}
                            </ul>
                        </div>
                        <div className='submit-regimen-button'>
                            <input className='regimen-submit' type="submit" value="Create Regimen!" />
                        </div>
                        {/* <button onClick={() => this.addExercise(this.props.exercises[0].name)}>add exercise</button> */}
                    </div>
                </form>
                <div className='spacer'></div>
                <div className='exercises-on-regimen-form'>
                    {this.props.exercises.map(exrc =>
                        <ExerciseItem
                            exrc={exrc}
                            key={exrc.id}
                            addExercise={this.addExercise}
                            // users={this.props.users} 
                        />
                    )}
                </div>
            </div>
        );
        }
    }
// }

export default withRouter(CreateRegimenForm);