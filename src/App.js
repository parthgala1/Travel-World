import Navbar from "./Navbar.js"
import Card from "./Card.js"
import data from "./data"
import './App.css';

function App() {
  const cards = data.map(item =>{
      return(
        <Card 
          key={item.id}
          {...item}
        />
      )
  })


  return (
    <>
      <Navbar />
      {cards}
      
      </>
  )
}

export default App;


/* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React with
        </a>
      </header>
    </div> */