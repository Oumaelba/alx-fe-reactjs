import axios from 'axios';

export const fetchAdvancedUserData = async (username, location, minRepos) => {
  const query = `${username} location:${location} repos:>=${minRepos}`;
  try {
    const response = await axios.get(`https://api.github.com/search/users?q=${query}`);
    return response.data.items;
  } catch (error) {
    throw error; // Will be caught in the component
  }
};
