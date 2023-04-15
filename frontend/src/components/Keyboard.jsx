import React, { useCallback, useEffect, useContext } from "react";
import Key from "./Key";
import { AppContext } from "../App";

function Keyboard({
  apiResponse,
  disabledLetters,
  correctLetters,
  misplacedLetters,
}) {
  const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];

  const { board, currAttempt, gameOver, onSelectLetter, onEnter, onDelete } =
    useContext(AppContext);

  const handleKeyboard = useCallback(
    (event) => {
      if (gameOver.gameOver) return;
      if (
        disabledLetters.includes(event.key.toUpperCase()) &&
        !correctLetters.includes(event.key.toUpperCase())
      ) {
        return;
      }
      if (event.key === "Enter") {
        onEnter();
      } else if (event.key === "Backspace") {
        onDelete();
      } else {
        keys1.forEach((key) => {
          if (event.key.toLowerCase() === key.toLowerCase()) {
            onSelectLetter(key);
          }
        });
        keys2.forEach((key) => {
          if (event.key.toLowerCase() === key.toLowerCase()) {
            onSelectLetter(key);
          }
        });
        keys3.forEach((key) => {
          if (event.key.toLowerCase() === key.toLowerCase()) {
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
    <div
      className="keyboard h-80 mr-auto ml-auto bg-gray-800"
      onKeyDown={handleKeyboard}>
      <div className="line1 flex flex-row justify-center m-1">
        {keys1.map((key) => {
          return (
            <Key
              keyVal={key}
              apiResponse={apiResponse}
              disabled={disabledLetters.includes(key)}
              correct={correctLetters.includes(key)}
              misplaced={misplacedLetters.includes(key)}
            />
          );
        })}
      </div>
      <div className="line2 flex flex-row justify-center m-1">
        {keys2.map((key) => {
          return (
            <Key
              keyVal={key}
              apiResponse={apiResponse}
              disabled={disabledLetters.includes(key)}
              correct={correctLetters.includes(key)}
              misplaced={misplacedLetters.includes(key)}
            />
          );
        })}
      </div>
      <div className="line3 flex flex-row justify-center m-1">
        <Key keyVal={"ENTER"} bigKey />
        {keys3.map((key) => {
          return (
            <Key
              keyVal={key}
              apiResponse={apiResponse}
              disabled={disabledLetters.includes(key)}
              correct={correctLetters.includes(key)}
              misplaced={misplacedLetters.includes(key)}
            />
          );
        })}
        <Key keyVal={"DEL"} bigKey />
      </div>
    </div>
  );
}

export default Keyboard;
