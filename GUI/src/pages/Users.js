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
        <h1>USERS</h1>
        <div id="addUser">
            <Link to="/users/add">Add User</Link>
        </div>
        <br />
        Filter users by first name or surname:
        <br /><br /><UserList users={this.state.users} /><br />

      </div>
    );
  }
}

export default Users;