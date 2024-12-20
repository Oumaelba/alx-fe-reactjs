import React, { useState } from 'react';
import { fetchAdvancedSearchResults } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const handleLoadMore = async () => {
    // Implement pagination by appending to results
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResults([]);

    try {
      const query = { username, location, minRepos };
      const dataq = await fetchUserData(query);  // Call the correct function

      const data = await fetchAdvancedSearchResults(query);
      setResults(data.items || []);
    } catch (err) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <form onSubmit={handleSearch} className="bg-white p-4 rounded shadow-md">
        <h2 className="text-xl font-bold mb-4">Advanced GitHub User Search</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 border rounded"
            placeholder="Enter GitHub username"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Location</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full px-4 py-2 border rounded"
            placeholder="Enter location"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Minimum Repositories</label>
          <input
            type="number"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            className="w-full px-4 py-2 border rounded"
            placeholder="Enter minimum repositories"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Search
        </button>
      </form>

      {loading && <p className="mt-4 text-center">Loading...</p>}
      {error && <p className="mt-4 text-center text-red-500">{error}</p>}

      <div className="mt-6">
        {results.map((user) => (
          <div key={user.id} className="mb-4 p-4 border rounded">
            <img
              src={user.avatar_url}
              alt="User Avatar"
              className="w-16 h-16 rounded-full"
            />
            <h3 className="text-lg font-bold">{user.login}</h3>
            <p>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                View Profile
              </a>
            </p>
          </div>
        ))}
      </div>
      <button
  onClick={handleLoadMore}
  className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
>
  Load More
</button>
    </div>
  );
};

export default Search;