import React from 'react';
import { useQuery } from 'react-query';

// Fetch posts data
const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const PostsComponent = () => {
  // Use React Query's useQuery hook to fetch data with custom options
  const { data, error, isLoading, isError, refetch } = useQuery(
    'posts', 
    fetchPosts, 
    {
      // Cache the data for 5 minutes
      cacheTime: 5 * 60 * 1000, // 5 minutes in milliseconds
      
      // Mark data as fresh for 2 minutes
      staleTime: 2 * 60 * 1000, // 2 minutes in milliseconds

      // Disable refetch on window focus (default is true)
      refetchOnWindowFocus: false,

      // Keep previous data when fetching new data
      keepPreviousData: true,
    }
  );

  // Handle loading and error states
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2>Posts</h2>
      <button onClick={refetch}>Refetch Data</button>
      <ul>
        {data.map(post => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;