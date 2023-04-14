import getSessionTime from "./getSessionTime.js";
import highscoreTemplate from "../database/hsTemplate.js";
import calculateScore from "./calculateScore.js";

export default async function handleScore(data) {
  const name = data.name;
  const startTime = data.startTime;
  const endTime = data.endTime;
  const guesses = data.guesses;
  const wordLength = data.wordLength;
  const duplicate = data.duplicate;

  const sessionTime = await getSessionTime(startTime, endTime);
  const score = calculateScore(sessionTime, guesses, wordLength);
  /*
  const highScore = new highscoreTemplate({
    name,
    guesses,
    sessionTime,
    score,
    wordLength,
    duplicate,
  });

  */
}
