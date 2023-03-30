console.log("test");

import mongoose from "mongoose";

//await mongoose.connect("mongodb://127.0.0.1/myFirstDatabase");

const Score = mongoose.model("Score", {
  name: String,
  points: Number,
  timeLeft: Number,
});

async function run() {
  const conn = await mongoose.connect("mongodb://127.0.0.1:27017/Cluster0");

  const score = new Score({
    name: "Anton",
    points: "22",
    limeLeft: "21",
  });

  await score.save();

  const scores = await Score.find();
  console.log(scores);

  conn.disconnect();
}
run();

/*
const highscores = new Schema({
  name: "Anton",
  score: "50",
  timeLeft: "0.12",
});

const Task = mongoose.model("Task", {
  name: String,
  score: Number,
  timeLeft: Number,
});

export { Task };
*/
