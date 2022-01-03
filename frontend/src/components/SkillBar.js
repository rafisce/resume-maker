import React, { useEffect, useState } from "react";

const SkillBar = () => {
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

  return (
    <div>
      <div className="levels">
        <div className="step"></div>
      </div>
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
  );
};

export default SkillBar;
