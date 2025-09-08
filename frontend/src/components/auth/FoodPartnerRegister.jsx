import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/auth.css';

const FoodPartnerRegister = () => {
  const [formData, setFormData] = useState({
    businessName: '',
    ownerName: '',
    email: '',
    phone: '',
    address: '',
    cuisineType: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const cuisineTypes = [
    'Indian', 'Chinese', 'Italian', 'Mexican', 'Thai', 'Japanese', 
    'American', 'Mediterranean', 'Fast Food', 'Desserts', 'Beverages', 'Other'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    
    if (!agreedToTerms) {
      alert('Please agree to the terms and conditions');
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      console.log('Food Partner registration data:', formData);
    }, 2000);
  };

  return (
    <div className="auth-container">
      <div className="auth-card" style={{ maxWidth: '500px' }}>
        <div className="auth-header">
          <div className="auth-logo">
            🏪
          </div>
          <h1 className="auth-title">Join as Partner</h1>
          <p className="auth-subtitle">Start your food delivery journey with us</p>
          <span className="auth-type">Food Partner</span>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="businessName" className="form-label">
              Restaurant/Business Name
            </label>
            <input
              type="text"
              id="businessName"
              name="businessName"
              value={formData.businessName}
              onChange={handleInputChange}
              className="form-input"
              placeholder="Enter your restaurant name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="ownerName" className="form-label">
              Owner/Manager Name
            </label>
            <input
              type="text"
              id="ownerName"
              name="ownerName"
              value={formData.ownerName}
              onChange={handleInputChange}
              className="form-input"
              placeholder="Enter owner/manager name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Business Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="form-input"
              placeholder="Enter your business email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone" className="form-label">
              Contact Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="form-input"
              placeholder="Enter your contact number"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="address" className="form-label">
              Restaurant Address
            </label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className="form-input"
              placeholder="Enter your restaurant address"
              rows="3"
              required
              style={{ resize: 'vertical', minHeight: '80px' }}
            />
          </div>

          <div className="form-group">
            <label htmlFor="cuisineType" className="form-label">
              Cuisine Type
            </label>
            <select
              id="cuisineType"
              name="cuisineType"
              value={formData.cuisineType}
              onChange={handleInputChange}
              className="form-input"
              required
            >
              <option value="">Select cuisine type</option>
              {cuisineTypes.map((cuisine) => (
                <option key={cuisine} value={cuisine}>
                  {cuisine}
                </option>
              ))}
            </select>
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
                placeholder="Create a password"
                required
                minLength="8"
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

          <div className="form-group">
            <label htmlFor="confirmPassword" className="form-label">
              Confirm Password
            </label>
            <div className="password-input-container">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className="form-input"
                placeholder="Confirm your password"
                required
                minLength="8"
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
              >
                {showConfirmPassword ? '👁️' : '👁️‍🗨️'}
              </button>
            </div>
          </div>

          <div className="form-group">
            <label className="checkbox-group">
              <input
                type="checkbox"
                checked={agreedToTerms}
                onChange={(e) => setAgreedToTerms(e.target.checked)}
              />
              <span className="form-label">
                I agree to the{' '}
                <Link to="/partner-terms" className="auth-link">
                  Partner Terms and Conditions
                </Link>{' '}
                and{' '}
                <Link to="/privacy" className="auth-link">
                  Privacy Policy
                </Link>
                . I understand that my restaurant will be subject to verification.
              </span>
            </label>
          </div>

          <button
            type="submit"
            className="auth-submit"
            disabled={isLoading}
          >
            {isLoading && <span className="auth-loading"></span>}
            {isLoading ? 'Creating Account...' : 'Register as Partner'}
          </button>
        </form>

        <div className="auth-divider">
          <span>Already a partner?</span>
        </div>

        <div className="auth-links">
          <Link to="/food-partner/login" className="auth-link">
            Sign In to Partner Portal
          </Link>
        </div>

        <div className="auth-divider">
          <span>Different role?</span>
        </div>

        <div className="auth-links">
          <Link to="/user/register" className="auth-link">
            Register as Customer
          </Link>
        </div>

        <div className="auth-links" style={{ marginTop: '1rem' }}>
          <Link to="/user/login" className="auth-link auth-link-secondary">
            Already a Customer? Sign in here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodPartnerRegister;
