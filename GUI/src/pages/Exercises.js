import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import Navigation from '../components/Navigation';
import ExerciseList from '../components/exercises/ExerciseList';
import axios from 'axios';

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
            exerciseName: e.exerciseName,
            exerciseCategory: e.exerciseCategory,
            exerciseDescription: e.exerciseDescription
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
        <h1>EXERCISES</h1>
        <div id="addExercise">
          <Link to="/exercises/add">Add Exercise</Link>
        </div>
        <br />
        Filter exercises by name:
        <br /><br />
        <ExerciseList exercises={this.state.exercises} />
      </div>
    );
  }
}

export default Exercises;