import React, { useContext, useEffect } from "react";
import { AppContext } from "../App";

export default function Letter({ letterPos, attemptVal }) {
  const { board, setDisabledLetters, currAttempt, correctWord, boardReset } =
    useContext(AppContext);
  const letter = board[attemptVal][letterPos];
  const correct = correctWord.toUpperCase()[letterPos] === letter;
  const almost =
    !correct && letter !== "" && correctWord.toUpperCase().includes(letter);
  const letterState =
    currAttempt.attempt > attemptVal &&
    (correct ? "correct" : almost ? "almost" : "error");

  useEffect(() => {
    if (letter !== "" && !correct && !almost) {
      setDisabledLetters((prev) => [...prev, letter]);
    }
  }, [currAttempt.attempt]);

  const letterRow = (
    <div
      className="letter letter h-16 w-16 border-2  text-white text-center text-5xl"
      id={letterState}>
      {letter}
    </div>
  );

  const emptyRow = (
    <div className="letter letter h-16 w-16 border-2  text-white text-center text-5xl"></div>
  );

  useEffect(() => {
    renderLetters();
  }, [currAttempt.attempt]);

  const renderLetters = () => {
    if (boardReset === true) {
      console.log("EMPTY");
      return emptyRow;
    } else {
      //console.log("POPULATED");
      return letterRow;
    }
  };

  return renderLetters();
}
