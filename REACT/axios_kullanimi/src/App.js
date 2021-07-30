import React, { Component } from "react";
import axios from "axios";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    }
  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(response => response.data)
      .then(users => {
        this.setState({
          users: users
        });
      })
  }
  
  
  render() {
    return (
      <div className="App">
        {
          this.state.users.map((user, index) => 
            <div key = {index.toString()}>
              <p>{user.name}</p>
            </div>
          )
        }
      </div>
    );
  }
}

export default App;
