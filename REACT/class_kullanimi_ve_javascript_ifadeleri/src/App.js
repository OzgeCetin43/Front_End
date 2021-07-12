import { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const age = 23;
    const name = "özge";
    const register = false;
    return (
      <div className="App">
        <h1>Merhaba {name.toUpperCase()}</h1>
        <h1>Yaşınız : {age}</h1>
        <h1>2 + 2 = {2 + 2}</h1>
        <p>{register ? "Kayıtlı kullanıcı" : "Lütfen kayıt olun"}</p>
      </div>
    );
  }
}

export default App;