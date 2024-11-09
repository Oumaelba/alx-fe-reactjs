// src/components/UserInfo.jsx
import UserDetails from './UserDetails'; // Import UserDetails

function UserInfo() {
  return (
    <div>
      <UserDetails /> {/* No need to pass userData as prop */}
    </div>
  );
}

export default UserInfo;
