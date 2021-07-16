import './App.css';
import ClassBasedComponent from './ClassBasedComponent';
import FunctionalComponent from './FunctionalComponent';

function App() {
  return (
    <div className="App">
      <ClassBasedComponent title="Merhaba Dünya" description="React çok eğlenceli..."/>
      <FunctionalComponent title="Hello World" description="React is so enjoyable..."/>
    </div>
  );
}

export default App;
