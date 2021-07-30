import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

const User = ({match}) => {
  const id = match.params.id;
  return(
    <div>
      <h1>{id} - {window.users[id].name} </h1>
    </div>
  )  
}

class App extends Component { 
  render() {
    return (
     <Router>
       <Route path = "/" exact strict render = {
         () => <h1>Anasayfa</h1>
       } />

       <Route path = "/users/:id" exact strict component = {User} />
     </Router>
    )
  }
}

export default App;