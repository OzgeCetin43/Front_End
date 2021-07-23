import React, { Component } from 'react';
import PropTypes from "prop-types";
import AddUser from './AddUser';
import List from "./List";

class Container extends Component {
    static propTypes = {
        users: PropTypes.array.isRequired,
        addUser: PropTypes.func.isRequired
    };

    render() {
        return (
            <div>
                <List users={this.props.users}/>
                <AddUser addUser={this.props.addUser}/>
            </div>
        )
    }
}

export default Container;