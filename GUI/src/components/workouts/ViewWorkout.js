import React from 'react';
import axios from 'axios';

class ViewWorkout extends React.Component {
    state = {
        id: null,
        workoutDate: '',
        exerciseCategory: '',
        workoutExerciseName: '',
        noOfReps: '',
        noOfSets: '',
        noOfMinutes: ''
    };


    componentDidMount(){
        this.getWorkout(this.props.match.params.id);
      }
    
      getWorkout(id) {
        axios
          .get(`http://localhost:3002/api/workouts/${id}`)
          .then(response => {
            console.log('API RESPONSE', response);
    
            this.setState({
                id: response.data._id,
                workoutDate: response.data.workoutDate,
                exerciseCategory: response.data.exerciseCategory,
                workoutExerciseName: response.data.workoutExerciseName,
                noOfReps: response.data.noOfReps,
                noOfSets: response.data.noOfSets,
                noOfMinutes: response.data.noOfMinutes
            });

          })
          .catch(error => console.log(error));
      }

      deleteWorkout(id) {
        axios
          .delete(`http://localhost:3002/api/workouts/${id}`)
          .then(response => {
            console.log('API RESPONSE', response);
    
            // return <Redirect to="/workouts" />;
            this.props.history.push('/workouts/');
  
          })
          .catch(error => console.log(error));
      }
  
      deleteClicked(element){
        console.log("Deletey");
        this.deleteWorkout(this.state.id);
      }

    render() {
        console.log(this.props);
      return (
        <div className="viewWorkout">
            <h2>View Workout</h2>
            <h2>{this.state.workoutDate}</h2>
            <h3>{this.state.exerciseCategory}</h3>
            <h3>{this.state.workoutExerciseName}</h3>
            <h3>{this.state.noOfReps}</h3>
            <h3>{this.state.noOfSets}</h3>
            <h3>{this.state.noOfMinutes}</h3>
            
            <button onClick={element => this.editClicked(element)}>Edit Workout</button>
            <button onClick={element => this.deleteClicked(element)}>Delete Workout</button>

        </div>
      );
    }
  }

  export default ViewWorkout;