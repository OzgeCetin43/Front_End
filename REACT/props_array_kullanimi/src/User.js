import React, { Component } from 'react'

class User extends Component {
    render() {
        console.log("Hello ");
        console.log(this.props);
        return (
            <div style={{ display: "flex", justifyContent: "space-betweeen", alignItems: "center", width: 800, backgroundColor: "#dedede", margin: "auto", marginTop: 20, padding: 20 }}>
                <h3 style={{ marginRight: 10 }}>{this.props.name}</h3>
                <p style={{ marginRight: 10 }}>{this.props.department} </p>
                <p style={{ marginRight: 10 }}>{this.props.salary} </p>
            </div>
        )
    }
}

export default User;
