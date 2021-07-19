import './App.css';
import MiddleLayer from "./MiddleLayer";

function App() {
  function appFunction() {
    console.log("App Function is called");
  }

  return (
    <div className="App">
      <MiddleLayer callfunction={appFunction}/>
    </div>
  );
}

export default App;
