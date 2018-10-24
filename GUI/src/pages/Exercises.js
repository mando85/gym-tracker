import React, { Component } from 'react';
import PageHeader from '../components/PageHeader';
import Navigation from '../components/Navigation';
import ExerciseList from '../components/ExerciseList';
import axios from "axios";

class Exercises extends Component {
  state = {
    exercises: []
  };

  componentDidMount(){
    this.getExercises()
  }

  getExercises() {
    axios
      .get("http://localhost:3002/api/exercises")
      .then(response => {

        const exercises = response.data.map(e => {
          return {
            id: e._id,
            name: e.exerciseName,
            description: e.exerciseDescription
          };
        });
    console.log({exercises});
        const newState = Object.assign({}, this.state, {
          exercises: exercises
        });

        this.setState(newState);
        // this.state.exercises = exercises;
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="App">
        <PageHeader />
        <Navigation />
        <ExerciseList exercises={this.state.exercises} />
      </div>
    );
  }
}

export default Exercises;