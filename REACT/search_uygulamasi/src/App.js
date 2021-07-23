import React, { Component } from 'react';
import Container from './Container';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.addUser = this.addUser.bind(this);
  }

  state = {
    users : [
      {
        name: "Özge",
        phone: "0555 578 90 53"
      },
  
      {
        name: "Müge",
        phone: "0555 323 56 54"
      },
  
      {
        name: "Elif",
        phone: "0555 342 76 48"
      }
    ]
  };

  addUser(name, phone) {
    const temp = this.state.users;
    temp.push({
      name: name,
      phone: phone
    });

    this.setState({
      users: temp
    });
  }

  render() {
    return (
      <div className="container">
        <Container users={this.state.users} addUser={this.addUser}/>
      </div>
    )
  }
}

export default  App;