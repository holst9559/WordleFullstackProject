import { useEffect, useState, createContext } from "react";
import Board from "./components/GameBoard";
import MenuButton from "./components/MenuButton";
import Keyboard from "./components/Keyboard";
import GameOver from "./components/GameOver";
import GetWord from "./components/GetWord";
import { boardDefault } from "./components/BoardDefault";
import "./App.css";
import ResetPrompt from "./components/ResetPrompt";

export const AppContext = createContext();

function App() {
  const boardReseter = [
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
  ];
  const [board, setBoard] = useState(boardReseter);
  const [currAttempt, setCurrAttempt] = useState({ attempt: 0, letter: 0 });
  const [correctWord, setCorrectWord] = useState("");
  const [disabledLetters, setDisabledLetters] = useState([]);
  const [settings, setSettings] = useState({ wordLength: 5, checked: false });
  const [gameGrid, setGameGrid] = useState([settings.wordLength, 6]);
  const [gameOver, setGameOver] = useState({
    gameOver: false,
    guessedWord: false,
  });
  const [gameRunning, setGameRunning] = useState(false);
  const [gameRestart, setGameRestart] = useState(false);
  const [boardReset, setBoardReset] = useState(false);

  async function startGame() {
    if (gameRestart === true && gameRunning === true) {
      setCurrAttempt({ attempt: 0, letter: 0 });
      setBoardReset(true);
    } else if (gameRunning === false) {
      setGameRunning(true);
      GetWord({ settings }).then((words) => {
        setCorrectWord(words.data);
      });
    }
  }

  useEffect(() => {
    startGame();
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
    if (boardReset === true && currAttempt.letter === 0) {
      setBoardReset(false);
      setBoard(boardReseter);
      const newBoard = [...boardReseter];
      newBoard[currAttempt.attempt][currAttempt.letter] = key;
      setBoard(newBoard);
      setCurrAttempt({
        attempt: currAttempt.attempt,
        letter: currAttempt.letter + 1,
      });
    } else if (boardReset === false) {
      const newBoard = [...board];
      newBoard[currAttempt.attempt][currAttempt.letter] = key;
      setBoard(newBoard);
      setCurrAttempt({
        attempt: currAttempt.attempt,
        letter: currAttempt.letter + 1,
      });
    }
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
        onRestart={(data) => {
          setGameRestart(data);
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
          boardReset,
        }}>
        {!gameRestart ? (
          <Board settings={settings} />
        ) : (
          <ResetPrompt
            gameRestart={gameRestart}
            onRestart={(data) => {
              setGameRestart(data);
            }}
          />
        )}
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
