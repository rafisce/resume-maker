import React, { useState } from "react";

const Duration = () => {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  return (
    <div className="row duration">
      <div>
        <label>התחלה</label>
        <input
          type="number"
          min="1900"
          max="2099"
          step="1"
          value={end || "2000"}
          onChange={(e) => setEnd(e.target.value)}
        />
      </div>
      <div>
        <label>סיום</label>

        <input
          type="number"
          min="1900"
          max="2099"
          step="1"
          value={start || "2000"}
          onChange={(e) => setStart(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Duration;
