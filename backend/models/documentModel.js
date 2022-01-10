import mongoose from "mongoose";

const documentSchema = mongoose.Schema(
  {
    name: { type: String, required: true, default: "ללא שם" },
    personalInfo: {
      firstName: { type: String },
      lastName: { type: String },
      email: { type: String },
      phone: { type: String },
      city: { type: String },
      address: { type: String },
    },
    profile: { type: String },
    education: [
      {
        institution: String,
        diploma: String,
        city: String,
        start: String,
        end: String,
      },
    ],
    jobHistory: [
      {
        job: String,
        employer: String,
        city: String,
        start: String,
        end: String,
      },
    ],
    skills: [{ skill: String, level: String }],
    Socials: [{ network: String, link: String }],
    createdAt: { type: Date },
  },
  {
    timestamps: true,
  }
);

const ResDocument = mongoose.model("ResDocument", documentSchema);
export default ResDocument;
