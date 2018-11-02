import React from 'react';
import axios from 'axios';
import PageHeader from '../PageHeader';
import Navigation from '../Navigation';

export default class ExerciseForm extends React.Component {

    state = {
        id: null,
        exerciseName: '',
        exerciseCategory: '',
        exerciseDescription: ''
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
                exerciseDescription: response.data.exerciseDescription
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
                    <p>Edit an Exercise</p>
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
                    <button onClick={element => this.onSubmit(element)}>Update Exercise</button>

                </form>
            </div>
        )
    }
}