import fs from "fs/promises";
import duplicateLetters from "./duplicateLetters.js";

export default async function fetchWordList(wordLength, duplicate) {
  const content = await fs.readFile(`./data/words_dictionary.json`);
  const data = JSON.parse(content.toString());

  const wordArray = data.words.filter((word) => word.length === wordLength);
  const uniqueArray = wordArray.filter((word) => duplicateLetters(word));

  if (duplicate === true) {
    return wordArray;
  } else {
    return uniqueArray;
  }
}
