import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './components/Profile'; // Import Profile component
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import BlogPost from './components/BlogPost';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="profile/*" element={<Profile />} />
        {/* Other routes can go here */}
        <Route path="/blog/:id" element={<BlogPost />} /> {/* Dynamic route for blog post */}
        <Route path="/login" element={<Login />} />

        <ProtectedRoute path="/profile" element={<Profile />} /> {/* Protect Profile route */}

      </Routes>
    </Router>
  );
};

export default App;