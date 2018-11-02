import React from 'react';
import axios from 'axios';
import PageHeader from '../PageHeader';
import Navigation from '../Navigation';

export default class ExerciseForm extends React.Component {
    state = {
        exerciseName: '',
        exerciseCategory: '',
        exerciseDescription: ''
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

        this.saveExercise();

        console.log(this.state);
    }

    // adds data to the database
    saveExercise() {
        axios.post('http://localhost:3002/api/exercises', this.state)
            .then((response) => {
                console.log(response);

                this.setState({
                    exerciseName: '',
                    exerciseCategory: '',
                    exerciseDescription: ''
                });

                this.props.history.push('/exercises/' + response.data.id);

            })
            .catch((error) => {
                console.error(error);
            });
    }

    // redirectToExercise(){ }


    render() {
        return (
            <div className="App">
                <PageHeader />
                <Navigation />
                <form>
                    <p>Add an Exercise</p>
                    <input
                        name="exerciseName"
                        placeholder="Exercise Name"
                        value={this.state.exerciseName}
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
                    <textarea
                        name="exerciseDescription"
                        placeholder="Exercise Description"
                        value={this.state.exerciseDescription}
                        onChange={element => this.change(element)}
                    />
                    <br />
                    <button onClick={element => this.onSubmit(element)}>Add Exercise</button>

                </form>
            </div>
        )
    }
}