import React, { useState } from 'react';
import axios from 'axios';

function LoginSignupForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [message, setMessage] = useState('');

  const getProfile = async () => {
    const token = localStorage.getItem('token');
    try {
      const res = await axios.get('/api/profile', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      alert(JSON.stringify(res.data));
    } catch (err) {
      alert('Access denied');
    }
  };


  const toggleForm = () => {
    setIsLogin(!isLogin);
    setFormData({ name: '', email: '', password: '' });
    setMessage('');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    const endpoint = isLogin ? '/api/auth/login' : '/api/auth/signup';
    const payload = isLogin
      ? {
        email: formData.email,
        password: formData.password
      }
      : {
        name: formData.name,
        email: formData.email,
        password: formData.password
      };

    try {
      const response = await axios.post(endpoint, payload);
      console.log('Response:', response.data);

      setMessage(response.data.message || 'Success');

      if (response.data.token) {
        // Save token (localStorage for demo)
        localStorage.setItem('token', response.data.token);
        // Optionally save user info, redirect, etc.
      }
    } catch (error) {
      console.error('API error:', error);
      if (error.response && error.response.data) {
        setMessage(error.response.data.message);
      } else {
        setMessage('Server error or network issue');
      }
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto' }}>
      <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
        )}
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
      </form>

      {message && (
        <p style={{ color: 'green' }}>{message}</p>
      )}

      <p>
        {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
        <button
          type="button"
          onClick={toggleForm}
          style={{ color: 'blue', background: 'none', border: 'none', cursor: 'pointer' }}
        >
          {isLogin ? 'Sign Up' : 'Login'}
        </button>

        <button onClick={getProfile} style={{ marginTop: '10px' }}>
          Get Protected Profile
        </button>

      </p>
    </div>
  );
}

export default LoginSignupForm;
