import React, { useEffet, useContext } from "react";
import { AppContext } from "../App";

export default function ResetPrompt({ gameRestart, onRestart }) {
  return (
    <div className="ml-auto mr-auto mt-10 mb-10 bg-gray-600 w-80 h-52 rounded-2xl border-white border-2">
      <div>
        <h1 className="flex text-white text-4xl font-semibold text-center pt-2">
          Reset needed to continue
        </h1>
      </div>
      <div>
        <button
          className="flex border-2 text-4xl p-1 mt-10 ml-auto mr-auto bg-gray-700 text-white rounded-2xl shadow-2xl hover:opacity-50"
          onClick={(e) => {
            gameRestart = false;
            onRestart(gameRestart);
          }}>
          RESTART
        </button>
      </div>
    </div>
  );
}
