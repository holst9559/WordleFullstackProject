import React from "react";
//import { AppContext } from "../App";

export default function GameBoard(guessArray) {
  const array = guessArray.guessArray;
  const splitArray = [];

  array.forEach((guess) => {
    const split = guess.split("");
    splitArray.push(split);
  });
  return (
    <div className="bg-gray-800 max-h-screen max-w-screen mt-10 mb-20">
      <div className="flex flex-row ml-auto mr-auto max-w-fit bg-gray-800 gap-3 mb-3">
        <div className="letter h-16 w-16 border-2  text-white text-center text-5xl">
          {array.map((guess, index) => {
            if (index == 0) {
              return guess[0];
            }
          })}
        </div>
        <div className="letter h-16 w-16 border-2  text-white text-center text-5xl">
          {array.map((guess, index) => {
            if (index == 0) {
              return guess[1];
            }
          })}
        </div>
        <div className="letter h-16 w-16 border-2  text-white text-center text-5xl">
          {array.map((guess, index) => {
            if (index == 0) {
              return guess[2];
            }
          })}
        </div>
        <div className="letter h-16 w-16 border-2  text-white text-center text-5xl">
          {array.map((guess, index) => {
            if (index == 0) {
              return guess[3];
            }
          })}
        </div>
        <div className="letter h-16 w-16 border-2  text-white text-center text-5xl">
          {array.map((guess, index) => {
            if (index == 0) {
              return guess[4];
            }
          })}
        </div>
      </div>

      <div className="flex flex-row ml-auto mr-auto max-w-fit bg-gray-800 gap-3 mb-3">
        <div className="letter h-16 w-16 border-2  text-white text-center text-5xl">
          {array.map((guess, index) => {
            if (index == 1) {
              return guess[0];
            }
          })}
        </div>
        <div className="letter h-16 w-16 border-2  text-white text-center text-5xl">
          {array.map((guess, index) => {
            if (index == 1) {
              return guess[1];
            }
          })}
        </div>
        <div className="letter h-16 w-16 border-2  text-white text-center text-5xl">
          {array.map((guess, index) => {
            if (index == 1) {
              return guess[2];
            }
          })}
        </div>
        <div className="letter h-16 w-16 border-2  text-white text-center text-5xl">
          {array.map((guess, index) => {
            if (index == 1) {
              return guess[3];
            }
          })}
        </div>
        <div className="letter h-16 w-16 border-2  text-white text-center text-5xl">
          {array.map((guess, index) => {
            if (index == 1) {
              return guess[4];
            }
          })}
        </div>
      </div>

      <div className="flex flex-row ml-auto mr-auto max-w-fit bg-gray-800 gap-3 mb-3">
        <div className="letter h-16 w-16 border-2  text-white text-center text-5xl">
          {array.map((guess, index) => {
            if (index == 2) {
              return guess[0];
            }
          })}
        </div>
        <div className="letter h-16 w-16 border-2  text-white text-center text-5xl">
          {array.map((guess, index) => {
            if (index == 2) {
              return guess[1];
            }
          })}
        </div>
        <div className="letter h-16 w-16 border-2  text-white text-center text-5xl">
          {array.map((guess, index) => {
            if (index == 2) {
              return guess[2];
            }
          })}
        </div>
        <div className="letter h-16 w-16 border-2  text-white text-center text-5xl">
          {array.map((guess, index) => {
            if (index == 2) {
              return guess[3];
            }
          })}
        </div>
        <div className="letter h-16 w-16 border-2  text-white text-center text-5xl">
          {array.map((guess, index) => {
            if (index == 2) {
              return guess[4];
            }
          })}
        </div>
      </div>

      <div className="flex flex-row ml-auto mr-auto max-w-fit bg-gray-800 gap-3 mb-3">
        <div className="letter h-16 w-16 border-2  text-white text-center text-5xl">
          {array.map((guess, index) => {
            if (index == 3) {
              return guess[0];
            }
          })}
        </div>
        <div className="letter h-16 w-16 border-2  text-white text-center text-5xl">
          {array.map((guess, index) => {
            if (index == 3) {
              return guess[1];
            }
          })}
        </div>
        <div className="letter h-16 w-16 border-2  text-white text-center text-5xl">
          {array.map((guess, index) => {
            if (index == 3) {
              return guess[2];
            }
          })}
        </div>
        <div className="letter h-16 w-16 border-2  text-white text-center text-5xl">
          {array.map((guess, index) => {
            if (index == 3) {
              return guess[3];
            }
          })}
        </div>
        <div className="letter h-16 w-16 border-2  text-white text-center text-5xl">
          {array.map((guess, index) => {
            if (index == 3) {
              return guess[4];
            }
          })}
        </div>
      </div>

      <div className="flex flex-row ml-auto mr-auto max-w-fit bg-gray-800 gap-3 mb-3">
        <div className="letter h-16 w-16 border-2  text-white text-center text-5xl">
          {array.map((guess, index) => {
            if (index == 4) {
              return guess[0];
            }
          })}
        </div>
        <div className="letter h-16 w-16 border-2  text-white text-center text-5xl">
          {array.map((guess, index) => {
            if (index == 4) {
              return guess[1];
            }
          })}
        </div>
        <div className="letter h-16 w-16 border-2  text-white text-center text-5xl">
          {array.map((guess, index) => {
            if (index == 4) {
              return guess[2];
            }
          })}
        </div>
        <div className="letter h-16 w-16 border-2  text-white text-center text-5xl">
          {array.map((guess, index) => {
            if (index == 4) {
              return guess[3];
            }
          })}
        </div>
        <div className="letter h-16 w-16 border-2  text-white text-center text-5xl">
          {array.map((guess, index) => {
            if (index == 4) {
              return guess[4];
            }
          })}
        </div>
      </div>
    </div>
  );
}
