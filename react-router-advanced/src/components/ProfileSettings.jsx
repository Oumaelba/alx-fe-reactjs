import React, { useState } from 'react';

const ProfileSettings = () => {
  const [username, setUsername] = useState('JohnDoe123');
  const [email, setEmail] = useState('johndoe@example.com');
  const [bio, setBio] = useState('Software Developer at TechCo.');

  const handleSave = () => {
    // Simulate saving updated data
    alert('Profile settings updated successfully!');
  };

  return (
    <div>
      <h3>Profile Settings</h3>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="bio">Bio:</label>
        <textarea
          id="bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
      </div>
      <button onClick={handleSave}>Save Changes</button>
    </div>
  );
};

export default ProfileSettings;