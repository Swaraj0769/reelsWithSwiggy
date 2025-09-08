# Authentication System - Zomato with Reels

## Overview
This authentication system provides separate login and registration pages for both users (customers) and food partners (restaurants). The design is minimal, modern, and responsive with automatic light/dark theme support.

## Features

### 🎨 Design Features
- **Minimal & Clean UI**: Simple, uncluttered design focused on usability
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Automatic Theme**: Automatically adapts to system light/dark mode preferences
- **Centralized Styling**: All components use shared CSS variables for consistent theming
- **Smooth Animations**: Subtle transitions and hover effects for better UX

### 🔐 Authentication Pages

#### User (Customer) Pages
- **User Login** (`/user/login`): Email and password login for customers
- **User Register** (`/user/register`): Registration form with name, email, phone, and password
- **User Forget Password** (`/user/forgot-password`): Password reset request for customers

#### Food Partner (Restaurant) Pages
- **Food Partner Login** (`/food-partner/login`): Business email and password login
- **Food Partner Register** (`/food-partner/register`): Comprehensive registration with business details, cuisine type, and address
- **Food Partner Forget Password** (`/food-partner/forgot-password`): Password reset request for restaurants

### 🎯 Key Features
- **Password Visibility Toggle**: Show/hide password functionality
- **Form Validation**: Client-side validation with visual feedback
- **Loading States**: Loading indicators during form submission
- **Cross-navigation**: Easy switching between user and partner flows with prominent role-switching links
- **Accessibility**: Proper ARIA labels and keyboard navigation support
- **Role-based Navigation**: Clear links to switch between customer and food partner authentication flows

## File Structure

```
src/
├── styles/
│   ├── variables.css          # Centralized CSS variables for theming
│   └── auth.css              # Shared styles for all auth pages
├── components/
│   ├── Home.jsx              # Landing page with role selection
│   └── auth/
│       ├── UserLogin.jsx     # Customer login page
│       ├── UserRegister.jsx  # Customer registration page
│       ├── UserForgetPassword.jsx  # Customer password reset page
│       ├── FoodPartnerLogin.jsx    # Restaurant login page
│       ├── FoodPartnerRegister.jsx # Restaurant registration page
│       └── FoodPartnerForgetPassword.jsx # Restaurant password reset page
└── routes/
    └── AppRoutes.jsx         # Route configuration
```

## Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | Home | Landing page with role selection |
| `/user/login` | UserLogin | Customer login form |
| `/user/register` | UserRegister | Customer registration form |
| `/user/forgot-password` | UserForgetPassword | Customer password reset form |
| `/food-partner/login` | FoodPartnerLogin | Restaurant login form |
| `/food-partner/register` | FoodPartnerRegister | Restaurant registration form |
| `/food-partner/forgot-password` | FoodPartnerForgetPassword | Restaurant password reset form |

## Theme System

The theme system uses CSS custom properties (variables) defined in `src/styles/variables.css`:

- **Automatic Detection**: Uses `@media (prefers-color-scheme: dark)` for system theme detection
- **Manual Override**: Supports `.dark-theme` class for manual theme switching
- **Consistent Colors**: Primary orange theme with proper contrast ratios
- **Smooth Transitions**: All theme changes are animated for better UX

## Usage

1. **Start the development server**:
   ```bash
   npm run dev
   ```

2. **Navigate to the home page** (`http://localhost:5173/`) to see the role selection

3. **Test the authentication flows**:
   - Click "I'm a Customer" to access user login/register
   - Click "I'm a Restaurant" to access partner login/register

## Customization

### Colors
Modify the CSS variables in `src/styles/variables.css` to change the color scheme:

```css
:root {
  --primary-color: #ff6b35;    /* Main brand color */
  --secondary-color: #2c3e50;  /* Secondary color */
  --bg-primary: #ffffff;       /* Main background */
  /* ... other variables */
}
```

### Styling
All authentication pages use the shared `auth.css` file. Modify this file to change:
- Layout and spacing
- Form styling
- Button appearance
- Typography

## Browser Support

- Modern browsers with CSS custom properties support
- Responsive design works on all screen sizes
- Accessibility features supported in modern browsers

## Notes

- Form submission handlers are placeholder functions (no actual API integration)
- Password validation is basic (minimum 8 characters)
- All forms include proper HTML5 validation attributes
- The design follows modern web accessibility guidelines
