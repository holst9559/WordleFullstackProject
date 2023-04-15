export default function randomWord(wordList) {
  let randomResult = Math.floor(Math.random() * wordList.length);
  const result = { word: wordList[randomResult] };

  if (result.word == undefined) {
    return "Error! No matching words, try again with different variables";
  } else {
    return result;
  }
}
