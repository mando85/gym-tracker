import React, { Component } from 'react';

// import the User component
import User from "./User.js"

class UserList extends Component {
  constructor() {
    super();
    this.state = {
        searchQuery: ''
    };
}
  // .substr limits the amount of characters that can be entered into the search input box
  updateSearch(event){
      this.setState({searchQuery: event.target.value.substr(0,20)});
  }

  render(){
    // created a variable "filteredUsers" ... if the state (searchQuery) is blank or empty then (?) set filteredUsers variable
    //  to this.props.users else (:) return a list of filtered users 
    let filteredUsers = !this.state.searchQuery ? this.props.users : this.props.users.filter((user)=> {
      // creating a regular expression pattern using the value entered as the search query, with the 'i' representing case insensitivity
      const regex = new RegExp(this.state.searchQuery, 'i');
     // so if the value entered in the search query matches either first name or last name of a user in database
     // filteredUsers updates and returns only those that match the regex pattern
      return user.firstName.match(regex) || user.lastName.match(regex);
    });

  
      console.log({filteredUsers});


    return (
      <div>
        <form>
          <input type="text"
          value={this.state.searchQuery}
          // placeholder="Search for a user..."
          // ref={input => this.search = input}
          onChange={this.updateSearch.bind(this)}
                    />

          {/* <p>{this.state.query}</p> */}
        </form>
        {filteredUsers.map(u => <User key={u.id} id={u.id} firstName={u.firstName} lastName={u.lastName} />)}
      </div>
    );
  }
}

export default UserList;