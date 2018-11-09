import React from 'react';
import axios from 'axios';
import PageHeader from '../PageHeader';
import Navigation from '../Navigation';

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
                <PageHeader />
                <Navigation />
          <div id="userInformation">
            <br />
            <h2 id="fullName">{this.state.firstName} {this.state.lastName}</h2>
            <h3 id="username">{this.state.username}</h3>
            <h3 id="email">{this.state.email}</h3>
          </div>

            <button onClick={() => { this.props.history.push(`/users/${this.state.id}/edit`) }}>Edit User</button>&nbsp;
            <button onClick={element => this.deleteClicked(element)}>Delete User</button>
            

        </div>
      );
    }
  }

  export default ViewUser;