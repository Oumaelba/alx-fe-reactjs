import axios from 'axios';

// Function to fetch user data based on the username
export const fetchUserData = async (username) => {
  const response = await axios.get(`https://api.github.com/users/${username}`);
  return response.data;
};
