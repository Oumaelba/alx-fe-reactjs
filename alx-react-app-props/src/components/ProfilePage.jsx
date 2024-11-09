// src/components/ProfilePage.jsx
import React from 'react';
import UserInfo from './UserInfo';

function ProfilePage() {
  return (
    <div>
      <h2>Profile Page</h2>
      <UserInfo /> {/* No need to pass userData as a prop */}
    </div>
  );
}

export default ProfilePage;
