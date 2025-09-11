import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/auth.css';

const FoodPartnerForgetPassword = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      console.log('Partner password reset requested for email:', email);
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <div className="auth-container">
        <div className="auth-card">
          <div className="auth-header">
            <div className="auth-logo">
              📧
            </div>
            <h1 className="auth-title">Check Your Email</h1>
            <p className="auth-subtitle">We've sent you a password reset link</p>
            <span className="auth-type">Food Partner</span>
          </div>

          <div className="auth-message success">
            <p>
              If a partner account with the email <strong>{email}</strong> exists, 
              you will receive a password reset link shortly.
            </p>
            <p style={{ marginTop: 'var(--spacing-md)' }}>
              Please check your business email and follow the instructions to reset your password.
            </p>
          </div>

          <div className="auth-links">
            <Link to="/food-partner/login" className="auth-link">
              Back to Partner Login
            </Link>
          </div>

          <div className="auth-links" style={{ marginTop: '1rem' }}>
            <Link to="/food-partner/register" className="auth-link auth-link-secondary">
              New to our platform? Register as Partner
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <div className="auth-logo">
            🔒
          </div>
          <h1 className="auth-title">Forgot Password?</h1>
          <p className="auth-subtitle">No worries, we'll send you reset instructions</p>
          <span className="auth-type">Food Partner</span>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Business Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-input"
              placeholder="Enter your business email address"
              required
            />
          </div>

          <div className="auth-message" style={{ 
            background: 'rgba(255, 107, 53, 0.1)', 
            color: 'var(--primary-color)', 
            border: '1px solid rgba(255, 107, 53, 0.2)' 
          }}>
            <p>
              Enter the business email address associated with your partner account and we'll send you a link to reset your password.
            </p>
          </div>

          <button
            type="submit"
            className="auth-submit"
            disabled={isLoading}
          >
            {isLoading && <span className="auth-loading"></span>}
            {isLoading ? 'Sending...' : 'Send Reset Link'}
          </button>
        </form>

        <div className="auth-divider">
          <span>Remember your password?</span>
        </div>

        <div className="auth-links">
          <Link to="/fpartner/login" className="auth-link">
            Back to Partner Login
          </Link>
        </div>

        <div className="auth-links" style={{ marginTop: '1rem' }}>
          <Link to="/fpartner/register" className="auth-link auth-link-secondary">
            New to our platform? Register as Partner
          </Link>
        </div>

        <div className="auth-divider">
          <span>Different role?</span>
        </div>

        <div className="auth-links">
          <Link to="/user/forgot-password" className="auth-link">
            Reset Customer Password
          </Link>
        </div>

        <div className="auth-links" style={{ marginTop: '1rem' }}>
          <Link to="/user/login" className="auth-link auth-link-secondary">
            Customer Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodPartnerForgetPassword;
