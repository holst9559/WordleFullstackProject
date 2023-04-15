import React, { useContext } from "react";
import { AppContext } from "../App";

function Key({ keyVal, bigKey, disabled, correct, misplaced, apiResponse }) {
  const { gameOver, onSelectLetter, onDelete, onEnter } =
    useContext(AppContext);
  const selectLetter = () => {
    if (gameOver.gameOver) return;
    if (keyVal === "ENTER") {
      onEnter();
    } else if (keyVal === "DEL") {
      onDelete();
    } else {
      onSelectLetter(keyVal);
    }
  };
  return (
    <div
      className="key w-16 h-14 m-1 rounded-md text-xl bg-gray-500 text-white text-center pt-3 font-semibold hover:cursor-pointer"
      key={
        correct ? "Correct" : misplaced ? "Misplaced" : disabled && "disabled"
      }
      id={
        correct ? "Correct" : misplaced ? "Misplaced" : disabled && "Incorrect"
      }
      onClick={selectLetter}>
      {keyVal}
    </div>
  );
}

export default Key;
