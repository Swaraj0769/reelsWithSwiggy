import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../../styles/reels.css'

const Saved = () => {
  const location = useLocation()

  return (
    <div className="page-root" style={{background:'#000', color:'#fff'}}>
      <div style={{padding:'16px'}}>
        <h2 style={{margin:'8px 0'}}>Saved</h2>
        <p style={{opacity:.8}}>Your bookmarked foods and reels will appear here.</p>
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
  )
}

export default Saved


