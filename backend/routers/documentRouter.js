import express from "express";
import expressAsyncHandler from "express-async-handler";
import ResDocument from "../models/documentModel.js";

const documentRouter = express.Router();

documentRouter.post(
  "/test",
  expressAsyncHandler(async (req, res) => {
    const doc = new ResDocument({
      personalInfo: req.body.personalInfo,
      profile: req.body.profile,
      education: req.body.education,
      jobHistory: req.body.jobHistory,
      skills: req.body.skills,
      Socials: req.body.Socials,
    });

    const createdDocument = await doc.save();

    res.send(createdDocument);
  })
);

documentRouter.put(
  "/test",
  expressAsyncHandler(async (req, res) => {
    const doc = await ResDocument.findById("61d4653c25d23d4174cf610a");

    if (doc) {
      //doc.updateOne({ $push: { skills: { skill: "tyut", level: "expert" } } });
      doc.skills.push({ skill: "fast", level: "expert" });
      doc.save();

      res.send(doc);
    }
  })
);

documentRouter.delete(
  "/test",
  expressAsyncHandler(async (req, res) => {
    const doc = await ResDocument.findById("61d4653c25d23d4174cf610a");

    if (doc) {
      doc.skills = [];
      doc.save();

      res.send(doc);
    }
  })
);

export default documentRouter;
