import "dotenv/config";
import mongoose from "mongoose";
const { DB_URI, PORT } = process.env;
import app from "./app.js";

mongoose.set("strictQuery", true);

mongoose
  .connect(DB_URI)
  .then(() => {
    app.listen(PORT, () => console.log("Database connection successful"));
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
