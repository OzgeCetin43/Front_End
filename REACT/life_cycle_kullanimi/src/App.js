import React, { Component } from 'react';
import Child from "./Child";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "red",
      money: 0
    };
    console.log("Parent Constructor");
    this.moneyChange = this.moneyChange.bind(this);
  }

  moneyChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  componentWillMount() {
    console.log("Parent ComponentWillMount");
  }

  componentDidMount() {
    console.log("Parent ComponentDidMount");

    setTimeout(() => {
      this.setState({
        color: "blue"
      });
    }, 5000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("Parent ShouldComponentUpdate", nextProps, nextState);
    return (nextState.money % 4 === 0);
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("Parent ComponentWillUpdate", nextProps, nextState);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Parent ComponentDidUpdate", prevProps, prevState);
  }

  render() {
    console.log("Parent Render");
    return (
      <div className="parent">
        <Child color={this.state.color}/>
        <input type="text" name="money" id="money" onChange={this.moneyChange}/> 
        <p>1 kg elma 4 TL</p>
        <p>{this.state.money / 4} kg elma alabilirsiniz</p>
      </div>
    )
  }
}

export default App; 