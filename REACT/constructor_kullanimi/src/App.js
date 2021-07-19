import './App.css';
import Title from "./Title";

function App() {
  return (
    <div className="App">
      <div>
        <Title info={{title: "React", description: "React öğrenmek çok güzel"}}/>
      </div>
    </div>
  );
}

export default App;
