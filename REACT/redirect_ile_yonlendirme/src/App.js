import React, { Component } from "react";
import { BrowserRouter as Router, Route, NavLink, Redirect } from "react-router-dom";
import "./App.css"

const Profile = () => {
  return (
    <h1>Profile Page</h1>
  )
}

class App extends Component {
  state = {
    login: false
  }

  changeState = () => {
    this.setState({
      login: !this.state.login
    });
  }

  render() {
    return(
      <div>
         <header className = "header">
                <nav>
                   <Router>
                        <NavLink to = "/" className = "link">Home</NavLink>
                        <NavLink to = "/aboutUs" className = "link">About Us</NavLink>
                        <NavLink to = "/contact" className = "link">Contact</NavLink>
                        <NavLink to = "/profile" className = "link">Profile</NavLink>
                        <button onClick = {() => this.changeState()}>{ this.state.login ? "Logout" : "Login" }</button>

                        <Route path = "/" exact strict render = {
                          () => 
                            <div>
                              <h1>Home Page</h1>
                              {this.state.login ? null : <p>Please login for showing profile page</p>}
                            </div>
                        }/>

                        <Route path = "/aboutUs" exact strict render = {
                          () => <h1>About Us Page</h1>
                        }/>

                        <Route path = "/contact" exact strict render = {
                          () => <h1>Contact Page</h1>
                        }/>

                        <Route path = "/profile" exact strict render = {
                          () => this.state.login ? (<Profile/>) : (<Redirect to = "/" />) 
                        }/>
                   </Router>
                </nav>
            </header>
      </div>
    )
  }
}

export default App;