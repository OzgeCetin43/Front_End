import React, { Component } from 'react';
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: []
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/photos")
    .then(data => data.json())
    .then(imagesJSON => {
      this.setState({
        images: imagesJSON
      });
    });
  }

  render() {
    return (
      <div className="container">
        {
            this.state.images.map((image, index) => 
              <img src={image.url} className="album-image" key={index.toString()} alt="Galeri"/>
            )
        }
      </div>
    )
  }
}

export default App;