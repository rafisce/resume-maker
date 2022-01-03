import React from "react";

const PersonalInfo = () => {
  return (
    <div className="personal-info">
      <h2 style={{ margrin: "25px" }}>פרטים אישיים</h2>
      <div className="row space">
        <div className="field">
          <label>שם</label>
          <input type="text" name="name" required></input>
        </div>
        <div className="field">
          <label> שם משפחה</label>
          <input type="text" name="lastName" required></input>
        </div>
      </div>
      <div className="row space">
        <div className="field">
          <label>אימייל</label>
          <input type="email" name="email" required></input>
        </div>
        <div className="field">
          <label> טלפון </label>
          <input type="tel" name="phone" required></input>
        </div>
      </div>
      <div className="row space">
        <div>
          <label>עיר</label>
          <input type="text" name="city" required></input>
        </div>
        <div>
          <label> כתובת</label>
          <input type="text" name="address" required></input>
        </div>
      </div>
      <div className="row space">
        <div>
          <label>תפקיד</label>
          <input type="text" name="job" required></input>
        </div>
        <div>
          <label> רישיון </label>
          <input type="text" name="licence" required></input>
        </div>
      </div>

      <div className="row space">
        <div>
          <label>תאריך לידה</label>
          <input type="text" name="birthdate" required></input>
        </div>
        <div>
          <label> שם משפחה</label>
          <input type="text" name="lastName" required></input>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
