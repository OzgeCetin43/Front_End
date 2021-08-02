import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";
import not_found_gif from "./images/404.gif";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <NavLink to = "/" className = "link">Home</NavLink>
          <NavLink to = "/aboutUs" className = "link">About Us</NavLink>
          <NavLink to = "/contact" className = "link">Contact</NavLink>

          <Switch>
            <Route path = "/" exact strict render = {
              () => <h1>Home Page</h1>
            }/>

            <Route path = "/aboutUs" exact strict render = {
              () => <h1>About Us Page</h1>
            }/>

            <Route path = "/contact" exact strict render = {
              () => <h1>Contact Page</h1>
            }/>

            <Route render = {
              () => <div className = "container">
                      <img src = {not_found_gif}/>
                    </div>
            }/>
          </Switch>
        </Router>
      </div>
    )
  }
}
