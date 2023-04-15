import React from "react";

export default function InputField(guessInput) {
  const guessArray = guessInput.guessInput;
  return (
    <div className="input-row board-row row relative flex flex-row ml-auto mr-auto max-w-fit bg-gray-800 gap-2 bottom-6">
      {guessArray.map((letter, index) => {
        return (
          <div
            key={index}
            className={`letter h-16 w-16 border-2  text-white text-center text-5xl tile`}>
            {letter.toLocaleUpperCase()}
          </div>
        );
      })}
    </div>
  );
}
