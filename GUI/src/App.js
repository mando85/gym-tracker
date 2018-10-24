import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
// Pages
import WelcomePage from './pages/Welcome';
import ExercisesPage from './pages/Exercises';
import UsersPage from './pages/Users';
import WorkoutsPage from './pages/Workouts';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <Switch>
            <Route path="/exercises" component={ExercisesPage} />
            <Route path="/workouts" component={WorkoutsPage} />
            <Route path="/users" component={UsersPage} />
            <Route path="*" component={WelcomePage} />
          </Switch>
        </BrowserRouter>
    );
  }
}

export default App;