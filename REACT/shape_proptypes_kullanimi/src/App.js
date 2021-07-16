import './App.css';
import User from "./User";

function App() {
  const users = [
    {
      name: "Özge",
      department: "Computer Engineer",
      salary: 5000
    },

    {
      name: "Alihan",
      department: "Electric and Electronic Engineer",
      salary: 4000
    },

    {
      name: "Müge",
      department: "Lawyer",
      salary: 3500
    },
  ];

  return (
    <div className="App">
      {
        users.map((user, index) => (
          <User key={index.toString()} info={user}/>
        ))
      }

      <User info={{name: "Oya", department: "HR", salary: 8000}} departmentId={2}/>
    </div>
  );
}

export default App;
