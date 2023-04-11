import express from "express";
import wordsFetch from "../../controllers/ApiAdapter";

const app = express();

app.post("/api/settings", async (req, res) => {
  const settings = req.params;

  console.log(settings);

  res.status(200).json(settings);
});
