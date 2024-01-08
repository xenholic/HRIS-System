import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();

const URI: string = process.env.MONGO_CLOUD;

export default () => {
  mongoose.connect(URI);

  const db = mongoose.connection;

  db.on("error", (e) => console.log(e));
  db.once("open", () => console.log("mongoose connection success"));
};


