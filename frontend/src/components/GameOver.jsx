import React, { useContext, useState } from "react";
import { AppContext } from "../App";

export default function GameOver({
  correctWord,
  isWin,
  guesses,
  score,
  gameRestart,
  onRestart,
  duplicate,
  gameTime,
}) {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const name = e.target.input.value;
    const wordLength = correctWord.length;

    const data = {
      name,
      correctWord,
      score,
      wordLength,
      duplicate,
      gameTime,
    };

    const res = await fetch("/api/highscore", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data }),
    });

    const dataRes = await res.json();
    console.log(dataRes);

    const { error = "", sucess = "" } = await res.json();
    setError(error);
    setSuccess(success);

    console.log(error);
    console.log(success);
  }

  if (isWin) {
    return (
      <div className="fixed inset-0 top-40 mt-0 ml-auto mr-auto w-3/5 h-2/5 justify-center ">
        <div className="p-2 rounded-xl bg-white text-center">
          <h1 className="text-center font-semibold text-6xl text-gray-700 ">
            You Win!
          </h1>
          <p className="text-3xl text-gray-700 p-2">Correct Word:</p>
          <p className="text-4xl text-gray-700 p-2 font-bold underline">
            {correctWord.toUpperCase()}
          </p>

          <div className="mt-5 mb-10">
            <h1 className="text-3xl text-gray-700 p-2">Save score?</h1>
            <form onSubmit={handleSubmit}>
              <label className="text-2xl text-gray-700 p-2" htmlFor="input">
                Full Name
              </label>
              <div>
                <input
                  className="bg-gray-200 rounded-xl w-80 h-14 border-2 border-black text-3xl text-gray-700 pl-2"
                  type="text"
                  id="input"></input>
              </div>
              <button
                className="flex border-2 text-4xl p-2 mt-4 mb-4 ml-auto mr-auto bg-gray-700 text-white rounded-2xl shadow-2xl hover:opacity-50"
                type="submit">
                SUBMIT SCORE
              </button>
            </form>
          </div>
          <div>
            <h1 className="text-3xl text-gray-700 p-2">Play again?</h1>
            <button
              className="flex border-2 text-4xl p-2 mt-4 mb-4 ml-auto mr-auto bg-gray-700 text-white rounded-2xl shadow-2xl hover:opacity-50"
              onClick={(e) => {
                window.location.reload();
              }}>
              RESTART
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="fixed inset-0 top-40 mt-0 ml-auto mr-auto w-3/5 h-2/5 justify-center ">
        <div className="p-2 rounded-xl bg-white text-center">
          <h1 className="text-center font-semibold text-6xl text-gray-700 ">
            You Lose!
          </h1>
          <p className="text-3xl text-gray-700 p-2">Correct Word:</p>
          <p className="text-4xl text-gray-700 p-2 font-bold">
            {correctWord.toUpperCase()}
          </p>

          <div>
            <h1 className="text-3xl text-gray-700 p-2">Try again?</h1>
            <button
              className="flex border-2 text-4xl p-2 mt-4 mb-4 ml-auto mr-auto bg-gray-700 text-white rounded-2xl shadow-2xl hover:opacity-50"
              onClick={(e) => {
                window.location.reload();
              }}>
              RESTART
            </button>
          </div>
        </div>
      </div>
    );
  }
}
