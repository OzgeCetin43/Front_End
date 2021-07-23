import React, { Component } from 'react';
import PropTypes from "prop-types";
import "./AddUser.css";

class AddUser extends Component {
    static propTypes = {
        addUser: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.fillUser = this.fillUser.bind(this);
        this.addUser = this.addUser.bind(this);
    }

    state = {
        name: "",
        phone: ""
    };

    fillUser(event) {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    addUser(event) {
        event.preventDefault();
        this.props.addUser(this.state.name, this.state.phone);

        this.setState({
            name: "",
            phone: ""
        }); 
    }

    render() {
        return (
            <form className="form-container">
                <input name="name" id="name" placeholder="İsim" onChange={this.fillUser} value={this.state.name}/>
                <input name="phone" id="phone" placeholder="Telefon" onChange={this.fillUser} value={this.state.phone}/>
                <button onClick={this.addUser}>Add</button>
            </form>
        )
    }
}

export default AddUser;
