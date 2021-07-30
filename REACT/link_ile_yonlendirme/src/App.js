import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Link to = "/">Home</Link><br/>
        <Link to = "/aboutUs">About Us</Link><br/>
        <Link to = "/contact">Contact</Link><br/>

        <Route path = "/" exact strict render = {
          () => <h1>Home Page</h1>
        } />

        <Route path = "/aboutUs" exact strict render = {
          () => <h1>About Us Page</h1>
        } /> 

        <Route path = "/contact" exact strict render = {
          () => <h1>Contact Page</h1>
        } /> 
      </Router>
    )
  }
}

export default App;