// src/components/UserDetails.jsx
import { useContext } from 'react';
import { UserContext } from '../context/UserContext'; // Import UserContext

function UserDetails() {
  // Consume the userData from context
  const userData = useContext(UserContext);

  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserDetails;
