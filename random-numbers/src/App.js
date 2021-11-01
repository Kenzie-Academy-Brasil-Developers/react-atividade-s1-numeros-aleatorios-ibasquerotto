import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [number, setNumber] = useState(Math.floor(Math.random() * 100 + 1));

  function randomNumber() {
    setNumber(Math.floor(Math.random() * 100) + 1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1> {number} </h1>
        <button
          onClick={randomNumber}
          style={{
            backgroundColor: "purple",
            color: "white",
            border: "none",
            fontSize: "18px",
            marginTop: "20px",
            borderRadius: "32px",
            padding: "15px 35px",
          }}
        >
          {" "}
          Criar novo número{" "}
        </button>
      </header>
    </div>
  );
}

export default App;
