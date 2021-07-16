import './App.css';
import ClassBasedComponent from './ClassBasedComponent';

function App() {
  return (
    <div className="App">
      <ClassBasedComponent style={{color: "red"}} title="Merhaba Dünya" description="React çok güzel..."/>
      <ClassBasedComponent style={{color: "blue"}} title="Merhaba Dünya!!!" description={100}/>
    </div>
  );
}

export default App;
