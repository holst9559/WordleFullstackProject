import { Schema, model } from "mongoose";

const highscoreTemplate = new Schema({
  name: {},
  guesses: {},
  time: {},
  score: {},
  wordLength: {},
  duplicate: {},
});

export default highscoreTemplate;
