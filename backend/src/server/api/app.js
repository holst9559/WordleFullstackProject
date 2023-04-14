import express from "express";
import { engine } from "express-handlebars";
import fetchWordList from "../../controllers/fetchWordList.js";
import randomWord from "../../controllers/randomWord.js";
import guessingGame from "../../controllers/guessingGame.js";
import initGrid from "../../controllers/gameBoard.js";
import handleScore from "../../controllers/handleScore.js";
import HighscoreTemplate from "../../database/hsTemplate.js";
import getSessionTime from "../../controllers/getSessionTime.js";

// import { Task } from "../database/mongoDB.js";
const app = express();

app.engine("handlebars", engine());
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.static("../frontend/dist"));

app.get("/highscores", async (req, res) => {
  const highscores = await HighscoreTemplate.find();

  highscores.sort((a, b) => {
    return b.score - a.score;
  });
  res.render("highscores", {
    highscores: highscores.map((entry) => entry.toObject()),
  });
});

app.get("/info", (req, res) => {
  res.render("info");
});

app.post("/api/guess", (req, res) => {
  const guess = req.body.dataSend.guess;
  const correctWord = req.body.dataSend.correctWord;

  const results = guessingGame(guess, correctWord);

  res.status(200).send(results);
});

app.post("/api/secret", async (req, res) => {
  const wordLength = parseInt(req.query.wordLength);
  const duplicate = req.query.duplicate;

  const wordList = await fetchWordList(wordLength, duplicate);

  const secretWord = randomWord(wordList);
  const results = initGrid(5, wordLength);
  res.status(200);

  res.json({
    secretWord,
    results,
  });
});

app.post("/api/highscore", async (req, res) => {
  const dataHighscore = req.body.data;

  const name = dataHighscore.name;
  const startTime = dataHighscore.startTime;
  const endTime = dataHighscore.endTime;
  const guesses = dataHighscore.guesses;
  const wordLength = dataHighscore.wordLength;
  const duplicate = dataHighscore.duplicate;

  if (!name) {
    res
      .status(400)
      .json({ error: "Could not post highscore, please enter a name!" });
    return;
  }

  const time = await getSessionTime(startTime, endTime);
  const score = await handleScore(startTime, endTime, guesses, wordLength);

  const highscore = new HighscoreTemplate({
    name,
    guesses,
    time,
    score,
    wordLength,
    duplicate,
  });

  try {
    await highscore.save();
  } catch (error) {
    res
      .status(500)
      .json({ error: "There was a problem posting your highscore" });
    return;
  }
  res.status(200).json({ success: "Highscore was succesfully posted" });
});

export default app;
