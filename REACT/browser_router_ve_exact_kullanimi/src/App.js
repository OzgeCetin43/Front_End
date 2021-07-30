import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Route path = "/" exact render = {
          () => <h1>Anasayfa</h1>
        } />

        <Route path = "/iletisim" exact render = {
          () => <h1>İletişim</h1>
        } />
      </Router>
    )
  }
}

export default App;