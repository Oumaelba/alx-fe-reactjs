import axios from 'axios';

const BASE_URL = 'https://api.github.com';

// Fetch user data by username
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching user data');
  }
};

// Fetch users with advanced search criteria
export const fetchAdvancedSearchResults = async ({ username, location, minRepos }) => {
  try {
    let query = '';
    if (username) query += `user:${username}`;
    if (location) query += ` location:${location}`;
    if (minRepos) query += ` repos:>${minRepos}`;

    const response = await axios.get(`https://api.github.com/search/users?q=${encodeURIComponent(query)}`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching advanced search results');
  }
};