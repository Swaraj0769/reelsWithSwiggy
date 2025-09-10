import React from 'react'
import '../../styles/variables.css'
import '../../styles/food-partner.css'

const Profile = () => {
  return (
    <div className="profile-container">
      {/* Header Section */}
      <div className="profile-header">
        {/* Profile/Logo Circle */}
        <div className="profile-logo">
          <div className="logo-placeholder">
            {/* Profile picture or logo would go here */}
          </div>
        </div>
        
        {/* Business Information */}
        <div className="business-info">
          <div className="info-field">
            <span>Business Name</span>
          </div>
          <div className="info-field">
            <span>Address</span>
          </div>
        </div>
        
        {/* Statistics Section */}
        <div className="statistics-section">
          <div className="stat-item">
            <div className="stat-label">Total Meals</div>
            <div className="stat-value">43</div>
          </div>
          <div className="stat-item">
            <div className="stat-label">Customer Served</div>
            <div className="stat-value">15K</div>
          </div>
        </div>
      </div>
      
      {/* Video Grid Section */}
      <div className="video-grid">
        {Array.from({ length: 9 }, (_, index) => (
          <div key={index} className="video-placeholder">
            <span>Video</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Profile