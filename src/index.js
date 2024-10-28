import dotenv from "dotenv"; //as we want to configure our env variables as soon as the server starts
import dbConnect from "./db/dbconnect.js";
import express from "express";

//const app = express();
dotenv.config({
  path: "./env",
});
dbConnect();

/*
//creating a iffy function to connect to DB
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("Error:", (error) => {
      consol.log(error);
      throw error;
    });
    app.listen(process.env.PORT, () => {
      console.log(`The process is listening on port:${process.env.PORT}`);
    });
  } catch (error) {
    console.log("Error occured while connection to DB", error);
    throw error;
  }
})();
*/
