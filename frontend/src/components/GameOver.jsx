import React, { useState } from "react";

export default function GameOver({
  correctWord,
  isWin,
  guesses,
  duplicate,
  startTime,
  endTime,
}) {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  async function handleSubmit(e) {
    e.preventDefault();
    const name = e.target.input.value;
    const wordLength = correctWord.length;

    let duplicateRefactor;

    if (duplicate === true) {
      duplicateRefactor = "Yes";
    } else if (duplicate === false) {
      duplicateRefactor = "No";
    }

    const data = {
      name,
      correctWord,
      wordLength,
      duplicateRefactor,
      guesses,
      startTime,
      endTime,
    };

    const res = await fetch("/api/highscore", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data }),
    });

    const { error = "", success = "" } = await res.json();
    setError(error);
    setSuccess(success);
  }

  if (isWin) {
    return (
      <div className="fixed inset-0 top-40 mt-0 ml-auto mr-auto w-3/5 h-2/5 justify-center">
        <div className="p-2 rounded-xl bg-white text-center shadow-xl shadow-black ">
          <h1 className="text-center font-semibold text-6xl text-gray-700 ">
            You Win!
          </h1>
          <p className="text-3xl text-gray-700 p-2">Correct Word:</p>
          <p className="text-4xl text-gray-700 p-2 font-bold underline">
            {correctWord.toUpperCase()}
          </p>
          {success && <p className="text-3xl text-green-700 p-2">{success}</p>}
          {error && <p className="text-3xl text-red-700 p-2"> {error}</p>}

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
                  id="input"
                  required></input>
              </div>
              <button
                className="flex border-2 text-4xl p-2 mt-4 mb-4 ml-auto mr-auto bg-gray-700 text-white rounded-2xl shadow-md shadow-black hover:opacity-50"
                type="submit">
                SUBMIT SCORE
              </button>
            </form>
          </div>
          <div>
            <h1 className="text-3xl text-gray-700 p-2">Play again?</h1>
            <button
              className="flex border-2 text-4xl p-2 mt-4 mb-4 ml-auto mr-auto bg-gray-700 text-white rounded-2xl shadow-md shadow-black hover:opacity-50"
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
        <div className="p-2 rounded-xl bg-white text-center shadow-xl shadow-black">
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
              className="flex border-2 text-4xl p-2 mt-4 mb-4 ml-auto mr-auto bg-gray-700 text-white rounded-2xl hover:opacity-50 "
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
