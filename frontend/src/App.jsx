import { useEffect, useState, createContext } from "react";
import Board from "./components/GameBoard";
import MenuButton from "./components/MenuButton";
import Keyboard from "./components/Keyboard";
import GameOver from "./components/GameOver";
import GetWord from "./components/GetWord";
import { boardDefault } from "./components/BoardDefault";
import "./App.css";

export const AppContext = createContext();

function App() {
  const [board, setBoard] = useState(boardDefault);
  const [currAttempt, setCurrAttempt] = useState({ attempt: 0, letter: 0 });
  const [correctWord, setCorrectWord] = useState("");
  const [disabledLetters, setDisabledLetters] = useState([]);
  const [guessArray, setGuessArray] = useState([]);
  const [settings, setSettings] = useState({ wordLength: 5, checked: false });
  const [gameGrid, setGameGrid] = useState([settings.wordLength, 6]);
  const [gameOver, setGameOver] = useState({
    gameOver: false,
    guessedWord: false,
  });

  useEffect(() => {
    GetWord({ settings }).then((words) => {
      setCorrectWord(words.data);
    });
  }, [settings]);

  console.log(correctWord);

  const onEnter = () => {
    if (currAttempt.letter !== settings.wordLength) return;

    let currWord = "";
    for (let i = 0; i < settings.wordLength; i++) {
      currWord += board[currAttempt.attempt][i];
    }

    setCurrAttempt({ attempt: currAttempt.attempt + 1, letter: 0 });
    if (currWord.toLocaleLowerCase() === correctWord) {
      setGameOver({ gameOver: true, guessedWord: true });
      return;
    }
    if (currAttempt.attempt === 5) {
      setGameOver({ gameOver: true, guessedWord: false });
      return;
    }
  };

  const onDelete = () => {
    if (currAttempt.letter === 0) return;
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letter - 1] = "";
    setBoard(newBoard);
    setCurrAttempt({ ...currAttempt, letter: currAttempt.letter - 1 });
  };

  const onSelectLetter = (key) => {
    if (currAttempt.letter >= settings.wordLength) return;
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letter] = key;
    console.log(board);
    setBoard(newBoard);
    setCurrAttempt({
      attempt: currAttempt.attempt,
      letter: currAttempt.letter + 1,
    });
  };

  async function handleSubmit(guessInput) {
    const res = await fetch("/api/guess", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ guessInput, correctWord }),
    });

    const data = await res.json();

    setCurrentResult(data.guess);
    setAttemptCount(attemptCount + 1);

    const updateGuesses = [...guessArray, data.guess];
    setGuessArray(updateGuesses);

    return data;
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

      <MenuButton
        settings={settings}
        onSave={(data) => {
          setSettings(data);
          setGameGrid([settings.wordLength, 6]);
        }}
      />
      <AppContext.Provider
        value={{
          board,
          setBoard,
          currAttempt,
          setCurrAttempt,
          correctWord,
          onSelectLetter,
          onDelete,
          onEnter,
          setDisabledLetters,
          disabledLetters,
          gameOver,
        }}>
        <Board settings={settings} />
        {gameOver.gameOver ? <GameOver /> : <Keyboard />}
      </AppContext.Provider>
    </div>
  );
}

export default App;

/* <GameBoard guessArray={guessArray} settings={gameGrid} />

      <div>
        <GuessInput onGuess={handleSubmit} settings={settings} />
      </div>
      */
