import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

// Function to fetch posts
const fetchPosts = async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return response.data;
};

const PostsComponent = () => {
  // React Query useQuery hook
  const { data, error, isLoading, isError, refetch } = useQuery('posts', fetchPosts, {
    staleTime: 5000, // Cache data for 5 seconds
    refetchOnWindowFocus: false, // Prevent refetching when the window regains focus
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Posts</h2>
      <button onClick={() => refetch()}>Refetch Posts</button>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;