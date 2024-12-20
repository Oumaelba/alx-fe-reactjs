import React, { useState } from 'react';

function SearchForm({ onSearch }) {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = {
      username,
      location,
      minRepos,
    };
    onSearch(query); // Trigger the search with the selected filters
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto bg-white shadow-md rounded-md">
      <div className="mb-4">
        <label htmlFor="username" className="block text-gray-700">Username</label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="Enter GitHub username"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="location" className="block text-gray-700">Location</label>
        <input
          id="location"
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="Enter location"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="minRepos" className="block text-gray-700">Minimum Repositories</label>
        <input
          id="minRepos"
          type="number"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="Enter minimum number of repositories"
        />
      </div>
      <button
        type="submit"
        className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
      >
        Search
      </button>
    </form>
  );
}

export default SearchForm;
