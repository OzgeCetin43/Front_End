import React, { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1) 
  }

  function decrement() {
    setCounter(counter - 1)
  }
  
  function reset() {
    setCounter(0)
  }

  return (
    <div className="App">
      <h1>{counter}</h1>
      <div>
        <button onClick={increment}>Arttır</button>
        <button onClick={reset}>Sıfırla</button>
        <button onClick={decrement}>Azalt</button>
      </div>
    </div>
  );
}

export default App;
