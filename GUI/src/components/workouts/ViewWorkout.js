import React from 'react';
import axios from 'axios';
import PageHeader from '../PageHeader';
import Navigation from '../Navigation';

class ViewWorkout extends React.Component {
    state = {
        id: null,
        workoutName: '',
        workoutDate: '',
        exerciseCategory: '',
        workoutExerciseName: '',
        noOfReps: '',
        noOfSets: '',
        noOfMinutes: '',
        status: ''
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
                workoutName: response.data.workoutName,
                workoutDate: response.data.workoutDate,
                exerciseCategory: response.data.exerciseCategory,
                workoutExerciseName: response.data.workoutExerciseName,
                noOfReps: response.data.noOfReps,
                noOfSets: response.data.noOfSets,
                noOfMinutes: response.data.noOfMinutes,
                status: response.data.status
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
            <PageHeader />
            <Navigation />
            <div id="workoutInformation">
            <h2>Workout: {this.state.workoutName}</h2>
            <h2>Date: {this.state.workoutDate}</h2>
            <h3>{this.state.exerciseCategory}</h3>
            <h3>{this.state.workoutExerciseName}</h3>
            <h3>Reps: {this.state.noOfReps}</h3>
            <h3>Sets: {this.state.noOfSets}</h3>
            <h3>Duration (mins): {this.state.noOfMinutes}</h3>
            <h3>Workout status: {this.state.status}</h3>
            </div>
            
            <button onClick={() => { this.props.history.push(`/workouts/${this.state.id}/edit`) }}>Edit Workout</button>&nbsp;
            <button onClick={element => this.deleteClicked(element)}>Delete Workout</button>

        </div>
      );
    }
  }

  export default ViewWorkout;