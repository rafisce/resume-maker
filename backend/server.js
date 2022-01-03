import express from "express";
import mongoose from "mongoose";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = "mongodb://localhost/resume-maker";
mongoose
  .connect(process.env.MONGODB_URL || db)
  .then(() => console.log("database connected successfully"))
  .catch((err) => console.log("database error: " + err));

const port = process.env.port || 5000;
app.listen(port, () => {
  console.log(`Serve at http://localhost:` + port);
});
