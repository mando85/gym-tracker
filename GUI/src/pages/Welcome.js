import React, { Component } from 'react';
import PageHeader from '../components/PageHeader';
import Navigation from '../components/Navigation';

class Welcome extends Component {
  render() {
    return (
      <div className="App">
        <PageHeader />
        <Navigation />
        <h1>Welcome</h1>
        This is Gym Tracker<br /><br />
        Add your own exercises, construct your own gym sessions and keep track of you workouts.<br />
      </div>
    );
  }
}

export default Welcome;