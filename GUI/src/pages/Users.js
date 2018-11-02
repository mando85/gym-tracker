import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import Navigation from '../components/Navigation';
import UserList from '../components/users/UserList';
import axios from "axios";

class Users extends Component {
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
            lastName: u.lastName
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
        <Link to="/users/add">Add User</Link>
        <h1>Users</h1>
        <UserList users={this.state.users} />
      </div>
    );
  }
}

export default Users;