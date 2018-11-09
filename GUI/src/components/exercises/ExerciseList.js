import React, { Component } from 'react';

// import the Exercise component
import Exercise from "./Exercise.js"


class ExerciseList extends Component {
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
    let filteredExercises = !this.state.searchQuery ? this.props.exercises : this.props.exercises.filter((exercise)=> {
      // creating a regular expression pattern using the value entered as the search query, with the 'i' representing case insensitivity
      const regex = new RegExp(this.state.searchQuery, 'i');
     // so if the value entered in the search query matches either first name or last name of a user in database
     // filteredUsers updates and returns only those that match the regex pattern
      return exercise.exerciseName.match(regex) || exercise.exerciseCategory.match(regex);
    });

  
      console.log({filteredExercises});


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
        {filteredExercises.map(e => <Exercise key={e.id} id={e.id} exerciseName={e.exerciseName} exerciseCategory={e.exerciseCategory} />)}
      </div>
    );
  }
}

export default ExerciseList;

