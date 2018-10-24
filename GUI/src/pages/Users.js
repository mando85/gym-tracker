import React, { Component } from 'react';
import PageHeader from '../components/PageHeader';
import Navigation from '../components/Navigation';
import UserList from '../components/UserList';
import axios from "axios";

class Exercises extends Component {
  state = {
    users: []
  };

  componentDidMount(){
    this.getUsers()
  }

  getUsers() {
    axios
      .get("http://localhost:3002/api/users")
      .then(response => {

        const users = response.data.map(u => {
          return {
            id: u._id,
            firstName: u.firstName,
            surname: u.surname
          };
        });
    console.log({users});
        const newState = Object.assign({}, this.state, {
          users: users
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
        <h1>Users</h1>
        <UserList users={this.state.users} />
      </div>
    );
  }
}

export default Exercises;