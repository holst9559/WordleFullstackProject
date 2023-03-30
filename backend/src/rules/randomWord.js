import duplicateLetters from "./duplicateLetters.js";

export default function algoB(
  wordListInput,
  wordLengthInput,
  repeatLetterInput
) {
  let wordList = wordListInput;
  let wordLength = wordLengthInput;
  let repeatLetter = repeatLetterInput;

  //Arrays to store words that match the length and
  //words that match the requirement for unique characters
  const wordArray = [];
  const uniqueArray = [];

  for (let i = 0; i < wordList.length; i++) {
    if (wordList[i].length == wordLength) {
      wordArray.push(wordList[i].toLowerCase());
    }
  }

  for (let i = 0; i < wordArray.length; i++) {
    if (repeatLetter == false) {
      if (duplicateLetters(wordArray[i]) !== repeatLetter) {
        uniqueArray.push(wordArray[i]);
      }
    } else {
      uniqueArray.push(wordArray[i]);
    }
  }

  let randomResult = Math.floor(Math.random() * uniqueArray.length);
  let resultArray = uniqueArray[randomResult];

  if (resultArray == null) {
    return "Error! No matching words, try again with different variables";
  } else {
    return resultArray;
  }
}
