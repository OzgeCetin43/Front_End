import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";
import "./App.css";

const App = () => {
    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();

    return (
      <div className = "container">
        <h1>{ counter }</h1>
        <div>
          <button onClick = { () => dispatch(increment()) }>+</button>
          <button onClick = { () => dispatch(decrement()) }>-</button>
        </div>
      </div>
    )
}

export default App;