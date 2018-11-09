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
        id: null,
        exerciseName: '',
        exerciseCategory: null,
        exerciseDescription: '',

        selectedExerciseCategory: null  // Used for storing the Select Component
    };
    handleSelectChange = (selectedExerciseCategory) => {
        this.setState({ selectedExerciseCategory });
        this.setState({'exerciseCategory' : selectedExerciseCategory.value})
        console.log('Option selected:', selectedExerciseCategory);
    };

    componentDidMount(){
        this.getExercise(this.props.match.params.id);
    }
    
    getExercise(id) {
        axios
        .get(`http://localhost:3002/api/exercises/${id}`)
        .then(response => {
            console.log('API RESPONSE', response);
    
            this.setState({
                id: response.data._id,
                exerciseName: response.data.exerciseName,
                exerciseCategory: response.data.exerciseCategory,
                exerciseDescription: response.data.exerciseDescription,

                selectedExerciseCategory: { value: response.data.exerciseCategory, label: response.data.exerciseCategory }
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
        this.updateExercise();
        console.log(this.state);
    }

    // adds data to the database
    updateExercise() {
        axios.put(`http://localhost:3002/api/exercises/${this.state.id}`, this.state)
            .then((response) => {
                console.log(response);

                this.setState({
                    exerciseName: '',
                    exerciseCategory: '',
                    exerciseDescription: ''
                });

                this.props.history.push('/exercises/' + this.state.id);

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
                    <p>Edit this Exercise</p>
                    <input
                        name="exerciseName"
                        placeholder="Exercise Name"
                        value={this.state.exerciseName}
                        onChange={element => this.change(element)}
                    />
                    <br />
                    <Select
                        className="exerciseCategory"
                        value={this.state.selectedExerciseCategory}
                        onChange={element => this.handleSelectChange(element)}
                        options={options}
                    />
                    <textarea
                        name="exerciseDescription"
                        placeholder="Exercise Description"
                        value={this.state.exerciseDescription}
                        onChange={element => this.change(element)}
                    />
                    <br />
                    <button onClick={element => this.onSubmit(element)}>Update Exercise</button>

                </form>
            </div>
        )
    }
}