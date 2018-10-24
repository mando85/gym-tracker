import React, { Component } from 'react';
import PageHeader from '../components/PageHeader';
import Navigation from '../components/Navigation';
import WorkoutList from '../components/WorkoutList';
import axios from "axios";

class Exercises extends Component {
  state = {
    workouts: []
  };

  componentDidMount(){
    this.getWorkouts()
  }

  getWorkouts() {
    axios
      .get("http://localhost:3002/api/workouts")
      .then(response => {

        const workouts = response.data.map(w => {
          return {
            id: w._id,
            workoutDate: w.workoutDate
            // workoutExercises: w.workoutExercises
          };
        });
      console.log({workouts});
        const newState = Object.assign({}, this.state, {
          workouts: workouts
        });

        this.setState(newState);
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="App">
        <PageHeader />
        <Navigation />
        <h1>Workouts</h1>
        <WorkoutList workouts={this.state.workouts} />
      </div>
    );
  }
}

export default Exercises;