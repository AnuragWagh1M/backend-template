import dotenv from "dotenv"; //as we want to configure our env variables as soon as the server starts
import dbConnect from "./db/dbconnect.js";
import app from "./app.js";

dotenv.config({
  path: "./env",
});

dbConnect()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running on port: ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("CONNECTION TO DB FAILED", error);
  });
