import express from "express";
import { engine } from "express-handlebars";
import mongoose from "mongoose";

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

export default app;
