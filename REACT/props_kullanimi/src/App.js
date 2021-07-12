import React, { Component } from 'react';
import MyComponent from "./MyComponent";
import "./App.css"

class App extends Component {
  render() {
    const title="Merhaba Dünya";
    const description="React ile web geliştirmek çok eğlenceli :)"

    return (
      <div className="App">
        <MyComponent baslik={title} aciklama={description}/>
      </div>
    )
  }
}

export default App;

