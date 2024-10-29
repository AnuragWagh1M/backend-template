import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const dbConnect = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log("DB connected successfully");
    return connectionInstance;
  } catch (error) {
    console.log("connection to db failed", error);
    process.exit(1);
  }
};

export default dbConnect;

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
