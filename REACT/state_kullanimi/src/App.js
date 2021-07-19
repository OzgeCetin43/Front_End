import React, { useState } from "react";
import './App.css';
import MiddleLayer from './MiddleLayer';

function App() {
  function generateRandomString(size) {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const text = [];

    for(let i  = 0; i < size; i++) {
      text.push(characters.charAt(Math.floor(Math.random() * characters.length)));
    }

    return text.join("");
  };

  function generateRandomcomplete() {
    return Math.floor(Math.random() * 100) % 2 === 0 ? true : false;
  };

  const myTodoList =  [
    {
      title: generateRandomString(10),
      complete: generateRandomcomplete()
    },

    {
      title: generateRandomString(10),
      complete: generateRandomcomplete()
    },

    {
      title: generateRandomString(10),
      complete: generateRandomcomplete()
    },

    {
      title: generateRandomString(10),
      complete: generateRandomcomplete()
    },

    {
      title: generateRandomString(10),
      complete: generateRandomcomplete()
    }
  ];

  const [todoList, setTodoList] = useState(myTodoList);
  
  function addTodo() {
    setTodoList([...todoList, {
      title: generateRandomString(10),
      complete: false
    }])
  }

  return (
    <div className="App">
      {
        todoList.map((todo, index) => (
          <div key={index.toString()}>
            <span className="title">{todo.title}</span>
            <span>{todo.complete ?  "Completed" : "Not Completed"}</span>
          </div>
        ))
      }
      <MiddleLayer addTodoItem = {addTodo.bind(this)}/>
    </div>
  );
}

export default App;
