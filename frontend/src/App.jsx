import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="flex items-center flex-row h-20 border-b-2 justify-center bg-gray-950 ">
        <a
          className="font-bold text-6xl ml-auto mr-auto text-white p-10"
          href="/">
          WORDLE
        </a>
      </header>
      <nav className="bg-gray-950 flex items-center flex-row justify-center pt-2">
        <a className=" text-white text-3xl pr-6" href="/highscores">
          Highscores
        </a>
        <a className="text-white text-3xl pl-6" href="/info">
          Info
        </a>
      </nav>
      <div className="body bg-gray-950 h-screen">
        <GameBoard />
      </div>
    </div>
  );
}

export default App;
