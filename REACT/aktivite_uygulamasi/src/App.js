import React, { Component } from 'react';
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: {
        latitude: 0,
        longitude: 0
      },
      yarimKure: "",
      mevsim: "",
      aktivite: {
        icon: "",
        yapilacak: ""
      },
      errorMessage: ""
    };
  }

  getSeason() {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();

    if(currentMonth < 3 && currentMonth > 9) {
      if(this.state.yarimKure === "Kuzey Yarımküre")
        return "Kış";
      else 
        return "Yaz";
    }

    else {
      if(this.state.yarimKure === "Kuzey Yarımküre")
        return "Yaz";
      else
        return "Kış";
    }
  }
  
  fillState = () => {
    window.navigator.geolocation.watchPosition((position) => {
      this.setState({
        location: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        },
        yarimKure: position.coords.latitude >= 0 ? "Kuzey Yarımküre" : "Güney Yarımküre",
        mevsim: this.getSeason(),
        aktivite: {
          icon: this.state.mevsim === "Yaz" ? "fas fa-sun" : "fas fa-snowman",
          yapilacak: this.state.mevsim === "Yaz" ? "Yüzme Zamanı" : "Spor Salonuna Gitme Zamanı"
        }
      });
    },
    (error) => {
      this.setState({
        errorMessage: error.message
      });
    });
  }

  render() {
    this.fillState();
    return (
      <div className="container">
        <h1>Merhaba {this.state.yarimKure}'li</h1>
        <p>Enlem : {this.state.location.latitude}</p>
        <p>Boylam: {this.state.location.longitude}</p>
        <small className="season">{this.state.mevsim}</small>
        <i className={this.state.aktivite.icon}></i>
        <p>{this.state.aktivite.yapilacak}</p>
      </div>
    )
  }
}

export default App;