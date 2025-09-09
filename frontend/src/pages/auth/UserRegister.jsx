import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/auth.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserRegister = () => {
  const navigate = useNavigate();

  // const [formData, setFormData] = useState({
  //   firstName: '',
  //   lastName: '',
  //   email: '',
  //   phone: '',
  //   password: '',
  //   confirmPassword: ''
  // });
  // const [showPassword, setShowPassword] = useState(false);
  // const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);
  // const [agreedToTerms, setAgreedToTerms] = useState(false);

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData(prev => ({
  //     ...prev,
  //     [name]: value
  //   }));
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const response = await axios.post(
      "http://localhost:3000/api/auth/user/register",
      {
        fullName: firstName + " " + lastName,
        email,
        password,
      },
      {
        withCredentials: true,
      }
    );

    console.log(response.data);

    navigate("/");
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <div className="auth-logo">🍽️</div>
          <h1 className="auth-title">Create Account</h1>
          <p className="auth-subtitle">
            Join us and start ordering delicious food
          </p>
          <span className="auth-type">User</span>
        </div>

        <form className="auth-form" onSubmit={handleSubmit} noValidate>
          <div className="two-col">
            <div className="form-group">
              <label htmlFor="firstName" className="form-label">
                First Name
              </label>
              <input
                id="firstName"
                name="firstName"
                className="form-input"
                placeholder="Jane"
                autoComplete="given-name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName" className="form-label">
                Last Name
              </label>
              <input
                id="lastName"
                name="lastName"
                className="form-input"
                placeholder="Doe"
                autoComplete="family-name"
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              id="email"
              name="email"
              className="form-input"
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              id="password"
              name="password"
              className="form-input"
              type="password"
              placeholder="••••••••"
              autoComplete="new-password"
            />
          </div>
          <button className="auth-submit" type="submit">
            Sign Up
          </button>
        </form>

        <div className="auth-divider">
          <span>Already have an account?</span>
        </div>

        <div className="auth-links">
          <Link to="/user/login" className="auth-link">
            Sign In to User Account
          </Link>
        </div>

        <div className="auth-divider">
          <span>Different role?</span>
        </div>

        <div className="auth-links">
          <Link to="/food-partner/register" className="auth-link">
            Register as Food Partner
          </Link>
        </div>

        <div className="auth-links" style={{ marginTop: "1rem" }}>
          <Link
            to="/food-partner/login"
            className="auth-link auth-link-secondary"
          >
            Already a Food Partner? Sign in here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserRegister;
