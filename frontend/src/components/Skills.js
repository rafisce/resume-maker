import React, { useState } from "react";

const Skills = () => {
  const [skill, setSkill] = useState("");
  const [level, setLevel] = useState({
    level1: "active",
    level2: "",
    level3: "",
    level4: "",
    level5: "",
  });

  const moveStep = (level) => {
    if (level === 1) {
      setLevel({
        level1: "active",
        level2: "",
        level3: "",
        level4: "",
        level5: "",
      });
    } else if (level === 2) {
      setLevel({
        level1: "active",
        level2: "active",
        level3: "",
        level4: "",
        level5: "",
      });
    } else if (level === 3) {
      setLevel({
        level1: "active",
        level2: "active",
        level3: "active",
        level4: "",
        level5: "",
      });
    } else if (level === 4) {
      setLevel({
        level1: "active",
        level2: "active",
        level3: "active",
        level4: "active",
        level5: "",
      });
    } else if (level === 5) {
      setLevel({
        level1: "active",
        level2: "active",
        level3: "active",
        level4: "active",
        level5: "active",
      });
    }
  };

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
            <div className="levels">
              <div
                className={level.level1 === "active" ? "active" : ""}
                onClick={() => moveStep(1)}
              />
              <div
                className={level.level2 ? "active" : ""}
                onClick={() => moveStep(2)}
              />
              <div
                className={level.level3 ? "active" : ""}
                onClick={() => moveStep(3)}
              />
              <div
                className={level.level4 ? "active" : ""}
                onClick={() => moveStep(4)}
              />
              <div
                className={level.level5 ? "active" : ""}
                onClick={() => moveStep(5)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
