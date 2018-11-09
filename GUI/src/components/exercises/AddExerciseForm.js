import React from 'react';
import axios from 'axios';
import Select from 'react-select';
import PageHeader from '../PageHeader';
import Navigation from '../Navigation';
import "./Exercise.css";

const options = [
    { value: 'Arms', label: 'Arms' },
    { value: 'Chest', label: 'Chest' },
    { value: 'Shoulders', label: 'Shoulders' },
    { value: 'Legs', label: 'Legs' },
    { value: 'Back', label: 'Back' },
    { value: 'Cardio', label: 'Cardio' }
  ];

export default class ExerciseForm extends React.Component {
    state = {
        exerciseName: '',
        exerciseCategory: null,
        exerciseDescription: '',

        selectedExerciseCategory: null  // Used for storing the Select Component
    }
    handleSelectChange = (selectedExerciseCategory) => {
        this.setState({ selectedExerciseCategory });
        this.setState({'exerciseCategory' : selectedExerciseCategory.value})
        console.log('Option selected:', selectedExerciseCategory);
    };

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
        const exercise = {
            exerciseName: this.state.exerciseName,
            exerciseCategory: this.state.exerciseCategory,
            exerciseDescription: this.state.exerciseDescription
        }

        axios.post('http://localhost:3002/api/exercises', exercise)
            .then((response) => {
                console.log(response);

                this.setState({
                    exerciseName: '',
                    exerciseCategory: '',
                    exerciseDescription: '',
                    selectedExerciseCategory: null
                });

                this.props.history.push('/exercises/' + response.data.id);

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
                    <p>Add an Exercise</p>
                    <input
                        name="exerciseName"
                        placeholder="Exercise Name"
                        value={this.state.exerciseName}
                        onChange={element => this.change(element)}
                    />
                    <br />

                    <Select className="exerciseCategory"
                        value={this.state.selectedExerciseCategory}
                        onChange={this.handleSelectChange}
                        options={options}
                    />

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