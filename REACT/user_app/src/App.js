import React, { Component } from 'react';
import Faker from "faker";
import posed from "react-pose";
import Header from "./components/Header";
import User from "./components/User";
import "./App.css";

const Animation = posed.div({
  visible: {
    opacity: 1
  },

  hidden: {
    opacity: 0
  }
});

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      visible: false
    }; 

    this.deleteUser = this.deleteUser.bind(this);
    this.showDetail = this.showDetail.bind(this);
    this.hideDetail = this.hideDetail.bind(this);
  }

  componentDidMount() {
    const temp = [];

    for(let i = 0; i < 10; i++) {
      temp.push({
        name: Faker.name.firstName() + " " + Faker.name.lastName(),
        jobType: Faker.name.jobType(),
        jobDescriptor: Faker.name.jobDescriptor(),
        email: Faker.internet.email(),
        phone: Faker.phone.phoneNumber(),
        address: Faker.address.country(),
        image: Faker.image.avatar(),
        isVisible: false,
      });
    }

    this.setState({
      users: temp,
      visible: this.state.visible
    });
  }

  addNewUser = () => {
    const temp = this.state.users;

    temp.push({
      name: Faker.name.firstName() + " " + Faker.name.lastName(),
      jobType: Faker.name.jobType(),
      jobDescriptor: Faker.name.jobDescriptor(),
      email: Faker.internet.email(),
      phone: Faker.phone.phoneNumber(),
      address: Faker.address.country(),
      image: Faker.image.avatar()
    });

    this.setState({
      users: temp,
      visible: this.state.visible
    });
  }

  deleteUser(index) {
    const temp = [];

    this.state.users.map((user, idx) =>
      index !== idx ? temp.push(user) : null
    )

    this.setState({
      users: temp,
      visible: this.state.visible
    });
  }

  showDetail(index) {
    const temp = [];

    this.state.users.map((user, idx) => {
        if(index === idx) {
            user.isVisible = true;
            temp.push(user);
        }
        else {
            temp.push(user);    
        }

        return 0;
    })

    this.setState({
        users: temp,
        visible: this.state.visible
    });
  }

  hideDetail(index) {
      const temp = [];

      this.state.users.map((user, idx) => {
          if(index === idx) {
              user.isVisible = false;
              temp.push(user);
          }
          else {
              temp.push(user);    
          }

          return 0;
      })

      this.setState({
          users: temp
      });
  }

  changeVisibility() {
    console.log("Deneme");
    this.setState({
      users: this.state.users,
      visible: !this.state.visible
    });
  }

  render() {
    return (
      <div className="container">
        <Header title="User App"/>
        
        <button onClick={() => this.changeVisibility()} className="btn">{this.state.visible ? "Hide Users" : "Show Users"}</button>

        <Animation pose={this.state.visible ? "visible" : "hidden"}>
          <User users={this.state.users} deleteUser={this.deleteUser} showDetail={this.showDetail} hideDetail={this.hideDetail}/>
        </Animation>
        
        <button className="addUser" onClick={this.addNewUser}>+</button>
      </div>
    )
  }
}

export default App;