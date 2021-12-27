import React from "react";

const PersonalInfo = () => {
  return (
    <div className="personal-info">
      <h2>פרטים אישיים</h2>
      <div className="row">
        <label>
          שם
          <input type="text" name="name" required></input>
        </label>
        <label>
          שם משפחה
          <input type="text" name="lastName" required></input>
        </label>
      </div>
      <div className="row">
        <label>
          אימייל
          <input type="email" name="email"></input>
        </label>
        <label>
          טלפון
          <input type="tel" name="phone" required></input>
        </label>
      </div>
      <div className="row">
        <label>
          עיר
          <input type="text" name="job"></input>
        </label>
        <label>
          כתובת
          <input type="text" name="phone"></input>
        </label>
      </div>
      <div className="row">
        <label>
          תפקיד
          <input type="text" name="job"></input>
        </label>
        <label>
          רישיון נהיגה
          <input type="text" name="license"></input>
        </label>
      </div>

      <div className="row">
        <label>
          תאריך לידה
          <input
            style={{
              display: "block",
              boxSizing: "border-box",
              width: "100%",
            }}
            type="date"
            name="birthdate"
          ></input>
        </label>
        <label>
          תמונה
          <input type="text" name="license"></input>
        </label>
      </div>
    </div>
  );
};

export default PersonalInfo;
