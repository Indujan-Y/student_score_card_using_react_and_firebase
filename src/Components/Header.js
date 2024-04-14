import React from 'react'
import './Header.css';

function Header() {
  return (
    <div className='header-div'>
        <div className="header-title">
            <h1>Profile</h1>
        </div>
        <div className="header-logo">
            <img src="https://r2.starryai.com/results/841134791/33d97c58-23a3-45f8-b069-15603acfc642.webp" alt="Profile" />
        </div>
    </div>
  )
}

export default Header