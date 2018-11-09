import React from 'react';
import axios from 'axios';
import PageHeader from '../PageHeader';
import Navigation from '../Navigation';

export default class WorkoutForm extends React.Component {
    state = {
        workoutName: '',
        workoutDate: '',
        exerciseCategory: '',
        workoutExerciseName: '',
        noOfReps: '',
        noOfSets: '',
        noOfMinutes: ''
    }

    change = (element) => {
        // this.props.onChange({ [element.target.name]: element.target.value });
        this.setState({
            [element.target.name]: element.target.value
        });
        console.log('change', this.state);
    };

    onSubmit = (element) => {
        element.preventDefault();
        // this.props.onSubmit(this.state);

        this.saveWorkout();

        console.log(this.state);
    }

    // adds data to the database
    saveWorkout() {
        axios.post('http://localhost:3002/api/workouts', this.state)
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

                this.props.history.push('/workouts/' + response.data.id);

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
                    <p>Add a Workout</p>
                    <input
                    name="workoutName"
                    placeholder="Workout Name"
                    value={this.state.workoutName}
                    onChange={element => this.change(element)}
                />
                <br />
                    <input
                    name="workoutDate"
                    placeholder="Workout Date"
                    value={this.state.workoutDate}
                    onChange={element => this.change(element)}
                />
                <br />
                <select
                    name="exerciseCategory"
                    placeholder="Exercise Category"
                    value={this.state.exerciseCategory}
                    onChange={element => this.change(element)}
                />
                <br />
                <select
                    name="workoutExerciseName"
                    placeholder="Exercise Name"
                    value={this.state.workoutExerciseName}
                    onChange={element => this.change(element)}
                />
                <br />
                <input
                    name="noOfReps"
                    placeholder="Number of Reps"
                    value={this.state.noOfReps}
                    onChange={element => this.change(element)}
                />
                <br />
                <input
                    name="noOfSets"
                    placeholder="Number of Sets"
                    value={this.state.noOfSets}
                    onChange={element => this.change(element)}
                />
                <br />
                <input
                    name="noOfMinutes"
                    placeholder="Duration (in minutes)"
                    value={this.state.noOfMinutes}
                    onChange={element => this.change(element)}
                />
                <br />
                    <button onClick={element => this.onSubmit(element)}>Add Workout</button>

                </form>
            </div>
        )
    }
}