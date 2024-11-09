// src/components/UserInfo.jsx
import React from 'react';
import UserDetails from './UserDetails';

function UserInfo() {
  return (
    <div>
      <h3>User Info</h3>
      <UserDetails /> {/* No need to pass userData as a prop */}
    </div>
  );
}

export default UserInfo;
