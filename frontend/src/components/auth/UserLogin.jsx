import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/auth.css';

const UserLogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      console.log('User login data:', formData);
    }, 2000);
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <div className="auth-logo">
            🍽️
          </div>
          <h1 className="auth-title">Welcome Back</h1>
          <p className="auth-subtitle">Sign in to your account</p>
          <span className="auth-type">User</span>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="form-input"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <div className="password-input-container">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="form-input"
                placeholder="Enter your password"
                required
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? '👁️' : '👁️‍🗨️'}
              </button>
            </div>
          </div>

          <div className="auth-links">
            <Link to="/user/forgot-password" className="auth-link auth-link-secondary">
              Forgot your password?
            </Link>
          </div>

          <button
            type="submit"
            className="auth-submit"
            disabled={isLoading}
          >
            {isLoading && <span className="auth-loading"></span>}
            {isLoading ? 'Signing In...' : 'Sign In'}
          </button>
        </form>

        <div className="auth-divider">
          <span>Don't have an account?</span>
        </div>

        <div className="auth-links">
          <Link to="/user/register" className="auth-link">
            Create User Account
          </Link>
        </div>

        <div className="auth-divider">
          <span>Different role?</span>
        </div>

        <div className="auth-links">
          <Link to="/food-partner/login" className="auth-link">
            Sign in as Food Partner
          </Link>
        </div>

        <div className="auth-links" style={{ marginTop: '1rem' }}>
          <Link to="/food-partner/register" className="auth-link auth-link-secondary">
            New Food Partner? Register here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
