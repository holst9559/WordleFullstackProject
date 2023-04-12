import { guessObject } from "./guessObject.js";

const answerInput = "Kaffe";
const guessInput = "Affke";

export default function guessingGame(guessInput, answerInput) {
  const resultArray = [new Array(guessInput.length)];

  const guess = guessInput.toLowerCase();
  const answer = answerInput.toLowerCase();

  const guessArray = guess.split("");
  const answerArray = answer.split("");

  const internalArray = [];

  if (guessInput.length !== answerInput.length) {
    return Error(
      "Input is not the correct length, write a word containing 5 letters"
    );
  }

  //Loop to check if the position of the guess matches the answer
  for (let i = 0; i < answerArray.length; i++) {
    resultArray[i] = new guessObject(guessArray[i], "Incorrect");

    //Checks if there is an exact match and adds the correct result
    if (guessArray[i] === answerArray[i]) {
      resultArray[i].result = "Correct";
    }

    let internalResult = guessArray[i];
    internalArray.push(internalResult);
  }

  //Loops over the interalArray to see if
  //any of the letters and misplaced or not
  let duplicateCounter = 0;
  let matchCounter = 0;

  for (let i = 0; i < internalArray.length; i++) {
    if (answerArray.includes(internalArray[i])) {
      resultArray.forEach((letter) => {
        if (letter.letter == guessArray[i]) {
          duplicateCounter++;
        }
      });

      resultArray.forEach((result) => {
        if (result.letter == guessArray[i] && result.result == "Correct") {
          matchCounter++;
        }
      });

      if (matchCounter < duplicateCounter && matchCounter == 0) {
        resultArray[i].result = "Misplaced";
      }
    }
    duplicateCounter = 0;
    matchCounter = 0;
  }

  console.log(resultArray);
  return resultArray;
}
