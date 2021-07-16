import './App.css';
import MiddleLayer from './MiddleLayer';

function App() {
  const users = [
    {
      name: "Özge",
      department: "Computer Engineer",
      salary: 5000
    },
    {
      name: "Müge",
      department: "Lawyer",
      salary: 3500
    },
    {
      name: "Hatice",
      department: "HR",
      salary: 4000
    }
  ];

  return (
    <div className="App">
      <MiddleLayer data={users}/>
    </div>
  );
}

export default App;
