import React from "react";

const Profile = () => {
  const updateProfile = () => {
    console.log("pr");
  };
  return (
    <div className="profile" style={{ paddng: "0 0 0 25px" }}>
      <h2>על עצמי</h2>
      <div>
        <label>ספר עצמך ב2-3 שורות</label>
        <textarea rows={3} onBlur={updateProfile}></textarea>
      </div>
    </div>
  );
};

export default Profile;
