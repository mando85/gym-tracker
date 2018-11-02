import React from 'react';
import axios from 'axios';

class ViewUser extends React.Component {
    state = {
        id: null,
        firstName: '',
        lastName: '',
        username: '',
        email: ''
    };

    componentDidMount(){
        this.getUser(this.props.match.params.id);
      }
    
      getUser(id) {
        axios
          .get(`http://localhost:3002/api/users/${id}`)
          .then(response => {
            console.log('API RESPONSE', response);
    
            this.setState({
                id: response.data._id,
                firstName: response.data.firstName,
                lastName: response.data.lastName,
                username: response.data.username,
                email: response.data.email
            });

          })
          .catch(error => console.log(error));
      }

      deleteUser(id) {
        axios
          .delete(`http://localhost:3002/api/users/${id}`)
          .then(response => {
            console.log('API RESPONSE', response);
    
            // return <Redirect to="/exercises" />;
            this.props.history.push('/users/');
  
          })
          .catch(error => console.log(error));
      }
  
      deleteClicked(element){
        console.log("Deletey");
        this.deleteUser(this.state.id);
      }

    render() {
        console.log(this.props);
      return (
        <div className="viewUser">
            <h2>View User</h2>
            <h2>{this.state.firstName}</h2>
            <h3>{this.state.lastName}</h3>
            <h3>{this.state.username}</h3>
            <h3>{this.state.email}</h3>

            <button onClick={element => this.editClicked(element)}>Edit User</button>
            <button onClick={element => this.deleteClicked(element)}>Delete User</button>
            

        </div>
      );
    }
  }

  export default ViewUser;