import mongoose from "mongoose";
const { Schema } = mongoose;

const highscoreTemplate = new mongoose({
  name: {},
  guesses: {},
  time: {},
  score: {},
  settings: {
    wordLength: {},
    duplicate: {},
  },
});
