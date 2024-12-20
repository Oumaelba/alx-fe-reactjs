const fetchGitHubUsers = async (query) => {
  const { username, location, minRepos } = query;
  let apiUrl = `https://api.github.com/search/users?q=${username}`;

  // Add location filter if available
  if (location) {
    apiUrl += `+location:${location}`;
  }

  // Add minRepos filter if available
  if (minRepos) {
    apiUrl += `+repos:>=${minRepos}`;
  }

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data.items;
  } catch (error) {
    console.error('Error fetching GitHub users:', error);
    return [];
  }
};

export { fetchGitHubUsers };
