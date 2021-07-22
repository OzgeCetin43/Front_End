import React, { useState } from 'react';
import Comment from "./Comment";
import Faker from "faker";
import './App.css';

function App() {
  const commentList = [];
  
  for(let i = 0; i < 5; i++) {
    commentList.push(
      {
        author: Faker.name.firstName() + " " + Faker.name.lastName(),
        date: Math.floor(Math.random() * 10) + " days ago",
        like: Math.floor(Math.random() * 100) + " likes",
        comment: Faker.lorem.lines()
      } 
    );
  }

  const [comments, setComments] = useState(commentList);

  return (
    <div className="App">
      {
        comments.map((comment, index) => (
          <Comment key={index.toString()} comment={comment}/>
        )) 
      }
    </div>
  );
}

export default App;
