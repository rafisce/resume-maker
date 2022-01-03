import React, { useState } from "react";
import SkillBar from "./SkillBar";

const Skills = () => {
  const [skills, setSkills] = useState([{ name: "", stager: "" }]);

  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="collapsible-wrapper">
      <button
        type="button"
        className="opener"
        onClick={() => setIsOpen(!isOpen)}
      >
        <i
          className={
            isOpen
              ? "fa fa-chevron-down fliped"
              : "fa fa-chevron-down notfliped"
          }
          aria-hidden="true"
        ></i>
      </button>

      <div
        className="collapsible"
        style={{ maxHeight: isOpen ? "100vh" : "0" }}
      >
        <div className="row">
          <div>
            <label>מיומנות</label>
            <input type="text" name="skill"></input>
          </div>
          <div className="skillbar">
            <label>רמה</label>
            <SkillBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
