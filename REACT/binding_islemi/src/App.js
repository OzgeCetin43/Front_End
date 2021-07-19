import './App.css';
import MiddleLayer from "./MiddleLayer";

function App() {
  function generateRandomString(size) {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const text = [];

    for(let i = 0; i < size; i++) {
      text.push(characters.charAt(Math.round(Math.random() * characters.length)));
    }

    return text.join("");
  }

  function addNewItem() {
    infos.push( {
      title: generateRandomString(10),
      description: generateRandomString(7)
    });

    console.log(infos);
  }

  const infos = [
    {
      title: generateRandomString(10),
      description: generateRandomString(7)
    },

    {
      title: generateRandomString(10),
      description: generateRandomString(7)
    },

    {
      title: generateRandomString(10),
      description: generateRandomString(7)
    },
  ]

  return (
    <div className="App">
      <MiddleLayer addItem={addNewItem}/>
    </div>
  );
}

export default App;
