import getSessionTime from "./getSessionTime.js";
import calculateScore from "./calculateScore.js";

export default async function handleScore(
  startTime,
  endTime,
  guesses,
  wordLength
) {
  const sessionTime = await getSessionTime(startTime, endTime);
  const score = calculateScore(sessionTime, guesses, wordLength);

  return score;
}
