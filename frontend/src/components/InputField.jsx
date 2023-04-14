import React from "react";

export default function InputField(guessInput) {
  const guessArray = guessInput.guessInput;

  return (
    <div className="input-row board-row row flex flex-row ml-auto mr-auto max-w-fit bg-gray-800 gap-3 mt-20 ">
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
