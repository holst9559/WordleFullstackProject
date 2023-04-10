import React, { useState } from "react";
//import { AppContext } from "../App";

export default function GuessInput(onGuess) {
  const [text, setText] = useState("");

  return (
    <div>
      <form
        className="guess-form flex justify-center"
        onSubmit={(e) => {
          e.preventDefault();
          onGuess.onGuess(text);
          e.target.reset();
        }}>
        <input
          className="guess-input text-black w-80 text-5xl"
          type="text"
          placeholder="Guess....."
          onChange={(e) => setText(e.target.value)}
          //minLength={length}
          //maxLength={length}
          required></input>
        <button
          className="guess-btn border-4 text-5xl ml-2 shadow-lg text-white"
          type="submit">
          GUESS
        </button>
      </form>
    </div>
  );
}
