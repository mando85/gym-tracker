import React from 'react';
import axios from 'axios';
import PageHeader from '../PageHeader';
import Navigation from '../Navigation';

export default class UserForm extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        username: '',
        email: ''
    }

    change = (element) => {
        // this.props.onChange({ [element.target.name]: element.target.value });
        this.setState({
            [element.target.name]: element.target.value
        });
        console.log('change', this.state);
    };

    onSubmit = (element) => {
        element.preventDefault();
        // this.props.onSubmit(this.state);

        this.saveUser();

        // this.setState({
        //     firstName: '',
        //     lastName: '',
        //     username: '',
        //     email: ''
        // });

        // this.props.onChange({
        //     firstName: '',
        //     lastName: '',
        //     username: '',
        //     email: ''
        // });

        console.log(this.state);
    }

    // adds data to the database
    saveUser() {
        axios.post('http://localhost:3002/api/users', this.state)
            .then((response) => {
                console.log(response);

                this.setState({
                    firstName: '',
                    lastName: '',
                    username: '',
                    email: ''
                });

                this.props.history.push('/users/' + response.data.id);

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
                    <p>Add a User</p>
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
                    <br />
                    <button onClick={element => this.onSubmit(element)}>Add User</button>

                </form>
            </div>
        )
    }
}