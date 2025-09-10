import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../styles/variables.css';
import '../../styles/reels.css';
import axios from 'axios';


const Home = () => {

  const [video, setVideo] = useState([])
  const videoRefs = useRef(new Map())
  const containerRef = useRef(null)
  const location = useLocation()

  useEffect(() =>{
    axios.get("http://localhost:3000/api/food", { withCredentials: true })
    .then(response =>{
      console.log(response.data);
      
      setVideo(response.data.foodItems)
    })
  })

  const setVideoRef = (id) => (el) =>{
    if(!el){
      videoRefs.current.delete(id)
      return
    }
    videoRefs.current.set(id, el)
  }

  async function likeVideo(item) {
    const response = await axios.post("http://localhost:3000/api/food/like", { foodId: item._id}, {withCredentials:true})
  
    if(response.data.like){
      console.log("Video liked");
      setVideo((prev)=> prev.map((v) => v._id === item._id ? {...v, likeCount: v.likeCount +1} : v))
    }else{
      console.log("Video unliked");
      setVideo((prev)=> prev.map((v) => v._id === item._id ? {...v, likeCount: v.likeCount - 1} : v))
    }
  }

  async function saveVideo(item) {
    const response = await axios.post("http://localhost:3000/api/food/save", { foodId: item._id}, {withCredentials:true})
  
    if(response.data.save){
      console.log("Video saved");
      setVideo((prev)=> prev.map((v) => v._id === item._id ? {...v, savesCount: v.savesCount +1} : v))
    }else{
      console.log("Video unsaved");
      setVideo((prev)=> prev.map((v) => v._id === item._id ? {...v, savesCount: v.savesCount - 1} : v))
    }
  }

  return (
    <div className="page-root">
      <div ref={containerRef} className="reels-container">
        {video.map((reel) => (
          <div className="reel-item" key={reel._id}>
            <video className="reel-video" ref={setVideoRef(reel._id)} src={reel.video} preload='metadata' muted loop playsInline></video>
            <div className="reel-side-actions">
              <button onClick={()=> likeVideo(item)} className="icon-btn" aria-label="Like">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.001 20.727c-.396 0-.793-.131-1.123-.395C6.27 16.98 4 14.951 4 11.998 4 9.79 5.79 8 7.998 8c1.18 0 2.32.546 3.003 1.413C11.68 8.546 12.82 8 14 8c2.208 0 3.998 1.79 3.998 3.998 0 2.953-2.27 4.982-6.878 8.334-.33.264-.727.395-1.12.395z" fill="#fff"/>
                </svg>
                <span className="icon-count">22</span>
              </button>
              <button className="icon-btn" aria-label="Comments">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 4H4a2 2 0 00-2 2v10a2 2 0 002 2h3v3l4-3h9a2 2 0 002-2V6a2 2 0 00-2-2z" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="icon-count">22</span>
              </button>
              <button onClick={()=> saveVideo(item)} className="icon-btn" aria-label="Bookmark">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 4h12v16l-6-3-6 3V4z" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            <div className="reel-overlay">
              <div className="reel-description">{reel.description}</div>
              <div className="reel-actions">
                <Link to={"/food-partner/"+ reel.foodPartner} className="visit-store-btn">Visit store</Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <nav className="bottom-nav">
        <button className="nav-item" type="button" disabled>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 6h15l-3 9H6l3-9z" stroke="currentColor" strokeWidth="1.8"/>
            <circle cx="9" cy="20" r="1.8" fill="currentColor"/>
            <circle cx="18" cy="20" r="1.8" fill="currentColor"/>
          </svg>
          <span>Cart</span>
        </button>
        <Link to="/" className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 10.5L12 3l9 7.5V21a1 1 0 01-1 1h-5v-6H9v6H4a1 1 0 01-1-1v-10.5z" stroke="currentColor" strokeWidth="1.8"/>
          </svg>
          <span>Home</span>
        </Link>
        <Link to="/saved" className={`nav-item ${location.pathname === '/saved' ? 'active' : ''}`}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 3h12v18l-6-3-6 3V3z" stroke="currentColor" strokeWidth="1.8"/>
          </svg>
          <span>Saved</span>
        </Link>
      </nav>
    </div>
  );
};

export default Home;
