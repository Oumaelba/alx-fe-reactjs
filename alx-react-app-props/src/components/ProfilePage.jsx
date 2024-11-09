// src/components/ProfilePage.jsx
import UserInfo from './UserInfo';  // Import UserInfo component

function ProfilePage() {
  return (
    <div>
      <UserInfo />  {/* UserInfo now consumes context */}
    </div>
  );
}

export default ProfilePage;
