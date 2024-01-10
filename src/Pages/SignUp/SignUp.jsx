import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css'


const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleLoginInClick = () => {
    // Navigate to the signup page
    navigate('/');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if password is not empty
    if (formData.password.trim() === '') {
      setErrorMessage('Password is required');
      return;
    }

    try {
      const response = await fetch('http://127.0.0.1:5000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Specify JSON content type
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data); // Handle success response
        setErrorMessage('');
      } else {
        const errorData = await response.json();
        console.error(errorData); // Handle error response
        setErrorMessage(errorData.message || 'An error occurred');
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('An error occurred');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Sign Up</button>
      </form>
      <button onClick={handleLoginInClick}>Go to Login</button>

      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
};

export default Signup;
