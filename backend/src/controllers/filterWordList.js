import fs from "fs/promises";
import duplicateLetters from "./duplicateLetters.js";

export default async function filterWordList(wordList, wordLength, duplicate) {
  const data = wordList;

  const wordArray = data.words.filter((word) => word.length === wordLength);
  const uniqueArray = wordArray.filter((str) => duplicateLetters(str));

  if (duplicate === true) {
    return wordArray;
  } else {
    return uniqueArray;
  }
}
