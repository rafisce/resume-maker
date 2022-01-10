import { useState } from "react";

const Education = () => {
  const [institution, setInstitution] = useState("");
  const [diploma, setDiploma] = useState("");
  const [city, setCity] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  const updateEducation = () => {};

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
            <label>מוסד</label>
            <input
              type="text"
              name="institution"
              onBlur={updateEducation}
            ></input>
          </div>

          <div>
            <label> תואר/תעודה</label>
            <input type="text" name="diploma" onBlur={updateEducation}></input>
          </div>
        </div>

        <div className="row">
          <div>
            <label>עיר</label>
            <input type="text" name="city" onBlur={updateEducation}></input>
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
                onBlur={updateEducation}
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
                onBlur={updateEducation}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
