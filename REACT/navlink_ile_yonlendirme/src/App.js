import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <Router>
        <NavLink to = "/" activeClassName = "link" className = "link2">Home</NavLink>
        <NavLink to = "/aboutUs" className = "link2"  activeStyle = {{ display: "inline-block", backgroundColor: "#212121", color: "#f0f", padding: 20, fontSize: 18, textDecoration: "none" }}>About Us</NavLink>
        <NavLink to = "/contact" activeClassName = "link" className = "link2">Contact</NavLink>

        <Route path = "/" exact strict render = {
          () => <h1>Home Page</h1>
        }/>

        <Route path = "/aboutUs" exact strict render = {
          () => <h1>About Us Page</h1>
        }/>

        <Route path = "/contact" exact strict render = {
          () => <h1>Contact Page</h1>
        }/>
      </Router>
    )
  }
}
