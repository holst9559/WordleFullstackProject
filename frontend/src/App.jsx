import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import GameBoard from "./components/GameBoard";
import KeyInput from "./components/KeyInput";
import "./App.css";

// export const AppContext = createContext();

function App() {
  const [count, setCount] = useState(0);
  //const [board, setBoard] = useState(boardDefault);

  useEffect(() => {
    window.addEventListener("keyup");
    window.removeEventListener("keyup");
  });

  return (
    <div className="App h-screen w-screen bg-gray-800">
      <header className="flex items-center flex-row h-20 border-b-2  bg-gray-800 opacity-90">
        <a
          className="font-bold text-6xl ml-auto mr-auto text-white p-10"
          href="/">
          WORDLE
        </a>
      </header>
      <nav className="bg-gray-800 flex items-center flex-row justify-center pt-2 opacity-90">
        <a className=" text-white text-3xl pr-6" href="/highscores">
          Highscores
        </a>
        <a className="text-white text-3xl pl-6" href="/info">
          Info
        </a>
      </nav>
      <GameBoard />

      <div>
        <KeyInput />
      </div>
    </div>
  );
}

export default App;
