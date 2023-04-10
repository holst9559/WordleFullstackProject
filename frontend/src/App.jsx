import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import GameBoard from "./components/GameBoard";
import GuessInput from "./components/GuessInput";
import "./App.css";

// export const AppContext = createContext();

function App() {
  const [attemptCount, setAttemptCount] = useState(0);
  const [currentResult, setCurrentResult] = useState();
  const [guessArray, setGuessArray] = useState([]);
  //const [board, setBoard] = useState(boardDefault);

  async function handleSubmit(formGuess) {
    /*
    const res = await fetch("POST GUESS TO API", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ formGuess }),
    });

    const data = await res.json();
    */
    const data = formGuess;
    setCurrentResult(data);
    setAttemptCount(attemptCount + 1);

    const updateGuesses = [...guessArray, data];
    setGuessArray(updateGuesses);
  }
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
      <GameBoard guessArray={guessArray} />

      <div>
        <GuessInput onGuess={handleSubmit} />
      </div>
    </div>
  );
}

export default App;
