import React, { useEffect, useState } from "react";

const JobHistory = (props) => {
  const [job, setJob] = useState("");
  const [employer, setEmployer] = useState("");
  const [city, setCity] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  const [isOpen, setIsOpen] = useState(true);

  const updateJob = () => {};
  const check = () => {
    console.log("job history");
  };

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
            <input type="text" name="job" onBlur={updateJob}></input>
          </div>
          <div>
            <label> מעסיק</label>
            <input type="text" name="employer" onBlur={updateJob}></input>
          </div>
        </div>
        <div className="row">
          <div>
            <label>עיר</label>
            <input type="text" name="city" onBlur={updateJob}></input>
          </div>
          <div className="row duration">
            <div>
              <label>התחלה</label>
              <input
                type="number"
                min="1900"
                max="2099"
                step="1"
                value="2000"
                onChange={(e) => setStart(e.target.value)}
                onBlur={updateJob}
              />
            </div>
            <div>
              <label>סיום</label>

              <input
                type="number"
                min="1900"
                max="2099"
                step="1"
                value="2000"
                onChange={(e) => setEnd(e.target.value)}
                onBlur={updateJob}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobHistory;
