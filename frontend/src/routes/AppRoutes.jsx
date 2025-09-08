import React from 'react'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '../components/general/Home'
import UserLogin from '../components/auth/UserLogin'
import UserRegister from '../components/auth/UserRegister'
import UserForgetPassword from '../components/auth/UserForgetPassword'
import FoodPartnerLogin from '../components/auth/FoodPartnerLogin'
import FoodPartnerRegister from '../components/auth/FoodPartnerRegister'
import FoodPartnerForgetPassword from '../components/auth/FoodPartnerForgetPassword'

const AppRoutes = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user/login" element={<UserLogin />} />
            <Route path="/user/register" element={<UserRegister />} />
            <Route path="/user/forgot-password" element={<UserForgetPassword />} />
            <Route path="/food-partner/login" element={<FoodPartnerLogin />} />
            <Route path="/food-partner/register" element={<FoodPartnerRegister />} />
            <Route path="/food-partner/forgot-password" element={<FoodPartnerForgetPassword />} />
        </Routes>
    </Router>
  )
}

export default AppRoutes