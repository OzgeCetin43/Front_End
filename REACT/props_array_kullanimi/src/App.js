import './App.css';
import User from "./User";

function App() {
  const users = [
    {
      ad: "Özge",
      bolum: "Computer Engineer",
      maas: 4500
    },
    {
      ad: "Aslı",
      bolum: "Electric and Electronic Enginner",
      maas: 5000
    },
    {
      ad: "Müge",
      bolum: "Lawyer",
      maas: 4000
    }
  ];
  
  return (
    <div className="App">
      {
        users.map((user) => (
          <User name={user.ad} department={user.bolum} salary={user.maas}/>
        ))
      }
    </div>
  );
}

export default App;
