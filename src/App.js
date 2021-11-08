import './App.css';
import OnlineComponent from "./components/OnlineComponent"
import { io } from "socket.io-client";

function App() {
  const resetinSocket = () =>{
    console.log("click")
    const socket = io('http://localhost:8090');
    socket.emit("resetGame")
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Dupme Server</h1>
        <OnlineComponent/>
        <button className="btn" onClick={()=>resetinSocket()}>Reset</button>
      </header>
    </div>
  );
}

export default App;
