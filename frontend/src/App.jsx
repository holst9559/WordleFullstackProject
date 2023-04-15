import { useEffect, useState, createContext } from "react";
import Board from "./components/GameBoard";
import MenuButton from "./components/MenuButton";
import GameOver from "./components/GameOver";
import GetWord from "./api/GetWord";
import "./App.css";
import ResetPrompt from "./components/ResetPrompt";
import InputField from "./components/InputField";
import Timer from "./components/Timer";
import Keyboard from "./components/Keyboard";

export const AppContext = createContext();

function App() {
  const [guessInput, setGuessInput] = useState([]);
  const [currAttempt, setCurrAttempt] = useState({ attempt: 0, letter: 0 });
  const [correctWord, setCorrectWord] = useState("");
  const [disabledLetters, setDisabledLetters] = useState([]);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [misplacedLetters, setMisplacedLetters] = useState([]);
  const [settings, setSettings] = useState({ wordLength: 5, checked: false });
  const [gameGrid, setGameGrid] = useState([settings.wordLength, 6]);
  const [gameOver, setGameOver] = useState({
    gameOver: false,
    guessedWord: false,
  });
  const [gameResults, setGameResults] = useState(null);
  const [gameIsFinished, setGameIsFinished] = useState(false);
  const [gameRunning, setGameRunning] = useState(false);
  const [gameRestart, setGameRestart] = useState(false);
  const [apiResponse, setApiResponse] = useState([[]]);
  const [gameTime, setGameTime] = useState(0);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);

  async function startGame() {
    if (gameRestart === true && gameRunning === true) {
      setDisabledLetters([]);
      setCorrectLetters([]);
      setMisplacedLetters([]);
      setCurrAttempt({ attempt: 0, letter: 0 });
      const { wordLength, duplicate } = settings;
      const res = await GetWord(wordLength, duplicate);

      setCorrectWord(res.secretWord.word);
      setApiResponse(res.results);
    } else if (gameRunning === false) {
      const { wordLength, duplicate } = settings;
      const res = await GetWord(wordLength, duplicate);

      setCorrectWord(res.secretWord.word);
      setApiResponse(res.results);
    }
  }

  function setInputField() {
    const wordLength = settings.wordLength;
    const inputReseter = [];

    for (let i = 0; i < wordLength; i++) {
      inputReseter.push("");
    }
    setGuessInput(inputReseter);
  }

  useEffect(() => {
    setInputField();
    startGame();
    setGameRunning(false);
  }, [settings]);

  useEffect(() => {
    if (startTime === null) {
      setStartTime(new Date());
    } else if (startTime !== null) {
      setEndTime(new Date());
    }
  }, [gameTime]);

  useEffect(() => {
    keyboardLetters();
  }, [apiResponse[currAttempt.attempt - 1]]);

  function keyboardLetters() {
    if (currAttempt.attempt > 0) {
      apiResponse[currAttempt.attempt - 1].forEach((key) => {
        if (key.result === "Correct") {
          setCorrectLetters((prev) => [...prev, key.letter.toUpperCase()]);
        } else if (key.result === "Misplaced") {
          setMisplacedLetters((prev) => [...prev, key.letter.toUpperCase()]);
        } else if (key.result === "Incorrect") {
          setDisabledLetters((prev) => [...prev, key.letter.toUpperCase()]);
        }
      });
    }
  }

  const onEnter = () => {
    if (currAttempt.letter !== settings.wordLength) return;
    let currWord = "";
    for (let i = 0; i < settings.wordLength; i++) {
      currWord += guessInput[i];
    }

    handleSubmit(currWord, correctWord);

    setCurrAttempt({ attempt: currAttempt.attempt + 1, letter: 0 });
    if (currWord.toLocaleLowerCase() === correctWord) {
      setGameRunning(false);
      setGameIsFinished(true);
      setGameResults({
        isWin: true,
        guesses: currAttempt.attempt,
      });
      return;
    }
    if (currAttempt.attempt === 5) {
      setGameRunning(false);
      setGameIsFinished(true);
      setGameResults({
        isWin: false,
      });
      setGameOver({ gameOver: true, guessedWord: false });
      return;
    }
    setInputField();
  };

  const onDelete = () => {
    if (currAttempt.letter === 0) return;
    const newGuessInput = [...guessInput];
    newGuessInput[currAttempt.letter - 1] = "";
    setGuessInput(newGuessInput);
    setCurrAttempt({ ...currAttempt, letter: currAttempt.letter - 1 });
  };

  const onSelectLetter = (key) => {
    if (currAttempt.letter >= settings.wordLength) return;
    if (
      disabledLetters.includes(key.toUpperCase()) &&
      !correctLetters.includes(key.toUpperCase())
    ) {
      return;
    }
    if (gameRunning === false && gameIsFinished === false) {
      setGameTime(0);
      setGameRunning(true);
    }
    const newGuessInput = [...guessInput];
    newGuessInput[currAttempt.letter] = key;

    setGuessInput(newGuessInput);
    setCurrAttempt({
      attempt: currAttempt.attempt,
      letter: currAttempt.letter + 1,
    });
  };

  async function handleSubmit(guess, correctWord) {
    if (currAttempt.attempt < 6) {
      const dataSend = {
        guess,
        correctWord,
      };
      const res = await fetch("/api/guess", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ dataSend }),
      });

      const data = await res.json();

      apiResponse[currAttempt.attempt] = data;
    }
  }

  return (
    <div className="App h-screen w-screen bg-gray-800">
      <header className="grid grid-cols-3 items-center h-20 border-b-2 bg-gray-800 opacity-90">
        <a
          className="grid font-bold text-6xl ml-auto mr-auto text-white hover:opacity-50 "
          href="/">
          WORDLE
        </a>
        <a
          className="grid order-first justify-end text-white text-3xl mt-6 hover:opacity-50"
          href="/highscores">
          Highscores
        </a>
        <a
          className="grid order-last text-white text-3xl mt-6 hover:opacity-50"
          href="/info">
          Info
        </a>
      </header>
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
          onDelete,
          onEnter,
          gameOver,
          gameTime,
          setGameTime,
          gameRunning,
        }}>
        <Timer />
        {!gameRestart ? (
          <Board
            apiResponse={apiResponse}
            attempt={currAttempt.attempt}
            setDisabledLetters={setDisabledLetters}
          />
        ) : (
          <ResetPrompt
            gameRestart={gameRestart}
            onRestart={(data) => {
              setGameRestart(data);
            }}
          />
        )}

        <InputField guessInput={guessInput} />
        <Keyboard
          apiResponse={apiResponse}
          disabledLetters={disabledLetters}
          correctLetters={correctLetters}
          misplacedLetters={misplacedLetters}
          currAttempt={currAttempt}
          gameOver={gameOver}
          onSelectLetter={onSelectLetter}
          onEnter={onEnter}
          onDelete={onDelete}
        />

        {gameIsFinished && gameResults && (
          <GameOver
            correctWord={correctWord}
            isWin={gameResults.isWin}
            guesses={gameResults.guesses + 1}
            duplicate={settings.checked}
            gameRestart={gameRestart}
            startTime={startTime}
            endTime={endTime}
            onRestart={(data) => {
              setGameRestart(data);
            }}
          />
        )}
      </AppContext.Provider>
    </div>
  );
}

export default App;
