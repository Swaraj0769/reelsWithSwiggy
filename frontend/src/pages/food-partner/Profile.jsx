import React, { useEffect, useState } from "react";
import "../../styles/variables.css";
import "../../styles/food-partner.css";
import { useParams } from "react-router-dom";
import axios from "axios";

const Profile = () => {

  const { id } = useParams()
  const [profile, setProfile] = useState(null)
  const [video, setVideo] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:3000/api/food-partner/${id}`, {withCredentials: true})
    .then(response =>{
        setProfile(response.data.foodPartner)
        setVideo(response.data.foodPartner.video)
    })
  }, [id])
  

  return (
    <div className="profile-container">
      {/* Header Section */}
      <div className="profile-header">
        {/* Business Information */}
        <div className="business-info">
          {/* Profile/Logo Circle */}
          <div className="profile-logo">
            <div className="logo-placeholder">
              {/* Profile picture or logo would go here */}
              <img className="profile-avatar" src="https://images.unsplash.com/photo-1754653099086-3bddb9346d37?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0Nnx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
          </div>
          <div className="info">
            <div title="Business name"   className="info-field">
              <span>{profile?.name}</span>
            </div>
            <div title="Address" className="info-field">
              <span>{profile?.address}</span>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="statistics-section">
          <div className="stat-item">
            <div className="stat-label">Total Meals</div>
            <div className="stat-value">{profile?.totalMeals}</div>
          </div>
          <div className="stat-item">
            <div className="stat-label">Customer Served</div>
            <div className="stat-value">{profile?.customersServed}</div>
          </div>
        </div>
      </div>

      {/* Video Grid Section */}
      <div className="video-grid">
      {video.map((v) => (
                    <div key={v.id} className="video-placeholder">
                        {/* Placeholder tile; replace with <video> or <img> as needed */}


                        <video
                            
                            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                            src={v.video} muted ></video>


                    </div>
                ))}
      </div>
    </div>
  );
};

export default Profile;
