

function App() {

  const searchButton = () => {
    console.log("You pressed me beech")
  }

  return (
    <div>
     <h1>This is our Search Bar App</h1>
     <input type="search" ></input>
     <button onClick={searchButton}>Search me beech</button>

    </div>
  );
}

export default App;
