import './App.css';
import OnlineComponent from "./components/OnlineComponent"

function App() {
  function resetinSocket(){
    const url = new URL('http://localhost:3000/reset')
    fetch(url.href, { method: 'POST' })
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Dupme Server</h1>
        <OnlineComponent/>
        <button className="btn" onClick={resetinSocket}>Reset</button>
      </header>
    </div>
  );
}

export default App;
