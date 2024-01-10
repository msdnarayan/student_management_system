import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'

const Login = ({ onLogin }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
   
  const handleSignupClick = () => {
    navigate('/signup');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data); 
        onLogin();
        navigate('/dashboard');
      } else {
        const errorData = await response.json();
        console.error(errorData); 
      }
    } catch (error) {
      console.error('Error:', error);
    }
    
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Login</button>
      </form>
      <button onClick={handleSignupClick}>Go to Signup</button>
   </div>
  );
};

export default Login;
