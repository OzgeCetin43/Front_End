import React, { Component } from "react";
import "./User.css"

class User extends Component {
    render() {
        const {name, department, salary} = this.props;
        return(
            <div className="container">
                    <h3>{name}</h3>
                    <p>{department}</p>
                    <p>{salary}</p>
            </div>
        )
    }
}

export default User;