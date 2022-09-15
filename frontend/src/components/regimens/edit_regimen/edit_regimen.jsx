import React from 'react';
import { withRouter } from 'react-router-dom';
// import ExerciseItemContainer from './exercise_item/exercise_item_container'
import ExerciseItemContainer from '../create_regimen/exercise_item/exercise_item_container';
import { GiWeightLiftingUp } from '@react-icons/all-files/gi/GiWeightLiftingUp'
import { AiOutlineTeam } from '@react-icons/all-files/ai/AiOutlineTeam'
import { BsPerson } from '@react-icons/all-files/bs/BsPerson'


class EditRegimenForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user_id: this.props.regimen.user_id,
            // creator: this.props.regimen.creator,
            title: this.props.regimen.title,
            description: this.props.regimen.description,
            exercise: this.props.regimen.exercise_ids,
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
        
        this.setState({ errors: this.props.errors });
        // this.props.fetchRegimen(this.props.match.params.regimenId);
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
        


        const newExercises = Object.assign([], this.state.exercise)
        newExercises.push(exer)
        this.setState({exercise: newExercises})

            // const newExercises = Object.assign([], this.state.exercise);
            // newExercises.push(exercise);
            // this.setState({[this.state.exercise]: newExercises})
    }

    removeExercise = (idx) => {

        const newExercises = Object.assign([], this.state.exercise)
        newExercises.splice(idx, 1)
        this.setState({exercise: newExercises})

    }

    // Handle form submission
    handleSubmit(e) {
        e.preventDefault();

        let regimen = {
            user_id: this.state.user_id,
            creator: this.state.creator,
            title: this.state.title,
            description: this.state.description,
            exercise_ids: this.state.exercise
        };

        this.props.updateRegimen(regimen);
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
        function name(name) {
            let newName;
            if(name.length > 7) {
                newName = name.slice(0, 7) + "..."
            } else {
                newName = name;
            }
            return newName
        }

        function oldDiff(oldDiff) {
            let diff;
            switch(oldDiff) {
                case "Beginner": 
                    diff = <div className='almost-done'> <GiWeightLiftingUp /></div>
                break;
                case "Intermediate":
                    diff = <div className='almost-done'><GiWeightLiftingUp /> <GiWeightLiftingUp /></div>
                break;
                case "Advanced":
                    diff = <div className='almost-done'><GiWeightLiftingUp /><GiWeightLiftingUp /><GiWeightLiftingUp /></div>;
                    break;
                default:
                    diff = <div className='almost-done'> <GiWeightLiftingUp /> <GiWeightLiftingUp /></div>;
            }
            return diff;
        }

        function oldAsst(oldAsst) {
            let asst;
            switch (oldAsst) {
                case true:
                    asst = <div className='almost-done-2'> <AiOutlineTeam/></div>
                    break;
                case false:
                    asst = <div className='almost-done-2'> <BsPerson /> </div>
                    break;
                default:
                    <div className='almost-done-2'> <BsPerson /> </div>
            }
            return asst;
        }
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
        <div id="regimen-submit-master-container">
            <div className="regimen-submit-container">
                <form className='regimen-form' onSubmit={this.handleSubmit}>
                    <div className='regimen-form-interior'>
                           <p className='make-a-regiment'>
                                Make a Regimen!
                           </p>
                        <div id="regimen-text-boxes">
                                
                            <div id="regimen-submit-text-container">
    
                                <input type="text"
                                    value={this.state.title}
                                    onChange={this.update('title')}
                                    placeholder="Title"
                                    className='submission-field'
                                />
                            </div>
                                <textarea type="textarea"
                                    id="description-field"
                                    value={this.state.description}
                                    onChange={this.update('description')}
                                    placeholder="Description"
                                    className='description-field'
                                />
                        </div>
                        <div className='submit-regimen-errors'>
                            {this.renderErrors()}
                        </div>
                        <div id="submit-footer-container">
                            <div id="footer-sub-container">
                                <div className="selected-exercises-container">
                                    <div className='spacer'></div>
                                    <h3>Selected Exercises</h3>
                                    <div id="selected-box">
                                    <ul className='selected-exercises'>
                                        {this.state.exercise.map((exerciseName, idx) => 
                                            <li className="selected-exercises-individuals">
                                                <div>
                                                    {name(exerciseName.name)}
                                                <br />
                                                    <div className='exercise-type-submit-list'>
                                                        
                                                        {oldDiff(exerciseName.difficulty)}
                                                        {oldAsst(exerciseName.assisted)}
                                                    </div>
                                                </div>
                                                    <button className="button" id="remove-from-list" onClick={() => this.removeExercise(idx)}>Remove Exercise</button>
                                                    
                                            </li>
                                        )}
                                    </ul>
                                    </div>
                                </div>
                                <div className='submit-regimen-button'>
                                    <input className='button' id="submit-button" type="submit" value="Create Regimen!" />
                                </div>
                            </div>
                        </div>
                        {/* <button onClick={() => this.addExercise(this.props.exercises[0].name)}>add exercise</button> */}
                    </div>
                </form>
                <div className='spacer'></div>
                <div className='exercises-on-regimen-form'>
                    {this.props.exercises.map(exrc =>
                        <ExerciseItemContainer
                            exrc={exrc}
                            key={exrc.id}
                            addExercise={this.addExercise}
                            // users={this.props.users} 
                        />
                    )}
                </div>
            </div>
        </div>
        );
        }
    }
// }

export default withRouter(EditRegimenForm);