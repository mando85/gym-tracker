import React from 'react';
import axios from 'axios';

class ViewExercise extends React.Component {
    state = {
        id: null,
        exerciseName: '',
        exerciseCategory: '',
        exerciseDescription: ''
    };

    componentDidMount(){
        this.getExercise(this.props.match.params.id);
    }
    
    getExercise(id) {
      axios
        .get(`http://localhost:3002/api/exercises/${id}`)
        .then(response => {
          console.log('API RESPONSE', response);
  
          this.setState({
              id: response.data._id,
              exerciseName: response.data.exerciseName,
              exerciseCategory: response.data.exerciseCategory,
              exerciseDescription: response.data.exerciseDescription
          });

        })
        .catch(error => console.log(error));
    }

        
    deleteExercise(id) {
      axios
        .delete(`http://localhost:3002/api/exercises/${id}`)
        .then(response => {
          console.log('API RESPONSE', response);

          this.props.history.push('/exercises/');

        })
        .catch(error => console.log(error));
    }

    deleteClicked(element){
      console.log("Deletey");
      this.deleteExercise(this.state.id);
    }


    render() {
        console.log(this.props);
      return (
        <div className="viewExercise">
            <h2>View Exercise</h2>
            <h2>{this.state.exerciseName}</h2>
            <h3>{this.state.exerciseCategory}</h3>
            <h3>{this.state.exerciseDescription}</h3>
            
            <button onClick={() => { this.props.history.push(`/exercises/${this.state.id}/edit`) }}>Edit Exercise</button>
            <button onClick={element => this.deleteClicked(element)}>Delete Exercise</button>

        </div>
      );
    }
  }

  export default ViewExercise;