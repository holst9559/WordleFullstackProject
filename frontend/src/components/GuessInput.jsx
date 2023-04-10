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
          className="guess-input shadow-2xl text-black w-80 text-5xl rounded-2xl pl-1"
          type="text"
          placeholder="Guess....."
          onChange={(e) => setText(e.target.value)}
          //minLength={length}
          //maxLength={length}
          required></input>
        <button
          className="guess-btn border-4 shadow-2xl text-5xl font-semibold ml-2 text-gray-700 bg-white rounded-2xl hover:opacity-50"
          type="submit">
          GUESS
        </button>
      </form>
    </div>
  );
}
