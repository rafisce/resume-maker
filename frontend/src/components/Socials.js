import React, { useState } from "react";

const Socials = () => {
  const [network, setNetwork] = useState([{ name: "", link: "" }]);

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
            <label>שם</label>
            <input type="text" name="LinkName"></input>
          </div>
          <div>
            <label> קישור</label>
            <input type="text" name="link"></input>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Socials;
