const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const URI = process.env.MONGO_CLOUD || "mongodb+srv://adminptgr:Q4QDclZOo8W2JAVr@hrisptgr.4arvm6s.mongodb.net/";

module.exports = () => {
  mongoose.connect(URI);

  const db = mongoose.connection;
  db.on("error", (e) => console.log(e));
  db.once("open", () => console.log("mongoose connection success"));
};


