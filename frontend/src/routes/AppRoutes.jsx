import React from 'react'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '../pages/general/Home'
import Saved from '../pages/general/Saved'
import UserLogin from '../pages/auth/UserLogin'
import UserRegister from '../pages/auth/UserRegister'
import UserForgetPassword from '../pages/auth/UserForgetPassword'
import FoodPartnerLogin from '../pages/auth/FoodPartnerLogin'
import FoodPartnerRegister from '../pages/auth/FoodPartnerRegister'
import FoodPartnerForgetPassword from '../pages/auth/FoodPartnerForgetPassword'
import CreateFood from '../pages/food-partner/CreateFood'
import Profile from '../pages/food-partner/Profile'

const AppRoutes = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/saved" element={<Saved />} />
            <Route path="/user/login" element={<UserLogin />} />
            <Route path="/user/register" element={<UserRegister />} />
            <Route path="/user/forgot-password" element={<UserForgetPassword />} />
            <Route path="/food-partner/login" element={<FoodPartnerLogin />} />
            <Route path="/food-partner/register" element={<FoodPartnerRegister />} />
            <Route path="/food-partner/forgot-password" element={<FoodPartnerForgetPassword />} />
            <Route path='/create-food' element={<CreateFood />} />
            <Route path='/food-partner/:profile' element={<Profile/>} />
        </Routes>
    </Router>
  )
}

export default AppRoutes