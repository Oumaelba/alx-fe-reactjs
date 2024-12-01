import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // To access dynamic params from the URL

const BlogPost = () => {
  const { id } = useParams(); // Get the dynamic "id" parameter from the URL
  const [post, setPost] = useState(null);

  useEffect(() => {
    // Fetch the blog post data using the dynamic "id"
    const fetchPost = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const data = await response.json();
        setPost(data);
      } catch (error) {
        console.error("Error fetching the blog post:", error);
      }
    };

    fetchPost();
  }, [id]); // Re-run the fetch when the "id" changes

  if (!post) {
    return <div>Loading...</div>; // Loading state while fetching data
  }

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

export default BlogPost;