import React, { useState } from "react";
import Duration from "./Duration";

const JobHistory = () => {
  const [jobHistory, setJobHistory] = useState([
    { job: "", employer: "", city: "", start: "", end: "" },
  ]);

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
            <label>תפקיד</label>
            <input type="text" name="job"></input>
          </div>
          <div>
            <label> מעסיק</label>
            <input type="text" name="job"></input>
          </div>
        </div>
        <div className="row">
          <div>
            <label>עיר</label>
            <input type="text" name="city"></input>
          </div>
          <Duration />
        </div>
      </div>
    </div>
  );
};

export default JobHistory;
