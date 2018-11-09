import React from 'react';
import axios from 'axios';
import PageHeader from '../PageHeader';
import Navigation from '../Navigation';

export default class WorkoutForm extends React.Component {

    state = {
        id: null,
        workoutName: '',
        workoutDate: '',
        exerciseCategory: '',
        workoutExerciseName: '',
        noOfReps: '',
        noOfSets: '',
        noOfMinutes: ''
    };

    componentDidMount(){
        this.getWorkout(this.props.match.params.id);
    }
    
    getWorkout(id) {
        axios
        .get(`http://localhost:3002/api/workouts/${id}`)
        .then(response => {
            console.log('API RESPONSE', response);
    
            this.setState({
                id: response.data._id,
                workoutName: response.data.workoutName,
                workoutDate: response.data.workoutDate,
                exerciseCategory: response.data.exerciseCategory,
                workoutExerciseName: response.data.workoutExerciseName,
                noOfReps: response.data.noOfReps,
                noOfSets: response.data.noOfSets,
                noOfMinutes: response.data.noOfMinutes
            });

        })
        .catch(error => console.log(error));
    }


    change = (element) => {
        this.setState({
            [element.target.name]: element.target.value
        });
        console.log('change', this.state);
    };

    onSubmit = (element) => {
        element.preventDefault();

        this.updateWorkout();


        console.log(this.state);
    }

    // adds data to the database
    updateWorkout() {
        axios.put(`http://localhost:3002/api/workouts/${this.state.id}`, this.state)
            .then((response) => {
                console.log(response);

                this.setState({
                    workoutName: '',
                    workoutDate: '',
                    exerciseCategory: '',
                    workoutExerciseName: '',
                    noOfReps: '',
                    noOfSets: '',
                    noOfMinutes: ''
                });

                this.props.history.push('/workouts/' + this.state.id);

            })
            .catch((error) => {
                console.error(error);
            });
    }



    render() {
        return (
            <div className="App">
                <PageHeader />
                <Navigation />
                <form>
                    <p>Edit this Workout</p>
                    Workout Name: &nbsp;
                    <input
                        name="workoutName"
                        placeholder="Workout Name"
                        value={this.state.workoutName}
                        onChange={element => this.change(element)}
                    />
                    <br />
                    Workout Date: &nbsp;
                    <input
                        name="workoutDate"
                        placeholder="Workout Date"
                        value={this.state.exerciseName}
                        onChange={element => this.change(element)}
                    />
                    <br />
                    Exercise Category: &nbsp;
                    <select
                        name="exerciseCategory"
                        placeholder="Exercise Category"
                        value={this.state.exerciseCategory}
                        onChange={element => this.change(element)}
                    />
                    <br />
                    Exercise Name: &nbsp;
                    <input
                        name="workoutExerciseName"
                        placeholder="Exercise Name"
                        value={this.state.workoutExerciseName}
                        onChange={element => this.change(element)}
                    />
                    <br />
                    Reps: &nbsp;
                    <input
                        name="noOfReps"
                        placeholder="Number of Reps"
                        value={this.state.noOfReps}
                        onChange={element => this.change(element)}
                    />
                    <br />
                    Sets: &nbsp;
                    <input
                        name="noOfSets"
                        placeholder="Number of Sets"
                        value={this.state.noOfSets}
                        onChange={element => this.change(element)}
                    />
                    <br />
                    Minutes: &nbsp;
                    <input
                        name="noOfMinutes"
                        placeholder="Number of Minutes"
                        value={this.state.noOfMinutes}
                        onChange={element => this.change(element)}
                    />
                    <button onClick={element => this.onSubmit(element)}>Update Workout</button>

                </form>
            </div>
        )
    }
}


