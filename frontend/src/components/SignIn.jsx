import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import './SignIn.css';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Auth0 hooks
  const { loginWithRedirect, logout, isAuthenticated, user, isLoading } = useAuth0();

  // Handle Google sign-in
  useEffect(() => {
    const storeGoogleUser = async () => {
      try {
        await axios.post('http://localhost:5000/auth/google/callback', {
          name: user.name,
          email: user.email,
          picture: user.picture,
        });
        navigate('/Mainpage');
      } catch (err) {
        console.error('Error saving Google user:', err);
      }
    };

    if (isAuthenticated && user) {
      storeGoogleUser();
    }
  }, [isAuthenticated, user, navigate]);

  // Handle email/password login
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', { email, password });
      alert(response.data.message || 'Sign-in successful');
      navigate('/', { replace: true });
    } catch (error) {
      alert('Error logging in: ' + (error.response?.data || 'Please try again'));
    }
  };

  return (
    <div className="SignIn-page">
      <h1>Sign in to Continue Your Learning Journey</h1>

      <form onSubmit={handleSubmit} className="login-form">
        <label>Email</label>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />

        <label>Password</label>
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />

        <button type="submit">Log In</button>
      </form>

      <div className="or-divider">OR</div>

      <div className="google-login">
        {!isAuthenticated ? (
          <button onClick={() => loginWithRedirect({ connection: 'google-oauth2' })}>
            Sign in with Google
          </button>
        ) : (
          <div className="profile-section">
            <p>Welcome, {user.name}</p>
            <img src={user.picture} alt="profile" />
            <button onClick={() => logout({ returnTo: window.location.origin })}>Log Out</button>
          </div>
        )}
      </div>

      <div className="signup-redirect">
        <p>
          Don't have an account?{' '}
          <span className="signup-link" onClick={() => navigate('/SignUp')}>
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
}

export default SignIn;
