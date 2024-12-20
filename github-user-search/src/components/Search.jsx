import React, { useState } from 'react';
import { fetchAdvancedUserData } from '../services/githubService';

function Search() {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState(0);
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);  // Reset the error message on each search attempt
    setUserData([]);  // Clear previous user data

    try {
      const data = await fetchAdvancedUserData(username, location, minRepos, page);
      setUserData(data.items);
    } catch (err) {
      setError('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const loadMoreResults = async () => {
    setPage(page + 1);
    setLoading(true);
    try {
      const data = await fetchAdvancedUserData(username, location, minRepos, page + 1);
      setUserData([...userData, ...data.items]);
    } catch (err) {
      setError('An error occurred while loading more results.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search-container max-w-4xl mx-auto p-4">
      <form onSubmit={handleSubmit} className="search-form space-y-4">
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">GitHub Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter GitHub username"
          />
        </div>

        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter location (optional)"
          />
        </div>

        <div>
          <label htmlFor="minRepos" className="block text-sm font-medium text-gray-700">Minimum Repositories</label>
          <input
            type="number"
            id="minRepos"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter minimum repository count"
          />
        </div>

        <button type="submit" className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md">
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <div className="mt-8">
        {userData.length > 0 ? (
          userData.map((user) => (
            <div key={user.id} className="user-info mb-4 p-4 border border-gray-300 rounded-md">
              <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
              <h2 className="text-xl">{user.login}</h2>
              <p>Location: {user.location || 'Not provided'}</p>
              <p>Repositories: {user.public_repos}</p>
              <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                View Profile
              </a>
            </div>
          ))
        ) : (
          <p>No users found based on your criteria.</p>
        )}

        {userData.length > 0 && (
          <button
            onClick={loadMoreResults}
            className="mt-4 bg-green-500 text-white py-2 px-4 rounded-md"
          >
            Load More
          </button>
        )}
      </div>
    </div>
  );
}

export default Search;
