import React, { useContext } from "react";
import { AppContext } from "../App";

export default function Key({ keyVal, bigKey, disabled }) {
  const { gameOver, onSelectLetter, onDelete, onEnter } =
    useContext(AppContext);

  const selectLetter = () => {
    if (gameOver.gameOver) return;
    if (keyVal === "ENTER") {
      console.log("TEST");
      onEnter();
    } else if (keyVal === "DELETE") {
      onDelete();
    } else {
      console.log(keyVal);
      onSelectLetter(keyVal);
    }
  };
  return (
    <div
      className="key w-14 h-14 m-1 pl-6 pr-6 pt-3 text-white font-semibold border-2 rounded-xl flex justify-center bg-gray-600"
      id={bigKey ? "big" : disabled && "disabled"}
      onClick={selectLetter}>
      {keyVal}
    </div>
  );
}
