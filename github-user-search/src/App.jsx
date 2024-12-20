import React, { useState } from 'react';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';

function App() {
  const [query, setQuery] = useState(null);

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">GitHub User Search</h1>
      <SearchForm onSearch={handleSearch} />
      {query && <SearchResults query={query} />}
    </div>
  );
}

export default App;
