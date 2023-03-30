import React, { useContext } from "react";
import algoA from "../../../backend/src/rules/guessingGame.js";
algoA();
function GameBoard() {
  return (
    <div className="board">
      <div className="row">
        <div className="letter"></div>
      </div>
    </div>
  );
}

export default GameBoard;
