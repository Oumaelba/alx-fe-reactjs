import React from 'react';

const ProfileDetails = () => {
  return (
    <div>
      <h3>Profile Details</h3>
      <p>
        Here you can view and update your personal information, such as name, email, and bio.
      </p>
      {/* Sample profile data */}
      <div>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" value="JohnDoe123" disabled />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value="johndoe@example.com" disabled />
      </div>
      <div>
        <label htmlFor="bio">Bio:</label>
        <textarea id="bio" value="Software Developer at TechCo." disabled />
      </div>
      <button>Edit Profile</button>
    </div>
  );
};

export default ProfileDetails;