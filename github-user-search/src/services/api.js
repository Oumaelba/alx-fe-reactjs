import axios from 'axios';

const GITHUB_API_BASE_URL = 'https://api.github.com';

const fetchGitHubUser = async (username) => {
  try {
    const response = await axios.get(`${GITHUB_API_BASE_URL}/users/${username}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching GitHub user:', error);
    throw error;
  }
};

export { fetchGitHubUser };