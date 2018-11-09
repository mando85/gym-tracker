import React from 'react';
import axios from 'axios';
import PageHeader from '../PageHeader';
import Navigation from '../Navigation';

export default class UserForm extends React.Component {

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
                email: response.data.email,
            });

        })
        .catch(error => console.log(error));
    }


    change = (element) => {
        this.setState({
            [element.target.name]: element.target.value
        });
        console.log('change', this.state);
    };

    onSubmit = (element) => {
        element.preventDefault();

        this.updateUser();


        console.log('on submit', this.state);
    }

    // adds data to the database
    updateUser() {
        axios.put(`http://localhost:3002/api/users/${this.state.id}`, this.state)
            .then((response) => {
                console.log('updated', response);

                this.setState({
                    firstName: '',
                    lastName: '',
                    username: '',
                    email: ''
                });

                this.props.history.push('/users/' + this.state.id);

            })
            .catch((error) => {
                console.error(error);
            });
    }


    render() {
        return (
            <div className="App">
                <PageHeader />
                <Navigation />
                <form>
                    <p>Edit this User</p>
                    <input
                        name="firstName"
                        placeholder="First Name"
                        value={this.state.firstName}
                        onChange={element => this.change(element)}
                    />
                    <br />
                    <input
                        name="lastName"
                        placeholder="Last Name"
                        value={this.state.lastName}
                        onChange={element => this.change(element)}
                    />
                    <br />
                    <input
                        name="username"
                        placeholder="Username"
                        value={this.state.username}
                        onChange={element => this.change(element)}
                    />
                    <br />
                    <input
                        name="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={element => this.change(element)}
                    />
                    <br /><br />
                    <button onClick={element => this.onSubmit(element)}>Update User</button>

                </form>
            </div>
        )
    }
}