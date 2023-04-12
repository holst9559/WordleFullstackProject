import express from "express";
import { engine } from "express-handlebars";
import mongoose from "mongoose";
import fetchWordList from "../../controllers/fetchWordList.js";
import randomWord from "../../controllers/randomWord.js";
import guessingGame from "../../controllers/guessingGame.js";

// import { Task } from "../database/mongoDB.js";
const app = express();

app.engine("handlebars", engine());
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.static("../frontend/dist"));

app.get("/highscores", (req, res) => {
  res.render("highscores");
});

app.get("/info", (req, res) => {
  res.render("info");
});

app.post("/api/guess", (req, res) => {
  const guess = req.body.dataSend.guessInput.join("").toString();
  const correctWord = req.body.dataSend.correctWord;
  const results = guessingGame(guess, correctWord);
  res.status(200).send(results);
});

app.post("/api/secret", async (req, res) => {
  const wordLength = req.body.settings.wordLength;
  const duplicate = req.body.settings.checked;
  const wordList = await fetchWordList(wordLength, duplicate);

  const secretWord = randomWord(wordList);
  res.status(200).send(secretWord);
});

export default app;
