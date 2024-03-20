import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/log.css';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate(); 

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setError('');
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setError('');
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/staffs/login', { email, password });
      if (response.data.success) {
        // If credentials are correct, navigate to home page
        navigate('/home');
      } else {
        alert('Invalid email or password');
      }
    } catch (error) {
      // console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };
  
  return (
    <div className="log-fc">
      <div className="login-form-container">
        <h2>Admin Login</h2>
        <br />
        <form onSubmit={handleSubmit}>
          <div className='input'>
              <label>
                Email :
                <input type="email" value={email} onChange={handleEmailChange} required />
              </label>
              <br />
              <label>
                Password :
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={handlePasswordChange}
                  required
                />
              </label>
           </div>
          <br />
          <div className='check'>
            <input 
              type="checkbox"
              checked={showPassword}
              onChange={handleTogglePassword}
            /> Show password 
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" id='submit'>Login</button>
          <p>Don't have an account? <span onClick={() => navigate('/register')} style={{ cursor: 'pointer', textDecoration: 'underline' }}>Register</span></p>
        </form>
      </div>
    </div>
  );
};

export default Login;
