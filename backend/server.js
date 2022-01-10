import express from "express";
import mongoose from "mongoose";
import documentRouter from "./routers/documentRouter.js";
import userRouter from "./routers/userRouter.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = "mongodb://localhost/resume-maker";
mongoose
  .connect(process.env.MONGODB_URL || db)
  .then(() => console.log("database connected successfully"))
  .catch((err) => console.log("database error: " + err));

app.use("/api/users", userRouter);
app.use("/api/documents", documentRouter);

const port = process.env.port || 5000;
app.listen(port, () => {
  console.log(`Serve at http://localhost:` + port);
});
