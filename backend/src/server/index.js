import app from "./api/app.js";
import connect from "../database/mongoDB.js";

connect();
app.listen(5080),
  () => {
    console.log("Server started on port 5080");
  };
