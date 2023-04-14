import mongoose from "mongoose";

const HighscoreTemplate = mongoose.model("HighscoreTemplate", {
  name: String,
  guesses: Number,
  time: Number,
  score: Number,
  wordLength: Number,
  duplicate: Boolean,
});

export default HighscoreTemplate;
