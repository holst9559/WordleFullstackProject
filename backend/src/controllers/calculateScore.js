export default function calculateScore(sessionTime, guesses, wordLength) {
  let score = 6000;
  score -= guesses * 1000;
  score -= sessionTime * 2;
  score += wordLength * 150;

  return Math.round(score);
}
