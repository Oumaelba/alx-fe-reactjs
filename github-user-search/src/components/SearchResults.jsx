import React, { useState, useEffect } from 'react';
import { fetchGitHubUsers } from './githubService';

function SearchResults({ query }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadUsers = async () => {
    setLoading(true);
    const results = await fetchGitHubUsers(query);
    setUsers(results);
    setLoading(false);
  };

  useEffect(() => {
    if (query) {
      loadUsers();
    }
  }, [query]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className="space-y-4">
          {users.map((user) => (
            <li key={user.id} className="border-b p-4">
              <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                <h3 className="text-xl font-semibold">{user.login}</h3>
              </a>
              <p>Location: {user.location || 'N/A'}</p>
              <p>Repositories: {user.public_repos}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchResults;
