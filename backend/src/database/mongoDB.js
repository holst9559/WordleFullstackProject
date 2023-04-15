import mongoose from "mongoose";

const uri =
  "mongodb+srv://AntonHolst:paj11paj12elit@wordledatabase.2vinsju.mongodb.net/?retryWrites=true&w=majority";

export default async function connect() {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error);
  }
}
