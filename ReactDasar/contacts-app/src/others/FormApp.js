import React, { Component } from 'react';

export default class FormApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            gender: '',
        };

        this.onNameChangeEventHandler =
            this.onNameChangeEventHandler.bind(this);
        this.onEmailChangeEventHandler =
            this.onEmailChangeEventHandler.bind(this);
        this.onGenderChangeEventHandler =
            this.onGenderChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onNameChangeEventHandler(event) {
        this.setState(() => {
            return {
                name: event.target.value,
            };
        });
    }

    onEmailChangeEventHandler(event) {
        this.setState(() => {
            return {
                email: event.target.value,
            };
        });
    }

    onGenderChangeEventHandler(event) {
        this.setState((prevState) => {
            return {
                gender: event.target.value,
            };
        });
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        const { name, email, gender } = this.state;
        alert(`${name} ${email} ${gender}`);
    }

    render() {
        return (
            <div>
                <div>
                    <h1> Register Form</h1>
                    <form onSubmit={this.onSubmitEventHandler}>
                        <label for="name">Name: </label>
                        <input
                            id="name"
                            type={this.state.name}
                            onChange={this.onNameChangeEventHandler}
                        />
                        <br />
                        <label for="email">Email: </label>
                        <input
                            id="email"
                            type={this.state.email}
                            onChange={this.onEmailChangeEventHandler}
                        />
                        <br />
                        <label for="gender">Gender: </label>
                        <select
                            id="gender"
                            value={this.state.gender}
                            onChange={this.onGenderChangeEventHandler}
                        >
                            <option value="Man">Man</option>
                            <option value="Woman">Woman</option>
                        </select>
                        <br />
                        <button type="submit">submit</button>
                    </form>
                </div>
            </div>
        );
    }
}
