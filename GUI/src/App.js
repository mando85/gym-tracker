import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

// Pages
import WelcomePage from './pages/Welcome';
import AddExerciseForm from './components/exercises/AddExerciseForm';
import EditExerciseForm from './components/exercises/EditExerciseForm';
import ViewExercise from './components/exercises/ViewExercise';
import ExercisesPage from './pages/Exercises';
import AddUserForm from './components/users/AddUserForm';
import ViewUser from './components/users/ViewUser';
import UsersPage from './pages/Users';
import AddWorkoutForm from './components/workouts/AddWorkoutForm';
import ViewWorkout from './components/workouts/ViewWorkout';
import WorkoutsPage from './pages/Workouts';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <Switch>
            <Route path="/exercises/add" component={AddExerciseForm} />
            <Route path="/exercises/:id/edit" component={EditExerciseForm} />
            <Route path="/exercises/:id" component={ViewExercise} />
            <Route path="/exercises" component={ExercisesPage} />
            <Route path="/workouts/add" component={AddWorkoutForm} />
            <Route path="/workouts/:id" component={ViewWorkout} />
            <Route path="/workouts" component={WorkoutsPage} />
            <Route path="/users/add" component={AddUserForm} />
            <Route path="/users/:id" component={ViewUser} />
            <Route path="/users" component={UsersPage} />
            <Route path="*" component={WelcomePage} />
          </Switch>
        </BrowserRouter>
    );
  }
}

export default App;