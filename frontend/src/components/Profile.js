import React from 'react'

const Profile = () => {
    return (
      <div className="profile">
        <h2>על עצמי</h2>
        <div>
          <label>
            ספר עצמך ב2-3 שורות
            <textarea rows={3}></textarea>
          </label>
        </div>
      </div>
    );
}

export default Profile
