import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/variables.css';
import '../../styles/reels.css';
import axios from 'axios';
// import response from '../../../../backend/src/app';


const Home = () => {

  const [video, setVideo] = useState([])
  const videoRefs = useRef(new Map())
  const containerRef = useRef(null)

  useEffect(() =>{
    axios.get("http://localhost:3000/api/food", { withCredentials: true })
    .then(response =>{
      setVideo(response.data.foodItems)
    })
  })

  const setVideoRef = (id) = (el) =>{
    if(!el){
      videoRefs.current.delete(id)
      return
    }
    videoRefs.current.set(id, el)
  }

  return (
    <div ref={containerRef} className="reels-container">
      {video.map((reel) => (
        <div className="reel-item" key={reel.id}>
          <video className="reel-video" ref={setVideoRef(reel._id)} src={reel.video} preload='metadata' muted loop playsInline></video>
          <div className="reel-overlay">
            <div className="reel-description">{reel.description}</div>
            <div className="reel-actions">
              <Link to={"/food-partner/"+ reel.foodPartner} className="visit-store-btn">Visit store console.log(reel.foodPartner);
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
