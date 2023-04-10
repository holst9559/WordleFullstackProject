import { useEffect, useState } from "react";
import GameBoard from "./components/GameBoard";
import GuessInput from "./components/GuessInput";
import MenuButton from "./components/MenuButton";
import "./App.css";

// export const AppContext = createContext();

function App() {
  const [gameState, setGameState] = useState("playing");
  const [attemptCount, setAttemptCount] = useState(0);
  const [currentResult, setCurrentResult] = useState();
  const [guessArray, setGuessArray] = useState([]);
  const [settings, setSettings] = useState();

  /*
useEffect(() => {
  async function startGame() {
    const res = await //API FETCH GAME SETTINGS

    
  }
})
*/

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
          className="font-bold text-6xl ml-auto mr-auto text-white p-10 hover:opacity-50"
          href="/">
          WORDLE
        </a>
      </header>
      <nav className="bg-gray-800 flex items-center flex-row justify-center pt-2 opacity-90">
        <a
          className=" text-white text-3xl pr-6 hover:opacity-50"
          href="/highscores">
          Highscores
        </a>
        <a className="text-white text-3xl pl-6 hover:opacity-50" href="/info">
          Info
        </a>
      </nav>
      <MenuButton />
      <GameBoard guessArray={guessArray} />

      <div>
        <GuessInput onGuess={handleSubmit} />
      </div>
    </div>
  );
}

export default App;
