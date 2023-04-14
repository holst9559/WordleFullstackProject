import { useEffect, useState, createContext, useCallback } from "react";
import Board from "./components/GameBoard";
import MenuButton from "./components/MenuButton";
import GameOver from "./components/GameOver";
import GetWord from "./api/GetWord";
import "./App.css";
import ResetPrompt from "./components/ResetPrompt";
import InputField from "./components/InputField";
import Timer from "./components/Timer";

export const AppContext = createContext();

function App() {
  const [allowedLetters, setAllowedLetter] = useState([
    "Q",
    "W",
    "E",
    "R",
    "T",
    "Y",
    "U",
    "I",
    "O",
    "P",
    "A",
    "S",
    "D",
    "F",
    "G",
    "H",
    "J",
    "K",
    "L",
    "Z",
    "X",
    "C",
    "V",
    "B",
    "N",
    "M",
  ]);
  const [guessInput, setGuessInput] = useState([]);
  const [currAttempt, setCurrAttempt] = useState({ attempt: 0, letter: 0 });
  const [correctWord, setCorrectWord] = useState("");
  const [disabledLetters, setDisabledLetters] = useState([]);
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
  const [apiResponse, setApiResponse] = useState([[]]); //Empty board which gets populated
  const [gameTime, setGameTime] = useState(0);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);

  async function startGame() {
    if (gameRestart === true && gameRunning === true) {
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
    if (currAttempt.attempt === 4) {
      setGameRunning(false);
      setGameIsFinished(true);
      setGameResults({
        isWin: false,
      });
      setGameOver({ gameOver: true, guessedWord: false });
      return;
    }
    console.log(correctWord);
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

  const handleKeyboard = useCallback(
    (event) => {
      if (gameOver.gameOver) return;
      if (event.key === "Enter") {
        onEnter();
      } else if (event.key === "Backspace") {
        onDelete();
      } else {
        allowedLetters.forEach((key) => {
          if (event.key.toUpperCase() === key.toUpperCase()) {
            onSelectLetter(key);
          }
        });
      }
    },
    [currAttempt, apiResponse]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyboard);

    return () => {
      document.removeEventListener("keydown", handleKeyboard);
    };
  }, [handleKeyboard]);

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
          currAttempt,
          setCurrAttempt,
          correctWord,
          onSelectLetter,
          onDelete,
          onEnter,
          setDisabledLetters,
          disabledLetters,
          gameOver,
          apiResponse,
          gameTime,
          setGameTime,
          gameRunning,
        }}>
        <Timer />
        {!gameRestart ? (
          <Board apiResponse={apiResponse} attempt={currAttempt.attempt} />
        ) : (
          <ResetPrompt
            gameRestart={gameRestart}
            onRestart={(data) => {
              setGameRestart(data);
            }}
          />
        )}

        <InputField guessInput={guessInput} />

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

/* <GameBoard guessArray={guessArray} settings={gameGrid} />

      <div>
        <GuessInput onGuess={handleSubmit} settings={settings} />
      </div>
      */
