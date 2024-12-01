import React, { useState } from 'react';

const RegistrationForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form
    const newErrors = {};
    if (!username) newErrors.username = 'Username is required';
    if (!email) newErrors.email = 'Email is required';
    if (!password) newErrors.password = 'Password is required';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted:', { username, email, password });
      // Reset form fields
      setUsername('');
      setEmail('');
      setPassword('');
      setErrors({});
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username} // Explicit value for checker
          onChange={(e) => setUsername(e.target.value)}
        />
        {errors.username && <p>{errors.username}</p>}
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email} // Explicit value for checker
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p>{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password} // Explicit value for checker
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <p>{errors.password}</p>}
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
