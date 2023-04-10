import React, { useContext } from "react";
//import { AppContext } from "../App";

function GameBoard() {
  return (
    <div className="bg-gray-800 max-h-screen max-w-screen mt-10 mb-20">
      <div className="flex flex-row ml-auto mr-auto max-w-fit bg-gray-800 gap-3 mb-3">
        <div className="letter h-16 w-16 border-2  text-white text-center text-5xl">
          K
        </div>
        <div className="letter h-16 w-16 border-2  text-white text-center text-5xl">
          A
        </div>
        <div className="letter h-16 w-16 border-2  text-white text-center text-5xl">
          F
        </div>
        <div className="letter h-16 w-16 border-2  text-white text-center text-5xl">
          F
        </div>
        <div className="letter h-16 w-16 border-2  text-white text-center text-5xl">
          E
        </div>
      </div>

      <div className="flex flex-row ml-auto mr-auto max-w-fit bg-gray-800 gap-3 mb-3">
        <div className="letter h-16 w-16 border-2  text-white text-center text-5xl">
          K
        </div>
        <div className="letter h-16 w-16 border-2  text-white text-center text-5xl">
          A
        </div>
        <div className="letter h-16 w-16 border-2  text-white text-center text-5xl">
          F
        </div>
        <div className="letter h-16 w-16 border-2  text-white text-center text-5xl">
          K
        </div>
        <div className="letter h-16 w-16 border-2  text-white text-center text-5xl">
          E
        </div>
      </div>
    </div>
  );
}

export default GameBoard;
