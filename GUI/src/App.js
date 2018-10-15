import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ExerciseList from './components/ExerciseList';
import axios from "axios";

class App extends Component {

  state = {
    exercises: []
  };

  componentDidMount(){
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
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="App">

      <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to our Gym Tracker</h1>
        </header>

      <ExerciseList exercises={this.state.exercises} />
      </div>
    );
  }
}

export default App;