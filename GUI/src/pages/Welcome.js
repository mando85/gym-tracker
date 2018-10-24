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
        Texty stuff goes here. Login and Register?
      </div>
    );
  }
}

export default Welcome;