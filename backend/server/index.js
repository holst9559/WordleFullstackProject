import express from "express";
import mongoose from "mongoose";
import { Task } from "../database/mongoDB.js";

const app = express();

app.use(express.json());
app.use(express.static("../frontend/build"));
