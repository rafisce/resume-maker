import React from "react";

import "react-mde/lib/styles/css/react-mde-all.css";
import Education from "../components/Education";
import JobHistory from "../components/JobHistory";
import PersonalInfo from "../components/PersonalInfo";
import Profile from "../components/Profile";
import Skills from "../components/Skills";
import Socials from "../components/Socials";
export const EditResumeScreen = () => {
  return (
    <div className="row editor">
      <div className="editor col">
        <form className="form">
          <PersonalInfo />
          <Profile />
          <JobHistory />
          <Education />
          <Socials />
          <Skills />
        </form>
      </div>
      <div className="preview col">jlkl</div>
    </div>
  );
};
